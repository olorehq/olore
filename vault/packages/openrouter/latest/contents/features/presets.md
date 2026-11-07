> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Presets

> Manage your LLM configurations

[Presets](https://openrouter.ai/settings/presets) allow you to separate your LLM configuration from your code. Create and manage presets through the OpenRouter web application to control provider routing, model selection, system prompts, and other parameters, then reference them in OpenRouter API requests.

## What are Presets?

Presets are named configurations that encapsulate all the settings needed for a specific use case. For example, you might create:

* An "email-copywriter" preset for generating marketing copy
* An "inbound-classifier" preset for categorizing customer inquiries
* A "code-reviewer" preset for analyzing pull requests

Each preset can manage:

* Provider routing preferences (sort by price, latency, etc.)
* Model selection (specific model or array of models with fallbacks)
* System prompts
* Generation parameters (temperature, top\_p, etc.)
* Provider inclusion/exclusion rules
* Tools, including [OpenRouter server tools](https://openrouter.ai/docs/guides/features/server-tools/web-search.md) such as web search, [advisors](https://openrouter.ai/docs/guides/features/server-tools/advisor.md), and [subagents](https://openrouter.ai/docs/guides/features/server-tools/subagent.md)

## Quick Start

1. [Create a preset](https://openrouter.ai/settings/presets/new). For example, select a model and restrict provider routing to just a few providers.

   ![Creating a new preset](https://mintcdn.com/openrouter-d02e98a0/PSwwwiCqAD_BNeni/assets/preset-example.png?fit=max\&auto=format\&n=PSwwwiCqAD_BNeni\&q=85\&s=b87ed014781f965aa751327dc0dc4a65)

2. Make a [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) request to the preset:
   ```json lines theme={null}
   {
     "model": "@preset/ravenel-bridge",
     "input": "What's your opinion of the Golden Gate Bridge? Isn't it beautiful?"
   }
   ```

## Benefits

### Separation of Concerns

Presets help you maintain a clean separation between your application code and LLM configuration. This makes your code more semantic and easier to maintain.

### Rapid Iteration

Update your LLM configuration without deploying code changes:

* Switch to new model versions
* Adjust system prompts
* Modify parameters
* Change provider preferences

## Using Presets

There are three ways to use presets in your API requests.

1. **Direct Model Reference**

You can reference the preset as if it was a model by sending requests to `@preset/preset-slug`

```json lines theme={null}
{
  "model": "@preset/email-copywriter",
  "input": "Write a marketing email about our new feature"
}
```

2. **Preset Field**

The `preset` field takes the same `@preset/{slug}` reference as the model field. A bare slug without the `@preset/` prefix is ignored.

```json lines theme={null}
{
  "model": "openai/gpt-4",
  "preset": "@preset/email-copywriter",
  "input": "Write a marketing email about our new feature"
}
```

3. **Combined Model and Preset**

```json lines theme={null}
{
  "model": "openai/gpt-4@preset/email-copywriter",
  "input": "Write a marketing email about our new feature"
}
```

## Tools in Presets

A preset can store a `tools` array, exactly like the one you would send on a request. This includes:

* **OpenRouter server tools**, for example `openrouter:web_search`, `openrouter:advisor`, and `openrouter:subagent`. The advisor and subagent tools may appear multiple times, one entry per named instance, so a single preset can define a whole roster of named workers (see the [subagent](https://openrouter.ai/docs/guides/features/server-tools/subagent.md) and [advisor](https://openrouter.ai/docs/guides/features/server-tools/advisor.md#multiple-advisors) docs).
* **Function tools** and other custom tool definitions, which are stored and forwarded verbatim.

For example, a preset can bundle a design assistant with a roster of named subagents (one for creative ideation, one that generates images and mockups, and one for frontend design):

```json lines theme={null}
{
  "tools": [
    {
      "type": "openrouter:subagent",
      "parameters": {
        "name": "ideator",
        "model": "anthropic/claude-fable-5",
        "instructions": "You brainstorm creative directions, naming, and copy. Return several distinct options."
      }
    },
    {
      "type": "openrouter:subagent",
      "parameters": {
        "name": "mockup artist",
        "instructions": "You generate images and UI mockups for the concepts you are given.",
        "tools": [
          {
            "type": "openrouter:image_generation",
            "parameters": { "model": "openai/gpt-5.4-image-2" }
          }
        ]
      }
    },
    {
      "type": "openrouter:subagent",
      "parameters": {
        "name": "frontend designer",
        "model": "moonshotai/kimi-k3",
        "instructions": "You turn approved mockups into clean, responsive frontend code."
      }
    }
  ]
}
```

Any client that references `@preset/{slug}` gets these tools applied server-side, with no SDK or orchestration code required, and you can add, remove, or retune the tools later without touching the client.

### How preset tools merge with request tools

When a request that references a preset also sends its own `tools`, the two arrays are unioned, and a request tool overrides the preset's tool of the same identity (mirroring how request fields override preset config elsewhere). Identity is determined per tool kind:

* `openrouter:advisor` and `openrouter:subagent` entries are keyed by type plus `parameters.name`, so a request can override one named instance while keeping the preset's others.
* Function tools are keyed by function name.
* Other OpenRouter server tools (such as `openrouter:web_search`) are singletons, keyed by type.

Preset tools keep their relative order; request-only tools are appended after them.

## Creating Presets from API Requests

In addition to the dashboard, you can create (or update) a preset directly from any inference request body you already use. This is useful when you want to capture a known-good request as a reusable configuration without re-typing it in the UI.

Each inference skin has its own endpoint. Send the same JSON body you would send to the matching inference route. OpenRouter persists only the fields that overlap with the preset config (e.g. `model`, `temperature`, `provider`, `top_p`, `system`, `tools`). Transient fields like `messages`, `input`, `prompt`, and `stream` are silently ignored.

The endpoints are:

* `POST /api/v1/presets/{slug}/chat/completions`, Chat Completions skin
* `POST /api/v1/presets/{slug}/messages`, Anthropic Messages skin
* `POST /api/v1/presets/{slug}/responses`, Responses skin

The `{slug}` path parameter is a URL-safe identifier for the preset. If a preset with that slug already exists in your workspace, a new version is created and designated as the active version. If it does not exist, a new preset is created.

These endpoints require a read-write [management key](https://openrouter.ai/docs/docs/guides/overview/auth/management-api-keys), like other workspace configuration endpoints; inference API keys are rejected with a 401. If you omit `workspace_id`, the preset is created in the key's workspace (keys limited to one workspace) or the account's default workspace. Pass `workspace_id` to target another workspace.

### From a Chat Completions request

Reuse the exact body you would `POST /api/v1/chat/completions`:

```bash lines theme={null}
curl https://openrouter.ai/api/v1/presets/email-copywriter/chat/completions \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/gpt-4o",
    "temperature": 0.7,
    "provider": { "sort": "price" },
    "messages": [
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": "Write a marketing email." }
    ]
  }'
```

The `messages` array is ignored for preset storage; only the configuration fields (`model`, `temperature`, `provider`) and the extracted system prompt are persisted.

### From an Anthropic Messages request

```bash lines theme={null}
curl https://openrouter.ai/api/v1/presets/code-reviewer/messages \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "anthropic/claude-4.6-sonnet",
    "max_tokens": 1024,
    "system": "You are a senior code reviewer.",
    "messages": [
      { "role": "user", "content": "Review this PR." }
    ]
  }'
```

The top-level `system` field becomes the preset's system prompt.

### From a Responses request

```bash lines theme={null}
curl https://openrouter.ai/api/v1/presets/inbound-classifier/responses \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/gpt-4o",
    "instructions": "Classify the inbound message.",
    "input": "Hello, I need a refund."
  }'
```

The `instructions` field becomes the preset's system prompt.

### Response shape

All three endpoints return the resulting preset with its designated version:

```json expandable lines theme={null}
{
  "data": {
    "id": "650e8400-e29b-41d4-a716-446655440001",
    "name": "email-copywriter",
    "slug": "email-copywriter",
    "status": "active",
    "designated_version_id": "550e8400-e29b-41d4-a716-446655440000",
    "created_at": "2026-04-20T10:00:00Z",
    "updated_at": "2026-04-20T10:00:00Z",
    "designated_version": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "version": 1,
      "system_prompt": "You are a helpful assistant.",
      "config": {
        "model": "openai/gpt-4o",
        "temperature": 0.7,
        "provider": { "sort": "price" }
      },
      "created_at": "2026-04-20T10:00:00Z",
      "updated_at": "2026-04-20T10:00:00Z"
    }
  }
}
```

Once created, the preset can be used in subsequent inference requests via any of the three referencing styles shown in [Using Presets](#using-presets).

### Suggested workflow

1. Build and test a request against `/chat/completions` (or `/messages` / `/responses`) until it produces the output you want.
2. `POST` the same body to the matching `/api/v1/presets/{slug}/...` endpoint to capture the config.
3. In production code, swap the inference call to reference `@preset/{slug}` instead of repeating the configuration.

This lets you iterate on prompts and parameters in code, then promote the working configuration to a preset without manual transcription.

## Other Notes

1. If you're using an organization account, all members can access organization presets. This is a great way to share best practices across teams.
2. Version history is kept so you can understand changes that were made and roll back. However when addressing a preset through the API, the latest version is always used.
3. If you provide parameters in the request, they take priority over the preset's values. The two are shallow-merged, meaning request-level fields override matching preset fields, but preset fields not present in the request are preserved.
