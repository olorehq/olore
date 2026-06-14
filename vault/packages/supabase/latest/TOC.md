# Supabase Table of Contents

## Directory Map

```
contents/
├── _partials/              # Reusable content snippets (27 files)
├── guides/                 # Full how-to and reference guides (520 files)
│   ├── ai/                 # AI / pgvector / embeddings (34 files)
│   ├── ai-tools/           # MCP, AI prompts, plugins (5 files)
│   ├── api/                # Data API, REST, types (14 files)
│   ├── auth/               # Authentication (81 files)
│   │   ├── auth-hooks/     # Auth hook customization (6 files)
│   │   ├── auth-mfa/       # Multi-factor auth (2 files)
│   │   ├── oauth-server/   # OAuth server (4 files)
│   │   ├── quickstarts/    # Auth quickstarts (5 files)
│   │   ├── server-side/    # SSR / server-side auth (3 files)
│   │   ├── sessions/       # Session management (2 files)
│   │   ├── social-login/   # OAuth providers (19 files)
│   │   └── third-party/    # External auth providers (6 files)
│   ├── cron/               # Scheduled jobs (2 files)
│   ├── database/           # Postgres database (85 files)
│   │   ├── extensions/     # Postgres extensions (28 files)
│   │   ├── postgres/       # Postgres features - RLS, triggers, roles (16 files)
│   │   └── replication/    # Logical replication (7 files)
│   ├── deployment/         # Branching, migrations, environments (12 files)
│   ├── functions/          # Edge Functions (55 files)
│   ├── getting-started/    # Quickstarts and tutorials (39 files)
│   ├── integrations/       # Platform integrations (1 file)
│   ├── local-development/  # Local dev, CLI, testing (10 files)
│   ├── platform/           # Platform management (69 files)
│   │   ├── manage-your-usage/  # Usage metrics (23 files)
│   │   ├── migrating-to-supabase/ # Migrate from other platforms (12 files)
│   │   └── sso/            # SSO for org login (7 files)
│   ├── queues/             # Message queues (5 files)
│   ├── realtime/           # Realtime subscriptions (16 files)
│   ├── resources/          # Glossary (1 file)
│   ├── security/           # Security guides (5 files)
│   ├── self-hosting/       # Self-hosted Supabase (15 files)
│   ├── storage/            # File storage (41 files)
│   └── telemetry/          # Logs, metrics, monitoring (11 files)
└── troubleshooting/        # Troubleshooting articles (193 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Supabase | `contents/guides/getting-started/quickstarts/nextjs.mdx` |
| Auth setup | `contents/guides/auth.mdx` |
| Database / SQL | `contents/guides/database/overview.mdx` |
| Edge Functions | `contents/guides/functions/quickstart.mdx` |
| Storage uploads | `contents/guides/storage/quickstart.mdx` |
| Realtime subscriptions | `contents/guides/realtime/getting_started.mdx` |
| Row Level Security | `contents/guides/database/postgres/row-level-security.mdx` |
| pgvector / AI | `contents/guides/ai/vector-columns.mdx` |
| Local dev | `contents/guides/local-development/overview.mdx` |
| Error reference | `contents/troubleshooting/` |

## Detailed Structure

### _partials/ (27 files)

Reusable MDX snippets embedded across guide pages. Rarely read directly.

| File | Description |
|------|-------------|
| `api_settings.mdx` | API settings configuration snippet |
| `auth_methods.mdx` | Auth method reference snippet |
| `create_client_snippet.mdx` | Supabase client initialization |
| `database_setup.mdx` | Database setup steps |
| `oauth_pkce_flow.mdx` | PKCE flow explanation |
| `project_setup.mdx` | Project setup steps |
| `quickstart_intro.mdx` | Quickstart intro boilerplate |

### guides/getting-started/ (39 files)

| File | Description |
|------|-------------|
| `architecture.mdx` | Supabase platform architecture overview |
| `api-keys.mdx` | Understanding API keys |
| `features.mdx` | Feature overview |
| `quickstarts/nextjs.mdx` | Next.js quickstart |
| `quickstarts/reactjs.mdx` | React quickstart |
| `quickstarts/expo-react-native.mdx` | Expo / React Native quickstart |
| `quickstarts/flutter.mdx` | Flutter quickstart |
| `quickstarts/sveltekit.mdx` | SvelteKit quickstart |
| `quickstarts/vue.mdx` | Vue quickstart |
| `quickstarts/astrojs.mdx` | Astro quickstart |
| `tutorials/with-nextjs.mdx` | Full Next.js tutorial (user management) |
| `tutorials/with-react.mdx` | Full React tutorial |
| `tutorials/with-flutter.mdx` | Full Flutter tutorial |

### guides/auth/ (81 files)

| File | Description |
|------|-------------|
| `architecture.mdx` | Auth system architecture |
| `passwords.mdx` | Email/password authentication |
| `auth-email-passwordless.mdx` | Magic link / OTP login |
| `social-login.mdx` | Social OAuth overview |
| `social-login/auth-google.mdx` | Google OAuth setup |
| `social-login/auth-github.mdx` | GitHub OAuth setup |
| `social-login/auth-apple.mdx` | Apple OAuth setup |
| `social-login/auth-azure.mdx` | Azure/Microsoft OAuth |
| `server-side/creating-a-client.mdx` | SSR client setup |
| `server-side/advanced-guide.mdx` | Advanced SSR patterns |
| `sessions.mdx` | Session management |
| `sessions/pkce-flow.mdx` | PKCE auth flow |
| `auth-mfa.mdx` | Multi-factor auth |
| `auth-mfa/totp.mdx` | TOTP MFA |
| `auth-hooks.mdx` | Auth hook overview |
| `auth-hooks/custom-access-token-hook.mdx` | Customize JWT claims |
| `auth-hooks/send-email-hook.mdx` | Custom email hook |
| `managing-user-data.mdx` | User data management |
| `users.mdx` | User management |
| `identities.mdx` | Identity linking |
| `jwts.mdx` | JWT concepts |
| `jwt-fields.mdx` | JWT fields reference |
| `rate-limits.mdx` | Auth rate limits |
| `redirect-urls.mdx` | Allowed redirect URLs |
| `auth-anonymous.mdx` | Anonymous sign-in |
| `auth-captcha.mdx` | CAPTCHA integration |
| `auth-web3.mdx` | Web3 / Solana auth |
| `passkeys.mdx` | Passkey / WebAuthn |
| `phone-login.mdx` | Phone / SMS OTP |
| `password-security.mdx` | Password security settings |
| `signout.mdx` | Sign out behavior |
| `enterprise-sso/auth-sso-saml.mdx` | SAML SSO |
| `third-party/clerk.mdx` | Clerk integration |
| `third-party/auth0.mdx` | Auth0 integration |
| `oauth-server/getting-started.mdx` | OAuth server setup |
| `oauth-server/oauth-flows.mdx` | OAuth flow types |
| `debugging/error-codes.mdx` | Auth error codes |

### guides/database/ (85 files)

| File | Description |
|------|-------------|
| `tables.mdx` | Creating and managing tables |
| `functions.mdx` | PostgreSQL functions |
| `full-text-search.mdx` | Full-text search with tsvector |
| `json.mdx` | JSON columns and querying |
| `arrays.mdx` | Array columns |
| `joins-and-nesting.mdx` | Joins and nested queries via API |
| `import-data.mdx` | Importing data (CSV, etc.) |
| `webhooks.mdx` | Database webhooks |
| `vault.mdx` | Supabase Vault (secrets) |
| `connecting-to-postgres.mdx` | Connection strings overview |
| `connecting-to-postgres/serverless-drivers.mdx` | Serverless connection |
| `connection-management.mdx` | Connection pooling |
| `supavisor.mdx` | Supavisor connection pooler |
| `debugging-performance.mdx` | Performance debugging |
| `query-optimization.mdx` | Query optimization |
| `inspect.mdx` | Schema inspection |
| `extensions.mdx` | Extensions overview |
| `extensions/pgvector.mdx` | pgvector extension |
| `extensions/pg_cron.mdx` | pg_cron scheduled jobs |
| `extensions/pgjwt.mdx` | JWT extension |
| `extensions/pgsodium.mdx` | Encryption extension |
| `extensions/pg_net.mdx` | HTTP requests from database |
| `extensions/postgis.mdx` | PostGIS geospatial |
| `extensions/http.mdx` | HTTP extension |
| `extensions/pgmq.mdx` | Message queue extension |
| `extensions/pg_graphql.mdx` | GraphQL extension |
| `extensions/wrappers/overview.mdx` | Foreign data wrappers |
| `postgres/row-level-security.mdx` | Row Level Security (RLS) |
| `postgres/roles.mdx` | Postgres roles |
| `postgres/triggers.mdx` | Database triggers |
| `postgres/indexes.mdx` | Index management |
| `postgres/enums.mdx` | Enum types |
| `postgres/cascade-deletes.mdx` | Cascade deletes |
| `postgres/configuration.mdx` | Postgres configuration |
| `postgres/timeouts.mdx` | Query timeouts |
| `replication.mdx` | Replication overview |
| `replication/external-replication-setup.mdx` | External replication setup |
| `drizzle.mdx` | Drizzle ORM integration |
| `prisma.mdx` | Prisma ORM integration |
| `postgres-js.mdx` | postgres.js client |
| `beekeeper-studio.mdx` | Beekeeper Studio GUI |
| `dbeaver.mdx` | DBeaver GUI |
| `psql.mdx` | psql CLI |

### guides/api/ (14 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Data API quickstart |
| `sql-to-rest.mdx` | SQL to REST API mapping |
| `creating-routes.mdx` | Creating custom routes |
| `securing-your-api.mdx` | API security |
| `custom-claims-and-role-based-access-control-rbac.mdx` | RBAC with custom claims |
| `using-custom-schemas.mdx` | Custom schemas |
| `rest/generating-types.mdx` | TypeScript type generation |
| `rest/generating-python-types.mdx` | Python type generation |
| `rest/postgrest-error-codes.mdx` | PostgREST error codes |
| `handling-errors-in-supabase-js.mdx` | JS error handling |

### guides/functions/ (55 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Edge Functions quickstart |
| `deploy.mdx` | Deploying functions |
| `development-environment.mdx` | Local function dev |
| `secrets.mdx` | Environment variables/secrets |
| `cors.mdx` | CORS configuration |
| `auth.mdx` | Auth in Edge Functions |
| `connect-to-postgres.mdx` | Postgres from Edge Functions |
| `background-tasks.mdx` | Background task processing |
| `websockets.mdx` | WebSocket functions |
| `routing.mdx` | Function routing |
| `http-methods.mdx` | HTTP method handling |
| `error-handling.mdx` | Error handling |
| `logging.mdx` | Function logging |
| `dependencies.mdx` | NPM/Deno dependencies |
| `limits.mdx` | Resource limits |
| `schedule-functions.mdx` | Scheduled functions |
| `ai-models.mdx` | AI inference in functions |
| `wasm.mdx` | WebAssembly support |
| `examples/stripe-webhooks.mdx` | Stripe webhook handler |
| `examples/send-emails.mdx` | Email sending |
| `examples/push-notifications.mdx` | Push notifications |
| `examples/rate-limiting.mdx` | Rate limiting |
| `examples/discord-bot.mdx` | Discord bot |
| `examples/telegram-bot.mdx` | Telegram bot |
| `examples/og-image.mdx` | OG image generation |
| `examples/mcp-server-mcp-lite.mdx` | MCP server |
| `unit-test.mdx` | Unit testing |
| `debugging-tools.mdx` | Debugging tools |

### guides/storage/ (41 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Storage quickstart |
| `buckets/fundamentals.mdx` | Bucket concepts |
| `buckets/creating-buckets.mdx` | Creating buckets |
| `uploads/standard-uploads.mdx` | Standard file uploads |
| `uploads/resumable-uploads.mdx` | Resumable (TUS) uploads |
| `uploads/s3-uploads.mdx` | S3 API uploads |
| `uploads/file-limits.mdx` | File size limits |
| `serving/downloads.mdx` | Downloading files |
| `serving/image-transformations.mdx` | Image resizing/transformations |
| `serving/bandwidth.mdx` | Bandwidth management |
| `security/access-control.mdx` | Storage access control / RLS |
| `security/ownership.mdx` | Object ownership |
| `management/copy-move-objects.mdx` | Copy/move files |
| `management/delete-objects.mdx` | Delete files |
| `cdn/fundamentals.mdx` | CDN overview |
| `cdn/smart-cdn.mdx` | Smart CDN caching |
| `s3/compatibility.mdx` | S3 API compatibility |
| `s3/authentication.mdx` | S3 authentication |
| `schema/design.mdx` | Storage schema |
| `debugging/error-codes.mdx` | Storage error codes |
| `analytics/introduction.mdx` | Analytics buckets |
| `analytics/creating-analytics-buckets.mdx` | Create analytics buckets |
| `analytics/query-with-postgres.mdx` | Query analytics with Postgres |

### guides/realtime/ (16 files)

| File | Description |
|------|-------------|
| `getting_started.mdx` | Realtime getting started |
| `concepts.mdx` | Realtime concepts |
| `broadcast.mdx` | Broadcast messages |
| `presence.mdx` | Presence (online users) |
| `postgres-changes.mdx` | Listen to DB changes |
| `authorization.mdx` | Realtime authorization / RLS |
| `architecture.mdx` | Realtime architecture |
| `error_codes.mdx` | Realtime error codes |
| `limits.mdx` | Realtime limits |
| `settings.mdx` | Realtime settings |
| `protocol.mdx` | Realtime protocol details |
| `realtime-with-nextjs.mdx` | Next.js Realtime guide |
| `realtime-user-presence.mdx` | User presence guide |
| `subscribing-to-database-changes.mdx` | DB change subscriptions |

### guides/ai/ (34 files)

| File | Description |
|------|-------------|
| `concepts.mdx` | AI/vector concepts |
| `vector-columns.mdx` | Vector column setup |
| `vector-indexes.mdx` | Vector indexes overview |
| `vector-indexes/hnsw-indexes.mdx` | HNSW indexes |
| `vector-indexes/ivf-indexes.mdx` | IVF indexes |
| `semantic-search.mdx` | Semantic search |
| `hybrid-search.mdx` | Hybrid search |
| `keyword-search.mdx` | Keyword / FTS search |
| `rag-with-permissions.mdx` | RAG with RLS |
| `automatic-embeddings.mdx` | Auto-generate embeddings |
| `langchain.mdx` | LangChain integration |
| `hugging-face.mdx` | Hugging Face integration |
| `python-clients.mdx` | Python AI clients |
| `vecs-python-client.mdx` | Vecs Python client |
| `quickstarts/generate-text-embeddings.mdx` | Embedding quickstart |
| `quickstarts/hello-world.mdx` | AI hello world |
| `integrations/amazon-bedrock.mdx` | Amazon Bedrock integration |
| `integrations/llamaindex.mdx` | LlamaIndex integration |
| `examples/nextjs-vector-search.mdx` | Next.js vector search |
| `examples/openai.mdx` | OpenAI integration example |
| `going-to-prod.mdx` | AI production checklist |
| `engineering-for-scale.mdx` | Scaling AI workloads |

### guides/ai-tools/ (5 files)

| File | Description |
|------|-------------|
| `mcp.mdx` | Supabase MCP server |
| `byo-mcp.mdx` | Bring your own MCP |
| `ai-prompts.mdx` | AI prompt templates |
| `ai-skills.mdx` | AI skills |
| `plugins.mdx` | AI plugins |

### guides/local-development/ (10 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Local dev overview |
| `cli/getting-started.mdx` | CLI getting started |
| `cli/testing-and-linting.mdx` | CLI testing and linting |
| `declarative-database-schemas.mdx` | Schema-as-code |
| `managing-config.mdx` | Config management |
| `seeding-your-database.mdx` | Database seeding |
| `testing/overview.mdx` | Testing overview |
| `testing/pgtap-extended.mdx` | pgTAP database testing |
| `restoring-downloaded-backup.mdx` | Restore from backup |

### guides/deployment/ (12 files)

| File | Description |
|------|-------------|
| `database-migrations.mdx` | Database migrations |
| `going-into-prod.mdx` | Production checklist |
| `managing-environments.mdx` | Multi-environment setup |
| `maturity-model.mdx` | Development maturity model |
| `shared-responsibility-model.mdx` | Shared responsibility |
| `branching.mdx` | Database branching overview |
| `branching/github-integration.mdx` | GitHub Actions branching |
| `branching/working-with-branches.mdx` | Working with branches |
| `branching/configuration.mdx` | Branch configuration |

### guides/platform/ (69 files)

| File | Description |
|------|-------------|
| `access-control.mdx` | Project access control |
| `permissions.mdx` | Role permissions |
| `compute-and-disk.mdx` | Compute and disk options |
| `database-size.mdx` | Database size management |
| `backups.mdx` | Backup configuration |
| `network-restrictions.mdx` | IP allow-listing |
| `ssl-enforcement.mdx` | SSL/TLS enforcement |
| `custom-domains.mdx` | Custom domain setup |
| `ipv4-address.mdx` | IPv4 add-on |
| `performance.mdx` | Platform performance |
| `read-replicas.mdx` | Read replica setup |
| `read-replicas/getting-started.mdx` | Read replica quickstart |
| `regions.mdx` | Available regions |
| `upgrading.mdx` | Upgrading Postgres |
| `clone-project.mdx` | Clone a project |
| `project-transfer.mdx` | Transfer a project |
| `privatelink.mdx` | AWS PrivateLink |
| `multi-factor-authentication.mdx` | Dashboard MFA |
| `migrating-to-supabase/amazon-rds.mdx` | Migrate from RDS |
| `migrating-to-supabase/firebase-auth.mdx` | Migrate Firebase Auth |
| `migrating-to-supabase/firestore-data.mdx` | Migrate Firestore data |
| `migrating-to-supabase/mysql.mdx` | Migrate from MySQL |
| `migrating-to-supabase/postgres.mdx` | Migrate from Postgres |
| `sso/azure.mdx` | Azure SSO |
| `sso/okta.mdx` | Okta SSO |
| `sso/gsuite.mdx` | Google SSO |

### guides/self-hosting/ (15 files)

| File | Description |
|------|-------------|
| `docker.mdx` | Docker compose self-hosting |
| `self-hosted-auth-keys.mdx` | Auth key configuration |
| `self-hosted-functions.mdx` | Edge Functions self-hosting |
| `self-hosted-oauth.mdx` | OAuth self-hosting |
| `self-hosted-s3.mdx` | S3 storage self-hosting |
| `self-hosted-saml-sso.mdx` | SAML SSO self-hosting |
| `self-hosted-phone-mfa.mdx` | Phone MFA self-hosting |
| `enable-mcp.mdx` | Enable MCP self-hosted |
| `postgres-upgrade-17.mdx` | Upgrade to Postgres 17 |
| `restore-from-platform.mdx` | Restore from cloud |

### guides/security/ (5 files)

| File | Description |
|------|-------------|
| `platform-security.mdx` | Platform security overview |
| `product-security.mdx` | Product security |
| `npm-security.mdx` | npm/package security |
| `platform-audit-logs.mdx` | Security audit logs |
| `security-testing.mdx` | Security testing |

### guides/telemetry/ (11 files)

| File | Description |
|------|-------------|
| `logs.mdx` | Log explorer |
| `log-field-reference.mdx` | Log field reference |
| `advanced-log-filtering.mdx` | Advanced log queries |
| `log-drains.mdx` | Log drain setup |
| `metrics.mdx` | Metrics overview |
| `metrics/grafana-cloud.mdx` | Grafana Cloud metrics |
| `metrics/grafana-self-hosted.mdx` | Self-hosted Grafana |
| `reports.mdx` | Usage reports |
| `sentry-monitoring.mdx` | Sentry integration |
| `client-side-tracing.mdx` | Client-side tracing |

### guides/queues/ (5 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Queues quickstart |
| `pgmq.mdx` | PGMQ overview |
| `api.mdx` | Queue API reference |
| `consuming-messages-with-edge-functions.mdx` | Process queue with functions |
| `expose-self-hosted-queues.mdx` | Self-hosted queue access |

### guides/cron/ (2 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Cron quickstart |
| `install.mdx` | Cron installation |

### guides/integrations/ (1 file)

| File | Description |
|------|-------------|
| `supabase-for-platforms.mdx` | Using Supabase as a platform layer |

### troubleshooting/ (193 files)

Troubleshooting articles covering errors and how-to questions across all Supabase services. Names are descriptive:

Key articles by topic:

**Auth:**
- `auth-error-401-invalid-claim-missing-sub--AFwMR.mdx`
- `not-receiving-auth-emails-from-the-supabase-project-OFSNzw.mdx`
- `otp-verification-failures-token-has-expired-or-otp_expired-errors-5ee4d0.mdx`
- `rls-simplified-BJTcS8.mdx`
- `rls-performance-and-best-practices-Z5Jjwv.mdx`

**Database:**
- `too-many-connections-for-database-postgres.mdx`
- `high-cpu-usage.mdx`
- `canceling-statement-due-to-statement-timeout-581wFv.mdx`
- `steps-to-improve-query-performance-with-indexes-q8PoC9.mdx`
- `database-api-42501-errors.mdx`

**Edge Functions:**
- `edge-function-401-error-response.mdx`
- `edge-function-500-error-response.mdx`
- `edge-function-takes-too-long-to-respond.mdx`
- `edge-function-bundle-size-issues.mdx`

**Storage:**
- `upload-file-size-restrictions-Y4wQLT.mdx`
- `why-cant-i-uploadlistetc-my-public-bucket-Z6CmGt.mdx`

**Realtime:**
- `realtime-concurrent-peak-connections-quota-jdDqcp.mdx`
- `realtime-debugging-with-logger.mdx`
