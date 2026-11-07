# ai-sdk Table of Contents

## Directory Map

```
contents/
├── 00-introduction/  (1 files)
├── 02-foundations/  (6 files)
├── 02-getting-started/  (11 files)
├── 03-agents/  (14 files)
├── 03-ai-sdk-core/  (34 files)
├── 03-ai-sdk-harnesses/  (9 files)
├── 04-ai-sdk-ui/  (15 files)
├── 05-ai-sdk-rsc/  (11 files)
├── 06-advanced/  (12 files)
├── 07-reference/01-ai-sdk-core/  (65 files)
├── 07-reference/02-ai-sdk-ui/  (16 files)
├── 07-reference/03-ai-sdk-rsc/  (13 files)
├── 07-reference/04-ai-sdk-workflow/  (3 files)
├── 07-reference/05-ai-sdk-errors/  (39 files)
├── 07-reference/06-ai-sdk-tui/  (1 files)
├── 08-migration-guides/  (5 files)
├── 09-troubleshooting/  (31 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Introduction | `contents/00-introduction/index.mdx` |
| Next.js quickstart | `contents/02-getting-started/02-nextjs-app-router.mdx` |
| Generate text | `contents/03-ai-sdk-core/05-generating-text.mdx` |
| Structured data | `contents/03-ai-sdk-core/10-generating-structured-data.mdx` |
| Tools | `contents/03-ai-sdk-core/15-tools-and-tool-calling.mdx` |
| Agents | `contents/03-agents/02-building-agents.mdx` |
| Chatbot UI (useChat) | `contents/04-ai-sdk-ui/02-chatbot.mdx` |
| API reference | `contents/07-reference/` |
| Troubleshooting | `contents/09-troubleshooting/` |

## Detailed Structure

### 00-introduction/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | The AI SDK is the TypeScript toolkit for building AI applications and agents with React, Next.js, Vue, Svelte, Node.js, and more. |

### 02-foundations/ (6 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | An overview of foundational concepts critical to understanding the AI SDK |
| `02-providers-and-models.mdx` | Learn about the providers and models available in the AI SDK. |
| `03-prompts.mdx` | Learn about the Prompt structure used in the AI SDK. |
| `04-tools.mdx` | Learn about tools with the AI SDK. |
| `05-streaming.mdx` | Why use streaming for AI applications? |
| `06-provider-options.mdx` | Learn how to use provider-specific options to control reasoning, caching, and other advanced features. |

### 02-getting-started/ (11 files)

| File | Description |
|------|-------------|
| `00-choosing-a-provider.mdx` | Learn how to configure and authenticate with AI providers in the AI SDK. |
| `01-navigating-the-library.mdx` | Learn how to navigate the AI SDK. |
| `02-nextjs-app-router.mdx` | Learn how to build your first agent with the AI SDK and Next.js App Router. |
| `04-svelte.mdx` | Learn how to build your first agent with the AI SDK and Svelte. |
| `05-nuxt.mdx` | Learn how to build your first agent with the AI SDK and Vue.js (Nuxt). |
| `06-nodejs.mdx` | Learn how to build your first agent with the AI SDK and Node.js. |
| `07-expo.mdx` | Learn how to build your first agent with the AI SDK and Expo. |
| `08-angular.mdx` | Learn how to build your first agent with the AI SDK and Angular. |
| `08-tanstack-start.mdx` | Learn how to build your first agent with the AI SDK and TanStack Start. |
| `09-coding-agents.mdx` | Learn how to set up the AI SDK for use with coding agents, including installing skills, accessing bundled docs, and using DevTools. |
| `10-nextjs-pages-router.mdx` | Add an agent with a streaming chat interface to an existing Next.js Pages Router application. |

### 03-agents/ (14 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | Learn how to build agents with the AI SDK. |
| `02-building-agents.mdx` | Complete guide to creating agents with the ToolLoopAgent. |
| `03-workflows.mdx` | Learn workflow patterns for building reliable agents with the AI SDK. |
| `04-loop-control.mdx` | Control agent execution with built-in loop management using stopWhen and prepareStep |
| `05-configuring-call-options.mdx` | Pass type-safe runtime inputs to dynamically configure agent behavior. |
| `06-memory.mdx` | Add persistent memory to your agent using provider-defined tools, memory providers, or a custom tool. |
| `06-policy-tool-approvals.mdx` | Author tool authorization rules as code with @ai-sdk/policy-opa and Open Policy Agent. |
| `06-subagents.mdx` | Delegate context-heavy tasks to specialized subagents while keeping the main agent focused. |
| `06-tool-approvals.mdx` | Add manual and automatic approval flows to ToolLoopAgent tools. |
| `07-workflow-agent.mdx` | Build durable, resumable agents with the WorkflowAgent from @ai-sdk/workflow. |
| `08-terminal-ui.mdx` | Run AI SDK agents in an interactive terminal UI. |
| `09-chat-platforms.mdx` | Run AI SDK agents in Slack, Microsoft Teams, Discord, and other chat platforms with Chat SDK. |
| `10-eve.mdx` | Build production AI agents with eve, an open-source agent framework for durable, long-running work that is built on the AI SDK. |
| `index.mdx` | An overview of building agents with the AI SDK. |

### 03-ai-sdk-core/ (34 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | An overview of AI SDK Core. |
| `05-generating-text.mdx` | Learn how to generate text with the AI SDK. |
| `10-generating-structured-data.mdx` | Learn how to generate structured data with the AI SDK. |
| `15-tools-and-tool-calling.mdx` | Learn about tool calling and multi-step calls (using stopWhen) with AI SDK Core. |
| `16-mcp-tools.mdx` | Learn how to connect to Model Context Protocol (MCP) servers and use their tools with AI SDK Core. |
| `17-mcp-apps.mdx` | Learn how to connect to MCP Apps and render interactive tool UIs with the AI SDK. |
| `17-mcp-events.mdx` | Understand the MCP webhook events contract and the AI SDK APIs for subscribing, verifying, and receiving events. |
| `17-runtime-and-tool-context.mdx` | Learn how runtime context, tool context, and telemetry context filtering work together. |
| `18-code-mode.mdx` | Let models orchestrate AI SDK tools with sandboxed JavaScript and TypeScript. |
| `18-tools.mdx` | Use first-party AI SDK tools to add capabilities to agents and applications. |
| `19-tool-search.mdx` | Let models discover tools on demand, with direct calling or cache-preserving code mode. |
| `20-prompt-engineering.mdx` | Learn how to develop prompts with AI SDK Core. |
| `25-settings.mdx` | Learn how to configure the AI SDK. |
| `26-reasoning.mdx` | Learn how to control reasoning across providers with the top-level reasoning parameter. |
| `30-embeddings.mdx` | Learn how to embed values with the AI SDK. |
| `31-reranking.mdx` | Learn how to rerank documents with the AI SDK. |
| `32-decisions.mdx` | Decide answers to Choice, Score, and Boolean questions against shared state. |
| `35-image-generation.mdx` | Learn how to generate images with the AI SDK. |
| `36-realtime.mdx` | Learn how to build realtime voice conversations with the AI SDK. |
| `36-transcription.mdx` | Learn how to transcribe audio with the AI SDK. |
| `36-translation.mdx` | Learn how to translate speech with the AI SDK. |
| `37-speech.mdx` | Learn how to generate speech from text with the AI SDK. |
| `38-video-generation.mdx` | Learn how to generate videos with the AI SDK. |
| `39-file-uploads.mdx` | Learn how to upload files and use provider references with the AI SDK. |
| `40-middleware.mdx` | Learn how to use middleware to enhance the behavior of language models |
| `41-skill-uploads.mdx` | Learn how to upload skills and use provider references with the AI SDK. |
| `42-batch.mdx` | Learn how to process asynchronous batches with the AI SDK. |
| `45-provider-management.mdx` | Learn how to work with multiple providers and models |
| `50-error-handling.mdx` | Learn how to handle errors in the AI SDK Core |
| `55-testing.mdx` | Learn how to use AI SDK Core mock providers for testing. |
| `60-telemetry.mdx` | Using OpenTelemetry with AI SDK Core |
| `65-devtools.mdx` | Debug and inspect AI SDK applications with DevTools |
| `65-lifecycle-callbacks.mdx` | Observe AI SDK lifecycle events in generateText, streamText, embed, embedMany, rerank, and experimental_decide calls |
| `index.mdx` | Learn about AI SDK Core. |

### 03-ai-sdk-harnesses/ (9 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | Learn what AI SDK harnesses are and how they fit into the AI SDK. |
| `02-harness-agent.mdx` | Create and run AI SDK HarnessAgent sessions. |
| `03-tools.mdx` | Use tools with AI SDK harnesses. |
| `04-skills.mdx` | Use skills with AI SDK harnesses. |
| `05-harness-adapters.mdx` | Learn about the available AI SDK harness adapters. |
| `06-workflow-utilities.mdx` | Run HarnessAgent turns as durable Workflow DevKit workflows. |
| `07-ui.mdx` | Use AI SDK harnesses with useChat. |
| `08-terminal-ui.mdx` | Use @ai-sdk/tui with HarnessAgent. |
| `index.mdx` | Use established agent harnesses through the AI SDK. |

### 04-ai-sdk-ui/ (15 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | An overview of AI SDK UI. |
| `02-chatbot.mdx` | Learn how to use the useChat hook. |
| `03-chatbot-message-persistence.mdx` | Learn how to store and load chat messages in a chatbot. |
| `03-chatbot-resume-streams.mdx` | Learn how to resume chatbot streams after client disconnects. |
| `03-chatbot-tool-usage.mdx` | Learn how to use tools with the useChat hook. |
| `04-generative-user-interfaces.mdx` | Learn how to build Generative UI with AI SDK UI. |
| `05-completion.mdx` | Learn how to use the useCompletion hook. |
| `08-object-generation.mdx` | Learn how to use the useObject hook. |
| `20-streaming-data.mdx` | Learn how to stream custom data from the server to the client. |
| `21-error-handling.mdx` | Learn how to handle errors in the AI SDK UI |
| `21-transport.mdx` | Learn how to use custom transports with useChat. |
| `24-reading-ui-message-streams.mdx` | Learn how to read UIMessage streams. |
| `25-message-metadata.mdx` | Learn how to attach and use metadata with messages in AI SDK UI |
| `50-stream-protocol.mdx` | Learn more about the supported stream protocols in the AI SDK. |
| `index.mdx` | Learn about the AI SDK UI. |

### 05-ai-sdk-rsc/ (11 files)

| File | Description |
|------|-------------|
| `01-overview.mdx` | An overview of AI SDK RSC. |
| `02-streaming-react-components.mdx` | Overview of streaming RSCs |
| `03-generative-ui-state.mdx` | Overview of the AI and UI states |
| `03-saving-and-restoring-states.mdx` | Saving and restoring AI and UI states with onGetUIState and onSetAIState |
| `04-multistep-interfaces.mdx` | Overview of Building Multistep Interfaces with AI SDK RSC |
| `05-streaming-values.mdx` | Overview of streaming RSCs |
| `06-loading-state.mdx` | Overview of handling loading state with AI SDK RSC |
| `08-error-handling.mdx` | Learn how to handle errors with the AI SDK. |
| `09-authentication.mdx` | Learn how to authenticate with the AI SDK. |
| `10-migrating-to-ui.mdx` | Learn how to migrate from AI SDK RSC to AI SDK UI. |
| `index.mdx` | Learn about AI SDK RSC. |

### 06-advanced/ (12 files)

| File | Description |
|------|-------------|
| `01-prompt-engineering.mdx` | Learn how to engineer prompts for LLMs with the AI SDK |
| `02-stopping-streams.mdx` | Learn how to cancel streams with the AI SDK |
| `03-backpressure.mdx` | How to handle backpressure and cancellation when working with the AI SDK |
| `04-caching.mdx` | How to handle caching when working with the AI SDK |
| `05-multiple-streamables.mdx` | Learn to handle multiple streamables in your application. |
| `06-rate-limiting.mdx` | Learn how to rate limit your application. |
| `07-rendering-ui-with-language-models.mdx` | Rendering UI with Language Models |
| `08-model-as-router.mdx` | Generative User Interfaces and Language Models as Routers |
| `09-multistep-interfaces.mdx` | Concepts behind building multistep interfaces |
| `09-sequential-generations.mdx` | Learn how to implement sequential generations ("chains") with the AI SDK |
| `10-vercel-deployment-guide.mdx` | Learn how to deploy an AI application to production on Vercel |
| `11-secure-url-fetching.mdx` | How the AI SDK protects server-side fetches of URLs returned by model providers, and how to harden your deployment further. |

### 07-reference/01-ai-sdk-core/ (65 files)

| File | Description |
|------|-------------|
| `01-generate-text.mdx` | API Reference for generateText. |
| `02-stream-text-low-memory.mdx` | Stream with the streamText execution engine without a replay buffer or unused final results. |
| `02-stream-text.mdx` | API Reference for streamText. |
| `05-embed.mdx` | API Reference for embed. |
| `06-embed-many.mdx` | API Reference for embedMany. |
| `06-rerank.mdx` | API Reference for rerank. |
| `10-generate-image.mdx` | API Reference for generateImage. |
| `11-stream-transcribe.mdx` | API Reference for experimental_streamTranscribe. |
| `11-stream-translate.mdx` | API Reference for experimental_streamTranslate. |
| `11-transcribe.mdx` | API Reference for transcribe. |
| `12-generate-speech.mdx` | API Reference for generateSpeech. |
| `12-stream-speech.mdx` | API Reference for experimental_streamSpeech. |
| `13-generate-video.mdx` | API Reference for experimental_generateVideo. |
| `14-decide.mdx` | Decide answers to typed questions against shared state with a decision model. |
| `14-upload-file.mdx` | API Reference for uploadFile. |
| `14-upload-skill.mdx` | API Reference for uploadSkill. |
| `15-agent.mdx` | API Reference for the Agent interface. |
| `16-tool-loop-agent.mdx` | API Reference for the ToolLoopAgent class. |
| `17-create-agent-ui-stream.mdx` | API Reference for the createAgentUIStream utility. |
| `18-create-agent-ui-stream-response.mdx` | API Reference for the createAgentUIStreamResponse utility. |
| `18-pipe-agent-ui-stream-to-response.mdx` | API Reference for the pipeAgentUIStreamToResponse utility. |
| `20-start-batch.mdx` | API Reference for experimental_startBatch. |
| `20-tool.mdx` | Helper function for tool type inference |
| `21-get-batch-status.mdx` | API Reference for experimental_getBatchStatus. |
| `22-dynamic-tool.mdx` | Helper function for creating dynamic tools with unknown types |
| `22-get-batch-results.mdx` | API Reference for experimental_getBatchResults. |
| `23-cancel-batch.mdx` | API Reference for experimental_cancelBatch. |
| `23-create-mcp-client.mdx` | Create a client for connecting to MCP servers |
| `23-get-realtime-tool-definitions.mdx` | API reference for experimental_getRealtimeToolDefinitions. |
| `23-tool-search.mdx` | Search deferred tools and load their definitions on demand for direct calling or code mode. |
| `24-list-batches.mdx` | API Reference for experimental_listBatches. |
| `24-mcp-apps.mdx` | API reference for MCP Apps helpers in @ai-sdk/mcp. |
| `24-mcp-events.mdx` | Reference for experimental MCP event methods, the webhook handler, and subscription and storage types. |
| `24-mcp-stdio-transport.mdx` | Create a transport for Model Context Protocol (MCP) clients to communicate with MCP servers using standard input and output streams |
| `25-json-schema.mdx` | Helper function for creating JSON schemas |
| `26-zod-schema.mdx` | Helper function for creating Zod schemas |
| `27-valibot-schema.mdx` | Helper function for creating Valibot schemas |
| `28-output.mdx` | API Reference for Output. |
| `29-filter-active-tools.mdx` | Filter a tool set to the currently active tools (API Reference) |
| `30-model-message.mdx` | Message types for AI SDK Core (API Reference) |
| `31-ui-message.mdx` | API Reference for UIMessage |
| `32-validate-ui-messages.mdx` | API Reference for validateUIMessages |
| `33-safe-validate-ui-messages.mdx` | API Reference for safeValidateUIMessages |
| `34-sandbox.mdx` | API Reference for the Experimental_SandboxSession interface. |
| `40-provider-registry.mdx` | Registry for managing multiple providers and models (API Reference) |
| `42-custom-provider.mdx` | Custom provider that uses models from a different provider (API Reference) |
| `50-cosine-similarity.mdx` | Calculate the cosine similarity between two vectors (API Reference) |
| `60-wrap-language-model.mdx` | Function for wrapping a language model with middleware (API Reference) |
| `61-wrap-image-model.mdx` | Function for wrapping an image model with middleware (API Reference) |
| `65-language-model-v2-middleware.mdx` | Middleware for enhancing language model behavior (API Reference) |
| `66-extract-reasoning-middleware.mdx` | Middleware that extracts reasoning sections from generated text using configurable delimiters |
| `67-simulate-streaming-middleware.mdx` | Middleware that simulates streaming for non-streaming language models |
| `68-default-instructions-middleware.mdx` | Middleware that applies default instructions to language model calls |
| `68-default-settings-middleware.mdx` | Middleware that applies default settings for language models |
| `69-add-tool-input-examples-middleware.mdx` | Middleware that appends tool input examples to tool descriptions. |
| `70-extract-json-middleware.mdx` | Middleware that extracts JSON from text content by stripping markdown code fences |
| `70-is-step-count.mdx` | API Reference for isStepCount. |
| `71-has-tool-call.mdx` | API Reference for hasToolCall. |
| `72-loop-finished.mdx` | API Reference for isLoopFinished. |
| `75-simulate-readable-stream.mdx` | Create a ReadableStream that emits values with configurable delays |
| `80-smooth-stream.mdx` | Stream transformer for smoothing text and reasoning output |
| `90-generate-id.mdx` | Generate a unique identifier (API Reference) |
| `91-create-id-generator.mdx` | Create a customizable unique identifier generator (API Reference) |
| `92-default-generated-file.mdx` | API Reference for DefaultGeneratedFile. |
| `index.mdx` | Reference documentation for the AI SDK Core |

### 07-reference/02-ai-sdk-ui/ (16 files)

| File | Description |
|------|-------------|
| `01-use-chat.mdx` | API reference for the useChat hook. |
| `02-use-completion.mdx` | API reference for the useCompletion hook. |
| `03-use-object.mdx` | API reference for the useObject hook. |
| `05-use-realtime.mdx` | API reference for the experimental_useRealtime hook. |
| `31-convert-to-model-messages.mdx` | Convert useChat messages to ModelMessages for AI functions (API Reference) |
| `32-prune-messages.mdx` | API Reference for pruneMessages. |
| `40-create-ui-message-stream.mdx` | API Reference for createUIMessageStream. |
| `41-create-ui-message-stream-response.mdx` | API Reference for createUIMessageStreamResponse. |
| `42-pipe-ui-message-stream-to-response.mdx` | Learn to use pipeUIMessageStreamToResponse helper function to pipe streaming data to a ServerResponse object. |
| `43-read-ui-message-stream.mdx` | API Reference for readUIMessageStream. |
| `46-infer-ui-tools.mdx` | API Reference for InferUITools. |
| `47-infer-ui-tool.mdx` | API Reference for InferUITool. |
| `48-mcp-app-renderer.mdx` | API reference for rendering MCP Apps with @ai-sdk/react. |
| `50-direct-chat-transport.mdx` | API Reference for the DirectChatTransport class. |
| `51-websocket-chat-transport.mdx` | API Reference for the WebSocketChatTransport class. |
| `index.mdx` | Reference documentation for the AI SDK UI |

### 07-reference/03-ai-sdk-rsc/ (13 files)

| File | Description |
|------|-------------|
| `01-stream-ui.mdx` | Reference for the streamUI function from the AI SDK RSC |
| `02-create-ai.mdx` | Reference for the createAI function from the AI SDK RSC |
| `03-create-streamable-ui.mdx` | Reference for the createStreamableUI function from the AI SDK RSC |
| `04-create-streamable-value.mdx` | Reference for the createStreamableValue function from the AI SDK RSC |
| `05-read-streamable-value.mdx` | Reference for the readStreamableValue function from the AI SDK RSC |
| `06-get-ai-state.mdx` | Reference for the getAIState function from the AI SDK RSC |
| `07-get-mutable-ai-state.mdx` | Reference for the getMutableAIState function from the AI SDK RSC |
| `08-use-ai-state.mdx` | Reference for the useAIState function from the AI SDK RSC |
| `09-use-actions.mdx` | Reference for the useActions function from the AI SDK RSC |
| `10-use-ui-state.mdx` | Reference for the useUIState function from the AI SDK RSC |
| `11-use-streamable-value.mdx` | Reference for the useStreamableValue function from the AI SDK RSC |
| `20-render.mdx` | Reference for the render function from the AI SDK RSC |
| `index.mdx` | Reference documentation for the AI SDK RSC |

### 07-reference/04-ai-sdk-workflow/ (3 files)

| File | Description |
|------|-------------|
| `01-workflow-agent.mdx` | API Reference for the WorkflowAgent class. |
| `02-workflow-chat-transport.mdx` | API Reference for the WorkflowChatTransport class. |
| `03-generate-video.mdx` | API Reference for durable video generation in workflows. |

### 07-reference/05-ai-sdk-errors/ (39 files)

| File | Description |
|------|-------------|
| `ai-api-call-error.mdx` | Learn how to fix AI_APICallError |
| `ai-decision-refusal-error.mdx` | Identify decision questions that a model declined to answer. |
| `ai-decision-unsupported-question-type-error.mdx` | Identify a decision question type that a model does not support. |
| `ai-download-error.mdx` | Learn how to fix AI_DownloadError |
| `ai-empty-response-body-error.mdx` | Learn how to fix AI_EmptyResponseBodyError |
| `ai-invalid-argument-error.mdx` | Learn how to fix AI_InvalidArgumentError |
| `ai-invalid-data-content-error.mdx` | How to fix AI_InvalidDataContentError |
| `ai-invalid-message-role-error.mdx` | Learn how to fix AI_InvalidMessageRoleError |
| `ai-invalid-prompt-error.mdx` | Learn how to fix AI_InvalidPromptError |
| `ai-invalid-response-data-error.mdx` | Learn how to fix AI_InvalidResponseDataError |
| `ai-invalid-tool-approval-error.mdx` | Learn how to fix AI_InvalidToolApprovalError |
| `ai-invalid-tool-approval-signature-error.mdx` | Learn how to fix AI_InvalidToolApprovalSignatureError |
| `ai-invalid-tool-input-error.mdx` | Learn how to fix AI_InvalidToolInputError |
| `ai-json-parse-error.mdx` | Learn how to fix AI_JSONParseError |
| `ai-load-api-key-error.mdx` | Learn how to fix AI_LoadAPIKeyError |
| `ai-load-setting-error.mdx` | Learn how to fix AI_LoadSettingError |
| `ai-message-conversion-error.mdx` | Learn how to fix AI_MessageConversionError |
| `ai-no-content-generated-error.mdx` | Learn how to fix AI_NoContentGeneratedError |
| `ai-no-image-generated-error.mdx` | Learn how to fix AI_NoImageGeneratedError |
| `ai-no-object-generated-error.mdx` | Learn how to fix AI_NoObjectGeneratedError |
| `ai-no-output-generated-error.mdx` | Learn how to fix AI_NoOutputGeneratedError |
| `ai-no-speech-generated-error.mdx` | Learn how to fix AI_NoSpeechGeneratedError |
| `ai-no-such-model-error.mdx` | Learn how to fix AI_NoSuchModelError |
| `ai-no-such-provider-error.mdx` | Learn how to fix AI_NoSuchProviderError |
| `ai-no-such-provider-reference-error.mdx` | Learn how to fix AI_NoSuchProviderReferenceError |
| `ai-no-such-tool-error.mdx` | Learn how to fix AI_NoSuchToolError |
| `ai-no-transcript-generated-error.mdx` | Learn how to fix AI_NoTranscriptGeneratedError |
| `ai-no-translation-generated-error.mdx` | Learn how to fix AI_NoTranslationGeneratedError |
| `ai-no-video-generated-error.mdx` | Learn how to fix AI_NoVideoGeneratedError |
| `ai-retry-error.mdx` | Learn how to fix AI_RetryError |
| `ai-stream-provider-error.mdx` | Learn how to handle AI_StreamProviderError |
| `ai-too-many-embedding-values-for-call-error.mdx` | Learn how to fix AI_TooManyEmbeddingValuesForCallError |
| `ai-tool-call-not-found-for-approval-error.mdx` | Learn how to fix AI_ToolCallNotFoundForApprovalError |
| `ai-tool-call-repair-error.mdx` | Learn how to fix AI SDK ToolCallRepairError |
| `ai-tool-choice-violation-error.mdx` | Learn how to fix AI SDK ToolChoiceViolationError |
| `ai-type-validation-error.mdx` | Learn how to fix AI_TypeValidationError |
| `ai-ui-message-stream-error.mdx` | Learn how to fix AI_UIMessageStreamError |
| `ai-unsupported-functionality-error.mdx` | Learn how to fix AI_UnsupportedFunctionalityError |
| `index.mdx` | Reference for AI SDK error classes and typed error handling. |

### 07-reference/06-ai-sdk-tui/ (1 files)

| File | Description |
|------|-------------|
| `01-run-agent-tui.mdx` | API Reference for the runAgentTUI function. |

### 08-migration-guides/ (5 files)

| File | Description |
|------|-------------|
| `00-versioning.mdx` | Understand how the AI SDK approaches versioning. |
| `23-migration-guide-7-0.mdx` | Learn how to upgrade AI SDK 6.x to 7.0. |
| `24-migration-guide-6-0.mdx` | Learn how to upgrade AI SDK 5.x to 6.0. |
| `25-migration-guide-5-0-data.mdx` | Learn how to migrate your persisted messages and chat data from AI SDK 4.x to 5.0. |
| `26-migration-guide-5-0.mdx` | Learn how to upgrade AI SDK 4.x to 5.0. |

### 09-troubleshooting/ (31 files)

| File | Description |
|------|-------------|
| `01-azure-stream-slow.mdx` | Learn to troubleshoot Azure OpenAI slow to stream issues. |
| `03-server-actions-in-client-components.mdx` | Troubleshooting errors related to server actions in client components. |
| `04-strange-stream-output.mdx` | How to fix strange stream output in the UI |
| `05-streamable-ui-errors.mdx` | Troubleshooting errors related to streamable UI. |
| `05-tool-invocation-missing-result.mdx` | How to fix the "ToolInvocation must have a result" error when using tools without execute functions |
| `06-streaming-not-working-when-deployed.mdx` | Troubleshooting streaming issues in deployed apps. |
| `06-streaming-not-working-when-proxied.mdx` | Troubleshooting streaming issues in proxied apps. |
| `06-timeout-on-vercel.mdx` | Learn how to fix timeouts and cut off responses when deploying to Vercel. |
| `07-unclosed-streams.mdx` | Troubleshooting errors related to unclosed streams. |
| `08-use-chat-failed-to-parse-stream.mdx` | Troubleshooting errors related to the Use Chat Failed to Parse Stream error. |
| `09-client-stream-error.mdx` | Troubleshooting errors related to using AI SDK Core functions with Server Actions. |
| `10-use-chat-tools-no-response.mdx` | Troubleshooting errors related to the Use Chat Failed to Parse Stream error. |
| `11-use-chat-custom-request-options.mdx` | Troubleshooting errors related to custom request configuration in useChat hook |
| `12-typescript-performance-zod.mdx` | Troubleshooting TypeScript server crashes and slow performance when using Zod with AI SDK 5 |
| `12-use-chat-an-error-occurred.mdx` | Troubleshooting errors related to the "An error occurred" error in useChat. |
| `13-repeated-assistant-messages.mdx` | Troubleshooting duplicate assistant messages when using useChat with streamText |
| `14-stream-abort-handling.mdx` | Troubleshooting onEnd callback not executing when streams are aborted with toUIMessageStream |
| `14-tool-calling-with-structured-outputs.mdx` | Troubleshooting tool calling when combined with structured output generation |
| `15-abort-breaks-resumable-streams.mdx` | Troubleshooting abort and stop behavior with resumable streams |
| `15-stream-text-not-working.mdx` | Troubleshooting errors related to the streamText function not working. |
| `16-streaming-status-delay.mdx` | Why useChat shows "streaming" status without any visible content |
| `17-use-chat-stale-body-data.mdx` | Troubleshooting stale values when passing information via the body parameter of useChat |
| `18-ontoolcall-type-narrowing.mdx` | How to handle TypeScript type errors when using the onToolCall callback |
| `19-unsupported-model-version.mdx` | Troubleshooting the AI_UnsupportedModelVersionError when migrating to AI SDK 5 |
| `20-no-object-generated-content-filter.mdx` | Troubleshooting NoObjectGeneratedError with finish-reason content-filter caused by incompatible Zod schema types when using OpenAI structure |
| `21-missing-tool-results-error.mdx` | How to fix the "Tool results are missing for tool calls" error when using the AI SDK. |
| `30-model-is-not-assignable-to-type.mdx` | Troubleshooting errors related to incompatible models. |
| `40-typescript-cannot-find-namespace-jsx.mdx` | Troubleshooting errors related to TypeScript and JSX. |
| `50-react-maximum-update-depth-exceeded.mdx` | Troubleshooting errors related to the "Maximum update depth exceeded" error. |
| `60-jest-cannot-find-module-ai-rsc.mdx` | Troubleshooting AI SDK errors related to the Jest: cannot find module '@ai-sdk/rsc' error |
| `70-high-memory-usage-with-images.mdx` | Troubleshooting high memory usage when using generateText or streamText with many images |
