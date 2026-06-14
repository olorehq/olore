# PostHog Table of Contents

## Directory Map

```
contents/
├── getting-started/        # Install, identify users, send events (6 files)
├── integrate/              # SDK setup snippets and framework guides (22 files)
├── libraries/              # Per-SDK reference docs (60+ files)
│   ├── js/                 # JavaScript/Web SDK
│   ├── next-js/            # Next.js SDK
│   ├── python/             # Python SDK
│   ├── node/               # Node.js SDK
│   ├── react/              # React SDK
│   ├── react-native/       # React Native SDK
│   ├── ios/                # iOS SDK
│   ├── android/            # Android SDK
│   ├── flutter/            # Flutter SDK
│   ├── go/                 # Go SDK
│   ├── ruby/               # Ruby SDK
│   ├── php/                # PHP SDK
│   ├── dotnet/             # .NET SDK
│   ├── java/               # Java SDK
│   ├── rust/               # Rust SDK
│   └── ...                 # 20+ more frameworks
├── product-analytics/      # Events, funnels, trends, cohorts (40+ files)
├── feature-flags/          # Flag creation, evaluation, local eval (30+ files)
├── experiments/            # A/B testing, statistical methods (30+ files)
├── session-replay/         # Recording setup, privacy, network (30+ files)
├── surveys/                # Survey creation and implementation (20+ files)
├── error-tracking/         # Error capture, source maps, stack traces (40+ files)
├── ai-observability/       # LLM tracing, AI SDK integrations (40+ files)
├── ai-evals/               # Evaluation datasets and taggers (3 files)
├── ai-engineering/         # AI wizard, llms.txt (3 files)
├── distributed-tracing/    # Distributed tracing setup (10 files)
├── logs/                   # Log capture and search (15 files)
├── data-warehouse/         # SQL querying, joins, views (15 files)
├── web-analytics/          # Web analytics dashboard (25+ files)
├── revenue-analytics/      # Revenue tracking and Stripe (10 files)
├── customer-analytics/     # B2B mode, customer journeys (10 files)
├── endpoints/              # Managed API endpoints (20 files)
├── cdp/                    # Data pipelines, destinations, sources (150+ files)
│   ├── destinations/       # Export to 30+ destinations
│   ├── sources/            # Import from 100+ sources
│   ├── batch-exports/      # Batch export to S3, BigQuery, etc.
│   └── transformations/    # Event transformations
├── api/                    # REST API reference (15 files)
├── data/                   # Events, persons, cohorts, sessions (15 files)
├── advanced/               # Proxy setup, CSP, CDPs (15 files)
├── privacy/                # GDPR, HIPAA, CCPA, data masking (10 files)
├── self-host/              # Self-hosted deployment (15 files)
├── migrate/                # Migrations from GA, Amplitude, Mixpanel (12 files)
├── settings/               # Access control, SSO, organizations (7 files)
├── model-context-protocol/ # MCP server integration (10 files)
├── mcp-analytics/          # PostHog MCP analytics SDK (12 files)
├── sql/                    # HogQL/ClickHouse SQL reference (6 files)
├── workflows/              # Workflow automation (10 files)
├── integrations/           # Lovable, Replit, v0, Vercel (4 files)
├── vscode-extension/       # VS Code extension docs (6 files)
├── slack/                  # Slack integration (4 files)
├── alerts/                 # Metric alerts (1 file)
├── toolbar/                # PostHog toolbar (4 files)
├── how-posthog-works/      # ClickHouse internals, data model (5 files)
└── libraries.mdx           # SDK overview
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install PostHog | `contents/getting-started/install.mdx` |
| Identify users | `contents/getting-started/identify-users.mdx` |
| Capture events | `contents/getting-started/send-events.mdx` |
| JavaScript SDK | `contents/libraries/js/index.mdx` |
| Next.js SDK | `contents/libraries/next-js/index.mdx` |
| Python SDK | `contents/libraries/python/index.mdx` |
| Node.js SDK | `contents/libraries/node/index.mdx` |
| React SDK | `contents/libraries/react/index.mdx` |
| Feature flags | `contents/feature-flags/creating-feature-flags.mdx` |
| Experiments (A/B) | `contents/experiments/creating-an-experiment.mdx` |
| Session replay | `contents/session-replay/installation/index.mdx` |
| Error tracking | `contents/error-tracking/installation/index.mdx` |
| AI observability | `contents/ai-observability/basics.mdx` |
| REST API | `contents/api/index.mdx` |
| HogQL/SQL | `contents/sql/index.mdx` |
| Privacy/GDPR | `contents/privacy/gdpr-compliance.mdx` |
| Self-hosting | `contents/self-host/index.mdx` |
| MCP integration | `contents/model-context-protocol/index.mdx` |

## Detailed Structure

### getting-started/ (6 files)

| File | Description |
|------|-------------|
| `install.mdx` | SDK installation guide |
| `identify-users.mdx` | User identification |
| `send-events.mdx` | Capturing events |
| `next-steps.mdx` | After setup next steps |
| `data-import-export.mdx` | Data import/export |
| `enable-betas.mdx` | Enabling beta features |

### libraries/ (60+ files across frameworks)

| Directory | Description |
|-----------|-------------|
| `js/index.mdx` | JS Web SDK config, usage, persistence |
| `js/config.mdx` | All JS config options |
| `js/usage.mdx` | JS SDK usage patterns |
| `next-js/index.mdx` | Next.js App/Pages Router setup |
| `python/index.mdx` | Python SDK reference |
| `node/index.mdx` | Node.js SDK reference |
| `react/index.mdx` | React hooks and components |
| `react-native/index.mdx` | React Native mobile setup |
| `ios/index.mdx` | iOS Swift setup |
| `ios/configuration.mdx` | iOS configuration options |
| `ios/usage.mdx` | iOS SDK usage |
| `android/index.mdx` | Android Kotlin/Java setup |
| `flutter/index.mdx` | Flutter/Dart setup |
| `go/index.mdx` | Go SDK reference |
| `ruby/index.mdx` | Ruby SDK reference |
| `php/index.mdx` | PHP SDK reference |
| `dotnet/index.mdx` | .NET/C# SDK reference |
| `java/index.mdx` | Java SDK reference |
| `rust/index.mdx` | Rust SDK reference |
| `angular.mdx` | Angular setup |
| `astro.mdx` | Astro setup |
| `svelte.mdx` | Svelte/SvelteKit setup |
| `vue-js/index.mdx` | Vue.js setup |
| `nuxt-js.mdx` | Nuxt.js 3.x setup |
| `remix.mdx` | Remix setup |
| `gatsby.mdx` | Gatsby setup |
| `django.mdx` | Django setup |
| `flask.mdx` | Flask setup |
| `laravel.md` | Laravel PHP setup |
| `nestjs.mdx` | NestJS setup |
| `shopify.mdx` | Shopify setup |
| `webflow.mdx` | Webflow setup |
| `wordpress.md` | WordPress setup |
| `cloudflare-workers.mdx` | Cloudflare Workers |
| `google-tag-manager.mdx` | Google Tag Manager |
| `segment.md` | Segment integration |
| `rudderstack.md` | RudderStack integration |
| `tanstack-start.mdx` | TanStack Start setup |
| `react-router/index.mdx` | React Router v6/v7 |

### product-analytics/ (40+ files)

| File | Description |
|------|-------------|
| `capture-events.mdx` | Event capture guide |
| `identify.mdx` | User identification |
| `autocapture.mdx` | Autocapture configuration |
| `group-analytics.mdx` | Group analytics setup |
| `funnels.mdx` | Funnel analysis |
| `paths.mdx` | User paths analysis |
| `retention.mdx` | Retention analysis |
| `stickiness.mdx` | Stickiness charts |
| `lifecycle.mdx` | User lifecycle |
| `dashboards.mdx` | Dashboard creation |
| `correlation.mdx` | Correlation analysis |
| `person-properties.mdx` | Person properties |
| `identity-resolution.mdx` | Identity merging |
| `schema-management.mdx` | Event schema |
| `best-practices.mdx` | Analytics best practices |
| `troubleshooting.mdx` | Common issues |
| `privacy.mdx` | Analytics privacy |
| `trends/overview.mdx` | Trends/Insights |
| `installation/` | Per-platform installation |

### feature-flags/ (30+ files)

| File | Description |
|------|-------------|
| `creating-feature-flags.mdx` | Create and manage flags |
| `adding-feature-flag-code.mdx` | Add flags to code |
| `bootstrapping.mdx` | Bootstrap flags client-side |
| `local-evaluation/index.mdx` | Server-side local evaluation |
| `early-access-feature-management.mdx` | Early access features |
| `remote-config.mdx` | Remote configuration |
| `testing.mdx` | Testing with flags |
| `best-practices.mdx` | Flag best practices |
| `troubleshooting.mdx` | Common issues |
| `user-and-group-targeting.mdx` | Targeting options |
| `evaluation-contexts.mdx` | Evaluation contexts |
| `scheduled-flag-changes.mdx` | Scheduled changes |
| `dependencies.mdx` | Flag dependencies |
| `installation/` | Per-platform SDK installation |

### experiments/ (30+ files)

| File | Description |
|------|-------------|
| `creating-an-experiment.mdx` | Create A/B experiments |
| `adding-experiment-code.mdx` | Add experiment code |
| `analyzing-results.mdx` | Analyze results |
| `best-practices.mdx` | Experiment best practices |
| `metrics.mdx` | Defining metrics |
| `holdouts.mdx` | Holdout groups |
| `cuped.mdx` | CUPED variance reduction |
| `statistics-bayesian.mdx` | Bayesian statistics |
| `statistics-frequentist.mdx` | Frequentist statistics |
| `testing-and-launching.mdx` | Testing and launch |
| `troubleshooting.mdx` | Common issues |
| `installation/` | Per-platform installation |

### session-replay/ (30+ files)

| File | Description |
|------|-------------|
| `installation/index.mdx` | Installation overview |
| `privacy.mdx` | Privacy and masking |
| `network-recording.mdx` | Network request recording |
| `console-log-recording.mdx` | Console log capture |
| `mobile.mdx` | Mobile session replay |
| `how-to-watch-recordings.mdx` | Viewing recordings |
| `how-to-control-which-sessions-you-record.mdx` | Session sampling |
| `sharing.mdx` | Sharing recordings |
| `iframes.mdx` | iFrame recording |
| `canvas-recording.mdx` | Canvas recording |
| `troubleshooting.mdx` | Common issues |
| `installation/` | Per-platform installation |

### error-tracking/ (40+ files)

| File | Description |
|------|-------------|
| `installation/index.mdx` | Installation overview |
| `capture.mdx` | Capturing exceptions |
| `stack-traces.mdx` | Stack trace configuration |
| `upload-source-maps/` | Source map upload guides |
| `fingerprints.mdx` | Error fingerprinting |
| `grouping-issues.mdx` | Issue grouping |
| `managing-issues.mdx` | Issue management |
| `assigning-issues.mdx` | Assigning issues |
| `alerts.mdx` | Error alerts |
| `references.mdx` | API reference |
| `troubleshooting.mdx` | Common issues |
| `installation/` | Per-platform installation |

### ai-observability/ (40+ files)

| File | Description |
|------|-------------|
| `basics.mdx` | LLM observability overview |
| `traces.mdx` | Trace events |
| `generations.mdx` | Generation tracking |
| `embeddings.mdx` | Embedding tracking |
| `spans.mdx` | Span tracking |
| `sessions.mdx` | Session grouping |
| `calculating-costs.mdx` | Cost calculation |
| `collect-user-feedback.mdx` | User feedback |
| `custom-properties.mdx` | Custom properties |
| `privacy-mode.mdx` | Privacy mode |
| `errors.mdx` | Error tracking |
| `troubleshooting.mdx` | Common issues |
| `installation/anthropic.mdx` | Anthropic SDK |
| `installation/openai.mdx` | OpenAI SDK |
| `installation/langchain.mdx` | LangChain |
| `installation/langgraph.mdx` | LangGraph |
| `installation/vercel-ai.mdx` | Vercel AI SDK |
| `installation/litellm.mdx` | LiteLLM |
| `installation/llamaindex.mdx` | LlamaIndex |
| `installation/manual-capture.mdx` | Manual event capture |
| `installation/` | All SDK integrations |

### api/ (15 files)

| File | Description |
|------|-------------|
| `index.mdx` | API overview |
| `capture.mdx` | Capture API |
| `flags.mdx` | Feature flags API |
| `queries.mdx` | Query API |
| `personal-api-keys.mdx` | API key management |
| `oauth.mdx` | OAuth setup |
| `persons/` | Persons API endpoints |
| `events/` | Events API endpoints |
| `feature-flags/` | Feature flags API endpoints |
| `session-recordings/` | Session recordings API |

### data/ (15 files)

| File | Description |
|------|-------------|
| `events.mdx` | Events overview |
| `persons.mdx` | Persons data |
| `cohorts.mdx` | Cohorts |
| `sessions.mdx` | Sessions |
| `actions.mdx` | Actions |
| `annotations.mdx` | Annotations |
| `property-filters.mdx` | Property filtering |
| `anonymous-vs-identified-events.mdx` | Identity types |
| `utm-segmentation.mdx` | UTM tracking |
| `timestamps.md` | Timestamp handling |

### cdp/ (150+ files)

| Directory | Description |
|-----------|-------------|
| `index.md` | CDP overview |
| `batch-exports/` | BigQuery, S3, Snowflake, Postgres exports |
| `destinations/` | 30+ real-time destinations (HubSpot, Slack, Salesforce, etc.) |
| `sources/` | 100+ data sources (Stripe, Salesforce, Postgres, etc.) |
| `transformations/` | Event transformation docs |
| `fivetran-airbyte.md` | Fivetran/Airbyte integration |

### sql/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | HogQL overview |
| `expressions.mdx` | SQL expressions |
| `aggregations.mdx` | Aggregation functions |
| `clickhouse-functions.mdx` | ClickHouse functions reference |
| `optimizing-queries.mdx` | Query optimization |

### self-host/ (15 files)

| File | Description |
|------|-------------|
| `index.mdx` | Self-hosting overview |
| `configure/environment-variables.md` | Environment variables |
| `configure/securing-posthog.mdx` | Security configuration |
| `configure/running-behind-proxy.md` | Proxy setup |
| `configure/email.md` | Email configuration |
| `deploy/troubleshooting.md` | Deployment troubleshooting |

### privacy/ (10 files)

| File | Description |
|------|-------------|
| `gdpr-compliance.mdx` | GDPR compliance guide |
| `hipaa-compliance.mdx` | HIPAA compliance |
| `ccpa-compliance.mdx` | CCPA compliance |
| `data-collection.mdx` | What data is collected |
| `data-storage.mdx` | Data storage details |
| `ad-blockers.md` | Ad blocker handling |
| `soc2.mdx` | SOC2 compliance |

### migrate/ (12 files)

| File | Description |
|------|-------------|
| `index.mdx` | Migration overview |
| `google-analytics.mdx` | Migrate from GA |
| `migrate-from-amplitude.mdx` | Migrate from Amplitude |
| `mixpanel.mdx` | Migrate from Mixpanel |
| `heap.mdx` | Migrate from Heap |
| `pendo.mdx` | Migrate from Pendo |
| `launchdarkly.mdx` | Migrate from LaunchDarkly |
| `migrate-to-cloud.mdx` | Self-host to cloud |

### advanced/ (15 files)

| File | Description |
|------|-------------|
| `proxy.mdx` | Reverse proxy setup |
| `proxy/` | Per-platform proxy guides |
| `content-security-policy.md` | CSP configuration |
| `browser-extension.md` | Browser extension |
| `cdp.md` | CDP overview |
| `infra-as-code.mdx` | Terraform/IaC |

### model-context-protocol/ (10 files)

| File | Description |
|------|-------------|
| `index.mdx` | MCP overview |
| `tools.mdx` | Available MCP tools |
| `use-cases.mdx` | MCP use cases |
| `cursor.mdx` | Cursor setup |
| `claude-desktop.mdx` | Claude Desktop setup |
| `vscode.mdx` | VS Code setup |
| `faq.mdx` | MCP FAQ |

### data-warehouse/ (15 files)

| File | Description |
|------|-------------|
| `start-here.mdx` | Data warehouse overview |
| `query.mdx` | Querying data |
| `join.mdx` | Joining tables |
| `sources/` | Data sources |
| `sql/` | SQL reference |
| `views/` | Views and materialization |
| `troubleshooting.mdx` | Common issues |
