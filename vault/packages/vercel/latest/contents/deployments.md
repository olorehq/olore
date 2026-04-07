# Deployments & Environments

A deployment is the result of a successful build. Each deployment gets a unique URL.

## Deployment Methods

### Git
Push to a connected repo — each commit/PR triggers a deployment.
- Supported: GitHub, GitLab, Bitbucket, Azure DevOps

### CLI
```bash
vercel           # Preview deployment
vercel --prod    # Production deployment
```

### Deploy Hooks
Trigger via HTTP request to a unique URL (requires connected Git repo, no new commit needed).

### REST API
```bash
POST https://api.vercel.com/v13/deployments
```

## Environments

### Local Development
```bash
vercel link          # Link local dir to project
vercel env pull      # Download env vars to .env.local
vercel dev           # Run local dev server with Vercel env
```

### Preview (Pre-production)
Created when you:
- Push to a non-production branch
- Create a pull request
- Run `vercel` without `--prod`

Each gets a unique URL. Two types:
- **Branch-specific URL** — always latest on that branch
- **Commit-specific URL** — exact deployment of that commit

### Production
Triggered by pushing/merging to production branch (usually `main`).
```bash
vercel --prod
```

### Custom Environments (Pro/Enterprise)
For staging, QA, or specialized workflows:
```bash
vercel deploy --target=staging
vercel pull --environment=staging
vercel env add MY_KEY staging
```

Limits: Pro = 1 custom env/project, Enterprise = 12.

## Managing Deployments

From the Dashboard or CLI:
- **Redeploy** — re-run build for a specific commit
- **Inspect** — view logs and build outputs
- **Promote** — convert preview to production
- **Rollback** — revert to a previous deployment
- **Assign domain** — point custom domains to any deployment

## Production Branch

Default selection order: `main` > `master` > Git default.
Customize in Project Settings > Environments > Production > Branch Tracking.
