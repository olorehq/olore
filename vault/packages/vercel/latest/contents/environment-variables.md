# Environment Variables

Key-value pairs configured outside source code that change per environment. Encrypted at rest.

## Scoping

| Environment | When Applied |
|---|---|
| **Production** | Push to production branch or `vercel --prod` |
| **Preview** | Push to non-production branch or `vercel` |
| **Custom** | Deploy to custom environment |
| **Development** | `vercel dev` or `vercel env pull` |

## Creating Variables

### Dashboard
Project Settings > Environment Variables

### CLI
```bash
vercel env add MY_KEY production        # Add to production
vercel env add MY_KEY preview           # Add to preview
vercel env add MY_KEY development       # Add to development
vercel env ls                           # List all
vercel env rm MY_KEY production         # Remove
```

## Local Development

Pull env vars to `.env.local`:
```bash
vercel env pull
```

This creates `.env.local` (or `.env`) with Development environment variables. `vercel dev` downloads them automatically into memory.

## Preview Branch Overrides

Preview variables can target all non-production branches or a specific branch. Branch-specific variables override general preview variables with the same name.

## Size Limits

- Total: **64 KB per deployment** (all variables combined)
- Edge Functions/Middleware: **5 KB per variable**
- Supported runtimes: Node.js, Python, Ruby, Go, PHP

## Integration Variables

Marketplace integrations can automatically add environment variables to your project.

## Important Notes

- Changes only apply to **new deployments** (not previous ones)
- Variables are visible to any user with project access
- Safe for both sensitive and non-sensitive data (encrypted at rest)
