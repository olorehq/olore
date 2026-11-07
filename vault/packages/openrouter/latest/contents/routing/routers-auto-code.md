> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Auto Code

> A router tuned for coding agents and harnesses that picks a model and reasoning effort for every turn

[Auto Code](https://openrouter.ai/openrouter/auto-code) (`openrouter/auto-code`) is a router specialized for coding agents and harnesses. It runs on the same routing engine as the [Auto Router](https://openrouter.ai/docs/guides/routing/routers/auto-router.md), with a policy tuned for coding work:

* It starts in a higher cost tier that includes stronger coding models.
* It weighs speed more heavily.
* It penalizes failures more harshly, so it course corrects faster when tests fail or the same error comes back.

Use Auto Code in a coding harness and the Auto Router for mixed traffic and general agents. See how both perform on the [Model Routing Benchmarks](https://openrouter.ai/benchmarks/routers).

## How it works

1. **Narrow the model pool.** Guardrails, zero data retention, model capabilities, provider restrictions, BYOK keys, and your allowed and excluded model lists decide which models are considered.
2. **Rate the request.** A fast decision model rates the turn, for example what kind of coding task it is, whether the task just changed, how hard it is, and whether a bigger model or more thinking would help.
3. **Pick a model and effort.** The routing policy weighs measured pass rate, speed, and cost per solved task across models and reasoning efforts, plus live prices and cache status.
4. **Route to a provider.** The request goes through the same [provider routing](https://openrouter.ai/docs/guides/routing/provider-selection.md) a direct request to that model would.
5. **Carry signals to the next turn.** Auto Code favors a change in reasoning effort over a model switch, so it keeps your prompt cache, and switches when failure signals show the model is the problem.

## Usage

Set `model` to `openrouter/auto-code` wherever your harness takes a model string:

```bash title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openrouter/auto-code",
    "messages": [{"role": "user", "content": "Add a retry with backoff to fetchUser in api/users.ts"}]
  }'
```

```typescript title="TypeScript (fetch)" lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openrouter/auto-code',
    messages: [{ role: 'user', content: 'Add a retry with backoff to fetchUser in api/users.ts' }],
  }),
});

const data = await response.json();
console.log('Model used:', data.model);
console.log(data.choices[0].message.content);
```

Send a `session_id` (or the `x-session-id` header) so the router treats every turn of an agent session as one conversation. See [Auto Router session stickiness](https://openrouter.ai/docs/guides/routing/routers/auto-router.md#session-stickiness).

## Restrict the models

Auto Code applies the `allowed_models` and `excluded_models` lists from the `auto-router` plugin as hard restrictions, the same lists the Auto Router uses. Lists you save on your workspace's [Routing page](https://openrouter.ai/settings/routing) apply too.

```json theme={null}
{
  "model": "openrouter/auto-code",
  "messages": [{"role": "user", "content": "Refactor this module into smaller functions."}],
  "plugins": [
    {
      "id": "auto-router",
      "allowed_models": ["anthropic/*", "openai/*"],
      "excluded_models": ["~anthropic/claude-opus-latest"]
    }
  ]
}
```

See [Allowed models](https://openrouter.ai/docs/guides/routing/routers/auto-router.md#allowed-models) for the pattern syntax. If your restrictions leave no eligible model, the request fails with `404` and names the fields to change.

## Change the cost tier

Auto Code ignores the `auto-router` plugin's `cost_tier` and runs on its own coding tier. To route a request on a general tier instead, set `cost_tier` on a `jev-router` plugin entry to `low`, `medium`, or `high`:

```json theme={null}
{
  "model": "openrouter/auto-code",
  "messages": [{"role": "user", "content": "Rename this variable everywhere in the file."}],
  "plugins": [{"id": "jev-router", "cost_tier": "medium"}]
}
```

## Inspect routing decisions

Send `X-OpenRouter-Metadata: enabled` to get [router metadata](https://openrouter.ai/docs/guides/routing/routers/router-metadata.md). The `jev-router` stage in `openrouter_metadata.pipeline` lists `resolved_models`, the routed `candidates` with their reasoning effort and estimated cost, and the `reason` for the pick. See [Jev Router: Seeing what the router did](https://openrouter.ai/docs/guides/routing/routers/jev-router.md#seeing-what-the-router-did) for every field.

## Pricing

You pay the standard price of whichever model serves each request. Auto Code doesn't add a fee.

## Related

* [Model Routing overview](https://openrouter.ai/docs/guides/routing/routers/overview.md): compare the routers on OpenRouter
* [Auto Router](https://openrouter.ai/docs/guides/routing/routers/auto-router.md): the general purpose router on the same engine
* [Model Routing Benchmarks](https://openrouter.ai/benchmarks/routers): score and cost per task for each router
