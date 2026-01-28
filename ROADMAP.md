# olore Roadmap

Public roadmap for olore development.

## Current Status

**Phase: Foundation**

| Component | Status |
|-----------|--------|
| Manifest system | ✅ Complete |
| Download handlers (GitHub, URL) | ✅ Complete |
| AI-assisted filtering | ✅ Complete |
| Skill generation (3-tier) | ✅ Complete |
| Multi-agent support | ✅ Complete |
| Installation (symlinks) | ✅ Complete |
| 8 packages seeded | ✅ Complete |

## Roadmap

### ✅ Phase 1: Core CLI (Complete)

- [x] `olore install` — Install from registry or local path
- [x] `olore list` — Show installed packages
- [x] `olore remove` — Uninstall package
- [x] `olore link` — Link local documentation
- [x] `olore init` — Create package scaffold
- [x] CONTRIBUTING guide for package authors

### Phase 2: Registry

- [x] Registry client code
- [x] Package tarballs generated (13 packages)
- [x] Version resolution logic (`@5.22.0`, `@5`, `@latest`)
- [x] Registry generation script (`npm run generate-registry`)
- [ ] Deploy registry to GitHub Pages
- [ ] Upload tarballs to GitHub Releases
- [ ] End-to-end install test (live registry)

### Phase 3: Package Lifecycle

- [ ] `olore update` — Update all packages
- [ ] `olore outdated` — Show available updates
- [ ] `olore validate` — Validate before publish
- [ ] `olore publish` — Submit to registry
- [ ] **Local registry cache** — Cache index.json for offline use and autocomplete
  - `olore search` — Search packages from cached index (instant, uses cache)
  - `olore refresh` — Force refresh registry cache
  - `olore install --offline` — Install from cache only, no network
  - TTL-based expiry (default 24h, configurable in `~/.olore/config.json`)
  - Auto-refresh on `olore install` if cache expired
  - Cache location: `~/.olore/cache/index.json`

### Phase 4: Polish

- [ ] Error handling and helpful messages
- [ ] `olore doctor` — Diagnose issues
- [ ] Shell completions (bash, zsh, fish) — Uses cached registry for package name autocomplete
- [ ] Semver compliance for CLI releases
- [ ] Backwards compatibility for package format changes

### Phase 5: CI & Community

- [x] GitHub issue templates (package request, contribution)
- [x] Config validation workflow (schema, repo, path, file count)
- [ ] **Auto-build on merge** — When config PR merges, CI builds package automatically
  - Headless build script using Claude API
  - Detect new/changed configs vs existing packages
  - Commit built packages back to repo
  - Requires `ANTHROPIC_API_KEY` in GitHub Secrets
- [ ] Package quality scoring (completeness, coverage)
- [ ] Community leaderboard (top contributors)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add new documentation packages.

## Want a Package?

Open an issue with:
- Library name and GitHub docs URL
- Why it would be useful for AI coding

We'll evaluate and add it to the build queue.
