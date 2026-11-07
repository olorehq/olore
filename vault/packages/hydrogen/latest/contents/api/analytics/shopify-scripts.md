---
title: Shopify scripts
description: >-
  The ShopifyScripts component and the matching core functions load Shopify's
  storefront scripts in your storefront. Use the component or functions to set
  up Standard Actions, analytics, customer privacy consent, and client-side
  navigation through your router.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts.md'
api_name: hydrogen
---

# Shopify scripts

The `ShopifyScripts` component and the matching core functions load Shopify's storefront scripts in your storefront. Use the component or functions to set up [Standard Actions](https://shopify.dev/docs/storefronts/themes/best-practices/standard-events-and-actions), analytics, customer privacy consent, and client-side navigation through your router.

To send analytics events and collect consent, refer to [Add analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics).

In frameworks without a Hydrogen binding, such as Astro, SvelteKit, or SolidStart, import the core functions from `@shopify/hydrogen`. Render the script tags on the server with `getShopifyScriptTags` or `renderShopifyScriptTags`, then call `initializeShopifyScripts` in the browser.

Import `ShopifyScripts` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue`.

Render the component once in the root layout of a React Router, Next.js, Vue, or Nuxt app.

***

## Properties

Props for the `ShopifyScripts` component in React and Vue. The component renders Shopify's script tags and starts the scripts in the browser after hydration. The component starts the scripts once, with the first props. Later prop changes don't restart the scripts.

In Next.js App Router, render the component from a client component when you pass a consent `setup` function. Function props can't cross the server-to-client boundary.

* **shop**

  **ShopifyScriptsShop**

  **required**

  The shop's IDs and permanent domain.

* **account**

  **boolean**

  Loads the customer account component. Render `shopify-account` where you want the account UI to appear.

* **analytics**

  **ShopifyScriptsAnalyticsConfig**

  The sales channel and custom data for the analytics bus.

* **consent**

  **ConsentConfig**

  Which consent script to load and how the analytics bus waits for consent.

* **debug**

  **{ standardEventsInspector?: boolean; }**

  Development-only debugging tools.

* **i18n**

  **ShopifyScriptsI18n**

  The country, language, currency, and path prefix for Shopify's scripts. Defaults to US English.

* **inbox**

  **boolean**

  Loads Inbox. Render `shopify-chat` where you want the chat UI to appear.

* **navigate**

  **(url: string) => void | Promise\<void>**

  Navigates after Shopify's scripts resolve a URL to your app's route. Defaults to a full page load.

* **nonce**

  **string**

  Adds a `nonce` attribute to every script tag.

* **routes**

  **ShopifyRouteTemplates**

  Your app's custom route templates, which Shopify's scripts use to match storefront URLs.

* **shopify​Analytics**

  **boolean**

  Loads Shopify's storefront analytics script. Defaults to `true`.

* **web​Mcp**

  **boolean**

  Loads Shopify's WebMCP tools when the browser supports WebMCP. Defaults to `true`.

### ShopifyScriptsAnalyticsConfig

The sales channel and custom data for the analytics bus.

* channel

  The sales channel that Shopify attributes analytics to. Defaults to \`hydrogen\`.

  ```ts
  ShopAnalyticsChannel
  ```

* customData

  Extra values that analytics destinations can read from the bus configuration.

  ```ts
  Record<string, unknown>
  ```

### ShopAnalyticsChannel

The sales channel that Shopify attributes a storefront's analytics to.

```ts
"hydrogen" | "headless"
```

### ConsentConfig

Chooses which Shopify consent script loads and when the analytics bus releases events to destinations. - \`default-banner\` loads Shopify's hosted privacy banner. When the customer must see the banner, destinations wait until the customer accepts or declines. Otherwise, events release as soon as the consent API loads. - \`custom-banner\` loads only the Customer Privacy API and requires a \`setup\` callback that integrates a third-party consent provider. Events release once the callback resolves. - \`no-banner\` loads only the Customer Privacy API and releases events once the API loads. Omitting the mode has the same effect. In every mode, destinations receive events only while the Customer Privacy API allows analytics processing.

```ts
{ mode?: "no-banner"; setup?: never } | { mode: "default-banner"; setup?: never } | { mode: "custom-banner"; setup: ConsentSetup }
```

### ConsentSetup

Connects a third-party consent provider to Shopify's Customer Privacy API. Hydrogen calls the function once, after the Customer Privacy API loads. Pass the provider's choice to \`window\.Shopify.customerPrivacy\`, and resolve after Shopify receives the choice. Hydrogen then delivers the events that consent allows. When the promise rejects, Hydrogen logs the error, keeps events blocked, and doesn't call the function again.



returns

A promise that resolves after consent syncs with Shopify, or rejects to keep delivery blocked.

```ts
Promise<void>
```

### ShopifyScriptsI18n

The locale that Shopify's scripts read from the browser's Shopify global.

* country

  The request's country.

  ```ts
  ShopifyCountryCode
  ```

* currency

  The active currency code. Hydrogen converts it to uppercase.

  ```ts
  string
  ```

* language

  The request's language.

  ```ts
  ShopifyLanguageCode
  ```

* pathPrefix

  The URL prefix for localized routes, such as \`/es-es\`. Hydrogen adds the prefix to standard route redirects and product variant URLs.

  ```ts
  string
  ```

### ShopifyCountryCode

A country code that both the Storefront API and the Customer Account API accept.

```ts
```

### ShopifyLanguageCode

A language code that both the Storefront API and the Customer Account API accept.

```ts
```

### ShopifyRouteTemplates

Your app's custom path templates for Shopify standard storefront routes, keyed by route name.

* article

  The app's article path. Hydrogen redirects Shopify article paths, such as \`/blogs/news/snowboard-guide\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"blogHandle"> & StandardRouteTemplateWithParam<"articleHandle">
  ```

* blog

  The app's blog path. Hydrogen redirects Shopify blog paths, such as \`/blogs/news\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"blogHandle">
  ```

* cart

  The app's cart path. Hydrogen redirects Shopify's \`/cart\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

* collection

  The app's collection path. Hydrogen redirects Shopify collection paths, such as \`/collections/winter\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"collectionHandle">
  ```

* collectionList

  The app's collection list path. Hydrogen redirects Shopify's \`/collections\` path and the legacy \`/products\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

* page

  The app's page path. Hydrogen redirects Shopify page paths, such as \`/pages/about-us\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"pageHandle">
  ```

* policy

  The app's policy path. Hydrogen redirects Shopify policy paths, such as \`/policies/privacy-policy\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"policyHandle">
  ```

* product

  The app's product path. Hydrogen redirects Shopify product paths, such as \`/products/snowboard\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"productHandle">
  ```

* productInCollection

  The app's path for products inside a collection. Hydrogen redirects Shopify paths such as \`/collections/winter/products/snowboard\` to this template. The template must include \`:productHandle\`. Add \`:collectionHandle\` when the app's product path also names the collection.

  ```ts
  StandardRouteTemplateWithParam<"productHandle">
  ```

* search

  The app's search path. Hydrogen redirects Shopify's \`/search\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

### StandardRouteTemplateWithParam

A path template that starts with \`/\` and includes the named handle placeholder.

```ts
`/${string}:${Param}` | `/${string}:${Param}/${string}`
```

### StandardRouteTemplate

A path template that starts with \`/\`.

```ts
`/${string}`
```

### ShopifyScriptsShop

The shop identifiers that Shopify's scripts and analytics use.

* myshopifyDomain

  The shop's permanent \`\*.myshopify.com\` domain. Hydrogen sets it as \`window\.Shopify.shop\`.

  ```ts
  string
  ```

* shopId

  The shop's ID, as a numeric string or a Shop GID.

  ```ts
  string
  ```

* storefrontId

  The Hydrogen storefront's ID. Hydrogen leaves it out of Headless channel analytics.

  ```ts
  string
  ```

### Examples

* #### Render scripts in a root layout in React

  ##### Description

  Render the component in the document head of a React Router layout. This example passes \`shop\` and \`i18n\` values from the server, a \`useNavigate\` callback, and route templates.

  ##### React

  ```tsx
  import {
    createShopifyRouteTemplates,
    type ShopifyScriptsI18n,
    type ShopifyScriptsShop,
  } from "@shopify/hydrogen";
  import { ShopifyScripts } from "@shopify/hydrogen/react";
  import type { ReactNode } from "react";
  import { useNavigate } from "react-router";

  const routeTemplates = createShopifyRouteTemplates({});

  type LayoutProps = {
    shop: ShopifyScriptsShop;
    i18n: ShopifyScriptsI18n;
    children: ReactNode;
  };

  export function Layout({ shop, i18n, children }: LayoutProps) {
    const navigate = useNavigate();

    return (
      <html lang="en">
        <head>
          <ShopifyScripts
            shop={shop}
            i18n={i18n}
            consent={{ mode: "default-banner" }}
            navigate={(url) => navigate(url)}
            routes={routeTemplates}
          />
        </head>
        <body>{children}</body>
      </html>
    );
  }
  ```

* #### Render scripts in an app root in Vue

  ##### Description

  Render the component in a Vue app root. This example passes \`shop\` and \`i18n\` values from the server, a Vue Router \`navigate\` function, and route templates.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import {
    createShopifyRouteTemplates,
    type ShopifyScriptsI18n,
    type ShopifyScriptsShop,
  } from "@shopify/hydrogen";
  import { ShopifyScripts } from "@shopify/hydrogen/vue";
  import { useRouter } from "vue-router";

  const routeTemplates = createShopifyRouteTemplates({});

  defineProps<{ shop: ShopifyScriptsShop; i18n: ShopifyScriptsI18n }>();

  const router = useRouter();

  async function navigate(url: string) {
    await router.push(url);
  }
  </script>

  <template>
    <ShopifyScripts
      :shop="shop"
      :i18n="i18n"
      :consent="{ mode: 'default-banner' }"
      :navigate="navigate"
      :routes="routeTemplates"
    />
  </template>
  ```

***

## Browser setup

## initialize​Shopify​Scripts(**[input1](#initializeshopifyscripts-propertydetail-input1)**​)

Starts Shopify's scripts in the browser for frameworks without a Hydrogen binding. Call it after hydration, with the consent configuration that you passed to `getShopifyScriptTags`.

The function sets up `window.Shopify.routes`, and sends a page view event on load and after each navigation that changes the path or query. In the custom banner consent mode, Hydrogen calls your setup callback after the Customer Privacy API loads. A custom banner configuration without a setup callback logs a warning, and analytics events stay blocked. When the browser supports WebMCP, the function also loads Shopify's WebMCP tools. Set `webMcp` to `false` to skip them.

### Parameters

* **input1**

  **InitializeShopifyScriptsOptions**

  **required**

  The consent configuration, the route settings, and whether to load WebMCP tools.

### Returns

* **Promise\<boolean | void>**

  A promise that resolves after the WebMCP tools load or fail to load, or right away when the function skips WebMCP.

### InitializeShopifyScriptsOptions

The route, consent, and WebMCP settings for starting Shopify's scripts in the browser.

* consent

  The consent configuration that you passed to the script tags. The bus runs the setup callback once.

  ```ts
  ConsentConfig
  ```

* navigate

  Navigates to a URL after Shopify's scripts resolve it to your app's route. Defaults to a full page load. Checkout, cart permalink, buy permalink, and customer account paths always use a full page load.

  ```ts
  (url: string) => void | Promise<void>
  ```

* routes

  Your app's custom route templates, which Shopify's scripts use to match and resolve storefront URLs.

  ```ts
  ShopifyRouteTemplates
  ```

* webMcp

  Loads Shopify WebMCP tools when the browser supports WebMCP. Defaults to \`true\`.

  ```ts
  boolean
  ```

#### ConsentPreferences

The consent choices that a custom consent setup passes to `window.Shopify.customerPrivacy.setTrackingConsent()`.

* **analytics**

  **boolean**

  **required**

  Whether the customer allows analytics tracking.

* **marketing**

  **boolean**

  **required**

  Whether the customer allows marketing tracking.

* **preferences**

  **boolean**

  **required**

  Whether the customer allows the storefront to remember their preferences.

* **sale\_​of\_​data**

  **boolean**

  **required**

  Whether the customer allows the sale or sharing of their data.

### Examples

* #### Initialize in the browser

  ##### Description

  After hydration, pass route templates and a \`navigate\` function that uses your router.

  ##### TypeScript

  ```ts
  import { createShopifyRouteTemplates, initializeShopifyScripts } from "@shopify/hydrogen";

  const routeTemplates = createShopifyRouteTemplates({});

  export function startShopifyScripts(router: { push: (url: string) => Promise<unknown> }) {
    void initializeShopifyScripts({
      routes: routeTemplates,
      navigate: async (url) => {
        await router.push(url);
      },
    });
  }
  ```

* #### Connect a custom consent banner

  ##### Description

  After hydration, call \`initializeShopifyScripts()\` with the \`custom-banner\` consent mode. The \`setup()\` callback sends your consent provider's choice to the Customer Privacy API.

  ##### TypeScript

  ```ts
  import {
    createShopifyRouteTemplates,
    initializeShopifyScripts,
    type ConsentConfig,
    type ConsentPreferences,
  } from "@shopify/hydrogen";

  const routeTemplates = createShopifyRouteTemplates({});

  type ConsentProvider = {
    subscribe(callback: (choice: unknown) => void): () => void;
    whenConsentResolved(): Promise<void>;
    getResolvedConsent(): unknown;
  };

  // Render the server script tags with this same `custom-banner` consent mode.
  export function startCustomConsent(
    provider: ConsentProvider,
    mapProviderConsent: (choice: unknown) => ConsentPreferences,
    reportConsentError: (error: unknown) => void,
  ) {
    const consent: ConsentConfig = {
      mode: "custom-banner",
      async setup() {
        const customerPrivacy = window.Shopify!.customerPrivacy!;
        const sync = async (choice: unknown) => {
          await customerPrivacy.setTrackingConsent(mapProviderConsent(choice));
        };

        const unsubscribe = provider.subscribe((choice: unknown) => {
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
    };

    return initializeShopifyScripts({ consent, routes: routeTemplates });
  }
  ```

***

## Server-rendered tags

## get​Shopify​Script​Tags(**[input1](#getshopifyscripttags-propertydetail-input1)**​)

Returns Shopify's storefront script and link tags as descriptors.

Render the descriptors in the document head during server rendering, then call `initializeShopifyScripts` in the browser. Keep the tags in the returned order. The inline scripts set up globals that later scripts read.

### Parameters

* **input1**

  **ShopifyScriptTagsOptions**

  **required**

  The shop details, the localization, the consent configuration, and the features whose scripts to load.

### Returns

* **ShopifyScriptTagDescriptors**

  The link tags, the script tags, and a combined list with links first.

### ShopifyScriptTagsOptions

The shop details and the features whose scripts to load.

* account

  Loads the customer account component. Render \`shopify-account\` where you want the account UI to appear.

  ```ts
  boolean
  ```

* analytics

  The sales channel and custom data for the analytics bus.

  ```ts
  ShopifyScriptsAnalyticsConfig
  ```

* consent

  Which consent script to load and how the analytics bus waits for consent.

  ```ts
  ConsentConfig
  ```

* debug

  Development-only debugging tools.

  ```ts
  { standardEventsInspector?: boolean; }
  ```

* i18n

  The country, language, currency, and path prefix for Shopify's scripts. Defaults to US English.

  ```ts
  ShopifyScriptsI18n
  ```

* inbox

  Loads Inbox. Render \`shopify-chat\` where you want the chat UI to appear.

  ```ts
  boolean
  ```

* nonce

  Adds a \`nonce\` attribute to every script tag.

  ```ts
  string
  ```

* shop

  The shop's IDs and permanent domain.

  ```ts
  ShopifyScriptsShop
  ```

* shopifyAnalytics

  Loads Shopify's storefront analytics script. Defaults to \`true\`.

  ```ts
  boolean
  ```

### ShopifyScriptTagDescriptors

The generated link and script tags, as separate lists and as one combined list.

* links

  Link descriptors for framework head APIs that split links from scripts.

  ```ts
  readonly ShopifyLinkDescriptor[]
  ```

* scripts

  Script descriptors for framework head APIs that split scripts from links.

  ```ts
  readonly ShopifyScriptDescriptor[]
  ```

* tags

  All generated descriptors as a mixed list, with links before scripts.

  ```ts
  readonly ShopifyScriptTagDescriptor[]
  ```

### ShopifyLinkDescriptor

A link tag to render in the document head.

* attributes

  The HTML attributes of a generated link tag.

  ```ts
  ShopifyLinkTagAttributes
  ```

* innerHTML

  Link tags have no content.

  ```ts
  never
  ```

* tagName

  Always \`link\` for a link tag.

  ```ts
  'link'
  ```

### ShopifyLinkTagAttributes

The HTML attributes of a generated link tag.

* as

  The resource type for a prefetch link. Always \`script\`.

  ```ts
  'script'
  ```

* crossorigin

  The CORS mode for fetching the linked resource.

  ```ts
  ShopifyCrossOrigin
  ```

* href

  The URL of the origin to preconnect to, or the script to prefetch.

  ```ts
  string
  ```

* rel

  Whether the link preconnects to an origin or prefetches a script.

  ```ts
  'preconnect' | 'prefetch'
  ```

### ShopifyCrossOrigin

The values of the HTML \`crossorigin\` attribute.

```ts
"" | "anonymous" | "use-credentials"
```

### ShopifyScriptDescriptor

A script tag to render in the document head.

* attributes

  The script tag's HTML attributes, such as its source URL and nonce.

  ```ts
  ShopifyScriptTagAttributes
  ```

* innerHTML

  The inline script content, for scripts that have no source URL.

  ```ts
  string
  ```

* tagName

  Always \`script\` for a script tag.

  ```ts
  'script'
  ```

### ShopifyScriptTagAttributes

The HTML attributes of a generated script tag, with lowercase attribute names.

```ts
ShopifyDataAttributes & Partial<{
    async: boolean;
    crossorigin: ShopifyCrossOrigin;
    defer: boolean;
    id: string;
    nonce: string;
    src: string;
    type: string;
  }>
```

### ShopifyDataAttributes

Custom \`data-\*\` HTML attributes with string values.



### ShopifyScriptTagDescriptor

A script or link tag to render in the document head.

```ts
ShopifyScriptDescriptor | ShopifyLinkDescriptor
```

## render​Shopify​Script​Tags(**[options](#rendershopifyscripttags-propertydetail-options)**​)

Renders Shopify's storefront script and link tags to HTML strings.

Use the function when your framework accepts raw HTML in the document head.

### Parameters

* **options**

  **ShopifyScriptTagsOptions**

  **required**

  The shop details and the features, such as account and analytics, whose scripts to load.

### Returns

* **string\[]**

  One HTML string per tag, with link tags first.

To share one configuration between the server and the browser, build a `ShopifyScriptsOptions` object and pass the object to `getShopifyScriptTags` and `initializeShopifyScripts`. `ShopifyScriptsOptions` combines `ShopifyScriptTagsOptions` and `InitializeShopifyScriptsOptions`.

### Examples

* #### Add tags to a framework head

  ##### Description

  Build the shop and localization values, and add the script tags to your framework's head entries.

  ##### TypeScript

  ```ts
  import {
    getShopifyScriptTags,
    type ShopifyScriptsI18n,
    type ShopifyScriptsShop,
  } from "@shopify/hydrogen";

  const shop: ShopifyScriptsShop = {
    shopId: process.env.SHOP_ID!,
    storefrontId: process.env.PUBLIC_STOREFRONT_ID || "0",
    myshopifyDomain: process.env.PUBLIC_STORE_DOMAIN!,
  };

  const i18n: ShopifyScriptsI18n = { country: "US", language: "EN" };

  const { links, scripts } = getShopifyScriptTags({ shop, i18n, consent: { mode: "default-banner" } });

  export const head = {
    link: links.map(({ attributes }) => attributes),
    script: scripts.map(({ attributes, innerHTML }) => ({
      ...attributes,
      ...(innerHTML ? { innerHTML } : {}),
    })),
  };
  ```

***

## Browser globals

The scripts create the following globals:

* `window.Shopify.actions`: Sends cart changes from the [cart store](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store).
* `window.Shopify.analytics`: The analytics bus. The bus delivers events from [cart analytics](https://shopify.dev/docs/api/hydrogen/latest/analytics/cart-analytics) and events that you publish to your analytics destinations.

***
