# Gateway compatibility requirements

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

These requirements cover the API/provider credential path through a gateway.
For gateways that forward ChatGPT workspace requests, see [Sign in with
ChatGPT through a gateway](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway#enable-chatgpt-sign-in-recommended).

For this path, the gateway must preserve the Responses API behavior described here:
endpoints, streaming, continuation, tool calls, authentication, routing, and
useful errors.

To roll out a gateway, see [Roll out a
  gateway](https://learn.chatgpt.com/docs/enterprise/roll-out-a-gateway). To configure a developer
  machine, see [Use API/provider
  credentials](https://learn.chatgpt.com/docs/enterprise/connect-to-a-gateway).

## Requests and endpoints

Configure a gateway provider with `wire_api = "responses"`. For a base URL such
as `https://gateway.example.com/v1`, the gateway must accept
`POST /v1/responses` and preserve the request and response fields the client uses.
A working Chat Completions or Anthropic Messages endpoint doesn't establish
Responses compatibility.

Health and model-list endpoints are optional operational aids. They don't exercise
a Codex conversation or prove tool support.

## Streaming

Forward server-sent events (SSE) incrementally rather than buffering the entire
answer. Preserve event types and payloads, including the successful terminal
`response.completed` event. Forward error and failure events so the client can
distinguish a failed response from a stalled connection.

Verify the full stream through load balancers and reverse proxies as well as the
gateway. A text reply without a completed stream is insufficient.

## Conversation continuation

Preserve replayed conversation input across follow-up turns. The gateway must
accept the prior messages, tool calls, and tool results needed for the next turn.

If you enable WebSocket or incremental transport, verify its
`previous_response_id` behavior too. A stateless HTTP Responses path can use
replayed input without requiring that continuation mechanism.

## Tools

Preserve function-call items and their matching `function_call_output` items,
including the identifiers that associate calls with results. The full loop must
work: Codex receives a call, executes the tool, submits its result, and receives a
final answer.

A successful text request doesn't verify this loop. Test the actual models and
client features you plan to enable. A gateway accepting a request field doesn't
prove that its upstream model implements the corresponding capability.

## Authentication and headers

Support the client authentication mechanism selected for the deployment:
`env_key` or command-backed bearer tokens, or `env_http_headers` for credentials
sent in a custom header. Use environment variables for secret header values;
don't hard-code them in configuration. See the
[custom provider reference](https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers)
for the configuration and credential-helper contract.

Authenticate developers separately from the gateway's upstream provider identity.
Keep administrator keys and upstream credentials on the gateway. Preserve the
headers your routing and attribution depend on, and test credential expiration,
renewal, and revocation.

## Model routing and metadata

Each Codex-facing model name must route to the intended upstream model. Verify
the route in gateway records rather than relying on the model's self-description.

Use a name recognized by the deployed Codex version, or
[supply a matching catalog for a custom alias](https://learn.chatgpt.com/docs/enterprise/roll-out-a-gateway#supply-metadata-for-a-custom-alias).
Review model availability and migration metadata too: any replacement model must
route through the gateway. For an organization-owned alias without a migration,
set its catalog entry's `upgrade` to `null`. Catalog metadata informs client behavior;
it doesn't add capabilities to a model
or create gateway routes. Verify context limits, reasoning options, and tools
against the actual upstream model and provider. A generic gateway connection
doesn't automatically receive the metadata adjustments made by Codex's built-in
provider integrations.

### Recognized model names

Use the exact model name recognized by your deployed Codex version as the gateway
alias and Codex `model`. Confirm that the upstream provider supports the model
and your organization approves it.

Check `codex --version` and select the matching `rust-v<version>` tag in the [Codex model catalog](https://github.com/openai/codex/blob/main/codex-rs/models-manager/models.json).
For a custom build, use its source commit; for desktop deployments, match the
bundled CLI version. Check the entries' `slug` values to find the names that
version recognizes. If the gateway changes the model's capabilities, supply
catalog metadata that reflects those differences even when the name is recognized.

## Errors

Preserve useful distinctions between client authentication errors, unknown model
routes, rate limits, and upstream failures. Don't collapse all failures into a
generic `500` response. Return enough information to diagnose the failing layer
without exposing tokens, provider credentials, or sensitive request content.

## Data and tool boundaries

Model traffic follows this path:

```text
Codex client -> LLM gateway -> model provider
```

The client authenticates to the gateway with a developer credential. The gateway
uses its upstream provider credential to access the model. Prompts, source
excerpts, tool arguments, and tool results included in model requests can pass
through the gateway. Set logging, retention, redaction, access, and export controls
accordingly.

The model gateway does not route every connection made by Codex. Local commands
run in the client execution environment. MCP servers, plugin services, browser
and app interactions, and other enabled services can have separate network paths
and credentials. Model-provider configuration doesn't grant those permissions or
replace their network controls. See [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
and [MCP](https://learn.chatgpt.com/docs/extend/mcp) for those boundaries.

## Qualification checklist

Record evidence for each deployed combination of client, gateway, and model:

- Responses request and response fields.
- Incremental SSE delivery and successful terminal completion.
- Follow-up turns with replayed input.
- `previous_response_id` when the selected transport uses it.
- Function calls, matching results, and a final answer.
- Correct model routing and matching metadata.
- Per-user attribution, renewal, and revocation.
- Useful authentication, routing, rate-limit, and upstream errors.
- Redacted diagnostics and the intended logging policy.

Use the [rollout test procedure](https://learn.chatgpt.com/docs/enterprise/roll-out-a-gateway#test-the-client-and-gateway)
to collect this evidence before distributing the configuration.