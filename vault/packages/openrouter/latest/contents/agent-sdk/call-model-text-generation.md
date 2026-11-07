> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Text Generation

> Generate text with callModel using various input formats and model configurations. Supports multiple consumption patterns including text, streaming, and structured output.

## Basic Usage

The simplest way to generate text:

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/agent';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Explain quantum computing in one sentence.',
});

const text = await result.getText();
```

## Input Formats

callModel accepts several input formats to match your use case.

### String Input

The simplest format - a single string becomes a user message:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the speed of light?',
});
```

### Message Array

For multi-turn conversations, pass an array of messages:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: [
    { role: 'user', content: 'My name is Alice.' },
    { role: 'assistant', content: 'Hello Alice! How can I help you today?' },
    { role: 'user', content: 'What is my name?' },
  ],
});
```

### Multimodal

For rich content including images:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5.2',
  input: [
    {
      type: 'message',
      role: 'user',
      content: [
        { type: 'input_text', text: 'What is in this image?' },
        {
          type: 'input_image',
          imageUrl: 'https://example.com/image.jpg',
          detail: 'auto',
        },
      ],
    },
  ],
});
```

## System Instructions

Set the model's behavior with the `instructions` parameter:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  instructions: 'You are a helpful coding assistant. Be concise and provide working code examples.',
  input: 'How do I read a file in Node.js?',
});
```

## Model Selection

### Single Model

Specify a model by its OpenRouter ID:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'anthropic/claude-sonnet-4.5',
  input: 'Hello!',
});
```

### Model Fallback

Provide multiple models for automatic fallback:

```typescript lines theme={null}
const result = openrouter.callModel({
  models: ['anthropic/claude-sonnet-4.5', 'openai/gpt-5.2', 'google/gemini-pro'],
  input: 'Hello!',
});
```

The SDK will try each model in order until one succeeds.

## Response Methods

### getText()

Returns just the text content after tool execution completes:

```typescript lines theme={null}
const text = await result.getText();
console.log(text); // "The speed of light is approximately 299,792 km/s."
```

### getResponse()

Returns the full response object including usage data:

```typescript lines theme={null}
const response = await result.getResponse();

console.log(response.output);     // Full output array
console.log(response.usage);      // Token usage information

// Usage includes:
// - inputTokens: tokens in the prompt
// - outputTokens: tokens generated
// - cachedTokens: tokens served from cache (cost savings)
```

## Generation Parameters

Control the generation behavior:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Write a creative story.',

  // Temperature: 0 = deterministic, 2 = very creative
  temperature: 0.7,

  // Maximum tokens to generate
  maxOutputTokens: 1000,

  // Top-p sampling
  topP: 0.9,
});
```

## Response Format

Request structured output:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'List three programming languages.',
  text: {
    format: {
      type: 'json_object',
    },
  },
});

const text = await result.getText();
const data = JSON.parse(text);
```

## Error Handling

Handle common error cases:

```typescript lines theme={null}
try {
  const result = openrouter.callModel({
    model: 'openai/gpt-5-nano',
    input: 'Hello!',
  });

  const text = await result.getText();
} catch (error) {
  if (error instanceof Error && 'statusCode' in error) {
    if (error.statusCode === 401) {
      console.error('Invalid API key');
    } else if (error.statusCode === 429) {
      console.error('Rate limited - try again later');
    } else if (error.statusCode === 503) {
      console.error('Model unavailable');
    }
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Concurrent Requests

Each callModel invocation is independent:

```typescript lines theme={null}
const [result1, result2, result3] = await Promise.all([
  openrouter.callModel({ model: 'openai/gpt-5-nano', input: 'Question 1' }).getText(),
  openrouter.callModel({ model: 'openai/gpt-5-nano', input: 'Question 2' }).getText(),
  openrouter.callModel({ model: 'openai/gpt-5-nano', input: 'Question 3' }).getText(),
]);
```

## Next Steps

* **[Streaming](https://openrouter.ai/docs/agent-sdk/call-model/streaming.md)** - Stream responses in real-time
* **[Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md)** - Add tool capabilities to your generation
* **[Message Formats](https://openrouter.ai/docs/agent-sdk/call-model/message-formats.md)** - Convert from OpenAI/Claude formats
