---
title: How to make an editable text in HTML
tags:
  - How to
  - HTML5
icon: fab fa-html5
date: 2020-02-16 03:25:46
---


Sometime making a text element editable makes sense such as `div` , `span` or `p` than having to create a text `input` field.

We can do the same using the `contenteditable` attribute of those elements.^_^

``` html
<head>
    <style>
        div {
            cursor: pointer;
        }

        div:focus {
            cursor: text;
        }
    </style>
</head>

<body>
    <div contenteditable="true">This is editable!</div>
</body>
```

> **Tip:** It comes really handy with one-way binding situations with frameworks like Angular/React/Vue.\O/

> **Note:** `contenteditable` attribute is only available in HTML5 O_o

