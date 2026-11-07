# Codex CLI

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

## Inspect, edit, and run code from your terminal

Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal.

### Start here

- [Install Codex](#getting-started)
- [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)

### Why use Codex CLI

- **Work against your local repository:** Let Codex inspect files, make edits, and run the tools already installed on your machine.
- **Stay in control:** Choose the model, reasoning effort, permissions, and commands that fit the task.
- **Compose with scripts and CI:** Use Codex interactively or call codex exec from repeatable workflows and pipelines.

## Getting started

**Get started with Codex CLI.**

Install Codex, sign in, and run your first task from a project directory.

### 1. Install Codex

Choose one of these install methods:

#### macOS/Linux

Install the Codex CLI with the standalone installer for macOS and Linux.

**Install:**

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

**Update:**

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

#### Windows

Install the Codex CLI with the standalone installer for Windows.
Start these from a new PowerShell window.

**Install:**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

**Update:**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

#### npm

You can also install the Codex CLI with npm.

**Install:**

```bash
npm install -g @openai/codex
```

**Update:**

```bash
npm install -g @openai/codex
```

#### Homebrew

You can also install the Codex CLI with Homebrew.

**Install:**

```bash
brew install --cask codex
```

**Update:**

```bash
brew upgrade --cask codex
```

### 2. Run Codex and sign in

Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method.

[Review authentication options](https://learn.chatgpt.com/docs/auth)

### 3. Start your first task

Describe what you want to accomplish. For example, ask Codex to explain the project, make a focused change, or help debug an issue.

```text
Tell me about this project
```

Create Git checkpoints before and after a task so you can revert changes. See the [best practices](https://learn.chatgpt.com/guides/best-practices).

### Next steps

- [Explore the CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)
- [Configure Codex](https://learn.chatgpt.com/docs/configuration?surface=cli)
- [Automate with codex exec](https://learn.chatgpt.com/docs/non-interactive-mode)

## See what Codex CLI can do

Use one focused terminal loop for interactive work, automation, review, and delegation.

- [Keep the coding loop in your terminal](https://learn.chatgpt.com/docs/developer-commands?surface=cli): Start Codex in a repository to explore unfamiliar code, plan a change, edit files, and run your local development tools. Steer the active turn, inspect commands and diffs as they appear, and keep follow-up work in the same session.
- [Use skills and plugins](https://learn.chatgpt.com/docs/skills-and-plugins?surface=cli): Package repeatable instructions as skills, then add plugins to connect Codex to your team's tools and data without leaving the CLI.
- [Review changes before they ship](https://learn.chatgpt.com/docs/code-review?surface=cli): Run a dedicated review against uncommitted changes, a commit, or a base branch. Codex reports prioritized findings without modifying your working tree, so you can address risks before you commit or open a pull request.

## Build a terminal workflow around Codex

Learn about the CLI features you can use to resume sessions, add visual and web context, split up complex work, and connect Codex to your development tools.

- [**Return to a saved chat**](https://learn.chatgpt.com/docs/developer-commands?surface=cli#codex-resume) — `codex resume`: Reopen a recent chat from the current repository, or search across local chats when you need to return to older work.
- [**Bring visual context into the prompt**](https://learn.chatgpt.com/docs/image-inputs?surface=cli) — `codex --image`: Pass an error screenshot, architecture diagram, or design reference with the first prompt, or paste an image into the interactive composer.
- [**Split up a larger investigation**](https://learn.chatgpt.com/docs/agent-configuration/subagents) — `subagents`: Ask Codex to delegate focused work to specialized agents, then bring their findings back into the main terminal session.
- [**Search for current context**](https://learn.chatgpt.com/docs/web-search?surface=cli) — `codex --search`: Switch a run to live web search when a task depends on current releases, documentation, or external behavior. Search activity stays visible in the transcript.
- [**Move work to Codex cloud**](https://learn.chatgpt.com/docs/cloud#use-codex-cloud-from-the-cli) — `codex cloud`: Browse active and completed chats, submit work to a configured environment, and apply the result to your local repository from the terminal.
- [**Connect external tools with MCP**](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) — `codex mcp`: Add local or remote MCP servers, authenticate when needed, and inspect the tools available to the current session before Codex uses them.
- [**Set the boundaries for each run**](https://learn.chatgpt.com/docs/agent-approvals-security) — `/permissions`: Choose when Codex can edit files or run commands without asking, and inspect the active sandbox and writable roots before you continue.
- [**Fit Codex to your terminal**](https://learn.chatgpt.com/docs/cli-customization) — `codex completion`: Generate completions for your shell, choose a syntax theme, and open longer prompts in the editor configured by VISUAL or EDITOR.

## Use Codex CLI when…

- [You work from the terminal](https://learn.chatgpt.com/docs/developer-commands?surface=cli): Explore, edit, and run a repository in one focused loop.
- [You need scripting or CI](https://learn.chatgpt.com/docs/non-interactive-mode): Run a non-interactive command in a repeatable workflow.
- [You want a local code review](https://learn.chatgpt.com/docs/code-review?surface=cli): Inspect changes before you commit or open a pull request.
- [You want to hand work to the cloud](https://learn.chatgpt.com/docs/cloud#use-codex-cloud-from-the-cli): Launch a cloud chat and return to the terminal later.