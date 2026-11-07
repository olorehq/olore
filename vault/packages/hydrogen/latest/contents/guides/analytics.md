---
title: Add analytics and consent
description: >-
  Send Shopify analytics events from a Hydrogen storefront, collect visitor
  consent, and forward events to third-party destinations.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/analytics'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/analytics.md'
api_name: hydrogen
---

# Add analytics and consent

Shopify analytics powers the [reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports) in the Shopify admin, like sessions, conversion, and top products. Hydrogen sends the same events that Liquid themes send, and respects each visitor's privacy choices. This guide shows you how to load Shopify's runtime scripts, publish page and resource events, track cart changes, and handle consent.

***

## How it works

Hydrogen's analytics has three parts:

* [`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts) loads Shopify's [Customer Privacy API](https://shopify.dev/docs/api/customer-privacy), the privacy banner, and Shopify's analytics destination. It also creates one analytics bus for the page at `window.Shopify.analytics`.
* The analytics bus receives the events that your app publishes, holds them until the visitor's consent allows delivery, and then delivers them to destinations.
* Destinations receive events from the bus. Shopify analytics is a destination that ships by default, and you can add your own.

`ShopifyScripts` doesn't publish bus events. Your app publishes `AnalyticsEvent.PAGE_VIEWED` on load and on each client navigation, and destinations subscribe to it.

Your app decides when to publish events, because only your routes know when a product or collection is on screen. The bus runs only in the browser. There's no server-side dispatch.

***

## Requirements

* Wire [request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers), including the Storefront API proxy. Analytics reads tracking values from Storefront API responses and relies on the cookies that the proxy sets. Without the proxy, analytics and checkout session continuity are incomplete.
* Pass your shop ID as `shop.shopId`. To attribute traffic to a Hydrogen storefront, also set `PUBLIC_STOREFRONT_ID`.
* Build a [cart with the cart store](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart), if you want cart events.

***

## Step 1: Render `ShopifyScripts`

Render `ShopifyScripts` once, in the document head of your root layout. Resolve the `shop` and `i18n` values on the server, and use the same market that your Storefront API requests use:

| Prop | Description |
| - | - |
| `shop` | Your shop's `shopId`, `storefrontId`, and permanent `myshopifyDomain`. Use `"0"` for `storefrontId` if you don't have one. |
| `i18n` | The active market's `country` and `language`, with an optional `currency`. |
| `consent` | How Hydrogen collects consent. Refer to [Step 5](#step-5-handle-consent). |
| `navigate` | Your router's function for storefront pages; same-origin checkout, cart and buy permalinks, and customer-account handoffs reload the document. |
| `routes` | Your route templates, so Shopify scripts can build storefront URLs. |
| `analytics` | Optional bus settings, like `channel` or `customData`. |

## Render ShopifyScripts

## lib/shopify-scripts.ts

##### Vanilla JavaScript

```ts
import {
  initializeShopifyScripts,
  renderShopifyScriptTags,
  type ShopifyScriptsI18n,
} from '@shopify/hydrogen';

import {analyticsConsent, shop} from './config';
import {routeTemplates} from './route-templates';

// Server: include these HTML strings in the document head.
export function renderShopifyHead(i18n: ShopifyScriptsI18n): string {
  return renderShopifyScriptTags({i18n, shop, consent: analyticsConsent}).join('');
}

// Browser: run once during startup.
export function startShopifyScripts(navigate: (url: string) => void) {
  void initializeShopifyScripts({
    routes: routeTemplates,
    navigate,
    consent: analyticsConsent,
  });
}
```

##### React

```tsx
import {ShopifyScripts, type ShopifyScriptsProps} from '@shopify/hydrogen/react';
import type {ReactNode} from 'react';

import {analyticsConsent} from '../lib/config';
import {routeTemplates} from '../lib/route-templates';

type DocumentProps = Pick<ShopifyScriptsProps, 'shop' | 'i18n' | 'navigate'> & {
  children: ReactNode;
};

export function Document({shop, i18n, navigate, children}: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <ShopifyScripts
          shop={shop}
          i18n={i18n}
          consent={analyticsConsent}
          navigate={navigate}
          routes={routeTemplates}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {ShopifyScripts} from '@shopify/hydrogen/vue';
import {RouterView, useRouter} from 'vue-router';

import {analyticsConsent, defaultI18n, shop} from './lib/config';
import {routeTemplates} from './lib/route-templates';

const router = useRouter();

async function navigate(url: string) {
  await router.push(url);
}
</script>

<template>
  <ShopifyScripts
    :shop="shop"
    :i18n="defaultI18n"
    :consent="analyticsConsent"
    :navigate="navigate"
    :routes="routeTemplates"
  />
  <RouterView />
</template>
```

Pass your router's navigate function, like the one from React Router's `useNavigate()`, as `navigate`, and resolve `shop` and `i18n` in the server code for your root layout. To find where this code goes in your framework, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

In Next.js, the root layout is a Server Component, so it can't call `useRouter()` or pass functions to client components. Render `ShopifyScripts` from a client component, call `useRouter()` there, pass `(url) => router.push(url)` as `navigate`, and render that component in the layout's `<head>`.

Vue's `ShopifyScripts` renders the tags where you place it. To put them in the document head with a head manager, like `useHead()`, pass the output of `getShopifyScriptTags()` to the head manager, and call `initializeShopifyScripts()` in `onMounted()`. In vanilla JavaScript, render the tags on the server with `renderShopifyScriptTags()`, or get them as data with `getShopifyScriptTags()`. Then call `initializeShopifyScripts()` from your client bundle, as the vanilla JavaScript example does.

Resolve the `shop` object from your server config:

## Shop config

lib/config.ts

```ts
import type {ShopifyScriptsShop} from '@shopify/hydrogen';


export const shop: ShopifyScriptsShop = {
  shopId: process.env.NEXT_PUBLIC_SHOP_ID!,
  storefrontId: process.env.NEXT_PUBLIC_STOREFRONT_ID || '0',
  myshopifyDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN!,
};


export const defaultI18n = {country: 'US', language: 'EN'} as const;


export const analyticsConsent = {mode: 'default-banner'} as const;
```

This example reads Next.js environment variable names. In React Router, use your app's names, like `PUBLIC_STOREFRONT_ID`.

The `analytics.channel` setting defaults to `hydrogen`, which attributes events to the storefront in `shop.storefrontId`. If your storefront uses the [Headless channel](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/manage-headless-channels), then pass `analytics={{channel: 'headless'}}`.

To omit Shopify's analytics destination script, pass `shopifyAnalytics: false` to `ShopifyScripts` or to the core helpers.

***

## Step 2: Publish page and resource events

Read the bus through a small helper. The helper returns `null` on the server, so components can call it safely during rendering:

## Analytics helper

lib/analytics.ts

```ts
import {AnalyticsEvent, type StorefrontAnalytics} from '@shopify/hydrogen';


export {AnalyticsEvent};


let bus: StorefrontAnalytics | null = null;


export function getAnalytics(): StorefrontAnalytics | null {
  if (typeof window === 'undefined') return null;
  bus ??= window.Shopify?.analytics ?? null;
  return bus;
}
```

Don't read environment variables in this module, because it runs in the browser.

For every event key and the payload that each event takes, refer to [`AnalyticsEvent`](https://shopify.dev/docs/api/hydrogen/latest/analytics/analytics-event).

### Publish page views

Publish `PAGE_VIEWED` on the first load and on every client navigation. `ShopifyScripts` doesn't publish it for you. `ShopifyScripts` fires a browser event named `shopify:page:view` on `document`, which Shopify's performance script reads. Analytics destinations don't read that event. They read `page_viewed` on `window.Shopify.analytics`, and only your app publishes it. If your app doesn't, Shopify analytics and third-party destinations like GA4 record no page views.

Key the event by the pathname and the search string, so a navigation that changes only query parameters also counts:

## Page view tracker

## lib/page-views.ts

##### Vanilla JavaScript

```ts
import {AnalyticsEvent, getAnalytics} from './analytics';

let lastPageKey: string | null = null;

// Call on the first load and after every client navigation.
export function trackPageView() {
  const pageKey = `${window.location.pathname}${window.location.search}`;
  if (pageKey === lastPageKey) return;
  lastPageKey = pageKey;
  getAnalytics()?.publish(AnalyticsEvent.PAGE_VIEWED);
}
```

##### React

```tsx
import {useEffect} from 'react';

import {AnalyticsEvent, getAnalytics} from '../lib/analytics';

export function PageViewedTracker({pageKey}: {pageKey: string}) {
  useEffect(() => {
    getAnalytics()?.publish(AnalyticsEvent.PAGE_VIEWED);
  }, [pageKey]);

  return null;
}
```

##### Vue

```html
<script setup lang="ts">
import {onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';

import {AnalyticsEvent, getAnalytics} from '../lib/analytics';

const route = useRoute();

onMounted(() => {
  watch(
    () => route.fullPath.split('#')[0],
    () => getAnalytics()?.publish(AnalyticsEvent.PAGE_VIEWED),
    {immediate: true},
  );
});
</script>

<template>
  <slot />
</template>
```

Render the tracker once in your root layout. In React, pass a `pageKey` built from your router's path and search string, like `${location.pathname}${location.search}` from React Router's `useLocation()`. In Vue, wrap your page content in the tracker. In vanilla JavaScript, call `trackPageView()` on startup, after each navigation in your router, and on `popstate`.

In Next.js, build `pageKey` from `usePathname()` and `useSearchParams()` in a client component, and wrap that component in `<Suspense>`. The `useSearchParams()` client-rendering bailout then applies only to the tracker, not to the whole layout.

### Publish resource views

Publish view events from the route that has the data, when that data resolves:

## Resource view trackers

## lib/view-events.ts

##### Vanilla JavaScript

```ts
import type {ProductPayload} from '@shopify/hydrogen';

import {AnalyticsEvent, getAnalytics} from './analytics';

export type ProductViewData = Pick<ProductPayload, 'id' | 'title' | 'vendor'> & {
  handle: string;
  selectedOrFirstAvailableVariant?: {
    id: string;
    title: string;
    price: ProductPayload['price'];
    sku?: string | null;
  } | null;
};

export function publishProductViewed(product: ProductViewData) {
  const variant = product.selectedOrFirstAvailableVariant;
  if (!variant) return;
  getAnalytics()?.publish(AnalyticsEvent.PRODUCT_VIEWED, {
    products: [
      {
        id: product.id,
        title: product.title,
        price: variant.price,
        vendor: product.vendor,
        variantId: variant.id,
        variantTitle: variant.title,
        quantity: 1,
        sku: variant.sku ?? undefined,
      },
    ],
  });
}

export function publishCollectionViewed(collection: {
  id: string;
  handle: string;
}) {
  getAnalytics()?.publish(AnalyticsEvent.COLLECTION_VIEWED, {
    collection: {id: collection.id, handle: collection.handle},
  });
}

export function publishSearchViewed(searchTerm: string, totalCount: number) {
  if (!searchTerm) return;
  getAnalytics()?.publish(AnalyticsEvent.SEARCH_VIEWED, {
    searchTerm,
    searchResults: {totalCount},
  });
}
```

##### React

```tsx
import type {ProductPayload} from '@shopify/hydrogen';
import {useEffect} from 'react';

import {AnalyticsEvent, getAnalytics} from '../lib/analytics';

type ProductViewData = Pick<ProductPayload, 'id' | 'title' | 'vendor'> & {
  handle: string;
  selectedOrFirstAvailableVariant?: {
    id: string;
    title: string;
    price: ProductPayload['price'];
    sku?: string | null;
  } | null;
};

export function ProductViewedTracker({product}: {product: ProductViewData}) {
  useEffect(() => {
    const variant = product.selectedOrFirstAvailableVariant;
    if (!variant) return;
    getAnalytics()?.publish(AnalyticsEvent.PRODUCT_VIEWED, {
      products: [
        {
          id: product.id,
          title: product.title,
          price: variant.price,
          vendor: product.vendor,
          variantId: variant.id,
          variantTitle: variant.title,
          quantity: 1,
          sku: variant.sku ?? undefined,
        },
      ],
    });
  }, [product.handle]);

  return null;
}

export function CollectionViewedTracker({
  collection,
}: {
  collection: {id: string; handle: string};
}) {
  useEffect(() => {
    getAnalytics()?.publish(AnalyticsEvent.COLLECTION_VIEWED, {
      collection: {id: collection.id, handle: collection.handle},
    });
  }, [collection.id, collection.handle]);

  return null;
}

export function SearchViewedTracker({
  searchTerm,
  totalCount,
}: {
  searchTerm: string;
  totalCount: number;
}) {
  useEffect(() => {
    if (!searchTerm) return;
    getAnalytics()?.publish(AnalyticsEvent.SEARCH_VIEWED, {
      searchTerm,
      searchResults: {totalCount},
    });
  }, [searchTerm, totalCount]);

  return null;
}
```

##### Vue

```html
<script setup lang="ts">
import {onMounted, watch} from 'vue';

import {publishProductViewed} from '../lib/view-events';

const props = defineProps(['product']);

onMounted(() => {
  watch(
    () => props.product.handle,
    () => publishProductViewed(props.product),
    {immediate: true},
  );
});
</script>

<template>
  <slot />
</template>
```

In vanilla JavaScript, call each function after the page's data loads. In Vue, the product tracker calls the vanilla `publishProductViewed()` function when the product handle changes. Build collection and search trackers the same way, with `publishCollectionViewed()` and `publishSearchViewed()`.

Follow these rules for resource events:

* Use the Shopify Product GID for `id` and the ProductVariant GID for `variantId`. Handles aren't analytics IDs.
* Include `id`, `title`, `price`, `vendor`, `variantId`, `variantTitle`, and `quantity` for every product. If a field is missing, then Shopify analytics skips the event and logs an error to the console. Your own destinations still receive it.
* Publish `SEARCH_VIEWED` only for non-empty search terms.
* Publish `CART_VIEWED` when the customer opens the cart page or cart drawer. Pass an `AnalyticsCart` snapshot, or `cart: null` until one is available. Don't pass a partial cart.

View events read the page URL from `window.location.href`, so you don't need to pass it.

***

## Step 3: Track cart changes

Hydrogen derives cart events, like `product_added_to_cart`, from confirmed changes in the cart store. In React and Vue, call [`useCartAnalytics()`](https://shopify.dev/docs/api/hydrogen/latest/analytics/cart-analytics) inside your `CartProvider`. In vanilla JavaScript, call `trackCartAnalytics()` with your cart store:

## Cart analytics tracker

## lib/cart-analytics.ts

##### Vanilla JavaScript

```ts
import {trackCartAnalytics} from '@shopify/hydrogen';

import {cartStore} from './cart';

// Call once in the browser, after ShopifyScripts creates the analytics bus.
export function startCartAnalytics(): () => void {
  return trackCartAnalytics(cartStore);
}
```

##### React

```tsx
import {useCartAnalytics} from '@shopify/hydrogen/react';

export function CartAnalyticsTracker() {
  useCartAnalytics();
  return null;
}
```

##### Vue

```html
<script setup lang="ts">
import {useCartAnalytics} from '@shopify/hydrogen/vue';

useCartAnalytics();
</script>

<template>
  <slot />
</template>
```

In React, render the tracker once, as a child of `CartProvider`. In Vue, wrap your page content in the tracker, inside `CartProvider`.

The tracker skips pending updates and publishes events only after Shopify confirms a cart change. Don't publish `cart_updated`, `product_added_to_cart`, or `product_removed_from_cart` yourself, because manual events duplicate or contradict the tracked cart history.

Select `updatedAt`, `lines.nodes`, and each line's `cost.amountPerQuantity` in custom cart queries.

In vanilla JavaScript, call `trackCartAnalytics(cartStore)` from client-only startup code. It returns an unsubscribe function. Don't call it when you create the cart store, because it throws when `window.Shopify.analytics` doesn't exist, like during server rendering.

***

## Step 4: Add analytics destinations

To send events to another service, like Google Analytics or Meta Pixel, register a destination with `addDestination()`. The bus delivers events to destinations only when the visitor's consent allows analytics. When a destination registers, the bus replays up to 500 retained events that it subscribes to:

## Console destination

lib/analytics.ts

```ts
export function addAnalyticsConsoleDestination(): (() => void) | null {
  const analytics = getAnalytics();
  if (!analytics) return null;


  return analytics.addDestination({
    name: 'example-console-logger',
    setup({subscribe}) {
      const events = [
        AnalyticsEvent.PAGE_VIEWED,
        AnalyticsEvent.PRODUCT_VIEWED,
        AnalyticsEvent.COLLECTION_VIEWED,
        AnalyticsEvent.CART_VIEWED,
        AnalyticsEvent.SEARCH_VIEWED,
      ] as const;
      const unsubscribers = events.map((event) =>
        subscribe(event, (payload) => {
          console.log(`[analytics] ${event}`, payload);
        }),
      );


      return () => {
        for (const unsubscribe of unsubscribers) unsubscribe();
      };
    },
  });
}
```

Follow these rules for destinations:

* Register each destination once per page lifetime, after `ShopifyScripts` creates the bus. Removing and adding a destination again replays retained events again, so registering on component mount can duplicate deliveries, including in React Strict Mode.
* Subscribe to events inside `setup()` with its `subscribe` function. Keep third-party script loading and cookie writes out of `setup()`, which isn't consent-gated.
* To read Shopify's visitor tokens, call `getTrackingValues()` from the callback's second argument: `subscribe(event, (payload, {getTrackingValues}) => {...})`. It returns empty strings when analytics tracking isn't allowed.
* To pass extra values to destinations, set `analytics.customData` on `ShopifyScripts`. Destinations read it with `getConfig().customData`. Hydrogen doesn't add it to the events that you publish.
* Don't send events to Shopify's analytics endpoint yourself. Shopify's destination already does.

***

## Step 5: Handle consent

Shopify's Customer Privacy API decides for each visitor whether tracking needs consent, based on where they are. The bus blocks destination delivery until consent allows it. If the Customer Privacy script is blocked or hasn't loaded, then delivery stays blocked.

Choose a consent mode with the `consent` prop:

| Mode | Behavior |
| - | - |
| `default-banner` | Loads Shopify's hosted privacy banner and shows it when the visitor's region requires it. |
| `custom-banner` | Loads only the Customer Privacy API, and waits for your `setup()` callback to connect a third-party banner. |
| `no-banner` | Loads only the Customer Privacy API. Use it only when you've already collected consent, or you manage consent outside the storefront. |

Use `default-banner` unless you have your own consent UI. With `no-banner`, visitors in regions that require consent can't grant it, so events never reach destinations.

The consent config accepts only the mode and, for custom banners, `setup()`. Don't pass `country` or `language` in the consent config. Pass the market in the `i18n` prop instead.

### Connect a custom banner

For a third-party consent provider, use `custom-banner` mode with an async `setup()` function. Hydrogen calls `setup()` in the browser after the Customer Privacy API loads, and holds all destination events until the returned promise resolves:

## Custom consent banner

components/Document.tsx

```tsx
<ShopifyScripts
  shop={shop}
  i18n={i18n}
  consent={{
    mode: 'custom-banner',
    async setup() {
      const customerPrivacy = window.Shopify!.customerPrivacy!;
      const sync = async (choice: unknown) => {
        await customerPrivacy.setTrackingConsent(mapProviderConsent(choice));
      };
      const unsubscribe = provider.subscribe((choice) => {
        void sync(choice).catch(reportConsentError);
      });
      try {
        await provider.whenConsentResolved();
        await sync(provider.getResolvedConsent());
      } catch (error) {
        unsubscribe();
        throw error;
      }
    },
  }}
/>
```

In this example, `provider`, `mapProviderConsent()`, and `reportConsentError()` are adapters that you write for your consent provider. They aren't Hydrogen APIs.

Follow these rules for custom banners:

* Subscribe to provider changes before you read saved consent, so later changes stay in sync.
* Resolve the promise only after the provider has a choice and `setTrackingConsent()` finishes. Showing the banner doesn't complete setup.
* Map every choice to all four purposes: `analytics`, `marketing`, `preferences`, and `sale_of_data`. Leave an unknown provider state pending, instead of submitting it as a denial.
* In Next.js, define `setup()` in the client component that renders `ShopifyScripts`. Functions can't pass from Server Components to client components.

Hydrogen runs `setup()` once per page. If it fails, then Hydrogen logs the error and keeps delivery blocked. Retry inside `setup()` while its promise is still pending, if your provider needs it.

The consent gate covers Hydrogen analytics destinations. Scripts that you load separately need their own consent handling.

***

## Step 6: Verify analytics

To test your setup, add the [console destination](#step-4-add-analytics-destinations) and open your storefront with the browser's developer tools open:

1. Check the console for `[analytics] page_viewed` after consent allows tracking. If nothing logs, then check that your app publishes `PAGE_VIEWED`, that `ShopifyScripts` renders, and that the visitor has granted consent.
2. In the **Network** tab, filter for `monorail-edge.shopifysvc.com`. A `produce_batch` request confirms that events reach Shopify.
3. Navigate between pages. Each navigation logs a new `page_viewed` event.
4. Add an item to the cart. A new `produce_batch` request confirms that the `product_added_to_cart` event reached Shopify.
5. With `default-banner` mode, simulate a visitor in the EU, for example with a location override in your browser's developer tools. The privacy banner appears.

If your Content Security Policy blocks `cdn.shopify.com`, then the Customer Privacy script can't load and events never reach destinations. Add `cdn.shopify.com` to `script-src`.

Shopify skips analytics requests from Chrome Lighthouse, so synthetic monitoring that uses Lighthouse doesn't show `produce_batch` requests.

***

## Next steps

[Build cart UI\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

[Build the cart store that cart analytics tracks.](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

[Production checklist\
\
](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Check analytics, consent, and security before you launch.](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Analytics reference\
\
](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts)

[Review Shopify scripts, cart analytics, and the event payloads that Hydrogen publishes.](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts)

***
