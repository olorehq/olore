# orpc Table of Contents

## Directory Map

```
contents/
├── getting-started.md        # Quickstart and installation
├── procedure.md              # Defining procedures
├── router.md                 # Building routers
├── rpc-handler.md            # RPC HTTP handler
├── context.md                # Request context
├── middleware.md             # Middleware system
├── metadata.md               # Procedure metadata
├── error-handling.md         # Error handling
├── event-iterator.md         # Streaming / event iterators
├── file-upload-download.md   # File upload and download
├── server-action.md          # Server actions
├── adapters/                 # Framework adapters (20 files)
├── client/                   # Client usage (6 files)
├── contract-first/           # Contract-first workflow (3 files)
├── plugins/                  # Server/client plugins (15 files)
├── openapi/                  # OpenAPI integration (19 files)
├── integrations/             # Third-party integrations (9 files)
├── helpers/                  # Utility helpers (7 files)
├── advanced/                 # Advanced topics (9 files)
├── best-practices/           # Best practices (4 files)
├── examples/                 # Code examples (1 file)
└── migrations/               # Migration guides (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started.md` |
| Define a procedure | `contents/procedure.md` |
| Build a router | `contents/router.md` |
| Add middleware | `contents/middleware.md` |
| Handle errors | `contents/error-handling.md` |
| Client usage | `contents/client/client-side.md` |
| OpenAPI / REST | `contents/openapi/getting-started.md` |
| Framework adapter | `contents/adapters/` |
| Server actions | `contents/server-action.md` |
| Streaming | `contents/event-iterator.md` |

## Detailed Structure

### Root (11 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Installation and first procedure |
| `procedure.md` | Defining typed procedures with input/output |
| `router.md` | Composing procedures into routers |
| `rpc-handler.md` | Serving routers over HTTP as RPC |
| `context.md` | Request context and dependency injection |
| `middleware.md` | Middleware pipeline and composition |
| `metadata.md` | Attaching metadata to procedures |
| `error-handling.md` | Typed errors and ORPCError |
| `event-iterator.md` | Streaming via event iterators |
| `file-upload-download.md` | File upload and download handling |
| `server-action.md` | Next.js / framework server actions |

### adapters/ (20 files)

| File | Description |
|------|-------------|
| `adapters/next.md` | Next.js adapter |
| `adapters/hono.md` | Hono adapter |
| `adapters/express.md` | Express adapter |
| `adapters/fastify.md` | Fastify adapter |
| `adapters/h3.md` | H3 adapter |
| `adapters/elysia.md` | Elysia adapter |
| `adapters/astro.md` | Astro adapter |
| `adapters/remix.md` | Remix adapter |
| `adapters/nuxt.md` | Nuxt adapter |
| `adapters/solid-start.md` | SolidStart adapter |
| `adapters/svelte-kit.md` | SvelteKit adapter |
| `adapters/tanstack-start.md` | TanStack Start adapter |
| `adapters/http.md` | Generic HTTP adapter |
| `adapters/browser.md` | Browser fetch adapter |
| `adapters/websocket.md` | WebSocket adapter |
| `adapters/react-native.md` | React Native adapter |
| `adapters/electron.md` | Electron adapter |
| `adapters/message-port.md` | MessagePort adapter |
| `adapters/web-workers.md` | Web Workers adapter |
| `adapters/worker-threads.md` | Node.js Worker Threads adapter |

### client/ (6 files)

| File | Description |
|------|-------------|
| `client/client-side.md` | Client-side usage |
| `client/server-side.md` | Server-side / direct client calls |
| `client/rpc-link.md` | RPC link configuration |
| `client/dynamic-link.md` | Dynamic link for conditional routing |
| `client/event-iterator.md` | Streaming on the client |
| `client/error-handling.md` | Client-side error handling |

### contract-first/ (3 files)

| File | Description |
|------|-------------|
| `contract-first/define-contract.md` | Define a type-safe contract |
| `contract-first/implement-contract.md` | Implement a contract |
| `contract-first/router-to-contract.md` | Convert router to contract |

### plugins/ (15 files)

| File | Description |
|------|-------------|
| `plugins/batch-requests.md` | Batch multiple requests |
| `plugins/body-limit.md` | Limit request body size |
| `plugins/client-retry.md` | Automatic client-side retries |
| `plugins/compression.md` | Response compression |
| `plugins/cors.md` | CORS plugin |
| `plugins/dedupe-requests.md` | Deduplicate in-flight requests |
| `plugins/hibernation.md` | WebSocket hibernation |
| `plugins/request-headers.md` | Custom request headers |
| `plugins/request-validation.md` | Request validation plugin |
| `plugins/response-headers.md` | Custom response headers |
| `plugins/response-validation.md` | Response validation plugin |
| `plugins/rethrow-handler.md` | Re-throw handler plugin |
| `plugins/retry-after.md` | Retry-After header plugin |
| `plugins/simple-csrf-protection.md` | CSRF protection |
| `plugins/strict-get-method.md` | Enforce GET-only procedures |

### openapi/ (19 files)

| File | Description |
|------|-------------|
| `openapi/getting-started.md` | OpenAPI integration quickstart |
| `openapi/openapi-handler.md` | Serving OpenAPI-compatible routes |
| `openapi/openapi-specification.md` | Generating OpenAPI spec |
| `openapi/openapi-to-contract.md` | Convert OpenAPI spec to oRPC contract |
| `openapi/routing.md` | REST routing for OpenAPI |
| `openapi/input-output-structure.md` | Input/output mapping |
| `openapi/bracket-notation.md` | Bracket notation for query params |
| `openapi/error-handling.md` | OpenAPI error responses |
| `openapi/scalar.md` | Scalar API reference UI |
| `openapi/client/openapi-link.md` | OpenAPI client link |
| `openapi/plugins/openapi-reference.md` | OpenAPI reference plugin |
| `openapi/plugins/smart-coercion.md` | Smart type coercion plugin |
| `openapi/plugins/zod-smart-coercion.md` | Zod-specific smart coercion |
| `openapi/advanced/customizing-error-response.md` | Customize error response shape |
| `openapi/advanced/disabling-output-validation.md` | Disable output validation |
| `openapi/advanced/expanding-type-support-for-openapi-link.md` | Expand type support |
| `openapi/advanced/openapi-json-serializer.md` | Custom JSON serializer |
| `openapi/advanced/redirect-response.md` | Redirect responses |
| `openapi/integrations/hey-api.md` | hey-api client generation |
| `openapi/integrations/implement-contract-in-nest.md` | NestJS contract implementation |
| `openapi/integrations/trpc.md` | tRPC + OpenAPI integration |

### integrations/ (9 files)

| File | Description |
|------|-------------|
| `integrations/tanstack-query.md` | TanStack Query (React/Vue/Solid/Svelte) |
| `integrations/ai-sdk.md` | Vercel AI SDK integration |
| `integrations/better-auth.md` | Better Auth integration |
| `integrations/opentelemetry.md` | OpenTelemetry tracing |
| `integrations/pinia-colada.md` | Vue Pinia Colada integration |
| `integrations/pino.md` | Pino logging integration |
| `integrations/react-swr.md` | React SWR integration |
| `integrations/sentry.md` | Sentry error tracking |
| `integrations/durable-iterator.md` | Durable event iterator (Cloudflare) |

### helpers/ (7 files)

| File | Description |
|------|-------------|
| `helpers/base64url.md` | Base64URL encoding/decoding |
| `helpers/cookie.md` | Cookie parsing and serialization |
| `helpers/encryption.md` | Encryption utilities |
| `helpers/form-data.md` | FormData helpers |
| `helpers/publisher.md` | Event publisher for streaming |
| `helpers/ratelimit.md` | Rate limiting helper |
| `helpers/signing.md` | Request signing utilities |

### advanced/ (9 files)

| File | Description |
|------|-------------|
| `advanced/building-custom-plugins.md` | Build custom server/client plugins |
| `advanced/exceeds-the-maximum-length-problem.md` | Handle max-length streaming issues |
| `advanced/extend-body-parser.md` | Extend the body parser |
| `advanced/publish-client-to-npm.md` | Publish typed client as npm package |
| `advanced/rpc-json-serializer.md` | Custom RPC JSON serializer |
| `advanced/rpc-protocol.md` | RPC protocol internals |
| `advanced/superjson.md` | SuperJSON serialization |
| `advanced/testing-mocking.md` | Testing and mocking oRPC |
| `advanced/validation-errors.md` | Custom validation error handling |

### best-practices/ (4 files)

| File | Description |
|------|-------------|
| `best-practices/dedupe-middleware.md` | Deduplicating middleware |
| `best-practices/monorepo-setup.md` | Monorepo project setup |
| `best-practices/no-throw-literal.md` | Avoid throwing literals |
| `best-practices/optimize-ssr.md` | Optimize SSR performance |

### examples/ (1 file)

| File | Description |
|------|-------------|
| `examples/openai-streaming.md` | OpenAI streaming example |

### migrations/ (1 file)

| File | Description |
|------|-------------|
| `migrations/from-trpc.md` | Migrating from tRPC |
