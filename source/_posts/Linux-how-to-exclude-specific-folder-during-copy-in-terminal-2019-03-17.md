---
title: 'Linux: how to exclude specific folder during copy in terminal'
tags:
  - Blog
  - How To
  - Linux
  - Pop!_OS
  - Terminal Usage
icon: fab fa-linux
date: 2019-03-17 18:34:00
---


It is fun and fast to work with terminals in linux. I remember staring at the unnecessary fancy GUI progress bars in Windows. Ugh! I still wonder who would want to see the information that is being displayed in the fancy GUI progress bars. With the latest ones they even added a graph progress bar (O_o o_O) WHY?!?

## `rsync` command:

Rsync is a fast and versatile tool to copy files and folders locally, or to/from another host over any remote shell, or to/from a remote rsync daemon. Rsync has lot useful options. One of the useful option is `--exclude`. Using `exclude` option, we can exclude certain files/directories from copying as follows:

```
    $ rsync -av --progress ./ /home/ashokma/public_html/ --exclude=.*
```

## `cp` command:

### Copy files

By default `cp` copies files from folder A to B.

```
    $ cp index.html /home/ashokma/public_html
```

If we try to do the same for folders, we get the following log:

```
    $ cp . /home/ashokma/public_html

    cp: omitting directory `.'
```

> Even If there are files under the current directory, those files are not copied to `public_html` folder.

### Copy folders as well as files recursively

In order to copy the files and folders we need to supply recursive option as follows:

```
    $ cp -r . /home/ashokma/public_html/
```

Simple enough, is it not!

### Ignore specific folders during copying

When we supply the `-r`, `cp` command tries to copy everything recursively under that folder including the hidden folders. I get the following logs, when I try to do `cp -r` under a git repository.

```
    cp: cannot create regular file `/home/ashokma/public_html/./.git/objects/92/9323f0a105212d26776adb68dea40bd2603ac6': Permission denied
    cp: cannot create regular file `/home/ashokma/public_html/./.git/objects/92/50cb893f62e0943e599e4384604f88ba540c0b': Permission denied
    cp: cannot create regular file `/home/ashokma/public_html/./.git/objects/e9/c123a5ea6c5a542d0c27b40542c850bad59ee4': Permission denied
    cp: cannot create regular file `/home/ashokma/public_html/./.git/objects/be/61ec8fb84e53ffbca728cccbf4a28d19c719d4': Permission denied
    cp: cannot create regular file `/home/ashokma/public_html/./.git/objects/pack/pack-a1adf7cf19c0465e14013d5ebf5a69c81fbc31da.idx': Permission denied
    cp: cannot create regular file `/home/ashokma/public_html/./.git/objects/pack/pack-a1adf7cf19c0465e14013d5ebf5a69c81fbc31da.pack': Permission denied
    cp: cannot create regular file `/home/ashokma/public_html/./.git/objects/bc/cac8d4bfe7b7586ec50610e939264bd8931f61': Permission denied
```

I do not want these `.git/objects` which are repository specific being copied. Now, we need to write a small query command excluding the directory we want:

```    
    $ cp -r `ls --ignore=.*` /home/ashokma/public_html/
```

> `--ignore` takes [shell pattern](//www.gnu.org/software/findutils/manual/html_node/find_html/Shell-Pattern-Matching.html), so here it ignores the following folders for me: `.git`, `./`, `../`

---------------------

> **Tip:** Prefer `rsync` over `cp` in case you want to copy a bunch and also want to copy to remote host as I do mostly for my blog. With the help of `rsync daemon`, it only copies the files those have changes. It works as it was named, it synchronizes the files to keep them update. ^_^