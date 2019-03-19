---
title: Run Postgres as Docker container
date: 2019-03-17 13:13:03
tags: [Tutorial, Setup, Docker, Postgres]
icon: fab fa-docker
---

## PostgreSQL -  An Introduction:

PostgreSQL is a powerful, open source object-relational database system. It has more than **15 years of active development** and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness.

Just a quick overview for one should use the PostgreSQL:

 - PostgreSQL is developed by the PostgreSQL Global Development Group, a diverse group of multiple companies and individual contributors. 

 - It’s free and open-source software. PostgreSQL is released under the PostgreSQL license, a liberal Open Source license, similar to the BSD or MIT licenses.

 - PostgreSQL is largely SQL compliant.

 - PostgreSQL tackles concurrency efficiently with its MVCC implementation, which achieves very high levels of concurrency.

 - PostgreSQL supports JSON and other NoSQL features like native XML support and key-value pairs with HSTORE. It also supports indexing JSON data for faster access.

 - PostgreSQL supports a wide variety of programing languages including: C/C++, Java, JavaScript, .Net, R, Perl, Python, Ruby, Tcl and others; it’s even possible to run user-supplied code in separate processes (i.e. running as background workers).

Hope this helps of your wonder why it is better than other DBs out there like MySQL.

Now, Lets see how we can run it as docker container.

## Pull the docker image.

```
   $ docker pull postgres
```

This will pull the latest stable release of PostgreSQL with the following OS release:

```
    PRETTY_NAME="Debian GNU/Linux 9 (stretch)"
    NAME="Debian GNU/Linux"
    VERSION_ID="9"
    VERSION="9 (stretch)"
    ID=debian
    HOME_URL="https://www.debian.org/"
    SUPPORT_URL="https://www.debian.org/support"
    BUG_REPORT_URL="https://bugs.debian.org/"
```

which makes the image size to around **312 MB**.

> Prefer [`alpine`](//hub.docker.com/_/postgres#image-variants) versions to reduce the image size to lesser than **30 MB**.

```
    $ docker search alpine-postgres
```

will show you multiple alpine versions out there.

Once the necessary image has been downloaded, you can verify it using,

```
    $ docker images
```

## Create a volume directory

Volumes are easy and encouraged way to mount the data generated and used by the containers.

Let's create a local directory to mount as [volume](//docs.docker.com/storage/volumes/)

```
    $ mkdir -p $HOME/docker/volumes/postgres
```

> **Tip:** `-p` option creates the subdirectories if necessary.

## Run Postgres as container

We can do multiple things (create/run/mount) all at once in the following:

```
    $ docker run --name ashkeys-docker \
        -e POSTGRES_PASSWORD=ashkeys \
        -d -p 5432:5432 \
        -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  ashkeys_db
```
What are we doing here:

 - `run`
  creates and runs the newly created container with options in case specified.
 - `--name`
  name of the container.
 - `-e`
  Exposes environment variable `POSTGRES_PASSWORD` with `docker` as value. There are others too namely `POSTGRES_USER` and `POSTGRES_DB`. `POSTGRES_USER` sets the superuser name. If not provided, the superuser name defaults to postgres.
 - `-d`
  Runs the container in detached mode. By default, docker attaches the container. It is common to run in detached mode like running it in the background.
 - `-p`
  Bind port 5432 on `localhost` to port 5432 within the container.
 - `-v`
  Mount $HOME/docker/volumes/postgres on the host machine to the container side volume path /var/lib/postgresql/data created inside the container. This ensures that postgres data persists even after the container is removed.
 - `ashkeys_db`
  Last one is the database we want to create along with the docker run command.

## Connecting to our newly created postgres database

Since our localhost port 5432 is bound to postgres container port, we can directly run our CRUD operations to `localhost:5432`. Lets connect to the database.

```
    $ psql -h localhost -U postgres -d ashkeys_db
```

> You might have to install the `psql` as global dependencies using [`npm`](/2019/02/18/install-nodejs-and-npm-pop-os/).
