# Project Configuration

Vercel auto-detects your framework and sets defaults. Override with configuration files.

## Configuration Methods

1. **`vercel.json`** — static JSON in your repo
2. **`vercel.ts`** — programmatic TypeScript (runs at build time)
3. **Dashboard** — Project Settings
4. **Global CLI config** — system-wide CLI settings

Only one config file per project (`vercel.json` or `vercel.ts`).

## vercel.json Properties

| Property | Description |
|---|---|
| `buildCommand` | Override build command |
| `installCommand` | Override package install command |
| `devCommand` | Override development command |
| `outputDirectory` | Build output directory |
| `framework` | Framework preset |
| `regions` | Deploy functions to specific regions |
| `functionFailoverRegions` | Failover regions for functions |
| `functions` | Configure memory, duration, runtime per function |
| `fluid` | Enable fluid compute |
| `crons` | Schedule functions at specific times |
| `headers` | Custom HTTP response headers |
| `redirects` | URL redirects |
| `rewrites` | URL rewrites |
| `cleanUrls` | Remove `.html` from URLs |
| `trailingSlash` | Add/remove trailing slashes |
| `images` | Image optimization config |
| `public` | Make deployment logs public |
| `ignoreCommand` | Skip builds based on custom logic |
| `bulkRedirectsPath` | File path for bulk redirects |
| `bunVersion` | Specify Bun version |

## Example vercel.json

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1"],
  "functions": {
    "api/heavy.ts": {
      "memory": 1024,
      "maxDuration": 60
    }
  },
  "crons": [{
    "path": "/api/cron",
    "schedule": "0 5 * * *"
  }],
  "redirects": [
    { "source": "/old", "destination": "/new", "permanent": true }
  ],
  "rewrites": [
    { "source": "/api/:path*", "destination": "https://backend.example.com/:path*" }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}
```

## vercel.ts (Programmatic)

```ts
import { defineConfig } from '@vercel/config';

export default defineConfig({
  regions: [process.env.REGION || 'iad1'],
  functions: {
    'api/ai.ts': {
      memory: 1024,
      maxDuration: 300,
    },
  },
});
```

Dynamic config using env vars, API calls, or build-time logic.
