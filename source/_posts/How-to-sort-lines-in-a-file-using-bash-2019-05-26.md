---
title: How to sort lines in a file using bash
tags:
  - How To
  - Linux
  - Bash
  - Shell
  - Terminal
icon: fas fa-terminal
date: 2019-05-26 21:42:28
---


It is nice to know how to sort the contents of a file using bash. Let us take an example where we have a `.csv` file with the records of employees as following:

```excel
emp_id;first_name;last_name;email;designation
000002;Ash;Keys;AshKeys@ashokma.com;UX Designer
000003;Sojiro;De Tenken;sojiro@ashokma.com;Tester
000001;Ashok;M A;ashokma@ashokma.com;Web Developer
```

If we would like to sort the contents of this file for no reason, we can do it using `sort` command.

```console
$ sort ashokma.com/employees.csv

000001;Ashok;M A;ashokma@ashokma.com;Web Developer
000002;Ash;Keys;AshKeys@ashokma.com;UX Designer
000003;Sojiro;De Tenken;sojiro@ashokma.com;Tester
emp_id;first_name;last_name;email;designation
```

It is being sorted as expected but there is one little problem. The column names are at the bottom and we do not want that as it is not valid for database records processing. In order to keep the column names up top, we just have to supply the `-r` option which is to reverse the output.

```console
$ sort ashokma.com/employees.csv

emp_id;first_name;last_name;email;designation
000003;Sojiro;De Tenken;sojiro@ashokma.com;Tester
000002;Ash;Keys;AshKeys@ashokma.com;UX Designer
000001;Ashok;M A;ashokma@ashokma.com;Web Developer
```

> As it only outputs the sorted values to console, we have to stream it back to the same file like: <br> `sort ashokma.com/employees.csv > ashokma.com/employees.csv`

I understand that it is in decending order but sorted ^\_^ As an alternative, we can cut the columns line and paste it again once records are sorted!

> **Tip:** Using the `-u` option you can keep only the unique records along with the sorting process.
