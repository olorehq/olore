---
name: olore-vite-latest
description: Local Vite documentation reference (latest). Vite documentation. Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.
---

# Vite Documentation

Vite documentation. Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.

## Documentation Structure

```
contents/
├── guide/        # Guides, tutorials, and API references (19 files)
├── config/       # Full configuration reference (8 files)
├── changes/      # Breaking changes and migration docs (6 files)
└── plugins/      # Official and community plugins list (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/guide/index.md`, `contents/guide/features.md` |
| CLI usage | `contents/guide/cli.md` |
| Config file and options | `contents/config/index.md`, `contents/config/shared-options.md` |
| Dev server configuration | `contents/config/server-options.md` |
| Build and bundling | `contents/guide/build.md`, `contents/config/build-options.md` |
| HMR (Hot Module Replacement) | `contents/guide/api-hmr.md` |
| Plugins (using / authoring) | `contents/guide/using-plugins.md`, `contents/guide/api-plugin.md`, `contents/plugins/index.md` |
| SSR (Server-Side Rendering) | `contents/guide/ssr.md`, `contents/config/ssr-options.md` |
| Environment API | `contents/guide/api-environment.md`, `contents/guide/api-environment-frameworks.md`, `contents/guide/api-environment-plugins.md`, `contents/guide/api-environment-runtimes.md` |
| JavaScript API | `contents/guide/api-javascript.md` |
| Dependency pre-bundling | `contents/guide/dep-pre-bundling.md`, `contents/config/dep-optimization-options.md` |
| Static assets | `contents/guide/assets.md` |
| Environment variables | `contents/guide/env-and-mode.md` |
| Static site deployment | `contents/guide/static-deploy.md` |
| Backend integration | `contents/guide/backend-integration.md` |
| Performance optimization | `contents/guide/performance.md` |
| Troubleshooting | `contents/guide/troubleshooting.md` |
| Migration / breaking changes | `contents/guide/migration.md`, `contents/changes/index.md` |
| Web Workers | `contents/config/worker-options.md` |

## When to use

Use this skill when the user asks about:
- Configuring Vite (`vite.config.ts/js`) for any framework or use case
- Dev server setup, proxying, HMR, or HTTPS
- Production builds, code splitting, library mode, or Rollup options
- Writing or using Vite plugins
- SSR, backend integration, or static deployment
- Environment variables and build modes
- Migrating between Vite major versions or adopting new Environment API

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
