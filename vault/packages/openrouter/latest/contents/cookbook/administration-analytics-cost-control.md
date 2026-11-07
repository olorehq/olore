> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Control Costs with the Analytics API

> Hand your coding agent a management key and the analytics skill, then ask it where your money is going

**Goal:** Run a cost review on your OpenRouter account using your coding agent, the [Analytics API](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data.md), and the [openrouter-analytics skill](https://github.com/OpenRouterTeam/skills/tree/main/skills/openrouter-analytics).

**Outcome:** A set of query recipes and agent prompts for digging into your own usage data: which models burn the most, which API keys cause it, and what to repoint or cache.

> [!TIP]
>
> Then copy this prompt into your agent to run the full cost review.

> [!WARNING]
>
> Analytics queries need a **management key** from [Settings → Management Keys](https://openrouter.ai/settings/management-keys). Regular inference keys get a 403. Management keys can't make model requests, so the whole workflow is read-only and free, but the data it returns is your org's full spend breakdown. Treat the key like any other credential.

## Before you start

You need:

* A management key your agent can read; the skill's scripts expect it in `OPENROUTER_API_KEY` (or passed via `--api-key`)
* Node.js with `npx` if you use the skill's scripts (they run via `npx tsx`)
* A coding agent (Claude Code, Devin, Cursor, or anything that can run shell commands)
* At least a few weeks of real usage on your account, or there's nothing to analyze

Use these references for exact schemas:

* [Query analytics endpoint](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data.md)
* [Get analytics metadata](https://openrouter.ai/docs/api/api-reference/analytics/get-available-analytics-metrics-and-dimensions.md)
* [Management API keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md)
* [openrouter-analytics skill](https://github.com/OpenRouterTeam/skills/tree/main/skills/openrouter-analytics)

## What you're building

A cost review your agent runs for you. The conversation starts with one question:

```text lines theme={null}
how can I reduce costs for next month?
```

The agent discovers the schema, pulls spend grouped by model, flags the lines where effective price per token is far above your blended rate (total spend divided by total tokens across all traffic, scaled to \$ per million tokens), drills into the API keys behind those lines, and hands you actions ranked by dollar impact.

We ran this internally and found a preview model burning \~\$6.2K/month at roughly 25x the org's blended rate. One drill-down query later, 98% of it traced to a single batch-pipeline key running a task that never needed a frontier model. The fix was a one-line model swap.

The recipes below are the building blocks of that review. Each one is a prompt you can paste into your agent, followed by an under-the-hood look at the query the agent generates and the shape of what comes back.

## Setup: install the skill and discover the schema

The skill bundles runnable query scripts so your agent doesn't hand-write `curl` calls:

```bash lines theme={null}
git clone https://github.com/OpenRouterTeam/skills
cd skills/skills/openrouter-analytics/scripts && npm install
```

Schema discovery comes first. Metrics and dimensions evolve, so query what's actually there instead of trusting a doc snapshot:

```bash lines theme={null}
npx tsx discover-schema.ts
```

Or hit the endpoint directly:

```bash lines theme={null}
curl https://openrouter.ai/api/v1/analytics/meta \
  -H "Authorization: Bearer $OPENROUTER_API_KEY"
```

The response lists every metric, dimension, filter operator, and granularity the API currently supports; the [meta endpoint reference](https://openrouter.ai/docs/api/api-reference/analytics/get-available-analytics-metrics-and-dimensions.md) shows the full shape. Spend metrics (`total_usage`, `usage_*`) are in USD. Token metrics are native tokens. `cache_hit_rate` is a 0 to 1 ratio.

Two things to know before reading any output: count metrics can come back as **strings** (the reference's example shows them as numbers, so parse defensively and accept both), and `metadata.truncated` tells you whether the result hit the row limit. If it's `true`, your totals are partial; raise `limit` or narrow the query before drawing conclusions.

The API caps queries at 2 dimensions; a third returns a 400 (`dimensions: Too big: expected array to have <=2 items`, observed June 2026, and behavioral details like this can drift). If your agent needs another angle (say, model by key by day), it should run separate queries or add a time-axis `granularity` instead.

## Recipe: which models burn the most?

The widest-angle question, and the right one to start with:

```text lines theme={null}
Break down my OpenRouter spend by model for last month. Compute the
effective $/Mtok for each model and flag anything far above my
blended rate.
```

Under the hood, your agent generates a query like this (one POST to `/api/v1/analytics/query` with the management key):

```json lines theme={null}
{
  "metrics": ["total_usage", "request_count", "tokens_total", "cache_hit_rate"],
  "dimensions": ["model"],
  "order_by": { "field": "total_usage", "direction": "desc" },
  "time_range": { "start": "2026-05-01T00:00:00Z", "end": "2026-06-01T00:00:00Z" },
  "limit": 10
}
```

An explicit `time_range` matters: without one the API defaults to a recent window that may miss the month you asked about.

Sample response shape (1 row shown):

```json lines theme={null}
{
  "data": {
    "data": [
      {
        "model": "openrouter/owl-alpha",
        "total_usage": 0.005,
        "request_count": "6",
        "tokens_total": "6331",
        "cache_hit_rate": 0.17561310238381067
      }
    ],
    "metadata": { "query_time_ms": 17, "row_count": 1, "truncated": false }
  }
}
```

From here the agent computes `total_usage / tokens_total * 1e6` for each row to get an effective \$/Mtok per model (spend over tokens gives dollars per single token; the 1e6 scales it to dollars per million tokens, the unit model pricing is quoted in). Compare each against your blended rate: the same calculation run with no dimensions, so it covers all traffic in the window. A model priced at a large multiple of the blended rate is the strongest signal to chase, but you may not find one; if every model sits near the blended rate, your spend matches your pricing and the levers are elsewhere (cache rate, prompt size, or feature surcharges, covered in the recipes below). In the internal run above, the flagged model had spent \$6,185 on 0.25B tokens (6185 / 250000000 \* 1e6 ≈ \$24.7/Mtok) with a 7.6% cache rate, about 25x that org's blended rate.

## Recipe: which keys drive a model's cost?

The model row shows where spend concentrates, but the thing you can change is the key, app, or pipeline calling that model. This works whether the model is an outlier or just your biggest fairly-priced line, since the per-key split still shows which workload to optimize:

```text lines theme={null}
My spend on google/gemini-3-flash-preview looks too high. Which of
my API keys is behind it, and what is each one doing?
```

Under the hood, the agent filters to that model and groups by `api_key_id` using a `filters` array on the request body:

```json lines theme={null}
{
  "metrics": ["total_usage", "tokens_total", "request_count"],
  "dimensions": ["api_key_id"],
  "filters": [
    { "field": "model", "operator": "eq", "value": "google/gemini-3-flash-preview" }
  ],
  "order_by": { "field": "total_usage", "direction": "desc" },
  "time_range": { "start": "2026-05-01T00:00:00Z", "end": "2026-06-01T00:00:00Z" },
  "limit": 10
}
```

`api_key_id`, `app`, and `workspace` resolve to human-readable names in the response, so each row names the key directly. Here's the row shape, filled with the internal run's numbers (rounded, key name changed):

```json lines theme={null}
{
  "api_key_id": "batch-pipeline",
  "total_usage": 6067.0,
  "tokens_total": "127000000",
  "request_count": "37000"
}
```

The `user` dimension is the exception: grouping by `user` returns **two** fields per row instead of one. `user` is the account's display name (or `null` when the user has no name set), and `user_email` is their email (`null` when the user has no email on file). The raw user ID is never returned, so use `user_email` to cross-reference users against your own records:

```json lines theme={null}
{ "user": "Ada Lovelace",  "user_email": "ada@example.com", "request_count": 42 }
{ "user": null,            "user_email": "grace@example.com", "request_count": 7 }
{ "user": "Alan Turing",   "user_email": null,               "request_count": 3 }
```

In the internal run, this is where the recommendation wrote itself: a batch-pipeline key doing 37K requests at \~\$48/Mtok is high-volume, low-complexity work on the wrong model. Repointing it to a cheap production model recovers the whole line item at near-zero risk.

A sharper variant of the same prompt skips the model step entirely:

```text lines theme={null}
Are any of my keys calling preview or frontier models for high-volume
batch work? Estimate the savings from moving each one to a cheaper
production model.
```

## Recipe: what did the money actually buy?

`total_usage` is a single number. The `usage_*` components split it into what each dollar paid for:

```text lines theme={null}
Break my OpenRouter spend into components: raw inference, caching,
discounts, web search, and file parsing. Are surcharges or cache
writes a meaningful slice?
```

Under the hood, the agent queries the component metrics over a time axis:

```json lines theme={null}
{
  "metrics": ["usage_upstream", "usage_cache", "usage_data", "usage_web", "usage_file"],
  "granularity": "day",
  "time_range": { "start": "2026-05-01T00:00:00Z", "end": "2026-06-01T00:00:00Z" }
}
```

Each row carries a time-series key named `date__<granularity>` or `created_at__<granularity>` (here, `created_at__day`) depending on which data source the query resolves to, so accept either prefix. The rest of the row is the components in USD. Unused components come back as `null`, not 0:

* `usage_upstream`: raw inference cost
* `usage_cache`: what caching saved (or cost, for cache writes)
* `usage_data`: discounts, typically negative
* `usage_web`, `usage_file`: web search and file parsing surcharges

If `usage_web` or `usage_file` is a meaningful slice, the fix is gating those features. If `usage_cache` savings are near zero on a prompt-heavy workload, caching is your lever. And if cache rates are already high, skip the caching advice entirely; in the internal run, caching was near-maxed and the only real lever was model mix.

## Recipe: is my workload prompt-heavy?

The token shape decides whether caching or prompt trimming is worth the effort:

```text lines theme={null}
Is prompt caching saving me anything? Show prompt vs completion
tokens, reasoning tokens, and cache_hit_rate by model, and tell me
where caching would pay off.
```

Under the hood:

```json lines theme={null}
{
  "metrics": ["tokens_prompt", "tokens_completion", "reasoning_tokens", "cache_hit_rate"],
  "dimensions": ["model"],
  "order_by": { "field": "tokens_prompt", "direction": "desc" },
  "time_range": { "start": "2026-05-01T00:00:00Z", "end": "2026-06-01T00:00:00Z" },
  "limit": 10
}
```

A 20:1 prompt-to-completion ratio points at oversized context, and a large `reasoning_tokens` share means you're paying for thinking you may not need. Pair the ratio with `cache_hit_rate`: prompt-heavy traffic with a low cache rate is the textbook caching win, while prompt-heavy traffic with a high cache rate is already optimized and the lever moves back to model mix.

## Recipe: did spend actually change?

Grouping spend over a time axis covers 2 jobs: finding what changed when a bill jumps, and verifying that a fix landed. For the first:

```text lines theme={null}
My OpenRouter bill doubled this month. Find what changed, comparing
this month's spend by model and key against last month's.
```

Under the hood, the agent groups per-key spend over a weekly time axis:

```json lines theme={null}
{
  "metrics": ["total_usage"],
  "dimensions": ["api_key_id"],
  "granularity": "week",
  "time_range": { "start": "2026-05-01T00:00:00Z", "end": "2026-07-01T00:00:00Z" }
}
```

Sample output:

```json lines theme={null}
{
  "data": {
    "data": [
      { "date__week": "2026-06-07", "api_key_id": "batch-pipeline", "total_usage": 11.2 },
      { "date__week": "2026-05-31", "api_key_id": "batch-pipeline", "total_usage": 1402.5 }
    ],
    "metadata": { "query_time_ms": 7, "row_count": 2, "truncated": false }
  }
}
```

For the bill-doubled case, the key (or model, if the agent groups by `model` instead) whose weekly line jumped is your culprit. For verification, ask the agent to re-run the same query after a fix ships: a successful repoint shows the key's weekly `total_usage` falling off a cliff at the deploy date, like the sample above.

Filter values must match what the dimension stores internally, so agents should filter on `model` slugs (which they know exactly) and group by `api_key_id` rather than filtering on resolved key names. Save the prompts that worked and re-run them monthly; the copy-prompt at the top chains all of these recipes into one full review.

## Next steps

* Read the [Analytics API reference](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data.md) for exact request and response schemas.
* Drill from an aggregate into individual requests with the `generation_id` dimension, then inspect them with the [openrouter-generations skill](https://github.com/OpenRouterTeam/skills/tree/main/skills/openrouter-generations).
* Set [credit limits on keys](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key.md) once you know which ones drift.
* Add [usage accounting](https://openrouter.ai/docs/cookbook/administration/usage-accounting.md) to get per-request cost in your own logs.
* Use [prompt caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching.md) where this review showed low cache rates on prompt-heavy traffic.
