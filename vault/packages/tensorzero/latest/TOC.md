# TensorZero Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/gateway/` | LLM gateway API, configuration, guides | 18 |
| `contents/integrations/model-providers/` | Model provider integrations | 20 |
| `contents/deployment/` | Deployment and infrastructure setup | 8 |
| `contents/operations/` | Auth, rate limits, credentials, observability ops | 9 |
| `contents/optimization/` | Fine-tuning (SFT), DICL, GEPA optimization | 4 |
| `contents/evaluations/` | Inference and workflow evaluations | 6 |
| `contents/experimentation/` | A/B tests and experiment namespaces | 3 |
| `contents/observability/` | Querying historical inferences | 1 |
| Root | Overview, quickstart, FAQ | 4 |

## Root

| File | Description |
|------|-------------|
| `index.mdx` | TensorZero overview — gateway, observability, optimization, evaluation, experimentation |
| `quickstart.mdx` | Quickstart guide to set up your first TensorZero LLM application |
| `faq.mdx` | Frequently asked questions |

## gateway/

| File | Description |
|------|-------------|
| `gateway/index.mdx` | Gateway overview |
| `gateway/configuration-reference.mdx` | Full configuration reference for tensorzero.toml |
| `gateway/configure-functions-and-variants.mdx` | How to configure functions and variants |
| `gateway/configure-models-and-providers.mdx` | How to configure models and providers |
| `gateway/create-a-prompt-template.mdx` | Creating and managing prompt templates |
| `gateway/data-model.mdx` | Data model: functions, variants, episodes, inferences |
| `gateway/call-any-llm.mdx` | How to call any LLM provider through the gateway |
| `gateway/call-llms-with-image-and-file-inputs.mdx` | Multimodal inputs: images and files |
| `gateway/call-the-openai-responses-api.mdx` | OpenAI Responses API compatibility |
| `gateway/generate-embeddings.mdx` | Generating embeddings via the gateway |
| `gateway/generate-structured-outputs.mdx` | Generating structured (JSON) outputs |
| `gateway/benchmarks.mdx` | Performance benchmarks |
| `gateway/api-reference/inference.mdx` | Inference API reference |
| `gateway/api-reference/inference-openai-compatible.mdx` | OpenAI-compatible inference API reference |
| `gateway/api-reference/batch-inference.mdx` | Batch inference API reference |
| `gateway/api-reference/feedback.mdx` | Feedback API reference |
| `gateway/api-reference/datasets-datapoints.mdx` | Datasets and datapoints API reference |
| `gateway/guides/batch-inference.mdx` | Guide: batch inference |
| `gateway/guides/episodes.mdx` | Guide: episodes for multi-turn conversations |
| `gateway/guides/inference-caching.mdx` | Guide: inference caching |
| `gateway/guides/inference-time-optimizations.mdx` | Guide: inference-time optimizations |
| `gateway/guides/metrics-feedback.mdx` | Guide: collecting metrics and feedback |
| `gateway/guides/retries-fallbacks.mdx` | Guide: retries and fallbacks |
| `gateway/guides/tool-use.mdx` | Guide: tool/function calling |

## integrations/model-providers/

| File | Description |
|------|-------------|
| `integrations/model-providers/index.mdx` | Model providers overview |
| `integrations/model-providers/anthropic.mdx` | Anthropic (Claude) integration |
| `integrations/model-providers/aws-bedrock.mdx` | AWS Bedrock integration |
| `integrations/model-providers/aws-sagemaker.mdx` | AWS SageMaker integration |
| `integrations/model-providers/azure.mdx` | Azure OpenAI integration |
| `integrations/model-providers/deepseek.mdx` | DeepSeek integration |
| `integrations/model-providers/fireworks.mdx` | Fireworks AI integration |
| `integrations/model-providers/gcp-vertex-ai-anthropic.mdx` | GCP Vertex AI (Anthropic) integration |
| `integrations/model-providers/gcp-vertex-ai-gemini.mdx` | GCP Vertex AI (Gemini) integration |
| `integrations/model-providers/google-ai-studio-gemini.mdx` | Google AI Studio (Gemini) integration |
| `integrations/model-providers/groq.mdx` | Groq integration |
| `integrations/model-providers/hyperbolic.mdx` | Hyperbolic integration |
| `integrations/model-providers/mistral.mdx` | Mistral integration |
| `integrations/model-providers/openai.mdx` | OpenAI integration |
| `integrations/model-providers/openai-compatible.mdx` | OpenAI-compatible providers integration |
| `integrations/model-providers/openrouter.mdx` | OpenRouter integration |
| `integrations/model-providers/sglang.mdx` | SGLang integration |
| `integrations/model-providers/tgi.mdx` | Text Generation Inference (TGI) integration |
| `integrations/model-providers/together.mdx` | Together AI integration |
| `integrations/model-providers/vllm.mdx` | vLLM integration |
| `integrations/model-providers/xai.mdx` | xAI (Grok) integration |

## deployment/

| File | Description |
|------|-------------|
| `deployment/tensorzero-gateway.mdx` | Deploying the TensorZero gateway |
| `deployment/tensorzero-ui.mdx` | Deploying the TensorZero UI |
| `deployment/tensorzero-autopilot.mdx` | TensorZero Autopilot deployment |
| `deployment/clickhouse.mdx` | Setting up ClickHouse for observability |
| `deployment/postgres.mdx` | Setting up PostgreSQL |
| `deployment/valkey-redis.mdx` | Setting up Valkey/Redis |
| `deployment/optimize-latency-and-throughput.mdx` | Optimizing deployment latency and throughput |
| `deployment/upgrade-tensorzero.mdx` | Upgrading TensorZero |

## operations/

| File | Description |
|------|-------------|
| `operations/manage-credentials.mdx` | Managing API credentials and secrets |
| `operations/set-up-auth-for-tensorzero.mdx` | Setting up authentication for the gateway |
| `operations/centralize-auth-rate-limits-and-more.mdx` | Centralizing auth and rate limits |
| `operations/enforce-custom-rate-limits.mdx` | Enforcing custom rate limits |
| `operations/track-usage-and-cost.mdx` | Tracking usage and cost |
| `operations/export-opentelemetry-traces.mdx` | Exporting OpenTelemetry traces |
| `operations/export-prometheus-metrics.mdx` | Exporting Prometheus metrics |
| `operations/organize-your-configuration.mdx` | Organizing tensorzero.toml configuration |
| `operations/extend-tensorzero.mdx` | Extending TensorZero with custom providers |

## optimization/

| File | Description |
|------|-------------|
| `optimization/index.mdx` | Optimization overview |
| `optimization/supervised-fine-tuning-sft.mdx` | Supervised fine-tuning (SFT) |
| `optimization/dynamic-in-context-learning-dicl.mdx` | Dynamic in-context learning (DICL) |
| `optimization/gepa.mdx` | GEPA (gradient-free prompt optimization) |

## evaluations/

| File | Description |
|------|-------------|
| `evaluations/index.mdx` | Evaluations overview |
| `evaluations/inference-evaluations/tutorial.mdx` | Inference evaluations tutorial |
| `evaluations/inference-evaluations/configuration-reference.mdx` | Inference evaluations configuration reference |
| `evaluations/inference-evaluations/cli-reference.mdx` | Inference evaluations CLI reference |
| `evaluations/workflow-evaluations/tutorial.mdx` | Workflow evaluations tutorial |
| `evaluations/workflow-evaluations/api-reference.mdx` | Workflow evaluations API reference |

## experimentation/

| File | Description |
|------|-------------|
| `experimentation/run-static-ab-tests.mdx` | Running static A/B tests |
| `experimentation/run-adaptive-ab-tests.mdx` | Running adaptive A/B tests |
| `experimentation/scope-experiments-with-namespaces.mdx` | Scoping experiments with namespaces |

## observability/

| File | Description |
|------|-------------|
| `observability/query-historical-inferences.mdx` | Querying historical inferences from ClickHouse |
