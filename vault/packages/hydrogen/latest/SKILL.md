---
name: olore-hydrogen-latest
description: Local hydrogen documentation reference (latest, Hydrogen 2026-10). Shopify Hydrogen headless storefront toolkit for React Router, Next.js and other frameworks. Use for Storefront API client and typed gql queries, request handlers and Shopify routes, cart/product/collection/predictive-search stores with React and Vue bindings, customer accounts, markets, caching, analytics, Shop Pay, Oxygen deployment, migration from legacy Hydrogen, and Shopify CLI hydrogen commands.
---

# hydrogen Documentation

Shopify Hydrogen 2026-10: a framework-agnostic toolkit for headless Shopify storefronts (not the older Remix-based framework). Covers the core package, React/Vue bindings, request handlers, Oxygen deployment, and the Shopify CLI hydrogen commands.

## Documentation Structure

```
contents/
├── guides/       # Concept guides: getting started, cart, data fetching, routing, markets, deploy, migrate (28 files)
├── api/          # API reference: storefront client, request handling, cart/product/collection/search stores, customer accounts, Shop Pay (41 files)
└── cli/          # Shopify CLI hydrogen commands (26 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Overview and setup | `contents/guides/index.md`, `contents/guides/getting-started/index.md`, `contents/guides/getting-started/add-to-existing-project.md`, `contents/guides/getting-started/deploy-a-template.md` |
| Storefront API client, queries, caching | `contents/guides/data-fetching/index.md`, `contents/guides/data-fetching/typed-queries.md`, `contents/api/storefront-client/create-storefront-client.md`, `contents/api/storefront-client/gql.md` |
| Request handlers and routes | `contents/guides/request-handlers.md`, `contents/guides/routing.md`, `contents/api/request-handling/handle-shopify-routes.md` |
| Cart | `contents/guides/cart/index.md`, `contents/guides/cart/build-cart.md`, `contents/api/cart/create-cart-store.md` |
| Products, collections, search | `contents/guides/products.md`, `contents/guides/collections-search.md`, `contents/api/products/variant-selection.md` |
| Customer accounts | `contents/guides/customer-accounts.md`, `contents/api/customer-accounts/create-customer-account-client.md` |
| Markets, analytics, Shop Pay | `contents/guides/markets.md`, `contents/guides/analytics.md`, `contents/guides/shop-pay.md` |
| Deployment (Oxygen, other runtimes) | `contents/guides/deploy/index.md`, `contents/guides/deploy/oxygen/index.md`, `contents/guides/production-checklist.md` |
| Migrate from legacy Hydrogen | `contents/guides/migrate.md` |
| CLI commands | `contents/cli/index.md`, `contents/cli/dev.md`, `contents/cli/deploy.md`, `contents/cli/setup.md` |

## When to use

Use this skill when the user asks about:
- Adding Hydrogen to a React Router, Next.js or other framework storefront
- Shopify Storefront API client, cart, products, collections, predictive search, customer accounts
- Deploying to Oxygen or other runtimes, environments, and the production checklist
- Hydrogen CLI commands (dev, build, deploy, setup, codegen)

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
