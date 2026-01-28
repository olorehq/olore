# Changelog

All notable changes to the olore CLI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Version now sourced from package.json (single source of truth)

## [0.1.0] - 2026-01-XX

### Added
- `olore install <package>` - Install packages from registry or local path
- `olore link <path>` - Link local packages for development
- `olore list` - List installed packages
- `olore remove <package>` - Remove installed packages
- `olore init` - Initialize new documentation package
- Multi-agent support (Claude Code, Codex, OpenCode)
- Registry client with version resolution
