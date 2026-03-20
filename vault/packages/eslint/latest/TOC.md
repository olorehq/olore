# ESLint Table of Contents

## Directory Map

```
contents/
├── use/                        # User-facing docs (35 files)
│   ├── configure/              # Configuration guides (8 files)
│   ├── core-concepts/          # Core concepts (2 files)
│   ├── formatters/             # Output formatters (1 file)
│   └── troubleshooting/        # Troubleshooting guides (3 files)
├── extend/                     # Extending ESLint (16 files)
├── integrate/                  # Node.js API & integration (3 files)
├── rules/                      # Built-in rule reference (~320 files)
├── contribute/                 # Contribution guidelines (17 files)
├── maintain/                   # Maintainer docs (6 files)
├── library/                    # UI component docs (13 files)
└── about/                      # About page (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/use/getting-started.md` |
| Configuration (flat config) | `contents/use/configure/configuration-files.md` |
| CLI reference | `contents/use/command-line-interface.md` |
| Rules reference | `contents/rules/` |
| Custom rules | `contents/extend/custom-rules.md` |
| Plugins | `contents/extend/plugins.md` |
| Node.js API | `contents/integrate/nodejs-api.md` |
| Troubleshooting | `contents/use/troubleshooting/index.md` |
| Migrate to v9 | `contents/use/migrate-to-9.0.0.md` |
| Migrate to v10 | `contents/use/migrate-to-10.0.0.md` |

## Detailed Structure

### use/ (35 files)

| File | Description |
|------|-------------|
| `use/getting-started.md` | Installation and quick start |
| `use/command-line-interface.md` | CLI flags and usage |
| `use/suppressions.md` | Disabling rules inline, eslint-disable |
| `use/integrations.md` | Editor integrations |
| `use/mcp.md` | MCP (Model Context Protocol) integration |
| `use/version-support.md` | Node.js version support policy |
| `use/migrate-to-10.0.0.md` | Migration guide to v10 |
| `use/migrate-to-9.0.0.md` | Migration guide to v9 |
| `use/migrate-to-8.0.0.md` | Migration guide to v8 |
| `use/index.md` | Use section index |

### use/configure/ (8 files)

| File | Description |
|------|-------------|
| `use/configure/configuration-files.md` | Flat config files (eslint.config.js) |
| `use/configure/rules.md` | Configuring rules (severity, options) |
| `use/configure/plugins.md` | Using plugins in flat config |
| `use/configure/parser.md` | Custom parsers (e.g., TypeScript) |
| `use/configure/language-options.md` | ecmaVersion, sourceType, globals |
| `use/configure/ignore.md` | Ignoring files and directories |
| `use/configure/combine-configs.md` | Composing and sharing configs |
| `use/configure/debug.md` | Debugging configuration |
| `use/configure/migration-guide.md` | Flat config migration guide |
| `use/configure/index.md` | Configure section index |

### use/core-concepts/ (2 files)

| File | Description |
|------|-------------|
| `use/core-concepts/index.md` | Core concepts overview |
| `use/core-concepts/glossary.md` | Terminology glossary |

### use/formatters/ (1 file)

| File | Description |
|------|-------------|
| `use/formatters/index.md` | Built-in output formatters |

### use/troubleshooting/ (3 files)

| File | Description |
|------|-------------|
| `use/troubleshooting/index.md` | Common issues and solutions |
| `use/troubleshooting/v9-rule-api-changes.md` | v9 rule API breaking changes |
| `use/troubleshooting/circular-fixes.md` | Circular fix detection |

### extend/ (16 files)

| File | Description |
|------|-------------|
| `extend/custom-rules.md` | Writing custom lint rules |
| `extend/custom-rule-tutorial.md` | Step-by-step custom rule tutorial |
| `extend/plugins.md` | Creating ESLint plugins |
| `extend/shareable-configs.md` | Creating shareable configurations |
| `extend/custom-parsers.md` | Writing custom parsers |
| `extend/custom-processors.md` | Writing custom processors |
| `extend/custom-formatters.md` | Writing custom output formatters |
| `extend/selectors.md` | AST node selectors |
| `extend/code-path-analysis.md` | Code path analysis API |
| `extend/scope-manager-interface.md` | Scope manager interface |
| `extend/ways-to-extend.md` | Overview of extension points |
| `extend/languages.md` | Custom language plugins |
| `extend/plugin-migration-flat-config.md` | Migrating plugins to flat config |
| `extend/stats.md` | Rule stats API |
| `extend/index.md` | Extend section index |

### integrate/ (3 files)

| File | Description |
|------|-------------|
| `integrate/nodejs-api.md` | Node.js API reference (ESLint, Linter classes) |
| `integrate/integration-tutorial.md` | Building integrations tutorial |
| `integrate/index.md` | Integrate section index |

### rules/ (~320 files)

Each file is named after the rule: `rules/{rule-name}.md`

Key rules by category:

**Possible Problems:** `no-console`, `no-debugger`, `no-unused-vars`, `no-undef`, `no-unreachable`, `no-dupe-keys`, `no-dupe-args`, `getter-return`, `no-import-assign`, `no-promise-executor-return`

**Suggestions:** `prefer-const`, `prefer-arrow-callback`, `prefer-destructuring`, `prefer-template`, `no-var`, `eqeqeq`, `curly`, `no-else-return`, `no-use-before-define`, `no-shadow`

**Layout & Formatting:** `indent`, `semi`, `quotes`, `comma-spacing`, `keyword-spacing`, `space-before-function-paren`, `object-curly-spacing`, `array-bracket-spacing`
