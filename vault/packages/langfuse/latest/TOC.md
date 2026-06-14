# Langfuse Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Platform overview, v4 migration, security | 3 |
| `contents/observability/` | LLM tracing, SDK instrumentation, features | 35 |
| `contents/prompt-management/` | Prompt versioning, caching, CI/CD | 19 |
| `contents/evaluation/` | Scores, datasets, experiments, LLM-as-a-judge | 16 |
| `contents/api-and-data-platform/` | Public API, data export, MCP server | 10 |
| `contents/administration/` | Auth, SSO, RBAC, data retention | 9 |
| `contents/metrics/` | Dashboards and metrics API | 3 |

## contents/ (root)

| File | Description |
|------|-------------|
| `index.mdx` | Platform overview — all Langfuse features at a glance |
| `v4.mdx` | Fast Preview migration: observations-first data model, SDK upgrade steps |
| `security-and-guardrails.mdx` | LLM security guardrails, PII protection, monitoring |

## observability/

| File | Description |
|------|-------------|
| `overview.mdx` | Observability feature overview |
| `get-started.mdx` | Getting started with LLM tracing |
| `data-model.mdx` | Traces, spans, generations data model |
| `troubleshooting-and-faq.mdx` | Observability troubleshooting and FAQ |
| `sdk/overview.mdx` | SDK overview and supported languages |
| `sdk/instrumentation.mdx` | Python/JS SDK instrumentation guide |
| `sdk/advanced-features.mdx` | Advanced SDK features |
| `sdk/troubleshooting-and-faq.mdx` | SDK troubleshooting and FAQ |
| `sdk/upgrade-path/index.mdx` | SDK upgrade path overview |
| `sdk/upgrade-path/python-v2-to-v3.mdx` | Python SDK v2 to v3 migration |
| `sdk/upgrade-path/python-v3-to-v4.mdx` | Python SDK v3 to v4 migration |
| `sdk/upgrade-path/js-v3-to-v4.mdx` | JS SDK v3 to v4 migration |
| `sdk/upgrade-path/js-v4-to-v5.mdx` | JS SDK v4 to v5 migration |
| `features/observation-types.mdx` | Traces, spans, generations, events |
| `features/agent-graphs.mdx` | Agent graph visualization |
| `features/sessions.mdx` | Multi-turn conversation sessions |
| `features/users.mdx` | User tracking |
| `features/token-and-cost-tracking.mdx` | Token usage and cost tracking |
| `features/metadata.mdx` | Custom metadata on traces |
| `features/tags.mdx` | Tagging traces and observations |
| `features/environments.mdx` | Environment separation (dev/prod) |
| `features/releases-and-versioning.mdx` | Release and version tracking |
| `features/sampling.mdx` | Trace sampling configuration |
| `features/masking.mdx` | PII masking for inputs/outputs |
| `features/multi-modality.mdx` | Images and multi-modal traces |
| `features/mcp-tracing.mdx` | MCP server tracing |
| `features/log-levels.mdx` | Log level support |
| `features/comments.mdx` | Comments on traces |
| `features/corrections.mdx` | Human corrections on traces |
| `features/trace-ids-and-distributed-tracing.mdx` | Trace IDs and distributed tracing |
| `features/queuing-batching.mdx` | SDK queuing and batching behavior |
| `features/full-text-search.mdx` | Full-text search across traces |
| `features/url.mdx` | Trace URLs and sharing |
| `features/user-feedback.mdx` | Collecting user feedback on traces |
| `features/web-callouts.mdx` | HTTP web callouts from UI |

## prompt-management/

| File | Description |
|------|-------------|
| `overview.mdx` | Prompt management feature overview |
| `get-started.mdx` | Getting started with prompt management |
| `data-model.mdx` | Prompt data model and versioning |
| `troubleshooting-and-faq.mdx` | Prompt management FAQ |
| `features/prompt-version-control.mdx` | Version control for prompts |
| `features/variables.mdx` | Prompt variables and templating |
| `features/message-placeholders.mdx` | Message placeholder syntax |
| `features/composability.mdx` | Composing prompts from partials |
| `features/caching.mdx` | Client-side prompt caching |
| `features/guaranteed-availability.mdx` | Fallback for offline/CDN scenarios |
| `features/a-b-testing.mdx` | A/B testing prompts |
| `features/playground.mdx` | In-UI prompt playground |
| `features/config.mdx` | Prompt config (model params, temperature) |
| `features/folders.mdx` | Organizing prompts into folders |
| `features/link-to-traces.mdx` | Linking prompt versions to traces |
| `features/github-integration.mdx` | GitHub sync for prompts |
| `features/mcp-server.mdx` | Prompt management MCP server |
| `features/webhooks-slack-integrations.mdx` | Webhooks and Slack notifications |
| `features/n8n-node.mdx` | n8n integration for prompts |

## evaluation/

| File | Description |
|------|-------------|
| `overview.mdx` | Evaluation feature overview |
| `core-concepts.mdx` | Core evaluation concepts |
| `troubleshooting-and-faq.mdx` | Evaluation troubleshooting and FAQ |
| `scores/overview.mdx` | Scores overview |
| `scores/data-model.mdx` | Score data model |
| `scores/score-analytics.mdx` | Score analytics and aggregation |
| `evaluation-methods/llm-as-a-judge.mdx` | Automated LLM-as-a-judge evaluation |
| `evaluation-methods/code-evaluators.mdx` | Custom code-based evaluators |
| `evaluation-methods/annotation-queues.mdx` | Human annotation queues |
| `evaluation-methods/scores-via-sdk.mdx` | Submitting scores via SDK |
| `evaluation-methods/scores-via-ui.mdx` | Submitting scores via UI |
| `experiments/overview.mdx` | Experiments overview |
| `experiments/datasets.mdx` | Creating and managing datasets |
| `experiments/data-model.mdx` | Experiment data model |
| `experiments/experiments-via-sdk.mdx` | Running experiments via SDK |
| `experiments/experiments-via-ui.mdx` | Running experiments via UI |
| `experiments/experiments-ci-cd.mdx` | CI/CD integration for experiments |

## api-and-data-platform/

| File | Description |
|------|-------------|
| `overview.mdx` | API and data platform overview |
| `features/public-api.mdx` | REST public API reference |
| `features/observations-api.mdx` | Observations ingestion API |
| `features/query-via-sdk.mdx` | Querying data via SDK |
| `features/export-from-ui.mdx` | Exporting data from the UI |
| `features/export-to-blob-storage.mdx` | Blob storage export (S3, GCS) |
| `features/blob-storage-export-fields.mdx` | Exported data schema and fields |
| `features/cli.mdx` | Langfuse CLI reference |
| `features/mcp-server.mdx` | Authenticated MCP server |
| `features/agent-skill.mdx` | Langfuse agent skill for coding agents |

## administration/

| File | Description |
|------|-------------|
| `authentication-and-sso.mdx` | Authentication and SSO setup |
| `rbac.mdx` | Role-based access control |
| `scim-and-org-api.mdx` | SCIM provisioning and org API |
| `audit-logs.mdx` | Audit log access |
| `llm-connection.mdx` | LLM connection configuration |
| `data-retention.mdx` | Data retention policies |
| `data-deletion.mdx` | Data deletion and GDPR compliance |
| `spend-alerts.mdx` | Spend alerts and cost monitoring |
| `troubleshooting-and-faq.mdx` | Admin troubleshooting and FAQ |

## metrics/

| File | Description |
|------|-------------|
| `overview.mdx` | Metrics and dashboards overview |
| `features/custom-dashboards.mdx` | Building custom dashboards |
| `features/metrics-api.mdx` | Metrics API for custom queries |
