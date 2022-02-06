---
title: How to emulate light or dark theme switch in chrome
tags:
  - How to
  - Chrome dev tools
icon: fab fa-chrome
date: 2022-02-06 20:18:03
---


Nowadays, every website comes with dark modes available in order to ease the reader's eyes.

Sometimes, we like to switch between these two while developing. Chrome comes with a varity of options in order to achieve the same.

## Dev tools.

- Open Developer tools by pressing `F12`.
- Open the Command Control: `Ctrl+Shift+P` or `Command+Shift+P` (Mac)
- Type _Show rendering_
- Set the _Emulate CSS media feature prefers-color-scheme_ to either `prefers-color-scheme: light` or `prefers-color-scheme: dark`.
