---
title: How to reverse a string in JavaScript
tags:
  - How to
  - String
  - JS
icon: fab fa-js-square
date: 2019-05-22 21:35:02
---


Reversing a string challenge has been one of the oldest code challeges! Let's see how can we do it in JS.

# Using Array Methods:

Steps to follow:

- Split the string to `char` arrays.
- Reverse the `char` array.
- At last `join` the array to a string.

The same thing happens in the following code section:

```js
const stringToReverse = 'ashkeys';

const reversedString = stringToReverse
  .split('') // [ 'a', 's', 'h', 'k', 'e', 'y', 's' ]
  .reverse() // [ 's', 'y', 'e', 'k', 'h', 's', 'a' ]
  .join('');

console.log(reversedString); // syekhsa
```

# With ES6 spread operator

It is possible to reduce one line from the above code using ES6 syntax! ^\_^

```js
const stringToReverse = 'ashkeys';

const [...charArrayToReverse] = stringToReverse;

console.log(charArrayToReverse.reverse().join('')); // syekhsa
```
