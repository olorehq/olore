---
name: olore-tensorzero-latest
description: Local TensorZero documentation reference (latest). TensorZero documentation. Use for LLM gateway configuration, inference API, model provider integrations, optimization (fine-tuning, DICL), experimentation, evaluations, deployment, and observability.
---

# TensorZero Documentation

TensorZero documentation. Use for LLM gateway configuration, inference API, model provider integrations, optimization (fine-tuning, DICL), experimentation, evaluations, deployment, and observability.

## Documentation Structure

```
contents/
├── gateway/          # LLM gateway API, configuration, guides (24 files)
├── integrations/     # Model provider integrations (21 files)
├── operations/       # Auth, rate limits, observability, credentials (9 files)
├── deployment/       # Deployment and infrastructure setup (8 files)
├── evaluations/      # Inference and workflow evaluations (6 files)
├── optimization/     # Fine-tuning, DICL, GEPA (4 files)
├── experimentation/  # A/B testing and experiments (3 files)
├── observability/    # Querying historical inferences (1 file)
└── (root)            # Index, quickstart, FAQ (3 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/quickstart.mdx`, `contents/index.mdx` |
| Gateway configuration | `contents/gateway/configuration-reference.mdx`, `contents/gateway/configure-functions-and-variants.mdx`, `contents/gateway/configure-models-and-providers.mdx` |
| Inference API | `contents/gateway/api-reference/inference.mdx`, `contents/gateway/api-reference/inference-openai-compatible.mdx` |
| Prompt templates | `contents/gateway/create-a-prompt-template.mdx` |
| Structured outputs | `contents/gateway/generate-structured-outputs.mdx` |
| Tool use | `contents/gateway/guides/tool-use.mdx` |
| Batch inference | `contents/gateway/api-reference/batch-inference.mdx`, `contents/gateway/guides/batch-inference.mdx` |
| Feedback and metrics | `contents/gateway/api-reference/feedback.mdx`, `contents/gateway/guides/metrics-feedback.mdx` |
| Retries and fallbacks | `contents/gateway/guides/retries-fallbacks.mdx` |
| Inference caching | `contents/gateway/guides/inference-caching.mdx` |
| Episodes | `contents/gateway/guides/episodes.mdx` |
| Model providers | `contents/integrations/model-providers/index.mdx` (then specific provider file) |
| OpenAI provider | `contents/integrations/model-providers/openai.mdx` |
| Anthropic provider | `contents/integrations/model-providers/anthropic.mdx` |
| AWS Bedrock | `contents/integrations/model-providers/aws-bedrock.mdx` |
| Google / Vertex AI | `contents/integrations/model-providers/gcp-vertex-ai-gemini.mdx`, `contents/integrations/model-providers/google-ai-studio-gemini.mdx` |
| Self-hosted models (vLLM, TGI, SGLang) | `contents/integrations/model-providers/vllm.mdx`, `contents/integrations/model-providers/tgi.mdx`, `contents/integrations/model-providers/sglang.mdx` |
| Fine-tuning (SFT) | `contents/optimization/supervised-fine-tuning-sft.mdx` |
| DICL optimization | `contents/optimization/dynamic-in-context-learning-dicl.mdx` |
| GEPA optimization | `contents/optimization/gepa.mdx` |
| Evaluations | `contents/evaluations/index.mdx`, `contents/evaluations/inference-evaluations/tutorial.mdx` |
| A/B experimentation | `contents/experimentation/run-static-ab-tests.mdx`, `contents/experimentation/run-adaptive-ab-tests.mdx` |
| Authentication | `contents/operations/set-up-auth-for-tensorzero.mdx` |
| Rate limiting | `contents/operations/enforce-custom-rate-limits.mdx` |
| Credentials management | `contents/operations/manage-credentials.mdx` |
| OpenTelemetry / Prometheus | `contents/operations/export-opentelemetry-traces.mdx`, `contents/operations/export-prometheus-metrics.mdx` |
| Usage and cost tracking | `contents/operations/track-usage-and-cost.mdx` |
| Deployment (gateway) | `contents/deployment/tensorzero-gateway.mdx` |
| Deployment (databases) | `contents/deployment/clickhouse.mdx`, `contents/deployment/postgres.mdx` |
| Historical inference queries | `contents/observability/query-historical-inferences.mdx` |

## When to use

Use this skill when the user asks about:
- Setting up or configuring the TensorZero LLM gateway
- Calling LLMs via the inference API (including OpenAI-compatible API)
- Integrating specific model providers (OpenAI, Anthropic, Bedrock, Gemini, etc.)
- Structured outputs, tool use, embeddings, or multimodal inputs
- Fine-tuning workflows (SFT, DICL, GEPA)
- Running A/B experiments or adaptive tests
- Evaluating LLM inference quality
- Deploying TensorZero with ClickHouse, PostgreSQL, or Redis
- Setting up authentication, rate limits, and credentials
- Exporting traces and metrics (OpenTelemetry, Prometheus)
- Tracking LLM usage and cost

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
