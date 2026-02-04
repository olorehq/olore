# Turso Table of Contents

## Directory Map

```
contents/
├── agentfs/            # AgentFS filesystem for AI agents (13 files)
│   ├── guides/         # AgentFS guides
│   ├── reference/      # CLI reference
│   └── sdk/            # Python, Rust, TypeScript SDKs
├── api-reference/      # Platform API reference (50 files)
│   ├── audit-logs/     # Audit log APIs
│   ├── databases/      # Database management
│   ├── groups/         # Group management
│   ├── locations/      # Region APIs
│   ├── organizations/  # Organization management
│   └── tokens/         # API token management
├── cli/                # Turso CLI documentation (56 files)
│   ├── auth/           # Authentication commands
│   ├── db/             # Database commands
│   ├── group/          # Group commands
│   ├── org/            # Organization commands
│   └── plan/           # Plan management
├── sdk/                # Client SDKs (57 files)
│   ├── activerecord/   # Ruby ActiveRecord
│   ├── c/              # C SDK
│   ├── flutter/        # Flutter/Dart SDK
│   ├── go/             # Go SDK
│   ├── http/           # HTTP API SDK
│   ├── java/           # Java SDK
│   ├── kotlin/         # Kotlin SDK
│   ├── php/            # PHP SDK
│   ├── python/         # Python SDK
│   ├── ruby/           # Ruby SDK
│   ├── rust/           # Rust SDK
│   ├── swift/          # Swift SDK
│   └── ts/             # TypeScript/JavaScript SDK
├── features/           # Platform features (16 files)
├── connect/            # Connection guides (7 files)
├── cloud/              # Cloud features (4 files)
├── sync/               # Sync features (2 files)
├── tursodb/            # TursoDB embedded (2 files)
├── guides/             # General guides (1 file)
├── help/               # Help & billing (1 file)
└── integrations/       # Integrations (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` or `contents/introduction.mdx` |
| AgentFS for AI agents | `contents/agentfs/introduction.mdx` |
| Platform API reference | `contents/api-reference/introduction.mdx` |
| CLI commands | `contents/cli/introduction.mdx` |
| SDK integration | `contents/sdk/introduction.mdx` |
| Embedded database | `contents/tursodb/quickstart.mdx` |
| Local development | `contents/local-development.mdx` |

## Detailed Structure

### Root Level (6 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Welcome to Turso |
| `quickstart.mdx` | Quick start guide |
| `libsql.mdx` | libSQL information |
| `local-development.mdx` | Local development setup |
| `data-and-connections.mdx` | Data and connections overview |
| `turso-cloud.mdx` | Turso Cloud overview |

### agentfs/ (13 files)

AgentFS - specialized filesystem and state management for AI agents.

| File | Description |
|------|-------------|
| `introduction.mdx` | AgentFS introduction |
| `installation.mdx` | Installation guide |
| **guides/** | |
| `guides/auditing.mdx` | Auditing functionality |
| `guides/mcp.mdx` | MCP integration |
| `guides/nfs.mdx` | NFS support |
| `guides/overlay.mdx` | Overlay filesystem |
| `guides/sandbox.mdx` | Sandboxing |
| `guides/sessions.mdx` | Session management |
| `guides/sync.mdx` | Sync functionality |
| **reference/** | |
| `reference/cli.mdx` | CLI reference |
| **sdk/** | |
| `sdk/python.mdx` | Python SDK |
| `sdk/rust.mdx` | Rust SDK |
| `sdk/typescript.mdx` | TypeScript SDK |

### api-reference/ (50 files)

Platform API for managing Turso resources programmatically.

| File | Description |
|------|-------------|
| `introduction.mdx` | API introduction |
| `quickstart.mdx` | API quickstart |
| `authentication.mdx` | Authentication methods |
| `oauth.mdx` | OAuth integration |
| `response-codes.mdx` | Response codes reference |
| `versioning.mdx` | API versioning |
| **audit-logs/** | |
| `audit-logs/list.mdx` | List audit logs |
| **databases/** | |
| `databases/create.mdx` | Create database |
| `databases/list.mdx` | List databases |
| `databases/retrieve.mdx` | Get database details |
| `databases/delete.mdx` | Delete database |
| `databases/configuration.mdx` | Database configuration |
| `databases/update-configuration.mdx` | Update configuration |
| `databases/create-token.mdx` | Create database token |
| `databases/invalidate-tokens.mdx` | Invalidate tokens |
| `databases/list-instances.mdx` | List database instances |
| `databases/retrieve-instance.mdx` | Get instance details |
| `databases/stats.mdx` | Database statistics |
| `databases/usage.mdx` | Database usage |
| **groups/** | |
| `groups/create.mdx` | Create group |
| `groups/list.mdx` | List groups |
| `groups/retrieve.mdx` | Get group details |
| `groups/delete.mdx` | Delete group |
| `groups/configuration.mdx` | Group configuration |
| `groups/update-configuration.mdx` | Update configuration |
| `groups/create-token.mdx` | Create group token |
| `groups/invalidate-tokens.mdx` | Invalidate tokens |
| `groups/transfer.mdx` | Transfer group |
| `groups/unarchive.mdx` | Unarchive group |
| **locations/** | |
| `locations/list.mdx` | List locations |
| `locations/closest-region.mdx` | Find closest region |
| **organizations/** | |
| `organizations/list.mdx` | List organizations |
| `organizations/retrieve.mdx` | Get organization details |
| `organizations/update.mdx` | Update organization |
| `organizations/plans.mdx` | Organization plans |
| `organizations/subscription.mdx` | Subscription management |
| `organizations/invoices.mdx` | Invoices |
| `organizations/usage.mdx` | Organization usage |
| `organizations/invites/create.mdx` | Create invite |
| `organizations/invites/list.mdx` | List invites |
| `organizations/invites/delete.mdx` | Delete invite |
| `organizations/members/add.mdx` | Add member |
| `organizations/members/list.mdx` | List members |
| `organizations/members/retrieve.mdx` | Get member details |
| `organizations/members/update.mdx` | Update member |
| `organizations/members/remove.mdx` | Remove member |
| **tokens/** | |
| `tokens/create.mdx` | Create API token |
| `tokens/list.mdx` | List tokens |
| `tokens/revoke.mdx` | Revoke token |
| `tokens/validate.mdx` | Validate token |

### cli/ (56 files)

Turso CLI commands and usage.

| File | Description |
|------|-------------|
| `introduction.mdx` | CLI introduction |
| `installation.mdx` | Installation guide |
| `authentication.mdx` | Authentication |
| `headless-mode.mdx` | Headless mode |
| `dev.mdx` | Dev command |
| `help.mdx` | Help command |
| `upgrading.mdx` | Upgrading CLI |
| **auth/** | |
| `auth/login.mdx` | Login command |
| `auth/logout.mdx` | Logout command |
| `auth/signup.mdx` | Signup command |
| `auth/token.mdx` | Get auth token |
| `auth/whoami.mdx` | Show current user |
| `auth/api-tokens/list.mdx` | List API tokens |
| `auth/api-tokens/mint.mdx` | Create API token |
| `auth/api-tokens/revoke.mdx` | Revoke API token |
| **contact/** | |
| `contact/bookmeeting.mdx` | Book meeting |
| `contact/feedback.mdx` | Send feedback |
| **db/** | |
| `db/create.mdx` | Create database |
| `db/destroy.mdx` | Destroy database |
| `db/list.mdx` | List databases |
| `db/show.mdx` | Show database details |
| `db/inspect.mdx` | Inspect database |
| `db/shell.mdx` | Database shell |
| `db/locations.mdx` | Database locations |
| `db/wakeup.mdx` | Wake up database |
| `db/export.mdx` | Export database |
| `db/import.mdx` | Import database |
| `db/tokens/create.mdx` | Create database token |
| `db/tokens/invalidate.mdx` | Invalidate tokens |
| **group/** | |
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
| `group/aws-migration/info.mdx` | Migration info |
| `group/aws-migration/abort.mdx` | Abort migration |
| **org/** | |
| `org/create.mdx` | Create organization |
| `org/destroy.mdx` | Destroy organization |
| `org/list.mdx` | List organizations |
| `org/switch.mdx` | Switch organization |
| `org/billing.mdx` | Billing management |
| `org/members/add.mdx` | Add member |
| `org/members/invite.mdx` | Invite member |
| `org/members/list.mdx` | List members |
| `org/members/rm.mdx` | Remove member |
| **plan/** | |
| `plan/show.mdx` | Show current plan |
| `plan/select.mdx` | Select plan |
| `plan/upgrade.mdx` | Upgrade plan |
| `plan/overages/enable.mdx` | Enable overages |
| `plan/overages/disable.mdx` | Disable overages |

### sdk/ (57 files)

Client SDKs for various languages and frameworks.

| File | Description |
|------|-------------|
| `introduction.mdx` | SDK overview |
| `authentication.mdx` | SDK authentication |
| **ts/** (TypeScript/JavaScript) | |
| `ts/quickstart.mdx` | TypeScript quickstart |
| `ts/reference.mdx` | API reference |
| `ts/examples.mdx` | Code examples |
| `ts/guides/astro.mdx` | Astro integration |
| `ts/guides/elysia.mdx` | Elysia integration |
| `ts/guides/hono.mdx` | Hono integration |
| `ts/guides/nextjs.mdx` | Next.js integration |
| `ts/guides/nuxt.mdx` | Nuxt integration |
| `ts/guides/quasar.mdx` | Quasar integration |
| `ts/guides/qwik.mdx` | Qwik integration |
| `ts/guides/remix.mdx` | Remix integration |
| `ts/guides/sveltekit.mdx` | SvelteKit integration |
| `ts/integrations/sentry.mdx` | Sentry integration |
| `ts/orm/drizzle.mdx` | Drizzle ORM |
| `ts/orm/prisma.mdx` | Prisma ORM |
| **python/** | |
| `python/quickstart.mdx` | Python quickstart |
| `python/reference.mdx` | API reference |
| `python/examples.mdx` | Code examples |
| `python/guides/flask.mdx` | Flask integration |
| `python/orm/sqlalchemy.mdx` | SQLAlchemy ORM |
| **go/** | |
| `go/quickstart.mdx` | Go quickstart |
| `go/reference.mdx` | API reference |
| `go/examples.mdx` | Code examples |
| **rust/** | |
| `rust/quickstart.mdx` | Rust quickstart |
| `rust/reference.mdx` | API reference |
| `rust/examples.mdx` | Code examples |
| `rust/guides/actix.mdx` | Actix integration |
| `rust/guides/axum.mdx` | Axum integration |
| `rust/guides/rocket.mdx` | Rocket integration |
| `rust/guides/tauri.mdx` | Tauri integration |
| **php/** | |
| `php/quickstart.mdx` | PHP quickstart |
| `php/reference.mdx` | API reference |
| `php/examples.mdx` | Code examples |
| `php/guides/laravel.mdx` | Laravel integration |
| `php/orm/doctrine-dbal.mdx` | Doctrine DBAL |
| **ruby/** | |
| `ruby/quickstart.mdx` | Ruby quickstart |
| `ruby/examples.mdx` | Code examples |
| **activerecord/** | |
| `activerecord/quickstart.mdx` | ActiveRecord quickstart |
| `activerecord/guides/rails.mdx` | Rails integration |
| **flutter/** | |
| `flutter/quickstart.mdx` | Flutter quickstart |
| `flutter/reference.mdx` | API reference |
| `flutter/examples.mdx` | Code examples |
| `flutter/integrations/drift.mdx` | Drift ORM |
| **java/** | |
| `java/quickstart.mdx` | Java quickstart |
| `java/reference.mdx` | API reference |
| **kotlin/** | |
| `kotlin/quickstart.mdx` | Kotlin quickstart |
| `kotlin/reference.mdx` | API reference |
| **swift/** | |
| `swift/quickstart.mdx` | Swift quickstart |
| `swift/reference.mdx` | API reference |
| **c/** | |
| `c/quickstart.mdx` | C quickstart |
| `c/reference.mdx` | API reference |
| `c/examples.mdx` | Code examples |
| **http/** | |
| `http/quickstart.mdx` | HTTP API quickstart |
| `http/reference.mdx` | API reference |
| `http/guides/flutter.mdx` | Flutter HTTP guide |

### features/ (16 files)

Platform features and capabilities.

| File | Description |
|------|-------------|
| `ai-and-embeddings.mdx` | AI and vector embeddings |
| `attach-database.mdx` | Attach database feature |
| `branching.mdx` | Database branching |
| `data-edge.mdx` | Data at the edge |
| `multi-db-schemas.mdx` | Multi-database schemas |
| `platform-api.mdx` | Platform API overview |
| `point-in-time-recovery.mdx` | Point-in-time recovery |
| `scale-to-zero.mdx` | Scale to zero |
| `sqlite-extensions.mdx` | SQLite extensions |
| **embedded-replicas/** | |
| `embedded-replicas/introduction.mdx` | Embedded replicas intro |
| `embedded-replicas/with-akamai.mdx` | Akamai deployment |
| `embedded-replicas/with-fly.mdx` | Fly.io deployment |
| `embedded-replicas/with-koyeb.mdx` | Koyeb deployment |
| `embedded-replicas/with-railway.mdx` | Railway deployment |
| `embedded-replicas/with-render.mdx` | Render deployment |
| `embedded-replicas/rust/railway.mdx` | Rust on Railway |

### connect/ (7 files)

Connection guides for various languages.

| File | Description |
|------|-------------|
| `authorization.mdx` | Authorization |
| `dart.mdx` | Dart connection |
| `go.mdx` | Go connection |
| `java.mdx` | Java connection |
| `javascript.mdx` | JavaScript connection |
| `python.mdx` | Python connection |
| `rust.mdx` | Rust connection |

### cloud/ (4 files)

Cloud-specific features.

| File | Description |
|------|-------------|
| `durability.mdx` | Data durability |
| `encryption.mdx` | Encryption at rest |
| `migrate-to-turso.mdx` | Migration guide |
| `private-endpoints.mdx` | Private endpoints |

### tursodb/ (2 files)

Embedded TursoDB.

| File | Description |
|------|-------------|
| `quickstart.mdx` | TursoDB quickstart |
| `encryption.mdx` | Encryption |

### sync/ (2 files)

Sync functionality.

| File | Description |
|------|-------------|
| `partial.mdx` | Partial sync |
| `usage.mdx` | Sync usage |

### guides/ (1 file)

| File | Description |
|------|-------------|
| `agent-databases.mdx` | Agent databases |

### help/ (1 file)

| File | Description |
|------|-------------|
| `usage-and-billing.mdx` | Usage and billing |

### integrations/ (1 file)

| File | Description |
|------|-------------|
| `cloudflare.mdx` | Cloudflare integration |
