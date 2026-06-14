# drizzle Table of Contents

## Directory Map

```
contents/
├── (root)                         # Core docs: queries, schema, migrations (101 files)
├── column-types/                  # Column type references per dialect (6 files)
├── extensions/                    # Dialect-specific extensions (4 files)
├── get-started/                   # Per-database quickstart guides (54 files)
├── guides/                        # How-to recipes and patterns (25 files)
├── migrate/                       # Migration from other ORMs (4 files)
└── tutorials/                     # Full integration tutorials (14 files)
    ├── drizzle-on-the-edge/       # Edge runtime tutorials (4 files)
    ├── drizzle-with-db/           # Database provider tutorials (6 files)
    ├── drizzle-with-frameworks/   # Framework integration tutorials (2 files)
    └── drizzle-with-railway/      # Railway deployment tutorials (2 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview | `contents/overview.mdx` |
| Quick start | `contents/quick.mdx` |
| Get started (new project) | `contents/get-started.mdx` |
| SQL schema declaration | `contents/sql-schema-declaration.mdx` |
| Select queries | `contents/select.mdx` |
| Insert / Update / Delete | `contents/insert.mdx`, `contents/update.mdx`, `contents/delete.mdx` |
| Relational queries (RQB) | `contents/rqb.mdx` |
| Migrations (Drizzle Kit) | `contents/kit-overview.mdx` |
| Column types (PostgreSQL) | `contents/column-types/pg.mdx` |
| Configuration file | `contents/drizzle-config-file.mdx` |

## Detailed Structure

### Root-level core docs (101 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Drizzle ORM overview |
| `quick.mdx` | Quick start |
| `get-started.mdx` | Getting started hub |
| `get-started-postgresql.mdx` | PostgreSQL setup |
| `get-started-mysql.mdx` | MySQL setup |
| `get-started-sqlite.mdx` | SQLite setup |
| `get-started-cockroach.mdx` | CockroachDB setup |
| `get-started-mssql.mdx` | MSSQL setup |
| `get-started-singlestore.mdx` | SingleStore setup |
| `get-started-gel.mdx` | Gel setup |
| `sql-schema-declaration.mdx` | Schema declaration with drizzle-orm |
| `relations-schema-declaration.mdx` | Relations schema declaration |
| `custom-types.mdx` | Custom column types |
| `generated-columns.mdx` | Generated columns |
| `sequences.mdx` | Sequences |
| `views.mdx` | Database views |
| `indexes-constraints.mdx` | Indexes and constraints |
| `schemas.mdx` | Schema namespacing |
| `select.mdx` | SELECT queries |
| `insert.mdx` | INSERT queries |
| `update.mdx` | UPDATE queries |
| `delete.mdx` | DELETE queries |
| `joins.mdx` | JOINs |
| `operators.mdx` | SQL operators |
| `sql.mdx` | Raw SQL escape hatch |
| `set-operations.mdx` | UNION, INTERSECT, EXCEPT |
| `batch-api.mdx` | Batch API |
| `transactions.mdx` | Transactions |
| `rqb.mdx` | Relational Query Builder (v1) |
| `rqb-v2.mdx` | Relational Query Builder v2 |
| `relations.mdx` | Relations definition |
| `relations-v2.mdx` | Relations v2 |
| `relations-v1-v2.mdx` | Migrating from relations v1 to v2 |
| `data-querying.mdx` | Data querying overview |
| `dynamic-query-building.mdx` | Dynamic query building |
| `query-utils.mdx` | Query utilities |
| `migrations.mdx` | Migrations overview |
| `kit-overview.mdx` | Drizzle Kit overview |
| `drizzle-config-file.mdx` | drizzle.config.ts reference |
| `drizzle-kit-generate.mdx` | drizzle-kit generate command |
| `drizzle-kit-migrate.mdx` | drizzle-kit migrate command |
| `drizzle-kit-push.mdx` | drizzle-kit push command |
| `drizzle-kit-pull.mdx` | drizzle-kit pull command |
| `drizzle-kit-check.mdx` | drizzle-kit check command |
| `drizzle-kit-up.mdx` | drizzle-kit up command |
| `drizzle-kit-export.mdx` | drizzle-kit export command |
| `drizzle-kit-studio.mdx` | Drizzle Studio |
| `kit-custom-migrations.mdx` | Custom migrations |
| `kit-migrations-for-teams.mdx` | Team migrations workflow |
| `kit-seed-data.mdx` | Seeding data with Kit |
| `kit-web-mobile.mdx` | Kit for web/mobile |
| `seed-overview.mdx` | Seeding overview |
| `seed-functions.mdx` | Seed functions |
| `seed-limitations.mdx` | Seed limitations |
| `seed-versioning.mdx` | Seed versioning |
| `connect-overview.mdx` | Database connection overview |
| `connect-neon.mdx` | Connect to Neon |
| `connect-supabase.mdx` | Connect to Supabase |
| `connect-turso.mdx` | Connect to Turso |
| `connect-turso-database.mdx` | Connect to Turso (database SDK) |
| `connect-planetscale.mdx` | Connect to PlanetScale |
| `connect-planetscale-postgres.mdx` | Connect to PlanetScale Postgres |
| `connect-vercel-postgres.mdx` | Connect to Vercel Postgres |
| `connect-nile.mdx` | Connect to Nile |
| `connect-xata.mdx` | Connect to Xata |
| `connect-tidb.mdx` | Connect to TiDB |
| `connect-aws-data-api-pg.mdx` | Connect to AWS Data API (PG) |
| `connect-aws-data-api-mysql.mdx` | Connect to AWS Data API (MySQL) |
| `connect-netlify-db.mdx` | Connect to Netlify DB |
| `connect-prisma-postgres.mdx` | Connect to Prisma Postgres |
| `connect-pglite.mdx` | Connect to PGlite |
| `connect-bun-sql.mdx` | Connect with Bun SQL |
| `connect-bun-sqlite.mdx` | Connect with Bun SQLite |
| `connect-cloudflare-d1.mdx` | Connect to Cloudflare D1 |
| `connect-cloudflare-do.mdx` | Connect to Cloudflare DO |
| `connect-drizzle-proxy.mdx` | Drizzle HTTP Proxy |
| `connect-expo-sqlite.mdx` | Connect to Expo SQLite |
| `connect-op-sqlite.mdx` | Connect to OP SQLite |
| `connect-node-sqlite.mdx` | Connect to Node.js SQLite |
| `connect-react-native-sqlite.mdx` | Connect to React Native SQLite |
| `connect-sqlite-cloud.mdx` | Connect to SQLite Cloud |
| `connect-effect-postgres.mdx` | Connect with Effect Postgres |
| `rls.mdx` | Row-Level Security |
| `read-replicas.mdx` | Read replicas |
| `cache.mdx` | Query caching |
| `perf-queries.mdx` | Query performance |
| `perf-serverless.mdx` | Serverless performance |
| `zod.mdx` | Zod schema integration |
| `valibot.mdx` | Valibot schema integration |
| `typebox.mdx` | TypeBox schema integration |
| `typebox-legacy.mdx` | TypeBox legacy (drizzle-typebox pkg) |
| `arktype.mdx` | ArkType schema integration |
| `effect-schema.mdx` | Effect Schema integration |
| `graphql.mdx` | GraphQL integration |
| `prisma.mdx` | Prisma extension |
| `eslint-plugin.mdx` | ESLint plugin |
| `goodies.mdx` | Type helpers and utilities |
| `gotchas.mdx` | Common pitfalls |
| `faq.mdx` | Frequently asked questions |
| `upgrade-21.mdx` | Upgrade guide to v0.21 |
| `upgrade-v1.mdx` | Upgrade guide to v1 |

### column-types/ (6 files)

| File | Description |
|------|-------------|
| `column-types/pg.mdx` | PostgreSQL column types |
| `column-types/mysql.mdx` | MySQL column types |
| `column-types/sqlite.mdx` | SQLite column types |
| `column-types/cockroach.mdx` | CockroachDB column types |
| `column-types/mssql.mdx` | MSSQL column types |
| `column-types/singlestore.mdx` | SingleStore column types |

### extensions/ (4 files)

| File | Description |
|------|-------------|
| `extensions/pg.mdx` | PostgreSQL extensions (pgvector, postgis, etc.) |
| `extensions/mysql.mdx` | MySQL extensions |
| `extensions/sqlite.mdx` | SQLite extensions |
| `extensions/singlestore.mdx` | SingleStore extensions |

### get-started/ (54 files)

Per-database getting-started guides, each with `-new` (new project) and `-existing` (existing database) variants.

| File | Description |
|------|-------------|
| `get-started/postgresql-new.mdx` | PostgreSQL — new project |
| `get-started/postgresql-existing.mdx` | PostgreSQL — existing DB |
| `get-started/mysql-new.mdx` | MySQL — new project |
| `get-started/mysql-existing.mdx` | MySQL — existing DB |
| `get-started/sqlite-new.mdx` | SQLite — new project |
| `get-started/sqlite-existing.mdx` | SQLite — existing DB |
| `get-started/neon-new.mdx` | Neon — new project |
| `get-started/neon-existing.mdx` | Neon — existing DB |
| `get-started/supabase-new.mdx` | Supabase — new project |
| `get-started/supabase-existing.mdx` | Supabase — existing DB |
| `get-started/turso-new.mdx` | Turso — new project |
| `get-started/turso-existing.mdx` | Turso — existing DB |
| `get-started/turso-database-new.mdx` | Turso (database SDK) — new project |
| `get-started/turso-database-existing.mdx` | Turso (database SDK) — existing DB |
| `get-started/d1-new.mdx` | Cloudflare D1 — new project |
| `get-started/d1-existing.mdx` | Cloudflare D1 — existing DB |
| `get-started/do-new.mdx` | Cloudflare DO — new project |
| `get-started/do-existing.mdx` | Cloudflare DO — existing DB |
| `get-started/planetscale-new.mdx` | PlanetScale — new project |
| `get-started/planetscale-existing.mdx` | PlanetScale — existing DB |
| `get-started/planetscale-postgres-new.mdx` | PlanetScale Postgres — new project |
| `get-started/planetscale-postgres-existing.mdx` | PlanetScale Postgres — existing DB |
| `get-started/cockroach-new.mdx` | CockroachDB — new project |
| `get-started/cockroach-existing.mdx` | CockroachDB — existing DB |
| `get-started/pglite-new.mdx` | PGlite — new project |
| `get-started/pglite-existing.mdx` | PGlite — existing DB |
| `get-started/nile-new.mdx` | Nile — new project |
| `get-started/nile-existing.mdx` | Nile — existing DB |
| `get-started/xata-new.mdx` | Xata — new project |
| `get-started/xata-existing.mdx` | Xata — existing DB |
| `get-started/tidb-new.mdx` | TiDB — new project |
| `get-started/tidb-existing.mdx` | TiDB — existing DB |
| `get-started/vercel-new.mdx` | Vercel Postgres — new project |
| `get-started/vercel-existing.mdx` | Vercel Postgres — existing DB |
| `get-started/bun-sql-new.mdx` | Bun SQL — new project |
| `get-started/bun-sql-existing.mdx` | Bun SQL — existing DB |
| `get-started/bun-sqlite-new.mdx` | Bun SQLite — new project |
| `get-started/bun-sqlite-existing.mdx` | Bun SQLite — existing DB |
| `get-started/expo-new.mdx` | Expo SQLite — new project |
| `get-started/expo-existing.mdx` | Expo SQLite — existing DB |
| `get-started/op-sqlite-new.mdx` | OP SQLite — new project |
| `get-started/op-sqlite-existing.mdx` | OP SQLite — existing DB |
| `get-started/node-sqlite-new.mdx` | Node.js SQLite — new project |
| `get-started/node-sqlite-existing.mdx` | Node.js SQLite — existing DB |
| `get-started/sqlite-cloud-new.mdx` | SQLite Cloud — new project |
| `get-started/sqlite-cloud-existing.mdx` | SQLite Cloud — existing DB |
| `get-started/gel-new.mdx` | Gel — new project |
| `get-started/gel-existing.mdx` | Gel — existing DB |
| `get-started/mssql-new.mdx` | MSSQL — new project |
| `get-started/mssql-existing.mdx` | MSSQL — existing DB |
| `get-started/singlestore-new.mdx` | SingleStore — new project |
| `get-started/singlestore-existing.mdx` | SingleStore — existing DB |
| `get-started/effect-postgresql-new.mdx` | Effect Postgres — new project |
| `get-started/effect-postgresql-existing.mdx` | Effect Postgres — existing DB |

### guides/ (25 files)

| File | Description |
|------|-------------|
| `guides/conditional-filters-in-query.mdx` | Conditional WHERE filters |
| `guides/count-rows.mdx` | Counting rows |
| `guides/cursor-based-pagination.mdx` | Cursor-based pagination |
| `guides/limit-offset-pagination.mdx` | Limit/offset pagination |
| `guides/include-or-exclude-columns.mdx` | Selecting specific columns |
| `guides/upsert.mdx` | Upsert patterns |
| `guides/update-many-with-different-value.mdx` | Bulk update with different values |
| `guides/incrementing-a-value.mdx` | Incrementing a field |
| `guides/decrementing-a-value.mdx` | Decrementing a field |
| `guides/toggling-a-boolean-field.mdx` | Toggling a boolean |
| `guides/timestamp-default-value.mdx` | Timestamp default values |
| `guides/empty-array-default-value.mdx` | Empty array default values |
| `guides/unique-case-insensitive-email.mdx` | Case-insensitive unique email |
| `guides/select-parent-rows-with-at-least-one-related-child-row.mdx` | Filtering by related rows |
| `guides/postgresql-full-text-search.mdx` | PostgreSQL full-text search |
| `guides/full-text-search-with-generated-columns.mdx` | Full-text search with generated columns |
| `guides/postgis-geometry-point.mdx` | PostGIS geometry point |
| `guides/point-datatype-psql.mdx` | PostgreSQL POINT data type |
| `guides/vector-similarity-search.mdx` | Vector similarity search |
| `guides/postgresql-local-setup.mdx` | Local PostgreSQL setup |
| `guides/mysql-local-setup.mdx` | Local MySQL setup |
| `guides/d1-http-with-drizzle-kit.mdx` | D1 HTTP with Drizzle Kit |
| `guides/gel-ext-auth.mdx` | Gel external auth |
| `guides/seeding-using-with-option.mdx` | Seeding with `with` option |
| `guides/seeding-with-partially-exposed-schema.mdx` | Seeding with partial schema |

### migrate/ (4 files)

| File | Description |
|------|-------------|
| `migrate/migrate-from-prisma.mdx` | Migrate from Prisma |
| `migrate/migrate-from-sequelize.mdx` | Migrate from Sequelize |
| `migrate/migrate-from-typeorm.mdx` | Migrate from TypeORM |
| `migrate/components.mdx` | Migration components reference |

### tutorials/ (14 files)

| File | Description |
|------|-------------|
| `tutorials/drizzle-with-db/drizzle-with-neon.mdx` | Full tutorial: Drizzle + Neon |
| `tutorials/drizzle-with-db/drizzle-with-supabase.mdx` | Full tutorial: Drizzle + Supabase |
| `tutorials/drizzle-with-db/drizzle-with-turso.mdx` | Full tutorial: Drizzle + Turso |
| `tutorials/drizzle-with-db/drizzle-with-vercel.mdx` | Full tutorial: Drizzle + Vercel |
| `tutorials/drizzle-with-db/drizzle-with-nile.mdx` | Full tutorial: Drizzle + Nile |
| `tutorials/drizzle-with-db/drizzle-with-xata.mdx` | Full tutorial: Drizzle + Xata |
| `tutorials/drizzle-on-the-edge/drizzle-with-vercel-edge-functions.mdx` | Drizzle on Vercel Edge |
| `tutorials/drizzle-on-the-edge/drizzle-with-supabase-edge-functions.mdx` | Drizzle on Supabase Edge |
| `tutorials/drizzle-on-the-edge/drizzle-with-netlify-edge-functions-neon.mdx` | Drizzle on Netlify Edge (Neon) |
| `tutorials/drizzle-on-the-edge/drizzle-with-netlify-edge-functions-supabase.mdx` | Drizzle on Netlify Edge (Supabase) |
| `tutorials/drizzle-with-frameworks/drizzle-nextjs-neon.mdx` | Drizzle + Next.js + Neon |
| `tutorials/drizzle-with-frameworks/drizzle-with-encore.mdx` | Drizzle + Encore |
| `tutorials/drizzle-with-railway/bun-railway-pg.mdx` | Drizzle + Bun + Railway (PG) |
| `tutorials/drizzle-with-railway/node-railway-pg.mdx` | Drizzle + Node + Railway (PG) |
