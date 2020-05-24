---
title: 'Mosquitto: was expecting double-quote to start field name'
tags:
  - Java
  - Mosquitto
  - MQTT
  - JSON
icon: fab fa-java
date: 2020-05-24 16:59:50
---


I recently encountered the following exception in my Spring Boot Rest application when I published a MQTT message for a topic.

I was testing the MQTT subscribers whether they get the published message or not.

> org.codehaus.jackson.JsonParseException:
> Unexpected character ('s' (code 110)): was expecting double-quote to start field name

I published the below message:

```sh
$ mosquitto_pub -t "/v1/ashkeys/site" -m "{site:\"ashokma.com\"}"
```

After some googling I found out that field names should be double-quoted.

I know it was obvious from the exception itself. Dumb me >\_<

Now the following works just fine with the subscribers.

```sh
$ mosquitto_pub -t "/v1/ashkeys/site" -m "{"site":\"ashokma.com\"}"
```

> **P.S:** The MQTT subscribers in turn use the jackson parser which adheres JSON specification. JSON specification demands that field names in a JSON should be double-quoted.
