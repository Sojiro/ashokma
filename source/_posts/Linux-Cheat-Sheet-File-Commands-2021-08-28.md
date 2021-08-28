---
title: Linux Cheat Sheet For File Commands
tags:
  - How to
  - Linux
  - Cheat sheet
  - File commands
icon: fab fa-linux
date: 2021-08-28 23:27:32
---


# File Commands

## How to list a directory in linux

```sh
$ ls
```

> **Tip:** Formatted listing with hidden files `ls -al`. Nowadays most of the terminals come with `ll` command to do the trick.

## How to change to a directory in linux

```sh
$ cd ashokma
```

> **Tip:** Just entering `cd` will get you home. ^\_^

## How to show current working directory in linux

```sh
$ pwd
```

## How to create a directory in linux

```sh
$ mkdir ashokma
```

> **Tip:** `-p` option with the above command, creates directories as needed like `mkdir -p ashokma/ashkeys/sojiro`

## How to place the input into the file in linux

```sh
$ cat >ashkeys
How are we doing today?
Good.
# Ctrl + C to exit

$ cat ashkeys
How are we doing today?
Good.
```

> **Tip:** Comes in handy to quickly take notes. \O/

## How to output the contents of a file in linux

```sh
$ more ashkeys.txt
```

> **Tip:** Use `head ashkeys.txt` to output the first 10 lines of the file and `tail ashkeys.txt` to output the last 10 lines of the file.

## How to create or update a file in linux

```sh
$ touch ashkeys.txt
```

> **Tip:** As it says it can just be used to touch a file (simply update the timestamp) to make it look like updated recently. /O\

## How to delete a file or directory in linux

```sh
$ rm ashkeys.txt
$ rm -r ashokma
```

> **Tip:** Use force option `-f` if necessary.

## How to copy contents of a file or directory to the other in linux

```sh
$ cp source.txt target.txt
$ cp -r source target
```

## How to move file in linux

```sh
$ mv ashkeys.txt ashokma/
```

> **Tip:** Also widely used to rename a file quickly as `mv oldname.txt newname.txt`

## How to create a file shortcut in linux (symbolic link)

```sh
$ ln -s ashkeys.txt shortcut_to_ashkeys.txt
```
