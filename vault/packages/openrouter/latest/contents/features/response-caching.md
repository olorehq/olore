> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Response Caching

> Cache responses for identical API requests to save time and money

Response caching allows you to cache responses for identical API requests. When a cached response is available, OpenRouter returns it immediately from cache with no billing (all billable usage counters are reported as `0`), reducing both latency and cost.

Response caching is **model-agnostic** and works with every model available on OpenRouter across all [supported endpoints](#supported-endpoints), regardless of provider. Caching operates at the OpenRouter layer before the request reaches any provider, so no provider-side support is required.

Both streaming and non-streaming requests are eligible for caching. Only successful (`200 OK`) responses are cached. Error responses, rate limit responses, and partial results are never cached. Responses containing tool calls are cached normally since they are part of a successful completion. For streaming requests, the cached response is replayed through the same streaming pipeline, so the client receives the same content chunks on a cache hit. Each chunk's `id`, `created` timestamp, and `X-Generation-Id` response header identify the new cache-hit generation record.

## Enabling caching

There are two ways to enable response caching:

### 1. Per-request via headers

Add the `X-OpenRouter-Cache` header to enable caching for individual requests:

The first request results in a cache `MISS`. The response is stored and billed normally:

```http title="Response Headers (MISS)" lines theme={null}
HTTP/2 200
X-OpenRouter-Cache-Status: MISS
X-OpenRouter-Cache-TTL: 300
```

```json title="Response Body (MISS)" lines theme={null}
{
  "id": "gen-abc123",
  "object": "response",
  "model": "google/gemini-2.5-flash",
  "status": "completed",
  "output": [
    {
      "id": "msg_abc123",
      "type": "message",
      "status": "completed",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "People define life's meaning in many ways.",
          "annotations": []
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 15,
    "output_tokens": 120,
    "total_tokens": 135
  }
}
```

Sending the same request again returns a cache `HIT` with zeroed usage and no billing. Each cache hit receives its own unique generation ID (note `gen-def456` below, different from the original `gen-abc123`):

```http title="Response Headers (HIT)" lines theme={null}
HTTP/2 200
X-OpenRouter-Cache-Status: HIT
X-OpenRouter-Cache-Age: 12
X-OpenRouter-Cache-TTL: 288
X-Generation-Id: gen-def456
X-OpenRouter-Cache-Source-Id: gen-abc123
```

```json title="Response Body (HIT)" lines theme={null}
{
  "id": "gen-def456",
  "object": "response",
  "created_at": 1746000012,
  "model": "google/gemini-2.5-flash",
  "status": "completed",
  "output": [
    {
      "id": "msg_abc123",
      "type": "message",
      "status": "completed",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "People define life's meaning in many ways.",
          "annotations": []
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 0,
    "output_tokens": 0,
    "total_tokens": 0
  }
}
```

### 2. Via presets

You can enable caching for all requests that use a specific [preset](https://openrouter.ai/docs/guides/features/presets.md) by configuring these fields in the preset:

| Field | Type | Description |
| - | - | - |
| `cache_enabled` | `boolean` | Enable caching for all requests using this preset |
| `cache_ttl_seconds` | `number` | Default TTL for cached responses (1-86400 seconds, default 300) |

When `cache_enabled` is set on a preset, caching is automatically applied to every request that references that preset. No `X-OpenRouter-Cache` header is required.

Example preset configuration:

```json lines theme={null}
{
  "name": "cached-tests",
  "cache_enabled": true,
  "cache_ttl_seconds": 600
}
```

## How it works

Two requests are considered identical when they share the same API key, model, endpoint type, streaming mode, and request body (including all parameters). When caching is enabled, OpenRouter generates a cache key from these inputs. If an identical request has been made before and the cached response has not expired, the cached response is returned immediately. Changing any of these–including the model, endpoint, or switching between streaming and non-streaming–produces a different cache key and a cache miss.

Since caching operates at the OpenRouter layer before the request is forwarded, it works with every model and provider across the [supported endpoint types](#supported-endpoints).

Cache is **scoped to your API key**. Different API keys, even under the same account or organization, do not share cache. Rotating your API key will result in an empty cache for the new key.

> [!NOTE]
>
> **Non-determinism**: Cached responses are returned verbatim regardless of stochastic parameters like `temperature`. If you need fresh responses, use `X-OpenRouter-Cache-Clear: true` or a short TTL.

### Cache key details

The cache key is derived from your **API key**, **model**, **endpoint type**, **streaming mode**, and a **SHA-256 hash of the request body**. Streaming and non-streaming requests are cached separately, so a `stream: true` request will not return a cached non-streaming response and vice versa. The request body is normalized before hashing, so extra whitespace does not affect the cache key. However, the property order of the JSON body is significant:

* Different property ordering in logically identical JSON (e.g. `{"model":"x","input":[]}` vs `{"input":[],"model":"x"}`) will produce different cache keys
* Omitting optional fields vs. explicitly sending defaults (e.g. `temperature: 1.0`) produces different keys
* [Attribution headers](https://openrouter.ai/docs/app-attribution.md#attribution-headers) (e.g. `HTTP-Referer`, `X-Title`) and [provider-specific headers](https://openrouter.ai/docs/guides/routing/provider-selection.md#provider-specific-headers) are **not** part of the cache key
* Multimodal requests (images, audio, video, file attachments) are eligible for caching. The full request body, including base64-encoded content, is included in the hash

### Precedence

Request headers and [preset](https://openrouter.ai/docs/guides/features/presets.md) configuration interact as follows:

1. If a preset explicitly sets `cache_enabled: false`, caching is **disabled** regardless of request headers–the header cannot override a preset opt-out
2. `X-OpenRouter-Cache: false` header **disables** caching even if the preset enables it
3. `X-OpenRouter-Cache: true` **enables** caching when the preset does not configure caching (i.e. `cache_enabled` is absent)–but cannot override a preset that explicitly sets `cache_enabled: false` (rule 1 takes precedence)
4. `X-OpenRouter-Cache-TTL` header **overrides** the preset `cache_ttl_seconds` (default: 300 seconds)
5. If neither header nor preset is set, caching is **off**

### Concurrent requests

If two identical requests arrive simultaneously before the first response is written to cache, both result in a cache `MISS` and are billed independently. There is no request coalescing.

### Supported endpoints

| Endpoint | API Format |
| - | - |
| [`/api/v1/chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion) | OpenAI Chat Completions |
| [`/api/v1/responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response) | OpenAI Responses |
| [`/api/v1/messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message) | Anthropic Messages |
| [`/api/v1/embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request) | OpenAI Embeddings |

Cache keys include an endpoint type discriminator, so requests to different endpoints with identical bodies will not collide.

> [!NOTE]
>
> **Provider caching**: Some providers offer their own prompt caching (e.g. [Anthropic prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), [OpenAI cached context](https://platform.openai.com/docs/guides/prompt-caching)). Provider caching is separate from OpenRouter response caching and the two can be used together. OpenRouter caching operates at the request level before the call reaches the provider, while provider caching operates within the provider's infrastructure.

## Request headers

| Header | Value | Description |
| - | - | - |
| `X-OpenRouter-Cache` | `true` | Enable caching for this request |
| `X-OpenRouter-Cache` | `false` | Disable caching for this request (overrides preset) |
| `X-OpenRouter-Cache-TTL` | `<seconds>` | Custom TTL (1-86400 seconds, default 300) |
| `X-OpenRouter-Cache-Clear` | `true` | Force a cache refresh for this request |

TTL values that cannot be parsed as an integer (i.e., do not begin with digits) are ignored and fall through to the preset or default TTL. Values beginning with digits are accepted even if they contain trailing non-numeric characters (e.g., `60abc` is treated as `60`); decimal values are truncated (e.g., `1.5` is treated as `1`). Numeric values outside the valid range are clamped to `[1, 86400]`.

## Response headers

| Header | Value | Description |
| - | - | - |
| `X-OpenRouter-Cache-Status` | `HIT` or `MISS` | Whether the response was served from cache |
| `X-OpenRouter-Cache-Age` | `<seconds>` | How long the response has been cached (on `HIT` only) |
| `X-OpenRouter-Cache-TTL` | `<seconds>` | Remaining TTL on `HIT`; full TTL on `MISS` |
| `X-OpenRouter-Cache-Source-Id` | `<generation-id>` | The generation ID of the original request that populated the cache entry (on `HIT` only) |

The `X-Generation-Id` header is also present on every response (cached or not) and is not specific to caching. On a cache hit, the generation ID is unique to that hit–it is not reused from the original response.

## TTL (Time-to-Live)

The TTL controls how long a cached response remains valid.

* **Default**: 300 seconds (5 minutes)
* **Range**: 1 second to 86400 seconds (24 hours)

You can customize the TTL per-request using the `X-OpenRouter-Cache-TTL` header, or set a default TTL in your [preset](https://openrouter.ai/docs/guides/features/presets.md) configuration.

## Cache clearing

To force a fresh response for a specific request, send the `X-OpenRouter-Cache-Clear: true` header alongside `X-OpenRouter-Cache: true` (or with a preset that has `cache_enabled: true`). This deletes the existing cached entry for that cache key, makes a new request to the provider, and stores the new response. `X-OpenRouter-Cache-Clear` has no effect unless caching is enabled for the request. This does not clear all cached entries–only the one matching the current request.

The new cache entry uses the TTL from the current request's `X-OpenRouter-Cache-TTL` header, the preset `cache_ttl_seconds`, or the default (300 seconds), following the standard [precedence rules](#precedence).

## Billing

Cache hits are **free**. No tokens are consumed and all billable usage counters are reported as `0`. For the Responses endpoint, `usage.input_tokens`, `usage.output_tokens`, and `usage.total_tokens` are zeroed. For the Chat Completions endpoint, `usage.prompt_tokens`, `usage.completion_tokens`, and `usage.total_tokens` are zeroed. For the Embeddings endpoint, `usage.prompt_tokens` and `usage.total_tokens` are zeroed (`completion_tokens` is not present in embeddings responses). For the Anthropic Messages endpoint, `usage.input_tokens` and `usage.output_tokens` are zeroed. You are only billed for the original request that populates the cache (a cache `MISS`).

Cache hits do not count toward provider rate limits since the request never reaches a provider.

## Limitations

* **Disabled for account-level Zero Data Retention ([ZDR](https://openrouter.ai/docs/guides/features/zdr.md))**: Response caching is not available when account-level ZDR is enforced, since caching requires temporarily storing response data. Per-request `provider.zdr` does not affect cache eligibility.
* **Concurrent identical requests**: If two identical requests arrive before the first response is cached, both result in a `MISS`. See [Concurrent Requests](#concurrent-requests).
* **Cache eviction**: Cached responses may be evicted before TTL expiry under memory pressure. There is no limit on the number of entries you can cache, but eviction under pressure means entries are not guaranteed to survive their full TTL.

## Data retention

Cached responses are stored in edge infrastructure for at most the configured TTL and may be evicted earlier. Only the API key that enabled caching can retrieve them. OpenRouter does not use cached data for training or share it with third parties.

## Use cases

### Agent workflows

When an agent workflow fails partway through, you can resume from the point of failure without re-running and re-paying for identical earlier requests that remain cached. Enable caching at the start of the workflow so retries can reuse prior steps; an evicted entry runs again normally.

### Unit testing

Get repeatable responses for your test suite. After the initial run populates the cache, subsequent identical requests return the same response at zero cost while the entry remains cached. For deterministic results after a cache miss, use `temperature: 0` or a fixed `seed`.

### Repeated identical requests

If your application makes the same request multiple times (same model, same input, same parameters), subsequent calls return immediately at zero cost while the response remains cached. A call after expiry or early eviction hits the provider again and repopulates the cache.

### Monitoring cache effectiveness

Cache hit and miss status is visible in your [Activity log](https://openrouter.ai/logs). Each cached request appears as a separate entry with a cache indicator, and you can filter the log to show only cached or non-cached requests. Every cache hit receives its own unique generation ID, so you can track individual cached responses independently.
