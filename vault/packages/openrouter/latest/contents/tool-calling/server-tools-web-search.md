> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Web Search

> Give any model access to real-time web information

Beta

> [!NOTE]
>
> **Beta**
>
> Server tools are currently in beta. The API and behavior may change.

The `openrouter:web_search` server tool gives any model on OpenRouter access to real-time web information. When the model determines it needs current information, it calls the tool with a search query. OpenRouter executes the search and returns results that the model uses to formulate a grounded, cited response.

## How It Works

1. You include `{ "type": "openrouter:web_search" }` in your `tools` array.
2. Based on the user's prompt, the model decides whether a web search is needed and generates a search query.
3. OpenRouter executes the search using the configured engine (defaults to `auto`, which uses native provider search when available or falls back to [Exa](https://exa.ai)).
4. The search results (URLs, titles, and content snippets) are returned to the model.
5. The model synthesizes the results into its response. It may search multiple times in a single request if needed.

## Quick Start

## Configuration

The web search tool accepts optional `parameters` to customize search behavior:

```json lines theme={null}
{
  "type": "openrouter:web_search",
  "parameters": {
    "engine": "exa",
    "max_results": 5,
    "max_total_results": 20,
    "search_context_size": "medium",
    "allowed_domains": ["example.com"],
    "excluded_domains": ["reddit.com"]
  }
}
```

| Parameter | Type | Default | Description |
| - | - | - | - |
| `engine` | string | `auto` | Search engine to use: `auto`, `native`, `exa`, `firecrawl`, `parallel`, or `perplexity` |
| `mode` | string | Engine default | Engine-specific search mode. Exa: `instant`, `fast`, `auto`, `deep-lite`, `deep`, or `deep-reasoning`. Parallel: `turbo`, `fast`, `basic`, or `advanced`. Ignored by other engines. |
| `max_results` | integer | 5 | Maximum results per search call (1–25; 1–20 for Perplexity). Applies to Exa, Firecrawl, Parallel, and Perplexity engines; ignored with native provider search |
| `max_uses` | integer | N/A | Maximum number of searches the model may perform in a single request. Once reached, further search calls return an error result instead of executing. With native provider search, forwarded only to Anthropic (as `max_uses`); other native search providers ignore it |
| `max_total_results` | integer | N/A | Maximum total results across all search calls in a single request. Useful for controlling cost and context size in agentic loops |
| `search_context_size` | string | N/A | How much context to retrieve: `low`, `medium`, or `high`. For Exa, pins a fixed per-result character cap (5K/15K/30K); when omitted, Exa picks adaptively (\~2-4K per result). For Parallel, controls total characters across all results (defaults to `medium`). For Perplexity, maps directly to the Search API's native `search_context_size` parameter. Ignored with native provider search and Firecrawl. Overridden by `max_characters` when both are set |
| `max_characters` | integer | N/A | Exact maximum characters of content per result (1–100,000). Applies to Exa, Parallel, and Perplexity engines; ignored with native provider search and Firecrawl. For Exa, caps highlight content per result. For Parallel, caps excerpt content per result (default 1,500 when omitted). For Perplexity, converted to a token budget via `max_tokens_per_page` and trimmed to the exact character cap. When both `max_characters` and `search_context_size` are set, `max_characters` takes precedence |
| `user_location` | object | N/A | Approximate user location for location-biased results. Currently only supported by native provider search; ignored with Exa, Firecrawl, Parallel, and Perplexity (see below) |
| `allowed_domains` | string\[] | N/A | Limit results to these domains. Supported by Exa, Firecrawl, Parallel, Perplexity, and most native providers (see [domain filtering](#domain-filtering)) |
| `excluded_domains` | string\[] | N/A | Exclude results from these domains. Supported by Exa, Firecrawl, Parallel, Perplexity, and some native providers (see [domain filtering](#domain-filtering)) |
| `x_search` | object | N/A | Opt in to X/Twitter search on SpaceXAI models, with optional filters. Only used with native provider search on SpaceXAI; ignored elsewhere (see [X search](#x-search-spacexai)) |

### User Location

Pass an approximate user location to bias search results geographically:

```json lines theme={null}
{
  "type": "openrouter:web_search",
  "parameters": {
    "user_location": {
      "type": "approximate",
      "city": "San Francisco",
      "region": "California",
      "country": "US",
      "timezone": "America/Los_Angeles"
    }
  }
}
```

All fields within `user_location` are optional.

### X Search (SpaceXAI)

On SpaceXAI models, native web search sends only xAI's `web_search` tool. To also search X/Twitter, add an `x_search` object. An empty object enables X search with no filters:

```json lines theme={null}
{
  "type": "openrouter:web_search",
  "parameters": {
    "engine": "native",
    "x_search": {
      "allowed_x_handles": ["OpenRouterAI"],
      "from_date": "2025-01-01"
    }
  }
}
```

| Field | Type | Description |
| - | - | - |
| `allowed_x_handles` | string\[] | Only include posts from these handles (max 20). Mutually exclusive with `excluded_x_handles` |
| `excluded_x_handles` | string\[] | Exclude posts from these handles (max 20). Mutually exclusive with `allowed_x_handles` |
| `from_date` | string | Start date (ISO 8601, e.g. `"2025-01-01"`) |
| `to_date` | string | End date (ISO 8601, e.g. `"2025-12-31"`) |
| `enable_image_understanding` | boolean | Analyze images in posts |
| `enable_video_understanding` | boolean | Analyze videos in posts |

If a `web` plugin (from `plugins`, an `:online` model suffix, or a preset) is also present, `x_search` follows the same [precedence rules](#migrating-from-the-web-search-plugin) as the other server tool parameters.

> [!NOTE]
>
> **Why opt-in.** SpaceXAI announced that starting September 21, 2026 at 12:00 PM PT, X Search is billed per item returned instead of per tool call: $5 per 1,000 posts fetched and $10 per 1,000 user profiles fetched, replacing the previous \$5 per 1,000 tool calls. Web search pricing is unchanged. Because a single X search can now return many billable items, OpenRouter no longer adds `x_search` automatically. The legacy top-level `x_search_filter` request field still enables X search for backward compatibility.

## Native Search Providers

When `engine` is `"auto"` (the default) or `"native"`, OpenRouter uses the provider's built-in search for supported models. The following providers have native web search:

* **[OpenAI](https://platform.openai.com/docs/guides/tools/web-search)**: GPT-4.1, GPT-4.1 Mini, GPT-4.1 Nano, GPT-5 and later, o3, o3 Pro, o4-mini
* **[Anthropic](https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-search-tool)**: Claude 3.5 Haiku, Claude 3.7 Sonnet, Claude 4 and later (all Opus/Sonnet variants)
* **[Google](https://ai.google.dev/gemini-api/docs/grounding)**: Gemini 3 Flash, Gemini 3 Pro, Gemini 3.1 Flash/Lite, Gemini 3.5 Flash
* **[SpaceXAI](https://docs.x.ai/docs/guides/web-search)**: Grok 4 and later (web search; X search requires the [`x_search` opt-in](#x-search-spacexai))
* **[Perplexity](https://docs.perplexity.ai/api-reference/chat-completions-post)**: all Perplexity models (search is core to their API)

> [!NOTE]
>
> Older OpenAI models (including GPT-4o, GPT-4o Mini, and GPT-4 Turbo) do **not** support native web search. If you set `engine: "native"` with these models, the server tool will fall back to Exa search. Use `engine: "auto"` (or omit the field) for equivalent behavior.

You can check whether a specific model supports native search on its [model page](https://openrouter.ai/models); look for the "Web Search" capability badge. To check programmatically, read `native_tools` on the endpoint object. See [Native Execution](https://openrouter.ai/docs/guides/features/server-tools.md#native-execution). For models without native search, set `engine` to one of the other supported options ([Exa](https://exa.ai), [Firecrawl](https://firecrawl.dev), [Parallel](https://parallel.ai), or [Perplexity](https://docs.perplexity.ai)), or leave it as `"auto"` to default to Exa.

## Engine Selection

The web search server tool supports multiple search engines:

* **`auto`** (default): Uses native search if the provider supports it, otherwise falls back to Exa
* **`native`**: Prefers the provider's built-in web search; falls back to Exa if the model doesn't support native search. When a workspace admin has set an engine list on the Server Tools page, the fallback is the first non-native engine in that list instead; a list of only `native` rejects the request with a 403 on models without native search
* **`exa`**: Uses [Exa](https://exa.ai)'s search API, which combines keyword and embeddings-based search. Returns Exa [highlights](https://docs.exa.ai/reference/contents-retrieval-with-exa-api#highlights) (excerpts drawn from each page that are most relevant to the search query) rather than truncated page text. See the [Exa](#exa) section below.
* **`firecrawl`**: Uses [Firecrawl](https://firecrawl.dev)'s search API with an OpenRouter-managed key
* **`parallel`**: Uses [Parallel](https://parallel.ai)'s search API
* **`perplexity`**: Uses the [Perplexity](https://docs.perplexity.ai/api-reference/search-post) Search API for ranked web results with domain filtering, context size control, and `max_characters` support

### Privacy and regional availability

* **ZDR enforcement:** `firecrawl` is rejected when ZDR is enforced in your account privacy settings or a guardrail. Other engines apply their own backend retention policies.
* **IRR availability:** on `us.openrouter.ai`, `exa`, `auto`, and an omitted engine run on Exa. Every other engine, including `native`, is rejected. No engine is available on `eu.openrouter.ai`.

See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability) for every server tool.

### Engine Capabilities

| Feature | Exa | Firecrawl | Parallel | Perplexity | Native |
| - | - | - | - | - | - |
| **Domain filtering** | Yes | Yes | Yes | Yes\*\*\* | Varies by provider |
| **Context size control** | Yes\* | No | Yes\*\* | Yes | No |
| **API key** | Server-side | BYOK (your key) | Server-side | Server-side | Provider-handled |

*\* Exa: limit applies **per result***

*\*\* Parallel: limit applies as a **total across all results***

*\*\*\* Perplexity: `allowed_domains` and `excluded_domains` are mutually exclusive; when both are provided, the request is rejected with a 400*

### Exa

OpenRouter requests Exa [highlights](https://docs.exa.ai/reference/contents-retrieval-with-exa-api#highlights) for each result rather than the `text` content option. Highlights are extractive excerpts drawn directly from the page that Exa selects as most relevant to the search query, typically yielding higher-quality context per token than truncated page text for agentic web tooling.

Exa's `mode` controls search latency and depth. The default remains `auto`:

| Mode | Approximate latency | Request cost |
| - | - | - |
| `instant` | \~250 ms | \$0.007 |
| `fast` | \~450 ms | \$0.007 |
| `auto` (default) | \~1 second | \$0.007 |
| `deep-lite` | \~4 seconds | \$0.012 |
| `deep` | \~4–15 seconds | \$0.012 |
| `deep-reasoning` | \~12–40 seconds | \$0.015 |

By default, Exa selects an adaptive highlight size per query and document, typically \~2,000–4,000 characters per result. You can control the per-result character budget in two ways:

**Coarse presets via `search_context_size`** map to Exa's `contents.highlights.maxCharacters`:

* `low`: 5,000 characters per result
* `medium`: 15,000 characters per result
* `high`: 30,000 characters per result

**Exact value via `max_characters`**: pass any integer (1–100,000) to set a precise per-result content budget. Supported by Exa, Parallel, and Perplexity. When both `max_characters` and `search_context_size` are set, `max_characters` takes precedence.

```json lines theme={null}
{
  "type": "openrouter:web_search",
  "parameters": {
    "engine": "exa",
    "max_characters": 2000
  }
}
```

When neither `max_characters` nor `search_context_size` is set, OpenRouter lets Exa pick the highlight size adaptively and Parallel uses its default of 1,500 characters per result. The selected excerpts are returned to the model on each result and surfaced to API callers via `url_citation` annotations. Within a single result, excerpts that come from different parts of the page are separated by Exa's `[...]` markers, so the `content` field of a `url_citation` annotation may look like:

```lines theme={null}
First excerpt drawn from the page.
[...]
Second excerpt drawn from elsewhere in the same page.
[...]
Third excerpt.
```

### Firecrawl

Firecrawl uses an OpenRouter-managed API key. No Firecrawl account or API key is required. Searches are charged to your OpenRouter credits at $0.005 per search plus $0.0125 per returned result; a search returning 5 results costs \$0.0675, in addition to model token usage.

Firecrawl supports domain filtering (`allowed_domains` / `excluded_domains`), but they are mutually exclusive: you cannot use both in the same request.

### Parallel

[Parallel](https://parallel.ai) supports domain filtering and context size control (`search_context_size`). Set `mode` to choose the provider mode; OpenRouter uses `basic` by default and sends it explicitly.

| Mode | Latency | Request cost | Language availability |
| - | - | - | - |
| `turbo` | \~200 ms | \$1 per 1,000 requests | English and Japanese |
| `fast` | \~550 ms | \$1 per 1,000 requests | Not documented by Parallel |
| `basic` (default) | \~1 second | \$5 per 1,000 requests | Broad language support |
| `advanced` | \~3 seconds | \$5 per 1,000 requests | Broad language support |

Each mode includes up to 10 results. Additional results cost \$1 per 1,000 results.

### Perplexity

[Perplexity](https://docs.perplexity.ai/api-reference/search-post) returns ranked web results (titles, URLs, snippets) without LLM synthesis. It supports domain filtering (`allowed_domains` / `excluded_domains`, mutually exclusive), `search_context_size`, and `max_characters`. Uses OpenRouter credits at \$0.005 per request.

## Domain Filtering

Restrict which domains appear in search results using `allowed_domains` and `excluded_domains`:

```json lines theme={null}
{
  "type": "openrouter:web_search",
  "parameters": {
    "allowed_domains": ["arxiv.org", "nature.com"],
    "excluded_domains": ["reddit.com"]
  }
}
```

| Engine | `allowed_domains` | `excluded_domains` | Notes |
| - | :-: | :-: | - |
| **Exa** | Yes | Yes | Both can be used simultaneously |
| **Parallel** | Yes | Yes | Mutually exclusive |
| **Firecrawl** | Yes | Yes | Mutually exclusive |
| **Perplexity** | Yes | Yes | Mutually exclusive (when both provided, the request is rejected with a 400) |
| **Native (Anthropic)** | Yes | Yes | Mutually exclusive |
| **Native (OpenAI)** | Yes | No | `excluded_domains` ignored (no error) |
| **Native (Google)** | No | No | Not supported. With `engine: "auto"`, falls back to Exa when filters are set. With `engine: "native"`, returns a 400 error |
| **Native (SpaceXAI)** | Yes | Yes | Mutually exclusive |

## Controlling Total Results

When the model searches multiple times in a single request, use `max_total_results` to cap the cumulative number of results:

```json lines theme={null}
{
  "type": "openrouter:web_search",
  "parameters": {
    "max_results": 5,
    "max_total_results": 15
  }
}
```

Once the limit is reached, subsequent search calls return a message telling the model the limit was hit instead of performing another search. This is useful for controlling cost and context window usage in agentic loops.

## Limiting the Number of Searches

To hard-cap how many searches the model may perform in a single request, set `max_uses` in the tool's `parameters` (parity with Anthropic's native web search `max_uses`):

```json lines theme={null}
{
  "type": "openrouter:web_search",
  "parameters": {
    "max_uses": 3
  }
}
```

Once the limit is reached, subsequent search calls return a message telling the model the limit was hit instead of performing another search. With native provider search, the value is forwarded only to Anthropic (as its native `max_uses`); other native search providers have no equivalent parameter and ignore it.

Each search also consumes one step of the request's overall server-tool budget, shared across all server tools. Set the top-level `max_tool_calls` request field (a sibling of `input` and `tools`, not a tool parameter) to bound that budget:

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "input": "What were the major AI announcements this week?",
  "tools": [{ "type": "openrouter:web_search" }],
  "max_tool_calls": 5
}
```

When omitted, the budget defaults to **30** steps, which is also the maximum. For finer control (spend caps, custom stop conditions), use `stop_server_tools_when`, which overrides `max_tool_calls` entirely. See [Tool Call Limits](https://openrouter.ai/docs/guides/features/server-tools.md#tool-call-limits) for how budgets work across all server tools.

## Example with Parameters

Pass `parameters` on the tool entry to configure the search:

## Workspace Settings

Workspace admins can set an engine list, allowed domains, and excluded domains for `openrouter:web_search` on the workspace's Server Tools page. Each tool entry is either locked or a default:

* **Locked** (the default when the entry is created): requests and presets in the workspace are limited to these settings. A request that names an engine outside the list, or whose domain list has no overlap with the workspace's, is rejected with a `403`. Because a search takes either an allowlist or an excluded list, a request `excluded_domains` under a workspace `allowed_domains` (or the reverse) narrows the allowlist: allowed domains that match an excluded domain are dropped, and only `allowed_domains` is sent to the engine. A `403` results if nothing remains, or if an excluded domain sits inside an allowed domain that remains (excluding `docs.example.com` under allowed `example.com`), since an allowlist cannot express that.
* **Default** ("Prevent overrides" off): the settings fill in what a request leaves unset. A request that names its own engine keeps it, and a request that sets either domain list (an empty list counts) keeps its lists as sent; the workspace domain lists are used only when the request sets neither.

In both modes a request with no `engine` (or `engine: "auto"`) runs the workspace's **Default engine**, and a `native` request on a model without native search runs its **Native fallback engine** (see the `native` row under [Engine Selection](#engine-selection)). Both are stored at the head of the engine list: the default first, then the fallback. A Default engine of **Auto** is stored as a leading `"auto"` entry and keeps OpenRouter's choice among the allowed engines (native when the list allows it, the model has it, and the endpoint allows it; otherwise the first allowed non-native engine that is available in the request's region; a default-mode list that offers none uses Exa), so an `auto` request on a regional endpoint runs a listed engine that is available there instead of failing on native or on a global-only engine. Settings on the workspace's Plugins tab do not apply to server tools.

## Usage Tracking

Web search usage is reported in the response `usage` object:

```json lines theme={null}
{
  "usage": {
    "input_tokens": 105,
    "output_tokens": 250,
    "server_tool_use_details": {
      "web_search_requests": 2,
      "tool_calls_requested": 2,
      "tool_calls_executed": 2
    }
  }
}
```

The `web_search_requests` field counts the total number of search queries the model made during the request.

## Pricing

| Engine | Pricing |
| - | - |
| **Exa** | Instant/Fast/Auto: \$0.007 per request; Deep Lite/Deep: \$0.012; Deep Reasoning: \$0.015. Includes up to 10 results, then \$0.001 per additional result |
| **Parallel** | Turbo or Fast: \$0.001/request; Basic or Advanced: \$0.005/request. Includes up to 10 results, then \$0.001 per additional result |
| **Perplexity** | \$0.005 per request using OpenRouter credits |
| **Firecrawl** | $0.005 per search plus $0.0125 per returned result |
| **Native** | Passed through from the provider ([OpenAI](https://platform.openai.com/docs/pricing#built-in-tools), [Anthropic](https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-search-tool#usage-and-pricing), [Google](https://ai.google.dev/pricing), [Perplexity](https://docs.perplexity.ai/getting-started/pricing), [SpaceXAI](https://docs.x.ai/developers/pricing#tool-invocation-costs)) |

All pricing is in addition to standard LLM token costs for processing the search result content.

## Migrating from the Web Search Plugin

> [!NOTE]
>
> The [web search plugin](https://openrouter.ai/docs/guides/features/plugins/web-search.md) (`plugins: [{ id: "web" }]`) and the [`:online` variant](https://openrouter.ai/docs/guides/routing/model-variants/online) are deprecated. Use the `openrouter:web_search` server tool instead.

The key differences:

| | Web Search Plugin (deprecated) | Web Search Server Tool |
| - | - | - |
| **How to enable** | `plugins: [{ id: "web" }]` | `tools: [{ type: "openrouter:web_search" }]` |
| **Who decides to search** | Always searches once | Model decides when/whether to search |
| **Call frequency** | Once per request | 0 to N times per request |
| **Engine options** | Native, Exa, Firecrawl, Parallel, Perplexity | Auto, Native, Exa, Firecrawl, Parallel, Perplexity |
| **Domain filtering** | Yes (Exa, Parallel, Perplexity, some native) | Yes (Exa, Parallel, Perplexity, most native) |
| **Context size control** | Via `web_search_options` | Via `search_context_size` parameter |
| **Total results cap** | No | Yes (`max_total_results`) |
| **Pricing** | Varies by engine | Varies by engine (same rates) |

Use one surface per request. If a request still carries a `web` plugin (from `plugins`, an `:online` model suffix, or a preset) alongside `openrouter:web_search` and the tool runs as native provider search, the server tool's parameters override the matching plugin settings (`allowed_domains`, `excluded_domains`, `max_results`, `user_location`, `max_uses`, `x_search`), and plugin settings the tool does not set, such as `search_prompt`, are kept. The two domain lists count as one setting: a tool `allowed_domains` or `excluded_domains` replaces both plugin lists, so providers that accept only one list (Anthropic) never receive both. Two cases keep the plugin settings as they are: a `web` plugin pinned to a non-native `engine` (its search has already run, so the tool does not add a second provider-side search), and a `web` setting saved in your account with **Prevent overrides** enabled.

### Migration example

```json lines theme={null}
// Before (deprecated)
{
  "model": "openai/gpt-5.2",
  "input": [...],
  "plugins": [{ "id": "web", "max_results": 3 }]
}

// After
{
  "model": "openai/gpt-5.2",
  "input": [...],
  "tools": [
    { "type": "openrouter:web_search", "parameters": { "max_results": 3 } }
  ]
}
```

```json expandable lines theme={null}
// Before (deprecated): engine and domain filtering
{
  "model": "openai/gpt-5.2",
  "input": [...],
  "plugins": [{
    "id": "web",
    "engine": "exa",
    "max_results": 5,
    "include_domains": ["arxiv.org"]
  }]
}

// After
{
  "model": "openai/gpt-5.2",
  "input": [...],
  "tools": [{
    "type": "openrouter:web_search",
    "parameters": {
      "engine": "exa",
      "max_results": 5,
      "allowed_domains": ["arxiv.org"]
    }
  }]
}
```

```json lines theme={null}
// Before (deprecated): :online variant
{
  "model": "openai/gpt-5.2:online"
}

// After
{
  "model": "openai/gpt-5.2",
  "tools": [{ "type": "openrouter:web_search" }]
}
```

## Next Steps

* [Server Tools Overview](https://openrouter.ai/docs/guides/features/server-tools.md). Learn about server tools
* [Datetime](https://openrouter.ai/docs/guides/features/server-tools/datetime.md). Get the current date and time
* [Tool Calling](https://openrouter.ai/docs/guides/features/tool-calling.md). Learn about user-defined tool calling
