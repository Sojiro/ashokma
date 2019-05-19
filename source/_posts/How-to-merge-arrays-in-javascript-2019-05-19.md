---
title: How to merge arrays in javascript
tags:
  - How to
  - Arrays
  - JS
  - ES6
icon: fab fa-js-square
date: 2019-05-19 22:49:02
---


# Using `concat` method

With `concat`, we do not have to add even a single `for...in` loop. Instead, we can simply chain the `concat` method in the order we want!

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = []
  .concat(array1)
  .concat(array2)
  .concat(array3);

console.log(mergedArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

> **Tip:** Prefer starting with empty array when chaining `concat`. In this way, it is clear that we make a new array and do not manipulate the existing ones! ^\_^

# [Spread Operator][1] (Since `ES6`)

With `ES6` it is simple now! We can merge two or more arrays in one line:

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

[1]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
