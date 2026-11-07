> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Provider Integration

## For providers

If you'd like to be a model provider and sell inference on OpenRouter, [fill out our form](https://openrouter.ai/how-to-list) to get started.

> [!NOTE]
>
> Integrated before the current model document format? The [legacy flat format](https://openrouter.ai/docs/guides/providers/integration-legacy) remains supported for existing integrations.

To be eligible to provide inference on OpenRouter you must have the following:

### 1. List models endpoint

You must implement an endpoint that returns all models that should be served by OpenRouter. Each model is described as a set of typed **input and output modality objects**: every modality owns its capabilities, constraints, passthrough parameters, pricing, and capacity. Only request-scoped prices and capacity entries with no owning modality remain at the document root.

Below is an example of the response format:

```json expandable lines theme={null}
{
  "data": [
    {
      "schema_version": "2.4",

      // Identity (required)
      "id": "anthropic/claude-sonnet-5.5",
      "name": "Anthropic: Claude Sonnet 5.5",
      "hugging_face_id": "", // required if the model is on Hugging Face
      "created": 1690502400,
      "quantization": "fp8", // or null when undeclared
      "tokenizer": "Claude", // optional; the model's tokenizer family
      "description": "Anthropic's flagship model...",

      // Input modalities: each entry owns its constraints, pricing, and capacity
      "input_modalities": [
        {
          "type": "text",
          "supported_inputs": {
            "max_context_length": { "value": 1000000, "unit": "token" }
          },
          "pricing": [
            { "type": "prompt", "unit": "token", "cost_usd": "0.000008" },
            { "type": "cached_prompt", "unit": "token", "cost_usd": "0.000001" },
            { "type": "cache_write", "unit": "token", "cost_usd": "0.00001" }
          ],
          "capacity": [
            { "type": "prompt", "unit": "token", "per": "minute", "value": 1000000 },
            { "type": "cached_prompt", "unit": "token", "per": "minute", "value": 2000000 }
          ]
        },
        {
          "type": "image",
          "supported_inputs": {
            "sources": { "type": "enum", "values": ["url", "base64"] },
            "formats": {
              "type": "enum",
              "values": ["image/png", "image/jpeg", "image/webp", "image/gif"]
            },
            "max_content_size_bytes": { "value": 20971520, "unit": "byte" }
          },
          "pricing": [{ "type": "prompt", "unit": "image", "cost_usd": "0.0048" }]
        },
        {
          "type": "file",
          "supported_inputs": {
            "formats": { "type": "enum", "values": ["application/pdf"] }
          }
        }
      ],

      // Output modalities: each entry owns its parameters, pricing, and capacity
      "output_modalities": [
        {
          "type": "text",
          "max_length": { "value": 128000, "unit": "token" },
          "streaming": true,
          "supported_parameters": {
            "temperature": { "type": "range", "min": 0, "max": 1 },
            "top_p": { "type": "range", "min": 0, "max": 1 },
            "max_tokens": { "type": "integer", "min": 1, "max": 128000, "unit": "token" },
            "stop": { "type": "array", "max_items": 4 },
            "tools": { "type": "boolean" },
            "structured_outputs": { "type": "boolean" },
            "reasoning": { "type": "boolean" }
          },
          "pricing": [
            { "type": "completion", "unit": "token", "cost_usd": "0.000024" },
            { "type": "internal_reasoning", "unit": "token", "cost_usd": "0.000024" }
          ],
          "capacity": [
            { "type": "completion", "unit": "token", "per": "minute", "value": 500000 }
          ]
        }
      ],

      // Root pricing and capacity: request-scoped entries only
      "pricing": [
        { "type": "web_search", "unit": "search", "cost_usd": "0.01" }
      ],
      "capacity": [
        { "type": "request", "unit": "request", "per": "minute", "value": 1000 }
      ],

      // Request-scoped passthrough parameters
      "passthrough_parameters": {
        "service_tier": { "type": "enum", "values": ["standard", "priority"] }
      },

      // Operational fields (optional)
      "deprecation_date": "2025-06-01T15:00:00Z",
      "is_ready": true,
      "is_free": false,
      "service_tier": "priority", // omit for the default tier
      "discount_to_user": 0,
      "openrouter": {
        "slug": "anthropic/claude-sonnet-5.5"
      },
      "datacenters": [{ "country_code": "US", "region": "us-east-1" }],
      "deployment_region": "US"
    }
  ]
}
```

The `id` field should be the exact model identifier that OpenRouter will use when calling your API.

All `cost_usd` fields are in string format to avoid floating point precision issues, and must be in USD.

Valid quantization values are: `int4`, `int8`, `fp4`, `mxfp4`, `nvfp4`, `fp6`, `fp8`, `mxfp8`, `fp16`, `bf16`, `fp32`. Use `null` (or omit the field) when the precision is undeclared.

The optional `tokenizer` field names the tokenizer family the model uses (for example `GPT`, `Claude`, `Llama3`, `Gemini`). Like `quantization`, it describes the model as a whole, so it lives at the root rather than under any modality. Omit it when unknown.

### 2. Modalities

A document must declare at least one input modality and at least one output modality.

#### Input modalities

Valid input modality types are: `text`, `image`, `video`, `audio`, `file`.

```json title="text" lines theme={null}
{
  "type": "text",
  "supported_inputs": {
    "max_context_length": { "value": 1000000, "unit": "token" },
    "max_prompt_length": { "value": 900000, "unit": "token" }
  },
  "pricing": [
    { "type": "prompt", "unit": "token", "cost_usd": "0.000008" },
    { "type": "cached_prompt", "unit": "token", "cost_usd": "0.000001" }
  ],
  "capacity": [
    { "type": "prompt", "unit": "token", "per": "minute", "value": 1000000 },
    { "type": "cached_prompt", "unit": "token", "per": "minute", "value": 2000000 }
  ]
}
```

```json title="image" lines theme={null}
{
  "type": "image",
  "supported_inputs": {
    "sources": { "type": "enum", "values": ["url", "base64"] },
    "formats": { "type": "enum", "values": ["image/png", "image/jpeg", "image/webp", "image/gif"] },
    "detail_levels": { "type": "enum", "values": ["auto", "low", "high"] },
    "references": { "type": "integer", "min": 0, "max": 10 },
    "max_content_size_bytes": { "value": 20971520, "unit": "byte" }
  },
  "pricing": [{ "type": "prompt", "unit": "image", "cost_usd": "0.0048" }]
}
```

```json title="video" lines theme={null}
{
  "type": "video",
  "supported_inputs": {
    "sources": { "type": "enum", "values": ["url", "base64"] },
    "formats": { "type": "enum", "values": ["video/mp4", "video/webm"] },
    "max_duration_seconds": { "value": 60, "unit": "second" },
    "max_content_size_bytes": { "value": 104857600, "unit": "byte" }
  },
  "pricing": [{ "type": "prompt", "unit": "second", "cost_usd": "0.0002" }]
}
```

```json title="audio" lines theme={null}
{
  "type": "audio",
  "supported_inputs": {
    "sources": { "type": "enum", "values": ["url", "base64"] },
    "formats": { "type": "enum", "values": ["audio/wav", "audio/mpeg"] },
    "max_duration_seconds": { "value": 3600, "unit": "second" }
  },
  "pricing": [{ "type": "prompt", "unit": "second", "cost_usd": "0.0001" }]
}
```

```json title="file" lines theme={null}
{
  "type": "file",
  "supported_inputs": {
    "sources": { "type": "enum", "values": ["url", "base64"] },
    "formats": { "type": "enum", "values": ["application/pdf", "text/plain", "text/csv"] },
    "references": { "type": "integer", "min": 0, "max": 5 },
    "max_content_size_bytes": { "value": 52428800, "unit": "byte" }
  }
}
```

Each input modality entry carries:

| Field | Required | Description |
| - | - | - |
| `type` | Yes | The modality discriminator |
| `supported_inputs` | No | Typed constraints for this modality (see below) |
| `pricing` | No | Prices billed against this input (see [Pricing](#3-pricing)) |
| `capacity` | No | Declared throughput limits for this input (see [Capacity](#4-capacity)) |
| `passthrough_parameters` | No | Provider-specific parameters scoped to this input (see [Passthrough Parameters](#5-passthrough-parameters)) |

The `supported_inputs` object uses the same [capability descriptor](#capability-descriptors) grammar as output `supported_parameters`, with closed enums for every known value domain:

| Modality | Constraint fields |
| - | - |
| `text` | `max_context_length`, `max_prompt_length` |
| `image` | `sources`, `formats`, `detail_levels`, `references`, `role`, `max_content_size_bytes` |
| `video` | `sources`, `formats`, `max_duration_seconds`, `max_content_size_bytes` |
| `audio` | `sources`, `formats`, `max_duration_seconds`, `max_content_size_bytes` |
| `file` | `sources`, `formats`, `references`, `max_content_size_bytes` |

Common constraint fields:

* `sources`, how media may be supplied: `url`, `base64`
* `formats`, accepted MIME types, e.g. `image/png`, `image/jpeg`, `image/webp`, `image/gif` for images; `video/mp4`, `video/webm` for video; `audio/wav`, `audio/mpeg` for audio; `application/pdf`, `text/plain`, `text/markdown`, `text/html`, `text/csv`, `application/json` for files
* `detail_levels` (image): `auto`, `low`, `high`, `original`
* `role` (image), the role an image plays in the request: `reference`, `first_frame`, `last_frame`
* `references` (image, file), an integer descriptor for how many reference items a request may include, e.g. `{ "type": "integer", "min": 0, "max": 10 }`
* `max_context_length` (text), the total context window: input and output tokens combined
* `max_prompt_length` (text), the maximum input length alone; declare it only when it differs from the context window

#### Endpoints that do not accept media input

Your endpoint does not have to accept every input modality the OpenRouter model accepts. To list a text-only endpoint for a model that also takes images, keep the `image` entry in `input_modalities` and declare an empty `sources` list:

```json lines theme={null}
{ "type": "image", "supported_inputs": { "sources": { "type": "enum", "values": [] } } }
```

A declared `sources` list is exhaustive: each source it names is turned on for your endpoint and every other source is turned off, so an empty list turns off both URL and inline (base64) input. Requests that carry images are then routed to other providers, and the baseline tests skip the image input checks for your endpoint, so image support is not a launch requirement. List only `base64` or only `url` to accept one source. Video and file input work the same way.

Removing the `image` entry instead does not turn image input off: modality types are detection-only, and an endpoint with no `sources` declaration keeps accepting both sources. A `sources` change is applied when a new endpoint is staged and is held for review on an endpoint OpenRouter already serves (see [Field reference and compatibility](#field-reference-and-compatibility)).

Single-value limits (`max_context_length`, `max_prompt_length`, output `max_length`, `max_duration_seconds`, `max_content_size_bytes`) are objects with a `value` and an optional `unit` (`second`, `pixel`, `byte`, `token`, `character`):

```json lines theme={null}
{ "max_context_length": { "value": 1000000, "unit": "token" } }
```

#### Output modalities

Valid output modality types are: `text`, `image`, `video`, `speech`, `transcription`, `embeddings`, `rerank`, `decisions`, `audio`.

The [Extractions API](https://openrouter.ai/docs/guides/community/extractions.md) (`POST /api/alpha/extractions`) is not an output modality and has no feed field. OpenRouter assigns it per endpoint, as a companion to the endpoint's existing `text` or `decisions` entry, when the upstream route answers field-extraction requests. Keep the feed entry for the route the model already serves and ask your OpenRouter contact to enable the Extractions route for it.

```json title="text" lines theme={null}
{
  "type": "text",
  "max_length": { "value": 128000, "unit": "token" },
  "streaming": true,
  "supported_parameters": {
    "temperature": { "type": "range", "min": 0, "max": 1 },
    "top_p": { "type": "range", "min": 0, "max": 1 },
    "max_tokens": { "type": "integer", "min": 1, "max": 128000, "unit": "token" },
    "stop": { "type": "array", "max_items": 4 },
    "tools": { "type": "boolean" },
    "structured_outputs": { "type": "boolean" },
    "reasoning": { "type": "boolean" }
  },
  "pricing": [
    { "type": "completion", "unit": "token", "cost_usd": "0.000024" },
    { "type": "internal_reasoning", "unit": "token", "cost_usd": "0.000024" }
  ],
  "capacity": [
    { "type": "completion", "unit": "token", "per": "minute", "value": 500000 }
  ]
}
```

```json title="image" lines theme={null}
{
  "type": "image",
  "streaming": false,
  "supported_parameters": {
    "resolution": { "type": "enum", "values": ["1K", "2K", "4K"] },
    "steps": { "type": "integer", "min": 1, "max": 50 },
    "aspect_ratio": { "type": "enum", "values": ["1:1", "16:9", "9:16"] },
    "n": { "type": "integer", "min": 1, "max": 10 },
    "seed": { "type": "boolean" }
  },
  "pricing": [{ "type": "completion", "unit": "image", "cost_usd": "0.05" }],
  "capacity": [
    { "type": "completion", "unit": "image", "per": "minute", "value": 1000 },
    { "type": "concurrency", "unit": "request", "value": 4 }
  ]
}
```

```json title="video" lines theme={null}
{
  "type": "video",
  "streaming": false,
  "supported_parameters": {
    "duration_seconds": { "type": "enum", "values": [5, 10] },
    "resolution": { "type": "enum", "values": ["720p", "1080p"] },
    "aspect_ratio": { "type": "enum", "values": ["16:9", "9:16"] }
  },
  "pricing": [{ "type": "completion", "unit": "second", "cost_usd": "0.05" }]
}
```

```json title="speech" lines theme={null}
{
  "type": "speech",
  "streaming": true,
  "supported_parameters": {
    "voice": { "type": "enum", "values": ["alloy", "verse", "aria"] },
    "speed": { "type": "range", "min": 0.25, "max": 4, "default": 1 },
    "output_format": { "type": "enum", "values": ["mp3", "wav", "opus"] }
  },
  "pricing": [{ "type": "completion", "unit": "character", "cost_usd": "0.000015" }]
}
```

```json title="transcription" lines theme={null}
{
  "type": "transcription",
  "streaming": true,
  "supported_parameters": {
    "language": { "type": "enum", "values": ["auto", "en", "es", "fr"] },
    "timestamps": { "type": "boolean" },
    "diarization": { "type": "boolean" }
  },
  "pricing": [{ "type": "completion", "unit": "second", "cost_usd": "0.0001" }]
}
```

```json title="embeddings" lines theme={null}
{
  "type": "embeddings",
  "supported_parameters": {
    "dimensions": { "type": "enum", "values": [256, 1024, 3072] },
    "encoding_format": { "type": "enum", "values": ["float", "base64"] }
  },
  "pricing": [{ "type": "completion", "unit": "token", "cost_usd": "0.0000001" }]
}
```

```json title="rerank" lines theme={null}
{
  "type": "rerank",
  "supported_parameters": {
    "top_n": { "type": "integer", "min": 1, "max": 100 },
    "return_documents": { "type": "boolean" }
  },
  "pricing": [{ "type": "completion", "unit": "request", "cost_usd": "0.002" }]
}
```

```json title="decisions" lines theme={null}
{
  "type": "decisions",
  "max_choice_options": 255,
  "max_score_levels": 10,
  "supported_parameters": {},
  "pricing": [{ "type": "completion", "unit": "token", "cost_usd": "0.0000004" }]
}
```

```json title="audio" lines theme={null}
{
  "type": "audio",
  "streaming": true,
  "supported_parameters": {
    "voice": { "type": "enum", "values": ["alloy", "verse"] },
    "output_format": { "type": "enum", "values": ["pcm16", "mp3"] }
  },
  "pricing": [{ "type": "completion", "unit": "token", "cost_usd": "0.00008" }]
}
```

Each output modality entry carries:

| Field | Required | Description |
| - | - | - |
| `type` | Yes | The modality discriminator |
| `supported_parameters` | Yes | Descriptor map of the generation parameters this modality accepts. Applied for `text`, `image`, `video`, `speech` and `transcription`; accepted but not ingested on `embeddings`, `rerank`, `decisions` and `audio` |
| `streaming` | No | Whether this output supports native SSE streaming (not applicable to `embeddings` / `rerank`) |
| `max_length` | No | Maximum output length (`text` only) |
| `max_choice_options`, `max_score_levels` | No | Option and level ceilings per Choice and Score question; positive integers (`decisions` only) |
| `pricing` | No | Prices billed against this output (see [Pricing](#3-pricing)) |
| `capacity` | No | Declared throughput limits for this output (see [Capacity](#4-capacity)) |
| `passthrough_parameters` | No | Provider-specific parameters scoped to this output |

#### Capability descriptors

`supported_parameters` and `passthrough_parameters` are maps from parameter name to a typed descriptor describing what the parameter accepts:

| Type | Shape | Meaning |
| - | - | - |
| `range` | `{ "type": "range", "min": 0, "max": 1 }` | Any number in `[min, max]` is valid |
| `integer` | `{ "type": "integer", "min": 1, "max": 128000, "unit": "token" }` | Any integer in `[min, max]` is valid |
| `boolean` | `{ "type": "boolean" }` | Supported (present) or unsupported (absent) |
| `enum` | `{ "type": "enum", "values": ["standard", "priority"] }` | Discrete allowlist of accepted values |
| `array` | `{ "type": "array", "items": { ... }, "max_items": 4 }` | List of values described by `items` |
| `object` | `{ "type": "object", "properties": { ... } }` | Nested object with per-key descriptors |
| `unknown` | `{ "type": "unknown" }` | Accepted, but the value domain is not machine-described |

Descriptors may carry an optional `default` and, for numeric types, a `unit`. An absent key means the parameter is unsupported.

### 3. Pricing

Pricing uses **arrays nested on the modality that owns them**. Each pricing entry has a `type` (the billing kind), a `unit` (the billing basis), and a `cost_usd` string. The `unit` is the base billing unit, not a commitment to a flat price: per-image and per-token prices can scale with parameters declared by the owning modality.

Each pricing scope accepts the units it can bill in. Input entries take `token`, `image`, `megapixel`, `second`, or `character`. Output entries take those units plus `request`. Root `request` entries are always per `request` and `web_search` entries per `search`. Other combinations are rejected at validation time.

The `megapixel` unit prices resolution-scaled media: `cost_usd` is the rate per megapixel (1,000,000 pixels) of media area, so cost scales linearly with the pixel dimensions of the input consumed or output generated. An image output billed at \$0.015 per megapixel declares:

```json lines theme={null}
{ "type": "completion", "unit": "megapixel", "cost_usd": "0.015" }
```

A document that validates is a valid declaration, not a guarantee that every declared SKU is billed today: OpenRouter bills the SKUs its pipeline supports and records the rest, and billing for newly declared SKU shapes lands as support for them does. Declare what you charge; do not tailor the document to what OpenRouter currently bills.

**Input pricing types** (on input modality entries):

| Type | Meaning |
| - | - |
| `prompt` | Cost per unit of this input consumed |
| `cached_prompt` | Cost per unit read from prompt cache |
| `cache_write` | Cost per unit written to prompt cache |

**Output pricing types** (on output modality entries):

| Type | Meaning |
| - | - |
| `completion` | Cost per unit of this output generated |
| `internal_reasoning` | Cost per unit of internal reasoning tokens |

**Request pricing types** (root `pricing` array, the only prices at the root):

| Type | Meaning |
| - | - |
| `request` | Flat cost per request |
| `web_search` | Cost per web search performed |

Do not zero-stuff prices: omit pricing entries for SKUs you don't bill. A genuinely free SKU exposed as a distinct billable line may use `"0"`. A modality with no `pricing` array is simply unpriced.

#### Conditional pricing with `overrides`

Conditional pricing (e.g. long-context tiers) attaches declaratively to the individual pricing entry it modifies, using a `when` predicate:

```json lines theme={null}
{
  "type": "prompt",
  "unit": "token",
  "cost_usd": "0.000002",
  "overrides": [
    {
      "when": { "prompt_tokens": { "gte": 200001 } },
      "cost_usd": "0.000004"
    }
  ]
}
```

For scaled pricing, declare the controlling knobs in `supported_parameters` and attach overrides keyed by those parameter names. A plain predicate map applies **AND** across its keys:

```json lines theme={null}
{
  "type": "completion",
  "unit": "image",
  "cost_usd": "0.03",
  "overrides": [
    { "when": { "resolution": { "equals": "2K" } }, "cost_usd": "0.05" },
    { "when": { "resolution": { "equals": "4K" } }, "cost_usd": "0.09" },
    { "when": { "steps": { "gte": 30 } }, "cost_usd": "0.06" },
    {
      "when": {
        "allOf": [
          { "resolution": { "equals": "4K" } },
          { "steps": { "gte": 30 } }
        ]
      },
      "cost_usd": "0.12"
    }
  ]
}
```

The `when` predicate is either a parameter-to-condition map or a composition using `allOf`, `anyOf`, and `not`. Composition members are predicates, so these operators can be nested. Conditions reuse the operators `equals`, `gte`, `lte`, and `min_items`, with exactly one operator per condition object; a composition object carries exactly one of `allOf`, `anyOf`, or `not`. A plain multi-key map is equivalent to `allOf` over single-key maps.

Override entries are evaluated in order. Among matching predicates, the later entry wins. This makes a resolution-by-steps price matrix expressible without OR nesting. Predicates may reference parameters declared by the owning modality or request-derived quantities such as prompt token count.

#### Cache pricing

Cache prices are first-class SKUs in a modality's `pricing` array. Multiple entries may have the same `type` when their qualifier fields differ. The effective identity of an entry is its `type` together with its qualifiers, so two `cache_write` entries with different TTLs are separate SKUs. Two entries with the same effective identity are invalid.

`ttl_seconds` is the cache lifetime the price applies to. It is a qualifier field, not part of the `type` string, so providers can add lifetimes without expanding the pricing type enum. `implicit` marks provider-initiated caching that the request does not ask for and defaults to `false`. Explicit and implicit cache modes can coexist on one model.

Cache pricing is input-side. Prompt caching stores and re-reads input tokens, so cache entries belong on input modality entries and never on outputs. The word `write` describes writing to the prompt cache, not generated output.

Cache prices are base entries, not overrides. Overrides remain reserved for request-conditional pricing on generation parameters. A provider may take TTL as a request parameter and the price is still modeled as a cache SKU rather than an override. A cache entry may itself carry overrides for genuinely request-conditional pricing, such as a long-context tier raising the cache write rate, but never for TTL differences.

Cache pricing is per modality, so an image input modality can carry its own cache entries at its own rates. A text input modality offering two explicit write lifetimes alongside provider-initiated caching looks like this:

```json lines theme={null}
{
  "type": "text",
  "supported_inputs": {
    "max_context_length": { "value": 1000000, "unit": "token" }
  },
  "pricing": [
    { "type": "prompt", "unit": "token", "cost_usd": "0.000008" },
    { "type": "cached_prompt", "unit": "token", "cost_usd": "0.000001" },
    { "type": "cache_write", "unit": "token", "ttl_seconds": 300, "cost_usd": "0.00001" },
    { "type": "cache_write", "unit": "token", "ttl_seconds": 3600, "cost_usd": "0.00002" },
    { "type": "cache_write", "unit": "token", "ttl_seconds": 86400, "implicit": true, "cost_usd": "0" }
  ]
}
```

#### Time-of-day pricing

Time-dependent prices (peak and off-peak rates) follow the same pattern as cache lifetimes: the time window is a pair of structured qualifier fields on the pricing entry, not an override. Time is not a request parameter, so an override's `when` predicate has nothing to reference.

`utc_start` and `utc_end` are HHMM values in UTC (`0000`–`2359`; the minute component must be `00`–`59`), declared together, and must differ. The window is half-open (it includes `utc_start` and excludes `utc_end`) and may wrap midnight. An entry without a window is the base rate for all other hours. A text modality billed at a higher rate during a peak window looks like this:

```json lines theme={null}
{
  "type": "text",
  "pricing": [
    { "type": "prompt", "unit": "token", "cost_usd": "0.000004" },
    { "type": "prompt", "unit": "token", "utc_start": 800, "utc_end": 1630, "cost_usd": "0.000008" }
  ]
}
```

Time windows are accepted on input and output pricing entries. Like `ttl_seconds`, the window is part of the entry's effective identity, so entries with different windows are separate SKUs and two entries with the same window are invalid.

**Weekly schedules** add the optional `utc_days` qualifier — a non-empty array of UTC weekday names (`"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`, `"saturday"`, `"sunday"`, no repeats), evaluated at the request instant in UTC. With a `utc_start`/`utc_end` window it scopes the window to those days; without one it covers the listed whole days. `utc_days` joins the entry's effective identity alongside the window. A peak window that applies only on weekdays:

```json lines theme={null}
{
  "type": "text",
  "pricing": [
    { "type": "prompt", "unit": "token", "cost_usd": "0.000004" },
    {
      "type": "prompt",
      "unit": "token",
      "utc_days": ["monday", "tuesday", "wednesday", "thursday", "friday"],
      "utc_start": 800,
      "utc_end": 1630,
      "cost_usd": "0.000008"
    }
  ]
}
```

Limitations:

* Up to 2 time windows per model, and all windowed entries must share one set of non-base prices.
* All windowed entries must carry the same `utc_days` set (or none). Day-scoped entries without a `utc_start`/`utc_end` window — i.e. a whole day priced differently from base — are not billable yet.
* Declarations beyond these shapes are accepted by the schema but produce translation warnings and are not billed.
* Your base pricing must be your cheapest (off-peak) rate. Unsupported schedule declarations fall back to the base pricing, so a base price that is the cheapest rate guarantees users are never overcharged while your declaration is reviewed.

#### Which conditional prices are billed

Conditional pricing is honoured only when the pricing strategy OpenRouter assigned to your endpoints can represent it. Two conditions are billable today:

* Long-context tiers (`context_length_tier`): `overrides` with a single `prompt_tokens.gte` predicate on text `prompt`, `completion`, and `cached_prompt` entries, up to two tiers, billed only by the `openai_extended` strategy.
* Time windows (`time_window`): `utc_start`/`utc_end`/`utc_days` on text `prompt`, `completion`, and `cached_prompt` entries, up to two peak windows priced alike, billed by the `openai_extended` and `alibaba` strategies.

Every other conditional price is not billable yet: overrides on cache entries qualified by `ttl_seconds` or `implicit`, overrides on image, audio, video, and request entries, parameter predicates other than `prompt_tokens`, overrides that combine a token threshold with a time window or leave a window half-specified, an `overrides` list that mixes tiers and time windows (a list is billed only when every entry is the same kind), more tiers or windows than the limits above, and any override on an embeddings endpoint, which is billed at the base prompt price. The same applies when your endpoints run on a strategy that lacks the SKUs for a condition, even one listed above.

When a declared override is not billed, the feed is still accepted and the base rate applies. Each ignored override produces an `unsupported_override` warning carrying the JSON path of the declaration and, once the declaration reaches an endpoint, the pricing strategy and the override condition (`time_window` or `context_length_tier`), so nothing is dropped silently. If you see one of these warnings for a shape you need billed, reach out and we will review the strategy assignment with you.

### 4. Capacity

Capacity uses the same typed, scoped placement as pricing. Each input and output modality may carry its own `capacity` array as a sibling of `pricing`. The root `capacity` array holds request-scoped entries only. This adds no new root structure.

Each capacity entry has a `type` describing what is limited, a `unit` giving the basis, a `per` window, and a positive integer `value`:

```json lines theme={null}
{
  "type": "prompt",
  "unit": "token",
  "per": "minute",
  "value": 1000000
}
```

Capacity types reuse the pricing types for the scope that owns them. Input entries use input pricing types, output entries use output pricing types, and root entries use request pricing types. Output and root entries may also use `concurrency` for simultaneous in-flight work. `concurrency` has no `per` window. Valid windows are `minute`, `hour`, and `day`. An absent `capacity` array means the limit is undeclared, not zero.

A capacity entry's identity is its `type`, `unit`, and `per` window together, and two entries with the same identity are invalid. Entries that differ only in their window may coexist, so a per-minute burst limit and a daily quota on the same dimension are both declarable. `concurrency` entries carry no window, so they are unique by `type` and `unit` alone.

Limits declared in different scopes are independent buckets that all apply simultaneously: a per-modality token limit and a root request limit each constrain traffic on their own dimension, and a request is admitted only when every declared limit it consumes against has headroom. Declaring a limit in one scope does not relax or replace a limit in another.

Units are constrained per scope, exactly as pricing units are: an entry accepts any unit its scope (input, output, or root) can bill in, so image capacity is expressed as images per minute (or megapixels per minute for resolution-scaled throughput), video capacity as output seconds per minute, and a mismatched pairing (such as a `prompt` capacity per `search`) is rejected at validation time. Validation is not narrowed to the owning modality's own billing unit, which is why an image output modality may carry a `concurrency` entry in `request` units.

Here is a capacity declaration covering text input, text output, image output, and request scope:

```json title="text input" lines theme={null}
{
  "type": "text",
  "supported_inputs": {
    "max_context_length": { "value": 1000000, "unit": "token" }
  },
  "capacity": [
    { "type": "prompt", "unit": "token", "per": "minute", "value": 1000000 },
    { "type": "cached_prompt", "unit": "token", "per": "minute", "value": 2000000 }
  ]
}
```

```json title="text output" lines theme={null}
{
  "type": "text",
  "supported_parameters": {
    "max_tokens": { "type": "integer", "min": 1, "max": 128000, "unit": "token" }
  },
  "capacity": [
    { "type": "completion", "unit": "token", "per": "minute", "value": 500000 }
  ]
}
```

```json title="image output" lines theme={null}
{
  "type": "image",
  "supported_parameters": {
    "resolution": { "type": "enum", "values": ["1K", "2K", "4K"] }
  },
  "capacity": [
    { "type": "completion", "unit": "image", "per": "minute", "value": 1000 },
    { "type": "concurrency", "unit": "request", "value": 4 }
  ]
}
```

```json title="document root" lines theme={null}
{
  "capacity": [
    { "type": "request", "unit": "request", "per": "minute", "value": 1000 }
  ]
}
```

### 5. Passthrough parameters

Passthrough parameters are provider-specific escape hatches that OpenRouter forwards verbatim, distinct from the normalized `supported_parameters`. They are placed by scope:

* **Request-scoped** parameters (applying to the request as a whole) live in the root `passthrough_parameters` map.
* **Input-scoped** parameters (owned by one input modality, e.g. reference-media controls) live on that input entry.
* **Output-scoped** parameters (generation controls owned by one output modality) live on that output entry.

Each map uses the same [capability descriptor](#capability-descriptors) grammar, so consumers can validate values instead of guessing:

```json lines theme={null}
{
  "passthrough_parameters": {
    "service_tier": { "type": "enum", "values": ["standard", "priority"] },
    "safety_settings": { "type": "object" }
  }
}
```

**Applied.** OpenRouter merges the parameter names from every scope into the endpoint's passthrough allowlist, which controls the `provider.options` keys forwarded to your API. Descriptors are not enforced yet. New endpoints receive the list when they are created; changes to an existing endpoint, including removed names, are reviewed by OpenRouter before they apply. Omit `passthrough_parameters` everywhere to leave the endpoint's current allowlist untouched, or declare an empty map to clear it.

### 6. Datacenters and deployment region

Declare where each endpoint physically serves from:

```json lines theme={null}
{
  "datacenters": [
    { "country_code": "US", "region": "us-east-1" },
    { "country_code": "DE" }
  ],
  "deployment_region": "US"
}
```

* `datacenters[].country_code`: ISO 3166-1 alpha-2 country code.
* `datacenters[].region`: provider-scoped region identifier (e.g. `us-east-1`).
* For providers OpenRouter routes to a dedicated in-region host, these fields set the region of a **new** endpoint: an entry whose declarations resolve to one data region (`deployment_region` `US`, or `datacenters` all in the US, and both agreeing when both are present) is staged pinned to that region, and an entry that later declares a different region OpenRouter also has a host for retires the existing endpoint and stages a new one under the new region. An endpoint already pinned to a region is never re-pinned in place, and a declaration that does not resolve (`global`, mixed regions, or the two fields disagreeing) changes nothing. For every other provider both fields are **detection-only**: OpenRouter compares them against the region configured for the endpoint and flags a mismatch, or an endpoint with no configured region, for review, without changing routing or the region OpenRouter displays.
* `deployment_region`: optional provider-scoped label for the deployment's region or scope (e.g. `US`, `global`). A model deployed to more than one region gets one document per region under the same `id`, each with its own `deployment_region`. Where OpenRouter routes to a dedicated in-region host, each document updates the endpoint pinned to its region and the `global` (or region-less) document updates the unpinned one; a region OpenRouter has no host for reads as global, so two such documents are duplicates and neither is published. It complements `datacenters`, the physical serving locations. OpenRouter does not bill on it; coordinate the vocabulary with us before publishing.

### 7. Operational fields

The operational fields control model availability and routing:

| Field | Description |
| - | - |
| `deprecation_date` | ISO 8601 date or UTC hour. See [Deprecation Date](#deprecation-date) |
| `is_ready` | Launch control. See [Controlling Launch with `is_ready`](#controlling-launch-with-is_ready) |
| `is_free` | Free variant marker. See [Free Model Variants with `is_free`](#free-model-variants-with-is_free) |
| `service_tier` | Service tier of this entry. See [Service tiers](#service-tiers) |
| `variant` | `batch` for the batch endpoint of this `id`. See [Batch endpoints](#batch-endpoints) |
| `discount_to_user` | Fractional user-facing discount. See [Discounts with `discount_to_user`](#discounts-with-discount_to_user) |
| `openrouter.slug` | The OpenRouter slug this model maps to |

#### Deprecation date

If a model is scheduled for deprecation, include the `deprecation_date` field in ISO 8601 format. OpenRouter accepts either a date-only value or a specific UTC hour:

```json lines theme={null}
{
  "id": "anthropic/claude-2.1",
  "deprecation_date": "2025-06-01"
}
```

* Use `YYYY-MM-DD` for date-only deprecations. Date-only values default to 13:00 UTC on that date.
* Use `YYYY-MM-DDTHH:00:00Z` to request a specific UTC hour, for example `2025-06-01T15:00:00Z`.

When OpenRouter's provider monitor detects a deprecation date or time, it will automatically update the endpoint to display deprecation warnings to users. Models past their deprecation time may be automatically hidden from the marketplace.

#### Controlling launch with `is_ready`

By default, when OpenRouter's provider monitor sees a new model in your `/v1/models` response, it auto-stages the endpoint, runs baseline tests, and unhides it (makes it live) once the tests pass and pricing is configured. If you need to upload a model ahead of an announcement, or temporarily take a model offline, set the optional boolean `is_ready` field:

```json lines theme={null}
{
  "id": "your-org/upcoming-model",
  "is_ready": false
}
```

Behavior:

* `is_ready: false` skips baseline tests for newly-staged endpoints, keeping them hidden, and auto-hides any matching endpoint that is currently live. Use this to upload a model in advance of launch, or to take a live model offline coordinated with us.
* `is_ready: true` and an omitted/absent field both preserve the default auto-stage and auto-unhide behavior.

#### Free model variants with `is_free`

If you want to offer a free version of a model, set `is_free: true`:

```json lines theme={null}
{
  "id": "your-org/your-model",
  "is_free": true
}
```

Behavior:

* `is_free: true` marks the endpoint as a free endpoint (`:free` suffix).
* Any pricing sent alongside `is_free: true` is ignored. Free endpoints always have zero cost.
* An omitted field preserves the default behavior (standard paid variant).
* `is_free: false` explicitly marks the entry as paid. If OpenRouter currently serves that model id only as a free endpoint (because you previously sent `is_free: true`), the free endpoint is hidden and a new standard (paid) endpoint is staged in its place. Use this to convert a free model to paid.

You can list both a free and a paid version of the same model. Just always set `is_free: true` on the free one.

#### Service tiers

If you sell more than one grade of capacity for a model, OpenRouter lists each grade as its own [service tier endpoint](https://openrouter.ai/docs/guides/features/service-tiers.md). Users reach it through the `service_tier` request parameter, the `:nitro` and `:floor` variants, and tier-suffixed provider slugs; on open-weight models, priority tier endpoints also compete for default traffic. It carries a tier badge and a `service_tier` value in the endpoints API. There are two ways to publish one; pick the first unless your API already has a tier parameter.

##### Option 1: a dedicated model id (recommended)

Publish the tier as a separate document whose `id` is the standard id plus a tier suffix: `-fast`, `-turbo`, `-highspeed`, or `-prime` for the priority tier, `-flex` for the flex tier. The suffix is your label for the endpoint: it becomes the endpoint's badge and slug (`your-provider/turbo`, `your-provider/prime`), while users select the tier with the standard `service_tier` values.

```json lines theme={null}
[
  { "id": "your-org/your-model", "pricing": [/* standard prices */] },
  { "id": "your-org/your-model-fast", "pricing": [/* priority prices */] }
]
```

OpenRouter recognizes the suffix whenever the standard `id` is also published and lists the endpoint as that tier. Nothing changes in your API: OpenRouter sends requests to the suffixed model id. Each document declares its own context length, limits, and capabilities. The two endpoints are otherwise independent; hiding one has no effect on the other, and if you remove the standard `id` the suffixed endpoint keeps serving as a plain endpoint without the tier label.

##### Option 2: the same id with `service_tier`

Use this when your API selects the tier with a `service_tier` request parameter and echoes the tier that actually served the request as a top-level `service_tier` field in the response. Both halves are required: OpenRouter bills the served tier, so a request your API silently downgraded must come back saying so. Publish one document per tier under the same `id` and mark each non-default document with `service_tier`:

```json lines theme={null}
[
  { "id": "your-org/your-model", "pricing": [/* default tier prices */] },
  { "id": "your-org/your-model", "service_tier": "flex", "pricing": [/* flex prices */] },
  { "id": "your-org/your-model", "service_tier": "priority", "pricing": [/* priority prices */] }
]
```

Accepted values are `flex`, `priority`, and the priority labels `fast`, `turbo`, `highspeed`, and `prime`. A label only changes the endpoint's badge and slug, so publish one per `id`, not several. An omitted field means the default tier. Any other value fails validation and the document is dropped.

Behavior:

* OpenRouter creates a separate endpoint for each tier document, using that document's own pricing, context length, limits, and capabilities. A priority tier with a shorter context window, or a flex tier with fewer supported parameters, declares those differences in its own document.
* OpenRouter sends the endpoint's tier as `service_tier` on every request and reads the served tier back from the response's `service_tier`. A tier endpoint is unhidden automatically only once a baseline request for its tier comes back echoing that same tier; a missing, `null`, or different echo keeps it hidden, with the reason shown in your provider dashboard. There is no allowlist for providers that honor the tier without echoing it, because without the echo OpenRouter cannot tell a served request from a downgraded one. `service_tier` is OpenRouter's vocabulary, not your API's: if your API names a tier differently, for example `standby` for a discounted tier, still publish it as `flex` here and echo `flex`.
* Keep the standard endpoint for the same `id` published and live. When your API serves a lower tier than the one requested, OpenRouter bills the request at your standard endpoint's price for that model, and it needs that endpoint to be live to do so. A tier endpoint is only shown while its standard endpoint is; if the standard endpoint is hidden or removed, OpenRouter hides its tier endpoints as well, and they stay hidden until you re-enable them (from your provider dashboard, or by asking us) once the standard endpoint is back.
* A tier document is staged only once OpenRouter serves the default tier of the same `id`. Publish the default document first, or alongside the tier documents.
* A document cannot combine `is_free: true` with `service_tier`. Free endpoints are a separate variant of the default tier.

Do not combine the two options for one tier. OpenRouter reads `service_tier` first: a document with a tier-suffixed `id` that also carries `service_tier` is treated as a wire-selected tier of that suffixed `id`, so it needs a default-tier document for the suffixed `id` and the suffix is not recognized as the tier. The `passthrough_parameters` example above describes a request parameter you accept, which is unrelated to this field.

#### Batch endpoints

If you serve a model through a batch API, declare its batch endpoint with a second document that repeats the standard document's `id` and sets `"variant": "batch"`. The batch document is a full, independent endpoint declaration: its own pricing, input and output modalities, supported input sources (for example whether image URLs are accepted), context and output limits, streaming, supported parameters, capacity, and the other fields on this page. Nothing is inherited from the standard document, so declare only what your batch API supports.

Batch endpoints need setup on OpenRouter's side, and your feed does not create them. Contact us to enable batch for a model.

The example below publishes a standard and a batch document for Kimi K3. The batch numbers are illustrative.

```json lines theme={null}
{
  "data": [
    {
      "schema_version": "2.4",
      "id": "moonshotai/Kimi-K3",
      "name": "Kimi K3",
      "input_modalities": [
        {
          "type": "text",
          "supported_inputs": { "max_context_length": { "value": 1048576, "unit": "token" } },
          "pricing": [{ "type": "prompt", "unit": "token", "cost_usd": "0.0000012" }]
        },
        {
          "type": "image",
          "supported_inputs": { "sources": { "type": "enum", "values": ["url"] } }
        }
      ],
      "output_modalities": [
        {
          "type": "text",
          "max_length": { "value": 1048576, "unit": "token" },
          "streaming": true,
          "supported_parameters": {},
          "pricing": [{ "type": "completion", "unit": "token", "cost_usd": "0.0000055" }]
        }
      ]
    },
    {
      "schema_version": "2.4",
      "id": "moonshotai/Kimi-K3",
      "variant": "batch",
      "name": "Kimi K3 Batch",
      "input_modalities": [
        {
          "type": "text",
          "supported_inputs": { "max_context_length": { "value": 262144, "unit": "token" } },
          "pricing": [{ "type": "prompt", "unit": "token", "cost_usd": "0.0000006" }]
        }
      ],
      "output_modalities": [
        {
          "type": "text",
          "max_length": { "value": 65536, "unit": "token" },
          "streaming": false,
          "supported_parameters": {
            "max_tokens": { "type": "integer", "min": 1, "max": 65536, "unit": "token" },
            "tools": { "type": "boolean" }
          },
          "pricing": [{ "type": "completion", "unit": "token", "cost_usd": "0.00000275" }]
        }
      ]
    }
  ]
}
```

What the batch document declares differently:

* Text-only input: it declares no image modality, so OpenRouter turns off image input on the batch endpoint while the standard endpoint keeps accepting image URLs. Like any input-source change on an existing endpoint, this waits for review.
* A 262,144-token context, a 65,536-token output limit, and `streaming: false`. OpenRouter does not apply `streaming` from your feed yet, and batch results are never streamed.
* Its own supported parameters (`max_tokens` up to 65,536, and `tools`) and its own prompt and completion prices. Only plain sampling parameters apply from your feed: `tools` and the other capability-tested parameters stay off until OpenRouter's tests pass on the batch endpoint.

Rules:

* A batch document needs a standard document for the same `id`: the default-tier, paid one. A batch document beside only a free or tiered document is dropped.
* A document cannot combine `"variant": "batch"` with `is_free: true` or with `service_tier`. Batch is its own variant, not a service tier.
* Publish one batch document per `id`. An omitted `variant` means the standard endpoint.
* A document that breaks these rules is invalid and dropped. The **Schema validator** tab of your provider dashboard reports it.

Behavior:

* OpenRouter applies a batch document only to a batch endpoint it has already enabled for that model. A batch document for a model without one changes nothing.
* Prices and metadata from the batch document refresh with the regular feed sync, under the same review rules as the standard endpoint (see [Field reference and compatibility](#field-reference-and-compatibility)). The standard document never changes the batch endpoint, and the batch document never changes the standard endpoint.
* If your feed has never published a batch document for an `id`, OpenRouter does not change that model's batch endpoint.
* `is_ready: false` on the batch document hides only the batch endpoint.
* Once your feed has updated a batch endpoint, removing its batch document from an otherwise valid feed hides that batch endpoint. A feed that fails to load never hides anything.

If you serve the [legacy OpenAI-compatible format](https://openrouter.ai/docs/guides/providers/integration-legacy), you can add an optional `batch` object inside `pricing` with `prompt`, `completion`, and `input_cache_read`. It prices the batch endpoint only: it never changes the batch endpoint's other fields, and `is_ready` never hides it. Once your feed has priced a batch endpoint, removing `pricing.batch` from an otherwise valid feed hides that endpoint, as removing a batch document does. If no model in your feed carries `pricing.batch` anymore, OpenRouter no longer hides batch endpoints that only your batch pricing ever updated, though one that a batch document updated before still follows the removal rule above; set `is_ready: false` on a current-format batch document to hide one on purpose. To declare different capabilities for the batch endpoint, publish current-format documents instead.

```json lines theme={null}
{
  "id": "your-org/your-model",
  "pricing": {
    "prompt": "0.0000012",
    "completion": "0.0000055",
    "input_cache_read": "0.0000003",
    "batch": { "prompt": "0.0000006", "completion": "0.00000275", "input_cache_read": "0.00000015" }
  }
}
```

#### Discounts with `discount_to_user`

To offer a discount on the prices users see and pay, include the optional `discount_to_user` field. It's a decimal fraction that OpenRouter applies to your displayed pricing:

```text lines theme={null}
user price = base price × (1 - discount_to_user)
```

```json lines theme={null}
{
  "id": "your-org/your-model",
  "discount_to_user": 0.2
}
```

Behavior:

* `0.2` means users see and pay 20% less than your listed pricing. A `cost_usd` of `"0.000024"` displays as `0.0000192`.
* The discount applies to every priced SKU (prompt, completion, image, cache reads, and so on), including conditional overrides and time windows.
* `0`, an omitted field, or an absent field all mean no discount.
* A negative value applies a markup instead of a discount, so `-0.1` shows prices 10% higher.
* A value of `1` or higher would make the model free (or negative-priced), which isn't a valid discount. The schema rejects it as a validation error, so use a value below `1`.

Send `discount_to_user` as a number, not a string. Unlike the `cost_usd` fields, it isn't quoted.

#### Automatic hiding of endpoints

The following conditions may trigger automatic hiding of endpoints:

* **Model id missing from your feed.** On each poll of your `/v1/models`, a live endpoint whose `id` is no longer present is hidden. Video, text-to-speech, embedding, transcription, and decision models are currently exempt.
* **`is_ready: false`** on a live endpoint. See [Controlling launch with `is_ready`](#controlling-launch-with-is_ready).
* **`is_free: false`** on a model we only served as free: the free endpoint is hidden and a paid endpoint is staged. See [Free model variants with `is_free`](#free-model-variants-with-is_free).
* **Batch document removed.** Dropping the batch document or `pricing.batch` from an otherwise valid feed hides the batch endpoint. See [Batch endpoints](#batch-endpoints).
* **Standard endpoint hidden.** Service-tier endpoints that share the standard endpoint's `id` and set `service_tier` (`flex`, `priority`, ...) are hidden whenever that standard endpoint is hidden or deleted, and stay hidden until unhidden from the dashboard once it is back. Tiers published under their own `id` are independent.
* **Declared region changed.** Only applies if OpenRouter routes to a dedicated in-region host for you. If one of your models moves to a different region that OpenRouter also has a host in, the endpoint pinned to the old region is hidden and a new one is staged in the new region. For all other providers, a region change is only flagged for review. See [Datacenters and deployment region](#6-datacenters-and-deployment-region).
* **Deprecation date reached.** Endpoints at or past their `deprecation_date` are hidden. See [Deprecation date](#deprecation-date).
* **No successful requests for a week.** An endpoint that received a meaningful amount of traffic for seven days without a single successful completion and without any rate-limit (429) responses.
* **Error surge.** A sudden spike of authentication, payment or not-found errors triggers a health check; the endpoint is hidden only if that check fails deterministically.

An endpoint that stays hidden for 30 days is deleted. Unhiding from the provider dashboard re-runs the baseline tests; a hide caused by your feed (`is_ready`, a missing id) is applied again on the next poll unless the feed changes.

### 8. Schema download

The full schema is available as an OpenAPI 3.1 document, in which every closed value domain (modality types, pricing types and units, capacity windows, descriptor types, media sources, formats) surfaces as an explicit `enum`:

[Download the provider schema (OpenAPI 3.1 JSON)](https://openrouter.ai/docs/assets/provider-monitor-schema-v2.openapi.json)

The schema only gains optional fields. Existing fields are never removed, renamed, narrowed, or made required, so a document you publish today keeps validating when we add fields. `schema_version` marks a V2 document: we publish `2.4` in these docs, and any `2.x` value is accepted, so you never need to republish to track it.

#### Field reference and compatibility

OpenRouter polls your feed on every monitor run, but it does not act on every field the schema accepts. Each field has one of five statuses:

* **Applied**: written to your endpoint automatically on every poll. Rows marked *held if set manually* are the exception: when OpenRouter staff set that field by hand, a feed change to it waits in the monitor inbox for review instead of being applied.
* **Reviewed**: the change is placed in the monitor inbox and takes effect only when OpenRouter staff apply it.
* **Detection-only**: compared with what OpenRouter records. A difference opens a review item for OpenRouter staff and never changes the endpoint, its routing, or what users see.
* **Staging-only**: read when OpenRouter first creates a model record from your feed, then never read again. To correct such a value after staging, contact your OpenRouter representative.
* **Ignored**: accepted by the schema, so the validator passes, but no ingestion step reads it. Where noted, the dashboard validator reports a warning.

| Field | Status | Notes |
| - | - | - |
| `schema_version` | Ignored | Its presence is what routes the entry to the current-format parser. A value that is not `2.x` fails parsing and rejects the whole document (validator error `document_schema_version_mismatch`); a valid value is not read afterwards. |
| `id` | Applied | The identifier OpenRouter matches your endpoint by on every poll. Also the fallback for auto-staging when `hugging_face_id` is absent. |
| `hugging_face_id` | Staging-only, detection-only | Matches a new entry to an OpenRouter model at staging. Afterwards a review item opens only when the value resolves to exactly one other OpenRouter model and the attached model has a Hugging Face identifier; any other mismatch is skipped silently. |
| `name` | Ignored | Used only to label the entry in OpenRouter's internal reports; model names come from OpenRouter's catalog. |
| `description` | Staging-only | Prefills the description when OpenRouter staff create a model from your entry. |
| `created` | Ignored | Carried through translation, but no staging or update step writes it. |
| `tokenizer` | Ignored | Carried through translation, but no staging or update step writes it. |
| `quantization` | Applied | Held if set manually. |
| `input_modalities[].type`, `output_modalities[].type` | Detection-only | See [Modalities and auto-staging](#modalities-and-auto-staging). |
| `input_modalities[].supported_inputs.max_context_length` | Applied | Text input only. Becomes the endpoint's context length. Held if set manually. Non-token units are ignored with validator warning `unsupported_limit_unit`. |
| `input_modalities[].supported_inputs.max_prompt_length` | Applied | Text input only. Becomes the endpoint's maximum prompt length. Held if set manually. Non-token units are ignored with validator warning `unsupported_limit_unit`. |
| `input_modalities[].supported_inputs.sources` | Reviewed | Image, video, and file input only (audio has no sources yet, and a `sources` declaration on audio input is silently ignored with no validator warning). Controls whether URL and inline (base64) inputs are accepted. Applied directly when a new endpoint is staged; on an existing endpoint the change waits for review. |
| Other `input_modalities[].supported_inputs` keys (`formats`, `detail_levels`, `references`, `max_content_size_bytes`, and limits on non-text input) | Ignored | OpenRouter does not store or enforce these yet. On image, video, and file input the validator warns `unsupported_input_constraint`; on audio input they are skipped silently. |
| `input_modalities[].supported_parameters` | Ignored | Only `output_modalities[].supported_parameters` on the text output is read. |
| `input_modalities[].streaming` | Ignored | |
| `output_modalities[].max_length` | Applied | Text output only. Becomes the endpoint's maximum completion length. Held if set manually. Non-token units are ignored with validator warning `unsupported_limit_unit`. |
| `output_modalities[].max_choice_options`, `output_modalities[].max_score_levels` | Reviewed | Decisions output only. Become the endpoint features of the same name (ceiling baseline probes). Applied when a new endpoint is staged, held for review afterwards. |
| `output_modalities[].supported_parameters` | Applied | Text output: Plain sampling parameters are applied; parameters OpenRouter verifies by test (`tools`, `tool_choice`, `response_format`, `structured_outputs`, `logprobs`, and the rest of the capability suite) are never enabled from the feed, only by the capability tests passing. Held if set manually. Image, video, speech, and transcription outputs: known keys are read into the media capability columns (applied on staging, reviewed afterwards). Other outputs: not ingested, warning `unsupported_modality_parameters`. |
| `pricing`, `input_modalities[].pricing`, `output_modalities[].pricing` | Applied, reviewed | Token and request priced entries, cache entries, and the documented `overrides` are read. A price change to an entry OpenRouter already prices and a first-time price for an unpriced endpoint apply automatically, and cache-discount entries are added or removed automatically when they look like a discount; any other new or removed entry waits for review, pricing changes on `:free` variants always wait for review, and a batch endpoint's prices apply automatically only from your batch document or `pricing.batch` object. Entries OpenRouter cannot represent yet (for example search pricing, TTL cache tiers, or non-token units) are ignored with validator warnings `unsupported_pricing_entry`, `unsupported_cache_qualifier`, or `unsupported_override`. |
| `input_modalities[].capacity` | Applied | Text input only, and only `type: prompt`, `unit: token`, `per: minute`, which becomes the endpoint's tokens-per-minute capacity. Held if set manually. Every other entry is ignored with validator warning `unsupported_capacity_entry`. |
| `capacity`, `output_modalities[].capacity` | Ignored | Validator warning `unsupported_capacity_entry`. |
| `passthrough_parameters`, `input_modalities[].passthrough_parameters`, `output_modalities[].passthrough_parameters` | Reviewed | All three levels are merged into one list; applied directly when a new endpoint is staged, held for review on an existing endpoint. |
| `deprecation_date` | Applied | Held if set manually. A new entry whose date has passed is not staged. |
| `is_ready` | Applied | `false` hides the endpoint on that poll; see [Controlling launch with `is_ready`](#controlling-launch-with-is_ready). |
| `is_free` | Applied | |
| `service_tier` | Applied | |
| `variant` | Applied | `batch` marks the batch endpoint of this `id`. See [Batch endpoints](#batch-endpoints). |
| `discount_to_user` | Applied | Held if set manually. |
| `openrouter.slug` | Ignored | Not read by ingestion today. OpenRouter fills it in the feed the dashboard generates for you. |
| `datacenters` | Region of new endpoints for providers with an in-region host; detection-only otherwise | See [Datacenters and deployment region](#6-datacenters-and-deployment-region). |
| `deployment_region` | Region of new endpoints for providers with an in-region host; detection-only otherwise | See [Datacenters and deployment region](#6-datacenters-and-deployment-region). |
| `compliance` | Ignored | Retired. See [Retired V2 fields](#retired-v2-fields). |

The validator warnings named above appear in the **Schema validator** tab of your provider dashboard (`https://openrouter.ai/provider/{provider_slug}/dashboard`), which also reports rejected documents and includes a **Generate feed** panel that builds a current-format document from the endpoints OpenRouter already serves for you. The same warnings are logged on every monitor run.

##### Aliases and precedence

The current format has exactly one field per concept, so there is nothing to choose between. The [legacy flat format](https://openrouter.ai/docs/guides/providers/integration-legacy) accepts several aliases, and when an entry carries both the canonical field and an alias the following wins:

| Canonical field | Aliases | Rule |
| - | - | - |
| `max_completion_tokens` | `max_output_tokens`, `max_output_length` | `max_completion_tokens` wins. When it is null or absent, `max_output_tokens` fills it, and `max_output_length` is used only when both are null or absent. |
| `hugging_face_id` | `hf_slug` | `hugging_face_id` wins. `hf_slug` is used only when `hugging_face_id` is absent or blank; when neither is set, `id` is used as the Hugging Face identifier for model matching. |
| `context_length` | `context_window`, `max_context_length`, `max_context_tokens`, `max_model_len` | `context_length` wins. The first alias present with an integer value fills it when it is absent. |
| `supported_sampling_parameters` | `supported_parameters` | `supported_sampling_parameters` wins. |

Send one spelling per concept. When both are present, the losing value is dropped silently and never surfaces as a warning or a review item. The legacy `supported_features` list (`tools`, `json_mode`, `structured_outputs`, `logprobs`, and so on) is parsed and ignored: OpenRouter discovers testable capabilities by running capability tests against the endpoint, so declaring a feature there does not enable it.

##### Fields read only at staging

`hugging_face_id` and `description` are read when OpenRouter first creates a model record from your feed: the first to match or attach the entry to a model, the second to prefill the model's description. After that the model record is owned by OpenRouter and the monitor never updates it from your feed, so changing these values in a published document has no effect. `name`, `created`, and `tokenizer` are accepted but not written at any point. To correct a model's name, description, release date, or Hugging Face identifier, contact your OpenRouter representative.

##### Retired V2 fields

The schema is append-only, so fields are retired rather than repurposed. One root field has been retired:

| Field | Retired | Behavior |
| - | - | - |
| `compliance` | 2026-09-30 | Accepted and ignored. A document that still carries it validates and is ingested; the key is dropped before validation and nothing reads it. |

Any other key the schema does not know, at the root or inside a nested object, rejects the whole document: the schema is strict. A rejected document is dropped from that poll before anything else runs, and the rejection is logged against your provider. The entry is still counted as present in the feed (served but rejected), so the endpoint OpenRouter already serves for it is not treated as removed and is not hidden on that run. Run your feed through the **Schema validator** tab before publishing.

##### Modalities and auto-staging

On an endpoint OpenRouter already serves, `input_modalities[].type` and `output_modalities[].type` are detection-only. Adding, removing, or changing a modality type in your feed opens a review item for OpenRouter staff and does not change the endpoint; the per-modality limits, pricing, capacity, sources, and passthrough parameters listed above are still processed as their rows describe. To change what an existing endpoint accepts or produces, contact us.

A document whose `id` OpenRouter does not serve yet is a new entry. An entry whose `deprecation_date` has passed is skipped. Otherwise the monitor tries to attach it to an existing OpenRouter model:

1. **Hugging Face match (authoritative).** `hugging_face_id` (or, when it is absent, `id`) is matched against the Hugging Face identifier of OpenRouter's models. A single match auto-stages; several matches are held for manual review.
2. **OpenRouter slug match.** When nothing matches by Hugging Face identifier, models that have no Hugging Face identifier (closed-weights and dedicated image, video, audio, and embeddings models) are matched by the name part of their OpenRouter slug. The identifier must be namespaced as `author/name` and the author must match the OpenRouter model's author; a bare name such as `my-model` is held for manual review, as are several matches. Slug matches for `anthropic`, `google`, `openai`, and `x-ai` models are also held for manual review.
3. **No match.** The entry is reported to OpenRouter staff and nothing is staged until they create or attach a model.

A matched entry is staged as a hidden endpoint and put through the baseline test suite. It is unhidden automatically only when every test passes, pricing is present and non-zero (unless `is_free`), `is_ready` is not `false`, you already have a launched endpoint on OpenRouter (and a launched paid endpoint, for a paid entry), and the endpoint serves chat completions: the decision looks at the output modality and the tests run, so a vision model with text output qualifies. Endpoints whose output modality or templates involve embeddings, reranking, decisions, speech-to-text, text-to-speech, image generation, or video generation stay hidden after a passing run until OpenRouter staff unhide them, as do endpoints OpenRouter cannot tell apart from another variant you already serve for the same model and a small list of models whose authors restrict distribution.

##### Legacy format timeline

The [legacy flat format](https://openrouter.ai/docs/guides/providers/integration-legacy) remains supported for existing integrations. We have not set an end-of-support date for it. When we do, we will announce it here and to each provider still publishing it with advance notice, together with what happens to legacy feeds after that date. Use the current format for every new integration, and use **Generate feed** in the dashboard's Schema validator to produce a current-format document from the endpoints OpenRouter already serves for you if you want to migrate ahead of time.

### 9. Auto top up or invoicing

For OpenRouter to use the provider we must be able to pay for inference automatically. This can be done via auto top up or invoicing.

### 10. Uptime monitoring and traffic routing

OpenRouter automatically monitors provider reliability and adjusts traffic routing based on uptime metrics. Your endpoint's uptime is calculated as: **successful requests ÷ total requests** (excluding user errors).

Uptime and routing's reliability signal count the same setup and server errors. Routing also weighs quality and 429s separately. See [Traffic Routing](https://openrouter.ai/docs/guides/providers/traffic-routing.md#reliability) for details.

**Errors that affect your uptime:**

* Authentication issues (401)
* Payment failures (402)
* Model not found (404)
* Other setup errors (405, 408, 410, 421, 423, 424, 426, 498)
* All server errors (500+)
* Mid-stream errors
* Successful requests with error finish reasons

**Errors that DON'T affect uptime:**

* Bad requests (400) - user input errors
* Oversized payloads (413) - user input errors
* Rate limiting (429) - tracked separately
* Geographic restrictions (403) - tracked separately

**Traffic routing thresholds:**

* **Minimum data**: 100+ requests required before uptime calculation begins
* **Normal routing**: 95%+ uptime
* **Degraded status**: 80-94% uptime → receives lower priority
* **Down status**: \<80% uptime → only used as fallback

### 11. Performance metrics

OpenRouter publicly tracks TTFT (time to first token) and throughput (tokens/second) for all providers on each model page.

Throughput is calculated as: **output tokens ÷ generation time**, where generation time includes fetch latency (time from request to first server response), TTFT, and streaming time. This means any queueing on your end will show up in your throughput metrics.

To keep your metrics competitive:

* Return early 429s if under load, rather than queueing requests. If the load comes from one account that is abusing your endpoint, [report it](#abuse-reports) so OpenRouter can act on the account instead of your endpoint rate limiting everyone
* Stream tokens as soon as they're available
* If processing takes time (e.g. reasoning models), send SSE comments as keep-alives so we know you're still working on the request. Otherwise we may cancel with a fetch timeout and fallback to another provider

### 12. Auto Exacto: tool-calling traffic routing

[Auto Exacto](https://openrouter.ai/docs/guides/routing/auto-exacto.md) is a routing step that automatically reorders providers for all requests that include tools. It runs by default on every tool-calling request and may change how much tool-calling traffic your endpoints receive.

#### How traffic is affected

Auto Exacto shifts tool-calling traffic toward providers that perform well on tool-use quality signals. Providers with strong metrics are moved to the front of the routing order and will receive more tool-calling requests, while providers with weaker signals are deprioritized and will see less.

Non-tool-calling traffic is **not affected** by Auto Exacto -- it continues to follow [default routing](https://openrouter.ai/docs/guides/routing/provider-selection.md#default-routing).

#### How ranking factors are determined

Auto Exacto uses three classes of signals, all derived from real traffic and evaluations on your endpoints:

* **Throughput** -- real-time tokens-per-second measured from actual requests routed through your endpoint (visible on the [Performance tab](https://openrouter.ai/models) of any model page).
* **Tool-calling success rate** -- how reliably your endpoint completes tool calls without errors (also visible on the Performance tab).
* **Benchmark data** -- results from internal evaluations we run against provider endpoints. We are actively collecting this data and will make it available in your provider dashboard soon so you can review and run the same benchmarks on your end.

These are the same metrics available in your provider dashboard. Once onboarded, our team can give you access to it.

#### How deprioritization thresholds work

Throughput and tool-calling success rate compare current signal values against the live group of providers serving each model using a **median + MAD** (median absolute deviation) approach. Benchmark accuracy instead uses a historical baseline from the model's early benchmarking window, so once that window closes its cutoff does not move with the current peer group.

Each signal has a different sensitivity:

* **Benchmark accuracy** -- the cutoff is a baseline computed from the first approximately 21 days of benchmarking for that model and benchmark type: the median of per-endpoint scores over that window minus **2 standard deviations** (median − 2σ). Each window opens with the first qualifying result for that model and benchmark type. While a window is still in progress, the baseline is periodically recomputed from all qualifying results collected so far, so a new qualifying result for that benchmark type from any provider can shift the cutoff; after the window closes, the baseline as currently constituted admits no results from later benchmark runs and later changes in another provider's score do not move the cutoff. An endpoint scoring below the cutoff, or missing benchmark data entirely, is deprioritized.
* **Throughput** -- providers falling more than **1.5 standard deviations** below the median are deprioritized. The wider margin accounts for natural throughput variance caused by time-of-day load patterns.
* **Tool-calling success rate** -- providers falling more than **2 standard deviations** below the median are deprioritized. Success rates cluster near 100%, so this wider margin avoids penalizing normal noise while catching genuinely broken endpoints.

A minimum of **4 providers** is required before statistical thresholds are computed for live signals; benchmark thresholds require **4 endpoints** within the applicable baseline window. Below the applicable count, no deprioritization is applied for that signal.

Endpoints are placed into one of three tiers:

1. **Good** -- sufficient data and no signals below threshold. These receive top routing priority.
2. **Insufficient data** -- not enough recent traffic to evaluate. These sort behind known-good providers but ahead of deprioritized ones. An endpoint needs at least 100 general requests (30-minute window) and 200 tool-call requests (2-hour window) before it can be evaluated.
3. **Deprioritized** -- one or more signals fell below threshold. These are routed to last.

Consistent rate limiting (429s) can reduce the volume of successful requests available for evaluation, making it harder for us to collect enough benchmark data to place your endpoint in the top tier. Returning early 429s is still preferred over queueing, but minimizing rate limits where possible helps ensure your endpoint has sufficient data for a fair evaluation.

#### How to improve your ranking

To maximize the tool-calling traffic routed to your endpoints:

* **Maintain high tool-call reliability** -- ensure your endpoint returns well-formed tool call responses consistently.
* **Optimize throughput** -- minimize queueing and stream tokens as soon as they are available (see [Performance Metrics](#11-performance-metrics) above).
* **Return early 429s under load** -- rather than queueing and degrading throughput, return rate limit errors so we can retry with another provider and your metrics stay healthy. If the load is one abusive account, [report it](#abuse-reports) rather than only rate limiting it.

### 13. Provider API

Provider dashboard settings are moving to an API under `https://openrouter.ai/api/v1/providers/{provider_slug}`. Authenticate with an OpenRouter API key from an account that owns the provider or has been added as a member, sent as `Authorization: Bearer <key>`. The routes available today, with request and response schemas, are listed in an OpenAPI 3.1 document at `GET /api/v1/providers/{provider_slug}/openapi`.

#### Endpoint rate limits

`PATCH /api/v1/providers/{provider_slug}/endpoints/{endpoint_id}/limits` sets the requests-per-minute and requests-per-day caps OpenRouter enforces before routing to one of your endpoints. Omitted fields stay unchanged, and `null` removes a cap. `disable_free_endpoint_limits` is accepted only on free-variant endpoints.

```bash theme={null}
curl -X PATCH https://openrouter.ai/api/v1/providers/my-provider/endpoints/$ENDPOINT_ID/limits \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "limit_rpm": 600, "limit_rpd": null }'
```

#### Endpoint visibility

`PATCH /api/v1/providers/{provider_slug}/endpoints/{endpoint_id}/visibility` with `{ "hidden": true }` hides an endpoint: it stops receiving traffic and disappears from OpenRouter listings on the next catalog refresh, usually within a minute. Unhiding re-runs the baseline tests, so it is only available from the provider dashboard. The response echoes `hidden`, which is always `true` for this route; read the endpoint-health route to see the current state after a dashboard unhide.

```bash theme={null}
curl -X PATCH https://openrouter.ai/api/v1/providers/my-provider/endpoints/$ENDPOINT_ID/visibility \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "hidden": true }'
```

#### Endpoint capabilities

`POST /api/v1/providers/{provider_slug}/endpoints/{endpoint_id}/capabilities/disable` removes capabilities from an endpoint (the accepted names are the `capabilities` enum in the provider's OpenAPI document) and excludes them so automated capability tests do not re-enable them. Disabling a capability also disables the capabilities that depend on it; the response lists everything that was removed. Enabling a capability runs the capability tests first, so it is only available from the provider dashboard.

```bash theme={null}
curl -X POST https://openrouter.ai/api/v1/providers/my-provider/endpoints/$ENDPOINT_ID/capabilities/disable \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "capabilities": ["tools"] }'
```

#### Video input

`PATCH /api/v1/providers/{provider_slug}/endpoints/{endpoint_id}/video-input` turns video URLs (`supports_video_urls`), base64 video (`supports_base64_video_input`), or both off for a chat endpoint whose model accepts video but whose deployment does not. Video-generation endpoints are not eligible. OpenRouter routes requests using a disabled source to other providers and skips that source's baseline tests. Image and audio input stay required. Omitted fields stay unchanged, and only `false` is accepted. To turn a source back on, use the endpoint page of the provider dashboard: it runs that source's video test against the endpoint first and turns the source on only if the test passes, so a live endpoint never advertises video input that failed its test. The same off switches are on that page.

```bash theme={null}
curl -X PATCH https://openrouter.ai/api/v1/providers/my-provider/endpoints/$ENDPOINT_ID/video-input \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "supports_video_urls": false }'
```

#### Provider page links

`PATCH /api/v1/providers/{provider_slug}` updates the links shown on your public provider page: `terms_of_service_url`, `privacy_policy_url`, and `status_page_url`. Omitted fields stay unchanged, and `null` or an empty string clears a link. Only `http(s)` URLs are accepted.

```bash theme={null}
curl -X PATCH https://openrouter.ai/api/v1/providers/my-provider \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "status_page_url": "https://status.my-provider.com" }'
```

#### Abuse reports

`POST /api/v1/providers/{provider_slug}/abuse-reports` reports accounts whose traffic to your endpoints breaks OpenRouter's acceptable use policy, including abusive traffic patterns such as automated probing or flooding (`abuse_type: "misuse_of_access/abusive_traffic"`). One report describes one account, and each report must identify the OpenRouter account in one of two ways:

* `requests`: the `x-request-id` (or `request-id`) values your endpoint returned to OpenRouter for the abusive calls. Include each request's `timestamp` if you have it; it narrows the lookup. This works for every provider.
* `user_id`: the hashed user id OpenRouter sent on the request. Only providers whose data policy requires user ids receive this, so most providers should use `requests`.

OpenRouter resolves the request ids to the account on its side; you don't need to know who the user is. Add any context in `notes`. Reports are reviewed by OpenRouter's trust & safety team and flag the resolved account for review; they do not trigger automatic enforcement, and they do not change how OpenRouter routes traffic to you. The flag counts one per provider per UTC day, so repeated reports about the same account on the same day are linked to it but do not raise it further. `report_ref` is optional (e.g. your internal case id). If you send a report with the same `report_ref` again, OpenRouter returns the original receipt instead of filing a duplicate. The response contains one receipt `id` per report, in submission order.

```bash theme={null}
curl -X POST https://openrouter.ai/api/v1/providers/my-provider/abuse-reports \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "reports": [{
      "abuse_type": "misuse_of_access/abusive_traffic",
      "requests": [
        { "request_id": "req_8f3a1c", "timestamp": "2026-10-22T14:05:11Z" },
        { "request_id": "req_8f3a1d", "timestamp": "2026-10-22T14:05:12Z" }
      ],
      "model": "my-model-70b",
      "notes": "~50 rps of single-token prompts from one caller",
      "report_ref": "case-1042"
    }]
  }'
```

The response returns one receipt per report, in submission order. Resending a report with the same `report_ref` returns the same `id`:

```json theme={null}
{
  "results": [{ "id": "0198c3f1-7b9a-7c31-a2d4-5e6f7a8b9c0d", "status": "received" }]
}
```

#### Team members

Owners can share dashboard and API access with teammates. Each person has one of two roles:

| Role | Access |
| - | - |
| `owner` | Full access, including adding and removing members. Owners are managed by OpenRouter. |
| `member` | Full dashboard and API access, except managing members. |

Only owners (and OpenRouter staff) can add or remove members and revoke invites. Members can list members and pending invites.

| Method | Path | What it does |
| - | - | - |
| `GET` | `/api/v1/providers/{provider_slug}/members` | Lists everyone with access and their role. |
| `POST` | `/api/v1/providers/{provider_slug}/members` | Adds a member by email. Send `{ "email": "..." }`. |
| `DELETE` | `/api/v1/providers/{provider_slug}/members/{member_id}` | Removes a member, using the `id` from the list. |
| `GET` | `/api/v1/providers/{provider_slug}/invites` | Lists pending invites, oldest first. |
| `DELETE` | `/api/v1/providers/{provider_slug}/invites/{invite_id}` | Revokes a pending invite, using the `id` from the invites list. |

Adding a member returns one of:

| Status | When |
| - | - |
| `201` | The email belongs to an OpenRouter account, and it now has member access (`is_new: true`). |
| `200` | The account already had member access (`is_new: false`). |
| `202` | No OpenRouter account has that email. A sign-up invite is emailed (`outcome: "invited"`), and the person gets member access once they sign up with that email. Sending again replaces the pending invite. |

Each invite carries an `id`, the invited `email`, `invited_at`, and `expires_at`. Signing up after `expires_at` doesn't grant access; send the invite again. Revoking an invite means signing up with that email no longer grants access.

```bash theme={null}
curl -X POST https://openrouter.ai/api/v1/providers/my-provider/members \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "teammate@my-provider.com" }'
```

Each entry in the list carries:

* `is_current_user`: `true` for the caller, so a client can show the caller their own role.
* `organization`: set when an owner is an organization. The organization's active members are listed as owners, each with the organization's name here.

A row with the organization's name and no `email` stands for the organization itself. It appears when the organization has no active members, or when the request comes from an organization API key whose creator is no longer a member.
