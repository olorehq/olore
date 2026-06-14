# cargo Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/appendix/` | Glossary and authentication reference | 2 |
| `contents/commands/` | CLI command reference pages | 38 |
| `contents/getting-started/` | Installation and first steps | 2 |
| `contents/guide/` | Cargo usage guide | 11 |
| `contents/reference/` | Detailed reference documentation | 31 |
| `contents/faq.md` | Frequently asked questions | 1 |

## appendix/

| File | Description |
|------|-------------|
| `git-authentication.md` | Git authentication configuration |
| `glossary.md` | Cargo and Rust packaging terminology |

## commands/

| File | Description |
|------|-------------|
| `cargo.md` | Top-level cargo command reference |
| `cargo-add.md` | Add dependencies to Cargo.toml |
| `cargo-bench.md` | Run benchmarks |
| `cargo-build.md` | Compile packages |
| `cargo-check.md` | Check packages without compiling |
| `cargo-clean.md` | Remove build artifacts |
| `cargo-clippy.md` | Run Clippy lints |
| `cargo-doc.md` | Build documentation |
| `cargo-fetch.md` | Fetch dependencies |
| `cargo-fix.md` | Automatically fix lint warnings |
| `cargo-fmt.md` | Format source code |
| `cargo-generate-lockfile.md` | Generate the lockfile |
| `cargo-help.md` | Display help information |
| `cargo-info.md` | Display crate info from crates.io |
| `cargo-init.md` | Create a new package in an existing directory |
| `cargo-install.md` | Install a Rust binary |
| `cargo-locate-project.md` | Print a JSON representation of a Cargo.toml location |
| `cargo-login.md` | Save an API token from a registry |
| `cargo-logout.md` | Remove a saved API token from a registry |
| `cargo-metadata.md` | Output dependency and package metadata as JSON |
| `cargo-miri.md` | Run tests under Miri interpreter |
| `cargo-new.md` | Create a new Cargo package |
| `cargo-owner.md` | Manage crate owners on a registry |
| `cargo-package.md` | Assemble a local package into a distributable tarball |
| `cargo-pkgid.md` | Print a fully qualified package specification |
| `cargo-publish.md` | Upload a package to a registry |
| `cargo-remove.md` | Remove dependencies from Cargo.toml |
| `cargo-report.md` | Generate and display various kinds of reports |
| `cargo-report-future-incompatibilities.md` | Reports any future-incompatible warnings |
| `cargo-run.md` | Run a binary or example |
| `cargo-rustc.md` | Compile a package and pass extra flags to the compiler |
| `cargo-rustdoc.md` | Build a package's documentation using rustdoc |
| `cargo-search.md` | Search packages on crates.io |
| `cargo-test.md` | Execute unit and integration tests |
| `cargo-tree.md` | Display a tree visualization of dependencies |
| `cargo-uninstall.md` | Remove a Rust binary |
| `cargo-update.md` | Update dependencies as recorded in the lockfile |
| `cargo-vendor.md` | Vendor all dependencies locally |
| `cargo-version.md` | Show version information |
| `cargo-yank.md` | Remove a pushed crate from the index |

## getting-started/

| File | Description |
|------|-------------|
| `installation.md` | How to install Cargo and Rust |
| `first-steps.md` | First steps with Cargo |

## guide/

| File | Description |
|------|-------------|
| `why-cargo-exists.md` | Background and motivation for Cargo |
| `creating-a-new-project.md` | Creating a new Cargo package |
| `working-on-an-existing-project.md` | Working on an existing Cargo project |
| `dependencies.md` | Adding and using dependencies |
| `project-layout.md` | Standard package layout conventions |
| `cargo-toml-vs-cargo-lock.md` | When to commit Cargo.lock |
| `tests.md` | Writing and running tests |
| `continuous-integration.md` | CI setup for Cargo projects |
| `cargo-home.md` | The Cargo home directory |
| `build-performance.md` | Optimizing build performance |
| `index.md` | Guide overview (skipped - link list) |

## reference/

| File | Description |
|------|-------------|
| `manifest.md` | Cargo.toml manifest format reference |
| `cargo-targets.md` | Configuring cargo targets (lib, bin, test, etc.) |
| `rust-version.md` | The rust-version field |
| `workspaces.md` | Cargo workspaces |
| `specifying-dependencies.md` | Specifying dependency versions and sources |
| `overriding-dependencies.md` | Overriding dependencies |
| `source-replacement.md` | Replacing dependency sources |
| `resolver.md` | Dependency resolution algorithm |
| `features.md` | Cargo features and conditional compilation |
| `features-examples.md` | Feature usage examples |
| `profiles.md` | Compilation profiles (dev, release, etc.) |
| `config.md` | Cargo configuration file reference |
| `environment-variables.md` | Environment variables Cargo reads and sets |
| `build-scripts.md` | Build script (build.rs) reference |
| `build-script-examples.md` | Build script examples |
| `build-cache.md` | Build cache and artifact layout |
| `pkgid-spec.md` | Package ID specification format |
| `external-tools.md` | Integrating external tools with Cargo |
| `registries.md` | Using and configuring crate registries |
| `registry-authentication.md` | Registry authentication |
| `credential-provider-protocol.md` | Credential provider protocol |
| `registry-index.md` | Registry index format |
| `registry-web-api.md` | Registry HTTP API |
| `running-a-registry.md` | Running a custom registry |
| `lints.md` | Cargo lints |
| `semver.md` | SemVer compatibility reference |
| `future-incompat-report.md` | Future-incompatibility reports |
| `timings.md` | Build timing reports |
| `publishing.md` | Publishing crates to crates.io |
| `unstable.md` | Unstable/nightly Cargo features |

## Root

| File | Description |
|------|-------------|
| `faq.md` | Frequently asked questions about Cargo |
