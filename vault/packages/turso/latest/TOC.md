# turso Table of Contents

## Directory Map

```
contents/
├── introduction.mdx, quickstart.mdx, turso-cloud.mdx, libsql.mdx, local-development.mdx
├── agentfs/          # AgentFS filesystem for AI agents (13 files)
├── api-reference/    # Turso Platform REST API (58 files)
├── cli/              # Turso CLI commands (59 files)
├── cloud/            # Cloud platform: branching, groups, plans, billing
├── connect/          # Connecting from frameworks and tools
├── features/         # Embedded replicas, PITR, encryption, recovery
├── guides/           # How-to guides
├── help/             # Usage and billing
├── integrations/     # Vercel, MCP, agentic integrations
├── sdk/              # Language SDKs (TS, Rust, Go, Python, PHP, Ruby, Java, Kotlin, Swift, C, Flutter, HTTP)
├── sql-reference/    # SQL statements, functions, pragmas, extensions (49 files)
├── sync/             # Database sync and partial sync
└── tursodb/          # Turso Database (Rust SQLite rewrite): CDC, encryption, changelog
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` |
| Overview | `contents/introduction.mdx` |
| Local development | `contents/local-development.mdx` |
| TypeScript SDK | `contents/sdk/ts/quickstart.mdx` |
| CLI usage | `contents/cli/` |
| Platform API | `contents/api-reference/introduction.mdx` |
| SQL syntax | `contents/sql-reference/statements/` |
| Sync | `contents/sync/usage.mdx` |

## Detailed Structure

Paths in each table are relative to the directory heading, under `contents/`.

### (root) (5 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Welcome to Turso - The small database to power your big dreams in the age of AI. |
| `libsql.mdx` | libSQL - libSQL is a production-ready fork of SQLite, maintained by Turso. |
| `local-development.mdx` | Local Development - Build locally with a local Turso database, or a local libSQL server. |
| `quickstart.mdx` | Quickstart - Welcome to Turso Cloud! Get started in minutes. |
| `turso-cloud.mdx` | Turso Cloud Documentation - Fully managed platform for SQLite-compatible databases. Deploy Turso, a rewrite of SQLite with concurrent writes and multi-user ac |

### agentfs/ (2 files)

| File | Description |
|------|-------------|
| `installation.mdx` | Installation - Install the AgentFS CLI on Linux, macOS, and Windows |
| `introduction.mdx` | AgentFS - A filesystem for AI agents, built on Turso |

### agentfs/guides/ (7 files)

| File | Description |
|------|-------------|
| `auditing.mdx` | Audit Filesystem Changes - Inspect and analyze what an agent did during a session |
| `mcp.mdx` | MCP Server Integration - Use AgentFS as an MCP server for AI assistants |
| `nfs.mdx` | NFS Server Access - Export AgentFS over the network via NFS |
| `overlay.mdx` | Copy-on-Write Overlays - How copy-on-write isolation works in AgentFS |
| `sandbox.mdx` | Agentic Coding - Run AI coding agents safely with AgentFS sandboxing |
| `sessions.mdx` | Shared Agent Sessions - Share state between multiple agents and terminals with named sessions |
| `sync.mdx` | Sync with Turso Cloud - Synchronize agent filesystems with remote Turso databases |

### agentfs/reference/ (1 files)

| File | Description |
|------|-------------|
| `cli.mdx` | CLI Reference - Complete reference for the AgentFS command-line interface |

### agentfs/sdk/ (3 files)

| File | Description |
|------|-------------|
| `python.mdx` | Python SDK - AgentFS Python SDK for building AI agents |
| `rust.mdx` | Rust SDK - Complete reference for the AgentFS Rust SDK |
| `typescript.mdx` | TypeScript/JavaScript SDK - Complete reference for the AgentFS TypeScript and JavaScript SDK |

### api-reference/ (6 files)

| File | Description |
|------|-------------|
| `authentication.mdx` | Authentication - The Turso API uses API tokens to authenticate requests. You can create and revoke API tokens using the Turso CLI and Authenticatio |
| `introduction.mdx` | Turso Platform API - Programmatically manage databases, groups, organizations, and tokens with the Turso Platform API. |
| `oauth.mdx` | OAuth - Integrate Turso with your application using OAuth. |
| `quickstart.mdx` | Quickstart - Get started with Turso API in a few easy steps. |
| `response-codes.mdx` | Errors - The Turso API will respond with an HTTP status code, and in the event of an error, return an error message in the response body. |
| `versioning.mdx` | Versioning |

### api-reference/audit-logs/ (1 files)

| File | Description |
|------|-------------|
| `list.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/audit-logs \ |

### api-reference/databases/ (15 files)

| File | Description |
|------|-------------|
| `configuration.mdx` |  - curl -L -X GET 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/configuration' \ |
| `create-token.mdx` |  - curl -L -X POST 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/auth/tokens?expiration=2w&aut |
| `create.mdx` |  - curl -L -X POST 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases' \ |
| `delete.mdx` |  - On paid plans, a deleted database can be restored for up to five days — see Recover Deleted Databases. |
| `invalidate-tokens.mdx` |  - A short downtime is required to complete the changes. |
| `list-deleted.mdx` |  - Unlike the v1 endpoints, this endpoint identifies the organization by its |
| `list-instances.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/instances \ |
| `list.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/databases \ |
| `restore.mdx` |  - Unlike the v1 endpoints, this endpoint identifies the organization and database |
| `retrieve-instance.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/instances/{instanceName} \ |
| `retrieve.mdx` |  - curl -L 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}' \ |
| `stats.mdx` |  - curl -L -X GET 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/stats' \ |
| `update-configuration.mdx` |  - curl -L -X PATCH 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/configuration' \ |
| `upload.mdx` | Upload Database - Upload a SQLite database file to a database created with `seed.type = "database_upload"`. |
| `usage.mdx` |  - curl -L -X GET 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/usage?from=2023-01-01T00:00:00 |

### api-reference/groups/ (12 files)

| File | Description |
|------|-------------|
| `configuration.mdx` |  - curl -L -X GET 'https://api.turso.tech/v1/organizations/{organizationSlug}/groups/{groupName}/configuration' \ |
| `create-token.mdx` |  - Tokens cannot be retrieved once created, and cannot be revoked individually. |
| `create.mdx` |  - Creating more than one group is limited to Scaler, Pro and Enterprise plans. |
| `delete.mdx` |  - On paid plans, a deleted group and its databases can be restored for up to five |
| `invalidate-tokens.mdx` |  - curl -L -X POST 'https://api.turso.tech/v1/organizations/{organizationSlug}/groups/{groupName}/auth/rotate' \ |
| `list-deleted.mdx` |  - Unlike the v1 endpoints, this endpoint identifies the organization by its |
| `list.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/groups \ |
| `restore.mdx` |  - Unlike the v1 endpoints, this endpoint identifies the organization and group by |
| `retrieve.mdx` |  - curl -L 'https://api.turso.tech/v1/organizations/{organizationSlug}/groups/{groupName}' \ |
| `transfer.mdx` |  - You can only transfer groups to organizations you own or are an admin. |
| `unarchive.mdx` |  - Databases get archived after 10 days of inactivity for users on a free plan. You can unarchive inactive groups using the API. |
| `update-configuration.mdx` |  - curl -L -X PATCH 'https://api.turso.tech/v1/organizations/{organizationSlug}/groups/{groupName}/configuration' \ |

### api-reference/locations/ (2 files)

| File | Description |
|------|-------------|
| `closest-region.mdx` | Closest Region - Returns the closest region to the user's location. |
| `list.mdx` |  - curl -L https://api.turso.tech/v1/locations \ |

### api-reference/organizations/ (7 files)

| File | Description |
|------|-------------|
| `invoices.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/invoices \ |
| `list.mdx` |  - curl -L https://api.turso.tech/v1/organizations \ |
| `plans.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/plans \ |
| `retrieve.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug} \ |
| `subscription.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/subscription \ |
| `update.mdx` |  - curl -L -X PATCH https://api.turso.tech/v1/organizations/{organizationSlug} \ |
| `usage.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/usage \ |

### api-reference/organizations/invites/ (3 files)

| File | Description |
|------|-------------|
| `create-v2.mdx` | Create Invite - You can invite by **email** or by **username** — provide exactly one. When inviting by username, the invite is sent to that user's |
| `delete-v2.mdx` |  - curl -L -X DELETE https://api.turso.tech/v2/organizations/{organizationSlug}/invites/{email} \ |
| `list-v2.mdx` |  - curl -L https://api.turso.tech/v2/organizations/{organizationSlug}/invites \ |

### api-reference/organizations/members/ (5 files)

| File | Description |
|------|-------------|
| `add.mdx` |  - If you want to add someone who is not a registered Turso user, you can create an invite instead. |
| `list.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/members \ |
| `remove.mdx` |  - curl -L -X DELETE https://api.turso.tech/v1/organizations/{organizationSlug}/members/{username} \ |
| `retrieve.mdx` |  - curl -L https://api.turso.tech/v1/organizations/{organizationSlug}/members/{username} \ |
| `update.mdx` |  - curl -L -X PATCH https://api.turso.tech/v1/organizations/{organizationSlug}/members/{username} \ |

### api-reference/tokens/ (6 files)

| File | Description |
|------|-------------|
| `create.mdx` |  - The `token` in the response is never revealed again. Store this somewhere safe, and never share or commit it to source control. |
| `list-organization.mdx` |  - Use this endpoint to enumerate the tokens that act on a single organization (both org-scoped and group-scoped). Admins and owners  |
| `list.mdx` |  - curl -L https://api.turso.tech/v1/auth/api-tokens \ |
| `revoke-organization.mdx` |  - This endpoint takes a token **ID** (not a name) because token names are not unique across users in an organization. Admins and own |
| `revoke.mdx` |  - curl -L -X DELETE 'https://api.turso.tech/v1/auth/api-tokens/{tokenName}' \ |
| `validate.mdx` |  - curl -L 'https://api.turso.tech/v1/auth/validate' \ |

### api-reference/user/ (1 files)

| File | Description |
|------|-------------|
| `get-current.mdx` |  - curl -L https://api.turso.tech/v1/user \ |

### cli/ (7 files)

| File | Description |
|------|-------------|
| `authentication.mdx` | Authentication - The Turso CLI uses an access token to authenticate with Turso. You can login using the command: |
| `dev.mdx` | dev |
| `headless-mode.mdx` | Headless Mode - The Turso CLI will automatically attempt to open a browser, or wait for further instructions when interacting with various command |
| `help.mdx` | Help - You can always find a summary of all commands by running the following command: |
| `installation.mdx` | Installation - Learn how to install the Turso CLI on Mac, Linux and Windows. |
| `introduction.mdx` | Introduction - The Turso CLI gives you everything you need from the command line to manage your database, API tokens, inviting users, and launchi |
| `upgrading.mdx` | Upgrading - Update the Turso CLI to the latest version to benefit from all the latest features, and fixes. |

### cli/auth/ (5 files)

| File | Description |
|------|-------------|
| `login.mdx` | auth login - To authenticate the Turso CLI with your account, run the following command: |
| `logout.mdx` | auth logout - To logout of the Turso CLI, run the following command: |
| `signup.mdx` | auth signup - To sign up for a new Turso account using the CLI, run the following command: |
| `token.mdx` | auth token - You can obtain your current API token that is used to authenticate with the Turso Platform API by running the following command: |
| `whoami.mdx` | auth whoami - You can obtain the username for the currently logged in user by running the following command: |

### cli/auth/api-tokens/ (3 files)

| File | Description |
|------|-------------|
| `list.mdx` | auth api-tokens list - To list every API token you have minted across every organization you belong to, run the following command: |
| `mint.mdx` | auth api-tokens mint - To create a new API token, scoped to a single organization, run the following command: |
| `revoke.mdx` | auth api-tokens revoke - To revoke a named API token for the current organization, run the following command: |

### cli/contact/ (2 files)

| File | Description |
|------|-------------|
| `bookmeeting.mdx` | contact bookmeeting - You can book a meeting with the Turso team to discuss your project and requirements using the following command: |
| `feedback.mdx` | contact feedback - You can send feedback to the Turso team by using the following command: |

### cli/db/ (10 files)

| File | Description |
|------|-------------|
| `create.mdx` | db create - You can create a new database in a specific group using the following command: |
| `destroy.mdx` | db destroy - You can destroy a database by using the following command: |
| `export.mdx` | db export - Export a database snapshot from Turso to a SQLite file. |
| `import.mdx` | db import - You can import an existing SQLite file to Turso Cloud using the following command: |
| `inspect.mdx` | db inspect - You can inspect the usage of a database, including the total space used, rows read and written with the following command: |
| `list.mdx` | db list - You can obtain a list of all databases for the current user or organization by running the following command: |
| `locations.mdx` | db locations - You can fetch a list of supported locations where databases can be located by running the following command: |
| `shell.mdx` | db shell - You can connect directly to a Turso database by using the following command: |
| `show.mdx` | db show - You can obtain details about the database, including the name, ID, libSQL server version, group, size and location. |
| `wakeup.mdx` | db unarchive - You can unarchive inactive databases by running the following command: |

### cli/db/config/allow-rules/ (3 files)

| File | Description |
|------|-------------|
| `clear.mdx` | db config allow-rules clear - Clear the access allow rules for a database, allowing connections from any source. |
| `set.mdx` | db config allow-rules set - Set the access allow rules for a database. Each flag replaces the corresponding list; a list whose flag is not provided is left un |
| `show.mdx` | db config allow-rules show - Print the access allow rules for a database. |

### cli/db/tokens/ (2 files)

| File | Description |
|------|-------------|
| `create.mdx` | db tokens create - You can create a new token that can be used to connect to one database using the command: |
| `invalidate.mdx` | db tokens invalidate - You can invalidate all tokens for a database by running the following command: |

### cli/group/ (6 files)

| File | Description |
|------|-------------|
| `create.mdx` | group create - You can create a new group of databases. Groups belong to a primary region. |
| `destroy.mdx` | group destroy - You can destroy a group and all of its databases using the following command: |
| `list.mdx` | group list - You can obtain a list of all groups by using the following command: |
| `transfer.mdx` | group transfer - You can transfer a group (including its databases) to an organization you're an admin or owner of using the following command: |
| `unarchive.mdx` | group unarchive - You can unarchive inactive databases by running the following command: |
| `update.mdx` | group update - You can update the group, including all databases the following command: |

### cli/group/aws-migration/ (3 files)

| File | Description |
|------|-------------|
| `abort.mdx` | group aws-migration abort - You can abort the AWS migration process by using the following command: |
| `info.mdx` | group aws-migration info - You can check the AWS migration details by using the following command: |
| `start.mdx` | group aws-migration start - You can start the AWS migration process by using the following command: |

### cli/group/locations/ (2 files)

| File | Description |
|------|-------------|
| `add.mdx` | group locations add - This feature is deprecated. Turso Cloud no longer supports multi-region replication for new users. |
| `remove.mdx` | group locations remove - This feature is deprecated. Turso Cloud no longer supports multi-region replication for new users. |

### cli/group/tokens/ (2 files)

| File | Description |
|------|-------------|
| `create.mdx` | group tokens create - You can create a new token that can be used to connect to any database in the group using the command: |
| `invalidate.mdx` | group tokens invalidate - You can invalidate all tokens for a group by running the command: |

### cli/org/ (5 files)

| File | Description |
|------|-------------|
| `billing.mdx` | org billing - To open the billing portal for your organization: |
| `create.mdx` | org create - To create a new organization that you own, run the following command: |
| `destroy.mdx` | destroy - To delete an existing organization that you own, run the following command: |
| `list.mdx` | org list - To list organizations of which you are the owner or a member, run the following command: |
| `switch.mdx` | org switch - To switch the current active organization for the CLI, use the following command: |

### cli/org/members/ (4 files)

| File | Description |
|------|-------------|
| `add.mdx` | org members add - To add an existing Turso user as a member to the current active organization, run the following command: |
| `invite.mdx` | org members invite - To invite someone who isn't already a Turso user to the current active organization, run the following command: |
| `list.mdx` | org members list - To list all members of the current active organization, run the following command: |
| `rm.mdx` | org members rm - To remove a member from the current organization, use the following command: |

### cli/plan/ (3 files)

| File | Description |
|------|-------------|
| `select.mdx` | plan select - You can switch your current plan at any time using the command: |
| `show.mdx` | plan show - You can show the current plan usage and limits with the command: |
| `upgrade.mdx` | plan upgrade - You can upgrade your account to a paid plan at any time using the command: |

### cli/plan/overages/ (2 files)

| File | Description |
|------|-------------|
| `disable.mdx` | plan overages disable - You can disable overages for the current repository by running the following command: |
| `enable.mdx` | plan overages enable - You can enable overages for the current repository by running the following command: |

### cloud/ (6 files)

| File | Description |
|------|-------------|
| `allow-rules.mdx` | Database Access Allow Rules - Restrict database access to specific IP addresses, CIDR ranges, or AWS VPC endpoints. |
| `durability.mdx` | Durability Guarantees - The following are the durability guarantees provided by the Turso Cloud platform for users who registered or upgraded **after Marc |
| `encryption.mdx` | BYOK Encryption - All databases are encrypted-at-rest at the volume level in the Turso Cloud, as part of our SOC2 standards. See our trust center fo |
| `limitations.mdx` | Limitations - Known limitations and differences when using SQLite on Turso Cloud. |
| `migrate-to-turso.mdx` | Migrate to Turso - Learn how to import your existing SQLite database to Turso. |
| `private-endpoints.mdx` | Private Endpoints - Learn how to configure private endpoints for your Turso Database on AWS. |

### connect/ (6 files)

| File | Description |
|------|-------------|
| `dart.mdx` | Connect to Turso using Dart - Add the turso_dart package to your `pubspec.yaml`: |
| `go.mdx` | Connect to Turso using Go - Add the Turso package to your Go project: |
| `java.mdx` | Connect to Turso using Java - Currently, we have not published to the maven central. Instead, you can locally build the jar and deploy it to maven local to use  |
| `javascript.mdx` | Connect to Turso using JavaScript - Add the Turso database package to your JavaScript project: |
| `python.mdx` | Connect to Turso using Python - Add the Turso package to your Python project: |
| `rust.mdx` | Connect to Turso using Rust - Add the Turso crate to your Rust project: |

### features/ (9 files)

| File | Description |
|------|-------------|
| `ai-and-embeddings.mdx` | AI & Embeddings - Vector Similarity Search is built into Turso and libSQL Server as a native feature. |
| `attach-database.mdx` | Attach Database (Deprecated) - Attach and read data across multiple databases. |
| `branching.mdx` | Branching - A branch is a separate database instance that is created from an existing database. You can also create a branch from a point-in-t |
| `data-edge.mdx` | Data Edge (Deprecated) - Allow your users to reach local replicas of your database, wherever they are. |
| `multi-db-schemas.mdx` | Multi-DB Schemas (Deprecated) - Create and share a single schema across multiple databases. |
| `platform-api.mdx` | Platform API - Manage databases, and teams with the Turso Platform API. |
| `point-in-time-recovery.mdx` | Point-in-Time Recovery - Turso supports point-in-time recovery (PITR) for databases. PITR allows you to restore a database to a specific point in time. Thi |
| `recover-deleted-databases.mdx` | Recover Deleted Databases - Restore databases and groups for up to five days after deletion. |
| `sqlite-extensions.mdx` | SQLite Extensions - Learn how to use SQLite extensions with Turso. |

### features/embedded-replicas/ (6 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Embedded Replicas - Embedded Replicas keep a local read replica of a Turso Cloud database: reads run locally from the file in microseconds, and writes |
| `with-akamai.mdx` | Turso + Linode by Akamai - Deploy a JavaScript/Rust app using Turso Cloud embedded replicas to Akamai. |
| `with-fly.mdx` | Embedded Replicas on Fly - Deploy a JavaScript app using Turso Cloud embedded replicas to Fly.io. |
| `with-koyeb.mdx` | Turso + Koyeb - Deploy a JavaScript/Rust app using Turso Cloud embedded replicas to Koyeb. |
| `with-railway.mdx` | Turso + Railway - Deploy a JavaScript/Rust app using Turso Cloud embedded replicas to Railway. |
| `with-render.mdx` | Turso + Render - Deploy a JavaScript app using Turso Cloud embedded replicas to Render. |

### features/embedded-replicas/rust/ (1 files)

| File | Description |
|------|-------------|
| `railway.mdx` | Turso + Railway - Deploy a Rust app using Turso Cloud embedded replicas to Railway. |

### guides/ (6 files)

| File | Description |
|------|-------------|
| `agent-databases.mdx` | Agent Databases - Looking for a complete agent state management solution? Check out AgentFS - our specialized SDK designed specifically for AI agent |
| `ai-memory.mdx` | AI Memory - AI agents start every session from scratch. A persistent memory system lets agents store lessons and retrieve relevant context via |
| `code-indexing.mdx` | Code Indexing - AI coding agents work better when they can search a codebase semantically ("find the authentication logic") rather than just by fi |
| `content-caching.mdx` | Content Caching - Tools and agents frequently re-read files they have already seen, wasting tokens and time. A content-addressed cache backed by an  |
| `secrets-vault.mdx` | Secrets Vault - AI coding agents regularly need real credentials — an API token to call GitHub as you, a key to hit your billing provider, a token |
| `vector-search.mdx` | Vector Search - Build semantic search, recommendation systems, and RAG workflows with native vector search in Turso. |

### help/ (1 files)

| File | Description |
|------|-------------|
| `usage-and-billing.mdx` | Usage & Billing - For the Starter and Scaler plans, Turso usage is limited monthly based on the following usage observations during each calendar mo |

### integrations/ (5 files)

| File | Description |
|------|-------------|
| `agentic-stripe.mdx` | Stripe Projects - Provision and manage Turso databases through the Stripe Projects CLI — LLM agent guide. |
| `agentic-vercel.mdx` | Vercel Marketplace - Use and manage Turso databases provisioned through the Vercel Marketplace — LLM agent guide. |
| `cloudflare.mdx` | Cloudflare |
| `mcp.mdx` | MCP (AI agents) - Connect AI agents to Turso Cloud over the Model Context Protocol — manage databases and run SQL with OAuth, no API token to copy. |
| `vercel.mdx` | Vercel - Use Turso with Vercel serverless and edge functions. |

### sdk/ (3 files)

| File | Description |
|------|-------------|
| `authentication.mdx` | Authentication - SDKs connect using the `turso://` protocol for Turso databases and the `libsql://` protocol for libSQL databases, unless using the |
| `authorization.mdx` | Authorization - Turso uses scoped, JWT-based tokens to control access to your databases. Every token can be restricted by database, permission lev |
| `introduction.mdx` | Turso SDKs - Two rules cover almost every case: |

### sdk/activerecord/ (1 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Turso Quickstart (ActiveRecord) - Get started with Turso and ActiveRecord in a few simple steps. |

### sdk/activerecord/guides/ (1 files)

| File | Description |
|------|-------------|
| `rails.mdx` | Ruby on Rails + Turso - Set up Turso in your Ruby on Rails project in minutes. |

### sdk/authorization/ (3 files)

| File | Description |
|------|-------------|
| `fine-grained-permissions.mdx` | Fine-Grained Permissions - Fine-grained permissions let you control access at the table and action level. They work with both CLI-generated tokens and JWKS-i |
| `jwks.mdx` | External Auth Providers - Instead of managing tokens manually, you can let your authentication provider issue JWT tokens using JWKS. This allows you to leve |
| `tokens.mdx` | Platform Tokens - Create tokens for a single database or all databases in a group using the CLI: |

### sdk/c/ (3 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Turso Examples (C) |
| `quickstart.mdx` | Turso Quickstart (C) - Get started with Turso and C using the libSQL client in a few simple steps. |
| `reference.mdx` | C Reference - libSQL C Reference |

### sdk/flutter/ (3 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Examples |
| `quickstart.mdx` | Turso Quickstart (Flutter / Dart) - Get started with Flutter and Dart using the libSQL client in a few simple steps |
| `reference.mdx` | Reference - libSQL Flutter / Dart Reference |

### sdk/flutter/integrations/ (1 files)

| File | Description |
|------|-------------|
| `drift.mdx` | Drift + Turso / LibSQL - Configure `drift` to work with `libsql_dart` |

### sdk/go/ (3 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Examples |
| `quickstart.mdx` | Turso Quickstart (Go) - Get started with Turso and Go in a few simple steps. |
| `reference.mdx` | Reference - Go Reference for Turso |

### sdk/http/ (2 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Turso Quickstart (SQL over HTTP) - Get started with SQL over HTTP for Turso in a few simple steps. |
| `reference.mdx` | SQL over HTTP Reference - Turso Databases can be accessed via HTTP. The API enables developers to perform SQL operations using SQL over HTTP, retrieve serve |

### sdk/http/guides/ (1 files)

| File | Description |
|------|-------------|
| `flutter.mdx` | Flutter + Turso - Set up Turso in your Flutter project in minutes |

### sdk/java/ (2 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Turso Quickstart (Java) - Get started with Turso and Java using the libSQL client in a few simple steps. |
| `reference.mdx` | Java Reference - libSQL Java Reference |

### sdk/kotlin/ (2 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Turso Quickstart (Android) - Get started with Turso and Android using the libSQL client in a few simple steps. |
| `reference.mdx` | Android Reference - libSQL Android Reference |

### sdk/php/ (3 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Examples - View examples on GitHub |
| `quickstart.mdx` | Turso Quickstart (PHP) - Get started with Turso and PHP using the libSQL client in a few simple steps. |
| `reference.mdx` | Reference - libSQL PHP Reference |

### sdk/php/guides/ (1 files)

| File | Description |
|------|-------------|
| `laravel.mdx` | Turso Quickstart (Laravel) - In this Laravel quickstart we will learn how to: |

### sdk/php/orm/ (1 files)

| File | Description |
|------|-------------|
| `doctrine-dbal.mdx` | Turso + Doctrine DBAL - Set up Turso in your PHP + Doctrine DBAL project in minutes |

### sdk/python/ (3 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Examples |
| `quickstart.mdx` | Turso Quickstart (Python) - Get started with Turso and Python in a few simple steps. |
| `reference.mdx` | Reference - Python Reference for Turso |

### sdk/python/guides/ (1 files)

| File | Description |
|------|-------------|
| `flask.mdx` | Flask + Turso - Set up Turso in your Flask project in minutes |

### sdk/python/orm/ (1 files)

| File | Description |
|------|-------------|
| `sqlalchemy.mdx` | SQLAlchemy + Turso - Configure SQLAlchemy to work with your Turso database |

### sdk/ruby/ (2 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Turso Examples (Ruby) |
| `quickstart.mdx` | Turso Quickstart (Ruby) - Get started with Turso and Ruby using the libSQL client in a few simple steps. |

### sdk/rust/ (3 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Examples |
| `quickstart.mdx` | Turso Quickstart (Rust) - Get started with Turso and Rust in a few simple steps. |
| `reference.mdx` | Reference - Rust Reference for Turso |

### sdk/rust/guides/ (4 files)

| File | Description |
|------|-------------|
| `actix.mdx` | Turso + Actix - Set up Turso in your Actix project in minutes |
| `axum.mdx` | Turso + Axum - Set up Turso in your Axum project in minutes |
| `rocket.mdx` | Turso + Rocket - Set up Turso in your Rocket project in minutes |
| `tauri.mdx` | Tauri + Turso - Set up Turso in your Tauri project in minutes |

### sdk/rust/orm/ (1 files)

| File | Description |
|------|-------------|
| `toasty.mdx` | Toasty + Turso - Use Toasty, the async ORM from the Tokio project, with Turso Database. |

### sdk/swift/ (2 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Turso Quickstart (Swift) - Get started with Turso and Swift using the libSQL client in a few simple steps. |
| `reference.mdx` | Swift Reference - libSQL Swift Reference |

### sdk/ts/ (3 files)

| File | Description |
|------|-------------|
| `examples.mdx` | Examples |
| `quickstart.mdx` | Turso Quickstart (TypeScript) - Get started with Turso and TypeScript in a few simple steps. |
| `reference.mdx` | Reference - TypeScript Reference for Turso |

### sdk/ts/guides/ (9 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Astro + Turso - Set up Turso in your Astro project in minutes. |
| `elysia.mdx` | Elysia + Turso - Set up Turso in your Elysia project in minutes. |
| `hono.mdx` | Hono + Turso - Set up Turso in your Hono project in minutes. |
| `nextjs.mdx` | Next.js + Turso - Set up Turso in your Next.js project in minutes. |
| `nuxt.mdx` | Nuxt + Turso - Set up Turso in your Nuxt project in minutes |
| `quasar.mdx` | Quasar + Turso - Set up Turso in your Quasar project in minutes |
| `qwik.mdx` | Qwik + Turso - Set up Turso in your Qwik project in minutes |
| `remix.mdx` | Remix + Turso - Set up Turso in your Remix project in minutes |
| `sveltekit.mdx` | SvelteKit + Turso - Set up Turso in your SvelteKit project in minutes |

### sdk/ts/integrations/ (1 files)

| File | Description |
|------|-------------|
| `sentry.mdx` | Sentry - Trace slow queries and capture SQL errors with Sentry. |

### sdk/ts/orm/ (2 files)

| File | Description |
|------|-------------|
| `drizzle.mdx` | Drizzle + Turso - Configure Drizzle to work with Turso |
| `prisma.mdx` | Prisma + Turso - Configure Prisma to work with your Turso database |

### sql-reference/ (7 files)

| File | Description |
|------|-------------|
| `compatibility.mdx` | SQLite Compatibility - Turso compatibility with SQLite - supported features, known differences, and limitations |
| `data-types.mdx` | Data Types - Storage classes, type affinity, STRICT tables, and custom types in Turso |
| `experimental-features.mdx` | Experimental Features - How to enable experimental features in the CLI and each SDK |
| `expressions.mdx` | Expressions - SQL expression syntax including literals, operators, CAST, CASE, and subqueries |
| `extensions.mdx` | Extensions - Built-in and loadable extensions for additional SQL functions and virtual tables |
| `multiprocess-access.mdx` | Multi-Process Access - Share a Turso database file between multiple OS processes using the experimental multiprocess WAL coordinator |
| `pragmas.mdx` | PRAGMA Statements - Database configuration and metadata commands in Turso |

### sql-reference/cli/ (3 files)

| File | Description |
|------|-------------|
| `command-line-options.mdx` | Command-Line Options - CLI flags, arguments, and server modes for the tursodb command |
| `getting-started.mdx` | Getting Started - Install and use the Turso interactive SQL shell |
| `shell-commands.mdx` | Shell Commands - Dot commands available in the Turso interactive SQL shell |

### sql-reference/functions/ (9 files)

| File | Description |
|------|-------------|
| `aggregate.mdx` | Aggregate Functions - Built-in aggregate functions for computing summary values over groups of rows |
| `array.mdx` | Array Functions - Create, manipulate, and query array values |
| `date-time.mdx` | Date and Time Functions - Functions for creating, formatting, and manipulating dates, times, and timestamps |
| `fts.mdx` | Full-Text Search - Full-text search with Tantivy-powered FTS indexes, scoring, and highlighting |
| `json.mdx` | JSON Functions - Create, extract, modify, and aggregate JSON data |
| `math.mdx` | Math Functions - Mathematical functions for trigonometry, logarithms, rounding, and arithmetic |
| `scalar.mdx` | Scalar Functions - Built-in scalar functions for string manipulation, math, type inspection, and more |
| `vector.mdx` | Vector Functions - Create, compare, and manipulate vector embeddings |
| `window.mdx` | Window Functions - Perform calculations across sets of rows related to the current row without collapsing them |

### sql-reference/statements/ (30 files)

| File | Description |
|------|-------------|
| `alter-table.mdx` | ALTER TABLE - Modify the structure of an existing table by renaming, adding, or dropping columns |
| `analyze.mdx` | ANALYZE - Collect statistics about indexes to help the query optimizer |
| `attach-database.mdx` | ATTACH DATABASE - Attach an additional database file to the current connection |
| `create-domain.mdx` | CREATE DOMAIN - Define a named constraint wrapper over a base type for use in STRICT tables |
| `create-index.mdx` | CREATE INDEX - Create an index on one or more columns or expressions to accelerate queries |
| `create-materialized-view.mdx` | CREATE MATERIALIZED VIEW - Create a materialized view that stores precomputed results and updates automatically |
| `create-sequence.mdx` | CREATE SEQUENCE - Define a named sequence generator for producing auto-incrementing numeric values |
| `create-table.mdx` | CREATE TABLE - Create a new table in the database with column definitions, constraints, and table options |
| `create-trigger.mdx` | CREATE TRIGGER - Create a trigger that executes statements automatically in response to table changes |
| `create-type.mdx` | CREATE TYPE - Define a custom type with encoding, decoding, validation, operators, and defaults for use in STRICT tables |
| `create-view.mdx` | CREATE VIEW - Create a named view based on a SELECT statement |
| `create-virtual-table.mdx` | CREATE VIRTUAL TABLE - Create a virtual table backed by a module that provides custom data access |
| `delete.mdx` | DELETE - Remove rows from a table |
| `detach-database.mdx` | DETACH DATABASE - Remove an attached database from the current connection |
| `drop-domain.mdx` | DROP DOMAIN - Remove a user-defined domain from the database |
| `drop-index.mdx` | DROP INDEX - Remove an index from the database |
| `drop-sequence.mdx` | DROP SEQUENCE - Remove a named sequence generator from the database |
| `drop-table.mdx` | DROP TABLE - Remove a table and all its data from the database |
| `drop-trigger.mdx` | DROP TRIGGER - Remove a trigger from the database |
| `drop-type.mdx` | DROP TYPE - Remove a user-defined custom type from the database |
| `drop-view.mdx` | DROP VIEW - Remove a view from the database |
| `explain.mdx` | EXPLAIN - Display the execution plan or bytecode for a SQL statement |
| `insert.mdx` | INSERT - Add new rows to a table using literal values, query results, or default values |
| `reindex.mdx` | REINDEX - Rebuild indexes from scratch |
| `replace.mdx` | REPLACE - Insert a row, replacing any existing row that conflicts on a unique constraint |
| `select.mdx` | SELECT - Query rows from one or more tables using filtering, joining, grouping, sorting, and set operations |
| `transactions.mdx` | Transactions - Start, commit, and roll back transactions to group operations atomically |
| `update.mdx` | UPDATE - Modify existing rows in a table |
| `upsert.mdx` | INSERT ... ON CONFLICT (Upsert) - Insert rows with automatic conflict resolution using DO NOTHING or DO UPDATE |
| `vacuum.mdx` | VACUUM - Rebuild the database file to reclaim unused space and defragment storage |

### sync/ (5 files)

| File | Description |
|------|-------------|
| `checkpoint.mdx` | Checkpoint - How to compact the local WAL to bound disk usage while preserving sync state. |
| `conflict-resolution.mdx` | Conflict Resolution - How Turso sync handles concurrent changes from multiple clients. |
| `local-sync-server.mdx` | Local Sync Server - Use the Turso CLI as a local sync server for development and testing without Turso Cloud. |
| `partial.mdx` | Partial sync - Sync only what you need. Faster cold starts and lower bandwidth by lazily fetching database pages on demand. |
| `usage.mdx` | Usage - How to enable and use sync with Turso across TypeScript, Python, and Go. |

### tursodb/ (5 files)

| File | Description |
|------|-------------|
| `cdc.mdx` | Change Data Capture - Change Data Capture (CDC) tracks all data changes (inserts, updates, deletes) made to your database tables. Changes are recorded i |
| `changelog.mdx` | Changelog |
| `concurrent-writes.mdx` | Concurrent Writes - Turso with default configuration only allows one connection to write at a time. With MVCC (Multi-Version Concurrency Control), mul |
| `encryption.mdx` | Encryption - Turso Database provides native encryption for data at rest using industry-standard AEAD algorithms. Each database page is encrypte |
| `quickstart.mdx` | Quickstart - curl --proto '=https' --tlsv1.2 -LsSf https://github.com/tursodatabase/turso/releases/latest/download/turso_cli-installer.sh / sh |

