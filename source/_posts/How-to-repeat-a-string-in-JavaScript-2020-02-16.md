---
title: How to repeat a string in JavaScript
tags:
  - How to
  - String
  - JS
icon: fab fa-js-square
date: 2020-02-16 21:39:58
---


We can repeat a string using the [ `repeat` ][1] method.

``` js
const symbol = '*'

console.log(symbol.repeat(10));
// **********
```

This comes handy in case we want to put some symbols around the page.^_^

> **Tip:** `.repeat(0)` will return an empty string. So, by controlling the numbers we can decide whether to show those symbols or not.

[1]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

