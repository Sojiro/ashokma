---
title: 'Hexo deploy: Fatal: in unpopulated submodule `.deploy_git`'
date: 2019-02-18 19:22:23
tags: [Blog, Setup, Hexo, Fix]
icon: fab fa-blogger-b
---

Today, I checked out the hexo blog in my new laptop. It threw a fatal error when I tried to `hexo deploy` it. After trial and error for sometime, I found the quick and easy solution like _Try turning it off and on again!_

First install the relevant dependencies: (I do deployment to `git`)

```sh
    $ npm install hexo-deployer-git --save
```

Here comes the universal solution:

```sh
    $ rm -rf .deploy_git
    $ hexo g
    $ hexo d
```

> Make sure you do not version the `.deploy_git` folder as it is specific to local environment and setup.
