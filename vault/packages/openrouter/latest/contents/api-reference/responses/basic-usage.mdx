***

title: Basic Usage
subtitle: Getting started with the Responses API Beta
headline: Responses API Beta Basic Usage | Simple Text Requests
canonical-url: '[https://openrouter.ai/docs/api/reference/responses/basic-usage](https://openrouter.ai/docs/api/reference/responses/basic-usage)'
'og:site\_name': OpenRouter Documentation
'og:title': Responses API Beta Basic Usage - Simple Text Requests
'og:description': >-
Learn the basics of OpenRouter's Responses API Beta with simple text input
examples and response handling.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Responses%20API%20Basic%20Usage\&description=Simple%20text%20requests%20and%20responses](https://openrouter.ai/dynamic-og?title=Responses%20API%20Basic%20Usage\&description=Simple%20text%20requests%20and%20responses)
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

The Responses API Beta supports both simple string input and structured message arrays, making it easy to get started with basic text generation.

## Simple String Input

The simplest way to use the API is with a string input:

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
      input: 'What is the meaning of life?',
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
          'input': 'What is the meaning of life?',
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
      "input": "What is the meaning of life?",
      "max_output_tokens": 9000
    }'
  ```
</CodeGroup>

## Structured Message Input

For more complex conversations, use the message array format:

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
              text: 'Tell me a joke about programming',
            },
          ],
        },
      ],
      max_output_tokens: 9000,
    }),
  });

  const result = await response.json();
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
                          'text': 'Tell me a joke about programming',
                      },
                  ],
              },
          ],
          'max_output_tokens': 9000,
      }
  )

  result = response.json()
  ```

  ```bash title="cURL"
  curl -X POST https://openrouter.ai/api/v1/responses \
    -H "Authorization: Bearer YOUR_OPENROUTER_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "openai/o4-mini",
      "input": [
        {
          "type": "message",
          "role": "user",
          "content": [
            {
              "type": "input_text",
              "text": "Tell me a joke about programming"
            }
          ]
        }
      ],
      "max_output_tokens": 9000
    }'
  ```
</CodeGroup>

## Response Format

The API returns a structured response with the generated content:

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
          "text": "The meaning of life is a philosophical question that has been pondered for centuries...",
          "annotations": []
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 12,
    "output_tokens": 45,
    "total_tokens": 57
  },
  "status": "completed"
}
```

## Streaming Responses

Enable streaming for real-time response generation:

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
      input: 'Write a short story about AI',
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
          console.log(parsed);
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
          'input': 'Write a short story about AI',
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
                  print(parsed)
              except json.JSONDecodeError:
                  continue
  ```
</CodeGroup>

### Example Streaming Output

The streaming response returns Server-Sent Events (SSE) chunks:

```
data: {"type":"response.created","response":{"id":"resp_1234567890","object":"response","status":"in_progress"}}

data: {"type":"response.output_item.added","response_id":"resp_1234567890","output_index":0,"item":{"type":"message","id":"msg_abc123","role":"assistant","status":"in_progress","content":[]}}

data: {"type":"response.content_part.added","response_id":"resp_1234567890","output_index":0,"content_index":0,"part":{"type":"output_text","text":""}}

data: {"type":"response.content_part.delta","response_id":"resp_1234567890","output_index":0,"content_index":0,"delta":"Once"}

data: {"type":"response.content_part.delta","response_id":"resp_1234567890","output_index":0,"content_index":0,"delta":" upon"}

data: {"type":"response.content_part.delta","response_id":"resp_1234567890","output_index":0,"content_index":0,"delta":" a"}

data: {"type":"response.content_part.delta","response_id":"resp_1234567890","output_index":0,"content_index":0,"delta":" time"}

data: {"type":"response.output_item.done","response_id":"resp_1234567890","output_index":0,"item":{"type":"message","id":"msg_abc123","role":"assistant","status":"completed","content":[{"type":"output_text","text":"Once upon a time, in a world where artificial intelligence had become as common as smartphones..."}]}}

data: {"type":"response.done","response":{"id":"resp_1234567890","object":"response","status":"completed","usage":{"input_tokens":12,"output_tokens":45,"total_tokens":57}}}

data: [DONE]
```

## Common Parameters

| Parameter           | Type            | Description                                         |
| ------------------- | --------------- | --------------------------------------------------- |
| `model`             | string          | **Required.** Model to use (e.g., `openai/o4-mini`) |
| `input`             | string or array | **Required.** Text or message array                 |
| `stream`            | boolean         | Enable streaming responses (default: false)         |
| `max_output_tokens` | integer         | Maximum tokens to generate                          |
| `temperature`       | number          | Sampling temperature (0-2)                          |
| `top_p`             | number          | Nucleus sampling parameter (0-1)                    |

## Error Handling

Handle common errors gracefully:

<CodeGroup>
  ```typescript title="TypeScript"
  try {
    const response = await fetch('https://openrouter.ai/api/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/o4-mini',
        input: 'Hello, world!',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('API Error:', error.error.message);
      return;
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Network Error:', error);
  }
  ```

  ```python title="Python"
  import requests

  try:
      response = requests.post(
          'https://openrouter.ai/api/v1/responses',
          headers={
              'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
              'Content-Type': 'application/json',
          },
          json={
              'model': 'openai/o4-mini',
              'input': 'Hello, world!',
          }
      )

      if response.status_code != 200:
          error = response.json()
          print(f"API Error: {error['error']['message']}")
      else:
          result = response.json()
          print(result)

  except requests.RequestException as e:
      print(f"Network Error: {e}")
  ```
</CodeGroup>

## Multiple Turn Conversations

Since the Responses API Beta is stateless, you must include the full conversation history in each request to maintain context:

<CodeGroup>
  ```typescript title="TypeScript"
  // First request
  const firstResponse = await fetch('https://openrouter.ai/api/beta/responses', {
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
              text: 'What is the capital of France?',
            },
          ],
        },
      ],
      max_output_tokens: 9000,
    }),
  });

  const firstResult = await firstResponse.json();

  // Second request - include previous conversation
  const secondResponse = await fetch('https://openrouter.ai/api/beta/responses', {
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
              text: 'What is the capital of France?',
            },
          ],
        },
        {
          type: 'message',
          role: 'assistant',
          id: 'msg_abc123',
          status: 'completed',
          content: [
            {
              type: 'output_text',
              text: 'The capital of France is Paris.',
              annotations: []
            }
          ]
        },
        {
          type: 'message',
          role: 'user',
          content: [
            {
              type: 'input_text',
              text: 'What is the population of that city?',
            },
          ],
        },
      ],
      max_output_tokens: 9000,
    }),
  });

  const secondResult = await secondResponse.json();
  ```

  ```python title="Python"
  import requests

  # First request
  first_response = requests.post(
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
                          'text': 'What is the capital of France?',
                      },
                  ],
              },
          ],
          'max_output_tokens': 9000,
      }
  )

  first_result = first_response.json()

  # Second request - include previous conversation
  second_response = requests.post(
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
                          'text': 'What is the capital of France?',
                      },
                  ],
              },
              {
                  'type': 'message',
                  'role': 'assistant',
                  'id': 'msg_abc123',
                  'status': 'completed',
                  'content': [
                      {
                          'type': 'output_text',
                          'text': 'The capital of France is Paris.',
                          'annotations': []
                      }
                  ]
              },
              {
                  'type': 'message',
                  'role': 'user',
                  'content': [
                      {
                          'type': 'input_text',
                          'text': 'What is the population of that city?',
                      },
                  ],
              },
          ],
          'max_output_tokens': 9000,
      }
  )

  second_result = second_response.json()
  ```
</CodeGroup>

<Info title="Required Fields">
  The `id` and `status` fields are required for any `assistant` role messages included in the conversation history.
</Info>

<Info title="Conversation History">
  Always include the complete conversation history in each request. The API does not store previous messages, so context must be maintained client-side.
</Info>

## Next Steps

* Learn about [Reasoning](./reasoning) capabilities
* Explore [Tool Calling](./tool-calling) functionality
* Try [Web Search](./web-search) integration
