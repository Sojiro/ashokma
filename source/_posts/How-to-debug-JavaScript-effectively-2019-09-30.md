---
title: How to debug JavaScript effectively
tags:
  - How to
  - Debug
  - JS
icon: fab fa-js-square
date: 2019-09-30 22:19:59
---


I work with the frontend of the application more than the backend as many of us nowadays. So, it helps to know the better way of debugging in JavaScript, not only to increase the productivity but also to keeping ourselves from getting tired of debugging. Let's see few of the most frequently used ones.

## `console.log`

Many of us know this but only few of us know how to effectively use `console.log`. By default it logs the `toString()` representation of what we want to log.

```js
const msg = 'Welcome to AshKeys!';

console.log(msg); // Welcome to AshKeys!
```

How many times many of us had to check the file it was logged from in the browser console. >\_O Because, we log many things and it is hard to know which one is being logged here. That is okay! Mostly, we do something like this to keep track.

```js
const msg = 'Welcome to AshKeys!';

console.log('msg -> ' + msg); // msg -> Welcome to AshKeys!
```

> **Tip:** Prefer string template literals `` ` ` `` over string concatenation as follows
> `` console.log(`msg -> ${msg}`) ``

This is not bad, is it? But, there is again a problem when we need to log more things on the way. There comes a situation where we spend some considerable amount of time thinking about what to concatenate with. >\_<

In those cases, we can quickly do the following:

```js
const msg = 'Welcome to AshKeys!';

console.log({ msg }); // { msg: 'Welcome to AshKeys!' }
```

Yes, we just make a placeholder object with same key as our named variable. It makes sense as we spent already some effort in giving a variable meaningful name before wanting to log it. ^\_^ Thus, it makes it easy to keep track.

> **Tip:** We can log more than one in the same `console.log` call like `console.log({msg}, {ashkeys})`

## `console.table`

It is useful if we are operating around table-like data. Sometimes, it does not even have to be a table data. A plain object with property names too. Let's take a look at those two examples.

```js
const employee = {
  name: 'Ashok M A',
  role: 'Full Stack Web Developer',
  drinks: 'coffee'
};

console.table(employee);

┌─────────┬────────────────────────────┐
│ (index) │           Values           │
├─────────┼────────────────────────────┤
│  name   │        'Ashok M A'         │
│  role   │ 'Full Stack Web Developer' │
│ drinks  │          'coffee'          │
└─────────┴────────────────────────────┘
```

For a plain object, it logs the key-value pair in tabular forms. But, for an array of objects:

```js
const employees = [
  {
    name: 'Ashok M A',
    role: 'Full Stack Web Developer',
    drinks: 'coffee'
  },
  {
    name: 'AshKeys',
    role: 'Just Developer',
    drinks: 'caffeine'
  }
];

console.table(employees);

┌─────────┬─────────────┬────────────────────────────┬────────────┐
│ (index) │    name     │            role            │   drinks   │
├─────────┼─────────────┼────────────────────────────┼────────────┤
│    0    │ 'Ashok M A' │ 'Full Stack Web Developer' │  'coffee'  │
│    1    │  'AshKeys'  │      'Just Developer'      │ 'caffeine' │
└─────────┴─────────────┴────────────────────────────┴────────────┘
```

This makes it easy to quickly glance and verify instead of expanding the logged object or array and waste some time on clicking. Wouldn't you agree? \O/

> **Tip:** Remember this, like any other programming/scripting languages, JavaScript also has options to log messages with respect to their log levels (`console.error`, `console.warn`, `console.info`, `console.debug`, `console.trace`). We can do the same things we did with `console.log`.
