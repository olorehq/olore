# PostHog Table of Contents

## Directory Map

```
contents/
├── getting-started/          # Installation and onboarding (14 files)
├── new-to-posthog/           # Beginner guides (8 files)
├── integrate/                # SDK integration code (113 files)
│   ├── _snippets/            # Reusable code snippets (55 files)
│   ├── feature-flags-code/   # Feature flag integration code (35 files)
│   └── send-events/          # Event capture code (22 files)
├── libraries/                # SDK reference by language (110 files)
│   ├── js/                   # JavaScript SDK (7 files)
│   ├── next-js/              # Next.js SDK (7 files)
│   ├── python/               # Python SDK (6 files)
│   ├── ios/                  # iOS SDK (6 files)
│   ├── react-router/         # React Router SDK (14 files)
│   ├── vue-js/               # Vue.js SDK (5 files)
│   ├── node/                 # Node.js SDK (3 files)
│   ├── dotnet/               # .NET SDK (3 files)
│   ├── go/                   # Go SDK (3 files)
│   ├── php/                  # PHP SDK (3 files)
│   ├── ruby/                 # Ruby SDK (3 files)
│   ├── react-native/         # React Native SDK (3 files)
│   ├── flutter/              # Flutter SDK (2 files)
│   ├── android/              # Android SDK (2 files)
│   └── curl/                 # REST/curl examples (2 files)
├── product-analytics/        # Analytics features (76 files)
│   ├── _snippets/            # Code snippets (20 files)
│   ├── installation/         # Setup guides (21 files)
│   └── trends/               # Trends analysis (8 files)
├── feature-flags/            # Feature flags docs (69 files)
│   ├── installation/         # SDK setup (20 files)
│   ├── local-evaluation/     # Local evaluation (6 files)
│   └── snippets/             # Code snippets (17 files)
├── experiments/              # A/B testing docs (59 files)
│   └── installation/         # SDK setup (33 files)
├── session-replay/           # Session replay docs (62 files)
│   ├── _snippets/            # Code snippets (23 files)
│   └── installation/         # SDK setup (21 files)
├── error-tracking/           # Error tracking docs (77 files)
│   ├── _snippets/            # Code snippets (15 files)
│   ├── installation/         # SDK setup (22 files)
│   └── upload-source-maps/   # Source map upload (17 files)
├── llm-analytics/            # LLM/AI analytics (86 files)
│   ├── _snippets/            # Code snippets (7 files)
│   ├── installation/         # SDK setup by provider (42 files)
│   ├── integrations/         # Third-party integrations (5 files)
│   └── user-feedback/        # User feedback (2 files)
├── surveys/                  # Surveys feature (33 files)
├── cdp/                      # Customer Data Platform (106 files)
│   ├── destinations/         # CDP destinations (41 files)
│   ├── sources/              # CDP sources (42 files)
│   ├── batch-exports/        # Batch export configs (8 files)
│   └── transformations/      # Data transformations (3 files)
├── data-warehouse/           # Data warehouse docs (21 files)
├── data/                     # Data management (17 files)
├── web-analytics/            # Web analytics (39 files)
├── api/                      # REST API reference (19 files)
├── endpoints/                # PostHog endpoints feature (30 files)
│   └── start-here/           # Getting started with endpoints (10 files)
├── self-host/                # Self-hosting guides (28 files)
├── advanced/                 # Advanced configuration (23 files)
├── migrate/                  # Migration guides (15 files)
├── privacy/                  # Privacy and compliance (18 files)
├── how-posthog-works/        # Architecture internals (6 files)
├── sql/                      # HogQL/SQL reference (6 files)
├── hog/                      # Hog scripting language (1 file)
├── model-context-protocol/   # MCP integration (19 files)
├── posthog-ai/               # PostHog AI features (17 files)
├── ai-engineering/           # AI engineering guides (3 files)
├── logs/                     # Log capture (19 files)
├── workflows/                # Workflow automation (16 files)
├── customer-analytics/       # Customer analytics (14 files)
├── revenue-analytics/        # Revenue analytics (12 files)
├── integrations/             # Third-party integrations (4 files)
├── site-apps/                # Site apps (3 files)
├── alerts/                   # Alerting (1 file)
├── billing/                  # Billing docs (5 files)
├── settings/                 # Account settings (7 files)
├── support/                  # Support resources (8 files)
├── toolbar/                  # PostHog toolbar (5 files)
├── product-tours/            # Product tours feature (13 files)
├── product-os/               # Product OS (1 file)
├── notebooks/                # Notebooks feature (1 file)
├── discussion/               # Discussions feature (1 file)
└── _snippets/                # Shared code snippets (21 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to PostHog | `contents/getting-started/` |
| Install an SDK | `contents/libraries/` or `contents/integrate/` |
| Event tracking | `contents/integrate/send-events/` |
| Feature flags | `contents/feature-flags/` |
| A/B testing | `contents/experiments/` |
| Session replay | `contents/session-replay/` |
| Product analytics | `contents/product-analytics/` |
| Error tracking | `contents/error-tracking/` |
| LLM analytics | `contents/llm-analytics/` |
| Surveys | `contents/surveys/` |
| Data pipeline / CDP | `contents/cdp/` |
| Data warehouse | `contents/data-warehouse/` |
| REST API | `contents/api/` |
| Self-hosting | `contents/self-host/` |
| Privacy/compliance | `contents/privacy/` |
| SQL / HogQL | `contents/sql/` |

## Detailed Structure

### getting-started/ (14 files)

| File | Description |
|------|-------------|
| `index.mdx` | Getting started overview |
| Other files | Installation and onboarding guides |

### new-to-posthog/ (8 files)

| File | Description |
|------|-------------|
| Various | Beginner guides and first steps |

### integrate/ (113 files)

| Directory | Description |
|-----------|-------------|
| `send-events/` (22 files) | How to capture events with each SDK |
| `feature-flags-code/` (35 files) | Feature flag usage code per SDK |
| `_snippets/` (55 files) | Reusable MDX code snippets |

### libraries/ (110 files)

| Directory | Description |
|-----------|-------------|
| `js/` (7 files) | JavaScript/Web SDK |
| `next-js/` (7 files) | Next.js SDK |
| `python/` (6 files) | Python SDK |
| `ios/` (6 files) | iOS Swift SDK |
| `react-router/` (14 files) | React Router integration |
| `vue-js/` (5 files) | Vue.js SDK |
| `node/` (3 files) | Node.js SDK |
| `dotnet/` (3 files) | .NET SDK |
| `go/` (3 files) | Go SDK |
| `php/` (3 files) | PHP SDK |
| `ruby/` (3 files) | Ruby SDK |
| `react-native/` (3 files) | React Native SDK |
| `flutter/` (2 files) | Flutter SDK |
| `android/` (2 files) | Android SDK |
| `curl/` (2 files) | cURL / REST API examples |
| `capacitor/` | Capacitor SDK |
| `elixir/` | Elixir SDK |
| `java/` | Java SDK |
| `react/` | React SDK |
| `rust/` | Rust SDK |
| `unity/` | Unity SDK |

### product-analytics/ (76 files)

| Directory | Description |
|-----------|-------------|
| `installation/` (21 files) | Setup by framework |
| `trends/` (8 files) | Trends chart docs |
| Root files | Insights, funnels, paths, cohorts, etc. |

### feature-flags/ (69 files)

| Directory | Description |
|-----------|-------------|
| `installation/` (20 files) | SDK-specific setup |
| `local-evaluation/` (6 files) | Local flag evaluation |
| `snippets/` (17 files) | Code snippets |
| Root files | Flag types, targeting, bootstrapping |

### experiments/ (59 files)

| Directory | Description |
|-----------|-------------|
| `installation/` (33 files) | SDK-specific experiment setup |
| Root files | Statistical methods, metrics, variants |

### session-replay/ (62 files)

| Directory | Description |
|-----------|-------------|
| `installation/` (21 files) | SDK-specific setup |
| `_snippets/` (23 files) | Code snippets |
| Root files | Configuration, privacy, network recording |

### error-tracking/ (77 files)

| Directory | Description |
|-----------|-------------|
| `installation/` (22 files) | SDK-specific setup |
| `upload-source-maps/` (17 files) | Source map upload guides |
| `_snippets/` (15 files) | Code snippets |
| Root files | Error grouping, alerts, issue management |

### llm-analytics/ (86 files)

| Directory | Description |
|-----------|-------------|
| `installation/` (42 files) | Provider-specific setup (OpenAI, Anthropic, etc.) |
| `integrations/` (5 files) | Third-party AI integrations |
| `user-feedback/` (2 files) | Collecting feedback on LLM responses |
| `_snippets/` (7 files) | Code snippets |

### surveys/ (33 files)

| File | Description |
|------|-------------|
| Root files | Creating surveys, targeting, templates, API |

### cdp/ (106 files)

| Directory | Description |
|-----------|-------------|
| `destinations/` (41 files) | Destination connectors (S3, BigQuery, Salesforce, etc.) |
| `sources/` (42 files) | Source connectors (Stripe, Zendesk, etc.) |
| `batch-exports/` (8 files) | Batch export configuration |
| `transformations/` (3 files) | Data transformation pipelines |

### data-warehouse/ (21 files)

| File | Description |
|------|-------------|
| Root files | Querying, schema, linking, syncing data |

### web-analytics/ (39 files)

| File | Description |
|------|-------------|
| Root files | Web analytics setup, metrics, cookieless tracking |

### api/ (19 files)

| File | Description |
|------|-------------|
| Root files | REST API endpoints, authentication, pagination |

### endpoints/ (30 files)

| Directory | Description |
|-----------|-------------|
| `start-here/` (10 files) | Creating and deploying endpoints |
| Root files | Variables, SQL endpoints, guides |

### self-host/ (28 files)

| File | Description |
|------|-------------|
| Root files | Kubernetes, Docker, configuration, upgrades |

### advanced/ (23 files)

| File | Description |
|------|-------------|
| Root files | Proxy, reverse proxy, custom domains, performance |

### model-context-protocol/ (19 files)

| File | Description |
|------|-------------|
| Root files | MCP server integration with PostHog |

### logs/ (19 files)

| File | Description |
|------|-------------|
| Root files | Log capture, filtering, SDK setup |

### workflows/ (16 files)

| File | Description |
|------|-------------|
| Root files | Workflow automation, triggers, actions |

### migrate/ (15 files)

| File | Description |
|------|-------------|
| Root files | Migration guides from Mixpanel, Amplitude, GA, etc. |

### privacy/ (18 files)

| File | Description |
|------|-------------|
| Root files | GDPR, CCPA, data deletion, anonymization |
