# AI SDK Table of Contents

## Directory Map

```
contents/
├── 00-introduction/          # SDK overview (1 file)
├── 02-foundations/           # Core concepts (6 files)
├── 02-getting-started/       # Framework quickstarts (10 files)
├── 03-agents/                # Building agents (11 files)
├── 03-ai-sdk-core/           # Core API guides (26 files)
├── 03-ai-sdk-harnesses/      # Agent harnesses (7 files)
├── 04-ai-sdk-ui/             # UI hooks and streaming (14 files)
├── 05-ai-sdk-rsc/            # React Server Components (10 files)
├── 06-advanced/              # Advanced patterns (11 files)
├── 07-reference/
│   ├── 01-ai-sdk-core/       # Core API reference (51 files)
│   ├── 02-ai-sdk-ui/         # UI API reference (14 files)
│   ├── 03-ai-sdk-rsc/        # RSC API reference (12 files)
│   ├── 04-ai-sdk-workflow/   # Workflow API reference (2 files)
│   ├── 05-ai-sdk-errors/     # Error reference (33 files)
│   └── 06-ai-sdk-tui/        # TUI API reference (1 file)
├── 08-migration-guides/      # Upgrade guides (8 files)
└── 09-troubleshooting/       # Common issues (31 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to AI SDK | `contents/00-introduction/index.mdx` |
| Choose a framework | `contents/02-getting-started/00-choosing-a-provider.mdx` |
| Generate text | `contents/03-ai-sdk-core/05-generating-text.mdx` |
| Build a chatbot | `contents/04-ai-sdk-ui/02-chatbot.mdx` |
| Build agents | `contents/03-agents/02-building-agents.mdx` |
| Tool calling | `contents/03-ai-sdk-core/15-tools-and-tool-calling.mdx` |
| Structured output | `contents/03-ai-sdk-core/10-generating-structured-data.mdx` |
| API reference | `contents/07-reference/01-ai-sdk-core/` |
| Troubleshooting | `contents/09-troubleshooting/` |
| Migration guide | `contents/08-migration-guides/` |

## Detailed Structure

### 00-introduction/ (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | AI SDK overview, primary surfaces, model providers |

### 02-foundations/ (6 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | Foundational AI and LLM concepts |
| `02-providers-and-models.mdx` | Providers and model selection |
| `03-prompts.mdx` | Working with prompts |
| `04-tools.mdx` | Tool calling fundamentals |
| `05-streaming.mdx` | Streaming concepts |
| `06-provider-options.mdx` | Provider-level options |

### 02-getting-started/ (10 files)

| File | Description |
|------|-------------|
| `00-choosing-a-provider.mdx` | How to choose a model provider |
| `01-navigating-the-library.mdx` | Library structure overview |
| `02-nextjs-app-router.mdx` | Next.js App Router quickstart |
| `03-nextjs-pages-router.mdx` | Next.js Pages Router quickstart |
| `04-svelte.mdx` | SvelteKit quickstart |
| `05-nuxt.mdx` | Nuxt quickstart |
| `06-nodejs.mdx` | Node.js quickstart |
| `07-expo.mdx` | Expo (React Native) quickstart |
| `08-tanstack-start.mdx` | TanStack Start quickstart |
| `09-coding-agents.mdx` | Coding agents quickstart |

### 03-agents/ (11 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | Agent concepts and ToolLoopAgent |
| `02-building-agents.mdx` | Step-by-step agent construction |
| `03-workflows.mdx` | Durable workflow integration |
| `04-loop-control.mdx` | Controlling agent loops |
| `05-configuring-call-options.mdx` | Call options for agents |
| `06-memory.mdx` | Agent memory patterns |
| `06-policy-tool-approvals.mdx` | Policy-based tool approvals |
| `06-subagents.mdx` | Subagent patterns |
| `06-tool-approvals.mdx` | Tool approval flows |
| `07-workflow-agent.mdx` | WorkflowAgent class |
| `08-terminal-ui.mdx` | Terminal UI for agents |

### 03-ai-sdk-core/ (26 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | AI SDK Core overview |
| `05-generating-text.mdx` | generateText and streamText |
| `10-generating-structured-data.mdx` | Structured output with schemas |
| `15-tools-and-tool-calling.mdx` | Tool calling patterns |
| `16-mcp-tools.mdx` | MCP tool integration |
| `17-mcp-apps.mdx` | MCP app integration |
| `17-runtime-and-tool-context.mdx` | Runtime context for tools |
| `20-prompt-engineering.mdx` | Prompt engineering tips |
| `25-settings.mdx` | Model settings (temperature, etc.) |
| `26-reasoning.mdx` | Reasoning models |
| `30-embeddings.mdx` | Text embeddings |
| `31-reranking.mdx` | Reranking results |
| `35-image-generation.mdx` | Image generation |
| `36-realtime.mdx` | Realtime voice/audio |
| `36-transcription.mdx` | Audio transcription |
| `37-speech.mdx` | Text-to-speech |
| `38-video-generation.mdx` | Video generation |
| `39-file-uploads.mdx` | File upload handling |
| `40-middleware.mdx` | Language model middleware |
| `41-skill-uploads.mdx` | Skill uploads and ProviderReference |
| `45-provider-management.mdx` | Multi-provider management |
| `50-error-handling.mdx` | Error handling |
| `55-testing.mdx` | Testing AI applications |
| `60-telemetry.mdx` | OpenTelemetry support |
| `65-devtools.mdx` | Developer tools |
| `65-event-listeners.mdx` | Event listeners |

### 03-ai-sdk-harnesses/ (7 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | Harness abstraction overview |
| `02-harness-agent.mdx` | HarnessAgent class |
| `03-tools.mdx` | Tools with harnesses |
| `04-skills.mdx` | Skills with harnesses |
| `05-harness-adapters.mdx` | Harness adapters |
| `06-ui.mdx` | Harness UI integration |
| `07-terminal-ui.mdx` | Harness terminal UI |

### 04-ai-sdk-ui/ (14 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | AI SDK UI overview |
| `02-chatbot.mdx` | Building a chatbot with useChat |
| `03-chatbot-message-persistence.mdx` | Persisting chat messages |
| `03-chatbot-resume-streams.mdx` | Resumable streams |
| `03-chatbot-tool-usage.mdx` | Tool use in chatbot |
| `04-generative-user-interfaces.mdx` | Generative UI patterns |
| `05-completion.mdx` | Text completion hook |
| `08-object-generation.mdx` | Streaming object generation |
| `20-streaming-data.mdx` | Streaming arbitrary data |
| `21-error-handling.mdx` | UI error handling |
| `21-transport.mdx` | Custom transport layer |
| `24-reading-ui-message-streams.mdx` | Reading message streams |
| `25-message-metadata.mdx` | Message metadata |
| `50-stream-protocol.mdx` | UI message stream protocol |

### 05-ai-sdk-rsc/ (10 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | AI SDK RSC overview (experimental) |
| `02-streaming-react-components.mdx` | Streaming React Server Components |
| `03-generative-ui-state.mdx` | Generative UI state management |
| `03-saving-and-restoring-states.mdx` | State persistence |
| `04-multistep-interfaces.mdx` | Multistep RSC interfaces |
| `05-streaming-values.mdx` | Streaming values |
| `06-loading-state.mdx` | Loading states |
| `08-error-handling.mdx` | RSC error handling |
| `09-authentication.mdx` | Authentication patterns |
| `10-migrating-to-ui.mdx` | Migration from RSC to AI SDK UI |

### 06-advanced/ (11 files)

| File | Description |
|------|-------------|
| `01-prompt-engineering.mdx` | Advanced prompt engineering |
| `02-stopping-streams.mdx` | Aborting streams |
| `03-backpressure.mdx` | Handling backpressure |
| `04-caching.mdx` | Response caching |
| `05-multiple-streamables.mdx` | Multiple concurrent streams |
| `06-rate-limiting.mdx` | Rate limiting patterns |
| `07-rendering-ui-with-language-models.mdx` | UI rendering with LLMs |
| `08-model-as-router.mdx` | Model as a UI router |
| `09-multistep-interfaces.mdx` | Multistep interface patterns |
| `09-sequential-generations.mdx` | Sequential generation chains |
| `10-vercel-deployment-guide.mdx` | Deploying to Vercel |

### 07-reference/01-ai-sdk-core/ (51 files)

| File | Description |
|------|-------------|
| `01-generate-text.mdx` | generateText() API |
| `02-stream-text.mdx` | streamText() API |
| `05-embed.mdx` | embed() API |
| `06-embed-many.mdx` | embedMany() API |
| `06-rerank.mdx` | rerank() API |
| `10-generate-image.mdx` | generateImage() API |
| `11-transcribe.mdx` | transcribe() API |
| `12-generate-speech.mdx` | generateSpeech() API |
| `13-generate-video.mdx` | generateVideo() API |
| `14-upload-file.mdx` | uploadFile() API |
| `14-upload-skill.mdx` | uploadSkill() API |
| `15-agent.mdx` | agent() API |
| `16-tool-loop-agent.mdx` | ToolLoopAgent API |
| `17-create-agent-ui-stream.mdx` | createAgentUIStream() |
| `18-create-agent-ui-stream-response.mdx` | createAgentUIStreamResponse() |
| `18-pipe-agent-ui-stream-to-response.mdx` | pipeAgentUIStreamToResponse() |
| `20-tool.mdx` | tool() API |
| `22-dynamic-tool.mdx` | dynamicTool() API |
| `23-create-mcp-client.mdx` | createMCPClient() API |
| `23-get-realtime-tool-definitions.mdx` | getRealtimeToolDefinitions() |
| `24-mcp-apps.mdx` | MCP app integration API |
| `24-mcp-stdio-transport.mdx` | MCP stdio transport |
| `25-json-schema.mdx` | jsonSchema() API |
| `26-zod-schema.mdx` | zodSchema() API |
| `27-valibot-schema.mdx` | valibotSchema() API |
| `28-output.mdx` | output() API |
| `29-filter-active-tools.mdx` | filterActiveTools() |
| `30-model-message.mdx` | ModelMessage type |
| `31-ui-message.mdx` | UIMessage type |
| `32-validate-ui-messages.mdx` | validateUIMessages() |
| `33-safe-validate-ui-messages.mdx` | safeValidateUIMessages() |
| `34-sandbox.mdx` | sandbox() API |
| `40-provider-registry.mdx` | createProviderRegistry() |
| `42-custom-provider.mdx` | Creating custom providers |
| `50-cosine-similarity.mdx` | cosineSimilarity() utility |
| `60-wrap-language-model.mdx` | wrapLanguageModel() |
| `61-wrap-image-model.mdx` | wrapImageModel() |
| `65-language-model-v2-middleware.mdx` | LanguageModelV2Middleware |
| `66-extract-reasoning-middleware.mdx` | extractReasoningMiddleware() |
| `67-simulate-streaming-middleware.mdx` | simulateStreamingMiddleware() |
| `68-default-settings-middleware.mdx` | defaultSettingsMiddleware() |
| `69-add-tool-input-examples-middleware.mdx` | addToolInputExamplesMiddleware() |
| `70-extract-json-middleware.mdx` | extractJsonMiddleware() |
| `70-is-step-count.mdx` | isStepCount() loop control |
| `71-has-tool-call.mdx` | hasToolCall() loop control |
| `72-loop-finished.mdx` | loopFinished() loop control |
| `75-simulate-readable-stream.mdx` | simulateReadableStream() |
| `80-smooth-stream.mdx` | smoothStream() |
| `90-generate-id.mdx` | generateId() utility |
| `91-create-id-generator.mdx` | createIdGenerator() |
| `92-default-generated-file.mdx` | defaultGeneratedFile() |

### 07-reference/02-ai-sdk-ui/ (14 files)

| File | Description |
|------|-------------|
| `01-use-chat.mdx` | useChat() hook |
| `02-use-completion.mdx` | useCompletion() hook |
| `03-use-object.mdx` | useObject() hook |
| `05-use-realtime.mdx` | useRealtime() hook |
| `31-convert-to-model-messages.mdx` | convertToModelMessages() |
| `32-prune-messages.mdx` | pruneMessages() |
| `40-create-ui-message-stream.mdx` | createUIMessageStream() |
| `41-create-ui-message-stream-response.mdx` | createUIMessageStreamResponse() |
| `42-pipe-ui-message-stream-to-response.mdx` | pipeUIMessageStreamToResponse() |
| `43-read-ui-message-stream.mdx` | readUIMessageStream() |
| `46-infer-ui-tools.mdx` | InferUITools type |
| `47-infer-ui-tool.mdx` | InferUITool type |
| `48-mcp-app-renderer.mdx` | MCPAppRenderer |
| `50-direct-chat-transport.mdx` | DirectChatTransport |

### 07-reference/03-ai-sdk-rsc/ (12 files)

| File | Description |
|------|-------------|
| `01-stream-ui.mdx` | streamUI() function |
| `02-create-ai.mdx` | createAI() function |
| `03-create-streamable-ui.mdx` | createStreamableUI() |
| `04-create-streamable-value.mdx` | createStreamableValue() |
| `05-read-streamable-value.mdx` | readStreamableValue() |
| `06-get-ai-state.mdx` | getAIState() |
| `07-get-mutable-ai-state.mdx` | getMutableAIState() |
| `08-use-ai-state.mdx` | useAIState() hook |
| `09-use-actions.mdx` | useActions() hook |
| `10-use-ui-state.mdx` | useUIState() hook |
| `11-use-streamable-value.mdx` | useStreamableValue() hook |
| `20-render.mdx` | render() (deprecated) |

### 07-reference/04-ai-sdk-workflow/ (2 files)

| File | Description |
|------|-------------|
| `01-workflow-agent.mdx` | WorkflowAgent class |
| `02-workflow-chat-transport.mdx` | WorkflowChatTransport |

### 07-reference/05-ai-sdk-errors/ (33 files)

| File | Description |
|------|-------------|
| `ai-api-call-error.mdx` | AI_APICallError |
| `ai-download-error.mdx` | AI_DownloadError |
| `ai-empty-response-body-error.mdx` | AI_EmptyResponseBodyError |
| `ai-invalid-argument-error.mdx` | AI_InvalidArgumentError |
| `ai-invalid-data-content-error.mdx` | AI_InvalidDataContentError |
| `ai-invalid-message-role-error.mdx` | AI_InvalidMessageRoleError |
| `ai-invalid-prompt-error.mdx` | AI_InvalidPromptError |
| `ai-invalid-response-data-error.mdx` | AI_InvalidResponseDataError |
| `ai-invalid-tool-approval-error.mdx` | AI_InvalidToolApprovalError |
| `ai-invalid-tool-approval-signature-error.mdx` | AI_InvalidToolApprovalSignatureError |
| `ai-invalid-tool-input-error.mdx` | AI_InvalidToolInputError |
| `ai-json-parse-error.mdx` | AI_JSONParseError |
| `ai-load-api-key-error.mdx` | AI_LoadAPIKeyError |
| `ai-load-setting-error.mdx` | AI_LoadSettingError |
| `ai-message-conversion-error.mdx` | AI_MessageConversionError |
| `ai-no-content-generated-error.mdx` | AI_NoContentGeneratedError |
| `ai-no-image-generated-error.mdx` | AI_NoImageGeneratedError |
| `ai-no-object-generated-error.mdx` | AI_NoObjectGeneratedError |
| `ai-no-output-generated-error.mdx` | AI_NoOutputGeneratedError |
| `ai-no-speech-generated-error.mdx` | AI_NoSpeechGeneratedError |
| `ai-no-such-model-error.mdx` | AI_NoSuchModelError |
| `ai-no-such-provider-error.mdx` | AI_NoSuchProviderError |
| `ai-no-such-provider-reference-error.mdx` | AI_NoSuchProviderReferenceError |
| `ai-no-such-tool-error.mdx` | AI_NoSuchToolError |
| `ai-no-transcript-generated-error.mdx` | AI_NoTranscriptGeneratedError |
| `ai-no-video-generated-error.mdx` | AI_NoVideoGeneratedError |
| `ai-retry-error.mdx` | AI_RetryError |
| `ai-too-many-embedding-values-for-call-error.mdx` | AI_TooManyEmbeddingValuesForCallError |
| `ai-tool-call-not-found-for-approval-error.mdx` | AI_ToolCallNotFoundForApprovalError |
| `ai-tool-call-repair-error.mdx` | AI_ToolCallRepairError |
| `ai-type-validation-error.mdx` | AI_TypeValidationError |
| `ai-ui-message-stream-error.mdx` | AI_UIMessageStreamError |
| `ai-unsupported-functionality-error.mdx` | AI_UnsupportedFunctionalityError |

### 07-reference/06-ai-sdk-tui/ (1 file)

| File | Description |
|------|-------------|
| `01-run-agent-tui.mdx` | runAgentTUI() API |

### 08-migration-guides/ (8 files)

| File | Description |
|------|-------------|
| `00-versioning.mdx` | Versioning policy (MAJOR.MINOR.PATCH) |
| `23-migration-guide-7-0.mdx` | Migrate 6.x to 7.0 |
| `24-migration-guide-6-0.mdx` | Migrate 5.x to 6.0 |
| `25-migration-guide-5-0-data.mdx` | Migrate data to AI SDK 5.0 |
| `26-migration-guide-5-0.mdx` | Migrate 4.x to 5.0 |
| `27-migration-guide-4-2.mdx` | Migrate 4.1 to 4.2 |
| `28-migration-guide-4-1.mdx` | Migrate 4.0 to 4.1 |
| `29-migration-guide-4-0.mdx` | Migrate 3.4 to 4.0 |

### 09-troubleshooting/ (31 files)

| File | Description |
|------|-------------|
| `01-azure-stream-slow.mdx` | Azure streaming slow |
| `03-server-actions-in-client-components.mdx` | Server actions in client components |
| `04-strange-stream-output.mdx` | Strange stream output |
| `05-streamable-ui-errors.mdx` | Streamable UI errors |
| `05-tool-invocation-missing-result.mdx` | Tool invocation missing result |
| `06-streaming-not-working-when-deployed.mdx` | Streaming broken after deploy |
| `06-streaming-not-working-when-proxied.mdx` | Streaming broken behind proxy |
| `06-timeout-on-vercel.mdx` | Timeout issues on Vercel |
| `07-unclosed-streams.mdx` | Unclosed streams |
| `08-use-chat-failed-to-parse-stream.mdx` | useChat parse errors |
| `09-client-stream-error.mdx` | Client-side stream errors |
| `10-use-chat-tools-no-response.mdx` | useChat tools no response |
| `11-use-chat-custom-request-options.mdx` | Custom request options with useChat |
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
| `20-no-object-generated-content-filter.mdx` | No object - content filter |
| `21-missing-tool-results-error.mdx` | Missing tool results error |
| `30-model-is-not-assignable-to-type.mdx` | Model type assignment error |
| `40-typescript-cannot-find-namespace-jsx.mdx` | TypeScript JSX namespace error |
| `50-react-maximum-update-depth-exceeded.mdx` | React maximum update depth |
| `60-jest-cannot-find-module-ai-rsc.mdx` | Jest cannot find ai/rsc |
| `70-high-memory-usage-with-images.mdx` | High memory usage with images |
