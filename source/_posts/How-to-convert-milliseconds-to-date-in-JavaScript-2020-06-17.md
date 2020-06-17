---
title: How to convert milliseconds to date in JavaScript
tags:
  - How to
  - Date
  - JavaScript
icon: fab fa-js-square
date: 2020-06-17 23:41:59
---


Sometimes we encounter a situation to work with dates by treating them as numbers.

For instance, I had to find a [quantile][1] point from an array of dates. O_o

Using the `Date.getTime()` we could get the milliseconds! ^\_^

```js
const todayInMilliseconds = new Date().getTime();

const fromMilliseconds = new Date(todayInMilliseconds);
```

[1]: https://github.com/d3/d3-array#quantile
