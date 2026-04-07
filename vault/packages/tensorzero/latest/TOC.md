# TensorZero Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Index, quickstart, FAQ | 3 |
| `contents/gateway/` | LLM gateway API, configuration, guides | 24 |
| `contents/integrations/` | Model provider integrations | 21 |
| `contents/deployment/` | Deployment and infrastructure setup | 8 |
| `contents/operations/` | Auth, rate limits, observability, credentials | 9 |
| `contents/evaluations/` | Inference and workflow evaluations | 6 |
| `contents/experimentation/` | A/B testing and experiments | 3 |
| `contents/optimization/` | Fine-tuning, DICL, GEPA | 4 |
| `contents/observability/` | Querying historical inferences | 1 |

## Root

| File | Description |
|------|-------------|
| `index.mdx` | TensorZero documentation home |
| `quickstart.mdx` | Quick start guide |
| `faq.mdx` | Frequently asked questions |

## gateway/

| File | Description |
|------|-------------|
| `index.mdx` | Gateway overview |
| `configuration-reference.mdx` | Full gateway configuration reference |
| `configure-functions-and-variants.mdx` | Configuring functions and variants |
| `configure-models-and-providers.mdx` | Configuring models and providers |
| `create-a-prompt-template.mdx` | Creating prompt templates |
| `data-model.mdx` | Gateway data model |
| `call-any-llm.mdx` | Calling any LLM via the gateway |
| `call-llms-with-image-and-file-inputs.mdx` | Multimodal inputs (images and files) |
| `call-the-openai-responses-api.mdx` | Using the OpenAI Responses API |
| `generate-embeddings.mdx` | Generating embeddings |
| `generate-structured-outputs.mdx` | Generating structured outputs |
| `benchmarks.mdx` | Gateway performance benchmarks |
| `api-reference/inference.mdx` | Inference API reference |
| `api-reference/inference-openai-compatible.mdx` | OpenAI-compatible inference API reference |
| `api-reference/batch-inference.mdx` | Batch inference API reference |
| `api-reference/feedback.mdx` | Feedback API reference |
| `api-reference/datasets-datapoints.mdx` | Datasets and datapoints API reference |
| `guides/episodes.mdx` | Working with episodes |
| `guides/metrics-feedback.mdx` | Metrics and feedback guide |
| `guides/tool-use.mdx` | Tool use guide |
| `guides/inference-caching.mdx` | Inference caching guide |
| `guides/inference-time-optimizations.mdx` | Inference-time optimizations |
| `guides/retries-fallbacks.mdx` | Retries and fallbacks |
| `guides/batch-inference.mdx` | Batch inference guide |

## integrations/model-providers/

| File | Description |
|------|-------------|
| `index.mdx` | Model providers overview |
| `openai.mdx` | OpenAI integration |
| `anthropic.mdx` | Anthropic integration |
| `aws-bedrock.mdx` | AWS Bedrock integration |
| `aws-sagemaker.mdx` | AWS SageMaker integration |
| `azure.mdx` | Azure OpenAI integration |
| `deepseek.mdx` | DeepSeek integration |
| `fireworks.mdx` | Fireworks AI integration |
| `gcp-vertex-ai-anthropic.mdx` | GCP Vertex AI (Anthropic) integration |
| `gcp-vertex-ai-gemini.mdx` | GCP Vertex AI (Gemini) integration |
| `google-ai-studio-gemini.mdx` | Google AI Studio (Gemini) integration |
| `groq.mdx` | Groq integration |
| `hyperbolic.mdx` | Hyperbolic integration |
| `mistral.mdx` | Mistral integration |
| `openai-compatible.mdx` | Generic OpenAI-compatible provider |
| `openrouter.mdx` | OpenRouter integration |
| `sglang.mdx` | SGLang integration |
| `tgi.mdx` | Text Generation Inference (TGI) integration |
| `together.mdx` | Together AI integration |
| `vllm.mdx` | vLLM integration |
| `xai.mdx` | xAI (Grok) integration |

## deployment/

| File | Description |
|------|-------------|
| `tensorzero-gateway.mdx` | Deploying the TensorZero Gateway |
| `tensorzero-ui.mdx` | Deploying the TensorZero UI |
| `tensorzero-autopilot.mdx` | TensorZero Autopilot deployment |
| `clickhouse.mdx` | ClickHouse setup and configuration |
| `postgres.mdx` | PostgreSQL setup and configuration |
| `valkey-redis.mdx` | Valkey/Redis setup |
| `optimize-latency-and-throughput.mdx` | Latency and throughput optimization |
| `upgrade-tensorzero.mdx` | Upgrading TensorZero |

## operations/

| File | Description |
|------|-------------|
| `centralize-auth-rate-limits-and-more.mdx` | Centralizing auth, rate limits, and more |
| `enforce-custom-rate-limits.mdx` | Enforcing custom rate limits |
| `export-opentelemetry-traces.mdx` | Exporting OpenTelemetry traces |
| `export-prometheus-metrics.mdx` | Exporting Prometheus metrics |
| `extend-tensorzero.mdx` | Extending TensorZero |
| `manage-credentials.mdx` | Managing credentials |
| `organize-your-configuration.mdx` | Organizing configuration |
| `set-up-auth-for-tensorzero.mdx` | Setting up authentication |
| `track-usage-and-cost.mdx` | Tracking usage and cost |

## evaluations/

| File | Description |
|------|-------------|
| `index.mdx` | Evaluations overview |
| `inference-evaluations/tutorial.mdx` | Inference evaluations tutorial |
| `inference-evaluations/configuration-reference.mdx` | Inference evaluations configuration reference |
| `inference-evaluations/cli-reference.mdx` | Inference evaluations CLI reference |
| `workflow-evaluations/tutorial.mdx` | Workflow evaluations tutorial |
| `workflow-evaluations/api-reference.mdx` | Workflow evaluations API reference |

## experimentation/

| File | Description |
|------|-------------|
| `run-static-ab-tests.mdx` | Running static A/B tests |
| `run-adaptive-ab-tests.mdx` | Running adaptive A/B tests |
| `scope-experiments-with-namespaces.mdx` | Scoping experiments with namespaces |

## optimization/

| File | Description |
|------|-------------|
| `index.mdx` | Optimization overview |
| `supervised-fine-tuning-sft.mdx` | Supervised fine-tuning (SFT) |
| `dynamic-in-context-learning-dicl.mdx` | Dynamic in-context learning (DICL) |
| `gepa.mdx` | GEPA (Generalized Evolutionary Prompt Architecture) |

## observability/

| File | Description |
|------|-------------|
| `query-historical-inferences.mdx` | Querying historical inferences |
