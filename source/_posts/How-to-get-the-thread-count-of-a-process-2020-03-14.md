---
title: How to get the thread count of a process
tags:
  - How to
  - Linux
  - Pop!_OS
icon: fab fa-linux
date: 2020-03-14 15:25:17
---


I recently had to check the number of threads being created by a process, for instance, a java application.

We can do the same using the following:

```sh
$ ps -o thcount <pid>
```

**Tip:** Use `watch` to monitor the same every 2 seconds.

```sh
$ watch ps -o thcount <pid>
```