---
name: olore-langfuse-latest
description: Local Langfuse documentation reference (latest). Langfuse LLM observability documentation. Use for LLM tracing, evaluation, prompt management, datasets, experiments, OpenTelemetry integration, and SDK setup.
---

# Langfuse Documentation

Langfuse is an open-source AI engineering platform for LLM observability, prompt management, and evaluation. Use this skill when working on LLM tracing, evaluation workflows, prompt versioning, datasets, experiments, or any Langfuse SDK integration.

## Documentation Structure

```
contents/
├── index.mdx               # Platform overview (start here)
├── v4.mdx                  # Fast Preview / v4 migration guide
├── security-and-guardrails.mdx
├── observability/          # LLM tracing, SDK, features (35 files)
├── prompt-management/      # Prompt versioning, caching, CI/CD (19 files)
├── evaluation/             # Scores, datasets, experiments, judges (16 files)
├── api-and-data-platform/  # REST API, export, MCP server (10 files)
├── administration/         # Auth, SSO, RBAC, data retention (9 files)
└── metrics/                # Dashboards and metrics API (3 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started with tracing | `contents/observability/get-started.mdx`, `contents/observability/sdk/instrumentation.mdx` |
| SDK setup (Python/JS) | `contents/observability/sdk/overview.mdx`, `contents/observability/sdk/instrumentation.mdx` |
| SDK migration | `contents/observability/sdk/upgrade-path/python-v3-to-v4.mdx`, `contents/observability/sdk/upgrade-path/js-v4-to-v5.mdx` |
| v4 Fast Preview upgrade | `contents/v4.mdx` |
| Trace data model | `contents/observability/data-model.mdx` |
| Agent tracing | `contents/observability/features/agent-graphs.mdx`, `contents/observability/features/mcp-tracing.mdx` |
| Sessions and users | `contents/observability/features/sessions.mdx`, `contents/observability/features/users.mdx` |
| Cost tracking | `contents/observability/features/token-and-cost-tracking.mdx` |
| Sampling and masking | `contents/observability/features/sampling.mdx`, `contents/observability/features/masking.mdx` |
| Prompt management | `contents/prompt-management/get-started.mdx`, `contents/prompt-management/overview.mdx` |
| Prompt versioning | `contents/prompt-management/features/prompt-version-control.mdx` |
| Prompt variables and templates | `contents/prompt-management/features/variables.mdx`, `contents/prompt-management/features/message-placeholders.mdx` |
| Prompt caching | `contents/prompt-management/features/caching.mdx` |
| A/B testing prompts | `contents/prompt-management/features/a-b-testing.mdx` |
| LLM-as-a-judge evaluation | `contents/evaluation/evaluation-methods/llm-as-a-judge.mdx` |
| Scores and scoring | `contents/evaluation/scores/overview.mdx`, `contents/evaluation/evaluation-methods/scores-via-sdk.mdx` |
| Datasets | `contents/evaluation/experiments/datasets.mdx` |
| Running experiments | `contents/evaluation/experiments/experiments-via-sdk.mdx`, `contents/evaluation/experiments/experiments-ci-cd.mdx` |
| Annotation / human eval | `contents/evaluation/evaluation-methods/annotation-queues.mdx` |
| Public REST API | `contents/api-and-data-platform/features/public-api.mdx` |
| Querying data | `contents/api-and-data-platform/features/query-via-sdk.mdx` |
| Data export | `contents/api-and-data-platform/features/export-from-ui.mdx`, `contents/api-and-data-platform/features/export-to-blob-storage.mdx` |
| MCP server (authenticated) | `contents/api-and-data-platform/features/mcp-server.mdx` |
| Auth / SSO / RBAC | `contents/administration/authentication-and-sso.mdx`, `contents/administration/rbac.mdx` |
| Data retention and deletion | `contents/administration/data-retention.mdx`, `contents/administration/data-deletion.mdx` |

## When to use

Use this skill when the user asks about:
- Setting up Langfuse tracing in Python or JavaScript/TypeScript
- Integrating Langfuse with LLM frameworks (LangChain, LlamaIndex, OpenAI, etc.)
- Prompt management, versioning, and deployment via Langfuse
- Evaluation workflows: LLM-as-a-judge, code evaluators, annotation queues
- Datasets and experiment tracking in Langfuse
- Migrating to SDK v4 (Python) or v5 (JS) / Fast Preview
- Querying Langfuse data via SDK or public REST API
- Exporting traces to S3/GCS or other blob storage
- Configuring SSO, RBAC, or data retention in Langfuse
- OpenTelemetry and distributed tracing with Langfuse

## How to find information

1. Use the Topic Guide above to identify relevant files
2. Read `TOC.md` for the complete file listing by directory
3. Read specific files from `contents/{path}`
