---
name: olore-langfuse-latest
description: Local langfuse documentation reference (latest). Langfuse LLM observability documentation. Use for LLM tracing, evaluation, prompt management, datasets, experiments, OpenTelemetry integration, and SDK setup.
---

# langfuse Documentation

Langfuse LLM observability documentation. Use for LLM tracing, evaluation, prompt management, datasets, experiments, OpenTelemetry integration, and SDK setup.

## Documentation Structure

```
contents/
├── observability/       # LLM tracing, SDK, data model, features (33 files)
├── prompt-management/   # Prompt versioning, variables, caching, features (19 files)
├── evaluation/          # Scores, LLM-as-judge, datasets, experiments (12 files)
├── administration/      # Auth, RBAC, data retention, settings (10 files)
├── api-and-data-platform/ # REST API, CLI, data export, queries (8 files)
├── metrics/             # Dashboards and metrics API (3 files)
├── index.mdx            # Platform overview
└── security-and-guardrails.mdx  # LLM security and PII protection
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / tracing | `contents/observability/get-started.mdx`, `contents/observability/sdk/instrumentation.mdx`, `contents/observability/sdk/overview.mdx` |
| Traces, spans, generations | `contents/observability/data-model.mdx`, `contents/observability/features/observation-types.mdx` |
| SDK instrumentation (Python/JS) | `contents/observability/sdk/instrumentation.mdx`, `contents/observability/sdk/advanced-features.mdx` |
| SDK migration | `contents/observability/sdk/upgrade-path/` |
| Sessions, users, tags | `contents/observability/features/sessions.mdx`, `contents/observability/features/users.mdx`, `contents/observability/features/tags.mdx` |
| Token and cost tracking | `contents/observability/features/token-and-cost-tracking.mdx` |
| Sampling and masking | `contents/observability/features/sampling.mdx`, `contents/observability/features/masking.mdx` |
| Prompt management | `contents/prompt-management/get-started.mdx`, `contents/prompt-management/data-model.mdx` |
| Prompt variables and caching | `contents/prompt-management/features/variables.mdx`, `contents/prompt-management/features/caching.mdx` |
| Evaluation / scoring | `contents/evaluation/core-concepts.mdx`, `contents/evaluation/evaluation-methods/scores-via-sdk.mdx` |
| LLM-as-a-judge | `contents/evaluation/evaluation-methods/llm-as-a-judge.mdx` |
| Datasets and experiments | `contents/evaluation/experiments/datasets.mdx`, `contents/evaluation/experiments/experiments-via-sdk.mdx` |
| Public API and data export | `contents/api-and-data-platform/features/public-api.mdx`, `contents/api-and-data-platform/features/observations-api.mdx` |
| RBAC and SSO | `contents/administration/rbac.mdx`, `contents/administration/authentication-and-sso.mdx` |
| Security and guardrails | `contents/security-and-guardrails.mdx` |

## When to use

Use this skill when the user asks about:
- Setting up LLM tracing, observability, or monitoring with Langfuse
- Instrumenting Python or JavaScript applications with the Langfuse SDK
- Managing prompts, versions, and variables in Langfuse
- Running evaluations, LLM-as-a-judge scoring, or experiments
- Creating datasets and running experiments/evals
- Using the Langfuse REST API or CLI for data access
- Configuring RBAC, SSO, or data retention
- Distributed tracing, sessions, and user tracking

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
