---
title: How to monitor query execution time in postgres
tags:
  - How to
  - Postgres
  - Debug
icon: fas fa-database
date: 2022-01-19 21:46:48
---


Recently, I had to debug our database to find out why some of the transaction takes more time.

This can be done by making use of the `postgresql.conf`.

## Enable logging of long queries

With the below configuration property, we can tell the postgres to log statements that take too long to execute.

```conf
log_min_duration_statement='300' # Time in milliseconds
```

| Other possible settings         | Meaning         |
| ------------------------------- | --------------- |
| log_min_duration_statement='-1' | disable         |
| log_min_duration_statement='0'  | log all queries |

Now, we can monitor the logs to see the long queries.
