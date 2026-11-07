> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Model Fallbacks

> Automatic failover between models

The `models` parameter lets you automatically try other models if the primary model's providers are down, rate-limited, or refuse to reply due to content moderation.

## How it works

Provide an array of model IDs in priority order. If the first model returns an error, OpenRouter will automatically try the next model in the list.

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    models: ['~anthropic/claude-sonnet-latest', 'gryphe/mythomax-l2-13b'],
    input: 'What is the meaning of life?',
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}

const message = [...response.output].reverse().find((item) => item.type === 'message');
console.log(message?.content.find((part) => part.type === 'output_text')?.text);
```

```typescript title="TypeScript (fetch)" lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    models: ['~anthropic/claude-sonnet-latest', 'gryphe/mythomax-l2-13b'],
    input: 'What is the meaning of life?',
  }),
});

type ResponseOutputItem = {
  type: string;
  content?: { type: string; text?: string }[];
};

const data: { output: ResponseOutputItem[] } = await response.json();
const message = [...data.output].reverse().find((item) => item.type === 'message');
console.log(message?.content?.find((part) => part.type === 'output_text')?.text);
```

```python title="Python" expandable lines theme={null}
import requests
import json

response = requests.post(
  url="https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "Content-Type": "application/json",
  },
  data=json.dumps({
    "models": ["~anthropic/claude-sonnet-latest", "gryphe/mythomax-l2-13b"],
    "input": "What is the meaning of life?"
  })
)

data = response.json()
message = next(item for item in reversed(data['output']) if item['type'] == 'message')
print(next(part['text'] for part in message['content'] if part['type'] == 'output_text'))
```

## Fallback behavior

If the model you selected returns an error, OpenRouter will try to use the fallback model instead. If the fallback model is down or returns an error, OpenRouter will return that error.

By default, any error can trigger the use of a fallback model, including:

* Context length validation errors
* Moderation flags for filtered models
* Rate-limiting
* Downtime

## Pricing

Requests are priced using the model that was ultimately used, which will be returned in the `model` attribute of the response body.

This applies to [`:free` models](https://openrouter.ai/docs/guides/routing/model-variants/free) too. If a `:free` model is followed by a paid model in `models` and OpenRouter falls back to the paid model, you're billed at the paid model's price. To keep a request free, list only `:free` models.

## Using with the Anthropic Messages API

The Anthropic Messages API endpoint (`/api/v1/messages`) accepts the `fallbacks` parameter, matching the shape used by Anthropic's SDKs. Each entry names a fallback model to try in order, and the list maps to OpenRouter's `models` routing, so fallbacks trigger on the same errors listed above (rate limits, downtime, moderation refusals), not only on refusals.

> [!NOTE]
>
> OpenRouter handles this fallback routing itself. The `fallbacks` parameter does not use Anthropic's server-side fallback feature.

```typescript lines theme={null}
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  baseURL: 'https://openrouter.ai/api',
  apiKey: '<OPENROUTER_API_KEY>',
});

const message = await anthropic.beta.messages.create({
  model: 'anthropic/claude-sonnet-4.5',
  max_tokens: 1024,
  fallbacks: [{ model: 'anthropic/claude-opus-4.1' }],
  messages: [{ role: 'user', content: 'What is the meaning of life?' }],
});
```

### Limitations

* Each `fallbacks` entry accepts only the `model` field. Per-attempt overrides such as `max_tokens`, `thinking`, `speed`, or `output_config` are rejected with a 400 error.
* `fallbacks` cannot be combined with the `models` parameter; sending both returns a 400 error.
* `fallbacks` accepts at most 3 entries; longer lists return a 400 error.

## Using with the OpenAI SDK

To use the `models` array with the OpenAI SDK, include it in the `extra_body` parameter. In the example below, `~openai/gpt-sol-latest` will be tried first, and the `models` array will be tried in order as fallbacks.
