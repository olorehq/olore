> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Working with Items

> Understanding the items-based streaming paradigm for callModel

## The Items Paradigm

`callModel` is built on OpenRouter's Responses API which uses an **items-based model** rather than the messages-based model used by OpenAI Chat or Vercel AI SDK.

Items are emitted multiple times with the same ID but progressively updated content. You replace the entire item by ID rather than accumulating stream chunks.

## Messages vs Items

| Traditional (OpenAI Chat, Vercel AI) | callModel (Items-native) |
| - | - |
| Stream chunks, accumulate text | Stream items, replace by ID |
| Single message type | Multiple item types |
| Reconstruct content at end | Each emission is complete |
| Manual state management | Natural React state updates |

## Item Types

`getItemsStream()` yields these item types:

| Type | Description |
| - | - |
| `message` | Assistant text responses |
| `function_call` | Tool invocations with arguments |
| `reasoning` | Model thinking (extended thinking) |
| `web_search_call` | Web search operations |
| `file_search_call` | File search operations |
| `image_generation_call` | Image generation operations |
| `function_call_output` | Results from executed tools |

## How Streaming Works

Each iteration yields a **complete item** with the same ID but updated content:

```typescript lines theme={null}
// Iteration 1
{
  id: "msg_123",
  type: "message",
  content: [{ type: "output_text", text: "Hello" }]
}

// Iteration 2
{
  id: "msg_123",
  type: "message",
  content: [{ type: "output_text", text: "Hello world" }]
}

// Iteration 3
{
  id: "msg_123",
  type: "message",
  content: [{ type: "output_text", text: "Hello world!" }]
}
```

The same pattern applies to function calls:

```typescript lines theme={null}
// Iteration 1
{ type: "function_call", callId: "call_456", arguments: "{\"q" }

// Iteration 2
{
  type: "function_call",
  callId: "call_456",
  arguments: "{\"query\": \"weather"
}

// Iteration 3
{
  type: "function_call",
  callId: "call_456",
  arguments: "{\"query\": \"weather in Paris\"}"
}
```

## React Integration

The items paradigm eliminates manual chunk accumulation. Use a Map keyed by item ID and let React's reconciliation handle updates:

```tsx expandable lines theme={null}
import { useState } from 'react';
import type { StreamableOutputItem } from '@openrouter/agent';
import { OpenRouter } from '@openrouter/agent';

const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

function Chat() {
  const [items, setItems] = useState<Map<string, StreamableOutputItem>>(
    new Map()
  );

  async function handleSubmit(input: string) {
    const result = client.callModel({
      model: '~anthropic/claude-sonnet-latest',
      input,
    });

    for await (const item of result.getItemsStream()) {
      // Replace the entire item by ID - React re-renders automatically
      setItems((prev) => new Map(prev).set(item.id, item));
    }
  }

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(input); }}>
        {/* input field */}
      </form>
      <div>
        {[...items.values()].map((item) => (
          <ItemRenderer key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ItemRenderer({ item }: { item: StreamableOutputItem }) {
  switch (item.type) {
    case 'message':
      return <MessageItem message={item} />;
    case 'function_call':
      return <ToolCallItem call={item} />;
    case 'reasoning':
      return <ReasoningItem reasoning={item} />;
    default:
      return null;
  }
}
```

### Benefits

* **No chunk accumulation** - Each item emission is complete
* **Natural React updates** - Setting state triggers re-render automatically
* **Concurrent item handling** - Function calls and messages stream in parallel
* **Works with React 18+** - Compatible with concurrent features and Suspense
* **Type-safe** - Full TypeScript inference for all item types

## Comparison with Chunk Accumulation

Traditional streaming requires manual accumulation:

```tsx lines theme={null}
// Traditional approach - manual accumulation
const [text, setText] = useState('');

for await (const chunk of result.getTextStream()) {
  setText((prev) => prev + chunk); // Must accumulate manually
}
```

With items, each emission replaces the previous:

```tsx lines theme={null}
// Items approach - replace by ID
for await (const item of result.getItemsStream()) {
  setItems((prev) => new Map(prev).set(item.id, item)); // Complete replacement
}
```

The items approach is especially powerful when the model produces multiple outputs simultaneously (e.g., thinking + tool calls + text).

## Migrating from getNewMessagesStream()

`getNewMessagesStream()` is deprecated in favor of `getItemsStream()`. To migrate:

```typescript lines theme={null}
// Before (deprecated)
for await (const message of result.getNewMessagesStream()) {
  if (message.type === 'message') {
    console.log(message.content);
  }
}

// After
for await (const item of result.getItemsStream()) {
  if (item.type === 'message') {
    console.log(item.content);
  }
}
```

`getItemsStream()` includes all item types (reasoning, function calls, etc.), not just messages, whereas `getNewMessagesStream()` only surfaced messages.

## Next Steps

* **[Streaming](https://openrouter.ai/docs/agent-sdk/call-model/streaming.md)** - All streaming methods including getItemsStream()
* **[Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md)** - Creating typed tools with Zod schemas
