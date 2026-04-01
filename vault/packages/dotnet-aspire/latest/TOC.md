# dotnet-aspire Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/compatibility/` | Breaking changes by version (9.0–13.0), API removal, compatibility categories | 48 |
| `contents/deployment/` | Deployment guides for Azure Container Apps via azd and Aspire Deploy | 9 |
| `contents/troubleshooting/` | Common errors and fixes | 7 |
| `contents/get-started/` | Upgrade guides | 2 |

## compatibility/

| File | Description |
|------|-------------|
| `compatibility/breaking-changes.md` | Index of all breaking changes across Aspire versions |
| `compatibility/categories.md` | How code changes affect compatibility (binary, source, behavioral) |
| `compatibility/api-removal.md` | .NET Aspire policy for obsoleting and removing APIs |

### compatibility/9.0/

| File | Description |
|------|-------------|
| `compatibility/9.0/index.md` | Breaking changes index for Aspire 9.0 |
| `compatibility/9.0/addpython.md` | AddPython API changes |
| `compatibility/9.0/azure-resource-name-scheme.md` | Azure resource naming scheme updates |
| `compatibility/9.0/azure-provisioning.md` | Azure provisioning API changes |
| `compatibility/9.0/azure-hosting.md` | Azure hosting API changes |
| `compatibility/9.0/azureopenai-ctor.md` | AzureOpenAI constructor changes |
| `compatibility/9.0/ollama-integration-updates.md` | Ollama integration API updates |
| `compatibility/9.0/provisioning-context.md` | ProvisioningContext API changes |
| `compatibility/9.0/unnamed-volumes.md` | Unnamed volumes behavior change |
| `compatibility/9.0/make-unnamed-volumes-unique.md` | Making unnamed volumes unique |

### compatibility/9.1/

| File | Description |
|------|-------------|
| `compatibility/9.1/index.md` | Breaking changes index for Aspire 9.1 |
| `compatibility/9.1/cosmos-db-obsolete-apis.md` | Cosmos DB obsolete API removals |
| `compatibility/9.1/service-bus-obsolete-apis.md` | Service Bus obsolete API removals |
| `compatibility/9.1/event-hubs-obsolete-apis.md` | Event Hubs obsolete API removals |
| `compatibility/9.1/python-hosting-integration-api-changes.md` | Python hosting API changes |
| `compatibility/9.1/container-image-name-and-tag-updates.md` | Container image name and tag updates |
| `compatibility/9.1/testing-builder-api-changes.md` | Testing builder API changes |

### compatibility/9.2/

| File | Description |
|------|-------------|
| `compatibility/9.2/index.md` | Breaking changes index for Aspire 9.2 |
| `compatibility/9.2/withauthentication-changes.md` | WithAuthentication API changes |
| `compatibility/9.2/withcommand-obsolete.md` | WithCommand marked obsolete |
| `compatibility/9.2/managed-identity-per-app.md` | Managed identity per-app changes |
| `compatibility/9.2/generated-bicep-updates.md` | Generated Bicep template updates |
| `compatibility/9.2/azure-openaideployment-obsolete.md` | AzureOpenAIDeployment marked obsolete |
| `compatibility/9.2/keyvault-role-assignment-changes.md` | Key Vault role assignment changes |

### compatibility/9.3/

| File | Description |
|------|-------------|
| `compatibility/9.3/index.md` | Breaking changes index for Aspire 9.3 |
| `compatibility/9.3/azure-sql-server-default-uami-admin.md` | Azure SQL Server default UAMI admin changes |
| `compatibility/9.3/azure-sql-server-default-sku-changes.md` | Azure SQL Server default SKU changes |
| `compatibility/9.3/with-health-checks-changes.md` | WithHealthChecks API changes |
| `compatibility/9.3/remove-publisher-apis.md` | Publisher API removals |

### compatibility/9.4/

| File | Description |
|------|-------------|
| `compatibility/9.4/index.md` | Breaking changes index for Aspire 9.4 |
| `compatibility/9.4/add-azure-openai-default-changes.md` | AddAzureOpenAI default parameter changes |
| `compatibility/9.4/getsecretoutput-deprecated.md` | GetSecretOutput deprecated |
| `compatibility/9.4/local-auth-disabled-for-azure-resources.md` | Local auth disabled for Azure resources by default |
| `compatibility/9.4/hybrid-compute-support-dropped.md` | Hybrid compute support dropped |
| `compatibility/9.4/azure-bicep-parameters-deprecated.md` | Azure Bicep parameters deprecated |
| `compatibility/9.4/cosmosdb-serverless-defaults.md` | CosmosDB serverless defaults change |
| `compatibility/9.4/azure-storage-apis-renamed.md` | Azure Storage API renames |

### compatibility/9.5/

| File | Description |
|------|-------------|
| `compatibility/9.5/index.md` | Breaking changes index for Aspire 9.5 |
| `compatibility/9.5/path-normalization-volume-naming.md` | Path normalization in volume naming |
| `compatibility/9.5/launch-profile-filtered.md` | Launch profile filtering changes |
| `compatibility/9.5/endpoint-resolution-withenvironment.md` | Endpoint resolution with WithEnvironment changes |
| `compatibility/9.5/iresourcewithoutlifetime-removed.md` | IResourceWithoutLifetime interface removed |
| `compatibility/9.5/interactioninput-name-required.md` | InteractionInput name now required |

### compatibility/13.0/

| File | Description |
|------|-------------|
| `compatibility/13.0/index.md` | Breaking changes index for Aspire 13.0 |
| `compatibility/13.0/defaultazurecredential-managedidentity-default.md` | DefaultAzureCredential managed identity default change |
| `compatibility/13.0/pipeline-activity-reporter-renamed.md` | Pipeline activity reporter renamed |

## deployment/

### deployment/azd/

| File | Description |
|------|-------------|
| `deployment/azd/aca-deployment.md` | Deploy to Azure Container Apps with azd |
| `deployment/azd/aca-deployment-azd-in-depth.md` | In-depth azd deployment walkthrough |
| `deployment/azd/aca-deployment-github-actions.md` | CI/CD deployment with GitHub Actions |
| `deployment/azd/customize-deployments.md` | Customizing azd deployments |

### deployment/aspire-deploy/

| File | Description |
|------|-------------|
| `deployment/aspire-deploy/aca-deployment-visual-studio.md` | Deploy to Azure Container Apps from Visual Studio |
| `deployment/aspire-deploy/customize-deployments.md` | Customizing Aspire Deploy deployments |
| `deployment/aspire-deploy/caching-integrations-deployment.md` | Deploying with caching integrations |
| `deployment/aspire-deploy/sql-server-integration-deployment.md` | Deploying with SQL Server integration |
| `deployment/aspire-deploy/application-insights.md` | Configuring Application Insights in deployment |

## troubleshooting/

| File | Description |
|------|-------------|
| `troubleshooting/allow-unsecure-transport.md` | Allow unsecure HTTP transport in development |
| `troubleshooting/container-runtime-unhealthy.md` | Container runtime unhealthy errors |
| `troubleshooting/name-is-already-in-use.md` | Resource name already in use error |
| `troubleshooting/connection-string-missing.md` | Missing connection string errors |
| `troubleshooting/untrusted-localhost-certificate.md` | Untrusted localhost certificate issues |
| `troubleshooting/hosting-startup-not-supported.md` | Hosting startup not supported error |
| `troubleshooting/podman-wsl-not-found.md` | Podman/WSL not found errors |

## get-started/

| File | Description |
|------|-------------|
| `get-started/upgrade-to-aspire-13.md` | How to upgrade your app to Aspire 13.0 |
