# Git Integration

Automatic deployments on every branch push and merge to the production branch.

## Supported Providers

- GitHub (Free, Team, Enterprise Cloud)
- GitLab (Free, Premium, Ultimate, Enterprise)
- Bitbucket (Free, Standard, Premium)
- Azure DevOps Pipelines

Self-hosted: GitHub Enterprise Server, Self-Managed GitLab, Bitbucket Data Center (via CI/CD pipelines).

## Setup

1. Go to [New Project](https://vercel.com/new) in the Dashboard
2. Connect your Git provider
3. Select a repository
4. Configure framework, build settings, env vars
5. Click **Deploy**

Every subsequent push triggers a new deployment automatically.

## How It Works

- Push to **production branch** (`main`) → Production deployment
- Push to **any other branch** → Preview deployment
- Create a **pull request** → Preview deployment with comment link

## Production Branch

Default selection: `main` > `master` > Git default.

Customize: Project Settings > Environments > Production > Branch Tracking.

## Deploy from Git Reference

From Dashboard > Deployments > Create Deployment:
- **Commit SHA** — deploy specific commit
- **Branch name** — deploy latest from branch

## Private Repositories

Commits only deploy if the commit author has access to the Vercel project:
- **Pro teams** — author must be a team member
- **Hobby** — author must be the team owner

## Forks of Public Repos

PRs from forks require authorization from a team member (security measure). Skipped if commit author is already a team member.

## Preview Branches

All non-production branches are preview branches by default. Each gets:
- Unique deployment URL
- Branch-specific URL (latest on that branch)
- Commit-specific URL (exact deployment)

### Multiple Preview Phases

Create staged workflows (e.g., "staging"):
1. Create a `staging` Git branch
2. Assign a domain (e.g., `staging.example.com`)
3. Set branch-specific environment variables
4. Push to `staging` to update

Or use [Custom Environments](deployments.md) (Pro/Enterprise).
