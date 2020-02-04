---
title: How to tune up your PostgreSQL performance
tags:
  - How to
  - Postgres
  - Performance
  - DB
icon: fas fa-database
date: 2019-12-15 11:25:14
---


Recently, at work, we were facing performance issues with our database queries. As the databse grew to millions of records in a short time, querying even a small segment of data was taking so much time. There was an urgent need to improve the query execution time.

For instance, the query execution on a massive table took around 60s as follows.

```postgres
ashkeys=> explain analyze select * from massive_table;
                                                    QUERY PLAN
------------------------------------------------------------------------------------------------------------------
 Seq Scan on massive_table  (cost=0.00..1363033.47 rows=42377647 width=144) (actual time=5.269..27925.251 rows=42619306 loops=1)
 Planning time: 0.321 ms
 Execution time: 62062.535 ms
(3 rows)

```

With the following update to the `postgresql.conf` file, the performance improved a lot since the `postgres` had a lot of memory to work with \O/.

```properties
#------------------------------------------------------------------------------
# RESOURCE USAGE (except WAL)
#------------------------------------------------------------------------------

# - Memory -

shared_buffers = 13GB                   # min 128kB
                                        # (change requires restart)
#huge_pages = on                        # on, off, or try
                                        # (change requires restart)
#temp_buffers = 1GB                     # min 800kB
#max_prepared_transactions = 0          # zero disables the feature
                                        # (change requires restart)
# Caution: it is not advisable to set max_prepared_transactions nonzero unless
# you actively intend to use prepared transactions.
work_mem = 1GB                          # min 64kB

```

With above configurations, `postgres` executed the same query a lot more better.

```postgres
ashkeys=> explain analyze select * from massive_table;
                                                    QUERY PLAN
------------------------------------------------------------------------------------------------------------------
 Seq Scan on massive_table  (cost=0.00..1363033.47 rows=42377647 width=144) (actual time=5.269..27925.251 rows=42619306 loops=1)
 Planning time: 0.321 ms
 Execution time: 29062.535 ms
(3 rows)

```

> **P.S:** It only increases the performance to some point and does not guarantee super speed execution. Mind your relations in the relational carefully ^\_^
