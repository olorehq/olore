---
name: olore-vite-8.0.16
description: Local Vite documentation reference (8.0.16). Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.
version: 8.0.16
---

# vite Documentation

Vite documentation. Use for frontend build tooling, dev server, HMR, plugins, SSR, library mode, and build configuration.

## Documentation Structure

```
contents/
├── guide/       # Usage guides and API references (24 files)
├── config/      # Configuration option references (8 files)
├── changes/     # Breaking changes and migration notes (6 files)
└── plugins/     # Plugin listing and resources (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/guide/index.md`, `contents/guide/why.md` |
| Core features (ESM, HMR, TypeScript, CSS, assets) | `contents/guide/features.md`, `contents/guide/assets.md` |
| Dev server configuration | `contents/config/server-options.md`, `contents/config/shared-options.md` |
| Build configuration | `contents/guide/build.md`, `contents/config/build-options.md` |
| CLI usage | `contents/guide/cli.md` |
| Environment variables and modes | `contents/guide/env-and-mode.md` |
| Plugin usage and authoring | `contents/guide/using-plugins.md`, `contents/guide/api-plugin.md`, `contents/plugins/index.md` |
| HMR API | `contents/guide/api-hmr.md` |
| JavaScript API | `contents/guide/api-javascript.md` |
| SSR (Server-Side Rendering) | `contents/guide/ssr.md`, `contents/config/ssr-options.md` |
| Environment API (Vite 6+) | `contents/guide/api-environment.md`, `contents/guide/api-environment-plugins.md`, `contents/guide/api-environment-instances.md`, `contents/guide/api-environment-frameworks.md`, `contents/guide/api-environment-runtimes.md` |
| Dependency pre-bundling | `contents/guide/dep-pre-bundling.md`, `contents/config/dep-optimization-options.md` |
| Backend integration | `contents/guide/backend-integration.md` |
| Static site deployment | `contents/guide/static-deploy.md` |
| Performance optimization | `contents/guide/performance.md` |
| Troubleshooting | `contents/guide/troubleshooting.md` |
| Migration / breaking changes | `contents/guide/migration.md`, `contents/changes/index.md` |
| Web Workers | `contents/config/worker-options.md` |
| Preview server | `contents/config/preview-options.md` |

## When to use

Use this skill when the user asks about:
- Setting up or configuring Vite for a project
- Dev server options, HMR, and hot reload behavior
- Production build configuration and optimization
- Writing or configuring Vite plugins
- SSR with Vite
- Environment variables and build modes
- Migrating between Vite major versions
- The JavaScript API or CLI commands
- Asset handling, CSS processing, or TypeScript support

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
