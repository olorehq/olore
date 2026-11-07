> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Web Search

> Real-time web search integration with the Responses API

The Responses API supports web search integration, allowing models to access real-time information from the internet and provide responses with proper citations and annotations.

> [!WARNING]
>
> **Deprecated Plugin Approach**
>
> The web search plugin (`plugins: [{ id: "web" }]`) shown below is deprecated. Use the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search) instead, which works with both the Chat Completions and Responses APIs via the `tools` array.

## Web Search Plugin

Enable web search using the `plugins` parameter:

```typescript title="TypeScript" lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/o3',
    input: 'What is OpenRouter?',
    plugins: [{ id: 'web', max_results: 3 }],
    max_output_tokens: 9000,
  }),
});

const result = await response.json();
console.log(result);
```

```python title="Python" lines theme={null}
import requests

response = requests.post(
    'https://openrouter.ai/api/v1/responses',
    headers={
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'openai/o3',
        'input': 'What is OpenRouter?',
        'plugins': [{'id': 'web', 'max_results': 3}],
        'max_output_tokens': 9000,
    }
)

result = response.json()
print(result)
```

```bash title="cURL" lines theme={null}
curl -X POST https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer YOUR_OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/o3",
    "input": "What is OpenRouter?",
    "plugins": [{"id": "web", "max_results": 3}],
    "max_output_tokens": 9000
  }'
```

## Plugin Configuration

Configure web search behavior:

| Parameter | Type | Description |
| - | - | - |
| `id` | string | **Required.** Must be "web" |
| `engine` | string | Search engine: `"native"`, `"exa"`, `"firecrawl"`, `"parallel"`, or omit for auto |
| `max_results` | integer | Maximum search results to retrieve (1–25; 1–20 for Perplexity; default 5) |
| `include_domains` | string\[] | Restrict results to these domains (supports wildcards like `*.substack.com`) |
| `exclude_domains` | string\[] | Exclude results from these domains |

See the [Web Search plugin docs](https://openrouter.ai/docs/guides/features/plugins/web-search.md) for full details on engine selection, domain filter compatibility, and pricing.

## X Search (SpaceXAI only)

On SpaceXAI models (e.g. `x-ai/grok-4.3`), web search sends only SpaceXAI's `web_search` tool. Add an `x_search` object to the plugin to also search X/Twitter. An empty object enables it with no filters:

```json lines theme={null}
{
  "model": "~x-ai/grok-latest",
  "input": "What are people saying about AI?",
  "plugins": [
    {
      "id": "web",
      "x_search": {
        "allowed_x_handles": ["OpenRouterAI"],
        "from_date": "2025-01-01",
        "enable_image_understanding": true
      }
    }
  ]
}
```

The same object is accepted as `parameters.x_search` on the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search#x-search-spacexai). The legacy top-level `x_search_filter` request field still enables X search for backward compatibility. X search is opt-in because SpaceXAI bills it per item returned starting September 21, 2026 at 12:00 PM PT ($5 per 1,000 posts fetched and $10 per 1,000 user profiles fetched, replacing \$5 per 1,000 tool calls).

| Parameter | Type | Description |
| - | - | - |
| `allowed_x_handles` | string\[] | Only include posts from these handles (max 20) |
| `excluded_x_handles` | string\[] | Exclude posts from these handles (max 20) |
| `from_date` | string | Start date (ISO 8601, e.g. `"2025-01-01"`) |
| `to_date` | string | End date (ISO 8601, e.g. `"2025-12-31"`) |
| `enable_image_understanding` | boolean | Analyze images in posts |
| `enable_video_understanding` | boolean | Analyze videos in posts |

> [!WARNING]
>
> `allowed_x_handles` and `excluded_x_handles` are mutually exclusive. See the [Web Search plugin docs](https://openrouter.ai/docs/guides/features/plugins/web-search.md#x-search-spacexai-only) for full details.

## Structured Message with Web Search

Use structured messages for more complex queries:

```typescript title="TypeScript" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/o3',
    input: [
      {
        type: 'message',
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: 'What was a positive news story from today?',
          },
        ],
      },
    ],
    plugins: [{ id: 'web', max_results: 2 }],
    max_output_tokens: 9000,
  }),
});

const result = await response.json();
console.log(result);
```

```python title="Python" expandable lines theme={null}
import requests

response = requests.post(
    'https://openrouter.ai/api/v1/responses',
    headers={
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'openai/o3',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'What was a positive news story from today?',
                    },
                ],
            },
        ],
        'plugins': [{'id': 'web', 'max_results': 2}],
        'max_output_tokens': 9000,
    }
)

result = response.json()
print(result)
```

## Online Model Variants

> [!WARNING]
>
> **Deprecated**
>
> The `:online` variant is deprecated. Use the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search) instead.

Some models have built-in web search capabilities using the `:online` variant:

```typescript title="TypeScript" lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/o3:online',
    input: 'What was a positive news story from today?',
    max_output_tokens: 9000,
  }),
});

const result = await response.json();
console.log(result);
```

```python title="Python" lines theme={null}
import requests

response = requests.post(
    'https://openrouter.ai/api/v1/responses',
    headers={
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'openai/o3:online',
        'input': 'What was a positive news story from today?',
        'max_output_tokens': 9000,
    }
)

result = response.json()
print(result)
```

## Response with Annotations

Web search responses include citation annotations:

```json expandable lines theme={null}
{
  "id": "resp_1234567890",
  "object": "response",
  "created_at": 1234567890,
  "model": "openai/o3",
  "output": [
    {
      "type": "message",
      "id": "msg_abc123",
      "status": "completed",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "OpenRouter is a unified API for accessing multiple Large Language Model providers through a single interface. It allows developers to access 100+ AI models from providers like OpenAI, Anthropic, Google, and others with intelligent routing and automatic failover.",
          "annotations": [
            {
              "type": "url_citation",
              "url": "https://openrouter.ai/docs",
              "start_index": 0,
              "end_index": 85
            },
            {
              "type": "url_citation",
              "url": "https://openrouter.ai/models",
              "start_index": 120,
              "end_index": 180
            }
          ]
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 15,
    "output_tokens": 95,
    "total_tokens": 110
  },
  "status": "completed"
}
```

## Annotation Types

Web search responses can include different annotation types:

### URL Citation

```json lines theme={null}
{
  "type": "url_citation",
  "url": "https://example.com/article",
  "start_index": 0,
  "end_index": 50,
  "content": "Excerpt from the web page..."
}
```

## Complex Search Queries

Handle multi-part search queries:

```typescript title="TypeScript" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/o3',
    input: [
      {
        type: 'message',
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: 'Compare OpenAI and Anthropic latest models',
          },
        ],
      },
    ],
    plugins: [{ id: 'web', max_results: 5 }],
    max_output_tokens: 9000,
  }),
});

const result = await response.json();
console.log(result);
```

```python title="Python" expandable lines theme={null}
import requests

response = requests.post(
    'https://openrouter.ai/api/v1/responses',
    headers={
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'openai/o3',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'Compare OpenAI and Anthropic latest models',
                    },
                ],
            },
        ],
        'plugins': [{'id': 'web', 'max_results': 5}],
        'max_output_tokens': 9000,
    }
)

result = response.json()
print(result)
```

## Web Search in Conversation

Include web search in multi-turn conversations. Replayed assistant content uses `output_text`, while user content uses `input_text`:

```typescript title="TypeScript" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/o3',
    input: [
      {
        type: 'message',
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: 'What is the latest version of React?',
          },
        ],
      },
      {
        type: 'message',
        id: 'msg_1',
        status: 'in_progress',
        role: 'assistant',
        content: [
          {
            type: 'output_text',
            text: 'Let me search for the latest React version.',
            annotations: [],
          },
        ],
      },
      {
        type: 'message',
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: 'Yes, please find the most recent information',
          },
        ],
      },
    ],
    plugins: [{ id: 'web', max_results: 2 }],
    max_output_tokens: 9000,
  }),
});

const result = await response.json();
console.log(result);
```

```python title="Python" expandable lines theme={null}
import requests

response = requests.post(
    'https://openrouter.ai/api/v1/responses',
    headers={
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'openai/o3',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'What is the latest version of React?',
                    },
                ],
            },
            {
                'type': 'message',
                'id': 'msg_1',
                'status': 'in_progress',
                'role': 'assistant',
                'content': [
                    {
                        'type': 'output_text',
                        'text': 'Let me search for the latest React version.',
                        'annotations': [],
                    },
                ],
            },
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'Yes, please find the most recent information',
                    },
                ],
            },
        ],
        'plugins': [{'id': 'web', 'max_results': 2}],
        'max_output_tokens': 9000,
    }
)

result = response.json()
print(result)
```

## Streaming Web Search

Monitor web search progress with streaming:

```typescript title="TypeScript" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/o3',
    input: [
      {
        type: 'message',
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: 'What is the latest news about AI?',
          },
        ],
      },
    ],
    plugins: [{ id: 'web', max_results: 2 }],
    stream: true,
    max_output_tokens: 9000,
  }),
});

const reader = response.body?.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value);
  const lines = chunk.split('\n');

  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.slice(6);
      if (data === '[DONE]') return;

      try {
        const parsed = JSON.parse(data);
        if (parsed.type === 'response.output_item.added' &&
            parsed.item?.type === 'message') {
          console.log('Message added');
        }
        if (parsed.type === 'response.completed') {
          const annotations = parsed.response?.output
            ?.find(o => o.type === 'message')
            ?.content?.find(c => c.type === 'output_text')
            ?.annotations || [];
          console.log('Citations:', annotations.length);
        }
      } catch (e) {
        // Skip invalid JSON
      }
    }
  }
}
```

```python title="Python" expandable lines theme={null}
import requests
import json

response = requests.post(
    'https://openrouter.ai/api/v1/responses',
    headers={
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'openai/o3',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'What is the latest news about AI?',
                    },
                ],
            },
        ],
        'plugins': [{'id': 'web', 'max_results': 2}],
        'stream': True,
        'max_output_tokens': 9000,
    },
    stream=True
)

for line in response.iter_lines():
    if line:
        line_str = line.decode('utf-8')
        if line_str.startswith('data: '):
            data = line_str[6:]
            if data == '[DONE]':
                break
            try:
                parsed = json.loads(data)
                if (parsed.get('type') == 'response.output_item.added' and
                    parsed.get('item', {}).get('type') == 'message'):
                    print('Message added')
                if parsed.get('type') == 'response.completed':
                    output = parsed.get('response', {}).get('output', [])
                    message = next((o for o in output if o.get('type') == 'message'), {})
                    content = message.get('content', [])
                    text_content = next((c for c in content if c.get('type') == 'output_text'), {})
                    annotations = text_content.get('annotations', [])
                    print(f'Citations: {len(annotations)}')
            except json.JSONDecodeError:
                continue
```

## Annotation Processing

Extract and process citation information:

```typescript title="TypeScript" lines theme={null}
function extractCitations(response: any) {
  const messageOutput = response.output?.find((o: any) => o.type === 'message');
  const textContent = messageOutput?.content?.find((c: any) => c.type === 'output_text');
  const annotations = textContent?.annotations || [];

  return annotations
    .filter((annotation: any) => annotation.type === 'url_citation')
    .map((annotation: any) => ({
      url: annotation.url,
      text: textContent.text.slice(annotation.start_index, annotation.end_index),
      startIndex: annotation.start_index,
      endIndex: annotation.end_index,
    }));
}

const result = await response.json();
const citations = extractCitations(result);
console.log('Found citations:', citations);
```

```python title="Python" expandable lines theme={null}
def extract_citations(response_data):
    output = response_data.get('output', [])
    message_output = next((o for o in output if o.get('type') == 'message'), {})
    content = message_output.get('content', [])
    text_content = next((c for c in content if c.get('type') == 'output_text'), {})
    annotations = text_content.get('annotations', [])
    text = text_content.get('text', '')

    citations = []
    for annotation in annotations:
        if annotation.get('type') == 'url_citation':
            citations.append({
                'url': annotation.get('url'),
                'text': text[annotation.get('start_index', 0):annotation.get('end_index', 0)],
                'start_index': annotation.get('start_index'),
                'end_index': annotation.get('end_index'),
            })

    return citations

result = response.json()
citations = extract_citations(result)
print(f'Found citations: {citations}')
```

## Best Practices

1. **Limit results**: Use appropriate `max_results` to balance quality and speed
2. **Handle annotations**: Process citation annotations for proper attribution
3. **Query specificity**: Make search queries specific for better results
4. **Error handling**: Handle cases where web search might fail
5. **Rate limits**: Be mindful of search rate limits

## Next Steps

* Learn about [Tool Calling](https://openrouter.ai/docs/api_reference/responses/tool-calling.md) integration
* Explore [Reasoning](https://openrouter.ai/docs/api_reference/responses/reasoning.md) capabilities
* Review [Basic Usage](https://openrouter.ai/docs/api_reference/responses/basic-usage.md) fundamentals
