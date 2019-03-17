---
title: 'Linux: How to see the installed OS version from terminal'
tags:
  - Blog
  - Linux
  - Pop!_OS
icon: fab fa-linux
date: 2019-03-17 16:49:11
---


## Just open the os-release file

It is nice to know to see the OS version installed in one's linux machine. This might come in handy to check the version installed in a running docker container or other virtual machines.

To check the OS version and configs, just run the following command:

```
    $ cat /etc/os-release
```

This should output something like:

```
    NAME="Pop!_OS"
    VERSION="18.10"
    ID=ubuntu
    ID_LIKE=debian
    PRETTY_NAME="Pop!_OS 18.10"
    VERSION_ID="18.10"
    HOME_URL="https://system76.com/pop"
    SUPPORT_URL="http://support.system76.com"
    BUG_REPORT_URL="https://github.com/pop-os/pop/issues"
    PRIVACY_POLICY_URL="https://system76.com/privacy"
    VERSION_CODENAME=cosmic
    UBUNTU_CODENAME=cosmic
```

Since I have a [System76 Galago Pro](/2019/02/20/My-new-laptop-System76-Galago-Pro/), I see the above configuration.

> The information you see always depends on your machine's manufacturer. However, the properties are same across linux distributions.

## Others: 

### 1. `lsb_release` command

The lsb_release command gives LSB (Linux Standard Base) and distribution-specific information on the CLI. The usage is:

```
    $ lsb_release -a
```

outputs something like:

```
    No LSB modules are available.
    Distributor ID:	Ubuntu
    Description:	Pop!_OS 18.10
    Release:	18.10
    Codename:	cosmic
```
As I chose the Ubuntu flavoured [System76 Pop!_OS](//system76.com/pop), I do not have any LSB modules to be shown.

### 2. `hostnamectl` command

Use hostnamectl command to **query and change** the system hostname and related settings. Just type the following command to check OS name and Linux kernel version:

```
    $ hostnamectl status
```
or just

```
    $ hostnamectl
```

outputs something like:

```
   Static hostname: pop-os
         Icon name: computer-laptop
           Chassis: laptop
        Machine ID: 828e0ab12c145d632919eeed5c6ae1a7
           Boot ID: f4b0a67a325a4aa8b1dfceee0a4aadcc
  Operating System: Pop!_OS 18.10
            Kernel: Linux 4.18.0-16-generic
      Architecture: x86-64

```

### 3. `uname` command

Just print Linux kernel version, run:

```
    $ uname -r

    4.18.0-16-generic
```

to see all available options:

```
    $ uname -a

    Linux 
    pop-os 
    4.18.0-16-generic 
    #17pop0-Ubuntu 
    SMP 
    Fri Mar 8 17:52:57 UTC 2019 (last updated timestamp)
    x86_64 x86_64 x86_64 GNU/Linux
```