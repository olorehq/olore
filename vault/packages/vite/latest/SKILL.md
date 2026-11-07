---
name: olore-vite-latest
description: Local vite documentation reference (latest). Vite documentation. Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.
---

# vite Documentation

Vite documentation. Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.

## Documentation Structure

```
contents/
├── guide/     # Guides, features, build, SSR, plugin/HMR/JS/Environment APIs (24 files)
├── config/    # Configuration option reference (8 files)
├── changes/   # Breaking changes and Environment API migrations (6 files)
└── plugins/   # Plugins overview (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/guide/index.md`, `contents/guide/features.md`, `contents/guide/cli.md` |
| Config file and options | `contents/config/index.md`, `contents/config/shared-options.md` |
| Dev server and proxy | `contents/config/server-options.md` |
| Production build / library mode | `contents/guide/build.md`, `contents/config/build-options.md` |
| Env variables and modes | `contents/guide/env-and-mode.md` |
| Plugins | `contents/guide/using-plugins.md`, `contents/guide/api-plugin.md`, `contents/plugins/index.md` |
| HMR | `contents/guide/api-hmr.md` |
| SSR | `contents/guide/ssr.md`, `contents/config/ssr-options.md` |
| Environment API | `contents/guide/api-environment.md`, `contents/guide/api-environment-plugins.md` |
| JavaScript API | `contents/guide/api-javascript.md` |
| Assets and backend integration | `contents/guide/assets.md`, `contents/guide/backend-integration.md` |
| Migration and breaking changes | `contents/guide/migration.md`, `contents/changes/index.md` |
| Troubleshooting and performance | `contents/guide/troubleshooting.md`, `contents/guide/performance.md` |

## When to use

Use this skill when the user asks about:
- Configuring Vite (vite.config, server, build, resolve, css options)
- Writing or using Vite/Rolldown plugins, HMR, and the Environment API
- SSR, library mode, static deployment, env variables, and migration between versions

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
