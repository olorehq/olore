# Sentry Table of Contents

## Directory Map

```
contents/
├── platforms/              # SDK docs per language/framework (1713 files)
│   ├── javascript/         # JavaScript, Node, React, Next.js, etc. (430 files)
│   ├── python/             # Python SDK (133 files)
│   ├── dart/               # Dart/Flutter SDK (123 files)
│   ├── react-native/       # React Native SDK (119 files)
│   ├── java/               # Java SDK (112 files)
│   ├── android/            # Android SDK (107 files)
│   ├── apple/              # iOS/macOS/tvOS SDK (97 files)
│   ├── dotnet/             # .NET SDK (97 files)
│   ├── go/                 # Go SDK (60 files)
│   ├── php/                # PHP SDK (65 files)
│   ├── native/             # C/C++ native SDK (57 files)
│   ├── unity/              # Unity SDK (53 files)
│   ├── unreal/             # Unreal Engine SDK (48 files)
│   ├── rust/               # Rust SDK (36 files)
│   ├── kotlin/             # Kotlin SDK (33 files)
│   ├── elixir/             # Elixir SDK (33 files)
│   ├── ruby/               # Ruby SDK (51 files)
│   ├── godot/              # Godot SDK (29 files)
│   └── powershell/         # PowerShell SDK (26 files)
├── product/                # Product features (186 files)
│   ├── issues/             # Issue tracking, grouping, triage (39 files)
│   ├── explore/            # Traces, metrics, logs, profiling, session replay (28 files)
│   ├── dashboards/         # Dashboards, widgets (25 files)
│   ├── releases/           # Release tracking, health (19 files)
│   ├── sentry-basics/      # Getting started guides (18 files)
│   ├── monitors-and-alerts/ # Crons, uptime, alerts (12 files)
│   ├── relay/              # Sentry Relay (7 files)
│   ├── drains/             # Data drains (7 files)
│   ├── snapshots/          # Visual snapshot testing (6 files)
│   ├── ai-in-sentry/       # AI-assisted features (5 files)
│   └── (other product sections)
├── integrations/           # Third-party integrations (105 files)
│   ├── issue-tracking/     # Jira, GitHub, Linear, etc. (18 files)
│   ├── integration-platform/ # Sentry integration platform (17 files)
│   ├── notification-incidents/ # Slack, PagerDuty, etc. (13 files)
│   ├── debugging/          # Spotlight, sourcemaps tools (9 files)
│   ├── feature-flag/       # LaunchDarkly, etc. (8 files)
│   ├── source-code-mgmt/   # GitHub, GitLab (7 files)
│   ├── compliance/         # Vanta, CloudEagle (6 files)
│   ├── session-replay/     # Session replay integrations (6 files)
│   ├── cloud-monitoring/   # AWS Lambda, GCP (5 files)
│   ├── data-forwarding/    # Splunk, Segment, Grafana (5 files)
│   ├── deployment/         # CI/CD integrations (4 files)
│   └── coding-agents/      # Claude, Copilot, Cursor (4 files)
├── concepts/               # Core concepts (47 files)
│   ├── search/             # Search and filter syntax (10 files)
│   ├── data-management/    # Event grouping, filtering (9 files)
│   ├── key-terms/          # Tags, environments, tracing, scopes (16 files)
│   ├── otlp/               # OpenTelemetry integration (9 files)
│   └── migration/          # Migration guides (3 files)
├── pricing/                # Plans, quotas, rate limits (16 files)
├── security-legal-pii/     # PII scrubbing, security (17 files)
├── organization/           # Org settings, auth, SSO, sampling (14 files)
├── ai/                     # AI monitoring (agents, MCP, conversations) (15 files)
├── cli/                    # Sentry CLI reference (10 files)
├── api/                    # REST API guides (8 files)
├── guides/                 # Quick-start integration guides (7 files)
└── account/                # Auth tokens, user settings (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| JavaScript/Node setup | `contents/platforms/javascript/index.mdx` |
| Python setup | `contents/platforms/python/index.mdx` |
| Other platform setup | `contents/platforms/{platform}/index.mdx` |
| Error tracking concepts | `contents/product/issues/` |
| Performance monitoring | `contents/product/explore/` |
| Alerts & monitors | `contents/product/monitors-and-alerts/` |
| Releases & deploys | `contents/product/releases/` |
| Sentry CLI | `contents/cli/` |
| REST API | `contents/api/` |
| Integrations | `contents/integrations/` |
| Search syntax | `contents/concepts/search/` |
| PII & data scrubbing | `contents/security-legal-pii/scrubbing/` |

## Detailed Structure

### platforms/javascript/ (430 files)

| Path | Description |
|------|-------------|
| `index.mdx` | JavaScript SDK overview |
| `configuration/` | SDK configuration options |
| `enriching-events/` | Breadcrumbs, context, tags, user |
| `data-management/` | Source maps, debug files |
| `feature-flags/` | Feature flag integration |
| `guides/angular/` | Angular guide |
| `guides/astro/` | Astro guide |
| `guides/aws-lambda/` | AWS Lambda guide |
| `guides/bun/` | Bun guide |
| `guides/cloudflare-workers/` | Cloudflare Workers guide |
| `guides/ember/` | Ember.js guide |
| `guides/express/` | Express.js guide |
| `guides/fastify/` | Fastify guide |
| `guides/gatsby/` | Gatsby guide |
| `guides/hapi/` | Hapi guide |
| `guides/hono/` | Hono guide |
| `guides/koa/` | Koa guide |
| `guides/nestjs/` | NestJS guide |
| `guides/nextjs/` | Next.js guide |
| `guides/node/` | Node.js guide |
| `guides/nuxt/` | Nuxt guide |
| `guides/react/` | React guide |
| `guides/remix/` | Remix guide |
| `guides/solid/` | SolidJS guide |
| `guides/solidstart/` | SolidStart guide |
| `guides/svelte/` | Svelte guide |
| `guides/sveltekit/` | SvelteKit guide |
| `guides/tanstackstart/` | TanStack Start guide |
| `guides/vue/` | Vue.js guide |
| `guides/wasm/` | WebAssembly guide |

### platforms/python/ (133 files)

| Path | Description |
|------|-------------|
| `index.mdx` | Python SDK overview |
| `configuration/` | SDK configuration options |
| `enriching-events/` | Breadcrumbs, context, tags |
| `data-management/` | Sensitive data, scrubbing |
| `integrations/` | Framework/library integrations |
| `tracing/` | Performance tracing |
| `sampling.mdx` | Sampling configuration |
| `troubleshooting.mdx` | Troubleshooting |

### platforms/dart/ (123 files)

| Path | Description |
|------|-------------|
| `index.mdx` | Dart/Flutter SDK overview |
| `configuration/` | SDK options |
| `enriching-events/` | Context, tags, user |
| `integrations/` | Flutter-specific integrations |
| `tracing/` | Performance tracing |

### platforms/react-native/ (119 files)

| Path | Description |
|------|-------------|
| `index.mdx` | React Native SDK overview |
| `configuration/` | SDK configuration |
| `enriching-events/` | Context and breadcrumbs |
| `manual-setup.mdx` | Manual setup guide |
| `tracing/` | Performance tracing |

### platforms/java/ (112 files)

| Path | Description |
|------|-------------|
| `index.mdx` | Java SDK overview |
| `configuration/` | SDK options |
| `integrations/` | Spring, Log4j, etc. |
| `tracing/` | Performance tracing |

### platforms/android/ (107 files)

| Path | Description |
|------|-------------|
| `index.mdx` | Android SDK overview |
| `configuration/` | SDK configuration |
| `enriching-events/` | Context, tags, user |
| `integrations/` | Jetpack Compose, OkHttp, Room, etc. |
| `tracing/` | Performance tracing |

### platforms/apple/ (97 files)

| Path | Description |
|------|-------------|
| `index.mdx` | iOS/macOS/tvOS SDK overview |
| `configuration/` | SDK options |
| `enriching-events/` | Context, tags, user |
| `integrations/` | Apple-specific integrations |
| `tracing/` | Performance tracing |

### platforms/dotnet/ (97 files)

| Path | Description |
|------|-------------|
| `index.mdx` | .NET SDK overview |
| `configuration/` | SDK options |
| `enriching-events/` | Context, tags, user |
| `integrations/` | ASP.NET, Entity Framework, etc. |
| `tracing/` | Performance tracing |

### platforms/go/ (60 files)

| Path | Description |
|------|-------------|
| `index.mdx` | Go SDK overview |
| `configuration/` | SDK options |
| `integrations/` | Echo, Gin, net/http, etc. |
| `tracing/` | Performance tracing |

### platforms/php/ (65 files)

| Path | Description |
|------|-------------|
| `index.mdx` | PHP SDK overview |
| `integrations/` | Laravel, Symfony, etc. |
| `tracing/` | Performance tracing |

### product/issues/ (39 files)

| File | Description |
|------|-------------|
| `index.mdx` | Issues overview |
| `grouping-and-fingerprints/` | How Sentry groups events |
| `issue-details/` | Error, performance, replay issues |
| `issue-details/performance-issues/` | N+1, slow DB, uncompressed assets, etc. |
| `issue-priority/` | Issue priority and triage |
| `issue-views/` | Custom issue views |
| `monitors-and-alerts/` | Alert rules from issues |
| `ownership-rules/` | Code owners |
| `states-triage/` | Issue states (resolved, ignored, etc.) |
| `reprocessing/` | Event reprocessing |
| `suspect-commits/` | Commit blame |

### product/explore/ (28 files)

| File | Description |
|------|-------------|
| `session-replay/` | Session replay (web & mobile) |
| `profiling/` | Profiling |
| `metrics/` | Custom metrics |
| `logs/` | Logging integration |
| `trace-explorer/` | Trace explorer |
| `discover-queries/` | Discover query builder |

### product/dashboards/ (25 files)

| File | Description |
|------|-------------|
| `index.mdx` | Dashboards overview |
| `widget-builder/` | Widget builder |
| `widget-library/` | Pre-built widgets |
| `sentry-dashboards/` | Pre-built dashboards (AI, backend, frontend, mobile) |

### product/releases/ (19 files)

| File | Description |
|------|-------------|
| `index.mdx` | Releases overview |
| `setup/` | Release setup |
| `setup/release-automation/` | CI/CD automation (GitHub Actions, CircleCI, etc.) |
| `health/` | Release health metrics |
| `associate-commits/` | Linking commits to releases |

### product/sentry-basics/ (18 files)

| File | Description |
|------|-------------|
| `index.mdx` | Sentry basics overview |
| `integrate-backend/` | Backend integration walkthrough |
| `integrate-frontend/` | Frontend integration walkthrough |
| `distributed-tracing/` | Distributed tracing setup |
| `performance-monitoring.mdx` | Performance monitoring intro |

### concepts/ (47 files)

| File | Description |
|------|-------------|
| `search/` | Search syntax and operators |
| `search/searchable-properties/` | All searchable event properties |
| `data-management/event-grouping/` | How events are grouped into issues |
| `data-management/filtering/` | Inbound data filters |
| `key-terms/enrich-data/` | Tags, custom context, user info |
| `key-terms/environments/` | Environment configuration |
| `key-terms/tracing/` | Tracing concepts |
| `otlp/` | OpenTelemetry Protocol integration |
| `migration/` | Migration guides |

### integrations/issue-tracking/ (18 files)

| File | Description |
|------|-------------|
| `jira.mdx` | Jira integration |
| `github.mdx` | GitHub Issues integration |
| `linear.mdx` | Linear integration |
| `gitlab.mdx` | GitLab integration |

### integrations/notification-incidents/ (13 files)

| File | Description |
|------|-------------|
| `slack.mdx` | Slack notifications |
| `pagerduty.mdx` | PagerDuty integration |
| `opsgenie.mdx` | OpsGenie integration |
| `msteams.mdx` | Microsoft Teams |

### security-legal-pii/ (17 files)

| File | Description |
|------|-------------|
| `scrubbing/` | PII data scrubbing |
| `scrubbing/server-side-scrubbing/` | Server-side scrubbing rules |
| `security/` | Security practices |

### cli/ (10 files)

| File | Description |
|------|-------------|
| `index.mdx` | Sentry CLI overview |
| Files cover: releases, source maps, debug files, deploys |

### api/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | REST API overview |
| `guides/` | API usage guides (auth, pagination, etc.) |
