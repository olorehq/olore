> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Auto Exacto

> Automatic tool-calling provider optimization

Auto Exacto is a routing step that automatically optimizes provider ordering for all requests that include tools. It runs by default on every tool-calling request, requiring no configuration.

## How it works

When your request includes tools, Auto Exacto reorders the available providers for your chosen model using a combination of real-world performance signals:

* **Throughput.** Real-time tokens-per-second metrics (visible on the [Performance tab](https://openrouter.ai/models) of any model page).
* **Tool-calling success rate.** How reliably each provider completes tool calls (also visible on the Performance tab).
* **Benchmark data.** Results from OpenRouter's own benchmark harness, which continuously benchmarks eligible provider endpoints. See [What the benchmark harness runs](#what-the-benchmark-harness-runs) for the exact benchmarks and parameters, and [Where to find the scores](#where-to-find-the-scores) for where the results are published.

Providers that underperform on these signals are deprioritized, while providers with strong track records are moved to the front of the list.

## How tool-calling success rate is measured

The tool-calling success rate signal is derived from the **Tool Call Error Rate** metric, which is also visible on the Performance tab of any model page. For each request that includes tools, OpenRouter inspects every tool call the model returned and validates it against the schemas the caller supplied.

### Validator

Tool call `arguments` are validated against the corresponding `tools[].function.parameters` schema using [`@cfworker/json-schema`](https://www.npmjs.com/package/@cfworker/json-schema), pinned to **JSON Schema Draft 7**:

```ts lines theme={null}
new Validator(parameters, '7')
```

Tools whose `parameters` schema is absent or fails to compile are treated as having no schema and are always considered valid, so the metric is conservative when caller-side schemas are malformed.

### Regex engine

`@cfworker/json-schema` delegates `pattern` and `patternProperties` to the runtime's built-in regex implementation. In OpenRouter's environment that is the native JavaScript `RegExp` (V8 / ECMA-262). There is no ECMA-262-conformance shim layered on top, so JavaScript regex semantics differ in some edge cases from the regex dialect specified by JSON Schema.

### Per-tool-call classification

Each tool call is bucketed into one of three error categories, or counted as valid:

* **`InvalidJson`.** `JSON.parse(arguments)` throws.
* **`UnknownName`.** `function.name` is not present in the request's `tools[]`.
* **`SchemaMismatch`.** The validator returns `valid: false` against the resolved schema.

### Request-level aggregation

A request is flagged as errored if **any** of its tool calls falls into one of the three buckets above. The Tool Call Error Rate displayed per endpoint per day is then computed at the **request** level. Both the numerator and the denominator are counts of requests, not counts of individual tool calls:

```lines theme={null}
requests_with_tool_call_errors / requests_where_finish_reason_is_tool_calls
```

Put differently, of all the requests where the model finished by emitting tool calls, what fraction had at least one tool call that hit one of the three error buckets. A request with five tool calls and one invalid call counts as one errored request, not one-out-of-five.

When generation hits the request's token limit (any native finish reason that normalizes to `length`, such as `max_tokens` or `MAX_TOKENS`, or a bare Responses `incomplete`), the last tool call is recorded as `truncated-arguments` instead of `InvalidJson` or `SchemaMismatch` if its arguments fail to parse or never arrived, and it does not count as an error. A caller's `max_tokens` cutting off a tool call does not count against the provider. Earlier tool calls in the same response still count, and so does the last call when assistant text or reasoning followed it, because the limit then cut off that later output.

### Caveats

* Keywords introduced only in JSON Schema Draft 2019-09 or 2020-12 (for example `unevaluatedProperties`, `$dynamicRef`) are not enforced under Draft 7.
* JavaScript regex semantics differ from the ECMA-262 regex dialect formally referenced by JSON Schema, so `pattern` checks may behave differently than a strict JSON Schema implementation would.

## What the benchmark harness runs

The benchmark signal comes from OpenRouter's in-house benchmark harness, which runs on a recurring schedule against every provider endpoint serving an enrolled model. Two benchmarks currently feed Auto Exacto routing:

* **GPQA Diamond.** Graduate-level multiple-choice science questions. The benchmark fixes temperature at `0.5` (matching the reference openbench configuration), shuffles answer options deterministically per question, and runs 10 epochs (repeated passes over the dataset) by default.
* **Tau2-Bench Airline.** An agentic tool-calling benchmark where an LLM user-simulator drives multi-turn conversations against airline-domain tools, with a binary reward from final database-state, golden-action, and communication-information checks. The benchmark fixes temperature at `0`, and runs 1 epoch by default.

### How runs are executed

* Each benchmark run **pins a specific provider endpoint**, so every score is attributable to exactly one endpoint with no fallback. An additional unpinned run against OpenRouter's default routing is executed as a baseline.
* Tool-requiring presets are skipped on endpoints without tool support.
* Scores used for routing are each endpoint's current score, aggregated over a **rolling 32-day window**.
* Runs must meet a minimum sample-size floor to count (currently at least 50 GPQA questions and 45 Tau2 tasks), so partial or failed runs don't affect routing.

GPQA option shuffling deliberately differs from openbench. Openbench reseeds per record so the correct answer is always `B`, while this harness shuffles by index. GPQA numbers from this harness aren't directly comparable to openbench-published scores.

### How the benchmark threshold is set

Each model and benchmark type has a baseline: the median of per-endpoint scores during the first approximately 21 days of benchmarking for that model and benchmark type. The derank threshold is that baseline minus **2σ**. An endpoint's current rolling score is compared against this threshold.

Each window opens with the first qualifying result for that model and benchmark type, so different benchmark types for the same model can have different windows. While a window is still in progress, its baseline is provisional. OpenRouter recomputes it from all qualifying results collected so far, so each new qualifying result for that benchmark type (including one from another provider) can shift the threshold. Once that window closes, the baseline as currently constituted admits no results from later benchmark runs, and the threshold no longer moves when another provider's current score changes.

## Where to find the scores

Benchmark results are public:

* **Model pages.** The **AutoExacto Benchmarks** card on each enrolled model's page shows per-provider (and, where providers run multiple endpoints, per-endpoint) scores over the same rolling window used for routing.
* **Performance tab.** Throughput and tool-call error rate for each endpoint are on the Performance tab of every model page.

## Results

OpenRouter has measured improvements in [tau-bench](https://github.com/sierra-research/tau-bench) scores and tool-calling success rates on tool-calling requests routed through Auto Exacto. See the AutoExacto Benchmarks card on each enrolled model page for per-endpoint numbers.

## Interaction with Prompt Caching

Auto Exacto reorders providers on every tool-calling request, which can conflict with the sticky routing used by [prompt caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching.md). Sticky routing pins subsequent requests to the same provider endpoint to keep KV caches warm, while Auto Exacto may deprioritize that pinned provider mid-session when another endpoint's throughput or tool-calling success rate improves. In tool-calling agent loops, this can cause cache misses mid-conversation.

**When to opt out of Auto Exacto:**

If your agent loop sends large tool definitions on every turn and cache hit rate is your primary concern, disable Auto Exacto by setting `sort: "price"` in the `provider` object or using the `:floor` model variant. Without Auto Exacto, sticky routing keeps the same provider across turns without being overridden by performance reordering.

**When both matter:**

If you need Auto Exacto's provider optimization *and* warm caches, use [Tool Search](https://openrouter.ai/docs/guides/features/server-tools/tool-search.md) to defer the bulk of your tool definitions with `defer_loading: true`. A smaller cached prefix means a cold-start collision is far less expensive, making the interaction between Exacto and caching tolerable.

## Opting out

Without Auto Exacto, OpenRouter uses [default routing](https://openrouter.ai/docs/guides/routing/provider-selection.md#default-routing), which balances each provider's measured price against its throughput, latency, and reliability. Auto Exacto changes this for tool-calling requests by reordering providers based on quality signals.

If you want price-sorted routing for tool-calling requests instead, you can opt out by explicitly sorting by price using any of the following methods:

* **`provider.sort` parameter.** Set `sort` to `"price"` in the `provider` object of your request body. See [Provider Sorting](https://openrouter.ai/docs/guides/routing/provider-selection.md#provider-sorting) for details.
* **`:floor` virtual variant.** Append `:floor` to any model slug (e.g. `openai/gpt-4o:floor`) to sort by price. See [Floor Price Shortcut](https://openrouter.ai/docs/guides/routing/provider-selection.md#floor-price-shortcut).
* **Default sort in account settings.** Set your default provider sort to price in your [account settings](https://openrouter.ai/settings/preferences) to apply price sorting across all requests.

Any of these will bypass Auto Exacto and sort providers by price.
