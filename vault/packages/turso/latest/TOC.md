# turso Table of Contents

## Directory Map

```
contents/
├── introduction.mdx           # Platform overview
├── quickstart.mdx             # Getting started
├── libsql.mdx                 # libSQL overview
├── turso-cloud.mdx            # Cloud platform overview
├── local-development.mdx      # Local dev setup
├── agentfs/                   # AgentFS docs (11 files)
│   ├── guides/                # Usage guides
│   ├── reference/             # CLI reference
│   └── sdk/                   # SDK docs (Python, Rust, TypeScript)
├── api-reference/             # Platform REST API (44 files)
│   ├── databases/             # Database management endpoints
│   ├── groups/                # Group management endpoints
│   ├── organizations/         # Organization endpoints
│   ├── tokens/                # Token management
│   └── locations/, audit-logs/, user/
├── cli/                       # Turso CLI reference (49 files)
│   ├── auth/                  # Auth commands
│   ├── db/                    # Database commands
│   ├── group/                 # Group commands
│   └── org/                   # Organization commands
├── cloud/                     # Cloud features (6 files)
├── connect/                   # Connection guides (6 files)
├── features/                  # Platform features (12 files)
│   ├── embedded-replicas/     # Embedded replica guides
│   └── ...
├── guides/                    # Topic guides (5 files)
├── integrations/              # Third-party integrations (3 files)
├── sdk/                       # SDK docs (95 files)
│   ├── ts/                    # TypeScript/JavaScript SDK
│   ├── python/                # Python SDK
│   ├── rust/                  # Rust SDK
│   ├── go/                    # Go SDK
│   ├── php/                   # PHP SDK
│   ├── flutter/               # Flutter SDK
│   ├── java/                  # Java SDK
│   ├── kotlin/                # Kotlin SDK
│   ├── ruby/                  # Ruby SDK
│   ├── swift/                 # Swift SDK
│   ├── c/                     # C SDK
│   ├── http/                  # HTTP SDK
│   └── activerecord/          # ActiveRecord integration
├── sql-reference/             # SQL reference (31 files)
│   ├── statements/            # SQL statements
│   ├── functions/             # SQL functions
│   └── cli/                   # SQLite CLI
├── sync/                      # Sync features (5 files)
└── tursodb/                   # TursoDB docs (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` |
| Connect with TypeScript | `contents/sdk/ts/quickstart.mdx` |
| Connect with Python | `contents/sdk/python/quickstart.mdx` |
| Connect with Go | `contents/sdk/go/quickstart.mdx` |
| Platform API | `contents/api-reference/introduction.mdx` |
| CLI usage | `contents/cli/introduction.mdx` |
| Embedded replicas | `contents/features/embedded-replicas/introduction.mdx` |
| SQL reference | `contents/sql-reference/compatibility.mdx` |
| Vector search | `contents/guides/vector-search.mdx` |
| Local development | `contents/local-development.mdx` |

## Detailed Structure

### Root (5 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Platform overview |
| `quickstart.mdx` | Quick start guide |
| `libsql.mdx` | libSQL protocol overview |
| `turso-cloud.mdx` | Turso Cloud overview |
| `local-development.mdx` | Local development setup |

### agentfs/ (11 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | AgentFS introduction |
| `installation.mdx` | AgentFS installation |
| `guides/auditing.mdx` | Auditing |
| `guides/mcp.mdx` | MCP integration |
| `guides/nfs.mdx` | NFS guide |
| `guides/overlay.mdx` | Overlay guide |
| `guides/sandbox.mdx` | Sandbox usage |
| `guides/sessions.mdx` | Sessions guide |
| `guides/sync.mdx` | Sync guide |
| `reference/cli.mdx` | CLI reference |
| `sdk/python.mdx` | Python SDK |
| `sdk/rust.mdx` | Rust SDK |
| `sdk/typescript.mdx` | TypeScript SDK |

### api-reference/ (44 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | API overview |
| `quickstart.mdx` | API quickstart |
| `authentication.mdx` | Authentication |
| `oauth.mdx` | OAuth |
| `versioning.mdx` | API versioning |
| `response-codes.mdx` | Response codes |
| `databases/create.mdx` | Create database |
| `databases/list.mdx` | List databases |
| `databases/retrieve.mdx` | Retrieve database |
| `databases/delete.mdx` | Delete database |
| `databases/create-token.mdx` | Create DB token |
| `databases/invalidate-tokens.mdx` | Invalidate tokens |
| `databases/configuration.mdx` | DB configuration |
| `databases/update-configuration.mdx` | Update DB config |
| `databases/stats.mdx` | DB stats |
| `databases/usage.mdx` | DB usage |
| `databases/upload.mdx` | Upload DB |
| `databases/list-instances.mdx` | List instances |
| `databases/retrieve-instance.mdx` | Retrieve instance |
| `groups/create.mdx` | Create group |
| `groups/list.mdx` | List groups |
| `groups/retrieve.mdx` | Retrieve group |
| `groups/delete.mdx` | Delete group |
| `groups/create-token.mdx` | Create group token |
| `groups/invalidate-tokens.mdx` | Invalidate tokens |
| `groups/configuration.mdx` | Group configuration |
| `groups/update-configuration.mdx` | Update group config |
| `groups/transfer.mdx` | Transfer group |
| `groups/unarchive.mdx` | Unarchive group |
| `organizations/list.mdx` | List orgs |
| `organizations/retrieve.mdx` | Retrieve org |
| `organizations/update.mdx` | Update org |
| `organizations/usage.mdx` | Org usage |
| `organizations/members/add.mdx` | Add member |
| `organizations/members/list.mdx` | List members |
| `organizations/members/remove.mdx` | Remove member |
| `organizations/members/retrieve.mdx` | Retrieve member |
| `organizations/members/update.mdx` | Update member |
| `organizations/invites/create-v2.mdx` | Create invite |
| `organizations/invites/delete-v2.mdx` | Delete invite |
| `organizations/invites/list-v2.mdx` | List invites |
| `tokens/create.mdx` | Create API token |
| `tokens/list.mdx` | List tokens |
| `tokens/list-organization.mdx` | List org tokens |
| `tokens/revoke.mdx` | Revoke token |
| `tokens/revoke-organization.mdx` | Revoke org token |
| `tokens/validate.mdx` | Validate token |
| `locations/list.mdx` | List locations |
| `locations/closest-region.mdx` | Closest region |
| `audit-logs/list.mdx` | List audit logs |
| `user/get-current.mdx` | Get current user |

### cli/ (49 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | CLI introduction |
| `installation.mdx` | CLI installation |
| `authentication.mdx` | CLI authentication |
| `headless-mode.mdx` | Headless/CI mode |
| `upgrading.mdx` | Upgrading CLI |
| `dev.mdx` | Local dev server |
| `help.mdx` | Help command |
| `auth/login.mdx` | Login |
| `auth/logout.mdx` | Logout |
| `auth/signup.mdx` | Signup |
| `auth/token.mdx` | Get token |
| `auth/whoami.mdx` | Whoami |
| `auth/api-tokens/list.mdx` | List API tokens |
| `auth/api-tokens/mint.mdx` | Create API token |
| `auth/api-tokens/revoke.mdx` | Revoke API token |
| `db/create.mdx` | Create database |
| `db/destroy.mdx` | Destroy database |
| `db/list.mdx` | List databases |
| `db/show.mdx` | Show database |
| `db/shell.mdx` | Interactive shell |
| `db/inspect.mdx` | Inspect database |
| `db/export.mdx` | Export database |
| `db/import.mdx` | Import database |
| `db/locations.mdx` | Show locations |
| `db/wakeup.mdx` | Wake up database |
| `db/tokens/create.mdx` | Create DB token |
| `db/tokens/invalidate.mdx` | Invalidate tokens |
| `db/config/allow-rules/clear.mdx` | Clear allow rules |
| `db/config/allow-rules/set.mdx` | Set allow rules |
| `db/config/allow-rules/show.mdx` | Show allow rules |
| `group/create.mdx` | Create group |
| `group/destroy.mdx` | Destroy group |
| `group/list.mdx` | List groups |
| `group/update.mdx` | Update group |
| `group/transfer.mdx` | Transfer group |
| `group/unarchive.mdx` | Unarchive group |
| `group/locations/add.mdx` | Add location |
| `group/locations/remove.mdx` | Remove location |
| `group/tokens/create.mdx` | Create group token |
| `group/tokens/invalidate.mdx` | Invalidate tokens |
| `group/aws-migration/start.mdx` | Start AWS migration |
| `group/aws-migration/abort.mdx` | Abort AWS migration |
| `group/aws-migration/info.mdx` | AWS migration info |
| `org/create.mdx` | Create org |
| `org/destroy.mdx` | Destroy org |
| `org/list.mdx` | List orgs |
| `org/switch.mdx` | Switch org |
| `org/members/add.mdx` | Add member |
| `org/members/invite.mdx` | Invite member |
| `org/members/list.mdx` | List members |
| `org/members/rm.mdx` | Remove member |

### cloud/ (6 files)

| File | Description |
|------|-------------|
| `allow-rules.mdx` | Allow rules configuration |
| `durability.mdx` | Durability guarantees |
| `encryption.mdx` | Encryption at rest |
| `limitations.mdx` | Platform limitations |
| `migrate-to-turso.mdx` | Migration guide |
| `private-endpoints.mdx` | Private endpoints |

### connect/ (6 files)

| File | Description |
|------|-------------|
| `javascript.mdx` | Connect with JavaScript |
| `python.mdx` | Connect with Python |
| `go.mdx` | Connect with Go |
| `rust.mdx` | Connect with Rust |
| `dart.mdx` | Connect with Dart |
| `java.mdx` | Connect with Java |

### features/ (12 files)

| File | Description |
|------|-------------|
| `ai-and-embeddings.mdx` | AI and vector embeddings |
| `attach-database.mdx` | Attach database |
| `branching.mdx` | Database branching |
| `data-edge.mdx` | Data edge distribution |
| `multi-db-schemas.mdx` | Multi-database schemas |
| `platform-api.mdx` | Platform API overview |
| `point-in-time-recovery.mdx` | Point-in-time recovery |
| `sqlite-extensions.mdx` | SQLite extensions |
| `embedded-replicas/introduction.mdx` | Embedded replicas intro |
| `embedded-replicas/with-fly.mdx` | Embedded replicas on Fly |
| `embedded-replicas/with-railway.mdx` | Embedded replicas on Railway |
| `embedded-replicas/with-render.mdx` | Embedded replicas on Render |
| `embedded-replicas/with-koyeb.mdx` | Embedded replicas on Koyeb |
| `embedded-replicas/with-akamai.mdx` | Embedded replicas on Akamai |
| `embedded-replicas/rust/railway.mdx` | Rust embedded replicas on Railway |

### guides/ (5 files)

| File | Description |
|------|-------------|
| `agent-databases.mdx` | Agent databases guide |
| `ai-memory.mdx` | AI memory patterns |
| `code-indexing.mdx` | Code indexing with Turso |
| `content-caching.mdx` | Content caching patterns |
| `vector-search.mdx` | Vector search guide |

### integrations/ (3 files)

| File | Description |
|------|-------------|
| `cloudflare.mdx` | Cloudflare integration |
| `vercel.mdx` | Vercel integration |
| `agentic-stripe.mdx` | Agentic Stripe integration |

### sdk/ (95 files)

#### sdk/ts/ (TypeScript/JavaScript)

| File | Description |
|------|-------------|
| `introduction.mdx` | SDK overview |
| `authentication.mdx` | SDK authentication |
| `authorization.mdx` | SDK authorization |
| `ts/quickstart.mdx` | TS quickstart |
| `ts/reference.mdx` | TS API reference |
| `ts/examples.mdx` | TS examples |
| `ts/orm/drizzle.mdx` | Drizzle ORM integration |
| `ts/orm/prisma.mdx` | Prisma ORM integration |
| `ts/guides/nextjs.mdx` | Next.js guide |
| `ts/guides/remix.mdx` | Remix guide |
| `ts/guides/astro.mdx` | Astro guide |
| `ts/guides/hono.mdx` | Hono guide |
| `ts/guides/elysia.mdx` | Elysia guide |
| `ts/guides/nuxt.mdx` | Nuxt guide |
| `ts/guides/sveltekit.mdx` | SvelteKit guide |
| `ts/guides/qwik.mdx` | Qwik guide |
| `ts/guides/quasar.mdx` | Quasar guide |
| `ts/integrations/sentry.mdx` | Sentry integration |

#### sdk/python/

| File | Description |
|------|-------------|
| `python/quickstart.mdx` | Python quickstart |
| `python/reference.mdx` | Python API reference |
| `python/examples.mdx` | Python examples |
| `python/orm/sqlalchemy.mdx` | SQLAlchemy integration |
| `python/guides/flask.mdx` | Flask guide |

#### sdk/go/

| File | Description |
|------|-------------|
| `go/quickstart.mdx` | Go quickstart |
| `go/reference.mdx` | Go API reference |
| `go/examples.mdx` | Go examples |

#### sdk/rust/

| File | Description |
|------|-------------|
| `rust/quickstart.mdx` | Rust quickstart |
| `rust/reference.mdx` | Rust API reference |
| `rust/examples.mdx` | Rust examples |
| `rust/orm/toasty.mdx` | Toasty ORM integration |
| `rust/guides/axum.mdx` | Axum guide |
| `rust/guides/actix.mdx` | Actix guide |
| `rust/guides/rocket.mdx` | Rocket guide |
| `rust/guides/tauri.mdx` | Tauri guide |

#### sdk/php/, flutter/, java/, kotlin/, ruby/, swift/, c/, http/, activerecord/

| File | Description |
|------|-------------|
| `php/quickstart.mdx` | PHP quickstart |
| `php/reference.mdx` | PHP reference |
| `php/examples.mdx` | PHP examples |
| `php/orm/doctrine-dbal.mdx` | Doctrine DBAL integration |
| `php/guides/laravel.mdx` | Laravel guide |
| `flutter/quickstart.mdx` | Flutter quickstart |
| `flutter/reference.mdx` | Flutter reference |
| `flutter/examples.mdx` | Flutter examples |
| `flutter/integrations/drift.mdx` | Drift integration |
| `java/quickstart.mdx` | Java quickstart |
| `java/reference.mdx` | Java reference |
| `kotlin/quickstart.mdx` | Kotlin quickstart |
| `kotlin/reference.mdx` | Kotlin reference |
| `ruby/quickstart.mdx` | Ruby quickstart |
| `ruby/examples.mdx` | Ruby examples |
| `swift/quickstart.mdx` | Swift quickstart |
| `swift/reference.mdx` | Swift reference |
| `c/quickstart.mdx` | C quickstart |
| `c/reference.mdx` | C reference |
| `c/examples.mdx` | C examples |
| `http/quickstart.mdx` | HTTP SDK quickstart |
| `http/reference.mdx` | HTTP SDK reference |
| `http/guides/flutter.mdx` | HTTP SDK Flutter guide |
| `authorization/fine-grained-permissions.mdx` | Fine-grained permissions |
| `authorization/jwks.mdx` | JWKS configuration |
| `authorization/tokens.mdx` | Token management |
| `activerecord/quickstart.mdx` | ActiveRecord quickstart |
| `activerecord/guides/rails.mdx` | Rails guide |

### sql-reference/ (31 files)

| File | Description |
|------|-------------|
| `compatibility.mdx` | SQLite compatibility |
| `data-types.mdx` | Data types |
| `expressions.mdx` | SQL expressions |
| `extensions.mdx` | SQLite extensions |
| `pragmas.mdx` | PRAGMA statements |
| `multiprocess-access.mdx` | Multi-process access |
| `experimental-features.mdx` | Experimental features |
| `statements/create-table.mdx` | CREATE TABLE |
| `statements/create-index.mdx` | CREATE INDEX |
| `statements/create-view.mdx` | CREATE VIEW |
| `statements/create-trigger.mdx` | CREATE TRIGGER |
| `statements/create-virtual-table.mdx` | CREATE VIRTUAL TABLE |
| `statements/create-materialized-view.mdx` | CREATE MATERIALIZED VIEW |
| `statements/create-domain.mdx` | CREATE DOMAIN |
| `statements/create-type.mdx` | CREATE TYPE |
| `statements/alter-table.mdx` | ALTER TABLE |
| `statements/drop-table.mdx` | DROP TABLE |
| `statements/drop-index.mdx` | DROP INDEX |
| `statements/drop-view.mdx` | DROP VIEW |
| `statements/drop-trigger.mdx` | DROP TRIGGER |
| `statements/drop-domain.mdx` | DROP DOMAIN |
| `statements/drop-type.mdx` | DROP TYPE |
| `statements/insert.mdx` | INSERT |
| `statements/select.mdx` | SELECT |
| `statements/update.mdx` | UPDATE |
| `statements/delete.mdx` | DELETE |
| `statements/upsert.mdx` | UPSERT |
| `statements/replace.mdx` | REPLACE |
| `statements/transactions.mdx` | Transactions |
| `statements/explain.mdx` | EXPLAIN |
| `statements/vacuum.mdx` | VACUUM |
| `statements/analyze.mdx` | ANALYZE |
| `statements/attach-database.mdx` | ATTACH DATABASE |
| `statements/detach-database.mdx` | DETACH DATABASE |
| `functions/aggregate.mdx` | Aggregate functions |
| `functions/scalar.mdx` | Scalar functions |
| `functions/date-time.mdx` | Date/time functions |
| `functions/json.mdx` | JSON functions |
| `functions/math.mdx` | Math functions |
| `functions/array.mdx` | Array functions |
| `functions/vector.mdx` | Vector functions |
| `functions/fts.mdx` | Full-text search functions |
| `functions/window.mdx` | Window functions |
| `cli/getting-started.mdx` | SQLite CLI getting started |
| `cli/shell-commands.mdx` | SQLite shell commands |
| `cli/command-line-options.mdx` | CLI options |

### sync/ (5 files)

| File | Description |
|------|-------------|
| `usage.mdx` | Sync usage |
| `checkpoint.mdx` | Checkpoint operations |
| `conflict-resolution.mdx` | Conflict resolution |
| `local-sync-server.mdx` | Local sync server |
| `partial.mdx` | Partial sync |

### tursodb/ (5 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | TursoDB quickstart |
| `cdc.mdx` | Change data capture |
| `concurrent-writes.mdx` | Concurrent writes |
| `encryption.mdx` | Encryption |

### help/ (1 file)

| File | Description |
|------|-------------|
| `usage-and-billing.mdx` | Usage and billing info |
