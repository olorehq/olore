# Sentry Table of Contents

## Directory Map

```
contents/
├── account/                # User account settings (3 files)
├── ai/                     # Sentry AI features (Seer, MCP, Autofix) (5 files)
├── api/                    # Web API reference and auth (8 files)
├── cli/                    # sentry-cli usage (10 files)
├── concepts/               # Core concepts: data management, search, key terms, migration (50 files)
├── get-started/            # Onboarding and product setup (9 files)
├── integrations/           # Third-party integrations (source control, alerting, issue trackers, etc.) (108 files)
├── organization/           # Org settings, auth, relay, quotas, membership (14 files)
├── platforms/              # SDK docs per platform/language/framework (1896 files)
├── pricing/                # Plans, billing, quotas, spike protection (16 files)
├── product/                # Product feature guides: issues, alerts, tracing, replay, insights, dashboards (187 files)
├── security-legal-pii/     # Security, privacy, PII scrubbing, legal (18 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/index.mdx` |
| Install an SDK | `contents/platforms/index.mdx` |
| JavaScript SDK | `contents/platforms/javascript/common` |
| Next.js SDK | `contents/platforms/javascript/guides/nextjs/index.mdx` |
| Python SDK | `contents/platforms/python/index.mdx` |
| Issues | `contents/product/issues/index.mdx` |
| Alerts and monitors | `contents/product/monitors-and-alerts/index.mdx` |
| Session replay | `contents/product/session-replay` |
| Web API | `contents/api/index.mdx` |
| sentry-cli | `contents/cli/index.mdx` |
| Integrations | `contents/integrations/index.mdx` |
| PII / data scrubbing | `contents/security-legal-pii/scrubbing` |

## Detailed Structure

### account/ (1 files)

| File | Description |
|------|-------------|
| `account/index.mdx` | Learn about Sentry's user settings and auth tokens. |

### account/auth-tokens/ (1 files)

| File | Description |
|------|-------------|
| `account/auth-tokens/index.mdx` | Learn about the different kinds of Auth Tokens Sentry provides, and when to use which. |

### account/user-settings/ (1 files)

| File | Description |
|------|-------------|
| `account/user-settings/index.mdx` | Learn how to customize your User Settings for a more personalized Sentry experience. |

### ai/ (2 files)

| File | Description |
|------|-------------|
| `ai/dotagents.mdx` | A package manager for .agents directories. Declare agent skill dependencies in agents.toml, lock versions for reproducibility, and share ski |
| `ai/index.mdx` | Connect Sentry to your AI coding assistants and workflows. Install the agent plugin, use the MCP server, or add monitoring to your AI applic |

### ai/agent-plugin/ (1 files)

| File | Description |
|------|-------------|
| `ai/agent-plugin/index.mdx` | Install the Sentry plugin for your AI coding assistant so it can set up Sentry, find and fix production issues, and configure monitoring, al |

### ai/agent-setup/ (2 files)

| File | Description |
|------|-------------|
| `ai/agent-setup/get-started.mdx` | Instructions for an AI coding agent setting up Sentry in a project that does not use it yet: reach Sentry through the Sentry CLI, the MCP se |
| `ai/agent-setup/instrument.mdx` | Instructions for an AI coding agent adding a Sentry feature, such as tracing, logs, Session Replay, metrics, crons, uptime, or AI agent moni |

### api/ (6 files)

| File | Description |
|------|-------------|
| `api/auth.mdx` | API Authentication |
| `api/index.mdx` | API Reference |
| `api/pagination.mdx` | Paginating Results |
| `api/permissions.mdx` | Permissions & Scopes |
| `api/ratelimits.mdx` | Rate Limits |
| `api/requests.mdx` | Requests |

### api/guides/ (2 files)

| File | Description |
|------|-------------|
| `api/guides/create-auth-token.mdx` | Tutorial: Create a Sentry Authentication Token |
| `api/guides/teams-tutorial.mdx` | Tutorial: Create and List Teams with the Sentry API |

### cli/ (10 files)

| File | Description |
|------|-------------|
| `cli/code-mappings.mdx` | Upload code mappings to Sentry via the CLI. Code mappings link stack trace paths to source code paths in your repository, enabling source co |
| `cli/configuration.mdx` | Learn about the functionality of Sentry’s command line interface, including installation, configuration, and authentication. |
| `cli/crons.mdx` | Follow this guide to set up and manage monitors using the Sentry CLI. |
| `cli/dif.mdx` | Debug information files allow Sentry to extract stack traces and provide more information about crash reports for most compiled platforms. S |
| `cli/index.mdx` | Learn how to use the `sentry-cli` command line executable. |
| `cli/installation.mdx` | Learn about the different methods available to install `sentry-cli`. |
| `cli/logs.mdx` | Learn how to view and stream logs using the Sentry CLI. |
| `cli/releases.mdx` | Sentry's command line interface can be used for release management. The CLI allows you to create, edit and delete releases as well as upload |
| `cli/send-event.mdx` | Learn how Sentry's command line interface can be used for sending events. |
| `cli/snapshots.mdx` | Upload snapshot images to Sentry with sentry-cli for visual diffing and GitHub status checks. |

### concepts/ (1 files)

| File | Description |
|------|-------------|
| `concepts/index.mdx` | Learn the basic concepts of Sentry such as searchable properties and data management settings. |

### concepts/data-management/ (2 files)

| File | Description |
|------|-------------|
| `concepts/data-management/index.mdx` | Learn more about managing data using the Settings for your project and organization. Server-side data management options include issue group |
| `concepts/data-management/size-limits.mdx` | Learn about the size limits for events and attachments, and how to avoid exceeding them. |

### concepts/data-management/event-grouping/ (3 files)

| File | Description |
|------|-------------|
| `concepts/data-management/event-grouping/fingerprint-rules.mdx` | Learn about fingerprint rules, matchers for fingerprinting, how to combine matchers, and using variables for fingerprinting. |
| `concepts/data-management/event-grouping/index.mdx` | Learn about fingerprinting, Sentry's default error grouping algorithms, and other ways to customize how events are grouped into issues. |
| `concepts/data-management/event-grouping/stack-trace-rules.mdx` | Learn how to use stack trace rules to group incoming events based on matchers. |

### concepts/data-management/event-grouping/merging-issues/ (1 files)

| File | Description |
|------|-------------|
| `concepts/data-management/event-grouping/merging-issues/index.mdx` | Learn about merging similar issues that aren't automatically grouped. |

### concepts/data-management/filtering/ (1 files)

| File | Description |
|------|-------------|
| `concepts/data-management/filtering/index.mdx` | Learn about the different methods for filtering data in your project. |

### concepts/key-terms/ (5 files)

| File | Description |
|------|-------------|
| `concepts/key-terms/dsn-explainer.mdx` | A Data Source Name (DSN) tells Sentry where to send events so they’re associated with the correct project. Learn more about DSN structure an |
| `concepts/key-terms/extrapolation.mdx` | Learn how extrapolation provides accurate metrics from sampled data so you can trust your dashboards and alerts even when you're not capturi |
| `concepts/key-terms/index.mdx` | Learn about important concepts that are essential to using Sentry. |
| `concepts/key-terms/key-terms.mdx` | A few key terms and features to help you get a better understanding of Sentry. |
| `concepts/key-terms/sample-rates.mdx` | Learn how to manage the amount of data you send and are billed for in Sentry by adjusting the sample rates of various Sentry products includ |

### concepts/key-terms/agent-tracing/ (1 files)

| File | Description |
|------|-------------|
| `concepts/key-terms/agent-tracing/index.mdx` | Learn about how Sentry's agent tracing features help you track and understand how your agents behave across agent runs, tool calls, and hand |

### concepts/key-terms/enrich-data/ (1 files)

| File | Description |
|------|-------------|
| `concepts/key-terms/enrich-data/index.mdx` | Learn about event data and how to configure Sentry workflows and tools to fine-tune the data sent to Sentry. |

### concepts/key-terms/environments/ (1 files)

| File | Description |
|------|-------------|
| `concepts/key-terms/environments/index.mdx` | Learn how environments can help you filter issues, releases, and user feedback in Sentry. |

### concepts/key-terms/tracing/ (4 files)

| File | Description |
|------|-------------|
| `concepts/key-terms/tracing/distributed-tracing.mdx` | With distributed tracing, you can track software performance and measure throughput & latency, while seeing the impact of errors across mult |
| `concepts/key-terms/tracing/event-detail.mdx` | event-detail.mdx |
| `concepts/key-terms/tracing/index.mdx` | Learn more about the tracing features Sentry offers to help you track your software performance across multiple systems. |
| `concepts/key-terms/tracing/trace-view.mdx` | Learn more about the Trace View page, where you can drill down into the details of a single trace, allowing you to debug slow services, iden |

### concepts/migration/ (1 files)

| File | Description |
|------|-------------|
| `concepts/migration/index.mdx` | Learn more about the reasons to move to Sentry's SaaS solution, which for many customers is less expensive to maintain, and easier to scale  |

### concepts/otlp/ (2 files)

| File | Description |
|------|-------------|
| `concepts/otlp/index.mdx` | Learn how to send OpenTelemetry traces and logs to Sentry. |
| `concepts/otlp/sentry-with-otel.mdx` | Learn how to link Sentry SDK traces with OpenTelemetry instrumented services. |

### concepts/otlp/direct/ (4 files)

| File | Description |
|------|-------------|
| `concepts/otlp/direct/claude-platform.mdx` | Send OpenTelemetry traces from Claude Managed Agents and the Claude Messages API to Sentry, with no code changes. |
| `concepts/otlp/direct/index.mdx` | Send OpenTelemetry traces and logs directly to Sentry from your OTel SDK. |
| `concepts/otlp/direct/logs.mdx` | Send OpenTelemetry logs directly to Sentry without a Sentry SDK. |
| `concepts/otlp/direct/traces.mdx` | Send OpenTelemetry traces directly to Sentry without a Sentry SDK. |

### concepts/otlp/forwarding/ (1 files)

| File | Description |
|------|-------------|
| `concepts/otlp/forwarding/index.mdx` | Forward logs and traces to Sentry from various sources using the OpenTelemetry Collector, Vector, or Fluent Bit. |

### concepts/otlp/forwarding/pipelines/ (5 files)

| File | Description |
|------|-------------|
| `concepts/otlp/forwarding/pipelines/collector.mdx` | Learn how to set up the OpenTelemetry Collector to forward logs and traces data to Sentry. |
| `concepts/otlp/forwarding/pipelines/fluentbit.mdx` | Learn how to set up Fluent Bit's OpenTelemetry output plugin to forward logs and traces data to Sentry. |
| `concepts/otlp/forwarding/pipelines/index.mdx` | Pipelines for forwarding telemetry data to Sentry. |
| `concepts/otlp/forwarding/pipelines/sentry-exporter.mdx` | Route OpenTelemetry traces and logs from multiple services to different Sentry projects through a single collector instance. |
| `concepts/otlp/forwarding/pipelines/vector.mdx` | Learn how to set up Vector to forward logs to Sentry via OpenTelemetry. |

### concepts/otlp/forwarding/sources/ (6 files)

| File | Description |
|------|-------------|
| `concepts/otlp/forwarding/sources/aws-cloudwatch.mdx` | Learn how to forward AWS CloudWatch logs to Sentry via the OpenTelemetry Protocol (OTLP). |
| `concepts/otlp/forwarding/sources/index.mdx` | Guides for forwarding data from specific sources to Sentry using the OpenTelemetry Collector. |
| `concepts/otlp/forwarding/sources/kafka.mdx` | Learn how to forward traces and logs from Kafka to Sentry via the OpenTelemetry Protocol (OTLP). |
| `concepts/otlp/forwarding/sources/nginx.mdx` | Learn how to forward Nginx access logs to Sentry via the OpenTelemetry Protocol (OTLP). |
| `concepts/otlp/forwarding/sources/syslog.mdx` | Learn how to forward syslog messages to Sentry via the OpenTelemetry Protocol (OTLP). |
| `concepts/otlp/forwarding/sources/windows-events.mdx` | Learn how to forward Windows Event Logs to Sentry via the OpenTelemetry Protocol (OTLP). |

### concepts/search/ (2 files)

| File | Description |
|------|-------------|
| `concepts/search/index.mdx` | Learn more about how to search in Sentry, including the correct query syntax, searchable properties, and custom tags. |
| `concepts/search/saved-searches.mdx` | Learn more about default, recommended, and saved searches. |

### concepts/search/searchable-properties/ (9 files)

| File | Description |
|------|-------------|
| `concepts/search/searchable-properties/events.mdx` | Learn more about searchable event properties. |
| `concepts/search/searchable-properties/index.mdx` | Learn more about searchable properties. |
| `concepts/search/searchable-properties/issues.mdx` | Learn more about searchable issue properties. |
| `concepts/search/searchable-properties/logs.mdx` | Learn more about searchable log properties. |
| `concepts/search/searchable-properties/metrics.mdx` | Learn more about searchable application metric properties. |
| `concepts/search/searchable-properties/releases.mdx` | Learn more about searchable release properties. |
| `concepts/search/searchable-properties/session-replay.mdx` | Learn more about searchable session replay properties. |
| `concepts/search/searchable-properties/spans.mdx` | Learn more about searchable span properties. |
| `concepts/search/searchable-properties/user-feedback.mdx` | Learn more about searchable user feedback properties. |

### get-started/ (1 files)

| File | Description |
|------|-------------|
| `get-started/index.mdx` | Set up Sentry and configure the key features that help you find and fix problems faster. |

### get-started/cookbook/ (1 files)

| File | Description |
|------|-------------|
| `get-started/cookbook/index.mdx` | Step-by-step recipes for real Sentry workflows: instrument agents, debug with MCP, triage from Slack, and more. |

### get-started/guides/ (7 files)

| File | Description |
|------|-------------|
| `get-started/guides/custom-spans.mdx` | Add custom instrumentation to Sentry for visibility beyond auto-instrumentation and set up alerts. |
| `get-started/guides/index.mdx` | Practical guidance on what to instrument, what to query, and how to get value from Sentry after setup. |
| `get-started/guides/issues-errors.mdx` | Practical guidance on what errors to catch, how to search issues in Sentry, and when to set alerts. |
| `get-started/guides/logs.mdx` | Practical guidance on what to log, how to search logs, and when to set alerts. |
| `get-started/guides/metrics.mdx` | Practical guidance on what metrics to track, how to explore them, and when to set alerts. |
| `get-started/guides/querying-traces.mdx` | Find performance issues using data Sentry captures automatically and set up alerts. |
| `get-started/guides/session-replay.mdx` | Practical guidance on debugging errors and finding UX issues with Session Replay. |

### integrations/ (2 files)

| File | Description |
|------|-------------|
| `integrations/index.mdx` | Learn more about the wide variety of apps and services integrated with Sentry and how you can add your own Sentry integration. |
| `integrations/troubleshooting.mdx` | Learn more about troubleshooting and repairing your integrations. |

### integrations/cloud-monitoring/ (1 files)

| File | Description |
|------|-------------|
| `integrations/cloud-monitoring/index.mdx` | Learn more about Sentry's cloud monitoring integrations. |

### integrations/cloud-monitoring/aws-lambda/ (2 files)

| File | Description |
|------|-------------|
| `integrations/cloud-monitoring/aws-lambda/how-it-works.mdx` | Understand how the Sentry AWS Lambda integration works under the hood. |
| `integrations/cloud-monitoring/aws-lambda/index.mdx` | Learn more about Sentry's AWS Lambda integration and how you can automatically instrument your Node or Python Lambda functions with Sentry w |

### integrations/cloud-monitoring/gcp-cloud-run/ (1 files)

| File | Description |
|------|-------------|
| `integrations/cloud-monitoring/gcp-cloud-run/index.mdx` | Learn how to use Sentry to monitor errors and performance in your Google Cloud Run applications. |

### integrations/coding-agents/ (1 files)

| File | Description |
|------|-------------|
| `integrations/coding-agents/index.mdx` | Connect AI coding agents to Sentry to automatically debug and fix issues using Seer's root cause analysis. |

### integrations/coding-agents/claude/ (1 files)

| File | Description |
|------|-------------|
| `integrations/coding-agents/claude/index.mdx` | Set up the Claude Agent integration to send Sentry issues directly to Claude for automated root cause analysis and fix generation. |

### integrations/coding-agents/copilot/ (1 files)

| File | Description |
|------|-------------|
| `integrations/coding-agents/copilot/index.mdx` | Set up the GitHub Copilot integration to send Sentry issues directly to Copilot agents for automated root cause analysis and fix generation. |

### integrations/coding-agents/cursor/ (1 files)

| File | Description |
|------|-------------|
| `integrations/coding-agents/cursor/index.mdx` | The Cursor Agent integration allows you to launch Cursor Cloud Agents directly from Seer to help debug, fix issues, and create pull requests |

### integrations/compliance/ (1 files)

| File | Description |
|------|-------------|
| `integrations/compliance/index.mdx` | Learn more about Sentry's compliance integrations. |

### integrations/compliance/cloudeagle/ (1 files)

| File | Description |
|------|-------------|
| `integrations/compliance/cloudeagle/index.mdx` | Learn about Sentry's Cloudeagle integration, which helps users optimize their User Licenses and support compliance. |

### integrations/compliance/elba/ (1 files)

| File | Description |
|------|-------------|
| `integrations/compliance/elba/index.mdx` | Learn about Sentry's Elba integration. |

### integrations/compliance/truto/ (1 files)

| File | Description |
|------|-------------|
| `integrations/compliance/truto/index.mdx` | Learn about Sentry's Truto integration. |

### integrations/compliance/vanta/ (1 files)

| File | Description |
|------|-------------|
| `integrations/compliance/vanta/index.mdx` | Learn about Sentry's Vanta integration and how it helps automate security compliance. |

### integrations/compliance/vanta-eu/ (1 files)

| File | Description |
|------|-------------|
| `integrations/compliance/vanta-eu/index.mdx` | Learn about Sentry's Vanta EU integration and how it helps automate security compliance. |

### integrations/data-forwarding/ (1 files)

| File | Description |
|------|-------------|
| `integrations/data-forwarding/index.mdx` | Learn about forwarding processed events to third-party providers. |

### integrations/data-forwarding/amazon-sqs/ (1 files)

| File | Description |
|------|-------------|
| `integrations/data-forwarding/amazon-sqs/index.mdx` | Learn about Sentry's Amazon SQS data forwarder, which enables creating custom data pipelines with Sentry errors through AWS. |

### integrations/data-forwarding/grafana/ (1 files)

| File | Description |
|------|-------------|
| `integrations/data-forwarding/grafana/index.mdx` | Learn about Sentry's Grafana integration, which allows you to query and visualize Sentry data within Grafana. |

### integrations/data-forwarding/segment/ (1 files)

| File | Description |
|------|-------------|
| `integrations/data-forwarding/segment/index.mdx` | Learn about Sentry's Segment data forwarder, which enables tracking Sentry errors as Segment events. |

### integrations/data-forwarding/splunk/ (1 files)

| File | Description |
|------|-------------|
| `integrations/data-forwarding/splunk/index.mdx` | Learn about Sentry's Splunk data forwarder, which enables collecting Sentry Errors in your Splunk Cloud instance through an HTTP Event Colle |

### integrations/debugging/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/index.mdx` | Learn more about Sentry's debugging integrations. |

### integrations/debugging/apigene/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/apigene/index.mdx` | Learn about Sentry's Apigene integration, which uses ChatGPT to focus on simplifying the process of issue management and troubleshooting. |

### integrations/debugging/codecomet/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/codecomet/index.mdx` | Learn about Sentry's CodeComet integration |

### integrations/debugging/corelayer/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/corelayer/index.mdx` | Learn about Sentry's Corelayer integration, which helps users debug, fix, and prevent issues, with full-stack context. |

### integrations/debugging/datadog-seer/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/datadog-seer/index.mdx` | Learn how adding Datadog data to Seer's context helps you debug and fix issues. |

### integrations/debugging/foamai/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/foamai/index.mdx` | Learn about Sentry's Foam integration, which reads Issues and suggests pull request fixes. |

### integrations/debugging/gcp-seer/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/gcp-seer/index.mdx` | Learn how adding Google Cloud Platform data to Seer's context helps you debug and fix issues. |

### integrations/debugging/grafana-seer/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/grafana-seer/index.mdx` | Learn how adding Grafana data to Seer's context helps you debug and fix issues. |

### integrations/debugging/logicstar/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/logicstar/index.mdx` | Learn about Sentry's Logicstar integration. |

### integrations/debugging/rookout/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/rookout/index.mdx` | Learn more about Sentry's Rookout integration and how it can help you debug an issue. |

### integrations/debugging/sourcery/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/sourcery/index.mdx` | Learn about Sentry's Sourcery integration, which can be used to generate a pull request to fix issues and provide instructions on how it wil |

### integrations/debugging/tembo/ (1 files)

| File | Description |
|------|-------------|
| `integrations/debugging/tembo/index.mdx` | Learn about Sentry's Tembo integration |

### integrations/deployment/ (1 files)

| File | Description |
|------|-------------|
| `integrations/deployment/index.mdx` | Learn more about Sentry's deployment integrations. |

### integrations/deployment/expo/ (1 files)

| File | Description |
|------|-------------|
| `integrations/deployment/expo/index.mdx` | Learn how to integrate Sentry with Expo Application Services (EAS) to view crash reports and session replays for your Expo app deployments. |

### integrations/deployment/vercel/ (1 files)

| File | Description |
|------|-------------|
| `integrations/deployment/vercel/index.mdx` | Learn more about Sentry's Vercel integrations and how you can sync release deployments and source map uploads, as well as the Vercel Marketp |

### integrations/feature-flag/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/index.mdx` | Learn more about Sentry's feature flag integrations. |

### integrations/feature-flag/flagsmith/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/flagsmith/index.mdx` | Learn about Sentry's Flagsmith integrations. |

### integrations/feature-flag/generic/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/generic/index.mdx` | Learn about Sentry's generic feature-flag integrations. |

### integrations/feature-flag/keyflow/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/keyflow/index.mdx` | Learn about Sentry's Keyflow integration, which helps users seamlessly connect KeyFlow with Sentry to automate issues management. |

### integrations/feature-flag/launchdarkly/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/launchdarkly/index.mdx` | Learn about Sentry's LaunchDarkly integrations. |

### integrations/feature-flag/split/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/split/index.mdx` | Learn more about Sentry's Split integration, which allows you to use Sentry data in your Split analyses. |

### integrations/feature-flag/statsig/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/statsig/index.mdx` | Learn about Sentry's Statsig integrations. |

### integrations/feature-flag/unleash/ (1 files)

| File | Description |
|------|-------------|
| `integrations/feature-flag/unleash/index.mdx` | Learn about Sentry's Unleash integrations. |

### integrations/integration-platform/ (4 files)

| File | Description |
|------|-------------|
| `integrations/integration-platform/index.mdx` | Learn how to create integrations so that external services can interact with Sentry. |
| `integrations/integration-platform/internal-integration.mdx` | Learn more about internal integrations, which are custom-made for your organization. |
| `integrations/integration-platform/public-integration.mdx` | Learn more about public integrations, which are available to all Sentry users. |
| `integrations/integration-platform/webhooks.mdx` | Learn more about Sentry's integration platform webhooks and how they allow your service to receive requests about specific resources, such a |

### integrations/integration-platform/ui-components/ (5 files)

| File | Description |
|------|-------------|
| `integrations/integration-platform/ui-components/alert-action.mdx` | Learn about the alert action UI component. |
| `integrations/integration-platform/ui-components/formfield.mdx` | Learn about FormField components. |
| `integrations/integration-platform/ui-components/index.mdx` | Learn more about Sentry's integration platform User Interface (UI) components. |
| `integrations/integration-platform/ui-components/issue-link.mdx` | Learn about the issue link UI component. |
| `integrations/integration-platform/ui-components/stacktrace-link.mdx` | Learn about the stack trace link UI component. |

### integrations/integration-platform/webhooks/ (9 files)

| File | Description |
|------|-------------|
| `integrations/integration-platform/webhooks/activity-alerts.mdx` | When alerts are set to trigger based on issue activity, these are the webhooks you'll receive. |
| `integrations/integration-platform/webhooks/comments.mdx` | Learn more about Sentry's integration platform comment webhooks. |
| `integrations/integration-platform/webhooks/errors.mdx` | Learn more about Sentry's integration platform error webhooks. |
| `integrations/integration-platform/webhooks/installation.mdx` | Learn more about Sentry's integration platform installation and uninstallation webhooks. |
| `integrations/integration-platform/webhooks/issue-alerts.mdx` | Learn more about Sentry's integration platform issue alert webhooks. |
| `integrations/integration-platform/webhooks/issues.mdx` | Learn more about Sentry's integration platform issue webhooks. |
| `integrations/integration-platform/webhooks/metric-alerts.mdx` | Learn more about Sentry's integration platform metric alert webhooks. |
| `integrations/integration-platform/webhooks/preprod-artifacts.mdx` | Preprod artifact webhooks notify your integration when mobile build size analysis or build distribution processing completes. |
| `integrations/integration-platform/webhooks/seer.mdx` | Learn more about Sentry's integration platform Seer webhooks for Issue Fix analysis notifications. |

### integrations/issue-tracking/ (2 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/index.mdx` | Learn more about Sentry's issue tracking integrations. |
| `integrations/issue-tracking/sourcegraph.mdx` | Learn about Sentry's Sourcegraph integration. |

### integrations/issue-tracking/bugsniff/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/bugsniff/index.mdx` | Learn about Sentry's Bug Sniff integration. |

### integrations/issue-tracking/clickup/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/clickup/index.mdx` | Learn more about Sentry's ClickUp integration, which allows you to track and link Sentry issues in ClickUp. |

### integrations/issue-tracking/factory/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/factory/index.mdx` | Learn about Sentry's Factory integration and how it uses AI to help fix issues. |

### integrations/issue-tracking/goast/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/goast/index.mdx` | Goast’s Sentry integration brings you an automated platform for software development to automate away tedious and mundane tasks. It hooks in |

### integrations/issue-tracking/height/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/height/index.mdx` | Learn more about Sentry's Height integration and how you can effortlessly create new Height tasks from Sentry and link Sentry issues to exis |

### integrations/issue-tracking/incidentio/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/incidentio/index.mdx` | Learn more about Sentry's incident.io integration and how you can easily attach Sentry issues to ongoing incidents. |

### integrations/issue-tracking/jira/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/jira/index.mdx` | Learn more about Sentry's Jira integration and how it can help track and resolve bugs faster by connecting errors from Sentry with Jira issu |

### integrations/issue-tracking/kitemaker/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/kitemaker/index.mdx` | Kitemaker’s integration with Sentry allows you to automatically connect issues in Sentry with work items in Kitemaker. |

### integrations/issue-tracking/linear/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/linear/index.mdx` | Learn more about Sentry's Linear integration, which streamlines issue creation and linking. |

### integrations/issue-tracking/makeplane/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/makeplane/index.mdx` | Learn about Sentry's Plane integration. |

### integrations/issue-tracking/sentry-linear-agent/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/sentry-linear-agent/index.mdx` | Learn more about the Sentry Agent for Linear, which allows users to have Seer create Root Cause Analysis and Issue Fixes for Sentry issues i |

### integrations/issue-tracking/shortcut/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/shortcut/index.mdx` | Learn more about Sentry's Shortcut integration and how it can create a more efficient workflow by linking your Sentry Issues with your Short |

### integrations/issue-tracking/starsling/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/starsling/index.mdx` | Learn about Sentry's Starsling integration. |

### integrations/issue-tracking/teamcamp/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/teamcamp/index.mdx` | Learn about Sentry's Teamcamp integration and how it can be your all-in-one project management application. |

### integrations/issue-tracking/teamwork/ (1 files)

| File | Description |
|------|-------------|
| `integrations/issue-tracking/teamwork/index.mdx` | Learn more about Sentry's Teamwork integration and how you can turn Sentry issues into Teamwork tasks to streamline team collaboration and y |

### integrations/notification-incidents/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/index.mdx` | Learn more about Sentry's notification and incidents integrations. |

### integrations/notification-incidents/cased/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/cased/index.mdx` | Learn about Sentry's Cased integration. |

### integrations/notification-incidents/discord/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/discord/index.mdx` | Learn more about Sentry's Discord integration, which allows you to manage Sentry issues in Discord. |

### integrations/notification-incidents/glueai/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/glueai/index.mdx` | Learn about Sentry's Glue.ai integration |

### integrations/notification-incidents/msteams/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/msteams/index.mdx` | Learn more about Sentry's Microsoft Teams integration and how you can get alerts that let you triage issues directly in your Teams channels. |

### integrations/notification-incidents/opsgenie/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/opsgenie/index.mdx` | Learn more about Sentry's Opsgenie integration, which allows you to send alerts to Opsgenie teams. |

### integrations/notification-incidents/pagerduty/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/pagerduty/index.mdx` | Learn more about Sentry's PagerDuty integration and how you can trigger PagerDuty incidents with Sentry alerts. |

### integrations/notification-incidents/pagertree/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/pagertree/index.mdx` | Learn about Sentry's PagerTree integration, which can be used to send SMS, voice, push, email, and Slack notifications for Sentry issues and |

### integrations/notification-incidents/rootly/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/rootly/index.mdx` | Learn about Sentry's Rootly integration and how it creates incidents from Sentry Alerts. |

### integrations/notification-incidents/signl4/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/signl4/index.mdx` | Learn about Sentry's SIGNL4 integration, which can be used to notify responsible teams about events in Sentry via app push, SMS text, and vo |

### integrations/notification-incidents/slack/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/slack/index.mdx` | Learn more about Sentry's Slack integration and how you can receive alerts, debug issues, and chat with Seer directly from Slack. |

### integrations/notification-incidents/spikesh/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/spikesh/index.mdx` | Learn about Sentry's Spike.sh integration and how it creates incidents from Sentry Alerts. |

### integrations/notification-incidents/telegram-alerts-bot/ (1 files)

| File | Description |
|------|-------------|
| `integrations/notification-incidents/telegram-alerts-bot/index.mdx` | Learn about Sentry's Telegram integration, which allows users to configure Alerts to receive notifications directly in Telegram messenger ch |

### integrations/session-replay/ (5 files)

| File | Description |
|------|-------------|
| `integrations/session-replay/betterbugs.mdx` | Learn about Sentry's BetterBugs integration. |
| `integrations/session-replay/fullstory.mdx` | Learn about Sentry's FullStory integration. |
| `integrations/session-replay/index.mdx` | Learn more about third-party session replay integrations. |
| `integrations/session-replay/jam.mdx` | Learn about Sentry's Jam integration. |
| `integrations/session-replay/openreplay.mdx` | Learn about Sentry's OpenReplay integration. |

### integrations/session-replay/atlas/ (1 files)

| File | Description |
|------|-------------|
| `integrations/session-replay/atlas/index.mdx` | Learn more about Sentry's Atlas integration and how you can connect Atlas sessions directly to Sentry issues |

### integrations/source-code-mgmt/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/index.mdx` | Learn more about Sentry's source code management integrations. |

### integrations/source-code-mgmt/azure-devops/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/azure-devops/index.mdx` | Learn more about Sentry's Azure DevOps integration and how it can track and resolve bugs faster by using data from your Azure DevOps commits |

### integrations/source-code-mgmt/bitbucket/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/bitbucket/index.mdx` | Learn more about Sentry's Bitbucket integration and how it can track and resolve bugs faster by using data from your Bitbucket commits. |

### integrations/source-code-mgmt/code-mappings/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/code-mappings/index.mdx` | Map file paths in your stack traces to files in your repository to power stack trace linking, suspect commits, SCM source context, and Code  |

### integrations/source-code-mgmt/continuedev/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/continuedev/index.mdx` | Learn about Sentry's Continue integration, which helps users automatically triage and solve Sentry issues with cloud agents |

### integrations/source-code-mgmt/cursor-origin/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/cursor-origin/index.mdx` | Connect Cursor Origin to Sentry to link stack traces to source code, import CODEOWNERS, track release commits, resolve issues from commits a |

### integrations/source-code-mgmt/gitlab/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/gitlab/index.mdx` | Learn more about Sentry’s GitLab integration and how it helps you track and resolve bugs faster by using data from your GitLab commits. |

### integrations/source-code-mgmt/perforce/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/perforce/index.mdx` | Learn more about Sentry's Perforce integration and how it can track and resolve bugs faster by using data from your Perforce changelists. |

### integrations/source-code-mgmt/source-context/ (1 files)

| File | Description |
|------|-------------|
| `integrations/source-code-mgmt/source-context/index.mdx` | Display the lines of source code surrounding each frame of a stack trace by fetching them on demand from your connected SCM integration. |

### integrations/third-party-integrations/ (1 files)

| File | Description |
|------|-------------|
| `integrations/third-party-integrations/index.mdx` | Browse integrations built by third-party developers on the Sentry Integration Platform. |

### organization/ (1 files)

| File | Description |
|------|-------------|
| `organization/index.mdx` | Learn how to configure your organization's Sentry account, including 2FA authentication, user management, and data storage location. |

### organization/authentication/ (1 files)

| File | Description |
|------|-------------|
| `organization/authentication/index.mdx` | Learn how to configure authentication for your Sentry organization, including single sign-on and two-factor authentication. |

### organization/authentication/sso/ (4 files)

| File | Description |
|------|-------------|
| `organization/authentication/sso/azure-sso.mdx` | Set up Azure Active Directory single sign-on (SSO) on Sentry. |
| `organization/authentication/sso/index.mdx` | Learn about single sign-on (SSO) and how it helps manage your organization. |
| `organization/authentication/sso/ping-sso.mdx` | Set up Ping Identity Single Sign-On (SSO) on Sentry. |
| `organization/authentication/sso/saml2.mdx` | Learn about how to integrate the Custom SAML Provider. |

### organization/authentication/sso/okta-sso/ (2 files)

| File | Description |
|------|-------------|
| `organization/authentication/sso/okta-sso/index.mdx` | Set up Okta single sign-on (SSO) on Sentry. |
| `organization/authentication/sso/okta-sso/okta-scim.mdx` | Set up Okta's SCIM Integration for Member and Team Provisioning |

### organization/authentication/two-factor-authentication/ (1 files)

| File | Description |
|------|-------------|
| `organization/authentication/two-factor-authentication/index.mdx` | Learn about adding two-factor authentication (2FA) across your organization. |

### organization/data-storage-location/ (1 files)

| File | Description |
|------|-------------|
| `organization/data-storage-location/index.mdx` | Choose where to store your data in the US or the EU. |

### organization/dynamic-sampling/ (1 files)

| File | Description |
|------|-------------|
| `organization/dynamic-sampling/index.mdx` | Learn how to prioritize important events and increase visibility in lower-volume projects with Dynamic Sampling. |

### organization/early-adopter-features/ (1 files)

| File | Description |
|------|-------------|
| `organization/early-adopter-features/index.mdx` | Learn which features are currently in the early adopter phase. |

### organization/getting-started/ (1 files)

| File | Description |
|------|-------------|
| `organization/getting-started/index.mdx` | Learn how to set up a Sentry organization account, so you can start fixing errors right away. |

### organization/membership/ (1 files)

| File | Description |
|------|-------------|
| `organization/membership/index.mdx` | Learn about the different organization-level and team-level roles and how they affect permissions in Sentry. |

### pricing/ (2 files)

| File | Description |
|------|-------------|
| `pricing/index.mdx` | Learn about pricing, managing volume, and the different Sentry plans. |
| `pricing/legacy-pricing.mdx` | Learn about our pricing structure, how to manage your spend, and the different Sentry plans. |

### pricing/quotas/ (14 files)

| File | Description |
|------|-------------|
| `pricing/quotas/index.mdx` | Learn about what counts towards your quota and how to manage your quota. |
| `pricing/quotas/legacy-manage-transaction-quota.mdx` | Learn how to use the tools Sentry provides to control the type and amount of performance units that you pay for. |
| `pricing/quotas/manage-application-metrics-quota.mdx` | Understand where and how to manage your Application Metrics quota, see how much each project is consuming, and learn how to increase or decr |
| `pricing/quotas/manage-attachments-quota.mdx` | Learn how to use the tools Sentry provides to control the type and amount of attachments that you pay for. |
| `pricing/quotas/manage-continuous-profile-hours.mdx` | Learn how to use Sentry's tools to manage the amount of Continuous Profile hours you pay for. |
| `pricing/quotas/manage-cron-monitors.mdx` | Learn how to manage the number of cron and uptime monitors you pay for and adjust your pay-as-you-go budget. |
| `pricing/quotas/manage-event-stream-guide.mdx` | Learn how to use the tools Sentry provides to control the type and amount of errors that you pay for. |
| `pricing/quotas/manage-logs-quota.mdx` | Understand where and how to manage your Logs quota, see how much each project is consuming, and learn how to increase or decrease your spend |
| `pricing/quotas/manage-replay-quota.mdx` | Learn how to use Sentry's tools to manage the amount of session replays you pay for. |
| `pricing/quotas/manage-seer-budget.mdx` | Understand where and how your Seer spend is affected. |
| `pricing/quotas/manage-transaction-quota.mdx` | Learn how to use the tools Sentry provides to control your span quota. |
| `pricing/quotas/manage-ui-profile-hours.mdx` | Learn how to use Sentry's tools to manage the amount of UI Profile hours you pay for. |
| `pricing/quotas/spend-allocation.mdx` | Learn how to allocate reserved volume to specific projects so that the most important projects are always monitored. |
| `pricing/quotas/spike-protection.mdx` | Learn how to manage your quota and make sure that your volume isn't consumed all at once with Spike Protection. |

### product/ (1 files)

| File | Description |
|------|-------------|
| `product/index.mdx` | Learn how Sentry leverages your app data plus AI, integrations, and automation to help you find and fix problems faster. |

### product/agents/ (7 files)

| File | Description |
|------|-------------|
| `product/agents/costs.mdx` | Learn how Sentry calculates AI model costs, where pricing data comes from, and what's not covered. |
| `product/agents/dashboards.mdx` | Learn how to use Sentry's Agents Dashboards. |
| `product/agents/getting-started.mdx` | Learn how to set up Sentry Agent Tracing |
| `product/agents/index.mdx` | Use AI observability in Sentry to trace and debug agent workflows and conversations. Monitor agent runs, tool calls, model interactions, tok |
| `product/agents/naming.mdx` | Set the agent name so Sentry can identify, filter, and alert on individual agents in the Agents Dashboard. |
| `product/agents/privacy.mdx` | Learn how to control data collection and protect sensitive information in AI agent tracing. |
| `product/agents/sampling.mdx` | Configure trace sampling to capture 100% of agent runs without sampling all traffic. |

### product/agents/conversations/ (1 files)

| File | Description |
|------|-------------|
| `product/agents/conversations/index.mdx` | Monitor past conversations with your AI assistants. Replay every message and tool call to understand what happened and where things went wro |

### product/ai-in-sentry/ (1 files)

| File | Description |
|------|-------------|
| `product/ai-in-sentry/index.mdx` | Learn about Sentry's AI-powered features that help you analyze and debug your code faster. |

### product/ai-in-sentry/ai-privacy-and-security/ (1 files)

| File | Description |
|------|-------------|
| `product/ai-in-sentry/ai-privacy-and-security/index.mdx` | Learn about how Sentry handles your data and protects your privacy when it comes to AI. |

### product/ai-in-sentry/seer/ (1 files)

| File | Description |
|------|-------------|
| `product/ai-in-sentry/seer/index.mdx` | Learn about Seer, Sentry's AI agent, and managing generative AI features. |

### product/ai-in-sentry/seer/autofix/ (1 files)

| File | Description |
|------|-------------|
| `product/ai-in-sentry/seer/autofix/index.mdx` | Use Seer's Autofix to automatically find the root cause of issues and generate code fixes. |

### product/ai-in-sentry/seer/code-review/ (1 files)

| File | Description |
|------|-------------|
| `product/ai-in-sentry/seer/code-review/index.mdx` | Get error predictions and code reviews for better code and coverage. |

### product/build-distribution/ (1 files)

| File | Description |
|------|-------------|
| `product/build-distribution/index.mdx` | Distribute app builds to internal teams and beta testers. |

### product/dashboards/ (1 files)

| File | Description |
|------|-------------|
| `product/dashboards/index.mdx` | Learn how Sentry’s Dashboards give you a focused view of your application’s health, across multiple projects. |

### product/dashboards/custom-dashboards/ (1 files)

| File | Description |
|------|-------------|
| `product/dashboards/custom-dashboards/index.mdx` | Learn how to edit or create custom dashboards to suit your organization's needs. |

### product/dashboards/sentry-dashboards/ (4 files)

| File | Description |
|------|-------------|
| `product/dashboards/sentry-dashboards/index.mdx` | Learn how Sentry's out-of-the-box dashboards for frontend, backend, mobile, and AI give you an overview of the health of your application. |
| `product/dashboards/sentry-dashboards/nextjs.mdx` | Monitor your Next.js application with a holistic view of client and server performance, Web Vitals, issues, and SSR bottlenecks. |
| `product/dashboards/sentry-dashboards/outbound-api-requests.mdx` | Track the performance of your application's HTTP requests and drill into the domains serving those requests. |
| `product/dashboards/sentry-dashboards/transaction-summary.mdx` | Learn more about the transaction summary, which helps you evaluate the transaction's overall health. This view includes graphs, instances of |

### product/dashboards/sentry-dashboards/ai/ (3 files)

| File | Description |
|------|-------------|
| `product/dashboards/sentry-dashboards/ai/agents.mdx` | Learn how to use Sentry's Agents Dashboards. |
| `product/dashboards/sentry-dashboards/ai/index.mdx` | Use Sentry Dashboards to monitor agents and MCP performance. |
| `product/dashboards/sentry-dashboards/ai/mcp.mdx` | Learn how to use Sentry's MCP Dashboards. |

### product/dashboards/sentry-dashboards/backend/ (4 files)

| File | Description |
|------|-------------|
| `product/dashboards/sentry-dashboards/backend/caches.mdx` | Learn more about cache monitoring with Sentry and how it can help improve your application's performance. |
| `product/dashboards/sentry-dashboards/backend/index.mdx` | Learn how to use Sentry's Backend Overview dashboards to monitor things like queries, outbound API requests, caches, and queues. |
| `product/dashboards/sentry-dashboards/backend/queries.mdx` | With Queries in Sentry, you can easily see database queries, remediate performance errors & monitor query performance. |
| `product/dashboards/sentry-dashboards/backend/queues.mdx` | Learn how to monitor your queues with Sentry for improved application performance and health. |

### product/dashboards/sentry-dashboards/frontend/ (3 files)

| File | Description |
|------|-------------|
| `product/dashboards/sentry-dashboards/frontend/assets.mdx` | Learn more about browser asset performance monitoring, which allows you to debug the performance of loading JavaScript and CSS on your front |
| `product/dashboards/sentry-dashboards/frontend/index.mdx` | Learn how to use Sentry's Frontend dashboards to monitor things like web vitals and network requests. |
| `product/dashboards/sentry-dashboards/frontend/session-health.mdx` | Get insights about your frontend application's session health over time. |

### product/dashboards/sentry-dashboards/frontend/web-vitals/ (2 files)

| File | Description |
|------|-------------|
| `product/dashboards/sentry-dashboards/frontend/web-vitals/index.mdx` | Get a clear picture of your app's Performance Score and how each Web Vital shapes it. Then, learn how to drill in to explore opportunities t |
| `product/dashboards/sentry-dashboards/frontend/web-vitals/web-vitals-concepts.mdx` | Learn more about web vitals and how each metric relates to your application's performance. |

### product/dashboards/sentry-dashboards/mobile/ (2 files)

| File | Description |
|------|-------------|
| `product/dashboards/sentry-dashboards/mobile/index.mdx` | Learn how to use Sentry's Mobile Performance dashboard to monitor the health of your mobile app, including app starts, screen loads, and scr |
| `product/dashboards/sentry-dashboards/mobile/session-health.mdx` | Get insights about your mobile application's session health over time. |

### product/dashboards/sentry-dashboards/mobile/mobile-vitals/ (3 files)

| File | Description |
|------|-------------|
| `product/dashboards/sentry-dashboards/mobile/mobile-vitals/app-starts.mdx` | Learn how to monitor your mobile application's performance by using App Starts to identify slow or regressed screens. |
| `product/dashboards/sentry-dashboards/mobile/mobile-vitals/index.mdx` | Track the performance of your app. |
| `product/dashboards/sentry-dashboards/mobile/mobile-vitals/screen-loads.mdx` | Learn how to monitor your mobile application's performance by using Screen Loads to get better visibility on your application's TTID and TTF |

### product/dashboards/widget-builder/ (1 files)

| File | Description |
|------|-------------|
| `product/dashboards/widget-builder/index.mdx` | Learn how to create widgets for your dashboards or edit existing ones. |

### product/dashboards/widget-library/ (1 files)

| File | Description |
|------|-------------|
| `product/dashboards/widget-library/index.mdx` | Learn about Sentry's library of prebuilt widgets that you can use in your custom dashboards. |

### product/drains/ (7 files)

| File | Description |
|------|-------------|
| `product/drains/cloudflare.mdx` | Learn how to set up Cloudflare Workers Observability to forward logs and traces data to Sentry. |
| `product/drains/heroku.mdx` | Learn how to set up Heroku Telemetry Drains to forward logs and traces data to Sentry. |
| `product/drains/index.mdx` | Learn how to set up log and trace drains to send logs and traces to Sentry from managed hosting platforms. |
| `product/drains/openrouter.mdx` | Learn how to set up OpenRouter Broadcast to forward trace data from your LLM requests to Sentry. |
| `product/drains/shopify-hydrogen.mdx` | Learn how to set up Shopify trace exports to forward trace data from your Hydrogen apps to Sentry. |
| `product/drains/supabase.mdx` | Learn how to set up Supabase Log Drains to forward logs to Sentry. |
| `product/drains/vercel.mdx` | Learn how to set up Vercel drains to forward logs and traces data to Sentry. |

### product/errors/ (1 files)

| File | Description |
|------|-------------|
| `product/errors/index.mdx` | Errors allows you to search, filter, and query all your error event data across projects and environments to uncover trends and gain insight |

### product/explore/ (2 files)

| File | Description |
|------|-------------|
| `product/explore/dropped-data.mdx` | Learn how to investigate and troubleshoot dropped data in Sentry. |
| `product/explore/index.mdx` | Query and browse traces, logs, metrics, errors, replays, and all datasets from one place in Sentry. |

### product/issues/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/index.mdx` | Learn how to use Sentry’s Issues page, where you can see and start to debug errors and performance problems that are affecting your applicat |

### product/issues/grouping-and-fingerprints/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/grouping-and-fingerprints/index.mdx` | Learn more about how Sentry groups issues together as well as different ways to change how events are grouped. |

### product/issues/inbox/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/inbox/index.mdx` | Learn how to use Sentry's Inbox to work through issues that are closest to being fixed, and are assigned to you or your teams. |

### product/issues/issue-details/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/index.mdx` | Learn how to navigate the Issue Details page to help you efficiently triage an issue. |

### product/issues/issue-details/ai-detected-issues/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/ai-detected-issues/index.mdx` | Learn about AI-detected issues and how Sentry uses AI to find problems in your traces. |

### product/issues/issue-details/breadcrumbs/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/breadcrumbs/index.mdx` | Learn about using breadcrumbs on the Issue Details page to help debug faster. |

### product/issues/issue-details/error-issues/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/error-issues/index.mdx` | Learn how to use the information on the Issue Details page to debug an error issue. |

### product/issues/issue-details/feature-flags/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/feature-flags/index.mdx` | Learn how to set up and interact with Sentry's feature flag evaluation tracking and feature flag change tracking. |

### product/issues/issue-details/low-value-span-issues/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/low-value-span-issues/index.mdx` | Learn more about Low-Value Span issues and how to reduce noise and span volume in your traces. |

### product/issues/issue-details/performance-issues/ (6 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/db-main-thread-io.mdx` | Learn more about Database on Main Thread issues and how to diagnose and fix them. |
| `product/issues/issue-details/performance-issues/file-main-thread-io.mdx` | Learn more about File I/O on Main Thread and how to diagnose and fix these issues. |
| `product/issues/issue-details/performance-issues/function-regressions.mdx` | Learn more about Function Regression issues and how to diagnose and fix them. |
| `product/issues/issue-details/performance-issues/index.mdx` | Learn more about which performance issues Sentry detects and how to use the Issue Details page to debug them. |
| `product/issues/issue-details/performance-issues/n-one-api-calls.mdx` | Learn more about N+1 API Calls and how to diagnose and fix them. |
| `product/issues/issue-details/performance-issues/n-one-queries.mdx` | Learn more about N+1 Queries and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/consecutive-db-queries/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/consecutive-db-queries/index.mdx` | Learn more about Consecutive DB Queries and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/consecutive-http/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/consecutive-http/index.mdx` | Learn more about Consecutive HTTP issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/endpoint-regressions/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/endpoint-regressions/index.mdx` | Learn more about Endpoint Regression issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/frame-drop/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/frame-drop/index.mdx` | Learn more about how we detect Frame Drop issues and what you can do to fix them. |

### product/issues/issue-details/performance-issues/http-overhead/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/http-overhead/index.mdx` | Learn more about HTTP/1.1 Overhead issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/image-decoding-main-thread/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/image-decoding-main-thread/index.mdx` | Learn more about Image Decoding on Main Thread issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/json-decoding-main-thread/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/json-decoding-main-thread/index.mdx` | Learn more about JSON Decoding on Main Thread issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/large-http-payload/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/large-http-payload/index.mdx` | Learn more about Large HTTP Payload issues, how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/large-render-blocking-asset/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/large-render-blocking-asset/index.mdx` | Learn more about Large Render Blocking Assets and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/regex-main-thread/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/regex-main-thread/index.mdx` | Learn more about Regex on Main Thread issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/slow-db-queries/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/slow-db-queries/index.mdx` | Learn more about Slow DB Query issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/uncompressed-asset/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/uncompressed-asset/index.mdx` | Learn more about Uncompressed Asset issues and how to diagnose and fix them. |

### product/issues/issue-details/performance-issues/web-vitals/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/performance-issues/web-vitals/index.mdx` | Learn more about Web Vitals issues and how to diagnose and fix them. |

### product/issues/issue-details/query-injection-issues/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/query-injection-issues/index.mdx` | Learn more about Potential Query Injection Vulnerability issues and how to diagnose and fix them. |

### product/issues/issue-details/replay-issues/ (3 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/replay-issues/hydration-error.mdx` | Learn about Session Replay hydration errors. |
| `product/issues/issue-details/replay-issues/index.mdx` | Learn more about which replay issues Sentry detects. |
| `product/issues/issue-details/replay-issues/rage-clicks.mdx` | Learn about Session Replay rage click issues. |

### product/issues/issue-details/uptime-issues/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-details/uptime-issues/index.mdx` | Learn how to use the information on the Issue Details page to debug an uptime issue. |

### product/issues/issue-priority/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-priority/index.mdx` | Learn how Sentry prioritizes issue actionability. |

### product/issues/issue-views/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/issue-views/index.mdx` | Learn how to create, customize, and share your Issues experience in Sentry. |

### product/issues/monitors-and-alerts/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/monitors-and-alerts/index.mdx` | Use Monitors to detect problems and create issues, and use Alerts to be notified when those issues change state or match your filters. |

### product/issues/ownership-rules/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/ownership-rules/index.mdx` | Learn how to set up ownership rules to automatically assign issues to the right owners. |

### product/issues/reprocessing/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/reprocessing/index.mdx` | Learn about reprocessing errors with new debug files. |

### product/issues/states-triage/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/states-triage/index.mdx` | Learn how issue status works and and how to triage issues. |

### product/issues/states-triage/escalating-issues/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/states-triage/escalating-issues/index.mdx` | Learn how the escalating issues algorithm works. |

### product/issues/suspect-commits/ (1 files)

| File | Description |
|------|-------------|
| `product/issues/suspect-commits/index.mdx` | With suspect commits, you can see the most recent commit to your code in the stack trace. Learn more about how integrations enable suspect c |

### product/logs/ (1 files)

| File | Description |
|------|-------------|
| `product/logs/index.mdx` | Structured logs allow you to send, view and query logs and parameters sent from your applications within Sentry. |

### product/logs/getting-started/ (1 files)

| File | Description |
|------|-------------|
| `product/logs/getting-started/index.mdx` | Learn how to set up Sentry's Logs feature using our supported SDKs. |

### product/mcp-servers/ (3 files)

| File | Description |
|------|-------------|
| `product/mcp-servers/dashboard.mdx` | Learn how to use Sentry's MCP Dashboards. |
| `product/mcp-servers/getting-started.mdx` | Learn how to set up Sentry MCP Monitoring |
| `product/mcp-servers/index.mdx` | Learn how to use Sentry's MCP monitoring tools to trace and debug your Model Context Protocol implementations, including server connections, |

### product/metrics/ (1 files)

| File | Description |
|------|-------------|
| `product/metrics/index.mdx` | Send counters, gauges, and distributions from your code to track application health and drill down into related traces, logs, and errors. |

### product/metrics/getting-started/ (1 files)

| File | Description |
|------|-------------|
| `product/metrics/getting-started/index.mdx` | Learn how to set up Sentry's Application Metrics using our supported SDKs. |

### product/monitors-and-alerts/ (1 files)

| File | Description |
|------|-------------|
| `product/monitors-and-alerts/index.mdx` | Use Monitors to decide when problems become issues, and Alerts to notify, ticket, and automate next steps when those issues match your rules |

### product/monitors-and-alerts/alerts/ (2 files)

| File | Description |
|------|-------------|
| `product/monitors-and-alerts/alerts/create-alerts.mdx` | Learn about every option available when you create an Alert, including sources, environments, triggers, filters, actions, and throttling. |
| `product/monitors-and-alerts/alerts/index.mdx` | Use Alerts to notify or take action on important issues. |

### product/monitors-and-alerts/monitors/ (1 files)

| File | Description |
|------|-------------|
| `product/monitors-and-alerts/monitors/index.mdx` | Generate issues and trigger alerts by creating custom monitors to track errors, performance, and metrics. |

### product/monitors-and-alerts/monitors/crons/ (3 files)

| File | Description |
|------|-------------|
| `product/monitors-and-alerts/monitors/crons/index.mdx` | Monitor your recurring jobs with Sentry to help maintain uptime and performance. |
| `product/monitors-and-alerts/monitors/crons/job-monitoring.mdx` | Learn how to set up monitor notifications, monitor the same job in multiple environments, and manage your monitor in the Sentry UI. |
| `product/monitors-and-alerts/monitors/crons/troubleshooting.mdx` | Troubleshoot common issues with cron monitoring. |

### product/monitors-and-alerts/monitors/crons/getting-started/ (1 files)

| File | Description |
|------|-------------|
| `product/monitors-and-alerts/monitors/crons/getting-started/index.mdx` | Learn how to set up Sentry's Cron Monitoring using our CLI, HTTP, and supported SDKs. |

### product/monitors-and-alerts/monitors/crons/getting-started/http/ (1 files)

| File | Description |
|------|-------------|
| `product/monitors-and-alerts/monitors/crons/getting-started/http/index.mdx` | Follow this guide to set up and manage monitors using the Sentry API. |

### product/monitors-and-alerts/monitors/uptime-monitoring/ (4 files)

| File | Description |
|------|-------------|
| `product/monitors-and-alerts/monitors/uptime-monitoring/automatic-detection.mdx` | Learn how automatic detection of uptime monitoring works. |
| `product/monitors-and-alerts/monitors/uptime-monitoring/index.mdx` | Learn how to help maintain uptime for your web services by monitoring relevant URLs with Sentry's Uptime Monitoring. |
| `product/monitors-and-alerts/monitors/uptime-monitoring/troubleshooting.mdx` | Learn how to troubleshoot potential Uptime Monitoring problems. |
| `product/monitors-and-alerts/monitors/uptime-monitoring/uptime-tracing.mdx` | Learn how to use distributed tracing to troubleshoot downtime. |

### product/notifications/ (2 files)

| File | Description |
|------|-------------|
| `product/notifications/index.mdx` | Learn about the types of notifications that Sentry sends you, and how to manage them. |
| `product/notifications/notification-settings.mdx` | Learn how to manage your personal notifications settings. |

### product/partnership-platform/ (3 files)

| File | Description |
|------|-------------|
| `product/partnership-platform/account-provisioning-api.mdx` | Learn how to automatically provision Sentry organizations for your customers using our provisioning API. |
| `product/partnership-platform/index.mdx` | Learn how to integrate Sentry into your platform and provide error monitoring and performance insights to your customers. |
| `product/partnership-platform/oauth-integration.mdx` | Learn how to integrate Sentry OAuth to allow existing customers to connect their Sentry accounts to your platform. |

### product/profiling/ (8 files)

| File | Description |
|------|-------------|
| `product/profiling/continuous-ui-profiling-migration-guide.mdx` | Learn how to migrate from the older transaction-based Profiling API to the new Continuous and UI Profiling APIs. |
| `product/profiling/differential-flamegraphs.mdx` | Learn how to use and interpret differential flame graphs. |
| `product/profiling/flame-charts-graphs.mdx` | Learn more about how to interpret flame graphs and aggregated flame graphs. |
| `product/profiling/getting-started.mdx` | Get started with Profiling, which allows you to see code-level profiling information for your Sentry apps. |
| `product/profiling/index.mdx` | Profiling offers a deeper level of visibility on top of traditional tracing, removing the need for custom instrumentation and enabling preci |
| `product/profiling/performance-overhead.mdx` | Learn more about how enabling Profiling impacts the performance of your application. |
| `product/profiling/profile-details.mdx` | Learn how to explore your profile data using the Profile Details page. |
| `product/profiling/transaction-vs-continuous-profiling.mdx` | Learn about the differences between transaction-based Profiling and the new Continuous & UI Profiling products. |

### product/profiling/mobile-app-profiling/ (2 files)

| File | Description |
|------|-------------|
| `product/profiling/mobile-app-profiling/index.mdx` | Get started with Mobile App Profiling, which allows you to see code-level profiling information for your mobile apps. |
| `product/profiling/mobile-app-profiling/metrics.mdx` | Learn about the measurements taken by the Sentry profiler that help us contextualize the work your mobile app does and detect possible issue |

### product/projects/ (1 files)

| File | Description |
|------|-------------|
| `product/projects/index.mdx` | View all the projects associated with teams that you're a member of, then dive into their details quickly. |

### product/projects/project-details/ (1 files)

| File | Description |
|------|-------------|
| `product/projects/project-details/index.mdx` | Get an overview of your project's health and triage the top issues. |

### product/relay/ (4 files)

| File | Description |
|------|-------------|
| `product/relay/getting-started.mdx` | Learn how to get started with Relay, Sentry''s data security solution. |
| `product/relay/index.mdx` | Learn more about Relay, Sentry's data security solution. |
| `product/relay/operating-guidelines.mdx` | Learn about our guidelines for operation when self-hosting external Relays. |
| `product/relay/options.mdx` | Configure Relay to suit the needs of your organization. |

### product/relay/modes/ (1 files)

| File | Description |
|------|-------------|
| `product/relay/modes/index.mdx` | Relay can operate in different modes depending on your organization's needs. |

### product/relay/monitoring/ (2 files)

| File | Description |
|------|-------------|
| `product/relay/monitoring/collected-metrics.mdx` | Learn what metrics Relay produces. |
| `product/relay/monitoring/index.mdx` | Configure logging, metrics, and error reporting for your Relay installation. |

### product/releases/ (3 files)

| File | Description |
|------|-------------|
| `product/releases/index.mdx` | Learn how to provide Sentry with important information about your releases, such as release health and release details, to determine regress |
| `product/releases/naming-releases.mdx` | Learn about release naming conventions. |
| `product/releases/release-details.mdx` | Learn more about the details of individual releases. |

### product/releases/associate-commits/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/associate-commits/index.mdx` | Learn how to associate commits with a release. |

### product/releases/health/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/health/index.mdx` | Monitor the health of releases by observing user adoption, usage of the application, percentage of crashes, and session data. |

### product/releases/releases-throughout-sentry/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/releases-throughout-sentry/index.mdx` | Learn how to use releases throughout Sentry's product. |

### product/releases/setup/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/index.mdx` | Learn about setting up your SDK to enable Releases and to monitor release health. |

### product/releases/setup/release-automation/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/release-automation/index.mdx` | Learn how Sentry release management can be automated using any continuous integration and delivery (CI/CD) platform or automation server. |

### product/releases/setup/release-automation/bitbucket-pipelines/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/release-automation/bitbucket-pipelines/index.mdx` | Learn how Sentry and Bitbucket Pipelines automate release management and help identify suspect commits. |

### product/releases/setup/release-automation/circleci/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/release-automation/circleci/index.mdx` | Learn how Sentry and CircleCI automate release management and help identify suspect commits. |

### product/releases/setup/release-automation/github-actions/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/release-automation/github-actions/index.mdx` | Learn how Sentry and GitHub Actions automate release management, upload source maps and help identify suspect commits. |

### product/releases/setup/release-automation/jenkins/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/release-automation/jenkins/index.mdx` | Learn how Sentry and Jenkins automate release management and help identify suspect commits. |

### product/releases/setup/release-automation/netlify/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/release-automation/netlify/index.mdx` | Learn how Sentry and Netlify automate release management and help identify suspect commits. |

### product/releases/setup/release-automation/travis-ci/ (1 files)

| File | Description |
|------|-------------|
| `product/releases/setup/release-automation/travis-ci/index.mdx` | Learn how Sentry and Travis CI automate release management and help identify suspect commits. |

### product/releases/usage/ (6 files)

| File | Description |
|------|-------------|
| `product/releases/usage/archive-release.mdx` | Learn how to permanently hide or archive a release. |
| `product/releases/usage/disable-auto-release-creation.mdx` | Learn how to stop Sentry from automatically creating releases from ingested events so you can manage releases yourself. |
| `product/releases/usage/index.mdx` | Learn how to sort, filter, archive, and restore a release. |
| `product/releases/usage/restore-release.mdx` | Learn how to restore an archived release. |
| `product/releases/usage/sorting-filtering.mdx` | Learn how to sort and filter releases. |
| `product/releases/usage/time-range.mdx` | Learn about how Sentry recalculates the value of crash-free users or crash-free sessions if you change the time range. |

### product/sentry-basics/ (3 files)

| File | Description |
|------|-------------|
| `product/sentry-basics/index.mdx` | Set up Sentry and configure the key features that help you find and fix problems faster. |
| `product/sentry-basics/performance-monitoring.mdx` | Track application performance across your full stack with distributed tracing, automated issue detection, and pre-built dashboards. |
| `product/sentry-basics/user-feedback-basics.mdx` | Learn how to configure and deploy Sentry's User Feedback widget to capture qualitative insights from your users. |

### product/sentry-basics/getting-started-tutorial/ (6 files)

| File | Description |
|------|-------------|
| `product/sentry-basics/getting-started-tutorial/create-new-project.mdx` | Learn how to create your Sentry projects, which will scope events to distinct pieces of your application landscape. |
| `product/sentry-basics/getting-started-tutorial/enable-readable-stack-traces.mdx` | Learn how to upload source maps to Sentry so your stack traces show real source code instead of minified output. |
| `product/sentry-basics/getting-started-tutorial/generate-first-error.mdx` | Learn how to capture your first error and view it in Sentry. |
| `product/sentry-basics/getting-started-tutorial/index.mdx` | Follow this step-by-step tutorial to set up Sentry error monitoring and distributed tracing for a sample fullstack JavaScript app. You'll le |
| `product/sentry-basics/getting-started-tutorial/initialize-sentry-sdk-backend.mdx` | Learn how to add the Sentry SDK to your backend codebase. |
| `product/sentry-basics/getting-started-tutorial/initialize-sentry-sdk-frontend.mdx` | Learn how to add the Sentry SDK to your frontend codebase. |

### product/sentry-toolbar/ (3 files)

| File | Description |
|------|-------------|
| `product/sentry-toolbar/faq.mdx` | Frequently asked questions about the Sentry Toolbar. |
| `product/sentry-toolbar/index.mdx` | Bring critical Sentry insights and tools directly into your web app for easier troubleshooting with the Sentry Toolbar. |
| `product/sentry-toolbar/setup.mdx` | Get started with Sentry's Toolbar, bringing critical Sentry insights and tools into your web app to help your team troubleshoot more effecti |

### product/session-replay/ (4 files)

| File | Description |
|------|-------------|
| `product/session-replay/access-control.mdx` | Restrict which users can view Session Replays using user-based allowlists. |
| `product/session-replay/index.mdx` | Watch video-like reproductions of real user sessions to debug errors, slow transactions, and user frustration without guesswork. |
| `product/session-replay/replay-details.mdx` | Learn more about how information is organized on the Replay Details page and how to share and delete replays. |
| `product/session-replay/replay-page-and-filters.mdx` | Learn how to navigate the Replays page and filter user sessions that meet specific conditions. |

### product/session-replay/mobile/ (2 files)

| File | Description |
|------|-------------|
| `product/session-replay/mobile/index.mdx` | Use Session Replay for Mobile to get reproductions of user sessions. You'll be able to repro issues faster and get a better understanding of |
| `product/session-replay/mobile/performance-overhead.mdx` | Learn about how enabling Session Replay impacts the performance of your mobile application. |

### product/session-replay/web/ (2 files)

| File | Description |
|------|-------------|
| `product/session-replay/web/index.mdx` | Learn about Session Replay and its video-like reproductions of user interactions, which can help you see when users are frustrated and build |
| `product/session-replay/web/performance-overhead.mdx` | Learn about how enabling Session Replay impacts the performance of your web application. |

### product/size-analysis/ (2 files)

| File | Description |
|------|-------------|
| `product/size-analysis/index.mdx` | Monitor mobile builds for size changes before they reach users. |
| `product/size-analysis/integrating-into-ci.mdx` | Set up the integration in CI to receive automated size change notifications |

### product/snapshots/ (2 files)

| File | Description |
|------|-------------|
| `product/snapshots/index.mdx` | Catch visual changes on every pull request with snapshots. |
| `product/snapshots/integrating-into-ci.mdx` | Set up Snapshots in CI to receive automated visual diff status checks on every pull request. |

### product/snapshots/agentic-workflow/ (1 files)

| File | Description |
|------|-------------|
| `product/snapshots/agentic-workflow/index.mdx` | Connect an agent to Sentry's MCP server to inspect snapshot diffs, images, and baselines. |

### product/snapshots/local-testing/ (1 files)

| File | Description |
|------|-------------|
| `product/snapshots/local-testing/index.mdx` | Download baseline snapshots and diff images locally with sentry-cli. |

### product/snapshots/reviewing-snapshots/ (1 files)

| File | Description |
|------|-------------|
| `product/snapshots/reviewing-snapshots/index.mdx` | Review snapshot diffs on your pull request and approve changes. |

### product/snapshots/uploading-snapshots/ (1 files)

| File | Description |
|------|-------------|
| `product/snapshots/uploading-snapshots/index.mdx` | Structure your snapshot directory and upload from CI with sentry-cli. |

### product/stats/ (1 files)

| File | Description |
|------|-------------|
| `product/stats/index.mdx` | The Sentry Stats page displays important metrics such as Usage, and Issues that help teams track project health. Learn how to get started he |

### product/trace-explorer/ (1 files)

| File | Description |
|------|-------------|
| `product/trace-explorer/index.mdx` | Learn how to use Sentry's Trace Explorer to search span data, find distributed traces, and debug performance issues across your entire appli |

### product/user-feedback/ (2 files)

| File | Description |
|------|-------------|
| `product/user-feedback/index.mdx` | Learn how you can view and triage user feedback submissions. |
| `product/user-feedback/setup.mdx` | Get started with Sentry's User Feedback, which allows you to collect feedback from your users. |

### security-legal-pii/ (1 files)

| File | Description |
|------|-------------|
| `security-legal-pii/index.mdx` | Learn about Sentry's security and compliance processes and how to scrub sensitive data. |

### security-legal-pii/scrubbing/ (5 files)

| File | Description |
|------|-------------|
| `security-legal-pii/scrubbing/advanced-datascrubbing.mdx` | Learn about using Advanced Data Scrubbing as an alternative way to redact sensitive information just before it is saved in Sentry. |
| `security-legal-pii/scrubbing/attachment-scrubbing.mdx` | Learn about scrubbing attachments if they contain PII. |
| `security-legal-pii/scrubbing/index.mdx` | Learn more about scrubbing data using the Settings for your project and organization. |
| `security-legal-pii/scrubbing/protecting-user-privacy.mdx` | Learn about how Session Replay captures data while protecting user privacy. |
| `security-legal-pii/scrubbing/restrict-display.mdx` | Learn about enhanced privacy controls for email notifications. |

### security-legal-pii/scrubbing/server-side-scrubbing/ (2 files)

| File | Description |
|------|-------------|
| `security-legal-pii/scrubbing/server-side-scrubbing/event-pii-fields.mdx` | See which Event fields are marked as PII |
| `security-legal-pii/scrubbing/server-side-scrubbing/index.mdx` | Learn about the data scrubbing Sentry enables by default. |

### security-legal-pii/security/ (10 files)

| File | Description |
|------|-------------|
| `security-legal-pii/security/data-retention-periods.mdx` | Learn about Sentry's data retention periods for different data types and plan tiers. |
| `security-legal-pii/security/index.mdx` | Learn about Sentry's security and compliance processes. |
| `security-legal-pii/security/ip-ranges.mdx` | Learn how Sentry's SaaS product uses IP Ranges for API usage, event ingestion, outbound requests, and more. |
| `security-legal-pii/security/mobile-privacy.mdx` | Learn about Sentry's frequently asked questions regarding data privacy for mobile apps. |
| `security-legal-pii/security/service-data-usage.mdx` | Learn about Sentry's approach to your data |
| `security-legal-pii/security/soc2.mdx` | Learn about where you can access Sentry's latest SOC2 report and ISO 27001 certificate. |
| `security-legal-pii/security/ssl.mdx` | Learn how Sentry's SaaS product uses SSL protocols and cipher suites for security and compatibility. |
| `security-legal-pii/security/tax-documents.mdx` | Access Sentry's tax documents. |
| `security-legal-pii/security/terms.mdx` | Learn about Sentry's Terms of Service, Privacy Policy, Data Processing Addendum, and Business Associate Amendment. |
| `security-legal-pii/security/token-formats.mdx` | What Sentry credentials look like, the strings that appear near them, and the patterns that cause false positives in secret scanning. |

### platforms/ (1896 files)

Each platform directory contains SDK docs. Shared pages live in `common/` and framework/library pages in `guides/`. Per-platform summary below; shallow files listed individually.

| File | Description |
|------|-------------|
| `platforms/index.mdx` | Platforms |

#### platforms/android/ (111 files)

Subdirectories: `build-distribution/` (3), `configuration/` (17), `data-management/` (9), `enhance-errors/` (4), `enriching-events/` (12), `feature-flags/` (1), `features/` (1), `integrations/` (16), `logs/` (1), `manual-setup/` (1), `metrics/` (1), `migration/` (15), `overhead/` (1), `profiling/` (3), `releases/` (1), `session-replay/` (5), `size-analysis/` (2), `snapshots/` (1), `tracing/` (9), `troubleshooting/` (2), `usage/` (3), `user-feedback/` (2)

| File | Description |
|------|-------------|
| `platforms/android/index.mdx` | Learn how to set up Sentry's Android SDK for error monitoring and performance tracking. |
| `platforms/android/build-distribution/index.mdx` | Upload Android builds to Sentry for distribution to internal teams and beta testers. |
| `platforms/android/configuration/index.mdx` | Additional configuration options for the Sentry Android SDK. |
| `platforms/android/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/android/enhance-errors/index.mdx` | Learn how to enhance stack traces of your Sentry errors. |
| `platforms/android/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/android/feature-flags/index.mdx` | With Feature Flags, Sentry tracks feature flag evaluations in your application using the Sentry Android SDK, keeps an audit log of feature f |
| `platforms/android/features/index.mdx` | Learn about the features of Sentry's Android SDK. |
| `platforms/android/integrations/index.mdx` | Learn more about how integrations extend the functionality of our SDK to cover common libraries and environments automatically. |
| `platforms/android/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Android SDK. |
| `platforms/android/manual-setup/index.mdx` | Learn how to set up the Sentry Android SDK manually. |
| `platforms/android/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/android/migration/index.mdx` | Migrate from an older version of Sentry's SDK for Android. |
| `platforms/android/overhead/index.mdx` | Learn about Sentry's Android SDK overhead and how you can tailor your configuration to minimize it. |
| `platforms/android/profiling/index.mdx` | Learn how to enable profiling in your app using the Sentry Android SDK if it is not already set up. |
| `platforms/android/releases/index.mdx` | Learn about Sentry's release channels for Mobile SDK updates. |
| `platforms/android/session-replay/index.mdx` | Learn how to enable Session Replay in your mobile app. |
| `platforms/android/size-analysis/index.mdx` | Upload Android builds to Sentry for Size Analysis. |
| `platforms/android/snapshots/index.mdx` | Set up snapshots for Android apps with the Sentry Android Gradle Plugin. |
| `platforms/android/tracing/index.mdx` | Learn how to enable tracing in your app so you can get valuable performance insights about your application. |
| `platforms/android/troubleshooting/index.mdx` | Troubleshoot and resolve common issues with the Android SDK. |
| `platforms/android/usage/index.mdx` | Use the Sentry Android SDK to manually capture errors and other events. |
| `platforms/android/user-feedback/index.mdx` | Learn how to enable User Feedback in your Android app. |

#### platforms/apple/ (103 files)

Subdirectories: `common/` (87), `guides/` (15)

| File | Description |
|------|-------------|
| `platforms/apple/index.mdx` | Learn how to set up Sentry's Apple SDK for error monitoring and performance tracking. |
| `platforms/apple/common/index.mdx` | Learn how to use Sentry's Apple SDK to automatically report errors, crashes, watchdog terminations, and app hangs in your application. |
| `platforms/apple/guides/macos/index.mdx` | Learn how to use the Sentry macOS SDK to automatically report errors and exceptions in your application. |
| `platforms/apple/guides/tvos/index.mdx` | Learn how to use the Sentry tvOS SDK to automatically report errors and exceptions in your application. |
| `platforms/apple/guides/visionos/index.mdx` | Learn how to use the Sentry visionOS SDK to automatically report errors and exceptions in your application. |
| `platforms/apple/guides/watchos/index.mdx` | Learn how to use the Sentry watchOS SDK to automatically report errors and exceptions in your application. |
| `platforms/apple/common/configuration/index.mdx` | Additional configuration options for the Sentry Apple SDK. |
| `platforms/apple/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/apple/common/dsym/index.mdx` | Learn more about how to upload debug symbols for iOS. |
| `platforms/apple/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/apple/common/feature-flags/index.mdx` | With Feature Flags, Sentry tracks feature flag evaluations in your application using the Sentry Apple SDK, keeps an audit log of feature fla |
| `platforms/apple/common/features/index.mdx` | Here's a list of Sentry's Apple SDK features. |
| `platforms/apple/common/install/index.mdx` | All the installation methods for the Apple platform. |
| `platforms/apple/common/integrations/index.mdx` | Learn more about how integrations extend the functionality of our SDK to cover common libraries and environments automatically. |
| `platforms/apple/common/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Apple SDK. |
| `platforms/apple/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges, and distributions from your Sentry-configured apps to track application health a |
| `platforms/apple/common/migration/index.mdx` | Migrate from an older version of Sentry's SDK for Apple platforms. |
| `platforms/apple/common/overhead/index.mdx` | Learn about Sentry's Apple SDK overhead and how you can tailor your configuration to minimize it. |
| `platforms/apple/common/profiling/index.mdx` | Learn how to enable profiling in your app. |
| `platforms/apple/common/releases/index.mdx` | Learn about Sentry's release channels for Mobile SDK updates. |
| `platforms/apple/common/session-replay/index.mdx` | Learn how to enable Session Replay in your mobile app. |
| `platforms/apple/common/snapshots/index.mdx` | Set up snapshots for any Apple app using Snapshot Previews or your preferred snapshot library. |
| `platforms/apple/common/sourcecontext/index.mdx` | Sentry can show you snippets of code around the crash, so you can quickly identify the problem. |
| `platforms/apple/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Apple SDK and get valuable performance insights about your application. |
| `platforms/apple/common/troubleshooting/index.mdx` | Troubleshoot and resolve common issues with the Cocoa SDK. |
| `platforms/apple/common/usage/index.mdx` | Use the Sentry Apple SDK to manually capture errors and other events. |
| `platforms/apple/common/user-feedback/index.mdx` | Learn how to enable User Feedback in your Cocoa app. |

#### platforms/dart/ (131 files)

Subdirectories: `common/` (49), `guides/` (82)

| File | Description |
|------|-------------|
| `platforms/dart/common/index.mdx` | Learn how to set up Sentry in your Dart app, capture your first errors and traces, and view them in Sentry. |
| `platforms/dart/guides/flutter/index.mdx` | Learn how to set up Sentry in your Flutter app, capture your first errors and traces, and view them in Sentry. |
| `platforms/dart/common/configuration/index.mdx` | Additional configuration options for the Sentry Dart SDK. |
| `platforms/dart/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/dart/common/debug-symbols/index.mdx` | Debug Symbols |
| `platforms/dart/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/dart/common/feature-flags/index.mdx` | With Feature Flags, Sentry tracks feature flag evaluations in your application using the Sentry Dart SDK, keeps an audit log of feature flag |
| `platforms/dart/common/features/index.mdx` | Learn about the features of Sentry's Dart SDK. |
| `platforms/dart/common/integrations/index.mdx` | Learn more about how integrations extend the functionality of our SDK to cover common libraries and environments automatically. |
| `platforms/dart/common/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Dart SDK. |
| `platforms/dart/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/dart/common/migration/index.mdx` | Migrate between versions of Sentry's SDK for Dart. |
| `platforms/dart/common/overhead/index.mdx` | Learn about Sentry's Dart SDK overhead and how you can tailor your configuration to minimize it. |
| `platforms/dart/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Dart SDK and get valuable performance insights about your application. |
| `platforms/dart/common/usage/index.mdx` | Use the Sentry Dart SDK to manually capture errors and other events. |
| `platforms/dart/common/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/dotnet/ (100 files)

Subdirectories: `common/` (64), `guides/` (35)

| File | Description |
|------|-------------|
| `platforms/dotnet/index.mdx` | Learn how to set up and run Sentry's .NET SDK, which will automatically report errors and exceptions in your application. |
| `platforms/dotnet/common/index.mdx` | index.mdx |
| `platforms/dotnet/guides/android/index.mdx` | Learn about Sentry's .NET integration with .NET for Android |
| `platforms/dotnet/guides/apple/index.mdx` | Learn about Sentry's .NET integration with .NET for iOS, macOS, and Mac Catalyst |
| `platforms/dotnet/guides/aspnet/index.mdx` | Learn about Sentry's .NET integration with ASP.NET. |
| `platforms/dotnet/guides/aspnetcore/index.mdx` | Learn about Sentry's .NET integration with ASP.NET Core. |
| `platforms/dotnet/guides/aws-lambda/index.mdx` | Learn about Sentry's .NET integration with AWS Lambda and ASP.NET Core. |
| `platforms/dotnet/guides/azure-functions-worker/index.mdx` | Learn about Sentry's .NET integration with Azure Functions. |
| `platforms/dotnet/guides/blazor-server/index.mdx` | Learn about Sentry's .NET integration with Blazor Interactive Server-Side Rendering. |
| `platforms/dotnet/guides/blazor-webassembly/index.mdx` | Learn about Sentry's .NET integration with Blazor WebAssembly. |
| `platforms/dotnet/guides/entityframework/index.mdx` | Learn about Sentry's .NET integration with Entity Framework. |
| `platforms/dotnet/guides/extensions-logging/index.mdx` | Learn about Sentry's .NET integration with Microsoft.Extensions.Logging. |
| `platforms/dotnet/guides/google-cloud-functions/index.mdx` | Learn about Sentry's .NET integration with Google Cloud Functions. |
| `platforms/dotnet/guides/log4net/index.mdx` | Learn about Sentry's .NET integration with log4net. |
| `platforms/dotnet/guides/maui/index.mdx` | Learn about Sentry's .NET integration with .NET Multi-platform App UI (MAUI). |
| `platforms/dotnet/guides/nlog/index.mdx` | Learn about Sentry's .NET integration with NLog. |
| `platforms/dotnet/guides/serilog/index.mdx` | Learn about Sentry's .NET integration with Serilog. |
| `platforms/dotnet/guides/winforms/index.mdx` | Learn how Sentry's .NET SDK works with WinForms applications. |
| `platforms/dotnet/guides/winui/index.mdx` | Learn about using Sentry's .NET SDK with the Windows UI Library |
| `platforms/dotnet/guides/wpf/index.mdx` | Learn more about how Sentry's .NET SDK works with Windows Presentation Foundation (WPF) applications. |
| `platforms/dotnet/guides/xamarin/index.mdx` | Learn more about how Sentry's .NET SDK works with Xamarin applications. |
| `platforms/dotnet/common/configuration/index.mdx` | Additional configuration options for the Sentry .NET SDK. |
| `platforms/dotnet/common/crons/index.mdx` | Sentry Crons allows you to monitor the uptime and performance of any scheduled, recurring job in your application using the Sentry .NET SDK. |
| `platforms/dotnet/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/dotnet/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/dotnet/common/legacy-sdk.mdx` | Read the legacy documentation for the .NET SDK.  |
| `platforms/dotnet/common/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the .NET SDK. |
| `platforms/dotnet/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements sent from your applications within Sentry using the .NET SDK. |
| `platforms/dotnet/common/migration/index.mdx` | Migrating between versions of Sentry SDK for .NET. |
| `platforms/dotnet/common/profiling/index.mdx` | Learn how to enable profiling in your app using the Sentry .NET SDK if it is not already set up. |
| `platforms/dotnet/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/dotnet/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry .NET SDK and discover valuable performance insights of your application. |
| `platforms/dotnet/common/troubleshooting.mdx` | Learn more about how to troubleshoot common issues with the .NET SDK.  |
| `platforms/dotnet/common/unit-testing.mdx` | Learn about unit testing with `ISentryClient` and `IHub`. |
| `platforms/dotnet/common/usage/index.mdx` | Use the Sentry .NET SDK to manually capture errors and other events. |
| `platforms/dotnet/common/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/elixir/ (34 files)

Subdirectories: `configuration/` (7), `crons/` (2), `data-management/` (3), `enriching-events/` (5), `integrations/` (5), `logs/` (1), `metrics/` (1), `security-policy-reporting/` (1), `testing/` (1), `tracing/` (1), `usage/` (3), `user-feedback/` (2)

| File | Description |
|------|-------------|
| `platforms/elixir/index.mdx` | Sentry's Elixir SDK enables automatic reporting of errors, exceptions and messages. You can also use it to monitor your cron jobs. |
| `platforms/elixir/migration.mdx` | Learn about migrating to a newer version of the Elixir SDK. |
| `platforms/elixir/configuration/index.mdx` | Additional configuration options for the Sentry Elixir SDK. |
| `platforms/elixir/crons/index.mdx` | Sentry Crons allows you to monitor the uptime and performance of any scheduled, recurring job in your application using the Sentry Elixir SD |
| `platforms/elixir/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/elixir/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/elixir/integrations/index.mdx` | Sentry provides additional integrations designed to change configuration or add instrumentation to your application. |
| `platforms/elixir/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Elixir SDK. |
| `platforms/elixir/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements sent from your applications within Sentry using the Elixir SDK. |
| `platforms/elixir/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/elixir/testing/index.mdx` | Verify that your application reports errors to Sentry correctly using the SDK's built-in test helpers. |
| `platforms/elixir/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Elixir SDK and discover valuable performance insights of your application. |
| `platforms/elixir/usage/index.mdx` | Use the Sentry Elixir SDK to manually capture errors and other events. |
| `platforms/elixir/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/go/ (65 files)

Subdirectories: `common/` (51), `guides/` (9), `legacy-sdk/` (5)

| File | Description |
|------|-------------|
| `platforms/go/common/index.mdx` | index.mdx |
| `platforms/go/legacy-sdk/index.mdx` | Legacy SDK |
| `platforms/go/guides/echo/index.mdx` | Echo is a high-performance web framework for building robust and scalable applications in Go. Learn how to set it up with Sentry. Requires E |
| `platforms/go/guides/fasthttp/index.mdx` | Learn how to add Sentry instrumentation to programs using the FastHTTP package. |
| `platforms/go/guides/fiber/index.mdx` | Learn how to add Sentry instrumentation to programs using the Fiber package. |
| `platforms/go/guides/fiberv3/index.mdx` | Learn how to add Sentry instrumentation to programs using Fiber v3. |
| `platforms/go/guides/gin/index.mdx` | Gin is a high-performance HTTP web framework written in Golang. Learn how to set it up with Sentry. |
| `platforms/go/guides/grpc/index.mdx` | Learn how to add Sentry to a Go gRPC server or client using interceptors. |
| `platforms/go/guides/http/index.mdx` | The net/http package provides HTTP client and server implementations. Learn how to add Sentry to programs using this package. |
| `platforms/go/guides/iris/index.mdx` | Iris is a fast, full-featured web framework for Go. Learn how to set it up with Sentry. |
| `platforms/go/guides/negroni/index.mdx` | Negroni is an idiomatic approach to web middleware in Go. Learn how to set it up with Sentry. |
| `platforms/go/common/configuration/index.mdx` | Learn more about additional configuration options for the Go SDK. |
| `platforms/go/common/crons/index.mdx` | Learn how to set up Crons with the Go SDK to monitor the uptime and performance of any scheduled, recurring job in your application. |
| `platforms/go/common/data-management/index.mdx` | Learn more about how to manage your data within your SDK, including how to scrub sensitive information. |
| `platforms/go/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/go/common/integrations/index.mdx` | Learn about the automatic integrations Sentry provides and how to configure them. |
| `platforms/go/common/logs/index.mdx` | Structured logs allow you to send, view, and query logs sent from your applications within Sentry. |
| `platforms/go/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/go/common/migration.mdx` | Learn more about how to migrate from the deprecated Raven SDK. |
| `platforms/go/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/go/common/source-context/index.mdx` | Learn how to show source lines in Go stack traces. |
| `platforms/go/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Go SDK and discover valuable performance insights of your application. |
| `platforms/go/common/troubleshooting.mdx` | Troubleshooting common Go Issues |
| `platforms/go/common/usage/index.mdx` | Use the SDK to capture errors and other events. |

#### platforms/godot/ (37 files)

Subdirectories: `configuration/` (10), `data-management/` (4), `dotnet/` (1), `enriching-events/` (9), `logs/` (1), `metrics/` (1), `migration/` (1), `tracing/` (6), `usage/` (2), `user-feedback/` (1)

| File | Description |
|------|-------------|
| `platforms/godot/index.mdx` | Learn how to set up Sentry's Godot Engine SDK for error monitoring and performance tracking. |
| `platforms/godot/configuration/index.mdx` | Additional configuration options for the Sentry Godot SDK. |
| `platforms/godot/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/godot/dotnet/index.mdx` | Learn how to capture errors from your Godot game's C# (.NET) code with Sentry. |
| `platforms/godot/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/godot/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Godot SDK. |
| `platforms/godot/metrics/index.mdx` | Metrics let you to send, view, and query counters, gauges, and distributions from your Godot Engine game. Use these to track application hea |
| `platforms/godot/migration/index.mdx` | Learn more about migrating to the current version. |
| `platforms/godot/tracing/index.mdx` | Learn how to enable tracing and capture performance data from your Godot Engine game. |
| `platforms/godot/usage/index.mdx` | Use the Sentry Godot SDK to manually capture errors and other events. |
| `platforms/godot/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/java/ (115 files)

Subdirectories: `common/` (98), `guides/` (16)

| File | Description |
|------|-------------|
| `platforms/java/usage.mdx` | Learn more about passing configuration options to a static Sentry#init method Sentry. |
| `platforms/java/common/index.mdx` | index.mdx |
| `platforms/java/guides/spring/index.mdx` | Learn how to use Sentry's Spring SDK. |
| `platforms/java/guides/spring-boot/index.mdx` | Learn how to use Sentry's Spring Boot SDK. |
| `platforms/java/common/async/index.mdx` | Learn about how to propagate Scope to Spring async methods. |
| `platforms/java/common/configuration/index.mdx` | Learn more about how to configure the Sentry Java SDK. These options are set when the SDK is first initialized, passed to the init method as |
| `platforms/java/common/crons/index.mdx` | Sentry Crons allows you to monitor the uptime and performance of any scheduled, recurring job in your application using the Sentry Java SDK. |
| `platforms/java/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/java/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/java/common/feature-flags/index.mdx` | With Feature Flags, Sentry tracks feature flag evaluations in your application using the Sentry Java SDK, keeps an audit log of feature flag |
| `platforms/java/common/gradle/index.mdx` | Learn about using the Sentry Gradle Plugin. |
| `platforms/java/common/integrations/index.mdx` | Learn more about how integrations extend the functionality of our SDK to cover common libraries and environments automatically. |
| `platforms/java/common/legacy/index.mdx` | Legacy SDK (1.7) |
| `platforms/java/common/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Java SDK. |
| `platforms/java/common/maven/index.mdx` | Learn about using the Sentry Maven Plugin. |
| `platforms/java/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/java/common/migration/index.mdx` | Learn about migrating to a newer version of the Java SDK. |
| `platforms/java/common/opentelemetry/index.mdx` | Using OpenTelemetry with the Sentry Java SDK. |
| `platforms/java/common/profiling/index.mdx` | Learn how to enable profiling in your app using the Sentry Java SDK if it is not already set up. |
| `platforms/java/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/java/common/source-context/index.mdx` | Learn about showing your source code as part of stack traces. |
| `platforms/java/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Java SDK and discover valuable performance insights of your application. |
| `platforms/java/common/troubleshooting/index.mdx` | Troubleshoot and resolve common issues with the Java SDK. |
| `platforms/java/common/usage/index.mdx` | Use the Sentry Java SDK to manually capture errors and other events. |
| `platforms/java/common/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/javascript/ (535 files)

Subdirectories: `common/` (221), `guides/` (307), `legacy-sdk/` (7)

| File | Description |
|------|-------------|
| `platforms/javascript/common/index.mdx` | index.mdx |
| `platforms/javascript/legacy-sdk/index.mdx` | JavaScript |
| `platforms/javascript/guides/angular/index.mdx` | Learn how to set up Sentry in your Angular application and capture your first errors. |
| `platforms/javascript/guides/astro/index.mdx` | Learn how to manually set up Sentry in your Astro app and capture your first events. |
| `platforms/javascript/guides/aws-lambda/index.mdx` | AWS Lambda is a serverless compute service offered as part of Amazon Web Services. Learn how to set it up with Sentry. |
| `platforms/javascript/guides/azure-functions/index.mdx` | Learn how to manually set up Sentry in your Azure Functions and capture your first events. |
| `platforms/javascript/guides/bun/index.mdx` | Learn how to manually set up Sentry in your Bun app and capture your first events. |
| `platforms/javascript/guides/capacitor/index.mdx` | Learn how to set up Sentry in your Capacitor application, capture your first events and traces, and view them in Sentry. |
| `platforms/javascript/guides/cloudflare/index.mdx` | Learn how to manually set up Sentry for Cloudflare Workers and capture your first events. |
| `platforms/javascript/guides/cordova/index.mdx` | Learn how to manually set up Sentry in your Cordova app and capture your first errors. |
| `platforms/javascript/guides/deno/index.mdx` | Learn how to manually set up Sentry in your Deno app and capture your first events. |
| `platforms/javascript/guides/effect/index.mdx` | Learn how to set up and configure Sentry in your Effect application, capture your first events and view them in Sentry. |
| `platforms/javascript/guides/electron/index.mdx` | Learn how to manually set up Sentry in your Electron app and capture your first events. |
| `platforms/javascript/guides/elysia/index.mdx` | Learn how to set up Sentry in your Elysia app and capture your first events. |
| `platforms/javascript/guides/ember/index.mdx` | Learn how to set up Sentry in your Ember application and capture your first events. |
| `platforms/javascript/guides/eve/index.mdx` | Learn how to send Eve agent traces, conversations, and errors to Sentry with the Sentry Node SDK. |
| `platforms/javascript/guides/express/index.mdx` | Learn how to manually set up Sentry in your Express app and capture your first events. |
| `platforms/javascript/guides/fastify/index.mdx` | Learn how to manually set up Sentry in your Fastify app and capture your first events. |
| `platforms/javascript/guides/firebase/index.mdx` | Learn how to set up Sentry in your Cloud Functions for Firebase project and capture your first events. |
| `platforms/javascript/guides/flue/index.mdx` | Learn how to send Flue agent traces, model calls, tool executions, and errors to Sentry with the Sentry SDK. |
| `platforms/javascript/guides/gatsby/index.mdx` | Learn how to set up Sentry in your Gatsby application and capture your first events. |
| `platforms/javascript/guides/gcp-functions/index.mdx` | Learn how to manually set up Sentry in your Google Cloud Functions and capture your first events. |
| `platforms/javascript/guides/hapi/index.mdx` | Learn how to manually set up Sentry in your Hapi app and capture your first events. |
| `platforms/javascript/guides/hono/index.mdx` | Learn how to set up Sentry in your Hono app and capture your first events. |
| `platforms/javascript/guides/koa/index.mdx` | Learn how to manually set up Sentry in your Koa app and capture your first events. |
| `platforms/javascript/guides/mastra/index.mdx` | Learn how to send Mastra agent traces, model calls, tool executions, and errors to Sentry with the Sentry SDK. |
| `platforms/javascript/guides/nestjs/index.mdx` | Learn how to set up Sentry in your Nest.js app and capture your first events. |
| `platforms/javascript/guides/nextjs/index.mdx` | Learn how to set up Sentry in your Next.js application using the installation wizard and capture your first events. |
| `platforms/javascript/guides/nitro/index.mdx` | Learn how to set up Sentry in your Nitro app, capture your first events, and monitor performance. |
| `platforms/javascript/guides/node/index.mdx` | Learn how to manually set up Sentry in your Node.js app and capture your first events. |
| `platforms/javascript/guides/nuxt/index.mdx` | Learn how to set up and configure Sentry in your Nuxt application using the installation wizard, capture your first errors, and view them in |
| `platforms/javascript/guides/pi-durable/index.mdx` | Learn how to send Pi Durable agent runs, model requests, tool calls, and errors to Sentry with the Sentry SDK. |
| `platforms/javascript/guides/react/index.mdx` | Learn how to set up Sentry in your React application and capture your first events. |
| `platforms/javascript/guides/react-router/index.mdx` | Learn how to set up and configure Sentry in your React Router application (v7.15+) using the installation wizard, capture your first events, |
| `platforms/javascript/guides/remix/index.mdx` | Learn how to set up and configure Sentry in your Remix application using the installation wizard, capture your first errors, and view them i |
| `platforms/javascript/guides/solid/index.mdx` | Learn how to manually set up Sentry in your Solid app and capture your first events. |
| `platforms/javascript/guides/solidstart/index.mdx` | Learn how to set up Sentry in your SolidStart application and capture your first events. |
| `platforms/javascript/guides/svelte/index.mdx` | Learn how to manually set up Sentry in your Svelte app and capture your first events. |
| `platforms/javascript/guides/sveltekit/index.mdx` | Learn how to set up and configure Sentry in your SvelteKit application using the installation wizard, capture your first errors, and view th |
| `platforms/javascript/guides/tanstackstart-react/index.mdx` | Learn how to set up and configure Sentry in your TanStack Start React application using the installation wizard, capture your first errors,  |
| `platforms/javascript/guides/vue/index.mdx` | Learn how to manually set up Sentry in your Vue app and capture your first events. |
| `platforms/javascript/guides/wasm/index.mdx` | Learn how to manually set up Sentry in your JavaScript application with WebAssembly modules and capture your first events. |
| `platforms/javascript/common/agent-tracing/index.mdx` | Monitor agents with token usage, latency, tool execution, and error tracking. |
| `platforms/javascript/common/best-practices/index.mdx` | Learn how to set up Sentry for several specific use cases with these best practice guides. |
| `platforms/javascript/common/configuration/index.mdx` | Learn about additional configuration options for the JavaScript SDKs. |
| `platforms/javascript/common/crons/index.mdx` | Sentry Crons allows you to monitor the uptime and performance of any scheduled, recurring job in your application using the Sentry JavaScrip |
| `platforms/javascript/common/data-management/index.mdx` | Learn about different ways to scrub data within your SDK before it gets sent to Sentry. |
| `platforms/javascript/common/enriching-events/index.mdx` | Add additional data to your events to make them easier to debug. |
| `platforms/javascript/common/feature-flags/index.mdx` | With Feature Flags, Sentry tracks feature flag evaluations in your application using the Sentry JavaScript SDK, keeps an audit log of featur |
| `platforms/javascript/common/install/index.mdx` | Review our alternate installation methods. |
| `platforms/javascript/common/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the JavaScript SDK. |
| `platforms/javascript/common/mcp-monitoring/index.mdx` | Monitor MCP server tool executions, prompt retrievals, resource access, and errors. |
| `platforms/javascript/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/javascript/common/migration/index.mdx` | Migrate from an older version of our Sentry JavaScript SDK. |
| `platforms/javascript/common/opentelemetry/index.mdx` | Learn how to use OpenTelemetry with Sentry. |
| `platforms/javascript/common/profiling/index.mdx` | Collect & view performance insights for JavaScript programs with Sentry's Profiling integrations. Get started with profiling to understand y |
| `platforms/javascript/common/sampling.mdx` | Learn how to configure the volume of error and transaction events sent to Sentry using the JavaScript SDK. |
| `platforms/javascript/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/javascript/common/session-replay/index.mdx` | Learn how to enable Session Replay in your app if it is not already set up. |
| `platforms/javascript/common/sourcemaps/index.mdx` | Upload your source maps to Sentry to enable readable stack traces in your errors. |
| `platforms/javascript/common/tracing/index.mdx` | Learn how to enable tracing in your app. |
| `platforms/javascript/common/troubleshooting/index.mdx` | If you need help solving issues with your Sentry JavaScript SDK integration, you can read the edge cases documented below. |
| `platforms/javascript/common/usage/index.mdx` | Learn how to use the Sentry JavaScript SDK to manually capture errors and other events. |
| `platforms/javascript/common/user-feedback/index.mdx` | Learn how to enable User Feedback in your app using the Sentry JavaScript SDK. |

#### platforms/kotlin/ (37 files)

Subdirectories: `guides/` (36)

| File | Description |
|------|-------------|
| `platforms/kotlin/index.mdx` | Learn how to set up Sentry's Kotlin SDK for error monitoring and performance tracking. |
| `platforms/kotlin/guides/compose-multiplatform/index.mdx` | Learn how to integrate Sentry's Kotlin Multiplatform SDK into your Compose Multiplatform project for cross-platform error tracking. |
| `platforms/kotlin/guides/kotlin-multiplatform/index.mdx` | Kotlin Multiplatform |

#### platforms/native/ (60 files)

Subdirectories: `advanced-usage/` (7), `common/` (39), `configuration/` (4), `guides/` (4), `logs/` (1), `metrics/` (1), `migration/` (1), `usage/` (1), `user-feedback/` (1)

| File | Description |
|------|-------------|
| `platforms/native/app-hangs.mdx` | Detect when your application becomes unresponsive and report app-hang events to Sentry. |
| `platforms/native/advanced-usage/index.mdx` | Learn how the Native SDK backends handle errors on their supported platforms and how that affects your usage. |
| `platforms/native/common/index.mdx` | index.mdx |
| `platforms/native/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Native SDK. |
| `platforms/native/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/native/migration/index.mdx` | Learn how to migrate to version 1.0.0 of the Native SDK, including the new default backend, versioned library names, and removed APIs. |
| `platforms/native/user-feedback/index.mdx` | Learn how to view user feedback submissions which, paired with the original event, give you additional insight into issues. |
| `platforms/native/guides/breakpad/index.mdx` | Learn about Sentry's integration with Google Breakpad. |
| `platforms/native/guides/crashpad/index.mdx` | Learn about using Sentry with Google Crashpad. |
| `platforms/native/guides/minidumps/index.mdx` | Learn about how Sentry processes Minidump crash reports. |
| `platforms/native/guides/wasm/index.mdx` | Learn about how Sentry processes WASM crash reports. |
| `platforms/native/common/configuration/index.mdx` | Additional configuration options for the Sentry Native SDK. |
| `platforms/native/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/native/common/debug-information.mdx` | Learn about allowing Sentry to fully process native crashes and provide you with symbolicated stack traces, by uploading Debug Information F |
| `platforms/native/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/native/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/native/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Native SDK and discover valuable performance insights of your application. |
| `platforms/native/common/usage/index.mdx` | Use the Sentry Native SDK to manually capture errors and other events. |

#### platforms/nintendo-switch/ (1 files)

| File | Description |
|------|-------------|
| `platforms/nintendo-switch/index.mdx` | Learn how to set up Sentry's Nintendo Switch SDK for error monitoring and performance tracking. |

#### platforms/php/ (77 files)

Subdirectories: `agent/` (1), `common/` (40), `guides/` (31), `legacy-sdk/` (4)

| File | Description |
|------|-------------|
| `platforms/php/index.mdx` | Learn how to set up Sentry in your PHP application. |
| `platforms/php/agent/index.mdx` | Learn how to configure the PHP SDK to send events through a local Sentry Agent process. |
| `platforms/php/legacy-sdk/index.mdx` | Legacy SDK |
| `platforms/php/guides/laravel/index.mdx` | Laravel is a PHP web application framework with expressive, elegant syntax. Learn how to set it up with Sentry. |
| `platforms/php/guides/symfony/index.mdx` | Symfony is a set of reusable PHP components and a PHP framework to build web applications and services. Learn how to set it up with Sentry. |
| `platforms/php/common/configuration/index.mdx` | Additional configuration options for the Sentry PHP SDK. |
| `platforms/php/common/crons/index.mdx` | Sentry Crons allows you to monitor the uptime and performance of any scheduled, recurring job in your application using the Sentry PHP SDK. |
| `platforms/php/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/php/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/php/common/feature-flags/index.mdx` | With Feature Flags, Sentry tracks feature flag evaluations in your application using the Sentry PHP SDK, keeps an audit log of feature flag  |
| `platforms/php/common/integrations/index.mdx` | Learn about the automatic integrations Sentry provides and how to configure them. |
| `platforms/php/common/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the PHP SDK. |
| `platforms/php/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements sent from your applications within Sentry using the PHP SDK. |
| `platforms/php/common/profiling/index.mdx` | Learn more about how to configure our Profiling integration and start profiling your code. |
| `platforms/php/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/php/common/tracing/index.mdx` | Learn how to set up and enable tracing in your PHP app and discover valuable performance insights of your application. |
| `platforms/php/common/troubleshooting/index.mdx` | Troubleshooting steps for PHP |
| `platforms/php/common/usage/index.mdx` | Use the Sentry PHP SDK to manually capture errors and other events. |
| `platforms/php/common/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/playstation/ (1 files)

| File | Description |
|------|-------------|
| `platforms/playstation/index.mdx` | Learn how to set up Sentry's PlayStation SDK for error monitoring and performance tracking. |

#### platforms/powershell/ (26 files)

Subdirectories: `configuration/` (7), `data-management/` (3), `enriching-events/` (7), `tracing/` (5), `usage/` (2)

| File | Description |
|------|-------------|
| `platforms/powershell/index.mdx` | Learn how to set up Sentry's PowerShell SDK for error monitoring and performance tracking. |
| `platforms/powershell/troubleshooting.mdx` | Learn more about how to troubleshoot common issues.  |
| `platforms/powershell/configuration/index.mdx` | Additional configuration options for the Sentry PowerShell SDK. |
| `platforms/powershell/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/powershell/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/powershell/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry PowerShell SDK and discover valuable performance insights of your application. |
| `platforms/powershell/usage/index.mdx` | Use the Sentry PowerShell SDK to manually capture errors and other events. |

#### platforms/python/ (149 files)

Subdirectories: `agent-tracing/` (13), `configuration/` (9), `crons/` (1), `data-management/` (3), `enriching-events/` (10), `feature-flags/` (1), `integrations/` (69), `legacy-sdk/` (8), `logs/` (1), `metrics/` (1), `migration/` (4), `profiling/` (1), `security-policy-reporting/` (1), `tracing/` (20), `usage/` (2), `user-feedback/` (2)

| File | Description |
|------|-------------|
| `platforms/python/index.mdx` | Learn how to set up Sentry in your Python app, capture your first events and traces, and view them in Sentry. |
| `platforms/python/sampling.mdx` | Learn how to configure the volume of error and transaction events sent to Sentry using the Python SDK. |
| `platforms/python/troubleshooting.mdx` | While we don't expect most users of our SDK to run into these issues, we document edge cases here. |
| `platforms/python/agent-tracing/index.mdx` | Monitor agents with token usage, latency, tool execution, and error tracking. |
| `platforms/python/configuration/index.mdx` | Learn about additional configuration options for the Python SDK. |
| `platforms/python/crons/index.mdx` | Sentry Crons allows you to monitor the uptime and performance of any scheduled, recurring job in your application using the Sentry Python SD |
| `platforms/python/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/python/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/python/feature-flags/index.mdx` | With Feature Flags, Sentry tracks feature flag evaluations in your application using the Sentry Python SDK, keeps an audit log of feature fl |
| `platforms/python/integrations/index.mdx` | Sentry provides additional integrations designed to change configuration or add instrumentation to your application. |
| `platforms/python/legacy-sdk/index.mdx` | Legacy SDK |
| `platforms/python/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Python SDK. |
| `platforms/python/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements sent from your applications within Sentry using the Python SDK. |
| `platforms/python/migration/index.mdx` | Migrate from an older version of our Python SDK. |
| `platforms/python/profiling/index.mdx` | Learn how to enable profiling in your app using the Sentry Python SDK if it is not already set up. |
| `platforms/python/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/python/tracing/index.mdx` | With Tracing, Sentry tracks your software performance, measuring metrics like throughput and latency, and displays the impact of errors acro |
| `platforms/python/usage/index.mdx` | Learn how to use the Sentry Python SDK to manually capture errors and other events. |
| `platforms/python/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/react-native/ (120 files)

Subdirectories: `common/` (111), `guides/` (9)

| File | Description |
|------|-------------|
| `platforms/react-native/common/index.mdx` | Learn how to set up Sentry's React Native SDK and capture your first events. |
| `platforms/react-native/guides/expo/index.mdx` | Learn how to set up Sentry in an Expo project and capture your first events, including Expo config plugin, Expo Router tracing, Expo Updates |
| `platforms/react-native/common/build-distribution/index.mdx` | Upload React Native iOS and Android builds to Sentry for distribution to internal teams and beta testers. |
| `platforms/react-native/common/configuration/index.mdx` | Additional configuration options for the Sentry React Native SDK. |
| `platforms/react-native/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/react-native/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/react-native/common/feature-flags/index.mdx` | Generic Feature Flags Integration. |
| `platforms/react-native/common/features/index.mdx` | Learn about the features of Sentry's React Native SDK. |
| `platforms/react-native/common/integrations/index.mdx` | Learn about the integrations available in the Sentry React Native SDK, including default, optional, and platform-specific integrations. |
| `platforms/react-native/common/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the React Native SDK. |
| `platforms/react-native/common/manual-setup/index.mdx` | Review the options to manage . |
| `platforms/react-native/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/react-native/common/migration/index.mdx` | Learn how to migrate to the new versions of Sentry's React Native SDK. |
| `platforms/react-native/common/overhead/index.mdx` | Learn about Sentry's React Native SDK overhead and how you can tailor your configuration to minimize it. |
| `platforms/react-native/common/profiling/index.mdx` | Learn how to enable profiling in your app using the Sentry React Native SDK if it is not already set up. |
| `platforms/react-native/common/releases/index.mdx` | Learn about Sentry's release channels for Mobile SDK updates. |
| `platforms/react-native/common/session-replay/index.mdx` | Learn how to enable Session Replay in your mobile app. |
| `platforms/react-native/common/size-analysis/index.mdx` | Upload React Native iOS and Android builds to Sentry for size analysis. |
| `platforms/react-native/common/sourcemaps/index.mdx` | Learn more about how to upload your source maps to Sentry. |
| `platforms/react-native/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry React Native SDK and discover valuable performance insights of your application. |
| `platforms/react-native/common/troubleshooting/index.mdx` | Troubleshoot and resolve common issues with the React Native SDK. |
| `platforms/react-native/common/upload-debug/index.mdx` | Learn about using the Sentry Gradle Plugin or sentry-cli for providing debug symbols to Sentry. |
| `platforms/react-native/common/usage/index.mdx` | Use the Sentry React Native SDK to manually capture errors and other events. |
| `platforms/react-native/common/user-feedback/index.mdx` | Learn how to enable User Feedback in your app using the Sentry React Native SDK. |

#### platforms/ruby/ (53 files)

Subdirectories: `common/` (50), `guides/` (2), `logs/` (1)

| File | Description |
|------|-------------|
| `platforms/ruby/common/index.mdx` | index.mdx |
| `platforms/ruby/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Ruby SDK. |
| `platforms/ruby/common/configuration/index.mdx` | Learn about additional configuration options for the Ruby SDK. |
| `platforms/ruby/common/crons/index.mdx` | Sentry Crons allows you to monitor the uptime and performance of any scheduled, recurring job in your application using the Sentry Ruby SDK. |
| `platforms/ruby/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/ruby/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/ruby/common/integrations/index.mdx` | Sentry provides additional integrations designed to change configuration or add instrumentation to your application. |
| `platforms/ruby/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements sent from your applications within Sentry using the Ruby SDK. |
| `platforms/ruby/common/migration.mdx` | Learn about how to migrate from the deprecated sentry-raven SDK. |
| `platforms/ruby/common/profiling/index.mdx` | Learn how to enable profiling in your app using the Sentry Ruby SDK if it is not already set up. |
| `platforms/ruby/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/ruby/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Ruby SDK and discover valuable performance insights of your application. |
| `platforms/ruby/common/troubleshooting.mdx` | Learn how to troubleshoot your SDK setup. |
| `platforms/ruby/common/usage/index.mdx` | Use the Sentry Ruby SDK to manually capture errors and other events. |
| `platforms/ruby/common/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/rust/ (35 files)

Subdirectories: `common/` (31), `guides/` (3)

| File | Description |
|------|-------------|
| `platforms/rust/index.mdx` | Learn how to set up Sentry's Rust SDK for error monitoring and performance tracking. |
| `platforms/rust/guides/actix-web/index.mdx` | Learn about monitoring your Actix Web application with Sentry. |
| `platforms/rust/guides/axum/index.mdx` | Learn about monitoring your axum application with Sentry. |
| `platforms/rust/guides/tracing/index.mdx` | Learn about monitoring your Rust application with Sentry's tokio-rs/tracing integration. |
| `platforms/rust/common/configuration/index.mdx` | Additional configuration options for the Sentry Rust SDK. |
| `platforms/rust/common/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/rust/common/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/rust/common/logs/index.mdx` | Structured logs allow you to send, view, and query logs sent from your applications within Sentry. |
| `platforms/rust/common/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and measurements from your Sentry-configured apps to track application health and |
| `platforms/rust/common/native-crash-reporting/index.mdx` | Learn how to capture native crashes, such as segmentation faults, from your Rust application as minidumps. |
| `platforms/rust/common/security-policy-reporting/index.mdx` | Learn how Sentry can help manage Content-Security-Policy violations and reports here. |
| `platforms/rust/common/source-context/index.mdx` | Learn about showing your source code as part of stack traces. |
| `platforms/rust/common/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Rust SDK and discover valuable performance insights of your application. |
| `platforms/rust/common/troubleshooting/index.mdx` | If you need help solving issues with the Sentry Rust SDK, you can read the edge cases documented below. |
| `platforms/rust/common/usage/index.mdx` | Use the Sentry Rust SDK to manually capture errors and other events. |

#### platforms/unity/ (54 files)

Subdirectories: `configuration/` (11), `data-management/` (10), `enriching-events/` (10), `game-consoles/` (1), `logs/` (1), `metrics/` (1), `migration/` (1), `native-support/` (2), `tracing/` (8), `troubleshooting/` (2), `usage/` (4), `user-feedback/` (1)

| File | Description |
|------|-------------|
| `platforms/unity/app-hangs.mdx` | Detect app hangs and ANRs in Unity games. |
| `platforms/unity/index.mdx` | Learn how to set up Sentry's Unity SDK for error monitoring and performance tracking. |
| `platforms/unity/configuration/index.mdx` | Additional configuration options for the Sentry Unity SDK. |
| `platforms/unity/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/unity/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/unity/game-consoles/index.mdx` | Learn how to configure your Unity SDK to capture errors on Xbox, PlayStation and Nintendo Switch. |
| `platforms/unity/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Unity SDK. |
| `platforms/unity/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and distributions from your Unity game to track application health and drill down |
| `platforms/unity/migration/index.mdx` | Learn more about migrating to the current version. |
| `platforms/unity/native-support/index.mdx` | Learn how the Unity SDK handles native support. |
| `platforms/unity/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Unity SDK and discover valuable performance insights of your application. |
| `platforms/unity/troubleshooting/index.mdx` | Learn more about how to troubleshoot common issues with the Unity SDK.  |
| `platforms/unity/usage/index.mdx` | Use the Sentry Unity SDK to manually capture errors and other events. |
| `platforms/unity/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/unreal/ (50 files)

Subdirectories: `configuration/` (13), `data-management/` (10), `enriching-events/` (8), `game-consoles/` (1), `game-state-capture/` (1), `install/` (1), `logs/` (1), `metrics/` (1), `migration/` (1), `session-replay/` (1), `tracing/` (5), `troubleshooting/` (1), `usage/` (3), `user-feedback/` (1)

| File | Description |
|------|-------------|
| `platforms/unreal/app-hangs.mdx` | Detect app hangs and app-not-responding events in Unreal Engine games. |
| `platforms/unreal/index.mdx` | Learn how to set up Sentry's Unreal Engine SDK and capture your first events. |
| `platforms/unreal/configuration/index.mdx` | Additional configuration options for the Sentry Unreal SDK. |
| `platforms/unreal/data-management/index.mdx` | Manage your events by pre-filtering, scrubbing sensitive information, and forwarding them to other systems. |
| `platforms/unreal/enriching-events/index.mdx` | Enrich events with additional context to make debugging simpler. |
| `platforms/unreal/game-consoles/index.mdx` | Learn how to configure your SDK to capture errors on Xbox, PlayStation and Nintendo Switch. |
| `platforms/unreal/game-state-capture/index.mdx` | Learn how to record the game state in the moments leading up to a crash with Sentry's Unreal Engine SDK. |
| `platforms/unreal/install/index.mdx` | All the installation methods for the Unreal Engine SDK. |
| `platforms/unreal/logs/index.mdx` | Structured logs allow you to send, view and query logs sent from your applications within Sentry using the Unreal SDK. |
| `platforms/unreal/metrics/index.mdx` | Metrics allow you to send, view and query counters, gauges and distributions from your Unreal Engine game to track application health and dr |
| `platforms/unreal/migration/index.mdx` | Learn more about migrating to the current version. |
| `platforms/unreal/session-replay/index.mdx` | Learn how to capture gameplay video of the moments leading up to a crash with Sentry's Unreal Engine SDK. |
| `platforms/unreal/tracing/index.mdx` | Learn how to enable tracing in your app using the Sentry Unreal SDK and discover valuable performance insights of your application. |
| `platforms/unreal/troubleshooting/index.mdx` | Learn more about how to troubleshoot common issues with the Unreal Engine SDK. |
| `platforms/unreal/usage/index.mdx` | Use the Sentry Unreal SDK to manually capture errors and other events. |
| `platforms/unreal/user-feedback/index.mdx` | Learn more about collecting user feedback when an event occurs. Sentry pairs the feedback with the original event, giving you additional ins |

#### platforms/xbox/ (1 files)

| File | Description |
|------|-------------|
| `platforms/xbox/index.mdx` | Learn how to set up Sentry's Xbox SDK for error monitoring and performance tracking. |

