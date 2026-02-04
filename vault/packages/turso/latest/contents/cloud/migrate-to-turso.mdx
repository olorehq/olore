---
title: Migrate to Turso
description: Learn how to import your existing SQLite database to Turso.
---

This guide will walk you through the process of migrating your existing SQLite database to Turso Cloud. You can choose between using the Turso CLI, or the Platform API.

<Frame>

![Migrate to Turso](/images/cloud/import.png)

</Frame>

## Preparing to Migrate

Before importing your SQLite database to Turso, you need to ensure it's compatible with Turso's requirements. Specifically, your SQLite database should be using WAL (Write-Ahead Logging) mode.

<Steps>

<Step title="Open your SQLite database">

Use the SQLite command-line tool or any SQLite client to open your database:

```bash
sqlite3 path/to/your/database.db
```

</Step>

<Step title="Set WAL journal mode">

Run the following command to switch your database to WAL mode:

```sql
PRAGMA journal_mode='wal';
```

This should return `wal` to confirm the change was successful.

</Step>

<Step title="Checkpoint and truncate the WAL file">

Execute a checkpoint to ensure all changes are written to the main database file and truncate the WAL file:

```sql
PRAGMA wal_checkpoint(truncate);
```

</Step>

<Step title="Verify the journal mode">

Confirm that your database is now in WAL mode:

```sql
PRAGMA journal_mode;
```

This should return `wal`.

</Step>

<Step title="Close the database">

Exit the SQLite shell:

```sql
.exit
```

Your database is now ready for migration to Turso.

</Step>

</Steps>

## Using the CLI

You can create a new database from a local SQLite file using the Turso CLI:

<Steps>

<Step title="Install the Turso CLI">

Make sure you have the [Turso CLI installed](/cli/introduction), and you're authenticated.

</Step>

<Step title="Import your SQLite Database">

Import your existing SQLite database file using the `db import` command:

```bash
turso db import ~/path/to/my-database.db
```

<Note>
  Your database will be named after the file (without the .db extension), and
  will import all your tables, data, and schema.
</Note>

</Step>

<Step title="Connect to your database">

You can now connect to your database using the shell:

```bash
turso db shell <database-name>
```

</Step>

</Steps>

## Using the Platform API

You can also use the Platform API to migrate your existing SQLite database:

<Steps>

<Step title="Signup or Login using the Turso CLI">

Make sure to [install the Turso CLI](/cli/installation) if you haven't
already.

<CodeGroup>

```bash Signup
turso auth signup
```

```bash Login
turso auth login
```

</CodeGroup>

</Step>

<Step title="Create a new Platform API Token">

Now create a new API Token using the Turso CLI:

```bash
turso auth api-tokens mint quickstart
```

<Info>

Make sure to save the token somewhere safe. You'll need it to create a database and database token.

</Info>

</Step>

<Step title="Retrieve your account or organization slug">

The Platform API can be used with your personal account or with an organization. You'll need the obtain the `slug` of your account or organization using using the Turso CLI:

```bash
turso org list
```

</Step>

<Step title="Create a Database for Import">
First, create a database that's ready to receive an import:

```bash
curl -X POST "https://api.turso.tech/v1/organizations/{organizationSlug}/databases" \
  -L \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "new-database",
      "group": "default",
      "seed": { "type": "database_upload" }
  }'
```

<Note>

The `seed` parameter with `"type": "database_upload"` indicates that you plan to upload a database file. If you don't proceed to upload a database, this database will count towards your quota, but will not be usable.

</Note>

</Step>

<Step title="Create a Database Token">

Generate an authentication token for your database:

```bash
curl -X POST "https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/auth/tokens" \
  -L \
  -H "Authorization: Bearer TOKEN"
```

This token will be used to authenticate your upload request, and future requests to the database.

</Step>

<Step title="Upload Your SQLite Database">
Finally, upload your SQLite database file:

```bash
curl -X POST "https://{databaseName}-{organizationSlug}.turso.io/v1/upload" \
  -H "Authorization: Bearer DATABASE_TOKEN" \
  --data-binary @/path/to/your/database.db
```

<Note>
  The `Authorization` header uses the database token you generated in the
  previous step, not your Platform API token.
</Note>

</Step>

</Steps>

You're now ready to connect to your new Turso database using any of the Turso client libraries.

<Snippet file="all-sdks.mdx" />
