# Prisma Table of Contents

Prisma documentation (prisma/docs, `apps/docs/content`): Prisma ORM, Prisma Postgres, Prisma Compute, Accelerate, Studio, CLI, and guides. All files are `.mdx` under `contents/docs/`. Prisma ORM 6 pages were excluded; the `v7/` subfolders hold the Prisma 7 documentation and the top-level `orm/`, `cli/` folders hold the newer unified contract-based ORM and CLI.

## Directory Map

```
contents/docs/
├── (index)/            # Landing, getting started, quickstarts (43 files)
│   ├── prisma-orm/     # ORM quickstarts, add to existing project
│   ├── prisma-postgres/# Prisma Postgres quickstarts
│   ├── prisma-compute/ # Compute quickstart
│   └── v7/             # Prisma 7 setup paths and quickstarts
├── orm/                # Contract-based ORM docs (47 files)
│   └── v7/             # Prisma ORM 7: Client, Schema, Migrate, reference (147 files)
├── cli/                # Unified Prisma CLI reference (34 files)
│   └── v7/             # Prisma 7 CLI reference (27 files)
├── guides/             # Framework, deployment, auth, integration guides (58 files)
│   └── v7/             # Prisma 7 guides (30 files)
├── postgres/           # Prisma Postgres (20 files)
├── accelerate/         # Accelerate caching and pooling (15 files)
├── compute/            # Prisma Compute hosting (17 files)
├── composer/           # Composer apps and services (14 files)
├── ai/                 # AI tools, prompts, MCP (17 files)
├── console/            # Prisma Console (8 files)
├── studio/             # Prisma Studio (5 files)
├── local-development/  # Local dev (4 files)
├── rest-api/           # Management REST API intro (6 files)
├── storage/            # Object storage (2 files)
└── query-insights/     # Query Insights (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/docs/(index)/getting-started.mdx` |
| Prisma 7 setup | `contents/docs/(index)/v7/getting-started.mdx` |
| ORM overview | `contents/docs/orm/index.mdx` |
| Prisma 7 Client queries | `contents/docs/orm/v7/prisma-client/` |
| Prisma 7 schema | `contents/docs/orm/v7/prisma-schema/` |
| Migrations (Prisma 7) | `contents/docs/orm/v7/prisma-migrate/` |
| CLI commands | `contents/docs/cli/index.mdx`, `contents/docs/cli/v7/index.mdx` |
| Prisma Postgres | `contents/docs/postgres/` |
| Framework guides | `contents/docs/guides/` |

## Detailed Structure

### docs/(index)/ (3 files)

| File | Description |
|------|-------------|
| `full-stack-tutorial.mdx` | From an empty directory to a live TypeScript app with a Prisma Postgres database on Prisma Compute, with the Free plan limits listed. |
| `getting-started.mdx` | Choose the fastest path to try Prisma ORM in a new or existing project. |
| `index.mdx` | Get started with Prisma |

### docs/(index)/prisma-compute/ (2 files)

| File | Description |
|------|-------------|
| `agent-enrollment.mdx` | Give a coding agent its own Prisma credential and a permission policy you control, so it asks you before sensitive API actions and every... |
| `deploy.mdx` | Take a TypeScript app from your terminal to a live URL on Prisma Compute with Prisma Composer, starting from scratch or from an app you... |

### docs/(index)/prisma-orm/ (4 files)

| File | Description |
|------|-------------|
| `create-prisma.mdx` | Scaffold a new Prisma ORM app with create-prisma, with Prisma Composer, Prisma Postgres, and a deploy path built in. |
| `from-scratch.mdx` | Set up Prisma ORM with PostgreSQL by hand, with one config file, one contract, and one index.ts. |
| `index.mdx` | Introduction to Prisma ORM: Prisma ORM 8 is a release candidate. |
| `local-database.mdx` | Get a PostgreSQL or MongoDB database for a Prisma ORM project without signing up for anything, and look at the rows your app writes. |

### docs/(index)/prisma-orm/add-to-existing-project/ (2 files)

| File | Description |
|------|-------------|
| `mongodb.mdx` | Add Prisma ORM to an app whose MongoDB database already has collections. |
| `postgresql.mdx` | Add Prisma ORM to an app whose PostgreSQL database already has tables. |

### docs/(index)/prisma-orm/quickstart/ (2 files)

| File | Description |
|------|-------------|
| `mongodb.mdx` | Create a new Prisma ORM project with MongoDB using create-prisma@latest. |
| `postgresql.mdx` | Create a new Prisma ORM project with PostgreSQL using create-prisma@latest. |

### docs/(index)/prisma-orm/quickstart/existing-app/ (2 files)

| File | Description |
|------|-------------|
| `mongodb.mdx` | Add Prisma ORM to an app you already have, create the collections in an empty MongoDB database, run a first query, and apply a first... |
| `postgresql.mdx` | Add Prisma ORM to an app you already have, create the tables in an empty PostgreSQL database, run a first query, and apply a first... |

### docs/(index)/prisma-postgres/ (3 files)

| File | Description |
|------|-------------|
| `from-the-cli.mdx` | Start a Prisma ORM app with Prisma Postgres from the command line. |
| `import-from-existing-database-mysql.mdx` | Import an existing MySQL database into Prisma Postgres, then use it with Prisma ORM. |
| `import-from-existing-database-postgresql.mdx` | Import a local or hosted PostgreSQL database into Prisma Postgres, a managed PostgreSQL service with a free plan: pg_dump, pg_restore,... |

### docs/(index)/prisma-postgres/quickstart/ (4 files)

| File | Description |
|------|-------------|
| `drizzle-orm.mdx` | Get started with Drizzle ORM and Prisma Postgres |
| `kysely.mdx` | Get started with Kysely and Prisma Postgres by creating a type-safe SQL query builder for your database |
| `prisma-orm.mdx` | Create a Prisma ORM app with Prisma Postgres. |
| `typeorm.mdx` | Get started with TypeORM and Prisma Postgres by connecting your TypeScript ORM to a managed PostgreSQL database |

### docs/(index)/v7/ (1 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Choose the fastest path to start using Prisma ORM 7, Prisma Postgres, or Prisma Compute in a new or existing TypeScript project. |

### docs/(index)/v7/prisma-orm/add-to-existing-project/ (8 files)

| File | Description |
|------|-------------|
| `cockroachdb.mdx` | Add Prisma ORM to an existing TypeScript project with CockroachDB and learn database introspection, baselining, and querying |
| `mongodb.mdx` | Add Prisma ORM to an existing TypeScript project with MongoDB and learn database introspection and querying |
| `mysql.mdx` | Add Prisma ORM to an existing TypeScript project with MySQL and learn database introspection, baselining, and querying |
| `planetscale.mdx` | Add Prisma ORM to an existing TypeScript project with PlanetScale and learn database introspection and querying |
| `postgresql.mdx` | Add Prisma ORM to an existing TypeScript project with PostgreSQL and learn database introspection, baselining, and querying |
| `prisma-postgres.mdx` | Add Prisma ORM to an existing TypeScript project with Prisma Postgres and learn database introspection, baselining, and querying |
| `sql-server.mdx` | Add Prisma ORM to an existing TypeScript project with SQL Server and learn database introspection, baselining, and querying |
| `sqlite.mdx` | Add Prisma ORM to an existing TypeScript project with SQLite and learn database introspection, baselining, and querying |

### docs/(index)/v7/prisma-orm/quickstart/ (8 files)

| File | Description |
|------|-------------|
| `cockroachdb.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to CockroachDB and generating a Prisma Client for database access |
| `mongodb.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to MongoDB and generating a Prisma Client for database access |
| `mysql.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to MySQL and generating a Prisma Client for database access |
| `planetscale.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to PlanetScale and generating a Prisma Client for database access |
| `postgresql.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to PostgreSQL and generating a Prisma Client for database access |
| `prisma-postgres.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to Prisma Postgres and generating a Prisma Client for database access |
| `sql-server.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to SQL Server and generating a Prisma Client for database access |
| `sqlite.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to SQLite and generating a Prisma Client for database access |

### docs/(index)/v7/prisma-postgres/ (3 files)

| File | Description |
|------|-------------|
| `from-the-cli.mdx` | Start building a Prisma application with a Prisma Postgres database from the CLI |
| `import-from-existing-database-mysql.mdx` | Learn how to import data from an existing MySQL database into Prisma Postgres |
| `import-from-existing-database-postgresql.mdx` | Import a local or hosted PostgreSQL database into Prisma Postgres, a managed PostgreSQL service with a free plan: pg_dump, pg_restore,... |

### docs/(index)/v7/prisma-postgres/quickstart/ (1 files)

| File | Description |
|------|-------------|
| `prisma-orm.mdx` | Create a new TypeScript project from scratch by connecting Prisma ORM to Prisma Postgres and generating a Prisma Client for database access |

### docs/accelerate/ (10 files)

| File | Description |
|------|-------------|
| `caching.mdx` | Learn everything you need to know to use Accelerate's global database caching |
| `compare.mdx` | Learn how Prisma Accelerate compares to other connection poolers like pgbouncer |
| `connection-pooling.mdx` | Learn about everything you need to know to use Accelerate's connection pooling |
| `evaluating.mdx` | Learn about evaluating Prisma Accelerate |
| `examples.mdx` | Check out ready-to-run examples for Prisma Accelerate |
| `getting-started.mdx` | Learn how to get up and running with Prisma Accelerate |
| `index.mdx` | Prisma Accelerate is a global database cache with built-in connection pooling that helps improve database performance in Serverless and... |
| `keep-your-database.mdx` | Remove Prisma Accelerate from your application without migrating your existing database |
| `local-development.mdx` | Learn how to use Prisma Accelerate in a development environment |
| `static-ip.mdx` | Learn enabling Static IP for Prisma Accelerate |

### docs/accelerate/more/ (4 files)

| File | Description |
|------|-------------|
| `faq.mdx` | Frequently asked questions about Accelerate |
| `feedback.mdx` | Learn where to submit feedback about Accelerate |
| `known-limitations.mdx` | Known limitations: Learn about limitations of Accelerate |
| `troubleshoot.mdx` | Troubleshoot common Prisma Accelerate errors and connection issues |

### docs/accelerate/reference/ (1 files)

| File | Description |
|------|-------------|
| `api-reference.mdx` | API reference documentation for Accelerate |

### docs/ai/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Use Prisma with AI coding tools like Cursor, Codex, and ChatGPT |
| `mcp-tools.mdx` | Available Prisma MCP tools for databases, Compute deployments, Object Storage, and Composer projects. |

### docs/ai/prompts/ (5 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Step-by-step guide for integrating Prisma ORM and Prisma Postgres in an Astro.js project |
| `nextjs.mdx` | Step-by-step guide for integrating Prisma ORM and Prisma Postgres in an NextJS project |
| `nuxt.mdx` | Step-by-step guide for integrating Prisma ORM and Prisma Postgres in a Nuxt project |
| `prisma-7.mdx` | Step-by-step guide for migration your app to use the version 7 of Prisma ORM |
| `turborepo.mdx` | Step-by-step guide for integrating Prisma ORM and Prisma Postgres in a Turborepo monorepo |

### docs/ai/tools/ (8 files)

| File | Description |
|------|-------------|
| `chatgpt.mdx` | Learn how to add the Prisma MCP server to ChatGPT to manage your databases and Compute deployments. |
| `codex.mdx` | Learn how to install the Prisma Codex plugin and use Prisma MCP from Codex |
| `cursor.mdx` | Learn tips and best practices for using Prisma ORM with the Cursor AI code editor |
| `github-copilot.mdx` | Learn about the features available with GitHub Copilot and Prisma ORM, plus best practices and tips |
| `mcp-server.mdx` | Manage Prisma Postgres databases, Prisma Compute deployments, and Object Storage with the Prisma MCP server. |
| `skills.mdx` | Give your AI coding agent up-to-date Prisma knowledge with installable skills |
| `tabnine.mdx` | Learn tips and best practices for using Prisma ORM with the Tabnine AI code editor |
| `windsurf.mdx` | Learn tips and best practices for using Prisma ORM with the Windsurf AI code editor |

### docs/ai/tutorials/ (2 files)

| File | Description |
|------|-------------|
| `linktree-clone.mdx` | A vibe coding tutorial: build a Linktree clone SaaS application from scratch using Next.js, Prisma ORM, Prisma Postgres, and Clerk... |
| `typefully-clone.mdx` | A vibe coding tutorial: build a tweet polishing app from scratch using Next.js, Prisma ORM, Prisma Postgres, UploadThing, and a local... |

### docs/cli/ (34 files)

| File | Description |
|------|-------------|
| `auth.mdx` | Sign in to your Prisma account from the CLI, sign out, and manage workspace sessions. |
| `branch.mdx` | List platform branches for a project. |
| `bucket.mdx` | Create and manage object-store buckets. |
| `configuration.mdx` | Configure Prisma ORM CLI commands with prisma.config.ts and global flags. |
| `contract-emit.mdx` | contract emit: Emit Prisma ORM contract artifacts. |
| `contract-infer.mdx` | Infer a starter contract from an existing database. |
| `contract-print.mdx` | Write the configured contract as a Prisma ORM 8 PSL contract. |
| `db-init.mdx` | Initialize a database from the current Prisma ORM contract. |
| `db-migrate.mdx` | db migrate: Apply pending Prisma ORM migrations. |
| `db-schema.mdx` | db schema: Inspect a live database schema. |
| `db-sign.mdx` | Sign a database with the current Prisma ORM contract. |
| `db-update.mdx` | Update a database to match the current Prisma ORM contract. |
| `db-verify.mdx` | Verify a database against the current Prisma ORM contract. |
| `deploy.mdx` | Deploy a Composer application to Prisma Compute, to production or another environment. |
| `dev.mdx` | Bring a Composer application up entirely on this machine, with no cloud credentials. |
| `emulator.mdx` | List the local emulators that prisma dev runs your app on, and every instance they hold. |
| `environment-variables.mdx` | The environment variables the Prisma CLI reads, what each one does, and the release that added it. |
| `error-reference.mdx` | The structured error codes of the Prisma CLI platform commands, by namespace, with the condition that raises each one. |
| `feedback.mdx` | Send feedback to the Prisma CLI team. |
| `git.mdx` | Connect a GitHub repository for push-to-deploy. |
| `global-flags.mdx` | Flags accepted by every command in the unified Prisma CLI. |
| `index.mdx` | Overview: Prisma CLI reference |
| `init.mdx` | Prepare a repository for Prisma development. |
| `migration-new.mdx` | Scaffold a Prisma ORM migration package for manual authoring. |
| `migration-plan.mdx` | Plan an on-disk migration from Prisma ORM contract changes. |
| `migration-ref.mdx` | Manage named Prisma ORM refs that point at contracts. |
| `migration-show.mdx` | migration show: Inspect a Prisma ORM migration package. |
| `migration-status.mdx` | Show the Prisma ORM migration path and pending status. |
| `orm-init.mdx` | Initialize Prisma ORM files in a project. |
| `postgres.mdx` | Create and manage Prisma Postgres databases. |
| `project.mdx` | Create, link, and inspect projects; manage project environment variables. |
| `service.mdx` | Manage Compute services, their versions, logs, and custom domains. |
| `skills.mdx` | Keep the Prisma agent skills in a project current. |
| `telemetry.mdx` | Show, enable, or disable anonymous CLI telemetry. |

### docs/cli/v7/ (8 files)

| File | Description |
|------|-------------|
| `debug.mdx` | Display Prisma debug information including schema paths, engine binaries, environment variables, and cache directories for troubleshooting |
| `format.mdx` | Format and validate your Prisma schema file with consistent structure |
| `generate.mdx` | Generate artifacts like Prisma Client based on your Prisma schema |
| `index.mdx` | The Prisma CLI is the command-line interface for Prisma ORM. Use it to initialize projects, generate Prisma Client, manage databases,... |
| `init.mdx` | Set up a new Prisma project in the current directory |
| `studio.mdx` | Browse and manage your database data with Prisma Studio web interface |
| `validate.mdx` | Validate your Prisma schema for syntax errors and configuration issues |
| `version.mdx` | Display Prisma version information for CLI, Client, and engine binaries |

### docs/cli/v7/console/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | platform: Prisma Data Platform commands |
| `status.mdx` | Show Prisma Data Platform service status |

### docs/cli/v7/db/ (5 files)

| File | Description |
|------|-------------|
| `execute.mdx` | Execute native commands to your database |
| `index.mdx` | Manage your database schema and lifecycle during development |
| `pull.mdx` | Pull the state from the database to the Prisma schema using introspection |
| `push.mdx` | Push the state from your Prisma schema to your database |
| `seed.mdx` | Seed your database with test or initial data using custom scripts |

### docs/cli/v7/dev/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Start a local Prisma Postgres server for development |
| `ls.mdx` | List available local Prisma Postgres servers |
| `rm.mdx` | rm: Remove local Prisma Postgres servers |
| `start.mdx` | Start one or more stopped local Prisma Postgres servers |
| `stop.mdx` | stop: Stop local Prisma Postgres servers |

### docs/cli/v7/migrate/ (7 files)

| File | Description |
|------|-------------|
| `deploy.mdx` | Apply pending migrations to update the database schema in production/staging |
| `dev.mdx` | Create a migration from changes in Prisma schema, apply it to the database, and trigger generators |
| `diff.mdx` | Compare the database schema from two arbitrary sources |
| `index.mdx` | Update your database schema with migrations |
| `reset.mdx` | Reset your database and apply all migrations. All data will be lost |
| `resolve.mdx` | Resolve issues with database migrations in deployment databases |
| `status.mdx` | Check the status of your database migrations |

### docs/composer/ (14 files)

| File | Description |
|------|-------------|
| `apps-and-modules.mdx` | How services, resources, and Modules compose into a Prisma App, and how provision() wires them together. |
| `building-blocks.mdx` | Compose the ready-made cron, storage, and streams Modules instead of building scheduled jobs, blob storage, or event streams yourself. |
| `core-concepts.mdx` | The ideas every Composer declaration and command builds on: services, resources, Modules, ports, contracts, environments, and the deploy... |
| `databases.mdx` | Give a service a Postgres database, either as a plain connection or typed by a Prisma ORM contract with managed migrations. |
| `deploying.mdx` | Deploy a Prisma App to production or another environment, run it in CI, and tear environments down safely. |
| `getting-started.mdx` | Build a two-service Prisma App from an empty directory and run it on your machine with one command. |
| `index.mdx` | A TypeScript framework for defining applications composed of multiple services and resources, and deploying them to Prisma Compute and... |
| `limitations.mdx` | What Prisma Composer does not do yet, so you can name the gap instead of working around it blind. |
| `local-development.mdx` | Run the whole app on your machine with prisma dev, with no cloud credentials, and tail its logs through the control API. |
| `object-storage.mdx` | Provision an S3-compatible object-store bucket and use it from a service with any S3 client. |
| `porting-an-app.mdx` | Deploy an existing GitHub repo to Prisma Compute and Prisma Postgres: port its TypeScript frontend and Node API, served by Next.js or... |
| `service-input.mdx` | Declare a service's configuration and credentials as one schema, bind values at provision time, and read them back typed. |
| `services-and-contracts.mdx` | Define a service's API as a typed contract, serve it, and call it from other services with authentication and retries handled for you. |
| `testing.mdx` | Test composed services by deciding what service.load() returns, with mockService for unit tests and bootstrapService for integration tests. |

### docs/compute/ (17 files)

| File | Description |
|------|-------------|
| `alchemy.mdx` | Provision Prisma Postgres and deploy applications to Prisma Compute in one TypeScript stack. |
| `branching.mdx` | Host a test version next to production on Prisma Compute: once deploy on push is set up, every pushed branch other than the default one... |
| `deploy-button.mdx` | Add a Deploy with Prisma button that copies a public Composer repository and starts a Composer-managed deployment. |
| `deploy-on-push.mdx` | Test a new version of your app, such as a feature a coding assistant is building, on its own URL without replacing production. With... |
| `deployments.mdx` | How deploys create service versions on Prisma Compute, and how to inspect, promote, roll back, start, and stop them. |
| `domains.mdx` | Point a custom domain at a production app and the platform verifies DNS and provisions TLS for you. |
| `environment-variables.mdx` | Project configuration that gets injected into your deployments, scoped to production, preview, or a single branch. |
| `faq.mdx` | Deploy TypeScript apps and Postgres together with isolated branch previews and memory-preserving scale-to-zero. Compare Prisma Compute... |
| `getting-started.mdx` | Deploy your first Prisma Compute app with the unified Prisma CLI, then connect GitHub to deploy on every push. |
| `github.mdx` | Connect a GitHub repository to a project to authenticate your Actions deploys and keep platform branches in sync with your Git branches. |
| `image-transformations.mdx` | Resize, encode, cache, and serve images from a Prisma Compute app using Bun's native image pipeline and ordinary HTTP routes. |
| `index.mdx` | Deploy TypeScript services alongside Prisma Postgres, with hosting and previews managed together; a preview can have its own databases. |
| `keeping-instances-awake.mdx` | Keep a Prisma Compute instance awake so it does not scale to zero while bounded background work completes. |
| `limitations.mdx` | Known limitations: What Prisma Compute can and can't do. |
| `object-storage.mdx` | Store and serve files from a Prisma Compute app with an Object Store bucket, S3-compatible storage that lives in the same Prisma project... |
| `pricing.mdx` | How Prisma Compute pricing works, with the usage rates, included usage by plan, and worked examples. |
| `request-timeout.mdx` | Compute cancels a request when your service takes more than 60 seconds to start responding. How to recognize the 504 and how to... |

### docs/console/ (3 files)

| File | Description |
|------|-------------|
| `concepts.mdx` | Understand the core concepts of the Prisma Console: user accounts, workspaces, projects, and resources |
| `getting-started.mdx` | Quick start guide for setting up and using the Prisma Console |
| `index.mdx` | Learn how to use the Console to manage and integrate Prisma products into your application. |

### docs/console/features/ (1 files)

| File | Description |
|------|-------------|
| `metrics.mdx` | Monitor your database performance with Console metrics |

### docs/console/more/ (4 files)

| File | Description |
|------|-------------|
| `billing.mdx` | When Prisma charges a paid plan, how to cancel it, and how to cap usage charges |
| `feature-maturity.mdx` | Understand Early Access, Preview, and Public Beta feature stages in the Console |
| `support.mdx` | Find the right support for any Console question |
| `workspaces.mdx` | Invite and remove workspace members, hand a workspace to someone else, and delete databases, projects, and workspaces |

### docs/guides/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Practical, step-by-step guides for building with Prisma ORM and deploying to Prisma Compute, each one run end to end before it ships. |

### docs/guides/authentication/authjs/ (1 files)

| File | Description |
|------|-------------|
| `nextjs.mdx` | Learn how to use Prisma ORM in a Next.js app with Auth.js |

### docs/guides/authentication/better-auth/ (2 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Learn how to use Prisma ORM in an Astro app with Better Auth |
| `nextjs.mdx` | Learn how to use Prisma ORM in a Next.js app with Better Auth |

### docs/guides/authentication/clerk/ (2 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Learn how to use Prisma ORM in an Astro app with Clerk Auth |
| `nextjs.mdx` | Add Clerk authentication to a Next.js app, sync users to Prisma Postgres with a webhook, build a posts API, and deploy to Prisma Compute. |

### docs/guides/compute/ (1 files)

| File | Description |
|------|-------------|
| `astro-marketing-site.mdx` | Build a static marketing site with Astro, serve it from a Node server, and deploy it to Prisma Compute with Prisma Composer. |

### docs/guides/database/ (3 files)

| File | Description |
|------|-------------|
| `data-migration.mdx` | Replace a column without downtime using the expand and contract pattern, with the data backfill inside a Prisma ORM migration. |
| `multiple-databases.mdx` | Connect one Next.js app to two PostgreSQL databases with Prisma ORM: one contract, config, and client per database, selected with the... |
| `schema-changes.mdx` | Plan, merge, and apply Prisma ORM migrations when several developers change the schema at the same time. |

### docs/guides/deployment/ (6 files)

| File | Description |
|------|-------------|
| `bun-workspaces.mdx` | Set up Prisma ORM in a Bun workspaces monorepo through a shared database package, seed it with Bun, and query it from a Next.js app in... |
| `cloudflare-workers.mdx` | Add Prisma ORM to a Cloudflare Worker, query PostgreSQL from the fetch handler with the nodejs_compat flag, and deploy it with Wrangler. |
| `docker.mdx` | Build an Express app on Prisma ORM, run PostgreSQL from Docker Compose, then run the app and the database together in containers. |
| `pnpm-workspaces.mdx` | Set up Prisma 8 in a shared database package inside a pnpm workspaces monorepo and query it from a Next.js app. |
| `turborepo.mdx` | Share one Prisma 8 database package across the apps in a Turborepo monorepo, with contract emit and migrations wired into turbo tasks. |
| `vercel.mdx` | Deploy a Next.js app that uses Prisma ORM to Vercel: commit the contract files, apply migrations before you deploy, set the connection... |

### docs/guides/frameworks/ (11 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Set up Prisma ORM in an Astro app with create-prisma, from scaffold to rendered data, and deploy it to Prisma Compute. |
| `elysia.mdx` | Build an Elysia API on Prisma ORM with the elysia template and deploy it to Prisma Compute. |
| `hono.mdx` | Build a Hono API on Prisma ORM with the hono template, add your own routes, and deploy it to Prisma Compute. |
| `nestjs.mdx` | Set up Prisma ORM in a NestJS app with create-prisma, from scaffold to seeded API to a live deploy on Prisma Compute. |
| `nextjs.mdx` | Set up Prisma ORM in a Next.js app with create-prisma, from scaffold to rendered data, and deploy it to Prisma Compute. |
| `nuxt.mdx` | Set up Prisma ORM in a Nuxt app with create-prisma, from scaffold to rendered data, and deploy it to Prisma Compute. |
| `react-router-7.mdx` | Add Prisma ORM to a React Router app in framework mode with orm init, then build user and post pages with loaders and a form action. |
| `remix.mdx` | Add Prisma ORM to a Remix 3 app, seed a PostgreSQL database, render users from a controller, and deploy to Prisma Compute. |
| `solid-start.mdx` | Add Prisma ORM to a SolidStart app with orm init, seed a PostgreSQL database, serve users from an API route, and render them in a page. |
| `sveltekit.mdx` | Set up Prisma ORM in a SvelteKit app with create-prisma, from scaffold to rendered data. |
| `tanstack-start.mdx` | Set up Prisma ORM in a TanStack Start app with create-prisma, from scaffold to rendered data, and deploy it to Prisma Compute. |

### docs/guides/integrations/ (10 files)

| File | Description |
|------|-------------|
| `ai-sdk.mdx` | Build a chat application with AI SDK, Prisma ORM, and Next.js that stores chat sessions and messages in Prisma Postgres. |
| `datadog.mdx` | Learn how to configure Datadog tracing for a Prisma ORM project. Capture spans for every query using the @prisma/instrumentation... |
| `deno.mdx` | Learn how to integrate Prisma Postgres in a Deno Deploy project using a minimal Deno application |
| `embed-studio.mdx` | Learn how to embed Prisma Studio directly in your Next.js application for database management |
| `github-actions.mdx` | Provision a Prisma Postgres database for every pull request with GitHub Actions and the Prisma CLI, apply your migrations and seed data... |
| `permit-io.mdx` | Learn how to implement access control with Prisma ORM with Permit.io |
| `pgfence.mdx` | Analyze Prisma Migrate SQL files for dangerous lock patterns, risk levels, and safe rewrite recipes before deploying to production |
| `plasmic.mdx` | Create websites and apps visually with Prisma and Plasmic |
| `shopify.mdx` | Learn how to use Prisma Postgres with Shopify |
| `vercel-deployment.mdx` | Programmatically deploy full-stack apps to Vercel with a provisioned Prisma Postgres database. Built for AI app builders, agent... |

### docs/guides/postgres/ (6 files)

| File | Description |
|------|-------------|
| `flyio.mdx` | Learn how to deploy applications using Prisma Postgres to Fly.io |
| `idx.mdx` | Learn how to use Prisma Postgres in the online Firebase Studio |
| `netlify.mdx` | Learn how to connect Prisma Postgres to your Netlify sites with the official Netlify extension and deploy your applications with it |
| `vercel.mdx` | Learn how to create Prisma Postgres databases via the Vercel Marketplace and deploy your Next.js, Nuxt, and SvelteKit applications. |
| `viewing-data.mdx` | Viewing and editing data in Prisma Postgres via Prisma Studio or other database GUIs |
| `vscode.mdx` | The Prisma VS Code extension provides a management UI for Prisma Postgres and agent-mode support for GitHub Copilot |

### docs/guides/runtimes/ (2 files)

| File | Description |
|------|-------------|
| `bun.mdx` | Scaffold a Prisma ORM app with Bun, run your first typed query, serve users over HTTP, and deploy to Prisma Compute. |
| `deno.mdx` | Run a minimal Prisma ORM and PostgreSQL app on Deno. |

### docs/guides/switch-to-prisma-orm/ (3 files)

| File | Description |
|------|-------------|
| `from-drizzle.mdx` | Switch an existing Drizzle app to Prisma ORM: infer a contract from your database, sign it, and replace Drizzle queries route by route. |
| `from-mongoose.mdx` | Migrate an existing Mongoose app to Prisma ORM step by step, against the same MongoDB database, without moving any data. |
| `from-sql-orms.mdx` | Learn how to migrate from Sequelize or TypeORM to Prisma ORM |

### docs/guides/switch-to-prisma-postgres/ (2 files)

| File | Description |
|------|-------------|
| `from-neon.mdx` | Move a Neon database to Prisma Postgres and reconnect your application. |
| `from-supabase.mdx` | Move application data from Supabase to Prisma Postgres and reconnect your application. |

### docs/guides/upgrade-prisma-orm/ (8 files)

| File | Description |
|------|-------------|
| `mongodb.mdx` | Migrate a MongoDB project from Prisma ORM 6 to Prisma ORM 8 |
| `postgresql.mdx` | Migrate a PostgreSQL project from Prisma ORM 7 to Prisma ORM 8 incrementally, with both versions running side by side |
| `v1.mdx` | Guide for upgrading from Prisma 1 to Prisma ORM |
| `v3.mdx` | Upgrade to v3: Guide for upgrading to Prisma ORM v3 |
| `v4.mdx` | Upgrade to v4: Guide for upgrading to Prisma ORM v4 |
| `v5.mdx` | Upgrade to v5: Guide for upgrading to Prisma ORM v5 |
| `v6.mdx` | Upgrade to v6: Guide for upgrading to Prisma ORM v6 |
| `v7.mdx` | Upgrade to v7: Guide for upgrading to Prisma ORM v7 |

### docs/guides/v7/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | A collection of guides for various tasks and workflows |

### docs/guides/v7/authentication/clerk/ (1 files)

| File | Description |
|------|-------------|
| `nextjs.mdx` | Learn how to use Prisma ORM in a Next.js app with Clerk Auth |

### docs/guides/v7/database/ (3 files)

| File | Description |
|------|-------------|
| `data-migration.mdx` | Learn how to perform data migrations using the expand and contract pattern with Prisma ORM |
| `multiple-databases.mdx` | Learn how to use multiple Prisma Clients in a single app to connect to multiple databases, handle migrations, and deploy your... |
| `schema-changes.mdx` | Learn how to use Prisma Migrate effectively when collaborating on a project as a team |

### docs/guides/v7/deployment/ (6 files)

| File | Description |
|------|-------------|
| `bun-workspaces.mdx` | Learn step-by-step how to integrate Prisma ORM in a Bun workspaces monorepo through a shared database package |
| `cloudflare-d1.mdx` | Learn how to use Prisma ORM with Cloudflare D1 |
| `cloudflare-workers.mdx` | Learn how to use Prisma ORM and Prisma Postgres in a Cloudflare Workers project |
| `docker.mdx` | Learn step-by-step configure a Prisma ORM app in Docker |
| `pnpm-workspaces.mdx` | Learn step-by-step how to integrate Prisma ORM in a pnpm workspaces monorepo through a shared database package |
| `turborepo.mdx` | Learn step-by-step how to integrate Prisma ORM with Turborepo through a shared database package |

### docs/guides/v7/frameworks/ (10 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Learn how to use Prisma ORM in an Astro app |
| `elysia.mdx` | Learn how to use Prisma ORM in an Elysia app |
| `hono.mdx` | Learn how to use Prisma ORM in a Hono app |
| `nestjs.mdx` | Learn how to use Prisma ORM in a NestJS app |
| `nextjs.mdx` | Learn how to use Prisma ORM in a Next.js app and deploy it to Vercel |
| `nuxt.mdx` | A step-by-step guide to setting up and using Prisma ORM and Prisma Postgres in a Nuxt app |
| `react-router-7.mdx` | Learn how to use Prisma ORM and Prisma Postgres in a React Router 7 app |
| `solid-start.mdx` | Learn how to use Prisma ORM in a SolidStart app |
| `sveltekit.mdx` | Learn how to use Prisma ORM in a SvelteKit app |
| `tanstack-start.mdx` | Learn how to use Prisma ORM in a TanStack Start app |

### docs/guides/v7/integrations/ (4 files)

| File | Description |
|------|-------------|
| `ai-sdk.mdx` | Build a chat application with AI SDK, Prisma, and Next.js to store chat sessions and messages |
| `github-actions.mdx` | Provision and manage Prisma Postgres databases per pull request using GitHub Actions and Prisma REST API |
| `neon-accelerate.mdx` | Learn how to set up PostgreSQL on Neon with Prisma Accelerate's Connection Pool |
| `supabase-accelerate.mdx` | Learn how to set up PostgreSQL on Supabase with Prisma Accelerate's Connection Pool |

### docs/guides/v7/runtimes/ (2 files)

| File | Description |
|------|-------------|
| `bun.mdx` | Learn how to use Prisma ORM in a Bun application with Prisma Postgres |
| `deno.mdx` | Learn how to use Prisma ORM in a Deno application with Prisma Postgres |

### docs/guides/v7/switch-to-prisma-orm/ (3 files)

| File | Description |
|------|-------------|
| `from-drizzle.mdx` | Learn how to migrate from Drizzle to Prisma ORM |
| `from-mongoose.mdx` | Learn how to migrate from Mongoose to Prisma ORM |
| `from-sql-orms.mdx` | Learn how to migrate from Sequelize or TypeORM to Prisma ORM |

### docs/local-development/ (4 files)

| File | Description |
|------|-------------|
| `app-development.mdx` | Run your app locally on the runtime Prisma Compute deploys, wire it to a local database, and bring up the whole app with Composer. |
| `index.mdx` | Run the whole Prisma stack on your machine, with your app on Bun, a local Prisma Postgres database, and local object storage. |
| `postgres.mdx` | Set up and use Prisma Postgres for local development |
| `storage.mdx` | Use S3-compatible client libraries against Prisma object storage, locally with stand-in buckets and deployed on Prisma Compute. |

### docs/orm/ (6 files)

| File | Description |
|------|-------------|
| `coming-from-prisma-orm-7.mdx` | What each Prisma ORM 7 schema attribute, command, and query is called in Prisma ORM 8, and what is not available. |
| `core-concepts.mdx` | How Prisma ORM 8 fits together, in the order you meet each piece: the contract, the files contract emit writes, the database signature,... |
| `index.mdx` | Prisma ORM is a typed data layer for TypeScript, with typed queries and migrations for PostgreSQL, MongoDB, and SQLite. |
| `release-status.mdx` | Where Prisma ORM 8 stands today, what you get when you install it, and how to stay on Prisma ORM 7. |
| `supported-databases.mdx` | Which databases Prisma ORM 8 supports today, what each one gets, which hosted providers work, and which databases are coming. |
| `supported-versions.mdx` | The versions of Node.js, Bun, Deno, PostgreSQL, MongoDB, and TypeScript that Prisma ORM 8 needs, and the tsconfig settings it expects. |

### docs/orm/contract-authoring/ (7 files)

| File | Description |
|------|-------------|
| `advanced-postgresql.mdx` | Row-level security, expression and partial indexes, check constraints, tables Prisma ORM should not manage, and the PostgreSQL... |
| `capabilities.mdx` | The contract records which database features your packages support, so Prisma ORM can reject an unsupported one early with a clear error. |
| `editor-support.mdx` | What the Prisma VS Code extension does for a Prisma ORM contract, and what to do when it stops accepting the file. |
| `psl-syntax.mdx` | Write the Prisma ORM contract in the Prisma schema language you already know, plus the Prisma ORM 8 additions. |
| `the-contract-artifact.mdx` | contract.json and contract.d.ts are the two files every other part of Prisma ORM reads. Here is what is inside them. |
| `the-data-contract.mdx` | The data contract is the one description of your data model and how it is stored. Prisma ORM types your queries, plans your migrations,... |
| `typescript-schema-builder.mdx` | Define the Prisma ORM contract with a typed builder in TypeScript instead of a schema file. Same models, same `contract.json` and... |

### docs/orm/data-modeling/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Describe the data your application needs with models, primary keys, scalar fields, and relations. |
| `money.mdx` | Store prices and other exact amounts with Prisma ORM 8, as integer cents or as a decimal column, and read, write, round, and add them... |
| `mongodb.mdx` | Model documents, embedded documents, and references for MongoDB, and decide when to embed and when to reference. |
| `relational-databases.mdx` | Model one-to-one, one-to-many, many-to-many, and polymorphic relations for PostgreSQL. |

### docs/orm/extensions/ (5 files)

| File | Description |
|------|-------------|
| `arktype-json.mdx` | Give a JSON column a TypeScript type and check it when it is read, with an arktype schema and the arktype-json extension for Prisma ORM 8. |
| `index.mdx` | Every package that plugs into Prisma ORM: database packages, column types, indexes, query operations, and middleware, by Prisma and the... |
| `paradedb.mdx` | Add full-text search ranked by relevance to a Prisma ORM 8 app with the ParadeDB extension, a BM25 index, and its match, phrase, and... |
| `postgis.mdx` | Store points, lines, and polygons in PostgreSQL with Prisma ORM 8, and find rows by distance or by area with the PostGIS extension. |
| `using-extensions.mdx` | Extensions add database features like vector search, geospatial data, and full-text search to a Prisma ORM project. |

### docs/orm/fundamentals/ (6 files)

| File | Description |
|------|-------------|
| `advanced-queries.mdx` | Use the SQL query builder on PostgreSQL and the pipeline builder on MongoDB for queries the ORM API can't express. |
| `reading-data.mdx` | Fetch one record or many with Prisma ORM, then filter, select, sort, paginate, and iterate the results. |
| `relations-and-joins.mdx` | Read related records in one query with .include(), and understand how one-to-one, one-to-many, and many-to-many relationships work. |
| `transactions.mdx` | Run several writes so they all succeed or all fail together with db.transaction(). |
| `types.mdx` | Name the type of a row, a query result, or a create, update, or filter argument in Prisma ORM 8, with the Prisma ORM 7 name beside each one. |
| `writing-data.mdx` | Create, update, delete, and upsert records with Prisma ORM, one at a time or in bulk. |

### docs/orm/middleware/ (5 files)

| File | Description |
|------|-------------|
| `authoring-custom-middleware.mdx` | Build, register, and run your own Prisma ORM middleware, step by step, starting with a query logger. |
| `built-in-budgets.mdx` | The budgets middleware stops queries that read too many rows or take too long. |
| `built-in-cache.mdx` | The cache middleware serves repeated reads from an in-memory store, opted in per query with a cache annotation. |
| `built-in-lints.mdx` | The lints middleware inspects each query's structure before it runs and blocks or warns on risky shapes. |
| `how-middleware-works.mdx` | Middleware runs your code before and after every query, so one policy can cover your whole app. |

### docs/orm/migrations/ (6 files)

| File | Description |
|------|-------------|
| `applying-a-migration.mdx` | The db migrate command applies the migrations you planned, until your database matches your contract, with a preview, checks on every... |
| `editing-a-migration.mdx` | A migration is TypeScript you own. Fill in backfills, reorder steps, or write raw SQL, then recompile it with one command. |
| `generating-a-migration.mdx` | Turn a change to your contract into a migration you can review, with the migration plan command. |
| `how-migrations-work.mdx` | Change your contract, plan a migration, review it, apply it. Operations can check the database before and after they run. |
| `rollbacks-and-recovery.mdx` | Rolling back is one more migration that makes the database match an earlier contract state. Recovery is fixing a failed migration and... |
| `the-migration-graph.mdx` | You and a teammate each changed your Prisma contract on separate branches. The migration graph is how Prisma ORM applies both changes to... |

### docs/orm/reference/ (8 files)

| File | Description |
|------|-------------|
| `error-reference.mdx` | The structured error codes of the Prisma ORM commands, runtime, and extensions, by namespace, with the condition that raises each one. |
| `index.mdx` | Reference index for the Prisma ORM client, SQL query builder, pipeline builder, raw queries, and runtime APIs. |
| `migration-api.mdx` | Every method and helper a migration.ts can use: the Migration class, the PostgreSQL operations, the column and constraint helpers,... |
| `orm-client.mdx` | Reference for the Prisma ORM client''s query, mutation, filter, and aggregate methods. |
| `pipeline-builder.mdx` | Reference for the Prisma ORM MongoDB pipeline builder''s stages, accumulators, expression helpers, and write methods. |
| `raw-queries.mdx` | Reference for Prisma ORM raw queries: PostgreSQL raw SQL and MongoDB raw commands. |
| `sql-query-builder.mdx` | Reference for the Prisma ORM SQL query builder''s select, mutation, and grouped query methods. |
| `transactions-and-runtime.mdx` | Reference for the Prisma ORM client lifecycle, transactions, prepared statements, and execution options. |

### docs/orm/v7/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Prisma ORM is a next-generation Node.js and TypeScript ORM that provides type-safe database access, migrations, and a visual data editor. |

### docs/orm/v7/core-concepts/ (2 files)

| File | Description |
|------|-------------|
| `api-patterns.mdx` | How to use Prisma ORM with REST APIs, GraphQL servers, and fullstack frameworks |
| `data-modeling.mdx` | Learn how data modeling with Prisma differs from data modeling with SQL or ORMs. Prisma uses a declarative data modeling language to... |

### docs/orm/v7/core-concepts/supported-databases/ (7 files)

| File | Description |
|------|-------------|
| `database-drivers.mdx` | Learn how Prisma connects to your database using driver adapters |
| `index.mdx` | Prisma ORM supports PostgreSQL, MySQL, SQLite, MongoDB, SQL Server, CockroachDB, and serverless databases |
| `mongodb.mdx` | How Prisma ORM connects to MongoDB databases |
| `mysql.mdx` | Use Prisma ORM with MySQL databases including self-hosted MySQL/MariaDB and serverless PlanetScale |
| `postgresql.mdx` | Use Prisma ORM with hosted PostgreSQL (Prisma Postgres, Neon, Supabase), self-hosted PostgreSQL, and CockroachDB |
| `sql-server.mdx` | Use Prisma ORM with Microsoft SQL Server databases |
| `sqlite.mdx` | Use Prisma ORM with SQLite databases including local SQLite, Turso (libSQL), and Cloudflare D1 |

### docs/orm/v7/more/ (1 files)

| File | Description |
|------|-------------|
| `best-practices.mdx` | Learn production-ready patterns for schema design, query optimization, type safety, security, and deployment with Prisma ORM. |

### docs/orm/v7/more/comparisons/ (4 files)

| File | Description |
|------|-------------|
| `prisma-and-drizzle.mdx` | Learn how Prisma ORM compares to Drizzle |
| `prisma-and-mongoose.mdx` | Learn how Prisma ORM compares to Mongoose |
| `prisma-and-sequelize.mdx` | Learn how Prisma ORM compares to Sequelize |
| `prisma-and-typeorm.mdx` | Learn how Prisma compares to TypeORM |

### docs/orm/v7/more/dev-environment/ (3 files)

| File | Description |
|------|-------------|
| `editor-setup.mdx` | Learn how to configure your editor and IDEs for syntax highlighting, autocompletion, and formatting with Prisma ORM |
| `environment-variables.mdx` | Learn how to manage environment variables in your Prisma ORM project |
| `index.mdx` | Set up your local Prisma ORM development environment, including editor tooling and environment variables. |

### docs/orm/v7/more/troubleshooting/ (8 files)

| File | Description |
|------|-------------|
| `bundler-issues.mdx` | Solve ENOENT package error with vercel/pkg and other bundlers |
| `check-constraints.mdx` | Learn how to configure CHECK constraints for data validation with Prisma ORM and PostgreSQL |
| `graphql-autocompletion.mdx` | Get autocompletion for Prisma Client queries in GraphQL resolvers with plain JavaScript |
| `many-to-many-relations.mdx` | Learn how to model, query, and convert many-to-many relations with Prisma ORM |
| `nextjs.mdx` | Best practices and troubleshooting for using Prisma ORM with Next.js applications |
| `nuxt.mdx` | Learn how to integrate Prisma ORM with your Nuxt application |
| `raw-sql-comparisons.mdx` | Compare columns of the same table with raw queries in Prisma ORM |
| `typescript-performance.mdx` | Optimize TypeScript compilation performance when working with large Prisma schemas |

### docs/orm/v7/prisma-client/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Prisma Client is Prisma ORM''s generated, type-safe query builder for Node.js, Bun, and Deno applications. |

### docs/orm/v7/prisma-client/client-extensions/ (7 files)

| File | Description |
|------|-------------|
| `client.mdx` | Extend the functionality of Prisma Client, client component |
| `extension-examples.mdx` | Explore the Prisma Client extensions that have been built by Prisma and its community |
| `index.mdx` | Extend the functionality of Prisma Client |
| `model.mdx` | Extend the functionality of Prisma Client, model component |
| `query.mdx` | Extend the functionality of Prisma Client, query component |
| `result.mdx` | Extend the functionality of Prisma Client, result component |
| `type-utilities.mdx` | Advanced type safety: improve type safety in your custom model methods |

### docs/orm/v7/prisma-client/client-extensions/shared-extensions/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Share extensions or import shared extensions into your Prisma project |
| `permit-rbac.mdx` | Learn how to implement RBAC, ABAC, and ReBAC authorization in your Prisma applications |

### docs/orm/v7/prisma-client/debugging-and-troubleshooting/ (2 files)

| File | Description |
|------|-------------|
| `debugging.mdx` | This page explains how to enable debugging output for Prisma Client by setting the `DEBUG` environment variable |
| `handling-exceptions-and-errors.mdx` | This page covers how to handle exceptions and errors |

### docs/orm/v7/prisma-client/deployment/ (4 files)

| File | Description |
|------|-------------|
| `caveats-when-deploying-to-aws-platforms.mdx` | Known caveats when deploying to an AWS platform |
| `deploy-database-changes-with-prisma-migrate.mdx` | Learn how to deploy database changes with Prisma Migrate |
| `deploy-migrations-from-a-local-environment.mdx` | Learn how to deploy Node.js and TypeScript applications that are using Prisma Client locally |
| `deploy-prisma.mdx` | Learn more about the different deployment paradigms for Node.js applications and how they affect deploying an application using Prisma... |

### docs/orm/v7/prisma-client/deployment/edge/ (4 files)

| File | Description |
|------|-------------|
| `deploy-to-cloudflare.mdx` | Learn the things you need to know in order to deploy an app that uses Prisma Client for talking to a database to a Cloudflare Worker or... |
| `deploy-to-deno-deploy.mdx` | Deploy to Deno Deploy |
| `deploy-to-vercel.mdx` | Learn the things you need to know in order to deploy an Edge function that uses Prisma Client for talking to a database |
| `overview.mdx` | Learn how to deploy your Prisma-backed apps to edge functions like Cloudflare Workers or Vercel Edge Functions |

### docs/orm/v7/prisma-client/deployment/serverless/ (4 files)

| File | Description |
|------|-------------|
| `deploy-to-aws-lambda.mdx` | Learn how to deploy your Prisma ORM-backed applications to AWS Lambda with AWS SAM, Serverless Framework, or SST |
| `deploy-to-azure-functions.mdx` | Learn how to deploy a Prisma Client based REST API to Azure Functions and connect to an Azure SQL database |
| `deploy-to-netlify.mdx` | Learn how to deploy Node.js and TypeScript applications that are using Prisma Client to Netlify |
| `deploy-to-vercel.mdx` | Learn how to deploy a Next.js application based on Prisma Client to Vercel |

### docs/orm/v7/prisma-client/deployment/traditional/ (6 files)

| File | Description |
|------|-------------|
| `deploy-to-flyio.mdx` | Learn how to deploy a Node.js server that uses Prisma ORM to Fly.io |
| `deploy-to-heroku.mdx` | Learn how to deploy a Node.js server that uses Prisma ORM to Heroku |
| `deploy-to-koyeb.mdx` | Learn how to deploy a Node.js server that uses Prisma ORM to Koyeb Serverless Platform |
| `deploy-to-railway.mdx` | Learn how to deploy an app that uses Prisma ORM and Prisma Postgres to Railway |
| `deploy-to-render.mdx` | Learn how to deploy a Node.js server that uses Prisma ORM to Render |
| `deploy-to-sevalla.mdx` | Learn how to deploy a Node.js server that uses Prisma ORM to Sevalla |

### docs/orm/v7/prisma-client/observability-and-logging/ (3 files)

| File | Description |
|------|-------------|
| `logging.mdx` | Learn how to configure Prisma Client to log the raw SQL queries it sends to the database and other information |
| `opentelemetry-tracing.mdx` | Diagnose application performance with detailed traces of each query |
| `sql-comments.mdx` | Add metadata to your SQL queries as comments for improved observability, debugging, and tracing |

### docs/orm/v7/prisma-client/queries/ (9 files)

| File | Description |
|------|-------------|
| `aggregation-grouping-summarizing.mdx` | Use Prisma Client to aggregate, group by, count, and select distinct. |
| `crud.mdx` | Learn how to perform create, read, update, and delete operations |
| `excluding-fields.mdx` | Learn how to exclude fields from Prisma Client results with the omit option. |
| `filtering-and-sorting.mdx` | Learn how to filter Prisma Client queries with where and sort results with orderBy. |
| `full-text-search.mdx` | Learn how to search text fields with Prisma Client using your database's native full-text search support. |
| `pagination.mdx` | Learn how to paginate Prisma Client query results with offset pagination and cursor-based pagination. |
| `relation-queries.mdx` | Prisma Client provides convenient queries for working with relations, such as a fluent API, nested writes (transactions), nested reads... |
| `select-fields.mdx` | Learn how to return only the fields and relations you need with select and include in Prisma Client. |
| `transactions.mdx` | This page explains the transactions API of Prisma Client |

### docs/orm/v7/prisma-client/queries/advanced/ (1 files)

| File | Description |
|------|-------------|
| `query-optimization-performance.mdx` | How to identify and optimize query performance with Prisma |

### docs/orm/v7/prisma-client/setup-and-configuration/ (6 files)

| File | Description |
|------|-------------|
| `custom-model-and-field-names.mdx` | Learn how you can decouple the naming of Prisma models from database tables to improve the ergonomics of the generated Prisma Client API |
| `database-polyfills.mdx` | Prisma Client provides features that are not achievable with relational databases. These features are referred to as "polyfills" and... |
| `error-formatting.mdx` | This page explains how to configure the formatting of errors when using Prisma Client |
| `generating-prisma-client.mdx` | Learn when and how to run prisma generate, configure the generator output, and import the generated client in your app. |
| `introduction.mdx` | Learn how to set up and configure Prisma Client in your project |
| `read-replicas.mdx` | Learn how to set up and use read replicas with Prisma Client |

### docs/orm/v7/prisma-client/setup-and-configuration/databases-connections/ (4 files)

| File | Description |
|------|-------------|
| `connection-management.mdx` | This page explains how database connections are handled with Prisma Client and how to manually connect and disconnect your database |
| `connection-pool.mdx` | Prisma Client uses a connection pool (from the database driver or driver adapter) to store and manage database connections. |
| `index.mdx` | Learn how to manage database connections and configure connection pools |
| `pgbouncer.mdx` | Configure Prisma Client with PgBouncer and other poolers: when to use pgbouncer=true, required transaction mode, prepared statements,... |

### docs/orm/v7/prisma-client/special-fields-and-types/ (6 files)

| File | Description |
|------|-------------|
| `composite-types.mdx` | Work with composite types and embedded documents in MongoDB |
| `index.mdx` | Learn how to use about special fields and types with Prisma Client |
| `null-and-undefined.mdx` | How Prisma Client handles null and undefined |
| `working-with-composite-ids-and-constraints.mdx` | How to read, write, and filter by compound IDs and unique constraints |
| `working-with-json-fields.mdx` | How to read, write, and filter by Json fields |
| `working-with-scalar-lists-arrays.mdx` | How to read, write, and filter by scalar lists / arrays |

### docs/orm/v7/prisma-client/testing/ (2 files)

| File | Description |
|------|-------------|
| `integration-testing.mdx` | Learn how to setup and run integration tests with Prisma and Docker |
| `unit-testing.mdx` | Learn how to setup and run unit tests with Prisma Client |

### docs/orm/v7/prisma-client/type-safety/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Prisma Client provides full type safety for queries, even for partial queries or included relations. This page explains how to leverage... |
| `operating-against-partial-structures-of-model-types.mdx` | This page documents various scenarios for using the generated types from the Prisma namespace |
| `prisma-type-system.mdx` | How to use Prisma ORM's type system |

### docs/orm/v7/prisma-client/using-raw-sql/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Learn how to use raw SQL queries in Prisma Client |
| `raw-queries.mdx` | Learn how you can send raw SQL and MongoDB queries to your database using the raw() methods from the Prisma Client API |
| `safeql.mdx` | Learn how to use SafeQL and Prisma Client extensions to work around features not natively supported by Prisma, such as PostGIS |
| `typedsql.mdx` | Learn how to use TypedSQL to write fully type-safe SQL queries that are compatible with any SQL console and Prisma Client |

### docs/orm/v7/prisma-migrate/ (2 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Learn how to migrate your schema in a development environment using Prisma Migrate |
| `index.mdx` | Learn how Prisma Migrate keeps your database schema in sync with your Prisma schema |

### docs/orm/v7/prisma-migrate/understanding-prisma-migrate/ (4 files)

| File | Description |
|------|-------------|
| `limitations-and-known-issues.mdx` | Limitations and known issues |
| `mental-model.mdx` | A mental model guide for working with Prisma Migrate in your project |
| `migration-histories.mdx` | How Prisma ORM uses migration histories to track changes to your schema |
| `shadow-database.mdx` | Learn how Prisma Migrate uses shadow databases to detect schema drift |

### docs/orm/v7/prisma-migrate/workflows/ (12 files)

| File | Description |
|------|-------------|
| `baselining.mdx` | How to initialize a migration history for an existing database that contains important data. |
| `customizing-migrations.mdx` | How to edit a migration file before applying it to avoid data loss in production. |
| `development-and-production.mdx` | How to use Prisma Migrate commands in development and production environments |
| `generating-down-migrations.mdx` | How to generate a down migration SQL file that reverses a given migration file |
| `native-database-functions.mdx` | How to enable PostgreSQL native database functions for projects that use Prisma Migrate. |
| `native-database-types.mdx` | Native database types |
| `patching-and-hotfixing.mdx` | How to reconcile the migration history after applying a hotfix or patch to a production environment. |
| `prototyping-your-schema.mdx` | Rapidly prototype your Prisma schema using db push without migrations |
| `seeding.mdx` | Learn how to seed your database using Prisma ORM's integrated seeding functionality and Prisma Client |
| `squashing-migrations.mdx` | How to squash multiple migration files into a single migration |
| `troubleshooting.mdx` | Troubleshooting issues with Prisma Migrate in a development environment. |
| `unsupported-database-features.mdx` | How to include unsupported database features for projects that use Prisma Migrate |

### docs/orm/v7/prisma-schema/ (2 files)

| File | Description |
|------|-------------|
| `introspection.mdx` | Learn how you can introspect your database to generate a data model into your Prisma schema |
| `postgresql-extensions.mdx` | How to install and manage PostgreSQL extensions with Prisma ORM using customized migrations, and how to use them in Prisma Client |

### docs/orm/v7/prisma-schema/data-model/ (8 files)

| File | Description |
|------|-------------|
| `database-mapping.mdx` | Learn how to map model and field names to database tables and columns |
| `externally-managed-tables.mdx` | How to declare and use externally managed tables in Prisma ORM |
| `indexes.mdx` | How to configure index functionality and add full text indexes |
| `models.mdx` | Learn about the concepts for building your data model with Prisma: Models, scalar types, enums, attributes, functions, IDs, default... |
| `multi-schema.mdx` | How to use Prisma ORM with multiple database schemas |
| `table-inheritance.mdx` | Learn about the use cases and patterns for table inheritance in Prisma ORM that enable usage of union types or polymorphic structures in... |
| `unsupported-database-features.mdx` | How to support database features that do not have an equivalent syntax in Prisma Schema Language |
| `views.mdx` | How to include views in your Prisma schema |

### docs/orm/v7/prisma-schema/data-model/relations/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | A relation is a connection between two models in the Prisma schema. This page explains how you can define one-to-one, one-to-many and... |
| `many-to-many-relations.mdx` | How to define and work with many-to-many relations in Prisma. |
| `one-to-many-relations.mdx` | How to define and work with one-to-many relations in Prisma. |
| `one-to-one-relations.mdx` | How to define and work with one-to-one relations in Prisma. |
| `referential-actions.mdx` | Referential actions let you define the update and delete behavior of related models on the database level |
| `relation-mode.mdx` | Manage relations between records with relation modes in Prisma |
| `self-relations.mdx` | How to define and work with self-relations in Prisma. |
| `troubleshooting-relations.mdx` | Troubleshooting relations |

### docs/orm/v7/prisma-schema/overview/ (4 files)

| File | Description |
|------|-------------|
| `data-sources.mdx` | Data sources enable Prisma to connect to your database. This page explains how to configure data sources in your Prisma schema |
| `generators.mdx` | Generators in your Prisma schema specify what assets are generated when the `prisma generate` command is invoked. This page explains how... |
| `index.mdx` | The Prisma schema is the main method of configuration when using Prisma. It is typically called schema.prisma and contains your database... |
| `location.mdx` | Documentation regarding proper location of Prisma Schema including default naming and multiple files. |

### docs/orm/v7/reference/ (10 files)

| File | Description |
|------|-------------|
| `connection-urls.mdx` | Learn about the format and syntax Prisma ORM uses for defining database connection URLs for PostgreSQL, MySQL and SQLite |
| `database-features.mdx` | Database features supported in Prisma ORM |
| `environment-variables-reference.mdx` | Reference for Prisma environment variables |
| `error-reference.mdx` | Prisma Client, Migrate, and Introspection error codes |
| `prisma-cli-reference.mdx` | This page gives an overview of all available Prisma CLI commands, explains their options and shows numerous usage examples |
| `prisma-client-reference.mdx` | Complete API reference for Prisma Client queries and operations |
| `prisma-config-reference.mdx` | Complete reference for prisma.config.ts configuration options |
| `prisma-schema-reference.mdx` | Reference for Prisma Schema Language (PSL) |
| `supported-databases.mdx` | This page lists all the databases and their versions that are supported by Prisma ORM |
| `system-requirements.mdx` | System requirements for running Prisma ORM |

### docs/orm/v7/reference/errors/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Common Prisma ORM errors and how to troubleshoot them |

### docs/orm/v7/reference/preview-features/ (2 files)

| File | Description |
|------|-------------|
| `cli-preview-features.mdx` | Prisma CLI features that are currently in Preview. |
| `client-preview-features.mdx` | Prisma Client and Prisma schema features that are currently in Preview |

### docs/postgres/ (8 files)

| File | Description |
|------|-------------|
| `best-postgres-for-ai-apps.mdx` | Why Prisma Postgres works well for AI and LLM workloads: built-in pooling, edge connectivity, pgvector, and MCP support. |
| `error-reference.mdx` | Error reference documentation for Prisma Postgres |
| `faq.mdx` | Common questions and answers about Prisma Postgres |
| `import-from-existing-database.mdx` | Import a local PostgreSQL database into Prisma Postgres, a managed PostgreSQL service with a free plan, in three steps: create the... |
| `index.mdx` | Connect to Prisma Postgres from Prisma ORM, serverless runtimes, and PostgreSQL clients. |
| `migrate-from-ea-to-ga.mdx` | Move your Prisma Postgres Early Access database to a new PostgreSQL 17 database with dump and restore. |
| `npx-create-db.mdx` | Create a temporary Prisma Postgres database from the terminal with one command and no sign-up, for prototypes, tests and coding agents.... |
| `troubleshooting.mdx` | Resolve common issues with Prisma Postgres |

### docs/postgres/database/ (8 files)

| File | Description |
|------|-------------|
| `backups.mdx` | Manage and restore database backups in Prisma Postgres |
| `connecting-to-your-database.mdx` | Choose the right Prisma Postgres connection string for your runtime, tool, and workload. |
| `connection-pooling.mdx` | Use Prisma Postgres connection pooling for concurrent application traffic. |
| `index.mdx` | Overview of Prisma Postgres database operations, connections, pooling, backups, and query analysis. |
| `postgres-extensions.mdx` | Enable and use standard PostgreSQL extensions with Prisma Postgres. |
| `query-insights.mdx` | Inspect slow queries, connect Prisma calls to SQL, and apply focused fixes with Prisma Postgres. |
| `serverless-driver.mdx` | Connect to Prisma Postgres from serverless and edge environments |
| `switch-from-accelerate.mdx` | Replace a hosted Prisma Postgres Accelerate connection without moving your database or data |

### docs/postgres/iac/ (3 files)

| File | Description |
|------|-------------|
| `alchemy.mdx` | Provision and manage Prisma Postgres projects, databases, and connections with Alchemy. |
| `pulumi.mdx` | Provision and manage Prisma Postgres with Pulumi using the Prisma Terraform provider bridge. |
| `terraform.mdx` | Provision and manage Prisma Postgres projects, databases, and connections using Terraform. |

### docs/postgres/integrations/ (1 files)

| File | Description |
|------|-------------|
| `raycast.mdx` | Create and manage Prisma Postgres databases directly from Raycast |

### docs/query-insights/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Inspect slow queries, connect Prisma calls to SQL, and apply focused fixes with Prisma Postgres. |

### docs/rest-api/ (6 files)

| File | Description |
|------|-------------|
| `api-clients.mdx` | Use the REST API with popular API clients like Postman, Insomnia, and Yaak |
| `authentication.mdx` | Learn how to authenticate with the Prisma REST API using service tokens or OAuth 2.0 |
| `getting-started.mdx` | Get started with the Prisma REST API by creating your first project and database |
| `index.mdx` | Programmatically manage your Prisma Postgres databases, projects, and workspaces with the REST API |
| `partner-integration.mdx` | Build partner integrations that provision and transfer Prisma Postgres databases to users |
| `sdk.mdx` | A TypeScript SDK for the Prisma Data Platform REST API. Use the simple client for direct API access, or the full SDK with built-in OAuth... |

### docs/storage/ (2 files)

| File | Description |
|------|-------------|
| `behavior.mdx` | Regions, consistency, conditional writes, S3 compatibility, key revocation, and deletion semantics for Object Store buckets. |
| `index.mdx` | S3-compatible object-store buckets that live inside your Prisma project. |

### docs/studio/ (3 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Learn how to set up and use Prisma Studio to manage your database |
| `index.mdx` | A visual database editor for viewing and managing your data with Prisma |
| `prisma-next.mdx` | Apply migrations to Prisma Postgres with Prisma ORM, then inspect the migration history, schema changes, executed SQL, and data in... |

### docs/studio/integrations/ (2 files)

| File | Description |
|------|-------------|
| `embedding.mdx` | Learn how to embed Prisma Studio in your own applications so your users can view and edit data. |
| `vscode-integration.mdx` | Learn how to use Prisma Studio directly in VS Code |
