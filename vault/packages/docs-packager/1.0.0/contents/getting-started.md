# Getting Started with docs-packager

Package your local documentation into an olore skill.

## Quick Start

1. **Create config file** in your project root:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My project documentation",
  "contentPath": "./docs"
}
```

Save as `olore.config.json`

2. **Run the skill**:

```
/olore-docs-packager-1.0.0
```

3. **Install the package**:

```bash
olore install ./olore-package
```

## Config Options

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Package name |
| `version` | Yes | Version string |
| `description` | Yes | One-line description |
| `contentPath` | Yes | Path to docs |
| `outputPath` | No | Output dir (default: `./olore-package`) |
| `extensions` | No | File types (default: `.md`, `.mdx`) |
| `exclude` | No | Glob patterns to skip |

## Example Project Structure

```
my-project/
├── olore.config.json
├── src/
└── docs/
    ├── getting-started.md
    ├── api/
    │   └── reference.md
    └── guides/
        └── advanced.md
```

After running `/olore-docs-packager-1.0.0`:

```
my-project/
├── olore.config.json
├── olore-package/          # Generated
│   ├── SKILL.md
│   ├── TOC.md
│   ├── olore-lock.json
│   └── contents/
│       └── (your docs)
└── docs/                   # Unchanged
```

## Tips

- Use `exclude` to skip drafts, internal docs, or changelogs
- The skill auto-detects tier (1-3) based on file count
- Use `example.olore.config.json` as a starting point
- Schema file `olore.config.schema.json` enables IDE validation
