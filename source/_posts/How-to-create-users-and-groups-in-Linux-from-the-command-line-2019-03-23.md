---
title: How to create users and groups in Linux from the command line
tags:
  - Tutorial
  - How To
  - Pop!_OS
  - Linux
  - Terminal Usage
icon: fab fa-linux
date: 2019-03-23 23:46:49
---


Here's a quick guide to adding users and groups, and then how to add users to groups, all from the command line on the Linux platform.

I want to walk you through the process of:

 - [Creating users](#Creating-users)
 - [Creating groups](#Creating-groups)
 - [Adding users to groups](#Adding-users-to-groups)

Let's jump in!

## Creating users

For this, we will be making use of the `useradd` command. This command is pretty flexible and allows you to create users that can login or even users that cannot login (in the case of creating a user for a software installation).

The basic syntax of the command is:

```
    $ useradd [options] <username>
```

Say, you want to create the user *ashokma* such that he has a home directory and can log in. If you were to issue the command:

```
    $ sudo useradd ashokma
```
The user would be added, without a home directory and can not log in.

> **From The Manual:** When invoked without the -D option, the useradd command creates a new user account using the values specified on the command line plus the default values from the system.

```
    $ sudo useradd -m ashokma
```

The above command would create the user and also create the user's home directory to match the username. So if you looked in the */home* directory, you would now see *ashokma*.

But what about the *password*? You can do this in two ways simply. If you've already created the user, you could issue the command:

```
    $ sudo passwd ashokma

    Enter new UNIX password: 
    Retype new UNIX password: 
    passwd: password updated successfully
```
Yes, it is same you set your password or reset it for that matter.

If you want to do this all in a single step, that command would look like this:

```
    $ sudo useradd -m ashokma -p De_Tenken
```

> **Tip:** You can remove a user and his home directory using the following command:
> `$ sudo userdel -r ashokma`

If you need to create a user that has no home directory and is locked out from logging in, you can do this with the the following commands:

```
    $ sudo useradd -M ashokma 
    $ ​sudo usermod -L ashokma
```
The first command creates the user without a home directory and the second command locks the user out of logging in.

## Creating groups

It's time to create a group. Let's create the group *ashkeys*. To do this, you would issue the command:

```
    $ sudo groupadd ashkeys
```

> **Tip:** You can delete a group using the following command:
> `$ sudo groupdel ashkeys`

## Adding users to groups

We want to add our new user, *ashokma*, to the group *ashkeys*. For this we will take advantage of the `usermod` command. This command is quite simple to use.

```
    $ sudo usermod -a -G ashkeys ashokma
```

The `-a` option tells `usermod` we are appending and the `-G` option tells usermod we are appending to the group name that follows the option.

To find out which users are already a member of a group, you can do the following command:

```
    $ grep ashokma /etc/group
    
    ashkeys:x:1001:ashokma
```
