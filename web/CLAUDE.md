# web/CLAUDE.md

**olore web** — Next.js (App Router) landing page + package registry. React 19, TypeScript, Tailwind CSS v4, pnpm.

## Commands

```bash
pnpm dev        # Dev server
pnpm build      # Prebuild runs generate-registry, then next build
pnpm format     # Prettier — run after editing
pnpm lint       # ESLint
```

## olore Documentation Skills

Local, version-pinned docs for this app's stack. Invoke the matching skill BEFORE answering or coding against these libraries — do not rely on memory.

| Skill                  | Use for                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `/olore-nextjs-16.1.5` | Next.js — App Router, Server Components, routing, data fetching, route handlers, caching, config, metadata                   |
| `/olore-neon-latest`   | Neon serverless Postgres — `@neondatabase/serverless` driver, HTTP/WebSocket queries, branching, connection strings, pooling |
| `/olore-vercel-latest` | Vercel platform — deployments, env vars, functions, edge runtime, `vercel.json`, Marketplace integrations, CLI               |

Neon backs the download counter (`/api/dl`). Vercel hosts the app and the Neon Marketplace integration (`DATABASE_URL`).
