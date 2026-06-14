---
name: olore-cargo-latest
description: Local Cargo documentation reference (latest). Cargo package manager documentation for Rust. Use for dependency management, build configuration, and publishing crates.
---

# cargo Documentation

Cargo package manager documentation for Rust. Use for dependency management, build configuration, and publishing crates.

## Documentation Structure

```
contents/
├── commands/      # Full CLI command reference for all cargo subcommands (40 files)
├── reference/     # Detailed reference: manifest, workspaces, features, config, registries (30 files)
├── guide/         # Cargo usage guide: dependencies, tests, CI, build performance (11 files)
├── getting-started/ # Installation and first steps (2 files)
└── appendix/      # Glossary and git authentication reference (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Dependency management | `contents/guide/dependencies.md`, `contents/reference/specifying-dependencies.md`, `contents/reference/overriding-dependencies.md`, `contents/reference/resolver.md` |
| Cargo.toml manifest | `contents/reference/manifest.md`, `contents/reference/cargo-targets.md` |
| Building and compiling | `contents/commands/cargo-build.md`, `contents/commands/cargo-check.md`, `contents/commands/cargo-rustc.md`, `contents/reference/profiles.md` |
| Features and conditional compilation | `contents/reference/features.md`, `contents/reference/features-examples.md` |
| Testing | `contents/guide/tests.md`, `contents/commands/cargo-test.md`, `contents/commands/cargo-bench.md` |
| Publishing crates | `contents/reference/publishing.md`, `contents/commands/cargo-publish.md`, `contents/commands/cargo-package.md` |
| Workspaces | `contents/reference/workspaces.md` |
| Configuration | `contents/reference/config.md`, `contents/reference/environment-variables.md` |
| Build scripts (build.rs) | `contents/reference/build-scripts.md`, `contents/reference/build-script-examples.md` |
| Registries | `contents/reference/registries.md`, `contents/reference/registry-authentication.md`, `contents/reference/running-a-registry.md` |
| CLI commands | `contents/commands/` (all cargo-*.md files) |
| Getting started | `contents/getting-started/installation.md`, `contents/getting-started/first-steps.md` |

## When to use

Use this skill when the user asks about:
- Cargo commands (cargo build, cargo test, cargo publish, cargo add, etc.)
- Cargo.toml manifest fields and configuration
- Managing dependencies and the lockfile
- Cargo workspaces and multi-crate projects
- Build scripts (build.rs)
- Publishing crates to crates.io or a private registry
- Cargo features and conditional compilation
- Cargo profiles (dev, release, custom)
- Build performance and caching
- Environment variables used by Cargo
- Setting up CI for Rust projects

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
