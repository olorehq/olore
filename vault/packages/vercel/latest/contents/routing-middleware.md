# Routing Middleware

Code that executes **before** a request is processed. Runs globally before the cache — ideal for personalization of static content.

## Creating Middleware

Create `middleware.ts` (or `.js`) at your project root:

```ts
// middleware.ts
export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname === '/old-page') {
    return new Response(null, {
      status: 302,
      headers: { Location: '/new-page' },
    });
  }

  return new Response('Hello from Middleware!');
}
```

Works with **any framework** on Vercel.

## Use Cases

- Redirects and rewrites based on request properties
- A/B testing and feature flags
- Geolocation-based routing
- Authentication checks
- Custom headers

## Runtime Options

Default: **Edge** runtime. Change to Node.js or Bun:

```ts
export const config = {
  runtime: 'nodejs', // or 'edge' (default)
};

export default function middleware(request: Request) {
  return new Response('Hello!');
}
```

For Bun: set `bunVersion` in `vercel.json` and runtime to `nodejs`.

## Request Limits

| Limit | Value |
|---|---|
| Max URL length | 14 KB |
| Max request body | 4 MB |
| Max request headers | 64 |
| Max headers length | 16 KB |

## Logging

Full `console` API support. Logs appear in Vercel project under View Functions Logs.

## Database Access

For low-latency: use global databases (Edge Config, Vercel Blob, or Marketplace storage). Avoid databases far from edge regions.

## Pricing

Fluid compute model — charged by compute resources used.
