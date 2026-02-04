# PostHog Table of Contents

## Directory Map

```
contents/
├── getting-started/        # Installation, setup (14 files)
├── integrate/              # SDK integration guides (115 files)
├── libraries/              # Client libraries (103 files)
├── cdp/                    # Customer Data Platform (125 files)
│   ├── sources/            # Data sources
│   ├── destinations/       # Data destinations
│   ├── transformations/    # Event transformations
│   └── batch-exports/      # Batch export configs
├── feature-flags/          # Feature flags (61 files)
├── experiments/            # A/B testing (51 files)
├── session-replay/         # Session recording (50 files)
├── product-analytics/      # Analytics features (69 files)
├── web-analytics/          # Web analytics (23 files)
├── error-tracking/         # Error monitoring (71 files)
├── llm-analytics/          # LLM observability (42 files)
├── surveys/                # User surveys (18 files)
├── data-warehouse/         # Data warehouse (48 files)
│   ├── sources/            # External data sources
│   ├── views/              # SQL views
│   └── sql/                # SQL reference
├── workflows/              # Workflow automation (13 files)
├── api/                    # API reference (19 files)
├── self-host/              # Self-hosting (27 files)
├── advanced/               # Advanced topics (23 files)
├── privacy/                # Privacy features (18 files)
├── migrate/                # Migration guides (15 files)
└── ...more                 # Additional features
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/start-here.mdx` |
| Install SDK | `contents/integrate/` or `contents/libraries/` |
| Track events | `contents/integrate/send-events/` |
| Feature flags | `contents/feature-flags/` |
| Session replay | `contents/session-replay/` |
| A/B testing | `contents/experiments/` |
| API reference | `contents/api/` |
| Self-hosting | `contents/self-host/` |

## Detailed Structure

### getting-started/ (14 files)
Installation, quickstart, and initial setup guides.

### integrate/ (115 files)
SDK integration guides for various platforms and frameworks.

| Directory | Description |
|-----------|-------------|
| `send-events/` | Event tracking integration |
| `feature-flags-code/` | Feature flag code examples |
| `identify-users/` | User identification |
| `server/` | Server-side integration |
| `client/` | Client-side integration |

### libraries/ (103 files)
Client library documentation for all supported platforms and languages.

| Platform | Files |
|----------|-------|
| JavaScript/TypeScript | Multiple frameworks (React, Vue, Next.js, etc.) |
| Mobile | iOS, Android, React Native, Flutter |
| Backend | Node.js, Python, Ruby, PHP, Go, Java, etc. |

### cdp/ (125 files)
Customer Data Platform - sources, destinations, transformations.

| Directory | Description |
|-----------|-------------|
| `sources/` | Ingest data from external platforms |
| `destinations/` | Send data to external platforms |
| `transformations/` | Transform events in real-time |
| `batch-exports/` | Export data in batches |

### feature-flags/ (61 files)
Feature flag implementation, targeting, experiments integration.

### experiments/ (51 files)
A/B testing, multivariate testing, statistical analysis.

### session-replay/ (50 files)
Session recording, privacy controls, troubleshooting.

### product-analytics/ (69 files)
Trends, funnels, retention, user paths, lifecycle analysis.

### web-analytics/ (23 files)
Web analytics features, tracking, reports.

### error-tracking/ (71 files)
Error monitoring, stack traces, grouping, alerts.

### llm-analytics/ (42 files)
LLM observability, tracing, evaluation, monitoring.

### surveys/ (18 files)
User surveys, NPS, feedback collection.

### data-warehouse/ (48 files)
External data sources, SQL queries, data modeling.

| Directory | Description |
|-----------|-------------|
| `sources/` | Connect external data sources |
| `views/` | Create SQL views |
| `sql/` | SQL query reference |

### workflows/ (13 files)
Workflow automation, triggers, actions.

### api/ (19 files)
REST API reference, authentication, endpoints.

### self-host/ (27 files)
Self-hosting deployment, configuration, scaling.

| Directory | Description |
|-----------|-------------|
| `deploy/` | Deployment options |
| `configure/` | Configuration guides |
| `open-source/` | Open source edition |

### advanced/ (23 files)
Advanced topics: proxies, CORS, security.

### privacy/ (18 files)
Privacy features, GDPR, data masking, consent.

### customer-analytics/ (11 files)
Customer-specific analytics and reporting.

### revenue-analytics/ (10 files)
Revenue tracking and analytics.

### posthog-ai/ (13 files)
AI-powered features and insights.

### data/ (16 files)
Data management, exports, imports.

### logs/ (14 files)
Log ingestion and analysis.

### migrate/ (15 files)
Migration guides from other platforms (Amplitude, Mixpanel, etc.).

### model-context-protocol/ (9 files)
Model Context Protocol integration.

### new-to-posthog/ (8 files)
Onboarding guides for new users.

### product-tours/ (8 files)
Product tour creation and management.

### settings/ (7 files)
Account and project settings.

### billing/ (5 files)
Billing, pricing, usage management.

### endpoints/ (5 files)
Custom API endpoints.

### support/ (5 files)
Support resources and troubleshooting.

### toolbar/ (5 files)
PostHog toolbar integration.

### sql/ (6 files)
SQL query language reference.

### how-posthog-works/ (6 files)
Architecture, data model, ingestion pipeline.

### ai-engineering/ (3 files)
AI engineering resources.

### site-apps/ (3 files)
Site app integrations.

### alerts/ (1 file)
Alert configuration.

### cmd-k/ (1 file)
Command palette documentation.

### csp-tracking/ (1 file)
Content Security Policy tracking.

### discussion/ (1 file)
Discussion feature.

### hog/ (1 file)
HogQL language reference.

### integrations/ (1 file)
Integration overview.

### notebooks/ (1 file)
Notebook features.

### product-os/ (1 file)
Product OS overview.

### _snippets/ (18 files)
Reusable documentation snippets.

### components/ (1 file)
Component documentation.
