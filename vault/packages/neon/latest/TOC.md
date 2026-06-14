# Neon Table of Contents

## Directory Map

```
contents/
├── introduction.md                  # Top-level introduction
├── cli.md                           # CLI overview
├── ai/                              # AI integrations and tools (21 files)
├── auth/                            # Neon Auth authentication (31 files)
│   ├── guides/                      # Auth how-to guides (16 files)
│   │   └── plugins/                 # Auth plugins (7 files)
│   ├── legacy/                      # Legacy auth (2 files)
│   ├── migrate/                     # Migration guides (3 files)
│   ├── quick-start/                 # Quick start by framework (3 files)
│   └── reference/                   # Auth SDK reference (2 files)
├── cli/                             # CLI command reference (27 files)
├── connect/                         # Connection guides (12 files)
├── data-api/                        # Neon Data API / REST (10 files)
├── data-types/                      # PostgreSQL data types (11 files)
├── extensions/                      # PostgreSQL extensions (46 files)
├── functions/                       # PostgreSQL functions (49 files)
├── get-started/                     # Getting started guides (14 files)
├── guides/                          # Integration and how-to guides (172 files)
├── import/                          # Data import and migration (24 files)
├── introduction/                    # Platform concepts and billing (32 files)
├── local/                           # Local development (2 files)
├── manage/                          # Project and org management (29 files)
├── postgres/                        # Postgres overview (1 file)
├── postgresql/                      # PostgreSQL reference (6 files)
├── reference/                       # SDK and API reference (12 files)
├── security/                        # Security and compliance (6 files)
├── serverless/                      # Serverless driver (1 file)
└── workflows/                       # Workflow integrations (4 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/get-started/signing-up.md` |
| Connect to Neon | `contents/connect/connect-from-any-app.md` |
| Branching | `contents/introduction/branching.md` |
| CLI reference | `contents/cli/` |
| Extensions | `contents/extensions/pg-extensions.md` |
| Serverless driver | `contents/serverless/serverless-driver.md` |
| Data API | `contents/data-api/get-started.md` |
| Authentication | `contents/auth/overview.md` |
| Migrations | `contents/import/migrate-intro.md` |
| API reference | `contents/reference/api-reference.md` |
| Troubleshooting | `contents/connect/connection-errors.md` |

## Detailed Structure

### ai/ (21 files)

| File | Description |
|------|-------------|
| `agent-skills.md` | Agent skills overview |
| `ai-agents-tools.md` | AI agents and tools |
| `ai-azure-notebooks.md` | Azure notebooks integration |
| `ai-claude-code-plugin.md` | Claude Code plugin |
| `ai-codex-plugin.md` | Codex plugin |
| `ai-concepts.md` | AI concepts |
| `ai-cursor-plugin.md` | Cursor plugin |
| `ai-database-versioning.md` | Database versioning for AI |
| `ai-github-copilot-agents.md` | GitHub Copilot agents |
| `ai-google-colab.md` | Google Colab integration |
| `ai-intro.md` | AI introduction |
| `ai-scale-with-neon.md` | Scaling AI apps with Neon |
| `ai-vector-search-optimization.md` | Vector search optimization |
| `connect-mcp-clients-to-neon.md` | Connect MCP clients |
| `inngest.md` | Inngest integration |
| `lakebase-search-get-started.md` | Lakebase search get started |
| `lakebase-search.md` | Lakebase search |
| `langchain.md` | LangChain integration |
| `llamaindex.md` | LlamaIndex integration |
| `neon-mcp-server.md` | Neon MCP server |
| `semantic-kernel.md` | Semantic Kernel integration |

### auth/ (31 files)

| File | Description |
|------|-------------|
| `authentication-flow.md` | Authentication flow |
| `branching-authentication.md` | Branching for authentication |
| `overview.md` | Auth overview |
| `production-checklist.md` | Production checklist |
| `troubleshooting.md` | Auth troubleshooting |

#### auth/guides/ (16 files)

| File | Description |
|------|-------------|
| `configure-domains.md` | Configure domains |
| `customize-emails.md` | Customize emails |
| `email-verification.md` | Email verification |
| `manage-auth-api.md` | Manage auth via API |
| `password-reset.md` | Password reset |
| `plugins.md` | Plugins overview |
| `setup-oauth.md` | Setup OAuth |
| `user-management.md` | User management |
| `webhooks.md` | Webhooks |
| `plugins/admin.md` | Admin plugin |
| `plugins/email-otp.md` | Email OTP plugin |
| `plugins/jwt.md` | JWT plugin |
| `plugins/magic-link.md` | Magic link plugin |
| `plugins/openapi.md` | OpenAPI plugin |
| `plugins/organization.md` | Organization plugin |
| `plugins/phone-number.md` | Phone number plugin |

#### auth/migrate/ (3 files)

| File | Description |
|------|-------------|
| `from-auth-v0.1.md` | Migrate from auth v0.1 |
| `from-legacy-auth.md` | Migrate from legacy auth |
| `from-supabase.md` | Migrate from Supabase auth |

#### auth/quick-start/ (3 files)

| File | Description |
|------|-------------|
| `nextjs-api-only.md` | Next.js API only quick start |
| `react.md` | React quick start |
| `tanstack-router.md` | TanStack Router quick start |

#### auth/reference/ (2 files)

| File | Description |
|------|-------------|
| `nextjs-server.md` | Next.js server SDK reference |
| `ui-components.md` | UI components reference |

### cli/ (27 files)

| File | Description |
|------|-------------|
| `auth.md` | CLI auth command |
| `bootstrap.md` | CLI bootstrap |
| `branches.md` | CLI branches command |
| `bucket.md` | CLI bucket command |
| `checkout.md` | CLI checkout command |
| `completion.md` | CLI completion |
| `config.md` | CLI config command |
| `connection-string.md` | CLI connection-string command |
| `data-api.md` | CLI data-api command |
| `databases.md` | CLI databases command |
| `dev.md` | CLI dev command |
| `env.md` | CLI env command |
| `functions.md` | CLI functions command |
| `init.md` | CLI init command |
| `install.md` | CLI installation |
| `ip-allow.md` | CLI ip-allow command |
| `link.md` | CLI link command |
| `me.md` | CLI me command |
| `neon-auth.md` | CLI neon-auth command |
| `operations.md` | CLI operations command |
| `orgs.md` | CLI orgs command |
| `projects.md` | CLI projects command |
| `psql.md` | CLI psql command |
| `quickstart.md` | CLI quickstart |
| `roles.md` | CLI roles command |
| `set-context.md` | CLI set-context command |
| `vpc.md` | CLI vpc command |

### connect/ (12 files)

| File | Description |
|------|-------------|
| `choose-connection.md` | Choose connection type |
| `connect-from-any-app.md` | Connect from any app |
| `connect-intro.md` | Connection introduction |
| `connect-looker-studio.md` | Connect Looker Studio |
| `connect-pgcli.md` | Connect with pgcli |
| `connect-postgres-gui.md` | Connect with GUI tools |
| `connect-securely.md` | Secure connections |
| `connection-errors.md` | Connection error troubleshooting |
| `connection-latency.md` | Connection latency |
| `connection-pooling.md` | Connection pooling (PgBouncer) |
| `passwordless-connect.md` | Passwordless connect |
| `query-with-psql-editor.md` | Query with psql |

### data-api/ (10 files)

| File | Description |
|------|-------------|
| `access-control.md` | Access control |
| `custom-authentication-providers.md` | Custom auth providers |
| `database-advisor.md` | Database advisor |
| `demo.md` | Data API demo |
| `generate-types.md` | Generate TypeScript types |
| `get-started.md` | Data API getting started |
| `manage.md` | Manage the Data API |
| `overview.md` | Data API overview |
| `sql-to-rest.md` | SQL to REST mapping |
| `troubleshooting.md` | Data API troubleshooting |

### data-types/ (11 files)

| File | Description |
|------|-------------|
| `array.md` | Array type |
| `boolean.md` | Boolean type |
| `character.md` | Character types |
| `date-and-time.md` | Date and time types |
| `decimal.md` | Decimal type |
| `floating-point.md` | Floating point types |
| `integer.md` | Integer types |
| `introduction.md` | Data types introduction |
| `json.md` | JSON types |
| `tsvector.md` | tsvector type |
| `uuid.md` | UUID type |

### extensions/ (46 files)

| File | Description |
|------|-------------|
| `pg-extensions.md` | PostgreSQL extensions overview |
| `btree_gin.md` | btree_gin extension |
| `btree_gist.md` | btree_gist extension |
| `citext.md` | citext extension |
| `cube.md` | cube extension |
| `dblink.md` | dblink extension |
| `dict_int.md` | dict_int extension |
| `earthdistance.md` | earthdistance extension |
| `extension-explorer.md` | Extension explorer |
| `fuzzystrmatch.md` | fuzzystrmatch extension |
| `hstore.md` | hstore extension |
| `intarray.md` | intarray extension |
| `lakebase-text.md` | lakebase-text extension |
| `lakebase-vector.md` | lakebase-vector extension |
| `ltree.md` | ltree extension |
| `neon-utils.md` | neon_utils extension |
| `neon.md` | neon extension |
| `online_advisor.md` | online_advisor extension |
| `pg_cron.md` | pg_cron extension |
| `pg_graphql.md` | pg_graphql extension |
| `pg_mooncake.md` | pg_mooncake extension |
| `pg_partman.md` | pg_partman extension |
| `pg_prewarm.md` | pg_prewarm extension |
| `pg_repack.md` | pg_repack extension |
| `pg_search.md` | pg_search extension |
| `pg_session_jwt.md` | pg_session_jwt extension |
| `pg_stat_statements.md` | pg_stat_statements extension |
| `pg_tiktoken.md` | pg_tiktoken extension |
| `pg_trgm.md` | pg_trgm extension |
| `pg_uuidv7.md` | pg_uuidv7 extension |
| `pgcrypto.md` | pgcrypto extension |
| `pgrag.md` | pgrag extension |
| `pgrowlocks.md` | pgrowlocks extension |
| `pgstattuple.md` | pgstattuple extension |
| `pgvector.md` | pgvector extension |
| `plv8.md` | plv8 extension |
| `postgis-related-extensions.md` | PostGIS-related extensions |
| `postgis.md` | PostGIS extension |
| `postgres_fdw.md` | postgres_fdw extension |
| `postgresql-anonymizer.md` | PostgreSQL anonymizer extension |
| `tablefunc.md` | tablefunc extension |
| `timescaledb.md` | TimescaleDB extension |
| `unaccent.md` | unaccent extension |
| `uuid-ossp.md` | uuid-ossp extension |
| `wal2json.md` | wal2json extension |
| `xml2.md` | xml2 extension |

### functions/ (49 files)

| File | Description |
|------|-------------|
| `introduction.md` | Functions introduction |
| `json.md` | JSON functions overview |
| `age.md` | age() |
| `array_agg.md` | array_agg() |
| `array_length.md` | array_length() |
| `array_to_json.md` | array_to_json() |
| `avg.md` | avg() |
| `concat.md` | concat() |
| `count.md` | count() |
| `current_timestamp.md` | current_timestamp |
| `date_trunc.md` | date_trunc() |
| `dense_rank.md` | dense_rank() |
| `extract.md` | extract() |
| `json_agg.md` | json_agg() |
| `json_array_elements.md` | json_array_elements() |
| `json_build_object.md` | json_build_object() |
| `json_each.md` | json_each() |
| `json_exists.md` | json_exists() |
| `json_extract_path.md` | json_extract_path() |
| `json_extract_path_text.md` | json_extract_path_text() |
| `json_object.md` | json_object() |
| `json_populate_record.md` | json_populate_record() |
| `json_query.md` | json_query() |
| `json_scalar.md` | json_scalar() |
| `json_serialize.md` | json_serialize() |
| `json_table.md` | json_table() |
| `json_to_record.md` | json_to_record() |
| `json_value.md` | json_value() |
| `jsonb_array_elements.md` | jsonb_array_elements() |
| `jsonb_each.md` | jsonb_each() |
| `jsonb_extract_path.md` | jsonb_extract_path() |
| `jsonb_extract_path_text.md` | jsonb_extract_path_text() |
| `jsonb_object.md` | jsonb_object() |
| `jsonb_populate_record.md` | jsonb_populate_record() |
| `jsonb_to_record.md` | jsonb_to_record() |
| `lower.md` | lower() |
| `math-abs.md` | abs() |
| `math-random.md` | random() |
| `math-round.md` | round() |
| `max.md` | max() |
| `now.md` | now() |
| `regexp_match.md` | regexp_match() |
| `regexp_replace.md` | regexp_replace() |
| `substring.md` | substring() |
| `sum.md` | sum() |
| `trim.md` | trim() |
| `window-lag.md` | lag() |
| `window-lead.md` | lead() |
| `window-rank.md` | rank() |

### get-started/ (14 files)

| File | Description |
|------|-------------|
| `built-to-scale.md` | Built to scale |
| `connect-neon.md` | Connect to Neon |
| `dev-experience.md` | Developer experience |
| `frameworks.md` | Framework guides index |
| `full-backend-quickstart.md` | Full backend quickstart |
| `languages.md` | Language guides index |
| `orms.md` | ORM guides index |
| `production-checklist.md` | Production checklist |
| `production-readiness.md` | Production readiness |
| `query-with-neon-sql-editor.md` | Query with SQL editor |
| `signing-up.md` | Sign up and create project |
| `why-neon.md` | Why Neon |
| `with-an-agent.md` | Getting started with an agent |
| `workflow-primer.md` | Workflow primer |

### guides/ (172 files)

Selected highlights (full list in contents/guides/):

| File | Description |
|------|-------------|
| `autoscaling-guide.md` | Autoscaling guide |
| `branching-intro.md` | Branching introduction |
| `branching-github-actions.md` | Branching with GitHub Actions |
| `branching-neon-api.md` | Branching via Neon API |
| `branching-neon-cli.md` | Branching via Neon CLI |
| `branching-schema-only.md` | Schema-only branches |
| `backup-restore.md` | Backup and restore |
| `logical-replication-guide.md` | Logical replication guide |
| `logical-replication-concepts.md` | Logical replication concepts |
| `row-level-security.md` | Row-level security |
| `schema-diff.md` | Schema diff |
| `read-replica-guide.md` | Read replica guide |
| `prisma.md` | Prisma integration |
| `prisma-migrations.md` | Prisma migrations |
| `drizzle.md` | Drizzle ORM integration |
| `drizzle-migrations.md` | Drizzle migrations |
| `django.md` | Django integration |
| `django-migrations.md` | Django migrations |
| `nextjs.md` | Next.js integration |
| `vercel-managed-integration.md` | Vercel managed integration |
| `vercel-overview.md` | Vercel overview |
| `cloudflare-workers.md` | Cloudflare Workers integration |
| `aws-lambda.md` | AWS Lambda integration |
| `neon-github-integration.md` | GitHub integration |
| `multitenancy.md` | Multi-tenancy patterns |
| `neon-private-networking.md` | Private networking |
| `consumption-metrics.md` | Consumption metrics |
| `scale-to-zero-guide.md` | Scale to zero guide |
| `auth-auth0.md` | Auth0 integration |
| `auth-clerk.md` | Clerk integration |
| `auth-authjs.md` | Auth.js integration |
| `migrate-neon-to-lakebase.md` | Migrate Neon to Lakebase |

### import/ (24 files)

| File | Description |
|------|-------------|
| `migrate-intro.md` | Migration introduction |
| `import-data-assistant.md` | Import data assistant |
| `import-from-csv.md` | Import from CSV |
| `import-sample-data.md` | Import sample data |
| `migrate-aws-dms.md` | Migrate with AWS DMS |
| `migrate-from-azure-postgres.md` | Migrate from Azure Postgres |
| `migrate-from-digital-ocean.md` | Migrate from Digital Ocean |
| `migrate-from-firebase.md` | Migrate from Firebase |
| `migrate-from-heroku.md` | Migrate from Heroku |
| `migrate-from-neon.md` | Migrate between Neon projects |
| `migrate-from-planetscale.md` | Migrate from PlanetScale |
| `migrate-from-postgres.md` | Migrate from Postgres |
| `migrate-from-railway.md` | Migrate from Railway |
| `migrate-from-render.md` | Migrate from Render |
| `migrate-from-supabase.md` | Migrate from Supabase |
| `migrate-from-turso.md` | Migrate from Turso |
| `migrate-mssql.md` | Migrate from MSSQL |
| `migrate-mysql.md` | Migrate from MySQL |
| `migrate-neon-to-another-region.md` | Migrate to another region |
| `migrate-schema-only.md` | Schema-only migration |
| `migrate-sqlite.md` | Migrate from SQLite |
| `pgcopydb.md` | pgcopydb migration tool |
| `region-migration.md` | Region migration |
| `azure-regions-deprecation.md` | Azure regions deprecation |

### introduction/ (32 files)

| File | Description |
|------|-------------|
| `architecture-overview.md` | Architecture overview |
| `autoscaling.md` | Autoscaling |
| `autoscaling-architecture.md` | Autoscaling architecture |
| `about-billing.md` | Billing overview |
| `billing-aws-marketplace.md` | AWS Marketplace billing |
| `manage-billing.md` | Manage billing |
| `plans.md` | Plans and pricing |
| `spending-limit.md` | Spending limits |
| `usage-calculations.md` | Usage calculations |
| `branching.md` | Branching overview |
| `branch-restore.md` | Branch restore |
| `compute-lifecycle.md` | Compute lifecycle |
| `cost-optimization.md` | Cost optimization |
| `high-availability.md` | High availability |
| `history-window.md` | History window |
| `ip-allow.md` | IP allow list |
| `monitor-active-queries.md` | Monitor active queries |
| `monitor-pgadmin.md` | Monitor with pgAdmin |
| `monitor-pghero.md` | Monitor with PgHero |
| `monitor-query-performance.md` | Monitor query performance |
| `monitor-usage.md` | Monitor usage |
| `monitoring-page.md` | Monitoring page |
| `monitoring.md` | Monitoring overview |
| `neon-and-lakebase.md` | Neon and Lakebase |
| `network-transfer.md` | Network transfer |
| `read-replicas.md` | Read replicas |
| `regions.md` | Available regions |
| `scale-to-zero.md` | Scale to zero |
| `serverless.md` | Serverless Postgres |
| `support.md` | Support |
| `legacy-plans.md` | Legacy plans |
| `agent-plan.md` | Agent plan |

### manage/ (29 files)

| File | Description |
|------|-------------|
| `overview.md` | Management overview |
| `projects.md` | Manage projects |
| `branches.md` | Manage branches |
| `databases.md` | Manage databases |
| `roles.md` | Manage roles |
| `computes.md` | Manage computes |
| `api-keys.md` | Manage API keys |
| `accounts.md` | Manage accounts |
| `organizations.md` | Manage organizations |
| `integrations.md` | Manage integrations |
| `backups.md` | Backups overview |
| `backup-pg-dump.md` | Backup with pg_dump |
| `backup-pg-dump-automate.md` | Automate pg_dump backups |
| `backups-aws-s3-backup-part-1.md` | AWS S3 backup part 1 |
| `backups-aws-s3-backup-part-2.md` | AWS S3 backup part 2 |
| `operations.md` | Operations |
| `orgs-api.md` | Organizations API |
| `orgs-cli.md` | Organizations CLI |
| `orgs-manage.md` | Manage organizations |
| `orgs-api-consumption.md` | Org API consumption |
| `orgs-project-transfer.md` | Project transfer |
| `orgs-add-members-by-domain.md` | Add org members by domain |
| `database-access.md` | Database access |
| `user-permissions.md` | User permissions |
| `platform.md` | Platform management |
| `platform-maintenance.md` | Platform maintenance |
| `maintenance-updates-overview.md` | Maintenance updates overview |
| `updates.md` | Updates |
| `account-recovery.md` | Account recovery |

### reference/ (12 files)

| File | Description |
|------|-------------|
| `api-reference.md` | REST API reference |
| `javascript-sdk.md` | JavaScript SDK |
| `typescript-sdk.md` | TypeScript SDK |
| `python-sdk.md` | Python SDK |
| `sdk.md` | SDK overview |
| `neondatabase-toolkit.md` | @neondatabase/toolkit |
| `terraform.md` | Terraform provider |
| `compatibility.md` | PostgreSQL compatibility |
| `glossary.md` | Glossary |
| `metrics-logs.md` | Metrics and logs |
| `claimable-postgres.md` | Claimable Postgres |
| `feeds.md` | Feeds |

### postgresql/ (6 files)

| File | Description |
|------|-------------|
| `introduction.md` | PostgreSQL reference introduction |
| `index-types.md` | Index types |
| `postgres-upgrade.md` | Postgres version upgrade |
| `postgres-version-policy.md` | Postgres version policy |
| `query-performance.md` | Query performance |
| `query-reference.md` | Query reference |

### security/ (6 files)

| File | Description |
|------|-------------|
| `security-overview.md` | Security overview |
| `compliance.md` | Compliance |
| `hipaa.md` | HIPAA |
| `ai-use-in-neon.md` | AI use in Neon |
| `acceptable-use-policy.md` | Acceptable use policy |
| `security-reporting.md` | Security reporting |

### serverless/ (1 file)

| File | Description |
|------|-------------|
| `serverless-driver.md` | Neon serverless driver (@neondatabase/serverless) |

### local/ (2 files)

| File | Description |
|------|-------------|
| `neon-local.md` | Neon local development |
| `vscode-extension.md` | VS Code extension |

### workflows/ (4 files)

| File | Description |
|------|-------------|
| `claimable-database-integration.md` | Claimable database integration |
| `data-anonymization.md` | Data anonymization |
| `data-anonymization-api.md` | Data anonymization API |
| `data-anonymization-github-actions.md` | Data anonymization GitHub Actions |
