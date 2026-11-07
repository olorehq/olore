> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Server Tools

> Tools operated by OpenRouter that models can call during request

Beta

> [!NOTE]
>
> **Beta**
>
> Server tools are currently in beta. The API and behavior may change.

Server tools are specialized tools operated by OpenRouter that any model can call during a request. When a model decides to use a server tool, OpenRouter executes it server-side and returns the result to the model, so no client-side implementation is needed.

## Server Tools vs Plugins vs User-Defined Tools

| | Server Tools | Plugins | User-Defined Tools |
| - | - | - | - |
| **Who decides to use it** | The model | Always runs | The model |
| **Who executes it** | OpenRouter | OpenRouter | Your application |
| **Call frequency** | 0 to N times per request | Once per request | 0 to N times per request |
| **Specified via** | `tools` array | `plugins` array | `tools` array |
| **Type prefix** | `openrouter:*` | N/A | `function` |

**Server tools** are tools the model can invoke zero or more times during a request. OpenRouter handles execution transparently.

**Plugins** inject or mutate a request or response to add functionality (e.g. response healing, PDF parsing). They always run once when enabled.

**User-defined tools** are standard function-calling tools where the model suggests a call and *your* application executes it.

The Web Search plugin (`plugins: [{ "id": "web" }]`) is deprecated. Use the `openrouter:web_search` server tool instead. See [Migrating from the Web Search Plugin](https://openrouter.ai/docs/guides/features/server-tools/web-search.md#migrating-from-the-web-search-plugin).

## Available Server Tools

| Tool | Type | Description |
| - | - | - |
| [**Web Search**](https://openrouter.ai/docs/guides/features/server-tools/web-search.md) | `openrouter:web_search` | Search the web for current information |
| [**Datetime**](https://openrouter.ai/docs/guides/features/server-tools/datetime.md) | `openrouter:datetime` | Get the current date and time |
| [**Image Generation**](https://openrouter.ai/docs/guides/features/server-tools/image-generation.md) | `openrouter:image_generation` | Generate images from text prompts |
| [**Web Fetch**](https://openrouter.ai/docs/guides/features/server-tools/web-fetch.md) | `openrouter:web_fetch` | Fetch and extract content from URLs |
| [**Apply Patch**](https://openrouter.ai/docs/guides/features/server-tools/apply-patch.md) | `openrouter:apply_patch` | Propose file edits via V4A diff patches (Responses API only) |
| [**Shell**](https://openrouter.ai/docs/guides/features/server-tools/shell.md) | `openrouter:shell` | Run commands in a hosted, sandboxed shell (Responses and Messages APIs) |
| [**Bash**](https://openrouter.ai/docs/guides/features/server-tools/bash.md) | `openrouter:bash` | Anthropic-style bash tool with optional sandboxed server-side execution (Messages API only) |
| [**Fusion**](https://openrouter.ai/docs/guides/features/server-tools/fusion.md) | `openrouter:fusion` | Run a panel of models and an analyst for multi-model analysis |
| [**Advisor**](https://openrouter.ai/docs/guides/features/server-tools/advisor.md) | `openrouter:advisor` | Consult a stronger model for guidance mid-generation |
| [**Subagent**](https://openrouter.ai/docs/guides/features/server-tools/subagent.md) | `openrouter:subagent` | Delegate self-contained tasks to a smaller, faster worker model |
| [**Search Models**](https://openrouter.ai/docs/guides/features/server-tools/search-models.md) | `openrouter:experimental__search_models` | Search and filter the OpenRouter model catalog |
| [**Tool Search**](https://openrouter.ai/docs/guides/features/server-tools/tool-search.md) | `openrouter:tool_search` | Discover and load deferred tools on demand (Responses and Messages APIs) |
| [**Files**](https://openrouter.ai/docs/guides/features/server-tools/files.md) | `openrouter:files` | Read, write, edit, and list text files in your workspace through the Files API |

### Tools API

The tools catalog is available programmatically. [`GET /api/v1/tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools) lists every server tool. [`GET /api/v1/tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool) returns one tool, by canonical name or any accepted alias, with the list of models that run it natively.

## How Server Tools Work

1. You include one or more server tools in the `tools` array of your API request.
2. The model decides whether and when to call each server tool based on the user's prompt.
3. OpenRouter intercepts the tool call, executes it server-side, and returns the result to the model.
4. The model uses the result to formulate its response. It may call the tool again if needed.

Server tools work alongside your own user-defined tools. You can include both in the same request.

## Native Execution

Some providers have a built-in version of a server tool. For example, OpenAI and Anthropic (as well as other providers) have built-in web search tools. When the model's endpoint has a "native" version of a tool available, OpenRouter can request the tool to be executed through the provider instead of running its own engine. This is the `native` engine in the server tool configuration.

### Which endpoints run a tool natively

Each endpoint object returned by the [endpoints API](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model.md) has a `native_tools` field. The key is the canonical OpenRouter server tool name. For example, for web search, it is `openrouter:web_search`. The value is the name of the provider's tool. For most tools the provider runs it. Bash is the exception: Anthropic's built-in bash tool returns the command to your application, which runs it. See [Bash](https://openrouter.ai/docs/guides/features/server-tools/bash.md#execution-engine).

```json lines theme={null}
{
  "name": "Anthropic | anthropic/claude-sonnet-4.5",
  "native_tools": {
    "openrouter:web_search": { "type": "web_search_20260209" },
    "openrouter:web_fetch": { "type": "web_fetch_20260209" },
    "openrouter:bash": { "type": "bash_20250124" }
  }
}
```

The fallback rules, and which parameters carry over to the provider's tool, differ per tool:

* [Web Search](https://openrouter.ai/docs/guides/features/server-tools/web-search.md#engine-selection)
* [Web Fetch](https://openrouter.ai/docs/guides/features/server-tools/web-fetch.md#engine-selection)
* [Apply Patch](https://openrouter.ai/docs/guides/features/server-tools/apply-patch.md#engine-behavior)
* [Bash](https://openrouter.ai/docs/guides/features/server-tools/bash.md#execution-engine)

## Privacy and regional availability

Each server tool has an execution path, an In-Region Routing (IRR) availability, and its own data handling. Model-provider [ZDR enforcement](https://openrouter.ai/docs/guides/features/zdr.md) and [IRR](https://openrouter.ai/docs/guides/features/in-region-routing.md) apply to the inference request. A tool backend is covered only where the table below states it.

### Execution paths

* **Provider**: the model's provider runs the tool natively. See [Native Execution](#native-execution).
* **OpenRouter**: OpenRouter runs the tool in-process, in an OpenRouter-operated sandbox, in an inner model generation, or by calling a third-party service such as Exa, Parallel, Perplexity, or Firecrawl.
* **Client**: OpenRouter returns the tool call to your application, which runs it.

### Server tool matrix

| Tool | Execution path | Global | US | EU | ZDR enforcement and backend policy |
| - | - | - | - | - | - |
| Web Search | Provider (`native`), or OpenRouter calling Exa, Parallel, Perplexity, or Firecrawl | All engines | Exa only | None | Firecrawl is rejected when ZDR is enforced. Exa, Parallel, Perplexity, and provider-native search apply their own retention policies. |
| Web Fetch | Provider (`native`), or OpenRouter calling Exa, Parallel, or Firecrawl, or the OpenRouter fetcher | All engines | None | None | Firecrawl is rejected when ZDR is enforced. Exa, Parallel, and provider-native fetch apply their own retention policies. |
| Apply Patch | Provider (`native`) or OpenRouter validator; your application applies the patch | Yes | Yes | Yes | No backend beyond the inference request. |
| Bash, client-side (`auto`, `native`) | Client | Yes | Yes | Yes | Commands run in your application. |
| Bash, sandboxed (`openrouter`) | OpenRouter sandbox | Yes | No | No | ZDR enforcement does not apply to sandbox contents. |
| Shell | OpenRouter sandbox | Yes | No | No | ZDR enforcement does not apply to sandbox contents. |
| Advisor | Provider (native passthrough) or OpenRouter inner generation | Yes | Yes | Yes | The inner generation receives the request's `provider` preferences, including `zdr` and `data_collection`. |
| Subagent | OpenRouter inner generation | Yes | Yes | Yes | The inner generation receives the request's `provider` preferences, including `zdr` and `data_collection`. |
| Fusion | OpenRouter inner panel and analyst generations | Yes | No | No | Inner generations run under your API key, so account and guardrail ZDR settings apply. Request-level `provider` preferences are not forwarded. |
| Image Generation | OpenRouter inner image-model generation | Yes | No | No | Inner generations run under your API key, so account and guardrail ZDR settings apply. Request-level `provider` preferences are not forwarded. |
| Datetime | OpenRouter in-process | Yes | Yes | Yes | No external backend. |
| Tool Search | OpenRouter in-process | Yes | Yes | Yes | No external backend. |
| Search Models | OpenRouter in-process | Yes | Yes | Yes | Queries the OpenRouter model catalog. |
| Files | OpenRouter Files API storage | Yes | No | No | ZDR enforcement does not apply to stored files. |

The [`GET /api/v1/tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools) response lists each tool's engines with `executed_by` and `data_regions`.

### ZDR enforcement

ZDR settings restrict which provider endpoints serve model inference. They do not disable server tools or plugins, and they do not change the retention policy of a third-party backend.

OpenRouter enforces one tool-level ZDR rule: when ZDR is enforced in your [privacy settings](https://openrouter.ai/settings/privacy) or a [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md), Web Search, Web Fetch, and the Web Search plugin reject the Firecrawl engine. No other tool backend is filtered by ZDR. Review each third-party service's retention policy before you enable a tool that calls it.

### IRR availability

A regional request passes two gates:

1. **Request admission.** The regional hostname (`eu.openrouter.ai` or `us.openrouter.ai`) and any guardrail `allowed_data_regions` decide whether the request is accepted. See [In-Region Routing](https://openrouter.ai/docs/guides/features/in-region-routing.md).
2. **Execution residency.** Each server tool and plugin engine is then checked against the request's region. With `engine: "auto"` or no engine, OpenRouter selects only engines resident in that region. A pinned engine that is not resident in the region is rejected.

When no resident engine exists, the request fails. A server tool returns a `403` error, and the Web Search plugin returns a `400` error. OpenRouter does not fall back to global infrastructure. Remove the tool or send the request to `https://openrouter.ai`.

On regional endpoints, client-side Bash is rejected when the same request includes another server tool without an in-region native path. Apply Patch and Advisor have in-region native paths; the other server tools do not.

## Tool Call Limits

Every request that uses server tools runs an agent loop with a step budget. Each tool call the model makes (a web search, an image generation, etc.) consumes one step; when the budget is exhausted, the model is asked to produce its final answer with the context gathered so far.

Two top-level request fields control the outer loop (both are siblings of `input` and `tools`):

| Field | Default | Max | Behavior |
| - | - | - | - |
| `max_tool_calls` | `30` | `30` | Total server-tool steps allowed for the request, across all server tools |
| `stop_server_tools_when` | None | None | Array of stop conditions (step count, spend cap, and more). When set, it **overrides** `max_tool_calls` |

Tools that run their own inner agent loops have separate, per-tool budgets configured via the tool's `parameters`:

| Tool | Parameter | Default | Max |
| - | - | - | - |
| [Fusion](https://openrouter.ai/docs/guides/features/server-tools/fusion.md) | `max_tool_calls` | `4` | `16` |
| [Subagent](https://openrouter.ai/docs/guides/features/server-tools/subagent.md) | `max_tool_calls` | Provider default | `25` |

These inner budgets bound each panelist or worker model's own tool loop and are independent of the outer request budget.

## Quick Start

Add server tools to the `tools` array using the `openrouter:` type prefix:

## Combining with User-Defined Tools

Server tools and user-defined tools can be used in the same request:

```json expandable lines theme={null}
{
  "model": "openai/gpt-5.2",
  "input": [...],
  "tools": [
    { "type": "openrouter:web_search", "parameters": { "max_results": 3 } },
    { "type": "openrouter:datetime" },
    {
      "type": "function",
      "name": "get_stock_price",
      "description": "Get the current stock price for a ticker symbol",
      "parameters": {
        "type": "object",
        "properties": {
          "ticker": { "type": "string" }
        },
        "required": ["ticker"]
      }
    }
  ]
}
```

The model can call any combination of server tools and user-defined tools. OpenRouter executes the server tools automatically, while your application handles the user-defined tool calls as usual.

## Usage Tracking

Server tool usage is tracked in the response `usage` object:

```json lines theme={null}
{
  "usage": {
    "input_tokens": 105,
    "output_tokens": 250,
    "total_tokens": 355,
    "server_tool_use_details": {
      "web_search_requests": 2
    }
  }
}
```

## Next Steps

* [Web Search](https://openrouter.ai/docs/guides/features/server-tools/web-search.md). Search the web for real-time information
* [Datetime](https://openrouter.ai/docs/guides/features/server-tools/datetime.md). Get the current date and time
* [Image Generation](https://openrouter.ai/docs/guides/features/server-tools/image-generation.md). Generate images from text prompts
* [Web Fetch](https://openrouter.ai/docs/guides/features/server-tools/web-fetch.md). Fetch and extract content from URLs
* [Apply Patch](https://openrouter.ai/docs/guides/features/server-tools/apply-patch.md). Propose file edits via V4A diffs
* [Shell](https://openrouter.ai/docs/guides/features/server-tools/shell.md). Run commands in a hosted, sandboxed shell
* [Bash](https://openrouter.ai/docs/guides/features/server-tools/bash.md). Anthropic-style bash tool with optional sandboxed server-side execution
* [Fusion](https://openrouter.ai/docs/guides/features/server-tools/fusion.md). Run a panel of models and an analyst for multi-model analysis
* [Advisor](https://openrouter.ai/docs/guides/features/server-tools/advisor.md). Consult a stronger model for guidance mid-generation
* [Subagent](https://openrouter.ai/docs/guides/features/server-tools/subagent.md). Delegate self-contained tasks to a smaller, faster worker model
* [Search Models](https://openrouter.ai/docs/guides/features/server-tools/search-models.md). Search and filter the OpenRouter model catalog
* [Tool Calling](https://openrouter.ai/docs/guides/features/tool-calling.md). Learn about user-defined tool calling
