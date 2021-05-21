---
title: How to install postgres client in linux
tags:
  - Postgres
  - Linux
  - Pop!_OS
icon: fas fa-database
date: 2021-01-06 11:44:33
---


Postgres client is handy for a lot of operations you could do against a postgres db, be it local or remote.

Let's see how we can install one for linux.

## Installing postgres client

```sh
$ sudo apt-get install postgresql-client
```

This installs `psql` bin with other utilities such as, `pg_dump`.

## Verifying the installation

```sh
$ psql --version
psql (PostgreSQL) 12.5 (Ubuntu 12.5-0ubuntu0.20.10.1)
```

## Connecting to a database

```sh
$ psql -h ashokma.com -U ashkeys -d ashkeys
```

In the above statement, we are trying to make a connection to the database named `ashkeys`, under the username `ashkeys`, against the host `ashokma.com`.
