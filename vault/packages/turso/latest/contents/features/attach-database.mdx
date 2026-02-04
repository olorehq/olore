---
title: Attach Database (Deprecated)
description: Attach and read data across multiple databases.
---

<Warning>
  This feature is now deprecated for all new users. Existing paid users can
  continue to use `ATTACH` &mdash; [read the
  announcement](https://turso.tech/blog/upcoming-changes-to-the-turso-platform-and-roadmap)
</Warning>

The `ATTACH` statement enables you to link multiple databases within a single transaction, which is ideal for:

- Organizing data in a modular way
- Streamlining data access and enhancing scalability
- Aggregating data

## How it works

1. You enable the `ATTACH` feature on the databases you want to connect to.
2. You retrieve the **Database ID** for the database you want to `ATTACH`.
3. You connect to the database
   - **CLI**: `--attach` flag to automatically create a token with the correct permissions.
   - **SDK**: Create a token with the `attach` permission for the database you want to attach.
4. You invoke `ATTACH` to connect to the other databases within the database shell or SDK.

## Usage

You can use the `ATTACH` statement to connect to other databases within a transaction using the CLI, or libSQL SDK. Once attached, you can query the attached databases as if they were part of the current database using the assigned alias.

### Turso CLI

Make sure you have the [Turso CLI](/cli/installation) installed, and [logged in](/cli/auth/login).

<Steps>

<Step title="Enable attach on required databases">

You will first need to enable the `ATTACH` feature on the database(s) you want to attach:

```bash
turso db config attach allow <database-name>
```

</Step>

<Step title="Retrieve Database ID">

You now need to retrieve the **Database ID** for the database you want to `ATTACH`:

```bash
turso db show <database-name>
```

</Step>

<Step title="Connect to any database with attach">

Now pass the names of the databases via the `--attach` flag when connecting to your database(s):

```bash
turso db shell <database-name> --attach <...database-name(s)>
```

</Step>

<Step title="ATTACH">

Now once connected to the database you can invoke an `ATTACH` statement to connect the other database(s):

```sql
ATTACH "<database-id>" AS my_db;
```

</Step>

<Step title="Query">

Execute a query using the alias for any attached database(s):

```sql
SELECT * FROM my_db.my_table;
```

</Step>

</Steps>

### libSQL SDKs

You can use one of the libSQL client SDKs with [TypeScript](/sdk/ts), [Rust](/sdk/rust), [Go](/sdk/go), [Python](/sdk/python), or over [HTTP](/sdk/http).

<Steps>

<Step title="Enable attach on required databases">

You will first need to enable the `ATTACH` feature on the database(s) you want to attach:

```bash
turso db config attach allow <database-name>
```

</Step>

<Step title="Retrieve Database ID">

You now need to retrieve the **Database ID** for the database you want to `ATTACH`:

```bash
turso db show <database-name>
```

</Step>

<Step title="Create token with ATTACH permissions">

Now create a token for the libSQL client with the `attach` permission for the database you want to attach:

```bash
turso db tokens create <database-name> --attach <another-database-name>
```

</Step>

<Step title="Connect to any database with ATTACH">

Use a [Client SDK](/sdk) to attach the desired database within a read transaction:

<CodeGroup>

```ts @libsql/client
import { createClient } from "@libsql/client";

const client = createClient({
  syncUrl: "libsql://...",
  authToken: "...",
});

const txn = await db.transaction("read");

await txn.execute('ATTACH "<database-id>" AS my_db');

const rs = await txn.execute("SELECT * FROM my_db.my_table");
```

</CodeGroup>

</Step>

</Steps>

## Things to know

- You can only attach databases that have the `attach` feature enabled.
- You can only attach databases belonging to a group, and in the same group.
- There is a maximum of 10 databases that can be attached to a single transaction.
- The attached databases are read only.
- `ATTACH` statement can be used only within transactions.
- `ATTACH` doesn't support [Embedded Replicas](/features/embedded-replicas)
