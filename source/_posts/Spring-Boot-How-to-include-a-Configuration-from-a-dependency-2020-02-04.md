---
title: 'Spring Boot: How to include a @Configuration from a dependency'
tags:
  - How To
  - Spring Boot
  - Java
icon: fab fa-java
date: 2020-02-04 12:16:11
---


As a Full Stack Web Developer, I developer features as a whole. A complete vertical development so to say. As you can see from my [stack][1], I use Spring Boot with Java for BE mostly.

I have recently encountered a situation where I need to include only one `@Configuration` of a library.

As per the [docs][2], we can do using `@Import` annotation.

If following is the library config that I want to import,

```java
@Configuration
public class SharedLibConfig {
    @Bean
    public SharedBean sharedBean() {
        return new SharedBean(...);
    }
}
```

then we just have to import this config in our configurations as follows:

```java
@Configuration
@Import({ SharedLibConfig.class, AnotherSharedLibConfig.class })
public class AppConfig extends ConfigurationSupport {
    // @Bean methods here we can reference @Bean methods in SharedLibConfig or AnotherSharedLibConfig.
}
```
