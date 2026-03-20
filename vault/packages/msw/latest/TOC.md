# msw Table of Contents

## Directory Map

```
contents/
├── index.mdx                        # Introduction
├── quick-start.mdx                  # Quick start guide
├── philosophy.mdx                   # Mental models
├── comparison.mdx                   # Comparison with other tools
├── defaults.mdx                     # Default behaviors
├── limitations.mdx                  # Known limitations
├── faq.mdx                          # Frequently asked questions
├── runbook.mdx                      # Debugging runbook
├── cli/                             # CLI reference (1 file)
├── integrations/                    # Integration guides (3 files)
├── http/                            # HTTP mocking (14 files)
│   ├── index.mdx
│   ├── handling-requests.mdx
│   ├── intercepting-requests/       # Request interception (5 files)
│   └── mocking-responses/           # Response mocking (10 files)
├── graphql/                         # GraphQL mocking (9 files)
│   ├── index.mdx
│   ├── schema-first-mocking.mdx
│   ├── intercepting-operations/     # Operation interception (5 files)
│   └── mocking-responses/           # Response mocking (3 files)
├── websocket/                       # WebSocket mocking (12 files)
│   ├── index.mdx
│   ├── bindings.mdx
│   ├── event-logs.mdx
│   ├── type-safety.mdx
│   ├── client-events/               # Client event handlers (5 files)
│   └── server-events/               # Server event handlers (5 files)
├── sse/                             # Server-Sent Events (9 files)
│   ├── index.mdx
│   ├── intercepting-sources/        # Source interception (1 file)
│   └── server-events/               # Server event handlers (7 files)
├── api/                             # API reference (27 files)
│   ├── http.mdx                     # http namespace
│   ├── graphql.mdx                  # graphql namespace
│   ├── ws.mdx                       # ws namespace
│   ├── sse.mdx                      # sse namespace
│   ├── http-response.mdx            # HttpResponse class
│   ├── bypass.mdx                   # bypass()
│   ├── passthrough.mdx              # passthrough()
│   ├── delay.mdx                    # delay()
│   ├── get-response.mdx             # getResponse()
│   ├── life-cycle-events.mdx        # Life cycle events
│   ├── request-handler.mdx          # RequestHandler
│   ├── is-common-asset-request.mdx  # isCommonAssetRequest()
│   ├── setup-worker/                # setupWorker API (7 files)
│   └── setup-server/                # setupServer API (8 files)
├── recipes/                         # Recipes (10 files)
├── migrations/                      # Migration guides (1 file)
└── shared/                          # Shared docs (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quick-start.mdx` |
| Browser integration | `contents/integrations/browser.mdx` |
| Node.js integration | `contents/integrations/node.mdx` |
| HTTP mocking | `contents/http/` |
| GraphQL mocking | `contents/graphql/` |
| WebSocket mocking | `contents/websocket/` |
| SSE mocking | `contents/sse/` |
| API reference | `contents/api/` |
| Troubleshooting | `contents/runbook.mdx` |
| Migrating from v1 | `contents/migrations/1.x-to-2.x.mdx` |

## Detailed Structure

### Root (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Introduction to MSW |
| `quick-start.mdx` | Quick start guide (Vitest/Node.js) |
| `philosophy.mdx` | Mental models behind MSW |
| `comparison.mdx` | Comparison with Nock, Mirage, Cypress, Playwright |
| `defaults.mdx` | Default behaviors (passthrough, etc.) |
| `limitations.mdx` | Known browser and Node.js limitations |
| `faq.mdx` | Frequently asked questions |
| `runbook.mdx` | Debugging runbook for common issues |

### cli/ (1 file)

| File | Description |
|------|-------------|
| `cli/init.mdx` | `msw init` CLI command |

### integrations/ (3 files)

| File | Description |
|------|-------------|
| `integrations/browser.mdx` | Browser integration with Service Worker |
| `integrations/node.mdx` | Node.js integration |
| `integrations/react-native.mdx` | React Native integration |

### http/ (14 files)

| File | Description |
|------|-------------|
| `http/index.mdx` | HTTP mocking overview |
| `http/handling-requests.mdx` | Request handler structure |
| `http/intercepting-requests/index.mdx` | Intercepting requests overview |
| `http/intercepting-requests/body.mdx` | Reading request body |
| `http/intercepting-requests/cookies.mdx` | Reading request cookies |
| `http/intercepting-requests/path-parameters.mdx` | Path parameters |
| `http/intercepting-requests/query-parameters.mdx` | Query parameters |
| `http/mocking-responses/index.mdx` | Mocking responses overview |
| `http/mocking-responses/binary.mdx` | Binary responses |
| `http/mocking-responses/cookies.mdx` | Response cookies |
| `http/mocking-responses/error-responses.mdx` | Error responses |
| `http/mocking-responses/file-uploads.mdx` | File upload mocking |
| `http/mocking-responses/network-errors.mdx` | Network errors |
| `http/mocking-responses/polling.mdx` | Request polling |
| `http/mocking-responses/proxying-requests.mdx` | Proxying requests |
| `http/mocking-responses/redirects.mdx` | Redirects |
| `http/mocking-responses/response-patching.mdx` | Response patching |
| `http/mocking-responses/response-timing.mdx` | Response timing/delay |
| `http/mocking-responses/streaming.mdx` | Streaming responses |

### graphql/ (9 files)

| File | Description |
|------|-------------|
| `graphql/index.mdx` | GraphQL mocking overview |
| `graphql/schema-first-mocking.mdx` | Schema-first mocking |
| `graphql/intercepting-operations/index.mdx` | Intercepting operations overview |
| `graphql/intercepting-operations/queries.mdx` | Query interception |
| `graphql/intercepting-operations/mutations.mdx` | Mutation interception |
| `graphql/intercepting-operations/operations.mdx` | All operations |
| `graphql/intercepting-operations/variables.mdx` | Operation variables |
| `graphql/mocking-responses/index.mdx` | Mocking responses overview |
| `graphql/mocking-responses/errors.mdx` | GraphQL errors |
| `graphql/mocking-responses/query-batching.mdx` | Query batching |

### websocket/ (12 files)

| File | Description |
|------|-------------|
| `websocket/index.mdx` | WebSocket mocking overview |
| `websocket/bindings.mdx` | WebSocket bindings |
| `websocket/event-logs.mdx` | Event logs |
| `websocket/type-safety.mdx` | TypeScript type safety |
| `websocket/client-events/index.mdx` | Client events overview |
| `websocket/client-events/broadcasting-data.mdx` | Broadcasting data |
| `websocket/client-events/client-to-server-forwarding.mdx` | Client-to-server forwarding |
| `websocket/client-events/closing-client-connection.mdx` | Closing connections |
| `websocket/client-events/erroring-the-connection.mdx` | Erroring connections |
| `websocket/client-events/sending-data.mdx` | Sending data |
| `websocket/server-events/index.mdx` | Server events overview |
| `websocket/server-events/closing-server-connection.mdx` | Closing server connection |
| `websocket/server-events/establishing-server-connection.mdx` | Establishing connection |
| `websocket/server-events/sending-data.mdx` | Sending data from server |
| `websocket/server-events/server-to-client-forwarding.mdx` | Server-to-client forwarding |

### sse/ (9 files)

| File | Description |
|------|-------------|
| `sse/index.mdx` | SSE mocking overview |
| `sse/intercepting-sources/index.mdx` | Intercepting SSE sources |
| `sse/server-events/index.mdx` | Server events overview |
| `sse/server-events/closing-the-connection.mdx` | Closing the connection |
| `sse/server-events/custom-events.mdx` | Custom events |
| `sse/server-events/erroring-the-connection.mdx` | Erroring the connection |
| `sse/server-events/establishing-server-connection.mdx` | Establishing connection |
| `sse/server-events/message-events.mdx` | Message events |
| `sse/server-events/retry.mdx` | Retry behavior |

### api/ (27 files)

| File | Description |
|------|-------------|
| `api/http.mdx` | `http` namespace — REST handler factory |
| `api/graphql.mdx` | `graphql` namespace — GraphQL handler factory |
| `api/ws.mdx` | `ws` namespace — WebSocket handler factory |
| `api/sse.mdx` | `sse` namespace — SSE handler factory |
| `api/http-response.mdx` | `HttpResponse` class |
| `api/bypass.mdx` | `bypass()` function |
| `api/passthrough.mdx` | `passthrough()` function |
| `api/delay.mdx` | `delay()` function |
| `api/get-response.mdx` | `getResponse()` function |
| `api/life-cycle-events.mdx` | Life cycle events |
| `api/request-handler.mdx` | `RequestHandler` class |
| `api/is-common-asset-request.mdx` | `isCommonAssetRequest()` function |
| `api/setup-worker/index.mdx` | `setupWorker()` function |
| `api/setup-worker/start.mdx` | `worker.start()` |
| `api/setup-worker/stop.mdx` | `worker.stop()` |
| `api/setup-worker/use.mdx` | `worker.use()` |
| `api/setup-worker/reset-handlers.mdx` | `worker.resetHandlers()` |
| `api/setup-worker/restore-handlers.mdx` | `worker.restoreHandlers()` |
| `api/setup-worker/list-handlers.mdx` | `worker.listHandlers()` |
| `api/setup-server/index.mdx` | `setupServer()` function |
| `api/setup-server/listen.mdx` | `server.listen()` |
| `api/setup-server/close.mdx` | `server.close()` |
| `api/setup-server/use.mdx` | `server.use()` |
| `api/setup-server/reset-handlers.mdx` | `server.resetHandlers()` |
| `api/setup-server/restore-handlers.mdx` | `server.restoreHandlers()` |
| `api/setup-server/list-handlers.mdx` | `server.listHandlers()` |
| `api/setup-server/boundary.mdx` | `server.boundary()` |

### recipes/ (10 files)

| File | Description |
|------|-------------|
| `recipes/custom-worker-script-location.mdx` | Custom worker script location |
| `recipes/global-response-delay.mdx` | Global response delay |
| `recipes/higher-order-resolver.mdx` | Higher-order resolver pattern |
| `recipes/keeping-mocks-in-sync.mdx` | Keeping mocks in sync with API |
| `recipes/merging-service-workers.mdx` | Merging service workers |
| `recipes/using-base-url.mdx` | Using a base URL |
| `recipes/using-cdn.mdx` | Using MSW via CDN |
| `recipes/using-custom-homepage.mdx` | Custom Service Worker homepage |
| `recipes/using-local-https.mdx` | Using local HTTPS |
| `recipes/vitest-browser-mode.mdx` | Vitest browser mode |
| `recipes/xmlhttprequest-progress-events.mdx` | XHR progress events |

### migrations/ (1 file)

| File | Description |
|------|-------------|
| `migrations/1.x-to-2.x.mdx` | Migration guide from v1 to v2 |

### shared/ (1 file)

| File | Description |
|------|-------------|
| `shared/jest-missing-globals.mdx` | Fix for Jest missing globals |
