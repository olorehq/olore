# Bun Table of Contents

## Directory Map

```
contents/
├── index.mdx                   # Welcome / overview
├── installation.mdx            # Installation guide
├── quickstart.mdx              # Quick start
├── typescript.mdx              # TypeScript support
├── typescript-6.mdx            # TypeScript 6 notes
├── bundler/                    # Bundler (13 files)
├── runtime/                    # Runtime APIs (53 files)
│   ├── http/                   # HTTP server (7 files)
│   ├── networking/             # DNS, fetch, TCP, UDP (4 files)
│   └── templating/             # bun create / bun init (2 files)
├── test/                       # Test runner (12 files)
├── pm/                         # Package manager (14 files)
│   └── cli/                    # PM CLI commands (12 files)
├── guides/                     # How-to guides (171 files)
│   ├── binary/                 # Binary data conversions (22 files)
│   ├── deployment/             # Deploy to cloud platforms (6 files)
│   ├── ecosystem/              # Framework integrations (28 files)
│   ├── html-rewriter/          # HTMLRewriter examples (2 files)
│   ├── http/                   # HTTP server patterns (13 files)
│   ├── install/                # Package install patterns (17 files)
│   ├── process/                # Process / subprocess (9 files)
│   ├── read-file/              # File reading patterns (9 files)
│   ├── runtime/                # Runtime patterns (20 files)
│   ├── streams/                # Stream conversions (12 files)
│   ├── util/                   # Utility patterns (19 files)
│   ├── websocket/              # WebSocket patterns (4 files)
│   └── write-file/             # File writing patterns (10 files)
└── snippets/cli/               # CLI reference snippets (13 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` |
| Installation | `contents/installation.mdx` |
| HTTP server | `contents/runtime/http/server.mdx` |
| SQLite | `contents/runtime/sqlite.mdx` |
| SQL (PostgreSQL/MySQL) | `contents/runtime/sql.mdx` |
| Redis | `contents/runtime/redis.mdx` |
| S3 | `contents/runtime/s3.mdx` |
| WebSockets | `contents/runtime/http/websockets.mdx` |
| File I/O | `contents/runtime/file-io.mdx` |
| Package manager | `contents/pm/cli/install.mdx` |
| Bundler | `contents/bundler/index.mdx` |
| Test runner | `contents/test/index.mdx` |
| Node.js compat | `contents/runtime/nodejs-compat.mdx` |
| FFI (C/native) | `contents/runtime/ffi.mdx` |
| Shell scripting | `contents/runtime/shell.mdx` |

## Detailed Structure

### Root (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Welcome to Bun overview |
| `installation.mdx` | Installation guide |
| `quickstart.mdx` | Quick start tutorial |
| `typescript.mdx` | TypeScript support |
| `typescript-6.mdx` | TypeScript 6 migration notes |

### bundler/ (13 files)

| File | Description |
|------|-------------|
| `index.mdx` | Bundler overview and Bun.build() API |
| `bytecode.mdx` | Bytecode compilation |
| `css.mdx` | CSS bundling |
| `esbuild.mdx` | esbuild compatibility |
| `executables.mdx` | Standalone executables |
| `fullstack.mdx` | Fullstack bundling |
| `hot-reloading.mdx` | Hot module reloading |
| `html-static.mdx` | Static HTML bundling |
| `loaders.mdx` | Custom loaders |
| `macros.mdx` | Bun macros |
| `minifier.mdx` | Minification |
| `plugins.mdx` | Bundler plugins |
| `standalone-html.mdx` | Standalone HTML output |

### runtime/ (37 files)

| File | Description |
|------|-------------|
| `index.mdx` | Runtime overview and bun run |
| `archive.mdx` | Archive (zip/tar) support |
| `auto-install.mdx` | Auto-install packages |
| `binary-data.mdx` | Binary data APIs |
| `bun-apis.mdx` | Bun global API overview |
| `bunfig.mdx` | bunfig.toml configuration |
| `c-compiler.mdx` | C compiler integration |
| `child-process.mdx` | Child processes / subprocess |
| `color.mdx` | Color output |
| `console.mdx` | Console API |
| `cookies.mdx` | Cookie handling |
| `cron.mdx` | Cron jobs |
| `csrf.mdx` | CSRF protection |
| `debugger.mdx` | Debugger |
| `environment-variables.mdx` | Environment variables |
| `ffi.mdx` | Foreign function interface (C/native) |
| `file-io.mdx` | File I/O (Bun.file, Bun.write) |
| `file-system-router.mdx` | File system routing |
| `file-types.mdx` | Supported file types |
| `glob.mdx` | Glob matching |
| `globals.mdx` | Global variables |
| `hashing.mdx` | Hashing utilities |
| `html-rewriter.mdx` | HTMLRewriter API |
| `image.mdx` | Image processing |
| `json5.mdx` | JSON5 support |
| `jsonl.mdx` | JSONL support |
| `jsx.mdx` | JSX/TSX support |
| `markdown.mdx` | Markdown support |
| `module-resolution.mdx` | Module resolution |
| `node-api.mdx` | Node-API (napi) |
| `nodejs-compat.mdx` | Node.js compatibility |
| `plugins.mdx` | Runtime plugins |
| `redis.mdx` | Redis client |
| `repl.mdx` | REPL |
| `s3.mdx` | S3 client |
| `secrets.mdx` | Secrets management |
| `semver.mdx` | Semver utilities |
| `shell.mdx` | Bun Shell scripting |
| `sql.mdx` | SQL (PostgreSQL/MySQL) |
| `sqlite.mdx` | SQLite (bun:sqlite) |
| `streams.mdx` | Streams API |
| `toml.mdx` | TOML support |
| `transpiler.mdx` | Transpiler API |
| `typescript.mdx` | TypeScript runtime support |
| `utils.mdx` | Bun utility functions |
| `watch-mode.mdx` | Watch mode |
| `web-apis.mdx` | Web APIs (fetch, Request, etc.) |
| `webview.mdx` | WebView |
| `workers.mdx` | Web Workers |
| `yaml.mdx` | YAML support |

### runtime/http/ (7 files)

| File | Description |
|------|-------------|
| `server.mdx` | HTTP server (Bun.serve) |
| `cookies.mdx` | HTTP cookies |
| `error-handling.mdx` | HTTP error handling |
| `metrics.mdx` | Server metrics |
| `routing.mdx` | Request routing |
| `tls.mdx` | TLS/HTTPS |
| `websockets.mdx` | WebSockets |

### runtime/networking/ (4 files)

| File | Description |
|------|-------------|
| `dns.mdx` | DNS resolution |
| `fetch.mdx` | Fetch API |
| `tcp.mdx` | TCP sockets |
| `udp.mdx` | UDP sockets |

### runtime/templating/ (2 files)

| File | Description |
|------|-------------|
| `create.mdx` | bun create (project templates) |
| `init.mdx` | bun init (scaffold project) |

### test/ (12 files)

| File | Description |
|------|-------------|
| `index.mdx` | Test runner overview |
| `writing-tests.mdx` | Writing tests |
| `code-coverage.mdx` | Code coverage |
| `configuration.mdx` | Test configuration |
| `dates-times.mdx` | Date/time mocking |
| `discovery.mdx` | Test discovery |
| `dom.mdx` | DOM testing |
| `lifecycle.mdx` | Test lifecycle hooks |
| `mocks.mdx` | Mocking |
| `reporters.mdx` | Test reporters |
| `runtime-behavior.mdx` | Runtime behavior in tests |
| `snapshots.mdx` | Snapshot testing |

### pm/ (14 files)

| File | Description |
|------|-------------|
| `bunx.mdx` | bunx (package runner) |
| `catalogs.mdx` | Dependency catalogs |
| `filter.mdx` | Workspace filter |
| `global-cache.mdx` | Global cache |
| `global-store.mdx` | Global store |
| `isolated-installs.mdx` | Isolated installs |
| `lifecycle.mdx` | Lifecycle scripts |
| `lockfile.mdx` | Lockfile (bun.lock) |
| `npmrc.mdx` | .npmrc support |
| `overrides.mdx` | Dependency overrides |
| `scopes-registries.mdx` | Scoped registries |
| `security-scanner-api.mdx` | Security scanner |
| `workspaces.mdx` | Workspaces |

### pm/cli/ (12 files)

| File | Description |
|------|-------------|
| `install.mdx` | bun install |
| `add.mdx` | bun add |
| `remove.mdx` | bun remove |
| `update.mdx` | bun update |
| `link.mdx` | bun link |
| `outdated.mdx` | bun outdated |
| `patch.mdx` | bun patch |
| `pm.mdx` | bun pm |
| `publish.mdx` | bun publish |
| `audit.mdx` | bun audit |
| `info.mdx` | bun info |
| `why.mdx` | bun why |

### guides/binary/ (22 files)

Binary data conversion recipes: ArrayBuffer, Blob, Buffer, TypedArray, DataView, ReadableStream conversions.

### guides/deployment/ (6 files)

| File | Description |
|------|-------------|
| `aws-lambda.mdx` | Deploy to AWS Lambda |
| `digital-ocean.mdx` | Deploy to DigitalOcean |
| `google-cloud-run.mdx` | Deploy to Google Cloud Run |
| `railway.mdx` | Deploy to Railway |
| `render.mdx` | Deploy to Render |
| `vercel.mdx` | Deploy to Vercel |

### guides/ecosystem/ (28 files)

Framework/library integration guides: Astro, Discord.js, Docker, Drizzle, Elysia, Express, Gel, Hono, Mongoose, Neon, Next.js, Nuxt, PM2, Prisma, Qwik, React, Remix, Sentry, SolidStart, SSR React, Stric, SvelteKit, systemd, TanStack Start, Upstash, Vite.

### guides/http/ (13 files)

HTTP server patterns: basic server, file uploads, fetch, Unix socket, hot reload, proxy, SSE, streaming, TLS, cluster.

### guides/install/ (17 files)

Package install patterns: add dev/optional/peer/git/tarball, CI/CD, custom registry, Azure Artifacts, JFrog, npm alias, scopes, workspaces, yarn lockfile migration.

### guides/process/ (9 files)

Process patterns: argv, ctrl-c, IPC, nanoseconds, OS signals, spawn (stdout, stderr), stdin.

### guides/read-file/ (9 files)

File reading patterns: ArrayBuffer, Buffer, check exists, JSON, MIME type, stream, string, Uint8Array, watch.

### guides/runtime/ (20 files)

Runtime patterns: build-time constants, CI/CD, macOS code signing, define constants, delete files/dirs, heap snapshot, import HTML/JSON/JSON5/TOML/YAML, read/set env, shell, timezone, tsconfig paths, TypeScript, VS Code debugger, web debugger.

### guides/streams/ (12 files)

Stream conversion recipes: Node Readable to ArrayBuffer, Blob, JSON, string, Uint8Array; ReadableStream to array, ArrayBuffer, Blob, Buffer, JSON, string, TypedArray.

### guides/util/ (19 files)

Utility patterns: base64, deep equals, deflate, detect Bun, entrypoint, escape HTML, file URL, gzip, password hashing, import.meta (dir/file/path), UUID, main check, path to file URL, sleep, upgrade, version, which.

### guides/websocket/ (4 files)

| File | Description |
|------|-------------|
| `simple.mdx` | Basic WebSocket server |
| `compression.mdx` | WebSocket compression |
| `context.mdx` | WebSocket context data |
| `pubsub.mdx` | Pub/sub messaging |

### guides/write-file/ (10 files)

File writing patterns: append, basic write, Blob, cat, copy, FileSink (incremental), Response, stdout, stream, unlink.

### guides/html-rewriter/ (2 files)

| File | Description |
|------|-------------|
| `extract-links.mdx` | Extract links with HTMLRewriter |
| `extract-social-meta.mdx` | Extract social meta tags |

### snippets/cli/ (13 files)

CLI reference snippets for: add, build, bunx, init, install, link, outdated, patch, publish, remove, run, test, update.
