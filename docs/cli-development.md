# CLI Development

Guide for developing the olore CLI.

## Quick Start

```bash
cd cli
npm install
npm run dev      # Watch mode
npm run build    # Production build
npm test         # Run tests
```

## Version

Version is defined in `cli/package.json`. The CLI reads this at runtime.

Currently pre-1.0 — breaking changes allowed in minor bumps (0.1.0 → 0.2.0).

## Branch & Commit Conventions

**Branches:**
```
feat/add-update-command
fix/install-symlink-error
docs/readme-update
```

**Commits:**
```
feat: add update command
fix: resolve symlink creation on Windows
docs: update CLI usage examples
chore: update dependencies
```

## Release

```bash
# 1. Bump version
npm version patch  # or minor/major

# 2. Build and verify
npm run build
npm run typecheck

# 3. Push with tags
git push origin main --tags
```

## Error Messages

Follow this format for helpful errors:

```
Error: Package "prisma" not found in registry

The package may not exist or the registry may be unavailable.

Try:
  - Check the package name spelling
  - Run 'olore list --remote' to see available packages
```

## Related

- [Architecture](architecture.md)
- [ROADMAP](../ROADMAP.md)
