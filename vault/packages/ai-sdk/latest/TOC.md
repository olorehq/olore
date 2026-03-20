# AI SDK Table of Contents

## Directory Map

```
contents/
├── 00-introduction/            # Overview and introduction (1 file)
├── 02-foundations/             # Core concepts: providers, prompts, tools, streaming (6 files)
├── 02-getting-started/         # Quickstarts for Next.js, Svelte, Nuxt, Node.js, Expo (10 files)
├── 03-agents/                  # Building agents, workflows, memory, subagents (7 files)
├── 03-ai-sdk-core/             # Core API: text, structured data, tools, embeddings, images (20 files)
├── 04-ai-sdk-ui/               # UI hooks: useChat, chatbot, streaming, transport (14 files)
├── 05-ai-sdk-rsc/              # React Server Components streaming (10 files)
├── 06-advanced/                # Advanced patterns: caching, rate limiting, routing (11 files)
├── 07-reference/               # Full API reference (99 files)
│   ├── 01-ai-sdk-core/         # Core function reference (45 files)
│   ├── 02-ai-sdk-ui/           # UI hooks reference (14 files)
│   ├── 03-ai-sdk-rsc/          # RSC function reference (12 files)
│   └── 05-ai-sdk-errors/       # Error class reference (28 files)
├── 08-migration-guides/        # Upgrade guides v3.x → v7.x (8 files)
└── 09-troubleshooting/         # Common issues and fixes (31 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/00-introduction/index.mdx` |
| Getting started (Next.js) | `contents/02-getting-started/02-nextjs-app-router.mdx` |
| Core concepts | `contents/02-foundations/` |
| Text generation | `contents/03-ai-sdk-core/05-generating-text.mdx` |
| Structured output | `contents/03-ai-sdk-core/10-generating-structured-data.mdx` |
| Tool calling | `contents/03-ai-sdk-core/15-tools-and-tool-calling.mdx` |
| Building agents | `contents/03-agents/02-building-agents.mdx` |
| Chat UI | `contents/04-ai-sdk-ui/02-chatbot.mdx` |
| API reference | `contents/07-reference/` |
| Troubleshooting | `contents/09-troubleshooting/` |

## Detailed Structure

### 00-introduction/ (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | AI SDK overview and introduction |

### 02-foundations/ (6 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | Foundations overview |
| `02-providers-and-models.mdx` | Provider and model concepts |
| `03-prompts.mdx` | Prompt types and usage |
| `04-tools.mdx` | Tool concepts |
| `05-streaming.mdx` | Streaming concepts |
| `06-provider-options.mdx` | Provider-specific options |

### 02-getting-started/ (10 files)

| File | Description |
|------|-------------|
| `00-choosing-a-provider.mdx` | Provider selection guide |
| `01-navigating-the-library.mdx` | Library navigation |
| `02-nextjs-app-router.mdx` | Next.js App Router quickstart |
| `03-nextjs-pages-router.mdx` | Next.js Pages Router quickstart |
| `04-svelte.mdx` | Svelte quickstart |
| `05-nuxt.mdx` | Nuxt quickstart |
| `06-nodejs.mdx` | Node.js quickstart |
| `07-expo.mdx` | Expo/React Native quickstart |
| `08-tanstack-start.mdx` | TanStack Start quickstart |
| `09-coding-agents.mdx` | Building coding agents |

### 03-agents/ (7 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | Agents overview |
| `02-building-agents.mdx` | Building agents guide |
| `03-workflows.mdx` | Agent workflows |
| `04-loop-control.mdx` | Loop control (maxSteps, stopConditions) |
| `05-configuring-call-options.mdx` | Call options configuration |
| `06-memory.mdx` | Agent memory |
| `06-subagents.mdx` | Subagents and orchestration |

### 03-ai-sdk-core/ (20 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | AI SDK Core overview |
| `05-generating-text.mdx` | generateText, streamText |
| `10-generating-structured-data.mdx` | generateObject, streamObject |
| `15-tools-and-tool-calling.mdx` | Tool calling patterns |
| `16-mcp-tools.mdx` | MCP tool integration |
| `20-prompt-engineering.mdx` | Prompt engineering guide |
| `25-settings.mdx` | Model settings |
| `30-embeddings.mdx` | embed, embedMany |
| `31-reranking.mdx` | rerank |
| `35-image-generation.mdx` | generateImage |
| `36-transcription.mdx` | transcribe |
| `37-speech.mdx` | generateSpeech |
| `38-video-generation.mdx` | generateVideo |
| `40-middleware.mdx` | Language model middleware |
| `45-provider-management.mdx` | Provider registry, custom providers |
| `50-error-handling.mdx` | Error handling patterns |
| `55-testing.mdx` | Testing with mock models |
| `60-telemetry.mdx` | OpenTelemetry integration |
| `65-devtools.mdx` | Developer tools |
| `65-event-listeners.mdx` | Event listeners |

### 04-ai-sdk-ui/ (14 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | AI SDK UI overview |
| `02-chatbot.mdx` | useChat hook |
| `03-chatbot-message-persistence.mdx` | Message persistence |
| `03-chatbot-resume-streams.mdx` | Resumable streams |
| `03-chatbot-tool-usage.mdx` | Tool usage in chat |
| `04-generative-user-interfaces.mdx` | Generative UI |
| `05-completion.mdx` | useCompletion hook |
| `08-object-generation.mdx` | useObject hook |
| `20-streaming-data.mdx` | Streaming data from server |
| `21-error-handling.mdx` | UI error handling |
| `21-transport.mdx` | Chat transport configuration |
| `24-reading-ui-message-streams.mdx` | Reading message streams |
| `25-message-metadata.mdx` | Message metadata |
| `50-stream-protocol.mdx` | Stream protocol specification |

### 05-ai-sdk-rsc/ (10 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | AI SDK RSC overview |
| `02-streaming-react-components.mdx` | streamUI usage |
| `03-generative-ui-state.mdx` | AI/UI state management |
| `03-saving-and-restoring-states.mdx` | State persistence |
| `04-multistep-interfaces.mdx` | Multi-step interfaces |
| `05-streaming-values.mdx` | createStreamableValue |
| `06-loading-state.mdx` | Loading states |
| `08-error-handling.mdx` | RSC error handling |
| `09-authentication.mdx` | Authentication |
| `10-migrating-to-ui.mdx` | Migrating from RSC to UI |

### 06-advanced/ (11 files)

| File | Description |
|------|-------------|
| `01-prompt-engineering.mdx` | Advanced prompt engineering |
| `02-stopping-streams.mdx` | Aborting and stopping streams |
| `03-backpressure.mdx` | Backpressure handling |
| `04-caching.mdx` | Response caching |
| `05-multiple-streamables.mdx` | Multiple streamables |
| `06-rate-limiting.mdx` | Rate limiting |
| `07-rendering-ui-with-language-models.mdx` | UI rendering with LLMs |
| `08-model-as-router.mdx` | Model as router pattern |
| `09-multistep-interfaces.mdx` | Multi-step interfaces |
| `09-sequential-generations.mdx` | Sequential generations |
| `10-vercel-deployment-guide.mdx` | Vercel deployment |

### 07-reference/01-ai-sdk-core/ (45 files)

| File | Description |
|------|-------------|
| `01-generate-text.mdx` | generateText() reference |
| `02-stream-text.mdx` | streamText() reference |
| `05-embed.mdx` | embed() reference |
| `06-embed-many.mdx` | embedMany() reference |
| `06-rerank.mdx` | rerank() reference |
| `10-generate-image.mdx` | generateImage() reference |
| `11-transcribe.mdx` | transcribe() reference |
| `12-generate-speech.mdx` | generateSpeech() reference |
| `13-generate-video.mdx` | generateVideo() reference |
| `15-agent.mdx` | agent() reference |
| `16-tool-loop-agent.mdx` | toolLoopAgent() reference |
| `17-create-agent-ui-stream.mdx` | createAgentUIStream() reference |
| `18-create-agent-ui-stream-response.mdx` | createAgentUIStreamResponse() reference |
| `18-pipe-agent-ui-stream-to-response.mdx` | pipeAgentUIStreamToResponse() reference |
| `20-tool.mdx` | tool() reference |
| `22-dynamic-tool.mdx` | dynamicTool() reference |
| `23-create-mcp-client.mdx` | createMcpClient() reference |
| `24-mcp-stdio-transport.mdx` | McpStdioTransport reference |
| `25-json-schema.mdx` | jsonSchema() reference |
| `26-zod-schema.mdx` | zodSchema() reference |
| `27-valibot-schema.mdx` | valibotSchema() reference |
| `28-output.mdx` | Output reference |
| `30-model-message.mdx` | ModelMessage types |
| `31-ui-message.mdx` | UIMessage types |
| `32-validate-ui-messages.mdx` | validateUIMessages() |
| `33-safe-validate-ui-messages.mdx` | safeValidateUIMessages() |
| `40-provider-registry.mdx` | createProviderRegistry() |
| `42-custom-provider.mdx` | Custom provider API |
| `50-cosine-similarity.mdx` | cosineSimilarity() |
| `60-wrap-language-model.mdx` | wrapLanguageModel() |
| `61-wrap-image-model.mdx` | wrapImageModel() |
| `65-language-model-v2-middleware.mdx` | LanguageModelV2Middleware |
| `66-extract-reasoning-middleware.mdx` | extractReasoningMiddleware() |
| `67-simulate-streaming-middleware.mdx` | simulateStreamingMiddleware() |
| `68-default-settings-middleware.mdx` | defaultSettingsMiddleware() |
| `69-add-tool-input-examples-middleware.mdx` | addToolInputExamplesMiddleware() |
| `70-extract-json-middleware.mdx` | extractJsonMiddleware() |
| `70-step-count-is.mdx` | stepCountIs() |
| `71-has-tool-call.mdx` | hasToolCall() |
| `75-simulate-readable-stream.mdx` | simulateReadableStream() |
| `80-smooth-stream.mdx` | smoothStream() |
| `90-generate-id.mdx` | generateId() |
| `91-create-id-generator.mdx` | createIdGenerator() |
| `92-default-generated-file.mdx` | DefaultGeneratedFile |

### 07-reference/02-ai-sdk-ui/ (14 files)

| File | Description |
|------|-------------|
| `01-use-chat.mdx` | useChat() hook reference |
| `02-use-completion.mdx` | useCompletion() hook reference |
| `03-use-object.mdx` | useObject() hook reference |
| `31-convert-to-model-messages.mdx` | convertToModelMessages() |
| `32-prune-messages.mdx` | pruneMessages() |
| `40-create-ui-message-stream.mdx` | createUIMessageStream() |
| `41-create-ui-message-stream-response.mdx` | createUIMessageStreamResponse() |
| `42-pipe-ui-message-stream-to-response.mdx` | pipeUIMessageStreamToResponse() |
| `43-read-ui-message-stream.mdx` | readUIMessageStream() |
| `46-infer-ui-tools.mdx` | InferUITools type |
| `47-infer-ui-tool.mdx` | InferUITool type |
| `50-direct-chat-transport.mdx` | DirectChatTransport |

### 07-reference/03-ai-sdk-rsc/ (12 files)

| File | Description |
|------|-------------|
| `01-stream-ui.mdx` | streamUI() reference |
| `02-create-ai.mdx` | createAI() reference |
| `03-create-streamable-ui.mdx` | createStreamableUI() |
| `04-create-streamable-value.mdx` | createStreamableValue() |
| `05-read-streamable-value.mdx` | readStreamableValue() |
| `06-get-ai-state.mdx` | getAIState() |
| `07-get-mutable-ai-state.mdx` | getMutableAIState() |
| `08-use-ai-state.mdx` | useAIState() |
| `09-use-actions.mdx` | useActions() |
| `10-use-ui-state.mdx` | useUIState() |
| `11-use-streamable-value.mdx` | useStreamableValue() |
| `20-render.mdx` | render() (deprecated) |

### 07-reference/05-ai-sdk-errors/ (28 files)

| File | Description |
|------|-------------|
| `ai-api-call-error.mdx` | AIAPICallError |
| `ai-download-error.mdx` | AIDownloadError |
| `ai-empty-response-body-error.mdx` | AIEmptyResponseBodyError |
| `ai-invalid-argument-error.mdx` | AIInvalidArgumentError |
| `ai-invalid-data-content-error.mdx` | AIInvalidDataContentError |
| `ai-invalid-message-role-error.mdx` | AIInvalidMessageRoleError |
| `ai-invalid-prompt-error.mdx` | AIInvalidPromptError |
| `ai-invalid-response-data-error.mdx` | AIInvalidResponseDataError |
| `ai-invalid-tool-approval-error.mdx` | AIInvalidToolApprovalError |
| `ai-invalid-tool-input-error.mdx` | AIInvalidToolInputError |
| `ai-json-parse-error.mdx` | AIJSONParseError |
| `ai-load-api-key-error.mdx` | AILoadAPIKeyError |
| `ai-load-setting-error.mdx` | AILoadSettingError |
| `ai-message-conversion-error.mdx` | AIMessageConversionError |
| `ai-no-content-generated-error.mdx` | AINoContentGeneratedError |
| `ai-no-image-generated-error.mdx` | AINoImageGeneratedError |
| `ai-no-object-generated-error.mdx` | AINoObjectGeneratedError |
| `ai-no-output-generated-error.mdx` | AINoOutputGeneratedError |
| `ai-no-speech-generated-error.mdx` | AINoSpeechGeneratedError |
| `ai-no-such-model-error.mdx` | AINoSuchModelError |
| `ai-no-such-provider-error.mdx` | AINoSuchProviderError |
| `ai-no-such-tool-error.mdx` | AINoSuchToolError |
| `ai-no-transcript-generated-error.mdx` | AINoTranscriptGeneratedError |
| `ai-no-video-generated-error.mdx` | AINoVideoGeneratedError |
| `ai-retry-error.mdx` | AIRetryError |
| `ai-too-many-embedding-values-for-call-error.mdx` | AITooManyEmbeddingValuesForCallError |
| `ai-tool-call-repair-error.mdx` | AIToolCallRepairError |
| `ai-type-validation-error.mdx` | AITypeValidationError |

### 08-migration-guides/ (8 files)

| File | Description |
|------|-------------|
| `00-versioning.mdx` | Versioning policy |
| `23-migration-guide-7-0.mdx` | Migrate to v7.0 |
| `24-migration-guide-6-0.mdx` | Migrate to v6.0 |
| `25-migration-guide-5-0-data.mdx` | Migrate data to v5.0 |
| `26-migration-guide-5-0.mdx` | Migrate to v5.0 |
| `27-migration-guide-4-2.mdx` | Migrate to v4.2 |
| `28-migration-guide-4-1.mdx` | Migrate to v4.1 |
| `29-migration-guide-4-0.mdx` | Migrate to v4.0 |

### 09-troubleshooting/ (31 files)

| File | Description |
|------|-------------|
| `01-azure-stream-slow.mdx` | Azure streaming slow |
| `03-server-actions-in-client-components.mdx` | Server actions in client components |
| `04-strange-stream-output.mdx` | Strange stream output |
| `05-streamable-ui-errors.mdx` | Streamable UI errors |
| `05-tool-invocation-missing-result.mdx` | Tool invocation missing result |
| `06-streaming-not-working-when-deployed.mdx` | Streaming not working on deployment |
| `06-streaming-not-working-when-proxied.mdx` | Streaming not working behind proxy |
| `06-timeout-on-vercel.mdx` | Timeout on Vercel |
| `07-unclosed-streams.mdx` | Unclosed streams |
| `08-use-chat-failed-to-parse-stream.mdx` | useChat failed to parse stream |
| `09-client-stream-error.mdx` | Client stream errors |
| `10-use-chat-tools-no-response.mdx` | useChat tools no response |
| `11-use-chat-custom-request-options.mdx` | useChat custom request options |
| `12-typescript-performance-zod.mdx` | TypeScript performance with Zod |
| `12-use-chat-an-error-occurred.mdx` | useChat "An error occurred" |
| `13-repeated-assistant-messages.mdx` | Repeated assistant messages |
| `14-stream-abort-handling.mdx` | Stream abort handling |
| `14-tool-calling-with-structured-outputs.mdx` | Tool calling with structured outputs |
| `15-abort-breaks-resumable-streams.mdx` | Abort breaks resumable streams |
| `15-stream-text-not-working.mdx` | streamText not working |
| `16-streaming-status-delay.mdx` | Streaming status delay |
| `17-use-chat-stale-body-data.mdx` | useChat stale body data |
| `18-ontoolcall-type-narrowing.mdx` | onToolCall type narrowing |
| `19-unsupported-model-version.mdx` | Unsupported model version |
| `20-no-object-generated-content-filter.mdx` | No object generated content filter |
| `21-missing-tool-results-error.mdx` | Missing tool results error |
| `30-model-is-not-assignable-to-type.mdx` | Model not assignable to type |
| `40-typescript-cannot-find-namespace-jsx.mdx` | TypeScript cannot find JSX namespace |
| `50-react-maximum-update-depth-exceeded.mdx` | React maximum update depth exceeded |
| `60-jest-cannot-find-module-ai-rsc.mdx` | Jest cannot find module ai/rsc |
| `70-high-memory-usage-with-images.mdx` | High memory usage with images |
