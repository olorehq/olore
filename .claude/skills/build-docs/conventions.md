# Config vs Lock Conventions

## Separation of Concerns

**Config** (`vault/configs/*.json`) - human-authored, declares intent:
```json
{
  "name": "nextjs",
  "_source": { "type": "github", "repo": "vercel/next.js", "path": "docs" },
  "versions": {
    "16.1.3": { "ref": "v16.1.3" }
  }
}
```

- `name` is the short library name (e.g., `nextjs`, not `nextjs-docs`)
- The `olore-` prefix and version are added during install

**Lock** (`vault/packages/*/*/olore-lock.json`) - machine-generated, records what was built:
```json
{
  "name": "nextjs",
  "version": "16.1.3",
  "source": {
    "type": "github",
    "repo": "vercel/next.js",
    "ref": "v16.1.3",
    "commit": "abc123..."
  },
  "builtAt": "2026-01-20T10:30:00Z",
  "files": 150
}
```

**Key principle:** Config files are never modified by build scripts. All metadata goes in `olore-lock.json`.

## SKILL.md Naming

The `name` field in SKILL.md **must match the installed folder name** (includes version):
```yaml
---
name: olore-nextjs-16.1.3  # Must match folder: olore-{name}-{version}
description: ...
---
```

Claude Code uses the folder name to identify skills. If SKILL.md `name` doesn't match, the skill won't be discovered.

## Naming Flow

| Step | File/Location | Name | Example |
|------|---------------|------|---------|
| 1. Config | `vault/configs/nextjs.json` | Short name | `"name": "nextjs"` |
| 2. Lock | `vault/packages/nextjs/16.1.3/olore-lock.json` | Short + version | `"name": "nextjs", "version": "16.1.3"` |
| 3. SKILL.md | `vault/packages/nextjs/16.1.3/SKILL.md` | Full name | `name: olore-nextjs-16.1.3` |
| 4. Install folder | `~/.claude/skills/olore-nextjs-16.1.3/` | Full name | `olore-nextjs-16.1.3` |
| 5. Invocation | Claude Code | Full name | `/olore-nextjs-16.1.3` |

The installer creates `olore-{name}-{version}`. SKILL.md `name` must match the folder exactly.

**Why versioned names?** Enables multiple versions simultaneously (e.g., Zod 3 + Zod 4 for migration).

## Consumer Benefits of olore-lock.json

- Know exactly what version is installed
- Know where it came from (verifiable)
- Know the exact commit (reproducibility)
- Can check for updates (`olore outdated`)
