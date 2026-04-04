# Vercel Platform

Vercel is a platform for building, deploying, and scaling web applications and AI-powered apps. Ship web apps, agentic workloads, and everything in between.

## Key Features

- **Git-driven deployments** — automatic deploys on every push with preview environments
- **Vercel Functions** — serverless functions with fluid compute and auto-scaling
- **CDN** — globally distributed edge network (126+ PoPs, 51 countries)
- **Framework-aware** — zero-config for Next.js, SvelteKit, Nuxt, Astro, Remix, and more
- **AI infrastructure** — AI SDK, AI Gateway, Sandbox, MCP Servers

## Deploy Methods

| Method | Description |
|---|---|
| **Git Push** | Connect GitHub/GitLab/Bitbucket — auto-deploy on every push |
| **Vercel CLI** | `vercel` (preview) or `vercel --prod` (production) |
| **Deploy Hooks** | Trigger via HTTP GET/POST to a unique URL |
| **REST API** | Programmatic deployments via HTTP POST |

## Quick Start

```bash
# Install CLI
npm i -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy (production)
vercel --prod
```

## Platform Components

- [Deployments & Environments](deployments.md) — preview, production, custom environments
- [Functions](functions.md) — serverless with fluid compute
- [CLI](cli.md) — full command reference
- [Git Integration](git.md) — GitHub, GitLab, Bitbucket, Azure DevOps
- [Domains](domains.md) — custom domains, DNS, SSL
- [Environment Variables](environment-variables.md) — per-environment config
- [Project Configuration](project-configuration.md) — vercel.json / vercel.ts
- [Routing Middleware](routing-middleware.md) — code before request processing
- [CDN](cdn.md) — global edge network, caching, security
- [Frameworks](frameworks.md) — supported frameworks and features
