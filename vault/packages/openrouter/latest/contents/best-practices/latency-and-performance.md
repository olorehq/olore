> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Latency and Performance

> Understanding OpenRouter's performance characteristics and practical DX optimization recipes

OpenRouter is designed with performance as a top priority. OpenRouter is heavily optimized to add as little latency as possible to your requests.

## Minimal Overhead

OpenRouter is designed to add minimal latency to your requests. This is achieved through:

* Edge computing using Cloudflare Workers to stay as close as possible to your application
* Efficient caching of user and API key data at the edge
* Optimized routing logic that minimizes processing time

## Performance Considerations

### Cache Warming

When OpenRouter's edge caches are cold (typically during the first 1-2 minutes of operation in a new region), you may experience slightly higher latency as the caches warm up. This normalizes once the caches are populated.

### Credit Balance Checks

To maintain accurate billing and prevent overages, OpenRouter performs additional database checks when:

* A user's credit balance is low (single digit dollars)
* An API key is approaching its configured credit limit

OpenRouter expires caches more aggressively under these conditions to ensure proper billing, which increases latency until additional credits are added.

### Model Fallback

When using [model routing](https://openrouter.ai/docs/guides/routing/routers/auto-router.md) or [provider routing](https://openrouter.ai/docs/guides/routing/provider-selection.md), if the primary model or provider fails, OpenRouter will automatically try the next option. A failed initial completion unsurprisingly adds latency to the specific request. OpenRouter tracks provider failures, and will attempt to intelligently route around unavailable providers so that this latency is not incurred on every request.

***

## The Latency & DX Optimization Cookbook

When building interactive developer tools, coding agents, or low-latency conversational apps, total perceived latency is governed by two separate phases:

* **Time to First Token (TTFT):** Network transit + provider queue wait time + prompt prefill.
* **Streaming time:** The time from the first token to the last, set by the provider's decode speed.

OpenRouter's **throughput (TPS)** metric includes time to first token. For an individual request, it is output tokens divided by the time from sending the request to the provider until the response ends. Holding decode speed and other conditions constant, a slow first token lowers TPS, and shorter outputs have lower per-request TPS. Model pages, `sort: "throughput"`, and `preferred_min_throughput` use aggregated throughput statistics from eligible completions; very short completions are excluded from those aggregates. The formula below describes an individual request, not a latency prediction obtained by dividing your output length by a displayed provider percentile.

```text theme={null}
TPS ≈ Output Tokens / (TTFT + Streaming Time)
Total Latency ≈ TTFT + Streaming Time ≈ Output Tokens / TPS
```

Below are drop-in request configurations for common developer experience (DX) optimization scenarios. See the [provider routing guide](https://openrouter.ai/docs/guides/routing/provider-selection.md) for the full API reference on `sort`, `partition`, `preferred_max_latency`, and `preferred_min_throughput`.

### Recipe 1: Bounding Peak-Hour Queue Latency

**Scenario:** During peak global traffic hours (e.g. US morning rush), popular open-weight inference hosts can experience queue congestion, causing Time to First Token (TTFT) to spike.

**Solution:** Use `preferred_max_latency` with a percentile cutoff (such as `p90`).

```json theme={null}
{
  "model": "deepseek/deepseek-chat",
  "messages": [{ "role": "user", "content": "Explain continuous batching in 3 sentences." }],
  "provider": {
    "preferred_max_latency": {
      "p90": 2.5
    }
  }
}
```

* **Rolling 5-Minute Window:** Evaluates performance over the last 5 minutes, rapidly adapting when a host starts queueing.
* **Soft Reordering (Zero 404 Risk):** Providers that meet the threshold are promoted to the front of the candidate list. If all providers are experiencing high load, the request still executes on the best available host rather than failing closed.

***

### Recipe 2: The "Fastest Provider on a Budget"

**Scenario:** You want to minimize token costs without suffering through painfully slow streaming speeds (under 15 tokens/sec).

**Solution:** Combine `sort: "price"` with `preferred_min_throughput`.

```json theme={null}
{
  "model": "meta-llama/llama-3.3-70b-instruct",
  "messages": [{ "role": "user", "content": "Refactor this function to be async." }],
  "provider": {
    "sort": {
      "by": "price"
    },
    "preferred_min_throughput": {
      "p90": 40
    }
  }
}
```

* OpenRouter filters for hosts that have sustained at least 40 tokens/second for 90% of requests over the last 5 minutes, and routes to the **cheapest** provider within that high-throughput group.

***

### Recipe 3: Autonomous Agent Loops & Large Contexts

**Scenario:** Autonomous agent harnesses send 20,000 to 90,000+ input tokens per turn — often dominated by tool definitions when 80+ tools are registered. Re-computing attention over large contexts without a warm cache typically adds 5–10 seconds of prefill delay on every step.

**Solution:** Preserve sticky routing and provider KV caching across turns.

```json theme={null}
{
  "model": "~anthropic/claude-sonnet-latest",
  "session_id": "workspace-session-984a-4e21",
  "messages": [
    { "role": "system", "content": "You are a helpful coding assistant with access to local tools." },
    { "role": "user", "content": "Run test suite and fix failing cases." }
  ]
}
```

**Golden Rules for Agent Caching:**

1. **Pass a Consistent `session_id`:** OpenRouter stores a 10-minute best-effort pin directing follow-up turns back to the exact provider endpoint holding the warm KV cache.
2. **Keep the Prefix Static:** Ensure system prompts, repository maps, and tool definitions appear at the beginning of the prompt and remain byte-identical across turns. Dynamic timestamps or session metadata should be placed at the end.
3. **Keep the Model Slug Identical:** Changing from `~anthropic/claude-sonnet-latest` to `~anthropic/claude-sonnet-latest:nitro` mid-conversation invalidates the sticky key.
4. **Avoid Hardcoded `provider.order`:** Setting explicit `provider.order` disables sticky-session reordering and default routing. Note that [**Auto Exacto**](https://openrouter.ai/docs/guides/routing/auto-exacto.md#interaction-with-prompt-caching) can also change providers mid-session on tool-calling requests, overriding sticky routing when it deprioritizes the pinned provider.
5. **Shrink the Cached Prefix with Tool Search:** If your agent carries 80+ tool definitions, use the [`openrouter:tool_search`](https://openrouter.ai/docs/guides/features/server-tools/tool-search) server tool with `defer_loading: true` on all but your most frequently used tools. Only the loaded tools enter the prompt prefix, keeping the cacheable region small and reducing the cost of cold starts when routing changes providers.

***

### Recipe 4: Multi-Model Latency Flattening

**Scenario:** You have a fallback list of several interchangeable models (e.g. Claude Haiku, Llama 3.3 70B, Gemini 2.5 Flash). By default, OpenRouter tries all endpoints of Model A before attempting Model B, even if Model B is currently idle and faster.

**Solution:** Flatten the fallback grouping by setting `partition: "none"`.

```json theme={null}
{
  "models": [
    "~anthropic/claude-haiku-latest",
    "meta-llama/llama-3.3-70b-instruct",
    "google/gemini-2.5-flash"
  ],
  "messages": [{ "role": "user", "content": "Format this JSON object." }],
  "provider": {
    "sort": {
      "by": "throughput",
      "partition": "none"
    }
  }
}
```

* Setting `partition: "none"` pools all endpoints across all listed models and routes directly to whichever endpoint has the highest measured throughput right now.

***

## Quick Reference Summary

| Goal | Recommended Configuration | Latency Impact |
| :- | :- | :- |
| **Bound Worst-Case Peak Delays** | `preferred_max_latency: { p90: 2.5 }` | Evades congested queues; evaluates 5-min rolling percentiles. |
| **Fastest Generation on a Budget** | `sort: "price"` + `preferred_min_throughput: { p90: 40 }` | Prevents routing to oversubscribed slow commodity hosts. |
| **Agent Loops / Long Contexts** | Stable `session_id` + static prompt prefix | Slashes prefill time and cost (up to 80–90%) via provider KV cache. |
| **Shrink Tool-Heavy Prefixes** | `openrouter:tool_search` + `defer_loading: true` | Defer most tool definitions out of the prompt; keeps cacheable prefix lean and stable across turns. |
| **Global Speed Across Models** | `models: [...]` + `sort: { by: "throughput", partition: "none" }` | Routes to fastest available endpoint across all candidate models. |
