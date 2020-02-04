---
title: How to extract tar.gz file in linux
tags:
  - Blog
  - How to
  - Linux
  - Pop!_OS
  - Terminal Usage
icon: fas fa-terminal
date: 2019-07-03 20:42:35
---

To extract a `tar` ball, use `tar` utility in linux.

```bash
$ tar -xzf ./go1.12.6.linux-amd64.tar.gz
```

This will unpack the `go` folder in the working directory.

To unpack it in a custom folder:

```bash
$ tar -C /home/ashokma/go_1.12.6 -xzf ./go1.12.6.linux-amd64.tar.gz
```

> **Tip:** Use `-v` option to see the list of files being extracted. It means be verbose about it!
