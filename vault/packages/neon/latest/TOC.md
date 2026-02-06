# Neon Table of Contents

## Directory Map

```
contents/
├── README.md               # Main documentation entry
├── introduction.md         # Introduction to Neon
├── get-started/            # Getting started (13 files)
├── introduction/           # Core concepts (33 files)
├── guides/                 # Integration guides (163 files)
├── connect/                # Connection guides (12 files)
├── manage/                 # Management and operations (29 files)
├── reference/              # API and CLI reference (29 files)
├── postgresql/             # PostgreSQL features (6 files)
├── extensions/             # PostgreSQL extensions (43 files)
├── functions/              # Neon Functions (49 files)
├── data-api/               # Data API (9 files)
├── data-types/             # Data types (11 files)
├── auth/                   # Neon Auth (28 files)
├── ai/                     # AI integrations (24 files)
├── import/                 # Data import guides (19 files)
├── workflows/              # Development workflows (4 files)
├── local/                  # Local development (2 files)
├── serverless/             # Serverless features (1 file)
├── azure/                  # Azure integration (3 files)
├── security/               # Security docs (6 files)
└── use-cases/              # Use cases (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/signing-up.md` |
| Quick start | `contents/get-started/query-with-neon-sql-editor.md` |
| Connect to database | `contents/connect/` |
| API reference | `contents/reference/` |
| Database branching | `contents/introduction/branching.md` |
| Autoscaling | `contents/introduction/autoscaling.md` |
| Functions | `contents/functions/` |
| Data API | `contents/data-api/` |
| Extensions | `contents/extensions/` |
| Framework integrations | `contents/guides/` |
| Security | `contents/security/security-overview.md` |

## Detailed Structure

### Top-Level Files (2 files)

| File | Description |
|------|-------------|
| `README.md` | Documentation overview |
| `introduction.md` | Introduction to Neon |

### get-started/ (13 files)

Quick start guides for new users.

| File | Description |
|------|-------------|
| `signing-up.md` | Sign up for Neon |
| `query-with-neon-sql-editor.md` | Use SQL Editor |
| `connect-neon.md` | Connect to database |
| `frameworks.md` | Framework guides |
| `languages.md` | Language guides |
| `orms.md` | ORM guides |
| `production-checklist.md` | Production readiness |
| `workflow-primer.md` | Development workflow |

### introduction/ (33 files)

Core Neon concepts and architecture.

| File | Description |
|------|-------------|
| `architecture-overview.md` | System architecture |
| `branching.md` | Database branching |
| `autoscaling.md` | Autoscaling features |
| `autoscaling-architecture.md` | Autoscaling internals |
| `compute-lifecycle.md` | Compute lifecycle |
| `about-billing.md` | Billing overview |
| `billing-aws-marketplace.md` | AWS Marketplace billing |
| `billing-azure-marketplace.md` | Azure Marketplace billing |
| `branch-restore.md` | Branch restore |

### guides/ (163 files)

Integration guides for frameworks, ORMs, tools, and services. All flat structure.

Key integration categories:
- Authentication: Auth0, Clerk, Okta, AuthJS
- Frameworks: Astro, Next.js, etc.
- Storage: AWS S3, Azure Blob, Backblaze B2
- Deployment: AWS Lambda, Vercel, Railway
- Tools: Prisma, Drizzle, TypeORM, etc.

### connect/ (12 files)

Connection guides for various programming languages and environments.

| File | Description |
|------|-------------|
| `connect-from-any-app.md` | General connection guide |
| `connection-pooling.md` | Connection pooling |
| `connection-errors.md` | Connection troubleshooting |

### manage/ (29 files)

Management, monitoring, and operational guides.

| File | Description |
|------|-------------|
| `projects.md` | Project management |
| `databases.md` | Database management |
| `branches.md` | Branch management |
| `endpoints.md` | Endpoint configuration |
| `api-keys.md` | API key management |
| `monitoring.md` | Monitoring and metrics |
| `backups.md` | Backup strategies |

### reference/ (29 files)

API and CLI reference documentation.

| File | Description |
|------|-------------|
| `neon-api.md` | Neon API overview |
| `cli.md` | CLI reference |
| `sdk.md` | SDK reference |

### postgresql/ (6 files)

PostgreSQL-specific features and guides.

| File | Description |
|------|-------------|
| `introduction.md` | PostgreSQL in Neon |
| `query-reference.md` | Query reference |
| `query-performance.md` | Performance optimization |
| `index-types.md` | Index types |
| `postgres-upgrade.md` | PostgreSQL upgrades |
| `postgres-version-policy.md` | Version policy |

### extensions/ (43 files)

PostgreSQL extension guides - one file per extension.

Examples: pgvector, PostGIS, TimescaleDB, pg_cron, pg_trgm, etc.

### functions/ (49 files)

Neon Functions documentation.

Subdirectories:
- `quick-start/` - Quick start guides
- `guides/` - How-to guides
- `reference/` - API reference

### data-api/ (9 files)

Data API documentation for HTTP-based database access.

| File | Description |
|------|-------------|
| `overview.md` | Data API overview |
| `getting-started.md` | Getting started |
| `query-data.md` | Query data |
| `mutations.md` | Insert/update/delete |

### data-types/ (11 files)

PostgreSQL data type guides.

Examples: JSON, arrays, UUID, timestamps, etc.

### auth/ (28 files)

Neon Auth documentation.

Subdirectories:
- `quick-start/` - Quick start
- `guides/` - Authentication guides
- `guides/plugins/` - Auth plugins
- `reference/` - API reference
- `legacy/` - Legacy documentation
- `migrate/` - Migration guides

### ai/ (24 files)

AI and vector database features.

| File | Description |
|------|-------------|
| `ai-intro.md` | AI features overview |
| `vector-search.md` | Vector search with pgvector |
| `embeddings.md` | Embedding generation |

### import/ (19 files)

Data import guides from various sources.

Examples: CSV, PostgreSQL, MySQL, Heroku, Supabase, etc.

### workflows/ (4 files)

Development workflow guides.

| File | Description |
|------|-------------|
| `branching-workflows.md` | Branching workflows |
| `preview-environments.md` | Preview environments |

### local/ (2 files)

Local development setup.

| File | Description |
|------|-------------|
| `local-development.md` | Local development guide |

### serverless/ (1 file)

Serverless-specific features.

### azure/ (3 files)

Azure integration guides.

| File | Description |
|------|-------------|
| `azure-deploy.md` | Deploy on Azure |
| `azure-develop.md` | Develop with Azure |
| `azure-manage.md` | Manage on Azure |

### security/ (6 files)

Security documentation.

| File | Description |
|------|-------------|
| `security-overview.md` | Security overview |
| `compliance.md` | Compliance certifications |
| `hipaa.md` | HIPAA compliance |
| `security-reporting.md` | Report security issues |

### use-cases/ (1 file)

Use case documentation.
