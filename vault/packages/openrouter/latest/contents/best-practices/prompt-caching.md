> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Prompt Caching

> Cache prompt messages

To save on inference costs, you can enable prompt caching on supported providers and models.

Most providers automatically enable prompt caching, but note that some (see Alibaba and Anthropic below) require you to enable it on a per-message basis.

When using caching (whether automatically in supported models, or via the `cache_control` property), OpenRouter uses provider sticky routing to maximize cache hits — see [Provider Sticky Routing](#provider-sticky-routing) below for details.

## Provider Sticky Routing

To maximize cache hit rates, OpenRouter uses **provider sticky routing** to route your subsequent requests to the same provider endpoint after a cached request. This works automatically with both implicit caching (e.g. OpenAI, DeepSeek, Gemini 2.5) and explicit caching (e.g. Anthropic `cache_control` breakpoints).

**How it works:**

* After a request that uses prompt caching, OpenRouter remembers which provider served your request.
* Subsequent requests for the same model are routed to the same provider, keeping your cache warm.
* Sticky routing only activates when the provider's cache read pricing is cheaper than regular prompt pricing, ensuring you always benefit from cost savings.
* If the sticky provider becomes unavailable, OpenRouter automatically falls back to the next-best provider.
* Sticky routing is not used when you specify a manual [provider order](https://openrouter.ai/docs/guides/routing/provider-selection.md) via `provider.order` — in that case, your explicit ordering takes priority.
* Sticky sessions expire after **60 minutes** of inactivity. Each successful request resets the timer. If the sticky provider returns an error, the cache is not updated, allowing the next request to be re-routed.

**Sticky routing granularity:**

Sticky routing is tracked at the account level, per model, and per conversation. By default, OpenRouter identifies conversations by hashing the first system (or developer) message and the first non-system message in each request, so requests that share the same opening messages are routed to the same provider. This means different conversations naturally stick to different providers, improving load-balancing and throughput while keeping caches warm within each conversation.

### Using `session_id` for sticky sessions

For more explicit control over sticky routing, you can pass a `session_id` in your request. When a `session_id` is present, OpenRouter uses it directly as the sticky routing key instead of deriving one from message hashing. This is especially useful for multi-turn agentic workflows where the opening messages may change between requests but you still want to route to the same provider.

You can provide `session_id` in two ways:

* **Request body**: Include `session_id` as a top-level field in your request body. If both are provided, the body value takes precedence.
* **Header**: Set the `x-session-id` HTTP header.

The `session_id` must be at most 256 characters.

If neither is set, OpenRouter falls back to the OpenAI-style `prompt_cache_key` request field as the sticky routing key. Clients that already send `prompt_cache_key` get session-pinned routing without any changes.

```json lines theme={null}
{
  "model": "anthropic/claude-sonnet-5.5",
  "session_id": "my-agent-session-abc123",
  "messages": [
    {
      "role": "user",
      "content": "Continue our conversation..."
    }
  ]
}
```

When `session_id` is set, sticky routing activates on any successful request — even before cache usage is observed — so that subsequent requests in the same session benefit from prompt caching from the start. Without `session_id`, sticky routing only activates after a cache hit is detected.

> [!NOTE]
>
> When using router models like [Auto Router](https://openrouter.ai/docs/guides/routing/routers/auto-router.md) or [Pareto Router](https://openrouter.ai/docs/guides/routing/routers/pareto-router.md), sticky routing also reuses the **resolved model** on a best-effort basis when it remains in the current candidate set, not just the provider. The cache hint is ignored when it falls out of that set, so the router may select a different model on a later turn. See [Auto Router — Session Stickiness](https://openrouter.ai/docs/guides/routing/routers/auto-router.md#session-stickiness) for details.

### Grouping requests across modalities

Beyond sticky routing, OpenRouter uses `session_id` to group your requests in the [Sessions view on the Logs page](https://openrouter.ai/logs?tab=sessions). One `session_id` links requests across conversation turns, retries, and different modalities. This lets you trace a full agent session in one place.

This grouping works across the synchronous endpoints, not just chat completions:

* **Chat and Responses**: send `session_id` in the request body, or the `x-session-id` header.
* **Embeddings, reranking, speech-to-text, text-to-speech, image generation, and video generation**: send the `x-session-id` header. These endpoints do not accept a body `session_id`. They use the value only for grouping, so sticky routing does not apply to them.

The 256-character limit applies to both inputs. Send a consistent `x-session-id` across a multimodal workflow to group all of those generations under one session. For example, an agent transcribes audio, calls a chat model, then generates an image.

> [!NOTE]
>
> The [Batch API](https://openrouter.ai/docs/batch-quickstart.md) does not yet group its generations by `session_id`.

## Inspecting cache usage

To see how much caching saved on each generation, you can:

1. Click the detail button on the [Activity](https://openrouter.ai/activity) page
2. Use the `/api/v1/generation` API, [documented here](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation.md)
3. Check the `prompt_tokens_details` object in the [usage response](https://openrouter.ai/docs/cookbook/administration/usage-accounting.md) included with every API response

The `cache_discount` field in the response body will tell you how much the response saved on cache usage. Some providers, like Anthropic, will have a negative discount on cache writes, but a positive discount (which reduces total cost) on cache reads.

### Usage object fields

The usage object in API responses includes detailed cache metrics in the `prompt_tokens_details` field:

```json lines theme={null}
{
  "usage": {
    "prompt_tokens": 10339,
    "completion_tokens": 60,
    "total_tokens": 10399,
    "prompt_tokens_details": {
      "cached_tokens": 10318,
      "cache_write_tokens": 0
    }
  }
}
```

The key fields are:

* `cached_tokens`: Number of tokens read from the cache (cache hit). When this is greater than zero, you're benefiting from cached content.
* `cache_write_tokens`: Number of tokens written to the cache. This appears on the first request when establishing a new cache entry.

## OpenAI

Caching price changes:

* **Cache writes**: no cost on models before the GPT-5.6 family. GPT-5.6 and later charge cache writes at 1.25x the price of the original input pricing, even with automatic caching — no opt-in required.
* **Cache reads**: (depending on the model) charged at 0.25x or 0.50x the price of the original input pricing

[Click here to view OpenAI's cache pricing per model.](https://platform.openai.com/docs/pricing)

Prompt caching with OpenAI is automated and does not require any additional configuration. There is a minimum prompt size of 1024 tokens. On GPT-5.6 and later you can [turn caching off per request](#disabling-prompt-caching) to avoid the cache-write charge on prompts you will not send again.

[Click here to read more about OpenAI prompt caching and its limitation.](https://platform.openai.com/docs/guides/prompt-caching)

### Explicit prompt caching

Caching price changes:

* **Cache writes (30-minute TTL, default)**: charged at 1.25x the price of the original input pricing (same rate as automatic cache writes on GPT-5.6 and later)
* **Cache writes (12-hour TTL)**: charged at 2.5x the price of the original input pricing
* **Cache reads**: charged at the model's discounted cache read rate, same as automatic caching, regardless of TTL

Explicit prompt caching works on both the [Chat Completions](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion.md) and [Responses](https://openrouter.ai/docs/api/api-reference/responses/create-a-response.md) APIs, and gives you direct control over cache boundaries instead of relying on OpenAI's automatic breakpoint placement. Cached prefixes have a minimum 30-minute TTL by default, or 12 hours with `"ttl": "12h"`. See [OpenAI's explicit prompt caching docs](https://developers.openai.com/api/docs/guides/prompt-caching?prompt-cache-api=chat-completions#prompt-cache-breakpoints) for upstream details.

> [!NOTE]
>
> OpenAI explicit prompt caching is only supported by OpenAI GPT-5.6 and newer.

There are two controls:

* `prompt_cache_breakpoint`: placed on an individual text content block (`input_text` in Responses, `text` in Chat Completions) to mark the end of a reusable prefix. Everything through that block becomes the candidate cached prefix. Automatic caching remains enabled.
* `prompt_cache_options`: placed at the request root. Setting `mode` to `"explicit"` disables OpenAI-managed breakpoints so only blocks marked with `prompt_cache_breakpoint` participate in caching. Use `ttl` to set the minimum cache lifetime for every breakpoint the request writes: `"30m"` (default) or `"12h"`. A `prompt_cache_breakpoint` can carry its own `ttl` to override the request-level value for that boundary, so a long-lived system prompt can be cached for 12 hours while the rest of the conversation keeps the 30-minute default.

Responses API:

```json theme={null}
{
  "model": "openai/...",
  "prompt_cache_key": "my-session-key",
  "prompt_cache_options": {
    "mode": "explicit",
    "ttl": "30m"
  },
  "input": [
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "<REUSABLE_PREFIX>",
          "prompt_cache_breakpoint": {
            "mode": "explicit"
          }
        },
        {
          "type": "input_text",
          "text": "<TASK_SPECIFIC_SUFFIX>"
        }
      ]
    }
  ]
}
```

Chat Completions API:

```json theme={null}
{
  "model": "openai/...",
  "prompt_cache_key": "my-session-key",
  "prompt_cache_options": {
    "mode": "explicit",
    "ttl": "30m"
  },
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "<REUSABLE_PREFIX>",
          "prompt_cache_breakpoint": {
            "mode": "explicit"
          }
        },
        {
          "type": "text",
          "text": "<TASK_SPECIFIC_SUFFIX>"
        }
      ]
    }
  ]
}
```

12-hour TTL for a long-lived system prompt, with the rest of the conversation on the 30-minute default (Chat Completions shown; the Responses API takes the same fields on `input_text` blocks):

```json theme={null}
{
  "model": "openai/...",
  "prompt_cache_options": {
    "mode": "explicit",
    "ttl": "30m"
  },
  "messages": [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "<SHARED_INSTRUCTIONS_AND_TOOLS>",
          "prompt_cache_breakpoint": {
            "mode": "explicit",
            "ttl": "12h"
          }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "<CONVERSATION_SO_FAR>",
          "prompt_cache_breakpoint": {
            "mode": "explicit"
          }
        }
      ]
    }
  ]
}
```

Tokens written with a 12-hour TTL are billed at the 12-hour cache-write rate; the rest of the write is billed at the 30-minute rate. Both are included in `cache_write_tokens` in the response usage.

> [!NOTE]
>
> The block-level markers are interchangeable: a text block marked with Anthropic-style `cache_control` gets a `prompt_cache_breakpoint` when routed to a supporting OpenAI model, and a block marked with `prompt_cache_breakpoint` gets a default (5-minute) `cache_control` when routed to Anthropic or Google. TTLs are not translated — a `cache_control` `ttl` is dropped toward OpenAI, a `prompt_cache_breakpoint` `ttl` is dropped toward Anthropic or Google, and the request-level `prompt_cache_options` stays OpenAI-only.

Cache activity is reported in `usage.input_tokens_details` (Responses) and `usage.prompt_tokens_details` (Chat Completions): `cache_write_tokens` counts prompt tokens written to the cache, and `cached_tokens` counts prompt tokens read from it.

### Disabling prompt caching

Because GPT-5.6 and later bill cache writes at 1.25x the input price whether or not the cached prefix is ever read again, a prompt of 1024 tokens or more that is only sent once costs more with caching on than off. To turn caching off for a request, set `prompt_cache_options.mode` to `"explicit"` and do not mark any content block with `prompt_cache_breakpoint`. Explicit mode disables OpenAI's automatic breakpoints, and with no explicit breakpoints the request has no cacheable prefix, so it is billed at the plain input rate with no cache write.

```json theme={null}
{
  "model": "openai/...",
  "prompt_cache_options": {
    "mode": "explicit"
  },
  "messages": [
    {
      "role": "user",
      "content": "<ONE_OFF_PROMPT>"
    }
  ]
}
```

The same `prompt_cache_options` field works on the Responses API. Prompts under the 1024-token minimum are never cached, so they carry no cache write with either mode. Models before GPT-5.6 have no cache-write cost, so there is nothing to turn off there. When caching is disabled, `cache_write_tokens` in the response usage reads `0`.

## Grok

Caching price changes:

* **Cache writes**: no cost
* **Cache reads**: charged at 0.25x the price of the original input pricing

[Click here to view Grok's cache pricing per model.](https://docs.x.ai/docs/models#models-and-pricing)

Prompt caching with Grok is automated and does not require any additional configuration.

## Moonshot AI

Caching price changes:

* **Cache writes**: no cost
* **Cache reads**: charged at 0.25x the price of the original input pricing

Prompt caching with Moonshot AI is automated and does not require any additional configuration.

## Groq

Caching price changes:

* **Cache writes**: no cost
* **Cache reads**: charged at 0.5x the price of the original input pricing

Prompt caching with Groq is automated and does not require any additional configuration. Currently available on Kimi K2 models.

[Click here to view Groq's documentation.](https://console.groq.com/docs/prompt-caching)

## Alibaba Qwen

Caching price changes for explicit caching:

* **Cache writes**: charged at 1.25x the price of the original input pricing
* **Cache reads**: charged at 0.1x the price of the original input pricing

Alibaba prompt caching requires explicit cache breakpoints. Add `cache_control: { "type": "ephemeral" }` to content blocks you want to cache, using the same syntax as Anthropic explicit caching. Cache writes use a 5-minute TTL.

Alibaba explicit caching is available on `deepseek/deepseek-v3.2`, `qwen/qwen3-max`, `qwen/qwen-plus`, `qwen/qwen3.6-plus`, `qwen/qwen3-coder-plus`, and `qwen/qwen3-coder-flash`. Snapshot endpoints, including `qwen/qwen3.5-plus-02-15` and `qwen/qwen3.5-flash-02-23`, do not support explicit caching.

### Example

```json expandable lines theme={null}
{
  "model": "qwen/qwen3-coder-plus",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Use the reference below when answering."
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY",
          "cache_control": {
            "type": "ephemeral"
          }
        },
        {
          "type": "text",
          "text": "Summarize the main implementation details."
        }
      ]
    }
  ]
}
```

## Anthropic Claude

Caching price changes:

* **Cache writes (5-minute TTL)**: charged at 1.25x the price of the original input pricing
* **Cache writes (1-hour TTL)**: charged at 2x the price of the original input pricing
* **Cache reads**: charged at 0.1x the price of the original input pricing

There are two ways to enable prompt caching with Anthropic:

* **Automatic caching**: Add a single `cache_control` field at the top level of your request. The system automatically applies the cache breakpoint to the last cacheable block and advances it forward as conversations grow. Best for multi-turn conversations.
* **Explicit cache breakpoints**: Place `cache_control` directly on individual content blocks for fine-grained control over exactly what gets cached. There is a limit of four explicit breakpoints. It is recommended to reserve the cache breakpoints for large bodies of text, such as character cards, CSV data, RAG data, book chapters, etc.

> [!NOTE]
>
> **Automatic caching** (top-level `cache_control`) is supported on the **Anthropic**, **Google Vertex AI**, **Azure**, and **Amazon Bedrock** providers, as well as Claude Platform on AWS. On Amazon Bedrock, OpenRouter translates the top-level field into a trailing cache breakpoint ([Bedrock's simplified cache management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html#prompt-caching-simplified)), since Bedrock's InvokeModel API does not accept the top-level field directly. Explicit per-block `cache_control` breakpoints work across all Anthropic-compatible providers including Bedrock and Vertex.

> [!NOTE]
>
> **Responses API support:** The [Responses API](https://openrouter.ai/docs/api/api-reference/responses/create-a-response.md) supports **automatic caching** via top-level `cache_control`. Anthropic-style per-block `cache_control` inside `input` items is **not** exposed through the Responses API — instead use OpenAI's per-block [`prompt_cache_breakpoint`](#explicit-prompt-caching), which OpenRouter converts to a default `cache_control` breakpoint when the request is routed to Anthropic or Google. Note that `prompt_cache_breakpoint` carries no `ttl`; if you need to set a cache `ttl`, use the [Chat Completions](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion.md) or [Anthropic Messages](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message.md) API with `cache_control`.

By default, the cache expires after 5 minutes, but you can extend this to 1 hour by specifying `"ttl": "1h"` in the `cache_control` object.

[Click here to read more about Anthropic prompt caching and its limitation.](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

### Minimum token requirements

Each model has a minimum cacheable prompt length (see [Anthropic's cache limitations](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#cache-limitations)):

* **512 tokens**: Claude Fable 5.1, Claude Opus 5.5, Claude Opus 5, Claude Sonnet 5.5, Claude Fable 5, Claude Haiku 5.5
* **4,096 tokens**: Claude Opus 4.6, Claude Opus 4.5, Claude Haiku 4.5
* **2,048 tokens**: Claude Opus 4.7, Claude Haiku 3.5
* **1,024 tokens**: Claude Opus 4.8, Claude Sonnet 5, Claude Sonnet 4.6, Claude Sonnet 4.5, Claude Opus 4.1, Claude Opus 4, Claude Sonnet 4

Prompts shorter than these minimums will not be cached.

### Cache TTL Options

OpenRouter supports two cache TTL values for Anthropic:

* **5 minutes** (default): `"cache_control": { "type": "ephemeral" }`
* **1 hour**: `"cache_control": { "type": "ephemeral", "ttl": "1h" }`

The 1-hour TTL is useful for longer sessions where you want to maintain cached content across multiple requests without incurring repeated cache write costs. The 1-hour TTL costs more for cache writes (2x base input price vs 1.25x for 5-minute TTL) but can save money over extended sessions by avoiding repeated cache writes. The 1-hour TTL for explicit cache breakpoints is supported across all Claude model providers (Anthropic, Amazon Bedrock, and Google Vertex AI).

### Caching in the Batch API

`cache_control` breakpoints work on Anthropic `:batch` endpoints the same way as on the sync API, but the requests inside a single batch may process concurrently and in any order — a cache written by one line is not guaranteed to be visible to other lines in the same batch. To get reliable cache hits, use `"ttl": "1h"` breakpoints on a shared prefix and reuse that prefix across successive batches (or warm the cache with a sync request first): the first batch pays the cache-write price and later batches read from the cache for as long as it stays warm.

### Examples

#### Automatic caching (recommended for multi-turn conversations)

With automatic caching, add `cache_control` at the top level of the request. The system automatically caches all content up to the last cacheable block:

```json lines theme={null}
{
  "model": "~anthropic/claude-sonnet-latest",
  "cache_control": { "type": "ephemeral" },
  "messages": [
    {
      "role": "system",
      "content": "You are a historian studying the fall of the Roman Empire. You know the following book very well: HUGE TEXT BODY"
    },
    {
      "role": "user",
      "content": "What triggered the collapse?"
    }
  ]
}
```

As the conversation grows, the cache breakpoint automatically advances to cover the growing message history.

Automatic caching with 1-hour TTL:

```json lines theme={null}
{
  "model": "~anthropic/claude-sonnet-latest",
  "cache_control": { "type": "ephemeral", "ttl": "1h" },
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "What is the meaning of life?"
    }
  ]
}
```

#### Explicit cache breakpoints (fine-grained control)

System message caching example (default 5-minute TTL):

```json expandable lines theme={null}
{
  "messages": [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "You are a historian studying the fall of the Roman Empire. You know the following book very well:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY",
          "cache_control": {
            "type": "ephemeral"
          }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What triggered the collapse?"
        }
      ]
    }
  ]
}
```

User message caching example with 1-hour TTL:

```json expandable lines theme={null}
{
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Given the book below:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY",
          "cache_control": {
            "type": "ephemeral",
            "ttl": "1h"
          }
        },
        {
          "type": "text",
          "text": "Name all the characters in the above book"
        }
      ]
    }
  ]
}
```

## DeepSeek

Caching price changes:

* **Cache writes**: charged at the same price as the original input pricing
* **Cache reads**: charged at 0.1x the price of the original input pricing

Prompt caching with DeepSeek is automated and does not require any additional configuration.

## Z.AI

Caching price changes:

* **Cache writes**: no cost (Z.AI currently lists cached input storage as limited-time free)
* **Cache reads**: charged at the discounted cached-input rate shown on each model page (typically about 0.2x the price of the original input pricing)

[Click here to view Z.AI's cache pricing per model.](https://docs.z.ai/guides/overview/pricing)

Prompt caching with Z.AI is automated and does not require any additional configuration. Cache reads are reported in the `cached_tokens` field of `prompt_tokens_details` in the usage response.

[Click here to read more about Z.AI context caching.](https://docs.z.ai/guides/capabilities/cache)

To improve cache hit rates, OpenRouter sends Z.AI a session affinity key with each request, derived from your account and, when provided, your [`session_id`](#using-session_id-for-sticky-sessions). Passing a `session_id` in multi-turn conversations keeps requests from the same session on the same cache.

## Google Gemini

### Implicit Caching

Gemini 2.5 series models and newer support **implicit caching**, providing automatic caching functionality similar to OpenAI’s automatic caching. Implicit caching works seamlessly — no manual setup or additional `cache_control` breakpoints required.

Pricing Changes:

* No cache write or storage costs.
* Cached tokens are charged at 0.25x the original input token cost.

Note that the TTL is on average 3-5 minutes, but will vary. Requests must also meet a minimum prompt size to be eligible for caching, which varies by model: 1024 tokens for Gemini 2.5 Flash and 4096 tokens for Gemini 2.5 Pro.

[Official announcement from Google](https://developers.googleblog.com/en/gemini-2-5-models-now-support-implicit-caching/)

> [!TIP]
>
> To maximize implicit cache hits, keep the initial portion of your message arrays consistent between requests. Push variations (such as user questions or dynamic context elements) toward the end of your prompt/requests.

### Pricing Changes for Cached Requests:

* **Cache Writes:** Charged at the input token cost plus 5 minutes of cache storage, calculated as follows:

```lines theme={null}
Cache write cost = Input token price + (Cache storage price × (5 minutes / 60 minutes))
```

* **Cache Reads:** Charged at 0.25× the original input token cost.

### Supported Models and Limitations:

Only certain Gemini models support caching. Please consult Google's [Gemini API Pricing Documentation](https://ai.google.dev/gemini-api/docs/pricing) for the most current details.

Cache Writes have a 5 minute Time-to-Live (TTL) that does not update. After 5 minutes, the cache expires and a new cache must be written.

Gemini models have typically have a 4096 token minimum for cache write to occur. Cached tokens count towards the model's maximum token usage. Gemini 2.5 Pro has a minimum of 4096 tokens, and Gemini 2.5 Flash has a minimum of 1024 tokens.

### How Gemini Prompt Caching works on OpenRouter:

OpenRouter simplifies Gemini cache management, abstracting away complexities:

* You **do not** need to manually create, update, or delete caches.
* You **do not** need to manage cache names or TTL explicitly.

### How to Enable Gemini Prompt Caching:

Gemini caching in OpenRouter requires you to insert `cache_control` breakpoints explicitly within message content, similar to Anthropic. We recommend using caching primarily for large content pieces (such as CSV files, lengthy character cards, retrieval augmented generation (RAG) data, or extensive textual sources).

> [!TIP]
>
> There is not a limit on the number of `cache_control` breakpoints you can include in your request. OpenRouter will use only the last breakpoint for Gemini caching across normal message content. Including multiple breakpoints is safe and can help maintain compatibility with Anthropic, but only the final one will be used for Gemini.

> [!NOTE]
>
> Gemini has a single `systemInstruction` field, and cached Gemini content treats that `systemInstruction` as immutable. On OpenRouter, this means `cache_control` inside the first `system` or `developer` message can cache the normalized system prompt, but it cannot preserve an uncached dynamic tail inside that same message. If you need part of your prompt to stay dynamic, move that dynamic content into a later `user` message instead of appending it after a cached block in the first `system` message.

### Examples:

#### System Message Caching Example

```json expandable lines theme={null}
{
  "messages": [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "You are a historian studying the fall of the Roman Empire. Below is an extensive reference book:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY HERE",
          "cache_control": {
            "type": "ephemeral"
          }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What triggered the collapse?"
        }
      ]
    }
  ]
}
```

This pattern works when the cached system content is stable across requests. If you need a dynamic prompt segment, place it in a later `user` message rather than as uncached trailing content in the first `system` message.

#### User Message Caching Example

```json expandable lines theme={null}
{
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Based on the book text below:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY HERE",
          "cache_control": {
            "type": "ephemeral"
          }
        },
        {
          "type": "text",
          "text": "List all main characters mentioned in the text above."
        }
      ]
    }
  ]
}
```
