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

- [Field Level turn off](#Field-Level-in-general)
- [Form Level turn off](#Form-Level)
- [Special case for all browsers](#Special-case-for-all-browsers)

I have recently encountered a situation where I had to turn off the `autocomplete` option for filling out the saved passwords by browser.

It was interesting to find out that there is a way to turn this option off. One can consider this for a security reason but to me it was about turning it off on the new password page. Browser was filling out the new password field with the saved password >\_O

There are two ways to turn it off in `field` level!

## Field Level in general

```html
<input name="ashkeys" type="text" autocomplete="off" />
```

Even though few browsers support `autocomplete`, there are cases they ignore all together. Login or Sign-up forms for example. In those cases, the following helps.

## Field Level for new passwords

```html
<input name="ashkeys" type="password" autocomplete="new-password" />
```

## Form Level

```html
<form autocomplete="off">
  <input name="ashkeys" type="password" />
</form>
```

## Special case for all browsers

The below one is kind of hacky way to trick the browser than turn off the `autocomplete` option. /O\ One should consider this as a last resort to solve the problem.

```html
<form>
  <input type="password" hidden />
  <input name="ashkeys" type="password" />
</form>
```

Yeah, you are right! We are cheating the browser here by declaring the first password field `hidden` so that browser will the saved password there.
