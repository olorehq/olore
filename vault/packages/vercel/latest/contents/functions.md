# Vercel Functions

Server-side code without managing servers. Auto-scales based on demand with fluid compute for efficient concurrency.

## Create a Function

### Web Standard (Recommended)

```ts
// api/hello.ts
export default {
  fetch(request: Request) {
    return new Response('Hello from Vercel!');
  },
};
```

### HTTP Method Exports

```ts
// app/api/hello/route.ts (Next.js App Router)
export function GET(request: Request) {
  return new Response('Hello from Vercel!');
}

export function POST(request: Request) {
  return new Response('Created');
}
```

### Generic Framework

```ts
// api/hello.ts
export function GET(request: Request) {
  return new Response('Hello from Vercel!');
}
```

## How Functions Work

- New invocation per incoming request
- Subsequent requests reuse the same instance (fluid compute)
- Scales down to zero when no traffic
- Concurrent execution within the same instance reduces cold starts

## Fluid Compute

Allows concurrent execution in idle time, reducing:
- Cold starts
- Latency
- Compute costs

No need to spin up multiple isolated instances for I/O-bound tasks.

## Data Locality

Functions should execute close to your data source. Default region: Washington, D.C. (`iad1`).

Configure in project settings or `vercel.json`:
```json
{
  "regions": ["sfo1"],
  "functions": {
    "api/heavy.ts": {
      "memory": 1024,
      "maxDuration": 60
    }
  }
}
```

## Runtimes

- **Node.js** (default)
- **Edge** (V8 isolates, globally distributed)
- **Bun**
- **Python**, **Go**, **Ruby**

## Pricing

Based on active CPU, provisioned memory, and invocations. See fluid compute pricing docs.

## Related

- Streaming Functions
- Function Limits
- Function Logs
- Configuring Functions (region, memory, duration)
