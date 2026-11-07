> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Model Variants

> How variant suffixes relate to the models catalog and how clients should resolve them

A variant is a suffix appended to a model ID with a colon, such as `openai/gpt-5.2:nitro`. There are two kinds, and they behave differently in the [Models API](https://openrouter.ai/docs/guides/overview/models.md). Clients that resolve model metadata from the requested model ID, including SDKs, coding agents, and model pickers, need to handle both.

* **Catalog variants** are separate entries in `GET /api/v1/models` with their own metadata. Only the models that list them support them.
* **Routing variants** are accepted on any model ID at request time. They are not listed in `GET /api/v1/models` and change only how the request is routed. The model's metadata is the base model's.

> [!NOTE]
>
> `GET /api/v1/models` is a catalog of models and catalog variants. It is not an exhaustive list of every model string a request can use. `openai/gpt-5.2:nitro` is a valid request `model` even though no entry with that `id` exists.

## Catalog variants

A catalog variant is a distinct entry in the models API. Its `id` carries the suffix, and its `pricing`, `context_length`, `supported_parameters`, and endpoints describe that entry and can differ from the base model. For example, a `:free` entry can have a shorter context window than its base model, and its pricing is zero.

| Suffix | Status | Meaning |
| - | - | - |
| `:free` | Active | A free-tier version of the model with its own rate limits and endpoints. See [Free](https://openrouter.ai/docs/guides/routing/model-variants/free.md). |
| `:batch` | Active | The batch-priced version of the model, served by the [Batch API](https://openrouter.ai/docs/batch-quickstart.md). The Batch API takes the base model slug and resolves the `:batch` entry itself. The entry describes the pricing and endpoints that apply to batched requests. |
| `:thinking` | Deprecated | Reasoning enabled by default on models that shipped a dedicated reasoning endpoint. Use the `reasoning` parameter instead. See [Thinking](https://openrouter.ai/docs/guides/routing/model-variants/thinking.md). |
| `:extended` | Deprecated | Larger context window on models that offered one. No model currently offers it. See [Extended](https://openrouter.ai/docs/guides/routing/model-variants/extended.md). |

Sending a catalog suffix on a model that has no such entry does not fall back to the base model. The single-model lookup returns `404`, the endpoint lookup returns `200` with an empty `endpoints` array, and inference requests fail because there is no endpoint to route to.

## Routing variants

A routing variant is accepted on every model ID and is never an entry in the models API. It changes provider ordering or eligibility for the request, and nothing else about the model. Context length, capabilities, supported parameters, and the base per-token price all come from the base model's entry.

| Suffix | Status | Effect on routing |
| - | - | - |
| `:nitro` | Active | Sorts providers by throughput and admits [priority service tier](https://openrouter.ai/docs/guides/features/service-tiers.md) endpoints. A request served by a priority endpoint is billed at that endpoint's priority rate. See [Nitro](https://openrouter.ai/docs/guides/routing/model-variants/nitro.md). |
| `:floor` | Active | Sorts providers by price and admits [flex service tier](https://openrouter.ai/docs/guides/features/service-tiers.md) endpoints. A request served by a flex endpoint is billed at that endpoint's flex rate. See [Floor](https://openrouter.ai/docs/guides/routing/model-variants/floor.md). |
| `:exacto` | Active | Sorts providers by quality signals tuned for tool-calling reliability. See [Exacto](https://openrouter.ai/docs/guides/routing/model-variants/exacto.md). |
| `:online` | Deprecated | Attaches web search results to the prompt. Use the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search) instead. See [Online](https://openrouter.ai/docs/guides/routing/model-variants/online.md). |

Because `:nitro` and `:floor` can select a service tier endpoint, the price actually charged for a request can differ from the base entry's `pricing`. The response reports the tier that served the request, as described in [Service Tiers](https://openrouter.ai/docs/guides/features/service-tiers.md).

## Combining suffixes

Suffixes can be combined in any order, separated by colons. A model ID carries at most one catalog variant and any number of routing variants.

```text theme={null}
poolside/laguna-s-2.1:free:nitro
openai/gpt-5.2:nitro:exacto
```

When more than one sorting variant is present (`:nitro`, `:floor`, `:exacto`), the last one in the ID determines the sort.

Only the suffixes listed on this page are variants. Do not rely on any other suffix.

## Resolving a model ID to its catalog entry

Send the model ID exactly as the user wrote it in the request `model` field, and resolve metadata separately. The rule is:

1. Split the ID on `:`. The first segment is the base slug.
2. Keep the catalog variant if one is present (`:free`, `:batch`, `:thinking`, `:extended`). Drop every routing variant (`:nitro`, `:floor`, `:exacto`, `:online`).
3. The result is the `id` of the catalog entry to read metadata from.

```text theme={null}
openai/gpt-5.2:nitro           -> openai/gpt-5.2
openai/gpt-5.2:nitro:exacto    -> openai/gpt-5.2
poolside/laguna-s-2.1:free     -> poolside/laguna-s-2.1:free
poolside/laguna-s-2.1:free:nitro -> poolside/laguna-s-2.1:free
```

Do not strip every suffix. Stripping `:free` resolves to the paid entry, which can report a larger context window and non-zero pricing, neither of which describes the free entry that serves the request.

### Letting the API resolve it

The single-model and endpoint lookup routes accept any suffix and apply this rule server-side, so a client can pass the requested ID through unchanged:

```bash lines theme={null}
# Routing variants resolve to the base entry
curl "https://openrouter.ai/api/v1/model/openai/gpt-5.2:nitro"
# -> { "data": { "id": "openai/gpt-5.2", ... } }

# Catalog variants resolve to their own entry
curl "https://openrouter.ai/api/v1/model/poolside/laguna-s-2.1:free"
# -> { "data": { "id": "poolside/laguna-s-2.1:free", ... } }

# Mixed IDs keep the catalog variant and drop the routing variants
curl "https://openrouter.ai/api/v1/model/poolside/laguna-s-2.1:free:nitro"
# -> { "data": { "id": "poolside/laguna-s-2.1:free", ... } }

# Endpoint listings behave the same way
curl "https://openrouter.ai/api/v1/models/openai/gpt-5.2:nitro/endpoints"
# -> { "data": { "id": "openai/gpt-5.2", "endpoints": [ ... ] } }
```

When the resolved catalog entry does not exist, for example `:free` on a model with no free entry, the single-model route returns `404` and the endpoints route returns `200` with `"endpoints": []`. Treat either as an unavailable model, not as a signal to retry with the base slug.

```bash lines theme={null}
curl "https://openrouter.ai/api/v1/model/openai/gpt-5.2:free"
# -> 404

curl "https://openrouter.ai/api/v1/models/openai/gpt-5.2:free/endpoints"
# -> { "data": { "id": "openai/gpt-5.2:free", "endpoints": [] } }
```

### Offering routing variants in a model picker

Because routing variants are not in the catalog, a picker built from `GET /api/v1/models` will not show them. To make them selectable, derive them from the base entries. Every model entry accepts `:nitro`, `:floor`, and `:exacto`, and the picker can present them as options on the base model while continuing to read metadata from the base entry. `GET /api/v1/models/{author}/{slug}/endpoints` lists the providers the sort will apply to.
