---
title: Run eclipse-mosquitto as docker container
tags:
  - Tutorial
  - Setup
  - Docker
  - Mosquitto
  - MQTT
icon: fab fa-docker
date: 2019-04-13 15:02:16
---


## Eclipse Mosquitto - A quick intro:

Eclipse Mosquitto is an open source (EPL/EDL licensed) message broker that implements the MQTT protocol versions 3.1 and 3.1.1. Mosquitto is lightweight and is suitable for use on all devices from low power single board computers to full servers.

The MQTT protocol provides a lightweight method of carrying out messaging using a publish/subscribe model. This makes it suitable for Internet of Things messaging such as with low power sensors or mobile devices such as phones, embedded computers or microcontrollers.

## Pull the docker image.

```
    $ docker pull eclipse-mosquitto
```

This is will pull the latest docker image of `eclipse-mosquitto`.

Once the necessary image has been downloaded, you can verify it using,

```
    $ docker images
```

> **Tip:** Read the [official docker documentation](//docs.docker.com/samples/library/eclipse-mosquitto/) to understand more in detail.

## Run mosquitto as container

Now, we can run mosquitto as a docker container by running the following command:

```
    $ docker run --name=mosquitto -p 1883:1883 -p 9001:9001 -d eclipse-mosquitto
```

What are we doing here:

- `run`
  creates and runs the newly created container with options specified.
- `--name`
  name of the container.
- `-p`
  Maps the container ports to `localhost` ports. Each mapping should be specified with `-p`.
- `-d`
  Runs the container in detached mode. By default, docker attaches the container. It is common to run in detached mode like running it in the background.
- `eclipse-mosquiito`
  Last one is the image from which we want to create the docker container.

## A quick deep down about the port mappings

### Via MQTT Protocol:

As we mentioned earlier, mosquitto is used to communicate messages between two machines/apps. Obviously, they both should agree on a protocol to be used. As mosquitto is an implementation of MQTT protocol, it does communication by sending MQTT packets through its default port mapping `1883`. We can subscribe/publish a topic via this port.

- MQTT
  -- Establish TCP connection
  -- Now we're talking MQTT
  -- Send MQTT packets as defined by standard (publish/sub/unsub) or disconnect

### Via WebSockets Protocol:

In addition to MQTT, mosquitto also comes up with websockets protocol so that our web browser based applications can do two-way communication with other devices/machines/apps. This can be mapped and exposed via `9001` port.

- Websocket
  -- Establish TCP connection
  -- Send HTTP request with `Upgrade: websocket` header and other preparation
  -- Except `101 Switching Protocols` response
  -- Now we're talking Websocket, either side can send messages as defined by standard

> **Tip:** Refer the [standard document](//tools.ietf.org/html/rfc6455) to learn more about the websocket protocol
