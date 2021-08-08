---
title: >-
  Fix: org.springframework.beans.BeanUtils: ignore null values on copying
  properties
tags:
  - java
  - util
  - fix
  - spring
icon: fas fa-seedling
date: 2021-08-08 23:27:24
---


I have recently encountered a situation where I had to copy properties between two domain objects like DTO vs VO.

Even though `BeanUtils` was helpful in most cases via `copyProperties`, in a particular case, I needed it to ignore the properties with null values getting copied and overwriting the values in the target.

I came across this implementation of the said method and understood it fully in order to make the change I needed.

```java
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.beans.FatalBeanException;
import org.springframework.util.Assert;

import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class BeanUtils extends org.springframework.beans.BeanUtils {

    public static void copyNonNullProperties(Object source, Object target) {
        Assert.notNull(source, "Source must not be null");
        Assert.notNull(target, "Target must not be null");
        Class<?> actualEditable = target.getClass();
        PropertyDescriptor[] targetPds = getPropertyDescriptors(actualEditable);
        for (PropertyDescriptor targetPd : targetPds) {
            if (targetPd.getWriteMethod() != null) {
                PropertyDescriptor sourcePd = getPropertyDescriptor(source.getClass(), targetPd.getName());
                if (sourcePd != null && sourcePd.getReadMethod() != null) {
                    try {
                        Method readMethod = sourcePd.getReadMethod();
                        if (!Modifier.isPublic(readMethod.getDeclaringClass()
                                                         .getModifiers())) {
                            readMethod.setAccessible(true);
                        }
                        Object value = readMethod.invoke(source);
                        if (value != null) {  // Ignore properties with null values.
                            Method writeMethod = targetPd.getWriteMethod();
                            if (!Modifier.isPublic(writeMethod.getDeclaringClass()
                                                              .getModifiers())) {
                                writeMethod.setAccessible(true);
                            }
                            writeMethod.invoke(target, value);
                        }
                    } catch (Throwable ex) {
                        throw new FatalBeanException("Could not copy properties from source to target", ex);
                    }
                }
            }
        }
    }
}
```

To make it part of the `BeanUtils`, I have extended the said util class and added the above `copyNonNullProperties` method in our project. ^_^

Enjoy \O/