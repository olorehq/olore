> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Structured Outputs

> Return structured data from your models

OpenRouter supports structured outputs for compatible models, ensuring responses follow a specific JSON Schema format. This feature is particularly useful when you need consistent, well-formatted responses that can be reliably parsed by your application.

## Overview

Structured outputs allow you to:

* Enforce specific JSON Schema validation on model responses
* Get consistent, type-safe outputs
* Avoid parsing errors and hallucinated fields
* Simplify response handling in your application

## Using Structured Outputs

### Responses API

On the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md), set `text.format` in your request, with `type` set to `json_schema` and your schema's `name`, `strict`, and `schema` fields alongside it:

```json expandable lines theme={null}
{
  "input": "What's the weather like in London?",
  "text": {
    "format": {
      "type": "json_schema",
      "name": "weather",
      "strict": true,
      "schema": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "City or location name"
          },
          "temperature": {
            "type": "number",
            "description": "Temperature in Celsius"
          },
          "conditions": {
            "type": "string",
            "description": "Weather conditions description"
          }
        },
        "required": ["location", "temperature", "conditions"],
        "additionalProperties": false
      }
    }
  }
}
```

### Chat Completions API

On Chat Completions (`/api/v1/chat/completions`), include a `response_format` parameter in your request, with `type` set to `json_schema` and the `json_schema` object containing your schema:

```json expandable lines theme={null}
{
  "messages": [
    { "role": "user", "content": "What's the weather like in London?" }
  ],
  "response_format": {
    "type": "json_schema",
    "json_schema": {
      "name": "weather",
      "strict": true,
      "schema": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "City or location name"
          },
          "temperature": {
            "type": "number",
            "description": "Temperature in Celsius"
          },
          "conditions": {
            "type": "string",
            "description": "Weather conditions description"
          }
        },
        "required": ["location", "temperature", "conditions"],
        "additionalProperties": false
      }
    }
  }
}
```

On both APIs, the model will respond with a JSON object that strictly follows your schema:

```json lines theme={null}
{
  "location": "London",
  "temperature": 18,
  "conditions": "Partly cloudy with light drizzle"
}
```

## Model Support

Structured outputs are supported by select models.

You can find a list of models that support structured outputs on the [models page](https://openrouter.ai/models?order=newest\&supported_parameters=structured_outputs).

Support is determined per endpoint, not just per model: the same model may be served by multiple providers, and only some of those providers may support structured outputs. Endpoint support can also change over time. To see which providers support structured outputs for a specific model, check the `structured_outputs` parameter in the Providers section of the model's page.

For details on each provider's implementation, see their documentation, for example:

* [OpenAI](https://platform.openai.com/docs/guides/structured-outputs)
* [Google Gemini](https://ai.google.dev/gemini-api/docs/structured-output)
* [Anthropic](https://docs.claude.com/en/docs/build-with-claude/structured-outputs)
* [Fireworks](https://docs.fireworks.ai/structured-responses/structured-response-formatting#structured-response-modes)

To ensure your request is only routed to endpoints that support structured outputs:

1. Check the model's supported parameters on the [models page](https://openrouter.ai/models)
2. Set `require_parameters: true` in your provider preferences (see [Provider Routing](https://openrouter.ai/docs/guides/routing/provider-selection.md))
3. Include `text.format` (Responses API) or `response_format` (Chat Completions) with `type: json_schema` in your request

## Best Practices

1. **Include descriptions**: Add clear descriptions to your schema properties to guide the model

2. **Use strict mode**: Set `strict: true` so that providers with a native strict mode enforce your schema exactly. Enforcement varies by provider: some guarantee schema-conforming output, while others translate your schema into their own structured-output format or treat it as a strong hint, so exact compliance is not guaranteed on every endpoint. Strict modes may also restrict which JSON Schema features you can use. See the provider's documentation for details

## Example Implementation

Here's a complete example using the Fetch API:

## Streaming with Structured Outputs

Structured outputs are also supported with streaming responses. The model will stream valid partial JSON that, when complete, forms a valid response matching your schema.

To enable streaming with structured outputs, simply add `stream: true` to your request:

```json lines theme={null}
{
  "stream": true,
  "text": {
    "format": {
      "type": "json_schema",
      // ... rest of your schema
    }
  }
}
```

## Error Handling

When using structured outputs, you may encounter these scenarios:

1. **Model doesn't support structured outputs**: The request will fail with an error indicating lack of support
2. **Invalid schema**: The model will return an error if your JSON Schema is invalid

## Response Healing

For non-streaming requests using `text.format` with `type: "json_schema"`, you can enable the [Response Healing](https://openrouter.ai/docs/guides/features/plugins/response-healing.md) plugin to reduce the risk of invalid JSON when models return imperfect formatting. Learn more in the [Response Healing documentation](https://openrouter.ai/docs/guides/features/plugins/response-healing.md).
