# oRPC Table of Contents

## Directory Map

```
contents/
├── (root files)  # Core concepts, getting started, errors, files, streaming (15 files)
├── adapters/  # Runtime and framework adapters (24 files)
├── client/  # Client-side usage (6 files)
├── contract/  # Contract-first development (6 files)
├── helpers/  # Utility helpers (9 files)
├── integrations/  # Third-party integrations (22 files)
├── migrations/  # Migration guides (3 files)
├── openapi/  # OpenAPI support (11 files)
├── plugins/  # Handler and link plugins (23 files)
├── recipes/  # Practical recipes (9 files)
├── rpc/  # RPC protocol, handler, link, serializer (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started.mdx` |
| Define procedures | `contents/procedure.mdx` |
| Pick a server/framework adapter | `contents/adapters/index.mdx` |
| Call from a client | `contents/client/index.mdx` |
| Contract-first workflow | `contents/contract-first.mdx` |
| REST / OpenAPI | `contents/openapi/index.mdx` |
| Add plugins (CORS, retry, batch) | `contents/plugins/index.mdx` |
| Migrating from tRPC or v1 | `contents/migrations/index.mdx` |
| Exported API signatures | `contents/api-reference.mdx` |

## Detailed Structure

### root (15 files)

| File | Description |
|------|-------------|
| `api-reference.mdx` | Full signatures for every function, class, and type the oRPC packages export, generated from the TypeScript declarations each package... |
| `async-iterator-object.mdx` | Stream realtime typesafe data from oRPC procedures with async generators, event validation, resume support, and cleanup on disconnect. |
| `binary-data.mdx` | Learn how oRPC procedures accept and return File, Blob, and binary streams, and how to configure CORS headers for cross-origin binary... |
| `comparison.mdx` | See how oRPC compares to tRPC and Hono across type safety, OpenAPI support, framework integrations, and runtime performance. |
| `context.mdx` | Use oRPC context for type-safe dependency injection, providing initial context explicitly or injecting values through middleware. |
| `contract-first.mdx` | Build a contract-first API with oRPC: define a contract, implement it with full type checking, and call it from a client that only needs... |
| `ecosystem.mdx` | Discover libraries, integrations, and community projects that extend oRPC across frameworks, runtimes, and tooling. |
| `error-handling.mdx` | Handle errors in oRPC with the ORPCError class, typesafe error definitions, reusable error factories, and custom error conversion. |
| `getting-started.mdx` | Build your first end-to-end typesafe API with oRPC, from defining procedures to serving and calling them from a client. |
| `metadata.mdx` | Attach metadata to oRPC procedures with defineMeta or a custom MetaPlugin so middleware, plugins, and tooling can read it to control... |
| `middleware.mdx` | Run code before and after oRPC handlers with composable middleware that can inject context, guard access, and modify input or output. |
| `playgrounds.mdx` | Try oRPC instantly with pre-configured playground examples for Bun, Cloudflare, NestJS, Next.js, and Expo on StackBlitz or locally. |
| `procedure.mdx` | Learn how oRPC procedures combine input and output validation, middleware, metadata, and typesafe errors through a composable builder. |
| `requirements.mdx` | The ES2022 features and standard Web APIs oRPC needs, with minimum versions for Node.js, Deno, Bun, Cloudflare Workers, browsers... |
| `router.mdx` | Organize oRPC procedures into nestable routers, extend them with shared middleware, lazy-load routes, and infer their types. |

### adapters/ (24 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Use oRPC inside an Astro project by mounting a handler in an on-demand API route through the Fetch API Adapter, and call procedures... |
| `aws-lambda.mdx` | Use oRPC on AWS Lambda behind API Gateway (payload formats 1.0 and 2.0) and Lambda Function URLs using response streaming. |
| `browser.mdx` | Use oRPC for typesafe messaging between extension scripts or browser windows via the Message Port Adapter, and relay scripts that can't... |
| `cloudflare-workers.mdx` | Use oRPC on Cloudflare Workers through the Fetch API Adapter, with the compatibility flags that make request cancellation and unhandled... |
| `electron.mdx` | Use oRPC for typesafe communication between Electron's main, preload, and renderer processes by passing a MessagePort through the... |
| `elysia.mdx` | Use oRPC inside an Elysia project on Bun by mounting a handler on a wildcard route through the Fetch API Adapter, with Elysia's body... |
| `expo.mdx` | Use oRPC in an Expo app over fetch or WebSocket, including streaming support, binary data, and the SDK versions each feature needs. |
| `express.mdx` | Use oRPC inside an Express.js project by mounting a handler as a middleware through the Node HTTP Adapter, without conflicts from... |
| `fastify.mdx` | Use oRPC with Fastify servers via RPCHandler or OpenAPIHandler, with content type parser tips and event stream options. |
| `fetch-api.mdx` | Use oRPC with the Fetch API on both servers and clients, in runtimes such as Bun and Deno, and configure how event streams are sent to... |
| `h3.mdx` | Use oRPC inside an H3 project by mounting a handler on a wildcard route. H3 is built on web standards, so oRPC integrates through the... |
| `hono.mdx` | Use oRPC inside a Hono project by mounting a handler as a middleware through the Fetch API Adapter, with a fix for middleware that reads... |
| `index.mdx` | Pick the oRPC adapter for your runtime, framework, or messaging channel, from the Fetch API and Node HTTP to Next.js, Hono, WebSocket... |
| `message-port.mdx` | Use oRPC over the Message Port API to communicate between contexts such as iframes, web workers, and service workers. |
| `next.mdx` | Use oRPC inside a Next.js project by mounting a handler in an App Router route handler or Pages Router API route, with a client that... |
| `node-http.mdx` | Use oRPC with Node HTTP, HTTPS, and HTTP2 servers via RPCHandler or OpenAPIHandler, with CORS and event stream options. |
| `nuxt.mdx` | Use oRPC inside a Nuxt project by mounting a handler in a server route and setting up an SSR-compatible client in a Nuxt plugin. |
| `react-router.mdx` | Use oRPC inside a React Router or Remix project by mounting a handler in a resource route's loader and action through the Fetch API Adapter. |
| `solid-start.mdx` | Use oRPC inside a SolidStart project by mounting a handler in an API route, with a client that forwards request headers during SSR and... |
| `svelte-kit.mdx` | Use oRPC inside a SvelteKit project by mounting a handler in an endpoint, then call it during SSR through SvelteKit's fetch or a... |
| `tanstack-start.mdx` | Use oRPC inside a TanStack Start project by mounting a handler in a server route, with an isomorphic client for the browser and SSR via... |
| `web-workers.mdx` | Use oRPC for typesafe communication between the main thread and Web Workers via the Message Port Adapter, in browsers and runtimes such... |
| `websocket.mdx` | Use oRPC over WebSocket for low-latency, full-duplex communication, with adapters for ws, crossws, Bun, Deno, Cloudflare, and uWebSockets. |
| `worker-threads.mdx` | Use oRPC for typesafe communication between the Node.js main thread and Worker Threads by passing a MessagePort through the Message Port... |

### client/ (6 files)

| File | Description |
|------|-------------|
| `async-iterator-object.mdx` | Consume an AsyncIteratorObject from the client like an AsyncGenerator, with stream cancellation, error handling, and event metadata. |
| `client-side.mdx` | Create oRPC clients that call procedures remotely over a link, with client context, interceptors, and type inference utilities. |
| `dynamic-link.mdx` | Use DynamicLink to choose a link at runtime and route different oRPC requests through different links based on client context. |
| `error-handling.mdx` | Handle client-side errors in oRPC with try/catch, or use safe and createSafeClient for fully type-inferred typesafe errors. |
| `index.mdx` | Call oRPC procedures with full type safety from browsers, apps, and servers: create clients over links, call locally during SSR, handle... |
| `server-side.mdx` | Call oRPC procedures locally in the same process with call, createRouterClient, or the callable extension, ideal for server-side code. |

### contract/ (6 files)

| File | Description |
|------|-------------|
| `client-factory.mdx` | Create clients from individual procedure contracts instead of a single root contract, keeping large oRPC codebases fast and decoupled. |
| `generate-from-openapi.mdx` | Generate an oRPC contract from an existing OpenAPI specification with Hey API's orpc plugin instead of writing it by hand. |
| `implementation.mdx` | Learn how to implement a contract with the implement function, adding type-checked handlers, middleware, and routers to every procedure. |
| `index.mdx` | Reference for oRPC contracts: describe procedures and routers without logic, implement them with type checking, generate them from... |
| `procedure.mdx` | Define procedure contracts that describe input, output, errors, and metadata without business logic, keeping implementations aligned. |
| `router.mdx` | Define router contracts that describe the shape of a router without business logic, useful for documentation, testing, and aligned... |

### helpers/ (9 files)

| File | Description |
|------|-------------|
| `base64url.mdx` | Encode and decode URL-safe base64url strings with oRPC helpers, useful for web tokens, data serialization, and APIs. |
| `cookie.mdx` | Set, read, and delete HTTP cookies from fetch Headers with oRPC cookie helpers, and secure them with signing or encryption. |
| `encryption.mdx` | Encrypt and decrypt sensitive data in oRPC using AES-GCM with PBKDF2 key derivation via the encrypt and decrypt helpers. |
| `form-data.mdx` | Parse HTML form data and extract validation error messages with bracket notation support for complex nested structures. |
| `index.mdx` | Utilities that ship with oRPC for cookies, signing, encryption, base64url, and form data, plus packages for rate limiting, locks, and... |
| `lock.mdx` | Prevent the same work from running concurrently in oRPC with a unified Locker interface, storage adapters, and procedure middleware. |
| `publisher.mdx` | Publish and subscribe to events across storage backends in oRPC, with adapters, dynamic event names, and resume support for missed events. |
| `ratelimit.mdx` | Add rate limiting to oRPC with a unified RateLimiter interface, storage adapters, procedure middleware, and a handler plugin for HTTP... |
| `signing.mdx` | Cryptographically sign and verify data with HMAC-SHA256 using oRPC signing helpers, a faster alternative to encryption. |

### integrations/ (22 files)

| File | Description |
|------|-------------|
| `ai-sdk.mdx` | Learn how to use oRPC as a transport for AI SDK streams and turn oRPC procedures and contracts into AI SDK tools. |
| `arktype.mdx` | Use ArkType types directly in oRPC via Standard Schema, with a dedicated JSON Schema converter for OpenAPI generation and Smart Coercion. |
| `better-auth.mdx` | Use Better Auth sessions in oRPC context and protect procedures with typed middleware, with an option to load the session lazily once... |
| `cloudflare-traces.mdx` | Record oRPC procedure, middleware, and stream spans in Cloudflare Workers Traces through the Workers custom spans API, with no... |
| `effect.mdx` | Write effectful oRPC handlers with Effect generators, call oRPC clients as effects, provide services through context, and validate with... |
| `evlog.mdx` | Add structured logging to oRPC with the Evlog integration to trace requests, monitor errors, and inspect application behavior. |
| `hibernation.mdx` | Learn how oRPC integrates with Hibernation APIs like Cloudflare's WebSocket Hibernation so servers can sleep without dropping connections. |
| `index.mdx` | Use oRPC with the tools around it: Zod, Valibot, ArkType, TanStack Query, SWR, Next.js, NestJS, MCP, the AI SDK, OpenTelemetry, Better... |
| `mcp.mdx` | Expose oRPC procedures as Model Context Protocol tools, reusing their OpenAPI metadata, schemas, middleware, and error handling. |
| `msw.mdx` | Mock oRPC procedures at the network level with typed MSW request handlers, reusing the real RPC or OpenAPI runtime for serialization and... |
| `nest.mdx` | Learn how to implement oRPC contracts in NestJS with the @orpc/nest package while keeping type safety and OpenAPI compatibility. |
| `next.mdx` | Use oRPC in Next.js applications with server functions, form actions, and React hooks for optimistic updates and typesafe error handling. |
| `opentelemetry.mdx` | Add automatic OpenTelemetry instrumentation to oRPC for distributed tracing and performance monitoring across client and server. |
| `pinia-colada.mdx` | Use oRPC clients with Pinia Colada through utilities for building query and mutation options, keys, and typesafe error handling. |
| `pino.mdx` | Add structured logging to oRPC with the Pino integration to track requests, monitor errors, and gain insight into application behavior. |
| `standard-schema.mdx` | Use Zod, Valibot, ArkType, or any Standard Schema library with oRPC, plus automatic JSON Schema conversion via Standard JSON Schema. |
| `swr.mdx` | Use oRPC with SWR through lightweight key, fetcher, subscriber, and mutator helpers for data fetching, subscriptions, and mutations in... |
| `tanstack-ai.mdx` | Learn how to use oRPC as a transport for TanStack AI chat streams, through the oRPC client or as a plain Server-Sent Events endpoint. |
| `tanstack-query.mdx` | Integrate oRPC with TanStack Query using utilities for query and mutation options, keys, infinite and streamed queries, and typesafe errors. |
| `trpc.mdx` | Learn how to integrate tRPC with oRPC by converting tRPC routers into oRPC routers and bridging metadata between the two. |
| `valibot.mdx` | Use Valibot schemas directly in oRPC via Standard Schema, with a dedicated JSON Schema converter for OpenAPI generation and Smart Coercion. |
| `zod.mdx` | Use Zod schemas directly in oRPC via Standard Schema, with a dedicated JSON Schema converter and registries for customizing generated... |

### migrations/ (3 files)

| File | Description |
|------|-------------|
| `from-trpc.mdx` | Migrate an existing tRPC app to oRPC step by step. Most tRPC concepts map directly, so routers, procedures, and middleware feel familiar. |
| `from-v1.mdx` | Upgrade an oRPC v1 app to v2, with side-by-side v1 and v2 comparisons for every change that needs your attention. |
| `index.mdx` | Guides for moving to oRPC v2: upgrade an existing oRPC v1 app, or migrate a tRPC app step by step or incrementally alongside your... |

### openapi/ (11 files)

| File | Description |
|------|-------------|
| `bracket-notation.mdx` | Learn how bracket notation encodes structured data like nested objects and arrays in flat key-value formats such as query strings and... |
| `expanding-type-support-for-link.mdx` | Restore native types like Date and bigint on OpenAPI Link clients using the Response Validation or Smart Coercion plugins. |
| `handler.mdx` | Use OpenAPIHandler to expose oRPC procedures as HTTP endpoints for OpenAPI Link and other OpenAPI-compliant clients. |
| `index.mdx` | Serve oRPC procedures as a REST API, generate an OpenAPI 3.x document from the same code, call it with a typed client, and render... |
| `input-and-output-mapping.mdx` | Learn how oRPC maps OpenAPI requests and responses to procedure inputs and outputs with compact and detailed structures, parameter... |
| `link-without-runtime-imports.mdx` | Use build-time macros to embed a minified contract in your client bundle, so OpenAPI Link works without a separate contract or shipping... |
| `link.mdx` | Use OpenAPILink to call HTTP endpoints served by OpenAPI Handler or any OpenAPI-compliant server through a typesafe oRPC client. |
| `routing.mdx` | Use openapi metadata to control how procedures are exposed over HTTP, including methods, paths, path parameters, and prefixes. |
| `scalar.mdx` | Use Scalar to serve an interactive API reference UI for your oRPC API generated from its OpenAPI specification. |
| `serializer.mdx` | Learn how OpenAPI Serializer performs one-way serialization of complex types like Date, BigInt, and files into JSON-friendly formats... |
| `specification.mdx` | Learn how to configure openapi metadata and generate OpenAPI 3.2, 3.1, or 3.0 documents from your oRPC contracts and routers with... |

### plugins/ (23 files)

| File | Description |
|------|-------------|
| `batch-response-compression.mdx` | Compress batch responses when you know their contents compress, flushing each one as it is ready so a streaming batch stays streaming. |
| `batch.mdx` | Combine multiple requests into a single batch and receive their responses together, reducing the overhead of separate requests. |
| `cors.mdx` | Configure CORS policy for your oRPC API with CORSHandlerPlugin, including allowed origins, methods, and exposed headers. |
| `dedupe.mdx` | Prevent redundant requests by deduplicating similar in-flight requests, reducing the number of requests sent to the server. |
| `get-method-csrf-protection.mdx` | Use GetMethodCsrfProtectionHandlerPlugin to make GET as secure as POST by rejecting cross-site navigations that may carry SameSite=Lax... |
| `index.mdx` | Add CORS, batching, retries, compression, timeouts, and validation to oRPC with built-in plugins for handlers on the server and links on... |
| `method-override.mdx` | Use MethodOverrideHandlerPlugin to override a POST request's HTTP method with a query parameter, so HTML forms can invoke PUT, PATCH... |
| `openapi-reference.mdx` | Serve interactive API reference documentation powered by Scalar or Swagger UI and expose your OpenAPI specification as JSON. |
| `request-compression.mdx` | Compress request bodies on the client and decompress them on the server to reduce bandwidth usage for large payloads. |
| `request-headers.mdx` | Expose incoming request headers as context.reqHeaders with RequestHeadersHandlerPlugin for easy access in procedures. |
| `request-limit.mdx` | Restrict the size of incoming request bodies with RequestLimitHandlerPlugin to protect your server from oversized payloads. |
| `request-validation.mdx` | Validate requests against your contract on the client before sending them to the server, catching invalid input early. |
| `response-compression.mdx` | Compress response bodies on the server and decompress them on the client to reduce bandwidth usage and improve performance. |
| `response-headers.mdx` | Use ResponseHeadersHandlerPlugin to set response headers and cookies via context.resHeaders and merge them into the final response. |
| `response-validation.mdx` | Validate server responses against your contract on the client, ensuring returned data matches the types your contract defines. |
| `rethrow.mdx` | Bypass oRPC's built-in error handling and rethrow matching errors to your framework, such as NestJS filters or Express error middleware. |
| `retry-after.mdx` | Automatically retry requests based on the Retry-After response header, useful for rate limits and temporary server unavailability. |
| `retry.mdx` | Automatically retry failed oRPC requests with customizable strategies controlled through client context options. |
| `signal-sync.mdx` | Keep the request signal and streaming responses in sync, aborting the signal when the body is cancelled and ending the body when the... |
| `smart-coercion.mdx` | Automatically coerce request and response values to match your schema types without writing manual coercion logic. |
| `static-file.mdx` | Serve static files alongside your procedures, with ETag caching, range requests, single page application fallback, and directory... |
| `timeout.mdx` | Abort requests that exceed a timeout on the client or the server, using a static value or a per-request dynamic timeout. |
| `tmp-file-upload.mdx` | Stream large file uploads into temporary files instead of memory, so requests far larger than available memory are parsed safely. |

### recipes/ (9 files)

| File | Description |
|------|-------------|
| `dedupe-middleware.mdx` | Learn how to use context to prevent the same middleware from repeating expensive work when it runs multiple times in a single call. |
| `exceeds-the-maximum-length-problem.mdx` | Fix the TypeScript error where an inferred router type exceeds the maximum length the compiler will serialize. |
| `index.mdx` | Practical oRPC recipes for testing and mocking, validation, monorepos, publishing a typed client to npm, faster SSR, and fixing common... |
| `monorepo-setup.mdx` | Set up a monorepo with oRPC using TypeScript project references to keep end-to-end type safety across interconnected apps and packages. |
| `no-throw-literal.mdx` | Learn why oRPC recommends throwing only Error instances and how to customize this behavior with ThrowableError in the Registry. |
| `optimizing-ssr.mdx` | Optimize server-side rendering with oRPC in Next.js, Nuxt, and SvelteKit by calling API logic directly and avoiding extra HTTP requests. |
| `publish-client-to-npm.mdx` | Learn how to build and publish your oRPC client to NPM with pnpm and tsdown, so users can consume your APIs as a fully typed SDK. |
| `testing-and-mocking.mdx` | Learn how to test oRPC procedures directly with server-side clients, create mock implementations with the implementer, and mock network... |
| `validation-customization.mdx` | Learn how to customize validation in oRPC, including disabling runtime validation and shaping custom validation errors. |

### rpc/ (5 files)

| File | Description |
|------|-------------|
| `handler.mdx` | Use RPCHandler to serve procedures over the RPC protocol, with HTTP method control, interceptors, plugins, custom serializers, and error... |
| `index.mdx` | How oRPC's RPC protocol connects oRPC clients and servers, with a serializer that keeps Date, BigInt, Map, Set, files, and streams... |
| `link.mdx` | Use RPCLink to call RPC Handler servers or any server implementing the RPC protocol, with headers, interceptors, plugins, and custom... |
| `protocol.mdx` | Learn how the RPC protocol routes procedure calls, encodes input and output beyond plain JSON, and formats success and error responses. |
| `serializer.mdx` | Learn how RPC Serializers encode data between client and server, supporting types beyond plain JSON such as Date, BigInt, Set, Map, and... |
