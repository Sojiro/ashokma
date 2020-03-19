---
title: How to change the sign of a number in JS
tags:
  - How to
  - JavaScript
icon: fab fa-js-square
date: 2020-03-19 21:53:37
---


There comes a situation where we need to change a number's sign (+/-). We can do this in two ways:

## [`Math.abs()`][1]

`abs` gives the absolute number irrespective of a number's sign.

```js
const randomDiff = Math.abs(Math.random() - Math.random());

console.log(randomDiff);
```

## [`Math.sign`][2]

On the other hand, `sign` returns the sign of a number as either `-1` or `1` or `0` if the number is `0`.

```js
const randomNumber = Math.random() - Math.random();

const randomDiff = Math.sign(randomNumber) * randomNumber;

console.log(randomDiff);
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign