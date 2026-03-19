---
name: olore-vite-latest
description: Local vite documentation reference (latest). Vite documentation. Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.
---

# vite Documentation

Vite documentation. Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.

## Documentation Structure

```
contents/
├── guide/       # Usage guides, API reference, CLI, HMR, SSR, plugins (22 files)
├── config/      # Config options: shared, build, server, preview, SSR, worker (7 files)
├── changes/     # Breaking changes and future API migration notices (6 files)
└── plugins/     # Official and community plugin listing (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/guide/index.md` |
| Features (HMR, TypeScript, CSS, assets) | `contents/guide/features.md` |
| CLI commands | `contents/guide/cli.md` |
| JavaScript API (createServer, build, preview) | `contents/guide/api-javascript.md` |
| HMR API (import.meta.hot) | `contents/guide/api-hmr.md` |
| Plugin authoring | `contents/guide/api-plugin.md` |
| Environment API | `contents/guide/api-environment.md`, `contents/guide/api-environment-instances.md`, `contents/guide/api-environment-plugins.md`, `contents/guide/api-environment-frameworks.md`, `contents/guide/api-environment-runtimes.md` |
| Using plugins | `contents/guide/using-plugins.md` |
| Dependency pre-bundling | `contents/guide/dep-pre-bundling.md` |
| Assets and static files | `contents/guide/assets.md` |
| Production builds / library mode | `contents/guide/build.md` |
| Environment variables (.env) | `contents/guide/env-and-mode.md` |
| SSR | `contents/guide/ssr.md` |
| Backend integration | `contents/guide/backend-integration.md` |
| Performance | `contents/guide/performance.md` |
| Troubleshooting | `contents/guide/troubleshooting.md` |
| Migration | `contents/guide/migration.md` |
| Config file setup | `contents/config/index.md` |
| Shared config options | `contents/config/shared-options.md` |
| Server config options | `contents/config/server-options.md` |
| Build config options | `contents/config/build-options.md` |
| Dep optimization options | `contents/config/dep-optimization-options.md` |
| SSR config options | `contents/config/ssr-options.md` |
| Breaking changes | `contents/changes/` |

## When to use

Use this skill when the user asks about:
- Vite configuration (vite.config.ts/js, defineConfig)
- Dev server setup, HMR, hot module replacement
- Production builds, library mode, rollup options
- Vite plugins: authoring or using plugins
- SSR with Vite
- Environment variables and modes
- JavaScript/programmatic API for Vite
- Dependency pre-bundling and optimization
- Static asset handling
- TypeScript, CSS, JSON, WebAssembly support in Vite
- Environment API (Vite 6+)
- Migrating between Vite versions

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
