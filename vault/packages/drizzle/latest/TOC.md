# Drizzle ORM Documentation Structure

## Overview

Drizzle ORM is a headless TypeScript ORM supporting PostgreSQL, MySQL, SQLite, SingleStore, MSSQL, and CockroachDB. The documentation covers SQL-like queries, relational queries, schema definitions, migrations, database connections, and type-safe operations.

## Directory Map

```
contents/
├── get-started/          # Getting started guides (52 files)
│   ├── postgresql-*.mdx  # PostgreSQL setup guides
│   ├── mysql-*.mdx       # MySQL setup guides
│   └── sqlite-*.mdx      # SQLite setup guides
├── guides/               # How-to guides (25 files)
├── column-types/         # Column type references (6 files)
├── extensions/           # Extensions documentation (4 files)
├── migrate/              # Migration guides (4 files)
├── tutorials/            # Tutorials (11 files)
│   ├── drizzle-on-the-edge/    # Edge runtime tutorials
│   ├── drizzle-with-db/        # Database-specific tutorials
│   └── drizzle-with-frameworks/ # Framework integrations
├── latest-releases/      # Release notes (37 files)
└── [root: 101 files]     # Core documentation
    ├── connect-*.mdx     # Database connection guides (28 files)
    ├── select.mdx        # Query operations
    ├── insert.mdx
    ├── update.mdx
    ├── delete.mdx
    ├── schemas.mdx       # Schema definitions
    ├── rqb.mdx           # Relational queries
    ├── migrations.mdx    # Migration fundamentals
    └── drizzle-kit-*.mdx # Drizzle Kit CLI commands
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Drizzle | `contents/overview.mdx` |
| Quick setup with PostgreSQL | `contents/get-started/postgresql-new.mdx` |
| Quick setup with MySQL | `contents/get-started/mysql-new.mdx` |
| Quick setup with SQLite | `contents/get-started/sqlite-new.mdx` |
| SQL-like queries | `contents/select.mdx`, `contents/insert.mdx` |
| Relational queries | `contents/rqb.mdx` |
| Schema definitions | `contents/schemas.mdx` |
| Migrations | `contents/migrations.mdx` |
| Column types | `contents/column-types/pg.mdx` (or mysql, sqlite, etc.) |
| Database connections | `contents/connect-overview.mdx` |
| Drizzle Kit CLI | `contents/drizzle-kit-overview.mdx` |

## Detailed Structure

### Core Documentation (Root Level - 101 files)

#### Database Connections (28 files)
| File | Description |
|------|-------------|
| `connect-overview.mdx` | Connection overview and options |
| `connect-neon.mdx` | Neon serverless PostgreSQL |
| `connect-supabase.mdx` | Supabase PostgreSQL |
| `connect-vercel-postgres.mdx` | Vercel Postgres |
| `connect-planetscale.mdx` | PlanetScale MySQL |
| `connect-turso.mdx` | Turso SQLite |
| `connect-cloudflare-d1.mdx` | Cloudflare D1 SQLite |
| `connect-aws-data-api-pg.mdx` | AWS Data API for PostgreSQL |
| `connect-aws-data-api-mysql.mdx` | AWS Data API for MySQL |
| `connect-pglite.mdx` | PGLite in-process PostgreSQL |
| `connect-bun-sqlite.mdx` | Bun SQLite driver |
| `connect-expo-sqlite.mdx` | Expo SQLite for React Native |

#### Query Operations
| File | Description |
|------|-------------|
| `select.mdx` | SELECT queries with WHERE, JOIN, ORDER BY |
| `insert.mdx` | INSERT operations with RETURNING |
| `update.mdx` | UPDATE operations |
| `delete.mdx` | DELETE operations |
| `batch-api.mdx` | Batch operations for performance |
| `data-querying.mdx` | Query fundamentals |
| `rqb.mdx` | Relational Query Builder (nested data) |

#### Schema Definitions
| File | Description |
|------|-------------|
| `schemas.mdx` | Table schemas with PostgreSQL/MySQL/SQLite |
| `sql-schema-declaration.mdx` | Schema declaration patterns |
| `tables.mdx` | Table definitions |
| `indexes.mdx` | Index creation and management |
| `views.mdx` | SQL views |
| `constraints.mdx` | Constraints (PK, FK, UNIQUE) |
| `relations.mdx` | Relational definitions for query builder |
| `custom-types.mdx` | Custom column types |

#### Migrations & Drizzle Kit
| File | Description |
|------|-------------|
| `migrations.mdx` | Migration fundamentals and approaches |
| `drizzle-kit-overview.mdx` | Drizzle Kit CLI overview |
| `drizzle-kit-generate.mdx` | Generate migration files |
| `drizzle-kit-migrate.mdx` | Apply migrations |
| `drizzle-kit-push.mdx` | Push schema directly to database |
| `drizzle-kit-pull.mdx` | Pull schema from database |
| `drizzle-kit-check.mdx` | Check migration consistency |
| `drizzle-kit-export.mdx` | Export schema |
| `drizzle-config-file.mdx` | Drizzle config file structure |
| `kit-custom-migrations.mdx` | Custom migration scripts |
| `kit-migrations-for-teams.mdx` | Team migration workflows |

#### Advanced Features
| File | Description |
|------|-------------|
| `transactions.mdx` | Database transactions |
| `prepared-statements.mdx` | Prepared statements for performance |
| `multi-project-schema.mdx` | Multi-project schema organization |
| `zod.mdx` | Zod integration for validation |
| `valibot.mdx` | Valibot integration |
| `arktype.mdx` | ArkType integration |
| `cache.mdx` | Query caching strategies |

### get-started/ (52 files)
Quick start guides for different databases and drivers.

#### PostgreSQL Guides (17 files)
| File | Description |
|------|-------------|
| `postgresql-new.mdx` | New PostgreSQL project setup |
| `node-postgres.mdx` | node-postgres driver |
| `postgres-js.mdx` | postgres.js driver |
| `neon-http.mdx` | Neon serverless HTTP driver |
| `pglite.mdx` | PGLite in-process PostgreSQL |
| `supabase.mdx` | Supabase setup |
| `vercel-postgres.mdx` | Vercel Postgres setup |
| `aws-data-api.mdx` | AWS Data API setup |

#### MySQL Guides (12 files)
| File | Description |
|------|-------------|
| `mysql-new.mdx` | New MySQL project setup |
| `mysql2.mdx` | mysql2 driver |
| `planetscale.mdx` | PlanetScale serverless MySQL |
| `tidb.mdx` | TiDB setup |

#### SQLite Guides (15 files)
| File | Description |
|------|-------------|
| `sqlite-new.mdx` | New SQLite project setup |
| `better-sqlite3.mdx` | better-sqlite3 driver |
| `bun-sqlite.mdx` | Bun SQLite |
| `turso.mdx` | Turso distributed SQLite |
| `cloudflare-d1.mdx` | Cloudflare D1 |
| `expo-sqlite.mdx` | Expo SQLite for mobile |
| `sqlite-cloud.mdx` | SQLite Cloud |

#### Other Databases (8 files)
| File | Description |
|------|-------------|
| `singlestore.mdx` | SingleStore setup |
| `mssql.mdx` | Microsoft SQL Server setup |
| `cockroachdb.mdx` | CockroachDB setup |

### guides/ (25 files)
Practical how-to guides for common tasks.

| File | Description |
|------|-------------|
| `postgresql-local-setup.mdx` | PostgreSQL local development with Docker |
| `mysql-local-setup.mdx` | MySQL local development |
| `prisma-introspect.mdx` | Introspect Prisma schema |
| `drizzle-with-prisma.mdx` | Use Drizzle with existing Prisma project |
| `drizzle-with-effect.mdx` | Effect integration |
| `performance.mdx` | Performance optimization |
| `seeding.mdx` | Database seeding strategies |
| `database-sharing.mdx` | Database connection sharing |
| `drizzle-studio.mdx` | Drizzle Studio GUI tool |

### column-types/ (6 files)
Comprehensive column type references for each dialect.

| File | Description |
|------|-------------|
| `pg.mdx` | PostgreSQL column types |
| `mysql.mdx` | MySQL column types |
| `sqlite.mdx` | SQLite column types |
| `singlestore.mdx` | SingleStore column types |
| `mssql.mdx` | MSSQL column types |
| `cockroach.mdx` | CockroachDB column types |

### extensions/ (4 files)
PostgreSQL extensions integration.

| File | Description |
|------|-------------|
| `postgis.mdx` | PostGIS spatial extension |
| `pg-vector.mdx` | pgvector for embeddings |
| `timescale.mdx` | TimescaleDB time-series |
| `pg-cron.mdx` | pg_cron job scheduling |

### migrate/ (4 files)
Migration guides from other ORMs.

| File | Description |
|------|-------------|
| `migrate-from-prisma.mdx` | Migrate from Prisma |
| `migrate-from-typeorm.mdx` | Migrate from TypeORM |
| `migrate-from-sequelize.mdx` | Migrate from Sequelize |
| `components.mdx` | Migration components |

### tutorials/ (11 files)
Step-by-step tutorials for different environments and frameworks.

#### drizzle-on-the-edge/
Edge runtime tutorials for Cloudflare Workers, Vercel Edge, etc.

#### drizzle-with-db/
Database-specific tutorials (Neon, Turso, Supabase, etc.)

#### drizzle-with-frameworks/
Framework integration tutorials (Next.js, SvelteKit, Remix, etc.)

### latest-releases/ (37 files)
Release notes for recent Drizzle versions, organized chronologically.

## Key Topics

### Querying Data
- **SQL-like queries**: `select.mdx`, `insert.mdx`, `update.mdx`, `delete.mdx`
- **Relational queries**: `rqb.mdx` - nested data without joins
- **Filtering**: WHERE clauses, operators, subqueries
- **Joins**: INNER, LEFT, RIGHT, FULL joins
- **Aggregations**: COUNT, SUM, AVG, GROUP BY
- **Batch operations**: `batch-api.mdx`

### Schema Management
- **Table definitions**: `schemas.mdx`, `tables.mdx`
- **Column types**: `column-types/pg.mdx`, `column-types/mysql.mdx`, `column-types/sqlite.mdx`
- **Relations**: `relations.mdx` - define relationships between tables
- **Constraints**: `constraints.mdx` - primary keys, foreign keys, unique
- **Indexes**: `indexes.mdx`
- **Views**: `views.mdx`

### Migrations
- **Fundamentals**: `migrations.mdx` - database-first vs codebase-first
- **Generate**: `drizzle-kit-generate.mdx` - create migration files
- **Apply**: `drizzle-kit-migrate.mdx` - run migrations
- **Push**: `drizzle-kit-push.mdx` - rapid prototyping without SQL files
- **Pull**: `drizzle-kit-pull.mdx` - introspect existing database

### Database Support
- **PostgreSQL**: Full support with node-postgres, postgres.js, Neon, Supabase
- **MySQL**: Full support with mysql2, PlanetScale, TiDB
- **SQLite**: Full support with better-sqlite3, Turso, Cloudflare D1
- **SingleStore**: Full support
- **MSSQL**: Full support
- **CockroachDB**: Full support
