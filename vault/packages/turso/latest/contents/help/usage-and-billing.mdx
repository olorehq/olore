---
title: Usage & Billing
---

For the Starter and Scaler plans, Turso usage is limited monthly based on the following usage observations during each calendar month:

- Number of table [rows read](#rows-read)
- Number of table [rows written](#rows-written)
- Amount of [total storage](#total-storage)

<Info>

In billing plans that include monthly quotas for row reads, row writes, and total storage, any query that exceeds these limits will result in a failure, indicated by the `BLOCKED` error code.

</Info>

## Rows Read

In SQLite, the term "row read" actually refers to a "row scan" during statement execution. Key points to remember with the Turso CLI metrics:

- **SQL Queries:** May scan more rows than returned.
- **SQL Updates:** Each updated row results in at least one row scan.

### Aggregate Function Impact

Using functions like `count`, `avg`, `min`, `max`, and `sum` results in a row scan for every row considered in the aggregation.

<Info>
  Improve query efficiency by storing aggregate values in a separate table and
  updating it transactionally with the base table changes.
</Info>

### Full Table Scans

Queries lacking index support perform a full table scan, incurring a row scan for each table row.

<Info>

Seek strategies to minimize costly table scans.

</Info>

### Complex Query Costs

Table joins, subqueries, and compound queries incur a row scan for each considered row from all involved tables.

### Update Mechanics

SQL updates read (and write) each row they modify. Absent an index for row filtering, a full table scan is performed, adding a read for each table row, plus a write for each updated row.

### `ALTER TABLE` and Row Reads

`ALTER TABLE` operations, especially those rewriting row contents, necessitate a full table scan, incurring a read for each table row. However, not all `ALTER TABLE` actions, like `DROP COLUMN`, lead to full scans. Be mindful of potential row writes as well.

### Indexing Costs

Adding an index to an existing table triggers a full table scan, with one read per existing row.

### SQLite System Tables

Internal SQLite tables, like `dbstat` and those with `sqlite_` prefix, don't incur row reads in queries.

### Zero-Read Commands

Commands not involving row reads/writes, like `select 1`, default to one row read.

## Rows Written

In SQLite, a "row written" encompasses both the insertion of a new row and the update of an existing row.

### `ALTER TABLE` and Row Writes

`ALTER TABLE` operations can result in a row write for each existing row, especially if the row data is altered during the process. It's important to understand how different types of `ALTER TABLE` statements impact row writes.

### Implications of Aborted Transactions

Even if a transaction is not committed, any row that was inserted or updated during the transaction incurs a row write. This underscores the importance of transaction management in controlling database writes.

<Note>

`ALTER TABLE` actions may also lead to row reads, adding another layer to consider when modifying table structures.

</Note>

## Total Storage

SQLite utilizes the virtual table [`dbstat`](https://www.sqlite.org/dbstat.html) to calculate the total space used by all tables and indexes. The base unit for this measurement is a database file page, which is 4KB.

<Note>

In SQLite, the `VACUUM` command is a common tool for optimizing storage by compacting the database. However, it's important to note that this command is currently disabled in Turso. Future updates may introduce options for developers to efficiently manage and reduce the total storage footprint of their databases.

</Note>

## Reducing Usage

### Query Execution

Familiarizing yourself with the [SQLite query planner](https://www.sqlite.org/queryplanner.html) can significantly enhance your understanding of how your queries are executed. This knowledge is pivotal in optimizing query efficiency.

### Query Planning

Utilize the [`EXPLAIN QUERY PLAN`](https://www.sqlite.org/eqp.html) statement to gain insights into your query's execution plan. This tool is invaluable for identifying whether your query is performing a full table scan and if it's leveraging the most efficient index to reduce unnecessary reads.

### Indexing

Ensure that your queries are designed to take advantage of indexes for row filtering. The absence of suitable indexes forces SQLite to resort to full table scans, incrementally increasing the read count by one for each row in the table. Efficient indexing is key to minimizing this overhead.

Incorporating necessary indexes at the table creation stage is a best practice. Adding indexes to tables that already contain rows triggers a full table scan, with each existing row necessitating one read. Proactive index management is crucial for maintaining optimal database performance.
