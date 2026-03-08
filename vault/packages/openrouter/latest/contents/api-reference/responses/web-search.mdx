***

title: Web Search
subtitle: Real-time web search integration with the Responses API Beta
headline: Responses API Beta Web Search | Real-time Information Retrieval
canonical-url: '[https://openrouter.ai/docs/api/reference/responses/web-search](https://openrouter.ai/docs/api/reference/responses/web-search)'
'og:site\_name': OpenRouter Documentation
'og:title': Responses API Beta Web Search - Real-time Information Retrieval
'og:description': >-
Enable web search capabilities with real-time information retrieval and
citation annotations using OpenRouter's Responses API Beta.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Responses%20API%20Web%20Search\&description=Real-time%20information%20retrieval](https://openrouter.ai/dynamic-og?title=Responses%20API%20Web%20Search\&description=Real-time%20information%20retrieval)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

<Warning title="Beta API">
  This API is in **beta stage** and may have breaking changes.
</Warning>

The Responses API Beta supports web search integration, allowing models to access real-time information from the internet and provide responses with proper citations and annotations.

## Web Search Plugin

Enable web search using the `plugins` parameter:

<CodeGroup>
  ```typescript title="TypeScript"
  const response = await fetch('https://openrouter.ai/api/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/o4-mini',
      input: 'What is OpenRouter?',
      plugins: [{ id: 'web', max_results: 3 }],
      max_output_tokens: 9000,
    }),
  });

  const result = await response.json();
  console.log(result);
  ```

  ```python title="Python"
  import requests

  response = requests.post(
      'https://openrouter.ai/api/v1/responses',
      headers={
          'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
          'Content-Type': 'application/json',
      },
      json={
          'model': 'openai/o4-mini',
          'input': 'What is OpenRouter?',
          'plugins': [{'id': 'web', 'max_results': 3}],
          'max_output_tokens': 9000,
      }
  )

  result = response.json()
  print(result)
  ```

  ```bash title="cURL"
  curl -X POST https://openrouter.ai/api/v1/responses \
    -H "Authorization: Bearer YOUR_OPENROUTER_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "openai/o4-mini",
      "input": "What is OpenRouter?",
      "plugins": [{"id": "web", "max_results": 3}],
      "max_output_tokens": 9000
    }'
  ```
</CodeGroup>

## Plugin Configuration

Configure web search behavior:

| Parameter     | Type    | Description                               |
| ------------- | ------- | ----------------------------------------- |
| `id`          | string  | **Required.** Must be "web"               |
| `max_results` | integer | Maximum search results to retrieve (1-10) |

## Structured Message with Web Search

Use structured messages for more complex queries:

<CodeGroup>
  ```typescript title="TypeScript"
  const response = await fetch('https://openrouter.ai/api/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/o4-mini',
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

  ```python title="Python"
  import requests

  response = requests.post(
      'https://openrouter.ai/api/v1/responses',
      headers={
          'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
          'Content-Type': 'application/json',
      },
      json={
          'model': 'openai/o4-mini',
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
</CodeGroup>

## Online Model Variants

Some models have built-in web search capabilities using the `:online` variant:

<CodeGroup>
  ```typescript title="TypeScript"
  const response = await fetch('https://openrouter.ai/api/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/o4-mini:online',
      input: 'What was a positive news story from today?',
      max_output_tokens: 9000,
    }),
  });

  const result = await response.json();
  console.log(result);
  ```

  ```python title="Python"
  import requests

  response = requests.post(
      'https://openrouter.ai/api/v1/responses',
      headers={
          'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
          'Content-Type': 'application/json',
      },
      json={
          'model': 'openai/o4-mini:online',
          'input': 'What was a positive news story from today?',
          'max_output_tokens': 9000,
      }
  )

  result = response.json()
  print(result)
  ```
</CodeGroup>

## Response with Annotations

Web search responses include citation annotations:

```json
{
  "id": "resp_1234567890",
  "object": "response",
  "created_at": 1234567890,
  "model": "openai/o4-mini",
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

```json
{
  "type": "url_citation",
  "url": "https://example.com/article",
  "start_index": 0,
  "end_index": 50
}
```

## Complex Search Queries

Handle multi-part search queries:

<CodeGroup>
  ```typescript title="TypeScript"
  const response = await fetch('https://openrouter.ai/api/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/o4-mini',
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

  ```python title="Python"
  import requests

  response = requests.post(
      'https://openrouter.ai/api/v1/responses',
      headers={
          'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
          'Content-Type': 'application/json',
      },
      json={
          'model': 'openai/o4-mini',
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
</CodeGroup>

## Web Search in Conversation

Include web search in multi-turn conversations:

<CodeGroup>
  ```typescript title="TypeScript"
  const response = await fetch('https://openrouter.ai/api/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/o4-mini',
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

  ```python title="Python"
  import requests

  response = requests.post(
      'https://openrouter.ai/api/v1/responses',
      headers={
          'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
          'Content-Type': 'application/json',
      },
      json={
          'model': 'openai/o4-mini',
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
</CodeGroup>

## Streaming Web Search

Monitor web search progress with streaming:

<CodeGroup>
  ```typescript title="TypeScript"
  const response = await fetch('https://openrouter.ai/api/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/o4-mini',
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

  ```python title="Python"
  import requests
  import json

  response = requests.post(
      'https://openrouter.ai/api/v1/responses',
      headers={
          'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
          'Content-Type': 'application/json',
      },
      json={
          'model': 'openai/o4-mini',
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
</CodeGroup>

## Annotation Processing

Extract and process citation information:

<CodeGroup>
  ```typescript title="TypeScript"
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

  ```python title="Python"
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
</CodeGroup>

## Best Practices

1. **Limit results**: Use appropriate `max_results` to balance quality and speed
2. **Handle annotations**: Process citation annotations for proper attribution
3. **Query specificity**: Make search queries specific for better results
4. **Error handling**: Handle cases where web search might fail
5. **Rate limits**: Be mindful of search rate limits

## Next Steps

* Learn about [Tool Calling](./tool-calling) integration
* Explore [Reasoning](./reasoning) capabilities
* Review [Basic Usage](./basic-usage) fundamentals
