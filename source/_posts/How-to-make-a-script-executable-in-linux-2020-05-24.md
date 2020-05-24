---
title: How to make a script executable in linux
tags:
  - How to
  - Linux
  - Pop!_OS
  - Terminal
icon: fab fa-linux
date: 2020-05-24 16:27:50
---


During our day to day development, we make some scripts to ease our development.

For example, a `deploy-to-server.sh` script. I have created one that consists of all the commands I execute in a shell in order to deploy to a server. ^\_^

When we make such script file, we also have to make it a runnable or executable to be precise.

We can do that by using the following command:

```sh
$ chmod +x ./deploy-to-server.sh
```

> **Tip:** You can also mark a file not executable by using `-x`.

It is simple to remember as we are adding or removing the xcuteable state. \O/
