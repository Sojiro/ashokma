---
title: 'NestJS: TypeError: Cannot read property ''find'' of undefined'
tags:
  - Fix
  - NestJS
  - TypeORM
  - NodeJS
icon: fab fa-node
date: 2021-11-10 21:20:25
---


I heard about [NestJS][1] and really wanted to try it out. I followed a basic getting started and ended up in the following error for custom repository instantiation.

### TypeError: Cannot read property 'find' of undefined

After some search, I found a solution in [nestjs/typeorm][2] issues.

## Fix

> Do not provide the custom repository in the `providers` array of NestJS `module`. TypeORM does its own thing.

After removing the repository from the `providers` array, it worked fine. ^\_^

[1]: https://nestjs.com/
[2]: https://github.com/nestjs/typeorm/issues/317#issuecomment-778697573
