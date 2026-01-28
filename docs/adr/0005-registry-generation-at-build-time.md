# ADR-0005: Registry Generation at Build Time

## Status

Proposed

## Context

We need to host documentation packages for the olore CLI. The system requires:
1. **Registry JSON** - Index of available packages (fetched by CLI)
2. **Tarballs** - Package archives (downloaded by CLI)

Initial approach was to commit registry JSON to `web/public/registry/` and tarballs to `vault/packages/`. This creates problems:
- Tarballs bloat git history (~20MB+)
- Committing registry changes from CI triggers infinite Vercel deploys
- Manual synchronization between packages and registry is error-prone

## Decision

**Generate registry JSON at Vercel build time, not in git.**

The registry is a derived artifact from:
1. `olore-lock.json` files in `vault/packages/` (committed to git)
2. GitHub Releases metadata (queried via API)

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  SOURCE OF TRUTH (in git)                                   │
│  vault/packages/{name}/{version}/                           │
│  ├── olore-lock.json    # Build metadata + description      │
│  ├── SKILL.md                                               │
│  ├── TOC.md                                                 │
│  └── contents/                                              │
└─────────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┴─────────────────┐
        ▼                                   ▼
┌───────────────────┐             ┌───────────────────┐
│  GitHub Action    │             │  Vercel Build     │
│  (on merge)       │             │  (on merge)       │
│                   │             │                   │
│  1. Create tarball│             │  generate-registry│
│  2. Calculate SHA │             │  script:          │
│  3. Upload to     │             │  1. Scan locks    │
│     Releases      │             │  2. Query GH API  │
│  4. Upload .sha256│             │  3. Generate JSON │
│                   │             │  4. Output to     │
│                   │             │     public/reg/   │
└───────────────────┘             └───────────────────┘
        │                                   │
        ▼                                   ▼
┌───────────────────┐             ┌───────────────────┐
│  GitHub Releases  │             │  olore.dev        │
│  {name}@{version} │             │  /registry/       │
│  ├── *.tar.gz     │◄────────────│  ├── index.json   │
│  └── *.sha256     │  downloadUrl│  └── packages/    │
└───────────────────┘             └───────────────────┘
```

### Data Flow

**Build time** (`/build-docs`):
- Creates `vault/packages/{name}/{version}/`
- Generates `olore-lock.json` with: name, version, description, source, builtAt, files

**Publish time** (GitHub Action on merge):
- Triggers on changes to `vault/packages/*/*/olore-lock.json`
- Creates tarball: `{name}-{version}.tar.gz`
- Calculates SHA256 integrity hash
- Creates GitHub Release: `{name}@{version}`
- Uploads tarball and `{name}-{version}.tar.gz.sha256`

**Deploy time** (Vercel build):
- Runs `generate-registry.ts` script
- Scans all `vault/packages/*/*/olore-lock.json`
- For each package, queries GitHub Releases API for:
  - Asset size
  - Download URL
  - Release date
  - Fetches `.sha256` file for integrity
- Generates `public/registry/index.json` and `public/registry/packages/*.json`
- Build completes, registry is served at `olore.dev/registry/`

## Trigger Strategy

### GitHub Action Triggers

```yaml
on:
  push:
    branches: [main]
    paths:
      - 'vault/packages/**/olore-lock.json'
```

**Why `olore-lock.json`?**
- Only triggers when a package is "finalized" (lock file created/updated)
- Ignores changes to SKILL.md, TOC.md, or contents (those don't need re-release)
- The `builtAt` timestamp in lock file changes on rebuild, triggering new release

### Release Naming

- Format: `{name}@{version}` (e.g., `prisma@latest`, `nextjs@16.1.3`)
- Assets: `{name}-{version}.tar.gz` and `{name}-{version}.tar.gz.sha256`

### Idempotency

The Action checks before creating:
1. Does release `{name}@{version}` exist?
2. If yes, compare `builtAt` from lock file with release timestamp
3. Only re-upload if lock file is newer (package was rebuilt)

This allows safe re-runs and handles the case where a package is rebuilt with fixes.

## Handling Missing Releases (Race Condition)

**Problem:** Vercel may deploy before GitHub Action finishes uploading release.

**Solution:** Graceful degradation in registry generator.

```typescript
// web/scripts/generate-registry.ts (pseudocode)
for (const lockFile of lockFiles) {
  const release = await getGitHubRelease(lockFile.name, lockFile.version);

  if (!release) {
    console.warn(`⚠️  Skipping ${lockFile.name}@${lockFile.version} - no release found`);
    continue; // Skip this package, don't fail build
  }

  registry.packages[lockFile.name] = buildPackageEntry(lockFile, release);
}
```

**Behavior:**
- Package without release → **skipped** (not in registry)
- Next Vercel deploy (after Action completes) → package appears
- Users see package within ~2-3 minutes of Action completing

**Why not fail the build?**
- Failing blocks ALL deploys until Action completes
- Partial registry is better than no deploy
- Landing page changes shouldn't be blocked by package publishing

## Caching Strategy

### GitHub API Rate Limits

| Auth Type | Limit | Our Usage |
|-----------|-------|-----------|
| Unauthenticated | 60/hour | ❌ Too low |
| Token (PAT/App) | 5,000/hour | ✅ Sufficient |

### Caching Layers

1. **Vercel Build Cache**
   - Cache `node_modules/.cache/olore-registry/`
   - Store release metadata with ETags
   - Use conditional requests (`If-None-Match`)

2. **Conditional Requests**
   ```typescript
   const response = await fetch(releaseUrl, {
     headers: { 'If-None-Match': cachedEtag }
   });
   if (response.status === 304) {
     return cachedData; // Not modified
   }
   ```

3. **Fallback on API Failure**
   - If GitHub API unavailable, use cached data
   - Log warning but don't fail build
   - Stale registry is better than no registry

### Cache Invalidation

- Cache keyed by `{name}@{version}` + `builtAt`
- New `builtAt` = cache miss = fresh fetch

## Rollback Strategy

### Remove a Version

1. Delete the GitHub Release (`{name}@{version}`)
2. Delete the directory `vault/packages/{name}/{version}/`
3. Merge PR
4. Next Vercel deploy removes from registry

### Emergency Yank (Security Issue)

**Immediate (blocks downloads):**
1. Delete the GitHub Release via UI or API
2. CLI users get 404 on download attempt

**Follow-up (removes from registry):**
1. PR to delete `vault/packages/{name}/{version}/`
2. Merge triggers Vercel deploy
3. Package disappears from registry

### Unpublish Entire Package

1. Delete all GitHub Releases for that package
2. Delete `vault/packages/{name}/` directory
3. Delete `vault/configs/{name}.json`
4. Merge PR

## Environment Variables

### Vercel

| Variable | Purpose | Scope |
|----------|---------|-------|
| `GITHUB_TOKEN` | Query Releases API | Build time only |

Token needs: `public_repo` scope (read-only sufficient)

### GitHub Action

Uses automatic `GITHUB_TOKEN` with permissions:

```yaml
permissions:
  contents: write  # Create releases, upload assets
```

## Local Development

**These flows are unchanged and bypass the registry:**

```bash
# Development (symlinks to source)
olore link ./vault/packages/prisma/latest

# Testing final package (copies to ~/.olore)
olore install ./vault/packages/prisma/latest
```

**Registry is only used for remote installs:**

```bash
olore install prisma  # Fetches from olore.dev/registry
```

**Testing registry generation locally:**

```bash
cd web
GITHUB_TOKEN=ghp_xxx pnpm run generate-registry
# Outputs to public/registry/
```

## File Changes Required

**1. Add `description` to config schema and files**

```json
// vault/configs/prisma.json
{
  "name": "prisma",
  "description": "Prisma ORM documentation. Use for Prisma Client, Schema, migrations, and queries.",
  "_source": { ... },
  "versions": { ... }
}
```

**2. Update olore-lock.json to include description**

```json
// vault/packages/prisma/latest/olore-lock.json
{
  "name": "prisma",
  "version": "latest",
  "description": "Prisma ORM documentation...",
  "source": { ... },
  "builtAt": "2026-01-20T01:59:29Z",
  "files": 438
}
```

**3. Remove vault/registry/ from git**

Registry JSON is now generated, not committed.

**4. Add .gitignore entries**

```gitignore
# Generated at build time
web/public/registry/

# Tarballs (uploaded to GitHub Releases)
vault/packages/**/*.tar.gz
vault/packages/**/*.sha256
```

**5. Create generate-registry script**

Location: `web/scripts/generate-registry.ts`

**6. Update Vercel build command**

```json
// web/package.json
{
  "scripts": {
    "generate-registry": "tsx scripts/generate-registry.ts",
    "prebuild": "npm run generate-registry",
    "build": "next build"
  }
}
```

**7. Create GitHub Action**

Location: `.github/workflows/publish-packages.yml`

**8. Update CLI registry URL**

```typescript
// cli/src/core/constants.ts
export const REGISTRY_URL = 'https://olore.dev/registry';
```

## Consequences

### Positive

- **No circular triggers** - Registry generation doesn't commit to git
- **Single source of truth** - `olore-lock.json` is the authority
- **Clean git history** - No tarballs or generated JSON in repo
- **Always in sync** - Registry regenerated on every deploy
- **Graceful degradation** - Missing releases are skipped, not fatal
- **Cacheable** - Vercel caches builds, GitHub caches releases

### Negative

- **Build dependency** - Vercel build requires GitHub API access
- **Slightly longer builds** - Must query GitHub API (mitigated by caching)
- **Two-step publish** - Must merge PR, then wait for Action + Vercel
- **Brief inconsistency** - ~2-3 min window where package is released but not in registry

### Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| GitHub API rate limits | Low | Medium | Caching + authenticated requests |
| API downtime during build | Low | Low | Fallback to cached data |
| Race condition (release not ready) | Medium | Low | Skip missing, deploy again later |
| Bad package published | Low | Medium | Delete release for immediate block |

## Implementation Checklist

- [ ] Add `description` field to config schema
- [ ] Update all config files with descriptions
- [ ] Update package-builder to copy description to olore-lock.json
- [ ] Delete `vault/registry/` directory
- [ ] Add .gitignore entries
- [ ] Create `web/scripts/generate-registry.ts`
- [ ] Update `web/package.json` with prebuild script
- [ ] Create `.github/workflows/publish-packages.yml`
- [ ] Update CLI `REGISTRY_URL` constant
- [ ] Update `docs/architecture.md`
- [ ] Add `GITHUB_TOKEN` to Vercel environment
- [ ] Test end-to-end flow
