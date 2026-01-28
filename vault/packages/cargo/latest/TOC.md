# Cargo Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Installation and first steps | 3 |
| `contents/guide/` | Core usage guide | 11 |
| `contents/commands/` | Command-line reference | 47 |
| `contents/reference/` | Technical reference | 31 |
| `contents/appendix/` | Additional resources | 2 |
| `contents/` (root) | Index, FAQ, summary | 3 |

## getting-started/

| File | Description |
|------|-------------|
| `index.md` | Getting started overview |
| `installation.md` | Installing Cargo and Rust |
| `first-steps.md` | Creating and building your first project |

## guide/

| File | Description |
|------|-------------|
| `index.md` | Cargo guide overview |
| `why-cargo-exists.md` | Introduction to Cargo's purpose |
| `creating-a-new-project.md` | Creating new packages |
| `working-on-an-existing-project.md` | Working with existing codebases |
| `dependencies.md` | Managing dependencies |
| `project-layout.md` | Package structure and layout |
| `cargo-toml-vs-cargo-lock.md` | Understanding manifest vs lockfile |
| `tests.md` | Writing and running tests |
| `continuous-integration.md` | CI/CD setup |
| `cargo-home.md` | Understanding Cargo's home directory |
| `build-performance.md` | Optimizing build times |

## commands/

Command reference organized by category:

| File | Description |
|------|-------------|
| `index.md` | Commands overview |
| `cargo.md` | Main cargo command |
| **General Commands** | |
| `general-commands.md` | Overview of general commands |
| `cargo-help.md` | Get help on commands |
| `cargo-version.md` | Show Cargo version |
| **Build Commands** | |
| `build-commands.md` | Overview of build commands |
| `cargo-build.md` | Compile packages |
| `cargo-check.md` | Check code without building |
| `cargo-clean.md` | Remove build artifacts |
| `cargo-doc.md` | Build documentation |
| `cargo-fetch.md` | Fetch dependencies |
| `cargo-fix.md` | Automatically fix compiler warnings |
| `cargo-run.md` | Build and run binary |
| `cargo-rustc.md` | Compile with custom rustc options |
| `cargo-rustdoc.md` | Build documentation with custom options |
| `cargo-test.md` | Run tests |
| `cargo-bench.md` | Run benchmarks |
| `cargo-clippy.md` | Run Clippy linter |
| `cargo-fmt.md` | Format source code |
| `cargo-miri.md` | Run Miri interpreter |
| **Manifest Commands** | |
| `manifest-commands.md` | Overview of manifest commands |
| `cargo-add.md` | Add dependencies |
| `cargo-remove.md` | Remove dependencies |
| `cargo-generate-lockfile.md` | Generate Cargo.lock |
| `cargo-locate-project.md` | Print project location |
| `cargo-metadata.md` | Output package metadata |
| `cargo-pkgid.md` | Print package ID |
| `cargo-tree.md` | Display dependency tree |
| `cargo-update.md` | Update dependencies |
| `cargo-vendor.md` | Vendor dependencies locally |
| **Package Commands** | |
| `package-commands.md` | Overview of package commands |
| `cargo-init.md` | Create new package in existing directory |
| `cargo-new.md` | Create new package |
| `cargo-install.md` | Install Rust binary |
| `cargo-uninstall.md` | Uninstall Rust binary |
| `cargo-search.md` | Search crates.io |
| `cargo-info.md` | Display crate information |
| **Publishing Commands** | |
| `publishing-commands.md` | Overview of publishing commands |
| `cargo-login.md` | Save API token |
| `cargo-logout.md` | Remove API token |
| `cargo-owner.md` | Manage crate owners |
| `cargo-package.md` | Package for publishing |
| `cargo-publish.md` | Upload package to registry |
| `cargo-yank.md` | Remove published version from index |
| **Other** | |
| `cargo-report.md` | Generate reports |
| `deprecated-and-removed.md` | Deprecated and removed commands |

## reference/

| File | Description |
|------|-------------|
| `index.md` | Reference overview |
| `manifest.md` | Cargo.toml format specification |
| `cargo-targets.md` | Build target configuration |
| `rust-version.md` | Minimum Rust version specification |
| `workspaces.md` | Multi-package projects |
| `specifying-dependencies.md` | Dependency specification syntax |
| `overriding-dependencies.md` | Override dependency versions |
| `source-replacement.md` | Replace dependency sources |
| `resolver.md` | Dependency resolution algorithm |
| `features.md` | Conditional compilation features |
| `features-examples.md` | Feature usage examples |
| `profiles.md` | Build profiles (dev, release) |
| `config.md` | Configuration file format |
| `environment-variables.md` | Environment variables reference |
| `build-scripts.md` | Build script (build.rs) guide |
| `build-script-examples.md` | Build script examples |
| `build-cache.md` | Build caching behavior |
| `pkgid-spec.md` | Package ID specification format |
| `external-tools.md` | Integration with external tools |
| `registries.md` | Working with package registries |
| `registry-authentication.md` | Registry authentication methods |
| `credential-provider-protocol.md` | Custom credential providers |
| `running-a-registry.md` | Setting up a registry |
| `registry-index.md` | Registry index format |
| `registry-web-api.md` | Registry HTTP API |
| `semver.md` | Semantic versioning rules |
| `future-incompat-report.md` | Future incompatibility reports |
| `timings.md` | Build timing information |
| `lints.md` | Lint configuration |
| `publishing.md` | Publishing packages to crates.io |
| `unstable.md` | Unstable features documentation |

## appendix/

| File | Description |
|------|-------------|
| `glossary.md` | Terminology reference |
| `git-authentication.md` | Git authentication for dependencies |

## Root Files

| File | Description |
|------|-------------|
| `index.md` | The Cargo Book introduction |
| `SUMMARY.md` | Full table of contents |
| `faq.md` | Frequently asked questions |
