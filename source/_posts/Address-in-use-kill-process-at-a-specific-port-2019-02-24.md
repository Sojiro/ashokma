---
title: EADDRINUSE - kill process at a specific port
date: 2019-02-24 13:29:56
tags: [Blog, Linux, Pop!_OS, Terminal Usage]
icon: fab fa-linux
---

It happens sometimes that an address in use is not released. For example, when we restart our IDE after an update or accidentally close the IDE without shutting down the server. In these cases, we encounter the below error:

```
    Error: listen EADDRINUSE 0.0.0.0:4000
```

saying address already in use. In linux, there is a utility to release the port by killing the process that is using it.

```
    $ fuser -k 4000/tcp
    4000/tcp:             9032
```

It finds the user by the `4000` port with protocol `tcp`, kills it and outputs the `pid` (process id). If you do not supply the `-k`, it simply outputs the `pid`.
