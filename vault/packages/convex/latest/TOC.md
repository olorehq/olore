# convex Table of Contents

## Directory Map

```
contents/
├── quickstart/             # Framework quickstarts (16 files)
├── tutorial/               # Step-by-step tutorial (3 files)
├── functions/              # Query, mutation, action functions (12 files)
│   └── error-handling/     # Error handling patterns
├── database/               # Database read/write/schema (17 files)
│   ├── reading-data/       # Queries and indexes
│   ├── advanced/           # OCC, system tables
│   └── import-export/      # Data import/export
├── agents/                 # AI agent framework (17 files)
├── ai/                     # AI coding agent integration (8 files)
├── auth/                   # Authentication (13 files)
│   ├── authkit/            # WorkOS AuthKit integration
│   └── advanced/           # Custom auth and JWT
├── client/                 # Client libraries (25 files)
│   ├── react/              # React client
│   ├── nextjs/             # Next.js (app/pages router)
│   ├── javascript/         # Node.js, Bun, script tag
│   ├── tanstack/           # TanStack Query/Start
│   ├── vue/                # Vue/Nuxt
│   ├── android/            # Android SDK
│   └── swift/              # Swift/iOS SDK
├── scheduling/             # Cron jobs and scheduled functions (3 files)
├── search/                 # Text search and vector search (3 files)
├── file-storage/           # File upload/serve/delete (6 files)
├── components/             # Convex components system (4 files)
├── generated-api/          # Code generation docs (4 files)
├── http-api/               # HTTP API reference (1 file)
├── cli/                    # CLI reference and guides (23 files)
│   └── reference/          # Per-command reference
├── dashboard/              # Dashboard UI guide (13 files)
│   └── deployments/        # Per-section deployment UI
├── production/             # Production deployment (22 files)
│   ├── hosting/            # Vercel, Netlify, custom
│   ├── integrations/       # Log streams, exception reporting
│   └── state/              # Limits and state
├── platform-apis/          # Platform/management APIs (4 files)
├── team-management/        # Teams, roles, SSO (4 files)
├── testing/                # Unit and integration testing (4 files)
├── understanding/          # Core concepts and best practices (6 files)
│   └── best-practices/     # TypeScript and other best practices
└── (root files)            # deployment-api-overview, deployment-platform-api,
                            # eslint, management-api-overview, realtime, self-hosting
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user (React) | `contents/quickstart/react.mdx` |
| New user (Next.js) | `contents/quickstart/nextjs.mdx` |
| Tutorial | `contents/tutorial/overview.mdx` |
| Writing functions | `contents/functions/overview.mdx` |
| Database queries | `contents/database/overview.mdx` |
| AI agent framework | `contents/agents/overview.mdx` |
| Authentication | `contents/auth/overview.mdx` |
| Scheduling | `contents/scheduling/overview.mdx` |
| Search | `contents/search/overview.mdx` |
| File storage | `contents/file-storage/overview.mdx` |
| CLI reference | `contents/cli/overview.mdx` |
| Production deploy | `contents/production/overview.mdx` |
| Testing | `contents/testing/overview.mdx` |

## Detailed Structure

### quickstart/ (16 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Quickstart overview |
| `react.mdx` | React quickstart |
| `nextjs.mdx` | Next.js quickstart |
| `nodejs.mdx` | Node.js quickstart |
| `bun.mdx` | Bun quickstart |
| `python.mdx` | Python quickstart |
| `rust.mdx` | Rust quickstart |
| `react-native.mdx` | React Native quickstart |
| `svelte.mdx` | Svelte quickstart |
| `vue.mdx` | Vue quickstart |
| `nuxt.mdx` | Nuxt quickstart |
| `remix.mdx` | Remix quickstart |
| `tanstack-start.mdx` | TanStack Start quickstart |
| `android.mdx` | Android quickstart |
| `swift.mdx` | Swift quickstart |
| `script-tag.mdx` | Script tag quickstart |

### tutorial/ (3 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Tutorial overview: build a chat app |
| `actions.mdx` | Adding actions to the tutorial app |
| `scale.mdx` | Scaling the tutorial app |

### functions/ (12 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Functions overview |
| `query-functions.mdx` | Query functions (read-only, reactive) |
| `mutation-functions.mdx` | Mutation functions (write data) |
| `actions.mdx` | Action functions (external calls, side effects) |
| `http-actions.mdx` | HTTP action endpoints |
| `internal-functions.mdx` | Internal (private) functions |
| `validation.mdx` | Argument validation with validators |
| `runtimes.mdx` | Convex vs Node.js runtime |
| `bundling.mdx` | Function bundling |
| `debugging.mdx` | Debugging functions |
| `error-handling/error-handling.mdx` | Error handling overview |
| `error-handling/application-errors.mdx` | Application-level errors |

### database/ (17 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Database overview |
| `schemas.mdx` | Schema definition |
| `types.mdx` | Supported value types |
| `document-ids.mdx` | Document IDs |
| `writing-data.mdx` | Insert, update, delete |
| `pagination.mdx` | Paginated queries |
| `backup-restore.mdx` | Backup and restore |
| `reading-data/reading-data.mdx` | Reading data overview |
| `reading-data/filters.mdx` | Filtering with `.filter()` |
| `reading-data/indexes/indexes.mdx` | Database indexes |
| `reading-data/indexes/indexes-and-query-perf.mdx` | Index performance |
| `import-export/import-export.mdx` | Import/export overview |
| `import-export/import.mdx` | Importing data |
| `import-export/export.mdx` | Exporting data |
| `advanced/occ.mdx` | Optimistic concurrency control |
| `advanced/schema-philosophy.mdx` | Schema design philosophy |
| `advanced/system-tables.mdx` | System tables |

### agents/ (17 files)

| File | Description |
|------|-------------|
| `overview.mdx` | AI agent framework overview |
| `getting-started.mdx` | Getting started with agents |
| `agent-usage.mdx` | Agent usage patterns |
| `context.mdx` | Agent context management |
| `messages.mdx` | Agent message handling |
| `threads.mdx` | Agent threads |
| `tools.mdx` | Agent tools |
| `workflows.mdx` | Agent workflows |
| `rag.mdx` | Retrieval-augmented generation |
| `streaming.mdx` | Streaming responses |
| `files.mdx` | File handling in agents |
| `human-agents.mdx` | Human-in-the-loop agents |
| `tool-approval.mdx` | Tool approval flows |
| `rate-limiting.mdx` | Rate limiting agents |
| `usage-tracking.mdx` | Agent usage tracking |
| `debugging.mdx` | Debugging agents |
| `playground.mdx` | Agent playground |

### ai/ (8 files)

| File | Description |
|------|-------------|
| `overview.mdx` | AI coding agent integration overview |
| `agent-skills.mdx` | Convex agent skills for AI tools |
| `convex-mcp-server.mdx` | Convex MCP server |
| `using-claude-code.mdx` | Using Claude Code with Convex |
| `using-codex.mdx` | Using Codex with Convex |
| `using-conductor.mdx` | Using Conductor with Convex |
| `using-cursor.mdx` | Using Cursor with Convex |
| `using-github-copilot.mdx` | Using GitHub Copilot with Convex |

### auth/ (13 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Authentication overview |
| `clerk.mdx` | Clerk integration |
| `auth0.mdx` | Auth0 integration |
| `convex-auth.mdx` | Convex Auth (built-in) |
| `database-auth.mdx` | Database-level auth |
| `functions-auth.mdx` | Auth in functions |
| `debug.mdx` | Debugging authentication |
| `authkit/index.mdx` | WorkOS AuthKit overview |
| `authkit/add-to-app.mdx` | Adding AuthKit to your app |
| `authkit/auto-provision.mdx` | Auto-provisioning users |
| `authkit/troubleshooting.mdx` | AuthKit troubleshooting |
| `advanced/custom-auth.mdx` | Custom auth provider |
| `advanced/custom-jwt.mdx` | Custom JWT validation |

### client/ (25 files)

| File | Description |
|------|-------------|
| `react/overview.mdx` | React client overview |
| `react/project-setup.mdx` | React project setup |
| `react/optimistic-updates.mdx` | Optimistic updates in React |
| `nextjs/app-router/index.mdx` | Next.js App Router integration |
| `nextjs/app-router/server-rendering.mdx` | Server rendering with Next.js |
| `nextjs/pages-router/index.mdx` | Next.js Pages Router integration |
| `nextjs/pages-router/quickstart-nextjs-pages-router.mdx` | Pages Router quickstart |
| `javascript/overview.mdx` | JavaScript client overview |
| `javascript/node.mdx` | Node.js client |
| `javascript/bun.mdx` | Bun client |
| `javascript/script-tag.mdx` | Script tag client |
| `tanstack/tanstack-query/index.mdx` | TanStack Query integration |
| `tanstack/tanstack-start/index.mdx` | TanStack Start integration |
| `tanstack/tanstack-start/clerk.mdx` | TanStack Start with Clerk |
| `vue/overview.mdx` | Vue client overview |
| `vue/nuxt.mdx` | Nuxt integration |
| `svelte.mdx` | Svelte client |
| `react-native.mdx` | React Native client |
| `python.mdx` | Python client |
| `rust.mdx` | Rust client |
| `android/overview.mdx` | Android client overview |
| `android/data-types.mdx` | Android data types |
| `swift/overview.mdx` | Swift/iOS client overview |
| `swift/data-types.mdx` | Swift data types |
| `open-api.mdx` | OpenAPI / REST client |

### scheduling/ (3 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Scheduling overview |
| `scheduled-functions.mdx` | Scheduled function jobs |
| `cron-jobs.mdx` | Cron job scheduling |

### search/ (3 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Search overview |
| `text-search.mdx` | Full-text search |
| `vector-search.mdx` | Vector/semantic search |

### file-storage/ (6 files)

| File | Description |
|------|-------------|
| `overview.mdx` | File storage overview |
| `upload-files.mdx` | Uploading files |
| `store-files.mdx` | Storing files from actions |
| `serve-files.mdx` | Serving files to clients |
| `file-metadata.mdx` | File metadata |
| `delete-files.mdx` | Deleting files |

### components/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Components overview |
| `using.mdx` | Using Convex components |
| `authoring.mdx` | Authoring Convex components |
| `understanding.mdx` | Understanding components internals |

### generated-api/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Generated code overview |
| `api.mdx` | Generated API types |
| `data-model.mdx` | Generated data model types |
| `server.mdx` | Generated server types |

### http-api/ (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | HTTP API reference |

### cli/ (23 files)

| File | Description |
|------|-------------|
| `overview.mdx` | CLI overview |
| `local-deployments-for-dev.mdx` | Local development deployments |
| `deploy-key-types.mdx` | Deploy key types |
| `background-agents.mdx` | Background agents CLI |
| `reference/dev.mdx` | `npx convex dev` reference |
| `reference/deploy.mdx` | `npx convex deploy` reference |
| `reference/run.mdx` | `npx convex run` reference |
| `reference/data.mdx` | `npx convex data` reference |
| `reference/env.mdx` | `npx convex env` reference |
| `reference/logs.mdx` | `npx convex logs` reference |
| `reference/import.mdx` | `npx convex import` reference |
| `reference/export.mdx` | `npx convex export` reference |
| `reference/codegen.mdx` | `npx convex codegen` reference |
| `reference/deployment.mdx` | Deployment management commands |
| `reference/function-spec.mdx` | Function specification |
| `reference/dashboard.mdx` | Dashboard command |
| `reference/docs.mdx` | Docs command |
| `reference/update.mdx` | Update command |
| `reference/logout.mdx` | Logout command |
| `reference/mcp.mdx` | MCP command |
| `reference/insights.mdx` | Insights command |
| `reference/ai-files.mdx` | AI files command |
| `troubleshooting/typecheck-performance.mdx` | TypeScript check performance |

### dashboard/ (13 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Dashboard overview |
| `projects.mdx` | Managing projects |
| `profile.mdx` | Profile management |
| `teams/teams.mdx` | Team management |
| `deployments/deployments.mdx` | Deployment overview |
| `deployments/data.mdx` | Data viewer |
| `deployments/functions.mdx` | Functions viewer |
| `deployments/logs.mdx` | Logs viewer |
| `deployments/schedules.mdx` | Scheduled jobs viewer |
| `deployments/files.mdx` | File storage viewer |
| `deployments/history.mdx` | Deployment history |
| `deployments/health.mdx` | Deployment health |
| `deployments/settings.mdx` | Deployment settings |

### production/ (22 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Production overview |
| `environment-variables.mdx` | Environment variables |
| `multiple-deployments.mdx` | Multiple deployments |
| `multiple-repos.mdx` | Multiple repos setup |
| `project-configuration.mdx` | Project configuration |
| `custom-domains.mdx` | Custom domains |
| `regions.mdx` | Deployment regions |
| `networking.mdx` | Egress IP addresses |
| `abuse-protection.mdx` | DDoS and abuse protection |
| `pause-deployment.mdx` | Pausing a deployment |
| `hosting/hosting.mdx` | Hosting overview |
| `hosting/vercel.mdx` | Vercel hosting |
| `hosting/netlify.mdx` | Netlify hosting |
| `hosting/custom.mdx` | Custom hosting |
| `integrations/integrations.mdx` | Integrations overview |
| `integrations/exception-reporting.mdx` | Exception reporting (Sentry etc.) |
| `integrations/audit-logging.mdx` | Audit logging |
| `integrations/streaming-import-export.mdx` | Streaming import/export |
| `integrations/log-streams/log-streams.mdx` | Log streaming |
| `integrations/log-streams/legacy-event-schema.mdx` | Legacy log event schema |
| `state/state.mdx` | Platform state and status |
| `state/limits.mdx` | Platform limits |

### platform-apis/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Platform APIs overview |
| `oauth-applications.mdx` | OAuth application management |
| `embedded-dashboard.mdx` | Embedded dashboard API |
| `track-usage.mdx` | Usage tracking API |

### team-management/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Team management overview |
| `custom-roles.mdx` | Custom roles |
| `role-actions.mdx` | Role actions |
| `sso.mdx` | Single sign-on (SSO) |

### testing/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Testing overview |
| `convex-test.mdx` | `convex-test` unit testing library |
| `convex-backend.mdx` | Testing with local Convex backend |
| `ci.mdx` | CI/CD testing setup |

### understanding/ (6 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Understanding Convex overview |
| `workflow.mdx` | Development workflow |
| `zen.mdx` | The Zen of Convex (best practices philosophy) |
| `best-practices/best-practices.mdx` | Best practices |
| `best-practices/typescript.mdx` | TypeScript best practices |
| `best-practices/other-recommendations.mdx` | Other recommendations |

### Root files

| File | Description |
|------|-------------|
| `deployment-api-overview.mdx` | Deployment API overview |
| `deployment-platform-api.mdx` | Deployment management API |
| `management-api-overview.mdx` | Management API overview |
| `eslint.mdx` | ESLint plugin for Convex |
| `realtime.mdx` | Realtime/reactive architecture |
| `self-hosting.mdx` | Self-hosting Convex |
| `error.mdx` | Error reference |
