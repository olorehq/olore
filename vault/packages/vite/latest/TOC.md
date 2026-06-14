# Vite Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/guide/` | Guides, tutorials, API references | 19 |
| `contents/config/` | Configuration reference | 8 |
| `contents/changes/` | Breaking changes and migration guides | 6 |
| `contents/plugins/` | Official and community plugins | 1 |

## guide/

| File | Description |
|------|-------------|
| `index.md` | Getting started with Vite |
| `why.md` | Why Vite — motivation and background |
| `philosophy.md` | Vite design philosophy |
| `features.md` | Vite features overview (TypeScript, JSX, CSS, assets, etc.) |
| `cli.md` | CLI commands reference (`vite`, `vite build`, `vite preview`) |
| `using-plugins.md` | How to find, install, and configure plugins |
| `dep-pre-bundling.md` | Dependency pre-bundling with esbuild |
| `assets.md` | Static asset handling |
| `build.md` | Production build options |
| `env-and-mode.md` | Environment variables and modes |
| `ssr.md` | Server-side rendering guide |
| `backend-integration.md` | Integrating Vite with a backend server |
| `static-deploy.md` | Deploying static sites |
| `performance.md` | Performance optimization |
| `troubleshooting.md` | Common issues and solutions |
| `migration.md` | Migrating from older Vite versions |
| `api-javascript.md` | JavaScript API (`createServer`, `build`, `preview`) |
| `api-hmr.md` | HMR API reference |
| `api-plugin.md` | Plugin API reference (hooks, conventions) |
| `api-environment.md` | Environment API overview |
| `api-environment-instances.md` | Environment instances API |
| `api-environment-frameworks.md` | Environment API for frameworks |
| `api-environment-plugins.md` | Environment API for plugins |
| `api-environment-runtimes.md` | Environment API for runtimes |

## config/

| File | Description |
|------|-------------|
| `index.md` | Config file overview and resolving config |
| `shared-options.md` | Shared config options (`root`, `base`, `resolve`, `css`, etc.) |
| `server-options.md` | Dev server options (`server.host`, `proxy`, `hmr`, etc.) |
| `build-options.md` | Build options (`build.target`, `rollupOptions`, `minify`, etc.) |
| `preview-options.md` | Preview server options |
| `dep-optimization-options.md` | Dependency optimization options (`optimizeDeps`) |
| `ssr-options.md` | SSR-specific config options |
| `worker-options.md` | Web Worker build options |

## changes/

| File | Description |
|------|-------------|
| `index.md` | Breaking changes list across versions |
| `hotupdate-hook.md` | `hotUpdate` plugin hook replaces `handleHotUpdate` |
| `per-environment-apis.md` | Per-environment API changes |
| `shared-plugins-during-build.md` | Shared plugins during build changes |
| `ssr-using-modulerunner.md` | SSR using `ModuleRunner` API migration |
| `this-environment-in-hooks.md` | `this.environment` in plugin hooks |

## plugins/

| File | Description |
|------|-------------|
| `index.md` | Official Vite plugins and community resources |
