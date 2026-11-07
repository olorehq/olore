---
title: Get started with Hydrogen
description: >-
  Choose how to start building with Hydrogen. Deploy a starter template that's
  already built, or add Hydrogen to a project that uses the framework of your
  choice.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/getting-started'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/getting-started.md'
api_name: hydrogen
---

# Get started with Hydrogen

You can start building with Hydrogen in two ways. Deploy a starter template that's already a working storefront, or add Hydrogen to a project of your own and build the storefront yourself. Both ways use the same Hydrogen package, so the rest of these docs apply whichever way you start.

| | Deploy a template | Add Hydrogen to an existing project |
| - | - | - |
| What you start with | A storefront with home, collection, product, search, and cart pages. Customer accounts, analytics, and consent are opt-in in Vercel Shop. | Your own app, or a new project that you create with your framework's CLI |
| Frameworks | React Router or Next.js | Any JavaScript framework that runs server code |
| Hosting | Oxygen for React Router, or Vercel for Next.js | Wherever your app runs |
| What you build | Changes to the template's pages, styles, and features | Your storefront's pages, UI, and cart |

***

## Choose a getting started path

Pick the path that fits your project. The following sections describe when each one works best.

### Deploy a template

[Start from a template](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template) if you want a working storefront quickly, or in the following cases:

* You're building a new storefront with React Router or Next.js.
* You want to see how the parts of a Hydrogen storefront fit together, in code that already works.
* You want to deploy to [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen) or Vercel. You can move the storefront to another host later.
* You don't have a store yet. The React Router template reads demo data from [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop) until you connect one.

A template comes with its own structure, components, and styles. You'll change them to fit your brand, and remove the features that you don't need.

### Add Hydrogen to an existing project

[Add Hydrogen to your own project](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project) in the following cases:

* You already have an app, and you want to add Shopify commerce to it.
* You use a framework that doesn't have a template, like Astro, Nuxt, SvelteKit, or SolidStart.
* You want to start from a minimal setup, and add only the parts that you need.
* You have your own components, design system, or project structure.

Hydrogen doesn't ship a component library, so you build your storefront's UI yourself. Your framework needs to run server code, because Hydrogen handles requests before your router does. Apps that run only in the browser, or that build only static output, don't work. The tutorial installs Hydrogen, wires it into your app, and builds a page that shows your store's products.

***

## Next steps

[Deploy a template\
\
](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template)

[Deploy a starter template and connect it to your store.](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template)

[Add Hydrogen to an existing project\
\
](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project)

[Install Hydrogen in the framework you already use.](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project)

***
