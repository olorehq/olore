---
name: olore-cargo-latest
description: Local Cargo documentation reference (latest). Official Cargo package manager documentation for Rust.
---

# Cargo Documentation

Cargo is Rust's package manager - it downloads dependencies, compiles packages, and publishes to crates.io. This skill provides complete Cargo documentation including guides, command reference, and technical specifications.

## Documentation Structure

```
contents/
├── getting-started/  # Installation and first steps (3 files)
├── guide/            # Core usage guide (11 files)
├── commands/         # Command-line reference (47 files)
├── reference/        # Technical reference (31 files)
├── appendix/         # Additional resources (2 files)
└── *.md              # Index, FAQ, summary (3 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting Started | `contents/getting-started/installation.md`, `contents/getting-started/first-steps.md` |
| Project Setup | `contents/guide/creating-a-new-project.md`, `contents/guide/project-layout.md` |
| Dependencies | `contents/guide/dependencies.md`, `contents/reference/specifying-dependencies.md` |
| Manifest Format | `contents/reference/manifest.md`, `contents/guide/cargo-toml-vs-cargo-lock.md` |
| Building | `contents/commands/cargo-build.md`, `contents/commands/cargo-check.md`, `contents/reference/profiles.md` |
| Testing | `contents/guide/tests.md`, `contents/commands/cargo-test.md`, `contents/commands/cargo-bench.md` |
| Publishing | `contents/reference/publishing.md`, `contents/commands/cargo-publish.md` |
| Workspaces | `contents/reference/workspaces.md` |
| Build Scripts | `contents/reference/build-scripts.md`, `contents/reference/build-script-examples.md` |
| Features | `contents/reference/features.md`, `contents/reference/features-examples.md` |
| Configuration | `contents/reference/config.md`, `contents/reference/environment-variables.md` |
| Registries | `contents/reference/registries.md`, `contents/reference/running-a-registry.md` |
| Performance | `contents/guide/build-performance.md`, `contents/reference/build-cache.md` |

## When to use

Use this skill when the user asks about:
- Installing or configuring Cargo
- Creating or managing Rust projects
- Managing dependencies (adding, updating, vendoring)
- Building, testing, or running Rust code
- Cargo.toml manifest format
- Publishing packages to crates.io
- Workspaces and multi-package projects
- Build scripts (build.rs)
- Conditional compilation with features
- Custom registries
- Cargo commands and CLI usage
- Build optimization and performance

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
