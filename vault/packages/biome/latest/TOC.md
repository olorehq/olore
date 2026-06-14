# Biome Table of Contents

## Directory Map

```
contents/
├── guides/              # Getting started, configuration, migration (8 files)
├── reference/           # CLI, configuration schema, diagnostics, reporters (7 files)
├── linter/              # Linter overview, plugins, domains (4 files)
│   ├── rules/           # Individual lint rule docs (508 files)
│   ├── css/             # CSS lint categories (2 files)
│   ├── graphql/         # GraphQL lint categories (2 files)
│   ├── html/            # HTML lint categories (2 files)
│   ├── javascript/      # JS lint categories (2 files)
│   └── json/            # JSON lint categories (2 files)
├── assist/              # Assist actions overview (2 files)
│   ├── actions/         # Individual assist actions (10 files)
│   ├── css/             # CSS assist (2 files)
│   ├── graphql/         # GraphQL assist (2 files)
│   ├── html/            # HTML assist (2 files)
│   ├── javascript/      # JS assist (2 files)
│   └── json/            # JSON assist (2 files)
├── formatter/           # Formatter overview (1 file)
├── analyzer/            # Suppressions reference (1 file)
├── editors/             # Editor integrations (3 files)
├── recipes/             # CI, git hooks, badges, plugins (5 files)
└── internals/           # Language support, versioning, credits (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install and first run | `contents/guides/getting-started.mdx` |
| Configure Biome | `contents/guides/configure-biome.mdx` |
| Migrate from ESLint/Prettier | `contents/guides/migrate-eslint-prettier.mdx` |
| Upgrade to Biome v2 | `contents/guides/upgrade-to-biome-v2.mdx` |
| CLI reference | `contents/reference/cli.mdx` |
| Configuration schema | `contents/reference/configuration.mdx` |
| Browse all lint rules | `contents/linter/rules/` |
| Linter overview | `contents/linter/index.mdx` |
| Formatter overview | `contents/formatter/index.mdx` |
| Editor integrations | `contents/editors/introduction.mdx` |
| Language support matrix | `contents/internals/language-support.mdx` |

## Detailed Structure

### guides/ (8 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Installation, first run, basic usage |
| `configure-biome.mdx` | Configuration file and options walkthrough |
| `migrate-eslint-prettier.mdx` | Migration guide from ESLint and Prettier |
| `upgrade-to-biome-v2.mdx` | Upgrade guide from Biome v1 to v2 |
| `integrate-in-vcs.mdx` | VCS (git) integration setup |
| `big-projects.mdx` | Monorepos and large project configuration |
| `manual-installation.mdx` | Manual and non-npm installation |
| `investigate-slowness.mdx` | Diagnosing and fixing performance issues |

### reference/ (7 files)

| File | Description |
|------|-------------|
| `cli.mdx` | Full CLI command reference |
| `configuration.mdx` | Complete biome.json configuration schema |
| `diagnostics.mdx` | Diagnostic categories and severity levels |
| `reporters.mdx` | Output reporters (JSON, GitHub, JUnit, etc.) |
| `gritql.mdx` | GritQL pattern language reference |
| `vscode.mdx` | VS Code extension reference |
| `zed.mdx` | Zed editor extension reference |

### linter/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Linter overview, enabling/disabling rules |
| `domains.mdx` | Lint rule domain groupings |
| `plugins.mdx` | Linter plugin system |
| `rules-sources.mdx` | Source mapping for ESLint/other rule equivalents |

### linter/rules/ (508 files)

Each file documents one lint rule with: summary, diagnostic category, options, examples, and fix type.

Sample rules:
| File | Description |
|------|-------------|
| `no-unused-variables.mdx` | Disallow unused variables |
| `no-console-log.mdx` | Disallow `console.log` |
| `use-const.mdx` | Require `const` for non-reassigned variables |
| `no-debugger.mdx` | Disallow `debugger` statements |
| `use-import-type.mdx` | Enforce type-only imports for TypeScript types |

All 508 rule files follow naming pattern `{no|use}-{rule-name}.mdx`.

### linter/css/, linter/graphql/, linter/html/, linter/javascript/, linter/json/ (2 files each)

Per-language lint category index and rule listing.

### assist/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Assist actions overview |
| `rules-sources.mdx` | Rule source mappings for assist actions |

### assist/actions/ (10 files)

| File | Description |
|------|-------------|
| `organize-imports.mdx` | Auto-sort and organize import statements |
| `use-sorted-keys.mdx` | Sort object keys |
| `use-sorted-interface-members.mdx` | Sort TypeScript interface members |
| `use-sorted-enum-members.mdx` | Sort enum members |
| `use-sorted-attributes.mdx` | Sort JSX/HTML attributes |
| `use-sorted-properties.mdx` | Sort CSS properties |
| `use-sorted-package-json.mdx` | Sort package.json fields |
| `use-sorted-selection-set.mdx` | Sort GraphQL selection sets |
| `use-sorted-type-fields.mdx` | Sort GraphQL type fields |
| `no-duplicate-classes.mdx` | Detect duplicate CSS class names |

### assist/css/, assist/graphql/, assist/html/, assist/javascript/, assist/json/ (2 files each)

Per-language assist action index and listing.

### formatter/ (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | Formatter overview, options, and language-specific settings |

### analyzer/ (1 file)

| File | Description |
|------|-------------|
| `suppressions.mdx` | How to suppress diagnostics with comments |

### editors/ (3 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Editor integration overview |
| `first-party-extensions.mdx` | Official VS Code and Zed extensions |
| `third-party-extensions.mdx` | Community editor plugins |

### recipes/ (5 files)

| File | Description |
|------|-------------|
| `continuous-integration.mdx` | CI pipeline integration (GitHub Actions, etc.) |
| `git-hooks.mdx` | Pre-commit hooks with Biome |
| `gritql-plugins.mdx` | Writing GritQL plugins |
| `badges.mdx` | README badges for Biome usage |
| `renovate.mdx` | Renovate bot configuration for Biome updates |

### internals/ (3 files)

| File | Description |
|------|-------------|
| `language-support.mdx` | Language support matrix (parsing, formatting, linting per language) |
| `versioning.mdx` | Versioning policy and update recommendations |
| `people-and-credits.mdx` | Project contributors and credits |
