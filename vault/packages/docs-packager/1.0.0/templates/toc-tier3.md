# Tier 3 TOC.md Template

Use for large documentation sets (> 100 files).

## Template

```markdown
# {name} Table of Contents

## Directory Map

```
contents/
├── getting-started/    # Installation, setup (5 files)
├── guides/             # How-to guides (25 files)
│   ├── basics/         # Fundamental concepts
│   └── advanced/       # Advanced topics
├── api/                # API reference (45 files)
│   ├── client/         # Client APIs
│   └── server/         # Server APIs
└── reference/          # Reference docs (30 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/quickstart.md` |
| API lookup | `contents/api/README.md` |
| Troubleshooting | `contents/guides/troubleshooting.md` |

## Detailed Structure

### getting-started/ (5 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation guide |
| `quickstart.md` | Quick start tutorial |

### guides/basics/ (10 files)

| File | Description |
|------|-------------|
| `concepts.md` | Core concepts |

### guides/advanced/ (15 files)

| File | Description |
|------|-------------|
| `performance.md` | Performance tuning |

{... continue for all directories ...}
```

## Guidelines

- Start with visual directory map
- Include key entry points for common tasks
- Group detailed listings by directory
- Show file counts for each directory
- For very large sets, may abbreviate some sections
