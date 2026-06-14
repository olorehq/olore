# Prisma Table of Contents

## Directory Map

```
contents/
├── docs/(index)/           # Quickstarts by database (26 files)
│   ├── prisma-orm/quickstart/   # Quickstart per DB (PostgreSQL, MySQL, SQLite, MongoDB...)
│   ├── prisma-orm/add-to-existing-project/  # Add Prisma to existing projects
│   └── prisma-postgres/quickstart/  # Quickstart with Prisma Postgres
├── docs/orm/               # Prisma ORM reference (148 files) — primary section
│   ├── core-concepts/      # Core concepts, API patterns, supported databases (9 files)
│   ├── prisma-client/      # Client setup, queries, extensions, deployment (68 files)
│   ├── prisma-migrate/     # Migration system, workflows (18 files)
│   ├── prisma-schema/      # Schema definition, data model, relations (22 files)
│   ├── reference/          # CLI reference, client API, schema API, errors (13 files)
│   └── more/               # Comparisons, dev environment, troubleshooting (17 files)
├── docs/accelerate/        # Prisma Accelerate (connection pooling + caching) (13 files)
├── docs/postgres/          # Prisma Postgres managed database (19 files)
├── docs/guides/            # Integration guides by topic (56 files)
│   ├── authentication/     # Auth.js, Better Auth, Clerk
│   ├── deployment/         # Deployment guides
│   ├── frameworks/         # Framework integrations
│   ├── database/           # Database-specific guides
│   └── runtimes/           # Runtime guides (Edge, Bun, Deno)
├── docs/cli/               # Prisma CLI commands (27 files)
├── docs/management-api/    # Prisma Management API (REST) (40 files)
├── docs/compute/           # Prisma Compute (app hosting) (10 files)
├── docs/ai/                # AI tools integration, prompts, tutorials (15 files)
├── docs/studio/            # Prisma Studio GUI (4 files)
├── docs/console/           # Prisma Console web UI (5 files)
└── docs/query-insights/    # Query performance insights (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user (quickstart) | `contents/docs/(index)/getting-started.mdx` |
| ORM overview | `contents/docs/orm/core-concepts/data-modeling.mdx` |
| Prisma Client setup | `contents/docs/orm/prisma-client/setup-and-configuration/introduction.mdx` |
| CRUD queries | `contents/docs/orm/prisma-client/queries/crud.mdx` |
| Schema reference | `contents/docs/orm/reference/prisma-schema-reference.mdx` |
| Client API reference | `contents/docs/orm/reference/prisma-client-reference.mdx` |
| Migrations | `contents/docs/orm/prisma-migrate/getting-started.mdx` |
| Relations | `contents/docs/orm/prisma-schema/data-model/relations/index.mdx` |
| Filtering & sorting | `contents/docs/orm/prisma-client/queries/filtering-and-sorting.mdx` |
| Error reference | `contents/docs/orm/reference/error-reference.mdx` |
| Connection pooling | `contents/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool.mdx` |
| Deploy Prisma | `contents/docs/orm/prisma-client/deployment/deploy-prisma.mdx` |

## Detailed Structure

### docs/(index)/ (26 files)

| File | Description |
|------|-------------|
| `index.mdx` | Introduction to Prisma |
| `getting-started.mdx` | Choose a setup path |
| `prisma-orm/quickstart/postgresql.mdx` | PostgreSQL quickstart |
| `prisma-orm/quickstart/mysql.mdx` | MySQL quickstart |
| `prisma-orm/quickstart/sqlite.mdx` | SQLite quickstart |
| `prisma-orm/quickstart/mongodb.mdx` | MongoDB quickstart |
| `prisma-orm/quickstart/cockroachdb.mdx` | CockroachDB quickstart |
| `prisma-orm/quickstart/planetscale.mdx` | PlanetScale quickstart |
| `prisma-orm/quickstart/sql-server.mdx` | SQL Server quickstart |
| `prisma-orm/quickstart/prisma-postgres.mdx` | Prisma Postgres quickstart |
| `prisma-orm/add-to-existing-project/postgresql.mdx` | Add to existing PostgreSQL project |
| `prisma-orm/add-to-existing-project/mysql.mdx` | Add to existing MySQL project |
| `prisma-orm/add-to-existing-project/mongodb.mdx` | Add to existing MongoDB project |
| `prisma-orm/add-to-existing-project/sqlite.mdx` | Add to existing SQLite project |
| `prisma-orm/add-to-existing-project/sql-server.mdx` | Add to existing SQL Server project |
| `prisma-postgres/quickstart/prisma-orm.mdx` | Prisma Postgres + ORM quickstart |
| `prisma-postgres/quickstart/drizzle-orm.mdx` | Prisma Postgres + Drizzle quickstart |
| `prisma-postgres/quickstart/kysely.mdx` | Prisma Postgres + Kysely quickstart |
| `prisma-postgres/quickstart/typeorm.mdx` | Prisma Postgres + TypeORM quickstart |
| `prisma-compute/deploy.mdx` | Deploy with Prisma Compute |

### docs/orm/core-concepts/ (9 files)

| File | Description |
|------|-------------|
| `data-modeling.mdx` | Data modeling concepts |
| `api-patterns.mdx` | REST, GraphQL, fullstack patterns |
| `supported-databases/index.mdx` | Supported databases overview |
| `supported-databases/postgresql.mdx` | PostgreSQL support details |
| `supported-databases/mysql.mdx` | MySQL support details |
| `supported-databases/sqlite.mdx` | SQLite support details |
| `supported-databases/mongodb.mdx` | MongoDB support details |
| `supported-databases/sql-server.mdx` | SQL Server support details |
| `supported-databases/database-drivers.mdx` | Database drivers overview |

### docs/orm/prisma-client/ (68 files)

| File | Description |
|------|-------------|
| `setup-and-configuration/introduction.mdx` | Client setup introduction |
| `setup-and-configuration/generating-prisma-client.mdx` | Generate Prisma Client |
| `setup-and-configuration/instantiate-prisma-client.mdx` | Instantiate the client |
| `setup-and-configuration/read-replicas.mdx` | Read replica configuration |
| `setup-and-configuration/no-rust-engine.mdx` | No-Rust-Engine setup |
| `setup-and-configuration/databases-connections/connection-pool.mdx` | Connection pool settings |
| `setup-and-configuration/databases-connections/connection-management.mdx` | Connection management |
| `setup-and-configuration/databases-connections/pgbouncer.mdx` | PgBouncer configuration |
| `queries/crud.mdx` | CRUD operations |
| `queries/filtering-and-sorting.mdx` | Filtering and sorting |
| `queries/pagination.mdx` | Cursor and offset pagination |
| `queries/relation-queries.mdx` | Include and select with relations |
| `queries/aggregation-grouping-summarizing.mdx` | Aggregations, groupBy |
| `queries/full-text-search.mdx` | Full-text search |
| `queries/transactions.mdx` | Transactions and batch queries |
| `queries/select-fields.mdx` | Select specific fields |
| `queries/computed-fields.mdx` | Computed fields |
| `queries/custom-validation.mdx` | Custom validation |
| `queries/custom-models.mdx` | Custom model methods |
| `queries/query-optimization-performance.mdx` | Query optimization |
| `queries/case-sensitivity.mdx` | Case sensitivity |
| `queries/excluding-fields.mdx` | Excluding fields |
| `queries/advanced/` | Advanced query patterns |
| `special-fields-and-types/working-with-json-fields.mdx` | JSON fields |
| `special-fields-and-types/working-with-scalar-lists-arrays.mdx` | Array fields |
| `special-fields-and-types/null-and-undefined.mdx` | Null and undefined handling |
| `special-fields-and-types/composite-types.mdx` | Composite types (MongoDB) |
| `special-fields-and-types/working-with-composite-ids-and-constraints.mdx` | Composite IDs |
| `type-safety/prisma-validator.mdx` | PrismaValidator utility |
| `type-safety/prisma-type-system.mdx` | Type system overview |
| `type-safety/operating-against-partial-structures-of-model-types.mdx` | Partial types |
| `using-raw-sql/raw-queries.mdx` | Raw SQL queries |
| `using-raw-sql/typedsql.mdx` | TypedSQL feature |
| `client-extensions/index.mdx` | Client extensions overview |
| `client-extensions/model.mdx` | Model extensions |
| `client-extensions/query.mdx` | Query extensions |
| `client-extensions/result.mdx` | Result extensions |
| `client-extensions/client.mdx` | Client-level extensions |
| `client-extensions/extension-examples.mdx` | Extension examples |
| `client-extensions/shared-extensions/` | Shared extension patterns |
| `observability-and-logging/logging.mdx` | Logging configuration |
| `observability-and-logging/metrics.mdx` | Metrics |
| `observability-and-logging/opentelemetry-tracing.mdx` | OpenTelemetry tracing |
| `deployment/deploy-prisma.mdx` | Deploy Prisma apps |
| `deployment/edge/deploy-to-cloudflare.mdx` | Deploy to Cloudflare Workers |
| `deployment/edge/deploy-to-vercel.mdx` | Deploy to Vercel Edge |
| `deployment/serverless/deploy-to-aws-lambda.mdx` | Deploy to AWS Lambda |
| `deployment/serverless/deploy-to-vercel.mdx` | Deploy to Vercel |
| `deployment/traditional/deploy-to-heroku.mdx` | Deploy to Heroku |
| `deployment/traditional/deploy-to-railway.mdx` | Deploy to Railway |
| `testing/unit-testing.mdx` | Unit testing with mocks |
| `testing/integration-testing.mdx` | Integration testing |
| `debugging-and-troubleshooting/debugging.mdx` | Debugging |
| `debugging-and-troubleshooting/handling-exceptions-and-errors.mdx` | Error handling |

### docs/orm/prisma-migrate/ (18 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Migration getting started |
| `understanding-prisma-migrate/overview.mdx` | How migrations work |
| `understanding-prisma-migrate/mental-model.mdx` | Mental model |
| `understanding-prisma-migrate/migration-histories.mdx` | Migration history |
| `understanding-prisma-migrate/shadow-database.mdx` | Shadow database |
| `workflows/development-and-production.mdx` | Dev and production workflow |
| `workflows/team-development.mdx` | Team development workflow |
| `workflows/seeding.mdx` | Seeding the database |
| `workflows/data-migration.mdx` | Data migrations |
| `workflows/customizing-migrations.mdx` | Custom SQL migrations |
| `workflows/baselining.mdx` | Baselining existing databases |
| `workflows/prototyping-your-schema.mdx` | Prototyping with db push |
| `workflows/troubleshooting.mdx` | Migration troubleshooting |

### docs/orm/prisma-schema/ (22 files)

| File | Description |
|------|-------------|
| `overview/index.mdx` | Schema overview |
| `overview/data-sources.mdx` | Datasource block |
| `overview/generators.mdx` | Generator block |
| `data-model/models.mdx` | Model definition |
| `data-model/relations/index.mdx` | Relations overview |
| `data-model/relations/one-to-one-relations.mdx` | One-to-one relations |
| `data-model/relations/one-to-many-relations.mdx` | One-to-many relations |
| `data-model/relations/many-to-many-relations.mdx` | Many-to-many relations |
| `data-model/relations/self-relations.mdx` | Self-relations |
| `data-model/relations/referential-actions/index.mdx` | Referential actions |
| `data-model/indexes.mdx` | Indexes |
| `data-model/database-mapping.mdx` | Database mapping with @map |
| `data-model/views.mdx` | Database views |
| `data-model/multi-schema.mdx` | Multi-schema support |
| `introspection.mdx` | Schema introspection |
| `postgresql-extensions.mdx` | PostgreSQL extensions |

### docs/orm/reference/ (13 files)

| File | Description |
|------|-------------|
| `prisma-schema-reference.mdx` | Complete Prisma schema reference |
| `prisma-client-reference.mdx` | Complete Prisma Client API reference |
| `prisma-cli-reference.mdx` | Complete Prisma CLI reference |
| `prisma-config-reference.mdx` | Prisma config file reference |
| `connection-urls.mdx` | Connection URL formats |
| `database-features.mdx` | Database feature support matrix |
| `error-reference.mdx` | Error codes reference |
| `environment-variables-reference.mdx` | Environment variables |
| `supported-databases.mdx` | Supported databases list |
| `preview-features/client-preview-features.mdx` | Client preview features |
| `preview-features/cli-preview-features.mdx` | CLI preview features |

### docs/orm/more/ (17 files)

| File | Description |
|------|-------------|
| `comparisons/` | Comparisons with other ORMs |
| `dev-environment/` | Local dev environment setup |
| `troubleshooting/` | Troubleshooting guides |

### docs/accelerate/ (13 files)

| File | Description |
|------|-------------|
| `index.mdx` | Accelerate overview |
| `getting-started.mdx` | Get started with Accelerate |
| `caching.mdx` | Query caching configuration |
| `connection-pooling.mdx` | Connection pooling |
| `local-development.mdx` | Local development with Accelerate |
| `static-ip.mdx` | Static IP support |
| `reference/api-reference.mdx` | Accelerate API reference |
| `more/faq.mdx` | Frequently asked questions |
| `more/known-limitations.mdx` | Known limitations |
| `more/troubleshoot.mdx` | Troubleshooting |

### docs/postgres/ (19 files)

| File | Description |
|------|-------------|
| `index.mdx` | Prisma Postgres overview |
| `database/connecting-to-your-database.mdx` | Connection setup |
| `database/connection-pooling.mdx` | Connection pooling |
| `database/local-development.mdx` | Local development |
| `database/backups.mdx` | Database backups |
| `database/postgres-extensions.mdx` | PostgreSQL extensions |
| `database/serverless-driver.mdx` | Serverless driver |
| `database/query-insights.mdx` | Query insights |
| `import-from-existing-database.mdx` | Import existing database |
| `faq.mdx` | FAQ |
| `troubleshooting.mdx` | Troubleshooting |
| `error-reference.mdx` | Error reference |
| `iac/terraform.mdx` | Terraform IaC |
| `iac/pulumi.mdx` | Pulumi IaC |

### docs/guides/ (56 files)

| File | Description |
|------|-------------|
| `authentication/authjs/` | Auth.js integration |
| `authentication/better-auth/` | Better Auth integration |
| `authentication/clerk/` | Clerk integration |
| `deployment/` | Deployment guides |
| `frameworks/` | Framework-specific guides |
| `database/` | Database migration and tips |
| `runtimes/` | Edge, Bun, Deno runtime guides |
| `switch-to-prisma-orm/` | Migrate from Drizzle, Mongoose, SQL ORMs |
| `upgrade-prisma-orm/` | Upgrade Prisma ORM version |

### docs/cli/ (27 files)

| File | Description |
|------|-------------|
| `index.mdx` | CLI overview |
| `init.mdx` | prisma init |
| `generate.mdx` | prisma generate |
| `format.mdx` | prisma format |
| `debug.mdx` | prisma debug |
| `db/push.mdx` | prisma db push |
| `db/pull.mdx` | prisma db pull |
| `db/seed.mdx` | prisma db seed |
| `db/execute.mdx` | prisma db execute |
| `migrate/dev.mdx` | prisma migrate dev |
| `migrate/deploy.mdx` | prisma migrate deploy |
| `migrate/reset.mdx` | prisma migrate reset |
| `migrate/status.mdx` | prisma migrate status |
| `migrate/diff.mdx` | prisma migrate diff |
| `migrate/resolve.mdx` | prisma migrate resolve |

### docs/management-api/ (40 files)

| File | Description |
|------|-------------|
| `index.mdx` | Management API overview |
| `endpoints/databases/` | Database CRUD endpoints |
| `endpoints/connections/` | Connection endpoints |
| `endpoints/projects/` | Project endpoints |
| `endpoints/workspaces/` | Workspace endpoints |
| `endpoints/integrations/` | Integration endpoints |
| `endpoints/database-backups/` | Backup endpoints |
| `endpoints/regions/` | Region endpoints |

### docs/compute/ (10 files)

| File | Description |
|------|-------------|
| `index.mdx` | Prisma Compute overview |
| `getting-started.mdx` | Getting started |
| `deployments.mdx` | Deployments |
| `branching.mdx` | Database branching |
| `domains.mdx` | Custom domains |
| `environment-variables.mdx` | Environment variables |
| `github.mdx` | GitHub integration |
| `cli-reference.mdx` | CLI reference |

### docs/studio/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Prisma Studio overview |
| `getting-started.mdx` | Getting started |
| `integrations/embedding.mdx` | Embedding Studio |
| `integrations/vscode-integration.mdx` | VS Code extension |

### docs/ai/ (15 files)

| File | Description |
|------|-------------|
| `index.mdx` | AI tools overview |
| `tools/mcp-server.mdx` | Prisma MCP server |
| `tools/cursor.mdx` | Cursor integration |
| `tools/github-copilot.mdx` | GitHub Copilot integration |
| `tools/windsurf.mdx` | Windsurf integration |
| `prompts/prisma-7.mdx` | Migrate to Prisma v7 prompt |
| `tutorials/linktree-clone.mdx` | Build Linktree clone |
| `tutorials/typefully-clone.mdx` | Build Typefully clone |
