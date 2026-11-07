> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Terraform Provider

> Manage OpenRouter resources as infrastructure-as-code with Terraform

The [OpenRouter Terraform provider](https://registry.terraform.io/providers/OpenRouterTeam/openrouter/latest) lets you manage OpenRouter as infrastructure-as-code. Define platform configuration in code, review changes before applying them, detect drift, and import resources that already exist.

## Installation

Add the provider to your Terraform configuration and run `terraform init`:

```hcl theme={null}
terraform {
  required_providers {
    openrouter = {
      source  = "OpenRouterTeam/openrouter"
      version = "~> 0.2"
    }
  }
}

provider "openrouter" {
  api_key = var.openrouter_management_key
}
```

## Authentication

Authenticate with an OpenRouter [Management API key](https://openrouter.ai/settings/management-keys), which starts with `sk-or-mgmt-...`. Management keys administer resources and cannot spend inference credits. Pass the key to the provider through `api_key`, for example with a Terraform variable or another secret-management workflow.

## Example

This example creates a workspace, an API key assigned to that workspace, and a guardrail:

```hcl theme={null}
resource "openrouter_workspace" "production" {
  name = "Production"
  slug = "production"
}

resource "openrouter_api_key" "backend" {
  name         = "backend-service"
  limit        = 100
  limit_reset  = "monthly"
  workspace_id = openrouter_workspace.production.id
}

resource "openrouter_guardrail" "cost_cap" {
  name           = "cost-cap"
  limit_usd      = 50
  reset_interval = "monthly"
  enforce_zdr    = true
}
```

## What it manages

The provider supports the lifecycle of OpenRouter platform resources, including:

* API keys and workspace configuration
* Guardrails and spending limits
* BYOK provider credentials
* Observability destinations
* Private endpoints
* SCIM group mappings

Terraform tracks these resources in state so plans can show configuration drift before you apply a change. Existing resources can be imported into Terraform-managed state.

## Resources and data sources

The provider currently includes seven managed resources:

* `openrouter_api_key`
* `openrouter_byok_key`
* `openrouter_guardrail`
* `openrouter_observability_destination`
* `openrouter_private_endpoint`
* `openrouter_scim_group_mapping`
* `openrouter_workspace`

It also includes data sources for looking up resources and platform information, including API keys, BYOK keys, credits, guardrails, models, observability destinations, presets, private endpoints, providers, SCIM mappings, and workspaces.

For the complete resource and data-source reference, see the [Terraform Registry documentation](https://registry.terraform.io/providers/OpenRouterTeam/openrouter/latest/docs). The provider source is available on [GitHub](https://github.com/OpenRouterTeam/terraform-provider-openrouter).
