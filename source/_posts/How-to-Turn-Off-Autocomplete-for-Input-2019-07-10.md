---
title: How to Turn Off Autocomplete for Input
tags:
  - How To
  - HTML
  - Web Browser
icon: fab fa-html5
date: 2019-07-10 23:21:36
---


# Solutions

- [Field Level turn off](#Field-Level)
- [Form Level turn off](#Form-Level)
- [Special case for Firefox](#Special-case-for-Firefox)

I have recently encountered a situation where I had to turn off the `autocomplete` option for filling out the saved passwords by browser.

It was interesting to find out that there is a way to turn this option off. One can consider this a security reason but to me it was about turning it off on the new password page. Browser was filling out the new password field with the saved password >\_O

There are two ways to turn it off one from `field` level another one from `form` level. Pick the one most suited for you!

## Field Level

```html
<input name="ashkeys" type="password" autocomplete="off" />
```

## Form Level

```html
<form autocomplete="off">
  <input name="ashkeys" type="password" />
</form>
```

## Special case for Firefox

It was not that easy with firefox though! Sorry I could not provide you guys with the information why it was the case.

For the firefox sake: >\_<

```html
<form>
  <input type="password" hidden />
  <input name="ashkeys" type="password" />
</form>
```

Yeah, you are right! We are cheating the browser here by declaring the first password field `hidden` so that browser will the saved password there.
