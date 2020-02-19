---
title: How to flatten an array in JavaScript
tags:
  - How to
  - Arrays
  - JS
icon: fab fa-js-square
date: 2020-02-19 23:12:10
---


To flat an array is easy in JavaScript using the [ `flat` ][1] array method.

``` js
const names = ['AshKeys', ['Sojiro', ['Seta']]];

console.log(names.flat(2)); // ['AshKeys', 'Sojiro', 'Seta']
```

By default, it flattens to 1 depth but we do can supply the depth level to be flattened.

If you do not know the depth you want, then it is better to give the max depth possible.[Infinity][2]

**Note:** `flat` method is quite new to JS as it is specified in ES2019. I had to code the snippet in chrome console./O\

[1]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
[2]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity

