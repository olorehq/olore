> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Broadcast

> Send traces from your OpenRouter requests to external observability platforms

Broadcast is the part of OpenRouter's observability suite that ships your data out. It is configured under **Settings > Observability** in your dashboard, and it automatically sends traces from your OpenRouter requests to external observability and analytics platforms. This feature enables you to monitor, debug, and analyze your LLM usage across your preferred tools without any additional instrumentation in your application code.

## Enabling Broadcast

To enable broadcast for your account or organization:

1. Navigate to [Settings > Observability](https://openrouter.ai/settings/observability) in your OpenRouter dashboard
2. Toggle the "Enable Broadcast" switch to turn on the feature
3. Add one or more destinations where you want to send your traces

> [!TIP]
>
> If you're using an organization account, you must be an organization admin to edit broadcast settings.

Once enabled, OpenRouter will automatically send trace data for all your API requests to your configured destinations.

## Supported Destinations

The following destinations are currently available:

* [Arize AX](https://openrouter.ai/docs/guides/features/broadcast/arize.md)
* [Braintrust](https://openrouter.ai/docs/guides/features/broadcast/braintrust.md)
* [ClickHouse](https://openrouter.ai/docs/guides/features/broadcast/clickhouse.md)
* [Comet Opik](https://openrouter.ai/docs/guides/features/broadcast/opik.md)
* [Datadog](https://openrouter.ai/docs/guides/features/broadcast/datadog.md)
* [Elastic Observability](https://openrouter.ai/docs/guides/features/broadcast/elastic.md)
* [Google BigQuery](https://openrouter.ai/docs/guides/features/broadcast/bigquery.md)
* [Grafana Cloud](https://openrouter.ai/docs/guides/features/broadcast/grafana.md)
* [Hugging Face Storage Buckets](https://openrouter.ai/docs/guides/features/broadcast/hugging-face.md)
* [Langfuse](https://openrouter.ai/docs/guides/features/broadcast/langfuse.md)
* [LangSmith](https://openrouter.ai/docs/guides/features/broadcast/langsmith.md)
* [New Relic](https://openrouter.ai/docs/guides/features/broadcast/newrelic.md)
* [OpenTelemetry Collector](https://openrouter.ai/docs/guides/features/broadcast/otel-collector.md)
* [PostHog](https://openrouter.ai/docs/guides/features/broadcast/posthog.md)
* [Raindrop](https://openrouter.ai/docs/guides/features/broadcast/raindrop.md)
* [Ramp](https://openrouter.ai/docs/guides/features/broadcast/ramp.md)
* [S3 / S3-Compatible](https://openrouter.ai/docs/guides/features/broadcast/s3.md)
* [Sentry](https://openrouter.ai/docs/guides/features/broadcast/sentry.md)
* [Snowflake](https://openrouter.ai/docs/guides/features/broadcast/snowflake.md)
* [W\&B Weave](https://openrouter.ai/docs/guides/features/broadcast/weave.md)
* [Webhook](https://openrouter.ai/docs/guides/features/broadcast/webhook.md)

Each destination has its own configuration requirements, such as API keys, endpoints, or project identifiers. When adding a destination, you'll be prompted to provide the necessary credentials which are encrypted and stored securely.

For the most up-to-date list of available destinations, visit the [Broadcast settings page](https://openrouter.ai/settings/observability) in your dashboard.

## Trace Data

Each broadcast trace includes comprehensive information about your API request:

* **Request & Response Data**: The input messages and model output (with multimodal content stripped for efficiency)
* **Token Usage**: Prompt tokens, completion tokens, and total tokens consumed
* **Cost Information**: The total cost of the request
* **Timing**: Request start time, end time, and latency metrics
* **Model Information**: The model slug and provider name used for the request
* **Model Parameters**: The sampling parameters the request set (`temperature`, `top_p`, `top_k`, `frequency_penalty`, `presence_penalty`, `repetition_penalty`, `min_p`, `top_a`, `seed`, `max_completion_tokens`, `max_tokens` or `max_output_tokens` as `max_tokens`, and `stop` as `stop_sequences`). OpenTelemetry destinations export them as `gen_ai.request.*` attributes. Privacy Mode keeps them, including `stop`, which is text you wrote and can come from your prompt.
* **Tool Usage**: Whether tools were included in the request and if tool calls were made

### Token and cost fields

Use the root `GENERATION` observation for usage reporting. Its `promptTokens` and `completionTokens` are the token counts used by OpenRouter's accounting layer, normally derived from provider-reported usage. Provider-attempt and timing `SPAN` observations do not carry generation totals.

| Observation field | Meaning |
| - | - |
| `promptTokens`, `completionTokens`, `totalTokens` | Accounted input, output, and total tokens. These can contain fallback estimates when provider usage is missing. |
| `promptTokensDetails.cachedTokens` | Tokens read from the provider's prompt cache. |
| `promptTokensDetails.cacheWriteTokens` | Tokens written to the provider's prompt cache. Uses the provider-reported aggregate when available; otherwise the pricing layer's cache-write quantity. |
| `promptTokensDetails.cacheCreation.ephemeral_5m_input_tokens` | Cache-write tokens with a five-minute TTL, when the provider reports a complete breakdown. |
| `promptTokensDetails.cacheCreation.ephemeral_1h_input_tokens` | Cache-write tokens with a one-hour TTL, when the provider reports a complete breakdown. |
| `promptTokensDetails.audioTokens`, `promptTokensDetails.videoTokens` | Available multimodal input-token breakdowns. |
| `completionTokensDetails.reasoningTokens`, `completionTokensDetails.imageTokens` | Available reasoning and image output-token breakdowns. |
| `inputCost`, `outputCost` | Prompt and completion portions of the inference cost in USD. |
| `totalCost` | The total OpenRouter charge in USD, including applicable fees and plugin charges. |

Enable **Cost** under **Additional generation metadata** on each destination to include the following fields in `metadata.openrouter_generation`. They remain available in Privacy Mode.

| Metadata field | Meaning |
| - | - |
| `cache_write_tokens` | The same cache-write total as `promptTokensDetails.cacheWriteTokens`. |
| `cache_creation` | The same TTL breakdown as `promptTokensDetails.cacheCreation`. |
| `native_server_tool_use` | Available per-tool counts for provider-native server tools; see below. |
| `usage_is_estimated` | `true` when accounting used a fallback prompt or completion quantity, or fallback pricing after a usage-calculation failure. `false` means those fallback paths were not used. |
| `is_long_context` | `true` when the endpoint's long-context pricing tier was selected because the prompt exceeded `long_context_threshold`. Null when the endpoint has no long-context pricing tier, or when the charge did not come from token rates (for example, a provider-reported direct cost). Waived charges (refunds, free endpoints, promotions, unbilled refusals) still report the tier the prompt fell into; `cost` shows the waiver. |
| `long_context_threshold` | The prompt-token threshold that decided `is_long_context`. For endpoints with several long-context tiers, the highest tier the prompt exceeded, or the lowest tier when none was exceeded. |
| `usage` | The OpenRouter charge, matching the generation's total cost. |
| `is_byok` | Whether the generation used your provider key. |
| `byok_usage_inference` | Reference inference cost for BYOK, not an additional OpenRouter charge or your provider's invoice amount. |
| `routed_service_tier` | The service tier (`default`, `flex`, `priority`, or `ultrafast`) of the endpoint OpenRouter routed the final attempt to. |
| `billed_service_tier` | The service tier the generation was priced at. When the provider reports serving a different tier than the one routed to (for example, a `priority` request shed to `default`), this is the reported tier. Anthropic fast mode, including dedicated `*-fast` models, is exported as `priority`. For BYOK requests, this is the tier your provider reported serving (which your provider invoices); when the provider reports none, it is the routed tier, or `null` for a default endpoint. |
| `cancelled` | The generation's stored `cancelled` flag. On chat, `true` when OpenRouter aborted the upstream provider request. On streaming image generation, `true` when the client disconnected before receiving the full response, even though the upstream is drained rather than aborted. See the table below for each surface. |
| `upstream_id` | The provider's own identifier for the final attempt, as `{ value, source }`. `source` is `response_body_id` (the ID in the response body, such as `chatcmpl-...`), `http_request_id` (a provider request-ID header such as `request-id`, `x-request-id`, or `x-amzn-requestid`), or `task_job_id` (an async job ID). Use it to find the request in your provider's logs. |
| `gateway_request_id` | The request ID the called host sets in its own provider-specific header, as `{ value, header }`, for example Azure's `apim-request-id`. Absent when the host only sends generic request-ID headers. |
| `endpoint_region` | Where the final attempt's upstream endpoint processed the request, usually the cloud region (for example `eastus2` or `us-east-1`). A Bedrock geographic inference profile gives its geography (`us`, `eu`, `apac`). Absent when unknown or when the request was processed globally. |
| `endpoint_deployment_type` | How the final attempt's deployment is priced by location: `global`, `data_zone` (for example an Azure US data zone deployment or a Bedrock `us.*` profile), or `regional`. Absent when unknown. |
| `endpoint_deployment_type_source` | `inferred` when OpenRouter derived `endpoint_deployment_type` from its endpoint configuration, or `declared` when it comes from the deployment type set on your BYOK key. |

Both tier fields are also exported with **Request context**, alongside `requested_service_tier`: the tier the request asked for after presets are applied, with `fast` normalized to `priority`. Tiers implied by a `:nitro` (`priority`) or `:floor` (`flex`) model variant, by a dedicated Anthropic `*-fast` model (`priority`), or by tier-suffixed provider slugs such as `openai/priority` in `provider.order` or `provider.only`, are included when `service_tier` is not set. Compare `requested_service_tier` with `billed_service_tier` to find requests that were not served at the tier they asked for. The existing `service_tier` field, also under **Request context**, is the provider's own reported tier value as returned upstream; it is `null` when the provider reports none and is not used for pricing.

**Request context** also exports `provider_preferences`: the routing keys of the request's [`provider` object](https://openrouter.ai/docs/guides/routing/provider-selection) after presets are applied, such as `sort`, `order`, `only`, `ignore`, `allow_fallbacks`, `quantizations`, and `max_price`, exactly as sent. Provider-specific `options` are left out. It is `null` when the request set no provider preferences (empty lists and objects don't count), or when the routing keys serialize to more than 64 KiB. The deprecated top-level `max_price` is not included even though routing applies it; read it from the request body. Sorting implied by a `:nitro` or `:floor` model variant or by `service_tier` is not included; see the `model` and `requested_service_tier` fields for those.

The following **Request context** fields are also exported with **Cost**, because they select or multiply a rate: `model` (the versioned model permaslug), `api_type`, `web_search_engine`, `num_search_results`, `num_fetches`, `num_media_prompt`, `num_input_audio_prompt`, and `num_media_completion`.

#### Provider request IDs and endpoint location

Each provider attempt span also carries its own `upstream_id`, `gateway_request_id`, `endpoint_region`, `endpoint_deployment_type`, and `endpoint_deployment_type_source`, including failed attempts, so you can match a failed or retried attempt to your provider's logs. The fields in `openrouter_generation` describe the final attempt; when every attempt fails, they describe the last failed attempt. `upstream_id` and `gateway_request_id` are exported with either **Cost** or **Request context**; the endpoint location fields are exported only with **Cost**. Attempt spans follow the same opt-ins. An attempt made with your own provider key also carries `byok_provider_key_id` and the key's name as `byok_provider_key_name` (omitted for an unnamed key), `byok_health_routing_enabled` (present only on enrolled requests; `true` when BYOK health routing ranked the request's candidates, `false` otherwise), and `byok_demotion_reason` (`rejected` or `degraded`) when health routing had moved that key behind healthy candidates at routing time. All four appear only with **Cost**.

For BYOK keys that send requests to a resource you own, such as Azure OpenAI or OpenAI keys, or keys that pin a cloud region, such as Amazon Bedrock and Google Vertex keys, OpenRouter can't tell where or how the deployment is priced, so these fields are omitted. For Azure keys, set **Deployment type** (**Global**, **Data zone**, or **Regional**) on each key on the [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) page to export it as `endpoint_deployment_type` with `endpoint_deployment_type_source` set to `declared`. The declared type is metadata only; it doesn't change routing or pricing.

#### Cancelled generations

Exported quantities always match what OpenRouter billed. How they relate to what the provider processed depends on the surface:

| Surface | `cancelled` | Billed quantities |
| - | - | - |
| Chat, completed normally | `false` | The full response. |
| Chat, client disconnected, upstream aborted | `true` | Output delivered before the disconnect. The provider stopped generating. |
| Chat, client disconnected, upstream cannot be aborted | `false` | Output delivered before the disconnect. The provider finishes the response in the background and may bill your provider key for more output than OpenRouter billed. The provider's final usage is not exported, and these rows look the same as completed generations. |
| Text-to-speech, client disconnected | `false` | The provider's final usage, because speech is priced on input characters. |
| Streaming image generation, client disconnected | `true` | The provider's final usage after the stream drains. |

The existing `openrouter_generation.tokens_prompt` and `tokens_completion` fields are OpenRouter's own token estimates, not the provider's token counters. The new `usage_is_estimated` flag describes the accounting path; it does not turn these two estimate fields into provider-reported measurements or certify every detailed token count and cost as provider-reported.

A null or omitted quantity is unavailable, not zero. An omitted `usage_is_estimated` flag means provenance is unavailable, such as on older exports or failures without accounting data. An interrupted stream is not automatically estimated: the flag depends on whether accounting actually used fallback quantities.

#### Native server-tool counts

`native_server_tool_use` can contain:

| Counter | Source |
| - | - |
| `web_search_requests` | The existing provider-native web-search count, including Anthropic's reported usage and OpenAI Responses completed search calls. |
| `web_fetch_requests` | Anthropic's reported native web-fetch count. |
| `code_execution_requests` | Distinct Anthropic code-execution invocations, or completed OpenAI Responses code-interpreter calls. Anthropic bash and text-editor code-execution variants are included. |
| `file_search_requests` | Completed OpenAI Responses file-search calls. |
| `image_generation_requests` | Completed OpenAI Responses image-generation calls. |

These counters exclude client function calls and OpenRouter-orchestrated tool-call totals. They are not universally invoice units: a provider may bill code execution by container, session, or duration rather than invocation, and may charge for failed work. Apply your provider's billing rules rather than multiplying every tool count by a per-call price.

#### Cache TTL availability and BYOK reconciliation

Anthropic may report a TTL split at stream start and subsequently increase the cache-write aggregate during server-tool execution without sending a revised split. In that case, Broadcast preserves the later total and exports a null TTL breakdown rather than attributing the difference to a guessed TTL. When iteration usage is present, the exported quantities include all reported iterations.

For BYOK reconciliation, use available cache and native-tool quantities with your provider's rates, and distinguish fallback-estimated generations using `usage_is_estimated`. These additional exports do not change billing, existing native token counts, or API response usage. Provider-reported cache-write totals can differ from the quantities normalized by OpenRouter's pricing layer.

#### Raw provider usage

With the **Cost** metadata opt-in enabled, `upstream_raw_response_usage` carries the provider's own usage values as they arrived, before OpenRouter normalizes them. Unknown provider fields are preserved, so this object can change whenever a provider changes its API. Without the Cost opt-in, the field is absent from the export entirely, along with the rest of `openrouter_generation`.

| Container | Meaning |
| - | - |
| Object | One usage report, such as a final non-streaming or Responses usage object. |
| Array of objects | Several usage reports for one generation, in the order the provider sent them, such as Anthropic stream frames. Do not add their values together; a provider may send cumulative totals. |
| `null` | No provider usage was captured or the value was suppressed. |

This field is provider evidence, not an invoice calculation, and not every provider reports usage. Its values are not OpenRouter's accounting inputs: read `promptTokens`, `completionTokens`, costs, and the fields above for accounting, and treat differences between the two as expected rather than as a billing discrepancy.

OpenRouter replaces the object with `null` and records `upstream_raw_response_usage_suppression_reason` when:

| Reason | Condition |
| - | - |
| `privacy_mode` | The destination has Privacy Mode enabled. |
| `usage_estimated` | Accounting used fallback quantities or pricing, so the partial provider report would misrepresent the generation. |
| `size_limit` | The provider's usage JSON exceeded 64 KiB. The object is never truncated. |

An absent reason with a `null` value means provider usage was simply unavailable. An absent field means the export predates this feature. A reported `0` remains a provider-reported zero.

See the [S3 field locations](https://openrouter.ai/docs/guides/features/broadcast/s3.md#billing-quantities) and [OTEL attribute mappings](https://openrouter.ai/docs/guides/features/broadcast/otel-collector.md#billing-quantities) for destination-specific examples.

#### Cost allocation (beta)

Enable **Cost allocation** under **Additional generation metadata**, or set `broadcast_generation_cost_allocation` through the [destinations API](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination.md), to add `metadata.openrouter_cost_allocation` to each generation. It splits the generation's billed usage and cost by token kind so a cost-allocation tool can join it to your bill by date, provider, model, token kind, and the pricing qualifiers below. It is independent of **Cost**: you can enable it without exporting `openrouter_generation`, and it remains available in Privacy Mode. Like `openrouter_generation`, it appears in the trace metadata and in the generation observation's metadata, not on provider attempt spans. A `trace` field in your request cannot set or override it, either as a top-level key or as dotted keys inside a nested object such as `trace.metadata`.

Counts and costs are currently available for chat generations (the Chat Completions, Responses, Messages, and Completions APIs). Other generations, such as embeddings, images, video, and audio, carry only `cost_status` (`no_sku_items`) and the pricing qualifiers.

| Field | Meaning |
| - | - |
| `cost_status` | Whether the counts and costs below are present; see the next table. Always present. |
| `input_tokens` | All billed input tokens, including cache reads and cache writes: `non_cache_input_tokens + cache_read_input_tokens + cache_write_input_tokens`. |
| `non_cache_input_tokens`, `cache_read_input_tokens`, `cache_write_input_tokens` | Billed input tokens by kind. The counts do not overlap. |
| `output_tokens`, `reasoning_tokens` | Billed output tokens by kind. `reasoning_tokens` appears only for providers that price reasoning separately; elsewhere reasoning is billed, and counted, as output. |
| `non_cache_input_cost`, `cache_read_input_cost`, `cache_write_input_cost`, `output_cost`, `reasoning_cost` | Cost of each token kind in USD, as a decimal string. |
| `advisor_cost` | Cost of Anthropic advisor-model tokens in USD. They belong to the advisor model, not the generation's model, so they are not in any count or per-kind cost above. |
| `tool_cost` | Cost of provider server tools and OpenRouter plugins (web search, web fetch, file parsing) in USD. |
| `unclassified_cost` | Cost of priced rows with no token kind, such as Gemini cache storage, in USD. |
| `platform_cost` | What OpenRouter charged beyond inference and tools in USD: fees, discounts, and waivers. Can be negative. For BYOK, all of OpenRouter's charge beyond tools, because the token costs were billed by your provider. |
| `is_byok`, `billed_service_tier`, `is_long_context`, `endpoint_region`, `endpoint_deployment_type` | The pricing qualifiers, with the same meaning as in `openrouter_generation`. |

Counts are the quantities OpenRouter billed, so they can differ from `promptTokens` when the provider's own report is inconsistent. For example, when Gemini reports cache reads above an uncached input, it bills both, and `input_tokens` follows what was billed. In a reconciled block, a count is present only when the generation billed at least one row of that kind, so an absent count means the kind was not billed separately, not zero. Provider and model are not repeated here; read them from the generation's own fields.

Counts and per-kind costs are emitted only when OpenRouter can show they match what was billed. The rows' costs must equal the generation's upstream inference cost (`usage_upstream`, or `byok_usage_inference` for BYOK, compared as stored) and OpenRouter's plugin charges (`usage_web`, `usage_web_fetch`, and `usage_file`). When they do, the costs sum to the OpenRouter charge, plus the provider-billed inference cost for BYOK, to within float64 rounding of the stored amounts. Otherwise the block carries only `cost_status` and the pricing qualifiers, and `cost_status` says why:

| `cost_status` | Meaning |
| - | - |
| `reconciled` | Every count and cost field for the billed kinds is present and adds up as described above. |
| `unreconciled` | The rows do not add up to the billed cost. Known causes: a provider discount (the stored upstream cost is after the discount, the rows are at list price), and BYOK requests that used OpenRouter web search or web fetch (the charge is in `usage` but not in `usage_web` / `usage_web_fetch`). |
| `null_price` | A token row has no price, for example fallback pricing or a provider-reported total cost. |
| `row_error` | A billed row could not be split into non-overlapping quantities. |
| `no_billed_cost` | The generation carries no upstream cost to reconcile against. |
| `no_sku_items` | The generation's billed rows are not available to Broadcast: it stored none (for example a failed request), or it is not a chat generation. |

```json theme={null}
{
  "openrouter_cost_allocation": {
    "cost_status": "reconciled",
    "input_tokens": 1000,
    "non_cache_input_tokens": 600,
    "cache_read_input_tokens": 400,
    "output_tokens": 50,
    "non_cache_input_cost": "0.0012",
    "cache_read_input_cost": "0.0002",
    "output_cost": "0.0005",
    "platform_cost": "0.00019",
    "is_byok": false,
    "billed_service_tier": "default",
    "is_long_context": false,
    "endpoint_region": "us-east-1",
    "endpoint_deployment_type": "global"
  }
}
```

This field is in beta: its shape may change before a dedicated cost-allocation destination ships.

### Router timing

Broadcast includes router timing for Chat Completions, Responses, Messages, and Completions requests. These fields separate OpenRouter processing time, provider time, client wait time, and request-specific processing. Embeddings, rerank, image, video, audio, and batch requests do not include router timing yet.

The values are the same ones OpenRouter records for the request. On a completed request, the `_ms` fields add up to the request's end-to-end time. On a request without a completion time, such as one the client cancelled or one that failed after dispatch, they cover only the part measured. Broadcast does not send a total or a per-phase breakdown.

Router timing is sent on the root generation only. When OpenRouter retries a failed attempt on another provider without the client seeing the failure, the failed attempt's generation is sent without router timing, because the values describe the whole request; only the generation of the attempt that ends the request carries them. Destinations that receive a metadata object get each value as `openrouter_router_timing_<field>`. OTLP destinations get the same names dotted, `openrouter.router_timing.<field>`, under the destination's OpenRouter prefix. Destinations that store the raw trace, such as S3, get the values as a `routerTiming` object.

All values are whole milliseconds, except `attempt_count`.

| Field | What it measures | When it is left out |
| - | - | - |
| `router_ms` | OpenRouter's own time, before and after the first provider dispatch, including the time between provider attempts on a fallback. Time spent on guardrails, server tools, routing models, and file or media processing, provider time, and time spent waiting on the client are not counted. | Left out when OpenRouter has no dispatch window for the request, such as a successful request that reached the provider through a path that did not record the dispatch. Its router timing then carries only `attempt_count`. |
| `provider_ms` | The provider's time on the attempt that served the response, less the time spent waiting on the client. Includes time spent creating a prompt cache the request asked for. | Left out when the request never reached a provider, or when it has no completion time (the client cancelled or disconnected before the last byte, or the request failed after dispatch). In both cases it is still sent if a prompt cache was created before the dispatch, and then carries only that time. When OpenRouter cannot tell which attempt served the response, for example on a request with more than 32 provider attempts, it carries all of the request's provider time. |
| `provider_failed_ms` | The provider's time on attempts that did not serve the response, such as an attempt that returned an error before a fallback. When the last attempt failed too, all provider time is counted here. `provider_ms` + `provider_failed_ms` is the request's total provider time. | Left out when the request never reached a provider or has no completion time, and when OpenRouter cannot tell which attempt served the response. In that last case `provider_ms` carries all provider time. Sent as `0` when no attempt failed. |
| `client_wait_ms` | Time spent waiting for the client to accept data or the end of the stream. | Sent only when a wait was recorded; treat it as `0` otherwise. |
| `guardrails_ms`, `tools_ms`, `routing_models_ms`, `media_ms` | Time spent on guardrails, server tools, routing models, and file or media processing. On a request that did not complete, only the part before the first dispatch. | Left out when `router_ms` is left out, or when OpenRouter did not record the pre-dispatch breakdown these fields are cut from. A measured `0` is sent as `0`. |
| `attempt_count` | How many provider dispatches the request made, including failed attempts. `0` means it never reached a provider. | Sent whenever the request has a dispatch count, including on a request whose router timing carries no other field. |

A value OpenRouter did not measure is left out, never sent as `0`. Check whether a field is present before including it in charts. A request's time splits into four parts:

* **OpenRouter**: `router_ms`.
* **Provider**: `provider_ms` + `provider_failed_ms`.
* **Client**: `client_wait_ms`, or `0` when it is left out.
* **Request-specific processing**: `guardrails_ms` + `tools_ms` + `routing_models_ms` + `media_ms`.

The [Webhook](https://openrouter.ai/docs/guides/features/broadcast/webhook.md) destination sends OTLP JSON, so each value is a span attribute on the root span, under `trace.metadata.openrouter.router_timing.<field>`. The following request's first provider returned an error after 300 ms, so it fell back to a second provider. It took 2000 ms (43 + 1600 + 300 + 42 + 15 + 0 + 0 + 0):

```json theme={null}
{
  "attributes": [
    {
      "key": "trace.metadata.openrouter.router_timing.router_ms",
      "value": { "doubleValue": 43 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.provider_ms",
      "value": { "doubleValue": 1600 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.provider_failed_ms",
      "value": { "doubleValue": 300 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.client_wait_ms",
      "value": { "doubleValue": 42 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.guardrails_ms",
      "value": { "doubleValue": 15 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.tools_ms",
      "value": { "doubleValue": 0 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.routing_models_ms",
      "value": { "doubleValue": 0 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.media_ms",
      "value": { "doubleValue": 0 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.attempt_count",
      "value": { "doubleValue": 2 }
    }
  ]
}
```

The following request was blocked by a guardrail after 70 ms, before reaching a provider. The provider and client timing fields are omitted.

```json theme={null}
{
  "attributes": [
    {
      "key": "trace.metadata.openrouter.router_timing.router_ms",
      "value": { "doubleValue": 30 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.guardrails_ms",
      "value": { "doubleValue": 40 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.tools_ms",
      "value": { "doubleValue": 0 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.routing_models_ms",
      "value": { "doubleValue": 0 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.media_ms",
      "value": { "doubleValue": 0 }
    },
    {
      "key": "trace.metadata.openrouter.router_timing.attempt_count",
      "value": { "doubleValue": 0 }
    }
  ]
}
```

Broadcast waits up to 10 seconds after the response is generated for the client to finish reading it. When the client is slower than that, the trace is sent with no router timing at all, so the wait never delays delivery to your destination by more than 10 seconds.

`openrouter_router_latency_ms` (`openrouter.router_latency_ms` on OTLP destinations) is still sent, unchanged. It is an older measure: wall-clock time less the provider's time to first token, so it counts streaming time after the first token as router time, and it is sent only for successful requests. Prefer the router timing values; `openrouter_router_latency_ms` will be removed after an announcement.

### Large Trace Values

This applies to the OpenTelemetry-based destinations (Arize, Elastic, Grafana, Langfuse, LangSmith, New Relic, OTel Collector, Ramp, Sentry, and Webhook). Other destinations are not bounded this way and emit no truncation markers.

Large agent transcripts are normal, so broadcast delivery keeps the rest of the trace when an individual trace or observation value exceeds the per-attribute character limit (currently 10,000,000 characters). The oversized value is shortened rather than causing the trace to be dropped, and a boolean `<key>.truncated` attribute is added alongside it.

The shortened value carries an `openrouter_truncated` marker in one of three shapes, depending on what was cut:

```json theme={null}
{ "openrouter_truncated": { "omitted_items": 12 } }
{ "openrouter_truncated": { "omitted_keys": 3 } }
{ "openrouter_truncated": { "reason": "too_large" } }
```

Strings keep their beginning and end, with `[truncated]` in the middle. Objects keep every key when the keys and per-value markers fit: after reserving keys and punctuation, values that fit an equal share of the remaining space stay intact, and the space they leave is split evenly among the larger values, which are then kept whole when they fit that room and otherwise shortened to fit it. This split runs once: space that a larger value leaves unused after being kept whole is not offered to the other larger values. If those reservations cannot fit, the object keeps leading entries and appends `omitted_keys`. Message arrays keep the first message and newest turns, with `omitted_items` in the gap. Space for the newest message and the gap marker is reserved before deciding whether to keep the first message whole; the first message is shortened if necessary. If the limit cannot hold a shortened first message beside the newest one, the message array is treated like any other array. Other arrays keep leading elements and append `omitted_items`. When there is not enough room for these shapes, or a value cannot be serialized, it is replaced by the `reason` marker (`too_large` or `unserializable`).

The span includes an `openrouter.trace_truncated` event with the affected attribute keys, truncation reason, and character limit. The event also includes a plain-language message explaining that part of the trace was shortened. The remainder of the trace is still delivered to the destination.

### Optional Trace Data

You can enrich your traces with additional context by including these optional fields in your API requests:

* **User ID**: Associate traces with specific end-users by including the `user` field (up to 128 characters). This helps you track usage patterns and debug issues for individual users.

```json lines theme={null}
{
  "model": "openai/gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "Hello, world!"
    }
  ],
  "user": "user_12345"
}
```

* **Session ID**: Group related requests together (such as a conversation or agent workflow) by including the `session_id` field (up to 256 characters). You can also pass this via the `x-session-id` HTTP header.

```json lines theme={null}
{
  "model": "openai/gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "Hello, world!"
    }
  ],
  "session_id": "session_abc123"
}
```

### Custom Metadata

For advanced observability workflows, you can pass arbitrary metadata to your traces using the `trace` field. This field accepts any JSON object and is passed through to all your configured broadcast destinations.

```json lines theme={null}
{
  "model": "openai/gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "Summarize this document..."
    }
  ],
  "trace": {
    "trace_id": "workflow_12345",
    "trace_name": "Document Processing",
    "span_name": "Summarization Step",
    "generation_name": "Generate Summary",
    "environment": "production",
    "feature": "customer-support",
    "version": "1.2.3"
  }
}
```

> [!TIP]
>
> The `trace` field is flexible and accepts any key-value pairs. Certain keys have special meaning depending on your observability destination. See the destination-specific documentation for details on which keys each platform recognizes.

#### Common Metadata Keys

These metadata keys are commonly used across observability platforms:

| Key | Description |
| - | - |
| `trace_id` | Group multiple API requests into a single trace. Use the same ID across requests to track multi-step workflows. |
| `trace_name` | Custom name for the root trace in your observability platform. Defaults to the model name if not set. |
| `span_name` | Create a parent span that groups LLM operations. Creates hierarchical structure where the span contains the generation. |
| `generation_name` | Custom name for the specific LLM generation/call. Defaults to the model name if not set. |
| `parent_span_id` | Link your OpenRouter trace to an existing span from your own tracing system (e.g., OpenTelemetry). |

When using these fields, your traces will appear with a hierarchical structure in platforms like Langfuse:

```lines theme={null}
Document Processing (trace_id: workflow_12345)
└── Summarization Step (span)
    └── Generate Summary (generation)
```

#### Linking to External Traces

If you have your own tracing instrumentation (e.g., OpenTelemetry), you can use `parent_span_id` to nest OpenRouter calls under your existing spans:

```json lines theme={null}
{
  "model": "openai/gpt-4o",
  "messages": [{ "role": "user", "content": "Hello!" }],
  "trace": {
    "trace_id": "your-existing-trace-id",
    "parent_span_id": "your-existing-span-id"
  }
}
```

This will create a trace structure like:

```lines theme={null}
Your Application Trace
└── Your Application Span (parent_span_id)
    └── openai/gpt-4o (generation from OpenRouter)
```

This enables you to:

* Track end-to-end workflows spanning multiple LLM calls
* Organize traces by business logic rather than individual API calls
* Build rich observability dashboards with meaningful trace names
* Integrate OpenRouter traces with your existing application traces
* Pass any custom data you need to your observability platforms

#### Destination-Specific Metadata

Each observability platform may recognize different metadata keys. See the destination-specific guides for details:

* [Langfuse](https://openrouter.ai/docs/guides/features/broadcast/langfuse.md#custom-metadata) - Supports trace naming, user/session IDs, and arbitrary metadata
* [LangSmith](https://openrouter.ai/docs/guides/features/broadcast/langsmith.md#custom-metadata) - Supports tags, session tracking, and metadata
* [Datadog](https://openrouter.ai/docs/guides/features/broadcast/datadog.md#custom-metadata) - Supports tags, user IDs, and session IDs
* [Braintrust](https://openrouter.ai/docs/guides/features/broadcast/braintrust.md#custom-metadata) - Supports tags and custom metadata fields
* [W\&B Weave](https://openrouter.ai/docs/guides/features/broadcast/weave.md#custom-metadata) - Supports custom attributes in trace data
* [Arize AX](https://openrouter.ai/docs/guides/features/broadcast/arize.md#custom-metadata) - Supports OpenInference span attributes and metadata
* [Comet Opik](https://openrouter.ai/docs/guides/features/broadcast/opik.md#custom-metadata) - Supports trace/span metadata and cost tracking
* [Elastic Observability](https://openrouter.ai/docs/guides/features/broadcast/elastic.md#custom-metadata) - Supports OTLP span attributes searchable in Discover
* [Grafana Cloud](https://openrouter.ai/docs/guides/features/broadcast/grafana.md#custom-metadata) - Supports TraceQL-queryable span attributes
* [New Relic](https://openrouter.ai/docs/guides/features/broadcast/newrelic.md#custom-metadata) - Supports NRQL-queryable span attributes
* [Sentry](https://openrouter.ai/docs/guides/features/broadcast/sentry.md#custom-metadata) - Supports span attributes for performance monitoring
* [OpenTelemetry Collector](https://openrouter.ai/docs/guides/features/broadcast/otel-collector.md#custom-metadata) - Supports OTLP span attributes for any backend
* [Webhook](https://openrouter.ai/docs/guides/features/broadcast/webhook.md#custom-metadata) - Custom metadata in OTLP JSON payload
* [PostHog](https://openrouter.ai/docs/guides/features/broadcast/posthog.md#custom-metadata) - Supports event properties for LLM analytics
* [Raindrop](https://openrouter.ai/docs/guides/features/broadcast/raindrop.md#custom-metadata) - Supports custom event properties for AI observability
* [Ramp](https://openrouter.ai/docs/guides/features/broadcast/ramp.md#custom-metadata) - Supports OTLP span attributes for AI cost tracking
* [Snowflake](https://openrouter.ai/docs/guides/features/broadcast/snowflake.md#custom-metadata) - Queryable via VARIANT column functions
* [ClickHouse](https://openrouter.ai/docs/guides/features/broadcast/clickhouse.md#custom-metadata) - Queryable via JSONExtract functions
* [Google BigQuery](https://openrouter.ai/docs/guides/features/broadcast/bigquery.md#custom-metadata) - Queryable via JSON functions
* [S3](https://openrouter.ai/docs/guides/features/broadcast/s3.md#custom-metadata) - Stored in trace JSON files
* [Hugging Face Storage Buckets](https://openrouter.ai/docs/guides/features/broadcast/hugging-face.md#custom-metadata) - Stored in trace JSON files

### Fields Exported by Destination

OpenRouter builds one trace per request, but not every destination stores every field in it. Use the tables below to check whether a specific field (for example `sessionId`, `totalCost`, or the prompt content) will show up in a given destination. Fields are grouped by topic; open a group to see its table.

**How to read the tables**

Each row is a destination. Each column is a field from the [trace payload](#trace-data). The cell tells you whether that destination receives that field:

* &#x20;**Sent.** The destination receives this field.
* &#x20;**Sent unless Privacy Mode is on.** The destination receives this field normally, but it is stripped when [Privacy Mode](#privacy-mode) is enabled for that destination.
* — **Not sent.** The destination never receives this field, even though it is present in the trace.

Some field names appear at both the top level of the trace and inside each `observations[]` entry (the per-request span). Where that matters, the column header says `(trace)` or `(span)`.

> [accordion] Trace identity
>
> | Destination | `id` | `userId` | `sessionId` | `apiKeyName` | `name` |
> | - | - | - | - | - | - |
> | Arize AX | | | | | |
> | Braintrust | — | | | | |
> | ClickHouse | | | | | — |
> | Comet Opik | | — | — | — | |
> | Datadog | | | | | — |
> | Google BigQuery (beta) | | | | | — |
> | Grafana Cloud | | | | | |
> | Langfuse | | | | | |
> | LangSmith | | | | | |
> | New Relic | | | | | |
> | OpenTelemetry Collector | | | | | |
> | PostHog | | | | | |
> | Raindrop (beta) | | | | — | |
> | Ramp | | | | | |
> | S3 / S3-Compatible | | | | | |
> | Sentry | | | | — | — |
> | Snowflake | | | | | — |
> | W\&B Weave | | | | | |
> | Webhook | | | | | |

> [accordion] Account identity
>
> | Destination | `entityId` | `organizationId` | `creatorUserId` |
> | - | - | - | - |
> | Arize AX | | | |
> | Braintrust | | | |
> | ClickHouse | | | |
> | Comet Opik | — | — | — |
> | Datadog | | | |
> | Google BigQuery (beta) | | | |
> | Grafana Cloud | | | |
> | Langfuse | | | |
> | LangSmith | | | |
> | New Relic | | | |
> | OpenTelemetry Collector | | | |
> | PostHog | | — | — |
> | Raindrop (beta) | — | — | — |
> | Ramp | | | |
> | S3 / S3-Compatible | | | |
> | Sentry | — | — | — |
> | Snowflake | | | |
> | W\&B Weave | | | |
> | Webhook | | | |

> [accordion] Span identity
>
> | Destination | `id` | `parentObservationId` | `name` |
> | - | - | - | - |
> | Arize AX | | — | |
> | Braintrust | | — | |
> | ClickHouse | | | — |
> | Comet Opik | | — | |
> | Datadog | | | |
> | Google BigQuery (beta) | | | — |
> | Grafana Cloud | | — | |
> | Langfuse | | — | |
> | LangSmith | | — | |
> | New Relic | | — | |
> | OpenTelemetry Collector | | — | |
> | PostHog | | | |
> | Raindrop (beta) | — | — | — |
> | Ramp | | — | |
> | S3 / S3-Compatible | | | |
> | Sentry | | — | |
> | Snowflake | | | — |
> | W\&B Weave | — | — | — |
> | Webhook | | — | |

> [accordion] Timing and latency
>
> Every destination that receives `routerLatencyMs` also receives the [router timing](#router-timing) values, on the root generation, as `openrouter_router_timing_<field>` or, on OTLP destinations, `openrouter.router_timing.<field>`.
>
> | Destination | `timestamp` | `startTime` | `endTime` | `routerLatencyMs` | `timeline` (raw object) |
> | - | - | - | - | - | - |
> | Arize AX | — | — | — | — | — |
> | Braintrust | — | | | | — |
> | ClickHouse | — | — | — | | — |
> | Comet Opik | | | | — | — |
> | Datadog | — | | — | | — |
> | Google BigQuery (beta) | — | — | — | | — |
> | Grafana Cloud | — | | | | — |
> | Langfuse | — | | | | — |
> | LangSmith | — | | | | — |
> | New Relic | — | | | | — |
> | OpenTelemetry Collector | — | | | | — |
> | PostHog | — | | — | | — |
> | Raindrop (beta) | — | — | — | | — |
> | Ramp | — | | | | — |
> | S3 / S3-Compatible | | | | | |
> | Sentry | — | | | — | — |
> | Snowflake | | | | | — |
> | W\&B Weave | | — | | | — |
> | Webhook | — | | | | — |

> [accordion] Derived latency metrics
>
> These two keys are computed by OpenRouter from the `timeline` milestones rather than being fields of the trace, so they are not listed in the tables above. Destinations that receive a metadata bag get them as `openrouter_provider_time_to_first_token_ms` and `openrouter_inter_token_latency_ms`; OTLP destinations get the same names dotted (`openrouter.inter_token_latency_ms`).
>
> Both are sent on the root generation only, and both are **omitted rather than zeroed** when they cannot be measured: time to first token needs `providerRequestMs` and `firstTokenMs`, and inter-token latency needs `firstTokenMs`, `providerBodyEndMs` and at least two output tokens. A non-streamed response or a `max_tokens: 1` request therefore carries the milestones but no inter-token latency.
>
> Inter-token latency is the mean gap between output tokens, matching vLLM's `request_time_per_output_token`: `(providerBodyEndMs - firstTokenMs) / (output_tokens - 1)`.
>
> | Destination | `provider_time_to_first_token_ms` | `inter_token_latency_ms` |
> | - | - | - |
> | Arize AX | | |
> | Braintrust | | |
> | ClickHouse | | |
> | Comet Opik | | |
> | Datadog | | |
> | Google BigQuery (beta) | | |
> | Grafana Cloud | | |
> | Langfuse | | |
> | LangSmith | | |
> | New Relic | | |
> | OpenTelemetry Collector | | |
> | PostHog | | |
> | Raindrop (beta) | | |
> | Ramp | | |
> | S3 / S3-Compatible | | |
> | Sentry | | |
> | Snowflake | | |
> | W\&B Weave | | |
> | Webhook | | |
>
> Every documented destination receives both.

> [accordion] Prompt and completion content
>
> | Destination | `input` (trace) | `output` (trace) | `input` (span) | `output` (span) |
> | - | - | - | - | - |
> | Arize AX | | | | |
> | Braintrust | — | — | | |
> | ClickHouse | — | — | | |
> | Comet Opik | | | | |
> | Datadog | — | — | | |
> | Google BigQuery (beta) | — | — | | |
> | Grafana Cloud | | | | |
> | Langfuse | | | | |
> | LangSmith | | | | |
> | New Relic | | | | |
> | OpenTelemetry Collector | | | | |
> | PostHog | — | — | | |
> | Raindrop (beta) | — | — | | |
> | Ramp | | | | |
> | S3 / S3-Compatible | | | | |
> | Sentry | — | — | | |
> | Snowflake | — | — | | |
> | W\&B Weave | — | — | | |
> | Webhook | | | | |

> [accordion] Model and provider
>
> | Destination | `model` | `modelParameters` | `providerName` | `providerSlug` |
> | - | - | - | - | - |
> | Arize AX | | | | |
> | Braintrust | | | | |
> | ClickHouse | | | | |
> | Comet Opik | | | | — |
> | Datadog | | — | | |
> | Google BigQuery (beta) | | | | |
> | Grafana Cloud | | | | |
> | Langfuse | | | | |
> | LangSmith | | | | |
> | New Relic | | | | |
> | OpenTelemetry Collector | | | | |
> | PostHog | | — | | — |
> | Raindrop (beta) | | — | | — |
> | Ramp | | | | |
> | S3 / S3-Compatible | | | | |
> | Sentry | | | — | — |
> | Snowflake | | | | |
> | W\&B Weave | | | | |
> | Webhook | | | | |

> [accordion] Token counts
>
> | Destination | `promptTokens` | `completionTokens` | `totalTokens` |
> | - | - | - | - |
> | Arize AX | — | — | — |
> | Braintrust | | | |
> | ClickHouse | | | |
> | Comet Opik | | | |
> | Datadog | | | |
> | Google BigQuery (beta) | | | |
> | Grafana Cloud | | | |
> | Langfuse | | | |
> | LangSmith | | | |
> | New Relic | | | |
> | OpenTelemetry Collector | | | |
> | PostHog | | | — |
> | Raindrop (beta) | | | |
> | Ramp | | | |
> | S3 / S3-Compatible | | | |
> | Sentry | | | |
> | Snowflake | | | |
> | W\&B Weave | | | |
> | Webhook | | | |

> [accordion] Prompt token breakdown
>
> | Destination | `cachedTokens` | `audioTokens` | `videoTokens` |
> | - | - | - | - |
> | Arize AX | — | — | — |
> | Braintrust | | | |
> | ClickHouse | | — | — |
> | Comet Opik | | | |
> | Datadog | | | |
> | Google BigQuery (beta) | | — | — |
> | Grafana Cloud | | | |
> | Langfuse | | | |
> | LangSmith | | | |
> | New Relic | | | |
> | OpenTelemetry Collector | | | |
> | PostHog | | | |
> | Raindrop (beta) | — | — | — |
> | Ramp | | | |
> | S3 / S3-Compatible | | | |
> | Sentry | | | |
> | Snowflake | | — | — |
> | W\&B Weave | | | |
> | Webhook | | | |

> [accordion] Completion token breakdown
>
> | Destination | `reasoningTokens` | `imageTokens` |
> | - | - | - |
> | Arize AX | — | — |
> | Braintrust | | |
> | ClickHouse | | — |
> | Comet Opik | | |
> | Datadog | | |
> | Google BigQuery (beta) | | — |
> | Grafana Cloud | | |
> | Langfuse | | |
> | LangSmith | | |
> | New Relic | | |
> | OpenTelemetry Collector | | |
> | PostHog | | |
> | Raindrop (beta) | — | — |
> | Ramp | | |
> | S3 / S3-Compatible | | |
> | Sentry | | |
> | Snowflake | | — |
> | W\&B Weave | | |
> | Webhook | | |

> [accordion] Cost
>
> | Destination | `inputCost` | `outputCost` | `totalCost` |
> | - | - | - | - |
> | Arize AX | — | — | — |
> | Braintrust | | | |
> | ClickHouse | | | |
> | Comet Opik | | | |
> | Datadog | | | |
> | Google BigQuery (beta) | | | |
> | Grafana Cloud | | | |
> | Langfuse | | | |
> | LangSmith | | | |
> | New Relic | | | |
> | OpenTelemetry Collector | | | |
> | PostHog | | | |
> | Raindrop (beta) | — | — | |
> | Ramp | | | |
> | S3 / S3-Compatible | | | |
> | Sentry | | | |
> | Snowflake | | | |
> | W\&B Weave | | | |
> | Webhook | | | |

> [accordion] Unit prices
>
> | Destination | `inputUnitPrice` | `outputUnitPrice` |
> | - | - | - |
> | Arize AX | — | — |
> | Braintrust | | |
> | ClickHouse | | |
> | Comet Opik | — | — |
> | Datadog | | |
> | Google BigQuery (beta) | | |
> | Grafana Cloud | | |
> | Langfuse | | |
> | LangSmith | | |
> | New Relic | | |
> | OpenTelemetry Collector | | |
> | PostHog | — | — |
> | Raindrop (beta) | — | — |
> | Ramp | | |
> | S3 / S3-Compatible | | |
> | Sentry | — | — |
> | Snowflake | | |
> | W\&B Weave | | |
> | Webhook | | |

> [accordion] Status
>
> | Destination | `level` | `statusCode` | `statusMessage` |
> | - | - | - | - |
> | Arize AX | | — | |
> | Braintrust | | — | |
> | ClickHouse | | — | — |
> | Comet Opik | — | — | — |
> | Datadog | — | | |
> | Google BigQuery (beta) | | — | — |
> | Grafana Cloud | | — | |
> | Langfuse | | — | |
> | LangSmith | | — | |
> | New Relic | | — | |
> | OpenTelemetry Collector | | — | |
> | PostHog | — | — | |
> | Raindrop (beta) | — | — | — |
> | Ramp | | — | |
> | S3 / S3-Compatible | | | |
> | Sentry | — | — | |
> | Snowflake | | — | — |
> | W\&B Weave | — | — | — |
> | Webhook | | — | |

> [accordion] Finish reason
>
> | Destination | `finishReason` | `normalizedFinishReason` |
> | - | - | - |
> | Arize AX | | |
> | Braintrust | | |
> | ClickHouse | — | |
> | Comet Opik | | — |
> | Datadog | | |
> | Google BigQuery (beta) | — | |
> | Grafana Cloud | | |
> | Langfuse | | |
> | LangSmith | | |
> | New Relic | | |
> | OpenTelemetry Collector | | |
> | PostHog | — | — |
> | Raindrop (beta) | | — |
> | Ramp | | |
> | S3 / S3-Compatible | | |
> | Sentry | — | |
> | Snowflake | — | |
> | W\&B Weave | | |
> | Webhook | | |

> [accordion] Cost allocation (beta)
>
> `openrouter_cost_allocation` is added to the trace metadata and the generation span's metadata only for destinations with the **Cost allocation** opt-in, so it reaches a destination exactly where that destination receives `metadata` in the next table. OTLP destinations flatten it to attributes such as `openrouter_cost_allocation.input_tokens`; see [Cost allocation](#cost-allocation-beta) for the fields.
>
> | Destination | `openrouter_cost_allocation` (trace) | `openrouter_cost_allocation` (span) |
> | - | - | - |
> | Arize AX | | |
> | Braintrust | — | |
> | ClickHouse | — | |
> | Comet Opik | | |
> | Datadog | — | |
> | Google BigQuery (beta) | — | |
> | Grafana Cloud | | |
> | Langfuse | | |
> | LangSmith | | |
> | New Relic | | |
> | OpenTelemetry Collector | | |
> | PostHog | | — |
> | Raindrop (beta) | | — |
> | Ramp | | |
> | S3 / S3-Compatible | | |
> | Sentry | — | — |
> | Snowflake | — | |
> | W\&B Weave | | — |
> | Webhook | | |

> [accordion] Metadata and tags
>
> | Destination | `metadata` (trace) | `tags` | `metadata` (span) | `type` | `version` |
> | - | - | - | - | - | - |
> | Arize AX | | | | | — |
> | Braintrust | — | | | — | — |
> | ClickHouse | — | | | | — |
> | Comet Opik | | | | — | — |
> | Datadog | — | | | — | — |
> | Google BigQuery (beta) | — | | | | — |
> | Grafana Cloud | | | | | — |
> | Langfuse | | | | | |
> | LangSmith | | | | — | — |
> | New Relic | | | | | — |
> | OpenTelemetry Collector | | | | | — |
> | PostHog | | — | — | | — |
> | Raindrop (beta) | | — | — | | — |
> | Ramp | | | | | — |
> | S3 / S3-Compatible | | | | | |
> | Sentry | — | — | — | — | — |
> | Snowflake | — | | | | — |
> | W\&B Weave | | — | — | — | — |
> | Webhook | | | | | — |

## API Key Filtering

Each destination can be configured to only receive traces from specific API keys. This is useful when you want to:

* route traces from different parts of your application to different observability platforms
* isolate monitoring for specific use cases
* or send production API key traces at a lower sampling rate than development keys

When adding or editing a destination, you can select one or more API keys from your account. Only requests made with those selected API keys will have their traces sent to that destination. If no API keys are selected, the destination will receive traces from all your API keys or chatroom requests.

You can also select **excluded** API keys for a destination. Requests made with an excluded key are never sent to that destination, even if the key is also in the included list: exclusions take precedence. This is useful for keeping traces from internal or testing keys out of a production destination without having to enumerate every included key.

## Sampling Rate

Each destination can be configured with a sampling rate to control what percentage of traces are sent. This is useful for high-volume applications where you want to reduce costs or data volume while still maintaining visibility into your LLM usage. A sampling rate of 1.0 sends all traces, while 0.5 would send approximately 50% of traces.

> [!TIP]
>
> Sampling is deterministic: when you provide a `session_id`, all traces within that session will be consistently included or excluded together. This ensures you always see complete sessions in your observability platform rather than fragmented data.
>
> You’ll see full sessions per destination, but not necessarily the same sessions across all destinations.

## Privacy Mode

Each destination can optionally enable **Privacy Mode** to exclude prompt and completion content from traces. When Privacy Mode is enabled, the following data is stripped before sending traces:

* **Input messages** (prompts sent to the model)
* **Output choices** (completions returned by the model)
* **Error text** (the observation's `statusMessage`, and every field of `metadata.openrouter_error` except `code` and `shadow`, since these can repeat the provider's error message). The error level, status code, `openrouter_error.code`, and error ownership are still sent.

All other trace data (including token counts, costs, timing, model information, model parameters, and custom metadata) is still sent normally. Model parameters include the request's `stop` sequences, which are caller-supplied text.

This is useful when you want to monitor LLM usage metrics and costs without exposing the actual content of conversations, for example to comply with data privacy regulations or internal policies.

To enable Privacy Mode, toggle the **Privacy Mode** checkbox in the **Privacy** section when configuring a destination.

> [!TIP]
>
> Privacy Mode is configured per destination. You can send full traces to one destination for debugging while sending privacy-redacted traces to another for cost monitoring.

## Security

Your destination credentials are encrypted before being stored and are only decrypted when sending traces. Traces are sent asynchronously after requests complete, so enabling broadcast does not add latency to your API responses.

## Organization Support

Broadcast can be configured at both the individual user level and the organization level. Organization admins can set up shared destinations that apply to all API keys within the organization, ensuring consistent observability across your team.

## Walkthroughs

Step-by-step guides for configuring specific observability destinations:

* [Arize AX](https://openrouter.ai/docs/guides/features/broadcast/arize.md) - ML observability and monitoring
* [Braintrust](https://openrouter.ai/docs/guides/features/broadcast/braintrust.md) - LLM evaluation and monitoring
* [ClickHouse](https://openrouter.ai/docs/guides/features/broadcast/clickhouse.md) - Real-time analytics database
* [Comet Opik](https://openrouter.ai/docs/guides/features/broadcast/opik.md) - LLM evaluation and testing
* [Datadog](https://openrouter.ai/docs/guides/features/broadcast/datadog.md) - Full-stack monitoring and analytics
* [Elastic Observability](https://openrouter.ai/docs/guides/features/broadcast/elastic.md) - Search-powered observability for traces
* [Google BigQuery](https://openrouter.ai/docs/guides/features/broadcast/bigquery.md) - Serverless cloud data warehouse
* [Grafana Cloud](https://openrouter.ai/docs/guides/features/broadcast/grafana.md) - Observability and monitoring platform
* [Hugging Face Storage Buckets](https://openrouter.ai/docs/guides/features/broadcast/hugging-face.md) - Store traces in Hugging Face Storage Buckets
* [Langfuse](https://openrouter.ai/docs/guides/features/broadcast/langfuse.md) - Open-source LLM engineering platform
* [LangSmith](https://openrouter.ai/docs/guides/features/broadcast/langsmith.md) - LangChain observability and debugging
* [New Relic](https://openrouter.ai/docs/guides/features/broadcast/newrelic.md) - Full-stack observability platform
* [OpenTelemetry Collector](https://openrouter.ai/docs/guides/features/broadcast/otel-collector.md) - Send traces to any OTLP-compatible backend
* [PostHog](https://openrouter.ai/docs/guides/features/broadcast/posthog.md) - Product analytics with LLM tracking
* [Raindrop](https://openrouter.ai/docs/guides/features/broadcast/raindrop.md) - AI observability and monitoring
* [Ramp](https://openrouter.ai/docs/guides/features/broadcast/ramp.md) - AI usage tracking and cost management
* [S3 / S3-Compatible](https://openrouter.ai/docs/guides/features/broadcast/s3.md) - Store traces in S3, R2, or compatible storage
* [Sentry](https://openrouter.ai/docs/guides/features/broadcast/sentry.md) - Application monitoring and error tracking
* [Snowflake](https://openrouter.ai/docs/guides/features/broadcast/snowflake.md) - Cloud data warehouse for analytics
* [W\&B Weave](https://openrouter.ai/docs/guides/features/broadcast/weave.md) - LLM observability and tracking
* [Webhook](https://openrouter.ai/docs/guides/features/broadcast/webhook.md) - Send traces to any HTTP endpoint
