---
name: olore-opennext-latest
description: Local opennext documentation reference (latest). OpenNext.js documentation. Use for deploying Next.js to Cloudflare Workers, AWS Lambda, or Netlify. Covers bindings, caching, performance, custom workers, and platform-specific configurations.
---

# OpenNext Documentation

OpenNext.js documentation. Use for deploying Next.js to Cloudflare Workers, AWS Lambda, or Netlify. Covers bindings, caching, performance, custom workers, and platform-specific configurations.

## Documentation Structure

```
contents/
├── aws/                              # AWS deployment (9 files)
│   ├── config/                       # Configuration (5 files)
│   │   └── overrides/                # Override configs (11 files)
│   └── inner_workings/               # Architecture internals (4 files)
│       └── components/               # Component details (6 files)
├── cloudflare/                       # Cloudflare deployment (10 files)
│   └── howtos/                       # How-to guides (11 files)
└── netlify/                          # Netlify deployment (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| AWS Getting Started | `contents/aws/get_started.mdx`, `contents/aws/index.mdx` |
| AWS Configuration | `contents/aws/config.mdx`, `contents/aws/config/reference.mdx`, `contents/aws/config/simple_example.mdx` |
| AWS Overrides | `contents/aws/config/overrides/incremental_cache.mdx`, `contents/aws/config/overrides/wrapper.mdx`, `contents/aws/config/overrides/image_loader.mdx` |
| AWS Architecture | `contents/aws/inner_workings/architecture.mdx`, `contents/aws/inner_workings/caching.mdx`, `contents/aws/inner_workings/routing.mdx` |
| AWS Troubleshooting | `contents/aws/common_issues.mdx`, `contents/aws/faq.mdx`, `contents/aws/compatibility.mdx` |
| Cloudflare Getting Started | `contents/cloudflare/get-started.mdx`, `contents/cloudflare/index.mdx` |
| Cloudflare Setup | `contents/cloudflare/bindings.mdx`, `contents/cloudflare/caching.mdx`, `contents/cloudflare/cli.mdx` |
| Cloudflare How-Tos | `contents/cloudflare/howtos/custom-worker.mdx`, `contents/cloudflare/howtos/db.mdx`, `contents/cloudflare/howtos/image.mdx` |
| Cloudflare Troubleshooting | `contents/cloudflare/troubleshooting.mdx`, `contents/cloudflare/known-issues.mdx` |
| Environment Variables | `contents/cloudflare/howtos/env-vars.mdx` |
| Database Integration | `contents/cloudflare/howtos/db.mdx` |
| Image Optimization | `contents/aws/config/overrides/image_loader.mdx`, `contents/cloudflare/howtos/image.mdx`, `contents/aws/inner_workings/components/image_optimization.mdx` |
| Caching | `contents/aws/inner_workings/caching.mdx`, `contents/cloudflare/caching.mdx`, `contents/aws/config/overrides/incremental_cache.mdx` |
| Netlify Deployment | `contents/netlify/index.mdx`, `contents/netlify/forms.mdx` |

## When to use

Use this skill when the user asks about:
- Deploying Next.js to AWS Lambda
- Deploying Next.js to Cloudflare Workers
- Deploying Next.js to Netlify
- OpenNext configuration and customization
- Next.js SSR on edge platforms
- Caching strategies for Next.js
- Custom workers and overrides
- Platform bindings (Cloudflare KV, D1, R2, etc.)
- Image optimization on edge platforms
- Database integration with Next.js on edge
- Troubleshooting OpenNext deployments

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
