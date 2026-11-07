> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Tool Calling

> Function calling and tool integration with the Responses API

The Responses API supports comprehensive tool calling capabilities, allowing models to call functions, execute tools in parallel, and handle complex multi-step workflows.

## Basic Tool Definition

Define tools using the OpenAI function calling format:

```typescript title="TypeScript" expandable lines theme={null}
const weatherTool = {
  type: 'function' as const,
  name: 'get_weather',
  description: 'Get the current weather in a location',
  strict: null,
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'The city and state, e.g. San Francisco, CA',
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
      },
    },
    required: ['location'],
  },
};

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
            text: 'What is the weather in San Francisco?',
          },
        ],
      },
    ],
    tools: [weatherTool],
    tool_choice: 'auto',
    max_output_tokens: 9000,
  }),
});

const result = await response.json();
console.log(result);
```

```python title="Python" expandable lines theme={null}
import requests

weather_tool = {
    'type': 'function',
    'name': 'get_weather',
    'description': 'Get the current weather in a location',
    'strict': None,
    'parameters': {
        'type': 'object',
        'properties': {
            'location': {
                'type': 'string',
                'description': 'The city and state, e.g. San Francisco, CA',
            },
            'unit': {
                'type': 'string',
                'enum': ['celsius', 'fahrenheit'],
            },
        },
        'required': ['location'],
    },
}

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
                        'text': 'What is the weather in San Francisco?',
                    },
                ],
            },
        ],
        'tools': [weather_tool],
        'tool_choice': 'auto',
        'max_output_tokens': 9000,
    }
)

result = response.json()
print(result)
```

```bash title="cURL" expandable lines theme={null}
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
            "text": "What is the weather in San Francisco?"
          }
        ]
      }
    ],
    "tools": [
      {
        "type": "function",
        "name": "get_weather",
        "description": "Get the current weather in a location",
        "strict": null,
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The city and state, e.g. San Francisco, CA"
            },
            "unit": {
              "type": "string",
              "enum": ["celsius", "fahrenheit"]
            }
          },
          "required": ["location"]
        }
      }
    ],
    "tool_choice": "auto",
    "max_output_tokens": 9000
  }'
```

## Tool Choice Options

Control when and how tools are called:

| Tool Choice | Description |
| - | - |
| `auto` | Model decides whether to call tools |
| `none` | Model will not call any tools |
| `{type: 'function', name: 'tool_name'}` | Force specific tool call |

### Force Specific Tool

```typescript title="TypeScript" expandable lines theme={null}
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
            text: 'Hello, how are you?',
          },
        ],
      },
    ],
    tools: [weatherTool],
    tool_choice: { type: 'function', name: 'get_weather' },
    max_output_tokens: 9000,
  }),
});
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
        'model': 'openai/o4-mini',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'Hello, how are you?',
                    },
                ],
            },
        ],
        'tools': [weather_tool],
        'tool_choice': {'type': 'function', 'name': 'get_weather'},
        'max_output_tokens': 9000,
    }
)
```

### Disable Tool Calling

```typescript title="TypeScript" expandable lines theme={null}
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
            text: 'What is the weather in Paris?',
          },
        ],
      },
    ],
    tools: [weatherTool],
    tool_choice: 'none',
    max_output_tokens: 9000,
  }),
});
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
        'model': 'openai/o4-mini',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'What is the weather in Paris?',
                    },
                ],
            },
        ],
        'tools': [weather_tool],
        'tool_choice': 'none',
        'max_output_tokens': 9000,
    }
)
```

## Multiple Tools

Define multiple tools for complex workflows:

```typescript title="TypeScript" expandable lines theme={null}
const calculatorTool = {
  type: 'function' as const,
  name: 'calculate',
  description: 'Perform mathematical calculations',
  strict: null,
  parameters: {
    type: 'object',
    properties: {
      expression: {
        type: 'string',
        description: 'The mathematical expression to evaluate',
      },
    },
    required: ['expression'],
  },
};

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
            text: 'What is 25 * 4?',
          },
        ],
      },
    ],
    tools: [weatherTool, calculatorTool],
    tool_choice: 'auto',
    max_output_tokens: 9000,
  }),
});
```

```python title="Python" expandable lines theme={null}
calculator_tool = {
    'type': 'function',
    'name': 'calculate',
    'description': 'Perform mathematical calculations',
    'strict': None,
    'parameters': {
        'type': 'object',
        'properties': {
            'expression': {
                'type': 'string',
                'description': 'The mathematical expression to evaluate',
            },
        },
        'required': ['expression'],
    },
}

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
                        'text': 'What is 25 * 4?',
                    },
                ],
            },
        ],
        'tools': [weather_tool, calculator_tool],
        'tool_choice': 'auto',
        'max_output_tokens': 9000,
    }
)
```

## Parallel Tool Calls

The API supports parallel execution of multiple tools:

```typescript title="TypeScript" expandable lines theme={null}
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
            text: 'Calculate 10*5 and also tell me the weather in Miami',
          },
        ],
      },
    ],
    tools: [weatherTool, calculatorTool],
    tool_choice: 'auto',
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
        'model': 'openai/o4-mini',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'Calculate 10*5 and also tell me the weather in Miami',
                    },
                ],
            },
        ],
        'tools': [weather_tool, calculator_tool],
        'tool_choice': 'auto',
        'max_output_tokens': 9000,
    }
)

result = response.json()
print(result)
```

## Tool Call Response

When tools are called, the response includes function call information:

```json expandable lines theme={null}
{
  "id": "resp_1234567890",
  "object": "response",
  "created_at": 1234567890,
  "model": "openai/o4-mini",
  "output": [
    {
      "type": "function_call",
      "id": "fc_abc123",
      "call_id": "call_xyz789",
      "name": "get_weather",
      "arguments": "{\"location\":\"San Francisco, CA\"}"
    }
  ],
  "usage": {
    "input_tokens": 45,
    "output_tokens": 25,
    "total_tokens": 70
  },
  "status": "completed"
}
```

## Tool Responses in Conversation

Include tool responses in follow-up requests:

```typescript title="TypeScript" expandable lines theme={null}
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
            text: 'What is the weather in Boston?',
          },
        ],
      },
      {
        type: 'function_call',
        id: 'fc_1',
        call_id: 'call_123',
        name: 'get_weather',
        arguments: JSON.stringify({ location: 'Boston, MA' }),
      },
      {
        type: 'function_call_output',
        id: 'fc_output_1',
        call_id: 'call_123',
        output: JSON.stringify({ temperature: '72°F', condition: 'Sunny' }),
      },
      {
        type: 'message',
        role: 'assistant',
        id: 'msg_abc123',
        status: 'completed',
        content: [
          {
            type: 'output_text',
            text: 'The weather in Boston is currently 72°F and sunny. This looks like perfect weather for a picnic!',
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
            text: 'Is that good weather for a picnic?',
          },
        ],
      },
    ],
    max_output_tokens: 9000,
  }),
});
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
        'model': 'openai/o4-mini',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'What is the weather in Boston?',
                    },
                ],
            },
            {
                'type': 'function_call',
                'id': 'fc_1',
                'call_id': 'call_123',
                'name': 'get_weather',
                'arguments': '{"location": "Boston, MA"}',
            },
            {
                'type': 'function_call_output',
                'id': 'fc_output_1',
                'call_id': 'call_123',
                'output': '{"temperature": "72°F", "condition": "Sunny"}',
            },
            {
                'type': 'message',
                'role': 'assistant',
                'id': 'msg_abc123',
                'status': 'completed',
                'content': [
                    {
                        'type': 'output_text',
                        'text': 'The weather in Boston is currently 72°F and sunny. This looks like perfect weather for a picnic!',
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
                        'text': 'Is that good weather for a picnic?',
                    },
                ],
            },
        ],
        'max_output_tokens': 9000,
    }
)
```

> [!NOTE]
>
> **Optional Field**
>
> The `id` field is optional for `function_call_output` objects. Only `type`, `call_id`, and `output` are required — `call_id` is what pairs the output with its originating `function_call`. The examples above include `id` for completeness, but you can safely omit it.

### Multimodal tool outputs

`function_call_output.output` accepts either a string or an array of input content parts (`input_text`, `input_image`, `input_file`) — the same shape as user-message content. Use the array form to return images or files from a tool; the non-text parts are only forwarded to supported multimodal models.

```json lines theme={null}
{
  "type": "function_call_output",
  "call_id": "call_123",
  "output": [
    {
      "type": "input_text",
      "text": "{\"results\":[{\"title\":\"Golden Gate Bridge\"}]}"
    },
    {
      "type": "input_image",
      "image_url": "https://example.com/image.jpg"
    }
  ]
}
```

## Streaming Tool Calls

Monitor tool calls in real-time with streaming:

```typescript title="TypeScript" expandable lines theme={null}
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
            text: 'What is the weather like in Tokyo, Japan? Please check the weather.',
          },
        ],
      },
    ],
    tools: [weatherTool],
    tool_choice: 'auto',
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
            parsed.item?.type === 'function_call') {
          console.log('Function call:', parsed.item.name);
        }
        if (parsed.type === 'response.function_call_arguments.done') {
          console.log('Arguments:', parsed.arguments);
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
        'model': 'openai/o4-mini',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': 'What is the weather like in Tokyo, Japan? Please check the weather.',
                    },
                ],
            },
        ],
        'tools': [weather_tool],
        'tool_choice': 'auto',
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
                    parsed.get('item', {}).get('type') == 'function_call'):
                    print(f"Function call: {parsed['item']['name']}")
                if parsed.get('type') == 'response.function_call_arguments.done':
                    print(f"Arguments: {parsed.get('arguments', '')}")
            except json.JSONDecodeError:
                continue
```

## Tool Validation

Ensure tool calls have proper structure:

```json lines theme={null}
{
  "type": "function_call",
  "id": "fc_abc123",
  "call_id": "call_xyz789",
  "name": "get_weather",
  "arguments": "{\"location\":\"Seattle, WA\"}"
}
```

Required fields:

* `type`: Always "function\_call"
* `id`: Unique identifier for the function call object
* `name`: Function name matching tool definition
* `arguments`: Valid JSON string with function parameters
* `call_id`: Unique identifier for the call

## Best Practices

1. **Clear descriptions**: Provide detailed function descriptions and parameter explanations
2. **Proper schemas**: Use valid JSON Schema for parameters
3. **Error handling**: Handle cases where tools might not be called
4. **Parallel execution**: Design tools to work independently when possible
5. **Conversation flow**: Include tool responses in follow-up requests for context

## Next Steps

* Learn about [Web Search](https://openrouter.ai/docs/api_reference/responses/web-search.md) integration
* Explore [Reasoning](https://openrouter.ai/docs/api_reference/responses/reasoning.md) with tools
* Review [Basic Usage](https://openrouter.ai/docs/api_reference/responses/basic-usage.md) fundamentals
