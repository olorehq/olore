# langfuse Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/administration/` | Admin settings, auth, RBAC, data management | 10 |
| `contents/api-and-data-platform/` | Public API, data export, CLI, SDK queries | 8 |
| `contents/evaluation/` | Evaluation methods, scores, experiments, datasets | 12 |
| `contents/metrics/` | Analytics dashboards, metrics API | 3 |
| `contents/observability/` | Tracing, SDK instrumentation, features | 33 |
| `contents/prompt-management/` | Prompt versioning, variables, caching, features | 19 |
| `contents/` | Root index and security guide | 2 |

## administration/

| File | Description |
|------|-------------|
| `audit-logs.mdx` | Audit log access and configuration |
| `authentication-and-sso.mdx` | SSO and authentication setup |
| `billable-units.mdx` | Billable usage units explained |
| `data-deletion.mdx` | Data deletion policies and API |
| `data-retention.mdx` | Data retention configuration |
| `llm-connection.mdx` | Configuring LLM provider connections |
| `rbac.mdx` | Role-based access control |
| `scim-and-org-api.mdx` | SCIM provisioning and org management API |
| `spend-alerts.mdx` | Spend alert configuration |
| `troubleshooting-and-faq.mdx` | Admin troubleshooting and FAQ |

## api-and-data-platform/

| File | Description |
|------|-------------|
| `overview.mdx` | API and data platform overview |
| `features/cli.mdx` | CLI tool usage and commands |
| `features/export-from-ui.mdx` | Exporting data from the Langfuse UI |
| `features/export-to-blob-storage.mdx` | Blob storage export configuration |
| `features/mcp-server.mdx` | Authenticated MCP server for data platform |
| `features/observations-api.mdx` | Observations API reference |
| `features/public-api.mdx` | Public REST API reference |
| `features/query-via-sdk.mdx` | Querying data via SDK |

## evaluation/

| File | Description |
|------|-------------|
| `core-concepts.mdx` | Core concepts for evaluation |
| `overview.mdx` | Evaluation feature overview |
| `troubleshooting-and-faq.mdx` | Evaluation troubleshooting and FAQ |
| `evaluation-methods/annotation-queues.mdx` | Human annotation queue setup |
| `evaluation-methods/llm-as-a-judge.mdx` | LLM-as-a-judge evaluation setup |
| `evaluation-methods/score-analytics.mdx` | Score analytics and reporting |
| `evaluation-methods/scores-via-sdk.mdx` | Submitting scores via SDK |
| `evaluation-methods/scores-via-ui.mdx` | Submitting scores via UI |
| `experiments/data-model.mdx` | Experiment data model |
| `experiments/datasets.mdx` | Dataset creation and management |
| `experiments/experiments-via-sdk.mdx` | Running experiments via SDK |
| `experiments/experiments-via-ui.mdx` | Running experiments via UI |

## metrics/

| File | Description |
|------|-------------|
| `overview.mdx` | Metrics feature overview |
| `features/custom-dashboards.mdx` | Custom dashboard creation |
| `features/metrics-api.mdx` | Metrics API reference |

## observability/

| File | Description |
|------|-------------|
| `data-model.mdx` | Observability data model (traces, spans, generations) |
| `get-started.mdx` | Getting started with observability |
| `overview.mdx` | Observability feature overview |
| `troubleshooting-and-faq.mdx` | Observability troubleshooting and FAQ |
| `features/agent-graphs.mdx` | Agent graph visualization |
| `features/comments.mdx` | Trace comments |
| `features/corrections.mdx` | Trace corrections |
| `features/environments.mdx` | Environment tracking |
| `features/log-levels.mdx` | Log level configuration |
| `features/masking.mdx` | PII masking configuration |
| `features/mcp-tracing.mdx` | MCP tool call tracing |
| `features/metadata.mdx` | Metadata on traces and spans |
| `features/multi-modality.mdx` | Multi-modal input/output tracking |
| `features/observation-types.mdx` | Observation types (span, generation, event) |
| `features/queuing-batching.mdx` | SDK queuing and batching behavior |
| `features/releases-and-versioning.mdx` | Release and version tracking |
| `features/sampling.mdx` | Trace sampling configuration |
| `features/sessions.mdx` | Session tracking for multi-turn conversations |
| `features/tags.mdx` | Tag traces and observations |
| `features/token-and-cost-tracking.mdx` | Token and cost tracking |
| `features/trace-ids-and-distributed-tracing.mdx` | Trace IDs and distributed tracing |
| `features/url.mdx` | Trace URL generation |
| `features/user-feedback.mdx` | Collecting user feedback on traces |
| `features/users.mdx` | User tracking |
| `sdk/advanced-features.mdx` | Advanced SDK features |
| `sdk/instrumentation.mdx` | SDK instrumentation guide |
| `sdk/overview.mdx` | SDK overview (Python and JS) |
| `sdk/troubleshooting-and-faq.mdx` | SDK troubleshooting and FAQ |
| `sdk/upgrade-path/index.mdx` | SDK upgrade path overview |
| `sdk/upgrade-path/js-v3-to-v4.mdx` | JS SDK v3 to v4 migration |
| `sdk/upgrade-path/js-v4-to-v5.mdx` | JS SDK v4 to v5 migration |
| `sdk/upgrade-path/python-v2-to-v3.mdx` | Python SDK v2 to v3 migration |
| `sdk/upgrade-path/python-v3-to-v4.mdx` | Python SDK v3 to v4 migration |

## prompt-management/

| File | Description |
|------|-------------|
| `data-model.mdx` | Prompt data model |
| `get-started.mdx` | Getting started with prompt management |
| `overview.mdx` | Prompt management overview |
| `troubleshooting-and-faq.mdx` | Prompt management troubleshooting and FAQ |
| `features/a-b-testing.mdx` | A/B testing prompts |
| `features/caching.mdx` | Prompt caching configuration |
| `features/composability.mdx` | Composing prompts |
| `features/config.mdx` | Prompt config (model parameters) |
| `features/folders.mdx` | Organizing prompts into folders |
| `features/github-integration.mdx` | GitHub integration for prompts |
| `features/guaranteed-availability.mdx` | Guaranteed prompt availability |
| `features/link-to-traces.mdx` | Linking prompts to traces |
| `features/mcp-server.mdx` | MCP server for prompt management |
| `features/message-placeholders.mdx` | Message placeholder syntax |
| `features/n8n-node.mdx` | n8n workflow integration |
| `features/playground.mdx` | Prompt playground |
| `features/prompt-version-control.mdx` | Prompt version control |
| `features/variables.mdx` | Prompt variable syntax and usage |
| `features/webhooks-slack-integrations.mdx` | Webhook and Slack integrations |

## Root Files

| File | Description |
|------|-------------|
| `index.mdx` | Langfuse overview and feature summary |
| `security-and-guardrails.mdx` | LLM security, guardrails, and PII protection |
