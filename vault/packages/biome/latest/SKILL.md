---
name: olore-biome-latest
description: Local Biome documentation reference (latest). Biome is a fast JavaScript/TypeScript toolchain for formatting, linting, and more — a drop-in replacement for Prettier and ESLint.
---

# Biome Documentation

Biome is a performant web toolchain that formats, lints, and analyzes JavaScript, TypeScript, JSX, CSS, JSON, GraphQL, and HTML. It replaces Prettier and ESLint with a single fast binary.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Install and first run | `contents/guides/getting-started.mdx` |
| Configure biome.json | `contents/reference/configuration.mdx` |
| CLI commands | `contents/reference/cli.mdx` |
| Migrate from ESLint/Prettier | `contents/guides/migrate-eslint-prettier.mdx` |
| Browse lint rules | `contents/linter/rules/` |
| Formatter options | `contents/formatter/index.mdx` |
| Language support matrix | `contents/internals/language-support.mdx` |
| Editor integrations | `contents/editors/introduction.mdx` |

## When to use

Use this skill when the user asks about:
- Formatting JavaScript, TypeScript, JSX, CSS, JSON, or GraphQL with Biome
- Linting rules, enabling/disabling rules, rule categories, or rule options
- Configuring biome.json (extends, rules, formatter options, linter options)
- Migrating from Prettier, ESLint, or other tools to Biome
- CLI usage, CI integration, git hooks, or editor plugins
- GritQL patterns and custom plugins
- Assist actions like organizing imports or sorting keys
- Suppressing diagnostics or understanding error categories

## How to find information

1. **First**, read `TOC.md` for the complete file listing organized by directory
2. Identify the relevant section based on the user's question
3. Read specific files for details

**TOC.md contains all 572 files organized by directory — always check it first.**

For lint rule lookups, files in `contents/linter/rules/` follow the pattern `{no|use}-{rule-name}.mdx` — go directly to the file if you know the rule name.
