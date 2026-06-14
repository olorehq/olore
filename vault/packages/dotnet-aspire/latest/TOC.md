# dotnet-aspire Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/deployment/` | Deployment guides for Azure Container Apps and azd | 16 |
| `contents/fundamentals/` | Setup, tooling, and template installation | 2 |
| `contents/get-started/` | Upgrade guides | 1 |
| `contents/includes/` | Shared reusable content snippets | 16 |
| `contents/troubleshooting/` | Common error resolution guides | 7 |

## deployment/aspire-deploy/

| File | Description |
|------|-------------|
| `aca-deployment-visual-studio.md` | Deploy to Azure Container Apps using Visual Studio |
| `application-insights.md` | Application Insights integration deployment |
| `caching-integrations-deployment.md` | Deploy Redis/caching integrations |
| `customize-deployments.md` | Customizing deployment configuration |
| `sql-server-integration-deployment.md` | Deploy SQL Server integrations |

## deployment/azd/

| File | Description |
|------|-------------|
| `aca-deployment.md` | Deploy to ACA with Azure Developer CLI (azd) |
| `aca-deployment-azd-in-depth.md` | In-depth azd deployment walkthrough |
| `aca-deployment-github-actions.md` | Deploy via GitHub Actions with azd |
| `customize-deployments.md` | Customizing azd deployment parameters |

## deployment/includes/

| File | Description |
|------|-------------|
| `azd-dashboard.md` | Dashboard deployment include snippet |
| `azd-deploy-output.md` | Expected azd deploy output |
| `azd-down-output.md` | Expected azd down output |
| `azd-up-output.md` | Expected azd up output |
| `azd-up-workflow.md` | azd up workflow steps |
| `init-workflow.md` | azd init workflow steps |
| `test-deployed-app.md` | Testing a deployed Aspire app |

## fundamentals/includes/

| File | Description |
|------|-------------|
| `dotnet-new-list-aspire-output.md` | Output of dotnet new list aspire |
| `install-templates.md` | Installing Aspire project templates |

## get-started/

| File | Description |
|------|-------------|
| `upgrade-to-aspire-13.md` | Upgrade guide for migrating to Aspire 13.0 |

## includes/

| File | Description |
|------|-------------|
| `aspire-create-sample-generic.md` | Creating a sample Aspire solution |
| `aspire-prereqs.md` | Prerequisites for working with Aspire |
| `azure-container-app-naming.md` | ACA resource naming requirements |
| `clean-up-resources-visual-studio.md` | Clean up Azure resources via Visual Studio |
| `clean-up-resources.md` | Clean up Azure resources via CLI |
| `client-integration-health-checks.md` | Health checks for client integrations |
| `connection-strings-alert.md` | Connection string terminology note |
| `data-bind-mount-vs-volumes.md` | Bind mounts vs volumes explanation |
| `dotnet-cli-file-new.md` | Creating a new Aspire project with dotnet CLI |
| `includes-client.md` | Client integration indicator |
| `includes-hosting-and-client.md` | Hosting and client integration indicator |
| `includes-hosting.md` | Hosting integration indicator |
| `integration-observability-and-telemetry.md` | Observability and telemetry for integrations |
| `template-directory-structure.md` | Aspire project template directory layout |
| `visual-studio-file-new.md` | Creating a new Aspire project with Visual Studio |
| `vscode-file-new.md` | Creating a new Aspire project with VS Code |

## troubleshooting/

| File | Description |
|------|-------------|
| `allow-unsecure-transport.md` | Fixing unsecure transport errors |
| `connection-string-missing.md` | Resolving missing connection string errors |
| `container-runtime-unhealthy.md` | Fixing unhealthy container runtime |
| `hosting-startup-not-supported.md` | Resolving hosting startup errors |
| `name-is-already-in-use.md` | Fixing name conflicts in Aspire apps |
| `podman-wsl-not-found.md` | Podman/WSL not found troubleshooting |
| `untrusted-localhost-certificate.md` | Fixing untrusted localhost certificate errors |
