---
title: How to get a list of files in a directory using Bash
tags:
  - How To
  - Linux
  - Bash
  - Shell
  - Terminal
icon: fas fa-terminal
date: 2019-05-23 20:46:34
---

Recently, I have been doing a lot of `shell` scripting to automate some time consuming manual processes. For instance, read configuration using `xslt` transformation stylesheets. >\_O Though it was painful to my eyes, once done I felt bit proud of myself learning something new. (Yes, `XSLT` you go to my _Skills List_ ^\_^)

As part of that process, I had to iterate files in a configuration folder for transformation into `.json` files. We shall come to that later. Now, let's see the shell script to list out the files in a folder.

```sh
for f in /home/ashokma/ashkeys/config/*;
do
    if [[ ! -d ${f} ]]; # Not if it is sub-directory.
    then
        echo    "File Name with full path - ${f}"
        echo -e "File Name with extension - $(basename ${f})"
    fi
done
```

> **Tip:** You can strip the extension away from the file using this snippet:

```sh
echo -e "File Name without extension - $(basename $(echo "${f}" | cut -f 1 -d '.'))
```
