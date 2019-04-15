---
title: How to run a web server using Node.JS
tags:
  - How to
  - nodejs
  - server
icon: fab fa-node
date: 2019-04-15 22:55:05
---


It is easy to run your own server nowadays. [`Nodejs`](//nodejs.org/en/about/), makes it look like a piece of cake.

Once you have installed [Node](2019/02/18/install-nodejs-and-npm-pop-os/), let's try building our first web server.

## Create web directory:

Let's start by creating our server directory.

```
    $ mkdir nodejs-server
```

## Server js file

Once we changed to the `nodejs-server` directory,

```
    $ cd nodejs-server
```

create a `server.js` with the following code:

```javascript
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(
    `
        <h1> Hello! Welcome to AshKeys! </h1>
    `
  );
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

Now our server is ready to be created.

## Run as `node`

This is it! All we have to do now is to run as a `node` file.

```
    $ node ./server.js
    Server running at http://localhost:3000/
```

Now our server is listening to port `3000` and welcomes you to [**AshKeys**](/)

> **Tip:** When it comes to routing it is [`express`](//www.npmjs.com/package/express) that comes at best!
