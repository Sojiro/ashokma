---
title: How to get the tick values of an axis in d3
tags:
  - How to
  - JavaScript
  - d3
icon: fas fa-chart-pie
date: 2020-02-02 23:05:12
---


The more I explore [D3.js][1] the more I am intriguied by the ways to make Data-driven documents or charts.

In very recently, I had to make a `rect` at the center of a 2D map. But, the challenge I had in getting the axis tick values irrespective of zoom/pan levels.

To get the data of the axis, the following piece of code is enough:

```js
const xAxisTickValues = d3.select('axis axis--x g').data();
const yAxisTickValues = d3.select('axis axis--y g').data();
```
Using the `d3.quantile` function we can get the center values as follows:

```js
const minX = d3.quantile(xAxisTickValues, .25);
const maxX = d3.quantile(xAxisTickValues, .75);

const minY = d3.quantile(yAxisTickValues, .25);
const maxY = d3.quantile(yAxisTickValues, .75);
```

[1]: d3js.org