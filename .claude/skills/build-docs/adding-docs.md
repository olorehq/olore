# Adding New Documentation

Create a config in `vault/configs/`. Use `$schema` for IDE validation.

## GitHub Source (for repos with docs)

```json
// vault/configs/mylib.json
{
  "$schema": "../schemas/config.schema.json",
  "name": "mylib",
  "_source": {
    "type": "github",
    "repo": "owner/repo",
    "path": "docs",
    "extensions": [".md", ".mdx"]
  },
  "versions": {
    "1.0.0": { "ref": "v1.0.0" }
  }
}
```

- `name` is required - defines the skill name (`/olore-mylib` after install)
- `ref` is the **exact git ref** to checkout (tag, branch, or commit SHA)

## URL Source (for individual files)

```json
// vault/configs/example.json
{
  "$schema": "../schemas/config.schema.json",
  "name": "example",
  "_source": { "type": "url" },
  "files": {
    "category": {
      "doc-name": "https://example.com/doc.md"
    }
  },
  "versions": {}
}
```

## Config Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Short library name (no `olore-` prefix) |
| `_source.type` | Yes | `"github"` or `"url"` |
| `_source.repo` | GitHub | `owner/repo` format |
| `_source.path` | GitHub | Path to docs directory |
| `_source.extensions` | No | File extensions to include (default: `.md`, `.mdx`) |
| `versions` | Yes | Version definitions |
| `files` | URL | URL mappings by category |

## Git Ref Examples

| Repo Type | Ref Example |
|-----------|-------------|
| Standard semver | `v1.0.0` |
| Monorepo (package-scoped) | `@tanstack/react-form@1.27.7` |
| Branch-only (no tags) | `main` |
| Specific commit | `abc123def456...` |

**Key principle:** You provide the exact ref. No magic transformations.
