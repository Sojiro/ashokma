---
title: How to use regular expressions in JS
tags:
  - How to
  - Regex
  - JS
icon: fab fa-js-square
date: 2020-02-26 23:24:47
---


[Regex][1] stands for regular expression and it is so awesome when it comes to string manipulations.

In JS, a regular expression is enclosed with `/<regex>/` .

Let's take a look at few usecases.

## To select a complete word

``` js
const site = 'AshKeys';

console.log(site.match(/AshKeys/g)); // [ 'AshKeys' ]
```

## This or that part

``` js
const site = 'AshKeys';

console.log(site.match(/Ash|Keys/g)); // [ 'Ash', 'Keys' ]
```

## This or that word

``` js
site = 'AshKeys';

console.log(site.match(/Ash(Talks|Keys)/g)); // [ 'AshKeys', 'AshTalks' ]
```

## Starts with

``` js
site = 'AshKeys or AshTalks';

console.log(/^Ash/.test(site)); // true
```

## Ends with

``` js
site = 'AshKeys or AshTalks';

console.log(/Talks$/.test(site)); // true
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

