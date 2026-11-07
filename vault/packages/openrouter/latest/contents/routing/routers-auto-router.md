> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Auto Router

> A general purpose router that picks a model and reasoning effort for every request

The [Auto Router](https://openrouter.ai/openrouter/auto) (`openrouter/auto`) is the general purpose model router on OpenRouter. It picks a model and a reasoning effort for each request, from the models your guardrails, zero data retention, provider restrictions, and BYOK keys allow. Use it for mixed traffic, apps, and general agents. For coding agents and harnesses, use [Auto Code](https://openrouter.ai/docs/guides/routing/routers/auto-code.md), which runs on the same engine with a policy tuned for coding.

To compare the Auto Router with other routers and single models, see the [Model Routing Benchmarks](https://openrouter.ai/benchmarks/routers).

There are three members of the Auto Router family:

* **[Auto](https://openrouter.ai/openrouter/auto)** (`openrouter/auto`) — works like any other model slug; sending it as the `model` is all you need to do.
* **[Auto Code](https://openrouter.ai/docs/guides/routing/routers/auto-code.md)** (`openrouter/auto-code`) — specialized for coding agents and harnesses.
* **[Auto Beta](https://openrouter.ai/openrouter/auto-beta)** (`openrouter/auto-beta`) — the experimental release channel. Changes to the Auto Router land here before they graduate to `openrouter/auto`. Everything on this page applies to it too, except that per-request settings must use the plugin id `auto-beta-router` instead of `auto-router`:

```typescript theme={null}
const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openrouter/auto-beta',
    input: 'Summarize this paragraph',
    plugins: [{ id: 'auto-beta-router', costTier: 'medium' }],
  },
});
```

> [!WARNING]
>
> Each slug only reads settings sent under its own plugin id. Settings sent under the other slug's plugin id are accepted but silently ignored: `allowed_models`, `excluded_models`, and `cost_tier` will have no effect on the request.

## How it works

1. **Narrow the model pool.** Guardrails, zero data retention, model capabilities, provider restrictions, BYOK keys, and your [allowed](#allowed-models) and [excluded](#excluding-models) model lists decide which models are considered.
2. **Rate the request.** A fast decision model rates eleven aspects of the request in one call, such as what kind of task it is, whether the task just changed, how hard it is, whether speed matters, whether it needs vision or knowledge of a codebase, and whether a bigger model or more thinking would help.
3. **Pick a model and effort.** The routing policy weighs that rating against live prices, cache status, and benchmark performance, within your [cost tier](#cost-tier), to pick both the model and the reasoning effort.
4. **Route to a provider.** The request goes through the same [provider routing](https://openrouter.ai/docs/guides/routing/provider-selection.md) a direct request to that model would, so provider health, latency, price, and your provider preferences still apply.
5. **Carry signals to the next turn.** Later turns use what happened earlier in the session, such as whether the model is struggling and how much context is already cached.

To see why the router picked a model, opt in to [router metadata](https://openrouter.ai/docs/guides/routing/routers/router-metadata.md) with the `X-OpenRouter-Metadata: enabled` header. The `jev-router` stage in `openrouter_metadata.pipeline` lists `resolved_models`, the routed `candidates` with their reasoning effort and estimated cost, and the `reason` for the pick. See [Jev Router: Seeing what the router did](https://openrouter.ai/docs/guides/routing/routers/jev-router.md#seeing-what-the-router-did) for every field. In the [chatroom](https://openrouter.ai/chat?models=openrouter%2Fauto), a routing insights panel shows the same analysis beside each reply.

## Usage

Set your model to `openrouter/auto`:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openrouter/auto',
    input: 'Explain quantum entanglement in simple terms',
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}

const message = [...response.output].reverse().find((item) => item.type === 'message');
console.log(message?.content.find((part) => part.type === 'output_text')?.text);
// Check which model was selected
console.log('Model used:', response.model);
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openrouter/auto',
    input: 'Explain quantum entanglement in simple terms',
  }),
});

const data = await response.json();
const message = [...data.output].reverse().find((item: { type: string }) => item.type === 'message');
console.log(message?.content.find((part: { type: string; text?: string }) => part.type === 'output_text')?.text);
// Check which model was selected
console.log('Model used:', data.model);
```

```python title="Python" expandable lines theme={null}
import requests
import json

response = requests.post(
  url="https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "Content-Type": "application/json",
  },
  data=json.dumps({
    "model": "openrouter/auto",
    "input": "Explain quantum entanglement in simple terms"
  })
)

data = response.json()
message = next(item for item in reversed(data['output']) if item['type'] == 'message')
print(next(part['text'] for part in message['content'] if part['type'] == 'output_text'))
# Check which model was selected
print('Model used:', data['model'])
```

## Response

The response includes the `model` field showing which model was actually used:

```json lines theme={null}
{
  "id": "gen-...",
  "object": "response",
  "model": "anthropic/claude-sonnet-4.5",  // The model that was selected
  "status": "completed",
  "output": [
    {
      "type": "message",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "..."
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 15,
    "output_tokens": 150,
    "total_tokens": 165
  }
}
```

## Session stickiness

Unlike a fixed model slug, the Auto Router can pick a different model on every turn. Switching models costs extra while the new model rebuilds the prompt cache, so the router is restrained about it. It favors a change in reasoning effort when that's enough, and switches models only when the gain is worth it, for example when the task changes or when signals such as a repeated error or failing tests point at the model. OpenRouter recognizes the conversation from an explicit `session_id`, or from a fingerprint of your messages if you don't send one.

The `model` field in each response tells you which model answered.

Sessions also keep requests on the same provider, which works the same way as it does for any other model. See [Provider Sticky Routing](https://openrouter.ai/docs/guides/best-practices/prompt-caching.md#provider-sticky-routing) for how sessions are identified, how long they last, and how the `x-session-id` header works.

### Example with `session_id`

```typescript title="TypeScript SDK" expandable lines theme={null}
const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openrouter/auto',
    sessionId: 'my-conversation-123',
    input: 'Explain quantum entanglement',
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}
if (response.status !== 'completed') {
  throw new Error(response.error?.message ?? `Response ended as ${response.status}`);
}
const previousOutput = response.output.map((item) => {
  if (item.type === 'reasoning') return item;
  if (item.type !== 'message') throw new Error(`Unexpected output item: ${item.type}`);

  const content = item.content.filter(
    (part) => part.type === 'output_text' || part.type === 'refusal',
  );
  if (content.length !== item.content.length) {
    throw new Error('Received an unsupported message content type');
  }
  return { ...item, content };
});

// Subsequent requests with this session reuse the cached provider and may reuse the model
const followUp = await openRouter.responses.send({
  responsesRequest: {
    model: 'openrouter/auto',
    sessionId: 'my-conversation-123',
    input: [
      { role: 'user', content: 'Explain quantum entanglement' },
      ...previousOutput,
      { role: 'user', content: 'Now explain it to a 5-year-old' },
    ],
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openrouter/auto',
    session_id: 'my-conversation-123',
    input: 'Explain quantum entanglement',
  }),
});
```

```python title="Python" lines theme={null}
response = requests.post(
  url="https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "Content-Type": "application/json",
  },
  data=json.dumps({
    "model": "openrouter/auto",
    "session_id": "my-conversation-123",
    "input": "Explain quantum entanglement"
  })
)
```

## Allowed models

Use `allowed_models` to restrict which models the Auto Router can select. The list is a hard restriction: the router routes only to models it matches, including older models it wouldn't otherwise consider. Auto Code applies the same list.

### Set allowed models on a request

Use wildcard patterns to filter models. For example, `anthropic/*` matches all Anthropic models:

```typescript title="TypeScript SDK" lines theme={null}
const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openrouter/auto',
    input: 'Explain quantum entanglement',
    plugins: [
      {
        id: 'auto-router',
        allowedModels: ['anthropic/*', 'openai/gpt-5.1'],
      },
    ],
  },
});
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openrouter/auto',
    input: 'Explain quantum entanglement',
    plugins: [
      {
        id: 'auto-router',
        allowed_models: ['anthropic/*', 'openai/gpt-5.1'],
      },
    ],
  }),
});
```

```python title="Python" expandable lines theme={null}
response = requests.post(
  url="https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "Content-Type": "application/json",
  },
  data=json.dumps({
    "model": "openrouter/auto",
    "input": "Explain quantum entanglement",
    "plugins": [
      {
        "id": "auto-router",
        "allowed_models": ["anthropic/*", "openai/gpt-5.1"]
      }
    ]
  })
)
```

### Pattern syntax

| Pattern | Matches |
| - | - |
| `anthropic/*` | All Anthropic models |
| `openai/gpt-5*` | All GPT-5 variants |
| `google/*` | All Google models |
| `openai/gpt-5.1` | Exact match only |
| `*/claude-*` | Any provider with claude in model name |

Entries also accept a dated revision, such as `openai/gpt-6-luna-20260922`, which matches only that revision, and a `~author/family-latest` alias, such as `~openai/gpt-luna-latest`, which matches every revision of that family. Matching is case-sensitive. When you set no patterns, the Auto Router considers every model in its pool.

## Excluding models

Use `excluded_models` to prevent the Auto Router from selecting specific models for an individual request. It accepts the same wildcard pattern syntax as `allowed_models` described above. Exclusions are applied after `allowed_models`, so an excluded model is never selected even when it matches an allowed pattern.

```typescript theme={null}
plugins: [
  {
    id: 'auto-router',
    allowed_models: ['anthropic/*', 'openai/*'],
    excluded_models: ['openai/gpt-4o'],
  },
]
```

Use exclusions for compliance restrictions, cost ceilings, or models that underperform for your task. If your restrictions leave no eligible model, the request fails with `404`, and the error names the fields to change, such as `widen allowed_models` or `remove excluded_models`.

## Cost tier

Use the `cost_tier` request setting to choose a routing policy: `low`, `medium`, or `high`. `low` prioritizes lower estimated cost, `medium` balances cost and capability, and `high` favors more capable models when the expected benefit justifies the added cost. `xhigh` and `max` are still accepted and route as `high`. If you omit `cost_tier`, the router uses its default policy.

The default policy costs more per task than the previous generation of the Auto Router, so it can pick from a wider range of models. To keep costs closer to the previous behavior, set `cost_tier` to `low`.

```typescript theme={null}
plugins: [{ id: 'auto-router', cost_tier: 'medium' }]
```

`cost_tier` selects the routing policy, not the model's reasoning effort. Your model and provider restrictions still apply, and changing tiers can change the selected model within a conversation.

### Set the cost tier on a request

```typescript title="TypeScript SDK" lines theme={null}
const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openrouter/auto',
    input: 'Summarize this paragraph',
    plugins: [
      {
        id: 'auto-router',
        costTier: 'high',
      },
    ],
  },
});
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openrouter/auto',
    input: 'Summarize this paragraph',
    plugins: [
      {
        id: 'auto-router',
        cost_tier: 'high',
      },
    ],
  }),
});
```

```python title="Python" expandable lines theme={null}
response = requests.post(
  url="https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "Content-Type": "application/json",
  },
  data=json.dumps({
    "model": "openrouter/auto",
    "input": "Summarize this paragraph",
    "plugins": [
      {
        "id": "auto-router",
        "cost_tier": "high"
      }
    ]
  })
)
```

### Deprecated settings

`cost_quality_tradeoff` and `pin_model` belonged to the previous generation of the Auto Router. Requests that send them still succeed, but the current router doesn't use them, and they can change routing only if a request falls back to the previous-generation router. Use `cost_tier` instead of `cost_quality_tradeoff`; the current router keeps a session on its model across turns on its own.

## Account defaults

Instead of sending these settings on every request, you can save them for your account on your workspace's [Routing page](https://openrouter.ai/settings/routing), where the Auto Router section stores allowed models, excluded models, and a cost preference. Saved exclusions use the same pattern syntax as the allow list and win over it: an excluded model is never selected even when it matches an allowed pattern. Saved values apply to every Auto Router request unless that request sets the same field, in which case the request wins — unless you enable the section's "prevent overrides" toggle, which makes your saved values final.

Saved allowed and excluded models apply to `openrouter/auto`, `openrouter/auto-beta`, and `openrouter/auto-code`. A saved cost preference applies to `openrouter/auto` and `openrouter/auto-beta`.

## Pricing

You pay the standard rate for whichever model is selected. There is no additional fee for using the Auto Router.

To cap what a request may cost, [`provider.max_price`](https://openrouter.ai/docs/guides/routing/provider-selection#max-price) still applies: it filters the endpoints of whichever models the router resolves.

## Use cases

* **Mixed traffic**: You don't know what kinds of prompts your users will send.
* **General agents**: Each turn gets a model and reasoning effort that fit it, while the session keeps its prompt cache.
* **Steady costs**: The router picks efficient models for simpler work and stronger models where they pay off.
* **New models**: The router evaluates new models as they ship, so you don't need to track every release.

## Limitations

* The router requires conversational input: a string or message list in `input` on the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md), or `messages` on Chat Completions, not the legacy `prompt` field.
* The router is available only in the global data region.
* Don't combine `openrouter/auto` with another router model in the same request.
* Streaming, tool calling, and other standard OpenRouter features work with the selected model.

## Related

* [Model Routing overview](https://openrouter.ai/docs/guides/routing/routers/overview.md) - Compare the routers on OpenRouter

* [Auto Code](https://openrouter.ai/docs/guides/routing/routers/auto-code.md) - The router tuned for coding agents and harnesses

* [Router metadata](https://openrouter.ai/docs/guides/routing/routers/router-metadata.md) - Inspect routing decisions

* [Body Builder](https://openrouter.ai/docs/guides/features/body-builder.md) - Generate multiple parallel API requests

* [Latest Model Resolution](https://openrouter.ai/docs/guides/features/latest-resolution.md) - Always target the newest version of a model family

* [Model Fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks.md) - Configure fallback models

* [Provider Selection](https://openrouter.ai/docs/guides/routing/provider-selection.md) - Control which providers are used
