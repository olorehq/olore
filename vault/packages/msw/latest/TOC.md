# msw Table of Contents

## Directory Map

```
contents/
├── index.mdx                          # Introduction
├── quick-start.mdx                    # Quick start guide
├── defaults.mdx                       # Default behaviors
├── limitations.mdx                    # Known limitations
├── comparison.mdx                     # Comparison with other tools
├── migrations.mdx                     # Migration overview
├── faq.mdx                            # Frequently asked questions
├── runbook.mdx                        # Debugging runbook
├── api/                               # API reference (18 files)
│   ├── bypass.mdx
│   ├── delay.mdx
│   ├── finalize.mdx
│   ├── get-response.mdx
│   ├── graphql.mdx
│   ├── http-response.mdx
│   ├── http.mdx
│   ├── is-common-asset-request.mdx
│   ├── life-cycle-events.mdx
│   ├── passthrough.mdx
│   ├── request-handler.mdx
│   ├── sse.mdx
│   ├── ws.mdx
│   ├── setup-server/                  # setupServer API (7 files)
│   └── setup-worker/                  # setupWorker API (7 files)
├── best-practices/                    # Best practices (8 files)
├── cli/                               # CLI reference (1 file)
├── graphql/                           # GraphQL mocking (8 files)
├── http/                              # HTTP mocking (16 files)
├── integrations/                      # Environment integrations (3 files)
├── migrations/                        # Migration guides (1 file)
├── recipes/                           # Recipes and patterns (11 files)
├── shared/                            # Shared troubleshooting (1 file)
├── sse/                               # Server-Sent Events (8 files)
└── websocket/                         # WebSocket mocking (12 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quick-start.mdx` |
| HTTP mocking | `contents/http/index.mdx` |
| GraphQL mocking | `contents/graphql/index.mdx` |
| WebSocket mocking | `contents/websocket/index.mdx` |
| Server-Sent Events | `contents/sse/index.mdx` |
| API reference | `contents/api/http.mdx`, `contents/api/graphql.mdx` |
| Browser setup | `contents/integrations/browser.mdx` |
| Node.js setup | `contents/integrations/node.mdx` |
| Debugging | `contents/runbook.mdx` |
| Best practices | `contents/best-practices/index.mdx` |

## Detailed Structure

### Root (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Introduction to MSW |
| `quick-start.mdx` | Quick start guide |
| `defaults.mdx` | Default behaviors (passthrough, handler fallthrough) |
| `limitations.mdx` | Known limitations |
| `comparison.mdx` | Comparison with nock, Mirage, Cypress, Playwright, etc. |
| `migrations.mdx` | Migration guides overview |
| `faq.mdx` | Frequently asked questions |
| `runbook.mdx` | Debugging runbook for common issues |

### api/ (13 files)

| File | Description |
|------|-------------|
| `bypass.mdx` | `bypass()` - bypass request interception |
| `delay.mdx` | `delay()` - add artificial delays |
| `finalize.mdx` | `finalize()` - finalize response body |
| `get-response.mdx` | `getResponse()` - get response from a handler |
| `graphql.mdx` | `graphql` namespace reference |
| `http-response.mdx` | `HttpResponse` class reference |
| `http.mdx` | `http` namespace reference |
| `is-common-asset-request.mdx` | `isCommonAssetRequest()` utility |
| `life-cycle-events.mdx` | Life cycle events |
| `passthrough.mdx` | `passthrough()` - pass request to network |
| `request-handler.mdx` | `RequestHandler` class reference |
| `sse.mdx` | `sse` namespace for Server-Sent Events |
| `ws.mdx` | `ws` namespace for WebSockets |

### api/setup-server/ (7 files)

| File | Description |
|------|-------------|
| `index.mdx` | `setupServer()` API overview (Node.js) |
| `boundary.mdx` | `server.boundary()` - isolate handlers |
| `close.mdx` | `server.close()` - stop the server |
| `list-handlers.mdx` | `server.listHandlers()` |
| `listen.mdx` | `server.listen()` - start listening |
| `reset-handlers.mdx` | `server.resetHandlers()` |
| `restore-handlers.mdx` | `server.restoreHandlers()` |
| `use.mdx` | `server.use()` - add runtime handlers |

### api/setup-worker/ (7 files)

| File | Description |
|------|-------------|
| `index.mdx` | `setupWorker()` API overview (browser) |
| `list-handlers.mdx` | `worker.listHandlers()` |
| `reset-handlers.mdx` | `worker.resetHandlers()` |
| `restore-handlers.mdx` | `worker.restoreHandlers()` |
| `start.mdx` | `worker.start()` - start the service worker |
| `stop.mdx` | `worker.stop()` - stop the service worker |
| `use.mdx` | `worker.use()` - add runtime handlers |

### best-practices/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Best practices overview |
| `avoid-request-assertions.mdx` | Why to avoid asserting requests directly |
| `custom-request-predicate.mdx` | Custom request matching predicates |
| `dynamic-mock-scenarios.mdx` | Dynamic mock scenarios |
| `managing-the-worker.mdx` | Managing the service worker lifecycle |
| `network-behavior-overrides.mdx` | Overriding network behaviors at runtime |
| `structuring-handlers.mdx` | How to structure request handlers |
| `typescript.mdx` | TypeScript best practices |

### cli/ (1 file)

| File | Description |
|------|-------------|
| `init.mdx` | `npx msw init` - initialize MSW in a project |

### graphql/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | GraphQL mocking overview |
| `schema-first-mocking.mdx` | Schema-first mocking approach |
| `intercepting-operations/index.mdx` | Intercepting GraphQL operations |
| `intercepting-operations/mutations.mdx` | Intercepting mutations |
| `intercepting-operations/operations.mdx` | Intercepting operations |
| `intercepting-operations/queries.mdx` | Intercepting queries |
| `intercepting-operations/variables.mdx` | Working with variables |
| `mocking-responses/index.mdx` | Mocking GraphQL responses |
| `mocking-responses/errors.mdx` | Mocking GraphQL errors |
| `mocking-responses/query-batching.mdx` | Query batching |

### http/ (16 files)

| File | Description |
|------|-------------|
| `index.mdx` | HTTP mocking overview |
| `handling-requests.mdx` | Handling intercepted requests |
| `intercepting-requests/index.mdx` | Intercepting requests overview |
| `intercepting-requests/body.mdx` | Reading request body |
| `intercepting-requests/cookies.mdx` | Reading request cookies |
| `intercepting-requests/path-parameters.mdx` | Path parameters |
| `intercepting-requests/query-parameters.mdx` | Query parameters |
| `mocking-responses/index.mdx` | Mocking responses overview |
| `mocking-responses/binary.mdx` | Binary responses |
| `mocking-responses/cookies.mdx` | Setting cookies in responses |
| `mocking-responses/error-responses.mdx` | Error responses |
| `mocking-responses/file-uploads.mdx` | File upload mocking |
| `mocking-responses/network-errors.mdx` | Simulating network errors |
| `mocking-responses/polling.mdx` | Polling scenarios |
| `mocking-responses/proxying-requests.mdx` | Proxying/forwarding requests |
| `mocking-responses/redirects.mdx` | Redirect responses |
| `mocking-responses/response-patching.mdx` | Response patching (modify real responses) |
| `mocking-responses/response-timing.mdx` | Response timing |
| `mocking-responses/streaming.mdx` | Streaming responses |

### integrations/ (3 files)

| File | Description |
|------|-------------|
| `browser.mdx` | Browser integration (Service Worker) |
| `node.mdx` | Node.js integration |
| `react-native.mdx` | React Native integration |

### migrations/ (1 file)

| File | Description |
|------|-------------|
| `1.x-to-2.x.mdx` | Migration guide from MSW 1.x to 2.x |

### recipes/ (11 files)

| File | Description |
|------|-------------|
| `custom-worker-script-location.mdx` | Custom service worker script location |
| `global-response-delay.mdx` | Global response delay |
| `higher-order-resolver.mdx` | Higher-order resolver pattern |
| `keeping-mocks-in-sync.mdx` | Keeping mocks in sync with API |
| `merging-service-workers.mdx` | Merging multiple service workers |
| `using-base-url.mdx` | Using a base URL |
| `using-cdn.mdx` | Loading MSW from a CDN |
| `using-custom-homepage.mdx` | Custom service worker homepage |
| `using-local-https.mdx` | Using local HTTPS |
| `vitest-browser-mode.mdx` | Vitest browser mode integration |
| `xmlhttprequest-progress-events.mdx` | XHR progress events |

### shared/ (1 file)

| File | Description |
|------|-------------|
| `jest-missing-globals.mdx` | Fix for Jest missing Node.js globals |

### sse/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Server-Sent Events overview |
| `intercepting-sources/index.mdx` | Intercepting SSE sources |
| `server-events/index.mdx` | Server events overview |
| `server-events/closing-the-connection.mdx` | Closing SSE connection |
| `server-events/custom-events.mdx` | Custom SSE events |
| `server-events/erroring-the-connection.mdx` | Erroring the SSE connection |
| `server-events/establishing-server-connection.mdx` | Establishing server connection |
| `server-events/message-events.mdx` | Message events |
| `server-events/retry.mdx` | Retry behavior |

### websocket/ (12 files)

| File | Description |
|------|-------------|
| `index.mdx` | WebSocket mocking overview |
| `bindings.mdx` | WebSocket bindings |
| `event-logs.mdx` | Event logs |
| `type-safety.mdx` | TypeScript type safety |
| `client-events/index.mdx` | Client events overview |
| `client-events/broadcasting-data.mdx` | Broadcasting data to clients |
| `client-events/client-to-server-forwarding.mdx` | Client-to-server forwarding |
| `client-events/closing-client-connection.mdx` | Closing client connection |
| `client-events/erroring-the-connection.mdx` | Erroring the connection |
| `client-events/sending-data.mdx` | Sending data to client |
| `server-events/index.mdx` | Server events overview |
| `server-events/closing-server-connection.mdx` | Closing server connection |
| `server-events/establishing-server-connection.mdx` | Establishing server connection |
| `server-events/sending-data.mdx` | Sending data from server |
| `server-events/server-to-client-forwarding.mdx` | Server-to-client forwarding |
