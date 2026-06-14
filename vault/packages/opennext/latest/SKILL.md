---
name: olore-opennext-latest
description: Local opennext documentation reference (latest). OpenNext.js documentation. Use for deploying Next.js to Cloudflare Workers, AWS Lambda, or Netlify. Covers bindings, caching, performance, custom workers, and platform-specific configurations.
---

# opennext Documentation

OpenNext.js documentation. Use for deploying Next.js to Cloudflare Workers, AWS Lambda, or Netlify. Covers bindings, caching, performance, custom workers, and platform-specific configurations.

## Documentation Structure

```
contents/
├── aws/                  # AWS Lambda deployment: config, internals, overrides (38 files)
├── cloudflare/           # Cloudflare Workers deployment: bindings, how-tos, perf (22 files)
└── netlify/              # Netlify deployment overview and forms (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started on AWS | `contents/aws/get_started.mdx`, `contents/aws/index.mdx` |
| Getting started on Cloudflare | `contents/cloudflare/get-started.mdx`, `contents/cloudflare/index.mdx` |
| Getting started on Netlify | `contents/netlify/index.mdx` |
| AWS configuration | `contents/aws/config.mdx`, `contents/aws/config/reference.mdx`, `contents/aws/config/simple_example.mdx`, `contents/aws/config/full_example.mdx` |
| Custom overrides (AWS) | `contents/aws/config/custom_overrides.mdx`, `contents/aws/config/overrides/` |
| Caching (AWS) | `contents/aws/inner_workings/caching.mdx`, `contents/aws/inner_workings/cache_interception.mdx`, `contents/aws/config/overrides/incremental_cache.mdx`, `contents/aws/config/overrides/tag_cache.mdx` |
| Cloudflare bindings (KV, D1, R2) | `contents/cloudflare/bindings.mdx` |
| Cloudflare caching | `contents/cloudflare/caching.mdx` |
| Cloudflare CLI | `contents/cloudflare/cli.mdx` |
| Cloudflare how-tos | `contents/cloudflare/howtos/` (11 files) |
| Performance (Cloudflare) | `contents/cloudflare/perf.mdx` |
| Custom Worker (Cloudflare) | `contents/cloudflare/howtos/custom-worker.mdx`, `contents/cloudflare/howtos/multi-worker.mdx` |
| Troubleshooting and known issues | `contents/aws/common_issues.mdx`, `contents/aws/faq.mdx`, `contents/cloudflare/troubleshooting.mdx`, `contents/cloudflare/known-issues.mdx` |
| Migration | `contents/aws/migration.mdx`, `contents/cloudflare/migrate-from-0.6-to-1.0.0-beta.mdx` |
| Next.js compatibility | `contents/aws/compatibility.mdx`, `contents/aws/comparison.mdx` |
| AWS architecture internals | `contents/aws/inner_workings.mdx`, `contents/aws/inner_workings/architecture.mdx`, `contents/aws/inner_workings/components/overview.mdx` |

## When to use

Use this skill when the user asks about:
- Deploying Next.js to AWS Lambda with OpenNext/open-next
- Deploying Next.js to Cloudflare Workers with @opennextjs/cloudflare
- Deploying Next.js to Netlify with OpenNext
- Configuring OpenNext: custom overrides, caching, ISR, image optimization
- Cloudflare bindings (KV, D1, R2, Queues, AI) in Next.js apps
- Custom workers, multi-worker setups, environment variables on Cloudflare
- Troubleshooting OpenNext deployments on AWS or Cloudflare

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
