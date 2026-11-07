---
name: olore-cargo-latest
description: Local Cargo documentation reference (latest). Cargo package manager documentation for Rust. Use for dependency management, build configuration, and publishing crates.
---

# cargo Documentation

Cargo package manager documentation for Rust. Use for dependency management, build configuration, and publishing crates.

## Documentation Structure

```
contents/
├── getting-started/  # Installation and first steps (3 files)
├── guide/            # Guide to using Cargo (11 files)
├── reference/        # Manifest, config, features, profiles, registries (31 files)
├── commands/         # cargo subcommand reference (41 files)
└── appendix/         # Git authentication, glossary (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Cargo.toml manifest | `contents/reference/manifest.md`, `contents/reference/specifying-dependencies.md` |
| Features | `contents/reference/features.md`, `contents/reference/features-examples.md` |
| Workspaces | `contents/reference/workspaces.md` |
| Configuration and env vars | `contents/reference/config.md`, `contents/reference/environment-variables.md` |
| Build scripts | `contents/reference/build-scripts.md`, `contents/reference/build-script-examples.md` |
| Profiles and performance | `contents/reference/profiles.md`, `contents/guide/build-performance.md` |
| Publishing and registries | `contents/reference/publishing.md`, `contents/reference/registries.md`, `contents/commands/cargo-publish.md` |
| Commands | `contents/commands/cargo-build.md`, `contents/commands/cargo-add.md`, `contents/commands/cargo-install.md` |
| Getting started | `contents/getting-started/installation.md`, `contents/guide/creating-a-new-project.md` |

## When to use

Use this skill when the user asks about:
- Cargo.toml, dependencies, features, and workspaces
- cargo subcommands and their flags
- Build scripts, profiles, and configuration
- Publishing crates and running registries

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
