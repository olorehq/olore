# ADR-0004: Tarball Distribution over Content-Addressed Storage

## Status

Accepted

## Context

We needed to decide how to store and distribute documentation packages. Two approaches were considered:

### Option A: pnpm-style content-addressed storage

```
~/.olore/
├── store/                     # Global content-addressed storage
│   ├── ab/
│   │   └── cdef1234...       # File stored by SHA-256 hash
│   ├── 12/
│   │   └── 3456789a...
│   └── ...
└── packages/
    └── prisma@5.22.0.json    # Metadata with file hashes
```

- Each file stored once by content hash
- Multiple packages sharing same file = stored once
- Symlinks resolve to store location
- Deduplication across packages

### Option B: Simple tarballs with SHA-256 verification

```
GitHub Releases:
└── prisma@5.22.0/
    ├── prisma-5.22.0.tar.gz     # Complete package
    └── prisma-5.22.0.sha256     # Integrity hash

~/.olore/
└── packages/
    └── prisma@5.22.0/           # Extracted tarball
        ├── manifest.json
        └── docs/
```

- Download tarball, verify hash, extract
- Each package is self-contained
- No cross-package deduplication

### Constraints

1. **No budget for infrastructure** — Can't afford to run a real registry
2. **GitHub Releases is free** — Unlimited storage for open source
3. **Documentation is small** — Packages are KB-MB, not GB
4. **Simplicity matters** — Fewer moving parts = fewer bugs

## Decision

**We chose simple tarballs with SHA-256 verification, hosted on GitHub Releases.**

```
olore install prisma
       ↓
GET github.com/olorehq/olore/releases/download/prisma@5.22.0/prisma-5.22.0.tar.gz
       ↓
Verify SHA-256 hash
       ↓
Extract to ~/.olore/packages/prisma@5.22.0/
       ↓
Create symlinks to agent directories
```

### Why GitHub Releases?

| Hosting Option | Cost | Complexity | Reliability |
|----------------|------|------------|-------------|
| Custom registry | $$$ | High | Depends on us |
| S3/R2 | $ | Medium | High |
| **GitHub Releases** | **Free** | **Low** | **High** |
| npm registry | Free | Medium | High (but wrong fit) |

GitHub Releases gives us:
- Unlimited storage for open source projects
- Global CDN (GitHub's infrastructure)
- Versioned downloads (tags = versions)
- No ops burden
- Already using GitHub for code

## Consequences

### Positive

1. **Zero infrastructure cost** — GitHub Releases is free
2. **Simple implementation** — Download, verify, extract. Done.
3. **Reliable** — GitHub's CDN is battle-tested
4. **Versioning built-in** — Git tags map to releases
5. **No ops burden** — No servers to maintain, no databases
6. **Auditable** — Anyone can verify tarball contents
7. **Offline-friendly** — Downloaded tarball is self-contained

### Negative

1. **No deduplication** — Same file in multiple packages = stored multiple times
2. **Larger downloads** — Full package each time, no incremental updates
3. **GitHub dependency** — If GitHub is down, installs fail
4. **Rate limits** — GitHub API has rate limits (generous for our scale)

### Why deduplication doesn't matter (yet)

```
Documentation package sizes:
├── zod-docs:      ~50 KB   (13 files)
├── prisma-docs:   ~1.5 MB  (415 files)
├── nextjs-docs:   ~2.5 MB  (376 files)
└── langchain-docs: ~5 MB   (1688 files)

Typical user installs: 5-10 packages
Total storage: ~15-30 MB

pnpm-style dedup savings: Maybe 10-20%
Complexity cost: Significant
```

For MB-scale documentation, the complexity of content-addressed storage provides minimal benefit. If packages grow to GB scale (unlikely for docs), we can revisit.

### Migration path

If we ever need content-addressed storage:

1. Storage format is internal detail, not user-facing
2. Can migrate without changing CLI interface
3. `olore install prisma` works the same either way

## Alternatives Considered

### pnpm-style content-addressed store

From the original pnpm-style design (not implemented):

```typescript
function storeFile(content: string): string {
  const hash = sha256(content);
  const dir = `~/.olore/store/${hash.slice(0, 2)}`;
  const path = `${dir}/${hash.slice(2)}`;

  if (!exists(path)) {
    writeFile(path, content);
  }

  return hash;
}
```

- Pro: Deduplication, incremental updates
- Con: Complex implementation, minimal benefit for small packages

### npm registry

Publish packages to npm:

```bash
npm install @olore/prisma-docs
```

- Pro: Familiar, existing infrastructure
- Con: Wrong abstraction (these aren't npm packages), clutters npm namespace

### Custom registry with database

Build vault.olore.dev with proper package management:

- Pro: Full control, custom features
- Con: Costs money, ops burden, single point of failure

## Implementation

### Package structure (tarball)

```
prisma-5.22.0.tar.gz
├── manifest.json           # Package metadata
├── templates/
│   ├── claude.md           # SKILL.md template
│   ├── codex.md
│   └── opencode.md
└── docs/
    ├── getting-started.md
    ├── schema.md
    └── ...
```

### Registry index (GitHub raw file)

```json
{
  "packages": {
    "prisma": {
      "latest": "5.22.0",
      "versions": {
        "5.22.0": {
          "tarball": "https://github.com/olorehq/olore/releases/download/prisma@5.22.0/prisma-5.22.0.tar.gz",
          "sha256": "abc123...",
          "size": 1250000,
          "files": 420
        }
      }
    }
  }
}
```

### Install flow

```typescript
async function install(packageName: string, version: string) {
  // 1. Fetch registry index
  const registry = await fetch(REGISTRY_URL).then(r => r.json());

  // 2. Get tarball URL
  const pkg = registry.packages[packageName];
  const ver = pkg.versions[version];

  // 3. Download tarball
  const tarball = await fetch(ver.tarball).then(r => r.arrayBuffer());

  // 4. Verify SHA-256
  const hash = sha256(tarball);
  if (hash !== ver.sha256) {
    throw new Error('Integrity check failed');
  }

  // 5. Extract
  await extract(tarball, `~/.olore/packages/${packageName}@${version}/`);

  // 6. Generate skills and symlinks
  await generateSkills(packageName, version);
}
```

## References

- [docs/architecture.md](../architecture.md) — Current technical architecture
- [ROADMAP.md](../../ROADMAP.md) — Development stages
