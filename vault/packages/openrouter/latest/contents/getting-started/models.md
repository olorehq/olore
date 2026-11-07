> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Models

> One API for hundreds of models

Explore and browse 400+ models and providers [on our website](https://openrouter.ai/models), or [with our API](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties.md). You can also subscribe to our [RSS feed](https://openrouter.ai/api/v1/models?use_rss=true) to stay updated on new models.

## Query Parameters

The Models API supports query parameters to filter the list of models returned.

### `output_modalities`

Filter models by their output capabilities. Accepts a comma-separated list of modalities or `"all"` to include every model regardless of output type.

When the parameter is omitted, the endpoint returns text-output models only. Models whose output is not text, such as image generators, embedding models, or decision models like [Jev](https://openrouter.ai/typesafe/jev-1.13), are not in the default response. Pass their modality explicitly, or `all`, to discover them. To see decision models at work, try [Decisions Lab](https://openrouter.ai/labs/decisions) or read the [Multimodal Decisions guide](https://openrouter.ai/docs/guides/community/multimodal-decisions.md).

| Value | Description |
| - | - |
| `text` | Models that produce text output (default) |
| `image` | Models that generate images |
| `video` | Models that generate video |
| `audio` | Models that produce audio output |
| `speech` | Text-to-speech models |
| `transcription` | Speech-to-text models |
| `embeddings` | Embedding models |
| `rerank` | Reranking models |
| `decisions` | Decision models such as [Jev](https://openrouter.ai/typesafe/jev-1.13) that return typed judgments instead of text. See [Jev Lab](https://openrouter.ai/labs/jev) and the [Jev gating recipe](https://openrouter.ai/docs/cookbook/building-agents/gate-tool-calls-with-jev.md). Models that pull typed fields out of text, images and PDFs answer on the [Extractions API](https://openrouter.ai/docs/guides/community/extractions.md) (`POST /api/alpha/extractions`); that guide lists them |
| `all` | Include all models, skip modality filtering |

Examples:

```bash lines theme={null}
# Default (text models only)
curl "https://openrouter.ai/api/v1/models"

# Image generation models only
curl "https://openrouter.ai/api/v1/models?output_modalities=image"

# Text and image models
curl "https://openrouter.ai/api/v1/models?output_modalities=text,image"

# Decision models only (e.g. Jev)
curl "https://openrouter.ai/api/v1/models?output_modalities=decisions"

# All models regardless of modality
curl "https://openrouter.ai/api/v1/models?output_modalities=all"
```

The same parameter is available on the [`/v1/models/count`](https://openrouter.ai/docs/api/api-reference/models/get-total-count-of-available-models) endpoint so that counts stay consistent with list results.

### `endpoints`

Filter models by the request API paths they serve, as listed in each model's `endpoints` response field. Accepts a comma-separated list; a model must serve every listed path. Valid values are the request paths OpenRouter routes, for example `/api/v1/chat/completions`, `/api/v1/embeddings`, `/api/alpha/decisions` and `/api/alpha/extractions`; an unknown path returns `400`.

This is the way to list models for a route that is not an output modality. [Extractions](https://openrouter.ai/docs/guides/community/extractions.md) is served by text models and decisions models alike, so `output_modalities` cannot select it; when `endpoints` is set without `output_modalities`, models of every output modality are considered.

```bash lines theme={null}
# Models that serve the Extractions API
curl "https://openrouter.ai/api/v1/models?endpoints=/api/alpha/extractions"

# Decisions models that also serve Extractions
curl "https://openrouter.ai/api/v1/models?endpoints=/api/alpha/decisions,/api/alpha/extractions"
```

### `supported_parameters`

Filter models by the API parameters they support. For example, to find models that support tool calling:

```bash lines theme={null}
curl "https://openrouter.ai/api/v1/models?supported_parameters=tools"
```

### `sort`

Sort models server-side before they're returned. Accepts one of the following values:

| Value | Description |
| - | - |
| `pricing-low-to-high` | Cheapest models first (weighted average of prompt, completion, request, and web\_search pricing) |
| `pricing-high-to-low` | Most expensive models first |
| `context-high-to-low` | Largest context window first |
| `throughput-high-to-low` | Highest tokens/second first (p50 throughput from routing heuristics) |
| `latency-low-to-high` | Lowest time-to-first-token first (p50 latency) |
| `most-popular` | Most tokens processed in the last week |
| `top-weekly` | Same as `most-popular` |
| `newest` | Most recently added to OpenRouter |

Models without data for the requested sort dimension (e.g. no pricing, no throughput heuristics) sort last. Omitting `sort` preserves the default ordering (backward compatible).

```bash lines theme={null}
# Cheapest models first
curl "https://openrouter.ai/api/v1/models?sort=pricing-low-to-high"

# Newest models
curl "https://openrouter.ai/api/v1/models?sort=newest"

# Combine with filters
curl "https://openrouter.ai/api/v1/models?sort=throughput-high-to-low&supported_parameters=tools"
```

## Single Model Lookup

Look up a single model's full details without fetching the entire list:

```
GET /api/v1/model/{author}/{slug}
```

The endpoint resolves aliases automatically. For example, `anthropic/claude-3-5-sonnet` redirects to the canonical `anthropic/claude-3.5-sonnet` and returns its data.

[Variant suffixes](https://openrouter.ai/docs/guides/routing/model-variants/overview.md) are also supported. A catalog variant such as `:free` returns that variant's own entry. A routing variant such as `:nitro` returns the base model's entry, because routing variants are not separate catalog entries:

```bash lines theme={null}
# Look up a specific model
curl "https://openrouter.ai/api/v1/model/openai/gpt-4o"

# Aliases resolve automatically
curl "https://openrouter.ai/api/v1/model/anthropic/claude-3-5-sonnet"

# Catalog variants return their own entry (id: "poolside/laguna-s-2.1:free")
curl "https://openrouter.ai/api/v1/model/poolside/laguna-s-2.1:free"

# Routing variants return the base entry (id: "openai/gpt-4o")
curl "https://openrouter.ai/api/v1/model/openai/gpt-4o:nitro"
```

Returns `404` if the model doesn't exist and isn't an alias for another model, including a catalog variant suffix on a model that has no such entry. The response shape wraps the same Model object used in the list endpoint:

```json lines theme={null}
{
  "data": {
    "id": "openai/gpt-4o",
    "name": "GPT-4o",
    "pricing": { "prompt": "0.0000025", "completion": "0.00001", ... },
    ...
  }
}
```

## Models API Standard

Our [Models API](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties.md) makes the most important information about all LLMs freely available as soon as we confirm it.

### API Response Schema

The Models API returns a standardized JSON response format that provides comprehensive metadata for each available model. This schema is cached at the edge and designed for reliable integration with production applications.

#### Root Response Object

```json lines theme={null}
{
  "data": [
    /* Array of Model objects */
  ],
  "total_count": 150,        // Total number of models matching the query
  "links": {
    "next": "/api/v1/models?offset=500&limit=500" // Next page URL, or null on the last page
  }
}
```

##### Pagination

The list endpoint supports optional `offset` and `limit` query parameters. Pagination is opt-in: when both are omitted, the full list is returned and `links.next` is `null`. When you paginate, `limit` defaults to 500 (max 1000), and `links.next` contains the ready-to-use URL for the next page (or `null` on the last page):

```bash lines theme={null}
curl "https://openrouter.ai/api/v1/models?offset=0&limit=500"
```

#### Model Object Schema

Each model in the `data` array contains the following standardized fields:

| Field | Type | Description |
| - | - | - |
| `id` | `string` | Unique model identifier used in API requests (e.g., `"google/gemini-2.5-pro-preview"`) |
| `canonical_slug` | `string` | Permanent slug for the model that never changes |
| `name` | `string` | Human-readable display name for the model |
| `created` | `number` | Unix timestamp of when the model was added to OpenRouter |
| `description` | `string` | Detailed description of the model's capabilities and characteristics |
| `context_length` | `number` | Maximum context window size in tokens |
| `architecture` | `Architecture` | Object describing the model's technical capabilities |
| `pricing` | `Pricing` | Pricing from the top provider for this model |
| `top_provider` | `TopProvider` | Configuration details for the primary provider |
| `per_request_limits` | Rate limiting information (null if no limits) | |
| `supported_parameters` | `string[]` | Array of supported API parameters for this model |
| `default_parameters` | `object \| null` | Default parameter values for this model (null if none) |
| `expiration_date` | `string \| null` | Deprecation date for the model endpoint (null if not deprecated) |
| `benchmarks` | `Benchmarks \| undefined` | Third-party benchmark rankings (omitted when no data is available) |

#### Architecture Object

```typescript lines theme={null}
{
  "input_modalities": string[], // Supported input types: ["file", "image", "text"]
  "output_modalities": string[], // Supported output types: ["text"]
  "tokenizer": string,          // Tokenization method used
  "instruct_type": string | null // Instruction format type (null if not applicable)
}
```

#### Pricing Object

All pricing values are in USD per token/request/unit. A value of `"0"` indicates the feature is free.

```typescript lines theme={null}
{
  "prompt": string,           // Cost per input token
  "completion": string,       // Cost per output token
  "request": string,          // Fixed cost per API request
  "image": string,           // Cost per image input
  "web_search": string,      // Cost per web search operation
  "internal_reasoning": string, // Cost for internal reasoning tokens
  "input_cache_read": string,   // Cost per cached input token read
  "input_cache_write": string,  // Cost per cached input token write
  "overrides": PricingOverride[] // Optional conditional pricing overrides (see below)
}
```

##### Pricing Overrides

Some endpoints charge different rates under certain conditions. Examples include long-context pricing above a token threshold, or time-based pricing where peak hours cost more. These appear in the optional `pricing.overrides` array:

```json lines theme={null}
{
  // Condition: applies when total prompt tokens are strictly greater than this threshold
  "min_prompt_tokens": 200000,

  // Condition: applies when current UTC time is within this daily window
  "utc_start": 1630,  // Inclusive start as HHMM clock (16:30 UTC)
  "utc_end": 30,      // Exclusive end as HHMM clock (00:30 UTC). A window whose end is not
                      // after its start wraps past midnight, so 0 as the end means end of day;
                      // match wrap-aware: t >= start || t < end

  // Condition: applies only on these UTC weekdays, evaluated at the request instant.
  // Scopes the utc_start/utc_end window (or, without a window, the whole UTC day).
  // Absent means every day.
  "utc_days": ["monday", "tuesday", "wednesday", "thursday", "friday"],

  // Overridden prices, same keys and units as the base pricing object
  "prompt": "0.000005",
  "completion": "0.00002",
  "input_cache_read": "0.0000005",
  "input_cache_write": "0.00000625"
}
```

An entry applies when all of its condition fields match the request. When multiple entries apply, later entries win per key. Price keys absent from an entry inherit the base price. The top-level pricing keys always reflect the price that applies to a request under default conditions; `overrides` carries the conditional exceptions.

For example, a model that charges \$2.50/M input tokens normally and \$5/M beyond 200K prompt tokens:

```json lines theme={null}
"pricing": {
  "prompt": "0.0000025",
  "completion": "0.00001",
  "overrides": [
    {
      "min_prompt_tokens": 200000,
      "prompt": "0.000005",
      "completion": "0.00002"
    }
  ]
}
```

Time-window conditions express peak/off-peak pricing. The `overrides` array always lists every window (peak and off-peak), tiling the full 24-hour day (or, with `utc_days`, the full week): the time-scheduled entries are non-overlapping and exhaustive, so exactly one of them matches any instant and consumers never need a fallback path. That also means the complete schedule is recoverable regardless of when the response was generated. For example, a model that charges half price between 16:30 and 00:30 UTC:

```json lines theme={null}
"pricing": {
  // Top-level prices always reflect the window that applies right now
  // (here: the current UTC time is between 00:30 and 16:30)
  "prompt": "0.00000028",
  "completion": "0.00000042",
  "overrides": [
    {
      "utc_start": 30,
      "utc_end": 1630,
      "prompt": "0.00000028",
      "completion": "0.00000042"
    },
    {
      "utc_start": 1630,
      "utc_end": 30,
      "prompt": "0.00000014",
      "completion": "0.00000021"
    }
  ]
}
```

Entries scoped with `utc_days` express weekly schedules — for example, peak windows that apply only on some days of the week. The day set groups days with identical daily schedules, so a model whose peak window applies Monday through Friday but not on the weekend looks like this:

```json lines theme={null}
"pricing": {
  "prompt": "0.00000028",
  "completion": "0.00000042",
  "overrides": [
    {
      "utc_days": ["monday", "tuesday", "wednesday", "thursday", "friday"],
      "utc_start": 30,
      "utc_end": 1630,
      "prompt": "0.00000056",
      "completion": "0.00000084"
    },
    {
      "utc_days": ["monday", "tuesday", "wednesday", "thursday", "friday"],
      "utc_start": 1630,
      "utc_end": 30,
      "prompt": "0.00000028",
      "completion": "0.00000042"
    },
    {
      "utc_days": ["saturday", "sunday"],
      "prompt": "0.00000028",
      "completion": "0.00000042"
    }
  ]
}
```

New condition fields may be added to the override grammar over time. Consumers should skip entries containing condition fields they do not recognize rather than apply their prices; the top-level pricing keys always reflect the price under default conditions.

#### Top Provider Object

```typescript lines theme={null}
{
  "context_length": number,        // Provider-specific context limit
  "max_completion_tokens": number, // Maximum tokens in response
  "is_moderated": boolean         // Whether content moderation is applied
}
```

Input and output tokens share the model's context window, so `max_completion_tokens` is a ceiling for `max_tokens`, not a guaranteed output size. The effective maximum output for a request is limited by the context remaining after input tokens.

#### Benchmarks Object

Present only on models that have been evaluated in third-party benchmarks. Currently includes [Design Arena](https://designarena.org) rankings.

```typescript lines theme={null}
{
  "design_arena": [
    {
      "arena": string,    // Arena type (e.g. "models", "builders", "agents")
      "category": string, // Category within the arena (e.g. "website", "gamedev")
      "elo": number,      // ELO rating from head-to-head arena battles
      "win_rate": number,  // Win rate percentage
      "rank": number      // Rank within this arena+category (1 = highest ELO)
    }
  ]
}
```

Rankings are computed among models listed on OpenRouter, not the full external leaderboard. Models without benchmark data omit the `benchmarks` field entirely.

```bash lines theme={null}
# Find models with benchmark data
curl -s "https://openrouter.ai/api/v1/models" | jq '.data[] | select(.benchmarks) | {id, benchmarks}'
```

#### Supported Parameters

The `supported_parameters` array indicates which OpenAI-compatible parameters work with each model:

* `tools` - Function calling capabilities
* `tool_choice` - Tool selection control
* `max_tokens` - Response length limiting
* `temperature` - Randomness control
* `top_p` - Nucleus sampling
* `reasoning` - Internal reasoning mode
* `include_reasoning` - Include reasoning in response
* `structured_outputs` - JSON schema enforcement
* `response_format` - Output format specification
* `stop` - Custom stop sequences
* `frequency_penalty` - Repetition reduction
* `presence_penalty` - Topic diversity
* `seed` - Deterministic outputs

> [!NOTE]
>
> **Different models tokenize text in different ways**
>
> Some models break up text into chunks of multiple characters (GPT, Claude, Llama, etc), while others tokenize by character (PaLM). This means that token counts (and therefore costs) will vary between models, even when inputs and outputs are the same. Costs are displayed and billed according to the tokenizer for the model in use. You can use the `usage` field in the response to get the token counts for the input and output.

If there are models or providers you are interested in that OpenRouter doesn't have, please tell us about them in our [Discord channel](https://openrouter.ai/discord).

## For Providers

If you're interested in working with OpenRouter, you can learn more on our [providers page](https://openrouter.ai/docs/guides/providers/integration.md).
