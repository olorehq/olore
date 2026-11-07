> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Reasoning Tokens

For models that support it, the OpenRouter API can return **Reasoning Tokens**, also known as thinking tokens. OpenRouter normalizes the different ways of customizing the amount of reasoning tokens that the model will use, providing a unified interface across different providers.

Reasoning tokens provide a transparent look into the reasoning steps taken by a model. Reasoning tokens are considered output tokens and charged accordingly. On most providers they also count against the request's `max_output_tokens`; see [Reasoning tokens and max\_output\_tokens](#reasoning-tokens-and-max_tokens).

Reasoning tokens are included in the response by default if the model decides to output them. The examples on this page use the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md), where reasoning tokens appear as `reasoning` items in the response `output` array. On Chat Completions they appear in the `reasoning` field of each message, and `reasoning.exclude` can omit them.

> [!NOTE]
>
> **Some reasoning models do not return their reasoning tokens**
>
> While most models and providers make reasoning tokens available in the response, some (like the OpenAI o-series) do not.

## Controlling Reasoning Tokens

You can control reasoning tokens in your requests using the `reasoning` parameter. `effort`, `max_tokens`, and `enabled` work the same way on the Responses and Chat Completions APIs; `exclude` is a Chat Completions-only option (see [Excluding Reasoning Tokens](#excluding-reasoning-tokens-chat-completions-only)):

```json lines theme={null}
{
  "model": "your-model",
  "input": "...",
  "reasoning": {
    // One of the following (not both):
    "effort": "high", // Can be "max", "xhigh", "high", "medium", "low", "minimal" or "none" (OpenAI-style)
    "max_tokens": 2000, // Specific token limit (Anthropic-style)

    // Or enable reasoning with the default parameters:
    "enabled": true // Default: inferred from `effort` or `max_tokens`
  }
}
```

The `reasoning` config object consolidates settings for controlling reasoning strength across different models. See the Note for each option below to see which models are supported and how other models will behave.

### Reasoning tokens and max\_output\_tokens

> [!WARNING]
>
> **Reasoning tokens count against `max_output_tokens`**
>
> On most providers, the request's `max_output_tokens` limit applies to reasoning and visible output combined. If the limit is small enough that the model spends all of it reasoning, the response returns `status: "incomplete"` with `incomplete_details.reason: "max_output_tokens"` and no `message` item in `output`, and the reasoning tokens are still billed.

To detect this case, subtract `usage.output_tokens_details.reasoning_tokens` from `usage.output_tokens`. The difference is the number of visible output tokens, and it is 0 or near 0 when reasoning consumed the budget.

To avoid it, set `max_output_tokens` well above the expected reasoning length, or cap reasoning with `reasoning.max_tokens` or a lower `reasoning.effort`. For Anthropic models, `max_output_tokens` must be strictly higher than the reasoning budget; see [Anthropic Models with Reasoning Tokens](#anthropic-models-with-reasoning-tokens).

On Chat Completions (`/api/v1/chat/completions`), the same budget is `max_tokens` (or `max_completion_tokens`, which shares the same budget). If the model spends all of it reasoning, the response returns `finish_reason: "length"` with an empty `content`, and the reasoning tokens are still billed. With `reasoning.exclude: true` the `reasoning` field is omitted as well, so the response carries no text at all and the only signal left is `finish_reason` plus `usage`. To detect this case, subtract `usage.completion_tokens_details.reasoning_tokens` from `usage.completion_tokens`. For example, a request with `max_tokens: 300` that returns `completion_tokens: 302` and `reasoning_tokens: 301` produced a single visible token.

### Discovering per-model reasoning options

Each model in [`GET /api/v1/models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties) may include a `reasoning` object describing which effort levels it accepts and whether reasoning is mandatory:

```json lines theme={null}
{
  "id": "google/gemini-3.5-flash",
  "reasoning": {
    "supported_efforts": ["high", "medium", "low", "minimal"],
    "default_effort": "medium",
    "default_enabled": true,
    "mandatory": true
  }
}
```

Use this when building client UIs:

* **`supported_efforts`**: Filter effort selectors to these values, returned in descending effort order (highest first). When `null`, all gateway effort values are accepted. When omitted, the model does not expose effort selection.
* **`default_effort`**: Pre-select this effort when enabling reasoning. Maps to `reasoning.effort` in chat requests. If the value is `"none"`, treat it as "reasoning off by default" rather than pre-selecting disable when the user explicitly turns reasoning on.
* **`default_enabled`**: Default on/off state when the user has not set `reasoning.enabled`.
* **`supports_max_tokens`**: When present and `true`, show a token budget control and send `reasoning.max_tokens` instead of (or alongside) `reasoning.effort`. Omitted when the model does not support token-budget reasoning.
* **`mandatory`**: When `true`, hide disable controls and do not send `effort: "none"` — the model rejects it.

Non-reasoning models and dynamic router models (`openrouter/auto`, `openrouter/free`) omit the `reasoning` field.

### Max Tokens for Reasoning

> [!NOTE]
>
> **Supported models**
>
> Currently supported by:
>
> <ul>
>   <li>Gemini thinking models</li>
>
>   <li>
>     Anthropic reasoning models (by using the `reasoning.max_tokens`  parameter)
>   </li>
>
>   <li>Some Alibaba Qwen thinking models (mapped to `thinking_budget`)</li>
> </ul>
>
> For Alibaba, support varies by model — please check the individual model descriptions to confirm whether `reasoning.max_tokens` (via `thinking_budget`) is available.

For models that support reasoning token allocation, you can control it like this:

* `"max_tokens": 2000` - Directly specifies the maximum number of tokens to use for reasoning

For models that only support `reasoning.effort` (see below), the `reasoning.max_tokens` value will be used to determine the effort level.

### Reasoning Effort Level

> [!NOTE]
>
> **Supported models**
>
> Currently supported by OpenAI reasoning models (o1 series, o3 series, GPT-5 series) and Grok models

The percentages below are of the request's output token limit (`max_output_tokens`, or `max_tokens` on Chat Completions):

* `"effort": "max"` - Allocates the largest portion of tokens for reasoning (approximately 95% of the limit)
* `"effort": "xhigh"` - Same allocation as max (approximately 95% of the limit)
* `"effort": "high"` - Allocates a large portion of tokens for reasoning (approximately 80% of the limit)
* `"effort": "medium"` - Allocates a moderate portion of tokens (approximately 50% of the limit)
* `"effort": "low"` - Allocates a smaller portion of tokens (approximately 20% of the limit)
* `"effort": "minimal"` - Allocates an even smaller portion of tokens (approximately 10% of the limit)
* `"effort": "none"` - Disables reasoning entirely

For models that only support `reasoning.max_tokens`, the effort level will be set based on the percentages above.

### Excluding Reasoning Tokens (Chat Completions only)

If you want the model to use reasoning internally but not include it in the response:

* `"exclude": true` - The model will still use reasoning, but it won't be returned in the response. The tokens are still billed and [count against `max_tokens`](#reasoning-tokens-and-max_tokens).

`exclude` is only honored on Chat Completions (`/api/v1/chat/completions`). The Responses API ignores it and always returns `reasoning` items in `output`; filter them out client-side if you do not want them.

### Enable Reasoning with Default Config

To enable reasoning with the default parameters:

* `"enabled": true` - Enables reasoning at the "medium" effort level with no exclusions.

### Examples

#### Basic Usage with Reasoning Tokens

#### Using Max Tokens for Reasoning

For models that support direct token allocation (like Anthropic models), you can specify the exact number of tokens to use for reasoning:

#### Excluding Reasoning Tokens from Response (Chat Completions)

If you want the model to use reasoning internally but not include it in the response, use Chat Completions (`/api/v1/chat/completions`). The Responses API ignores `reasoning.exclude` and always returns `reasoning` items in `output`.

#### Advanced Usage: Reasoning Chain-of-Thought

This example shows how to use reasoning tokens in a more complex workflow. It injects one model's reasoning into another model to improve its response quality:

## Preserving Reasoning

### Responses API

To preserve reasoning across turns, send the previous response's `output` items back in the next request's `input`, in the order they were returned, and append your `function_call_output` items after them. Keep each `reasoning` item's `content`, `summary`, `signature`, and `encrypted_content` unchanged:

```json lines theme={null}
{
  "model": "anthropic/claude-sonnet-4.5",
  "reasoning": { "max_tokens": 2000 },
  "tools": [{ "type": "function", "name": "get_weather", "parameters": { "type": "object", "properties": { "city": { "type": "string" } }, "required": ["city"] } }],
  "input": [
    { "role": "user", "content": "What's the weather in Boston?" },
    { "type": "reasoning", "id": "rs_abc123", "summary": [], "content": [{ "type": "reasoning_text", "text": "The user wants the current weather, so I should call get_weather." }], "signature": "..." },
    { "type": "function_call", "id": "fc_abc123", "call_id": "call_abc123", "name": "get_weather", "arguments": "{\"city\":\"Boston\"}" },
    { "type": "function_call_output", "call_id": "call_abc123", "output": "{\"temperature_f\":62,\"conditions\":\"cloudy\"}" }
  ]
}
```

With OpenAI GPT-5.6 and newer you can also control which turns' reasoning the model sees; see [Reasoning Context Mode](#reasoning-context-mode).

### Chat Completions

To preserve reasoning context across multiple turns, you can pass it back to the API in one of two ways:

1. **`message.reasoning`** (string): Pass the plaintext reasoning as a string field on the assistant message
2. **`message.reasoning_details`** (array): Pass the full reasoning\_details block

Use `reasoning_details` when working with models that return special reasoning types (such as encrypted or summarized) - this preserves the full structure needed for those models.

For models that only return raw reasoning strings, you can use the simpler `reasoning` field. You can also use `reasoning_content` as an alias - it functions identically to `reasoning`.

The `reasoning_details` functionality works identically across all supported reasoning models. You can easily switch between OpenAI reasoning models (like `~openai/gpt-sol-latest`) and Anthropic reasoning models (like `~anthropic/claude-sonnet-latest`) without changing your code structure.

Preserving reasoning blocks is useful specifically for tool calling. When models like Claude invoke tools, it is pausing its construction of a response to await external information. When tool results are returned, the model will continue building that existing response. This necessitates preserving reasoning blocks during tool use, for a couple of reasons:

**Reasoning continuity**: The reasoning blocks capture the model's step-by-step reasoning that led to tool requests. When you post tool results, including the original reasoning ensures the model can continue its reasoning from where it left off.

**Context maintenance**: While tool results appear as user messages in the API structure, they're part of a continuous reasoning flow. Preserving reasoning blocks maintains this conceptual flow across multiple API calls.

> [!NOTE]
>
> **Important for Reasoning Models**
>
> When providing reasoning\_details blocks, the entire sequence of consecutive reasoning blocks must match the outputs generated by the model during the original request; you cannot rearrange or modify the sequence of these blocks.

### Example: Preserving Reasoning Blocks with OpenRouter and Claude

For more detailed information about thinking encryption, redacted blocks, and advanced use cases, see [Anthropic's documentation on extended thinking](https://docs.anthropic.com/en/docs/build-with-claude/tool-use#extended-thinking).

For more information about OpenAI reasoning models, see [OpenAI's reasoning documentation](https://platform.openai.com/docs/guides/reasoning#keeping-reasoning-items-in-context).

## Reasoning Context Mode

When you echo reasoning items back in your conversation history, you can control which reasoning the model has access to with the `reasoning.context` parameter:

* **`auto`**: The model uses its default context mode. Omitting `reasoning.context` has the same effect.
* **`all_turns`**: The model can reference reasoning from all turns present in the input. Use this for multi-turn conversations where you want the model to build on its previous chain of thought.
* **`current_turn`**: The model only uses reasoning from the current turn. Prior reasoning items in the input are ignored. Use this when you want a fresh reasoning pass without influence from earlier turns.

> [!NOTE]
>
> `reasoning.context` is only supported by OpenAI GPT-5.6 and newer.

When using the Responses API with manual state management (echoing output items back as input), set `reasoning.context`. OpenRouter automatically requests encrypted reasoning content from reasoning-capable providers, so replay the returned `encrypted_content` unchanged; no explicit `include` field is required:

```json theme={null}
{
  "model": "~openai/gpt-sol-latest",
  "input": [
    { "role": "user", "content": "Solve this math problem step by step: ..." },
    {
      "type": "reasoning",
      "id": "rs_abc123",
      "encrypted_content": "...",
      "summary": [{ "type": "summary_text", "text": "Analyzed the equation..." }]
    },
    {
      "type": "message",
      "role": "assistant",
      "content": [{ "type": "output_text", "text": "The answer is 42." }]
    },
    { "role": "user", "content": "Now explain it differently." }
  ],
  "reasoning": {
    "effort": "high",
    "context": "all_turns"
  }
}
```

> [!NOTE]
>
> The default value of `context` may vary by model. Set it explicitly if your use case requires a specific behavior.

## Reasoning Mode

For models that offer a pro reasoning variant, the `reasoning.mode` parameter controls which variant serves your request:

* **`standard`**: The model's standard reasoning behavior. Omitting `reasoning.mode` has the same effect.
* **`pro`**: Routes the request to the model's pro variant, which uses deeper multi-pass reasoning for harder problems.

> [!NOTE]
>
> `reasoning.mode` is only supported by OpenAI GPT-5.6 and newer, when served by OpenAI or Azure. Amazon Bedrock's OpenAI-compatible API accepts the field but silently ignores it, so pro reasoning is not available on Bedrock — OpenRouter only routes pro requests to providers that honor mode selection.

For each supported model, there are two equivalent ways to request pro mode on OpenRouter:

1. Send `reasoning.mode: "pro"` with the standard model — OpenRouter reroutes the request to the matching `*-pro` model.
2. Call the `*-pro` model listing directly.

```json theme={null}
{
  "model": "~openai/gpt-sol-latest",
  "input": "Prove that there are infinitely many primes.",
  "reasoning": {
    "mode": "pro"
  }
}
```

> [!NOTE]
>
> * `mode` is independent of `effort`: you can combine `mode: "pro"` with any supported request-level effort. It cannot be combined with a [mid-conversation effort update](#mid-conversation-effort), which OpenAI does not accept on pro models, so that combination is rejected with a 400.
> * Pro mode bills at the same per-token rates as standard mode, but typically consumes more tokens.

## Reasoning with the Anthropic Messages API

Requests sent through the [Anthropic Messages API](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message.md) control reasoning with Anthropic's native `thinking` and `output_config.effort` fields. OpenRouter normalizes both into the unified `reasoning` parameter, so they work on every reasoning model, not only Claude.

| Messages API request | Unified `reasoning` equivalent |
| - | - |
| `output_config: { effort }` | `reasoning: { effort }` |
| `thinking: { type: "enabled", budget_tokens }` | `reasoning: { max_tokens: budget_tokens }` |
| `thinking: { type: "adaptive" }` | `reasoning: { enabled: true }` |
| `thinking: { type: "disabled" }` | `reasoning: { enabled: false }` |

`output_config.effort` takes precedence over `thinking.type: "adaptive"`. Sending `thinking: { type: "adaptive" }` together with `output_config: { effort: "high" }` means high effort on every model. Claude receives both fields unchanged, while a model such as GPT-5 or MiniMax receives `reasoning_effort: "high"` in its own vocabulary, translated the same way as request-level `reasoning.effort`.

When `thinking: { type: "enabled", budget_tokens }` and `output_config.effort` are sent together, Claude receives both unchanged. The unified `reasoning` parameter accepts either `effort` or `max_tokens` but not both, so every other model receives `reasoning.effort` and the budget is not forwarded. Send only `thinking.budget_tokens` to control other models by token budget.

`thinking: { type: "adaptive" }` without an `output_config.effort` leaves the effort to the model. Claude runs its native adaptive thinking, and other models use their default reasoning effort, which the models endpoint reports as [`reasoning.default_effort`](#discovering-per-model-reasoning-options).

`thinking: { type: "disabled" }` disables reasoning even when an `output_config.effort` is also present. Claude still receives the `output_config.effort`, since Anthropic applies it to the whole response, and other models receive no reasoning effort.

> [!NOTE]
>
> OpenAI models expose two knobs, `reasoning.effort` and `text.verbosity`, and the Messages API request shape has one. `output_config.effort` maps to `reasoning.effort` only, and it is not sent as `text.verbosity`. Anthropic's `xhigh` and `max` levels stay reasoning efforts and are translated to the model's [supported reasoning efforts](#discovering-per-model-reasoning-options). To set OpenAI response verbosity, use the [`verbosity`](https://openrouter.ai/docs/api_reference/parameters#verbosity) parameter on the Chat Completions or Responses API.

## Changing Effort Mid-Conversation

Request-level effort applies to the whole conversation, so raising it for one hard turn and lowering it again on the next changes the request prefix and invalidates the prompt cache. Some models instead accept an effort change as an item in the conversation history. The change applies from that point onward and stays in effect until the next change, the preceding items are untouched, and the cache stays warm. Keep the item at the same position in every later request.

All three OpenRouter APIs expose this, each in the shape native to that API. The Chat Completions form is an OpenRouter extension, since OpenAI's own Chat Completions API has no per-message equivalent.

```json lines theme={null}
// Responses API
{
  "model": "anthropic/claude-fable-5.1",
  "reasoning": { "effort": "high" },
  "input": [
    { "role": "user", "content": "Plan the migration." },
    { "type": "message", "role": "assistant", "content": [{ "type": "output_text", "text": "Here's the plan: ..." }] },
    { "type": "configuration_update", "reasoning": { "effort": "low" } },
    { "role": "user", "content": "Now rename the config file." }
  ]
}
```

```json lines theme={null}
// Chat Completions
{
  "model": "anthropic/claude-fable-5.1",
  "reasoning": { "effort": "high" },
  "messages": [
    { "role": "user", "content": "Plan the migration." },
    { "role": "assistant", "content": "Here's the plan: ..." },
    { "role": "system", "content": "", "configuration_update": { "reasoning": { "effort": "low" } } },
    { "role": "user", "content": "Now rename the config file." }
  ]
}
```

```json lines theme={null}
// Anthropic Messages API
{
  "model": "anthropic/claude-fable-5.1",
  "max_tokens": 4096,
  "output_config": { "effort": "high" },
  "messages": [
    { "role": "user", "content": "Plan the migration." },
    { "role": "assistant", "content": "Here's the plan: ..." },
    { "role": "system", "content": [], "output_config": { "effort": "low" } },
    { "role": "user", "content": "Now rename the config file." }
  ]
}
```

The three forms are interchangeable: OpenRouter normalizes each into one internal representation and re-emits it in the form the selected provider accepts. A Responses `configuration_update` sent to a Claude model becomes a per-message `output_config`, and a Chat Completions or Messages API update sent to an OpenAI model becomes a Responses `configuration_update` item. The request-level effort (`reasoning.effort` or `output_config.effort`) is independent of the per-item updates and still sets the baseline for turns before the first update.

Effort values are translated to the target model's vocabulary the same way as request-level effort. Claude accepts `low`, `medium`, `high`, `xhigh`, and `max` (`minimal` is sent as `low`, `none` is rejected). OpenAI models accept the efforts listed in their [supported reasoning efforts](#discovering-per-model-reasoning-options), and an update with an effort the model does not support is rejected with a 400.

> [!NOTE]
>
> * Put the update directly before the user turn it should apply to, on a content-less system message (Chat Completions and Messages API) or a `configuration_update` item (Responses API). An update ahead of the first user turn is allowed; on Claude models it stays inline in `messages` while ordinary system text is still sent as the top-level `system` prompt, so a system message that carries both text and an update is split in two.
> * Do not place two updates next to each other. The first would apply to nothing; OpenAI rejects adjacent `configuration_update` items, and OpenRouter applies the same rule on every API so the three forms stay interchangeable.
> * An update after the last user turn is accepted and applies to the response generated by that request. Keep it in the same position in later requests so the cached prefix still matches.
> * Updates cannot be combined with `truncation: "auto"` in the Responses API, and on any API they cannot be combined with `reasoning.mode: "pro"` or sent to a pro model variant such as `openai/gpt-6-astra-pro`.
> * Mid-conversation effort updates are not accepted on the [Batch API](https://openrouter.ai/docs/batch-quickstart.md) and are rejected per line.

> [!NOTE]
>
> Support is per model and OpenRouter enables it as providers roll it out; the first models to accept mid-conversation effort changes were Claude Fable 5.1 and OpenAI GPT-6 Astra, and Claude Opus 5 accepts them as well. Requests that use an update are routed only to endpoints that accept it, and a request for a model that does not support it is rejected with a 400 instead of being sent with the update silently dropped.

## Reasoning Details API Shape

This section documents the Chat Completions (`/api/v1/chat/completions`) response shape. On the Responses API, reasoning arrives as `reasoning` items in `output` instead; see [Basic Usage with Reasoning Tokens](#basic-usage-with-reasoning-tokens).

When reasoning models generate responses, the reasoning information is structured in a standardized format through the `reasoning_details` array. This section documents the API response structure for reasoning details in both streaming and non-streaming responses.

### reasoning\_details Array Structure

The `reasoning_details` field contains an array of reasoning detail objects. Each object in the array represents a specific piece of reasoning information and follows one of three possible types. The location of this array differs between streaming and non-streaming responses.

* **Non-streaming responses**: `reasoning_details` appears in `choices[].message.reasoning_details`
* **Streaming responses**: `reasoning_details` appears in `choices[].delta.reasoning_details` for each chunk

#### Common Fields

All reasoning detail objects share these common fields:

* `id` (string | null): Unique identifier for the reasoning detail
* `format` (string): The format of the reasoning detail, with possible values:
  * `"unknown"` - Format is not specified
  * `"openai-responses-v1"` - OpenAI responses format version 1
  * `"azure-openai-responses-v1"` - Azure OpenAI responses format version 1
  * `"bedrock-openai-responses-v1"` - Amazon Bedrock OpenAI responses format version 1
  * `"bedrock-xai-responses-v1"` - Amazon Bedrock xAI responses format version 1
  * `"xai-responses-v1"` - SpaceXAI responses format version 1
  * `"meta-responses-v1"` - Meta responses format version 1
  * `"openrouter-stealth-v1"` - OpenRouter stealth model format version 1
  * `"anthropic-claude-v1"` - Anthropic Claude format version 1 (default)
  * `"google-gemini-v1"` - Google Gemini format version 1
* `index` (number, optional): Sequential index of the reasoning detail

#### Reasoning Detail Types

**1. Summary Type (`reasoning.summary`)**

Contains a high-level summary of the reasoning process:

```json lines theme={null}
{
  "type": "reasoning.summary",
  "summary": "The model analyzed the problem by first identifying key constraints, then evaluating possible solutions...",
  "id": "reasoning-summary-1",
  "format": "anthropic-claude-v1",
  "index": 0
}
```

**2. Encrypted Type (`reasoning.encrypted`)**

Contains encrypted reasoning data that may be redacted or protected:

```json lines theme={null}
{
  "type": "reasoning.encrypted",
  "data": "eyJlbmNyeXB0ZWQiOiJ0cnVlIiwiY29udGVudCI6IltSRURBQ1RFRF0ifQ==",
  "id": "reasoning-encrypted-1",
  "format": "anthropic-claude-v1",
  "index": 1
}
```

**3. Text Type (`reasoning.text`)**

Contains raw text reasoning with optional signature verification:

```json lines theme={null}
{
  "type": "reasoning.text",
  "text": "Let me think through this step by step:\n1. First, I need to understand the user's question...",
  "signature": "sha256:abc123def456...",
  "id": "reasoning-text-1",
  "format": "anthropic-claude-v1",
  "index": 2
}
```

### Response Examples

#### Non-Streaming Response

In non-streaming responses, `reasoning_details` appears in the message:

```json expandable lines theme={null}
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Based on my analysis, I recommend the following approach...",
        "reasoning_details": [
          {
            "type": "reasoning.summary",
            "summary": "Analyzed the problem by breaking it into components",
            "id": "reasoning-summary-1",
            "format": "anthropic-claude-v1",
            "index": 0
          },
          {
            "type": "reasoning.text",
            "text": "Let me work through this systematically:\n1. First consideration...\n2. Second consideration...",
            "signature": null,
            "id": "reasoning-text-1",
            "format": "anthropic-claude-v1",
            "index": 1
          }
        ]
      }
    }
  ]
}
```

#### Streaming Response

In streaming responses, `reasoning_details` appears in delta chunks as the reasoning is generated:

```json lines theme={null}
{
  "choices": [
    {
      "delta": {
        "reasoning_details": [
          {
            "type": "reasoning.text",
            "text": "Let me think about this step by step...",
            "signature": null,
            "id": "reasoning-text-1",
            "format": "anthropic-claude-v1",
            "index": 0
          }
        ]
      }
    }
  ]
}
```

**Streaming Behavior Notes:**

* Each reasoning detail chunk is sent as it becomes available
* The `reasoning_details` array in each chunk may contain one or more reasoning objects
* For encrypted reasoning, the content may appear as `[REDACTED]` in streaming responses
* The complete reasoning sequence is built by concatenating all chunks in order

## Legacy Parameters

For backward compatibility, Chat Completions (`/api/v1/chat/completions`) still accepts the following legacy parameters. The Responses API does not accept them:

* `include_reasoning: true` - Equivalent to `reasoning: {}`
* `include_reasoning: false` - Equivalent to `reasoning: { exclude: true }`

However, we recommend using the new unified `reasoning` parameter for better control and future compatibility.

## Provider-Specific Reasoning Implementation

### Anthropic Models with Reasoning Tokens

The latest Claude models, such as [`~anthropic/claude-sonnet-latest`](https://openrouter.ai/~anthropic/claude-sonnet-latest), support working with and returning reasoning tokens.

You can enable reasoning on Anthropic models **only** using the unified `reasoning` parameter with either `effort` or `max_tokens`.

#### Reasoning Max Tokens for Anthropic Models

When using Anthropic models with reasoning:

* When using the `reasoning.max_tokens` parameter, that value is used directly with a minimum of 1024 tokens.
* When using the `reasoning.effort` parameter, the budget\_tokens are calculated based on the request's `max_output_tokens` value (`max_tokens` on Chat Completions).

The reasoning token allocation is capped at 128,000 tokens maximum and 1024 tokens minimum. The formula for calculating the budget\_tokens is: `budget_tokens = max(min(max_output_tokens * {effort_ratio}, 128000), 1024)`

effort\_ratio is 0.95 for max and xhigh effort, 0.8 for high effort, 0.5 for medium effort, 0.2 for low effort, and 0.1 for minimal effort.

**Important**: `max_output_tokens` must be strictly higher than the reasoning budget to ensure there are tokens available for the final response after thinking.

> [!NOTE]
>
> **Token Usage and Billing**
>
> Reasoning tokens are counted as output tokens for billing purposes. Using reasoning tokens will increase your token usage but can significantly improve the quality of model responses.

#### Summarized Thinking

For Claude models that support the `thinking.display` field, OpenRouter defaults to **summarized thinking** (`thinking.display: 'summarized'`), so you don't lose the reasoning trace on newer models where Anthropic omits the thinking by default.

The `display` setting only controls the visible thinking trace in the response. The model consumes the same number of tokens either way, and usage is billed based on the tokens the model actually generates. Because the visible summary is condensed, it may contain fewer tokens than the reasoning token count reported in `usage`.

If you're using the Anthropic Messages API format directly, you can control this with `thinking.display`:

* **`'summarized'`** (default): A condensed summary of the reasoning is returned
* **`'omitted'`**: No thinking trace is returned

#### Example: Streaming with Anthropic Reasoning Tokens

### Google Gemini 3 Models with Thinking Levels

Gemini 3 models (such as [google/gemini-3.1-pro-preview](https://openrouter.ai/google/gemini-3.1-pro-preview) and [google/gemini-3-flash-preview](https://openrouter.ai/google/gemini-3-flash-preview)) use Google's `thinkingLevel` API instead of the older `thinkingBudget` API used by Gemini 2.5 models.

OpenRouter maps the `reasoning.effort` parameter directly to Google's `thinkingLevel` values:

| OpenRouter `reasoning.effort` | Google `thinkingLevel` |
| - | - |
| `"minimal"` | `"minimal"` |
| `"low"` | `"low"` |
| `"medium"` | `"medium"` |
| `"high"` | `"high"` |
| `"xhigh"` | `"high"` (mapped down) |

> [!NOTE]
>
> **Token Consumption is Determined by Google**
>
> When using `thinkingLevel`, the actual number of reasoning tokens consumed is determined internally by Google. There are no publicly documented token limit breakpoints for each level. For example, setting `effort: "low"` might result in several hundred reasoning tokens depending on the complexity of the task. This is expected behavior and reflects how Google implements thinking levels internally.

If a model doesn't support a specific effort level (for example, if a model only supports `low` and `high`), OpenRouter will map your requested effort to the nearest supported level.

#### Using max\_tokens with Gemini 3

If you specify `reasoning.max_tokens` explicitly, OpenRouter will pass it through as `thinkingBudget` to Google's API. However, for Gemini 3 models, Google internally maps this budget value to a `thinkingLevel`, so you will not get precise token control. The actual token consumption is still determined by Google's thinkingLevel implementation, not by the specific budget value you provide.

#### Example: Using Thinking Levels with Gemini 3
