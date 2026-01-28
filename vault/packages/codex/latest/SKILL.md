---
name: olore-codex-latest
description: Local Codex documentation reference (latest). Use when asked about Codex CLI features, configuration, skills, slash commands, AGENTS.md, MCP integration, or rules.
---

# Codex Documentation

Codex CLI is OpenAI's open-source coding agent that runs locally from your terminal. It can read, change, and run code on your machine in the selected directory. Built in Rust for speed and efficiency.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/using-codex/cli/overview.md` | Codex CLI | Introduction to Codex CLI, setup instructions, and overview of key features including interactive mode, model control, image inputs, code review, web search, and scripting |
| `contents/using-codex/cli/features.md` | Codex CLI features | Detailed guide to CLI features including interactive mode, resuming conversations, models and reasoning, approval modes, and image inputs |
| `contents/using-codex/cli/command-line-options.md` | Command-line options | Reference for all command-line options and flags available in Codex CLI |
| `contents/using-codex/cli/slash-commands.md` | Slash commands | Complete guide to built-in slash commands like /model, /approvals, /status, /diff, /review, /compact, /mention, /new, /resume, /fork, and more |
| `contents/configuration/config-file/basic-configuration.md` | Basic configuration | Basic Codex configuration file settings in config.toml |
| `contents/configuration/config-file/sample-configuration.md` | Sample configuration | Sample configuration file examples for various use cases |
| `contents/configuration/rules.md` | Rules | Rules system for controlling which commands Codex can run outside the sandbox using prefix_rule() definitions |
| `contents/configuration/agents-md.md` | AGENTS.md | Custom instructions with AGENTS.md files for global and project-specific guidance, including discovery precedence and layering |
| `contents/configuration/custom-prompts.md` | Custom prompts | Creating custom prompts that behave like slash commands with arguments and metadata |
| `contents/configuration/mcp.md` | Model Context Protocol | MCP integration for connecting Codex to third-party tools and context like documentation, browsers, or Figma |
| `contents/configuration/skills/overview.md` | Agent Skills | Agent skills system for extending Codex with task-specific capabilities, including skill definition, installation, and scope |
| `contents/configuration/skills/create-skill.md` | Create custom skills | Step-by-step guide to creating custom skills using the skill-creator or manual SKILL.md files |

## When to use

Use this skill when the user asks about:
- Codex CLI setup, features, or workflows
- Interactive mode and terminal UI (TUI)
- Slash commands (/model, /approvals, /status, /diff, /review, etc.)
- Command-line options and flags
- Configuration files (config.toml)
- AGENTS.md files and custom instructions
- Agent skills system and creating custom skills
- Model Context Protocol (MCP) integration
- Rules for command execution control
- Custom prompts and automation
- Resuming conversations and session management
- Approval modes and security settings

## How to find information

1. Check Quick Reference above for the specific topic
2. Read `TOC.md` for complete file listing
3. Read specific files from `contents/{path}` for detailed information
