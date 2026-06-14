---
name: olore-dotnet-aspire-latest
description: Local dotnet-aspire documentation reference (latest). .NET Aspire documentation. Use for cloud-native .NET apps, service discovery, orchestration, app host, deployment, integrations, dashboard, and distributed application development.
---

# dotnet-aspire Documentation

.NET Aspire documentation. Use for cloud-native .NET apps, service discovery, orchestration, app host, deployment, integrations, dashboard, and distributed application development.

## Documentation Structure

```
contents/
├── deployment/       # Deployment guides for Azure Container Apps and azd (16 files)
├── fundamentals/     # Setup, tooling, and template installation (2 files)
├── get-started/      # Upgrade guides (1 file)
├── includes/         # Shared reusable content snippets (16 files)
└── troubleshooting/  # Common error resolution guides (7 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Deploy to Azure Container Apps (azd) | `contents/deployment/azd/aca-deployment.md`, `contents/deployment/azd/aca-deployment-azd-in-depth.md` |
| Deploy via GitHub Actions | `contents/deployment/azd/aca-deployment-github-actions.md` |
| Deploy with Visual Studio | `contents/deployment/aspire-deploy/aca-deployment-visual-studio.md` |
| Customize deployments | `contents/deployment/azd/customize-deployments.md`, `contents/deployment/aspire-deploy/customize-deployments.md` |
| SQL Server integration deployment | `contents/deployment/aspire-deploy/sql-server-integration-deployment.md` |
| Caching integration deployment | `contents/deployment/aspire-deploy/caching-integrations-deployment.md` |
| Application Insights | `contents/deployment/aspire-deploy/application-insights.md` |
| Prerequisites and setup | `contents/includes/aspire-prereqs.md`, `contents/fundamentals/includes/install-templates.md` |
| Creating a new project | `contents/includes/dotnet-cli-file-new.md`, `contents/includes/visual-studio-file-new.md`, `contents/includes/vscode-file-new.md` |
| Upgrade to Aspire 13.0 | `contents/get-started/upgrade-to-aspire-13.md` |
| Health checks | `contents/includes/client-integration-health-checks.md` |
| Observability and telemetry | `contents/includes/integration-observability-and-telemetry.md` |
| Connection strings | `contents/includes/connection-strings-alert.md` |
| Volumes and bind mounts | `contents/includes/data-bind-mount-vs-volumes.md` |
| Troubleshooting container runtime | `contents/troubleshooting/container-runtime-unhealthy.md`, `contents/troubleshooting/podman-wsl-not-found.md` |
| Troubleshooting connection issues | `contents/troubleshooting/connection-string-missing.md`, `contents/troubleshooting/allow-unsecure-transport.md` |
| Troubleshooting certificates | `contents/troubleshooting/untrusted-localhost-certificate.md` |
| Troubleshooting startup errors | `contents/troubleshooting/hosting-startup-not-supported.md`, `contents/troubleshooting/name-is-already-in-use.md` |

## When to use

Use this skill when the user asks about:
- Deploying .NET Aspire apps to Azure Container Apps with azd or Visual Studio
- Setting up CI/CD for Aspire with GitHub Actions
- Integrating SQL Server, Redis, or Application Insights in Aspire deployments
- Installing Aspire templates and setting up a new Aspire project
- Upgrading an existing project to Aspire 13.0
- Health checks, observability, and telemetry in Aspire integrations
- Troubleshooting container runtime, connection, or certificate errors in Aspire

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
