\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Getting started

Recraft supports the \[Model Context Protocol\](https://modelcontextprotocol.io/) (MCP), enabling AI agents such as Claude, Cursor, and other MCP-compatible clients to interact with Recraft’s image generation and editing tools through a standardized interface.

By connecting Recraft's MCP server to your client, you can generate and edit high-quality raster and vector images directly from your agent environment without switching tools.

Recraft offers two ways to connect:

\\* \*\*Remote MCP server\*\* — a hosted server at \`https://mcp.recraft.ai/mcp\` that requires no local installation. Authenticate with your API key and connect directly from any MCP-compatible client. See \[Remote MCP server\](./remote-server) for setup instructions.
\\* \*\*Local MCP server\*\* — a self-hosted server you run on your machine. Useful if you want to store generated images locally or need full control over the setup. See \[Setup\](/mcp-reference/local-server) for installation options.

\## Supported operations

Recraft’s MCP server exposes the following operations:

\\* Raster and vector image generation
\\* Raster and vector image editing
\\* Creating and using custom styles
\\* Vectorization of raster images
\\* Background removal and replacement
\\* Upscaling of raster images

For the source code, visit \[Recraft MCP GitHub\](https://github.com/recraft-ai/mcp-recraft-server).

Built with \[Mintlify\](https://mintlify.com).