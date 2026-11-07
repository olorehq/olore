> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Service Tiers

> Control cost and latency tradeoffs with service tier selection

## Service Tiers

Some providers sell the same model at more than one grade of capacity. Every request uses the standard tier unless you ask for another one; the exception is priority endpoints of open-weight models, which also compete for default traffic (see [Finding Tier Endpoints](#finding-tier-endpoints)):

| Tier | Also called | Tradeoff |
| - | - | - |
| `default` | `standard` | The provider's regular capacity and pricing. |
| `flex` | | Lower price; lower processing priority. |
| `priority` | `fast` | Priority processing; higher price. |

`priority` and `fast` are two spellings of the same tier; a request can use either. Providers label their priority endpoints differently (`fast`, `turbo`, `highspeed`, `prime`), and an endpoint's badge and slug use the provider's label (for example `deepinfra/turbo` or `alibaba/prime`), while `service_tier: "priority"` or `"fast"` requests all of them. See [Fast mode](#fast-mode).

OpenRouter lists each tier as its own endpoint of the model. You can let tier endpoints compete with standard endpoints for your traffic, or request a tier explicitly. Either way, the response reports the tier that actually served the request, and you're billed at that endpoint's price.

A few OpenAI models also offer an [`ultrafast`](#ultrafast) tier above priority.

### The `:nitro` and `:floor` Variants

The simplest way to use service tiers is to append a variant to the model ID. `:nitro` sorts every endpoint for the model by throughput and admits priority tier endpoints into that sort. `:floor` sorts by price and admits flex endpoints.

```json lines theme={null}
{
  "model": "openai/gpt-5:nitro"
}
```

Because a tier endpoint has to win that sort like any other endpoint, you pay a priority rate only when the priority endpoint is genuinely the fastest option, and a flex endpoint serves only when it is genuinely the cheapest.

Nothing else about the request changes, and fallbacks keep working: if the tier endpoint is unavailable, the next endpoint in the sorted pool serves the request at its own rate.

This is the recommended starting point for most traffic. Reach for the `service_tier` parameter below when you need a specific tier regardless of how it compares to the alternatives.

See [Nitro](https://openrouter.ai/docs/guides/routing/model-variants/nitro.md) and [Floor](https://openrouter.ai/docs/guides/routing/model-variants/floor.md) for the variants in full.

### Using Service Tiers

To pin a tier explicitly, pass `service_tier` as a top-level parameter in your request body. Supported values:

* `default`: the standard tier. Pinning it also keeps priority endpoints of open-weight models out of the pool, so a `provider.sort: "throughput"` or `provider.only` request is served at the standard rate.
* `flex`: lower price, lower processing priority.
* `priority` or `fast`: priority processing, higher price.
* `ultrafast`: see [Ultrafast](#ultrafast).

These values work the same for every provider that sells more than one tier; the examples on this page use OpenAI models, but nothing about the parameter is OpenAI-specific.

The example below requests the `flex` tier from OpenAI's `gpt-5`; the flex endpoint's pricing is listed on the [model page](https://openrouter.ai/openai/gpt-5).

The `service_tier` parameter is also accepted on the [Chat Completions API](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion.md) and the [Anthropic Messages API](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message.md). See [API Response Differences](#api-response-differences) below for where the response field is returned in each.

```bash title="Anthropic Messages API" lines theme={null}
curl https://openrouter.ai/api/v1/messages \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/gpt-5",
    "service_tier": "flex",
    "max_tokens": 1024,
    "messages": [
      { "role": "user", "content": "What is the meaning of life?" }
    ]
  }'
```

### Workspace Default Service Tier

To apply a tier to every request without sending `service_tier` each time, set a default service tier in your workspace's [Routing settings](https://openrouter.ai/workspaces/default/routing). It fills in `service_tier` for requests routed under that workspace that set none themselves.

The more specific setting always wins, in this order:

1. `service_tier` in the request body (or the equivalent `speed: "fast"`).
2. `service_tier` in a [preset](https://openrouter.ai/docs/guides/features/presets.md) the request references.
3. The workspace default.

A workspace default behaves exactly like the same value sent on the request, including `default`, which pins the standard tier and turns off `:nitro`/`:floor` tier admission for that workspace's requests.

### Allowed Service Tiers

The same Routing settings page lets a workspace admin choose which service tiers the workspace's requests may use. Every tier is allowed by default; the `default` tier is always allowed. A tier that is not allowed is enforced on every request routed under the workspace, whatever API key or preset it uses:

* A request that selects the tier explicitly is rejected with a `403`: `service_tier` (including the `fast` alias and `speed: "fast"`), or a tier endpoint slug such as `openai/priority` or `openai/fast` in `provider.order` or `provider.only`.
* Endpoints of that tier are never routed to. A `:nitro` or `:floor` variant stops admitting them and routes among the remaining endpoints, with no error. On model pages, those endpoints show a **Not routable** badge while you are signed in to the workspace.

The workspace default service tier must be an allowed tier: the page refuses to disallow the current default, and refuses a default that is not allowed.

### Fast mode

Three spellings request the priority tier. They are fully interchangeable on all APIs and providers:

* `service_tier: "priority"`
* `service_tier: "fast"` (OpenAI's [Fast mode](https://developers.openai.com/api/docs/guides/fast-mode) rename of priority processing)
* `speed: "fast"` (Anthropic's native parameter)

Provider labels for the tier (`turbo`, `highspeed`, `prime`) are not request values: they name endpoints, not requests. A request for `priority` or `fast` reaches those endpoints too.

**Reported tier.** The response always reports the tier as `priority`, never `fast`. This matches OpenAI's own API, which returns `priority` even when the request spelled the tier `fast`.

**Anthropic models.** The reported tier is derived from the `speed` Anthropic returns:

* A fast-served request reports `service_tier: "priority"`, plus `usage.speed: "fast"` on the Messages API.
* Anthropic's own API would echo `service_tier: "standard"` for the same request.
* On models that support fast mode, the request routes to the model's `fast` service tier endpoint like any other provider's priority tier. See [Fast Mode](https://openrouter.ai/docs/cookbook/coding-agents/claude-code-integration.md#fast-mode) in the Claude Code guide.

**Conflicting values.** If you set conflicting values explicitly (e.g. `speed: "standard"` with `service_tier: "priority"`), both are honored as written and neither is derived from the other.

**Deprecated `*-fast` models.** The dedicated `*-fast` models (e.g. [`anthropic/claude-opus-5-fast`](https://openrouter.ai/anthropic/claude-opus-5-fast)) are deprecated. They keep working and are served by the same fast tier capacity, but new integrations should target the regular model.

> [!NOTE]
>
> Anthropic itself has deprecated its priority tier. Per [Anthropic's service tiers documentation](https://platform.claude.com/docs/en/api/service-tiers): "Priority Tier capacity commitments are no longer available for purchase. Organizations with an existing commitment can continue to use Priority Tier through their contract end date."

### Ultrafast

`ultrafast` is OpenAI's [Ultrafast mode](https://developers.openai.com/api/docs/guides/ultrafast-mode), a tier above priority. It is available on select OpenAI models; on models that offer it, the model page lists an `openai/ultrafast` endpoint with its pricing.

Ultrafast is a separate tier, not another spelling of priority, and it is opt-in only. OpenRouter never routes to it unless you name it:

```json lines theme={null}
{
  "model": "openai/gpt-6-astra",
  "service_tier": "ultrafast"
}
```

You can also name the `openai/ultrafast` endpoint slug in `provider.order` or `provider.only` (see [How Routing Works](#how-routing-works)). Nothing else selects it: not `:nitro`, not `service_tier: "priority"` or `"fast"`, and not `provider.sort`.

An `ultrafast` request tries ultrafast endpoints first, then priority endpoints, then standard endpoints. You're billed at the rate of the tier that served the request, and the response's `service_tier` field reports that tier. If the model has no ultrafast endpoint, the request behaves like `service_tier: "priority"`.

> [!TIP]
>
> Before trying each endpoint, OpenRouter checks that your balance covers the request's maximum output at that endpoint's price. At ultrafast rates, the default output limit can fail that check, so the request falls back to priority. Set `max_output_tokens` (`max_tokens` in the Chat Completions API) to what you actually need so the ultrafast endpoint stays eligible.

### How Routing Works

Non-default tier endpoints (`flex`, `priority`, `ultrafast`) are only considered when your request asks for them. There are three ways to do that.

#### 1. The `:nitro` and `:floor` model variants

* [`:nitro`](https://openrouter.ai/docs/guides/routing/model-variants/nitro) makes priority endpoints eligible. [`:floor`](https://openrouter.ai/docs/guides/routing/model-variants/floor) makes flex endpoints eligible.
* Unlike the `service_tier` parameter, tier endpoints get no special treatment. The whole pool is sorted by the variant's metric (throughput for `:nitro`, price for `:floor`), so a tier endpoint is used only when it wins that sort.
* Setting `provider.order` replaces sorting with your explicit ordering, which disables the variant's tier admission. Name a tier endpoint slug in the order list to include it.
* An explicit `service_tier: "default"` also disables the variant's tier admission, so you can use `:nitro`/`:floor` purely for their sorting while pinning the standard tier.

#### 2. The `service_tier` parameter

* A [workspace default service tier](#workspace-default-service-tier) fills in this parameter for requests that set none, so it follows the same rules.
* **`priority`**: matching endpoints are tried first, with fallback to other endpoints if none succeed. Within each group, endpoints are sorted by throughput by default, and setting `provider.order` or `provider.sort` replaces that default with your ordering. Billing always follows the endpoint actually used, so a priority request that falls back off-tier is charged at that endpoint's standard rate, not the tier rate.
* **`ultrafast`**: works like `priority` with one more group in front: ultrafast endpoints, then priority endpoints, then default endpoints. See [Ultrafast](#ultrafast).
* **`flex`**: flex endpoints are tried first, sorted by price. Fallback is bounded by price: the request only falls back to endpoints whose input and output prices are both at or below a flex endpoint's, so you never pay more than the flex rate you asked for, whatever your input/output mix. Where the flex endpoint is the cheapest option for its model, as with a single provider's flex tier, nothing qualifies and a flex capacity error surfaces, the same as when you call that provider directly.
* If the pool contains no flex endpoints at all (for example, the model has no flex-capable provider), the request routes normally at standard rates.
* Combine with [`allow_fallbacks: false`](https://openrouter.ai/docs/guides/routing/provider-selection#disabling-fallbacks) to route only to the top endpoint of that tier.

#### 3. Tier endpoint slugs in `provider.order` or `provider.only`

* Each tier has its own endpoint slug, formed by appending the tier to the slug of its standard sibling, after any variant or region segment, e.g. `openai/fast`, `openai/ultrafast`, `google-vertex/global/flex`, or `baseten/fp4/us/priority`. The tier is always the last segment; see [Targeting Specific Provider Endpoints](https://openrouter.ai/docs/guides/routing/provider-selection.md#targeting-specific-provider-endpoints) for the full slug shape.
* `"provider": { "only": ["openai/fast"] }` restricts routing to OpenAI's Fast tier. See [Provider Selection](https://openrouter.ai/docs/guides/routing/provider-selection.md) for `provider.order` and `provider.only` in full.
* The `fast` and `priority` slug suffixes are interchangeable, so `openai/priority` matches the same endpoint as `openai/fast`.

Requests that don't use any of these never reach a flex, ultrafast, or closed-weight tier endpoint. Priority endpoints of open-weight models are the exception: they take part in default routing, as described below.

### Comparing Tier Selection Options

| Option | Eligible pool | Ordering | Fallback |
| - | - | - | - |
| `:nitro` variant | Default + priority endpoints | Entire pool sorted by throughput, no tier preference | Next-fastest default or priority endpoint |
| `:floor` variant | Default + flex endpoints | Entire pool sorted by price, no tier preference | Next-cheapest endpoint of any tier |
| `service_tier: "priority"` (or `"fast"`) | Default + priority endpoints | Priority endpoints first, each group sorted by throughput unless `provider.order` or `provider.sort` is set | Falls back to default endpoints |
| `service_tier: "ultrafast"` | Default + priority + ultrafast endpoints | Ultrafast first, then priority, then default, each group sorted by throughput unless `provider.order` or `provider.sort` is set | Falls back to priority, then default endpoints |
| `service_tier: "flex"` | Flex endpoints, plus endpoints priced at or below them on both input and output | Flex endpoints first, sorted by price | Only to endpoints priced at or below a flex endpoint on both input and output; otherwise capacity errors surface |
| `provider.only` with a tier slug | Only the endpoints the slugs name (tier slugs opt in that tier) | [Default routing](https://openrouter.ai/docs/guides/routing/provider-selection.md#default-routing) unless a sort is set | Within the named endpoints only |
| `provider.order` with a tier slug | Unchanged (tier slugs opt in the named tier endpoints) | Listed endpoints first, in your order | Falls back to unlisted endpoints unless disabled |
| `provider.sort` (`"throughput"` / `"price"`) | Unchanged (does not opt into any tier) | Entire pool sorted by the chosen metric | Next endpoint in sorted order |

In every case, billing follows the tier that actually served the request: if a provider sheds a tier request to its default tier, you're billed the default rate.

The variants are the recommended default, since a tier endpoint serves only when it wins on the metric you asked for. The `service_tier` parameter is the right choice when the tier itself matters more than how it compares, for example when you want flex pricing even where a default endpoint would be faster.

### Finding Tier Endpoints

Every tier endpoint is marked the same way, whichever provider sells it:

* On a model page, a tier endpoint shows a tier badge (`Fast`, `Turbo`, `Flex`, ...) next to the provider's name. The badge uses the provider's label; `Fast`, `Turbo`, `Highspeed`, and `Prime` are all the `priority` tier.
* In the [model endpoints API](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model.md), a tier endpoint carries `service_tier` (`priority`, `flex`, or `ultrafast`; `null` for a standard endpoint) and a tier-suffixed `tag` (for example `openai/fast` or `deepinfra/turbo`). Its `pricing` is what requests it serves are billed at.

Providers implement a tier in one of two ways: some expose it as a parameter on the same upstream model, others serve it as a dedicated upstream model id. A tier endpoint behaves the same in routing, in the `service_tier` request parameter and tier slugs, in the response's `service_tier` field, and in billing, whichever way its provider built it.

Listing doesn't change routing. Flex endpoints, ultrafast endpoints, and every tier endpoint of a closed-weight model are opt-in: they serve only when you request the tier or pin the provider, as described in [How Routing Works](#how-routing-works). Priority endpoints of open-weight models take part in default routing like any other endpoint, so you may be served by one without asking.

The response's `service_tier` field reports which tier was actually used. Possible values:

* `default`
* `flex`
* `priority`
* `ultrafast`
* `null` when no service tier is available from upstream

OpenRouter normalizes provider-equivalent base tier labels, such as Google's `standard`, to `default`. The exception is the Anthropic Messages API, which preserves `standard` to match Anthropic's spec (see [API Response Differences](#api-response-differences) below).

### API Response Differences

The API response includes a `service_tier` field that indicates which capacity tier was actually used to serve your request. The placement of this field varies by API format:

* **Responses API** (`/api/v1/responses`): `service_tier` is returned at the **top level** of the response object, matching OpenAI's native format.
* **Chat Completions API** (`/api/v1/chat/completions`): `service_tier` is returned at the **top level** of the response object, matching OpenAI's native format.
* **Messages API** (`/api/v1/messages`): `service_tier` is returned inside the **`usage` object**, matching Anthropic's native format.

#### `service_tier` value in the Messages API

Anthropic's spec uses `standard` rather than the OpenAI-style `default` as the base tier label. So the Messages API returns `service_tier: "standard"` where the Chat Completions and Responses APIs return `"default"`. Other tier values are returned unchanged.
