> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Migrate to OpenRouter in One Prompt

> Move an existing app's LLM calls to OpenRouter with a single coding-agent prompt

**Goal:** Migrate an existing app's LLM calls to OpenRouter without rewriting how the app works.

**Outcome:** Your model calls route through OpenRouter with the same streaming, tool calling, and response shapes, using your existing framework wherever a clean OpenRouter path exists. If your app has server-side agent or tool loops, the prompt can optionally move that execution onto OpenRouter's [Agent SDK](https://openrouter.ai/docs/agent-sdk/overview.md) (`@openrouter/agent`). That's a bigger change than a provider swap, so the prompt recommends it only when it fits and asks before doing it — you can decline and keep the minimal migration.

OpenRouter is OpenAI-compatible, so most migrations come down to three changes: the base URL, the API key, and the model ID. The prompt below does that work for you across whatever stack your app uses. Paste it into a coding agent at the root of the project you want to migrate.

The prompt comes in two versions. Use the **With /goal** tab if your coding agent supports a `/goal` command — it leads with an explicit goal and done-criteria so the agent runs the migration to completion instead of stopping at advice. Use the **Without /goal** tab to paste the migration prompt on its own.

```text title="With /goal" expandable lines theme={null}
/goal Migrate this project to OpenRouter end to end (pausing for the agent sdk decision if there is one). Done means the project is migrated, the Agent SDK decision gate is handled, verification passes or blockers are documented, evidence is written, and any dev servers are stopped.

Use the following migration prompt as the operating instructions:

You are migrating this project to OpenRouter. Work in the existing codebase and make the smallest coherent migration that preserves behavior, streaming shape, tool calling, framework conventions, tests, public APIs, persisted data contracts, and user-facing workflows.

Goal
- Route all LLM calls through OpenRouter where the project currently uses Mastra, Vercel AI SDK, Vercel AI Gateway, OpenAI SDK, Anthropic SDK, Anthropic Agent SDK, raw OpenAI-compatible fetch calls, old OpenRouter SDK usage, or another provider/framework whose text/chat model calls can be safely mapped to OpenRouter.
- Use OpenRouter-native SDKs when they are the best fit for new OpenRouter code: TypeScript platform APIs use `@openrouter/sdk`, TypeScript agent/model-runner code uses `@openrouter/agent`, Python uses `openrouter`.
- Keep compatibility adapters only when they are the least disruptive path for an existing framework, such as Vercel AI SDK, Mastra, OpenAI SDK compatibility, and Anthropic Agent SDK environment routing.
- If no listed stack is present, fall back to a provider-agnostic migration: identify the model-call boundary, preserve the app's framework/protocol, and retarget only the HTTP client, SDK adapter, model IDs, auth env vars, and response parsing needed to make equivalent OpenRouter calls.
- Detect whether the project would benefit from OpenRouter Agent SDK. If it would, ask the user whether to include an Agent SDK migration unless the user has already explicitly opted in or the run is noninteractive. If the user opts in, migrate the suitable server model-execution boundary to `@openrouter/agent`; if the user declines, use the least-disruptive OpenRouter provider/API path and document that Agent SDK was not included.

First inspect
1. Identify package manager, language(s), framework(s), app entrypoints, API routes, server actions, background jobs, tests, and build commands. Include non-chat LLM endpoints such as command palettes, prompt helpers, title/summary generators, autocomplete, classification, extraction, moderation, and background workers; do not limit the inventory to obvious `/api/chat/*` routes.
2. Search for AI integration code: `openai`, `OpenAI`, `@ai-sdk/openai`, `@ai-sdk/anthropic`, `@ai-sdk/gateway`, `@ai-sdk/react`, `gateway(`, `createGateway`, `AI_GATEWAY_API_KEY`, `AI_SDK_DEFAULT_PROVIDER`, `ai`, `generateText`, `streamText`, `generateObject`, `streamObject`, `useChat`, `useCompletion`, `experimental_useObject`, `DefaultChatTransport`, `createUIMessageStreamResponse`, `pipeUIMessageStreamToResponse`, `toUIMessageStream`, `toTextStream`, `Output.object`, `convertToModelMessages`, `@anthropic-ai/sdk`, `anthropic`, `@anthropic-ai/claude-agent-sdk`, `claude_agent_sdk`, `@mastra/core`, `langchain`, `llamaindex`, `google-generative-ai`, `@google/genai`, `cohere`, `mistral`, `groq`, `perplexity`, `together`, `bedrock`, `vertex`, `xai`, `replicate`, `model:`, `baseURL`, `base_url`, `apiKey`, `api_key`, `ai-gateway.vercel.sh`, `/v1/chat/completions`, `/v1/responses`, `/messages`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`, `GEMINI_API_KEY`, `MISTRAL_API_KEY`, `GROQ_API_KEY`, `COHERE_API_KEY`, `PERPLEXITY_API_KEY`, `TOGETHER_API_KEY`, `OPENROUTER_API_KEY`, `@openrouter/sdk`, `@openrouter/agent`, and direct `fetch` calls to model APIs.
3. Classify every integration before editing:
   - Mastra agent/model router code.
   - Vercel AI SDK provider code.
   - Vercel AI Gateway code, including AI SDK plain string models, `gateway(...)`, `createGateway(...)`, `@ai-sdk/gateway`, and custom `AI_SDK_DEFAULT_PROVIDER` setup.
   - OpenAI SDK compatibility code in TypeScript or Python.
   - Plain Anthropic SDK code in TypeScript or Python.
   - Anthropic Agent SDK / Claude Agent SDK code in TypeScript or Python.
   - Existing OpenRouter platform SDK code.
   - Existing OpenRouter agent SDK code.
   - Raw HTTP calls.
   - Other model-provider SDKs or frameworks not listed above.
4. Record current model names, request options, streaming behavior, tools/functions, JSON/schema response handling, retry/timeouts, telemetry, persisted message/data shapes, and environment variable names before changing them.
5. Count the blast radius before replacing client hooks, UI stream protocols, persisted message types, or provider settings. If many components, tests, database rows, or public APIs depend on a protocol such as AI SDK `UIMessage`, tool UI parts, resume streams, approval flows, provider profile settings, or vector dimensions, preserve that protocol and migrate only the model-execution boundary behind it unless you can prove a narrow adapter preserves every caller.
6. Separate chat/model execution from adjacent provider features. Do not migrate embeddings, vector DB schemas, retrieval column names, provider profile settings, OpenAI Assistants API routes, Azure deployment settings, BYOK provider configuration, image/video generation, or non-chat APIs unless they are explicitly part of the requested migration and OpenRouter support has been verified.
7. Decide whether Agent SDK is worth offering. Recommend `@openrouter/agent` when the project has server-side tool execution, multi-turn agent loops, custom orchestration, stop-condition needs, tool approval flows, shared tool context, tool progress events, model-runner abstractions, concurrent text/tool/reasoning streams, or existing agent features imported from old `@openrouter/sdk`. Prefer a provider/API compatibility path when the project only needs a simple provider swap, compatibility base URL, single-turn text generation, or a framework provider adapter that already preserves all behavior.

Agent SDK decision gate
- Before editing, produce a short recommendation internally: `Agent SDK recommended: yes/no`, with the concrete evidence from the inspected code.
- If Agent SDK is recommended and the user has not already opted in, ask one concise question before making code changes: `This project has <specific evidence>. Do you want this migration to include OpenRouter Agent SDK for those server-side model/tool paths, or should I keep to a provider/API compatibility migration?`
- If the user says yes, migrate only the suitable server model-execution boundaries to `@openrouter/agent` and preserve any necessary framework/UI protocols around them.
- If the user says no, do not install or migrate to `@openrouter/agent` unless the project already uses Agent SDK features that must be corrected. Use `@openrouter/ai-sdk-provider`, OpenAI-compatible base URL retargeting, native `@openrouter/sdk`, Python `openrouter`, or raw HTTP as appropriate.
- If the run is noninteractive, do not block. If the task prompt explicitly pre-authorizes Agent SDK or asks to test the Agent SDK path, treat that as a yes. Otherwise default to the least-disruptive non-Agent path, and include a final note that Agent SDK looked beneficial but was not included because the user was not available to approve the larger migration.
- Never treat Agent SDK as an automatic upgrade for every Vercel AI SDK app. It is a larger migration than an OpenRouter provider swap and must be justified by concrete benefits.

Migration rules

Universal OpenRouter settings
- Use `OPENROUTER_API_KEY` as the canonical secret. Do not commit real keys.
- During setup, check only whether `OPENROUTER_API_KEY` is present; do not print it. If present, validate it without revealing the value with `GET https://openrouter.ai/api/v1/key`. If missing, tell the user to create a key at `https://openrouter.ai/keys`, add credits if needed, and put the key in the project environment or deployment secrets.
- Preserve existing app-specific env vars where needed, but add a compatibility fallback only when it helps avoid a breaking deployment. Prefer `process.env.OPENROUTER_API_KEY ?? process.env.OPENAI_API_KEY` only as a temporary compatibility bridge and document that OpenRouter should use `OPENROUTER_API_KEY`.
- Use OpenRouter model slugs in the form `provider/model`, for example `openai/gpt-5.2`, `anthropic/claude-sonnet-4.5`, `google/gemini-2.5-flash`, or project-specific chosen slugs.
- Validate chosen chat model slugs against `https://openrouter.ai/api/v1/models`. Validate embedding model slugs against `https://openrouter.ai/api/v1/embeddings/models`; do not assume a chat model listing covers embeddings.
- For OpenRouter rankings headers, add optional app metadata where the SDK supports it: `HTTP-Referer` / `X-OpenRouter-Title`, or SDK-specific equivalents such as `httpReferer` / `appTitle`.
- Do not silently drop provider-specific behavior. If an old feature has no OpenRouter equivalent, leave a clear code comment at the migration boundary and preserve the closest supported behavior.
- Do not migrate embeddings, assistants, image/video generation, provider routing, or other non-chat endpoints by name alone. First verify OpenRouter supports the endpoint, request shape, selected model, and any persisted data contract such as embedding vector dimensions. If it does not, keep the old boundary and document the limitation.
- Read `.env.example`, README setup, deployment docs, and auth/database/storage docs for non-OpenRouter prerequisites such as `AUTH_SECRET`, `POSTGRES_URL`, blob storage, Redis, OAuth secrets, or Supabase settings. Runtime smoke failures from missing app infrastructure should be documented separately from OpenRouter migration failures.

Mastra
- If the project uses Mastra's current model router, keep Mastra and change model strings to OpenRouter gateway slugs: `model: "openrouter/provider/model"`.
- Set `OPENROUTER_API_KEY` for gateway auth.
- Do not install a Vercel provider just to migrate Mastra unless the existing project already uses Vercel AI SDK directly outside Mastra.
- Preserve agent `id`, `name`, `instructions`, memory, workflows, tools, scorers, and runtime wiring.

Vercel AI SDK
- Install `@openrouter/ai-sdk-provider` if missing.
- Replace provider imports such as `@ai-sdk/openai`, `@ai-sdk/anthropic`, or custom OpenAI providers with OpenRouter's provider:
  `import { openrouter } from "@openrouter/ai-sdk-provider";`
  or `import { createOpenRouter } from "@openrouter/ai-sdk-provider";` when the code needs explicit `apiKey`, headers, or provider configuration.
- Replace models like `openai("gpt-4o-mini")` or `anthropic("claude-...")` with `openrouter("provider/model")`.
- Preserve `generateText`, `streamText`, `generateObject`, `streamObject`, `tool`, `messages`, `system`, schemas, response format, stream consumers, and provider options. Put OpenRouter-specific options under `providerOptions.openrouter` when needed.
- Treat `ai` and `@ai-sdk/react` carefully. In complex apps they may be UI protocol infrastructure rather than provider/runtime dependencies. Do not hand-roll replacement definitions for `UIMessage`, `UseChatHelpers`, `DataUIPart`, `ToolUIPart`, resume streams, artifact streams, or approval flows. Keep those types/protocols when needed and migrate the server model boundary behind them.
- If the user explicitly wants server execution moved to `@openrouter/agent` instead of an OpenRouter AI SDK provider swap, preserve the existing UI stream protocol through a verified adapter or keep `ai`/`@ai-sdk/react` as documented UI-protocol dependencies. Plain text streaming is acceptable only when the clients already consume plain text or can be changed locally without breaking shared UI helpers.

Vercel AI SDK with Agent SDK opt-in
- Use this path only when the Agent SDK decision gate selected Agent SDK.
- Install `@openrouter/agent` for server model execution. Keep `@openrouter/ai-sdk-provider` out of the migration unless a separate provider boundary still needs it.
- Replace server `generateText(...)` calls with `client.callModel(...).getText()` or `getResponse()` while preserving model IDs, instructions/system prompts, messages, tools, telemetry-relevant metadata, and return shape.
- Replace server `streamText(...)` calls with `client.callModel(...).getTextStream()` or a verified event bridge. Preserve streaming as streaming.
- Convert AI SDK tools to `tool(...)` from `@openrouter/agent/tool`, keep descriptions and schema fidelity, and add bounded stop conditions such as `stepCountIs(5)` where tool loops could continue.
- For structured object routes, preserve the client API shape. Use prompt-for-JSON with parsing and schema validation unless current OpenRouter structured output support is verified for the selected request shape.
- If clients consume AI SDK UI message streams, either keep the AI SDK UI protocol and bridge Agent SDK events back to it with tests, or retain `ai`/`@ai-sdk/react` as an explicit UI-protocol dependency. Do not replace complex UI protocol types globally.
- Add no-network adapter coverage for message conversion and stream/event bridging. Include text deltas, reasoning deltas where relevant, tool-call arguments, tool results or progress events, and completion/turn-boundary events.

Vercel AI Gateway
- Treat Vercel AI Gateway as a separate migration source, even though it is commonly used through the Vercel AI SDK.
- If code passes plain string models to AI SDK calls, such as `generateText({ model: "anthropic/claude-sonnet-..." })`, migrate those calls to OpenRouter's provider form: `generateText({ model: openrouter("anthropic/claude-sonnet-..."), ... })`.
- If code imports `gateway` or `createGateway` from `ai` or `@ai-sdk/gateway`, replace that provider with `openrouter` or `createOpenRouter` from `@openrouter/ai-sdk-provider`.
- Replace `AI_GATEWAY_API_KEY` with `OPENROUTER_API_KEY`; remove Vercel Gateway-only auth paths such as Vercel OIDC/PAT/team routing unless they are still used for non-model Vercel APIs.
- Remove `AI_SDK_DEFAULT_PROVIDER` gateway setup if it exists, or replace it with an OpenRouter provider registry only if the app truly relies on a global default provider.
- Search for stale Gateway endpoints such as `https://ai-gateway.vercel.sh/...` and retarget model calls to the OpenRouter provider instead of carrying over the Gateway base URL.
- Replace Gateway model metadata and model-list fetches with OpenRouter model metadata endpoints such as `https://openrouter.ai/api/v1/models`, preserving only the fields the app actually uses.
- Update user-facing setup, missing-key errors, dialogs, env examples, README text, and deployment docs from Vercel AI Gateway to OpenRouter. A Gateway migration is incomplete if only provider imports changed.
- Preserve AI SDK features: text generation, streaming, structured outputs, tools, image/video generation support where the selected OpenRouter provider/model supports them, middleware, provider registry shape, and provider options. Translate Gateway provider options intentionally; do not blindly copy `providerOptions.gateway` into `providerOptions.openrouter`.

OpenAI SDK compatibility
- If minimal churn is best, keep the OpenAI SDK and retarget it:
  - TypeScript: `new OpenAI({ baseURL: "https://openrouter.ai/api/v1", apiKey: process.env.OPENROUTER_API_KEY, defaultHeaders: { "HTTP-Referer": ..., "X-OpenRouter-Title": ... } })`.
  - Python: `OpenAI(base_url="https://openrouter.ai/api/v1", api_key=os.environ["OPENROUTER_API_KEY"])`.
- Change model IDs to OpenRouter slugs.
- Preserve `chat.completions.create`, `responses.create` only if OpenRouter supports the used endpoint/shape in this project; otherwise move that call to OpenRouter chat completions or the native SDK and adapt response parsing intentionally.
- Keep stream handling stream-based. Do not convert streaming APIs into buffered calls unless the existing code was already buffering.

Plain Anthropic SDK
- Do not assume the plain Anthropic SDK can be pointed at OpenRouter with the same environment variables used by Anthropic Agent SDK.
- Migrate plain `@anthropic-ai/sdk` or `anthropic` package usage to OpenRouter-compatible chat completions or the native OpenRouter SDK:
  - TypeScript platform/chat code: prefer `@openrouter/sdk` for native OpenRouter APIs, or the OpenAI SDK compatibility path if that is less disruptive.
  - Python platform/chat code: prefer the `openrouter` package.
- Convert Anthropic message content to OpenAI/OpenRouter chat message content carefully:
  - Map `system` to a leading `{ role: "system", content: ... }` message unless the selected SDK has a first-class `system` field.
  - Map user/assistant text blocks to role/content messages.
  - Preserve tools only after translating schemas and tool result messages. If tool conversion is nontrivial, add a focused regression test around the tool path.
- Change Claude model IDs to OpenRouter slugs such as `anthropic/claude-sonnet-4.5`.

Anthropic Agent SDK / Claude Agent SDK
- Keep the Agent SDK. Configure it through environment variables rather than rewriting agent loops:
  `ANTHROPIC_BASE_URL=https://openrouter.ai/api`
  `ANTHROPIC_AUTH_TOKEN=$OPENROUTER_API_KEY`
  `ANTHROPIC_API_KEY=` explicitly empty
- Preserve agent options such as allowed tools, permission prompts, working directory, and model override environment variables.
- If the project sets Claude model env vars, replace values with OpenRouter model slugs where supported by the runtime.

OpenRouter TypeScript SDKs
- For platform APIs such as model listing, credits, API keys, OAuth, analytics, and direct chat/completions SDK methods, use `@openrouter/sdk`.
- For agent features such as `client.callModel()`, `tool()`, stop conditions, format converters, and model-runner abstractions, use `@openrouter/agent`.
- If existing code imports agent features from `@openrouter/sdk`, migrate imports:
  - `OpenRouter` for `callModel` code from `@openrouter/agent`.
  - `tool` from `@openrouter/agent/tool`.
  - stop conditions from `@openrouter/agent/stop-conditions`.
- Keep both packages only when the project uses both platform and agent features.
- Import Agent SDK types from declared dependencies only. `@openrouter/agent` re-exports many model/result types; do not import app code from transitive packages such as `@openrouter/sdk/models` unless `@openrouter/sdk` is also a deliberate direct dependency for platform APIs.
- When using `@openrouter/agent`, inspect installed package exports and types after install. Current versions are ESM-only, which can affect CommonJS Jest tests.
- `@openrouter/agent` tool schemas require Zod v4-compatible schemas. If the repo uses Zod v3 in app code, avoid a repo-wide breaking upgrade just for Agent tools. Prefer a bounded approach such as a Zod v4 alias or isolated Agent-only schema files, or audit all Zod callsites and prove a root upgrade with typecheck/build/tests.
- Convert message arrays to the exact input type accepted by the installed Agent SDK. Compile the adapter at real `client.callModel({ input })` callsites, not only in isolated helper tests. If needed, write one narrow adapter for the required `Item[]` shape and reuse it everywhere.
- When bridging Agent SDK streams into an existing UI stream protocol, verify event names and required fields against installed package types in `node_modules`. Do not invent event names. Add a no-network adapter test that feeds representative text, reasoning, tool-call argument, tool-result, and turn-boundary events through the bridge.
- For tools, preserve descriptions, required fields, nested object shapes, enums, request-body/query placement, and execution semantics. Do not replace original JSON Schema parameters with generic passthrough schemas unless the original schema is genuinely unavailable and the limitation is documented.
- Prefer `@openrouter/agent` over raw HTTP or `@openrouter/sdk` chat calls when the selected path needs automatic tool execution, multi-turn tool loops, stop conditions, shared tool context, tool approval, reasoning/tool event streams, or reusable model-runner abstractions. Prefer `@openrouter/sdk` or compatibility HTTP when the project needs platform APIs, simple chat/completion calls, OAuth, credits, analytics, API keys, or model listing without agent behavior.

Unknown or unlisted stacks
- If the project uses a stack not listed above, do not stop. Identify whether its model calls are OpenAI-compatible HTTP, provider SDK wrappers, framework adapters, or custom transport code.
- Prefer the least disruptive OpenRouter path:
  - Retarget OpenAI-compatible SDKs/transports to `https://openrouter.ai/api/v1` with `OPENROUTER_API_KEY`.
  - Replace provider-specific SDKs with native OpenRouter SDKs only when message/tool/stream/schema contracts can be preserved.
  - Keep the framework adapter and swap only the model/provider configuration when the framework has a stable provider abstraction.
- Preserve public route shapes, streaming protocol, tool/function semantics, structured-output validation, retries/timeouts, telemetry, and error handling.
- If an endpoint cannot be safely migrated because OpenRouter lacks the endpoint, the selected model, a needed modality, or a persisted data contract, leave that boundary on the old provider, mark it explicitly in code/docs, and include it in the final limitations.

OpenRouter Python SDK
- Install/use `openrouter` for native Python OpenRouter code.
- Use `from openrouter import OpenRouter` and `with OpenRouter(api_key=os.environ["OPENROUTER_API_KEY"]) as client:` for synchronous calls, or `async with OpenRouter(...)` with `send_async` for async code.
- Preserve sync vs async behavior.

Raw HTTP
- Retarget OpenAI-compatible raw calls to `https://openrouter.ai/api/v1/chat/completions` with `Authorization: Bearer ${OPENROUTER_API_KEY}`.
- Preserve app metadata headers if present, and add optional `HTTP-Referer` / `X-OpenRouter-Title` if project config already has site/app metadata.
- Replace provider-specific request/response parsing only where the old shape differs.

Dependency and environment updates
- Update `package.json`, lockfiles, `requirements.txt`, `pyproject.toml`, `.env.example`, deployment config, README/setup docs, and CI secrets docs as needed.
- Remove provider SDK dependencies only when no source/runtime code imports them after migration and they are not retained as documented UI/protocol/test dependencies.
- Make imports and manifests agree. If source code imports a package or subpath, that package must be a direct dependency/devDependency unless it is a Node builtin or local workspace package. Do not rely on transitive dependencies exposed by another SDK.
- Never remove unrelated dependencies or rewrite unrelated app code.
- Add or update tests near the migrated integration points.
- If the documented package manager is unavailable globally, use the package manager declared by the repo, for example `npx pnpm@<version from packageManager> ...`, instead of switching package managers.
- Update visible setup/branding/error text, not just code imports. Stale user-facing labels such as `AI Gateway`, old provider setup instructions, or old key URLs make the migration incomplete unless they describe a deliberately retained boundary.
- If Agent SDK was recommended, record the user choice in the migration note: included, declined, not asked because noninteractive, or not applicable. Include the reason and the migration path chosen.

Verification required before finishing
1. Run the project’s formatter/linter/typecheck/tests/build commands that cover the migrated code.
2. Add a no-network unit test, mock transport test, or lightweight script proving the base URL, auth env var, model slug, messages, tools, structured-output parsing, and streaming behavior are wired correctly. The test must actually run under the repo's test/tooling setup; if the normal runner is E2E-only or incompatible with ESM packages, isolate pure helpers or use a focused `tsx`/`tsc`/script smoke test instead of leaving a broken test.
3. If an API key is available and the project has an integration-test convention, run one tiny live smoke test against a cheap model or call one migrated route; do not print the key. Otherwise skip live calls and state that no live API test was run.
4. Search again for stale provider env vars, old model IDs, old base URLs, Vercel Gateway settings, removed package imports, helper names copied from removed APIs, and user-visible provider/setup strings. Interpret matches against scope: retained embeddings, assistants, BYOK/provider settings, Azure routes, or UI-protocol dependencies are acceptable only when documented.
   Also scan for undeclared transitive imports introduced by the migration, for example app code importing `@openrouter/sdk/*` when only `@openrouter/agent` is declared.
5. Start the app locally and request a real route when practical. Use throwaway local values only for standard non-sensitive setup where docs permit it. If runtime smoke is blocked by missing database/auth/storage/OAuth/Supabase/secrets, document the exact blocker and run the strongest local checks instead of pretending the app was fully exercised.
6. For tool routes, verify both tool-call events and final text/response behavior. For stream bridges, verify adapter events with tests and at least one route smoke where practical.
7. Verify the Agent SDK decision branch: show whether Agent SDK was recommended, what evidence triggered the recommendation, whether the user opted in or declined, and where that choice is reflected in code/docs. If Agent SDK was included, verify `@openrouter/agent` imports, real `client.callModel` callsites, tool schemas, stop conditions where needed, no-network adapter tests, and stale provider/runtime scans.
8. Summarize changed files, selected migration path per integration, commands run, runtime smoke results, retained boundaries, and any features that required manual judgement.

Do the migration now. Do not stop after giving advice. Make the code changes, update docs/config/tests, run verification, and report only the actionable result.
```

```text title="Without /goal" expandable lines theme={null}
You are migrating this project to OpenRouter. Work in the existing codebase and make the smallest coherent migration that preserves behavior, streaming shape, tool calling, framework conventions, tests, public APIs, persisted data contracts, and user-facing workflows.

Goal
- Route all LLM calls through OpenRouter where the project currently uses Mastra, Vercel AI SDK, Vercel AI Gateway, OpenAI SDK, Anthropic SDK, Anthropic Agent SDK, raw OpenAI-compatible fetch calls, old OpenRouter SDK usage, or another provider/framework whose text/chat model calls can be safely mapped to OpenRouter.
- Use OpenRouter-native SDKs when they are the best fit for new OpenRouter code: TypeScript platform APIs use `@openrouter/sdk`, TypeScript agent/model-runner code uses `@openrouter/agent`, Python uses `openrouter`.
- Keep compatibility adapters only when they are the least disruptive path for an existing framework, such as Vercel AI SDK, Mastra, OpenAI SDK compatibility, and Anthropic Agent SDK environment routing.
- If no listed stack is present, fall back to a provider-agnostic migration: identify the model-call boundary, preserve the app's framework/protocol, and retarget only the HTTP client, SDK adapter, model IDs, auth env vars, and response parsing needed to make equivalent OpenRouter calls.
- Detect whether the project would benefit from OpenRouter Agent SDK. If it would, ask the user whether to include an Agent SDK migration unless the user has already explicitly opted in or the run is noninteractive. If the user opts in, migrate the suitable server model-execution boundary to `@openrouter/agent`; if the user declines, use the least-disruptive OpenRouter provider/API path and document that Agent SDK was not included.

First inspect
1. Identify package manager, language(s), framework(s), app entrypoints, API routes, server actions, background jobs, tests, and build commands. Include non-chat LLM endpoints such as command palettes, prompt helpers, title/summary generators, autocomplete, classification, extraction, moderation, and background workers; do not limit the inventory to obvious `/api/chat/*` routes.
2. Search for AI integration code: `openai`, `OpenAI`, `@ai-sdk/openai`, `@ai-sdk/anthropic`, `@ai-sdk/gateway`, `@ai-sdk/react`, `gateway(`, `createGateway`, `AI_GATEWAY_API_KEY`, `AI_SDK_DEFAULT_PROVIDER`, `ai`, `generateText`, `streamText`, `generateObject`, `streamObject`, `useChat`, `useCompletion`, `experimental_useObject`, `DefaultChatTransport`, `createUIMessageStreamResponse`, `pipeUIMessageStreamToResponse`, `toUIMessageStream`, `toTextStream`, `Output.object`, `convertToModelMessages`, `@anthropic-ai/sdk`, `anthropic`, `@anthropic-ai/claude-agent-sdk`, `claude_agent_sdk`, `@mastra/core`, `langchain`, `llamaindex`, `google-generative-ai`, `@google/genai`, `cohere`, `mistral`, `groq`, `perplexity`, `together`, `bedrock`, `vertex`, `xai`, `replicate`, `model:`, `baseURL`, `base_url`, `apiKey`, `api_key`, `ai-gateway.vercel.sh`, `/v1/chat/completions`, `/v1/responses`, `/messages`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`, `GEMINI_API_KEY`, `MISTRAL_API_KEY`, `GROQ_API_KEY`, `COHERE_API_KEY`, `PERPLEXITY_API_KEY`, `TOGETHER_API_KEY`, `OPENROUTER_API_KEY`, `@openrouter/sdk`, `@openrouter/agent`, and direct `fetch` calls to model APIs.
3. Classify every integration before editing:
   - Mastra agent/model router code.
   - Vercel AI SDK provider code.
   - Vercel AI Gateway code, including AI SDK plain string models, `gateway(...)`, `createGateway(...)`, `@ai-sdk/gateway`, and custom `AI_SDK_DEFAULT_PROVIDER` setup.
   - OpenAI SDK compatibility code in TypeScript or Python.
   - Plain Anthropic SDK code in TypeScript or Python.
   - Anthropic Agent SDK / Claude Agent SDK code in TypeScript or Python.
   - Existing OpenRouter platform SDK code.
   - Existing OpenRouter agent SDK code.
   - Raw HTTP calls.
   - Other model-provider SDKs or frameworks not listed above.
4. Record current model names, request options, streaming behavior, tools/functions, JSON/schema response handling, retry/timeouts, telemetry, persisted message/data shapes, and environment variable names before changing them.
5. Count the blast radius before replacing client hooks, UI stream protocols, persisted message types, or provider settings. If many components, tests, database rows, or public APIs depend on a protocol such as AI SDK `UIMessage`, tool UI parts, resume streams, approval flows, provider profile settings, or vector dimensions, preserve that protocol and migrate only the model-execution boundary behind it unless you can prove a narrow adapter preserves every caller.
6. Separate chat/model execution from adjacent provider features. Do not migrate embeddings, vector DB schemas, retrieval column names, provider profile settings, OpenAI Assistants API routes, Azure deployment settings, BYOK provider configuration, image/video generation, or non-chat APIs unless they are explicitly part of the requested migration and OpenRouter support has been verified.
7. Decide whether Agent SDK is worth offering. Recommend `@openrouter/agent` when the project has server-side tool execution, multi-turn agent loops, custom orchestration, stop-condition needs, tool approval flows, shared tool context, tool progress events, model-runner abstractions, concurrent text/tool/reasoning streams, or existing agent features imported from old `@openrouter/sdk`. Prefer a provider/API compatibility path when the project only needs a simple provider swap, compatibility base URL, single-turn text generation, or a framework provider adapter that already preserves all behavior.

Agent SDK decision gate
- Before editing, produce a short recommendation internally: `Agent SDK recommended: yes/no`, with the concrete evidence from the inspected code.
- If Agent SDK is recommended and the user has not already opted in, ask one concise question before making code changes: `This project has <specific evidence>. Do you want this migration to include OpenRouter Agent SDK for those server-side model/tool paths, or should I keep to a provider/API compatibility migration?`
- If the user says yes, migrate only the suitable server model-execution boundaries to `@openrouter/agent` and preserve any necessary framework/UI protocols around them.
- If the user says no, do not install or migrate to `@openrouter/agent` unless the project already uses Agent SDK features that must be corrected. Use `@openrouter/ai-sdk-provider`, OpenAI-compatible base URL retargeting, native `@openrouter/sdk`, Python `openrouter`, or raw HTTP as appropriate.
- If the run is noninteractive, do not block. If the task prompt explicitly pre-authorizes Agent SDK or asks to test the Agent SDK path, treat that as a yes. Otherwise default to the least-disruptive non-Agent path, and include a final note that Agent SDK looked beneficial but was not included because the user was not available to approve the larger migration.
- Never treat Agent SDK as an automatic upgrade for every Vercel AI SDK app. It is a larger migration than an OpenRouter provider swap and must be justified by concrete benefits.

Migration rules

Universal OpenRouter settings
- Use `OPENROUTER_API_KEY` as the canonical secret. Do not commit real keys.
- During setup, check only whether `OPENROUTER_API_KEY` is present; do not print it. If present, validate it without revealing the value with `GET https://openrouter.ai/api/v1/key`. If missing, tell the user to create a key at `https://openrouter.ai/keys`, add credits if needed, and put the key in the project environment or deployment secrets.
- Preserve existing app-specific env vars where needed, but add a compatibility fallback only when it helps avoid a breaking deployment. Prefer `process.env.OPENROUTER_API_KEY ?? process.env.OPENAI_API_KEY` only as a temporary compatibility bridge and document that OpenRouter should use `OPENROUTER_API_KEY`.
- Use OpenRouter model slugs in the form `provider/model`, for example `openai/gpt-5.2`, `anthropic/claude-sonnet-4.5`, `google/gemini-2.5-flash`, or project-specific chosen slugs.
- Validate chosen chat model slugs against `https://openrouter.ai/api/v1/models`. Validate embedding model slugs against `https://openrouter.ai/api/v1/embeddings/models`; do not assume a chat model listing covers embeddings.
- For OpenRouter rankings headers, add optional app metadata where the SDK supports it: `HTTP-Referer` / `X-OpenRouter-Title`, or SDK-specific equivalents such as `httpReferer` / `appTitle`.
- Do not silently drop provider-specific behavior. If an old feature has no OpenRouter equivalent, leave a clear code comment at the migration boundary and preserve the closest supported behavior.
- Do not migrate embeddings, assistants, image/video generation, provider routing, or other non-chat endpoints by name alone. First verify OpenRouter supports the endpoint, request shape, selected model, and any persisted data contract such as embedding vector dimensions. If it does not, keep the old boundary and document the limitation.
- Read `.env.example`, README setup, deployment docs, and auth/database/storage docs for non-OpenRouter prerequisites such as `AUTH_SECRET`, `POSTGRES_URL`, blob storage, Redis, OAuth secrets, or Supabase settings. Runtime smoke failures from missing app infrastructure should be documented separately from OpenRouter migration failures.

Mastra
- If the project uses Mastra's current model router, keep Mastra and change model strings to OpenRouter gateway slugs: `model: "openrouter/provider/model"`.
- Set `OPENROUTER_API_KEY` for gateway auth.
- Do not install a Vercel provider just to migrate Mastra unless the existing project already uses Vercel AI SDK directly outside Mastra.
- Preserve agent `id`, `name`, `instructions`, memory, workflows, tools, scorers, and runtime wiring.

Vercel AI SDK
- Install `@openrouter/ai-sdk-provider` if missing.
- Replace provider imports such as `@ai-sdk/openai`, `@ai-sdk/anthropic`, or custom OpenAI providers with OpenRouter's provider:
  `import { openrouter } from "@openrouter/ai-sdk-provider";`
  or `import { createOpenRouter } from "@openrouter/ai-sdk-provider";` when the code needs explicit `apiKey`, headers, or provider configuration.
- Replace models like `openai("gpt-4o-mini")` or `anthropic("claude-...")` with `openrouter("provider/model")`.
- Preserve `generateText`, `streamText`, `generateObject`, `streamObject`, `tool`, `messages`, `system`, schemas, response format, stream consumers, and provider options. Put OpenRouter-specific options under `providerOptions.openrouter` when needed.
- Treat `ai` and `@ai-sdk/react` carefully. In complex apps they may be UI protocol infrastructure rather than provider/runtime dependencies. Do not hand-roll replacement definitions for `UIMessage`, `UseChatHelpers`, `DataUIPart`, `ToolUIPart`, resume streams, artifact streams, or approval flows. Keep those types/protocols when needed and migrate the server model boundary behind them.
- If the user explicitly wants server execution moved to `@openrouter/agent` instead of an OpenRouter AI SDK provider swap, preserve the existing UI stream protocol through a verified adapter or keep `ai`/`@ai-sdk/react` as documented UI-protocol dependencies. Plain text streaming is acceptable only when the clients already consume plain text or can be changed locally without breaking shared UI helpers.

Vercel AI SDK with Agent SDK opt-in
- Use this path only when the Agent SDK decision gate selected Agent SDK.
- Install `@openrouter/agent` for server model execution. Keep `@openrouter/ai-sdk-provider` out of the migration unless a separate provider boundary still needs it.
- Replace server `generateText(...)` calls with `client.callModel(...).getText()` or `getResponse()` while preserving model IDs, instructions/system prompts, messages, tools, telemetry-relevant metadata, and return shape.
- Replace server `streamText(...)` calls with `client.callModel(...).getTextStream()` or a verified event bridge. Preserve streaming as streaming.
- Convert AI SDK tools to `tool(...)` from `@openrouter/agent/tool`, keep descriptions and schema fidelity, and add bounded stop conditions such as `stepCountIs(5)` where tool loops could continue.
- For structured object routes, preserve the client API shape. Use prompt-for-JSON with parsing and schema validation unless current OpenRouter structured output support is verified for the selected request shape.
- If clients consume AI SDK UI message streams, either keep the AI SDK UI protocol and bridge Agent SDK events back to it with tests, or retain `ai`/`@ai-sdk/react` as an explicit UI-protocol dependency. Do not replace complex UI protocol types globally.
- Add no-network adapter coverage for message conversion and stream/event bridging. Include text deltas, reasoning deltas where relevant, tool-call arguments, tool results or progress events, and completion/turn-boundary events.

Vercel AI Gateway
- Treat Vercel AI Gateway as a separate migration source, even though it is commonly used through the Vercel AI SDK.
- If code passes plain string models to AI SDK calls, such as `generateText({ model: "anthropic/claude-sonnet-..." })`, migrate those calls to OpenRouter's provider form: `generateText({ model: openrouter("anthropic/claude-sonnet-..."), ... })`.
- If code imports `gateway` or `createGateway` from `ai` or `@ai-sdk/gateway`, replace that provider with `openrouter` or `createOpenRouter` from `@openrouter/ai-sdk-provider`.
- Replace `AI_GATEWAY_API_KEY` with `OPENROUTER_API_KEY`; remove Vercel Gateway-only auth paths such as Vercel OIDC/PAT/team routing unless they are still used for non-model Vercel APIs.
- Remove `AI_SDK_DEFAULT_PROVIDER` gateway setup if it exists, or replace it with an OpenRouter provider registry only if the app truly relies on a global default provider.
- Search for stale Gateway endpoints such as `https://ai-gateway.vercel.sh/...` and retarget model calls to the OpenRouter provider instead of carrying over the Gateway base URL.
- Replace Gateway model metadata and model-list fetches with OpenRouter model metadata endpoints such as `https://openrouter.ai/api/v1/models`, preserving only the fields the app actually uses.
- Update user-facing setup, missing-key errors, dialogs, env examples, README text, and deployment docs from Vercel AI Gateway to OpenRouter. A Gateway migration is incomplete if only provider imports changed.
- Preserve AI SDK features: text generation, streaming, structured outputs, tools, image/video generation support where the selected OpenRouter provider/model supports them, middleware, provider registry shape, and provider options. Translate Gateway provider options intentionally; do not blindly copy `providerOptions.gateway` into `providerOptions.openrouter`.

OpenAI SDK compatibility
- If minimal churn is best, keep the OpenAI SDK and retarget it:
  - TypeScript: `new OpenAI({ baseURL: "https://openrouter.ai/api/v1", apiKey: process.env.OPENROUTER_API_KEY, defaultHeaders: { "HTTP-Referer": ..., "X-OpenRouter-Title": ... } })`.
  - Python: `OpenAI(base_url="https://openrouter.ai/api/v1", api_key=os.environ["OPENROUTER_API_KEY"])`.
- Change model IDs to OpenRouter slugs.
- Preserve `chat.completions.create`, `responses.create` only if OpenRouter supports the used endpoint/shape in this project; otherwise move that call to OpenRouter chat completions or the native SDK and adapt response parsing intentionally.
- Keep stream handling stream-based. Do not convert streaming APIs into buffered calls unless the existing code was already buffering.

Plain Anthropic SDK
- Do not assume the plain Anthropic SDK can be pointed at OpenRouter with the same environment variables used by Anthropic Agent SDK.
- Migrate plain `@anthropic-ai/sdk` or `anthropic` package usage to OpenRouter-compatible chat completions or the native OpenRouter SDK:
  - TypeScript platform/chat code: prefer `@openrouter/sdk` for native OpenRouter APIs, or the OpenAI SDK compatibility path if that is less disruptive.
  - Python platform/chat code: prefer the `openrouter` package.
- Convert Anthropic message content to OpenAI/OpenRouter chat message content carefully:
  - Map `system` to a leading `{ role: "system", content: ... }` message unless the selected SDK has a first-class `system` field.
  - Map user/assistant text blocks to role/content messages.
  - Preserve tools only after translating schemas and tool result messages. If tool conversion is nontrivial, add a focused regression test around the tool path.
- Change Claude model IDs to OpenRouter slugs such as `anthropic/claude-sonnet-4.5`.

Anthropic Agent SDK / Claude Agent SDK
- Keep the Agent SDK. Configure it through environment variables rather than rewriting agent loops:
  `ANTHROPIC_BASE_URL=https://openrouter.ai/api`
  `ANTHROPIC_AUTH_TOKEN=$OPENROUTER_API_KEY`
  `ANTHROPIC_API_KEY=` explicitly empty
- Preserve agent options such as allowed tools, permission prompts, working directory, and model override environment variables.
- If the project sets Claude model env vars, replace values with OpenRouter model slugs where supported by the runtime.

OpenRouter TypeScript SDKs
- For platform APIs such as model listing, credits, API keys, OAuth, analytics, and direct chat/completions SDK methods, use `@openrouter/sdk`.
- For agent features such as `client.callModel()`, `tool()`, stop conditions, format converters, and model-runner abstractions, use `@openrouter/agent`.
- If existing code imports agent features from `@openrouter/sdk`, migrate imports:
  - `OpenRouter` for `callModel` code from `@openrouter/agent`.
  - `tool` from `@openrouter/agent/tool`.
  - stop conditions from `@openrouter/agent/stop-conditions`.
- Keep both packages only when the project uses both platform and agent features.
- Import Agent SDK types from declared dependencies only. `@openrouter/agent` re-exports many model/result types; do not import app code from transitive packages such as `@openrouter/sdk/models` unless `@openrouter/sdk` is also a deliberate direct dependency for platform APIs.
- When using `@openrouter/agent`, inspect installed package exports and types after install. Current versions are ESM-only, which can affect CommonJS Jest tests.
- `@openrouter/agent` tool schemas require Zod v4-compatible schemas. If the repo uses Zod v3 in app code, avoid a repo-wide breaking upgrade just for Agent tools. Prefer a bounded approach such as a Zod v4 alias or isolated Agent-only schema files, or audit all Zod callsites and prove a root upgrade with typecheck/build/tests.
- Convert message arrays to the exact input type accepted by the installed Agent SDK. Compile the adapter at real `client.callModel({ input })` callsites, not only in isolated helper tests. If needed, write one narrow adapter for the required `Item[]` shape and reuse it everywhere.
- When bridging Agent SDK streams into an existing UI stream protocol, verify event names and required fields against installed package types in `node_modules`. Do not invent event names. Add a no-network adapter test that feeds representative text, reasoning, tool-call argument, tool-result, and turn-boundary events through the bridge.
- For tools, preserve descriptions, required fields, nested object shapes, enums, request-body/query placement, and execution semantics. Do not replace original JSON Schema parameters with generic passthrough schemas unless the original schema is genuinely unavailable and the limitation is documented.
- Prefer `@openrouter/agent` over raw HTTP or `@openrouter/sdk` chat calls when the selected path needs automatic tool execution, multi-turn tool loops, stop conditions, shared tool context, tool approval, reasoning/tool event streams, or reusable model-runner abstractions. Prefer `@openrouter/sdk` or compatibility HTTP when the project needs platform APIs, simple chat/completion calls, OAuth, credits, analytics, API keys, or model listing without agent behavior.

Unknown or unlisted stacks
- If the project uses a stack not listed above, do not stop. Identify whether its model calls are OpenAI-compatible HTTP, provider SDK wrappers, framework adapters, or custom transport code.
- Prefer the least disruptive OpenRouter path:
  - Retarget OpenAI-compatible SDKs/transports to `https://openrouter.ai/api/v1` with `OPENROUTER_API_KEY`.
  - Replace provider-specific SDKs with native OpenRouter SDKs only when message/tool/stream/schema contracts can be preserved.
  - Keep the framework adapter and swap only the model/provider configuration when the framework has a stable provider abstraction.
- Preserve public route shapes, streaming protocol, tool/function semantics, structured-output validation, retries/timeouts, telemetry, and error handling.
- If an endpoint cannot be safely migrated because OpenRouter lacks the endpoint, the selected model, a needed modality, or a persisted data contract, leave that boundary on the old provider, mark it explicitly in code/docs, and include it in the final limitations.

OpenRouter Python SDK
- Install/use `openrouter` for native Python OpenRouter code.
- Use `from openrouter import OpenRouter` and `with OpenRouter(api_key=os.environ["OPENROUTER_API_KEY"]) as client:` for synchronous calls, or `async with OpenRouter(...)` with `send_async` for async code.
- Preserve sync vs async behavior.

Raw HTTP
- Retarget OpenAI-compatible raw calls to `https://openrouter.ai/api/v1/chat/completions` with `Authorization: Bearer ${OPENROUTER_API_KEY}`.
- Preserve app metadata headers if present, and add optional `HTTP-Referer` / `X-OpenRouter-Title` if project config already has site/app metadata.
- Replace provider-specific request/response parsing only where the old shape differs.

Dependency and environment updates
- Update `package.json`, lockfiles, `requirements.txt`, `pyproject.toml`, `.env.example`, deployment config, README/setup docs, and CI secrets docs as needed.
- Remove provider SDK dependencies only when no source/runtime code imports them after migration and they are not retained as documented UI/protocol/test dependencies.
- Make imports and manifests agree. If source code imports a package or subpath, that package must be a direct dependency/devDependency unless it is a Node builtin or local workspace package. Do not rely on transitive dependencies exposed by another SDK.
- Never remove unrelated dependencies or rewrite unrelated app code.
- Add or update tests near the migrated integration points.
- If the documented package manager is unavailable globally, use the package manager declared by the repo, for example `npx pnpm@<version from packageManager> ...`, instead of switching package managers.
- Update visible setup/branding/error text, not just code imports. Stale user-facing labels such as `AI Gateway`, old provider setup instructions, or old key URLs make the migration incomplete unless they describe a deliberately retained boundary.
- If Agent SDK was recommended, record the user choice in the migration note: included, declined, not asked because noninteractive, or not applicable. Include the reason and the migration path chosen.

Verification required before finishing
1. Run the project’s formatter/linter/typecheck/tests/build commands that cover the migrated code.
2. Add a no-network unit test, mock transport test, or lightweight script proving the base URL, auth env var, model slug, messages, tools, structured-output parsing, and streaming behavior are wired correctly. The test must actually run under the repo's test/tooling setup; if the normal runner is E2E-only or incompatible with ESM packages, isolate pure helpers or use a focused `tsx`/`tsc`/script smoke test instead of leaving a broken test.
3. If an API key is available and the project has an integration-test convention, run one tiny live smoke test against a cheap model or call one migrated route; do not print the key. Otherwise skip live calls and state that no live API test was run.
4. Search again for stale provider env vars, old model IDs, old base URLs, Vercel Gateway settings, removed package imports, helper names copied from removed APIs, and user-visible provider/setup strings. Interpret matches against scope: retained embeddings, assistants, BYOK/provider settings, Azure routes, or UI-protocol dependencies are acceptable only when documented.
   Also scan for undeclared transitive imports introduced by the migration, for example app code importing `@openrouter/sdk/*` when only `@openrouter/agent` is declared.
5. Start the app locally and request a real route when practical. Use throwaway local values only for standard non-sensitive setup where docs permit it. If runtime smoke is blocked by missing database/auth/storage/OAuth/Supabase/secrets, document the exact blocker and run the strongest local checks instead of pretending the app was fully exercised.
6. For tool routes, verify both tool-call events and final text/response behavior. For stream bridges, verify adapter events with tests and at least one route smoke where practical.
7. Verify the Agent SDK decision branch: show whether Agent SDK was recommended, what evidence triggered the recommendation, whether the user opted in or declined, and where that choice is reflected in code/docs. If Agent SDK was included, verify `@openrouter/agent` imports, real `client.callModel` callsites, tool schemas, stop conditions where needed, no-network adapter tests, and stale provider/runtime scans.
8. Summarize changed files, selected migration path per integration, commands run, runtime smoke results, retained boundaries, and any features that required manual judgement.

Do the migration now. Do not stop after giving advice. Make the code changes, update docs/config/tests, run verification, and report only the actionable result.
```

## Prerequisites

* A coding agent with file access to your project (Claude Code, Cursor, Codex CLI, OpenClaw, or similar)
* An **OpenRouter API key** — create one at [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys), and add credits if your models aren't free
* A clean git working tree so you can review the diff before committing

> [!WARNING]
>
> This prompt edits your codebase. It changes provider imports, model IDs, environment variables, dependencies, and docs, then runs your lint/typecheck/test/build commands. Run it on a branch and review the diff before merging. If you let it run a live smoke test, that request spends OpenRouter credits.

## How to use it

1. Open your coding agent at the root of the project you want to migrate.
2. Make sure `OPENROUTER_API_KEY` is set in your environment. The prompt checks for it without printing the value.
3. Paste the prompt and let the agent inventory your AI integration code first.
4. If your project runs server-side agent or tool loops, the agent may ask whether to include an Agent SDK migration. Say yes to move that execution to `@openrouter/agent`, or no to keep the minimal provider swap.
5. Review the migration plan and the diff. The agent preserves your framework and retargets only the model-call boundary.
6. Run your tests and hit a real route to confirm behavior is unchanged.

## What the prompt handles

The prompt picks a different path per stack so the migration stays minimal:

* **OpenAI SDK** (TypeScript or Python) — retarget `baseURL` / `base_url` to `https://openrouter.ai/api/v1` and swap model IDs. See [OpenAI SDK](https://openrouter.ai/docs/guides/community/openai-sdk.md).
* **Vercel AI SDK** — swap the provider for [`@openrouter/ai-sdk-provider`](https://openrouter.ai/docs/guides/community/vercel-ai-sdk) while keeping `generateText`, `streamText`, tools, and UI stream protocols intact.
* **Vercel AI Gateway** — replace `gateway(...)` and `AI_GATEWAY_API_KEY` with the OpenRouter provider and `OPENROUTER_API_KEY`, including the user-facing setup text.
* **Mastra** — keep Mastra and switch model strings to `openrouter/provider/model`. See [Mastra](https://openrouter.ai/docs/guides/community/mastra.md).
* **Anthropic SDK** — translate Claude message content to OpenRouter chat completions or the native OpenRouter SDK.
* **Anthropic Agent SDK** — keep the agent loop and point it at OpenRouter with `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN`. See [Anthropic Agent SDK](https://openrouter.ai/docs/guides/community/anthropic-agent-sdk.md).
* **Raw HTTP and unlisted stacks** — retarget OpenAI-compatible calls and preserve route shapes, streaming, and tool semantics.

**OpenRouter Agent SDK (optional)** — when your project has server-side tool execution, multi-turn agent loops, or custom orchestration, the prompt can move that boundary to [`@openrouter/agent`](https://openrouter.ai/docs/agent-sdk/overview). It recommends this only when the evidence is there and asks before making the change; otherwise it stays on the least-disruptive provider path above.

For other new OpenRouter code, the prompt prefers `@openrouter/sdk` for platform APIs and the `openrouter` package for Python.

## Check your work

* Your lint, typecheck, test, and build commands pass on the migrated code.
* Model calls hit `https://openrouter.ai/api/v1` using `OPENROUTER_API_KEY`, with OpenRouter `provider/model` slugs.
* Streaming, tool calls, and structured outputs behave the same as before.
* No stale provider keys, base URLs, or model IDs remain, except boundaries the agent deliberately left in place and documented (such as embeddings or image generation).

## Next steps

* New to OpenRouter? Start with the [Quickstart: Build a Chat App](https://openrouter.ai/docs/cookbook/get-started/quickstart.md).
* Building agents or tool loops? See the [Agent SDK](https://openrouter.ai/docs/agent-sdk/overview.md) (`@openrouter/agent`).
* Browse every available model at [openrouter.ai/models](https://openrouter.ai/models).
