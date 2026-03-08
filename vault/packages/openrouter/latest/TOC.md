# OpenRouter Table of Contents

## Directory Map

```
contents/
├── quickstart.mdx              # Getting started with OpenRouter API
├── faq.mdx                     # Frequently asked questions
├── app-attribution.mdx         # App attribution and leaderboards
├── enterprise-quickstart.mdx   # Enterprise setup guide
├── overview/                   # Core concepts (10 files)
│   ├── principles.mdx
│   ├── models.mdx
│   ├── report-feedback.mdx
│   ├── multimodal/             # Images, audio, video, PDFs
│   └── auth/                   # OAuth, API keys, BYOK
├── routing/                    # Model and provider routing (11 files)
│   ├── model-fallbacks.mdx
│   ├── provider-selection.mdx
│   ├── model-variants/         # free, extended, exacto, thinking, online, nitro
│   └── routers/                # auto-router, body-builder, free-models-router
├── features/                   # API features (28 files)
│   ├── presets.mdx
│   ├── tool-calling.mdx
│   ├── structured-outputs.mdx
│   ├── message-transforms.mdx
│   ├── zero-completion-insurance.mdx
│   ├── zdr.mdx
│   ├── guardrails.mdx
│   ├── plugins/                # web-search, response-healing
│   └── broadcast/              # Observability integrations (17 files)
├── privacy/                    # Data collection, logging (2 files)
├── best-practices/             # Performance, caching, uptime (4 files)
├── administration/             # Keys, accounting, tracking (5 files)
├── coding-agents/              # Claude Code, Codex, MCP (4 files)
├── evaluate-and-optimize/      # Distillation, red-teaming, migrations (4 files)
├── get-started/                # Providers, playground (2 files)
├── use-cases/                  # Organization management (1 file)
├── community/                  # SDK integrations (16 files)
├── api-reference/              # Full API reference (13 files)
│   ├── overview.mdx
│   ├── parameters.mdx
│   ├── authentication.mdx
│   ├── streaming.mdx
│   ├── embeddings.mdx
│   ├── limits.mdx
│   ├── errors-and-debugging.mdx
│   └── responses/              # Response formats (6 files)
└── sdks/                       # SDKs and tools (15 files)
    ├── agentic-usage.mdx
    ├── dev-tools/
    ├── typescript/             # TypeScript SDK (12 files)
    └── python/
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` |
| API reference | `contents/api-reference/overview.mdx` |
| Request parameters | `contents/api-reference/parameters.mdx` |
| Authentication | `contents/api-reference/authentication.mdx` |
| Model routing / fallbacks | `contents/routing/model-fallbacks.mdx` |
| Provider selection | `contents/routing/provider-selection.mdx` |
| Tool calling | `contents/features/tool-calling.mdx` |
| Structured outputs | `contents/features/structured-outputs.mdx` |
| TypeScript SDK | `contents/sdks/typescript/overview.mdx` |
| Python SDK | `contents/sdks/python/overview.mdx` |
| Streaming | `contents/api-reference/streaming.mdx` |
| Error handling | `contents/api-reference/errors-and-debugging.mdx` |

## Detailed Structure

### Root (4 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Quick start guide with SDK and direct API examples |
| `faq.mdx` | Frequently asked questions |
| `app-attribution.mdx` | App attribution and leaderboard headers |
| `enterprise-quickstart.mdx` | Enterprise setup guide |

### overview/ (10 files)

| File | Description |
|------|-------------|
| `overview/principles.mdx` | Core principles and design philosophy |
| `overview/models.mdx` | Available models overview |
| `overview/report-feedback.mdx` | Reporting and feedback |
| `overview/multimodal/overview.mdx` | Multimodal capabilities overview |
| `overview/multimodal/images.mdx` | Image inputs |
| `overview/multimodal/image-generation.mdx` | Image generation |
| `overview/multimodal/pdfs.mdx` | PDF processing |
| `overview/multimodal/audio.mdx` | Audio inputs |
| `overview/multimodal/videos.mdx` | Video inputs |
| `overview/auth/oauth.mdx` | OAuth authentication |
| `overview/auth/management-api-keys.mdx` | API key management |
| `overview/auth/byok.mdx` | Bring Your Own Key (BYOK) |

### routing/ (11 files)

| File | Description |
|------|-------------|
| `routing/model-fallbacks.mdx` | Fallback model configuration |
| `routing/provider-selection.mdx` | Provider routing and preferences |
| `routing/model-variants/free.mdx` | Free model variants |
| `routing/model-variants/extended.mdx` | Extended context variants |
| `routing/model-variants/exacto.mdx` | Exact model targeting |
| `routing/model-variants/thinking.mdx` | Thinking/reasoning variants |
| `routing/model-variants/online.mdx` | Online (web search) variants |
| `routing/model-variants/nitro.mdx` | Nitro (speed) variants |
| `routing/routers/auto-router.mdx` | Auto router configuration |
| `routing/routers/body-builder.mdx` | Body builder router |
| `routing/routers/free-models-router.mdx` | Free models router |

### features/ (28 files)

| File | Description |
|------|-------------|
| `features/presets.mdx` | Request presets |
| `features/tool-calling.mdx` | Tool/function calling |
| `features/structured-outputs.mdx` | JSON schema structured outputs |
| `features/message-transforms.mdx` | Prompt/message transformations |
| `features/zero-completion-insurance.mdx` | Zero completion insurance |
| `features/zdr.mdx` | Zero Data Retention |
| `features/guardrails.mdx` | Content guardrails |
| `features/plugins/overview.mdx` | Plugins overview |
| `features/plugins/web-search.mdx` | Web search plugin |
| `features/plugins/response-healing.mdx` | Response healing plugin |
| `features/broadcast/overview.mdx` | Broadcast/observability overview |
| `features/broadcast/langfuse.mdx` | Langfuse integration |
| `features/broadcast/langsmith.mdx` | LangSmith integration |
| `features/broadcast/datadog.mdx` | Datadog integration |
| `features/broadcast/posthog.mdx` | PostHog integration |
| `features/broadcast/sentry.mdx` | Sentry integration |
| `features/broadcast/arize.mdx` | Arize integration |
| `features/broadcast/braintrust.mdx` | Braintrust integration |
| `features/broadcast/clickhouse.mdx` | ClickHouse integration |
| `features/broadcast/opik.mdx` | Opik integration |
| `features/broadcast/grafana.mdx` | Grafana integration |
| `features/broadcast/newrelic.mdx` | New Relic integration |
| `features/broadcast/otel-collector.mdx` | OpenTelemetry collector |
| `features/broadcast/s3.mdx` | S3 integration |
| `features/broadcast/snowflake.mdx` | Snowflake integration |
| `features/broadcast/weave.mdx` | Weave integration |
| `features/broadcast/webhook.mdx` | Webhook integration |

### api-reference/ (13 files)

| File | Description |
|------|-------------|
| `api-reference/overview.mdx` | Request/response schemas, OpenAPI spec |
| `api-reference/parameters.mdx` | All request parameters (temperature, top_p, etc.) |
| `api-reference/authentication.mdx` | Authentication methods |
| `api-reference/streaming.mdx` | SSE streaming |
| `api-reference/embeddings.mdx` | Embeddings API |
| `api-reference/limits.mdx` | Rate limits |
| `api-reference/errors-and-debugging.mdx` | Error codes and debugging |
| `api-reference/responses/overview.mdx` | Response format overview |
| `api-reference/responses/basic-usage.mdx` | Basic response usage |
| `api-reference/responses/reasoning.mdx` | Reasoning token responses |
| `api-reference/responses/tool-calling.mdx` | Tool call responses |
| `api-reference/responses/web-search.mdx` | Web search responses |
| `api-reference/responses/error-handling.mdx` | Error response handling |

### sdks/ (15 files)

| File | Description |
|------|-------------|
| `sdks/agentic-usage.mdx` | Agentic usage patterns |
| `sdks/dev-tools/devtools.mdx` | Developer tools |
| `sdks/typescript/overview.mdx` | TypeScript SDK overview |
| `sdks/typescript/call-model/overview.mdx` | Calling models with SDK |
| `sdks/typescript/call-model/working-with-items.mdx` | Working with response items |
| `sdks/typescript/call-model/api-reference.mdx` | SDK API reference |
| `sdks/typescript/call-model/dynamic-parameters.mdx` | Dynamic parameter configuration |
| `sdks/typescript/call-model/next-turn-params.mdx` | Next turn parameters |
| `sdks/typescript/call-model/stop-conditions.mdx` | Stop conditions |
| `sdks/typescript/call-model/streaming.mdx` | SDK streaming |
| `sdks/typescript/call-model/text-generation.mdx` | Text generation |
| `sdks/typescript/call-model/message-formats.mdx` | Message formats |
| `sdks/typescript/call-model/tools.mdx` | SDK tool calling |
| `sdks/typescript/call-model/examples/weather-tool.mdx` | Weather tool example |
| `sdks/typescript/call-model/examples/skills-loader.mdx` | Skills loader example |
| `sdks/python/overview.mdx` | Python SDK overview |

### Other sections

| Directory | Files | Description |
|-----------|-------|-------------|
| `privacy/` | 2 | Data collection policies, logging |
| `best-practices/` | 4 | Latency, prompt caching, uptime, reasoning tokens |
| `administration/` | 5 | Activity export, key rotation, crypto API, accounting |
| `coding-agents/` | 4 | Claude Code, Codex CLI, MCP servers, Openclaw |
| `evaluate-and-optimize/` | 4 | Distillation, red-teaming, model migrations |
| `get-started/` | 2 | For providers, free models playground |
| `use-cases/` | 1 | Organization management |
| `community/` | 16 | OpenAI SDK, Vercel AI, LangChain, Pydantic AI, and more |
