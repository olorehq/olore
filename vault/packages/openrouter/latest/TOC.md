# OpenRouter Table of Contents

## Directory Map

```
contents/
├── agent-sdk/         # callModel agent loops, tools, hooks, state (18 files)
├── api-guides/        # REST conventions, streaming, errors, Responses API (14 files)
├── api-reference/     # Endpoint reference (selected endpoints) (29 files)
├── authentication/    # OAuth PKCE, management keys, BYOK, SSO, SCIM (7 files)
├── best-practices/    # Performance, prompt caching, spend, reasoning (6 files)
├── client-sdks/       # TypeScript, Python, Go SDK overviews and key modules (13 files)
├── community/         # Framework and SDK integrations (8 files)
├── cookbook/          # Coding agents, agents, video, evaluation, administration recipes (20 files)
├── developer-tools/   # MCP, Terraform, Stripe Projects, provider integration, Ori (5 files)
├── features/          # Presets, structured outputs, caching, workspaces, batch, guardrails (16 files)
├── getting-started/   # Quickstart, FAQ, principles, models, changelog (7 files)
├── multimodal/        # Images, audio, video, PDFs, TTS/STT (9 files)
├── observability/     # Logs, activity, Broadcast integrations (12 files)
├── privacy/           # Data collection, ZDR, regional routing (5 files)
├── routing/           # Fallbacks, provider selection, variants, routers (14 files)
└── tool-calling/      # Client tools, server tools, plugins (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/quickstart.md` |
| API request schema | `contents/api-guides/overview.md` |
| Chat completions endpoint | `contents/api-reference/chat-create-a-chat-completion.md` |
| Model routing | `contents/routing/provider-selection.md` |
| Tool calling | `contents/tool-calling/tool-calling.md` |
| Structured outputs | `contents/features/structured-outputs.md` |
| Agent SDK | `contents/agent-sdk/overview.md` |
| Errors | `contents/api-guides/errors-and-debugging.md` |

## Detailed Structure

### agent-sdk/ (18 files)

| File | Description |
|------|-------------|
| `agent-migration.md` | Migrating to @openrouter/agent: Move agent toolkit imports from @openrouter/sdk to the standalone @openrouter/agent package |
| `call-model-api-reference.md` | Agent SDK API Reference: Type signatures and exports for the Agent SDK, covering callModel, ModelResult, tool types, conversation state helpers, stop conditions,... |
| `call-model-async-tools.md` | Async Tools: Run long-running tools in the background or defer them to external systems, while the model keeps working, checks progress, steers, and... |
| `call-model-dynamic-parameters.md` | Dynamic Parameters: Use async functions for adaptive model behavior across turns |
| `call-model-items.md` | Working with Items: Understanding the items-based streaming paradigm for callModel |
| `call-model-lifecycle-hooks.md` | Lifecycle Hooks: Observe and control the agent loop with typed lifecycle hooks. |
| `call-model-mcp-tools.md` | MCP Tools: Connect remote Model Context Protocol servers to the Agent SDK with @openrouter/mcp (auth, caching, streaming, resources, and elicitation). |
| `call-model-message-formats.md` | Message Formats: The OpenRouter SDK provides helper functions to convert between popular message formats. This makes it easy to migrate existing code or... |
| `call-model-next-turn-params.md` | Next Turn Params: Build encapsulated, context-aware tools with `nextTurnParams`. Create skills systems, plugins, and adaptive multi-turn agents. |
| `call-model-overview.md` | Call Model (Typescript): A unified API for calling any LLM with automatic tool execution and multiple consumption patterns |
| `call-model-stop-conditions.md` | Stop Conditions: Control multi-turn execution with `stopWhen`. Use built-in helpers or custom conditions to stop by step count, tool calls, cost, or tokens. |
| `call-model-streaming.md` | Streaming: Stream responses in real-time with multiple consumption patterns. All streams are built on a reusable stream architecture that supports... |
| `call-model-text-generation.md` | Text Generation: Generate text with callModel using various input formats and model configurations. Supports multiple consumption patterns including... |
| `call-model-tool-approval-state.md` | Tool Approval & State Persistence: Add human-in-the-loop approval gates for sensitive tools and persist conversation state across callModel invocations. |
| `call-model-tools.md` | Tools: Define type-safe tools for callModel with Zod schemas, including regular, generator, manual, HITL, and MCP-branded tools, with automatic... |
| `examples-skills-loader.md` | Skills Loader: A complete implementation of a skills system similar to Claude Code, demonstrating the power of `nextTurnParams` for context injection. |
| `overview.md` | Agent SDK: Build AI agents with multi-turn loops, tools, and conversation state |
| `usage-for-agents.md` | Usage for Agents: Add OpenRouter Agent SDK skills to your AI coding assistant |

### api-guides/ (14 files)

| File | Description |
|------|-------------|
| `authentication.md` | Authentication: API Authentication |
| `embeddings.md` | Embeddings: Generate vector embeddings from text and images |
| `errors-and-debugging.md` | Errors and Debugging: API Errors and Debugging |
| `limits.md` | Limits: Credit Limits and Rate Limits |
| `overview.md` | API Reference: An overview of OpenRouter's API |
| `parameters.md` | Sampling parameters supported by OpenRouter (temperature, top_p, etc.) and how they are passed upstream |
| `responses-basic-usage.md` | Basic Usage: Getting started with the Responses API |
| `responses-error-handling.md` | Error Handling: Understanding and handling errors in the Responses API |
| `responses-overview.md` | Responses API: OpenAI-compatible Responses API |
| `responses-reasoning.md` | Reasoning: Advanced reasoning capabilities with the Responses API |
| `responses-tool-calling.md` | Tool Calling: Function calling and tool integration with the Responses API |
| `responses-web-search.md` | Web Search: Real-time web search integration with the Responses API |
| `streaming.md` | Streaming responses with stream=true (SSE), chunk handling and cancellation |
| `versioning.md` | API Versioning: How the OpenRouter API is versioned, what we consider a breaking change, and how deprecations are communicated. |

### api-reference/ (29 files)

| File | Description |
|------|-------------|
| `anthropic-messages-create-a-message.md` | Create a message: Creates a message using the Anthropic Messages API format. Supports text, images, PDFs, tools, and extended thinking. |
| `api-keys-create-a-new-api-key.md` | Create a new API key: Create a new API key for the authenticated user. The plaintext `key` is returned only in this response. Treat it as a write-only,... |
| `api-keys-get-current-api-key.md` | Get current API key: Get information on the API key associated with the current authentication session |
| `api-keys-list-api-keys.md` | List API keys: List all API keys for the authenticated user. [Management key](/docs/guides/overview/auth/management-api-keys) required. |
| `api-keys-update-an-api-key.md` | Update an API key: Update an existing API key. Authenticate with a [management key](/docs/guides/overview/auth/management-api-keys). |
| `batch-create-a-batch.md` | Create a batch: Creates a batch of requests that run asynchronously against a single endpoint (`/v1/chat/completions`, `/v1/responses`, `/v1/messages`,... |
| `batch-get-a-batch.md` | Get a batch: Returns a batch with its status and request counts. Batches in a terminal status include `results`. Failed batches report the reason in... |
| `chat-create-a-chat-completion.md` | Create a chat completion: Sends a request for a model response for the given chat conversation. Supports both streaming and non-streaming modes. |
| `credits-get-remaining-credits.md` | Get remaining credits: Get total credits purchased and used for the authenticated user. [Management key](/docs/guides/overview/auth/management-api-keys) required. |
| `embeddings-submit-an-embedding-request.md` | Submit an embedding request: Submits an embedding request to the embeddings router |
| `endpoints-list-all-endpoints-for-a-model.md` | List all provider endpoints for a model (OpenAPI) |
| `files-upload-a-file.md` | Upload a file: Uploads a file to be referenced in future API calls. The file is stored under the workspace of the authenticating API key. Maximum file... |
| `generations-get-request-usage-metadata-for-a-generation.md` | GET /generation: request and usage metadata for a generation id (OpenAPI) |
| `guardrails-create-a-guardrail.md` | Create a guardrail: Create a new guardrail for the authenticated user. A newly created guardrail enforces nothing until it is assigned to API keys or... |
| `guardrails-list-guardrails.md` | List guardrails: List all guardrails for the authenticated user. [Management key](/docs/guides/overview/auth/management-api-keys) required. |
| `images-generate-an-image.md` | Generate an image: Generates an image from a text prompt via the image generation router |
| `models-get-a-model-by-its-slug.md` | Get a model by its slug: Returns full details for a single model identified by its author and slug (e.g. openai/gpt-4). Supports variant suffixes (e.g.... |
| `models-get-total-count-of-available-models.md` | GET /models/count: total number of available models (OpenAPI) |
| `models-list-all-models-and-their-properties.md` | GET /models: list all models and their properties (OpenAPI) |
| `oauth-create-authorization-code.md` | Create authorization code: Create an authorization code for the PKCE flow to generate a user-controlled API key |
| `oauth-exchange-authorization-code-for-api-key.md` | Exchange authorization code for API key: Exchange an authorization code from the PKCE flow for a user-controlled API key |
| `presets-list-presets.md` | List presets: Lists all presets for the authenticated user, ordered by most recently updated first. |
| `providers-list-all-providers.md` | GET /providers: list all providers (OpenAPI) |
| `rerank-submit-a-rerank-request.md` | Submit a rerank request: Submits a rerank request to the rerank router |
| `responses-create-a-response.md` | Create a response: Creates a streaming or non-streaming response using OpenResponses API format |
| `stt-create-transcription.md` | Create transcription: Transcribes audio into text. Accepts base64-encoded audio input as JSON, an OpenAI-style multipart/form-data file upload, or a URL the... |
| `tts-create-speech.md` | Create speech: Synthesizes audio from the input text. Returns a raw audio bytestream in the requested format (e.g. mp3, pcm, wav). |
| `video-generation-poll-video-generation-status.md` | Poll video generation status: Returns job status and content URLs when completed |
| `video-generation-submit-a-video-generation-request.md` | Submit a video generation request: Submits a video generation request and returns a polling URL to check status |

### authentication/ (7 files)

| File | Description |
|------|-------------|
| `byok.md` | BYOK: Bring your own provider API keys |
| `management-api-keys.md` | Management API Keys: Manage API keys programmatically |
| `oauth.md` | OAuth PKCE: Let users bring their own OpenRouter API key and pay for their own inference |
| `scim-mappings.md` | SCIM Group Mappings: Automatically provision workspace access from your identity provider groups |
| `security-settings.md` | Security settings: Review and manage API key security settings |
| `sso.md` | Single Sign-On (SSO): Let your team sign in to OpenRouter through your identity provider |
| `workload-identity-federation.md` | Workload Identity Federation: Call OpenRouter from workloads signed in with your own identity provider, without long-lived API keys |

### best-practices/ (6 files)

| File | Description |
|------|-------------|
| `capping-shared-agent-keys.md` | Capping Shared Agent Keys: Put a hard spend cap on workspace-owned API keys used by agents, CI jobs, and service accounts |
| `latency-and-performance.md` | Latency and Performance: Understanding OpenRouter's performance characteristics and practical DX optimization recipes |
| `prompt-caching.md` | Prompt Caching: Cache prompt messages |
| `reasoning-tokens.md` | Reasoning (thinking) tokens: request config, response format, billing |
| `spend-controls.md` | Spend Controls: How to structure workspace budgets, guardrails, and access controls for your organization |
| `uptime-optimization.md` | Uptime Optimization: OpenRouter tracks provider availability |

### client-sdks/ (13 files)

| File | Description |
|------|-------------|
| `agent-migration.md` | Migrating to @openrouter/agent: Move agent toolkit imports from @openrouter/sdk to the standalone @openrouter/agent package |
| `dev-tools-devtools.md` | DevTools: SDK Development Tools for telemetry capture and visualization |
| `go-overview.md` | OpenRouter Go SDK: Go SDK for building AI features against 400+ models through OpenRouter. |
| `overview.md` | Client SDKs: Lightweight, type-safe clients for the OpenRouter API |
| `python-overview.md` | OpenRouter Python SDK: Python SDK for building AI features against 400+ models through OpenRouter. |
| `python-sdks-chat.md` | Python SDK chat module: send() to create chat completions |
| `python-sdks-responses.md` | Responses: OpenAI-compatible Responses API endpoints |
| `typescript-overview.md` | OpenRouter TypeScript SDK: Type-safe TypeScript toolkit for building AI features against 400+ models through OpenRouter. |
| `typescript-sdks-chat.md` | TypeScript SDK chat module: send() to create chat completions |
| `typescript-sdks-embeddings.md` | Embeddings: Text embedding endpoints |
| `typescript-sdks-models.md` | Models: Model information endpoints |
| `typescript-sdks-responses.md` | Responses: OpenAI-compatible Responses API endpoints |
| `usage-for-agents.md` | Usage for Agents: Add OpenRouter Client SDKs skills to your AI coding assistant |

### community/ (8 files)

| File | Description |
|------|-------------|
| `anthropic-agent-sdk.md` | Anthropic Agent SDK: Using OpenRouter with the Anthropic Agent SDK |
| `awesome-openrouter.md` | Awesome OpenRouter: Community-curated list of projects built with OpenRouter |
| `frameworks-and-integrations-overview.md` | Frameworks and Integrations Overview: Using OpenRouter with Popular Frameworks and Integrations |
| `langchain.md` | LangChain: Using OpenRouter with LangChain |
| `mastra.md` | Mastra: Using OpenRouter with Mastra |
| `openai-sdk.md` | OpenAI SDK: Using OpenRouter with OpenAI SDK |
| `pydantic-ai.md` | PydanticAI: Using OpenRouter with PydanticAI |
| `vercel-ai-sdk.md` | Vercel AI SDK: Using OpenRouter with Vercel AI SDK |

### cookbook/ (20 files)

| File | Description |
|------|-------------|
| `administration-activity-export.md` | Export aggregated usage (spend, tokens, requests) from the Activity page as CSV or PDF |
| `administration-analytics-cost-control.md` | Control Costs with the Analytics API: Hand your coding agent a management key and the analytics skill, then ask it where your money is going |
| `administration-api-key-rotation.md` | API Key Rotation: Securely rotate your OpenRouter API keys |
| `building-agents-advisor-server-tool.md` | Build a Token-Efficient Review Agent: Use a cheap executor model for routine work and call Advisor only for compact uncertainty checks |
| `building-agents-create-headless-agent.md` | Build Your Own Headless Agent: Scaffold a headless AI agent for CLI tools, API servers, and automation pipelines |
| `building-agents-hitl-tools.md` | Add Human-in-the-Loop Controls to an Agent SDK Agent: Add HITL to an existing Agent SDK agent so it can pause high-stakes tool calls for human input |
| `building-agents-subagent-server-tool.md` | Delegate Routine Work to Cheaper Models: Use an orchestrator for planning and a cheap subagent worker for each subtask |
| `coding-agents-automatic-code-review.md` | Automatic Code Review: Automatic code review for Claude Code using hooks and OpenRouter — async, non-blocking reviews from a second model while you keep working |
| `coding-agents-claude-code-integration.md` | Claude Code: Use Claude Code with OpenRouter |
| `coding-agents-codex-cli.md` | Codex CLI: Use Codex CLI with OpenRouter |
| `coding-agents-mcp-servers.md` | Using MCP Servers with OpenRouter: Use MCP Servers with OpenRouter |
| `coding-agents-opencode-integration.md` | OpenCode: Use OpenCode with OpenRouter |
| `evaluate-and-optimize-distillation.md` | Distillation: Ensure compliance with provider and model creator policies for distillation |
| `evaluate-and-optimize-rag.md` | RAG with Embeddings & Rerank: Build retrieval-augmented generation pipelines using OpenRouter's embeddings and rerank APIs |
| `evaluate-and-optimize-red-teaming.md` | Red Teaming: Policy for red teaming and adversarial testing on OpenRouter |
| `get-started-migrate-to-openrouter.md` | Migrate to OpenRouter in One Prompt: Move an existing app's LLM calls to OpenRouter with a single coding-agent prompt |
| `get-started-quickstart.md` | Quickstart: Build a Chat App: Send your first message and stream a response with the OpenRouter SDK |
| `video-generation-choose-video-model.md` | Choose a Video Generation Model: Select an OpenRouter video model by matching clip requirements and scoring priorities |
| `video-generation-image-to-video.md` | Turn an Image into a Video: Use frame images to control the first or last frame of an OpenRouter video |
| `video-generation-text-to-video.md` | Generate and Download a Video from Text: Submit a text-to-video job, poll for completion, and save the generated MP4 |

### developer-tools/ (5 files)

| File | Description |
|------|-------------|
| `mcp-server.md` | MCP: Connect your AI coding tools to OpenRouter over MCP |
| `ori-overview.md` | Ori: Ori is OpenRouter's family of tools for putting agents to work with any model, in your terminal, in Slack, and on your desktop |
| `provider-integration.md` | How model providers integrate with OpenRouter and sell inference |
| `stripe-projects.md` | Stripe Projects: Add OpenRouter to your app with the Stripe Projects CLI |
| `terraform.md` | Terraform Provider: Manage OpenRouter resources as infrastructure-as-code with Terraform |

### features/ (16 files)

| File | Description |
|------|-------------|
| `batch-api.md` | Batch API: Run thousands of requests at about half the sync price, with results within 24 hours |
| `containers.md` | Containers: How sandbox containers work for the shell and bash server tools |
| `files-api.md` | Files API: Upload files to your workspace and use them in requests |
| `guardrails-policies.md` | Guardrail Policies: Control spending, model access, and content moderation with separate guardrail policies |
| `guardrails-prompt-injection.md` | Prompt Injection Detection: Regex-based prompt injection guardrail patterns |
| `guardrails-sensitive-info.md` | Sensitive Info Guardrail: Automatically detect and handle sensitive information in API requests |
| `guardrails.md` | Guardrails: Control spending and model access for your organization |
| `message-transforms.md` | Message Transforms: Transform prompt messages |
| `notifications.md` | Notifications: Choose which OpenRouter alerts you receive and where they are delivered |
| `presets.md` | Presets: Manage your LLM configurations |
| `response-caching.md` | Response Caching: Cache responses for identical API requests to save time and money |
| `service-tiers.md` | Service Tiers: Control cost and latency tradeoffs with service tier selection |
| `structured-outputs.md` | Structured Outputs: Return structured data from your models |
| `workspaces-switching.md` | Switching Workspaces: Change which workspace your Chat and Fusion requests run in. |
| `workspaces-workspace-budgets.md` | Workspace Budgets: Set spending limits per workspace with automatic enforcement |
| `workspaces.md` | Workspaces: Organize your projects, teams, and agents into separate environments |

### getting-started/ (7 files)

| File | Description |
|------|-------------|
| `app-attribution.md` | App Attribution: Get your app featured in OpenRouter rankings and analytics |
| `batch-quickstart.md` | Batch API Quickstart: Submit a batch, get notified when it finishes, read the results, and clean up |
| `changelog.md` | API Changelog: Changes to the OpenRouter API, generated from the OpenAPI specification on every release. |
| `faq.md` | Frequently Asked Questions: Common questions about OpenRouter |
| `models.md` | Models: One API for hundreds of models |
| `principles.md` | Principles: Core principles and values of OpenRouter |
| `quickstart.md` | Quickstart: Get started with OpenRouter |

### multimodal/ (9 files)

| File | Description |
|------|-------------|
| `audio.md` | Audio: How to send and receive audio with OpenRouter models |
| `image-generation.md` | Image Generation: How to generate images with OpenRouter's dedicated Image API |
| `image-understanding.md` | Image Inputs: How to send images to OpenRouter models |
| `overview.md` | Multimodal Capabilities: Send images, PDFs, audio, and video to OpenRouter models, generate speech from text, or transcribe audio to text |
| `pdfs.md` | PDF Inputs: How to send PDFs to OpenRouter models |
| `stt.md` | Speech-to-Text: How to transcribe audio into text with OpenRouter models |
| `tts.md` | Text-to-Speech: How to generate speech audio from text with OpenRouter models |
| `video-generation.md` | Video Generation: How to generate videos with OpenRouter models |
| `videos.md` | Video Inputs: How to send video files to OpenRouter models |

### observability/ (12 files)

| File | Description |
|------|-------------|
| `activity.md` | Activity: Analyze spend, request volume, tokens, and trends across your OpenRouter usage from the Activity dashboard |
| `broadcast-datadog.md` | Datadog: Send traces to Datadog |
| `broadcast-langfuse.md` | Langfuse: Send traces to Langfuse |
| `broadcast-langsmith.md` | LangSmith: Send traces to LangSmith |
| `broadcast-otel-collector.md` | OpenTelemetry Collector: Send traces to any OpenTelemetry-compatible backend |
| `broadcast-posthog.md` | PostHog: Send traces to PostHog |
| `broadcast-s3.md` | S3 / S3-Compatible: Send traces to Amazon S3 or S3-compatible storage |
| `broadcast-sentry.md` | Sentry: Send traces to Sentry |
| `broadcast-webhook.md` | Webhook: Send traces to any HTTP endpoint |
| `broadcast.md` | Broadcast: Send traces from your OpenRouter requests to external observability platforms |
| `input-output-logging.md` | Input & Output Logging: Privately store and review your prompts and completions |
| `logs.md` | Logs: Inspect individual generations, upstream requests, sessions, and async jobs from your OpenRouter dashboard |

### privacy/ (5 files)

| File | Description |
|------|-------------|
| `data-collection.md` | Data Collection: What data OpenRouter collects |
| `in-region-routing.md` | In-Region Routing: Keep prompts and completions in Europe or the US |
| `provider-logging.md` | Provider Logging: Provider logging and data retention policies |
| `sovereign-ai.md` | Sovereign AI: EU and US in-region routing, and what it does and does not cover |
| `zdr.md` | Zero Data Retention: How OpenRouter gives you control over your data |

### routing/ (14 files)

| File | Description |
|------|-------------|
| `auto-exacto.md` | Auto Exacto: Automatic tool-calling provider optimization |
| `model-fallbacks.md` | Model Fallbacks: Automatic failover between models |
| `model-variants-exacto.md` | Exacto Variant: Route requests with quality-first provider sorting |
| `model-variants-free.md` | Free Variant: Access free models with the :free variant |
| `model-variants-nitro.md` | Nitro Variant: High-speed model inference with :nitro |
| `model-variants-overview.md` | Model Variants: How variant suffixes relate to the models catalog and how clients should resolve them |
| `private-endpoints.md` | Private Endpoints: Bring your own model endpoints to OpenRouter, scoped to approved users and organizations |
| `provider-selection.md` | Provider Routing: Route requests to the best provider |
| `routers-auto-code.md` | Auto Code: A router tuned for coding agents and harnesses that picks a model and reasoning effort for every turn |
| `routers-auto-router.md` | Auto Router: A general purpose router that picks a model and reasoning effort for every request |
| `routers-free-router.md` | Free Models Router: Get free AI inference by routing to available free models |
| `routers-overview.md` | Model Routing: Let a router pick the model for each request, and compare routers on the Model Routing Benchmarks |
| `routers-router-metadata.md` | Router Metadata: Surface routing decisions on every response with a single opt-in header |
| `traffic-routing.md` | How OpenRouter Routes Traffic Between Providers: How routing splits a model's traffic between provider endpoints, and the inputs that decide your share |

### tool-calling/ (11 files)

| File | Description |
|------|-------------|
| `plugins-response-healing.md` | Response Healing: Automatically fix malformed JSON responses |
| `plugins-web-search.md` | Web Search: Model-agnostic grounding |
| `plugins.md` | Plugins: Extend model capabilities with OpenRouter plugins |
| `server-tools-advisor.md` | Advisor: Consult a stronger model mid-generation as a server tool |
| `server-tools-datetime.md` | Datetime: Give any model access to the current date and time |
| `server-tools-image-generation.md` | Image Generation: Generate images from text prompts with any model |
| `server-tools-subagent.md` | Subagent: Delegate tasks to a smaller, faster model as a server tool |
| `server-tools-web-fetch.md` | Web Fetch: Give any model the ability to fetch content from URLs |
| `server-tools-web-search.md` | Web Search: Give any model access to real-time web information |
| `server-tools.md` | Server Tools: Tools operated by OpenRouter that models can call during request |
| `tool-calling.md` | Client Tools: Use client tools in your prompts |

