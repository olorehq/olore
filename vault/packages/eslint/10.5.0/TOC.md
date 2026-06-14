# ESLint Table of Contents

## Directory Map

```
contents/
├── use/                        # Using ESLint (25 files)
│   ├── configure/              # Configuration guides (11 files)
│   ├── core-concepts/          # Core concepts and glossary (2 files)
│   ├── formatters/             # Output formatters (1 file)
│   └── troubleshooting/        # Troubleshooting guides (3 files)
├── rules/                      # Built-in rule reference (312 files)
├── extend/                     # Extending ESLint (15 files)
└── integrate/                  # Node.js API and integration (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/use/getting-started.md` |
| Flat config setup | `contents/use/configure/configuration-files.md` |
| Migrate to v10 | `contents/use/migrate-to-10.0.0.md` |
| Rule reference | `contents/rules/` |
| CLI reference | `contents/use/command-line-interface.md` |
| Custom rules | `contents/extend/custom-rules.md` |
| Node.js API | `contents/integrate/nodejs-api.md` |
| Troubleshooting | `contents/use/troubleshooting/index.md` |

## Detailed Structure

### use/ (top-level, 8 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Getting started with ESLint installation and basic usage |
| `command-line-interface.md` | Full CLI reference for all options and flags |
| `integrations.md` | Editor integrations and third-party tool integrations |
| `mcp.md` | MCP server setup for AI coding assistants |
| `migrate-to-10.0.0.md` | Migration guide from v9 to v10 (breaking changes) |
| `rule-deprecation.md` | How rule deprecation works for users |
| `suppressions.md` | Suppressing lint warnings and errors inline |
| `version-support.md` | Version support policy |
| `index.md` | Overview of using ESLint |

### use/configure/ (11 files)

| File | Description |
|------|-------------|
| `configuration-files.md` | Flat config format (eslint.config.js) reference |
| `rules.md` | Configuring rules: severity, options, inline disabling |
| `plugins.md` | Using plugins in flat config |
| `ignore.md` | Ignoring files and directories |
| `language-options.md` | Setting parser options, globals, environments |
| `parser.md` | Using custom parsers (e.g., for TypeScript) |
| `combine-configs.md` | Composing and extending configs |
| `migration-guide.md` | Migrating from eslintrc to flat config |
| `debug.md` | Debugging config and rule issues |
| `index.md` | Configuration overview |

### use/core-concepts/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | Core concepts: rules, configs, plugins, parsers |
| `glossary.md` | Glossary of ESLint terms |

### use/formatters/ (1 file)

| File | Description |
|------|-------------|
| `index.md` | Built-in output formatters reference |

### use/troubleshooting/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Common troubleshooting issues and solutions |
| `circular-fixes.md` | Resolving circular fix conflicts |
| `v9-rule-api-changes.md` | Rule API changes in v9 affecting plugin compatibility |

### rules/ (312 files)

Each file documents one built-in ESLint rule. Files are named `{rule-name}.md`.

Selected notable rules:

| File | Description |
|------|-------------|
| `no-unused-vars.md` | Disallow unused variables |
| `no-console.md` | Disallow use of console |
| `no-undef.md` | Disallow undeclared variables |
| `prefer-const.md` | Require const over let when not reassigned |
| `eqeqeq.md` | Require === and !== |
| `no-var.md` | Require let or const instead of var |
| `semi.md` | Require or disallow semicolons |
| `quotes.md` | Enforce consistent quote style |
| `indent.md` | Enforce consistent indentation |
| `no-eval.md` | Disallow eval() |
| `curly.md` | Require curly braces for all control flow |
| `strict.md` | Require or disallow strict mode directives |
| `no-shadow.md` | Disallow variable declarations from shadowing outer scope |
| `no-param-reassign.md` | Disallow reassignment of function parameters |
| `no-magic-numbers.md` | Disallow magic numbers |
| `complexity.md` | Enforce maximum cyclomatic complexity |
| `max-len.md` | Enforce maximum line length |
| `no-restricted-syntax.md` | Disallow specified syntax |
| `prefer-template.md` | Require template literals over string concatenation |
| `arrow-body-style.md` | Require or disallow braces in arrow function bodies |

Full list: all 312 rule files in `contents/rules/` follow the pattern `{rule-name}.md`.

### extend/ (15 files)

| File | Description |
|------|-------------|
| `custom-rules.md` | Writing custom lint rules (full API reference) |
| `custom-rule-tutorial.md` | Step-by-step tutorial for creating a custom rule |
| `plugins.md` | Creating and publishing ESLint plugins |
| `shareable-configs.md` | Creating and publishing shareable configs |
| `custom-formatters.md` | Writing custom output formatters |
| `custom-parsers.md` | Writing custom parsers |
| `custom-processors.md` | Writing custom processors for non-JS files |
| `languages.md` | Language plugins for non-JavaScript languages |
| `plugin-migration-flat-config.md` | Migrating plugins to flat config format |
| `selectors.md` | AST node selectors for rules |
| `code-path-analysis.md` | Using code path analysis in rules |
| `scope-manager-interface.md` | Scope manager interface for rule authors |
| `stats.md` | Timing and stats for rules and plugins |
| `ways-to-extend.md` | Overview of all extension points |
| `index.md` | Extending ESLint overview |

### integrate/ (3 files)

| File | Description |
|------|-------------|
| `nodejs-api.md` | Node.js API (ESLint class, Linter class) |
| `integration-tutorial.md` | Tutorial for integrating ESLint into tools/editors |
| `index.md` | Integration overview |
