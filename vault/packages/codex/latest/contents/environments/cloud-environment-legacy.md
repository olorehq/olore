# Codex Cloud (Legacy)

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

**Codex Cloud (Legacy)** continues to support environments for Code Review and
  the Linear and GitHub integrations.

For the current experience on web, mobile, and desktop, see the [Cloud environments
guide](https://learn.chatgpt.com/docs/environments/cloud-environments).

Use environments to control what Codex installs and runs during cloud chats. For example, you can add dependencies, install tools like linters and formatters, and set environment variables.

Configure environments in [Codex settings](https://chatgpt.com/codex/settings/environments).

<a id="how-codex-cloud-tasks-run"></a>

## How Codex cloud chats run

When you submit a task:

1. Codex creates a container and checks out your repo at the selected branch or commit SHA.
2. Codex runs your setup script, plus an optional maintenance script when a cached container is resumed.
3. Codex applies your internet access settings. Setup scripts run with internet access. Agent internet access is off by default, but you can enable limited or unrestricted access if needed. See [agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access).
4. The agent runs terminal commands in a loop. It edits code, runs checks, and tries to validate its work. If your repo includes `AGENTS.md`, the agent uses it to find project-specific lint and test commands.
5. When the agent finishes, it shows its answer and a diff of any files it changed. You can open a PR or ask follow-up questions.

## Default universal image

The Codex agent runs in a default container image called `universal`, which comes pre-installed with common languages, packages, and tools.

In environment settings, select **Set package versions** to pin versions of Python, Node.js, and other runtimes.

For details on what's installed, see
  [openai/codex-universal](https://github.com/openai/codex-universal) for a
  reference Dockerfile and an image that can be pulled and tested locally.

While `codex-universal` comes with languages pre-installed for speed and convenience, you can also install additional packages to the container using [setup scripts](#manual-setup).

## Environment variables and secrets

**Environment variables** are set for the full duration of the chat (including setup scripts and the agent phase).

**Secrets** are similar to environment variables, except:

- They are stored with an additional layer of encryption and are only decrypted for task execution.
- They are only available to setup scripts. For security reasons, secrets are removed before the agent phase starts.

## Automatic setup

For projects using common package managers (`npm`, `yarn`, `pnpm`, `pip`, `pipenv`, and `poetry`), Codex can automatically install dependencies and tools.

## Manual setup

If your development setup is more complex, you can also provide a custom setup script. For example:

```bash
# Install type checker
pip install pyright

# Install dependencies
poetry install --with test
pnpm install
```

Setup scripts run in a separate Bash session from the agent, so commands like
  `export` do not persist into the agent phase. To persist environment
  variables, add them to `~/.bashrc` or configure them in environment settings.

## Container caching

Codex caches container state for up to 12 hours to speed up new chats and follow-ups.

When an environment is cached:

- Codex clones the repository and checks out the default branch.
- Codex runs the setup script and caches the resulting container state.

When a cached container is resumed:

- Codex checks out the branch specified for the chat.
- Codex runs the maintenance script (optional). This is useful when the setup script ran on an older commit and dependencies need to be updated.

Codex automatically invalidates the cache if you change the setup script, maintenance script, environment variables, or secrets. If your repo changes in a way that makes the cached state incompatible, select **Reset cache** on the environment page.

For Business and Enterprise users, caches are shared across all users who have
  access to the environment. Invalidating the cache will affect all users of the
  environment in your workspace.

## Internet access and network proxy

Internet access is available during the setup script phase to install dependencies. During the agent phase, internet access is off by default, but you can configure limited or unrestricted access. See [agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access).

Environments run behind an HTTP/HTTPS network proxy for security and abuse prevention purposes. All outbound internet traffic passes through this proxy.

## Agent Security command-network requirements

If your workspace manages command networking through Agent Security, check the environment's internet settings as well as the managed policy. See [Network isolation](https://learn.chatgpt.com/docs/agent-approvals-security#network-isolation) for how the controls apply to commands.