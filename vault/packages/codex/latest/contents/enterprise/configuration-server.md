# Self-host Codex configuration for your team

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

We recommend that your team sign in to Codex with ChatGPT. On supported plans,
  you can use [managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)
  to set defaults and enforce requirements in **Agent security** in the Admin
  Console without running your own server.

If your users don't sign in to Codex with ChatGPT, you can distribute configuration to Codex CLI and the desktop app from an HTTPS server you operate. Codex loads your settings at startup, whether users connect directly to their model provider or through a gateway.

## Client limitations

The desktop app can't prompt you to sign in to the configuration server. If your server requires a new sign-in, run `codex login` in a terminal on the same computer, then reopen the app. If the app can't load the required settings, startup pauses.

## Configure Codex to use the server

On a test computer, create or update the system `requirements.toml`. Add a `[config_server]` table with the base URL of your configuration server. Use `/etc/codex/requirements.toml` on Linux and macOS, or `%ProgramData%\OpenAI\Codex\requirements.toml` on Windows. On macOS, you can also distribute the table through [managed preferences](https://learn.chatgpt.com/docs/enterprise/managed-configuration#mdm-setup-workflow).

```toml
[config_server]
base_url = "https://codex-config.example.com/team"
```

Only local administrator-controlled requirements can select the server. Keep this table on the computer when you move the rest of your policy to the endpoint.

### Authenticate to the configuration server (optional)

By default, Codex attempts to fetch configuration without credentials. If your server requires sign-in, add `[config_server.oauth]` to the same `requirements.toml` file. Codex uses the OAuth authorization code flow with Proof Key for Code Exchange (PKCE).

```toml
[config_server.oauth]
authorization_url = "https://login.example.com/oauth/authorize"
token_url = "https://login.example.com/oauth/token"
client_id = "codex-policy"
redirect_port = 43127
```

The redirect URI for this example is `http://127.0.0.1:43127/callback`. You can omit `redirect_port` if your provider accepts a loopback callback on any available port. Codex sends the access token in the `Authorization` header. Your server must verify it before returning the bundle.

## Serve Codex configuration

Host your managed configuration at an HTTPS endpoint. When Codex CLI fetches the bundle, it sends a GET request using the base URL from the local `requirements.toml`:

```text
GET {config_server.base_url}/codex/config/bundle
```

With the `base_url` from the bootstrap example above, Codex sends this request:

```text
GET https://codex-config.example.com/team/codex/config/bundle
```

Respond with `200 OK` and a [JSON configuration bundle](#configuration-bundle-format) in the response body.

### Configuration bundle format

The bundle groups TOML entries into two arrays:

- `config_toml.enterprise_managed` contains the defaults to apply. Each entry's `contents` is [`config.toml` text](https://learn.chatgpt.com/docs/config-file/config-reference#configtoml).
- `requirements_toml.enterprise_managed` contains the requirements to enforce. Each entry's `contents` is [`requirements.toml` text](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml).

Each array entry has three string fields: `id`, `name` (a display name), and `contents`. Use an empty array for a category you don't need.

This example sets the web search default to `disabled` and enforces that value with `allowed_web_search_modes`.

```json
{
  "config_toml": {
    "enterprise_managed": [
      {
        "id": "search-default",
        "name": "Default web search",
        "contents": "web_search = 'disabled'"
      }
    ]
  },
  "requirements_toml": {
    "enterprise_managed": [
      {
        "id": "search-policy",
        "name": "Allowed web search modes",
        "contents": "allowed_web_search_modes = ['disabled']"
      }
    ]
  }
}
```

## Verify the configuration in Codex

1. On a test computer, open a terminal in your project directory and run `codex`. Complete company sign-in if prompted.
2. At the interactive Codex CLI prompt, type [`/debug-config`](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-inspect-config-layers-with-debug-config) and press Enter.
3. If you serve defaults, find their names and IDs under **Config layer stack**. With the example above, look for `enterprise-managed (Default web search, search-default) (enabled)`.
4. If you serve requirements, find a setting you enforce under **Requirements** and check the policy source listed next to it.

Codex can start with cached settings and refresh them in the background. After you change a policy on the server, wait for Codex to refresh it, then start a new session and repeat the check before rolling it out to other machines.