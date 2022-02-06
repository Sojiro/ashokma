---
title: How to run jest unit tests with ES6 modules in Node.js
tags:
  - How to
  - Jest
  - Unit testing
  - NodeJS
icon: fab fa-node
date: 2022-02-06 20:34:52
---


Recently one of my VueJS side projects, I have used [jest][jest] to do unit testing and I must say I really like the simplicity of it.

More over, it is blazing fast with parrell execution and runs only the changed specs on watch mode.

## Jest in NodeJS

In order to start with jest, let's first install it by the following:

```sh
$ npm i jest
```

After the successful installation, configure your `package.json` as below to run unit specs:

```json
"scripts": {
  "test": "jest"
}
```

Yes, its that simple! \O/

## Jest magic

When we run [`jest`][jest] script, it just starts to look for files ending with `spec.js` from the running directory and starts executing them.

A sample of the unit is below:

```js
describe('App.vue', () => {
  it('should render with app banner', () => {
    const wrapper = shallowMount(App);
    const banner = wrapper.find('.banner');

    expect(banner.isVisible()).toBeTruthy();
    expect(banner.find('.display-3').text()).toMatch(/iTunes Album Finder/);
    expect(banner.find('.lead').text()).toMatch(
      /One stop for all your favourite artist's albums/
    );
  });
});
```

> If you are familiar with [`jasmine`][jasmine], then this should not be a surprise to you. ^\_^

<center> Happy Testing! \O/ </center>

[jest]: https://jestjs.io/
[jasmine]: https://jasmine.github.io/index.html
