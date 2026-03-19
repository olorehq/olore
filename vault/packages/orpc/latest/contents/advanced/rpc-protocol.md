---
title: RPC Protocol
description: Learn about the RPC protocol used by RPCHandler.
---

# RPC Protocol

The RPC protocol enables remote procedure calls over HTTP using JSON, supporting native data types. It is used by [RPCHandler](/docs/rpc-handler).

## Routing

The procedure to call is determined by the `pathname`.

```bash
curl https://example.com/rpc/planet/create
```

This example calls the `planet.create` procedure, with `/rpc` as the prefix:

```ts
const router = {
  planet: {
    create: os.handler(() => {}) // [!code highlight]
  }
}
```

## Input

Any HTTP method can be used. Input can be provided via URL query parameters or the request body, based on the HTTP method.

::: warning
By default, [RPCHandler](/docs/rpc-handler) in the [HTTP Adapter](/docs/adapters/http) enabled [StrictGetMethodPlugin](/docs/rpc-handler#default-plugins) which blocks GET requests except for procedures explicitly allowed. Please refer to [StrictGetMethodPlugin](/docs/plugins/strict-get-method) for more details.
:::

### Input in URL Query

```ts
const url = new URL('https://example.com/rpc/planet/create')

url.searchParams.append('data', JSON.stringify({
  json: {
    name: 'Earth',
    detached_at: '2022-01-01T00:00:00.000Z'
  },
  meta: [[1, 'detached_at']]
}))

const response = await fetch(url)
```

### Input in Request Body

```bash
curl -X POST https://example.com/rpc/planet/create \
  -H 'Content-Type: application/json' \
  -d '{
    "json": {
      "name": "Earth",
      "detached_at": "2022-01-01T00:00:00.000Z"
    },
    "meta": [[1, "detached_at"]]
  }'
```

### Input with File

```ts
const form = new FormData()

form.set('data', JSON.stringify({
  json: {
    name: 'Earth',
    thumbnail: {},
    images: [{}, {}]
  },
  meta: [[1, 'detached_at']],
  maps: [['images', 0], ['images', 1]]
}))

form.set('0', new Blob([''], { type: 'image/png' }))
form.set('1', new Blob([''], { type: 'image/png' }))

const response = await fetch('https://example.com/rpc/planet/create', {
  method: 'POST',
  body: form
})
```

## Success Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "json": {
    "id": "1",
    "name": "Earth",
    "detached_at": "2022-01-01T00:00:00.000Z"
  },
  "meta": [[0, "id"], [1, "detached_at"]]
}
```

A success response has an HTTP status code between `200-299` and returns the procedure's output.

## Error Response

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "json": {
    "defined": false,
    "code": "INTERNAL_SERVER_ERROR",
    "status": 500,
    "message": "Internal server error",
    "data": {}
  },
  "meta": []
}
```

An error response has an HTTP status code between `400-599` and returns an `ORPCError` object.

## Meta

The `meta` field describes native data in the format `[type: number, ...path: (string | number)[]]`.

- **type**: Data type (see [Supported Types](#supported-types)).
- **path**: Path to the data inside `json`.

### Supported Types

| Type | Description |
| ---- | ----------- |
| 0    | bigint      |
| 1    | date        |
| 2    | nan         |
| 3    | undefined   |
| 4    | url         |
| 5    | regexp      |
| 6    | set         |
| 7    | map         |

## Maps

The `maps` field is used with `FormData` to map a file or blob to a specific path in `json`.
