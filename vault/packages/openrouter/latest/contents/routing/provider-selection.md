> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Provider Routing

> Route requests to the best provider

OpenRouter routes requests to the best available providers for your model. By default, [OpenRouter routes each request](#default-routing) based on each provider's measured price, throughput, latency, and reliability.

You can customize how your requests are routed using the `provider` object in the request body for the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) and [Chat Completions](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion.md).

The `provider` object can contain the following fields:

| Field | Type | Default | Description |
| - | - | - | - |
| `order` | string\[] | - | List of provider slugs to try in order (e.g. `["anthropic", "openai"]`). [Learn more](#ordering-specific-providers) |
| `allow_fallbacks` | boolean | `true` | Whether to allow backup providers when the primary is unavailable. [Learn more](#disabling-fallbacks) |
| `require_parameters` | boolean | `false` | Only use providers that support all parameters in your request. [Learn more](#requiring-providers-to-support-all-parameters) |
| `data_collection` | "allow" \| "deny" | "allow" | Control whether to use providers that may store data. [Learn more](#requiring-providers-to-comply-with-data-policies) |
| `zdr` | boolean | - | Restrict routing to only ZDR (Zero Data Retention) endpoints. [Learn more](#zero-data-retention-enforcement) |
| `enforce_distillable_text` | boolean | - | Restrict routing to only models that allow text distillation. [Learn more](#distillable-text-enforcement) |
| `only` | string\[] | - | List of provider slugs to allow for this request. [Learn more](#allowing-only-specific-providers) |
| `ignore` | string\[] | - | List of provider slugs to skip for this request. [Learn more](#ignoring-providers) |
| `quantizations` | string\[] | - | List of quantization levels to filter by (e.g. `["int4", "int8"]`). [Learn more](#quantization) |
| `sort` | string \| object | - | Sort providers by price, throughput, or latency. Can be a string (e.g. `"price"`) or an object with `by` and `partition` fields. [Learn more](#provider-sorting) |
| `preferred_min_throughput` | number \| object | - | Preferred minimum throughput (tokens/sec). Can be a number or an object with percentile cutoffs (p50, p75, p90, p99). [Learn more](#performance-thresholds) |
| `preferred_max_latency` | number \| object | - | Preferred maximum latency (seconds). Can be a number or an object with percentile cutoffs (p50, p75, p90, p99). [Learn more](#performance-thresholds) |
| `max_price` | object | - | The maximum pricing you want to pay for this request. [Learn more](#max-price) |

> [!NOTE]
>
> **Regional data residency (Business and Enterprise)**
>
> OpenRouter supports in-region routing in the EU and US on the Business and Enterprise plans. There is no provider preference or setting to turn on: send the request to `https://eu.openrouter.ai` or `https://us.openrouter.ai`, and its prompts and completions are processed entirely within that region. Learn more in the [In-Region Routing guide](https://openrouter.ai/docs/guides/features/in-region-routing.md).

## Default Routing

For each model in your request, OpenRouter picks a provider by comparing what a good response would actually cost you at each one, not by list price alone. Each input is measured from recent production traffic, so routing reacts within minutes when a provider gets faster, slower, or less reliable:

* **Effective price**: the price the provider actually charges, reflecting its real cache hit rate and its typical mix of input and output tokens.
* **Throughput**: end-to-end output tokens per second. A faster provider can charge more and still win your request.
* **Time to first token (TTFT)**: how long you wait before the response starts streaming.
* **Rate limits**: how often the provider rejects requests with a 429 because it is out of capacity.
* **Reliability**: how often requests fail because of the provider.
* **Quality**: whether the provider's tool calls come back well formed.

Providers close to the best share most of the traffic, and each request picks one at random, weighted by those shares. Providers far behind still get a small share, so routing notices when they improve. On top of the shares:

* A provider whose errors or 429s are far worse than the model's other providers gets no traffic until it recovers.
* Routing learns how much load each provider can take before it returns 429s, and sends the rest to other providers.
* A burst of 429s or a jump in latency briefly lowers a provider's share.

If a request fails, the retry is picked the same way from the providers that are left. Follow-up requests in a conversation stay with the same provider while its [prompt cache](https://openrouter.ai/docs/guides/best-practices/prompt-caching.md) is warm.

For more detail on each input, see [How OpenRouter Routes Traffic Between Providers](https://openrouter.ai/docs/guides/providers/traffic-routing.md).

> [!TIP]
>
> When you send a request with `tools` or `tool_choice`, OpenRouter makes a best effort to route to providers known to support tool use. Similarly, if you set `max_output_tokens` (or `max_tokens` on Chat Completions), then OpenRouter will only route to providers that support a response of that length.

Default routing applies whenever you leave the choice of provider to OpenRouter. It is bypassed when you set `sort` (or a default provider sort in your [account settings](https://openrouter.ai/settings/preferences)), use the `:floor` or `:nitro` shortcuts, set `order`, or use your own provider key. If you set `only` or `ignore` and two or more providers remain, default routing picks among them.

## Provider Sorting

As described above, default routing balances price against throughput, latency, and reliability.

If you instead want to *explicitly* prioritize a particular provider attribute, you can include the `sort` field in the `provider` preferences. Default routing is bypassed, and the router will try providers in that order.

The three sort options are:

* `"price"`: prioritize lowest price
* `"throughput"`: prioritize highest throughput
* `"latency"`: prioritize lowest latency

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'meta-llama/llama-3.3-70b-instruct',
    input: 'Hello',
    provider: {
      sort: 'throughput',
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'meta-llama/llama-3.3-70b-instruct',
    input: 'Hello',
    provider: {
      sort: 'throughput',
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'meta-llama/llama-3.3-70b-instruct',
  'input': 'Hello',
  'provider': {
    'sort': 'throughput',
  },
})
```

To *always* prioritize low prices instead of using default routing, set `sort` to `"price"`.

To *always* prioritize low latency instead of using default routing, set `sort` to `"latency"`.

## Nitro Shortcut

You can append `:nitro` to any model slug as a shortcut to sort by throughput. In addition to the throughput sort, `:nitro` makes [priority service tier](https://openrouter.ai/docs/guides/features/service-tiers.md) endpoints eligible for the request, so it is a superset of setting `provider.sort` to `"throughput"` (which only sorts). `:nitro` is a [routing variant](https://openrouter.ai/docs/guides/routing/model-variants/overview.md): it is not a separate entry in the models API, and the model's metadata is the base model's. See the [Nitro variant docs](https://openrouter.ai/docs/guides/routing/model-variants/nitro.md) for details.

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'meta-llama/llama-3.3-70b-instruct:nitro',
    input: 'Hello',
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'meta-llama/llama-3.3-70b-instruct:nitro',
    input: 'Hello',
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'meta-llama/llama-3.3-70b-instruct:nitro',
  'input': 'Hello',
})
```

## Floor Price Shortcut

You can append `:floor` to any model slug as a shortcut to sort by price. In addition to the price sort, `:floor` makes [flex service tier](https://openrouter.ai/docs/guides/features/service-tiers.md) endpoints eligible for the request, so it is a superset of setting `provider.sort` to `"price"` (which only sorts). `:floor` is a [routing variant](https://openrouter.ai/docs/guides/routing/model-variants/overview.md): it is not a separate entry in the models API, and the model's metadata is the base model's. See the [Floor variant docs](https://openrouter.ai/docs/guides/routing/model-variants/floor.md) for details.

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'meta-llama/llama-3.3-70b-instruct:floor',
    input: 'Hello',
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'meta-llama/llama-3.3-70b-instruct:floor',
    input: 'Hello',
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'meta-llama/llama-3.3-70b-instruct:floor',
  'input': 'Hello',
})
```

## Advanced Sorting with Partition

When using [model fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks.md), the `sort` field can be specified as an object with additional options to control how endpoints are sorted across multiple models.

| Field | Type | Default | Description |
| - | - | - | - |
| `sort.by` | string | - | The sorting strategy: `"price"`, `"throughput"`, or `"latency"`. |
| `sort.partition` | string | `"model"` | How to group endpoints for sorting: `"model"` (default) or `"none"`. |

By default, when you specify multiple models (fallbacks), OpenRouter groups endpoints by model before sorting. This means the primary model's endpoints are always tried first, regardless of their performance characteristics. Setting `partition` to `"none"` removes this grouping, allowing endpoints to be sorted globally across all models.

To explicitly use the default behavior, set `partition: "model"`. For more details on how model fallbacks work, see [Model Fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks.md).

> [!NOTE]
>
> `preferred_max_latency` and `preferred_min_throughput` do *not* guarantee you will get a provider or model with this performance level. However, providers and models that hit your thresholds will be preferred. Specifying these preferences should therefore never prevent your request from being executed. This is different than `max_price`, which will prevent your request from running if the price is not available.

### Use Case 1: Route to the Highest Throughput or Lowest Latency Model

When you have multiple acceptable models and want to use whichever has the best performance right now, use `partition: "none"` with throughput or latency sorting. This is useful when you care more about speed than using a specific model.

```typescript title="TypeScript SDK" expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'throughput',
        partition: 'none',
      },
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'throughput',
        partition: 'none',
      },
    },
  }),
});
```

```python title="Python" expandable lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'models': [
    'anthropic/claude-sonnet-4.5',
    'openai/gpt-5-mini',
    'google/gemini-3-flash-preview',
  ],
  'input': 'Hello',
  'provider': {
    'sort': {
      'by': 'throughput',
      'partition': 'none',
    },
  },
})
```

```bash title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "models": [
      "anthropic/claude-sonnet-4.5",
      "openai/gpt-5-mini",
      "google/gemini-3-flash-preview"
    ],
    "input": "Hello",
    "provider": {
      "sort": {
        "by": "throughput",
        "partition": "none"
      }
    }
  }'
```

In this example, OpenRouter will route to whichever endpoint across all three models currently has the highest throughput, rather than always trying Claude first.

## Performance Thresholds

You can set minimum throughput or maximum latency thresholds to filter endpoints. Endpoints that don't meet these thresholds are deprioritized (moved to the end of the list) rather than excluded entirely.

| Field | Type | Default | Description |
| - | - | - | - |
| `preferred_min_throughput` | number \| object | - | Preferred minimum throughput in tokens per second. Can be a number (applies to p50) or an object with percentile cutoffs. |
| `preferred_max_latency` | number \| object | - | Preferred maximum latency in seconds. Can be a number (applies to p50) or an object with percentile cutoffs. |

### How Percentiles Work

OpenRouter tracks latency and throughput metrics for each model and provider using percentile statistics calculated over a rolling 5-minute window. The available percentiles are:

* **p50** (median): 50% of requests perform better than this value
* **p75**: 75% of requests perform better than this value
* **p90**: 90% of requests perform better than this value
* **p99**: 99% of requests perform better than this value

Higher percentiles (like p90 or p99) give you more confidence about worst-case performance, while lower percentiles (like p50) reflect typical performance. For example, if a model and provider has a p90 latency of 2 seconds, that means 90% of requests complete in under 2 seconds.

When you specify multiple percentile cutoffs, all specified cutoffs must be met for a model and provider to be in the preferred group. This allows you to set both typical and worst-case performance requirements.

### When to Use Percentile Preferences

Percentile-based routing is useful when you need predictable performance characteristics:

* **Real-time applications**: Use p90 or p99 latency thresholds to ensure consistent response times for user-facing features
* **Batch processing**: Use p50 throughput thresholds when you care more about average performance than worst-case scenarios
* **SLA compliance**: Use multiple percentile cutoffs to ensure providers meet your service level agreements across different performance tiers
* **Cost optimization**: Combine with `sort: "price"` to get the cheapest provider that still meets your performance requirements

### Use Case 2: Find the Cheapest Model Meeting Performance Requirements

Combine `partition: "none"` with performance thresholds to find the cheapest option across multiple models that meets your performance requirements. This is useful when you have a performance floor but want to minimize costs.

```typescript title="TypeScript SDK" expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
      preferredMinThroughput: {
        p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
      preferred_min_throughput: {
        p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
  }),
});
```

```python title="Python" expandable lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'models': [
    'anthropic/claude-sonnet-4.5',
    'openai/gpt-5-mini',
    'google/gemini-3-flash-preview',
  ],
  'input': 'Hello',
  'provider': {
    'sort': {
      'by': 'price',
      'partition': 'none',
    },
    'preferred_min_throughput': {
      'p90': 50, # Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
    },
  },
})
```

```bash title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "models": [
      "anthropic/claude-sonnet-4.5",
      "openai/gpt-5-mini",
      "google/gemini-3-flash-preview"
    ],
    "input": "Hello",
    "provider": {
      "sort": {
        "by": "price",
        "partition": "none"
      },
      "preferred_min_throughput": {
        "p90": 50
      }
    }
  }'
```

In this example, OpenRouter will find the cheapest model and provider across all three models that has at least 50 tokens/second throughput at the p90 level (meaning 90% of requests achieve this throughput or better). Models and providers below this threshold are still available as fallbacks if all preferred options fail.

You can also use `preferred_max_latency` to set a maximum acceptable latency:

```typescript title="TypeScript SDK" expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
      preferredMaxLatency: {
        p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
      },
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
      preferred_max_latency: {
        p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
      },
    },
  }),
});
```

```python title="Python" expandable lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'models': [
    'anthropic/claude-sonnet-4.5',
    'openai/gpt-5-mini',
  ],
  'input': 'Hello',
  'provider': {
    'sort': {
      'by': 'price',
      'partition': 'none',
    },
    'preferred_max_latency': {
      'p90': 3, # Prefer providers with <3 second latency for 90% of requests in last 5 minutes
    },
  },
})
```

```bash title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "models": [
      "anthropic/claude-sonnet-4.5",
      "openai/gpt-5-mini"
    ],
    "input": "Hello",
    "provider": {
      "sort": {
        "by": "price",
        "partition": "none"
      },
      "preferred_max_latency": {
        "p90": 3
      }
    }
  }'
```

### Example: Using Multiple Percentile Cutoffs

You can specify multiple percentile cutoffs to set both typical and worst-case performance requirements. All specified cutoffs must be met for a model and provider to be in the preferred group.

```typescript title="TypeScript SDK" expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'deepseek/deepseek-v3.2',
    input: 'Hello',
    provider: {
      preferredMaxLatency: {
        p50: 1, // Prefer providers with <1 second latency for 50% of requests in last 5 minutes
        p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
        p99: 5, // Prefer providers with <5 second latency for 99% of requests in last 5 minutes
      },
      preferredMinThroughput: {
        p50: 100, // Prefer providers with >100 tokens/sec for 50% of requests in last 5 minutes
        p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'deepseek/deepseek-v3.2',
    input: 'Hello',
    provider: {
      preferred_max_latency: {
        p50: 1, // Prefer providers with <1 second latency for 50% of requests in last 5 minutes
        p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
        p99: 5, // Prefer providers with <5 second latency for 99% of requests in last 5 minutes
      },
      preferred_min_throughput: {
        p50: 100, // Prefer providers with >100 tokens/sec for 50% of requests in last 5 minutes
        p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
  }),
});
```

```python title="Python" expandable lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'deepseek/deepseek-v3.2',
  'input': 'Hello',
  'provider': {
    'preferred_max_latency': {
      'p50': 1, # Prefer providers with <1 second latency for 50% of requests in last 5 minutes
      'p90': 3, # Prefer providers with <3 second latency for 90% of requests in last 5 minutes
      'p99': 5, # Prefer providers with <5 second latency for 99% of requests in last 5 minutes
    },
    'preferred_min_throughput': {
      'p50': 100, # Prefer providers with >100 tokens/sec for 50% of requests in last 5 minutes
      'p90': 50, # Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
    },
  },
})
```

```bash title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek/deepseek-v3.2",
    "input": "Hello",
    "provider": {
      "preferred_max_latency": {
        "p50": 1,
        "p90": 3,
        "p99": 5
      },
      "preferred_min_throughput": {
        "p50": 100,
        "p90": 50
      }
    }
  }'
```

### Use Case 3: Maximize BYOK Usage Across Models

If you use [Bring Your Own Key (BYOK)](https://openrouter.ai/docs/guides/overview/auth/byok.md) and want to maximize usage of your own API keys, `partition: "none"` can help. When your primary model doesn't have a BYOK provider available, OpenRouter can route to a fallback model that does support BYOK.

```typescript title="TypeScript SDK" expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    input: 'Hello',
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
    },
  }),
});
```

```python title="Python" expandable lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'models': [
    'anthropic/claude-sonnet-4.5',
    'openai/gpt-5-mini',
    'google/gemini-3-flash-preview',
  ],
  'input': 'Hello',
  'provider': {
    'sort': {
      'by': 'price',
      'partition': 'none',
    },
  },
})
```

```bash title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "models": [
      "anthropic/claude-sonnet-4.5",
      "openai/gpt-5-mini",
      "google/gemini-3-flash-preview"
    ],
    "input": "Hello",
    "provider": {
      "sort": {
        "by": "price",
        "partition": "none"
      }
    }
  }'
```

In this example, if you have a BYOK key configured for OpenAI but not for Anthropic, OpenRouter can route to the GPT-5 mini endpoint using your own key even though Claude is listed first. Without `partition: "none"`, the router would always try Claude's endpoints first before falling back to GPT-5 mini.

> [!NOTE]
>
> BYOK endpoints are automatically prioritized when you have API keys configured for a provider and the request sets no `order`. The `partition: "none"` setting allows this prioritization to work across model boundaries. A request that sets `order` is routed in that order, with your BYOK endpoint tried first within each provider you name; see [BYOK with Provider Ordering](https://openrouter.ai/docs/guides/overview/auth/byok.md#byok-with-provider-ordering).

## Ordering Specific Providers

You can set the providers that OpenRouter will prioritize for your request using the `order` field.

| Field | Type | Default | Description |
| - | - | - | - |
| `order` | string\[] | - | List of provider slugs to try in order (e.g. `["anthropic", "openai"]`). |

The router will prioritize providers in this list, and in this order, for the model you're using. The order also outranks the priority your [BYOK keys](https://openrouter.ai/docs/guides/overview/auth/byok.md#byok-with-provider-ordering) would otherwise get: within each provider you name, your own key is tried before OpenRouter's shared capacity. If you don't set this field, the router uses [default routing](#default-routing).

> [!TIP]
>
> You can use the copy button next to provider names on model pages to get the exact provider slug, including any variants like "/turbo". See [Targeting Specific Provider Endpoints](#targeting-specific-provider-endpoints) for details.

OpenRouter will try them one at a time and proceed to other providers if none are operational. If you don't want to allow any other providers, you should [disable fallbacks](#disabling-fallbacks) as well.

### Example: Specifying providers with fallbacks

This example skips over OpenAI (which doesn't host Mistral Small 3.2), tries DeepInfra, and then falls back to the normal list of providers on OpenRouter:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'mistralai/mistral-small-3.2-24b-instruct',
    input: 'Hello',
    provider: {
      order: ['openai', 'deepinfra'],
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'mistralai/mistral-small-3.2-24b-instruct',
    input: 'Hello',
    provider: {
      order: ['openai', 'deepinfra'],
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'mistralai/mistral-small-3.2-24b-instruct',
  'input': 'Hello',
  'provider': {
    'order': ['openai', 'deepinfra'],
  },
})
```

### Example: Specifying providers with fallbacks disabled

Here's an example with `allow_fallbacks` set to `false` that skips over OpenAI (which doesn't host Mistral Small 3.2), tries DeepInfra, and then fails if DeepInfra fails:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'mistralai/mistral-small-3.2-24b-instruct',
    input: 'Hello',
    provider: {
      order: ['openai', 'deepinfra'],
      allowFallbacks: false,
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'mistralai/mistral-small-3.2-24b-instruct',
    input: 'Hello',
    provider: {
      order: ['openai', 'deepinfra'],
      allow_fallbacks: false,
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'mistralai/mistral-small-3.2-24b-instruct',
  'input': 'Hello',
  'provider': {
    'order': ['openai', 'deepinfra'],
    'allow_fallbacks': False,
  },
})
```

## Targeting Specific Provider Endpoints

Each provider on OpenRouter may host multiple endpoints for the same model, such as a default endpoint and a specialized "turbo" endpoint, or region-specific endpoints like `google-vertex/us-east5`. To target a specific endpoint, you can use the copy button next to the provider name on the model detail page to obtain the exact provider slug.

### Base Slug Matching

When you use a base provider slug (e.g. `"google-vertex"`) in any provider routing field (`order`, `only`, or `ignore`), it matches **all** eligible endpoints for that provider, including any variants or regions. For example, `"google-vertex"` matches `google-vertex`, `google-vertex/us-east5`, `google-vertex/us-central1`, and so on. A base slug does not by itself opt into a [service tier endpoint](https://openrouter.ai/docs/guides/features/service-tiers.md) (e.g. `openai/fast`, `google-vertex/flex`); select one with the `service_tier` parameter or its tier-suffixed slug. Tier endpoints already in the routing pool, such as priority endpoints of open-weight models, do match their base slug.

To target a **specific** variant or region, use the full slug including the suffix (e.g. `"google-vertex/us-east5"` or `"deepinfra/turbo"`). When a provider serves the same variant from more than one region, the region follows the variant as its own segment (e.g. `"baseten/fp4/us"`); the variant slug alone (`"baseten/fp4"`) still matches every region of it.

Every endpoint slug has the shape `provider[/variant][/region][/tier]`, with each segment present only when the endpoint needs it: the variant (a quantization such as `fp4`, or a provider-specific label such as `zdr`), then the region, then the [service tier](https://openrouter.ai/docs/guides/features/service-tiers.md) in the provider's spelling (`priority`, `fast`, `turbo`, `flex`), always last. A tier endpoint's slug is therefore its standard sibling's slug plus the tier (`google-vertex/global` and `google-vertex/global/priority`, `baseten/fp4/us` and `baseten/fp4/us/priority`), and dropping a trailing segment matches every endpoint that shares the remaining prefix, except that dropping the tier never matches a tier endpoint.

| Slug in request | What it matches |
| - | - |
| `"google-vertex"` | All Google Vertex endpoints (every region) |
| `"google-vertex/us-east5"` | Only the `us-east5` region endpoint |
| `"deepinfra"` | All DeepInfra endpoints (for example, fp8 and turbo) |
| `"deepinfra/turbo"` | Only the DeepInfra turbo endpoint |

### Example: Targeting a specific endpoint variant

For example, DeepInfra offers Gemma 4 31B through multiple endpoints, including:

* FP8 endpoint with slug `deepinfra/fp8`
* Turbo endpoint with slug `deepinfra/turbo`

By copying the exact provider slug and using it in your request's `order` array, you can ensure your request is routed to the specific endpoint you want:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'google/gemma-4-31b-it',
    input: 'Hello',
    provider: {
      order: ['deepinfra/turbo'],
      allowFallbacks: false,
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'google/gemma-4-31b-it',
    input: 'Hello',
    provider: {
      order: ['deepinfra/turbo'],
      allow_fallbacks: false,
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'google/gemma-4-31b-it',
  'input': 'Hello',
  'provider': {
    'order': ['deepinfra/turbo'],
    'allow_fallbacks': False,
  },
})
```

This approach is especially useful when you want to consistently use a specific variant of a model from a particular provider.

> [!TIP]
>
> To route to **all** endpoints of a provider (across all regions and variants), just use the base slug without a suffix. For example, `"google-vertex"` will route across all Vertex AI regions.

## Requiring Providers to Support All Parameters

You can restrict requests only to providers that support all parameters in your request using the `require_parameters` field.

| Field | Type | Default | Description |
| - | - | - | - |
| `require_parameters` | boolean | `false` | Only use providers that support all parameters in your request. |

With the default routing strategy, providers that don't support all the [LLM parameters](https://openrouter.ai/docs/api_reference/parameters.md) specified in your request can still receive the request, but will ignore unknown parameters. When you set `require_parameters` to `true`, the request won't even be routed to that provider.

### Default parameter preferences

Even when `require_parameters` is `false`, a small set of parameters is used as a soft preference when choosing between providers of the same model: `tools`, the response format (`text.format` on the Responses API, `response_format` on Chat Completions, including structured outputs), and `verbosity`. If some of a model's providers support one of these parameters and others don't, the request is only routed to the supporting providers. If none of a model's providers support the parameter, the request is still routed to that model and the parameter is ignored — this preference never removes a model from your request's candidate list (such as the [`models` fallback list](https://openrouter.ai/docs/guides/routing/model-fallbacks)).

### Example: Excluding providers that don't support JSON formatting

For example, to only use providers that support JSON formatting:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    input: 'Hello',
    provider: {
      requireParameters: true,
    },
    text: { format: { type: 'json_object' } },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: 'Hello',
    provider: {
      require_parameters: true,
    },
    text: { format: { type: 'json_object' } },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'input': 'Hello',
  'provider': {
    'require_parameters': True,
  },
  'text': { 'format': { 'type': 'json_object' } },
})
```

## Requiring Providers to Comply with Data Policies

You can restrict requests only to providers that comply with your data policies using the `data_collection` field.

| Field | Type | Default | Description |
| - | - | - | - |
| `data_collection` | "allow" \| "deny" | "allow" | Control whether to use providers that may store data. |

* `allow`: (default) allow providers which store user data non-transiently and may train on it
* `deny`: use only providers which do not collect user data

Some model providers may log prompts, so we display them with a **Data Policy** tag on model pages. This is not a definitive source of third party data policies, but represents our best knowledge.

> [!TIP]
>
> **Account-Wide Data Policy Filtering**
>
> This is also available as an account-wide setting in [your privacy settings](https://openrouter.ai/settings/privacy). You can disable third party model providers that store inputs for training.

### Example: Excluding providers that don't comply with data policies

To exclude providers that don't comply with your data policies, set `data_collection` to `deny`:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    input: 'Hello',
    provider: {
      dataCollection: 'deny', // or "allow"
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: 'Hello',
    provider: {
      data_collection: 'deny', // or "allow"
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'input': 'Hello',
  'provider': {
    'data_collection': 'deny', # or "allow"
  },
})
```

## Zero Data Retention Enforcement

You can enforce Zero Data Retention (ZDR) on a per-request basis using the `zdr` parameter, ensuring your request only routes to ZDR endpoints, or to Safety Retention endpoints if your settings allow them.

| Field | Type | Default | Description |
| - | - | - | - |
| `zdr` | boolean | - | Restrict routing to only ZDR (Zero Data Retention) endpoints. |

When `zdr` is set to `true`, the request will only be routed to ZDR endpoints. Safety Retention endpoints (which may retain prompts and responses from any request, only to prevent abuse, and don't train on them) are also eligible unless your privacy settings or guardrail are set to **ZDR only**. See [Allowing or excluding Safety Retention](https://openrouter.ai/docs/guides/features/zdr.md#allowing-or-excluding-safety-retention). When `zdr` is `false` or not provided, it has no effect on routing.

`zdr` filters model inference endpoints. The [Advisor](https://openrouter.ai/docs/guides/features/server-tools/advisor.md) and [Subagent](https://openrouter.ai/docs/guides/features/server-tools/subagent.md) server tools forward your `provider` preferences, including `zdr`, to their inner generations. Tool backends are not filtered by `zdr`. See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability).

> [!TIP]
>
> **Per-Model-Group and Account-Wide ZDR**
>
> ZDR can also be enforced per model group (Anthropic, OpenAI, Google, SpaceXAI, and all other models) in your [privacy settings](https://openrouter.ai/settings/privacy) or via [guardrails](https://openrouter.ai/docs/guides/features/guardrails.md). The per-request `zdr` parameter operates as an "OR" with your account-wide and guardrail ZDR settings — if any of them is enabled, ZDR enforcement is applied. The request-level parameter can only ensure ZDR is enabled, not override account-wide or guardrail enforcement. See [Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr.md#per-model-group-zdr-enforcement) for details.

### Example: Enforcing ZDR for a specific request

To ensure a request only uses ZDR endpoints, set `zdr` to `true`:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openai/gpt-5-mini',
    input: 'Hello',
    provider: {
      zdr: true,
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5-mini',
    input: 'Hello',
    provider: {
      zdr: true,
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'openai/gpt-5-mini',
  'input': 'Hello',
  'provider': {
    'zdr': True,
  },
})
```

This is useful for customers who don't want to globally enforce ZDR but need to ensure specific requests only route to ZDR endpoints.

## Distillable Text Enforcement

You can enforce distillable text filtering on a per-request basis using the `enforce_distillable_text` parameter, ensuring your request only routes to models where the author has allowed text distillation.

| Field | Type | Default | Description |
| - | - | - | - |
| `enforce_distillable_text` | boolean | - | Restrict routing to only models that allow text distillation. |

When `enforce_distillable_text` is set to `true`, the request will only be routed to models where the author has explicitly enabled text distillation. When `enforce_distillable_text` is `false` or not provided, it has no effect on routing.

This parameter is useful for applications that need to ensure their requests only use models that allow text distillation for training purposes, such as when building datasets for model fine-tuning or distillation workflows.

### Example: Enforcing distillable text for a specific request

To ensure a request only uses models that allow text distillation, set `enforce_distillable_text` to `true`:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'meta-llama/llama-3.3-70b-instruct',
    input: 'Hello',
    provider: {
      enforceDistillableText: true,
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'meta-llama/llama-3.3-70b-instruct',
    input: 'Hello',
    provider: {
      enforce_distillable_text: true,
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'meta-llama/llama-3.3-70b-instruct',
  'input': 'Hello',
  'provider': {
    'enforce_distillable_text': True,
  },
})
```

## Disabling Fallbacks

To guarantee that your request is only served by the top-ranked provider, you can disable fallbacks.

This is combined with the `order` field from [Ordering Specific Providers](#ordering-specific-providers) to restrict the providers that OpenRouter will prioritize to just your chosen list.

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    input: 'Hello',
    provider: {
      allowFallbacks: false,
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: 'Hello',
    provider: {
      allow_fallbacks: false,
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'input': 'Hello',
  'provider': {
    'allow_fallbacks': False,
  },
})
```

## Allowing Only Specific Providers

You can allow only specific providers for a request by setting the `only` field in the `provider` object.

| Field | Type | Default | Description |
| - | - | - | - |
| `only` | string\[] | - | List of provider slugs to allow for this request. |

If two or more of the allowed providers can serve the model, [default routing](#default-routing) picks among them.

> [!WARNING]
>
> Only allowing some providers may significantly reduce fallback options and limit request recovery.

> [!TIP]
>
> **Account-Wide Allowed Providers**
>
> You can allow providers for all account requests in your [privacy settings](https://openrouter.ai/settings/privacy). This configuration applies to all API requests and chatroom messages.
>
> Note that when you allow providers for a specific request, both restrictions apply: your account-wide allowed providers act as the ceiling, and the request's `only` list narrows within it. If no provider satisfies both, the request fails with a 404.

### Example: Allowing Azure for a request calling GPT-5 mini

Here's an example that will only use Azure for a request calling GPT-5 mini:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openai/gpt-5-mini',
    input: 'Hello',
    provider: {
      only: ['azure'],
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5-mini',
    input: 'Hello',
    provider: {
      only: ['azure'],
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'openai/gpt-5-mini',
  'input': 'Hello',
  'provider': {
    'only': ['azure'],
  },
})
```

## Ignoring Providers

You can ignore providers for a request by setting the `ignore` field in the `provider` object.

| Field | Type | Default | Description |
| - | - | - | - |
| `ignore` | string\[] | - | List of provider slugs to skip for this request. |

If two or more providers remain, [default routing](#default-routing) picks among them.

> [!WARNING]
>
> Ignoring multiple providers may significantly reduce fallback options and limit request recovery.

> [!TIP]
>
> **Account-Wide Ignored Providers**
>
> You can ignore providers for all account requests in your [privacy settings](https://openrouter.ai/settings/privacy). This configuration applies to all API requests and chatroom messages.
>
> Note that when you ignore providers for a specific request, the list of ignored providers is merged with your account-wide ignored providers.

### Example: Ignoring DeepInfra for a request calling Llama 3.3 70b

Here's an example that will ignore DeepInfra for a request calling Llama 3.3 70b:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'meta-llama/llama-3.3-70b-instruct',
    input: 'Hello',
    provider: {
      ignore: ['deepinfra'],
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'meta-llama/llama-3.3-70b-instruct',
    input: 'Hello',
    provider: {
      ignore: ['deepinfra'],
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'meta-llama/llama-3.3-70b-instruct',
  'input': 'Hello',
  'provider': {
    'ignore': ['deepinfra'],
  },
})
```

## Quantization

Quantization reduces model size and computational requirements while aiming to preserve performance. Most LLMs today use FP16 or BF16 for training and inference, cutting memory requirements in half compared to FP32. Some optimizations use FP8 or quantization to reduce size further (e.g., INT8, INT4).

| Field | Type | Default | Description |
| - | - | - | - |
| `quantizations` | string\[] | - | List of quantization levels to filter by (e.g. `["int4", "int8"]`). [Learn more](#quantization) |

> [!WARNING]
>
> Quantized models may exhibit degraded performance for certain prompts, depending on the method used.

Providers can support various quantization levels for open-weight models.

### Quantization Levels

By default, requests use [default routing](#default-routing) across all available providers. To filter providers by quantization level, specify the `quantizations` field in the `provider` parameter with the following values:

* `int4`: Integer (4 bit)
* `int8`: Integer (8 bit)
* `fp4`: Floating point (4 bit), including `mxfp4` or `nvfp4`
* `mxfp4`: Microscaling floating point (4 bit)
* `nvfp4`: NVIDIA floating point (4 bit)
* `fp6`: Floating point (6 bit)
* `fp8`: Floating point (8 bit), including `mxfp8`
* `mxfp8`: Microscaling floating point (8 bit)
* `fp16`: Floating point (16 bit)
* `bf16`: Brain floating point (16 bit)
* `fp32`: Floating point (32 bit)
* `unknown`: Unknown

### Example: Requesting FP8 Quantization

Here's an example that will only use providers that support FP8 quantization:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'meta-llama/llama-3.1-8b-instruct',
    input: 'Hello',
    provider: {
      quantizations: ['fp8'],
    },
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'meta-llama/llama-3.1-8b-instruct',
    input: 'Hello',
    provider: {
      quantizations: ['fp8'],
    },
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'HTTP-Referer': '<YOUR_SITE_URL>',
  'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
  'Content-Type': 'application/json',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'meta-llama/llama-3.1-8b-instruct',
  'input': 'Hello',
  'provider': {
    'quantizations': ['fp8'],
  },
})
```

### Max Price

To filter providers by price, specify the `max_price` field in the `provider` parameter with a JSON object specifying the highest provider pricing you will accept.

For example, the value `{"prompt": 1, "completion": 2}` will route to any provider with a price of `<= $1/m` prompt tokens, and `<= $2/m` completion tokens or less.

Some providers support per request pricing, in which case you can use the `request` attribute of max\_price. Lastly, `image` is also available, which specifies the max price per image you will accept.

Practically, this field is often combined with a provider `sort` to express, for example, "Use the provider with the highest throughput, as long as it doesn't cost more than `$x/m` tokens."

## Provider-Specific Headers

Some providers support beta features that can be enabled through special headers. OpenRouter allows you to pass through certain provider-specific beta headers when making requests.

### Anthropic Beta Features

When using Anthropic models (Claude), you can request specific beta features by including the `x-anthropic-beta` header in your request. OpenRouter will pass through supported beta features to Anthropic.

#### Supported Beta Features

| Feature | Header Value | Description |
| - | - | - |
| Interleaved Thinking | `interleaved-thinking-2025-05-14` | Allows Claude's thinking/reasoning to be interleaved with regular output, rather than appearing as a single block |
| Structured Outputs | `structured-outputs-2025-11-13` | Enables the strict tool use feature for supported Claude models, validating tool parameters against your schema to ensure correctly-typed arguments |

> [!NOTE]
>
> OpenRouter manages some Anthropic features automatically:
>
> * **Prompt caching and extended context** are enabled based on model capabilities
> * **Structured outputs for JSON schema response format** (`text.format.type: "json_schema"`, or `response_format.type: "json_schema"` on Chat Completions) — the header is automatically applied
> * **Fine-grained tool streaming** — for every streamed request (`stream: true`) that includes user-defined tools, OpenRouter sets `eager_input_streaming: true` on each tool so Anthropic emits tool arguments as a sequence of incremental chunks rather than buffering them. This matches the streaming behavior already exposed by other providers. See [Anthropic's fine-grained tool streaming docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming) for details.
>
> For **strict tool use** (`strict: true` on tools), you must explicitly pass the `structured-outputs-2025-11-13` header. Without this header, OpenRouter will strip the `strict` field and route normally.

#### Example: Enabling Interleaved Thinking

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send(
  {
    responsesRequest: {
      model: 'anthropic/claude-sonnet-4.5',
      input: 'Solve this step by step: What is 15% of 240?',
      stream: true,
    },
  },
  {
    headers: {
      'x-anthropic-beta': 'interleaved-thinking-2025-05-14',
    },
  },
);
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
    'x-anthropic-beta': 'interleaved-thinking-2025-05-14',
  },
  body: JSON.stringify({
    model: 'anthropic/claude-sonnet-4.5',
    input: 'Solve this step by step: What is 15% of 240?',
    stream: true,
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'Content-Type': 'application/json',
  'x-anthropic-beta': 'interleaved-thinking-2025-05-14',
}

response = requests.post('https://openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'anthropic/claude-sonnet-4.5',
  'input': 'Solve this step by step: What is 15% of 240?',
  'stream': True,
})
```

#### Combining Multiple Beta Features

You can enable multiple beta features by separating them with commas:

```bash lines theme={null}
x-anthropic-beta: interleaved-thinking-2025-05-14,structured-outputs-2025-11-13
```

> [!WARNING]
>
> Beta features are experimental and may change or be deprecated by Anthropic. Check [Anthropic's documentation](https://docs.anthropic.com/en/api/beta-features) for the latest information on available beta features.

## Terms of Service

You can view the terms of service for each provider below. You may not violate the terms of service or policies of third-party providers that power the models on OpenRouter.
