# vite Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/guide/` | Usage guides, API references, features, CLI, SSR, plugins | 24 |
| `contents/config/` | Configuration option references | 8 |
| `contents/changes/` | Breaking changes and migration notes for plugin authors | 6 |
| `contents/plugins/` | Official and community plugin listing | 1 |

## guide/

| File | Description |
|------|-------------|
| `guide/index.md` | Getting started — installation and project setup |
| `guide/why.md` | Why Vite — motivation and design goals |
| `guide/features.md` | Core features: ESM, HMR, TypeScript, CSS, assets, etc. |
| `guide/cli.md` | CLI commands: vite, vite build, vite preview |
| `guide/using-plugins.md` | How to find and configure Vite plugins |
| `guide/dep-pre-bundling.md` | Dependency pre-bundling with esbuild/Rolldown |
| `guide/assets.md` | Static asset handling |
| `guide/env-and-mode.md` | Environment variables and build modes |
| `guide/build.md` | Production build configuration and options |
| `guide/backend-integration.md` | Integrating Vite with a backend server |
| `guide/troubleshooting.md` | Common issues and solutions |
| `guide/performance.md` | Performance optimization tips |
| `guide/philosophy.md` | Project philosophy and design principles |
| `guide/ssr.md` | Server-Side Rendering (SSR) guide |
| `guide/static-deploy.md` | Deploying static sites to various platforms |
| `guide/migration.md` | Migration guide from previous versions |
| `guide/api-plugin.md` | Plugin API reference |
| `guide/api-javascript.md` | JavaScript API reference (createServer, build, etc.) |
| `guide/api-hmr.md` | HMR API reference |
| `guide/api-environment.md` | Environment API overview |
| `guide/api-environment-instances.md` | Environment instances API |
| `guide/api-environment-plugins.md` | Environment-aware plugin API |
| `guide/api-environment-frameworks.md` | Environment API for framework authors |
| `guide/api-environment-runtimes.md` | Environment API for custom runtimes |

## config/

| File | Description |
|------|-------------|
| `config/index.md` | How to configure Vite (vite.config.js) |
| `config/shared-options.md` | Shared config options (root, base, resolve, css, etc.) |
| `config/server-options.md` | Dev server options (port, proxy, CORS, HMR, etc.) |
| `config/build-options.md` | Build options (target, outDir, rollupOptions, etc.) |
| `config/preview-options.md` | Preview server options |
| `config/dep-optimization-options.md` | Dependency optimization options |
| `config/ssr-options.md` | SSR-specific configuration options |
| `config/worker-options.md` | Web Worker configuration options |

## changes/

| File | Description |
|------|-------------|
| `changes/index.md` | Index of breaking changes across major versions |
| `changes/hotupdate-hook.md` | Migration: HMR hotUpdate plugin hook |
| `changes/per-environment-apis.md` | Migration: per-environment APIs |
| `changes/shared-plugins-during-build.md` | Migration: shared plugins during build |
| `changes/ssr-using-modulerunner.md` | Migration: SSR via ModuleRunner API |
| `changes/this-environment-in-hooks.md` | Migration: this.environment in plugin hooks |

## plugins/

| File | Description |
|------|-------------|
| `plugins/index.md` | Official Vite plugins and community plugin resources |
