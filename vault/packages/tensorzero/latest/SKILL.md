---
name: olore-tensorzero-latest
description: Local TensorZero documentation reference (latest). TensorZero documentation. Use for LLM gateway configuration, inference API, model provider integrations, optimization (fine-tuning, DICL), experimentation, evaluations, deployment, and observability.
---

# TensorZero Documentation

TensorZero is an open-source stack for industrial-grade LLM applications that unifies an LLM gateway, observability, optimization, evaluation, and experimentation.

## Documentation Structure

```
contents/
├── gateway/               # LLM gateway API, configuration, and guides (18 files)
├── integrations/
│   └── model-providers/   # Provider integrations: OpenAI, Anthropic, AWS, GCP, etc. (20 files)
├── deployment/            # Deploying gateway, UI, ClickHouse, Postgres, Redis (8 files)
├── operations/            # Auth, rate limits, credentials, metrics, cost tracking (9 files)
├── optimization/          # Fine-tuning (SFT), DICL, GEPA prompt optimization (4 files)
├── evaluations/           # Inference and workflow evaluations (6 files)
├── experimentation/       # A/B tests and experiment namespaces (3 files)
├── observability/         # Querying historical inferences (1 file)
├── index.mdx              # Product overview
├── quickstart.mdx         # Getting started
└── faq.mdx                # FAQ
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / quickstart | `contents/quickstart.mdx`, `contents/index.mdx` |
| Gateway configuration reference | `contents/gateway/configuration-reference.mdx` |
| Inference API (calling LLMs) | `contents/gateway/api-reference/inference.mdx`, `contents/gateway/call-any-llm.mdx` |
| OpenAI-compatible API | `contents/gateway/api-reference/inference-openai-compatible.mdx`, `contents/gateway/call-the-openai-responses-api.mdx` |
| Functions and variants | `contents/gateway/configure-functions-and-variants.mdx` |
| Prompt templates | `contents/gateway/create-a-prompt-template.mdx` |
| Structured outputs | `contents/gateway/generate-structured-outputs.mdx` |
| Tool / function calling | `contents/gateway/guides/tool-use.mdx` |
| Embeddings | `contents/gateway/generate-embeddings.mdx` |
| Batch inference | `contents/gateway/api-reference/batch-inference.mdx`, `contents/gateway/guides/batch-inference.mdx` |
| Feedback and metrics | `contents/gateway/api-reference/feedback.mdx`, `contents/gateway/guides/metrics-feedback.mdx` |
| Retries and fallbacks | `contents/gateway/guides/retries-fallbacks.mdx` |
| Inference caching | `contents/gateway/guides/inference-caching.mdx` |
| Episodes (multi-turn) | `contents/gateway/guides/episodes.mdx` |
| Datasets and datapoints | `contents/gateway/api-reference/datasets-datapoints.mdx` |
| Data model | `contents/gateway/data-model.mdx` |
| Model provider integrations (all) | `contents/integrations/model-providers/index.mdx` |
| OpenAI, Azure, Anthropic, Gemini | `contents/integrations/model-providers/openai.mdx`, `contents/integrations/model-providers/azure.mdx`, `contents/integrations/model-providers/anthropic.mdx`, `contents/integrations/model-providers/google-ai-studio-gemini.mdx` |
| AWS (Bedrock, SageMaker) | `contents/integrations/model-providers/aws-bedrock.mdx`, `contents/integrations/model-providers/aws-sagemaker.mdx` |
| GCP Vertex AI | `contents/integrations/model-providers/gcp-vertex-ai-anthropic.mdx`, `contents/integrations/model-providers/gcp-vertex-ai-gemini.mdx` |
| Self-hosted models (vLLM, TGI, SGLang) | `contents/integrations/model-providers/vllm.mdx`, `contents/integrations/model-providers/tgi.mdx`, `contents/integrations/model-providers/sglang.mdx` |
| OpenAI-compatible providers | `contents/integrations/model-providers/openai-compatible.mdx` |
| Deployment (gateway, UI) | `contents/deployment/tensorzero-gateway.mdx`, `contents/deployment/tensorzero-ui.mdx` |
| Database setup | `contents/deployment/clickhouse.mdx`, `contents/deployment/postgres.mdx`, `contents/deployment/valkey-redis.mdx` |
| Upgrading | `contents/deployment/upgrade-tensorzero.mdx` |
| Authentication and credentials | `contents/operations/set-up-auth-for-tensorzero.mdx`, `contents/operations/manage-credentials.mdx` |
| Rate limits | `contents/operations/enforce-custom-rate-limits.mdx`, `contents/operations/centralize-auth-rate-limits-and-more.mdx` |
| Cost and usage tracking | `contents/operations/track-usage-and-cost.mdx` |
| OpenTelemetry / Prometheus | `contents/operations/export-opentelemetry-traces.mdx`, `contents/operations/export-prometheus-metrics.mdx` |
| Extending TensorZero | `contents/operations/extend-tensorzero.mdx` |
| Optimization overview | `contents/optimization/index.mdx` |
| Supervised fine-tuning (SFT) | `contents/optimization/supervised-fine-tuning-sft.mdx` |
| Dynamic in-context learning (DICL) | `contents/optimization/dynamic-in-context-learning-dicl.mdx` |
| GEPA prompt optimization | `contents/optimization/gepa.mdx` |
| Evaluations overview | `contents/evaluations/index.mdx` |
| Inference evaluations | `contents/evaluations/inference-evaluations/tutorial.mdx`, `contents/evaluations/inference-evaluations/configuration-reference.mdx` |
| Workflow evaluations | `contents/evaluations/workflow-evaluations/tutorial.mdx`, `contents/evaluations/workflow-evaluations/api-reference.mdx` |
| A/B testing | `contents/experimentation/run-static-ab-tests.mdx`, `contents/experimentation/run-adaptive-ab-tests.mdx` |
| Querying historical inferences | `contents/observability/query-historical-inferences.mdx` |

## When to use

Use this skill when the user asks about:
- Configuring the TensorZero LLM gateway (functions, variants, models, providers, prompt templates)
- Calling LLMs via the TensorZero inference API or OpenAI-compatible API
- Integrating with model providers (OpenAI, Anthropic, AWS, GCP, Azure, Groq, Mistral, vLLM, etc.)
- Collecting feedback and metrics from LLM inferences
- Deploying TensorZero (gateway, UI, ClickHouse, Postgres, Redis)
- Managing authentication, credentials, and rate limits
- Running A/B experiments and adaptive tests
- Optimizing LLM applications with fine-tuning (SFT), DICL, or GEPA
- Running evaluations on inference or workflow outputs
- Tracking usage, cost, and exporting telemetry

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
