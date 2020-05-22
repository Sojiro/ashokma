---
title: 'Fix: No provider for MockStore in NgRx'
tags:
  - NgRx
  - Anguar
  - NodeJS
icon: fab fa-angular
date: 2020-05-22 22:40:20
---


We have recently started using [NgRx](1) in our project and it is awesome ^_^. We achieved a lot of performance benefits just by making use of the shared state store.

It is just amazing how it keeps the state true across the Single Page Application (SPA). It gave us the power to keep one single source of truth.

## No provider for MockStore

As part of the development, I was writing unit tests for a component that uses the [ `Store<AppState>` ](2) as a dependency. Naturally, I followed the docs for the unit testing and injected a [ `MockStore` ](3) as well.

Then, when I ran it I was keep getting the **No Provider for MockStore** error. After a long search for answers, I realized that this problem persists with me using `7.x.x` version of `@ngrx` and upgraded to the latest which was `9.1.0` .

> To me, upgrading to the latest `@ngrx` solved the problem.

[1]: https://ngrx.io/
[2]: https://ngrx.io/guide/store
[3]: https://ngrx.io/guide/store/testing#using-a-mock-store
