---
title: How to publish and subscribe to a topic in mosquitto
tags:
  - How To
  - Blog
  - Docker
  - Mosquitto
  - MQTT
  - Pop!_OS
  - Linux
icon: fas fa-terminal
date: 2019-04-13 15:19:32
---


In recent [post](/2019/04/13/Run-eclipse-mosquitto-as-docker-container/), we learned **how to run mosquitto as a docker container**. Now, we will learn about how to carry out messages using its publish/subscribe model.

In order to publish/subscribe to a topic in mosquitto, we need `mosquitto-clients` to be installed in our machine. We can do it by the following command:

```
    $ sudo apt-get install mosquitto-clients
```

This will make both `mosquitto_pub` and `mosquitto_sub` available to use.

## Publish message under a topic

In MQTT protocol, messages should be published and subscribed under respective topic names. For instance, if we are going to publish a message related to weather, it should be published like the following: `/topic/weather/nl/utrecht`.

Lets do the same, using `mosquitto_pub`:

```
    $ mosquitto_pub -t '/topic/weather/nl/utrecht' -m '{ "city":"Utrecht", "temp": "20" }'
    $ mosquitto_pub -t '/topic/weather/nl/rotterdam' -m '{ "city":"Rotterdam", "temp": "30" }'
```

- `-t` -- The topic under which we publish a message.
- `-m` -- The message we want to publish.

`mosquitto_pub` publishes the messages under the specified topic via default port `1883` of `localhost`.

> **Tip:** We can publish anything as long as we keep it as a string. The above is just a string representation of a `Weather` JSON object. People subscribe to it, can parse it using `JSON.parse()` to use as a JSON.

## Subscribe to a topic

Since people publishing already, lets subscribe to a topic and hear the gossip O_o

```
    $ mosquitto_sub -t '/topic/weather/nl/utrecht'
    { "city":"Utrecht", "temp": "20" }
```

If there are messages being published, you can see it being logged in your terminal.

> **Tip:** We can subscribe to all the topics by specifying the `-t` option as the following: `mosquitto_sub -t '#'`. However, it is advised to subscribe to as specifici topic as possible like `mosquitto_sub -t '/topic/weather/nl/#'` to subscribe to the entire country's weather.

```
    $ mosquitto_sub -t '/topic/weather/nl/#'
    { "city":"Utrecht", "temp": "20" }
    { "city":"Rotterdam", "temp": "30" }
```
