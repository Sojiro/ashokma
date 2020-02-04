---
title: How to make terminal to always ask for password
tags:
  - How to
  - Terminal
  - Pop!_OS
  - Linux
icon: fas fa-terminal
date: 2019-12-22 20:09:04
---


By default, terminal stores the password for 15 mins to ease the user in case of continuous `sudo` activities such as installation or upgrades. In order to override these defaults, we must edit the `/etc/sudoers.tmp` as follows:

```sh
# This file MUST be edited with the 'visudo' command as root.
#
# Please consider adding local content in /etc/sudoers.d/ instead of
# directly modifying this file.
#
# See the man page for details on how to write a sudoers file.
#
Defaults        env_reset,timestamp_timeout=0
```

The `timestamp_timeout=0` means that terminal will always ask for password when we do actions with `sudo`.

> **Caution:** Mind that it is a timer. So, when we place values lesser than 0 like -1, it means that the password will be asked once and never again even after reboot.

As the comment suggests, always edit the file using `sudo visudo` command. This makes sure that others do not edit the file while you are. It is safer that way! \O/

> **Tip:** `sudoers.d` is powerful when it comes to configuring user permissions down to what commands and programs one can execute and what not. O_O
