---
title: How to add environment or path variables in linux
tags:
  - How To
  - Pop!_OS
  - Linux
  - Terminal Usage
icon: fab fa-linux
date: 2019-07-03 00:18:55
---


I am exploring `Golang` as `C` and `C++` are the main languages being used in the company I work now. Even though I do not see a future where I have to code in `Golang`, I just wanted to explore the `Hello World` with it.

Instead of installing it as part of package manager, this time I downloaded the binaries and wanted to set the environment path containing `go` command file.

# Download the binaries.

Go to [`golang` download page](//golang.org/dl/) and download the version you want for linux.

Explod the same as following:

```bash
$ tar xvzf ./go1.12.6.linux-amd64.tar.gz
```

# Add to path variable

Add the following entry at the end of the `.bashrc` file under your home directory (`/home/ashokma/.bashrc`)

```bash
export GOPATH=/home/ashokma/projects/go
export GOROOT=/home/golang
export PATH=${PATH}:${GOROOT}/bin:${GOPATH}/bin
```

# Load the configs:

Unlike other systems, in linux we can just load the startup configs using `source` util.

```bash
$ source /home/ashokma/.bashrc
```

Vola \O/ That is it! Now, when we try the `go` in terminal linux knows where to find it.

```shell
$ go
Go is a tool for managing Go source code.

Usage:

go <command> [arguments]
```
