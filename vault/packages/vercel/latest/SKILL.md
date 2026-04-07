---
name: olore-vercel-latest
description: Local vercel documentation reference (latest). Vercel platform documentation. Use for deployments, environments, functions, CLI, Git integration, domains, environment variables, vercel.json configuration, routing middleware, CDN, caching, and framework support.
---

# vercel Documentation

Vercel platform documentation. Use for deployments, environments, functions, CLI, Git integration, domains, environment variables, vercel.json configuration, routing middleware, CDN, caching, and framework support.

## Documentation Structure

```
contents/
├── index.md                  # Platform overview, quick start, deploy methods
├── deployments.md            # Environments (local/preview/prod/custom), manage deployments
├── functions.md              # Serverless, fluid compute, runtimes, regions
├── cli.md                    # Full CLI reference: deploy, env, domains, cache
├── git.md                    # GitHub/GitLab/Bitbucket, auto-deploy, branches
├── environment-variables.md  # Per-environment config, scoping, CLI
├── project-configuration.md  # vercel.json / vercel.ts properties
├── routing-middleware.md     # Pre-request middleware, runtime options
├── domains.md                # Custom domains, DNS, SSL
├── cdn.md                    # Edge network, ISR, caching, security
└── frameworks.md             # Supported frameworks, feature matrix
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started & quick deploy | `contents/index.md` |
| Deployment methods (Git, CLI, hooks, API) | `contents/deployments.md` |
| Preview vs production environments | `contents/deployments.md` |
| Custom environments (staging, QA) | `contents/deployments.md` |
| Vercel Functions & fluid compute | `contents/functions.md` |
| Function runtimes (Node.js, Edge, Bun) | `contents/functions.md` |
| CLI commands & reference | `contents/cli.md` |
| Git integration & auto-deploy | `contents/git.md` |
| Environment variables & scoping | `contents/environment-variables.md` |
| vercel.json / vercel.ts config | `contents/project-configuration.md` |
| Crons, redirects, rewrites, headers | `contents/project-configuration.md` |
| Routing middleware | `contents/routing-middleware.md` |
| Custom domains & DNS | `contents/domains.md` |
| CDN, caching, ISR | `contents/cdn.md` |
| Framework support matrix | `contents/frameworks.md` |
| Rollback & promote deployments | `contents/cli.md`, `contents/deployments.md` |
