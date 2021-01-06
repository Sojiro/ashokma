---
title: How to list the number of threads ran by a process in linux
tags:
  - Linux
  - Pop!_OS
  - Terminal
icon: fas fa-terminal
date: 2021-01-06 14:07:47
---


Recently I have noticed that one of our applications crossed the allowed threshold for creating new threads in a test server. After a talk with Ops guy, we gotta to know that it had around 5k+ (O_O) threads running already for no reason. Probably a memory leak that we can have it for another day.

For now, let me share you the way to find the process and its threads in linux.

## Know the process id.

First of all, we need the process id in order to list out the threads being created by said process.

```sh
$ top -H -u ashokma

PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+  	COMMAND
3173 ashokma   20   0 2720980 429424  99644 S   5.6   2.7   4:49.63 	Compositor
3166 ashokma   20   0 2720980 429424  99644 S   4.6   2.7   1:53.81 	teams
```

Let's take the process **teams** for instance. It's id is `3166`.

## List the number of threads

Using the following command we can list out the number of threads.

```sh
$ ps -T -p 3166
    PID    SPID TTY          TIME CMD
   3166    3166 ?        00:02:02 teams
   3166    3168 ?        00:00:00 ThreadPoolServi
   3166    3170 ?        00:01:47 Chrome_ChildIOT
   3166    3171 ?        00:00:00 GpuMemoryThread
   3166    3173 ?        00:05:17 Compositor
   3166    3174 ?        00:00:00 ThreadPoolSingl
   3166    3175 ?        00:00:01 CompositorTileW
   3166    3176 ?        00:00:01 CompositorTileW
   3166    3177 ?        00:00:01 CompositorTileW
   3166    3178 ?        00:00:01 CompositorTileW
   3166    3179 ?        00:00:00 CompositorTileW
   3166    3180 ?        00:00:00 teams
   3166    3184 ?        00:00:00 Watchdog
   3166    3199 ?        00:00:01 SharedWorker th
   3166    3205 ?        00:00:00 DedicatedWorker
   3166    3328 ?        00:00:00 Media
   3166   71782 ?        00:00:00 ThreadPoolForeg
   3166   71915 ?        00:00:00 ThreadPoolForeg
   3166   71916 ?        00:00:00 ThreadPoolForeg
   3166   71917 ?        00:00:00 ThreadPoolForeg
   3166   71918 ?        00:00:00 ThreadPoolForeg
   3166   71919 ?        00:00:00 ThreadPoolForeg
   3166   71920 ?        00:00:00 ThreadPoolForeg

```

**Pro Tip:** To quickly know the number of threads just chain the above command with wordcount (`wc`) as follows:

```sh
$ ps -T -p 3166 | wc -l
21
# This varies realtime as the threads are being closed and created over the time.
```
