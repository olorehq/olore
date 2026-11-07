# vite Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/guide/` | Guides: getting started, features, build, SSR, plugin/HMR/JS/Environment APIs | 24 |
| `contents/config/` | Configuration option reference | 8 |
| `contents/changes/` | Breaking changes and Environment API migrations | 6 |
| `contents/plugins/` | Official and community plugins overview | 1 |

## guide/

| File | Description |
|------|-------------|
| `index.md` | Getting started: scaffolding a project, templates, and requirements |
| `why.md` | Why Vite exists: problems with bundle-based dev tooling |
| `philosophy.md` | Project philosophy and scope of Vite core |
| `features.md` | Core features: TS, JSX, CSS, JSON, glob import, web workers, HMR |
| `cli.md` | CLI commands and flags (dev, build, preview, optimize) |
| `using-plugins.md` | Adding, configuring, and ordering plugins |
| `dep-pre-bundling.md` | Dependency pre-bundling and caching behavior |
| `assets.md` | Static asset handling, public directory, URL imports |
| `build.md` | Building for production, browser targets, chunking, multi-page and library mode |
| `static-deploy.md` | Deploying a static site to common hosts |
| `env-and-mode.md` | Env variables, .env files, modes, and `import.meta.env` |
| `ssr.md` | Server-side rendering setup, build, and externals |
| `backend-integration.md` | Serving Vite assets from a traditional backend with manifest |
| `troubleshooting.md` | Common problems and fixes |
| `performance.md` | Performance tuning for dev server and build |
| `migration.md` | Migration guide from the previous major version |
| `api-plugin.md` | Plugin API: hooks, virtual modules, conventions |
| `api-hmr.md` | Client-side HMR API (`import.meta.hot`) |
| `api-javascript.md` | JavaScript API: createServer, build, preview, resolveConfig |
| `api-environment.md` | Environment API overview and concepts |
| `api-environment-instances.md` | Using Environment instances (module graph, transformRequest) |
| `api-environment-plugins.md` | Environment API for plugin authors |
| `api-environment-frameworks.md` | Environment API for framework authors |
| `api-environment-runtimes.md` | Environment API for runtime providers and ModuleRunner |

## config/

| File | Description |
|------|-------------|
| `index.md` | Config file resolution, defineConfig, conditional and async config |
| `shared-options.md` | Options shared by dev, build, and preview (root, base, resolve, css, plugins) |
| `server-options.md` | Dev server options (host, port, proxy, HMR, watch, cors) |
| `build-options.md` | Build options (target, outDir, minify, rollupOptions, lib, manifest) |
| `preview-options.md` | Preview server options |
| `dep-optimization-options.md` | Dependency optimizer options (include, exclude, entries) |
| `ssr-options.md` | SSR options (external, noExternal, target) |
| `worker-options.md` | Web worker bundling options |

## changes/

| File | Description |
|------|-------------|
| `index.md` | List of upcoming and past breaking changes and deprecations |
| `hotupdate-hook.md` | New `hotUpdate` plugin hook for HMR |
| `per-environment-apis.md` | Move to per-environment APIs |
| `shared-plugins-during-build.md` | Shared plugins across environments during build |
| `ssr-using-modulerunner.md` | SSR using the ModuleRunner API |
| `this-environment-in-hooks.md` | `this.environment` in plugin hooks |

## plugins/

| File | Description |
|------|-------------|
| `index.md` | Official plugins, community plugins, and Rolldown/Rollup plugin compatibility |
