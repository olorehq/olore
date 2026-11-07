# Roll out a gateway

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

As the gateway administrator, configure the model routes and authorize a pilot user. Test the connection on each client you support before distributing settings to developers. Use native gateway OAuth, API keys, or credential helpers for gateway
authentication. To combine gateway authentication with ChatGPT workspace sign-in, see
[Sign in with ChatGPT through a gateway](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#enable-chatgpt-sign-in-recommended).

<a id="connect-to-an-existing-gateway"></a>

To configure Codex on your own machine with values you were given, see
  [Configure the
  provider](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#configure-the-provider).
  Before choosing or rolling out a gateway, review the [gateway compatibility
  requirements](https://learn.chatgpt.com/docs/enterprise/gateway-compatibility).

<a id="prepare-a-gateway"></a>
<a id="before-you-deploy"></a>

## Prerequisites

Before deploying Codex to developers, confirm that you have:

- A gateway serving HTTPS at the exact base URL you will distribute.
- An upstream provider credential held by the gateway.
- Approved Codex-facing model aliases mapped to intended upstream models.
- A tested authentication method: native gateway OAuth, scoped gateway API keys,
  or a credential helper.
- For OAuth, a registered public client, approved test users, and gateway support
  for validating OAuth access tokens.
- For API keys or helpers, a secret delivery mechanism or a tested helper.
- A way to distribute configuration, any required helpers, and catalog files.

## Gateway requirements

Before connecting Codex, verify that the gateway product preserves these required behaviors:

- Accept Codex Responses API requests at `POST /v1/responses`.
- Stream SSE events without buffering and end with `response.completed`.
- Preserve follow-up continuation with replayed input.
- Preserve `previous_response_id` only when WebSocket or incremental transport is enabled.
- Preserve function calls and matching `function_call_output` items.
- Route each Codex-facing model alias to the intended upstream model.
- Authenticate users separately and return useful errors without hiding the cause.

A health endpoint, `/v1/models`, Chat Completions response, or one plain-text reply does not qualify the gateway. See [Gateway compatibility requirements](https://learn.chatgpt.com/docs/enterprise/gateway-compatibility) for the detailed contract.

<a id="architecture"></a>

Need an implementation starting point? The [Codex deployment guidance repository](https://github.com/openai-on-aws/guidance-codex/tree/adbc00f353effbf0252e667ba41eb89c99324c8f) includes worked setups for different LLM gateway products. Use it as a reference after confirming your gateway meets the requirements above.

<a id="deployment-checkpoints"></a>

## Roll out the gateway

To move from a deployed gateway to a verified developer experience, complete these five checkpoints in order:

1. [Choose model names and verify routes](#choose-model-names-and-routes).
2. [Choose authentication](#choose-authentication).
3. [Test Codex through the gateway](#test-the-client-and-gateway).
4. [Distribute the configuration](#distribute-the-configuration).
5. [Verify from a developer machine](#verify-and-operate-the-rollout).

<a id="choose-the-bedrock-route"></a>
<a id="configure-a-runtime-model-route"></a>

## Choose model names and routes

Set Codex's `model` to the gateway's model name. Configure the gateway to route that name to the approved upstream model.

| Gateway model name                                                                                                     | Codex configuration                                                                           |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| A [built-in model name](https://learn.chatgpt.com/docs/enterprise/gateway-compatibility#recognized-model-names) included in your Codex version | Set `model` in `config.toml` to this exact name.                                              |
| A custom alias, such as `company-coding-model`                                                                         | Supply a remote or local catalog containing the alias and the corresponding model's metadata. |

<a id="prepare-the-client-catalog"></a>
<a id="supply-metadata-for-a-custom-alias"></a>

### Use a model catalog for custom names

For a local catalog, start with the [models.json example](#start-with-a-local-modelsjson-file).

Supply a model catalog when your gateway uses a model name Codex does not recognize. The catalog supplies the instructions, reasoning options, context limits, and tool capabilities Codex uses for that name. Without a matching entry, a request can reach the intended upstream model while Codex uses generic settings.

Host a remote catalog with `model_providers.<id>.model_catalog_url` to update model metadata centrally, or distribute a local file with `model_catalog_json`. Use a local catalog when native gateway OAuth is the only credential; OAuth alone doesn't enable remote catalog discovery. See the [configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference) for both settings.

Get a catalog endpoint or file compatible with your Codex version from your cloud
or gateway provider. Make sure it includes each approved alias and its model
metadata. For catalog implementation, see
[Implementing model catalogs for gateways and clouds](#model-catalog-reference).

#### Serve a remote catalog

Use the HTTPS catalog endpoint supplied by your provider.
Distribute the full endpoint URL in the selected provider's `config.toml` table:

```toml
model = "company-coding-model"
model_provider = "enterprise-gateway"
web_search = "disabled"

[model_providers.enterprise-gateway]
name = "Organization Gateway"
base_url = "https://gateway.example.com/v1"
model_catalog_url = "https://gateway.example.com/codex/models"
wire_api = "responses"
env_key = "CODEX_GATEWAY_API_KEY"
```

Make `CODEX_GATEWAY_API_KEY` available to the Codex process. Set `base_url`
separately to route inference through the gateway. If you omit it, Codex uses the
default OpenAI endpoint for the current authentication mode.

Discovery requires API-key, command-backed, or Codex-backend authentication.
Native gateway OAuth or custom headers alone don't trigger it.

Coordinate catalog updates with your provider when your approved models change. Restart the client after
changing its configuration.

Remove any effective `model_catalog_json` setting, including one enforced through
`requirements.toml`. It takes precedence over the remote URL and prevents fetching.

#### Distribute a local catalog

Use `model_catalog_json` to load the provider-supplied file at startup. A local custom
catalog replaces the bundled catalog.

Set the gateway alias, catalog `slug`, and Codex `model` to `company-coding-model`. Add these settings before the first TOML table in the Codex configuration you distribute, using the file's actual absolute path:

```toml
model = "company-coding-model"
model_catalog_json = "/absolute/path/to/gateway-models.json"
```

Restart the CLI or desktop app after changing the catalog because Codex loads it at startup.

### Verify model routes

For each model, verify the route with a real Responses request and gateway
records. A `/v1/models` response can help discover names but doesn't prove that a
model supports the required request and tool behavior.

Model routing and tool authorization are separate parts of the rollout. Configure
MCP connections, plugin distribution, and their policies separately.

<a id="issue-a-test-credential"></a>
<a id="issue-developer-credentials"></a>

## Choose authentication

### Native gateway OAuth

1. Register a public OAuth client that supports authorization code with PKCE, and
   approve the users or groups that can sign in.
2. Configure the gateway to validate the issued access token in the selected
   cookie or custom header. Apply the approved models, rate limits, and budgets
   to each user's identity.
3. Follow [native gateway
   OAuth](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#use-native-gateway-oauth) to collect
   the authorization and token URLs, public client ID, scopes, optional resource,
   token delivery settings, and any fixed redirect port. Register the matching
   loopback redirect URI with your identity provider.
4. Test browser sign-in, token refresh, and access revocation with a test user on
   the CLI or desktop app you plan to deploy. Confirm that the browser can reach
   the callback, including for remote CLI users.

Users sign in individually. You distribute OAuth configuration, not a client
secret, gateway API key, or helper executable. Keep upstream provider credentials
on the gateway.

### API keys or credential helpers

1. Issue one scoped gateway credential per developer so you can attribute usage
   and revoke access individually.
2. Set the approved models, rate limits, budget, expiration, and renewal period
   for each credential.
3. Deliver credentials through your secret manager or an installed credential
   helper. Keep upstream provider and gateway administrator credentials off
   developer machines.
4. If you use a helper, follow the
   [command-backed authentication contract](https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers)
   and test token retrieval and refresh before distribution.
5. Tell developers how to renew their credentials and whom to contact for help.

<a id="verify-responses-support"></a>
<a id="test-the-client-and-gateway"></a>

## Test Codex through the gateway

Before distributing anything, follow [Configure the provider](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#configure-the-provider) to configure one isolated test user with the provider block and authentication method you plan to distribute.

If the gateway serves the model catalog, confirm it returns a Codex-compatible `models` array. For OpenAI inference using the user's credential, confirm the gateway forwards the required ChatGPT headers to the Codex backend.

Record the client version, operating system, provider ID, model alias, and authentication method for your pilot. Run the checks below from each CLI or desktop surface you plan to support. If you offer both gateway-only authentication and gateway authentication alongside ChatGPT sign-in, test each combination separately.

| Check                   | Action                                                                                                       | Passing evidence                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Effective configuration | Inspect the configuration layers and confirm the intended provider, model, and requirements.                 | The pilot uses the distributed settings. User or profile defaults do not select a different route.                                                                     |
| Connection              | Follow [Verify the connection](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#verify-the-connection).                | The expected provider and alias are active, the test prompt succeeds, and gateway logs identify the test user.                                                         |
| Streaming               | Ask for a short multi-paragraph answer.                                                                      | Text arrives incrementally and the active transport emits `response.completed`. Test HTTP separately to verify that the gateway forwards SSE events without buffering. |
| Local tool loop         | In a disposable folder with read-only permissions, ask Codex to list the top-level files and summarize them. | Codex issues a local tool call, returns the result, and produces a final answer without edits.                                                                         |
| Follow-up               | Ask a follow-up in the same thread.                                                                          | The answer uses the prior turn; the gateway accepts replayed input. If WebSocket or incremental transport is enabled, it also preserves `previous_response_id`.        |
| Errors and attribution  | Repeat with an intentionally invalid test alias or expired test credential.                                  | The client receives a useful routing or authentication error, and valid requests remain attributed to the test user.                                                   |

If automatic approval is enabled, use a disposable test folder to trigger a tool action that requires review under your intended policy. Confirm that the gateway handles the review request and that the client applies the approval decision. A read-only tool call that needs no approval does not test this path. Record any unsupported workflow before expanding the pilot.

If the rollout changes the provider for existing users, test a new conversation and a conversation created before the change on each supported client. Record whether users can view, continue, or branch the existing conversation, and give them a recovery procedure for any blocked workflow. Don't assume that changing the default provider migrates conversation history.

After these checks succeed, prepare the [developer handoff](#hand-developers-the-configuration-values).

## Distribute the configuration

To give every machine the same connection path, distribute the gateway base URL,
provider ID, approved model alias, and authentication settings.

### What to distribute

For native gateway OAuth, distribute the provider and
`[model_providers.<id>.gateway_oauth]` tables from the [connection
guide](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#use-native-gateway-oauth), with the
registration values collected above. Keep `requires_openai_auth = false` and omit
`env_key`, `experimental_bearer_token`, and the command-backed `auth` table when
OAuth is the only gateway credential.

For a credential helper, distribute the following `config.toml` block through the
configuration layer you chose. Use a model recognized by your Codex version, or
supply the matching catalog described above. Install your token resolver at the
configured command path:

Put `model` and `model_provider` before the first TOML table. If you set
  `model_catalog_json`, keep it there too. TOML treats keys after
  `[model_providers...]` as part of that table, not as top-level Codex
  configuration.

```toml
model = "gpt-6-sol"
model_provider = "enterprise-gateway"
web_search = "disabled"

[model_providers.enterprise-gateway]
name = "Organization Gateway"
base_url = "https://gateway.example.com/v1"
wire_api = "responses"

[model_providers.enterprise-gateway.auth]
command = "/usr/local/bin/fetch-codex-gateway-token"
args = ["print-token"]
timeout_ms = 30000
refresh_interval_ms = 300000
```

For a short-lived static test key, remove the auth block and put `env_key = "CODEX_GATEWAY_API_KEY"` inside `[model_providers.enterprise-gateway]` and set that variable outside TOML. Do not combine `env_key` with command-backed auth.

### Distribute defaults and requirements

If your users don't sign in to Codex with ChatGPT, you can [distribute team settings from your own server](https://learn.chatgpt.com/docs/enterprise/configuration-server). Codex fetches those settings independently of how you route model requests.

Use [Configuration precedence](https://learn.chatgpt.com/docs/config-file/config-basic#configuration-precedence)
to choose where to distribute defaults. For enforced settings and macOS MDM
payloads, see [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration#admin-enforced-requirements-requirementstoml).

For host-wide defaults on macOS or Linux, use `/etc/codex/config.toml`. On
Windows, place `config.toml` in `%ProgramData%\OpenAI\Codex\`. Users and
profiles can override these defaults. The linked references describe supported
requirements and their file locations.

Distribute any referenced helper executables and local catalog files separately.

To enforce a remote catalog URL, put the complete provider definition in
`requirements.toml` under `[model_providers.<id>]`. An enforced provider
definition replaces the matching provider table from ordinary configuration;
include its `base_url`, authentication settings, and other required fields.
Use the `model_provider` requirement when you also need to enforce provider
selection.

`model_catalog_json` points to a local JSON file. If you enforce it through
`requirements.toml`, the requirement pins the path; it doesn't distribute the
file. Put the catalog at that absolute path before Codex starts.

Write resolved absolute Windows paths in TOML. Codex doesn't expand
`%ProgramData%` inside `model_catalog_json` or provider auth `command` values. For
example, use these paths only if your deployment placed the files there:

```toml
model_catalog_json = 'C:\ProgramData\OpenAI\Codex\models.json'

[model_providers.enterprise-gateway.auth]
command = 'C:\ProgramData\OpenAI\Codex\fetch-gateway-token.cmd'
args = ["print-token"]
```

A CLI inside WSL reads Linux paths and Linux `CODEX_HOME`; it doesn't automatically
inherit native Windows configuration.

### Distribute routing headers

If your gateway routes requests by configuration or tool, add the headers it expects to the provider in your managed `requirements.toml`. The following example supplies a routing configuration ID and identifies Codex as the client:

```toml
[model_providers.enterprise-gateway.http_headers]
x-portkey-config = "<gateway-routing-config-id>"
x-portkey-metadata = '{"tool_id":"codex"}'
```

Use `env_http_headers` for header values supplied by the client environment. Send a test request and confirm the selected route in gateway logs. See [Custom model providers](https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers) for header options.

### Hand developers the configuration values

Give developers one setup path that matches the pilot you tested. Include the following information even when you distribute configuration centrally:

| Handoff item             | What to provide                                                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Approved client          | The client, version, operating system, and installation or update instructions used in the pilot.                                                                                                                    |
| Configuration delivery   | Whether settings are already managed or require local setup; identify any helper or catalog file installed separately.                                                                                               |
| Expected connection      | The provider ID, model alias, and gateway URL, including its API path. Explain which values users may change.                                                                                                        |
| Sign-in steps            | Whether users must sign in to a ChatGPT workspace, authenticate to the gateway, or do both. Name the required workspace and gateway authentication method.                                                           |
| Credentials and catalogs | The OAuth registration values, credential environment variable, or installed helper configuration, plus any catalog URL or resolved local path. Deliver secrets through your approved secret-distribution mechanism. |
| Verification and support | The [connection test](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#verify-the-connection), expected result, gateway owner, and information to include when reporting a failure.                                            |

For managed machines, send developers to [Check for an existing configuration](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#check-for-an-existing-configuration). For manual setup, send them to [Configure the provider](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#configure-the-provider).

Include your tested instructions for existing conversations if this rollout changes the provider. Keep the previous working configuration available to the rollout owner in case the pilot exposes a problem.

Manual setup is not an enforcement channel. Project-local `.codex/config.toml` cannot override sensitive provider or authentication routing keys.

<a id="verify-the-user-connection"></a>
<a id="verify-and-operate-the-rollout"></a>

## Verify from a developer machine

To confirm that the distributed settings reached a developer machine:

1. Confirm that the approved client and any required helper or catalog files are installed. Restart Codex and complete the sign-ins in your handoff.
2. Confirm the expected provider and model. In the CLI, use `/status`. Use [`/debug-config`](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-inspect-config-layers-with-debug-config) to inspect configuration layers when the effective settings differ from the handoff.
3. Run the short test in [Connect to a gateway](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#verify-the-connection).
4. Ask one follow-up to confirm continuation, then check the gateway logs for that
   developer's request.

Expand access after the pilot passes on the clients and authentication combinations you support. Keep the tested configuration and results with your rollout instructions so you can repeat the checks after client, gateway, or policy updates.

<a id="troubleshoot-the-connection"></a>

### Troubleshoot rollout failures

Use the issue to find the configuration, credential, or gateway layer that needs attention:

| Issue                                            | Remediation                                                                                                                                                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expected provider is missing after restart.      | Inspect the winning configuration layer. User or profile configuration can override system defaults.                                                                                                                            |
| Authentication fails for every user.             | Check gateway authentication and the upstream provider credential; identify which service rejected the request.                                                                                                                 |
| Authentication fails for one user.               | Check that user's identity-provider access, gateway credential, or token resolver.                                                                                                                                              |
| Streaming stalls.                                | Inspect gateway buffering and terminal `response.completed` forwarding.                                                                                                                                                         |
| A model is missing or uses generic capabilities. | For a custom alias, confirm the gateway alias, Codex `model`, and catalog `slug` match. Check the [catalog](#use-a-model-catalog-for-custom-names) path and compatibility with the installed Codex version, then restart Codex. |
| A Windows path fails.                            | Use resolved absolute paths. In TOML, use single-quoted strings for Windows paths with single backslashes.                                                                                                                      |

## Reuse an existing gateway deployment

If your organization already uses Claude Code through a gateway, you may be able
to reuse the gateway product, network path, logging, and Bedrock access. Add a
Codex-facing Responses route, credential, model aliases, and `config.toml` while
retaining the existing working setup. Claude client settings and the
`/v1/messages` contract don't configure Codex.

| Existing Claude deployment                                                                                         | Codex migration                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gateway product, DNS, TLS, private networking, logging, redaction, and monitoring                                  | Keep these services in place. Add a Codex-facing route that satisfies the [Gateway compatibility requirements](https://learn.chatgpt.com/docs/enterprise/gateway-compatibility).                                                         |
| Bedrock account, provider credential, IAM boundary, inference profiles, and credential rotation                    | Keep them only when they authorize the upstream models behind the new Codex aliases. The provider credential remains on the gateway.                                                                             |
| Claude `/v1/messages` route, Bedrock InvokeModel shape, Anthropic headers, and Claude-specific retries or errors   | Do not reuse these as proof of compatibility. Codex needs `POST /v1/responses`, Responses streaming, continuation, tool calls, and useful errors.                                                                |
| `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_API_KEY`, or `apiKeyHelper`                                                     | Codex does not support `apiKeyHelper`. Configure native gateway OAuth, a scoped key with `env_key`, or a Codex command-backed token resolver.                                                                    |
| Claude model names, `ANTHROPIC_MODEL`, `ANTHROPIC_DEFAULT_*_MODEL`, `modelOverrides`, and Bedrock profile mappings | Have your gateway team [choose model names and configure any custom aliases](#choose-model-names-and-routes). Use the model name and any [model catalog JSON](https://learn.chatgpt.com/docs/config-file/config-reference) they provide. |
| Claude `settings.json`, `managed-settings.json`, JSON `env` blocks, `plist`, or registry payloads                  | Keep the same MDM or configuration-management channel, but distribute Codex `config.toml` and supported `requirements.toml` values instead.                                                                      |

To migrate safely, complete these steps in order:

1. Inventory the current Claude path: gateway URL, credential source, required headers, model aliases, Bedrock profile mappings, and managed delivery channel.
2. Add a parallel Codex-facing Responses route and Codex model aliases.
3. Choose [native gateway OAuth, an API key, or a credential helper](#choose-authentication) and authorize one test user. For a static credential, expose it through `env_key`; for a helper, implement and test the Codex command-backed resolver contract.
4. [Configure the provider](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#configure-the-provider) for that developer using the authentication method you selected in step 3. For a managed rollout, translate the payload into the Codex paths and precedence described in [Roll out a gateway](#distribute-the-configuration).
5. Run the short connection check on the developer's actual CLI or desktop surface, then run the full streaming, continuation, tool-call, error, logging, and alias-routing checks in [Test Codex through the gateway](#test-the-client-and-gateway).
6. After the pilot passes, [distribute the configuration](#distribute-the-configuration) to the remaining developers.

## Model catalog reference

### Start with a local models.json file

First, [configure and select your gateway provider](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#configure-the-provider) on the machine where you run Codex.

Save this catalog as `models.json` on the machine running Codex. Replace
`gateway-model` with the exact model ID your gateway accepts. The display name
is the label users see in the model picker.

```json
{
  "models": [
    {
      "slug": "gateway-model",
      "display_name": "Gateway model",
      "base_instructions": "Help the user with their coding tasks.",
      "supported_reasoning_levels": [],
      "shell_type": "shell_command",
      "visibility": "list",
      "supported_in_api": true,
      "priority": 0,
      "support_verbosity": false,
      "truncation_policy": { "mode": "tokens", "limit": 10000 },
      "experimental_supported_tools": []
    }
  ]
}
```

For a larger example, see [Codex's model catalog](https://github.com/openai/codex/blob/main/codex-rs/models-manager/models.json).

Set `model_catalog_json` in `config.toml` to the absolute path of the file.
Restart Codex, select **Gateway model**, and send a request. Check that the
gateway received the model ID you set in `slug`.

For an alias of a bundled model, copy its full catalog entry for your Codex
version and change its `slug` and `display_name`. If the alias has no migration target, set `upgrade` to `null`. This preserves the model's
context window, reasoning options, and tool settings.

### Serve a catalog to clients

This page is for developers implementing the Codex Models format, which defines
the model catalog and powers the model picker. If you build an inference
provider, such as a gateway or cloud service, use this specification to let the
Codex desktop app and CLI discover your models and use their instructions and
capability settings.

If you administer an enterprise and want to control the model catalog, see the
[`model_catalog_url` configuration guidance](https://learn.chatgpt.com/docs/enterprise/roll-out-a-gateway#serve-a-remote-catalog).

To support the format, implement an authenticated catalog endpoint. Fetch your
upstream provider's current defaults for the requesting Codex version, apply
your overrides, and return the resulting catalog.



> Illustration: Cloud providers fetch OpenAI model defaults for the requesting Codex version. Gateways read catalogs from their cloud or upstream providers, then apply caller filtering, aliases, and supported settings. Codex reads the gateway catalog to show available models and use compatible settings. Reads are authenticated at each step, and catalog responses return toward Codex. Optional enterprise or custom model definitions can feed the gateway and need not originate from OpenAI.



### Implement the catalog endpoint

The default catalog endpoint is `/models` under the provider's `base_url`.
For example, with `base_url = "https://gateway.example.com/v1"`, Codex requests:

```http
GET /v1/models?client_version=0.162.1
Authorization: Bearer <PROVIDER_ACCESS_TOKEN>
```

Default discovery supports command-backed authentication and Codex-backend
authentication, such as ChatGPT. For a custom provider using API-key authentication
without command-backed authentication, set `model_providers.<id>.model_catalog_url`
explicitly to enable remote discovery. An API key alone doesn't trigger discovery
at the default path.

Use `model_catalog_url` to choose a full catalog URL, such as
`https://gateway.example.com/codex/models`. It can also point to the default
`/v1/models` endpoint. Codex uses this URL directly without appending `/models`.
For API-key discovery, keep `features.api_key_model_discovery` enabled; it is on
by default. Custom headers alone don't enable discovery.

Codex sends the selected provider's authentication and configured headers, and
appends `client_version` and any provider `query_params`. Host the catalog on a
service authorized to receive those credentials.

Authenticate the caller, fetch the corresponding upstream defaults, apply your
overrides, and return the complete `ModelsResponse` JSON directly. Give every
entry a unique, nonempty `slug`. For an explicit `model_catalog_url`, Codex rejects
redirects and responses larger than 1 MiB. Continue enforcing model access on
inference requests.

Remove any effective `model_catalog_json` setting from clients using the endpoint:
the local file takes precedence and prevents remote fetching.

### Match the client's schema

Read the `client_version` query parameter on the catalog request. Codex sends its
CLI version as `major.minor.patch`, with any prerelease suffix removed. For desktop
clients, this is the bundled CLI version.

Use the matching `rust-v<version>` tag in the public Codex repository, or the
exact source commit for a custom build. These links use `rust-v0.162.1`; select
the revision matching your client:

- Read the [`ModelsResponse` and `ModelInfo` response types](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/protocol/src/openai_models.rs) for the schema.
- Inspect the [bundled `models.json`](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json) for a complete example. This is catalog data, not a JSON Schema document.

The bundled file is a release snapshot. Fetch current defaults before producing
your catalog.

### Fetch current upstream defaults

Cloud providers serving OpenAI models fetch defaults from OpenAI. Gateways read
their cloud or upstream provider's catalog so they retain the deployed model's
settings and account and region availability. Pass the requesting Codex version
at each step, and authenticate separately to each endpoint.

To fetch defaults directly from OpenAI, call the Codex models endpoint with the
same `client_version`. For example, with an OpenAI API key:

```bash
curl --fail --silent --show-error \
  'https://chatgpt.com/backend-api/codex/models?client_version=0.162.1' \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

For a ChatGPT integration, use the caller's ChatGPT access token and
`ChatGPT-Account-ID` header when applicable. Use credentials authorized for the
upstream endpoint; your gateway's own API key doesn't authenticate to OpenAI.

Parse the full response, including its top-level `models` array. This endpoint
returns Codex metadata such as instructions, reasoning defaults, tool settings,
context limits, and service tiers. The public `/v1/models` endpoint doesn't
supply this catalog.

Refresh these defaults even when the Codex version hasn't changed. Keep requests
scoped to the intended upstream identity and honor response cache controls:
catalogs can depend on the caller's access. Keep your overrides separate so you
can reapply them to fresh defaults.

### Apply provider overrides

Change field values while preserving the version's response structure:

- Filter models to those the caller can use. Map each `slug` to a supported
  inference route, and adjust `display_name`, `description`, or `priority`.
  For an alias without a model migration, set `upgrade` to `null`.
- Set reasoning options, context limits, input modalities, and service tiers to
  values your model and route support. Keep defaults within the supported
  choices. For a route without service tiers, clear `service_tiers` and
  `additional_speed_tiers`, and set `default_service_tier` to `null`.
- Preserve upstream instructions and tool settings unless you have tested a
  replacement. Metadata doesn't add model capabilities or grant inference access.

For a gateway model alias, see how to
[supply model metadata](https://learn.chatgpt.com/docs/enterprise/roll-out-a-gateway#use-a-model-catalog-for-custom-names).
Test the resulting catalog with each supported Codex version.

### Use the public Rust types

Use crates from the same public Git tag or commit as the client's schema:

- Use [`codex-protocol`](https://github.com/openai/codex/tree/rust-v0.162.1/codex-rs/protocol) for `codex_protocol::openai_models::{ModelsResponse, ModelInfo}`. Parse with `serde_json::from_slice::<ModelsResponse>()`, edit `catalog.models`, and serialize the whole wrapper with `serde_json::to_vec()`. The wrapper handles compatibility fields for model instructions.
- Use [`codex-models-manager::bundled_models_response()`](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/src/lib.rs) to load that revision's static bundled catalog as a `ModelsResponse`. It doesn't fetch current upstream defaults.

## Related docs

- [Configure the provider](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#configure-the-provider)
- [MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Plugins](https://learn.chatgpt.com/docs/plugins)
- [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)