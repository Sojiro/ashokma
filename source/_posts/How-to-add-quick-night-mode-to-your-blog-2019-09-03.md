---
title: How to add quick night mode to your blog
tags:
  - How To
  - Blog
  - CSS3
  - HTML
  - JavaScript
icon: fab fa-css3-alt
date: 2019-09-03 22:55:13
---


As you might have already noticed, I have added an instant night mode option to [ashokma.com](//ashokma.com). It is nothing fancy of sort but it does the job right by making our eyes ease to read at night +\_+

In case you did not notice, here is the quick guide:

### Day Mode:

![Ashkeys Instant Night Mode](./ashkeys-instant-nightmode.png 'Ashkeys Instant Night Mode')

### Night Mode:

![Ashkeys Instant Night Mode On](./ashkeys-instant-nightmode-on.png 'Ashkeys Instant Night Mode On')

Now, lets see how can we do this in a very simple css styles. I have used the [`filter`][filter] property and `invert` function to invert the colors totally. Since our site is fully of bright colors already, it totally makes sense and easy to do as we agreed it is an instant one. ^\_^

## CSS Part:

```scss
body {
  // Yes, we need to apply it to the body so that it is for all the pages/sections.
  transition: all 0.8s;
  &.night-mode {
    background: #000;
    filter: invert(1) hue-rotate(210deg);
    img {
      filter: invert(1);
    }
  }
}
```

We need the night mode but also where people can read the lines without streching their eyes wide. So, I ended up with the above styles. It was challenging to find the perfect one for images though. O_o

> **Tip:** Always use some preprocessors like [`SASS`](https://sass-lang.com/) I used here. It saves a lot of time by reducing the duplication and increasing the readability. More over, we can groupd the styles properly.

## HTML Part

Just a small checkbox (obviously a [custom made][1] one with cute little night mode icons sun/moon) ^\_^

```html
<input
  type="checkbox"
  onchange="toggle(this.checked);"
  id="nightModeIndicator"
/>
```

## JS Part

It is easy to add the class to the body as you already know. But, we need to remember the user selection somewhere so that we can keep track of it between the pages and tabs. For that, [`localStorage`][2] would be the right man for the job.

```js
function toggle(nightMode) {
  /* Yea, this is ugly due to the fact that when we retrieve from localStorage,
   it gives us all as strings. >_O */
  nightMode === 'true' || nightMode === true
    ? document.body.classList.add('night-mode')
    : document.body.classList.remove('night-mode');

  // Do remember to choose a meaningful name under the respective namespace.
  window.localStorage.setItem('ashokma.com.nightmode', nightMode);
}

toggle(window.localStorage.getItem('ashokma.com.nightmode'));

// Make sure the below will be called after the night-mode checkbox creation.
document.getElementById('nightModeIndicator').checked =
  window.localStorage.getItem('ashokma.com.nightmode') === 'true';
```

> **Tip:** [`sessionStorage`][3] is also an option if you want to persist the selection per session that is per browser window. As soon as the user closes the tab, the [`sessionStorage`][3] will be cleared.

[1]: /2019/08/26/How-to-create-a-custom-checkbox-with-just-CSS/
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[filter]: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
