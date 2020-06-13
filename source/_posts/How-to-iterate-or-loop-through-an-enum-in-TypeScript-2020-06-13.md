---
title: How to iterate or loop through an enum in TypeScript
tags:
  - How to
  - Enum
  - TypeScript
icon: fab fa-js-square
date: 2020-06-13 23:04:29
---


[Enums][1] are so handy in TypeScript. Many of us encounter a situation where we need to loop through an enum and get the respective value for an enum.

Using the below enum, we encounter situations where we need to get the charge level based on the `enum` key.

```ts
enum ChargeLevel {
    CRITICAL = 10,
    HALF = 50,
    FULL = 100,
}
```

We can easily do that using the following snippet.

```ts
enum ChargeLevel {
    CRITICAL = 10,
    HALF = 50,
    FULL = 100,
}

function chargeLevelFromKey(key: string) {
    return ChargeLevel[key];
}

function determineChargeLevel(charge: number) {
    return Object.keys(ChargeLevel).find(key => charge <= ChargeLevel[key]);
}
```

Isn't it beautiful? ^\_^

Enums are awesome and one of the powerful and strict typings in almost all programming languages.

[1]: https://www.typescriptlang.org/docs/handbook/enums.html
