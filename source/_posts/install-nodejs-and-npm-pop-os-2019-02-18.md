---
title: Install nodejs and npm in Pop!_OS
date: 2019-02-18 17:35:13
tags: Tutorial, Setup, Pop!_OS, nodejs, npm
icon: fab fa-node fa-npm
---

Start by updating the packages list by typing:

    $ sudo apt update

Install `nodejs` using the `apt` package manager:

    $ sudo apt install nodejs npm

The Node.js executable from the Ubuntu repositories is named `nodejs` instead of node because of a conflict with another package.

To launch the [REPL Terminal](//www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm): (Pressing `Ctrl + C` twice exits!)

    $ nodejs

To verify the installation execute the following command:

    $ node -v && npm -v 
