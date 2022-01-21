---
title: How to convert an integer to binary in JavaScript
tags:
  - How to
  - Conversion
  - JS
icon: fab fa-js-square
date: 2022-01-21 16:36:24
---


Sometimes we have to play with binaries to get quick and fast results. Let's see how can we convert one.

## [Unsigned right shift (>>>)][>>>]

In order to work also with negative numbers, we use the _Unsigned right shift_ operator first to convert it to the non-negative integer.

```js
function toBinary(num) {
  return numberToBinary >>> 0; // does not shift any bits, number stays the same.
}
```

_We are not done yet!_

## ToString to the rescue

We still need to convert it to the binaries. We can do that by simply making use of the `ToString` method.

```js
function toBinary(num) {
  return (numberToBinary >>> 0).toString(2);
}
```

[>>>]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
