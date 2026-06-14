# eslint Table of Contents

## Directory Map

```
contents/
├── use/                    # Usage docs (27 files)
│   ├── configure/          # Configuration guides (10 files)
│   ├── core-concepts/      # Core concepts and glossary (2 files)
│   ├── formatters/         # Output formatters (1 file)
│   └── troubleshooting/    # Troubleshooting guides (3 files)
├── extend/                 # Extension docs (16 files)
├── integrate/              # Integration and Node.js API (3 files)
└── rules/                  # All built-in rules reference (312 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/use/getting-started.md` |
| CLI reference | `contents/use/command-line-interface.md` |
| Flat config setup | `contents/use/configure/configuration-files.md` |
| Configure rules | `contents/use/configure/rules.md` |
| Core concepts | `contents/use/core-concepts/index.md` |
| Custom rules | `contents/extend/custom-rules.md` |
| Plugins | `contents/extend/plugins.md` |
| Node.js API | `contents/integrate/nodejs-api.md` |
| Troubleshooting | `contents/use/troubleshooting/index.md` |
| Migrate to v10 | `contents/use/migrate-to-10.0.0.md` |
| Migrate to v9 | `contents/use/migrate-to-9.0.0.md` |

## Detailed Structure

### use/ (11 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Installation and initial setup |
| `command-line-interface.md` | All CLI flags and options |
| `integrations.md` | Editor and tool integrations |
| `mcp.md` | MCP (Model Context Protocol) integration |
| `suppressions.md` | Inline disable comments and suppression |
| `rule-deprecation.md` | Deprecated rules policy |
| `migrate-to-10.0.0.md` | Migration guide for v10 |
| `migrate-to-9.0.0.md` | Migration guide for v9 |
| `migrate-to-8.0.0.md` | Migration guide for v8 |
| `version-support.md` | Version support policy |
| `index.md` | Use section overview |

### use/configure/ (10 files)

| File | Description |
|------|-------------|
| `configuration-files.md` | Flat config format (eslint.config.js) |
| `rules.md` | Configuring rules (severity, options) |
| `plugins.md` | Using plugins in flat config |
| `parser.md` | Custom parsers configuration |
| `language-options.md` | ECMAScript version, globals, environments |
| `ignore.md` | Ignoring files and directories |
| `combine-configs.md` | Composing and extending configs |
| `migration-guide.md` | Migrating from eslintrc to flat config |
| `debug.md` | Debugging configuration issues |
| `index.md` | Configure section overview |

### use/core-concepts/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | Core concepts overview |
| `glossary.md` | Terminology and definitions |

### use/formatters/ (1 file)

| File | Description |
|------|-------------|
| `index.md` | Built-in formatters reference |

### use/troubleshooting/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Troubleshooting overview |
| `circular-fixes.md` | Circular fix conflicts |
| `v9-rule-api-changes.md` | v9 rule API migration issues |

### extend/ (16 files)

| File | Description |
|------|-------------|
| `custom-rules.md` | Writing custom rules |
| `custom-rule-tutorial.md` | Step-by-step custom rule tutorial |
| `plugins.md` | Creating ESLint plugins |
| `shareable-configs.md` | Creating shareable configs |
| `custom-parsers.md` | Writing custom parsers |
| `custom-processors.md` | Writing custom processors |
| `custom-formatters.md` | Writing custom formatters |
| `languages.md` | Custom language support |
| `code-path-analysis.md` | Code path analysis API |
| `scope-manager-interface.md` | Scope manager interface |
| `selectors.md` | AST node selectors |
| `stats.md` | Stats object reference |
| `plugin-migration-flat-config.md` | Migrating plugins to flat config |
| `rule-deprecation.md` | Rule deprecation policy |
| `ways-to-extend.md` | Overview of extension points |
| `index.md` | Extend section overview |

### integrate/ (3 files)

| File | Description |
|------|-------------|
| `nodejs-api.md` | Node.js API (ESLint class, Linter, etc.) |
| `integration-tutorial.md` | Building an ESLint integration |
| `index.md` | Integrate section overview |

### rules/ (312 files)

All built-in ESLint rules are documented here, one file per rule. Key rules include:

| File | Description |
|------|-------------|
| `no-unused-vars.md` | Disallow unused variables |
| `no-undef.md` | Disallow undeclared variables |
| `no-console.md` | Disallow console statements |
| `no-var.md` | Require let/const instead of var |
| `prefer-const.md` | Require const where possible |
| `eqeqeq.md` | Require === instead of == |
| `no-debugger.md` | Disallow debugger statements |
| `no-eval.md` | Disallow eval() |
| `no-implicit-globals.md` | Disallow implicit global vars |
| `semi.md` | Require or disallow semicolons |
| `quotes.md` | Enforce quote style |
| `indent.md` | Enforce indentation |
| `no-fallthrough.md` | Disallow switch fallthrough |
| `no-redeclare.md` | Disallow variable redeclaration |
| `no-duplicate-case.md` | Disallow duplicate switch cases |

All 312 rule files follow the pattern `rules/{rule-name}.md`.
