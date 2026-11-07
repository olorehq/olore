> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Nitro Variant

> High-speed model inference with :nitro

The `:nitro` variant optimizes for speed. When you use `:nitro`, OpenRouter sorts the model's providers by throughput (tokens per second) and also makes [priority service tier](https://openrouter.ai/docs/guides/features/service-tiers.md) endpoints eligible, so a provider's priority tier can serve the request when it is genuinely the fastest option.

## Usage

Append `:nitro` to any model ID:

```json lines theme={null}
{
  "model": "openai/gpt-5.2:nitro"
}
```

## How it works

`:nitro` does two things:

1. **Sorts all eligible endpoints by throughput**, the same effect as setting [`provider.sort` to `"throughput"`](https://openrouter.ai/docs/guides/routing/provider-selection#provider-sorting).
2. **Admits priority service tier endpoints** into the eligible pool. Unlike the [`service_tier: "priority"` parameter](https://openrouter.ai/docs/guides/features/service-tiers), priority endpoints get no special treatment: they compete with every other endpoint on measured throughput, and win only when they are actually the fastest.

Because priority tier endpoints are billed at priority rates, a `:nitro` request served by a priority endpoint is charged that endpoint's priority pricing. As always, billing follows the tier the provider actually serves: if the provider sheds the request to its default tier, you're billed the default rate. See [Service Tiers](https://openrouter.ai/docs/guides/features/service-tiers.md) for the full comparison of tier-selection options.

`:nitro` does not admit `ultrafast` endpoints. To use OpenAI's [Ultrafast mode](https://developers.openai.com/api/docs/guides/ultrafast-mode) tier, set [`service_tier: "ultrafast"`](https://openrouter.ai/docs/guides/features/service-tiers) or name the `openai/ultrafast` endpoint slug in `provider.order` or `provider.only`.

If you want throughput sorting without priority tier eligibility, set `provider.sort` to `"throughput"` instead of using `:nitro`.
