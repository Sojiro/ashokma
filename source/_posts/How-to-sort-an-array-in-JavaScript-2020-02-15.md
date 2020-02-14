---
title: How to sort an array in JavaScript
tags:
  - How to
  - Arrays
  - JS
icon: fab fa-js-square
date: 2020-02-15 00:32:24
---


Sorting an array in JavaScript is handy with [`sort`][1] array method.

```js
const names = ['Sojiro', 'åshKeys', 'Sakaßato', 'Ashok M A', 'Zin', 'Kenshin', 'Himura'];

const sortedNames = names.sort((a, b) => a.localeCompare(b));

console.table(sortedNames);
```

The above gives the following sorted array in table format as we used [`console.table`][2].

```js
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │  'åshKeys'  │
│    1    │ 'Ashok M A' │
│    2    │  'Himura'   │
│    3    │  'Kenshin'  │
│    4    │ 'Sakaßato'  │
│    5    │  'Sojiro'   │
│    6    │    'Zin'    │
└─────────┴─────────────┘
```

Notice that we used [`localeCompare`][3] as our sorting method. It is really useful for comparing strings from different locales. \O/

> **Tip:** By default it takes it by the base of the letters irrespective of their locales as you can see in our example as well. ^_^

[1]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
[2]: /2019/09/30/How-to-debug-JavaScript-effectively/#console-table
[3]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare