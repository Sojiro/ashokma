---
title: How to find the number of occurrences of chars in a string
tags:
  - How to
  - JS
  - Regex
icon: fab fa-js-square
date: 2021-12-23 20:46:22
---


Recently, I came across a code challenge to find the number of occurrences of a character in a string.

It was intended to use it as a validator in order to perform some minimum char length along with the occurrences.

Anyhow, it took some time to figure out a way using Regex.

```js
searchString
  // split into each characters.
  .split('')
  // Sort it so that the similar chars can be grouped together.
  .sort()
  // Join them to group.
  .join('')
  // match the chars those have more than one occurrence.
  .match(/(.)\1+/g)
  // Do what you wish with the result. I am just counting the length here.
  .map((a) => a.length);
```

> **Tip:** Try to modify the Regex to match only a set of chars occurrences.
