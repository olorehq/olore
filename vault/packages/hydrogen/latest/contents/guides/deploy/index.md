---
title: About deploying Hydrogen storefronts
description: >-
  Learn what a Hydrogen storefront needs from its runtime, and choose where to
  deploy it.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/deploy'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/deploy.md'
api_name: hydrogen
---

# About deploying Hydrogen storefronts

Hydrogen's core uses web platform APIs. Your framework determines where you can deploy a Hydrogen storefront. The React Router starter template deploys to [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen), Shopify's hosting platform for storefronts. [Vercel Shop](https://vercel.shop), Vercel's Next.js template, deploys to [Vercel](https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes#vercel).

***

## How it works

Wherever you deploy, a Hydrogen storefront needs the same things from its runtime:

* **Request-scoped state:** Create the request context, Storefront API client, Customer Account API client, and session managers inside each request. Only pure constants and stateless factories, such as handler groups and route templates, belong at module scope.
* **Server-only secrets:** Read the private Storefront API token and session secret in server code only. On runtimes that pass environment bindings to the request handler, such as Oxygen, read them from those bindings instead of `process.env`.
* **A trusted buyer IP:** Storefront API clients with `type: 'private'` need the buyer's IP address. Hydrogen doesn't infer it, because each platform sets it in a different header.
* **A cache and `waitUntil`:** Pass the platform's cache and its `waitUntil` function to the Storefront API client so that cached queries can revalidate in the background after the storefront sends the response. For more information, refer to [Caching](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching).
* **Request handlers in production code:** Wire `handleShopifyRoutes()` and `handleShopifyRedirects()` into your production server, not a development-only hook. Refer to [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

The following table lists the buyer IP header for common platforms:

| Platform | Buyer IP header |
| - | - |
| Oxygen | `oxygen-buyer-ip` |
| Vercel | `x-forwarded-for` (use the first address) |
| Cloudflare | `CF-Connecting-IP` |
| Fly.io | `Fly-Client-IP` |

On Fly.io, parse `X-Forwarded-For` only when another reverse proxy sits in front of your app.

***

## Choose where to deploy

| Runtime | When to use it | Guide |
| - | - | - |
| Oxygen | You want Shopify to host your storefront, with environments, preview deployments, and environment variables managed in the Shopify admin. | [Deploy to Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen) |
| Vercel | You're building with Next.js, or you're not using Oxygen. | [Vercel](https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes#vercel) |
| Node, Cloudflare Workers, Deno, or another runtime | Your framework already deploys there. | [Other runtimes](https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes) |

Before you deploy to any runtime, run the [production checklist](https://shopify.dev/docs/storefronts/hydrogen/production-checklist) against a production build.

***

## Next steps

[Deploy to Oxygen\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen)

[Host your storefront on Shopify's global platform.](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen)

[Other runtimes\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes)

[Deploy to Vercel, Node, Cloudflare Workers, or Deno.](https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes)

[Production checklist\
\
](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Check your storefront's request handlers, cart, and analytics before you launch.](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

***
