---
title: 'Fix: state is undefined for @ngrx/store in unit tests'
tags:
  - Ngrx
  - Angular
  - Fix
icon: fab fa-angular
date: 2021-01-15 15:19:48
---


[Go to fix](#Fix-state-is-undefined)

I use [`@ngrx/store`][1] at my day-to-day development. This post is not to share the benefits of using a state-management library. Instead, to share a fix for a possible unit tests mess up we might make along the way of using such libraries.

## `MockStore`

In unit tests, we usually set our initial state as follows:

```ts
const initialState: AppState = {
    title: 'AshKeys',
    name: 'Sojiro De Tenken',
};

TestBed.configureTestingModule({
    imports: [TestModule],
    declarations: [AshKeysComponent],
    providers: [provideMockStore({ initialState })],
})
    .overrideTemplate(AshKeysComponent, '')
    .compileComponents();
```

This is good as long as we are fine writing units with the initial state values.

## Updating the state in an iteration

There comes a scenario where we might have to update the said state for an iteration as follows:

```ts
mockStore.setState({
    title: 'ashokma.com',
});
```

As you might have guessed it already, this overrides the `initialState` and in turn we loose a property called `name`. >\_O

## Fix: state is undefined

Imagine `name` property as a state for some cases and there is a [`selector`][2] referring that particular state. In those cases, due to the above overriding, we encounter **State is undefined** error.

What I forgot to do is the following:

```ts
mockStore.setState({
    ...initialState,
    title: 'ashokma.com',
});
```

In this way, we keep whatever we had in the `initialState` undisturbed and update the ones we bother. \O/

[1]: //ngrx.io/guide/store
[2]: //ngrx.io/guide/store/selectors
