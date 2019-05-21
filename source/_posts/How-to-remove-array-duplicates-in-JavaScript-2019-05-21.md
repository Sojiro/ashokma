---
title: How to remove array duplicates in JavaScript
tags:
  - How to
  - Arrays
  - JS
  - ES6
icon: fab fa-js-square
date: 2019-05-21 22:07:12
---


# The [`Set`][1] collection

Since `ES6`, `Set` collection has been introduced which is really good and makes our life simple. `Set` is a collection which will not keep duplicates. It can also take any iterable objects as constructor arguments. In our case, it is an array with duplicated values.

```javascript
const duplicates = [1, 2, 3, 3, 2, 1];

const unique = [...new Set(duplicates)];

console.log(unique); // [ 1, 2, 3 ]
```

# `Array.filter` function

It is better to know more options, in case of not-so-friendly environment. For instance, `Set` collection is supported by all the major browsers but few old-schools. Yes, I am looking at you IE! O_o

```JavaScript
const duplicates = [1, 2, 3, 3, 2, 1];

const unique = duplicates.filter(
  (item, index) => duplicates.indexOf(item) === index
);

console.log(unique); // [ 1, 2, 3 ]
```

Please prefer the `Set` option just for the simple of it!

> **Tip:** We can do the same `.indexOf` trick using `.map`, `.foreach` as well. But, `.filter` is more readable among those! ^\_^

[1]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
