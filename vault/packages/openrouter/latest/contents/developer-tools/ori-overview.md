> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Ori

> Ori is OpenRouter's family of tools for putting agents to work with any model, in your terminal, in Slack, and on your desktop

[Ori](https://openrouter.ai/ori) is OpenRouter's family of tools for putting agents to work with any model. One CLI, `ori`, signs you in with your OpenRouter account and gives every tool access to the models, credits, and org settings you already have.

## The Ori tools

| Tool | What it does | Status |
| - | - | - |
| [Ori Harness](https://openrouter.ai/ori/harness) | Runs the agent CLI you already use, such as Claude Code, Codex, OpenCode, or Hermes, on OpenRouter with one command. See the [Ori Harness guide](https://openrouter.ai/docs/guides/ori/harness.md). | Available |
| Ori Code | OpenRouter's native terminal coding agent, built for working with many models. | Available |
| [Ori Eval](https://openrouter.ai/ori/eval) | Finds the best model for your project by running your agent on your own prompts and grading the results. See the [Ori Eval guide](https://openrouter.ai/docs/guides/ori/eval.md). | Available |
| Ori Intern | Slack agents that learn skills and run on any model. | Waitlist |
| Ori Desktop | Send tasks to any OpenRouter model from the Mac menu bar. | Waitlist |

Join the waitlist for Ori Intern and Ori Desktop at [openrouter.ai/ori](https://openrouter.ai/ori).

## Install Ori

Install the CLI, then sign in with your OpenRouter account. For interactive use you don't need an API key.

> [tab] macOS, Linux, WSL
>
> ```sh theme={null}
> curl -fsSL https://openrouter.ai/labs/ori/install.sh | bash
> ```

> [tab] Windows PowerShell
>
> ```powershell theme={null}
> irm https://openrouter.ai/labs/ori/install.ps1 | iex
> ```

```sh theme={null}
ori login
```

Then run the tool you want:

```sh theme={null}
ori claude          # Claude Code on OpenRouter (or codex, opencode, hermes, ...)
ori code -p "What is the best model for my support agent?"   # writes and runs an eval, then recommends a model
```

After the agent writes the eval, `ori eval` runs every `*.eval.ts` file in your project again, locally or in CI.

## Next steps

* [Ori Harness](https://openrouter.ai/docs/guides/ori/harness.md): run your agent CLI on OpenRouter.
* [Ori Eval](https://openrouter.ai/docs/guides/ori/eval.md): write and run evals that pick the best model.
* [Configuration](https://openrouter.ai/docs/guides/ori/configuration.md): settings, models, and defaults for every Ori tool.
* [Changelog](https://openrouter.ai/docs/guides/ori/changelog.md): what changed in each Ori release.
