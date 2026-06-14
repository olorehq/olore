---
name: olore-agentskills-latest
description: Local agentskills documentation reference (latest). Agent Skills format documentation — use for creating SKILL.md files, understanding the specification, integrating skills support into AI coding agents, and following best practices for skill creation and evaluation.
---

# agentskills Documentation

Agent Skills is a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows. A skill is a folder containing a `SKILL.md` file with YAML frontmatter (`name` and `description`) plus Markdown instructions. Skills can bundle scripts, references, templates, and other resources.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/home.mdx` | Agent Skills Overview | What Agent Skills are, why they exist, and how the format works |
| `contents/specification.mdx` | Specification | Complete SKILL.md format spec — frontmatter fields, directory structure, progressive disclosure |
| `contents/clients.mdx` | Client Showcase | Agent products that support the Agent Skills format |
| `contents/skill-creation/quickstart.mdx` | Quickstart | Step-by-step tutorial to create and test your first skill |
| `contents/skill-creation/best-practices.mdx` | Best Practices | How to write well-scoped skills grounded in real domain expertise |
| `contents/skill-creation/evaluating-skills.mdx` | Evaluating Skills | Eval-driven iteration — designing test cases and measuring skill output quality |
| `contents/skill-creation/optimizing-descriptions.mdx` | Optimizing Descriptions | How to write descriptions that trigger reliably on the right prompts |
| `contents/skill-creation/using-scripts.mdx` | Using Scripts | Bundling and running shell commands and scripts inside a skill |
| `contents/client-implementation/adding-skills-support.mdx` | Adding Skills Support | How to implement Agent Skills support in an agent or dev tool |
| `contents/CLAUDE.md` | CLAUDE.md | Claude Code guidance for the agentskills repo |
| `contents/README.md` | README | Documentation site setup and publishing instructions |

## When to use

Use this skill when the user asks about:
- Creating or writing a SKILL.md file
- The Agent Skills specification or format requirements
- Best practices for skill descriptions, scoping, and structure
- Evaluating and testing skill quality with evals
- Optimizing skill descriptions for reliable triggering
- Using scripts inside skills
- Adding Agent Skills support to an AI agent or development tool
- Which agents or clients support the Agent Skills format

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
