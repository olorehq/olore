---
title: Oxygen runtime
description: >-
  Learn how Oxygen's Worker runtime differs from Node and from browsers, and
  which request headers, cache behavior, and APIs your Hydrogen storefront can
  use on Oxygen.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/runtime'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/runtime.md'
api_name: hydrogen
---

# Oxygen runtime

Oxygen runs your storefront as a Web Worker on Cloudflare's open-source [`workerd`](https://github.com/cloudflare/workerd) runtime. Workers use web-standard APIs, such as `fetch`, `Request`, `Response`, Streams, `URL`, and Web Crypto, instead of Node APIs. For details about the standard APIs, refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API) and Cloudflare's [Workers runtime APIs](https://developers.cloudflare.com/workers/runtime-apis/).

This page covers what's specific to Oxygen.

***

## Local parity

[MiniOxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen#step-3-configure-minioxygen) runs your Worker locally on `workerd` with sample Oxygen request headers. Test runtime APIs on a preview deployment.

At build time, MiniOxygen sets the Worker's [compatibility date](https://developers.cloudflare.com/workers/configuration/compatibility-dates/) from your Hydrogen version by default. Hydrogen 2026-10 uses `2026-10-01`. The React Router template sets `2026-04-01`. The compatibility date controls which runtime behavior changes apply to your Worker.

***

## Request headers

Oxygen adds the following headers to each incoming request. A header is missing when Oxygen doesn't have its value.

| Header | Value |
| - | - |
| `oxygen-buyer-ip` | The buyer's IP address. Pass it as `buyerIp` to `createShopifyRequestContext()`. |
| `oxygen-buyer-country` | The buyer's country. |
| `oxygen-buyer-region` | The buyer's region. |
| `oxygen-buyer-region-code` | The buyer's region code. |
| `oxygen-buyer-city` | The buyer's city. |
| `oxygen-buyer-postal-code` | The buyer's postal code. |
| `oxygen-buyer-continent` | The buyer's continent. |
| `oxygen-buyer-latitude` | The buyer's latitude. |
| `oxygen-buyer-longitude` | The buyer's longitude. |
| `oxygen-buyer-timezone` | The buyer's time zone. |
| `oxygen-buyer-metro-code` | The buyer's metro code (Designated Market Area). |
| `oxygen-buyer-is-eu-country` | Any non-empty value means that the buyer's country is in the EU. |

Location headers are approximate. Use them for defaults, such as suggesting a market, but let buyers change the result. For more information, refer to [Markets](https://shopify.dev/docs/storefronts/hydrogen/markets).

***

## Cache

Open a cache with `caches.open()` and pass it to the Storefront API client, as described in [Caching](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching). Oxygen doesn't support `caches.default`, and each data center has its own cache.

If you use the Cache API directly, instead of through the Storefront API client, then note the following:

* Cache keys must use `https:` URLs. Requests with `http:` URLs aren't cached.
* The cache reads `Cache-Control`, `Expires`, `ETag`, and `Last-Modified` from the response that you pass to `cache.put()`. Browser caches ignore these headers, but Oxygen's cache doesn't.
* Responses with a `Set-Cookie` header aren't cached. Remove the header, or add `Cache-Control: private=Set-Cookie`, before you call `cache.put()`.

***

## Differences from Node

Oxygen doesn't include Node APIs. Replace the following in your server code:

| Node API | Use instead |
| - | - |
| `Buffer` | `Uint8Array`, `TextEncoder`, `TextDecoder`, `atob()`, and `btoa()`. `TextEncoder` and `TextDecoder` support only UTF-8. |
| `node:crypto` | Web Crypto, through `crypto.subtle`. For supported algorithms, refer to [Cloudflare's Web Crypto docs](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/#supported-algorithms). |
| Node streams | Web Streams, such as `ReadableStream` and `TransformStream`. |
| `fs` and other `node:*` modules | Bundle static data into your build, or fetch it. |
| `process.env` | The Worker's `env` argument. Refer to [Read variables in your app](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments#read-variables-in-your-app). |

***

## Other limits

* **Request scope:** Call `fetch()`, `setTimeout()`, and `setInterval()` inside the request handler, not at module scope.
* **Dynamic code:** `eval()` and `new Function()` aren't available.
* **Time:** `Date.now()` returns the time of the last I/O operation, not the exact current time. Don't use it to measure code that doesn't do I/O.
* **Headers:** To read multiple `Set-Cookie` values, use `headers.getSetCookie()`.

***

## Next steps

[Deploy to Oxygen\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen)

[Create your Worker entry point and deploy it.](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen)

[Caching\
\
](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching)

[Configure how the Storefront API client caches queries.](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching)

***
