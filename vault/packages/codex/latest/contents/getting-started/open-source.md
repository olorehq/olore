# Open Source

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

OpenAI develops key parts of Codex in the open. That work lives on GitHub so you can follow progress, report issues, and request improvements.

If you maintain a widely used open-source project or want to nominate maintainers stewarding important projects, you can also [apply to the Codex for OSS program](https://developers.openai.com/community/codex-for-oss) for API credits, ChatGPT Pro with Codex, and selective access to Codex Security.

## Open-source components

| Component                     | Where to find                                                                                             | Notes                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Codex CLI                     | [openai/codex](https://github.com/openai/codex)                                                           | The primary home for Codex open-source development      |
| Codex SDK                     | [openai/codex/codex-sdk](https://github.com/openai/codex/tree/main/sdk)                                   | SDK sources live in the Codex repo                      |
| Codex Security CLI            | [openai/codex-security](https://github.com/openai/codex-security)                                         | CLI for finding and validating security vulnerabilities |
| Codex Security TypeScript SDK | [openai/codex-security/sdk/typescript](https://github.com/openai/codex-security/tree/main/sdk/typescript) | TypeScript SDK for running Codex Security scans         |
| Codex App Server              | [openai/codex/codex-rs/app-server](https://github.com/openai/codex/tree/main/codex-rs/app-server)         | App-server sources live in the Codex repo               |
| Skills                        | [openai/skills](https://github.com/openai/skills)                                                         | Reusable skills that extend ChatGPT and Codex           |
| Plugins                       | [openai/plugins](https://github.com/openai/plugins)                                                       | Reusable plugins for ChatGPT and Codex                  |
| IDE extension                 | -                                                                                                         | Not open source                                         |
| Codex cloud                   | -                                                                                                         | Not open source                                         |
| Universal cloud environment   | [openai/codex-universal](https://github.com/openai/codex-universal)                                       | Base environment used by Codex cloud                    |

## Where to report issues and request features

Use the appropriate GitHub repository for bug reports and feature requests:

- Codex bug reports and feature requests: [openai/codex/issues](https://github.com/openai/codex/issues)
- Codex Security CLI and TypeScript SDK bug reports and feature requests: [openai/codex-security/issues](https://github.com/openai/codex-security/issues)
- Discussion forum: [openai/codex/discussions](https://github.com/openai/codex/discussions)

When you file an issue, include which component you are using (CLI, SDK, IDE extension, Codex cloud, or Codex Security) and the version where possible.

The `openai/codex` repository accepts community contributions through issues,
including bug reports, reproduction steps, and root-cause analysis. It doesn't
accept external code contributions or pull requests. Read its [contribution guidelines](https://github.com/openai/codex/blob/main/docs/contributing.md) for details.