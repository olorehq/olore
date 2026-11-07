> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Free Models Router

> Get free AI inference by routing to available free models

The [Free Models Router](https://openrouter.ai/openrouter/free) (`openrouter/free`) automatically selects a free model at random from the available free models on OpenRouter. The router intelligently filters for models that support the features your request needs, such as image understanding, tool calling, and structured outputs.

## Overview

Instead of manually choosing a specific free model, let the Free Models Router handle model selection for you. This is ideal for experimentation, learning, and low-volume use cases where you want zero-cost inference without worrying about which specific model to use.

To try the Free Models Router without writing any code, see the [Chat Playground guide](https://openrouter.ai/docs/cookbook/get-started/free-models-router-playground.md).

## Usage

Set your model to `openrouter/free`:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openrouter/free',
    input: 'Hello! What can you help me with today?',
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}

const message = [...response.output].reverse().find((item) => item.type === 'message');
console.log(message?.content.find((part) => part.type === 'output_text')?.text);
// Check which model was selected
console.log('Model used:', response.model);
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openrouter/free',
    input: 'Hello! What can you help me with today?',
  }),
});

const data = await response.json();
const message = [...data.output].reverse().find((item: { type: string }) => item.type === 'message');
console.log(message?.content.find((part: { type: string; text?: string }) => part.type === 'output_text')?.text);
// Check which model was selected
console.log('Model used:', data.model);
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
    "model": "openrouter/free",
    "input": "Hello! What can you help me with today?"
  })
)

data = response.json()
message = next(item for item in reversed(data['output']) if item['type'] == 'message')
print(next(part['text'] for part in message['content'] if part['type'] == 'output_text'))
# Check which model was selected
print('Model used:', data['model'])
```

```bash title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openrouter/free",
    "input": "Hello!"
  }'
```

## Response

The response includes the `model` field showing which free model was actually used:

```json lines theme={null}
{
  "id": "gen-...",
  "object": "response",
  "model": "upstage/solar-pro-3:free",
  "status": "completed",
  "output": [
    {
      "type": "message",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "..."
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 12,
    "output_tokens": 85,
    "total_tokens": 97
  }
}
```

## How It Works

1. **Request Analysis**: Your request is analyzed to determine required capabilities (e.g., vision, tool calling, structured outputs)
2. **Model Filtering**: The router filters available free models to those supporting your request's requirements
3. **Random Selection**: A model is randomly selected from the filtered pool
4. **Request Forwarding**: Your request is forwarded to the selected free model
5. **Response Tracking**: The response includes metadata showing which model was used

## Available Free Models

The Free Models Router selects from all currently available free models on OpenRouter. Some popular options include:

> [!WARNING]
>
> Free model availability changes frequently. Check the [models page](https://openrouter.ai/models?pricing=free) for the current list of free models.

* **DeepSeek R1 (free)** - DeepSeek's reasoning model
* **Llama models (free)** - Various Meta Llama models
* **Qwen models (free)** - Alibaba's Qwen family
* And other community-contributed free models

## Pricing

The Free Models Router is completely free. There is no charge for:

* Using the router itself
* Requests routed to free models

## Use Cases

* **Learning and experimentation**: Try AI capabilities without any cost
* **Prototyping**: Build and test applications before committing to paid models
* **Low-volume applications**: Suitable for personal projects or demos
* **Education**: Perfect for students and educators exploring AI

## Limitations

* **Rate limits**: Free models may have lower rate limits than paid models
* **Availability**: Free model availability can vary; some may be temporarily unavailable
* **Performance**: Free models may have higher latency during peak usage
* **Model selection**: You cannot control which specific model is selected (use the `:free` variant suffix on a specific model if you need a particular free model)

## Selecting Specific Free Models

If you prefer to use a specific free model rather than random selection, you can:

1. **Use the `:free` variant**: Append `:free` to any model that has a free variant:
   ```json lines theme={null}
   {
     "model": "meta-llama/llama-3.2-3b-instruct:free"
   }
   ```

2. **Browse free models**: Visit the [models page](https://openrouter.ai/models?pricing=free) to see all available free models and select one directly.

## Related

* [Free Models Router in Chat Playground](https://openrouter.ai/docs/cookbook/get-started/free-models-router-playground.md) - Try the router without writing code
* [Free Variant](https://openrouter.ai/docs/guides/routing/model-variants/free.md) - Use the `:free` suffix for specific models
* [Auto Router](https://openrouter.ai/docs/guides/routing/routers/auto-router.md) - Intelligent model selection (paid models)
* [Latest Model Resolution](https://openrouter.ai/docs/guides/features/latest-resolution.md) - Always target the newest version of a model family
* [Body Builder](https://openrouter.ai/docs/guides/features/body-builder.md) - Generate multiple parallel API requests
* [Model Fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks.md) - Configure fallback models
* [EU in-region routing on Business](https://openrouter.ai/business/eu) - Router models are excluded from regional model lists, so pick an EU-eligible model
