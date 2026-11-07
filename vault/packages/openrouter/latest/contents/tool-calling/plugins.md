> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Plugins

> Extend model capabilities with OpenRouter plugins

OpenRouter plugins extend the capabilities of any model by injecting or mutating a request or response to add functionality like PDF processing, automatic JSON repair, and context compression. Unlike [server tools](https://openrouter.ai/docs/guides/features/server-tools.md) (which the model can call 0-N times), plugins always run once when enabled. Plugins can be enabled per-request via the API or configured as defaults for all your API requests through the [Plugins settings page](https://openrouter.ai/settings/plugins).

Plugins use the `plugins` array; server tools use the `tools` array. [ZDR enforcement](https://openrouter.ai/docs/guides/features/zdr.md) filters the model inference endpoint, not plugin backends, with one exception: the [Web Search plugin](https://openrouter.ai/docs/guides/features/plugins/web-search.md) rejects the Firecrawl engine when ZDR is enforced in your account privacy settings or a guardrail. On [In-Region Routing](https://openrouter.ai/docs/guides/features/in-region-routing.md) endpoints, a plugin engine that is not resident in the region returns an error. See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability).

## Available Plugins

OpenRouter currently supports the following plugins:

| Plugin | Description | Docs |
| - | - | - |
| **Web Search** (deprecated) | Augment LLM responses with real-time web search results. Use the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search) instead. | [Web Search](https://openrouter.ai/docs/guides/features/plugins/web-search.md) |
| **PDF Inputs** | Parse and extract content from uploaded PDF files | [PDF Inputs](https://openrouter.ai/docs/guides/overview/multimodal/pdfs.md) |
| **Response Healing** | Automatically fix malformed JSON responses from LLMs | [Response Healing](https://openrouter.ai/docs/guides/features/plugins/response-healing.md) |
| **Alignment** (beta) | Check every assistant message against rules sent with the request, in audit or enforce mode | [Alignment](https://openrouter.ai/docs/guides/features/plugins/alignment.md) |
| **Armor** (beta) | A safety classifier for tool calls: write rules in plain English, and calls that break them never reach your application | [Armor](https://openrouter.ai/docs/guides/features/plugins/armor.md) |
| **Pareto Router** | Set a default coding quality tier for the Pareto code router | [Pareto Router](https://openrouter.ai/docs/guides/routing/routers/pareto-router.md) |
| **Context Compression** | Compress prompts that exceed a model's context window using middle-out truncation | [Message Transforms](https://openrouter.ai/docs/guides/features/message-transforms.md) |

## Enabling Plugins via API

Plugins are enabled by adding a `plugins` array to your [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) request. Each plugin is identified by its `id` and can include optional configuration parameters.

## Using Multiple Plugins

You can enable multiple plugins in a single request:

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "input": [...],
  "plugins": [
    { "id": "web", "max_results": 3 },
    { "id": "response-healing" }
  ],
  "text": {
    "format": {
      "type": "json_schema",
      "name": "...",
      "schema": { ... }
    }
  }
}
```

## Default Plugin Settings

Organization admins and individual users can configure default plugin settings that apply to all API requests. This is useful for:

* Enabling plugins like web search or response healing by default across all requests
* Setting consistent plugin configurations without modifying application code
* Enforcing plugin settings that cannot be overridden by individual requests

To configure default plugin settings:

1. Navigate to [Settings > Plugins](https://openrouter.ai/settings/plugins)
2. Toggle plugins on/off to enable them by default
3. Click the configure button to customize plugin settings
4. Optionally enable "Prevent overrides" to enforce settings across all requests

> [!WARNING]
>
> In organizations, the Plugins settings page is only accessible to admins.

> [!NOTE]
>
> When "Prevent overrides" is enabled for a plugin, individual API requests cannot disable or modify that plugin's configuration. This is useful for enforcing organization-wide policies.

### Plugin precedence

Plugin settings are applied in the following order of precedence:

1. **Request-level settings**: Plugin configurations in the `plugins` array of individual requests
2. **Account defaults**: Settings configured in the Plugins settings page

If a plugin is enabled in your account defaults but not specified in a request, the default configuration will be applied. If you specify a plugin in your request, those settings will override the defaults.

If you want the account setting to take precedence, toggle on "Prevent overrides" in the config for the plugin. It will then be impossible for generations to override the config.

### Disabling a default plugin

If a plugin is enabled by default in your account settings, you can disable it for a specific request by passing `"enabled": false` in the plugins array:

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "input": [...],
  "plugins": [
    { "id": "web", "enabled": false }
  ]
}
```

This will turn off the web search plugin for that particular request, even if it's enabled in your account defaults.

## Model Variants as Plugin Shortcuts

> [!WARNING]
>
> **Deprecated**
>
> The `:online` variant and the web search plugin are deprecated. Use the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search) instead.

Some plugins have convenient model variant shortcuts. For example, appending `:online` to any model ID enables web search:

```json lines theme={null}
{
  "model": "openai/gpt-5.2:online"
}
```

This is equivalent to:

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "plugins": [{ "id": "web" }]
}
```

See [Model Variants](https://openrouter.ai/docs/guides/routing/model-variants/online.md) for more information about available shortcuts.
