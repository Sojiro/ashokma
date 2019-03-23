---
title: How to change port mapping of a running docker container
tags:
  - Blog
  - How To
  - Docker
  - Pop!_OS
  - Linux
icon: fab fa-docker
date: 2019-03-23 23:46:44
---


Sometimes, we might have a situation where we have to change the port mappings of a running docker container. So, it is better to know our options. Lets take a look at it with an example scenario where our [postgreSQL container](/2019/03/17/Run-Postgres-as-Docker-container/) was mapped to as following:

```
    $ docker ps

    CONTAINER ID        IMAGE              PORTS                    NAMES
    85261c36bf0e        postgres           0.0.0.0:5433->5432/tcp   pg-docker
```

I was looking for a solution where I can just edit the *localhost* mapping from *5433* to *5432* (which is also the default for postgreSQL).

Anyways, Now we know what we need, let us take a look at the steps to make it happen.

## Stop the container

Since the container is busy bound to port *5433* which we want to change, we have to stop the container first as following:

```
    $ docker stop pg-docker

    pg-docker
```

## Stop the docker daemon

Docker daemon is the service which keeps tracks of containers and their configurations in short. As we are going to edit container specific configuration file, we need the daemon to be up and running after our changes. Now, stop the docker daemon:

```
    $ sudo systemctl stop docker
```

## Edit the container's *hostconfig.json*

Docker keeps container configurations in a file called *hostconfig.json*. You can find the same file using the following pattern:

*/var/lib/docker/containers/**<container_full_hash_id>**/hostconfig.json*

> **Tip:** Use the following command to quickly get the full hash id of the container: (ofcourse, docker daemon has to be running)
> `$ docker container inspect pg-docker | grep Id`
>  "Id": "85261c36bf0e94520012b508f67c7c0c86c0d52953a88f3cad7e06da77b225a0",

Now, we know where to find *hostconfig.json* file. In order to update the host mapping, we must edit the file and change the **"HostPort":"5433"** to our desired port mappings.

Once we are done editing the file, lets start the docker daemon and the container respectively.

```
    $ sudo systemctl start docker
    
    $ docker start pg-docker
    pg-docker
```

If we take a look at our running docker container now, we see the edited port mappings.

```
    $ docker ps

    CONTAINER ID        IMAGE              PORTS                    NAMES
    85261c36bf0e        postgres           0.0.0.0:5432->5432/tcp   pg-docker
```

Yay \O/

We have just updated our port mappings keeping all our container configurations!