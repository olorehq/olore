# Speed

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

You can increase model speed in Codex in exchange for higher usage.

## Fast mode

Fast mode speeds up supported models, including GPT-6.1 Sol, GPT-6.1 Terra,
GPT-6 Astra, GPT-6 Sol, and GPT-6 Luna, where available. For GPT-5.6, the speed increase
is 1.5x.

Use `/fast` in the CLI to toggle Fast mode. Use `/statusline` to show it in the
footer. You can also persist the default with `service_tier = "fast"` plus
`[features].fast_mode = true` in `config.toml`. Fast mode is available in the
ChatGPT desktop app, Codex CLI, and IDE extension when you sign in with ChatGPT.

For supported models, Fast mode uses included subscription limits at 2.5x the
Standard rate. Purchased credits and Enterprise pay-as-you-go usage are billed
at 2x the Standard rate.

<a id="astra-ultrafast"></a>

## Ultrafast mode

<UltrafastAnimation
  client:visible
  title="Ultrafast"
  label="Interactive Ultrafast starfield"
  controls={{
    pause: { label: "Pause animation" },
    play: { label: "Play animation" },
  }}
/>

Ultrafast supports GPT-6 Astra and GPT-6.1 Sol.

GPT-6 Astra Ultrafast generates tokens up to 8x faster than GPT-6 Astra in
Standard mode in Codex.

Ultrafast is available in Codex and ChatGPT Work on Pro $500 and eligible
Enterprise and Edu plans. On Pro $500, Ultrafast uses your included usage first,
then your available credits after that allowance runs out.

Ultrafast mode bills purchased credits and Enterprise pay-as-you-go usage at
6x the Standard rate. Ultrafast uses included subscription limits at 8x the
Standard rate.

For Enterprise workspaces, Ultrafast is off by default. Workspace owners can
enable access for selected users or the workspace through
[workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions).
Existing [per-user spend controls](https://learn.chatgpt.com/docs/enterprise/usage-limits) apply to
eligible Ultrafast usage.

## Availability and billing details

**ChatGPT Work and Codex share usage.** Both use the same
  pricing, credits, and usage limits. See [Codex pricing](https://learn.chatgpt.com/docs/pricing) for
  details.

See [Models](https://learn.chatgpt.com/docs/models) for model availability and
[Pricing](https://learn.chatgpt.com/docs/pricing#token-rates) for token rates.

### Ultrafast plan and workspace requirements

- Eligible Enterprise workspaces use credit-based or USD usage-based
  agreements. Usage is billed according to the workspace's agreement.
- Eligible Edu plans use credits. Legacy Enterprise plans that rely on rate
  limits instead of usage-based billing aren't supported.

Other self-serve plans don't have access to Ultrafast at launch, even with
purchased credits.

GPT-6.1 Sol Ultrafast supports inference residency in the United States and
Europe (EEA + Switzerland). GPT-6 Astra Ultrafast supports inference residency
in the United States only.

### API billing

With an API key, Codex uses API token pricing instead, and ChatGPT credit
multipliers don't apply.

For API availability, request configuration, and pricing, see
[Ultrafast mode in the API](https://developers.openai.com/api/docs/guides/ultrafast-mode).

## Retirement and migration

[GPT-5.5 retires](https://learn.chatgpt.com/docs/models#gpt-55-retirement) from Codex with ChatGPT
sign-in on October 14, 2026, at noon PDT (19:00 UTC). The OpenAI API and
Codex sessions authenticated with an API key aren't affected.