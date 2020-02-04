---
title: How to make an alias in MacOS
tags:
  - How to
  - MacOS
  - Mojave
  - Apple
icon: fab fa-apple
date: 2020-01-18 23:50:42
---


As mentioned in the [previous post][1], I am experimenting with my Macbook Pro mid 2012. One of the things that was handy in the Pop!_OS terminal was the command `ll` to list out the contents of a directive.

It is nothing but an alias of `ls -l` in short. I wanted to make this alias in the Macbook as well. With the below steps one can easily make an alias in Macbook as we do in linux by editing `.bashrc` files.

## Edit the `~/.bash_profile`

```sh
$ vim ~/.bash_profile
```

## Add your required alias commands

```sh
alias ll="ls -l"
```

## Restart your terminal session

Once you have added your respective alias in place, just restart your terminal session. Vola! \O/

Just like in linux, this alias will be available in future sessions as well since it is part of the profile configurations.

[1]: /2020/01/18/Macbook-Pro-mid-2012-usuage-notes/