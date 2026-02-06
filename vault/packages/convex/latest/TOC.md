# Convex Table of Contents

## Directory Map

```
contents/
├── (root)               # Overview and API docs (26 files)
├── agents/              # AI agents functionality (15 files)
├── ai/                  # AI integrations (1 file)
├── auth/                # Authentication (12 files)
│   ├── advanced/        # Custom auth and JWT
│   └── authkit/         # AuthKit integration
├── cli/                 # Command-line interface (3 files)
├── client/              # Client libraries (25 files)
│   ├── android/         # Android SDK
│   ├── javascript/      # JavaScript/Node.js
│   ├── nextjs/          # Next.js integration
│   ├── react/           # React hooks
│   ├── tanstack/        # TanStack integration
│   └── vue/             # Vue integration
├── components/          # Convex components (3 files)
├── dashboard/           # Dashboard features (11 files)
├── database/            # Database operations (16 files)
│   ├── advanced/        # OCC, system tables
│   ├── import-export/   # Data import/export
│   └── reading-data/    # Queries and indexes
├── file-storage/        # File storage API (5 files)
├── functions/           # Serverless functions (11 files)
│   └── error-handling/  # Error handling
├── generated-api/       # Generated TypeScript API (4 files)
├── platform-apis/       # Platform APIs (2 files)
├── production/          # Production deployment (16 files)
│   ├── hosting/         # Hosting integrations
│   ├── integrations/    # Third-party integrations
│   └── state/           # State management
├── quickstart/          # Framework quickstarts (15 files)
├── scheduling/          # Scheduled jobs (2 files)
├── search/              # Text and vector search (2 files)
├── testing/             # Testing strategies (3 files)
├── tutorial/            # Chat app tutorial (3 files)
└── understanding/       # Best practices (5 files)
    └── best-practices/
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| First-time user | `contents/quickstart/nextjs.mdx` or framework quickstart |
| Core concepts | `contents/database.mdx`, `contents/functions.mdx` |
| Authentication | `contents/auth.mdx`, `contents/auth/clerk.mdx` |
| Database queries | `contents/database/reading-data/reading-data.mdx` |
| Serverless functions | `contents/functions/query-functions.mdx` |
| AI agents | `contents/agents/getting-started.mdx` |
| File storage | `contents/file-storage.mdx` |
| Production deployment | `contents/production.mdx` |
| API reference | `contents/generated-api/` |

## Detailed Structure

### Root Level (26 files)

| File | Description |
|------|-------------|
| `agents.mdx` | AI agents overview |
| `ai.mdx` | AI integrations overview |
| `auth.mdx` | Authentication overview |
| `cli.md` | Command-line interface |
| `components.mdx` | Convex components |
| `dashboard.md` | Dashboard overview |
| `database.mdx` | Database overview |
| `deployment-api.mdx` | Deployment API |
| `deployment-platform-api.mdx` | Platform deployment API |
| `error.mdx` | Error handling |
| `eslint.mdx` | ESLint configuration |
| `file-storage.mdx` | File storage overview |
| `functions.mdx` | Functions overview |
| `management-api.mdx` | Management API |
| `platform-apis.mdx` | Platform APIs overview |
| `production.mdx` | Production deployment |
| `quickstarts.mdx` | Quickstarts overview |
| `realtime.mdx` | Real-time features |
| `scheduling.mdx` | Scheduling overview |
| `search.mdx` | Search overview |
| `self-hosting.mdx` | Self-hosting guide |
| `streaming-export-api.mdx` | Streaming export API |
| `streaming-import-api.mdx` | Streaming import API |
| `testing.mdx` | Testing overview |

### agents/ (15 files)

AI agents functionality for building chatbots and AI workflows.

| File | Description |
|------|-------------|
| `agent-usage.mdx` | Agent usage tracking |
| `context.mdx` | Agent context management |
| `debugging.mdx` | Debugging agents |
| `files.mdx` | File handling in agents |
| `getting-started.mdx` | Getting started with agents |
| `human-agents.mdx` | Human-in-the-loop agents |
| `messages.mdx` | Message handling |
| `playground.mdx` | Agent playground |
| `rag.mdx` | Retrieval-augmented generation |
| `rate-limiting.mdx` | Rate limiting |
| `streaming.mdx` | Streaming responses |
| `threads.mdx` | Conversation threads |
| `tools.mdx` | Agent tools |
| `usage-tracking.mdx` | Usage tracking |
| `workflows.mdx` | Agent workflows |

### auth/ (12 files)

Authentication with Clerk, Auth0, custom JWT, and more.

| File | Description |
|------|-------------|
| `_under_the_hood.mdx` | Authentication internals |
| `auth0.mdx` | Auth0 integration |
| `clerk.mdx` | Clerk integration |
| `convex-auth.mdx` | Convex Auth |
| `database-auth.mdx` | Database-backed auth |
| `debug.mdx` | Debugging authentication |
| `functions-auth.mdx` | Function authentication |
| `advanced/custom-auth.mdx` | Custom authentication |
| `advanced/custom-jwt.mdx` | Custom JWT tokens |
| `authkit/index.mdx` | AuthKit overview |
| `authkit/auto-provision.mdx` | Auto-provisioning |
| `authkit/troubleshooting.md` | Troubleshooting |

### client/ (25 files)

Client libraries for JavaScript, React, Next.js, and more.

| File | Description |
|------|-------------|
| `android.md` | Android client |
| `javascript.mdx` | JavaScript client |
| `open-api.mdx` | OpenAPI specification |
| `python.md` | Python client |
| `react-native.mdx` | React Native |
| `react.mdx` | React hooks |
| `rust.md` | Rust client |
| `svelte.md` | Svelte integration |
| `swift.md` | Swift client |
| `vue.md` | Vue integration |
| `android/data-types.md` | Android data types |
| `javascript/bun.mdx` | Bun runtime |
| `javascript/node.mdx` | Node.js runtime |
| `javascript/script-tag.mdx` | Script tag usage |
| `nextjs/app-router/index.mdx` | Next.js App Router |
| `nextjs/app-router/server-rendering.mdx` | Server rendering |
| `nextjs/pages-router/index.mdx` | Pages Router |
| `nextjs/pages-router/quickstart-nextjs-pages-router.mdx` | Pages Router quickstart |
| `react/optimistic-updates.mdx` | Optimistic updates |
| `react/project-setup.md` | React project setup |
| `swift/data-types.md` | Swift data types |
| `tanstack/tanstack-query/index.mdx` | TanStack Query |
| `tanstack/tanstack-start/index.mdx` | TanStack Start |
| `tanstack/tanstack-start/clerk.mdx` | TanStack Start with Clerk |
| `vue/nuxt.md` | Nuxt integration |

### database/ (16 files)

Database operations, schemas, queries, and indexes.

| File | Description |
|------|-------------|
| `backup-restore.mdx` | Backup and restore |
| `document-ids.mdx` | Document IDs |
| `pagination.mdx` | Pagination |
| `schemas.mdx` | Schema definition |
| `types.md` | Data types |
| `writing-data.mdx` | Writing data |
| `advanced/occ.md` | Optimistic concurrency control |
| `advanced/schema-philosophy.md` | Schema philosophy |
| `advanced/system-tables.mdx` | System tables |
| `import-export/export.mdx` | Exporting data |
| `import-export/import-export.mdx` | Import/export overview |
| `import-export/import.mdx` | Importing data |
| `reading-data/filters.mdx` | Query filters |
| `reading-data/reading-data.mdx` | Reading data |
| `reading-data/indexes/indexes.md` | Indexes |
| `reading-data/indexes/indexes-and-query-perf.md` | Index performance |

### functions/ (11 files)

Serverless functions: queries, mutations, actions, and HTTP endpoints.

| File | Description |
|------|-------------|
| `actions.mdx` | Actions (side effects) |
| `bundling.mdx` | Code bundling |
| `debugging.mdx` | Debugging functions |
| `http-actions.mdx` | HTTP endpoints |
| `internal-functions.mdx` | Internal functions |
| `mutation-functions.mdx` | Mutations |
| `query-functions.mdx` | Queries |
| `runtimes.mdx` | Runtime environments |
| `validation.mdx` | Input validation |
| `error-handling/application-errors.mdx` | Application errors |
| `error-handling/error-handling.mdx` | Error handling guide |

### quickstart/ (15 files)

Framework-specific quickstart guides.

| File | Description |
|------|-------------|
| `android.mdx` | Android quickstart |
| `bun.mdx` | Bun quickstart |
| `nextjs.mdx` | Next.js quickstart |
| `nodejs.mdx` | Node.js quickstart |
| `nuxt.mdx` | Nuxt quickstart |
| `python.mdx` | Python quickstart |
| `react-native.mdx` | React Native quickstart |
| `react.mdx` | React quickstart |
| `remix.mdx` | Remix quickstart |
| `rust.mdx` | Rust quickstart |
| `script-tag.mdx` | Script tag quickstart |
| `svelte.mdx` | Svelte quickstart |
| `swift.mdx` | Swift quickstart |
| `tanstack-start.mdx` | TanStack Start quickstart |
| `vue.mdx` | Vue quickstart |

### production/ (16 files)

Production deployment, hosting, environment variables, and integrations.

| File | Description |
|------|-------------|
| `environment-variables.mdx` | Environment variables |
| `multiple-repos.mdx` | Multiple repositories |
| `pause-deployment.mdx` | Pausing deployments |
| `project-configuration.mdx` | Project configuration |
| `hosting/custom.mdx` | Custom hosting |
| `hosting/hosting.mdx` | Hosting overview |
| `hosting/netlify.mdx` | Netlify deployment |
| `hosting/preview-deployments.mdx` | Preview deployments |
| `hosting/vercel.mdx` | Vercel deployment |
| `integrations/exception-reporting.mdx` | Exception reporting |
| `integrations/integrations.mdx` | Integrations overview |
| `integrations/streaming-import-export.md` | Streaming import/export |
| `integrations/log-streams/log-streams.mdx` | Log streams |
| `integrations/log-streams/legacy-event-schema.mdx` | Legacy events |
| `state/limits.mdx` | Limits and quotas |
| `state/state.mdx` | State management |

### Other Directories

**components/** (3 files): Reusable Convex components
- `authoring.mdx`, `understanding.mdx`, `using.mdx`

**dashboard/** (11 files): Dashboard features
- `projects.md`, `teams.md`, `deployments/data.md`, `deployments/deployments.md`, `deployments/files.md`, `deployments/functions.md`, `deployments/health.md`, `deployments/history.md`, `deployments/logs.md`, `deployments/schedules.md`, `deployments/settings.md`

**file-storage/** (5 files): File storage operations
- `delete-files.mdx`, `file-metadata.mdx`, `serve-files.mdx`, `store-files.mdx`, `upload-files.mdx`

**generated-api/** (4 files): Generated TypeScript API
- `api.md`, `data-model.md`, `index.md`, `server.md`

**scheduling/** (2 files): Cron jobs and scheduled functions
- `cron-jobs.mdx`, `scheduled-functions.mdx`

**search/** (2 files): Text and vector search
- `text-search.mdx`, `vector-search.mdx`

**testing/** (3 files): Testing strategies
- `ci.mdx`, `convex-backend.mdx`, `convex-test.mdx`

**tutorial/** (3 files): Step-by-step chat app tutorial
- `actions.mdx`, `index.mdx`, `scale.mdx`

**understanding/** (5 files): Best practices and workflow
- `index.mdx`, `workflow.mdx`, `best-practices/best-practices.mdx`, `best-practices/other-recommendations.mdx`, `best-practices/typescript.mdx`
