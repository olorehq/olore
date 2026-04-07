# Vercel CLI

## Install

```bash
npm i -g vercel    # or pnpm/yarn/bun
```

## Authentication

```bash
vercel login                 # Interactive login
vercel login --github        # GitHub OAuth
vercel --token <TOKEN>       # CI/CD token auth
```

## Core Commands

| Command | Description |
|---|---|
| `vercel` / `vercel deploy` | Deploy (preview by default) |
| `vercel --prod` | Deploy to production |
| `vercel dev` | Local dev server with Vercel env |
| `vercel build` | Build locally or in CI |
| `vercel link` | Link local dir to Vercel project |
| `vercel pull` | Pull env vars and project settings |
| `vercel env pull` | Download env vars to .env file |
| `vercel env ls` | List environment variables |
| `vercel env add <name> <env>` | Add environment variable |
| `vercel logs <url>` | View deployment logs |
| `vercel inspect <url>` | Inspect deployment details |

## Deployment Commands

| Command | Description |
|---|---|
| `vercel list` | List recent deployments |
| `vercel promote <url>` | Promote deployment to production |
| `vercel rollback` | Rollback production deployment |
| `vercel redeploy <url>` | Rebuild and redeploy |
| `vercel remove <url>` | Remove a deployment |

## Domain Commands

| Command | Description |
|---|---|
| `vercel domains ls` | List domains |
| `vercel domains add <domain>` | Add domain |
| `vercel alias set <url> <domain>` | Set alias |
| `vercel dns ls <domain>` | List DNS records |

## Project Commands

| Command | Description |
|---|---|
| `vercel project ls` | List projects |
| `vercel project add` | Create new project |
| `vercel open` | Open project in dashboard |

## Environment & Config

| Command | Description |
|---|---|
| `vercel deploy --target=staging` | Deploy to custom environment |
| `vercel pull --environment=production` | Pull specific env config |
| `vercel env run -- <cmd>` | Run command with env vars |
| `vercel switch <team>` | Switch team scope |

## Storage & Integrations

| Command | Description |
|---|---|
| `vercel blob list` | Manage Blob storage |
| `vercel integration add <name>` | Install marketplace integration |
| `vercel integration list` | List installed integrations |

## Advanced

| Command | Description |
|---|---|
| `vercel cache purge` | Purge CDN/data cache |
| `vercel rolling-release start` | Start rolling release |
| `vercel flags list` | List feature flags |
| `vercel mcp` | Set up MCP client config |
| `vercel bisect` | Binary search deployments for issues |
| `vercel api <endpoint>` | Make authenticated API requests |
