# Supabase Table of Contents

## Directory Map

```
contents/
├── guides/                         # Main documentation (382 files)
│   ├── getting-started/            # Setup and quickstarts (5 files)
│   ├── auth/                       # Authentication (31 files + subdirs)
│   ├── database/                   # Database guides (32 files + subdirs)
│   ├── storage/                    # Storage service (2 files + subdirs)
│   ├── functions/                  # Edge Functions (34 files)
│   ├── realtime/                   # Realtime features (18 files)
│   ├── ai/                         # AI/ML features (17 files + subdirs)
│   ├── api/                        # REST API (8 files)
│   ├── platform/                   # Platform features (30 files + subdirs)
│   ├── security/                   # Security guides (6 files)
│   ├── deployment/                 # Deployment (6 files)
│   ├── local-development/          # CLI & local dev (6 files)
│   ├── integrations/               # Third-party integrations (4 files)
│   ├── cron/                       # Scheduled jobs (2 files)
│   ├── queues/                     # Message queues (5 files)
│   ├── telemetry/                  # Metrics & monitoring (6 files)
│   ├── self-hosting/               # Self-hosted setup (2 files)
│   └── resources/                  # Glossary (1 file)
├── troubleshooting/                # Common issues (143 files)
└── _partials/                      # Reusable snippets (24 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Supabase | `contents/guides/getting-started/` |
| Auth setup | `contents/guides/auth/` |
| Database operations | `contents/guides/database/` |
| File storage | `contents/guides/storage/` |
| Edge Functions | `contents/guides/functions/` |
| Realtime subscriptions | `contents/guides/realtime/` |
| AI/Vector search | `contents/guides/ai/` |
| REST API | `contents/guides/api/rest/` |
| CLI usage | `contents/guides/local-development/cli/` |
| Troubleshooting | `contents/troubleshooting/` |

## Detailed Structure

### guides/getting-started/ (5 files + subdirs)

Core files for new users:
- `getting-started.mdx` - Overview
- `features.mdx` - Feature list
- `architecture.mdx` - System architecture
- `ai-prompts.mdx` - AI integration prompts
- `quickstarts/` - Framework-specific quickstarts
- `tutorials/` - Step-by-step tutorials

### guides/auth/ (31 files + subdirs)

Authentication and authorization:
- Core auth concepts, user management
- Social login providers (OAuth)
- Server-side auth patterns
- MFA, sessions, identities
- Enterprise SSO
- Auth hooks for customization
- Rate limiting
- Subdirs: `social-login/`, `server-side/`, `auth-mfa/`, `auth-hooks/`, `sessions/`, `oauth-server/`, `enterprise-sso/`, `third-party/`, `debugging/`, `quickstarts/`

### guides/database/ (32 files + subdirs)

PostgreSQL database features:
- Tables, schemas, functions
- RLS (Row Level Security)
- Extensions (pgvector, postgis, etc.)
- Connecting with various tools
- Migrations, backups, replication
- Performance tuning
- Subdirs: `postgres/`, `extensions/`, `connecting-to-postgres/`, `replication/`, `prisma/`

### guides/storage/ (2 files + subdirs)

Object storage for files:
- Buckets management
- File uploads/downloads
- Access control (RLS)
- CDN integration
- Image transformations
- S3 compatibility
- Analytics
- Subdirs: `buckets/`, `uploads/`, `serving/`, `security/`, `management/`, `cdn/`, `s3/`, `schema/`, `production/`, `debugging/`, `analytics/`, `vector/`

### guides/functions/ (34 files)

Deno Edge Functions:
- Creating and deploying functions
- Environment variables, secrets
- Database access from functions
- CORS, authentication
- Rate limiting, compression
- Debugging tools
- Example patterns
- Subdir: `examples/` (stripe webhooks, telegram bots, screenshots, etc.)

### guides/realtime/ (18 files)

Real-time subscriptions:
- Postgres changes (inserts, updates, deletes)
- Broadcast (send/receive messages)
- Presence (track online users)
- Configuration, settings
- Error codes, pricing
- Framework examples (Flutter, Next.js)

### guides/ai/ (17 files + subdirs)

AI and vector search:
- Vector embeddings with pgvector
- OpenAI integration
- Hugging Face integration
- Vector indexes (HNSW, IVFFlat)
- Python clients
- Subdirs: `examples/`, `integrations/`, `quickstarts/`, `vector-indexes/`

### guides/api/ (8 files)

REST API documentation:
- Auto-generated API docs
- Client libraries
- Subdir: `rest/`

### guides/platform/ (30 files + subdirs)

Platform management:
- Organizations, projects
- Billing, quotas
- Regions, migrations
- Permissions, audit logs
- AWS Marketplace integration
- SSO for organizations
- Subdirs: `aws-marketplace/`, `mfa/`, `sso/`, `migrating-to-supabase/`, `migrating-within-supabase/`, `manage-your-usage/`

### guides/security/ (6 files)

Security best practices:
- Product security
- Platform audit logs
- Access control patterns

### guides/deployment/ (6 files)

Deployment strategies:
- Production deployments
- Branching (preview environments)
- Subdir: `branching/`

### guides/local-development/ (6 files)

Local development workflow:
- CLI installation and usage
- Testing strategies
- Subdirs: `cli/`, `testing/`

### guides/integrations/ (4 files)

Third-party integrations:
- Building OAuth integrations
- Supabase Marketplace
- Subdir: `build-a-supabase-oauth-integration/`

### guides/cron/ (2 files)

Scheduled jobs:
- pg_cron setup and usage

### guides/queues/ (5 files)

Message queues with PGMQ:
- Queue setup and operations

### guides/telemetry/ (6 files)

Monitoring and metrics:
- Accessing metrics
- Subdir: `metrics/`

### guides/self-hosting/ (2 files)

Self-hosted Supabase setup

### guides/resources/ (1 file)

- `glossary.mdx` - Terminology reference

### troubleshooting/ (143 files)

Common issues and solutions:
- RLS policy errors
- Connection issues
- Performance problems
- Auth errors (TOTP, session issues)
- Database operations (migrations, backups, PITR)
- Realtime connection issues
- Storage bucket access
- Edge Functions errors
- Billing and quotas
- Platform-specific issues

### _partials/ (24 files)

Reusable documentation snippets:
- API settings, rate limits
- Auth configuration
- Database setup
- Billing pricing details
- Social provider setup
- Subdirs: `ai/`, `billing/`
