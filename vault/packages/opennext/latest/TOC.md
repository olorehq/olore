# opennext Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/aws/` | AWS Lambda deployment, config, and internals | 38 |
| `contents/cloudflare/` | Cloudflare Workers deployment, bindings, and how-tos | 22 |
| `contents/netlify/` | Netlify deployment docs | 2 |

## aws/

| File | Description |
|------|-------------|
| `aws/index.mdx` | AWS adapter overview |
| `aws/get_started.mdx` | Getting started with OpenNext on AWS |
| `aws/config.mdx` | Configuration file overview |
| `aws/compatibility.mdx` | Next.js feature compatibility on AWS |
| `aws/comparison.mdx` | Comparison with other AWS deployment options |
| `aws/migration.mdx` | Migrating from other platforms or OpenNext v2 |
| `aws/faq.mdx` | Frequently asked questions |
| `aws/common_issues.mdx` | Common issues and fixes |
| `aws/inner_workings.mdx` | Architecture and internals overview |
| `aws/reference-implementation.mdx` | Reference implementation guide |

## aws/config/

| File | Description |
|------|-------------|
| `aws/config/reference.mdx` | Full config API reference |
| `aws/config/simple_example.mdx` | Simple configuration example |
| `aws/config/full_example.mdx` | Full configuration example |
| `aws/config/custom_overrides.mdx` | Custom override guide |
| `aws/config/nx.mdx` | Nx monorepo configuration |

## aws/config/overrides/

| File | Description |
|------|-------------|
| `aws/config/overrides/asset_resolver.mdx` | Asset resolver override |
| `aws/config/overrides/automatic_cdn_invalidation.mdx` | Automatic CDN invalidation override |
| `aws/config/overrides/converter.mdx` | Request/response converter override |
| `aws/config/overrides/image_loader.mdx` | Image loader override |
| `aws/config/overrides/incremental_cache.mdx` | Incremental static regeneration cache override |
| `aws/config/overrides/invoke_function.mdx` | Invoke function override |
| `aws/config/overrides/origin_resolver.mdx` | Origin resolver override |
| `aws/config/overrides/proxy_external_request.mdx` | Proxy external request override |
| `aws/config/overrides/queue.mdx` | Revalidation queue override |
| `aws/config/overrides/tag_cache.mdx` | Tag-based cache override |
| `aws/config/overrides/wrapper.mdx` | Function wrapper override |

## aws/inner_workings/

| File | Description |
|------|-------------|
| `aws/inner_workings/architecture.mdx` | Internal architecture diagram and explanation |
| `aws/inner_workings/caching.mdx` | How caching works internally |
| `aws/inner_workings/cache_interception.mdx` | Cache interception mechanism |
| `aws/inner_workings/routing.mdx` | Routing internals |
| `aws/inner_workings/components/overview.mdx` | Component overview |
| `aws/inner_workings/components/initializer.mdx` | Initializer component |
| `aws/inner_workings/components/middleware.mdx` | Middleware component |
| `aws/inner_workings/components/revalidation.mdx` | Revalidation component |
| `aws/inner_workings/components/warmer.mdx` | Warmer component |
| `aws/inner_workings/components/image_optimization.mdx` | Image optimization component |
| `aws/inner_workings/components/server/edge.mdx` | Edge server component |
| `aws/inner_workings/components/server/node.mdx` | Node.js server component |

## cloudflare/

| File | Description |
|------|-------------|
| `cloudflare/index.mdx` | Cloudflare adapter overview |
| `cloudflare/get-started.mdx` | Getting started with OpenNext on Cloudflare Workers |
| `cloudflare/bindings.mdx` | Cloudflare bindings (KV, D1, R2, etc.) |
| `cloudflare/caching.mdx` | Caching on Cloudflare Workers |
| `cloudflare/cli.mdx` | CLI reference for Cloudflare adapter |
| `cloudflare/examples.mdx` | Usage examples |
| `cloudflare/perf.mdx` | Performance tuning |
| `cloudflare/known-issues.mdx` | Known issues and limitations |
| `cloudflare/troubleshooting.mdx` | Troubleshooting guide |
| `cloudflare/migrate-from-0.6-to-1.0.0-beta.mdx` | Migration guide from 0.6 to 1.0.0-beta |

## cloudflare/howtos/

| File | Description |
|------|-------------|
| `cloudflare/howtos/assets.mdx` | Serving static assets |
| `cloudflare/howtos/custom-worker.mdx` | Creating a custom Worker |
| `cloudflare/howtos/db.mdx` | Connecting to a database |
| `cloudflare/howtos/dev-deploy.mdx` | Development and deployment workflow |
| `cloudflare/howtos/env-vars.mdx` | Environment variables |
| `cloudflare/howtos/image.mdx` | Image optimization |
| `cloudflare/howtos/keep_names.mdx` | Keeping function names for compatibility |
| `cloudflare/howtos/multi-worker.mdx` | Multi-worker setup |
| `cloudflare/howtos/skew.mdx` | Version skew protection |
| `cloudflare/howtos/stripeAPI.mdx` | Stripe API integration example |
| `cloudflare/howtos/workerd.mdx` | Running with workerd locally |

## netlify/

| File | Description |
|------|-------------|
| `netlify/index.mdx` | Netlify adapter overview and getting started |
| `netlify/forms.mdx` | Netlify Forms integration |

## Root

| File | Description |
|------|-------------|
| `index.mdx` | OpenNext project overview and platform index |
