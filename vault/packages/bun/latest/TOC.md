# Bun Table of Contents

## Directory Map

```
contents/
├── runtime/                     # Core runtime APIs and features (48 files)
│   ├── http/                    # HTTP server (7 files)
│   ├── networking/              # DNS, fetch, TCP, UDP (4 files)
│   └── templating/              # bun create, bun init (2 files)
├── bundler/                     # Bundler API and features (13 files)
├── test/                        # Test runner docs (11 files)
├── pm/                          # Package manager docs (12 files)
│   └── cli/                     # PM CLI commands (8 files)
└── guides/                      # How-to guides and code samples
    ├── binary/                  # Binary data conversions (22 files)
    ├── deployment/              # Deployment guides (6 files)
    ├── ecosystem/               # Framework integrations (28 files)
    ├── html-rewriter/           # HTMLRewriter usage (2 files)
    ├── http/                    # HTTP examples (13 files)
    ├── install/                 # Package install examples (19 files)
    ├── process/                 # Process/subprocess guides (9 files)
    ├── read-file/               # File reading examples (9 files)
    ├── runtime/                 # Runtime usage guides (20 files)
    ├── streams/                 # Stream conversion guides (12 files)
    ├── util/                    # Utility function guides (17 files)
    ├── websocket/               # WebSocket guides (4 files)
    └── write-file/              # File writing examples (10 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Run scripts / runtime overview | `contents/runtime/index.mdx` |
| HTTP server | `contents/runtime/http/server.mdx` |
| Bundler | `contents/bundler/index.mdx` |
| Package manager | `contents/pm/` |
| Test runner | `contents/test/index.mdx` |
| SQLite | `contents/runtime/sqlite.mdx` |
| File I/O | `contents/runtime/file-io.mdx` |
| WebSockets | `contents/runtime/http/websockets.mdx` |
| Configuration | `contents/runtime/bunfig.mdx` |
| Ecosystem integrations | `contents/guides/ecosystem/` |

## Detailed Structure

### runtime/ (48 files)

| File | Description |
|------|-------------|
| `index.mdx` | Runtime overview, bun run |
| `bun-apis.mdx` | Bun global API overview |
| `globals.mdx` | Global variables and APIs |
| `web-apis.mdx` | Web-standard APIs (fetch, crypto, etc.) |
| `nodejs-compat.mdx` | Node.js compatibility |
| `typescript.mdx` | TypeScript support |
| `jsx.mdx` | JSX support |
| `file-io.mdx` | File reading/writing with Bun.file() |
| `file-types.mdx` | Supported file types |
| `file-system-router.mdx` | FileSystemRouter API |
| `sqlite.mdx` | Built-in SQLite (bun:sqlite) |
| `sql.mdx` | SQL client |
| `redis.mdx` | Redis client |
| `s3.mdx` | S3 client |
| `streams.mdx` | Web Streams API |
| `binary-data.mdx` | ArrayBuffer, TypedArray, Buffer |
| `workers.mdx` | Web Workers |
| `hashing.mdx` | Hashing APIs (SHA, MD5, etc.) |
| `html-rewriter.mdx` | HTMLRewriter API |
| `shell.mdx` | Shell scripting (Bun.$ API) |
| `glob.mdx` | Glob pattern matching |
| `ffi.mdx` | Foreign Function Interface |
| `plugins.mdx` | Bundler/runtime plugins |
| `module-resolution.mdx` | Module resolution |
| `debugger.mdx` | Bun debugger |
| `transpiler.mdx` | Bun transpiler API |
| `watch-mode.mdx` | Watch mode |
| `auto-install.mdx` | Auto-install packages |
| `environment-variables.mdx` | Environment variables, .env |
| `secrets.mdx` | Secrets API |
| `bunfig.mdx` | bunfig.toml configuration |
| `child-process.mdx` | Child process / Bun.spawn() |
| `console.mdx` | Console API |
| `color.mdx` | Bun.color() |
| `cron.mdx` | Cron scheduling |
| `cookies.mdx` | Cookies API |
| `csrf.mdx` | CSRF protection |
| `semver.mdx` | Semver comparison |
| `toml.mdx` | TOML parsing |
| `yaml.mdx` | YAML parsing |
| `json5.mdx` | JSON5 parsing |
| `jsonl.mdx` | JSONL parsing |
| `markdown.mdx` | Markdown parsing |
| `archive.mdx` | Archive/zip handling |
| `c-compiler.mdx` | C compiler (Bun.cc) |
| `node-api.mdx` | Node-API (napi) |
| `repl.mdx` | REPL |
| `utils.mdx` | Utility functions |

### runtime/http/ (7 files)

| File | Description |
|------|-------------|
| `server.mdx` | HTTP server (Bun.serve) |
| `websockets.mdx` | WebSocket server |
| `routing.mdx` | Request routing |
| `tls.mdx` | TLS/HTTPS |
| `cookies.mdx` | Cookie handling |
| `error-handling.mdx` | Error handling |
| `metrics.mdx` | Server metrics |

### runtime/networking/ (4 files)

| File | Description |
|------|-------------|
| `fetch.mdx` | fetch() API |
| `dns.mdx` | DNS resolution |
| `tcp.mdx` | TCP sockets |
| `udp.mdx` | UDP sockets |

### runtime/templating/ (2 files)

| File | Description |
|------|-------------|
| `create.mdx` | bun create |
| `init.mdx` | bun init |

### bundler/ (13 files)

| File | Description |
|------|-------------|
| `index.mdx` | Bundler overview, Bun.build() |
| `loaders.mdx` | File loaders |
| `plugins.mdx` | Bundler plugins |
| `macros.mdx` | Bun macros |
| `executables.mdx` | Standalone executables |
| `fullstack.mdx` | Fullstack bundling |
| `css.mdx` | CSS bundling |
| `html-static.mdx` | Static HTML bundling |
| `standalone-html.mdx` | Standalone HTML apps |
| `bytecode.mdx` | Bytecode compilation |
| `minifier.mdx` | Minification |
| `hot-reloading.mdx` | Hot reloading |
| `esbuild.mdx` | esbuild compatibility |

### test/ (11 files)

| File | Description |
|------|-------------|
| `index.mdx` | Test runner overview (bun test) |
| `writing-tests.mdx` | Writing tests, expect, describe |
| `mocks.mdx` | Mocking, spyOn, mock() |
| `snapshots.mdx` | Snapshot testing |
| `code-coverage.mdx` | Code coverage |
| `configuration.mdx` | Test configuration |
| `lifecycle.mdx` | beforeAll, afterEach, etc. |
| `discovery.mdx` | Test discovery |
| `reporters.mdx` | Test reporters |
| `runtime-behavior.mdx` | Runtime behavior |
| `dom.mdx` | DOM testing |
| `dates-times.mdx` | Date/time mocking |

### pm/ (12 files)

| File | Description |
|------|-------------|
| `bunx.mdx` | bunx command |
| `workspaces.mdx` | Workspaces |
| `lockfile.mdx` | Lockfile |
| `lifecycle.mdx` | Lifecycle scripts |
| `global-cache.mdx` | Global package cache |
| `scopes-registries.mdx` | Scopes and registries |
| `overrides.mdx` | Dependency overrides |
| `npmrc.mdx` | .npmrc support |
| `catalogs.mdx` | Catalogs |
| `filter.mdx` | Filter |
| `isolated-installs.mdx` | Isolated installs |
| `security-scanner-api.mdx` | Security scanner |

### pm/cli/ (8 files)

| File | Description |
|------|-------------|
| `install.mdx` | bun install |
| `add.mdx` | bun add |
| `remove.mdx` | bun remove |
| `update.mdx` | bun update |
| `publish.mdx` | bun publish |
| `link.mdx` | bun link |
| `pm.mdx` | bun pm |
| `audit.mdx` | bun audit |
| `why.mdx` | bun why |
| `info.mdx` | bun info |
| `patch.mdx` | bun patch |
| `outdated.mdx` | bun outdated |

### guides/ (subdirectory overview)

| Directory | Description |
|-----------|-------------|
| `guides/binary/` | Binary data type conversions (22 guides) |
| `guides/deployment/` | Deploy to Railway, Vercel, AWS Lambda, etc. (6 guides) |
| `guides/ecosystem/` | Framework integrations: Next.js, React, Hono, Elysia, etc. (28 guides) |
| `guides/html-rewriter/` | HTMLRewriter usage examples (2 guides) |
| `guides/http/` | HTTP server examples (13 guides) |
| `guides/install/` | Package install patterns (19 guides) |
| `guides/process/` | Child process and subprocess guides (9 guides) |
| `guides/read-file/` | File reading patterns (9 guides) |
| `guides/runtime/` | Runtime usage patterns (20 guides) |
| `guides/streams/` | Stream conversion guides (12 guides) |
| `guides/util/` | Utility function guides (17 guides) |
| `guides/websocket/` | WebSocket guides (4 guides) |
| `guides/write-file/` | File writing patterns (10 guides) |
