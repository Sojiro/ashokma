---
title: Create a todo app with Electron
tags: [Blog, Pet Projects, NodeJS, Electron]
icon: fab fa-atom
---

I wanted to experiment [`Electron`](//electronjs.org) for a long time since I first heard about creating standalone apps using JavaScript. As a result of that, I have started this pet project to experiment and introduce myself to Electron.

In this post, we will try to create a todo using Electron that can perform some simple task management.

## Initialize the project

Let's initialize the project by doing following steps.

```shell
 $ mkdir electron-calc && cd electron-calc
 $ npm init
```

Once initialized, we can start working on our fancy todo by first installing the necessary dependencies.

## Install Electron

```shell
 $ npm install --save-dev electron
```

Now, we can run the start script using `electron` instead of `node` executable. Update the `package.json` accordingly.

```json
{
  "scripts": {
    "start": "electron ."
  }
}
```
