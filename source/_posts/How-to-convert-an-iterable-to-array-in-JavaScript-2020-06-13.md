---
title: How to convert an iterable to array in JavaScript
tags:
  - How to
  - Array
  - JavaScript
icon: fab fa-js-square
date: 2020-06-13 23:04:08
---


An [Iterable][1] is an object where you can iterate its keys.

Sometime we might want to convert those as array of values so that we can process or transform into something else.

```js
const chargeLevelMap = new Map();

chargeLevelMap.set('Critical', 10);
chargeLevelMap.set('Half', 50);
chargeLevelMap.set('Full', 100);

function determineChargeLevel(charge) {
    // ["Critical", 10], ["Half", 50], ["Full", 100]
    const chargeLevelEntries = Array.from(chargeLevelMap.entries());
    const matchedEntry = chargeLevelEntries.find(kv => charge <= kv[1]);
    return matchedEntry[0];
}

// With some destructuring...

function determineChargeLevel(charge) {
    const chargeLevelEntries = Array.from(chargeLevelMap.entries());
    const [level, charge] = chargeLevelEntries.find(
        ([key, value]) => charge <= value
    );
    return level;
}
```

> **Tip:** We can also create arrays for `chargeLevelMap.keys()` and `chargeLevelMap.values()`.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
