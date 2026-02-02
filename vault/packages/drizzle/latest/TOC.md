# Drizzle ORM Table of Contents

## Directory Map

```
contents/
├── get-started/         # Database-specific setup guides (52 files)
│   ├── postgresql-new.mdx / postgresql-existing.mdx
│   ├── mysql-new.mdx / mysql-existing.mdx
│   ├── sqlite-new.mdx / sqlite-existing.mdx
│   ├── neon-*, turso-*, supabase-*, vercel-*, etc.
│   └── cloudflare-d1, expo, bun, effect, and more
├── guides/              # How-to guides and patterns (25 files)
│   ├── pagination, full-text-search, upsert
│   ├── conditional-filters, incrementing-a-value
│   └── postgresql-local-setup, vector-similarity-search
├── column-types/        # Column type references (6 files)
│   ├── pg.mdx, mysql.mdx, sqlite.mdx
│   └── cockroach.mdx, mssql.mdx, singlestore.mdx
├── extensions/          # Database extensions (4 files)
│   └── pg.mdx, mysql.mdx, sqlite.mdx, singlestore.mdx
├── migrate/             # Migration guides (4 files)
│   └── from Prisma, TypeORM, Sequelize, Components
├── tutorials/           # Integration tutorials (11 files)
│   ├── drizzle-on-the-edge/ (Netlify, Vercel, Supabase Edge)
│   ├── drizzle-with-db/ (Neon, Nile, Turso, Xata, etc.)
│   └── drizzle-with-frameworks/ (Next.js)
├── latest-releases/     # Release notes (37 files)
│   └── drizzle-orm-v0.x.x.mdx versions
└── Root files           # Core docs (101 files)
    ├── Core queries: select, insert, update, delete
    ├── Schema: sql-schema-declaration, relations
    ├── Drizzle Kit: generate, migrate, push, pull, studio
    ├── Advanced: transactions, joins, operators, rls
    └── Connections: connect-*.mdx (30+ providers)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New project setup | `contents/get-started.mdx` |
| Choose your database | `contents/get-started/{database}-new.mdx` |
| Existing project | `contents/get-started/{database}-existing.mdx` |
| Schema definition | `contents/sql-schema-declaration.mdx` |
| Querying data | `contents/select.mdx` |
| Generate migrations | `contents/drizzle-kit-generate.mdx` |
| Column types reference | `contents/column-types/{dialect}.mdx` |
| Common patterns | `contents/guides/` |

## Detailed Structure

### Root directory (101 files)

**Getting started**
| File | Description |
|------|-------------|
| `get-started.mdx` | Main entry point for new users |
| `overview.mdx` | Drizzle overview |
| `quick.mdx` | Quick start guide |
| `why-drizzle.mdx` | Why use Drizzle |

**Schema and queries**
| File | Description |
|------|-------------|
| `sql-schema-declaration.mdx` | Define database schema in TypeScript |
| `select.mdx` | Select queries |
| `insert.mdx` | Insert queries |
| `update.mdx` | Update queries |
| `delete.mdx` | Delete queries |
| `data-querying.mdx` | Query patterns overview |
| `rqb.mdx` | Relational query builder |
| `rqb-v2.mdx` | Relational query builder v2 |

**Relations**
| File | Description |
|------|-------------|
| `relations.mdx` | Drizzle soft relations |
| `relations-schema-declaration.mdx` | Define relations in schema |
| `relations-v2.mdx` | Relations v2 |
| `relations-v1-v2.mdx` | Migration from v1 to v2 |

**Advanced queries**
| File | Description |
|------|-------------|
| `joins.mdx` | Join queries |
| `operators.mdx` | SQL operators |
| `transactions.mdx` | Database transactions |
| `batch-api.mdx` | Batch operations |
| `set-operations.mdx` | Union, intersect, except |
| `dynamic-query-building.mdx` | Build queries dynamically |
| `query-utils.mdx` | Query utility functions |

**Drizzle Kit**
| File | Description |
|------|-------------|
| `drizzle-kit-generate.mdx` | Generate migrations |
| `drizzle-kit-migrate.mdx` | Apply migrations |
| `drizzle-kit-push.mdx` | Push schema changes |
| `drizzle-kit-pull.mdx` | Pull schema from database |
| `drizzle-kit-studio.mdx` | Database browser UI |
| `drizzle-kit-check.mdx` | Check migration consistency |
| `drizzle-kit-up.mdx` | Upgrade migrations format |
| `drizzle-kit-export.mdx` | Export schema |
| `drizzle-config-file.mdx` | Drizzle config reference |
| `kit-overview.mdx` | Drizzle Kit overview |
| `kit-migrations-for-teams.mdx` | Team migration workflows |
| `kit-custom-migrations.mdx` | Custom migration files |
| `kit-seed-data.mdx` | Seed data with Drizzle Kit |
| `kit-web-mobile.mdx` | Web and mobile migrations |

**Seeding**
| File | Description |
|------|-------------|
| `seed-overview.mdx` | Seed data overview |
| `seed-functions.mdx` | Seed function utilities |
| `seed-versioning.mdx` | Version-controlled seeding |
| `seed-limitations.mdx` | Seeding limitations |

**Migrations**
| File | Description |
|------|-------------|
| `migrations.mdx` | Migration fundamentals |

**Schema features**
| File | Description |
|------|-------------|
| `indexes-constraints.mdx` | Indexes and constraints |
| `views.mdx` | Database views |
| `sequences.mdx` | Sequences |
| `generated-columns.mdx` | Generated columns |
| `schemas.mdx` | Multi-schema support |
| `custom-types.mdx` | Custom column types |
| `rls.mdx` | Row-level security |

**Database connections** (30+ providers)
| File | Description |
|------|-------------|
| `connect-overview.mdx` | Connection overview |
| `connect-neon.mdx` | Neon serverless Postgres |
| `connect-turso.mdx` | Turso SQLite |
| `connect-supabase.mdx` | Supabase Postgres |
| `connect-planetscale.mdx` | PlanetScale MySQL |
| `connect-vercel-postgres.mdx` | Vercel Postgres |
| `connect-cloudflare-d1.mdx` | Cloudflare D1 |
| `connect-cloudflare-do.mdx` | Cloudflare Durable Objects |
| `connect-xata.mdx` | Xata |
| `connect-pglite.mdx` | PGlite embedded Postgres |
| `connect-bun-sqlite.mdx` | Bun SQLite |
| `connect-bun-sql.mdx` | Bun SQL |
| `connect-expo-sqlite.mdx` | Expo SQLite |
| `connect-react-native-sqlite.mdx` | React Native SQLite |
| `connect-op-sqlite.mdx` | OP SQLite |
| `connect-sqlite-cloud.mdx` | SQLite Cloud |
| `connect-aws-data-api-mysql.mdx` | AWS Data API (MySQL) |
| `connect-aws-data-api-pg.mdx` | AWS Data API (PostgreSQL) |
| `connect-effect-postgres.mdx` | Effect Postgres |
| `connect-tidb.mdx` | TiDB |
| `connect-nile.mdx` | Nile |
| `connect-planetscale-postgres.mdx` | PlanetScale Postgres |
| `connect-prisma-postgres.mdx` | Prisma Postgres |
| `connect-drizzle-proxy.mdx` | Drizzle Proxy |

**Database-specific guides**
| File | Description |
|------|-------------|
| `get-started-postgresql.mdx` | PostgreSQL overview |
| `get-started-mysql.mdx` | MySQL overview |
| `get-started-sqlite.mdx` | SQLite overview |
| `get-started-cockroach.mdx` | CockroachDB overview |
| `get-started-mssql.mdx` | Microsoft SQL Server overview |
| `get-started-singlestore.mdx` | SingleStore overview |
| `get-started-gel.mdx` | GEL overview |

**Performance and optimization**
| File | Description |
|------|-------------|
| `perf-queries.mdx` | Query performance optimization |
| `perf-serverless.mdx` | Serverless performance |
| `cache.mdx` | Query caching |
| `read-replicas.mdx` | Read replicas configuration |

**Validation and integrations**
| File | Description |
|------|-------------|
| `zod.mdx` | Zod schema validation |
| `valibot.mdx` | Valibot validation |
| `typebox.mdx` | TypeBox validation |
| `arktype.mdx` | ArkType validation |
| `graphql.mdx` | GraphQL integration |
| `prisma.mdx` | Prisma integration |
| `eslint-plugin.mdx` | ESLint plugin |

**Utilities and tools**
| File | Description |
|------|-------------|
| `sql.mdx` | Raw SQL operator |
| `goodies.mdx` | Helper utilities |

**Documentation**
| File | Description |
|------|-------------|
| `faq.mdx` | Frequently asked questions |
| `gotchas.mdx` | Common gotchas and pitfalls |
| `upgrade-21.mdx` | Upgrade to 2.1 guide |
| `upgrade-v1.mdx` | Upgrade to v1 guide |

### get-started/ (52 files)

Database-specific setup guides for new and existing projects:

| Database/Platform | New Project | Existing Project |
|-------------------|-------------|------------------|
| PostgreSQL | `postgresql-new.mdx` | `postgresql-existing.mdx` |
| MySQL | `mysql-new.mdx` | `mysql-existing.mdx` |
| SQLite | `sqlite-new.mdx` | `sqlite-existing.mdx` |
| Neon | `neon-new.mdx` | `neon-existing.mdx` |
| Turso | `turso-new.mdx` | `turso-existing.mdx` |
| Turso Database | `turso-database-new.mdx` | `turso-database-existing.mdx` |
| Supabase | `supabase-new.mdx` | `supabase-existing.mdx` |
| PlanetScale | `planetscale-new.mdx` | `planetscale-existing.mdx` |
| PlanetScale Postgres | `planetscale-postgres-new.mdx` | `planetscale-postgres-existing.mdx` |
| Vercel Postgres | `vercel-new.mdx` | `vercel-existing.mdx` |
| Cloudflare D1 | `d1-new.mdx` | `d1-existing.mdx` |
| Cloudflare DO | `do-new.mdx` | `do-existing.mdx` |
| Xata | `xata-new.mdx` | `xata-existing.mdx` |
| PGlite | `pglite-new.mdx` | `pglite-existing.mdx` |
| Bun SQLite | `bun-sqlite-new.mdx` | `bun-sqlite-existing.mdx` |
| Bun SQL | `bun-sql-new.mdx` | `bun-sql-existing.mdx` |
| Expo SQLite | `expo-new.mdx` | `expo-existing.mdx` |
| OP SQLite | `op-sqlite-new.mdx` | `op-sqlite-existing.mdx` |
| SQLite Cloud | `sqlite-cloud-new.mdx` | `sqlite-cloud-existing.mdx` |
| Effect PostgreSQL | `effect-postgresql-new.mdx` | `effect-postgresql-existing.mdx` |
| TiDB | `tidb-new.mdx` | `tidb-existing.mdx` |
| Nile | `nile-new.mdx` | `nile-existing.mdx` |
| CockroachDB | `cockroach-new.mdx` | `cockroach-existing.mdx` |
| MSSQL | `mssql-new.mdx` | `mssql-existing.mdx` |
| SingleStore | `singlestore-new.mdx` | `singlestore-existing.mdx` |
| GEL | `gel-new.mdx` | `gel-existing.mdx` |

### guides/ (25 files)

| File | Description |
|------|-------------|
| `conditional-filters-in-query.mdx` | Dynamic query filtering |
| `count-rows.mdx` | Count table rows |
| `cursor-based-pagination.mdx` | Cursor pagination |
| `d1-http-with-drizzle-kit.mdx` | D1 HTTP with Drizzle Kit |
| `decrementing-a-value.mdx` | Decrement numeric values |
| `empty-array-default-value.mdx` | Default array values |
| `full-text-search-with-generated-columns.mdx` | Full-text search |
| `gel-ext-auth.mdx` | GEL external auth |
| `include-or-exclude-columns.mdx` | Column selection patterns |
| `incrementing-a-value.mdx` | Increment numeric values |
| `limit-offset-pagination.mdx` | Offset-based pagination |
| `mysql-local-setup.mdx` | MySQL local development |
| `point-datatype-psql.mdx` | PostgreSQL point type |
| `postgis-geometry-point.mdx` | PostGIS geometry types |
| `postgresql-full-text-search.mdx` | PostgreSQL full-text search |
| `postgresql-local-setup.mdx` | PostgreSQL local development |
| `seeding-using-with-option.mdx` | Seed with advanced options |
| `seeding-with-partially-exposed-schema.mdx` | Partial schema seeding |
| `select-parent-rows-with-at-least-one-related-child-row.mdx` | Join filtering |
| `timestamp-default-value.mdx` | Timestamp defaults |
| `toggling-a-boolean-field.mdx` | Toggle boolean values |
| `unique-case-insensitive-email.mdx` | Case-insensitive unique |
| `update-many-with-different-value.mdx` | Batch updates |
| `upsert.mdx` | Insert or update pattern |
| `vector-similarity-search.mdx` | Vector search |

### column-types/ (6 files)

| File | Description |
|------|-------------|
| `pg.mdx` | PostgreSQL column types |
| `mysql.mdx` | MySQL column types |
| `sqlite.mdx` | SQLite column types |
| `cockroach.mdx` | CockroachDB column types |
| `mssql.mdx` | Microsoft SQL Server column types |
| `singlestore.mdx` | SingleStore column types |

### extensions/ (4 files)

| File | Description |
|------|-------------|
| `pg.mdx` | PostgreSQL extensions |
| `mysql.mdx` | MySQL extensions |
| `sqlite.mdx` | SQLite extensions |
| `singlestore.mdx` | SingleStore extensions |

### migrate/ (4 files)

| File | Description |
|------|-------------|
| `migrate-from-prisma.mdx` | Migrate from Prisma |
| `migrate-from-typeorm.mdx` | Migrate from TypeORM |
| `migrate-from-sequelize.mdx` | Migrate from Sequelize |
| `components.mdx` | Migration components |

### tutorials/ (11 files)

**drizzle-on-the-edge/**
| File | Description |
|------|-------------|
| `drizzle-with-netlify-edge-functions-neon.mdx` | Netlify Edge + Neon |
| `drizzle-with-netlify-edge-functions-supabase.mdx` | Netlify Edge + Supabase |
| `drizzle-with-supabase-edge-functions.mdx` | Supabase Edge Functions |
| `drizzle-with-vercel-edge-functions.mdx` | Vercel Edge Functions |

**drizzle-with-db/**
| File | Description |
|------|-------------|
| `drizzle-with-neon.mdx` | Drizzle + Neon tutorial |
| `drizzle-with-nile.mdx` | Drizzle + Nile tutorial |
| `drizzle-with-supabase.mdx` | Drizzle + Supabase tutorial |
| `drizzle-with-turso.mdx` | Drizzle + Turso tutorial |
| `drizzle-with-vercel.mdx` | Drizzle + Vercel tutorial |
| `drizzle-with-xata.mdx` | Drizzle + Xata tutorial |

**drizzle-with-frameworks/**
| File | Description |
|------|-------------|
| `drizzle-nextjs-neon.mdx` | Next.js + Neon tutorial |

### latest-releases/ (37 files)

Release notes for Drizzle ORM versions from v0.1.1.0 to v0.32.2 and Drizzle Kit v0.23.2.
