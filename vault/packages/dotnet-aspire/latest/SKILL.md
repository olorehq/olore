---
name: olore-dotnet-aspire-latest
description: Local dotnet-aspire documentation reference (latest). .NET Aspire documentation. Use for cloud-native .NET apps, service discovery, orchestration, app host, deployment, integrations, dashboard, and distributed application development.
---

# dotnet-aspire Documentation

.NET Aspire documentation. Use for cloud-native .NET apps, service discovery, orchestration, app host, deployment, integrations, dashboard, and distributed application development.

## Documentation Structure

```
contents/
├── compatibility/    # Breaking changes by version (9.0–13.0), API removal policy, categories (48 files)
├── deployment/       # Deployment guides: Azure Container Apps via azd and Aspire Deploy (9 files)
├── troubleshooting/  # Common errors and fixes (7 files)
└── get-started/      # Upgrade guides (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Upgrading to Aspire 13 | `contents/get-started/upgrade-to-aspire-13.md` |
| Breaking changes overview | `contents/compatibility/breaking-changes.md` |
| API removal policy | `contents/compatibility/api-removal.md` |
| Compatibility categories | `contents/compatibility/categories.md` |
| Breaking changes in 9.0 | `contents/compatibility/9.0/index.md` |
| Breaking changes in 9.1 | `contents/compatibility/9.1/index.md` |
| Breaking changes in 9.2 | `contents/compatibility/9.2/index.md` |
| Breaking changes in 9.3 | `contents/compatibility/9.3/index.md` |
| Breaking changes in 9.4 | `contents/compatibility/9.4/index.md` |
| Breaking changes in 9.5 | `contents/compatibility/9.5/index.md` |
| Breaking changes in 13.0 | `contents/compatibility/13.0/index.md` |
| Azure managed identity changes | `contents/compatibility/9.2/managed-identity-per-app.md`, `contents/compatibility/13.0/defaultazurecredential-managedidentity-default.md` |
| Azure auth / local auth disabled | `contents/compatibility/9.4/local-auth-disabled-for-azure-resources.md` |
| Deploying with azd | `contents/deployment/azd/aca-deployment.md`, `contents/deployment/azd/aca-deployment-azd-in-depth.md` |
| CI/CD deployment (GitHub Actions) | `contents/deployment/azd/aca-deployment-github-actions.md` |
| Deploy from Visual Studio | `contents/deployment/aspire-deploy/aca-deployment-visual-studio.md` |
| Customizing deployments | `contents/deployment/azd/customize-deployments.md`, `contents/deployment/aspire-deploy/customize-deployments.md` |
| SQL Server deployment | `contents/deployment/aspire-deploy/sql-server-integration-deployment.md` |
| Application Insights setup | `contents/deployment/aspire-deploy/application-insights.md` |
| Container runtime errors | `contents/troubleshooting/container-runtime-unhealthy.md` |
| Certificate and transport issues | `contents/troubleshooting/untrusted-localhost-certificate.md`, `contents/troubleshooting/allow-unsecure-transport.md` |
| Connection string errors | `contents/troubleshooting/connection-string-missing.md` |
| Podman/WSL issues | `contents/troubleshooting/podman-wsl-not-found.md` |

## When to use

Use this skill when the user asks about:
- Upgrading .NET Aspire versions (9.x, 13.0)
- Breaking changes or API removals in .NET Aspire
- Deploying Aspire apps to Azure Container Apps
- Using azd (Azure Developer CLI) with .NET Aspire
- Deployment customization, integrations, or Application Insights setup
- Troubleshooting common Aspire errors (container runtime, certificates, connection strings)
- Azure managed identity, Bicep, or Azure resource configuration in Aspire

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
