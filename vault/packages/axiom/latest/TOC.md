# Axiom Table of Contents

## Directory Map

```
contents/
├── getting-started-guide/   # Intro, tour, glossary, observability concepts (4 files)
├── send-data/               # Ingest: OTel, Fluent Bit, Lambda, Kubernetes, etc. (30 files)
├── query-data/              # Explore, APL editor, filters, visualizations (13 files)
├── apl/                     # APL query language reference (356 files)
│   ├── aggregation-function/  # count, sum, avg, percentile, etc. (34 files)
│   ├── scalar-functions/      # string, datetime, math, array, IP, etc. (271 files)
│   │   ├── array-functions/     (25)
│   │   ├── datetime-functions/  (25)
│   │   ├── mathematical-functions/ (37)
│   │   ├── string-functions/    (55)
│   │   ├── time-series/         (41)
│   │   ├── ip-functions/        (19)
│   │   ├── genai-functions/     (18)
│   │   ├── conversion-functions/ (12)
│   │   ├── type-functions/       (6)
│   │   ├── hash-functions/       (5)
│   │   ├── rounding-functions/   (4)
│   │   ├── metadata-functions/   (3)
│   │   ├── pair-functions/       (3)
│   │   ├── conditional-function/ (2)
│   │   └── sql-functions/        (2)
│   ├── tabular-operators/     # extend, project, summarize, where, join, etc. (30 files)
│   ├── scalar-operators/      # in, between, has, startswith, etc. (8 files)
│   ├── aggregation-function/  # Aggregation functions (34 files)
│   ├── data-types/            # Scalar types, null values, map fields (3 files)
│   ├── guides/                # Migrating SQL to APL (3 files)
│   ├── entities/              # Entity names (1 file)
│   ├── query-statement/       # Query statement syntax (1 file)
│   └── reference/             # APL reference (1 file)
├── restapi/                 # REST API reference (95 files)
│   └── endpoints/             # Individual endpoint docs (89 files)
├── monitor-data/            # Monitors, notifiers, alerting (16 files)
├── dashboards/              # Dashboard creation and configuration (2 files)
├── dashboard-elements/      # Chart types: time-series, pie, heatmap, etc. (13 files)
├── guides/                  # Language SDKs and OTel integration guides (25 files)
├── apps/                    # Integrations: Vercel, Lambda, Cloudflare, etc. (13 files)
├── console/                 # Axiom Intelligence, MCP server, AI agents (12 files)
│   └── intelligence/
│       └── skills/            # Built-in AI skills (7 files)
├── ai-engineering/          # AI evaluation, iteration, observation (23 files)
├── reference/               # Datasets, tokens, CLI, limits, billing (14 files)
├── endpoints/               # Compatible endpoints: Loki, Honeycomb, Splunk (3 files)
├── mpl/                     # Metrics Pipeline Language (3 files)
├── platform-overview/       # Architecture, security (2 files)
├── get-help/                # FAQ (1 file)
└── getting-started-guide/   # Getting started overview (4 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/getting-started-guide/axiom-tour.mdx` |
| Send data (OTel) | `contents/send-data/opentelemetry.mdx` |
| APL query language | `contents/apl/apl-features.mdx` |
| APL string functions | `contents/apl/scalar-functions/string-functions/` |
| APL aggregations | `contents/apl/aggregation-function/` |
| APL tabular operators | `contents/apl/tabular-operators/` |
| REST API reference | `contents/restapi/api-limits.mdx` |
| REST API endpoints | `contents/restapi/endpoints/` |
| Monitors & alerting | `contents/monitor-data/monitors.mdx` |
| Dashboards | `contents/dashboards/create.mdx` |
| Language SDKs | `contents/guides/` |
| Vercel / Next.js | `contents/apps/vercel.mdx`, `contents/send-data/nextjs.mdx` |
| Lambda | `contents/apps/lambda.mdx` |
| Cloudflare Workers | `contents/apps/cloudflare-workers.mdx` |
| MCP server | `contents/console/intelligence/mcp-server.mdx` |
| Troubleshooting | `contents/get-help/faq.mdx` |

## Detailed Structure

### getting-started-guide/ (4 files)

| File | Description |
|------|-------------|
| `axiom-tour.mdx` | Product tour and overview |
| `glossary.mdx` | Key terms and definitions |
| `observability.mdx` | Observability concepts |
| `product-analytics.mdx` | Product analytics use case |

### send-data/ (30 files)

| File | Description |
|------|-------------|
| `methods.mdx` | Overview of ingestion methods |
| `opentelemetry.mdx` | OpenTelemetry ingestion |
| `aws-overview.mdx` | AWS ingestion overview |
| `aws-lambda.mdx` | Lambda log forwarding |
| `aws-firehose.mdx` | Kinesis Firehose ingestion |
| `aws-firelens.mdx` | FireLens log routing |
| `aws-s3.mdx` | S3 log ingestion |
| `aws-iot-rules.mdx` | IoT Rules ingestion |
| `aws-lambda-dot.mdx` | Lambda with .NET |
| `cloudwatch.mdx` | CloudWatch Logs |
| `cloudfront.mdx` | CloudFront logs |
| `kubernetes.mdx` | Kubernetes log forwarding |
| `fluent-bit.mdx` | Fluent Bit configuration |
| `fluentd.mdx` | Fluentd configuration |
| `logstash.mdx` | Logstash configuration |
| `vector.mdx` | Vector configuration |
| `elastic-beats.mdx` | Elastic Beats |
| `elasticsearch-bulk-api.mdx` | Elasticsearch bulk API |
| `nextjs.mdx` | Next.js integration |
| `react.mdx` | React integration |
| `serverless.mdx` | Serverless framework |
| `convex.mdx` | Convex integration |
| `cribl.mdx` | Cribl integration |
| `heroku-log-drains.mdx` | Heroku log drains |
| `loki-multiplexer.mdx` | Loki multiplexer |
| `render.mdx` | Render integration |
| `secure-syslog.mdx` | Secure syslog |
| `syslog-proxy.mdx` | Syslog proxy |
| `tremor.mdx` | Tremor integration |
| `reference-architectures.mdx` | Reference architectures |

### query-data/ (13 files)

| File | Description |
|------|-------------|
| `explore.mdx` | Explore view |
| `query-editor.mdx` | APL query editor |
| `filters.mdx` | Filtering data |
| `visualizations.mdx` | Visualization types |
| `datasets.mdx` | Dataset management |
| `metrics.mdx` | Metrics querying |
| `stream.mdx` | Live stream view |
| `traces.mdx` | Distributed tracing |
| `virtual-fields.mdx` | Virtual fields |
| `views.mdx` | Saved views |
| `query-results.mdx` | Query results |
| `save-export-query.mdx` | Save and export queries |
| `annotate-charts.mdx` | Annotating charts |

### apl/ (356 files total)

#### apl/aggregation-function/ (34 files)

| File | Description |
|------|-------------|
| `count.mdx` | Count records |
| `countif.mdx` | Conditional count |
| `sum.mdx` / `sumif.mdx` | Sum values |
| `avg.mdx` / `avgif.mdx` | Average values |
| `min.mdx` / `max.mdx` | Min/max values |
| `percentile.mdx` / `percentileif.mdx` | Percentile calculations |
| `dcount.mdx` / `dcountif.mdx` | Distinct count |
| `histogram.mdx` | Histogram aggregation |
| `make-list.mdx` / `make-set.mdx` | List/set aggregations |
| `rate.mdx` | Rate calculation |
| `stdev.mdx` / `variance.mdx` | Statistical functions |
| `topk.mdx` | Top K values |
| `spotlight.mdx` | Spotlight aggregation |
| `arg-max.mdx` / `arg-min.mdx` | Arg max/min |
| `phrases.mdx` | Phrase extraction |
| `statistical-functions.mdx` | Statistical overview |

#### apl/scalar-functions/string-functions/ (55 files)

Covers: `strcat`, `split`, `trim`, `replace`, `indexof`, `extract`, `parse_json`, `base64_encode/decode`, `url_encode/decode`, `toupper/tolower`, and many more.

#### apl/scalar-functions/datetime-functions/ (25 files)

Covers: `now`, `ago`, `startofday/week/month`, `datetime_part`, `format_datetime`, `totimespan`, `datepart`, `between`, and more.

#### apl/scalar-functions/mathematical-functions/ (37 files)

Covers: `abs`, `ceiling`, `floor`, `round`, `log`, `exp`, `sqrt`, `pow`, `rand`, `sign`, trigonometric functions, and more.

#### apl/scalar-functions/time-series/ (41 files)

Covers time series analysis functions including `series_add`, `series_stats`, `series_fit_line`, `series_decompose`, and more.

#### apl/scalar-functions/array-functions/ (25 files)

Covers: `array_length`, `array_concat`, `array_slice`, `array_sort_asc`, `array_index_of`, `array_sum`, and more.

#### apl/scalar-functions/ip-functions/ (19 files)

Covers: `ipv4_is_match`, `ipv6_is_match`, `ipv4_compare`, `parse_ipv4`, CIDR functions, and more.

#### apl/scalar-functions/genai-functions/ (18 files)

GenAI-specific scalar functions for AI engineering workflows.

#### apl/tabular-operators/ (30 files)

Covers: `extend`, `project`, `summarize`, `where`, `join`, `limit`, `order`, `distinct`, `count`, `parse`, `top`, `union`, `render`, `externaldata`, and more.

#### apl/scalar-operators/ (8 files)

Covers: `in`, `has`, `contains`, `startswith`, `matches regex`, and in-operator variants.

### restapi/ (95 files)

#### restapi/ (top level, 6 files)

| File | Description |
|------|-------------|
| `api-limits.mdx` | API rate limits |
| `delete-blocks.mdx` | Delete data blocks |

#### restapi/endpoints/ (89 files)

Individual REST endpoint docs including: datasets (CRUD), ingest, query, monitors, notifiers, dashboards, annotations, tokens, organizations, users, groups, and more.

### monitor-data/ (16 files)

| File | Description |
|------|-------------|
| `monitors.mdx` | Monitors overview |
| `configure-monitors.mdx` | Monitor configuration |
| `threshold-monitors.mdx` | Threshold-based monitors |
| `match-monitors.mdx` | Match-based monitors |
| `anomaly-monitors.mdx` | Anomaly detection |
| `monitor-examples.mdx` | Monitor examples |
| `view-monitor-status.mdx` | Monitor status |
| `notifiers-overview.mdx` | Notifiers overview |
| `configure-notifiers.mdx` | Notifier configuration |
| `slack-notifier.mdx` | Slack integration |
| `email-notifier.mdx` | Email notification |
| `pagerduty.mdx` | PagerDuty integration |
| `opsgenie-notifier.mdx` | OpsGenie integration |
| `discord-notifier.mdx` | Discord integration |
| `microsoft-teams-notifier.mdx` | Teams integration |
| `custom-webhook-notifier.mdx` | Webhook notifier |

### dashboards/ (2 files)

| File | Description |
|------|-------------|
| `create.mdx` | Create dashboards |
| `configure.mdx` | Configure dashboards |

### dashboard-elements/ (13 files)

| File | Description |
|------|-------------|
| `create.mdx` | Create elements |
| `configure.mdx` | Configure elements |
| `time-series.mdx` | Time series chart |
| `pie-chart.mdx` | Pie chart |
| `heatmap.mdx` | Heatmap |
| `scatter-plot.mdx` | Scatter plot |
| `log-stream.mdx` | Log stream |
| `table.mdx` | Table element |
| `statistic.mdx` | Statistic display |
| `top-list.mdx` | Top list |
| `monitor-list.mdx` | Monitor list |
| `note.mdx` | Note element |
| `spacer.mdx` | Spacer element |

### guides/ (25 files)

| File | Description |
|------|-------------|
| `go.mdx` | Go SDK guide |
| `python.mdx` | Python SDK guide |
| `javascript.mdx` | JavaScript SDK guide |
| `rust.mdx` | Rust SDK guide |
| `flutter.mdx` | Flutter SDK guide |
| `apex.mdx` | Apex/Salesforce guide |
| `logrus.mdx` | Go Logrus logging |
| `zap.mdx` | Go Zap logging |
| `pino.mdx` | Node.js Pino logging |
| `winston.mdx` | Node.js Winston logging |
| `opentelemetry-nodejs.mdx` | OTel Node.js |
| `opentelemetry-nextjs.mdx` | OTel Next.js |
| `opentelemetry-nuxtjs.mdx` | OTel Nuxt.js |
| `opentelemetry-python.mdx` | OTel Python |
| `opentelemetry-go.mdx` | OTel Go |
| `opentelemetry-java.mdx` | OTel Java |
| `opentelemetry-dotnet.mdx` | OTel .NET |
| `opentelemetry-ruby.mdx` | OTel Ruby |
| `opentelemetry-django.mdx` | OTel Django |
| `opentelemetry-cloudflare-workers.mdx` | OTel Cloudflare Workers |
| `opentelemetry-claude-code.mdx` | OTel Claude Code |
| `send-logs-from-dotnet.mdx` | .NET logging |
| `send-logs-from-laravel.mdx` | Laravel logging |
| `send-logs-from-ruby-on-rails.mdx` | Rails logging |
| `send-logs-from-apache-log4j.mdx` | Log4j logging |

### apps/ (13 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Apps overview |
| `vercel.mdx` | Vercel integration |
| `lambda.mdx` | AWS Lambda |
| `cloudflare-workers.mdx` | Cloudflare Workers |
| `cloudflare-logpush.mdx` | Cloudflare Logpush |
| `netlify.mdx` | Netlify integration |
| `supabase.mdx` | Supabase integration |
| `convex.mdx` | Convex integration |
| `grafana.mdx` | Grafana datasource |
| `hex.mdx` | Hex analytics |
| `tailscale.mdx` | Tailscale integration |
| `terraform.mdx` | Terraform provider |
| `aws-privatelink.mdx` | AWS PrivateLink |

### console/ (12 files)

| File | Description |
|------|-------------|
| `intelligence.mdx` | Intelligence overview |
| `intelligence/ai-agents-overview.mdx` | AI agents |
| `intelligence/mcp-server.mdx` | MCP server setup |
| `intelligence/skills.mdx` | Skills overview |
| `intelligence/spotlight.mdx` | Spotlight AI feature |
| `intelligence/skills/axiom-alerting.mdx` | Alerting skill |
| `intelligence/skills/build-dashboards.mdx` | Dashboard skill |
| `intelligence/skills/control-costs.mdx` | Cost control skill |
| `intelligence/skills/query-metrics.mdx` | Query metrics skill |
| `intelligence/skills/sre.mdx` | SRE skill |
| `intelligence/skills/translate-spl-to-apl.mdx` | SPL to APL skill |
| `intelligence/skills/write-evals.mdx` | Write evaluations skill |

### ai-engineering/ (23 files)

| File | Description |
|------|-------------|
| `concepts.mdx` | AI engineering concepts |
| `create.mdx` | Create AI pipelines |
| `evaluate/overview.mdx` | Evaluation overview |
| `evaluate/run-evaluations.mdx` | Run evaluations |
| `evaluate/write-evaluations.mdx` | Write evaluations |
| `evaluate/scorers.mdx` | Evaluation scorers |
| `evaluate/analyze-results.mdx` | Analyze evaluation results |
| `evaluate/flags-experiments.mdx` | Feature flags and experiments |
| `evaluate/handling-non-determinism.mdx` | Non-determinism handling |
| `evaluate/online-evaluations/` | Online evaluations (2 files) |
| `iterate/overview.mdx` | Iteration overview |
| `iterate/issues.mdx` | Issue tracking |
| `iterate/review.mdx` | Review process |
| `observe/` | Observation features |

### reference/ (14 files)

| File | Description |
|------|-------------|
| `datasets.mdx` | Dataset management |
| `tokens.mdx` | API tokens |
| `cli.mdx` | CLI reference |
| `limits.mdx` | Platform limits |
| `usage-billing.mdx` | Usage and billing |
| `organization-settings.mdx` | Organization settings |
| `settings.mdx` | Account settings |
| `profile.mdx` | User profile |
| `audit-log.mdx` | Audit log |
| `edge-deployments.mdx` | Edge deployments |
| `semantic-conventions.mdx` | OTel semantic conventions |
| `system-requirements.mdx` | System requirements |
| `performance.mdx` | Performance guide |
| `optimize-usage.mdx` | Optimize usage |

### endpoints/ (3 files)

| File | Description |
|------|-------------|
| `loki.mdx` | Loki-compatible endpoint |
| `honeycomb.mdx` | Honeycomb-compatible endpoint |
| `splunk.mdx` | Splunk-compatible endpoint |

### mpl/ (3 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Metrics Pipeline Language intro |
| `migrate-metrics.mdx` | Migrate from Prometheus metrics |
| `sample-queries.mdx` | MPL sample queries |

### platform-overview/ (2 files)

| File | Description |
|------|-------------|
| `architecture.mdx` | Axiom platform architecture |
| `security.mdx` | Security and compliance |

### get-help/ (1 file)

| File | Description |
|------|-------------|
| `faq.mdx` | Frequently asked questions |
