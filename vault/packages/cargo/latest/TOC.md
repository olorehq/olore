# cargo Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Top-level pages | 2 |
| `contents/appendix/` | Git authentication, glossary | 2 |
| `contents/commands/` | cargo subcommand man pages | 41 |
| `contents/getting-started/` | Installation and first steps | 3 |
| `contents/guide/` | Guide to using Cargo | 11 |
| `contents/reference/` | Manifest, config, features, profiles, registries and more | 31 |

## (root)

| File | Description |
|------|-------------|
| `faq.md` | Frequently asked questions |
| `index.md` | Cargo book introduction |

## appendix/

| File | Description |
|------|-------------|
| `git-authentication.md` | Git authentication for dependencies |
| `glossary.md` | Glossary of Cargo terms |

## commands/

| File | Description |
|------|-------------|
| `cargo-add.md` | `cargo add` command reference |
| `cargo-bench.md` | `cargo bench` command reference |
| `cargo-build.md` | `cargo build` command reference |
| `cargo-check.md` | `cargo check` command reference |
| `cargo-clean.md` | `cargo clean` command reference |
| `cargo-clippy.md` | `cargo clippy` command reference |
| `cargo-doc.md` | `cargo doc` command reference |
| `cargo-fetch.md` | `cargo fetch` command reference |
| `cargo-fix.md` | `cargo fix` command reference |
| `cargo-fmt.md` | `cargo fmt` command reference |
| `cargo-generate-lockfile.md` | `cargo generate lockfile` command reference |
| `cargo-help.md` | `cargo help` command reference |
| `cargo-info.md` | `cargo info` command reference |
| `cargo-init.md` | `cargo init` command reference |
| `cargo-install.md` | `cargo install` command reference |
| `cargo-locate-project.md` | `cargo locate project` command reference |
| `cargo-login.md` | `cargo login` command reference |
| `cargo-logout.md` | `cargo logout` command reference |
| `cargo-metadata.md` | `cargo metadata` command reference |
| `cargo-miri.md` | `cargo miri` command reference |
| `cargo-new.md` | `cargo new` command reference |
| `cargo-owner.md` | `cargo owner` command reference |
| `cargo-package.md` | `cargo package` command reference |
| `cargo-pkgid.md` | `cargo pkgid` command reference |
| `cargo-publish.md` | `cargo publish` command reference |
| `cargo-remove.md` | `cargo remove` command reference |
| `cargo-report-future-incompatibilities.md` | `cargo report future incompatibilities` command reference |
| `cargo-report.md` | `cargo report` command reference |
| `cargo-run.md` | `cargo run` command reference |
| `cargo-rustc.md` | `cargo rustc` command reference |
| `cargo-rustdoc.md` | `cargo rustdoc` command reference |
| `cargo-search.md` | `cargo search` command reference |
| `cargo-test.md` | `cargo test` command reference |
| `cargo-tree.md` | `cargo tree` command reference |
| `cargo-uninstall.md` | `cargo uninstall` command reference |
| `cargo-update.md` | `cargo update` command reference |
| `cargo-vendor.md` | `cargo vendor` command reference |
| `cargo-version.md` | `cargo version` command reference |
| `cargo-yank.md` | `cargo yank` command reference |
| `cargo.md` | cargo top-level command |
| `deprecated-and-removed.md` | Deprecated and removed commands |

## getting-started/

| File | Description |
|------|-------------|
| `first-steps.md` | Create and run a first package |
| `index.md` | Getting started overview |
| `installation.md` | Installing Rust and Cargo |

## guide/

| File | Description |
|------|-------------|
| `build-performance.md` | Improving build performance |
| `cargo-home.md` | Cargo home directory |
| `cargo-toml-vs-cargo-lock.md` | Cargo.toml vs Cargo.lock |
| `continuous-integration.md` | Using Cargo in CI |
| `creating-a-new-project.md` | Creating a new project |
| `dependencies.md` | Adding dependencies |
| `index.md` | Guide overview |
| `project-layout.md` | Package layout conventions |
| `tests.md` | Running tests |
| `why-cargo-exists.md` | Why Cargo exists |
| `working-on-an-existing-project.md` | Working on an existing project |

## reference/

| File | Description |
|------|-------------|
| `build-cache.md` | Build cache layout |
| `build-script-examples.md` | Build script examples |
| `build-scripts.md` | Build scripts (build.rs) |
| `cargo-targets.md` | Package targets (bin, lib, example, test, bench) |
| `config.md` | Configuration (.cargo/config.toml) |
| `credential-provider-protocol.md` | Credential provider protocol |
| `environment-variables.md` | Environment variables |
| `external-tools.md` | External tools and custom subcommands |
| `features-examples.md` | Feature examples |
| `features.md` | Features and optional dependencies |
| `future-incompat-report.md` | Future incompatibility reports |
| `index.md` | Reference overview |
| `lints.md` | Lints tables |
| `manifest.md` | Manifest format (Cargo.toml) |
| `overriding-dependencies.md` | Overriding dependencies |
| `pkgid-spec.md` | Package ID specifications |
| `profiles.md` | Profiles |
| `publishing.md` | Publishing on crates.io |
| `registries.md` | Registries |
| `registry-authentication.md` | Registry authentication |
| `registry-index.md` | Registry index format |
| `registry-web-api.md` | Registry web API |
| `resolver.md` | Dependency resolver |
| `running-a-registry.md` | Running a registry |
| `rust-version.md` | rust-version (MSRV) |
| `semver.md` | SemVer compatibility |
| `source-replacement.md` | Source replacement |
| `specifying-dependencies.md` | Specifying dependencies |
| `timings.md` | Build timings |
| `unstable.md` | Unstable (nightly) features |
| `workspaces.md` | Workspaces |
