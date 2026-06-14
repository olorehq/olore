\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Remote MCP server

\> Connect to Recraft's hosted MCP server without any local installation

Recraft provides a hosted remote MCP server at \`https://mcp.recraft.ai/mcp\`. It supports the Streamable HTTP transport and uses OAuth 2.0 for authentication.

The remote server exposes all functionality available through the \[Recraft API\](https://www.recraft.ai/docs/api-reference/endpoints), including image generation, editing, vectorization, upscaling, background removal and replacement, and custom style creation.

\## Authentication

The remote MCP server uses OAuth 2.0. When you connect for the first time, your MCP client will initiate an OAuth flow and redirect you to Recraft to authorize access. Once authorized, the client stores the token and handles authentication automatically on subsequent requests.

\## Setup by client

\### Claude Code

Run the following command in your terminal:

\`\`\`bash theme={null}
claude mcp add --transport http recraft https://mcp.recraft.ai/mcp
\`\`\`

Then run \`/mcp\` in a session to authenticate via OAuth.

\### Claude Desktop

Open your \`claude\_desktop\_config.json\` file and add the following configuration:

\`\`\`json theme={null}
{
 "mcpServers": {
 "recraft": {
 "command": "npx",
 "args": \[\
 "-y",\
 "mcp-remote",\
 "https://mcp.recraft.ai/mcp"\
 \]
 }
 }
}
\`\`\`

On first use, \`mcp-remote\` will open a browser window to complete the OAuth flow.

\### Cursor

Open your \`~/.cursor/mcp.json\` file and add the following configuration:

\`\`\`json theme={null}
{
 "mcpServers": {
 "recraft": {
 "url": "https://mcp.recraft.ai/mcp"
 }
 }
}
\`\`\`

\### Visual Studio Code

Open your \`.vscode/mcp.json\` file (or your user settings) and add:

\`\`\`json theme={null}
{
 "servers": {
 "recraft": {
 "type": "http",
 "url": "https://mcp.recraft.ai/mcp"
 }
 }
}
\`\`\`

\### Other MCP clients

Any MCP-compatible client that supports Streamable HTTP transport and OAuth can connect using:

\\* \*\*URL:\*\* \`https://mcp.recraft.ai/mcp\`
\\* \*\*Transport:\*\* Streamable HTTP

If your client does not support remote OAuth flows directly and requires a stdio-based command, use \[\`mcp-remote\`\](https://www.npmjs.com/package/mcp-remote):

\`\`\`bash theme={null}
npx -y mcp-remote https://mcp.recraft.ai/mcp
\`\`\`

\## Supported operations

The remote server supports the full set of image operations available through the Recraft API, including:

\\* Generate raster and vector images from text prompts
\\* Create image variations and image-to-image transformations
\\* Edit selected parts of an image
\\* Remove selected objects or regions
\\* Remove, replace, or generate backgrounds
\\* Convert raster images into vector graphics
\\* Upscale images for either sharper or more detailed results
\\* Create custom styles from reference images
\\* View account details such as your remaining credits

Built with \[Mintlify\](https://mintlify.com).