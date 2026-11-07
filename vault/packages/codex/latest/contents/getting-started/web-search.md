# Web search

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

ChatGPT includes a first-party web search tool. Treat all web results as
untrusted input.

<ContentModeSwitch group="codex-surface" id="app">

In the ChatGPT desktop app, ask for current information in a chat. ChatGPT records
search activity with the other tool calls in the transcript.

## Research a topic in Work

Use the Deep research plugin in the desktop app for an investigation across
multiple sources and a report you can review.

1. Switch to **Work** and open [**Plugins**](https://learn.chatgpt.com/docs/plugins?surface=app).
2. Select **Deep research**. Install or enable it if needed, then select
   **Try now** to start a Work chat.
3. Describe the question, scope, and result you need. Include relevant files
   or connected app context.
4. Review the report and its sources, then ask follow-up questions in the chat.

Plugin availability depends on your account and workspace settings.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="web">

In ChatGPT web, ask for current information or sources. Search results and
citations appear in the chat when ChatGPT uses web search. Workspace
settings can limit whether search is available.

## Research a topic in Work

Use deep research in Work for a question that needs investigation across
multiple sources and a report you can review.

1. Start a chat in **Work**.
2. Open the **+** menu and select **Deep research**, if it's available for
   your account and workspace.
3. Describe the question, scope, and result you need. Include relevant files
   or connected app context.
4. Review the report and its sources, then ask follow-up questions in the chat.

For example: "Research three approaches to reducing food waste in office
cafeterias. Compare the evidence, costs, and implementation requirements."

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

In the CLI, pass `--search` to fetch live results for one run:

```bash
codex --search "Summarize the latest release notes for this dependency"
```

Searches appear as `web_search` items in the interactive transcript and in
`codex exec --json` output.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

In the IDE extension, ask Codex to search while you work in the editor. The
extension uses the connected Codex host's search mode. Search activity appears
in the chat transcript.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

## Configure local web search

For local Codex chats, Codex enables cached search by default. Cached mode uses
an OpenAI-maintained index instead of fetching arbitrary pages live, which
lowers—but doesn't remove—prompt injection risk.

Web search is a hosted tool, separate from sandboxed local command networking.
It does not use the permission profile's network proxy or domain allowlist, and
it can remain available when command network access is disabled. Configure
search with `web_search`, `tools.web_search.allowed_domains`, and managed
`allowed_web_search_modes` as appropriate. Search-domain filters do not restrict
local command traffic, apps, connectors, or MCP servers.

Use live search when your task depends on the latest information. Set
`web_search = "live"` in `config.toml`. Set `web_search = "disabled"` to turn
the tool off. The `"indexed"` mode permits external web access only when the
search index gates the request. When Codex runs with full access, web search
defaults to live results. See [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic)
for config file locations and precedence.

### Search with a custom model provider

A custom model provider can opt in to standalone web search when it supports
a compatible search endpoint:

```toml
model_provider = "custom"
web_search = "live"

[model_providers.custom]
name = "Custom Responses provider"
base_url = "https://example.com/v1"
env_key = "CUSTOM_RESPONSES_API_KEY"
supports_standalone_web_search = true
```

Custom providers default to `supports_standalone_web_search = false`.
Standalone web search remains under development and is off by default.
Setting this provider capability doesn't enable the feature: the provider,
selected model, and runtime must also support standalone search. Workspace and
managed search restrictions still apply.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

For network boundaries that apply to Codex cloud environments, see [Internet
access](https://learn.chatgpt.com/docs/cloud/internet-access).

</ContentModeSwitch>