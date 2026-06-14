\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Local MCP Server

\## Prerequisites

1\. \*\*Recraft API key\*\*
 \\* Access it in the \[API section\](https://www.recraft.ai/profile/api) of your account \*\*Profile\*\*.
 \\* Note: You will need to buy API units (credits) before you can generate an API key.
2\. \*\*MCP client installed\*\*
 \\* For example, \[Claude Desktop\](https://claude.ai).

\## Option 1: Claude Desktop Extensions

You can set up the Recraft MCP server in Claude using \[Claude Desktop Extensions\](https://www.anthropic.com/engineering/desktop-extensions).

1\. Download \*\*mcp-recraft-server.dxt\*\* from the \[latest release\](https://github.com/recraft-ai/mcp-recraft-server/releases/latest/download/mcp-recraft-server.dxt).
2\. Double-click the file to open it with Claude Desktop Extensions.
3\. In Claude Desktop, click \*\*Install\*\*.
4\. Fill out the setup form:
 \\* Paste your Recraft API key obtained from your \[Profile API page\](https://www.recraft.ai/profile/api).
 \\* (Optional) Specify a local path for generated image storage, or indicate that all results should be stored remotely.
5\. Enable the server.

If you encounter installation issues, make sure you have the latest version of Claude Desktop installed.

\## Option 2: Smithery

1\. Find this MCP server on \[Smithery\](https://smithery.ai/server/@recraft-ai/mcp-recraft-server).
2\. Install from Smithery.
 \\* Note: all generation results will be stored remotely.
 \\* If you want to store results locally, use Claude Desktop Extensions or manual setup instead.

\## Option 3: Manual setup

\### Requirements

\\* Ensure \*\*Node.js\*\* is installed on your machine.
 \\* If not, install from \[nodejs.org\](https://nodejs.org).
\\* You will need to run \`npx\` or \`node\` commands in your terminal.

\### From NPM

1\. Open your \*\*Claude Desktop configuration file\*\*: \`claude\_desktop\_config.json\`.
2\. Modify the file to add the following configuration snippet (replace with your API key and desired settings):

\`\`\`json theme={null}
{
 "mcpServers": {
 "recraft": {
 "command": "npx",
 "args": \[\
 "-y",\
 "@recraft-ai/mcp-recraft-server@latest"\
 \],
 "env": {
 "RECRAFT\_API\_KEY": "",
 "IMAGE\_STORAGE\_DIRECTORY": "",
 "RECRAFT\_REMOTE\_RESULTS\_STORAGE": ""
 }
 }
 }
}
\`\`\`

\## Manual setup

To set up the Recraft MCP server manually, you will need \*\*Node.js\*\* installed so you can run \`npx\` or \`node\` commands in your terminal.
If you don’t already have Node.js, download it from \[nodejs.org\](https://nodejs.org/en/download).

\### From NPM

1\. Open your \`claude\_desktop\_config.json\` file.
2\. Add the following configuration block, replacing the placeholders with your details:

\`\`\`json theme={null}
{
 "mcpServers": {
 "recraft": {
 "command": "npx",
 "args": \[\
 "-y",\
 "@recraft-ai/mcp-recraft-server@latest"\
 \],
 "env": {
 "RECRAFT\_API\_KEY": "",
 "IMAGE\_STORAGE\_DIRECTORY": "",
 "RECRAFT\_REMOTE\_RESULTS\_STORAGE": ""
 }
 }
 }
}
\`\`\`

\### From source

1\. Clone the repository:

 \`\`\`bash theme={null}
 git clone https://github.com/recraft-ai/mcp-recraft-server.git
 \`\`\`
2\. Navigate into the cloned directory and build the project:

 \`\`\`bash theme={null}
 npm install
 npm run build
 \`\`\`
3\. Modify your \`claude\_desktop\_config.json\` file with the following configuration:

\`\`\`json theme={null}
{
 "mcpServers": {
 "recraft": {
 "command": "node",
 "args": \[\
 "/dist/index.js"\
 \],
 "env": {
 "RECRAFT\_API\_KEY": "",
 "IMAGE\_STORAGE\_DIRECTORY": "",
 "RECRAFT\_REMOTE\_RESULTS\_STORAGE": ""
 }
 }
 }
}
\`\`\`

\### Environment variables

You can configure the following parameters in the \`env\` section:

\\* \*\*\`RECRAFT\_API\_KEY\`\*\* \*(required)\*
 Your \[Recraft API key\](https://www.recraft.ai/profile/api).

\\* \*\*\`IMAGE\_STORAGE\_DIRECTORY\`\*\* \*(optional)\*
 Local directory to store generated images. Defaults to:

 \`\`\`
 $HOME\_DIR/.mcp-recraft-server
 \`\`\`

 This value is ignored if \`RECRAFT\_REMOTE\_RESULTS\_STORAGE="1"\`.

\\* \*\*\`RECRAFT\_REMOTE\_RESULTS\_STORAGE\`\*\* \*(optional)\*
 Set to \`"1"\` to store all generated images remotely. In this case, only URLs are returned and \`IMAGE\_STORAGE\_DIRECTORY\` is ignored.

Built with \[Mintlify\](https://mintlify.com).