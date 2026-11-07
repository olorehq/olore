---
title: Analytics events
description: >-
  The AnalyticsEvent object holds the names of the analytics events that
  Hydrogen supports. Use these constants to publish page, product, collection,
  cart, and search view events, and to subscribe an analytics destination to
  specific events.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/analytics/analytics-event'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/analytics/analytics-event.md'
api_name: hydrogen
---

# Analytics events

The `AnalyticsEvent` object holds the names of the analytics events that Hydrogen supports. Use these constants to publish page, product, collection, cart, and search view events, and to subscribe an analytics destination to specific events.

The [cart analytics](https://shopify.dev/docs/api/hydrogen/latest/analytics/cart-analytics) functions publish the cart events for you.

Import `AnalyticsEvent` from `@shopify/hydrogen`.

Render [`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts) before you publish events. The component creates the analytics bus at `window.Shopify.analytics`.

***

## Properties

The names of the analytics events that Hydrogen supports. Pass a value as the event name when you publish an event or subscribe a destination. TypeScript narrows the payload to match the event name.

* **CART\_​UPDATED**

  **'cart\_updated'**

  **required**

  Cart tracking publishes this event when the cart changes.

* **CART\_​VIEWED**

  **'cart\_viewed'**

  **required**

  Publish when a customer views the cart. The payload carries the current cart.

* **COLLECTION\_​VIEWED**

  **'collection\_viewed'**

  **required**

  Publish when a customer views a collection. The payload identifies the collection by ID and handle.

* **PAGE\_​VIEWED**

  **'page\_viewed'**

  **required**

  Publish when a customer views a page. Hydrogen fills in the current URL when the payload has none.

* **PRODUCT\_​ADD\_​TO\_​CART**

  **'product\_added\_to\_cart'**

  **required**

  Cart tracking publishes this event when the customer adds a line or raises a line's quantity.

* **PRODUCT\_​REMOVED\_​FROM\_​CART**

  **'product\_removed\_from\_cart'**

  **required**

  Cart tracking publishes this event when the customer removes a line or lowers a line's quantity.

* **PRODUCT\_​VIEWED**

  **'product\_viewed'**

  **required**

  Publish when a customer views a product. The payload lists the viewed products.

* **SEARCH\_​VIEWED**

  **'search\_viewed'**

  **required**

  Publish when a customer views search results. The payload carries the search term.

### Examples

* #### Publish view events

  ##### Description

  Publish page and collection views through the analytics bus.

  ##### TypeScript

  ```ts
  import { AnalyticsEvent } from "@shopify/hydrogen";

  export function publishPageView() {
    window.Shopify?.analytics?.publish(AnalyticsEvent.PAGE_VIEWED);
  }

  export function publishCollectionView(collection: { id: string; handle: string }) {
    window.Shopify?.analytics?.publish(AnalyticsEvent.COLLECTION_VIEWED, {
      collection: { id: collection.id, handle: collection.handle },
    });
  }
  ```

***

## Event payloads

A destination callback receives the payload for the event that the destination subscribes to. Every view event payload accepts an optional page URL, shop, and custom data. When a payload leaves out the URL or shop, the analytics bus adds the current page URL and the shop that you pass to `ShopifyScripts`.

Every payload includes [`BasePayload`](#basepayload), and every view event payload also includes [`UrlPayload`](#urlpayload). The table lists the payload type for each event and the fields that the payload adds.

| Event | Payload |
| - | - |
| `PAGE_VIEWED` | `PageViewPayload` adds no fields. |
| `PRODUCT_VIEWED` | `ProductViewPayload` adds [`ProductsPayload`](#productspayload), the products that the customer views. |
| `COLLECTION_VIEWED` | `CollectionViewPayload` adds [`CollectionPayload`](#collectionpayload), the ID and handle of the collection that the customer views. |
| `CART_VIEWED` | `CartViewPayload` adds [`CartPayload`](#cartpayload), the current cart. |
| `SEARCH_VIEWED` | `SearchViewPayload` adds [`SearchPayload`](#searchpayload), the customer's search term and optional search results. |
| `CART_UPDATED` | `CartUpdatePayload` adds [`CartChangePayload`](#cartchangepayload), the current cart and the cart before the change. |
| `PRODUCT_ADD_TO_CART`, `PRODUCT_REMOVED_FROM_CART` | `CartLineUpdatePayload` adds [`CartChangePayload`](#cartchangepayload) and [`CartLinePayload`](#cartlinepayload), the line before and after the change. |

For a new line, the payload has only `currentLine`. For a removed line, the payload has only `prevLine`. For a quantity change, the payload has `prevLine` and `currentLine`.

Cart update and cart line payloads also carry `OtherData`, which holds extra keys. Cart tracking adds `eventTimestamp`, the publish time in milliseconds.

#### BasePayload

The shop and custom data that every analytics event payload carries.

* **custom​Data**

  **Record\<string, unknown>**

  Custom values for destinations. Cart tracking copies the bus configuration's custom data here.

* **shop**

  **ShopAnalytics | null**

  The shop and sales channel. The bus fills in the configured shop when the payload omits the key, and normalizes the shop ID to a Shop GID.

### ShopAnalytics

Identifies the shop and sales channel in every analytics payload. The \`hydrogen\` channel carries the storefront ID. The \`headless\` channel omits the storefront ID.

```ts
HydrogenShopAnalytics | HeadlessShopAnalytics
```

### HydrogenShopAnalytics

The shop and storefront for a storefront on the Hydrogen sales channel.

* channel

  The Hydrogen sales channel serves the storefront.

  ```ts
  'hydrogen'
  ```

* shopId

  The shop's ID, as a numeric string or a Shop GID.

  ```ts
  string
  ```

* storefrontId

  The Hydrogen storefront's ID.

  ```ts
  string
  ```

### HeadlessShopAnalytics

The shop for a storefront on the Headless sales channel.

* channel

  The Headless sales channel serves the storefront.

  ```ts
  'headless'
  ```

* shopId

  The shop's ID, as a numeric string or a Shop GID.

  ```ts
  string
  ```

* storefrontId

  Leave the storefront ID out. The Headless sales channel has no storefront ID.

  ```ts
  never
  ```

#### UrlPayload

The page URL that every view event payload carries.

* **url**

  **string**

  The page URL. For view events, the bus fills in the current URL when the payload omits it.

#### ProductsPayload

The products in a `product_viewed` event.

* **products**

  **Array\<ProductPayload & OtherData>**

  **required**

  The products that the customer views.

### ProductPayload

A product in a product view payload.

* id

  The product ID.

  ```ts
  string
  ```

* price

  The selected variant's price.

  ```ts
  MoneyV2
  ```

* productType

  The product type.

  ```ts
  string
  ```

* quantity

  The selected quantity.

  ```ts
  number
  ```

* sku

  The selected variant's SKU, or \`null\` when the variant has none.

  ```ts
  string | null
  ```

* title

  The product title.

  ```ts
  string
  ```

* variantId

  The selected variant's ID.

  ```ts
  string
  ```

* variantTitle

  The selected variant's title.

  ```ts
  string
  ```

* vendor

  The product vendor.

  ```ts
  string
  ```

### MoneyV2

A price with an amount and a currency code, in the \`MoneyV2\` shape that the Storefront API and Customer Account API return. The currency code accepts any string, including Customer Account API currencies such as USDC that the Storefront API currency enum doesn't list.

* amount

  Decimal amount as a string, such as \`19.99\`. \`formatMoney\` throws an error when the amount doesn't parse as a number.

  ```ts
  string
  ```

* currencyCode

  Currency code, such as \`USD\`, in any letter case. A code that isn't three letters formats as a decimal amount followed by the code, such as \`19.00 USDC\`. An unrecognized three-letter code appears as the code, such as \`XYZ 19.00\`.

  ```ts
  string
  ```

### OtherData

Extra keys that a payload can carry. Cart tracking adds \`eventTimestamp\`, the publish time in milliseconds.



#### CollectionPayload

The collection in a `collection_viewed` event.

* **collection**

  **{ id: string; handle: string; }**

  **required**

  The ID and handle of the collection that the customer views.

#### CartPayload

The current cart in a cart event.

* **cart**

  **AnalyticsCart | null**

  **required**

  The current cart.

### AnalyticsCart

A cart snapshot in cart analytics payloads.

* cost

  The currency codes of the cart's subtotal and total.

  ```ts
  { subtotalAmount?: { currencyCode?: string; }; totalAmount?: { currencyCode?: string; }; }
  ```

* id

  The cart ID.

  ```ts
  string
  ```

* lines

  The cart lines, as a \`nodes\` list or an \`edges\` list. Cart tracking fills \`nodes\`.

  ```ts
  { nodes?: AnalyticsCartLine[]; edges?: { node: AnalyticsCartLine; }[]; }
  ```

* updatedAt

  The time of the cart's last update, as an ISO 8601 string.

  ```ts
  string
  ```

### AnalyticsCartLine

A cart line in an analytics payload, with the Storefront API fields that cart tracking reads.

* id

  The cart line ID.

  ```ts
  string
  ```

* merchandise

  The variant on the line, with its product.

  ```ts
  { id: string; title: string; price: { amount: string; currencyCode?: string; }; sku?: string; product: { id: string; title: string; vendor: string; productType?: string; handle?: string; }; }
  ```

* quantity

  The number of units on the line.

  ```ts
  number
  ```

#### SearchPayload

The search term and results in a `search_viewed` event.

* **search​Term**

  **string**

  **required**

  The customer's search query.

* **search​Results**

  **unknown**

  The search results, in any shape that your destinations read.

#### CartChangePayload

The current cart and the cart before the change, in a cart update or cart line event.

* **cart**

  **AnalyticsCart | null**

  **required**

  The current cart.

* **prev​Cart**

  **AnalyticsCart | null**

  **required**

  The cart before the change, or `null` when cart tracking has no earlier snapshot.

#### CartLinePayload

The cart line before and after the change, in a `product_added_to_cart` or `product_removed_from_cart` event.

* **current​Line**

  **AnalyticsCartLine**

  The line after the change.

* **prev​Line**

  **AnalyticsCartLine**

  The line before the change.

### Examples

* #### Subscribe a destination

  ##### Description

  Add a destination that logs the added cart line from each add-to-cart event.

  ##### TypeScript

  ```ts
  import { AnalyticsEvent } from "@shopify/hydrogen";

  export function addConsoleDestination() {
    return window.Shopify?.analytics?.addDestination({
      name: "console-logger",
      setup({ subscribe }) {
        return subscribe(AnalyticsEvent.PRODUCT_ADD_TO_CART, (payload) => {
          console.log("[analytics] product_added_to_cart", payload.currentLine);
        });
      },
    });
  }
  ```

***
