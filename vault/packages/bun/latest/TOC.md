# bun Table of Contents

## Directory Map

```
contents/
├── bundler/  # Bun.build bundler (11 files)
├── compiler/  # Single-file executables / compile (12 files)
├── format/  # Formatter (1 files)
├── guides/  # How-to guides (176 files)
├── lint/  # Linter (3 files)
├── pm/  # Package manager (28 files)
├── project/  # Project/contributing-style docs (6 files)
├── runtime/  # Runtime APIs (67 files)
├── snippets/  # Shared CLI snippets (16 files)
├── test/  # Test runner (13 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` |
| Install | `contents/installation.mdx` |
| Runtime APIs | `contents/runtime/index.mdx` |
| Bundler | `contents/bundler/index.mdx` |
| Test runner | `contents/test/` |
| Package manager | `contents/pm/cli/` |
| Node.js compat | `contents/runtime/nodejs-compat.mdx` |
| Recipes | `contents/guides/` |

## Detailed Structure

### contents/ (6 files)

| File | Description |
|------|-------------|
| `feedback.mdx` | Feedback |
| `index.mdx` | Welcome to Bun |
| `installation.mdx` | Installation |
| `quickstart.mdx` | Quickstart |
| `typescript-6.mdx` | TypeScript 6 and 7 |
| `typescript.mdx` | TypeScript |

### bundler/ (11 files)

| File | Description |
|------|-------------|
| `css.mdx` | CSS |
| `esbuild.mdx` | esbuild |
| `fullstack.mdx` | Fullstack dev server |
| `hot-reloading.mdx` | Hot reloading |
| `html-static.mdx` | HTML & static sites |
| `index.mdx` | Bundler |
| `loaders.mdx` | Loaders |
| `macros.mdx` | Macros |
| `minifier.mdx` |  |
| `plugins.mdx` | Plugins |
| `standalone-html.mdx` | Standalone HTML |

### compiler/ (12 files)

| File | Description |
|------|-------------|
| `aot.mdx` | Ahead-of-time compilation |
| `bytecode.mdx` | Bytecode Caching |
| `compatibility.mdx` | Compatibility |
| `debugging.mdx` | Test and debug a compiled program |
| `executables.mdx` | Single-file executable |
| `explain.mdx` | Get more of your program typed |
| `index.mdx` | Compiler |
| `internals.mdx` | How bun compile works |
| `libraries.mdx` | Libraries |
| `size.mdx` | Smaller executables |
| `troubleshooting.mdx` | Troubleshooting |
| `types.mdx` | How bun compile uses your types |

### format/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Formatter |

### guides/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Guides |

### guides/binary/ (22 files)

| File | Description |
|------|-------------|
| `arraybuffer-to-array.mdx` | Convert an ArrayBuffer to an array of numbers |
| `arraybuffer-to-blob.mdx` | Convert an ArrayBuffer to a Blob |
| `arraybuffer-to-buffer.mdx` | Convert an ArrayBuffer to a Buffer |
| `arraybuffer-to-string.mdx` | Convert an ArrayBuffer to a string |
| `arraybuffer-to-typedarray.mdx` | Convert an ArrayBuffer to a Uint8Array |
| `blob-to-arraybuffer.mdx` | Convert a Blob to an ArrayBuffer |
| `blob-to-dataview.mdx` | Convert a Blob to a DataView |
| `blob-to-stream.mdx` | Convert a Blob to a ReadableStream |
| `blob-to-string.mdx` | Convert a Blob to a string |
| `blob-to-typedarray.mdx` | Convert a Blob to a Uint8Array |
| `buffer-to-arraybuffer.mdx` | Convert a Buffer to an ArrayBuffer |
| `buffer-to-blob.mdx` | Convert a Buffer to a blob |
| `buffer-to-readablestream.mdx` | Convert a Buffer to a ReadableStream |
| `buffer-to-string.mdx` | Convert a Buffer to a string |
| `buffer-to-typedarray.mdx` | Convert a Buffer to a Uint8Array |
| `dataview-to-string.mdx` | Convert a DataView to a string |
| `typedarray-to-arraybuffer.mdx` | Convert a Uint8Array to an ArrayBuffer |
| `typedarray-to-blob.mdx` | Convert a Uint8Array to a Blob |
| `typedarray-to-buffer.mdx` | Convert a Uint8Array to a Buffer |
| `typedarray-to-dataview.mdx` | Convert a Uint8Array to a DataView |
| `typedarray-to-readablestream.mdx` | Convert a Uint8Array to a ReadableStream |
| `typedarray-to-string.mdx` | Convert a Uint8Array to a string |

### guides/deployment/ (6 files)

| File | Description |
|------|-------------|
| `aws-lambda.mdx` | Deploy a Bun application on AWS Lambda |
| `digital-ocean.mdx` | Deploy a Bun application on DigitalOcean |
| `google-cloud-run.mdx` | Deploy a Bun application on Google Cloud Run |
| `railway.mdx` | Deploy a Bun application on Railway |
| `render.mdx` | Deploy a Bun application on Render |
| `vercel.mdx` | Deploy a Bun application on Vercel |

### guides/ecosystem/ (27 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Build an app with Astro and Bun |
| `discordjs.mdx` | Create a Discord bot |
| `docker.mdx` | Containerize a Bun application with Docker |
| `drizzle.mdx` | Use Drizzle ORM with Bun |
| `elysia.mdx` | Build an HTTP server using Elysia and Bun |
| `express.mdx` | Build an HTTP server using Express and Bun |
| `gel.mdx` | Use Gel with Bun |
| `hono.mdx` | Build an HTTP server using Hono and Bun |
| `mongoose.mdx` | Read and write data to MongoDB using Mongoose and Bun |
| `neon-drizzle.mdx` | Use Neon Postgres through Drizzle ORM |
| `neon-serverless-postgres.mdx` | Use Neon's Serverless Postgres with Bun |
| `nextjs.mdx` | Build an app with Next.js and Bun |
| `nuxt.mdx` | Build an app with Nuxt and Bun |
| `pm2.mdx` | Run Bun as a daemon with PM2 |
| `prisma-postgres.mdx` | Use Prisma Postgres with Bun |
| `prisma.mdx` | Use Prisma with Bun |
| `qwik.mdx` | Build an app with Qwik and Bun |
| `react.mdx` | Build a React app with Bun |
| `remix.mdx` | Build an app with Remix and Bun |
| `sentry.mdx` | Add Sentry to a Bun app |
| `solidstart.mdx` | Build an app with SolidStart and Bun |
| `ssr-react.mdx` | Server-side render (SSR) a React component |
| `sveltekit.mdx` | Build an app with SvelteKit and Bun |
| `systemd.mdx` | Run Bun as a daemon with systemd |
| `tanstack-start.mdx` | Use TanStack Start with Bun |
| `upstash.mdx` | Bun Redis with Upstash |
| `vite.mdx` | Build a frontend using Vite and Bun |

### guides/format/ (2 files)

| File | Description |
|------|-------------|
| `migrate-from-oxfmt.mdx` | Migrate from oxfmt to bun fmt |
| `migrate-from-prettier.mdx` | Migrate from Prettier to bun fmt |

### guides/html-rewriter/ (2 files)

| File | Description |
|------|-------------|
| `extract-links.mdx` | Extract links from a webpage using HTMLRewriter |
| `extract-social-meta.mdx` | Extract social share images and Open Graph tags |

### guides/http/ (13 files)

| File | Description |
|------|-------------|
| `cluster.mdx` | Start a cluster of HTTP servers |
| `fetch-unix.mdx` | fetch with unix domain sockets in Bun |
| `fetch.mdx` | Send an HTTP request using fetch |
| `file-uploads.mdx` | Upload files via HTTP using FormData |
| `hot.mdx` | Hot reload an HTTP server |
| `proxy.mdx` | Proxy HTTP requests using fetch() |
| `server.mdx` | Common HTTP server usage |
| `simple.mdx` | Write a simple HTTP server |
| `sse.mdx` | Server-Sent Events (SSE) with Bun |
| `stream-file.mdx` | Stream a file as an HTTP Response |
| `stream-iterator.mdx` | Streaming HTTP Server with Async Iterators |
| `stream-node-streams-in-bun.mdx` | Streaming HTTP Server with Node.js Streams |
| `tls.mdx` | Configure TLS on an HTTP server |

### guides/install/ (17 files)

| File | Description |
|------|-------------|
| `add-dev.mdx` | Add a development dependency |
| `add-git.mdx` | Add a Git dependency |
| `add-optional.mdx` | Add an optional dependency |
| `add-peer.mdx` | Add a peer dependency |
| `add-tarball.mdx` | Add a tarball dependency |
| `add.mdx` | Add a dependency |
| `azure-artifacts.mdx` | Using bun install with an Azure Artifacts npm registry |
| `cicd.mdx` | Install dependencies with Bun in GitHub Actions |
| `custom-registry.mdx` | Override the default npm registry for bun install |
| `from-npm-install-to-bun-install.mdx` | Migrate from npm install to bun install |
| `git-diff-bun-lockfile.mdx` | Configure git to diff Bun's lockb lockfile |
| `jfrog-artifactory.mdx` | Using bun install with Artifactory |
| `npm-alias.mdx` | Install a package under a different name |
| `registry-scope.mdx` | Configure a private registry for an organization scope with bun install |
| `trusted.mdx` | Add a trusted dependency |
| `workspaces.mdx` | Configuring a monorepo using workspaces |
| `yarnlock.mdx` | Generate a yarn-compatible lockfile |

### guides/lint/ (2 files)

| File | Description |
|------|-------------|
| `migrate-from-eslint.mdx` | Migrate from ESLint to bun lint |
| `migrate-from-oxlint.mdx` | Migrate from oxlint to bun lint |

### guides/process/ (9 files)

| File | Description |
|------|-------------|
| `argv.mdx` | Parse command-line arguments |
| `ctrl-c.mdx` | Listen for CTRL+C |
| `ipc.mdx` | Spawn a child process and communicate using IPC |
| `nanoseconds.mdx` | Get the process uptime in nanoseconds |
| `os-signals.mdx` | Listen to OS signals |
| `spawn-stderr.mdx` | Read stderr from a child process |
| `spawn-stdout.mdx` | Read stdout from a child process |
| `spawn.mdx` | Spawn a child process |
| `stdin.mdx` | Read from stdin |

### guides/read-file/ (9 files)

| File | Description |
|------|-------------|
| `arraybuffer.mdx` | Read a file to an ArrayBuffer |
| `buffer.mdx` | Read a file to a Buffer |
| `exists.mdx` | Check if a file exists |
| `json.mdx` | Read a JSON file |
| `mime.mdx` | Get the MIME type of a file |
| `stream.mdx` | Read a file as a ReadableStream |
| `string.mdx` | Read a file as a string |
| `uint8array.mdx` | Read a file to a Uint8Array |
| `watch.mdx` | Watch a directory for changes |

### guides/runtime/ (21 files)

| File | Description |
|------|-------------|
| `build-time-constants.mdx` | Build-time constants with --define |
| `cicd.mdx` | Install and run Bun in GitHub Actions |
| `codesign-macos-executable.mdx` | Codesign a single-file JavaScript executable on macOS |
| `define-constant.mdx` | Define and replace static globals & constants |
| `delete-directory.mdx` | Delete directories |
| `delete-file.mdx` | Delete files |
| `heap-snapshot.mdx` | Inspect memory usage using V8 heap snapshots |
| `import-html.mdx` | Import a HTML file as text |
| `import-json.mdx` | Import a JSON file |
| `import-json5.mdx` | Import a JSON5 file |
| `import-toml.mdx` | Import a TOML file |
| `import-xml.mdx` | Import an XML file |
| `import-yaml.mdx` | Import a YAML file |
| `read-env.mdx` | Read environment variables |
| `set-env.mdx` | Set environment variables |
| `shell.mdx` | Run a Shell Command |
| `timezone.mdx` | Set a time zone in Bun |
| `tsconfig-paths.mdx` | Re-map import paths |
| `typescript.mdx` | Install TypeScript declarations for Bun |
| `vscode-debugger.mdx` | Debugging Bun with the VS Code extension |
| `web-debugger.mdx` | Debugging Bun with the web debugger |

### guides/streams/ (12 files)

| File | Description |
|------|-------------|
| `node-readable-to-arraybuffer.mdx` | Convert a Node.js Readable to an ArrayBuffer |
| `node-readable-to-blob.mdx` | Convert a Node.js Readable to a Blob |
| `node-readable-to-json.mdx` | Convert a Node.js Readable to JSON |
| `node-readable-to-string.mdx` | Convert a Node.js Readable to a string |
| `node-readable-to-uint8array.mdx` | Convert a Node.js Readable to an Uint8Array |
| `to-array.mdx` | Convert a ReadableStream to an array of chunks |
| `to-arraybuffer.mdx` | Convert a ReadableStream to an ArrayBuffer |
| `to-blob.mdx` | Convert a ReadableStream to a Blob |
| `to-buffer.mdx` | Convert a ReadableStream to a Buffer |
| `to-json.mdx` | Convert a ReadableStream to JSON |
| `to-string.mdx` | Convert a ReadableStream to a string |
| `to-typedarray.mdx` | Convert a ReadableStream to a Uint8Array |

### guides/util/ (19 files)

| File | Description |
|------|-------------|
| `base64.mdx` | Encode and decode base64 data |
| `deep-equals.mdx` | Check if two objects are deeply equal |
| `deflate.mdx` | Compress and decompress data with DEFLATE |
| `detect-bun.mdx` | Detect when code is executed with Bun |
| `entrypoint.mdx` | Check if the current file is the entrypoint |
| `escape-html.mdx` | Escape an HTML string |
| `file-url-to-path.mdx` | Convert a file URL to an absolute path |
| `gzip.mdx` | Compress and decompress data with gzip |
| `hash-a-password.mdx` | Hash a password |
| `import-meta-dir.mdx` | Get the directory of the current file |
| `import-meta-file.mdx` | Get the file name of the current file |
| `import-meta-path.mdx` | Get the absolute path of the current file |
| `javascript-uuid.mdx` | Generate a UUID |
| `main.mdx` | Get the absolute path to the current entrypoint |
| `path-to-file-url.mdx` | Convert an absolute path to a file URL |
| `sleep.mdx` | Sleep for a fixed number of milliseconds |
| `upgrade.mdx` | Upgrade Bun to the latest version |
| `version.mdx` | Get the current Bun version |
| `which-path-to-executable-bin.mdx` | Get the path to an executable bin file |

### guides/websocket/ (4 files)

| File | Description |
|------|-------------|
| `compression.mdx` | Enable compression for WebSocket messages |
| `context.mdx` | Set per-socket contextual data on a WebSocket |
| `pubsub.mdx` | Build a publish-subscribe WebSocket server |
| `simple.mdx` | Build a simple WebSocket server |

### guides/write-file/ (10 files)

| File | Description |
|------|-------------|
| `append.mdx` | Append content to a file |
| `basic.mdx` | Write a string to a file |
| `blob.mdx` | Write a Blob to a file |
| `cat.mdx` | Write a file to stdout |
| `file-cp.mdx` | Copy a file to another location |
| `filesink.mdx` | Write a file incrementally |
| `response.mdx` | Write a Response to a file |
| `stdout.mdx` | Write to stdout |
| `stream.mdx` | Write a ReadableStream to a file |
| `unlink.mdx` | Delete a file |

### lint/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Linter |
| `plugins.mdx` | ESLint plugins |

### lint/rules/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Lint rules |

### pm/ (14 files)

| File | Description |
|------|-------------|
| `bunx.mdx` | bunx |
| `catalogs.mdx` | Catalogs |
| `filter.mdx` | bun --filter |
| `global-cache.mdx` | Global cache |
| `global-store.mdx` | Global virtual store |
| `isolated-installs.mdx` | Isolated installs |
| `lifecycle.mdx` | Lifecycle scripts |
| `lockfile.mdx` | Lockfile |
| `npmrc.mdx` | .npmrc support |
| `overrides.mdx` | Overrides and resolutions |
| `package-extensions.mdx` | Package extensions |
| `scopes-registries.mdx` | Scopes and registries |
| `security-scanner-api.mdx` | Security Scanner API |
| `workspaces.mdx` | Workspaces |

### pm/cli/ (14 files)

| File | Description |
|------|-------------|
| `add.mdx` | bun add |
| `audit.mdx` | bun audit |
| `dedupe.mdx` | bun dedupe |
| `info.mdx` | bun info |
| `install.mdx` | bun install |
| `link.mdx` | bun link |
| `outdated.mdx` | bun outdated |
| `patch.mdx` | bun patch |
| `pm.mdx` | bun pm |
| `prune.mdx` | bun prune |
| `publish.mdx` | bun publish |
| `remove.mdx` | bun remove |
| `update.mdx` | bun update |
| `why.mdx` | bun why |

### project/ (6 files)

| File | Description |
|------|-------------|
| `benchmarking.mdx` | Benchmarking |
| `bindgen.mdx` | Bindgen |
| `building-windows.mdx` | Building Windows |
| `contributing.mdx` | Contributing |
| `license.mdx` | License |
| `roadmap.mdx` | Roadmap |

### runtime/ (54 files)

| File | Description |
|------|-------------|
| `archive.mdx` | Archive |
| `auto-install.mdx` | Auto-install |
| `binary-data.mdx` | Binary Data |
| `bun-apis.mdx` | Bun APIs |
| `bunfig.mdx` | bunfig.toml |
| `c-compiler.mdx` | C Compiler |
| `check.mdx` | Type checking |
| `child-process.mdx` | Spawn |
| `code-generation-from-strings.mdx` | Code generation from strings |
| `color.mdx` | Color |
| `console.mdx` | Console |
| `cookies.mdx` | Cookies |
| `cron.mdx` | Cron |
| `csrf.mdx` | CSRF Protection |
| `debugger.mdx` | Debugging |
| `environment-variables.mdx` | Environment Variables |
| `ffi.mdx` | FFI |
| `file-io.mdx` | File I/O |
| `file-system-router.mdx` | File System Router |
| `file-types.mdx` | File Types |
| `glob.mdx` | Glob |
| `globals.mdx` | Globals |
| `hashing.mdx` | Hashing |
| `html-rewriter.mdx` | HTMLRewriter |
| `image.mdx` | Image |
| `index.mdx` | Bun Runtime |
| `json5.mdx` | JSON5 |
| `jsonl.mdx` | JSONL |
| `jsx.mdx` | JSX |
| `markdown.mdx` | Markdown |
| `module-graph.mdx` | ModuleGraph |
| `module-resolution.mdx` | Module Resolution |
| `node-api.mdx` | Node-API |
| `nodejs-compat.mdx` | Node.js Compatibility |
| `plugins.mdx` | Plugins |
| `redis.mdx` | Redis |
| `repl.mdx` | REPL |
| `s3.mdx` | S3 |
| `secrets.mdx` | Secrets |
| `semver.mdx` | Semver |
| `shell.mdx` | Shell |
| `sql.mdx` | SQL |
| `sqlite.mdx` | SQLite |
| `streams.mdx` | Streams |
| `toml.mdx` | TOML |
| `transpiler.mdx` | Transpiler |
| `typescript.mdx` | TypeScript |
| `utils.mdx` | Utils |
| `watch-mode.mdx` | Watch Mode |
| `web-apis.mdx` | Web APIs |
| `webview.mdx` | WebView |
| `workers.mdx` | Workers |
| `xml.mdx` | XML |
| `yaml.mdx` | YAML |

### runtime/http/ (7 files)

| File | Description |
|------|-------------|
| `cookies.mdx` | Cookies |
| `error-handling.mdx` | Error Handling |
| `metrics.mdx` | Metrics |
| `routing.mdx` | Routing |
| `server.mdx` | Server |
| `tls.mdx` | TLS |
| `websockets.mdx` | WebSockets |

### runtime/networking/ (4 files)

| File | Description |
|------|-------------|
| `dns.mdx` | DNS |
| `fetch.mdx` | Fetch |
| `tcp.mdx` | TCP |
| `udp.mdx` | UDP |

### runtime/templating/ (2 files)

| File | Description |
|------|-------------|
| `create.mdx` | bun create |
| `init.mdx` | bun init |

### snippets/cli/ (16 files)

| File | Description |
|------|-------------|
| `add.mdx` |  |
| `build.mdx` |  |
| `bunx.mdx` |  |
| `compile.mdx` |  |
| `format.mdx` |  |
| `init.mdx` |  |
| `install.mdx` |  |
| `link.mdx` |  |
| `lint.mdx` |  |
| `outdated.mdx` |  |
| `patch.mdx` |  |
| `publish.mdx` |  |
| `remove.mdx` |  |
| `run.mdx` |  |
| `test.mdx` |  |
| `update.mdx` |  |

### test/ (13 files)

| File | Description |
|------|-------------|
| `code-coverage.mdx` | Code coverage |
| `configuration.mdx` | Test configuration |
| `dates-times.mdx` | Dates and times |
| `discovery.mdx` | Finding tests |
| `dom.mdx` | DOM testing |
| `index.mdx` | Test runner |
| `lifecycle.mdx` | Lifecycle hooks |
| `mocks.mdx` | Mocks |
| `parallel.mdx` | Parallel & isolated test runs |
| `reporters.mdx` | Test Reporters |
| `runtime-behavior.mdx` | Runtime behavior |
| `snapshots.mdx` | Snapshots |
| `writing-tests.mdx` | Writing tests |
