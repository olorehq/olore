> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Client Tools

> Use client tools in your prompts

Tool calls (also known as function calls) give an LLM access to external tools. The LLM does not call the tools directly. Instead, it suggests the tool to call. The user then calls the tool separately and provides the results back to the LLM. Finally, the LLM formats the response into an answer to the user's original question.

OpenRouter standardizes the tool calling interface across models and providers, making it easy to integrate external tools with any supported model.

**Supported Models**: You can find models that support tool calling by filtering on [openrouter.ai/models?supported\_parameters=tools](https://openrouter.ai/models?supported_parameters=tools).

If you prefer to learn from a full end-to-end example, keep reading.

## Request Body Examples

Tool calling with OpenRouter involves three key steps. Here are the essential request body formats for each step, first for the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) (`POST /api/v1/responses`) and then for Chat Completions (`POST /api/v1/chat/completions`).

### Responses API

#### Step 1: Inference Request with Tools

```json expandable lines theme={null}
{
  "model": "google/gemini-3-flash-preview",
  "input": [
    {
      "role": "user",
      "content": "What are the titles of some James Joyce books?"
    }
  ],
  "tools": [
    {
      "type": "function",
      "name": "search_gutenberg_books",
      "description": "Search for books in the Project Gutenberg library",
      "parameters": {
        "type": "object",
        "properties": {
          "search_terms": {
            "type": "array",
            "items": {"type": "string"},
            "description": "List of search terms to find books"
          }
        },
        "required": ["search_terms"],
        "additionalProperties": false
      }
    }
  ]
}
```

#### Step 2: Tool Execution (Client-Side)

After receiving a response whose `output` contains a `function_call` item, execute the requested tool locally and prepare the result:

```javascript lines theme={null}
// Model responds with a function_call output item, you execute the tool locally
const toolResult = await searchGutenbergBooks(["James", "Joyce"]);
```

#### Step 3: Inference Request with Tool Results

```json expandable lines theme={null}
{
  "model": "google/gemini-3-flash-preview",
  "input": [
    {
      "role": "user",
      "content": "What are the titles of some James Joyce books?"
    },
    {
      "type": "function_call",
      "call_id": "call_abc123",
      "name": "search_gutenberg_books",
      "arguments": "{\"search_terms\": [\"James\", \"Joyce\"]}"
    },
    {
      "type": "function_call_output",
      "call_id": "call_abc123",
      "output": "[{\"id\": 4300, \"title\": \"Ulysses\", \"authors\": [{\"name\": \"Joyce, James\"}]}]"
    }
  ],
  "tools": [
    {
      "type": "function",
      "name": "search_gutenberg_books",
      "description": "Search for books in the Project Gutenberg library",
      "parameters": {
        "type": "object",
        "properties": {
          "search_terms": {
            "type": "array",
            "items": {"type": "string"},
            "description": "List of search terms to find books"
          }
        },
        "required": ["search_terms"],
        "additionalProperties": false
      }
    }
  ]
}
```

### Chat Completions API

On Chat Completions, function tools are nested under `function`, the model returns `tool_calls` on an assistant message, and tool results go back as `role: "tool"` messages.

#### Step 1: Inference Request with Tools

```json expandable lines theme={null}
{
  "model": "google/gemini-3-flash-preview",
  "messages": [
    {
      "role": "user",
      "content": "What are the titles of some James Joyce books?"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "search_gutenberg_books",
        "description": "Search for books in the Project Gutenberg library",
        "parameters": {
          "type": "object",
          "properties": {
            "search_terms": {
              "type": "array",
              "items": {"type": "string"},
              "description": "List of search terms to find books"
            }
          },
          "required": ["search_terms"]
        }
      }
    }
  ]
}
```

#### Step 2: Tool Execution (Client-Side)

After receiving the model's response with `tool_calls`, execute the requested tool locally and prepare the result:

```javascript lines theme={null}
// Model responds with tool_calls, you execute the tool locally
const toolResult = await searchGutenbergBooks(["James", "Joyce"]);
```

#### Step 3: Inference Request with Tool Results

```json expandable lines theme={null}
{
  "model": "google/gemini-3-flash-preview",
  "messages": [
    {
      "role": "user",
      "content": "What are the titles of some James Joyce books?"
    },
    {
      "role": "assistant",
      "content": null,
      "tool_calls": [
        {
          "id": "call_abc123",
          "type": "function",
          "function": {
            "name": "search_gutenberg_books",
            "arguments": "{\"search_terms\": [\"James\", \"Joyce\"]}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "tool_call_id": "call_abc123",
      "content": "[{\"id\": 4300, \"title\": \"Ulysses\", \"authors\": [{\"name\": \"Joyce, James\"}]}]"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "search_gutenberg_books",
        "description": "Search for books in the Project Gutenberg library",
        "parameters": {
          "type": "object",
          "properties": {
            "search_terms": {
              "type": "array",
              "items": {"type": "string"},
              "description": "List of search terms to find books"
            }
          },
          "required": ["search_terms"]
        }
      }
    }
  ]
}
```

**Note**: On both APIs, the `tools` parameter must be included in every request (Steps 1 and 3) so the router can validate the tool schema on each call.

### Tool Calling Example

Here is an end-to-end example that gives LLMs the ability to call an external API -- in this case Project Gutenberg, to search for books.

First, let's do some basic setup:

### Define the Tool

Next, we define the tool that we want to call. Remember, the tool is going to get *requested* by the LLM, but the code we are writing here is ultimately responsible for executing the call and returning the results to the LLM.

Note that the "tool" is just a normal function. We then write a JSON "spec" compatible with the OpenAI function calling parameter. We'll pass that spec to the LLM so that it knows this tool is available and how to use it. It will request the tool when needed, along with any arguments. We'll then marshal the tool call locally, make the function call, and return the results to the LLM.

### Tool use and tool results

Let's make the first OpenRouter API call to the model:

`response.output` contains `function_call` items with a `call_id`, `name`, and JSON-encoded `arguments`. Production code should verify that at least one exists; this example assumes one does:

The input array now has:

1. Our original request
2. The LLM's reasoning items, when present, and `function_call` items
3. A `function_call_output` item with the tool result

Now, we can make a second OpenRouter API call, and hopefully get our result!

The output will be something like:

```text lines theme={null}
Here are some books by James Joyce:

*   *Ulysses*
*   *Dubliners*
*   *A Portrait of the Artist as a Young Man*
*   *Chamber Music*
*   *Exiles: A Play in Three Acts*
```

We did it! We've successfully used a tool in a prompt.

## Interleaved Thinking

Interleaved thinking allows models to reason between tool calls, enabling more sophisticated decision-making after receiving tool results. This feature helps models chain multiple tool calls with reasoning steps in between and make nuanced decisions based on intermediate results.

**Important**: Interleaved thinking increases token usage and response latency. Consider your budget and performance requirements when enabling this feature.

### How Interleaved Thinking Works

With interleaved thinking, the model can:

* Reason about the results of a tool call before deciding what to do next
* Chain multiple tool calls with reasoning steps in between
* Make more nuanced decisions based on intermediate results
* Provide transparent reasoning for its tool selection process

### Example: Multi-Step Research with Reasoning

Here's an example showing how a model might use interleaved thinking to research a topic across multiple sources:

**Initial Request:**

```json expandable lines theme={null}
{
  "model": "anthropic/claude-sonnet-4.5",
  "input": [
    {
      "role": "user",
      "content": "Research the environmental impact of electric vehicles and provide a comprehensive analysis."
    }
  ],
  "tools": [
    {
      "type": "function",
      "name": "search_academic_papers",
      "description": "Search for academic papers on a given topic",
      "parameters": {
        "type": "object",
        "properties": {
          "query": {"type": "string"},
          "field": {"type": "string"}
        },
        "required": ["query"]
      }
    },
    {
      "type": "function",
      "name": "get_latest_statistics",
      "description": "Get latest statistics on a topic",
      "parameters": {
        "type": "object",
        "properties": {
          "topic": {"type": "string"},
          "year": {"type": "integer"}
        },
        "required": ["topic"]
      }
    }
  ]
}
```

**Model's Reasoning and Tool Calls:**

1. **Initial Thinking**: "I need to research electric vehicle environmental impact. Let me start with academic papers to get peer-reviewed research."

2. **First Tool Call**: `search_academic_papers({"query": "electric vehicle lifecycle environmental impact", "field": "environmental science"})`

3. **After First Tool Result**: "The papers show mixed results on manufacturing impact. I need current statistics to complement this academic research."

4. **Second Tool Call**: `get_latest_statistics({"topic": "electric vehicle carbon footprint", "year": 2024})`

5. **After Second Tool Result**: "Now I have both academic research and current data. Let me search for manufacturing-specific studies to address the gaps I found."

6. **Third Tool Call**: `search_academic_papers({"query": "electric vehicle battery manufacturing environmental cost", "field": "materials science"})`

7. **Final Analysis**: Synthesizes all gathered information into a comprehensive response.

### Best Practices for Interleaved Thinking

* **Clear Tool Descriptions**: Provide detailed descriptions so the model can reason about when to use each tool
* **Structured Parameters**: Use well-defined parameter schemas to help the model make precise tool calls
* **Context Preservation**: Maintain conversation context across multiple tool interactions
* **Error Handling**: Design tools to provide meaningful error messages that help the model adjust its approach

### Implementation Considerations

When implementing interleaved thinking:

* Models may take longer to respond due to additional reasoning steps
* Token usage will be higher due to the reasoning process
* The quality of reasoning depends on the model's capabilities
* Some models may be better suited for this approach than others

## A Simple Agentic Loop

In the example above, the calls are made explicitly and sequentially. To handle a wide variety of user inputs and tool calls, you can use an agentic loop.

Here's an example of a simple agentic loop (using the same `tools`, `instructions`, and initial `input` as above):

## Best Practices and Advanced Patterns

### Function Definition Guidelines

When defining tools for LLMs, follow these best practices:

**Clear and Descriptive Names**: Use descriptive function names that clearly indicate the tool's purpose.

```json lines theme={null}
// Good: Clear and specific
{ "name": "get_weather_forecast" }
```

```json lines theme={null}
// Avoid: Too vague
{ "name": "weather" }
```

**Comprehensive Descriptions**: Provide detailed descriptions that help the model understand when and how to use the tool.

```json lines theme={null}
{
  "description": "Get current weather conditions and 5-day forecast for a specific location. Supports cities, zip codes, and coordinates.",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City name, zip code, or coordinates (lat,lng). Examples: 'New York', '10001', '40.7128,-74.0060'"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Temperature unit preference",
        "default": "celsius"
      }
    },
    "required": ["location"]
  }
}
```

### Streaming with Tool Calls

When using streaming responses with tool calls, handle the different content types appropriately:

```typescript expandable lines theme={null}
const stream = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'anthropic/claude-sonnet-4.5',
    input: input,
    tools: tools,
    stream: true
  })
});

if (!stream.body) {
  throw new Error('Expected a streaming response body');
}

const reader = stream.body.getReader();
const decoder = new TextDecoder();
let buffer = '';
const toolCalls = [];
const outputItems = [];

while (true) {
  const { done, value } = await reader.read();
  if (done) {
    break;
  }

  buffer += decoder.decode(value, { stream: true });
  const lines = buffer.split('\n');
  buffer = lines.pop() ?? '';

  for (const line of lines) {
    if (!line.startsWith('data: ')) continue;
    const data = line.slice(6).trim();
    if (data === '[DONE]') continue;

    const event = JSON.parse(data);

    if (event.type === 'response.failed') {
      throw new Error(event.response.error?.message ?? 'Response failed');
    }
    if (event.type === 'response.incomplete') {
      throw new Error(
        `Response incomplete: ${event.response.incomplete_details?.reason ?? 'unknown reason'}`,
      );
    }
    if (event.type === 'response.output_text.delta') {
      console.log(event.delta);
    }

    if (event.type === 'response.output_item.done') {
      // Preserve every completed item in order. Reasoning and assistant items are
      // required context for some providers when sending tool results.
      outputItems.push(event.item);
      if (event.item.type === 'function_call') {
        // A completed function_call item carries the full arguments string.
        toolCalls.push(event.item);
      }
    }

    if (event.type === 'response.completed') {
      if (toolCalls.length > 0) {
        // Run each function_call locally, then send a follow-up request whose input
        // includes the original input, every output item, and a function_call_output
        // for each call (see the non-streaming loop above).
        await handleToolCalls(toolCalls, outputItems);
      }
      // Otherwise the regular response was printed from its output_text deltas above
    }
  }
}
```

### Tool Choice Configuration

Control tool usage with the `tool_choice` parameter:

```json lines theme={null}
// Let model decide (default)
{ "tool_choice": "auto" }
```

```json lines theme={null}
// Disable tool usage
{ "tool_choice": "none" }
```

```json lines theme={null}
// Force specific tool (Responses API)
{
  "tool_choice": {
    "type": "function",
    "name": "search_database"
  }
}
```

```json lines theme={null}
// Force specific tool (Chat Completions: the name is nested under `function`)
{
  "tool_choice": {
    "type": "function",
    "function": { "name": "search_database" }
  }
}
```

### Parallel Tool Calls

Control whether multiple tools can be called simultaneously with the `parallel_tool_calls` parameter (default is true for most models):

```json lines theme={null}
// Disable parallel tool calls - tools will be called sequentially
{ "parallel_tool_calls": false }
```

When `parallel_tool_calls` is `false`, the model will only request one tool call at a time instead of potentially multiple calls in parallel.

### Multi-Tool Workflows

Design tools that work well together:

```json expandable lines theme={null}
{
  "tools": [
    {
      "type": "function",
      "name": "search_products",
      "description": "Search for products in the catalog",
      "parameters": {
        "type": "object",
        "properties": {
          "query": { "type": "string", "description": "Product name or search terms" }
        },
        "required": ["query"],
        "additionalProperties": false
      }
    },
    {
      "type": "function",
      "name": "get_product_details",
      "description": "Get detailed information about a specific product",
      "parameters": {
        "type": "object",
        "properties": {
          "product_id": { "type": "string", "description": "Catalog product identifier" }
        },
        "required": ["product_id"],
        "additionalProperties": false
      }
    },
    {
      "type": "function",
      "name": "check_inventory",
      "description": "Check current inventory levels for a product",
      "parameters": {
        "type": "object",
        "properties": {
          "product_id": { "type": "string", "description": "Catalog product identifier" }
        },
        "required": ["product_id"],
        "additionalProperties": false
      }
    }
  ]
}
```

This allows the model to naturally chain operations: search → get details → check inventory.

### Reliability Tracking

OpenRouter tracks how reliably each provider completes tool calls and surfaces this as the **Tool Call Error Rate** on the Performance tab of every model page. The same signal drives [Auto Exacto](https://openrouter.ai/docs/guides/routing/auto-exacto.md) provider ordering on tool-calling requests. For the exact validator, JSON Schema draft, regex semantics, and per-tool-call classification, see [How Tool-Calling Success Rate Is Measured](https://openrouter.ai/docs/guides/routing/auto-exacto.md#how-tool-calling-success-rate-is-measured).

For more details on the Responses API input format and tool parameters, see the [Responses API reference](https://openrouter.ai/docs/api_reference/responses/overview.md).
