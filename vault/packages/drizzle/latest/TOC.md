# drizzle Table of Contents

## Directory Map

```
contents/
├── (root)           # Core docs (dialect-agnostic) (32 files)
├── cockroach/       # CockroachDB docs (53 files)
├── column-types/    # Column type references (2 files)
├── get-started/     # Per-database quickstarts (58 files)
├── guides/          # How-to recipes (25 files)
├── mssql/           # MSSQL docs (52 files)
├── mysql/           # MySQL docs (63 files)
├── pg/              # PostgreSQL docs (73 files)
├── singlestore/     # SingleStore docs (49 files)
├── sqlite/          # SQLite docs (69 files)
├── tutorials/       # Integration tutorials (19 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview | `contents/overview.mdx` |
| Quick start | `contents/quick.mdx` |
| Get started | `contents/get-started.mdx` |
| PostgreSQL schema | `contents/pg/sql-schema-declaration.mdx` |
| MySQL schema | `contents/mysql/sql-schema-declaration.mdx` |
| SQLite schema | `contents/sqlite/sql-schema-declaration.mdx` |
| Select queries | `contents/pg/select.mdx` |
| Relational queries | `contents/pg/rqb.mdx` |
| Drizzle Kit | `contents/pg/kit-overview.mdx` |
| Drizzle config | `contents/drizzle-config-file.mdx` |
| Recipes | `contents/guides/` |

## Detailed Structure

### (root) (32 files)

| File | Description |
|------|-------------|
| `arktype.mdx` | arktype.mdx |
| `data-querying.mdx` | data-querying.mdx |
| `drizzle-config-file.mdx` | drizzle-config-file.mdx |
| `drizzle-kit-mcp.mdx` | Drizzle Kit MCP server |
| `drizzle-kit-skills.mdx` | Drizzle agent skills |
| `effect-schema.mdx` | effect-schema.mdx |
| `eslint-plugin.mdx` | eslint-plugin.mdx |
| `faq.mdx` | faq.mdx |
| `get-started-gel.mdx` | get-started-gel.mdx |
| `get-started.mdx` | get-started.mdx |
| `gotchas.mdx` | gotchas.mdx |
| `graphql.mdx` | graphql.mdx |
| `guides.mdx` | guides.mdx |
| `jit-mappers.mdx` | jit-mappers.mdx |
| `kit-migrations-for-teams.mdx` | kit-migrations-for-teams.mdx |
| `kit-seed-data.mdx` | kit-seed-data.mdx |
| `kit-web-mobile.mdx` | kit-web-mobile.mdx |
| `overview.mdx` | overview.mdx |
| `perf-serverless.mdx` | perf-serverless.mdx |
| `quick.mdx` | quick.mdx |
| `relations-schema-declaration.mdx` | relations-schema-declaration.mdx |
| `relations.mdx` | relations.mdx |
| `seed-functions.mdx` | seed-functions.mdx |
| `seed-limitations.mdx` | seed-limitations.mdx |
| `tutorials.mdx` | tutorials.mdx |
| `typebox-legacy.mdx` | typebox-legacy.mdx |
| `typebox.mdx` | typebox.mdx |
| `upgrade-21.mdx` | upgrade-21.mdx |
| `upgrade-v1.mdx` | upgrade-v1.mdx |
| `valibot.mdx` | valibot.mdx |
| `why-drizzle.mdx` | why-drizzle.mdx |
| `zod.mdx` | zod.mdx |

### cockroach/ (53 files)

| File | Description |
|------|-------------|
| `aliases.mdx` | aliases.mdx |
| `arktype.mdx` | arktype.mdx |
| `cache.mdx` | cache.mdx |
| `column-types.mdx` | CockroachDB column types |
| `connect-overview.mdx` | connect-overview.mdx |
| `custom-types.mdx` | custom-types.mdx |
| `data-querying.mdx` | data-querying.mdx |
| `delete.mdx` | delete.mdx |
| `drizzle-config-file.mdx` | drizzle-config-file.mdx |
| `drizzle-kit-check.mdx` | drizzle-kit-check.mdx |
| `drizzle-kit-export.mdx` | drizzle-kit-export.mdx |
| `drizzle-kit-generate.mdx` | drizzle-kit-generate.mdx |
| `drizzle-kit-migrate.mdx` | drizzle-kit-migrate.mdx |
| `drizzle-kit-pull.mdx` | drizzle-kit-pull.mdx |
| `drizzle-kit-push.mdx` | drizzle-kit-push.mdx |
| `drizzle-kit-studio.mdx` | drizzle-kit-studio.mdx |
| `drizzle-kit-up.mdx` | drizzle-kit-up.mdx |
| `dynamic-query-building.mdx` | dynamic-query-building.mdx |
| `effect-schema.mdx` | effect-schema.mdx |
| `extensions.mdx` | Cockroach extensions |
| `generated-columns.mdx` | generated-columns.mdx |
| `get-started-cockroach.mdx` | get-started-cockroach.mdx |
| `goodies.mdx` | goodies.mdx |
| `indexes-constraints.mdx` | indexes-constraints.mdx |
| `insert.mdx` | insert.mdx |
| `joins.mdx` | joins.mdx |
| `kit-custom-migrations.mdx` | kit-custom-migrations.mdx |
| `kit-overview.mdx` | kit-overview.mdx |
| `migrations.mdx` | migrations.mdx |
| `operators.mdx` | operators.mdx |
| `overview.mdx` | overview.mdx |
| `perf-queries.mdx` | perf-queries.mdx |
| `query-utils.mdx` | query-utils.mdx |
| `read-replicas.mdx` | read-replicas.mdx |
| `relations-schema-declaration.mdx` | relations-schema-declaration.mdx |
| `relations.mdx` | relations.mdx |
| `rqb.mdx` | rqb.mdx |
| `schemas.mdx` | schemas.mdx |
| `seed-functions.mdx` | seed-functions.mdx |
| `seed-overview.mdx` | seed-overview.mdx |
| `seed-versioning.mdx` | seed-versioning.mdx |
| `select.mdx` | select.mdx |
| `sequences.mdx` | sequences.mdx |
| `set-operations.mdx` | set-operations.mdx |
| `sql-schema-declaration.mdx` | sql-schema-declaration.mdx |
| `sql.mdx` | sql.mdx |
| `transactions.mdx` | transactions.mdx |
| `typebox-legacy.mdx` | typebox-legacy.mdx |
| `typebox.mdx` | typebox.mdx |
| `update.mdx` | update.mdx |
| `valibot.mdx` | valibot.mdx |
| `views.mdx` | views.mdx |
| `zod.mdx` | zod.mdx |

### column-types/ (2 files)

| File | Description |
|------|-------------|
| `cockroach.mdx` | CockroachDB column types |
| `mssql.mdx` | MSSQL column types |

### get-started/ (58 files)

| File | Description |
|------|-------------|
| `appwrite-mysql-existing.mdx` | appwrite-mysql-existing.mdx |
| `appwrite-mysql-new.mdx` | appwrite-mysql-new.mdx |
| `appwrite-postgres-existing.mdx` | appwrite-postgres-existing.mdx |
| `appwrite-postgres-new.mdx` | appwrite-postgres-new.mdx |
| `bun-sql-existing.mdx` | bun-sql-existing.mdx |
| `bun-sql-new.mdx` | bun-sql-new.mdx |
| `bun-sqlite-existing.mdx` | bun-sqlite-existing.mdx |
| `bun-sqlite-new.mdx` | bun-sqlite-new.mdx |
| `cockroach-existing.mdx` | cockroach-existing.mdx |
| `cockroach-new.mdx` | cockroach-new.mdx |
| `d1-existing.mdx` | d1-existing.mdx |
| `d1-new.mdx` | d1-new.mdx |
| `do-existing.mdx` | do-existing.mdx |
| `do-new.mdx` | do-new.mdx |
| `effect-postgresql-existing.mdx` | effect-postgresql-existing.mdx |
| `effect-postgresql-new.mdx` | effect-postgresql-new.mdx |
| `expo-existing.mdx` | expo-existing.mdx |
| `expo-new.mdx` | expo-new.mdx |
| `gel-existing.mdx` | gel-existing.mdx |
| `gel-new.mdx` | gel-new.mdx |
| `mssql-existing.mdx` | mssql-existing.mdx |
| `mssql-new.mdx` | mssql-new.mdx |
| `mysql-existing.mdx` | mysql-existing.mdx |
| `mysql-new.mdx` | mysql-new.mdx |
| `neon-existing.mdx` | neon-existing.mdx |
| `neon-new.mdx` | neon-new.mdx |
| `nile-existing.mdx` | nile-existing.mdx |
| `nile-new.mdx` | nile-new.mdx |
| `node-sqlite-existing.mdx` | node-sqlite-existing.mdx |
| `node-sqlite-new.mdx` | node-sqlite-new.mdx |
| `op-sqlite-existing.mdx` | op-sqlite-existing.mdx |
| `op-sqlite-new.mdx` | op-sqlite-new.mdx |
| `pglite-existing.mdx` | pglite-existing.mdx |
| `pglite-new.mdx` | pglite-new.mdx |
| `planetscale-existing.mdx` | planetscale-existing.mdx |
| `planetscale-new.mdx` | planetscale-new.mdx |
| `planetscale-postgres-existing.mdx` | planetscale-postgres-existing.mdx |
| `planetscale-postgres-new.mdx` | planetscale-postgres-new.mdx |
| `postgresql-existing.mdx` | postgresql-existing.mdx |
| `postgresql-new.mdx` | postgresql-new.mdx |
| `singlestore-existing.mdx` | singlestore-existing.mdx |
| `singlestore-new.mdx` | singlestore-new.mdx |
| `sqlite-cloud-existing.mdx` | sqlite-cloud-existing.mdx |
| `sqlite-cloud-new.mdx` | sqlite-cloud-new.mdx |
| `sqlite-existing.mdx` | sqlite-existing.mdx |
| `sqlite-new.mdx` | sqlite-new.mdx |
| `supabase-existing.mdx` | supabase-existing.mdx |
| `supabase-new.mdx` | supabase-new.mdx |
| `tidb-existing.mdx` | tidb-existing.mdx |
| `tidb-new.mdx` | tidb-new.mdx |
| `turso-database-existing.mdx` | turso-database-existing.mdx |
| `turso-database-new.mdx` | turso-database-new.mdx |
| `turso-existing.mdx` | turso-existing.mdx |
| `turso-new.mdx` | turso-new.mdx |
| `vercel-existing.mdx` | vercel-existing.mdx |
| `vercel-new.mdx` | vercel-new.mdx |
| `xata-existing.mdx` | xata-existing.mdx |
| `xata-new.mdx` | xata-new.mdx |

### guides/ (25 files)

| File | Description |
|------|-------------|
| `conditional-filters-in-query.mdx` | Conditional filters in query |
| `count-rows.mdx` | Count rows |
| `cursor-based-pagination.mdx` | SQL Cursor-based pagination |
| `d1-http-with-drizzle-kit.mdx` | Cloudflare D1 HTTP API with Drizzle Kit |
| `decrementing-a-value.mdx` | SQL Decrement value |
| `empty-array-default-value.mdx` | Empty array as a default value |
| `full-text-search-with-generated-columns.mdx` | Full-text search with Generated Columns |
| `gel-ext-auth.mdx` | Gel auth extension |
| `include-or-exclude-columns.mdx` | Include or Exclude Columns in Query |
| `incrementing-a-value.mdx` | SQL Increment value |
| `limit-offset-pagination.mdx` | SQL Limit/Offset pagination |
| `mysql-local-setup.mdx` | How to setup MySQL locally |
| `point-datatype-psql.mdx` | Point datatype in PostgreSQL |
| `postgis-geometry-point.mdx` | PostGIS geometry point |
| `postgresql-full-text-search.mdx` | PostgreSQL full-text search |
| `postgresql-local-setup.mdx` | How to setup PostgreSQL locally |
| `seeding-using-with-option.mdx` | Seeding using 'with' option |
| `seeding-with-partially-exposed-schema.mdx` | Seeding Partially Exposed Tables with Foreign Key |
| `select-parent-rows-with-at-least-one-related-child-row.mdx` | Select parent rows with at least one related child row |
| `timestamp-default-value.mdx` | SQL Timestamp as a default value |
| `toggling-a-boolean-field.mdx` | SQL Toggle value |
| `unique-case-insensitive-email.mdx` | Unique and Case-Insensitive Email Handling |
| `update-many-with-different-value.mdx` | Update many with different values for each row |
| `upsert.mdx` | Upsert Query |
| `vector-similarity-search.mdx` | Vector similarity search with pgvector extension |

### mssql/ (52 files)

| File | Description |
|------|-------------|
| `aliases.mdx` | aliases.mdx |
| `arktype.mdx` | arktype.mdx |
| `cache.mdx` | cache.mdx |
| `column-types.mdx` | MSSQL column types |
| `connect-overview.mdx` | connect-overview.mdx |
| `custom-types.mdx` | custom-types.mdx |
| `data-querying.mdx` | data-querying.mdx |
| `delete.mdx` | delete.mdx |
| `drizzle-config-file.mdx` | drizzle-config-file.mdx |
| `drizzle-kit-check.mdx` | drizzle-kit-check.mdx |
| `drizzle-kit-export.mdx` | drizzle-kit-export.mdx |
| `drizzle-kit-generate.mdx` | drizzle-kit-generate.mdx |
| `drizzle-kit-migrate.mdx` | drizzle-kit-migrate.mdx |
| `drizzle-kit-pull.mdx` | drizzle-kit-pull.mdx |
| `drizzle-kit-push.mdx` | drizzle-kit-push.mdx |
| `drizzle-kit-studio.mdx` | drizzle-kit-studio.mdx |
| `drizzle-kit-up.mdx` | drizzle-kit-up.mdx |
| `dynamic-query-building.mdx` | dynamic-query-building.mdx |
| `effect-schema.mdx` | effect-schema.mdx |
| `extensions.mdx` | MSSQL extensions |
| `generated-columns.mdx` | generated-columns.mdx |
| `get-started-mssql.mdx` | get-started-mssql.mdx |
| `goodies.mdx` | goodies.mdx |
| `indexes-constraints.mdx` | indexes-constraints.mdx |
| `insert.mdx` | insert.mdx |
| `joins.mdx` | joins.mdx |
| `kit-custom-migrations.mdx` | kit-custom-migrations.mdx |
| `kit-overview.mdx` | kit-overview.mdx |
| `migrations.mdx` | migrations.mdx |
| `operators.mdx` | operators.mdx |
| `overview.mdx` | overview.mdx |
| `perf-queries.mdx` | perf-queries.mdx |
| `query-utils.mdx` | query-utils.mdx |
| `read-replicas.mdx` | read-replicas.mdx |
| `relations-schema-declaration.mdx` | relations-schema-declaration.mdx |
| `relations.mdx` | relations.mdx |
| `rqb.mdx` | rqb.mdx |
| `schemas.mdx` | schemas.mdx |
| `seed-functions.mdx` | seed-functions.mdx |
| `seed-overview.mdx` | seed-overview.mdx |
| `seed-versioning.mdx` | seed-versioning.mdx |
| `select.mdx` | select.mdx |
| `set-operations.mdx` | set-operations.mdx |
| `sql-schema-declaration.mdx` | sql-schema-declaration.mdx |
| `sql.mdx` | sql.mdx |
| `transactions.mdx` | transactions.mdx |
| `typebox-legacy.mdx` | typebox-legacy.mdx |
| `typebox.mdx` | typebox.mdx |
| `update.mdx` | update.mdx |
| `valibot.mdx` | valibot.mdx |
| `views.mdx` | views.mdx |
| `zod.mdx` | zod.mdx |

### mysql/ (62 files)

| File | Description |
|------|-------------|
| `aliases.mdx` | aliases.mdx |
| `arktype.mdx` | arktype.mdx |
| `cache.mdx` | cache.mdx |
| `column-types.mdx` | MySQL column types |
| `connect-appwrite-mysql.mdx` | connect-appwrite-mysql.mdx |
| `connect-aws-data-api-mysql.mdx` | connect-aws-data-api-mysql.mdx |
| `connect-bun-sql.mdx` | connect-bun-sql.mdx |
| `connect-drizzle-proxy.mdx` | connect-drizzle-proxy.mdx |
| `connect-overview.mdx` | connect-overview.mdx |
| `connect-planetscale.mdx` | connect-planetscale.mdx |
| `connect-tidb.mdx` | connect-tidb.mdx |
| `custom-types.mdx` | custom-types.mdx |
| `data-querying.mdx` | data-querying.mdx |
| `delete.mdx` | delete.mdx |
| `drizzle-config-file.mdx` | drizzle-config-file.mdx |
| `drizzle-kit-check.mdx` | drizzle-kit-check.mdx |
| `drizzle-kit-export.mdx` | drizzle-kit-export.mdx |
| `drizzle-kit-generate.mdx` | drizzle-kit-generate.mdx |
| `drizzle-kit-migrate.mdx` | drizzle-kit-migrate.mdx |
| `drizzle-kit-pull.mdx` | drizzle-kit-pull.mdx |
| `drizzle-kit-push.mdx` | drizzle-kit-push.mdx |
| `drizzle-kit-studio.mdx` | drizzle-kit-studio.mdx |
| `drizzle-kit-up.mdx` | drizzle-kit-up.mdx |
| `dynamic-query-building.mdx` | dynamic-query-building.mdx |
| `effect-schema.mdx` | effect-schema.mdx |
| `extensions.mdx` | MySQL extensions |
| `generated-columns.mdx` | generated-columns.mdx |
| `get-started-mysql.mdx` | get-started-mysql.mdx |
| `goodies.mdx` | goodies.mdx |
| `indexes-constraints.mdx` | indexes-constraints.mdx |
| `insert.mdx` | insert.mdx |
| `joins.mdx` | joins.mdx |
| `kit-custom-migrations.mdx` | kit-custom-migrations.mdx |
| `kit-overview.mdx` | kit-overview.mdx |
| `migrations.mdx` | migrations.mdx |
| `operators.mdx` | operators.mdx |
| `overview.mdx` | overview.mdx |
| `perf-queries.mdx` | perf-queries.mdx |
| `query-utils.mdx` | query-utils.mdx |
| `read-replicas.mdx` | read-replicas.mdx |
| `relations-schema-declaration.mdx` | relations-schema-declaration.mdx |
| `relations-v1-v2.mdx` | relations-v1-v2.mdx |
| `relations.mdx` | relations.mdx |
| `rqb.mdx` | rqb.mdx |
| `schemas.mdx` | schemas.mdx |
| `seed-functions.mdx` | seed-functions.mdx |
| `seed-overview.mdx` | seed-overview.mdx |
| `seed-versioning.mdx` | seed-versioning.mdx |
| `select.mdx` | select.mdx |
| `set-operations.mdx` | set-operations.mdx |
| `sql-comments.mdx` | sql-comments.mdx |
| `sql-schema-declaration.mdx` | sql-schema-declaration.mdx |
| `sql.mdx` | sql.mdx |
| `transactions.mdx` | transactions.mdx |
| `typebox-legacy.mdx` | typebox-legacy.mdx |
| `typebox.mdx` | typebox.mdx |
| `update.mdx` | update.mdx |
| `upgrade-v1.mdx` | upgrade-v1.mdx |
| `v0-v1-changes.mdx` | v0-v1-changes.mdx |
| `valibot.mdx` | valibot.mdx |
| `views.mdx` | views.mdx |
| `zod.mdx` | zod.mdx |

### mysql/guides/ (1 files)

| File | Description |
|------|-------------|
| `count-rows.mdx` | Count rows |

### pg/ (73 files)

| File | Description |
|------|-------------|
| `aliases.mdx` | aliases.mdx |
| `arktype.mdx` | arktype.mdx |
| `batch-api.mdx` | batch-api.mdx |
| `cache.mdx` | cache.mdx |
| `codecs.mdx` | codecs.mdx |
| `column-types.mdx` | PostgreSQL column types |
| `connect-appwrite-postgres.mdx` | connect-appwrite-postgres.mdx |
| `connect-aws-data-api-pg.mdx` | connect-aws-data-api-pg.mdx |
| `connect-bun-sql.mdx` | connect-bun-sql.mdx |
| `connect-drizzle-proxy.mdx` | connect-drizzle-proxy.mdx |
| `connect-effect-postgres.mdx` | connect-effect-postgres.mdx |
| `connect-neon.mdx` | connect-neon.mdx |
| `connect-netlify-db.mdx` | connect-netlify-db.mdx |
| `connect-nile.mdx` | connect-nile.mdx |
| `connect-overview.mdx` | connect-overview.mdx |
| `connect-pglite.mdx` | connect-pglite.mdx |
| `connect-planetscale-postgres.mdx` | connect-planetscale-postgres.mdx |
| `connect-prisma-postgres.mdx` | connect-prisma-postgres.mdx |
| `connect-supabase.mdx` | connect-supabase.mdx |
| `connect-vercel-postgres.mdx` | connect-vercel-postgres.mdx |
| `connect-xata.mdx` | connect-xata.mdx |
| `custom-types.mdx` | custom-types.mdx |
| `data-querying.mdx` | data-querying.mdx |
| `delete.mdx` | delete.mdx |
| `drizzle-config-file.mdx` | drizzle-config-file.mdx |
| `drizzle-kit-check.mdx` | drizzle-kit-check.mdx |
| `drizzle-kit-export.mdx` | drizzle-kit-export.mdx |
| `drizzle-kit-generate.mdx` | drizzle-kit-generate.mdx |
| `drizzle-kit-migrate.mdx` | drizzle-kit-migrate.mdx |
| `drizzle-kit-pull.mdx` | drizzle-kit-pull.mdx |
| `drizzle-kit-push.mdx` | drizzle-kit-push.mdx |
| `drizzle-kit-studio.mdx` | drizzle-kit-studio.mdx |
| `drizzle-kit-up.mdx` | drizzle-kit-up.mdx |
| `dynamic-query-building.mdx` | dynamic-query-building.mdx |
| `effect-schema.mdx` | effect-schema.mdx |
| `extensions.mdx` | PostgreSQL extensions |
| `generated-columns.mdx` | generated-columns.mdx |
| `get-started-postgresql.mdx` | get-started-postgresql.mdx |
| `goodies.mdx` | goodies.mdx |
| `indexes-constraints.mdx` | indexes-constraints.mdx |
| `insert.mdx` | insert.mdx |
| `joins.mdx` | joins.mdx |
| `kit-custom-migrations.mdx` | kit-custom-migrations.mdx |
| `kit-overview.mdx` | kit-overview.mdx |
| `migrations.mdx` | migrations.mdx |
| `operators.mdx` | operators.mdx |
| `overview.mdx` | overview.mdx |
| `perf-queries.mdx` | perf-queries.mdx |
| `query-utils.mdx` | query-utils.mdx |
| `read-replicas.mdx` | read-replicas.mdx |
| `relations-schema-declaration.mdx` | relations-schema-declaration.mdx |
| `relations-v1-v2.mdx` | relations-v1-v2.mdx |
| `relations.mdx` | relations.mdx |
| `rls.mdx` | rls.mdx |
| `rqb.mdx` | rqb.mdx |
| `schemas.mdx` | schemas.mdx |
| `seed-overview.mdx` | seed-overview.mdx |
| `seed-versioning.mdx` | seed-versioning.mdx |
| `select.mdx` | select.mdx |
| `sequences.mdx` | sequences.mdx |
| `set-operations.mdx` | set-operations.mdx |
| `sql-comments.mdx` | sql-comments.mdx |
| `sql-schema-declaration.mdx` | sql-schema-declaration.mdx |
| `sql.mdx` | sql.mdx |
| `transactions.mdx` | transactions.mdx |
| `typebox-legacy.mdx` | typebox-legacy.mdx |
| `typebox.mdx` | typebox.mdx |
| `update.mdx` | update.mdx |
| `upgrade-v1.mdx` | upgrade-v1.mdx |
| `v0-v1-changes.mdx` | v0-v1-changes.mdx |
| `valibot.mdx` | valibot.mdx |
| `views.mdx` | views.mdx |
| `zod.mdx` | zod.mdx |

### singlestore/ (48 files)

| File | Description |
|------|-------------|
| `arktype.mdx` | arktype.mdx |
| `cache.mdx` | cache.mdx |
| `column-types.mdx` | SingleStore column types |
| `connect-overview.mdx` | connect-overview.mdx |
| `custom-types.mdx` | custom-types.mdx |
| `delete.mdx` | delete.mdx |
| `drizzle-config-file.mdx` | drizzle-config-file.mdx |
| `drizzle-kit-check.mdx` | drizzle-kit-check.mdx |
| `drizzle-kit-export.mdx` | drizzle-kit-export.mdx |
| `drizzle-kit-generate.mdx` | drizzle-kit-generate.mdx |
| `drizzle-kit-migrate.mdx` | drizzle-kit-migrate.mdx |
| `drizzle-kit-pull.mdx` | drizzle-kit-pull.mdx |
| `drizzle-kit-push.mdx` | drizzle-kit-push.mdx |
| `drizzle-kit-studio.mdx` | drizzle-kit-studio.mdx |
| `drizzle-kit-up.mdx` | drizzle-kit-up.mdx |
| `dynamic-query-building.mdx` | dynamic-query-building.mdx |
| `effect-schema.mdx` | effect-schema.mdx |
| `extensions.mdx` | SingleStore extensions |
| `get-started-singlestore.mdx` | get-started-singlestore.mdx |
| `goodies.mdx` | goodies.mdx |
| `indexes-constraints.mdx` | indexes-constraints.mdx |
| `insert.mdx` | insert.mdx |
| `joins.mdx` | joins.mdx |
| `kit-custom-migrations.mdx` | kit-custom-migrations.mdx |
| `kit-overview.mdx` | kit-overview.mdx |
| `migrations.mdx` | migrations.mdx |
| `operators.mdx` | operators.mdx |
| `perf-queries.mdx` | perf-queries.mdx |
| `query-utils.mdx` | query-utils.mdx |
| `read-replicas.mdx` | read-replicas.mdx |
| `relations-v1-v2.mdx` | relations-v1-v2.mdx |
| `relations-v2.mdx` | relations-v2.mdx |
| `rqb-v2.mdx` | rqb-v2.mdx |
| `rqb.mdx` | rqb.mdx |
| `schemas.mdx` | schemas.mdx |
| `seed-functions.mdx` | seed-functions.mdx |
| `seed-overview.mdx` | seed-overview.mdx |
| `seed-versioning.mdx` | seed-versioning.mdx |
| `select.mdx` | select.mdx |
| `set-operations.mdx` | set-operations.mdx |
| `sql-schema-declaration.mdx` | sql-schema-declaration.mdx |
| `sql.mdx` | sql.mdx |
| `transactions.mdx` | transactions.mdx |
| `typebox-legacy.mdx` | typebox-legacy.mdx |
| `typebox.mdx` | typebox.mdx |
| `update.mdx` | update.mdx |
| `valibot.mdx` | valibot.mdx |
| `zod.mdx` | zod.mdx |

### singlestore/guides/ (1 files)

| File | Description |
|------|-------------|
| `count-rows.mdx` | Count rows |

### sqlite/ (68 files)

| File | Description |
|------|-------------|
| `aliases.mdx` | aliases.mdx |
| `arktype.mdx` | arktype.mdx |
| `batch-api.mdx` | batch-api.mdx |
| `cache.mdx` | cache.mdx |
| `column-types.mdx` | SQLite column types |
| `connect-bun-sqlite.mdx` | connect-bun-sqlite.mdx |
| `connect-cloudflare-d1.mdx` | connect-cloudflare-d1.mdx |
| `connect-cloudflare-do.mdx` | connect-cloudflare-do.mdx |
| `connect-drizzle-proxy.mdx` | connect-drizzle-proxy.mdx |
| `connect-expo-sqlite.mdx` | connect-expo-sqlite.mdx |
| `connect-node-sqlite.mdx` | connect-node-sqlite.mdx |
| `connect-op-sqlite.mdx` | connect-op-sqlite.mdx |
| `connect-overview.mdx` | connect-overview.mdx |
| `connect-react-native-sqlite.mdx` | connect-react-native-sqlite.mdx |
| `connect-sqlite-cloud.mdx` | connect-sqlite-cloud.mdx |
| `connect-turso-database.mdx` | connect-turso-database.mdx |
| `connect-turso-serverless.mdx` | connect-turso-serverless.mdx |
| `connect-turso-sync.mdx` | connect-turso-sync.mdx |
| `connect-turso.mdx` | connect-turso.mdx |
| `custom-types.mdx` | custom-types.mdx |
| `data-querying.mdx` | data-querying.mdx |
| `delete.mdx` | delete.mdx |
| `drizzle-config-file.mdx` | drizzle-config-file.mdx |
| `drizzle-kit-check.mdx` | drizzle-kit-check.mdx |
| `drizzle-kit-export.mdx` | drizzle-kit-export.mdx |
| `drizzle-kit-generate.mdx` | drizzle-kit-generate.mdx |
| `drizzle-kit-migrate.mdx` | drizzle-kit-migrate.mdx |
| `drizzle-kit-pull.mdx` | drizzle-kit-pull.mdx |
| `drizzle-kit-push.mdx` | drizzle-kit-push.mdx |
| `drizzle-kit-studio.mdx` | drizzle-kit-studio.mdx |
| `drizzle-kit-up.mdx` | drizzle-kit-up.mdx |
| `dynamic-query-building.mdx` | dynamic-query-building.mdx |
| `effect-schema.mdx` | effect-schema.mdx |
| `extensions.mdx` | SQLite extensions |
| `generated-columns.mdx` | generated-columns.mdx |
| `get-started-sqlite.mdx` | get-started-sqlite.mdx |
| `goodies.mdx` | goodies.mdx |
| `indexes-constraints.mdx` | indexes-constraints.mdx |
| `insert.mdx` | insert.mdx |
| `joins.mdx` | joins.mdx |
| `kit-custom-migrations.mdx` | kit-custom-migrations.mdx |
| `kit-overview.mdx` | kit-overview.mdx |
| `migrations.mdx` | migrations.mdx |
| `operators.mdx` | operators.mdx |
| `overview.mdx` | overview.mdx |
| `perf-queries.mdx` | perf-queries.mdx |
| `query-utils.mdx` | query-utils.mdx |
| `read-replicas.mdx` | read-replicas.mdx |
| `relations-schema-declaration.mdx` | relations-schema-declaration.mdx |
| `relations-v1-v2.mdx` | relations-v1-v2.mdx |
| `relations.mdx` | relations.mdx |
| `rqb.mdx` | rqb.mdx |
| `seed-functions.mdx` | seed-functions.mdx |
| `seed-overview.mdx` | seed-overview.mdx |
| `seed-versioning.mdx` | seed-versioning.mdx |
| `select.mdx` | select.mdx |
| `set-operations.mdx` | set-operations.mdx |
| `sql-schema-declaration.mdx` | sql-schema-declaration.mdx |
| `sql.mdx` | sql.mdx |
| `transactions.mdx` | transactions.mdx |
| `typebox-legacy.mdx` | typebox-legacy.mdx |
| `typebox.mdx` | typebox.mdx |
| `update.mdx` | update.mdx |
| `upgrade-v1.mdx` | upgrade-v1.mdx |
| `v0-v1-changes.mdx` | v0-v1-changes.mdx |
| `valibot.mdx` | valibot.mdx |
| `views.mdx` | views.mdx |
| `zod.mdx` | zod.mdx |

### sqlite/guides/ (1 files)

| File | Description |
|------|-------------|
| `count-rows.mdx` | Count rows |

### tutorials/ (19 files)

| File | Description |
|------|-------------|
| `bun-railway-pg.mdx` | Drizzle with Bun and PostgreSQL on Railway |
| `drizzle-nextjs-neon.mdx` | Todo App with Neon Postgres |
| `drizzle-with-encore.mdx` | Drizzle with Encore |
| `drizzle-with-neon.mdx` | Drizzle with Neon Postgres |
| `drizzle-with-netlify-edge-functions-neon.mdx` | Drizzle with Netlify Edge Functions and Neon Postgres  |
| `drizzle-with-netlify-edge-functions-supabase.mdx` | Drizzle with Netlify Edge Functions and Supabase Database |
| `drizzle-with-nile.mdx` | Drizzle with Nile Database |
| `drizzle-with-supabase-edge-functions.mdx` | Drizzle with Supabase Edge Functions |
| `drizzle-with-supabase.mdx` | Drizzle with Supabase Database |
| `drizzle-with-turso.mdx` | Drizzle with Turso |
| `drizzle-with-vercel-edge-functions.mdx` | Drizzle with Vercel Edge Functions |
| `drizzle-with-vercel.mdx` | Drizzle with Vercel Postgres |
| `drizzle-with-xata.mdx` | Drizzle with Xata |
| `node-railway-pg.mdx` | Drizzle with Node.js and PostgreSQL on Railway |
| `railway-postgres-tailscale-legacy.mdx` | Connect Drizzle Kit to a private Railway database with Tailscale [OUTDATED] |
| `railway-postgres-tailscale.mdx` | Run Drizzle Kit against a private Railway database over Tailscale |
| `railway-studio-tailscale-legacy.mdx` | Drizzle Studio and Gateway on Railway behind Tailscale [OUTDATED] |
| `railway-studio-tailscale.mdx` | Deploy Drizzle Studio or Gateway on Railway with private access over Tailscale |
| `railway-tailscale-existing-project.mdx` | Add private access to Drizzle Studio, Gateway or a database on Railway with Tailscale |
