> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP server

> Connect to Recraft's hosted MCP server without any local installation

Recraft provides a hosted remote MCP server at `https://mcp.recraft.ai/mcp`. It supports the Streamable HTTP transport and uses OAuth 2.0 for authentication.

The server exposes all functionality available through the [Recraft API](https://www.recraft.ai/docs/api-reference/endpoints.md), including image generation, editing, vectorization, upscaling, background removal and replacement, and custom style creation.

## Billing

The MCP server consumes **subscription credits** from your Recraft plan — the same balance used by the Recraft Studio app. Each operation deducts credits according to the rates in [Plans and billing → Credits](https://www.recraft.ai/docs/plans-and-billing/credits.md). Free users receive a limited number of credits allowance; paid plans include a monthly allowance, with optional top-ups.

## Authentication

The MCP server uses OAuth 2.0. When you connect for the first time, your MCP client will initiate an OAuth flow and redirect you to Recraft to authorize access. Once authorized, the client stores the token and handles authentication automatically on subsequent requests.

## Setup by client

### Claude App

The Recraft MCP server is available as a custom connector in the [Claude App](https://claude.ai/) (web and desktop).

The easiest way to install the connector is to follow this one-click link: [Add Recraft to Claude](https://claude.ai/customize/connectors?modal=add-custom-connector\&connectorName=Recraft\&connectorUrl=https%3A%2F%2Fmcp.recraft.ai%2Fmcp). The link opens the "Add custom connector" modal with the Recraft fields prefilled — review them and click **Add**.

Alternatively, add the connector manually:

1. Open [Settings → Connectors](https://claude.ai/settings/connectors) in the Claude App.
2. Click **Add custom connector**.
3. Fill in the fields:
   * **Name:** `Recraft`
   * **MCP server URL:** `https://mcp.recraft.ai/mcp`
4. Click **Add** to save the connector.

The first time you use the connector, Claude will redirect you to Recraft to authorize access via OAuth. Once authorized, the connector stays available across your Claude conversations — enable it from the **Search and tools** menu in the composer when you want Claude to use Recraft.

### Claude Code

Run the following command in your terminal:

```bash theme={null}
claude mcp add --transport http recraft https://mcp.recraft.ai/mcp
```

Then run `/mcp` in a session to authenticate via OAuth.

> [!NOTE]
>
> **Allow image downloads on Claude Code on the web.** [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) runs in a managed container with restricted network access, so it may fail to download generated images from Recraft's image host. To fix this, allowlist the Recraft image host in the environment's **Network access** settings:
>
> 1. Open the environment for editing and find the **Network access** selector in the dialog.
> 2. Set the access level to **Custom**.
> 3. In the **Allowed domains** field, add the Recraft image host (one domain per line):
>    ```text theme={null}
>    img.recraft.ai
>    ```
> 4. Check **Also include default list of common package managers** to keep the default trusted domains alongside your custom entry.
>
> Once `img.recraft.ai` is allowed, Claude Code can download generated images without errors.

### Claude Desktop

Open your `claude_desktop_config.json` file and add the following configuration:

```json theme={null}
{
  "mcpServers": {
    "recraft": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.recraft.ai/mcp"
      ]
    }
  }
}
```

On first use, `mcp-remote` will open a browser window to complete the OAuth flow.

### Cursor

Open your `~/.cursor/mcp.json` file and add the following configuration:

```json theme={null}
{
  "mcpServers": {
    "recraft": {
      "url": "https://mcp.recraft.ai/mcp"
    }
  }
}
```

### Visual Studio Code

Open your `.vscode/mcp.json` file (or your user settings) and add:

```json theme={null}
{
  "servers": {
    "recraft": {
      "type": "http",
      "url": "https://mcp.recraft.ai/mcp"
    }
  }
}
```

### Other MCP clients

Any MCP-compatible client that supports Streamable HTTP transport and OAuth can connect using:

* **URL:** `https://mcp.recraft.ai/mcp`
* **Transport:** Streamable HTTP

If your client does not support remote OAuth flows directly and requires a stdio-based command, use [`mcp-remote`](https://www.npmjs.com/package/mcp-remote):

```bash theme={null}
npx -y mcp-remote https://mcp.recraft.ai/mcp
```

## Supported operations

The server supports the full set of image operations available through the Recraft API, including:

* Generate raster and vector images from text prompts
* Create image variations and image-to-image transformations
* Edit selected parts of an image
* Remove selected objects or regions
* Remove, replace, or generate backgrounds
* Convert raster images into vector graphics
* Upscale images for either sharper or more detailed results
* Create custom styles from reference images
* View account details such as your remaining credits


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.