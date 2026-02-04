# OpenNext Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Root-level docs | 3 |
| `contents/aws/` | AWS deployment guides | 9 |
| `contents/aws/config/` | Configuration and examples | 5 |
| `contents/aws/config/overrides/` | Override configurations | 11 |
| `contents/aws/inner_workings/` | Architecture and internals | 4 |
| `contents/aws/inner_workings/components/` | Component details | 6 |
| `contents/cloudflare/` | Cloudflare deployment | 10 |
| `contents/cloudflare/howtos/` | Cloudflare how-tos | 11 |
| `contents/netlify/` | Netlify deployment | 2 |

## Root Level

| File | Description |
|------|-------------|
| `404.mdx` | 404 page |
| `_app.mdx` | App configuration |
| `index.mdx` | Main documentation index |

## aws/

| File | Description |
|------|-------------|
| `common_issues.mdx` | Common problems and solutions |
| `comparison.mdx` | Comparison with other solutions |
| `compatibility.mdx` | Next.js feature compatibility |
| `config.mdx` | Configuration overview |
| `faq.mdx` | Frequently asked questions |
| `get_started.mdx` | Getting started with AWS deployment |
| `index.mdx` | AWS deployment overview |
| `inner_workings.mdx` | How OpenNext works on AWS |
| `reference-implementation.mdx` | Reference implementation |

## aws/config/

| File | Description |
|------|-------------|
| `custom_overrides.mdx` | Custom override patterns |
| `full_example.mdx` | Full configuration example |
| `nx.mdx` | Nx monorepo configuration |
| `reference.mdx` | Configuration reference |
| `simple_example.mdx` | Simple configuration example |

## aws/config/overrides/

| File | Description |
|------|-------------|
| `asset_resolver.mdx` | Asset resolver override |
| `automatic_cdn_invalidation.mdx` | CDN invalidation override |
| `converter.mdx` | Converter override |
| `image_loader.mdx` | Image loader override |
| `incremental_cache.mdx` | Incremental cache override |
| `invoke_function.mdx` | Function invocation override |
| `origin_resolver.mdx` | Origin resolver override |
| `proxy_external_request.mdx` | External request proxy override |
| `queue.mdx` | Queue override |
| `tag_cache.mdx` | Tag cache override |
| `wrapper.mdx` | Wrapper override |

## aws/inner_workings/

| File | Description |
|------|-------------|
| `architecture.mdx` | OpenNext architecture |
| `cache_interception.mdx` | Cache interception mechanisms |
| `caching.mdx` | Caching strategies |
| `routing.mdx` | Request routing |

## aws/inner_workings/components/

| File | Description |
|------|-------------|
| `image_optimization.mdx` | Image optimization component |
| `initializer.mdx` | Initializer component |
| `middleware.mdx` | Middleware component |
| `overview.mdx` | Components overview |
| `revalidation.mdx` | Revalidation component |
| `warmer.mdx` | Warmer component |

## aws/inner_workings/components/server/

| File | Description |
|------|-------------|
| `edge.mdx` | Edge runtime server |
| `node.mdx` | Node.js runtime server |

## cloudflare/

| File | Description |
|------|-------------|
| `bindings.mdx` | Cloudflare bindings |
| `caching.mdx` | Caching with Cloudflare |
| `cli.mdx` | CLI usage for Cloudflare |
| `community.mdx` | Community resources |
| `examples.mdx` | Example projects |
| `get-started.mdx` | Getting started with Cloudflare |
| `index.mdx` | Cloudflare deployment overview |
| `known-issues.mdx` | Known issues and limitations |
| `perf.mdx` | Performance optimization |
| `troubleshooting.mdx` | Troubleshooting guide |

## cloudflare/howtos/

| File | Description |
|------|-------------|
| `assets.mdx` | Static asset handling |
| `custom-worker.mdx` | Custom worker configuration |
| `db.mdx` | Database integration |
| `dev-deploy.mdx` | Development and deployment |
| `env-vars.mdx` | Environment variables |
| `image.mdx` | Image optimization |
| `keep_names.mdx` | Keep function names |
| `multi-worker.mdx` | Multiple worker setup |
| `skew.mdx` | Version skew handling |
| `stripeAPI.mdx` | Stripe API integration |
| `workerd.mdx` | Workerd runtime |

## netlify/

| File | Description |
|------|-------------|
| `forms.mdx` | Netlify Forms integration |
| `index.mdx` | Netlify deployment overview |
