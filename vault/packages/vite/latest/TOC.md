# vite Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/guide/` | Usage guides, API reference, features, SSR, plugins, CLI | 20 |
| `contents/config/` | Config options (shared, build, server, preview, SSR, worker, deps) | 7 |
| `contents/changes/` | Breaking changes and migration notices for future APIs | 6 |
| `contents/plugins/` | Official and community plugin listing | 1 |

## guide/

| File | Description |
|------|-------------|
| `guide/index.md` | Getting started overview, installation, browser support |
| `guide/features.md` | Core features: HMR, TypeScript, CSS, assets, JSON, Wasm, web workers |
| `guide/cli.md` | CLI reference: vite, vite build, vite preview, vite optimize |
| `guide/api-javascript.md` | JavaScript API: createServer, build, preview, ViteDevServer |
| `guide/api-hmr.md` | HMR API: import.meta.hot, accept, dispose, invalidate, on, send |
| `guide/api-plugin.md` | Plugin API: hooks, resolveId, load, transform, handleHotUpdate |
| `guide/api-environment.md` | Environment API overview (RC) |
| `guide/api-environment-instances.md` | Environment instances API |
| `guide/api-environment-plugins.md` | Environment plugin API |
| `guide/api-environment-frameworks.md` | Environment framework integration |
| `guide/api-environment-runtimes.md` | Environment runtime API |
| `guide/using-plugins.md` | How to use and configure plugins |
| `guide/dep-pre-bundling.md` | Dependency pre-bundling with esbuild |
| `guide/assets.md` | Static asset handling, URL imports, public directory |
| `guide/build.md` | Production builds, library mode, multi-page app |
| `guide/env-and-mode.md` | Environment variables, .env files, import.meta.env |
| `guide/ssr.md` | Server-Side Rendering integration |
| `guide/backend-integration.md` | Backend integration guide |
| `guide/static-deploy.md` | Static site deployment |
| `guide/performance.md` | Performance optimization |
| `guide/troubleshooting.md` | Common issues and solutions |
| `guide/migration.md` | Migration guide from previous versions |

## config/

| File | Description |
|------|-------------|
| `config/index.md` | Config file overview, defineConfig, conditional config |
| `config/shared-options.md` | Shared options: root, base, mode, define, plugins, resolve, css |
| `config/server-options.md` | Dev server options: host, port, proxy, hmr, cors, headers |
| `config/build-options.md` | Build options: target, outDir, rollupOptions, minify, sourcemap |
| `config/preview-options.md` | Preview server options |
| `config/dep-optimization-options.md` | Dependency optimization: include, exclude, esbuildOptions |
| `config/ssr-options.md` | SSR-specific config options |
| `config/worker-options.md` | Web worker build options |

## changes/

| File | Description |
|------|-------------|
| `changes/index.md` | Breaking changes index for planned and past changes |
| `changes/hotupdate-hook.md` | HMR hotUpdate hook migration |
| `changes/per-environment-apis.md` | Per-environment API changes |
| `changes/shared-plugins-during-build.md` | Shared plugins during build changes |
| `changes/ssr-using-modulerunner.md` | SSR using ModuleRunner migration |
| `changes/this-environment-in-hooks.md` | this.environment in hooks migration |

## plugins/

| File | Description |
|------|-------------|
| `plugins/index.md` | Official plugins listing and community plugin registry |
