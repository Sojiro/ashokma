---
title: How to create your own startup script in linux
tags:
  - How to
  - Bash
  - Shell
  - Linux
  - Pop!_OS
icon: fab fa-linux
date: 2019-07-17 22:13:20
---

Everyday, as soon as I logged into my linux machine, in order to start working, I had to open up some IDEs and run `docker` containers.

I decided to automate this as part of my startup process. It is so easy with linux. ^\_^

In this [post][1], we talked about adding the environment variables by updating the `.bashrc` startup script. It can do more than that!

First, list out the things you do repeatedly during the startup of your machine and add those commands or startup steps at the end of `.bashrc` file as follows:

Below are the steps I was repeating everyday. >\_O I know it is not much but we are developers! We should be lazy to do repeated stuffs and automate them instead \O/

```bash
# Starting the database
docker start postgres

# Launch the VSCode for FE Dev.
code /home/ashkeys/ashokma.com

# Launch IntelliJ IDE for BE Dev.
/home/ashkeys/apps/idea-IC-183.5912.21/bin/idea.sh &
```

To see it happening rightaway just [load the configs][2].

```bash
$ source /home/ashkeys/.bashrc
```

> **Tip:** It is not just about launching IDEs and such. We can also `git pull` any changes to keep our code updated before we start working or make the linux `clean build` our app in the meantime we get our coffee ^\_^

> **Caution:** Do remember that the script will be executed for each shell session that is for each Terminal launch as it loads the profile per launch. /O\\/O\

[1]: /2019/07/03/How-to-add-environment-or-path-variables-in-linux/#Add-to-path-variable
[2]: /2019/07/03/How-to-add-environment-or-path-variables-in-linux/#Load-the-configs
