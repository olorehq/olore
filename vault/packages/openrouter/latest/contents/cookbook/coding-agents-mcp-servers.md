> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Using MCP Servers with OpenRouter

> Use MCP Servers with OpenRouter

MCP servers are a popular way of providing LLMs with tool calling abilities, and are an alternative to using OpenAI-compatible tool calling.

By converting MCP (Anthropic) tool definitions to OpenAI-compatible tool definitions, you can use MCP servers with OpenRouter.

> [!TIP]
>
> Building a TypeScript agent? The [`@openrouter/mcp`](https://openrouter.ai/docs/agent-sdk/call-model/mcp-tools) package handles all of this for you — it connects to a remote MCP server, authenticates once, and returns tools you spread directly into `callModel`.

In this example, we'll use [Anthropic's MCP client SDK](https://github.com/modelcontextprotocol/python-sdk?tab=readme-ov-file#writing-mcp-clients) to interact with the File System MCP, all with OpenRouter under the hood.

> [!WARNING]
>
> Note that interacting with MCP servers is more complex than calling a REST endpoint. The MCP protocol is stateful and requires session management. The example below uses the MCP client SDK, but is still somewhat complex.

First, some setup. To run this you'll need to pip install the packages, and create a `.env` file with OPENAI\_API\_KEY set. This example also assumes the directory `/Applications` exists.

```python expandable lines theme={null}
import asyncio
from typing import Optional
from contextlib import AsyncExitStack

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

from openai import OpenAI
from dotenv import load_dotenv
import json

load_dotenv()  # load environment variables from .env

MODEL = "~anthropic/claude-sonnet-latest"

SERVER_CONFIG = {
    "command": "npx",
    "args": ["-y",
              "@modelcontextprotocol/server-filesystem",
              f"/Applications/"],
    "env": None
}
```

Next, our helper function to convert MCP tool definitions to [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) function tool definitions:

```python lines theme={null}

def convert_tool_format(tool):
    converted_tool = {
        "type": "function",
        "name": tool.name,
        "description": tool.description,
        "parameters": {
            "type": "object",
            "properties": tool.inputSchema.get("properties", {}),
            "required": tool.inputSchema.get("required", [])
        }
    }
    return converted_tool

```

And, the MCP client itself; a regrettable \~100 lines of code. Note that the SERVER\_CONFIG is hard-coded into the client, but of course could be parameterized for other MCP servers.

```python expandable lines theme={null}
class MCPClient:
    def __init__(self):
        self.session: Optional[ClientSession] = None
        self.exit_stack = AsyncExitStack()
        self.openai = OpenAI(
            base_url="https://openrouter.ai/api/v1"
        )

    async def connect_to_server(self, server_config):
        server_params = StdioServerParameters(**server_config)
        stdio_transport = await self.exit_stack.enter_async_context(stdio_client(server_params))
        self.stdio, self.write = stdio_transport
        self.session = await self.exit_stack.enter_async_context(ClientSession(self.stdio, self.write))

        await self.session.initialize()

        # List available tools from the MCP server
        response = await self.session.list_tools()
        print("\nConnected to server with tools:", [tool.name for tool in response.tools])

        self.messages = []

    async def process_query(self, query: str) -> str:

        self.messages.append({
            "role": "user",
            "content": query
        })

        response = await self.session.list_tools()
        available_tools = [convert_tool_format(tool) for tool in response.tools]

        for _ in range(10):
            response = self.openai.responses.create(
                model=MODEL,
                tools=available_tools,
                max_output_tokens=1000,
                input=self.messages,
            )
            if response.status != "completed":
                message = response.error.message if response.error else f"Response ended as {response.status}"
                raise RuntimeError(message)

            self.messages += [item.model_dump(exclude_none=True) for item in response.output]

            tool_calls = [item for item in response.output if item.type == "function_call"]
            if not tool_calls:
                return response.output_text

            # Answer every function_call the model made; a call left without
            # an output makes the next request invalid.
            for tool_call in tool_calls:
                tool_name = tool_call.name
                tool_args = json.loads(tool_call.arguments) if tool_call.arguments else {}

                # Execute tool call
                try:
                    result = await self.session.call_tool(tool_name, tool_args)
                except Exception as e:
                    print(f"Error calling tool {tool_name}: {e}")
                    result = None

                self.messages.append({
                    "type": "function_call_output",
                    "call_id": tool_call.call_id,
                    "output": "\n".join(
                        part.text for part in result.content if part.type == "text"
                    ) if result else "Tool call failed",
                })

        raise RuntimeError("Tool calling exceeded 10 iterations")

    async def chat_loop(self):
        """Run an interactive chat loop"""
        print("\nMCP Client Started!")
        print("Type your queries or 'quit' to exit.")

        while True:
            try:
                query = input("\nQuery: ").strip()
                result = await self.process_query(query)
                print("Result:")
                print(result)

            except Exception as e:
                print(f"Error: {str(e)}")

    async def cleanup(self):
        await self.exit_stack.aclose()

async def main():
    client = MCPClient()
    try:
        await client.connect_to_server(SERVER_CONFIG)
        await client.chat_loop()
    finally:
        await client.cleanup()

if __name__ == "__main__":
    import sys
    asyncio.run(main())
```

Assembling all of the above code into mcp-client.py, you get a client that behaves as follows (some outputs truncated for brevity):

```text expandable lines theme={null}
% python mcp-client.py

Secure MCP Filesystem Server running on stdio
Allowed directories: [ '/Applications' ]

Connected to server with tools: ['read_file', 'read_multiple_files', 'write_file'...]

MCP Client Started!
Type your queries or 'quit' to exit.

Query: Do I have microsoft office installed?

Result:
[Calling tool list_allowed_directories with args {}]
I can check if Microsoft Office is installed in the Applications folder:

Query: continue

Result:
[Calling tool search_files with args {'path': '/Applications', 'pattern': 'Microsoft'}]
Now let me check specifically for Microsoft Office applications:

Query: continue

Result:
I can see from the search results that Microsoft Office is indeed installed on your system.
The search found the following main Microsoft Office applications:

1. Microsoft Excel - /Applications/Microsoft Excel.app
2. Microsoft PowerPoint - /Applications/Microsoft PowerPoint.app
3. Microsoft Word - /Applications/Microsoft Word.app
4. OneDrive - /Applications/OneDrive.app (which includes Microsoft SharePoint integration)
```
