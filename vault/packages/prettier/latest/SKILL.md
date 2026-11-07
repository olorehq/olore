---
name: olore-prettier-latest
description: Local prettier documentation reference (latest). Prettier code formatter documentation. Use for code formatting, configuration, CLI usage, editor integration, plugin development, and language-specific options.
---

# prettier Documentation

Prettier code formatter documentation. Use for code formatting, configuration, CLI usage, editor integration, plugin development, and language-specific options.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/api.md` | API | Programmatic JavaScript API: format, check, resolveConfig, getFileInfo and related functions. |
| `contents/browser.md` | Browser | Running the standalone (non-Node) Prettier build in browsers, with ES module and UMD usage. |
| `contents/ci.md` | Run Prettier on CI | Running Prettier in CI, including GitHub Actions autofix setup. |
| `contents/cli.md` | CLI | The `prettier` command: options, --check/--write, file patterns, exit codes and ignore handling. |
| `contents/comparison.md` | Prettier vs. Linters | How Prettier differs from ESLint, TSLint and stylelint; formatting vs code-quality rules. |
| `contents/configuration.md` | Configuration File | Supported config file formats, precedence, overrides, and EditorConfig support. |
| `contents/editors.md` | Editor Integration | Setting up Prettier in VS Code, Emacs, Sublime, Atom, and other editors. |
| `contents/for-enterprise.md` | For Enterprise | Commercial support through the Tidelift subscription. |
| `contents/ignore.md` | Ignoring Code | Using .prettierignore and prettier-ignore comments for JS, JSX, HTML, CSS, Markdown, YAML and more. |
| `contents/index.md` | What is Prettier? | Overview of Prettier as an opinionated formatter and the languages it supports. |
| `contents/install.md` | Install | Installing Prettier locally, creating config and ignore files, and running it. |
| `contents/integrating-with-linters.md` | Integrating with Linters | Disabling conflicting linter style rules via eslint-config-prettier and similar configs. |
| `contents/option-philosophy.md` | Option Philosophy | Why Prettier has few options and will not add more. |
| `contents/options.md` | Options | Reference for all formatting options such as printWidth, tabWidth, semi, singleQuote, trailingComma, and parser. |
| `contents/plugins.md` | Plugins | Using, developing and testing plugins: languages, parsers, printers and options. |
| `contents/precommit.md` | Pre-commit Hook | Formatting staged files with lint-staged, husky, git-format-staged, or pre-commit. |
| `contents/rationale.md` | Rationale | Reasoning behind formatting choices: strings, empty lines, JSX, comments, decorators and more. |
| `contents/related-projects.md` | Related Projects | Community integrations for ESLint, stylelint, editors, and other tooling. |
| `contents/sharing-configurations.md` | Sharing configurations | Creating, publishing and consuming shareable Prettier configs. |
| `contents/technical-details.md` | Technical Details | How the printer works: AST to intermediate representation, based on Wadler's algorithm. |
| `contents/vim.md` | Vim Setup | Using Prettier in Vim via vim-prettier, Neoformat or ALE. |
| `contents/watching-files.md` | Watching For Changes | Running Prettier on file changes using onchange or similar watchers. |
| `contents/webstorm.md` | WebStorm Setup | Using Prettier in WebStorm and other JetBrains IDEs, including format on save. |
| `contents/why-prettier.md` | Why Prettier? | Benefits of adopting Prettier: enforcing style, saving review time, and supporting many languages. |

## When to use

Use this skill when the user asks about:
- Prettier formatting options (printWidth, tabWidth, semi, quotes, trailing commas) and config files
- Running Prettier via CLI, programmatic API, CI, pre-commit hooks, or in the browser
- Editor integration (VS Code, Vim, WebStorm) and linter integration (ESLint)
- Ignoring files or code, sharing configs, and writing plugins
- Prettier's rationale, philosophy, and how it works internally

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
