> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Web Search

> Model-agnostic grounding

> [!NOTE]
>
> **Try Web Search Server Tool**
>
> For improved quality results, try the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search). Server tools give the model control over when and how often to search, rather than always running once per request.

You can incorporate relevant web search results for *any* model on OpenRouter by activating and customizing the `web` plugin, or by appending `:online` to the model slug:

```json lines theme={null}
{
  "model": "openai/gpt-5.2:online"
}
```

You can also append `:online` to `:free` model variants like so:

```json lines theme={null}
{
  "model": "openai/gpt-oss-20b:free:online"
}
```

> [!NOTE]
>
> Using web search will incur extra costs, even with free models. See the [pricing section](#pricing) below for details.

`:online` is a shortcut for using the `web` plugin, and is exactly equivalent to:

```json lines theme={null}
{
  "model": "openrouter/auto",
  "plugins": [{ "id": "web" }]
}
```

The web search plugin is powered by native search for Anthropic, Google, OpenAI, Perplexity, and SpaceXAI models. See the [server tools web search docs](https://openrouter.ai/docs/guides/features/server-tools/web-search.md#native-search-providers) for the full list of supported model families per provider.

> [!NOTE]
>
> For SpaceXAI models, the web search plugin enables both Web Search and X Search.

For other models, the web search plugin is powered by [Exa](https://exa.ai). It uses their ["auto"](https://docs.exa.ai/reference/how-exa-search-works#combining-neural-and-keyword-the-best-of-both-worlds-through-exa-auto-search) method (a combination of keyword search and embeddings-based web search) to find the most relevant results and augment/ground your prompt. For each result, OpenRouter requests Exa [highlights](https://docs.exa.ai/reference/contents-retrieval-with-exa-api#highlights) — extractive excerpts drawn from the page that Exa selects as most relevant to the search query, sized adaptively (typically \~2,000–4,000 characters per result). These are returned to the model and surfaced via `url_citation` annotations, with Exa's `[...]` markers separating excerpts that come from different parts of the same page.

## Parsing web search results

Web search results for all models (including native-only models like Perplexity and OpenAI Online) are available in the API and standardized by OpenRouter to follow the same annotation schema in the [OpenAI Chat Completion Message type](https://platform.openai.com/docs/api-reference/chat/object):

```json lines theme={null}
{
  "message": {
    "role": "assistant",
    "content": "Here's the latest news I found: ...",
    "annotations": [
      {
        "type": "url_citation",
        "url_citation": {
          "url": "https://www.example.com/web-search-result",
          "title": "Title of the web search result",
          "content": "Content of the web search result", // Added by OpenRouter if available
          "start_index": 100, // The index of the first character of the URL citation in the message.
          "end_index": 200 // The index of the last character of the URL citation in the message.
        }
      }
    ]
  }
}
```

## Customizing the Web Plugin

The maximum results allowed by the web plugin and the prompt used to attach them to your message stream can be customized:

```json lines theme={null}
{
  "model": "openai/gpt-5.2:online",
  "plugins": [
    {
      "id": "web",
      "engine": "parallel", // Optional: "native", "exa", "firecrawl", "parallel", "perplexity", or undefined
      "mode": "turbo", // Optional; accepted values depend on the selected engine
      "max_results": 1, // Defaults to 5
      "search_prompt": "Some relevant web results:", // See default below
      "include_domains": ["example.com", "*.substack.com"], // Optional
      "exclude_domains": ["reddit.com"] // Optional
    }
  ]
}
```

By default, the web plugin uses the following search prompt, using the current date:

```lines theme={null}
A web search was conducted on `date`. Incorporate the following web search results into your response.

IMPORTANT: Cite them using markdown links named using the domain of the source.
Example: [nytimes.com](https://nytimes.com/some-page).
```

## Domain Filtering

You can restrict which domains appear in web search results using `include_domains` and `exclude_domains`:

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "include_domains": ["example.com", "*.substack.com"],
      "exclude_domains": ["reddit.com"]
    }
  ]
}
```

Both fields accept an array of domain strings. You can use wildcards (`*.substack.com`) and path filtering (`openai.com/blog`).

### Engine Compatibility

| Engine | `include_domains` | `exclude_domains` | Notes |
| - | :-: | :-: | - |
| **Exa** | Yes | Yes | Both can be used simultaneously |
| **Parallel** | Yes | Yes | Either can be used, they are mutually exclusive |
| **Perplexity** | Yes | Yes | Mutually exclusive (when both provided, `include_domains` wins) |
| **Native** | Varies | Varies | See provider notes below |
| **Firecrawl** | Yes | Yes | Mutually exclusive (cannot use both at once) |

### Native Provider Behavior

When using native search, domain filter support depends on the provider:

* **Anthropic**: Supports both `include_domains` and `exclude_domains`, but they are mutually exclusive — you cannot use both at once
* **Google**: Domain filtering is not supported. With the default engine (auto), OpenRouter falls back to Exa when filters are set. With `"engine": "native"`, returns a 400 error
* **OpenAI**: Supports `include_domains` only; `exclude_domains` is silently ignored
* **SpaceXAI**: Supports both, but they are mutually exclusive with a maximum of 5 domains each

## X Search (SpaceXAI only)

X search is opt-in. With native web search enabled on a SpaceXAI model, OpenRouter sends only the `web_search` tool. To also search X/Twitter, add an `x_search` object to the plugin. An empty object enables X search with no filters:

```json lines theme={null}
{
  "model": "~x-ai/grok-latest",
  "messages": [
    {
      "role": "user",
      "content": "What are people saying about OpenRouter?"
    }
  ],
  "plugins": [
    {
      "id": "web",
      "x_search": {
        "allowed_x_handles": ["OpenRouterAI"],
        "from_date": "2025-01-01",
        "to_date": "2025-12-31"
      }
    }
  ]
}
```

The same object is accepted as `parameters.x_search` on the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search), which is the preferred surface.

> [!NOTE]
>
> **Why opt-in.** SpaceXAI announced that starting September 21, 2026 at 12:00 PM PT, X Search is billed per item returned instead of per tool call: $5 per 1,000 posts fetched and $10 per 1,000 user profiles fetched, replacing the previous \$5 per 1,000 tool calls. Web search pricing is unchanged. Because a single X search can now return many billable items, OpenRouter no longer adds `x_search` automatically.

> [accordion] Legacy top-level x\_search\_filter
>
> Requests that pass `x_search_filter` as a top-level parameter keep working and are treated as an X search opt-in with the same filters. Prefer the `x_search` object shown above. When both are set, `x_search` wins.
>
> ```json lines theme={null}
> {
>   "model": "~x-ai/grok-latest",
>   "messages": [{ "role": "user", "content": "..." }],
>   "plugins": [{ "id": "web" }],
>   "x_search_filter": { "allowed_x_handles": ["OpenRouterAI"] }
> }
> ```

### Filter Parameters

| Parameter | Type | Description |
| - | - | - |
| `allowed_x_handles` | string\[] | Only include posts from these handles (max 20) |
| `excluded_x_handles` | string\[] | Exclude posts from these handles (max 20) |
| `from_date` | string | Start date for search range (ISO 8601, e.g. `"2025-01-01"`) |
| `to_date` | string | End date for search range (ISO 8601, e.g. `"2025-12-31"`) |
| `enable_image_understanding` | boolean | Enable analysis of images within posts |
| `enable_video_understanding` | boolean | Enable analysis of videos within posts |

> [!WARNING]
>
> `allowed_x_handles` and `excluded_x_handles` are mutually exclusive — you cannot use both in the same request. An invalid `x_search` object, or an invalid legacy top-level `x_search_filter`, is rejected with a 400 rather than sent as an unfiltered X search.

## Engine Selection

The web search plugin supports the following options for the `engine` parameter:

* **`native`**: Always uses the model provider's built-in web search capabilities
* **`exa`**: Uses Exa's search API for web results
* **`firecrawl`**: Uses [Firecrawl](https://firecrawl.dev)'s search API
* **`parallel`**: Uses [Parallel](https://parallel.ai)'s search API for web results
* **`perplexity`**: Uses the [Perplexity](https://docs.perplexity.ai/api-reference/search-post) Search API for ranked web results
* **`undefined` (not specified)**: Uses native search if available for the provider, otherwise falls back to Exa

### Default Behavior

When the `engine` parameter is not specified:

* **Native search is used by default** for OpenAI, Anthropic, Google, Perplexity, and SpaceXAI models that support it
* **Exa search is used** for all other models or when native search is not supported

When you explicitly specify `"engine": "native"`, it will always attempt to use the provider's native search, even if the model doesn't support it (which may result in an error).

### Forcing Engine Selection

You can explicitly specify which engine to use:

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "engine": "native"
    }
  ]
}
```

Or force Exa search even for models that support native search:

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "engine": "exa",
      "max_results": 3
    }
  ]
}
```

### Firecrawl

Firecrawl uses an OpenRouter-managed API key. No Firecrawl account or API key is required. Searches are charged to your OpenRouter credits at $0.005 per search plus $0.0125 per returned result; a search returning 5 results costs \$0.0675, in addition to model token usage.

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "engine": "firecrawl",
      "max_results": 5
    }
  ]
}
```

> [!NOTE]
>
> Firecrawl supports `include_domains` and `exclude_domains`, but they are mutually exclusive — you cannot use both in the same request.

### Parallel

[Parallel](https://parallel.ai) is a search engine that supports domain filtering. Set `mode` when `engine` is `parallel`. OpenRouter uses `basic` by default and sends the resolved mode explicitly.

| Mode | Latency | Request cost | Language availability |
| - | - | - | - |
| `turbo` | \~200 ms | \$1 per 1,000 requests | English and Japanese |
| `fast` | \~550 ms | \$1 per 1,000 requests | Not documented by Parallel |
| `basic` (default) | \~1 second | \$5 per 1,000 requests | Broad language support |
| `advanced` | \~3 seconds | \$5 per 1,000 requests | Broad language support |

Each mode includes up to 10 results. Additional results cost \$1 per 1,000 results.

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "engine": "parallel",
      "mode": "advanced",
      "max_results": 5,
      "include_domains": ["arxiv.org"]
    }
  ]
}
```

### Exa modes

Exa uses `auto` by default. Choose a mode to trade latency and search depth:

| Mode | Approximate latency | Request cost |
| - | - | - |
| `instant` | \~250 ms | \$7 per 1,000 requests |
| `fast` | \~450 ms | \$7 per 1,000 requests |
| `auto` (default) | \~1 second | \$7 per 1,000 requests |
| `deep-lite` | \~4 seconds | \$12 per 1,000 requests |
| `deep` | \~4–15 seconds | \$12 per 1,000 requests |
| `deep-reasoning` | \~12–40 seconds | \$15 per 1,000 requests |

Each mode includes up to 10 results. Additional results cost \$1 per 1,000 results.

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "engine": "exa",
      "mode": "deep-lite",
      "max_results": 5
    }
  ]
}
```

### Engine-Specific Pricing

* **Native search**: Pricing is passed through directly from the provider (see provider-specific pricing info below)
* **Exa search**: Instant, Fast, and Auto cost \$0.007 per request; Deep Lite and Deep cost \$0.012; Deep Reasoning costs \$0.015. Includes up to 10 results, then \$0.001 per additional result
* **Parallel search**: Turbo and Fast use OpenRouter credits at \$0.001 per request; Basic and Advanced use \$0.005 per request. Each includes up to 10 results, then \$0.001 per additional result
* **Perplexity search**: Uses OpenRouter credits at \$0.005 per request
* **Firecrawl search**: Uses OpenRouter credits at $0.005 per search plus $0.0125 per returned result.

## Pricing

### Exa Search Pricing

When using Exa search (either explicitly via `"engine": "exa"` or as fallback), the web plugin uses your OpenRouter credits and charges based on the selected Exa mode. Auto remains the default at \$0.007 per request. This includes up to 10 results; additional results are charged at \$0.001 each, in addition to the LLM usage for the search result prompt tokens.

### Native Search Pricing (Provider Passthrough)

Some models have built-in web search. These models charge a fee based on the search context size, which determines how much search data is retrieved and processed for a query.

### Search Context Size Thresholds

Search context can be 'low', 'medium', or 'high' and determines how much search context is retrieved for a query:

* **Low**: Minimal search context, suitable for basic queries
* **Medium**: Moderate search context, good for general queries
* **High**: Extensive search context, ideal for detailed research

### Specifying Search Context Size

You can specify the search context size in your API request using the `web_search_options` parameter:

```json lines theme={null}
{
  "model": "openai/gpt-4.1",
  "messages": [
    {
      "role": "user",
      "content": "What are the latest developments in quantum computing?"
    }
  ],
  "web_search_options": {
    "search_context_size": "high"
  }
}
```

> [!NOTE]
>
> **Native Web Search Pricing**
>
> Refer to each provider's documentation for their native web search pricing info:
>
> * [OpenAI Pricing](https://platform.openai.com/docs/pricing#built-in-tools)
> * [Anthropic Pricing](https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-search-tool#usage-and-pricing)
> * [Google Pricing](https://ai.google.dev/pricing)
> * [Perplexity Pricing](https://docs.perplexity.ai/getting-started/pricing)
> * [SpaceXAI Pricing](https://docs.x.ai/developers/pricing#tool-invocation-costs)
>
> Native web search pricing only applies when using `"engine": "native"` or when native search is used by default for supported models. When using `"engine": "exa"`, the Exa search pricing applies instead.
