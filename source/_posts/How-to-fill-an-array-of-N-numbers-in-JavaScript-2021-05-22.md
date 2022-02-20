---
title: How to fill an array of N numbers in JavaScript
tags:
  - How To
  - Array
  - JS
icon: fab fa-js-square
date: 2021-05-22 00:42:18
---

Sometime we want to fill an array with a range of numbers like 1 to 10. Let's how can we do that in JavaScript.

```js
Array.from({ length: 10 }).map((_, i) => ++i);

/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
```

In the above snippet, we are first creating an array from an _iterable_ with length of 10 (_our range_). Then we map to a new value that is being generated by increamenting the _index_ value.

**Note:** An iterable is an object with a length property and indexed elements.