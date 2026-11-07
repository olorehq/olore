> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Chat

## Overview

### Available Operations

* [send](#send) - Create a chat completion

## send

Sends a request for a model response for the given chat conversation. Supports both streaming and non-streaming modes.

### Example Usage: guardrail-blocked

```python theme={null}
from openrouter import OpenRouter
import os


with OpenRouter(
    http_referer="<value>",
    x_open_router_title="<value>",
    x_open_router_categories="<value>",
    api_key=os.getenv("OPENROUTER_API_KEY", ""),
) as open_router:

    res = open_router.chat.send(messages=[
        {
            "content": "You are a helpful assistant.",
            "role": "system",
        },
        {
            "content": "What is the capital of France?",
            "role": "user",
        },
    ], stream=False)

    with res as event_stream:
        for event in event_stream:
            # handle event
            print(event, flush=True)

```

### Example Usage: insufficient-permissions

```python theme={null}
from openrouter import OpenRouter
import os


with OpenRouter(
    http_referer="<value>",
    x_open_router_title="<value>",
    x_open_router_categories="<value>",
    api_key=os.getenv("OPENROUTER_API_KEY", ""),
) as open_router:

    res = open_router.chat.send(messages=[
        {
            "content": "You are a helpful assistant.",
            "role": "system",
        },
        {
            "content": "What is the capital of France?",
            "role": "user",
        },
    ], stream=False)

    with res as event_stream:
        for event in event_stream:
            # handle event
            print(event, flush=True)

```

### Parameters

| Parameter | Type | Required | Description | Example |
| - | - | - | - | - |
| `messages` | List\[[components.ChatMessages](../../components/chatmessages.mdx)] | ✔️ | List of messages for the conversation | \[ \{ "content": "Hello!", "role": "user" } ] |
| `http_referer` | *Optional\[str]* | ➖ | The app identifier should be your app's URL and is used as the primary identifier for rankings. This is used to track API usage per application.  | |
| `x_open_router_title` | *Optional\[str]* | ➖ | The app display name allows you to customize how your app appears in OpenRouter's dashboard.  | |
| `x_open_router_categories` | *Optional\[str]* | ➖ | Comma-separated list of app categories (e.g. "cli-agent,cloud-agent"). Used for marketplace rankings.  | |
| `x_open_router_metadata` | [Optional\[components.MetadataLevel\]](../../components/metadatalevel.mdx) | ➖ | Opt-in to surface routing metadata on the response under `openrouter_metadata`. Defaults to `disabled`. The legacy header `X-OpenRouter-Experimental-Metadata` is also accepted for backward compatibility. | enabled |
| `cache_control` | [Optional\[components.AnthropicCacheControlDirective\]](../../components/anthropiccachecontroldirective.mdx) | ➖ | Enable automatic prompt caching. When set at the top level, the system automatically applies cache breakpoints to the last cacheable block in the request. When set on an individual content block, it marks an explicit cache breakpoint; block-level markers also work on OpenAI models that support explicit prompt caching — OpenRouter converts them to the provider's native format. | \{ "type": "ephemeral" } |
| `debug` | [Optional\[components.ChatDebugOptions\]](../../components/chatdebugoptions.mdx) | ➖ | Debug options for inspecting request transformations (streaming only) | \{ "echo\_upstream\_body": true } |
| `deferred_tools` | [Optional\[components.DeferredToolsControl\]](../../components/deferredtoolscontrol.mdx) | ➖ | Opt-in versioned router-level deferred-tool protocol. Replay assistant reasoning unchanged on continuation; keep the catalog unchanged. | \{ "profile": "portable", "protocol": "v1", "search": \{ "max\_results": 5, "type": "bm25" }, "validation": "runtime" } |
| `frequency_penalty` | *OptionalNullable\[float]* | ➖ | Frequency penalty (-2.0 to 2.0) | 0 |
| `image_config` | Dict\[str, [components.ImageConfig](../../components/imageconfig.mdx)] | ➖ | Provider-specific image configuration options. Keys and values vary by model/provider. See [https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation.md) for more details. | \{ "aspect\_ratio": "16:9", "quality": "high" } |
| `logit_bias` | Dict\[str, *float*] | ➖ | Token logit bias adjustments | \{ "50256": -100 } |
| `logprobs` | *OptionalNullable\[bool]* | ➖ | Return log probabilities | false |
| `max_completion_tokens` | *OptionalNullable\[int]* | ➖ | Maximum tokens in completion | 100 |
| `max_tokens` | *OptionalNullable\[int]* | ➖ | Maximum tokens (deprecated, use max\_completion\_tokens). Note: some providers enforce a minimum of 16. | 100 |
| `metadata` | Dict\[str, *str*] | ➖ | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) | \{ "session\_id": "session-456", "user\_id": "user-123" } |
| `min_p` | *OptionalNullable\[float]* | ➖ | Minimum probability threshold relative to the most likely token. Tokens with probability below min\_p \* (probability of top token) are filtered out. Not all providers support this parameter. | 0.1 |
| `modalities` | List\[[components.Modality](../../components/modality.mdx)] | ➖ | Output modalities for the response. Supported values are "text", "image", and "audio". | \[ "text", "image" ] |
| `model` | *Optional\[str]* | ➖ | Model to use for completion | openai/gpt-4 |
| `models` | List\[*str*] | ➖ | Models to use for completion | \[ "openai/gpt-4", "openai/gpt-4o" ] |
| `parallel_tool_calls` | *OptionalNullable\[bool]* | ➖ | Whether to enable parallel function calling during tool use. When true, the model may generate multiple tool calls in a single response. | true |
| `plugins` | List\[[components.ChatRequestPlugin](../../components/chatrequestplugin.mdx)] | ➖ | Plugins you want to enable for this request, including their settings. | |
| `prediction` | [OptionalNullable\[components.Prediction\]](../../components/prediction.mdx) | ➖ | Static predicted output content. Supported models can use this to reduce latency when much of the response is known in advance. | \{ "content": "Expected response", "type": "content" } |
| `presence_penalty` | *OptionalNullable\[float]* | ➖ | Presence penalty (-2.0 to 2.0) | 0 |
| `prompt_cache_key` | *OptionalNullable\[str]* | ➖ | N/A | |
| `prompt_cache_options` | [OptionalNullable\[components.PromptCacheOptions\]](../../components/promptcacheoptions.mdx) | ➖ | Request-level prompt-cache controls. `mode: "explicit"` disables OpenAI-managed breakpoints so only blocks marked with `prompt_cache_breakpoint` are cached. `ttl` sets the minimum cache lifetime for every breakpoint the request writes: "30m" (default) or "12h" (billed at the higher 12h cache-write rate). Only supported by OpenAI GPT-5.6 and newer. | \{ "mode": "explicit", "ttl": "30m" } |
| `provider` | [OptionalNullable\[components.ProviderPreferences\]](../../components/providerpreferences.mdx) | ➖ | When multiple model providers are available, optionally indicate your routing preference. | \{ "allow\_fallbacks": true } |
| `reasoning` | [Optional\[components.ChatRequestReasoning\]](../../components/chatrequestreasoning.mdx) | ➖ | Configuration options for reasoning models | \{ "effort": "medium", "summary": "concise" } |
| `reasoning_effort` | [OptionalNullable\[components.ChatRequestReasoningEffort\]](../../components/chatrequestreasoningeffort.mdx) | ➖ | Shorthand for setting reasoning effort. Equivalent to setting reasoning.effort. Cannot be used simultaneously with reasoning.effort if they differ. | medium |
| `repetition_penalty` | *OptionalNullable\[float]* | ➖ | Penalizes tokens based on how much they have already appeared in the text. A value of 1.0 means no penalty. Values above 1.0 penalize repeated tokens more strongly. Not all providers support this parameter. | 1 |
| `response_format` | [Optional\[components.ResponseFormat\]](../../components/responseformat.mdx) | ➖ | Response format configuration | \{ "type": "json\_object" } |
| `seed` | *OptionalNullable\[int]* | ➖ | Random seed for deterministic outputs | 42 |
| `service_tier` | [OptionalNullable\[components.ChatRequestServiceTier\]](../../components/chatrequestservicetier.mdx) | ➖ | The service tier to use for processing this request. `fast` is accepted as an alias for `priority`. `ultrafast` prefers ultrafast endpoints and falls back to `priority`, then default endpoints. | auto |
| `session_id` | *Optional\[str]* | ➖ | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). When provided, OpenRouter uses it as the sticky routing key, routing all requests in the session to the same provider to maximize prompt cache hits. Also used for observability grouping. If provided in both the request body and the x-session-id header, the body value takes precedence. Maximum of 256 characters. | |
| `stop` | [OptionalNullable\[components.ChatRequestStop\]](../../components/chatrequeststop.mdx) | ➖ | Stop sequences (up to 4) | \[ "\n" ] |
| `stop_server_tools_when` | List\[[components.StopServerToolsWhenCondition](../../components/stopservertoolswhencondition.mdx)] | ➖ | Stop conditions for the server-tool agent loop. Any condition firing halts the loop (OR logic). When set, this overrides `max_tool_calls`. When a condition fires while the model is still emitting tool calls, the pending tool calls are executed and one final turn is made with tool calls disabled so the response ends with a natural-language answer instead of an unfinished tool call. | \[ \{ "step\_count": 5, "type": "step\_count\_is" }, \{ "max\_cost\_in\_dollars": 0.5, "type": "max\_cost" } ] |
| `stream` | *Optional\[bool]* | ➖ | Enable streaming response | false |
| `stream_options` | [OptionalNullable\[components.ChatStreamOptions\]](../../components/chatstreamoptions.mdx) | ➖ | Streaming configuration options | \{ "include\_usage": true } |
| `temperature` | *OptionalNullable\[float]* | ➖ | Sampling temperature (0-2) | 0.7 |
| `tool_choice` | [Optional\[components.ChatToolChoice\]](../../components/chattoolchoice.mdx) | ➖ | Tool choice configuration | auto |
| `tools` | List\[[components.ChatFunctionTool](../../components/chatfunctiontool.mdx)] | ➖ | Available tools for function calling | \[ \{ "function": \{ "description": "Get weather", "name": "get\_weather" }, "type": "function" } ] |
| `top_a` | *OptionalNullable\[float]* | ➖ | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. Not all providers support this parameter. | 0 |
| `top_k` | *OptionalNullable\[int]* | ➖ | Limits the model to choose from the top K most likely tokens at each step. A value of 1 means the model will always pick the most likely next token. Not all providers support this parameter. | 40 |
| `top_logprobs` | *OptionalNullable\[int]* | ➖ | Number of top log probabilities to return (0-20) | 5 |
| `top_p` | *OptionalNullable\[float]* | ➖ | Nucleus sampling parameter (0-1) | 1 |
| `trace` | [Optional\[components.TraceConfig\]](../../components/traceconfig.mdx) | ➖ | Metadata for observability and tracing. Known keys (trace\_id, trace\_name, span\_name, generation\_name, parent\_span\_id) have special handling. Additional keys are passed through as custom metadata to configured broadcast destinations. | \{ "trace\_id": "trace-abc123", "trace\_name": "my-app-trace" } |
| `user` | *Optional\[str]* | ➖ | Per-end-user identifier for abuse isolation. Use a stable ID, hash, or pseudonym. When a provider requires a user identity, OpenRouter folds it into the hashed identity sent upstream and never forwards it raw. If omitted, requests use an account-level identity, so provider policy blocks can affect the whole account. | user-123 |
| `retries` | [Optional\[utils.RetryConfig\]](../../models/utils/retryconfig.mdx) | ➖ | Configuration to override the default retry behavior of the client. | |

### Response

**[operations.SendChatCompletionRequestResponse](../../operations/sendchatcompletionrequestresponse.mdx)**

### Errors

| Error Type | Status Code | Content Type |
| - | - | - |
| errors.BadRequestResponseError | 400 | application/json |
| errors.UnauthorizedResponseError | 401 | application/json |
| errors.PaymentRequiredResponseError | 402 | application/json |
| errors.ForbiddenResponseError | 403 | application/json |
| errors.NotFoundResponseError | 404 | application/json |
| errors.RequestTimeoutResponseError | 408 | application/json |
| errors.PayloadTooLargeResponseError | 413 | application/json |
| errors.UnprocessableEntityResponseError | 422 | application/json |
| errors.TooManyRequestsResponseError | 429 | application/json |
| errors.InternalServerResponseError | 500 | application/json |
| errors.BadGatewayResponseError | 502 | application/json |
| errors.ServiceUnavailableResponseError | 503 | application/json |
| errors.EdgeNetworkTimeoutResponseError | 524 | application/json |
| errors.ProviderOverloadedResponseError | 529 | application/json |
| errors.OpenRouterDefaultError | 4XX, 5XX | \*/\* |
