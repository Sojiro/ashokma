---
title: How to check the logs of system service
tags:
  - How to
  - Linux
  - Pop!_OS
icon: fab fa-linux
date: 2020-02-29 14:59:41
---


As the [ `systemctl` ][1] is used to start and stop services, [ `journalctrl` ][2] keeps the logs of those services.

## System Control

``` sh
$ systemctl status ashokma.com 
```

## Journal Control

``` sh
$ journalctl -u ashokma.com
```

**Tip:** Use the `-f` to follow the logs as the services run.

``` sh
$ journalctl -u ashokma.com -f
```

[1]: //wiki.archlinux.org/index.php/systemd
[2]: //wiki.archlinux.org/index.php/Systemd/Journal

