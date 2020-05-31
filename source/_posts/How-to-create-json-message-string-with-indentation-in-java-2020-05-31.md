---
title: How to create json message string with indentation in java
tags:
    - How to
    - Java
    - JSON
icon: fab fa-java
date: 2020-05-31 22:53:29
---

Recently I came across an ugly string concatenation in one of our legacy codebase or the one I did not came across for a long time.

The string concatenation was there to construct as JSON string. The JSON string was then parsed as a message template for MQTT topics.

At first sight, I knew it gotta go and something bit more cleaner piece of code should replace it. So I was looking for options to do a better job. Then I found something below:

## `org.json` library

### Maven

```xml
<dependency>
	<groupId>org.json</groupId>
	<artifactId>json</artifactId>
	<version>20090211</version>
</dependency>
```

### Gradle

```gradle
compile "org.json:json:20090211"
```

Using the `JSONObject` of this library I was able to replace the ugly string concatenation with something like below:

## `JSONObject` in action

```java
new JSONObject()
   .put("name", "Ashok M A")
   .put("website", "https://ashokma.com")
   .put("address", new JSONObject()
	.put("houseNumber", "1234")
   	.put("street", "Woonboulevard")
   	.put("city", "Utrecht")
   	.put("country", "The Netherlands")
   )
   .put("skills", new JSONArray(Arrays.asList("Angular", "Spring Boot")))
   .toString(4); // indentation
```

The above beautiful piece of code gives us the below JSON string.

```json
{
    "address": {
        "city": "Utrecht",
        "country": "The Netherlands",
        "houseNumber": "1234",
        "street": "Woonboulevard"
    },
    "name": "Ashok M A",
    "skills": ["Angular", "Spring Boot"],
    "website": "https://ashokma.com"
}
```

> **Tip:** Yes, you can also construct by nesting arrays into objects and vice versa. \O/

_The keys are sorted by default. In JSON format that does no harm._

I do not have to show you the ugly concatenation to sell the point here but this `org.json` lib itself does pretty good job and I am sure you would agree as well.
