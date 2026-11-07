# Build skills

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use agent skills to extend ChatGPT and Codex with task-specific capabilities. A
skill packages instructions, resources, and optional scripts so either product
can follow a workflow reliably. Skills build on the
[open agent skills standard](https://agentskills.io).

Skills are the authoring format for reusable workflows. Plugins distribute
reusable skills and connectors through the universal plugin directory shared
by ChatGPT and Codex. Plugins work in Chat and Work across ChatGPT on the web,
desktop, and mobile, in Codex in the ChatGPT desktop app, and through Codex
CLI. Use skills to design the workflow itself, then package it as a
[plugin](https://developers.openai.com/plugins/build/plugins) when you want
other people to install it.

Standalone skills are available in the ChatGPT desktop app, Codex CLI, and IDE
extension. Skills bundled in plugins are also available in Chat and Work across
ChatGPT on the web, desktop, and mobile.

In the ChatGPT desktop app, open **Skills** in the sidebar to view and explore skills
created across your projects.


  

> Illustration: Skills picker showing available skills in the ChatGPT desktop app




Skills use **progressive disclosure** to manage context efficiently. ChatGPT and
Codex start with each skill's name and description, then load the full
`SKILL.md` instructions when they decide to use that skill.

In Codex, the initial list also includes each skill's file path. By default,
this list uses at most 2% of the model's
context window, or 8,000 characters when the context window is unknown. If many
skills are installed, Codex shortens skill descriptions first. For large skill
sets, Codex may omit some skills from the initial list and show a warning.

Use [`skills.max_context_tokens`](https://learn.chatgpt.com/docs/config-file/config-reference) to set a
different budget, up to 10,000 tokens.

This budget applies only to the initial skills list. When Codex selects a skill, it still reads the full SKILL.md instructions for that skill.

A skill is a directory with a `SKILL.md` file plus optional scripts and references. The `SKILL.md` file must include `name` and `description`.

<FileTree
  class="mt-4"
  tree={[
    {
      name: "my-skill/",
      open: true,
      children: [
        {
          name: "SKILL.md",
          comment: "Required: instructions + metadata",
        },
        {
          name: "scripts/",
          comment: "Optional: executable code",
        },
        {
          name: "references/",
          comment: "Optional: documentation",
        },
        {
          name: "assets/",
          comment: "Optional: templates, resources",
        },
        {
          name: "agents/",
          open: true,
          children: [
            {
              name: "openai.yaml",
              comment: "Optional: appearance and dependencies",
            },
          ],
        },
      ],
    },

]}
/>

<a id="how-codex-uses-skills"></a>

## How ChatGPT and Codex use skills

ChatGPT and Codex can activate skills in two ways:

1. **Explicit invocation:** Include the skill directly in your prompt. In
   ChatGPT, type `@` to select a skill. In Codex CLI or the IDE extension, run
   `/skills` or type `$` to mention a skill.
2. **Implicit invocation:** ChatGPT or Codex can choose a skill when your task
   matches the skill `description`.

Because implicit matching depends on `description`, write concise descriptions
with clear scope and boundaries. Front-load the key use case and trigger words
so a host can still match the skill if descriptions are shortened.

## Create a skill

If you already know the workflow and it's easier to show than describe, use
[Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay). The recorder captures the
workflow, inspects the steps, and drafts a reusable skill from the
demonstration.

If you want to describe the skill instead, use the built-in creator. In ChatGPT
Work, invoke it as `@skill-creator`. In Codex, invoke it as:

```text
$skill-creator
```

The creator asks what the skill does, when it should trigger, and whether it should stay instruction-only or include scripts. Instruction-only is the default.

You can also create a skill manually by creating a folder with a `SKILL.md` file:

```md
---
name: skill-name
description: Explain exactly when this skill should and should not trigger.
---

Skill instructions for ChatGPT or Codex to follow.
```

Codex detects skill changes automatically. If an update doesn't appear, restart Codex.

<a id="where-to-save-skills"></a>

## Where Codex loads local skills

Codex reads skills from repository, user, admin, and system locations. For repositories, Codex scans `.agents/skills` in every directory from your current working directory up to the repository root. If two skills share the same `name`, Codex doesn't merge them; both can appear in skill selectors.

| Skill Scope | Location                                                                                                  | Suggested use                                                                                                                                                                                        |
| :---------- | :-------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REPO`      | `$CWD/.agents/skills` <br /> Current working directory: where you launch Codex.                           | If you're in a repository or code environment, teams can check in skills relevant to a working folder. For example, skills only relevant to a microservice or a module.                              |
| `REPO`      | `$CWD/../.agents/skills` <br /> A folder above CWD when you launch Codex inside a Git repository.         | If you're in a repository with nested folders, organizations can check in skills relevant to a shared area in a parent folder.                                                                       |
| `REPO`      | `$REPO_ROOT/.agents/skills` <br /> The topmost root folder when you launch Codex inside a Git repository. | If you're in a repository with nested folders, organizations can check in skills relevant to everyone using the repository. These serve as root skills available to any subfolder in the repository. |
| `USER`      | `$HOME/.agents/skills` <br /> Any skills checked into the user's personal folder.                         | Use to curate skills relevant to a user that apply to any repository the user may work in.                                                                                                           |
| `ADMIN`     | `/etc/codex/skills` <br /> Any skills checked into the machine or container in a shared, system location. | Use for SDK scripts, automation, and for checking in default admin skills available to each user on the machine.                                                                                     |
| `SYSTEM`    | Bundled with Codex by OpenAI.                                                                             | Includes `skill-creator` and `skill-installer`. Enabled by default.                                                                                                                                  |

Codex supports symlinked skill folders and follows the symlink target when scanning these locations.

These locations are for authoring and local discovery. When you want to
distribute reusable skills beyond a single repo, or optionally bundle them with
connectors, use [plugins](https://developers.openai.com/plugins/build/plugins).

## Distribute skills with plugins

Direct skill folders are best for local authoring and repo-scoped workflows. If
you want to distribute a reusable skill, bundle two or more skills together, or
ship a skill alongside a connector, package them as a
[plugin](https://developers.openai.com/plugins/build/plugins).

Plugins can include one or more skills. They can also optionally bundle
registered MCP server connections, bundled MCP server configuration, and
presentation assets in a single package.

## Install curated skills for local use

To add curated skills beyond the built-ins for your own local Codex setup, use `$skill-installer`. For example, to install the `$linear` skill:

```bash
$skill-installer linear
```

You can also prompt the installer to download skills from other repositories.
Codex detects newly installed skills automatically; if one doesn't appear,
restart Codex.

Use this for local setup and experimentation. For reusable distribution of your
own skills, prefer plugins.

## Enable or disable local Codex skills

Use `[[skills.config]]` entries in `~/.codex/config.toml` to disable a skill without deleting it:

```toml
[[skills.config]]
path = "/path/to/skill/SKILL.md"
enabled = false
```

Use exactly one selector per entry. An absolute `path` matches one
`SKILL.md` file. A `name` matches every skill with that name. When more than
one entry matches a skill, the last matching entry wins.

To turn off all bundled system skills for the current project, add this setting
to its trusted `.codex/config.toml`:

```toml
[skills.bundled]
enabled = false
```

Restart Codex after changing the configuration.

## Optional metadata

Add `agents/openai.yaml` to configure UI metadata in the [ChatGPT desktop app](https://learn.chatgpt.com/docs/app), to set invocation policy, and to declare tool dependencies for a more seamless experience with using the skill.

```yaml
interface:
  display_name: "Optional user-facing name"
  short_description: "Optional user-facing description"
  icon_small: "./assets/small-logo.svg"
  icon_large: "./assets/large-logo.png"
  brand_color: "#3B82F6"
  default_prompt: "Optional surrounding prompt to use the skill with"

policy:
  allow_implicit_invocation: false

dependencies:
  tools:
    - type: "mcp"
      value: "openaiDeveloperDocs"
      description: "OpenAI Docs MCP server"
      transport: "streamable_http"
      url: "https://developers.openai.com/mcp"
```

`allow_implicit_invocation` (default: `true`): When `false`, Codex won't implicitly invoke the skill based on user prompt; explicit `$skill` invocation still works.

## Best practices

- Keep each skill focused on one job.
- Prefer instructions over scripts unless you need deterministic behavior or external tooling.
- Write imperative steps with explicit inputs and outputs.
- Test prompts against the skill description to confirm the right trigger behavior.

For more examples, see
[GitHub CI repair](https://github.com/openai/skills/tree/main/skills/.curated/gh-fix-ci),
[PDF](https://github.com/openai/skills/tree/main/skills/.curated/pdf),
[Linear](https://github.com/openai/skills/tree/main/skills/.curated/linear),
[openai/skills](https://github.com/openai/skills), and the
[agent skills specification](https://agentskills.io/specification). For
installable distribution, prefer [plugins](https://developers.openai.com/plugins/build/plugins).