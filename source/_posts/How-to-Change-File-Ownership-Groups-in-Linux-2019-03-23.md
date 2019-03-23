---
title: How to Change File Ownership & Groups in Linux
tags:
  - Tutorial
  - How To
  - Pop!_OS
  - Linux
  - Terminal Usage
icon: fab fa-linux
date: 2019-03-23 23:46:25
---


File ownership and groups for files are fundamental to the Linux operating system. Every file in Linux is managed by a specific user and a specific group.

## Figure out who owns the File or Folder, then use either `chown` or `chgrp`

Display ownership and group information using the following command:

```
    $ ls -l ./ashokma.com/index.html
    drwxr-xr-x   2 root docker   4096 Mar 23 15:23 ./ashokma.com/index.html
```

This folder is owned by the *root* user and belongs to the *docker* group.

## Changing the ownership of a file using `chown`

You can change the ownership of a specific file using the `chown` command. For security purposes only, the root user or members of the sudo group may transfer ownership of a file.

To change the ownership of a file:

```
    $ chown ashokma ./ashokma.com/index.html
    
    $ ls -l ./ashokma.com/index.html
    drwxr-xr-x   2 ashokma docker   4096 Mar 23 20:23 ./ashokma.com/index.html
```

The file *index.html* is now owned by *ashokma*. 

> By default, `chown` follows symbolic links and changes the owner of the file pointed to by the symbolic link. 

> **Tip:** If you wish to change ownership of all files inside a directory, you can use the `-R` option.

```
    $ chown -R ashokma ./ashokma.com/
```

## Changing the group ownership of a file using `chgrp`

All users on the system belong to at least one group. You can find out which groups you belong to using the following command:

```
    $ groups ashokma
    ashokma : ashokma adm sudo docker
```

You can then change the group ownership of a specific file using the `chgrp` command:

```
    $ chgrp ashokma index.html

    $ ls -l index.html
    drwxr-xr-x   2 ashokma ashokma   4096 Mar 23 21:23 index.html
```
The file *index.html* now belongs to the *ashokma* group.

## Changing both the owner and the group using `chown`

You can change both the owner and group of a file using just the `chown` command.

```
    $ chown ashokma:docker index.html
    
    $ ls -l index.html
    drwxr-xr-x   2 ashokma docker    4096 Mar 23 21:23 index.html
```

The file *index.html* is now owned by *ashokma* and belongs to the *docker* group.
