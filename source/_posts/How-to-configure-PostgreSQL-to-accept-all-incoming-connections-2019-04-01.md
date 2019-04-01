---
title: How to configure PostgreSQL to accept all incoming connections
tags:
  - Blog
  - How To
  - Postgres
  - Docker
icon: fab fa-docker
date: 2019-04-01 22:14:12
---


Sometimes, you might want to connect to your test or acceptance environment databases. Mostly for we might want to test our local changes with real-time data instead of mock data. Or simply you do not want to set a local database up. ^\_^

For these cases and people who are interested in connecting their application to non-development environment database, we are going to look at how to enable postgres to listen to all incoming connections.

## Edit the `postgresql.conf` file:

We have to edit the **CONNECTIONS AND AUTHENTICATION** section in **`postgresql.conf`** file as follows:
You will find this file under your volume directory. Since I [run postgresql as docker container](/2019/03/17/Run-Postgres-as-Docker-container/), it is in `/home/ashokma/docker/volumes/postgres/postgresql.conf`.

```
    #------------------------------------------------------------------------------
    # CONNECTIONS AND AUTHENTICATION
    #------------------------------------------------------------------------------

    # - Connection Settings -

    listen_addresses = '*'
                                            # comma-separated list of addresses;
                                            # defaults to 'localhost'; use '*' for all
                                            # (change requires restart)
```

Once restarted, we can expect to listen to all ips. Yes, it will listen and you get proper not authenticated exception on trying to connect to database instead of a confusing connection refused >\_O

> Tip: It is okay to listen to all addresses if you are sure you are not expecting a DDoS to it. At least, in this way people know the DB is up but they do not have permissions!

## Edit the `pg_hba.conf` file: (HBA stands for host-based authentication)

In order to configure the enable the authentications for specific or to all users as a temporary, we have to edit the `pg_hba.conf` file as follows:

```
    # TYPE  DATABASE   USER   ADDRESS   METHOD

    # "local" is for Unix domain socket connections only
    local   all        all             trust
    host    all        all    all      md5
```

Once restarted, anyone in the network can access the database with valid credentials like

```
    $ psql -h ashokma.com -U ashkeys
    Password for user ashkeys:
```

> Tip: `postgres` has very good documentation. To know more about the options in `pg_hba.conf`, take a look at [postgresql.org](//www.postgresql.org/docs/9.1/auth-pg-hba-conf.html)
