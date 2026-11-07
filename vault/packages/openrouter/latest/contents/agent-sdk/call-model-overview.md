> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Call Model (Typescript)

> A unified API for calling any LLM with automatic tool execution and multiple consumption patterns

## Why callModel?

* **Items-Based Model**: Built on OpenRouter's Responses API with structured items (messages, tool calls, reasoning) instead of raw message chunks
* **Multiple Consumption Patterns**: Get text, stream responses, or access structured data - all from a single call
* **Automatic Tool Execution**: Define tools with Zod schemas and let the SDK handle execution loops
* **Type Safety**: Full TypeScript inference for tool inputs, outputs, and events
* **Format Compatibility**: Convert to/from OpenAI chat and Anthropic Claude message formats
* **Streaming First**: Built on a reusable stream architecture that supports concurrent consumers

## Quick Start

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/agent';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the capital of France?',
});

// Get text (simplest pattern)
const text = await result.getText();
console.log(text); // "The capital of France is Paris."
```

## Consumption Patterns

callModel returns a `ModelResult` object that provides multiple ways to consume the response:

### Text Methods

```typescript lines theme={null}
// Get just the text content
const text = await result.getText();

// Get the full response with usage data
const response = await result.getResponse();
console.log(response.usage); // { inputTokens, outputTokens, cachedTokens }
```

### Streaming Methods

```typescript lines theme={null}
// Stream text deltas
for await (const delta of result.getTextStream()) {
  process.stdout.write(delta);
}

// Stream reasoning (for reasoning models)
for await (const delta of result.getReasoningStream()) {
  console.log('Reasoning:', delta);
}

// Stream complete items by ID (recommended)
for await (const item of result.getItemsStream()) {
  console.log('Item update:', item.type, item.id);
}

// Stream all events (including tool preliminary results)
for await (const event of result.getFullResponsesStream()) {
  console.log('Event:', event.type);
}
```

### Tool Methods

```typescript lines theme={null}
// Get all tool calls from the response
const toolCalls = await result.getToolCalls();

// Stream tool calls as they complete
for await (const toolCall of result.getToolCallsStream()) {
  console.log(`Tool: ${toolCall.name}`, toolCall.arguments);
}

// Stream tool deltas and preliminary results
for await (const event of result.getToolStream()) {
  if (event.type === 'delta') {
    process.stdout.write(event.content);
  } else if (event.type === 'preliminary_result') {
    console.log('Progress:', event.result);
  }
}
```

## Input Formats

callModel accepts multiple input formats:

```typescript lines theme={null}
// Simple string
const result1 = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Hello!',
});

// Message array (OpenResponses format)
const result2 = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: [
    { role: 'user', content: 'Hello!' },
  ],
});

// With system instructions
const result3 = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  instructions: 'You are a helpful assistant.',
  input: 'Hello!',
});
```

## What's Next?

Explore the guides to learn more about specific features:

* **[Working with Items](https://openrouter.ai/docs/agent-sdk/call-model/items.md)** - Understand the items-based streaming paradigm
* **[Text Generation](https://openrouter.ai/docs/agent-sdk/call-model/text-generation.md)** - Input formats, model selection, and response handling
* **[Streaming](https://openrouter.ai/docs/agent-sdk/call-model/streaming.md)** - All streaming methods and patterns
* **[Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md)** - Creating typed tools with Zod schemas and multi-turn orchestration
* **[Lifecycle Hooks](https://openrouter.ai/docs/agent-sdk/call-model/lifecycle-hooks.md)** - Observe and control tools, prompts, approvals, sessions, and model calls
* **[nextTurnParams](https://openrouter.ai/docs/agent-sdk/call-model/next-turn-params.md)** - Tool-driven context injection for skills and plugins
* **[Message Formats](https://openrouter.ai/docs/agent-sdk/call-model/message-formats.md)** - Converting to/from OpenAI and Claude formats
* **[Dynamic Parameters](https://openrouter.ai/docs/agent-sdk/call-model/dynamic-parameters.md)** - Async functions for adaptive behavior
* **[Stop Conditions](https://openrouter.ai/docs/agent-sdk/call-model/stop-conditions.md)** - Intelligent execution control
* **[API Reference](https://openrouter.ai/docs/agent-sdk/call-model/api-reference.md)** - Complete type definitions and method signatures

### Example Tools

Ready-to-use tool implementations:

* **[Weather Tool](https://openrouter.ai/docs/agent-sdk/call-model/examples/weather-tool.md)** - Basic API integration
* **[Skills Loader](https://openrouter.ai/docs/agent-sdk/call-model/examples/skills-loader.md)** - Claude Code skills pattern
