---
title: Deploy to other runtimes
description: >-
  Deploy a Hydrogen storefront to Vercel, Node, Cloudflare Workers, Deno, or
  another JavaScript runtime.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes.md'
api_name: hydrogen
---

# Deploy to other runtimes

Choose a host that supports your framework and Hydrogen's [runtime requirements](https://shopify.dev/docs/storefronts/hydrogen/deploy#how-it-works).

***

## Vercel

If you're not using [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen), then we recommend deploying to Vercel. [Vercel Shop](https://vercel.shop), Vercel's Next.js template, deploys to Vercel with its default Next.js settings. To deploy, follow Vercel's [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs) guide.

### Environment variables

Add your store's environment variables in Vercel's [project settings](https://vercel.com/docs/environment-variables). Server-only values don't use the `NEXT_PUBLIC_` prefix. Vercel Shop's build fails until you set its required variables. For their names, refer to Vercel Shop's [environment variables](https://vercel.shop/docs/reference/env-vars).

### Buyer IP

The buyer's IP address is the first address in the `x-forwarded-for` header:

## Buyer IP on Vercel

lib/buyer-ip.ts

```ts
export function getBuyerIp(headers: Pick<Headers, 'get'>): string {
  const buyerIp = headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (buyerIp) return buyerIp;


  if (process.env.NODE_ENV !== 'production') return '127.0.0.1';


  throw new Error('x-forwarded-for is required for private Storefront API clients');
}
```

### Cache

To use Vercel's runtime cache, install `@vercel/functions`, get the cache from it in `proxy.ts`, and pass it to the Storefront API client with the proxy event's `waitUntil`:

## Vercel runtime cache

proxy.ts

```ts
import {type CacheInstance} from '@shopify/hydrogen';
import {getCache} from '@vercel/functions';
import type {NextFetchEvent, NextRequest} from 'next/server';


export async function proxy(request: NextRequest, event: NextFetchEvent) {
  const cache: CacheInstance | undefined = process.env.VERCEL
    ? getCache({namespace: 'hydrogen-v1', keyHashFunction: (key) => key})
    : undefined;
  const waitUntil = event.waitUntil.bind(event);


  // Pass cache and waitUntil to createStorefrontClient().
  // ...
}
```

***

## Node, Cloudflare Workers, and Deno

Use your framework's adapter for the runtime, and then do the following:

1. Create the request context, Storefront API client, [Customer Account API](https://shopify.dev/docs/api/customer) client, and session managers inside each request.
2. Read the buyer IP from your platform's trusted header, and pass it as `buyerIp` to `createShopifyRequestContext()`.
3. Read secrets in server code only.
4. If your platform has a cache and `waitUntil`, then pass them to the Storefront API client. On Cloudflare Workers, use `caches.open()` and the execution context's `waitUntil`, as on Oxygen.
5. Confirm that `handleShopifyRoutes()` runs before your router and `handleShopifyRedirects()` runs after a 404 in the production build.

***

## Next steps

[Production checklist\
\
](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Check your storefront's request handlers, cart, and analytics before you launch.](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Caching\
\
](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching)

[Configure how the Storefront API client caches queries.](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching)

***
