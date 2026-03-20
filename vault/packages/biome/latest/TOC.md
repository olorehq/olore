# biome Table of Contents

## Directory Map

```
contents/
├── guides/             # Getting started, configuration, editor, VCS integration (9 files)
│   └── editors/        # Editor extension guides (3 files)
├── reference/          # CLI reference, configuration reference, diagnostics (7 files)
├── linter/             # Linter overview, domains, plugins, rule listings (12 files)
│   ├── rules/          # Individual lint rules (461 files)
│   ├── css/            # CSS linter rules and sources
│   ├── graphql/        # GraphQL linter rules and sources
│   ├── html/           # HTML linter rules and sources
│   ├── javascript/     # JavaScript/TypeScript linter rules and sources
│   └── json/           # JSON linter rules and sources
├── formatter/          # Formatter overview and options (1 file)
├── assist/             # Code actions: imports, sorting (18 files)
│   ├── actions/        # Individual assist actions (6 files)
│   ├── css/            # CSS assist actions and sources
│   ├── graphql/        # GraphQL assist actions and sources
│   ├── html/           # HTML assist actions and sources
│   ├── javascript/     # JavaScript assist actions and sources
│   └── json/           # JSON assist actions and sources
├── analyzer/           # Suppressions and analyzer docs (1 file)
├── recipes/            # CI, git hooks, renovate integration (3 files)
└── internals/          # Language support, architecture, versioning (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Installation & setup | `contents/guides/getting-started.mdx` |
| Configuration reference | `contents/reference/configuration.mdx` |
| CLI commands | `contents/reference/cli.mdx` |
| Configure biome.json | `contents/guides/configure-biome.mdx` |
| Linter overview | `contents/linter/index.mdx` |
| Formatter overview | `contents/formatter/index.mdx` |
| Migrate from ESLint/Prettier | `contents/guides/migrate-eslint-prettier.mdx` |
| All lint rules (JS/TS) | `contents/linter/rules/` |
| Language support | `contents/internals/language-support.mdx` |
| Suppressions | `contents/analyzer/suppressions.mdx` |
| Import sorting | `contents/assist/actions/organize-imports.mdx` |

## Detailed Structure

### guides/ (9 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Installation and initial setup |
| `configure-biome.mdx` | Configuration file structure and resolution |
| `integrate-in-vcs.mdx` | Git/VCS integration |
| `migrate-eslint-prettier.mdx` | Migration from ESLint and Prettier |
| `manual-installation.mdx` | Standalone binary installation |
| `big-projects.mdx` | Using Biome in large monorepos |
| `investigate-slowness.mdx` | Troubleshooting performance |
| `upgrade-to-biome-v2.mdx` | Upgrade guide to Biome v2 |

### guides/editors/ (3 files)

| File | Description |
|------|-------------|
| `first-party-extensions.mdx` | Official VS Code and Zed extensions |
| `third-party-extensions.mdx` | Community editor integrations |
| `create-an-extension.mdx` | Building a Biome editor extension |

### reference/ (7 files)

| File | Description |
|------|-------------|
| `cli.mdx` | All CLI commands and flags |
| `configuration.mdx` | Full biome.json configuration reference |
| `diagnostics.mdx` | Understanding Biome diagnostics |
| `reporters.mdx` | Output reporter formats |
| `gritql.mdx` | GritQL search pattern reference |
| `vscode.mdx` | VS Code extension reference |
| `zed.mdx` | Zed extension reference |

### linter/ (top-level, 12 files)

| File | Description |
|------|-------------|
| `index.mdx` | Linter overview and usage |
| `domains.mdx` | Linter domain configuration |
| `plugins.mdx` | Linter plugins |
| `rules-sources.mdx` | Rules index with sources |
| `css/rules.mdx` | CSS lint rules listing |
| `css/sources.mdx` | CSS rule sources |
| `graphql/rules.mdx` | GraphQL lint rules listing |
| `html/rules.mdx` | HTML lint rules listing |
| `javascript/rules.mdx` | JavaScript/TypeScript lint rules listing |
| `json/rules.mdx` | JSON lint rules listing |

### linter/rules/ (461 files)

Individual lint rule docs. Examples:
- `no-unused-variables.mdx`, `no-console.mdx`, `use-const.mdx`
- All rules named `no-*` (restrictive) and `use-*` (prescriptive)

### formatter/ (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | Formatter overview, options, and CLI usage |

### assist/ (18 files)

| File | Description |
|------|-------------|
| `index.mdx` | Assist feature overview |
| `rules-sources.mdx` | Assist rules index |
| `actions/organize-imports.mdx` | Import sorting action |
| `actions/use-sorted-keys.mdx` | Sort object keys action |
| `actions/use-sorted-attributes.mdx` | Sort HTML/JSX attributes |
| `actions/use-sorted-interface-members.mdx` | Sort TS interface members |
| `actions/use-sorted-properties.mdx` | Sort CSS properties |
| `actions/no-duplicate-classes.mdx` | Deduplicate CSS classes action |

### analyzer/ (1 file)

| File | Description |
|------|-------------|
| `suppressions.mdx` | Using suppression comments to silence diagnostics |

### recipes/ (3 files)

| File | Description |
|------|-------------|
| `continuous-integration.mdx` | CI/CD setup |
| `git-hooks.mdx` | Pre-commit and git hooks integration |
| `renovate.mdx` | Renovate bot configuration |

### internals/ (3 files)

| File | Description |
|------|-------------|
| `language-support.mdx` | Supported languages and feature matrix |
| `architecture.mdx` | Biome internal architecture |
| `versioning.mdx` | Versioning policy and version pinning |
