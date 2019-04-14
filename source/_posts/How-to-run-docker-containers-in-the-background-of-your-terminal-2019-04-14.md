---
title: How to run docker containers in the background of your terminal
tags:
  - Blog
  - How to
  - Docker
  - terminal
  - Linux
icon: fab fa-docker
date: 2019-04-14 16:05:54
---


When we create a container from an image, by default, it attaches the container to the terminal. Many cases, we do not want that to happen for we have other commands to execute and do not bother to open new terminals. >\_O

In that case, running a docker container in detached mode comes handy.

## The default attached mode:

To create and run a container, we use the following command:

```
    $ docker run eclipse-mosquitto
    1555249625: mosquitto version 1.5.8 starting
    1555249625: Config loaded from /mosquitto/config/mosquitto.conf.
    1555249625: Opening ipv4 listen socket on port 1883.
    1555249625: Opening ipv6 listen socket on port 1883.
```

The above command creates a container with generated name and attaches it to you terminal. When we press `CTRL + C`, it actually stops the container. But, we do not want that!

## Detached Mode:

For that we have an option to be supplied like this:

```
    $ docker run -d eclipse-mosquitto
    09bb7465c787fc1ff2f4177a8d0dd1d5c9751b3192583df5c177968dcacb17a2
```

Now it does the same job and instead of attaching the container to the terminal it only logs the container id.

> How do we know that our container was created successfully and running?
> In short, **we do not!**

## Check/tail the container logs:

To we the container's logs:

```
    $ docker logs 09bb7465c787fc1ff2f4177a8d0dd1d5c9751b3192583df5c177968dcacb17a2
    1555249810: mosquitto version 1.5.8 starting
    1555249810: Config loaded from /mosquitto/config/mosquitto.conf.
    1555249810: Opening ipv4 listen socket on port 1883.
    1555249810: Opening ipv6 listen socket on port 1883.
```

> **Tip:** Use `docker ps` to list out the running containers, in case you want to know the name of your running containers. It is better to use `-a` option to list out all the containers. On error cases, the container might not be running.

## Bonus: Attaching the container back:

Just in case if you want to attach a container back again, it is good to know the attach mode.

```
    $ docker attach 09bb7465c787fc1ff2f4177a8d0dd1d5c9751b3192583df5c177968dcacb17a2
    _
```

> Remember that pressing `CTRL + C` terminates the container.
