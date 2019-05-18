---
title: API Development with Node.js and Express
tags:
  - nodejs
  - API
  - express
icon: fab fa-node
date: 2019-05-18 15:39:55
---


In my previous [post](/2019/04/15/How-to-run-a-web-server-using-Node-JS/), we talked about how to run a webserver by using only node modules. As mentioned before, [express](//expressjs.com/) is good when it comes to routing. Now, we can talk bit more in detail about the API development around it. Express makes the API development looks easy as it takes care of the uneasy parts and let us only worry about the APIs.

For instance, to build `get` endpoint you just have to do the following:

```javascript
const express = require('express');
const app = express();

app.get('/api/greet', function(req, res) {
  res.send('Hello, Welcome to AshKeys!');
});

app.listen(3000, () =>
  console.log(`API is up and running at http://localhost:3000`)
);
```

When you hit the endpoint `localhost:3000/api/greet`, you see the `Hello, Welcome to AshKeys!` message being displayed.

> Congratulations! You have created your first API with express.

> We can use other HTTP request methods such as `post`, `put`, `delete`, `merge`, `patch` and various others. You can see a full list of potential routing methods here: [Express routing methods](//expressjs.com/en/4x/api.html#app.METHOD)
