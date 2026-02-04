# Axiom Documentation Table of Contents

## Directory Map

```
contents/
├── introduction.mdx               # What is Axiom?
├── llms-apl.mdx                  # Using LLMs with APL queries
├── getting-started-guide/         # Quick start and guides (7 files)
├── platform-overview/             # Architecture and concepts (4 files)
├── send-data/                     # Data ingestion integrations (30 files)
├── query-data/                    # Querying and visualization (11 files)
│   └── metrics/                   # Metrics-specific queries
├── apl/                           # APL query language reference (253 files)
│   ├── tabular-operators/         # Table operations (30 files)
│   ├── aggregation-function/      # Aggregation functions (34 files)
│   ├── scalar-functions/          # Scalar functions (198 files)
│   │   ├── string-functions/      # String manipulation (55 files)
│   │   ├── time-series/           # Time series functions (41 files)
│   │   ├── array-functions/       # Array operations (25 files)
│   │   ├── ip-functions/          # IP address functions (19 files)
│   │   ├── genai-functions/       # GenAI-specific functions (18 files)
│   │   ├── conversion-functions/  # Type conversions (12 files)
│   │   ├── mathematical-functions/ # Math operations (8 files)
│   │   ├── type-functions/        # Type checking (6 files)
│   │   ├── datetime-functions/    # Date/time operations (5 files)
│   │   ├── rounding-functions/    # Rounding operations (4 files)
│   │   ├── pair-functions/        # Key-value pairs (3 files)
│   │   ├── metadata-functions/    # Metadata extraction (3 files)
│   │   └── hash-functions/        # Hashing (1 file)
│   ├── scalar-operators/          # Scalar operations (8 files)
│   ├── data-types/                # APL data types (3 files)
│   ├── guides/                    # APL guides (3 files)
│   ├── query-statement/           # Query structure (1 file)
│   ├── reference/                 # APL reference (1 file)
│   └── entities/                  # APL entities (1 file)
├── monitor-data/                  # Monitoring and alerting (16 files)
├── dashboards/                    # Dashboard management (2 files)
├── dashboard-elements/            # Dashboard widgets (13 files)
├── ai-engineering/                # AI observability (18 files)
│   ├── observe/                   # AI app monitoring (4 files)
│   └── evaluate/                  # AI evaluation (6 files)
├── apps/                          # Pre-built apps (12 files)
├── console/                       # Console features (5 files)
│   └── intelligence/              # AI-powered features (8 files)
│       └── skills/                # Axiom Skills (4 files)
├── llms/                          # LLM integrations (4 files)
├── guides/                        # How-to guides (24 files)
├── restapi/                       # REST API reference (81 files)
│   └── endpoints/                 # API endpoints (75 files)
├── reference/                     # CLI and other refs (14 files)
├── endpoints/                     # API endpoints info (3 files)
├── legal/                         # Terms and policies (8 files)
└── get-help/                      # Support resources (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started-guide/getting-started.mdx` |
| Product overview | `contents/introduction.mdx` |
| Send data | `contents/send-data/` directory |
| Query with APL | `contents/apl/` directory |
| API reference | `contents/restapi/endpoints/` directory |
| AI observability | `contents/ai-engineering/` directory |
| Monitoring/alerts | `contents/monitor-data/` directory |
| LLM integrations | `contents/llms/` directory |

## Detailed Structure

### Root Level (2 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | What is Axiom? Platform overview |
| `llms-apl.mdx` | Using LLMs with APL queries |

### getting-started-guide/ (7 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Quick start guide |
| `axiom-tour.mdx` | Product tour |
| `ai-engineering.mdx` | AI engineering intro |
| `observability.mdx` | Observability concepts |
| `product-analytics.mdx` | Product analytics intro |
| `use-cases.mdx` | Common use cases |
| `glossary.mdx` | Terminology reference |

### platform-overview/ (4 files)

| File | Description |
|------|-------------|
| Platform architecture, capabilities, data model, pricing |

### send-data/ (30 files)

Data ingestion integrations including:
- AWS services (Lambda, Firehose, S3, CloudWatch, etc.)
- Kubernetes and container platforms
- Log shippers (Fluentd, Fluent Bit, Logstash, Vector)
- Cloud platforms (Vercel, Cloudflare, Heroku)
- Language SDKs and frameworks
- Custom integrations

### query-data/ (11 files)

| Key Files | Description |
|-----------|-------------|
| `explore.mdx` | Query interface |
| `stream.mdx` | Live event streaming |
| `datasets.mdx` | Dataset management |
| `filters.mdx` | Query filters |
| `visualizations.mdx` | Chart types |
| `views.mdx` | Saved views |
| `traces.mdx` | Distributed tracing |
| `virtual-fields.mdx` | Computed fields |
| `annotate-charts.mdx` | Chart annotations |

### apl/ (253 files)

Axiom Processing Language (APL) - a powerful query language for log and event data.

#### tabular-operators/ (30 files)
Operators for table manipulation: where, extend, project, summarize, join, order, limit, distinct, parse, lookup, make-series, etc.

#### aggregation-function/ (34 files)
Aggregation functions: count, sum, avg, min, max, percentiles, variance, stdev, etc.

#### scalar-functions/ (198 files)

**string-functions/** (55 files): String operations like split, substring, replace, regex matching, base64 encoding, URL encoding, case conversion, etc.

**time-series/** (41 files): Time series analysis functions like series_fir_filter, series_decompose, series_outliers, series_periods_detect, etc.

**array-functions/** (25 files): Array operations like array_concat, array_slice, array_sort, array_length, etc.

**ip-functions/** (19 files): IP address manipulation and validation functions.

**genai-functions/** (18 files): GenAI-specific functions for extracting and analyzing LLM data.

**conversion-functions/** (12 files): Type conversion functions like tobool, tostring, todouble, toint, etc.

**mathematical-functions/** (8 files): Math operations like abs, sqrt, log, exp, pow, etc.

**datetime-functions/** (5 files): Date/time operations like now, ago, startofday, etc.

**Other function categories**: type checking, rounding, hashing, key-value pairs, metadata extraction.

### monitor-data/ (16 files)

Monitoring, alerting, and notification features:
- Monitors creation and management
- Alert configuration
- Notification channels (Slack, PagerDuty, webhooks, etc.)
- Anomaly detection

### dashboards/ and dashboard-elements/ (15 files)

Dashboard creation and management:
- Dashboard basics
- Widget types (charts, tables, markdown, logs)
- Layout and configuration

### ai-engineering/ (18 files)

AI application observability:
- **observe/**: Monitor AI apps, traces, spans, completions
- **evaluate/**: Evaluation frameworks, collections, ground truth, scorers

### apps/ (12 files)

Pre-built apps for common integrations:
- AWS Lambda app
- Vercel app
- Cloudflare app
- And more

### console/intelligence/ (8 files)

AI-powered console features:
- Axiom Skills for automated analysis
- Natural language querying
- Intelligent insights

### llms/ (4 files)

LLM provider integrations:
- OpenAI
- Anthropic
- Other providers

### guides/ (24 files)

How-to guides and tutorials covering various use cases and workflows.

### restapi/ (81 files)

Complete REST API reference:
- **endpoints/**: 75 endpoint documentation files
- Authentication
- API overview
- Error handling

### reference/ (14 files)

CLI reference, SDKs, and other technical references.

### Other Directories

- **endpoints/**: API endpoint setup (3 files)
- **legal/**: Terms, privacy, compliance (8 files)
- **get-help/**: Support resources (1 file)
