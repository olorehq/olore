# Authentication

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

To connect a local client to your organization's gateway with or without ChatGPT sign-in, see [Connect to a gateway](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway).
Direct Bedrock access uses the
[Amazon Bedrock authentication options](https://learn.chatgpt.com/docs/amazon-bedrock#authentication-options).

## OpenAI authentication

<a id="sign-in-with-chatgpt"></a>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

Codex supports two ways for a person to sign in when using OpenAI models:

- Sign in with ChatGPT for subscription access
- Sign in with an API key for usage-based access

The ChatGPT desktop app, Codex CLI, and IDE extension support both sign-in
methods for local work. Codex cloud requires signing in with ChatGPT.

Your sign-in method also determines which admin controls and data-handling policies apply.

- When you sign in with ChatGPT, Codex usage follows your ChatGPT workspace
  permissions, role-based access control (RBAC), and ChatGPT Enterprise
  retention and residency settings.
- With an API key, usage follows your API organization's retention and
  data-sharing settings instead.

For managed workspaces, authentication is only one layer of access. Workspace
membership and provisioning determine who can sign in, while seats and
workspace roles determine which product surfaces and features they can use.
For local work in the ChatGPT desktop app, Codex CLI, or IDE extension,
permission profiles constrain what the agent can do on the device. See
[Groups and provisioning](https://learn.chatgpt.com/docs/enterprise/groups-and-provisioning)
and [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions)
to plan those controls.

### Sign in with ChatGPT

To use Local computer access with Work Cloud across desktop, mobile, and web:

1. Sign in with ChatGPT to an eligible workspace.

1. Ask a workspace owner to enable Work Cloud, then turn on **Allow local computer access** under Work Cloud. **Use Codex locally on the ChatGPT desktop app** is not a prerequisite.

API keys and Codex access tokens do not enable Local computer access with Work Cloud. See [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions) and the [Work admin FAQ](https://learn.chatgpt.com/docs/enterprise/work-admin-faq) for prerequisites, or [Local computer access for Work Cloud and dots](https://learn.chatgpt.com/docs/enterprise/cloud-local-access) for setup.

When you sign in with ChatGPT from the ChatGPT desktop app, Codex CLI, or IDE extension, the sign-in flow opens a browser window. After you sign in, the browser returns your credentials to Codex.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="web">

### ChatGPT web

Open [ChatGPT](https://chatgpt.com), sign in, and choose the workspace where you
want to work. ChatGPT web keeps the authenticated session in your browser.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

#### ChatGPT desktop app

On the signed-out screen, select **Continue to sign in**, then complete the
browser flow.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

#### Codex CLI

Run `codex login`, then complete the browser flow. This is the default
authentication path when no valid session is available.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

#### IDE extension

On the signed-out screen, select **Sign in with ChatGPT**, then complete the
browser flow.

</ContentModeSwitch>

<a id="sign-in-with-an-api-key"></a>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

### Sign in with an API key

You can also sign in to the ChatGPT desktop app, Codex CLI, or IDE extension with an API key. Get your API key from the [OpenAI dashboard](https://platform.openai.com/api-keys).

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

#### ChatGPT desktop app

On the signed-out screen, select **Sign in another way**, enter your key, then
select **Continue**.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

#### Codex CLI

Pipe the key to `codex login` through stdin:

```shell
printenv OPENAI_API_KEY | codex login --with-api-key
```

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

#### IDE extension

On the signed-out screen, select **Use API Key**, enter your key, then select
**OK**.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

OpenAI bills API key usage through your OpenAI Platform account at standard API rates. See the [API pricing page](https://openai.com/api/pricing/).

API key authentication supports local Codex workflows, but some features that
rely on ChatGPT workspace access or cloud services are limited or unavailable.
Compare support by plan in
[Feature availability](https://learn.chatgpt.com/docs/pricing#feature-availability).

In Codex CLI and Codex in the ChatGPT desktop app, API key authentication
includes access to supported OpenAI-curated plugins. Some plugins aren't
available because their connection flows require unsupported OAuth
capabilities. See [Use plugins](https://learn.chatgpt.com/docs/plugins#api-key-availability).

When you sign in with an API key, Codex uses standard API pricing instead of
included ChatGPT plan credits.

Use API key authentication for programmatic Codex CLI workflows, such as CI/CD
jobs. Don't expose Codex execution in untrusted or public environments.

</ContentModeSwitch>

### Check authentication or sign out

<ContentModeSwitch group="codex-surface" id="web">

Open the profile menu to confirm the active account and workspace. To end the
ChatGPT web session in that browser, select **Log out**.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

Open the profile menu to see the active account or API key status. Select
**Log out** to clear the current credentials.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

Run `codex login status` to see the active authentication method. For stored
authentication, run `codex logout` to clear the current credentials. When
the process selects workload identity, Codex rejects `codex login` and
`codex logout` because the process environment controls authentication.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

Open the profile menu to see the active account or API key status. Select
**Log out** to clear the current credentials.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

### Use Codex access tokens for enterprise automation

In ChatGPT Enterprise workspaces, admins can grant the access token
permission so permitted members can create Codex access tokens for trusted,
non-interactive Codex local workflows. Use an access token when automation
needs ChatGPT workspace access, ChatGPT-managed Codex entitlements, or
enterprise workspace controls without a browser sign-in.

Access tokens are intended for trusted scripts, schedulers, and private CI
runners. For general OpenAI API calls, continue to use Platform API keys.

For setup steps, permissions, rotation, and revocation guidance, see
[Access tokens](https://learn.chatgpt.com/docs/enterprise/access-tokens).

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

If your environment already provides a Codex access token, pipe it to the CLI:

```shell
printenv CODEX_ACCESS_TOKEN | codex login --with-access-token
```

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

## Secure your Codex cloud account

Codex cloud interacts directly with your codebase, so it needs stronger security than many other ChatGPT features. Enable multi-factor authentication (MFA).

If you use a social login provider (Google, Microsoft, Apple), you aren't required to enable MFA on your ChatGPT account, but you can set it up with your social login provider.

For setup instructions, see:

- [Google](https://support.google.com/accounts/answer/185839)
- [Microsoft](https://support.microsoft.com/en-us/topic/what-is-multifactor-authentication-e5e39437-121c-be60-d123-eda06bddf661)
- [Apple](https://support.apple.com/en-us/102660)

If you access ChatGPT through single sign-on (SSO), your organization's SSO administrator should enforce MFA for all users.

If you log in using an email and password, you must set up MFA on your account before accessing Codex cloud.

If your account supports more than one login method and one of them is email and password, you must set up MFA before accessing Codex, even if you sign in another way.

</ContentModeSwitch>

<a id="login-caching"></a>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

## Login caching

When you sign in to the ChatGPT desktop app, Codex CLI, or IDE extension using either ChatGPT or an API key, your login details are cached and reused. The CLI and extension share the same cached login details. If you log out from either one, you'll need to sign in again the next time you start the CLI or extension.

Codex caches login details locally in a plaintext file at `~/.codex/auth.json` or in your OS-specific credential store.

For sign in with ChatGPT sessions, Codex refreshes tokens automatically during use before they expire, so active sessions usually continue without requiring another browser login.

</ContentModeSwitch>

<a id="credential-storage"></a>
<a id="enforce-a-login-method-or-workspace"></a>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

## Credential storage

Use `cli_auth_credentials_store` to control where the Codex CLI stores cached credentials:

```toml
# file | keyring | auto | ephemeral
cli_auth_credentials_store = "keyring"
```

- `file` stores credentials in `auth.json` under `CODEX_HOME` (defaults to `~/.codex`).
- `keyring` stores credentials in your operating system credential store and fails if it is unavailable.
- `auto` uses the OS credential store when available, otherwise falls back to `auth.json`.
- `ephemeral` keeps credentials in memory only for the current process.

See the [configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference) for the complete
`config.toml` schema.

Admins can enforce `cli_auth_credentials_store` and `chatgpt_base_url` through
[local authentication requirements](https://learn.chatgpt.com/docs/enterprise/managed-configuration#manage-authentication-locally).
Users can't override those requirements through `config.toml` or CLI overrides.

If you use file-based storage, treat `~/.codex/auth.json` like a password: it
  contains access tokens. Don't commit it, paste it into tickets, or share it in
  chat.

## Enforce a login method or workspace

In managed environments, admins may restrict how users are allowed to authenticate:

```toml
# Only allow ChatGPT login or only allow API key login.
forced_login_method = "chatgpt" # or "api"

# When using ChatGPT login, restrict users to a specific workspace.
forced_chatgpt_workspace_id = "00000000-0000-0000-0000-000000000000"
```

If the active credentials don't match the configured restrictions, Codex logs the user out and exits.

These settings can also be supplied through legacy managed configuration.
For admin-enforced login restrictions, see
[Manage authentication locally](https://learn.chatgpt.com/docs/enterprise/managed-configuration#manage-authentication-locally).

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

## Login diagnostics

Direct `codex login` runs write a dedicated `codex-login.log` file under
your configured log directory. Use it when you need to debug browser-login or
device-code failures, or when support asks for login-specific logs.

## Custom CA bundles

If your network uses a corporate TLS proxy or private root CA, set
`CODEX_CA_CERTIFICATE` to a PEM bundle before logging in. When
`CODEX_CA_CERTIFICATE` is unset, Codex falls back to `SSL_CERT_FILE`. The same
custom CA settings apply to login, normal HTTPS requests, and secure WebSocket
connections.

```shell
export CODEX_CA_CERTIFICATE=/path/to/corporate-root-ca.pem
codex login
```

## Login on headless devices

If you are signing in to ChatGPT with the Codex CLI, there are some situations where the browser-based login UI may not work:

- You're running the CLI in a remote or headless environment.
- Your local networking configuration blocks the localhost callback Codex uses to return the OAuth token to the CLI after you sign in.

In these situations, prefer device code authentication (beta). In the interactive login UI, choose **Sign in with Device Code**, or run `codex login --device-auth` directly. If device code authentication doesn't work in your environment, use one of the fallback methods.

### Preferred: Device code authentication (beta)

1. Enable device code login in your ChatGPT security settings (personal account) or ChatGPT workspace permissions (workspace admin).
2. In the terminal where you're running Codex, choose one of these options:
   - In the interactive login UI, select **Sign in with Device Code**.
   - Run `codex login --device-auth`.
3. Open the link in your browser, sign in, then enter the one-time code.

If device code login isn't available in your environment, use one of the
fallback methods below.

### Fallback: Authenticate locally and copy your auth cache

If you can complete the login flow on a machine with a browser, you can copy your cached credentials to the headless machine.

1. On a machine where you can use the browser-based login flow, run `codex login`.
2. Confirm the login cache exists at `~/.codex/auth.json`.
3. Copy `~/.codex/auth.json` to `~/.codex/auth.json` on the headless machine.

Treat `~/.codex/auth.json` like a password: it contains access tokens. Don't commit it, paste it into tickets, or share it in chat.

If your OS stores credentials in a credential store instead of `~/.codex/auth.json`, this method may not apply. See
[Credential storage](https://learn.chatgpt.com/docs/auth#credential-storage) for how to configure file-based storage.

Copy to a remote machine over SSH:

```shell
ssh user@remote 'mkdir -p ~/.codex'
scp ~/.codex/auth.json user@remote:~/.codex/auth.json
```

Or use a one-liner that avoids `scp`:

```shell
ssh user@remote 'mkdir -p ~/.codex && cat > ~/.codex/auth.json' < ~/.codex/auth.json
```

Copy into a Docker container:

```shell
# Replace MY_CONTAINER with the name or ID of your container.
CONTAINER_HOME=$(docker exec MY_CONTAINER printenv HOME)
docker exec MY_CONTAINER mkdir -p "$CONTAINER_HOME/.codex"
docker cp ~/.codex/auth.json MY_CONTAINER:"$CONTAINER_HOME/.codex/auth.json"
```

For a more advanced version of this same pattern on trusted CI/CD runners, see
[Maintain Codex account auth in CI/CD (advanced)](https://learn.chatgpt.com/docs/auth/ci-cd-auth).
That guide explains how to let Codex refresh `auth.json` during normal runs and
then keep the updated file for the next job. API keys are still the recommended
default for automation.

### Fallback: Forward the localhost callback over SSH

If you can forward ports between your local machine and the remote host, you can use the standard browser-based flow by tunneling Codex's local callback server (default `localhost:1455`).

1. From your local machine, start port forwarding:

```shell
ssh -L 1455:localhost:1455 user@remote
```

2. In that SSH session, run `codex login` and follow the printed address on your local machine.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

## Alternative model providers

When you define a [custom model provider](https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers) in your configuration file, you can choose one of these authentication methods:

- **OpenAI authentication**: Set `requires_openai_auth = true` to use OpenAI authentication. You can then sign in with ChatGPT or an API key. This is useful when you access OpenAI models through an LLM proxy server. When `requires_openai_auth = true`, Codex ignores `env_key`.
- **Environment variable authentication**: Set `env_key = "<ENV_VARIABLE_NAME>"` to use a provider-specific API key from the local environment variable named `<ENV_VARIABLE_NAME>`.
- **Native gateway OAuth**: Configure `[model_providers.<id>.gateway_oauth]` for browser sign-in through your organization's identity provider. It works with or without ChatGPT sign-in. See [Native gateway OAuth](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#use-native-gateway-oauth) for the gateway requirements and configuration.
- **Command-backed authentication**: Configure `[model_providers.<id>.auth]` to obtain a token from an installed [credential helper](https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers).
- **No authentication**: For a local model that doesn't require credentials, leave `requires_openai_auth` unset or `false` and omit credential settings, including `env_key`, `experimental_bearer_token`, `auth`, and `gateway_oauth`.

</ContentModeSwitch>