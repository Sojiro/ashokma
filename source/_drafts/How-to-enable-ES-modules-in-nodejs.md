---
title: How to enable ES modules in nodejs
tags: [How To, ES6, nodejs]
icon: fab fa-node
---

In our previous [post](install-node), we installed `nodejs` in our machine. Even with the latest `nodejs` version, it is not possible to use the `ES` modules directly. We have to use transpilers like [`Babel`](babel-site).

In this blog, we will see how to use the `ES` modules without transpilation support.

# CommonJS vs ES Module usage

```js
// CommonJS Module Import Usage
const express = require('express');

// ES6 Module Import Usage
import express from 'express';
```

# Change the module type in `package.json`

[install-node]:[/2019/02/18/install-nodejs-and-npm-pop-os/]
