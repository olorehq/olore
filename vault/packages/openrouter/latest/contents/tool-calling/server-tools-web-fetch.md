> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Web Fetch

> Give any model the ability to fetch content from URLs

Beta

> [!NOTE]
>
> **Beta**
>
> Server tools are currently in beta. The API and behavior may change.

The `openrouter:web_fetch` server tool gives any model the ability to fetch content from a specific URL. When the model needs to read a web page or PDF document, it calls the tool with the URL. OpenRouter fetches and extracts the content, returning text that the model can use in its response.

## How It Works

1. You include `{ "type": "openrouter:web_fetch" }` in your `tools` array.
2. Based on the user's prompt, the model decides whether it needs to fetch a URL and generates the request.
3. OpenRouter fetches the URL using the configured engine (defaults to `auto`, which uses native provider fetch when available or falls back to [Exa](https://exa.ai)).
4. The page content (text, title, and URL) is returned to the model.
5. The model incorporates the fetched content into its response. It may fetch multiple URLs in a single request if needed.

## Quick Start

## Configuration

The web fetch tool accepts optional `parameters` to customize behavior:

```json lines theme={null}
{
  "type": "openrouter:web_fetch",
  "parameters": {
    "engine": "exa",
    "max_uses": 10,
    "max_content_tokens": 100000,
    "allowed_domains": ["docs.example.com"],
    "blocked_domains": ["private.example.com"]
  }
}
```

| Parameter | Type | Default | Description |
| - | - | - | - |
| `engine` | string | `auto` | Fetch engine to use: `auto`, `native`, `exa`, `openrouter`, `firecrawl`, or `parallel` |
| `max_uses` | integer | N/A | Maximum fetches per request. Once exceeded, the tool returns an error |
| `max_content_tokens` | integer | N/A | Maximum content length in approximate tokens. Content exceeding this is truncated |
| `allowed_domains` | string\[] | N/A | Only fetch from these domains |
| `blocked_domains` | string\[] | N/A | Never fetch from these domains |

## Engine Selection

The web fetch server tool supports multiple fetch engines:

* **`auto`** (default): Uses native fetch if the provider supports it, otherwise falls back to Exa
* **`native`**: Prefers the provider's built-in web fetch; falls back to the `openrouter` engine if the model doesn't support native fetch. When a workspace admin has set an engine list on the Server Tools page, the fallback is the first non-native engine in that list instead; a list of only `native` rejects the request with a 403 on models without native fetch
* **`exa`**: Uses [Exa](https://exa.ai)'s Contents API to extract page content (supports BYOK)
* **`openrouter`**: Uses direct HTTP fetch with content extraction
* **`firecrawl`**: Uses [Firecrawl](https://firecrawl.dev)'s scrape API with an OpenRouter-managed key
* **`parallel`**: Uses [Parallel](https://parallel.ai)'s extract API for high-quality content extraction

To check whether an endpoint runs web fetch natively, read `native_tools` on the endpoint object. See [Native Execution](https://openrouter.ai/docs/guides/features/server-tools.md#native-execution).

### Privacy and regional availability

* **ZDR enforcement:** `firecrawl` is rejected when ZDR is enforced in your account privacy settings or a guardrail. Other engines apply their own backend retention policies.
* **IRR availability:** no engine is available on `eu.openrouter.ai` or `us.openrouter.ai`. Regional requests that include `openrouter:web_fetch` are rejected with a `403` error.

See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability) for every server tool.

### Engine Capabilities

| Feature | Exa | Parallel | Firecrawl | OpenRouter | Native |
| - | - | - | - | - | - |
| **Domain filtering** | Yes | Yes | Yes | Yes | Varies |
| **Token truncation** | Yes | Yes | Yes | Yes | No |
| **API key** | Server-side or BYOK | Server-side | Server-side | Server-side | Provider-handled |
| **Hard limit** | None | None | None | 50/request | 50/request |

### Firecrawl

Firecrawl uses an OpenRouter-managed API key and charges \$0.0025 per fetched page to your OpenRouter credits. No Firecrawl account or API key is required.

### Hard Limits

To prevent runaway costs:

* **Exa engine**: No hard limit (billed via API credits)
* **Parallel engine**: No hard limit (billed via API credits)
* **Firecrawl engine**: No hard limit (billed via OpenRouter credits)
* **OpenRouter/native engines**: Hard limit of 50 fetches per request

## Domain Filtering

Restrict which domains can be fetched using `allowed_domains` and `blocked_domains`:

```json lines theme={null}
{
  "type": "openrouter:web_fetch",
  "parameters": {
    "allowed_domains": ["docs.example.com", "api.example.com"],
    "blocked_domains": ["internal.example.com"]
  }
}
```

When `allowed_domains` is set, only URLs from those domains will be fetched. When `blocked_domains` is set, URLs from those domains will be rejected.

## Content Truncation

Use `max_content_tokens` to limit the amount of content returned:

```json lines theme={null}
{
  "type": "openrouter:web_fetch",
  "parameters": {
    "max_content_tokens": 50000
  }
}
```

Content exceeding this limit is truncated. This is useful for controlling context window usage when fetching large pages.

## Example with Parameters

Pass `parameters` on the tool entry to configure it:

## Response Format

When the model calls the web fetch tool, it receives a response like:

```json lines theme={null}
{
  "url": "https://example.com/article",
  "title": "Article Title",
  "content": "The full text content of the page...",
  "status": "completed",
  "retrieved_at": "2025-07-15T14:30:00.000Z"
}
```

If the fetch fails, the response includes an error:

```json lines theme={null}
{
  "url": "https://example.com/404",
  "status": "failed",
  "error": "HTTP 404: Page not found"
}
```

## Workspace Settings

Workspace admins can set an engine list, allowed domains, and blocked domains for `openrouter:web_fetch` on the workspace's Server Tools page. Each tool entry is either locked or a default:

* **Locked** (the default when the entry is created): requests and presets in the workspace are limited to these settings. A request that names an engine outside the list, or whose domain list has no overlap with the workspace's, is rejected with a `403`.
* **Default** ("Prevent overrides" off): the settings fill in what a request leaves unset. A request that names its own engine keeps it, and a request that sets either domain list (an empty list counts) keeps its lists as sent; the workspace domain lists are used only when the request sets neither.

In both modes a request with no `engine` (or `engine: "auto"`) runs the workspace's **Default engine**, and a `native` request on a model without native fetch runs its **Native fallback engine** (see the `native` row under [Engine Selection](#engine-selection)). Both are stored at the head of the engine list: the default first, then the fallback. A Default engine of **Auto** is stored as a leading `"auto"` entry and keeps OpenRouter's choice among the allowed engines (native when the list allows it, the model has it, and the endpoint allows it; otherwise the first allowed non-native engine that is available in the request's region; a default-mode list that offers none uses Exa), so an `auto` request on a regional endpoint runs a listed engine that is available there instead of failing on native or on a global-only engine. Settings on the workspace's Plugins tab do not apply to server tools.

## Pricing

| Engine | Pricing |
| - | - |
| **Exa** | \$1 per 1,000 fetches |
| **Parallel** | \$1 per 1,000 fetches |
| **Firecrawl** | \$2.50 per 1,000 fetches |
| **OpenRouter** | Free |
| **Native** | Passed through from the provider |

All pricing is in addition to standard LLM token costs for processing the fetched content.

## Next Steps

* [Server Tools Overview](https://openrouter.ai/docs/guides/features/server-tools.md). Learn about server tools
* [Web Search](https://openrouter.ai/docs/guides/features/server-tools/web-search.md). Search the web for real-time information
* [Datetime](https://openrouter.ai/docs/guides/features/server-tools/datetime.md). Get the current date and time
* [Tool Calling](https://openrouter.ai/docs/guides/features/tool-calling.md). Learn about user-defined tool calling
