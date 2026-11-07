> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Getting started

Recraft supports the [Model Context Protocol](https://modelcontextprotocol.io/) (MCP), enabling AI agents such as Claude, Cursor, and other MCP-compatible clients to interact with Recraft’s image generation and editing tools through a standardized interface.

By connecting Recraft's MCP server to your client, you can generate and edit high-quality raster and vector images directly from your agent environment without switching tools.

Recraft offers to use a remote MCP server at `https://mcp.recraft.ai/mcp` that requires no local installation. Authenticate via OAuth with your Recraft account and connect directly from any MCP-compatible client. Usage is billed against your Recraft **subscription credits** (the same balance used in the Recraft Studio app). See [MCP server](https://www.recraft.ai/docs/mcp-reference/remote-server.md) for setup instructions.

## Supported operations

Recraft’s MCP server expose the following operations:

* Raster and vector image generation
* Raster and vector image transforms
* Creating and using custom styles
* Vectorization of raster images
* Background removal and replacement
* Upscaling of raster images

See [MCP server](https://www.recraft.ai/docs/mcp-reference/remote-server.md) for setup details.

## Supported clients

Any MCP-compatible client that supports the Streamable HTTP transport and OAuth can use the remote server.

## Troubleshooting

* **OAuth window doesn't open or loops back.** Clear the cached OAuth state in your client and reconnect. For `mcp-remote`, delete `~/.mcp-auth/` (or the equivalent directory for your OS) and restart the client.
* **Tools don't appear in the client.** Confirm the connector is enabled in your client's tools menu. In Claude Code, run `/mcp` to verify the server is connected and authenticated.
* **"Insufficient credits" errors.** Top up your subscription credits on the [Recraft web platform](https://www.recraft.ai). MCP calls deduct from this balance, not from your API units.
* **Generation succeeds but no image preview is shown.** Some clients impose a size limit on inline images. Retry with a smaller `size`, or open the returned URL directly.
* **Tools call appears to hang.** Image operations can take up to a few minutes for large outputs or upscales. Wait for the call to time out before retrying.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.