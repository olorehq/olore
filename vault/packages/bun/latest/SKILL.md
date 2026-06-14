---
name: olore-bun-latest
description: Local Bun documentation reference (latest). Bun is an all-in-one JavaScript toolkit covering runtime, bundler, package manager, test runner, HTTP server, SQLite, SQL, Redis, S3, WebSockets, and Node.js compatibility.
---

# Bun Documentation

Bun is an all-in-one toolkit for JavaScript/TypeScript: a fast runtime (drop-in Node.js replacement), bundler, package manager, test runner, HTTP server, and built-in APIs for SQLite, SQL, Redis, S3, WebSockets, and more.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Getting started | `contents/quickstart.mdx` |
| HTTP server | `contents/runtime/http/server.mdx` |
| SQLite | `contents/runtime/sqlite.mdx` |
| SQL (PostgreSQL/MySQL) | `contents/runtime/sql.mdx` |
| Redis | `contents/runtime/redis.mdx` |
| S3 | `contents/runtime/s3.mdx` |
| File I/O | `contents/runtime/file-io.mdx` |
| WebSockets | `contents/runtime/http/websockets.mdx` |
| Package manager | `contents/pm/cli/install.mdx` |
| Bundler | `contents/bundler/index.mdx` |
| Test runner | `contents/test/index.mdx` |
| Node.js compatibility | `contents/runtime/nodejs-compat.mdx` |
| Shell scripting | `contents/runtime/shell.mdx` |
| FFI / native code | `contents/runtime/ffi.mdx` |

## When to use

Use this skill when the user asks about:
- Bun runtime, `bun run`, watch mode, module resolution
- HTTP server (`Bun.serve`), WebSockets, TLS, routing
- Built-in database clients: SQLite (`bun:sqlite`), SQL, Redis, S3
- File I/O, streams, binary data, glob, shell scripting
- Package management (`bun install`, `bun add`, workspaces, lockfile)
- Bundling, loaders, plugins, macros, standalone executables
- Test runner, mocking, snapshots, code coverage
- Node.js compatibility, Web APIs, TypeScript support
- Environment variables, secrets, FFI, workers, WASM
- Framework integrations (Next.js, Astro, Hono, Elysia, SvelteKit, etc.)
- Deployment (AWS Lambda, Vercel, Railway, Docker, etc.)

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all 302 files organized by directory - always check it first.**
