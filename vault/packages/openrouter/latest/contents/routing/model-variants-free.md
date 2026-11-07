> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Free Variant

> Access free models with the :free variant

The `:free` variant allows you to access free versions of models on OpenRouter.

## Usage

Append `:free` to the ID of a model that has a free entry. `:free` is a [catalog variant](https://openrouter.ai/docs/guides/routing/model-variants/overview.md), so the free version appears as its own entry in the [models API](https://openrouter.ai/docs/guides/overview/models.md) with its own pricing, context length, and endpoints, and only models that list one support it:

```json lines theme={null}
{
  "model": "meta-llama/llama-3.2-3b-instruct:free"
}
```

## Details

Free variants provide access to models without cost, but may have different rate limits or availability compared to paid versions.

> [!WARNING]
>
> **Fallbacks to paid models are billed**
>
> If you list a `:free` model in a [`models` fallback array](https://openrouter.ai/docs/guides/routing/model-fallbacks), OpenRouter tries the next model in the array when the free model is rate-limited, unavailable, or has no endpoint that supports your request. Each model is billed at its own price, so a fallback to a paid model incurs charges even though the first model was `:free`. To keep a request free, list only `:free` models in `models`, or use the [Free Models Router](https://openrouter.ai/docs/guides/routing/routers/free-router.md) (`openrouter/free`) on its own, which falls back only to other free models.

## Related Resources

* [Free Models Router](https://openrouter.ai/docs/cookbook/get-started/free-models-router-playground.md) - Learn how to use the Free Models Router in the Chat Playground for zero-cost inference
