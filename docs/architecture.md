# olore Architecture

Technical architecture for olore - the documentation package manager for AI coding agents.

## Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         USER                                │
│                    olore install prisma                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      olore CLI                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │ install │  │  link   │  │  list   │  │ remove  │       │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   LOCAL STORAGE                             │
│                ~/.olore/packages/                           │
└─────────────────────────┬───────────────────────────────────┘
                          │
         ┌────────────────┐
         ▼                ▼
┌─────────────┐   ┌─────────────┐
│   Skills    │   │    Files    │
│  (symlinks) │   │   Direct    │
└──────┬──────┘   └──────┬──────┘
       │                 │
       ▼                 ▼
┌─────────────┐   ┌─────────────┐
│ Claude Code │   │    Aider    │
│   Codex     │   │  Continue   │
│  OpenCode   │   │  Any tool   │
└─────────────┘   └─────────────┘

ONE INSTALL → ANY AGENT
```

## Universal Agent Support

olore focuses on skills-based agent integration today:

| Agent Type | Examples | How olore supports |
|------------|----------|-------------------|
| Skills-based | Claude Code, Codex, OpenCode | Native skill generation |
| File-based | Aider, Continue | Direct file access |

## Directory Structure

### Development (this repo)

```
vault/
├── configs/                      # Source definitions (human-authored)
│   ├── prisma.json
│   └── zod.json
├── packages/                     # Built docs (source of truth)
│   ├── prisma/
│   │   └── latest/
│   │       ├── olore-lock.json   # Build metadata
│   │       ├── SKILL.md
│   │       ├── TOC.md
│   │       └── contents/
│   │           └── *.md
│   └── zod/
│       ├── latest/
│       └── 3/
└── schemas/                      # JSON schemas for validation

web/
├── scripts/
│   └── generate-registry.ts      # Generates registry at build time
├── public/
│   └── registry/                 # Generated (gitignored)
│       ├── index.json
│       └── packages/*.json
└── src/                          # Landing page

.github/
└── workflows/
    └── publish-packages.yml      # Creates tarballs → GitHub Releases
```

### User Installation

```
~/.olore/
├── packages/                     # Installed packages
│   ├── prisma-docs/
│   │   └── 5.22.0/
│   │       ├── olore-lock.json
│   │       ├── SKILL.md
│   │       ├── TOC.md
│   │       └── contents/
│   │           └── *.md
│   └── zod-docs/
│       └── 3.24.0/
│           ├── olore-lock.json
│           ├── SKILL.md
│           ├── TOC.md
│           └── contents/
│               └── *.md
└── config.json                   # User preferences

~/.claude/skills/olore-prisma-docs/   # Copied from package
├── olore-lock.json
├── SKILL.md
├── TOC.md
└── contents/
    └── *.md
```

## Package Format

Each package contains a `package.json` with metadata:

```json
{
  "name": "prisma",
  "version": "1.2.0",
  "libraryVersion": "5.22.0",
  "libraryVersionRange": ">=5.20.0 <6.0.0",
  "description": "Prisma ORM documentation for AI agents",
  "tier": 3,
  "files": 420,
  "source": {
    "type": "github",
    "repo": "prisma/docs",
    "commit": "abc1234567890def1234567890abc1234567890ab",
    "branch": "main",
    "path": "content"
  },
  "createdAt": "2026-01-15T10:30:00Z",
  "agents": ["claude", "codex", "opencode"]
}
```

**Key distinction:**
- `version` - Our package version (increments when we re-curate)
- `libraryVersion` - The library version this documentation covers

See [package-format.md](package-format.md) for full specification.

## Registry

The registry is **generated at Vercel build time**, not committed to git. It is a derived artifact from:
1. `olore-lock.json` files in `vault/packages/` (source of truth, in git)
2. GitHub Releases metadata (queried via API at build time)

See [ADR-0005](adr/0005-registry-generation-at-build-time.md) for full details.

### Registry URL

```
https://olore.dev/registry/index.json          # Package index
https://olore.dev/registry/packages/{name}.json # Per-package versions
```

### Publish Flow

```
/build-docs prisma@latest
     │ Creates vault/packages/prisma/latest/
     │ PR merged to main
     ▼
GitHub Action (publish-packages.yml)
     │ Creates tarball, uploads to GitHub Releases
     ▼
Vercel Build (generate-registry.ts)
     │ Scans olore-lock.json files
     │ Queries GitHub Releases API
     │ Generates public/registry/*.json
     ▼
olore.dev/registry/ serves generated JSON
```

### Registry Format

```json
// https://olore.dev/registry/index.json
{
  "version": 1,
  "updated": "2026-01-20T02:00:00Z",
  "packages": {
    "prisma": {
      "description": "Prisma ORM documentation...",
      "latest": "latest",
      "versions": ["latest"]
    }
  }
}
```

```json
// https://olore.dev/registry/packages/prisma.json
{
  "name": "prisma",
  "description": "Prisma ORM documentation...",
  "versions": {
    "latest": {
      "version": "latest",
      "files": 438,
      "size": 993000,
      "integrity": "sha256-...",
      "downloadUrl": "https://github.com/olorehq/olore/releases/download/prisma@latest/prisma-latest.tar.gz",
      "releasedAt": "2026-01-20T01:59:29Z"
    }
  }
}
```

**Version resolution:**
- `olore install prisma` → Uses `latest`
- `olore install prisma@latest` → Exact match
- `olore install prisma@5` → Highest 5.x version

## Install Flow

```
olore install prisma-docs@5.22.0
         │
         ▼
┌─────────────────────────────┐
│ 1. Fetch registry index     │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│ 2. Download tarball         │
│    Verify SHA-256           │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│ 3. Extract to ~/.olore/     │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│ 4. Symlink to agent dirs    │
│    (adds olore- prefix)     │
│    ~/.claude/skills/olore-* │
└─────────────────────────────┘
```

Note: SKILL.md is included in the package, not generated at install time.

## Agent Support

olore uses a simple path-based approach for multi-agent support:

```typescript
// Hardcoded agent skill paths
function getAgentPaths(): Record<string, string> {
  return {
    claude: '~/.claude/skills/',
    codex: '~/.codex/skills/',
    opencode: '~/.config/opencode/skills/',
  };
}

// Detection: checks if agent's parent directory exists
function detectAgents(): string[] {
  // Returns agents where ~/.claude/, ~/.codex/, etc. exist
}
```

On install, olore creates symlinks from all agent skill directories to the central `~/.olore/` storage. No per-agent generation is needed since packages include pre-built SKILL.md files.

## Version Management

### Three-Layer Versioning

olore uses a three-layer versioning model:

```
┌─────────────────────────────────────────────────────────────┐
│  USER FACING                                                │
│  olore install prisma@5.22.0   (library version)            │
├─────────────────────────────────────────────────────────────┤
│  REGISTRY                                                   │
│  Maps library version → package version                     │
│  prisma@5.22.0 → prisma-docs@1.2.0                         │
├─────────────────────────────────────────────────────────────┤
│  PACKAGE                                                    │
│  Includes source provenance (commit SHA)                    │
│  Ensures reproducibility                                    │
└─────────────────────────────────────────────────────────────┘
```

### CLI Commands

```bash
olore install zod              # Latest version
olore install zod@3.22.0       # Exact library version
olore install zod@3            # Latest 3.x
```

### Multiple Versions

Multiple versions can be installed simultaneously. Each version has an explicit skill name:

```
~/.olore/packages/zod/
├── 3.22.0/                   # v3 docs
│   ├── package.json
│   └── contents/
└── 3.24.0/                   # v3 docs (newer)
    ├── package.json
    └── contents/

~/.claude/skills/
├── olore-zod-3.22.0/         # /olore-zod-3.22.0
└── olore-zod-3.24.0/         # /olore-zod-3.24.0
```

Agents reference the version they need explicitly — no ambiguity.

### Build-Time Versioning (Config + Lock)

Configs define **intent** (what versions to build), while `olore-lock.json` records **build metadata**:

```json
// vault/configs/zod-docs.json
{
  "_source": {
    "type": "github",
    "repo": "colinhacks/zod",
    "path": "packages/contents/content"
  },
  "versions": {
    "4.3.5": { "ref": "v4.3.5" },
    "4.2.0": { "ref": "v4.2.0" }
  }
}
```

**Build modes:**
```bash
/build-docs                   # All configs, all missing versions
/build-docs zod-docs          # Missing versions for zod-docs
/build-docs zod-docs@4.4.0    # Explicit version
```

**Auto-discovery flow:**
```
/build-docs zod-docs
  → Reads versions: [4.3.5, 4.2.0]
  → Checks vault/packages/zod-docs/: only 4.2.0/olore-lock.json exists
  → Builds zod-docs@4.3.5
  → Skips 4.2.0 (already built)
```

Each version directory gets an `olore-lock.json` for reproducibility:

```json
// vault/packages/zod-docs/4.3.5/olore-lock.json
{
  "name": "zod-docs",
  "version": "4.3.5",
  "source": {
    "type": "github",
    "repo": "colinhacks/zod",
    "ref": "v4.3.5",
    "commit": "abc1234567890def1234567890abc1234567890ab",
    "path": "packages/contents/content"
  },
  "builtAt": "2026-01-19T10:30:00Z",
  "files": 15
}
```

This ensures:
1. **Declarative** - Config declares what versions to build
2. **Idempotent** - Running `/build-docs` again only builds missing
3. **CI-friendly** - Just run `/build-docs` to catch up on all missing
4. **Reproducibility** - Same commit = same docs
5. **Config immutability** - Config files are never modified by build process
6. **Clear separation** - Human intent (config) vs machine metadata (lock)

## Build System

### Internal vs Distributable Tools

olore has two build tools for different audiences:

| Tool | Location | Purpose | Source |
|------|----------|---------|--------|
| `/build-docs` | `.claude/skills/build-docs/` | Maintainers: build from GitHub configs | Downloads from GitHub repos |
| `docs-packager` | `vault/packages/docs-packager/` | Users: package local docs | User's local `./docs` folder |

Both tools generate the same output format (SKILL.md, TOC.md, contents/) and use **shared templates** from `vault/packages/docs-packager/1.0.0/templates/` as the single source of truth.

### Template Structure

```
vault/packages/docs-packager/1.0.0/templates/
├── skill-tier1.md    # SKILL.md for small docs (< 30 files)
├── skill-tier2.md    # SKILL.md for medium docs (30-100 files)
├── skill-tier3.md    # SKILL.md for large docs (> 100 files)
├── toc-tier1.md      # TOC.md for small docs
├── toc-tier2.md      # TOC.md for medium docs
└── toc-tier3.md      # TOC.md for large docs
```

The internal `package-builder` agent reads these templates at runtime, ensuring consistency between maintainer-built packages and user-built packages.

## Tech Stack

| Component | Choice |
|-----------|--------|
| Language | TypeScript |
| CLI framework | Commander.js |
| HTTP client | undici / fetch |
| Compression | tar |
| CLI Build | tsup |
| Testing | Vitest |
| Web | Next.js (App Router) |
| Web Hosting | Vercel |
| Registry | Generated at Vercel build time |
| Tarballs | GitHub Releases |
| CI/CD | GitHub Actions |

## Security

1. **Package integrity** - SHA-256 hashes for all tarballs
2. **Source verification** - Only official GitHub repos
3. **No code execution** - Just static documentation files
4. **Symlinks** - Never overwrite user files

## Related Documentation

- [ADRs](adr/) - Architecture Decision Records
- [Package Format](package-format.md) - Package specification
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Maintainer workflow
- [README.md](../README.md) - User guide
