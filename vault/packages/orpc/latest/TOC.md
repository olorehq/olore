# orpc Table of Contents

## Directory Map

```
contents/
├── getting-started.md        # Quick start guide
├── procedure.md              # Procedures
├── router.md                 # Routers
├── middleware.md             # Middleware
├── context.md                # Context
├── error-handling.md         # Error handling
├── event-iterator.md         # Streaming / event iterators
├── file-upload-download.md   # File handling
├── metadata.md               # Metadata
├── rpc-handler.md            # RPC handler
├── server-action.md          # Server actions
├── adapters/                 # Framework adapters (20 files)
├── advanced/                 # Advanced topics (9 files)
├── best-practices/           # Best practices (4 files)
├── client/                   # Client usage (6 files)
├── contract-first/           # Contract-first development (3 files)
├── examples/                 # Examples (1 file)
├── helpers/                  # Helper utilities (7 files)
├── integrations/             # Third-party integrations (10 files)
├── migrations/               # Migration guides (1 file)
├── openapi/                  # OpenAPI support (19 files)
│   ├── advanced/             # Advanced OpenAPI topics (5 files)
│   ├── client/               # OpenAPI client (1 file)
│   ├── integrations/         # OpenAPI integrations (2 files)
│   └── plugins/              # OpenAPI plugins (3 files)
└── plugins/                  # Server plugins (15 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started.md` |
| Define procedures | `contents/procedure.md` |
| Define routers | `contents/router.md` |
| Add middleware | `contents/middleware.md` |
| Handle errors | `contents/error-handling.md` |
| OpenAPI setup | `contents/openapi/getting-started.md` |
| Client usage | `contents/client/client-side.md` |
| Framework adapter | `contents/adapters/` |

## Detailed Structure

### Root files (11 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Quick start guide |
| `procedure.md` | Defining procedures with input/output |
| `router.md` | Composing routers |
| `middleware.md` | Writing and applying middleware |
| `context.md` | Context setup and usage |
| `error-handling.md` | Server-side error handling |
| `event-iterator.md` | Streaming with event iterators |
| `file-upload-download.md` | File upload and download |
| `metadata.md` | Procedure metadata |
| `rpc-handler.md` | RPCHandler configuration |
| `server-action.md` | React Server Actions integration |

### adapters/ (20 files)

| File | Description |
|------|-------------|
| `astro.md` | Astro adapter |
| `browser.md` | Browser adapter |
| `electron.md` | Electron adapter |
| `elysia.md` | Elysia adapter |
| `express.md` | Express adapter |
| `fastify.md` | Fastify adapter |
| `h3.md` | H3 adapter |
| `hono.md` | Hono adapter |
| `http.md` | Generic HTTP adapter |
| `message-port.md` | MessagePort adapter |
| `next.md` | Next.js adapter |
| `nuxt.md` | Nuxt adapter |
| `react-native.md` | React Native adapter |
| `remix.md` | Remix adapter |
| `solid-start.md` | SolidStart adapter |
| `svelte-kit.md` | SvelteKit adapter |
| `tanstack-start.md` | TanStack Start adapter |
| `web-workers.md` | Web Workers adapter |
| `websocket.md` | WebSocket adapter |
| `worker-threads.md` | Worker Threads adapter |

### advanced/ (9 files)

| File | Description |
|------|-------------|
| `building-custom-plugins.md` | Building custom plugins |
| `exceeds-the-maximum-length-problem.md` | Handling max length issues |
| `extend-body-parser.md` | Extending the body parser |
| `publish-client-to-npm.md` | Publishing typed client to npm |
| `rpc-json-serializer.md` | RPC JSON serializer |
| `rpc-protocol.md` | RPC protocol internals |
| `superjson.md` | SuperJSON integration |
| `testing-mocking.md` | Testing and mocking |
| `validation-errors.md` | Validation error handling |

### best-practices/ (4 files)

| File | Description |
|------|-------------|
| `dedupe-middleware.md` | Deduplicating middleware |
| `monorepo-setup.md` | Monorepo setup |
| `no-throw-literal.md` | Avoiding throw literal |
| `optimize-ssr.md` | SSR optimization |

### client/ (6 files)

| File | Description |
|------|-------------|
| `client-side.md` | Client-side usage |
| `dynamic-link.md` | Dynamic links |
| `error-handling.md` | Client error handling |
| `event-iterator.md` | Client streaming |
| `rpc-link.md` | RPCLink configuration |
| `server-side.md` | Server-side client usage |

### contract-first/ (3 files)

| File | Description |
|------|-------------|
| `define-contract.md` | Defining contracts |
| `implement-contract.md` | Implementing contracts |
| `router-to-contract.md` | Extracting contract from router |

### examples/ (1 file)

| File | Description |
|------|-------------|
| `openai-streaming.md` | OpenAI streaming example |

### helpers/ (7 files)

| File | Description |
|------|-------------|
| `base64url.md` | Base64URL helper |
| `cookie.md` | Cookie helper |
| `encryption.md` | Encryption helper |
| `form-data.md` | FormData helper |
| `publisher.md` | Publisher helper |
| `ratelimit.md` | Rate limiting helper |
| `signing.md` | Signing helper |

### integrations/ (10 files)

| File | Description |
|------|-------------|
| `ai-sdk.md` | AI SDK integration |
| `better-auth.md` | Better Auth integration |
| `durable-iterator.md` | Durable iterator |
| `hey-api.md` | Hey API client gen integration |
| `opentelemetry.md` | OpenTelemetry integration |
| `pinia-colada.md` | Pinia Colada integration |
| `pino.md` | Pino logging integration |
| `react-swr.md` | React SWR integration |
| `sentry.md` | Sentry integration |
| `tanstack-query.md` | TanStack Query integration |

### migrations/ (1 file)

| File | Description |
|------|-------------|
| `from-trpc.md` | Migrating from tRPC |

### openapi/ (19 files)

| File | Description |
|------|-------------|
| `getting-started.md` | OpenAPI setup |
| `openapi-handler.md` | OpenAPIHandler |
| `openapi-specification.md` | OpenAPI spec generation |
| `input-output-structure.md` | Input/output structure |
| `routing.md` | OpenAPI routing |
| `bracket-notation.md` | Bracket notation |
| `error-handling.md` | OpenAPI error handling |
| `scalar.md` | Scalar UI integration |
| `client/openapi-link.md` | OpenAPI client link |
| `advanced/customizing-error-response.md` | Custom error responses |
| `advanced/disabling-output-validation.md` | Disabling output validation |
| `advanced/expanding-type-support-for-openapi-link.md` | Expanding type support |
| `advanced/openapi-json-serializer.md` | OpenAPI JSON serializer |
| `advanced/redirect-response.md` | Redirect responses |
| `integrations/implement-contract-in-nest.md` | NestJS contract |
| `integrations/trpc.md` | tRPC OpenAPI integration |
| `plugins/openapi-reference.md` | OpenAPI reference plugin |
| `plugins/smart-coercion.md` | Smart coercion plugin |
| `plugins/zod-smart-coercion.md` | Zod smart coercion plugin |

### plugins/ (15 files)

| File | Description |
|------|-------------|
| `batch-requests.md` | Batch requests plugin |
| `body-limit.md` | Body size limit plugin |
| `client-retry.md` | Client retry plugin |
| `compression.md` | Compression plugin |
| `cors.md` | CORS plugin |
| `dedupe-requests.md` | Deduplicate requests plugin |
| `hibernation.md` | Hibernation plugin |
| `request-headers.md` | Request headers plugin |
| `request-validation.md` | Request validation plugin |
| `response-headers.md` | Response headers plugin |
| `response-validation.md` | Response validation plugin |
| `rethrow-handler.md` | Rethrow handler plugin |
| `retry-after.md` | Retry-after plugin |
| `simple-csrf-protection.md` | CSRF protection plugin |
| `strict-get-method.md` | Strict GET method plugin |
