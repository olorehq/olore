> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Management API Keys

> Manage API keys programmatically

OpenRouter provides endpoints to programmatically manage your API keys, enabling key creation and management for applications that need to distribute or rotate keys automatically.

## Creating a Management API Key

To use the key management API, you first need to create a Management API key:

1. Go to the [Management API Keys page](https://openrouter.ai/settings/management-keys)
2. Click "Create New Key"
3. Enter a name and choose an expiration
4. Copy the key when it is shown. You will not be able to see it again

Management keys cannot be used to make API calls to OpenRouter's completion endpoints - they are exclusively for administrative operations.

### Scope and Permissions

Management API keys operate at the account level and, for organizations, can only be created by **Organization Admins**. They are unscoped: one key covers administrative actions across all of the account's workspaces.

* **Programmatic Management:** Endpoints for managing workspace members (`POST /api/v1/workspaces/{id}/members/add`), keys, and budgets require a Management API key. Members added via the API automatically inherit their organization role (Org Admins become Workspace Admins; Org Members become Workspace Members).
* **Dashboard UI:** Within the OpenRouter dashboard, **Workspace Admins** can add members on the workspace Members page without requiring a Management API key. Assigning workspace roles there additionally requires a Pro or Enterprise plan.

### Expiration

We recommend setting an expiration date on every management key. A leaked management key could create, edit and delete the API keys in your account other than those provisioned by a Connect client, and one with no expiration stays valid until you delete it.

* The expiration is fixed when the key is created and cannot be changed afterwards. To extend access, create a new key and delete the old one.
* Once a key's expiration passes, every request that uses it fails with `401 Unauthorized` and the message `API key expired`. Expired keys still appear on the [Management API Keys page](https://openrouter.ai/settings/management-keys) until you delete them.

> [!WARNING]
>
> Automations that call the key management API with an expiring management key must be given a new key before the old one expires, or they will start receiving `401 API key expired` responses. Schedule rotation ahead of the expiration date shown next to the key.

## Use Cases

Common scenarios for programmatic key management include:

* **SaaS Applications**: Automatically create unique API keys for each customer instance
* **Key Rotation**: Regularly rotate API keys for security compliance
* **Usage Monitoring**: Track key usage and automatically disable keys that exceed limits (with optional daily/weekly/monthly limit resets)

## Example Usage

All key management endpoints are under `/api/v1/keys` and require a Management API key in the Authorization header.

```typescript title="TypeScript SDK" expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: 'your-management-key', // Use your Management API key
});

// List the most recent 100 API keys
const keys = await openRouter.apiKeys.list();

// You can paginate using the offset parameter
const keysPage2 = await openRouter.apiKeys.list({ offset: 100 });

// Create a new API key
const newKey = await openRouter.apiKeys.create({
  name: 'Customer Instance Key',
  limit: 1000, // Optional credit limit
});

// Get a specific key
const keyHash = '<YOUR_KEY_HASH>';
const key = await openRouter.apiKeys.get(keyHash);

// Update a key
const updatedKey = await openRouter.apiKeys.update(keyHash, {
  name: 'Updated Key Name',
  disabled: true, // Optional: Disable the key
  includeByokInLimit: false, // Optional: control BYOK usage in limit
  limitReset: 'daily', // Optional: reset limit every day at midnight UTC
});

// Delete a key
await openRouter.apiKeys.delete(keyHash);
```

```python title="Python" expandable lines theme={null}
import requests

MANAGEMENT_API_KEY = "your-management-key"
BASE_URL = "https://openrouter.ai/api/v1/keys"

# List the most recent 100 API keys
response = requests.get(
    BASE_URL,
    headers={
        "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
        "Content-Type": "application/json"
    }
)

# You can paginate using the offset parameter
response = requests.get(
    f"{BASE_URL}?offset=100",
    headers={
        "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
        "Content-Type": "application/json"
    }
)

# Create a new API key
response = requests.post(
    f"{BASE_URL}/",
    headers={
        "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
        "Content-Type": "application/json"
    },
    json={
        "name": "Customer Instance Key",
        "limit": 1000  # Optional credit limit
    }
)

# Get a specific key
key_hash = "<YOUR_KEY_HASH>"
response = requests.get(
    f"{BASE_URL}/{key_hash}",
    headers={
        "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
        "Content-Type": "application/json"
    }
)

# Update a key
response = requests.patch(
    f"{BASE_URL}/{key_hash}",
    headers={
        "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
        "Content-Type": "application/json"
    },
    json={
        "name": "Updated Key Name",
        "disabled": True,  # Optional: Disable the key
        "include_byok_in_limit": False,  # Optional: control BYOK usage in limit
        "limit_reset": "daily"  # Optional: reset limit every day at midnight UTC
    }
)

# Delete a key
response = requests.delete(
    f"{BASE_URL}/{key_hash}",
    headers={
        "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
        "Content-Type": "application/json"
    }
)
```

```typescript title="TypeScript (fetch)" expandable lines theme={null}
const MANAGEMENT_API_KEY = 'your-management-key';
const BASE_URL = 'https://openrouter.ai/api/v1/keys';

// List the most recent 100 API keys
const listKeys = await fetch(BASE_URL, {
  headers: {
    Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// You can paginate using the `offset` query parameter
const listKeys = await fetch(`${BASE_URL}?offset=100`, {
  headers: {
    Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Create a new API key
const createKey = await fetch(`${BASE_URL}`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Customer Instance Key',
    limit: 1000, // Optional credit limit
  }),
});

// Get a specific key
const keyHash = '<YOUR_KEY_HASH>';
const getKey = await fetch(`${BASE_URL}/${keyHash}`, {
  headers: {
    Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Update a key
const updateKey = await fetch(`${BASE_URL}/${keyHash}`, {
  method: 'PATCH',
  headers: {
    Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Updated Key Name',
    disabled: true, // Optional: Disable the key
    include_byok_in_limit: false, // Optional: control BYOK usage in limit
    limit_reset: 'daily', // Optional: reset limit every day at midnight UTC
  }),
});

// Delete a key
const deleteKey = await fetch(`${BASE_URL}/${keyHash}`, {
  method: 'DELETE',
  headers: {
    Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
```

## Response Format

API responses return JSON objects containing key information:

```json expandable lines theme={null}
{
  "data": [
    {
      "created_at": "2025-02-19T20:52:27.363244+00:00",
      "updated_at": "2025-02-19T21:24:11.708154+00:00",
      "hash": "<YOUR_KEY_HASH>",
      "label": "sk-or-v1-abc...123",
      "name": "Customer Key",
      "disabled": false,
      "limit": 10,
      "limit_remaining": 10,
      "limit_reset": null,
      "include_byok_in_limit": false,
      "usage": 0,
      "usage_daily": 0,
      "usage_weekly": 0,
      "usage_monthly": 0,
      "byok_usage": 0,
      "byok_usage_daily": 0,
      "byok_usage_weekly": 0,
      "byok_usage_monthly": 0
    }
  ]
}
```

When creating a new key, the response will include the key string itself. Read more in the [API reference](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key.md).

## Organization Settings

A management key created in an organization can also read and update that organization's settings at `/api/v1/organization/settings`. The organization is the one the key belongs to; it cannot be chosen per request.

Currently exposed setting:

* `is_filtered_model_catalog_enabled` (default `false`): the same switch as **Settings → Privacy → "Filter the model catalog for API keys"**. When enabled, `GET /api/v1/models` called with one of the organization's API keys returns only the models that key can use (the `/api/v1/models/user` catalog), and the signed-in dashboard shows the same list. Requests without a key still receive the public catalog. Which models remain visible is decided by the active workspace's guardrails and provider preferences; enabling the switch does not change those.

```bash title="cURL" expandable lines theme={null}
# Read the current settings
curl https://openrouter.ai/api/v1/organization/settings \
  -H "Authorization: Bearer $MANAGEMENT_API_KEY"

# Enable the filtered model catalog
curl -X PATCH https://openrouter.ai/api/v1/organization/settings \
  -H "Authorization: Bearer $MANAGEMENT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"is_filtered_model_catalog_enabled": true}'
```

Both calls return the persisted settings:

```json theme={null}
{
  "data": {
    "id": "org_2dHFtVWx2n56w6HkM0000000000",
    "is_filtered_model_catalog_enabled": true
  }
}
```

Management keys created in a personal account receive `404 Not Found` from these routes.

## Routes That Require a Management Key

The following documented routes reject regular API keys and must be called with a Management API key.

### Analytics

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/activity` | [Get user activity grouped by endpoint](https://openrouter.ai/docs/api/api-reference/analytics/get-user-activity-grouped-by-endpoint.md) |
| `GET` | `/api/v1/analytics/meta` | [Get available analytics metrics and dimensions](https://openrouter.ai/docs/api/api-reference/analytics/get-available-analytics-metrics-and-dimensions.md) |
| `POST` | `/api/v1/analytics/query` | [Query analytics data](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data.md) |

### API Keys

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/keys` | [List API keys](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys.md) |
| `POST` | `/api/v1/keys` | [Create a new API key](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key.md) |
| `GET` | `/api/v1/keys/{hash}` | [Get a single API key](https://openrouter.ai/docs/api/api-reference/api-keys/get-a-single-api-key.md) |
| `DELETE` | `/api/v1/keys/{hash}` | [Delete an API key](https://openrouter.ai/docs/api/api-reference/api-keys/delete-an-api-key.md) |
| `PATCH` | `/api/v1/keys/{hash}` | [Update an API key](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key.md) |

### BYOK

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/byok` | [List BYOK provider credentials](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials.md) |
| `POST` | `/api/v1/byok` | [Create a BYOK provider credential](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential.md) |
| `GET` | `/api/v1/byok/{id}` | [Get a BYOK provider credential](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential.md) |
| `DELETE` | `/api/v1/byok/{id}` | [Delete a BYOK provider credential](https://openrouter.ai/docs/api/api-reference/byok/delete-a-byok-provider-credential.md) |
| `PATCH` | `/api/v1/byok/{id}` | [Update a BYOK provider credential](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential.md) |

### Credits

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/credits` | [Get remaining credits](https://openrouter.ai/docs/api/api-reference/credits/get-remaining-credits.md) |

### External Users

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/external-users` | [List registered external users](https://openrouter.ai/docs/api/api-reference/external-users/list-registered-external-users.md) |
| `POST` | `/api/v1/external-users` | [Register an external user](https://openrouter.ai/docs/api/api-reference/external-users/register-an-external-user.md) |
| `GET` | `/api/v1/external-users/{user}` | [Get a registered external user](https://openrouter.ai/docs/api/api-reference/external-users/get-a-registered-external-user.md) |
| `DELETE` | `/api/v1/external-users/{user}` | [Deactivate a registered external user](https://openrouter.ai/docs/api/api-reference/external-users/deactivate-a-registered-external-user.md) |
| `PATCH` | `/api/v1/external-users/{user}` | [Update a registered external user](https://openrouter.ai/docs/api/api-reference/external-users/update-a-registered-external-user.md) |

### Generations

| Method | Route | Reference |
| - | - | - |
| `POST` | `/api/v1/generation/feedback` | [Submit feedback for a generation](https://openrouter.ai/docs/api/api-reference/generations/submit-feedback-for-a-generation.md) |

### Guardrail Policies

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/guardrails/policies/account` | [List workspace-wide policies](https://openrouter.ai/docs/api/api-reference/guardrail-policies/list-workspace-wide-policies.md) |
| `POST` | `/api/v1/guardrails/policies/account` | [Create a workspace-wide policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/create-a-workspace-wide-policy.md) |
| `PUT` | `/api/v1/guardrails/policies/account/{id}` | [Update a workspace-wide policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/update-a-workspace-wide-policy.md) |
| `DELETE` | `/api/v1/guardrails/policies/account/{id}` | [Delete a workspace-wide policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/delete-a-workspace-wide-policy.md) |
| `GET` | `/api/v1/guardrails/policies/assignments/api-keys/{hash}` | [Get an API key policy assignment](https://openrouter.ai/docs/api/api-reference/guardrail-policies/get-an-api-key-policy-assignment.md) |
| `PUT` | `/api/v1/guardrails/policies/assignments/api-keys/{hash}` | [Change an API key policy assignment](https://openrouter.ai/docs/api/api-reference/guardrail-policies/change-an-api-key-policy-assignment.md) |
| `GET` | `/api/v1/guardrails/policies/assignments/members/{member_id}` | [Get a member policy assignment](https://openrouter.ai/docs/api/api-reference/guardrail-policies/get-a-member-policy-assignment.md) |
| `PUT` | `/api/v1/guardrails/policies/assignments/members/{member_id}` | [Change a member policy assignment](https://openrouter.ai/docs/api/api-reference/guardrail-policies/change-a-member-policy-assignment.md) |
| `GET` | `/api/v1/guardrails/policies/budget` | [List budget policies](https://openrouter.ai/docs/api/api-reference/guardrail-policies/list-budget-policies.md) |
| `POST` | `/api/v1/guardrails/policies/budget` | [Create a budget policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/create-a-budget-policy.md) |
| `GET` | `/api/v1/guardrails/policies/budget/{id}` | [Get a budget policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/get-a-budget-policy.md) |
| `PUT` | `/api/v1/guardrails/policies/budget/{id}` | [Update a budget policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/update-a-budget-policy.md) |
| `DELETE` | `/api/v1/guardrails/policies/budget/{id}` | [Delete a budget policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/delete-a-budget-policy.md) |
| `GET` | `/api/v1/guardrails/policies/model-availability` | [List model availability policies](https://openrouter.ai/docs/api/api-reference/guardrail-policies/list-model-availability-policies.md) |
| `POST` | `/api/v1/guardrails/policies/model-availability` | [Create a model availability policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/create-a-model-availability-policy.md) |
| `GET` | `/api/v1/guardrails/policies/model-availability/{id}` | [Get a model availability policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/get-a-model-availability-policy.md) |
| `PUT` | `/api/v1/guardrails/policies/model-availability/{id}` | [Update a model availability policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/update-a-model-availability-policy.md) |
| `DELETE` | `/api/v1/guardrails/policies/model-availability/{id}` | [Delete a model availability policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/delete-a-model-availability-policy.md) |
| `GET` | `/api/v1/guardrails/policies/moderation` | [List moderation policies](https://openrouter.ai/docs/api/api-reference/guardrail-policies/list-moderation-policies.md) |
| `POST` | `/api/v1/guardrails/policies/moderation` | [Create a moderation policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/create-a-moderation-policy.md) |
| `GET` | `/api/v1/guardrails/policies/moderation/{id}` | [Get a moderation policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/get-a-moderation-policy.md) |
| `PUT` | `/api/v1/guardrails/policies/moderation/{id}` | [Update a moderation policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/update-a-moderation-policy.md) |
| `DELETE` | `/api/v1/guardrails/policies/moderation/{id}` | [Delete a moderation policy](https://openrouter.ai/docs/api/api-reference/guardrail-policies/delete-a-moderation-policy.md) |

### Guardrails

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/guardrails` | [List guardrails](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails.md) |
| `POST` | `/api/v1/guardrails` | [Create a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail.md) |
| `GET` | `/api/v1/guardrails/{id}` | [Get a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail.md) |
| `DELETE` | `/api/v1/guardrails/{id}` | [Delete a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/delete-a-guardrail.md) |
| `PATCH` | `/api/v1/guardrails/{id}` | [Update a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail.md) |
| `GET` | `/api/v1/guardrails/{id}/assignments/keys` | [List key assignments for a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/list-key-assignments-for-a-guardrail.md) |
| `POST` | `/api/v1/guardrails/{id}/assignments/keys` | [Bulk assign keys to a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-keys-to-a-guardrail.md) |
| `POST` | `/api/v1/guardrails/{id}/assignments/keys/remove` | [Bulk unassign keys from a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-unassign-keys-from-a-guardrail.md) |
| `GET` | `/api/v1/guardrails/{id}/assignments/members` | [List member assignments for a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/list-member-assignments-for-a-guardrail.md) |
| `POST` | `/api/v1/guardrails/{id}/assignments/members` | [Bulk assign members to a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-members-to-a-guardrail.md) |
| `POST` | `/api/v1/guardrails/{id}/assignments/members/remove` | [Bulk unassign members from a guardrail](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-unassign-members-from-a-guardrail.md) |
| `GET` | `/api/v1/guardrails/assignments/keys` | [List all key assignments](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-key-assignments.md) |
| `GET` | `/api/v1/guardrails/assignments/members` | [List all member assignments](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-member-assignments.md) |

### Observability

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/observability/destinations` | [List observability destinations](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations.md) |
| `POST` | `/api/v1/observability/destinations` | [Create an observability destination](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination.md) |
| `GET` | `/api/v1/observability/destinations/{id}` | [Get an observability destination](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination.md) |
| `DELETE` | `/api/v1/observability/destinations/{id}` | [Delete an observability destination](https://openrouter.ai/docs/api/api-reference/observability/delete-an-observability-destination.md) |
| `PATCH` | `/api/v1/observability/destinations/{id}` | [Update an observability destination](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination.md) |

### Organization

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/organization/members` | [List organization members](https://openrouter.ai/docs/api/api-reference/organization/list-organization-members.md) |
| `GET` | `/api/v1/organization/settings` | [Get organization settings](https://openrouter.ai/docs/api/api-reference/organization/get-organization-settings.md) |
| `PATCH` | `/api/v1/organization/settings` | [Update organization settings](https://openrouter.ai/docs/api/api-reference/organization/update-organization-settings.md) |

### Presets

| Method | Route | Reference |
| - | - | - |
| `POST` | `/api/v1/presets/{slug}/chat/completions` | [Create a preset from a chat-completions request body](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body.md) |
| `POST` | `/api/v1/presets/{slug}/messages` | [Create a preset from a messages request body](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body.md) |
| `POST` | `/api/v1/presets/{slug}/responses` | [Create a preset from a responses request body](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body.md) |

### Private Endpoints

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/private-endpoints` | [List private endpoints](https://openrouter.ai/docs/api/api-reference/private-endpoints/list-private-endpoints.md) |
| `POST` | `/api/v1/private-endpoints` | [Create a private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint.md) |
| `GET` | `/api/v1/private-endpoints/{id}` | [Get a private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint.md) |
| `DELETE` | `/api/v1/private-endpoints/{id}` | [Delete a private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/delete-a-private-endpoint.md) |
| `PATCH` | `/api/v1/private-endpoints/{id}` | [Update a private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint.md) |
| `POST` | `/api/v1/private-endpoints/{id}/activate` | [Activate a validated private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/activate-a-validated-private-endpoint.md) |
| `POST` | `/api/v1/private-endpoints/{id}/disable` | [Disable a private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/disable-a-private-endpoint.md) |
| `POST` | `/api/v1/private-endpoints/{id}/enable` | [Enable a private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/enable-a-private-endpoint.md) |
| `POST` | `/api/v1/private-endpoints/{id}/validate` | [Validate a draft private endpoint](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint.md) |

### Private Providers

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/private-providers` | [List private providers](https://openrouter.ai/docs/api/api-reference/private-providers/list-private-providers.md) |
| `POST` | `/api/v1/private-providers` | [Create a private provider](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider.md) |
| `GET` | `/api/v1/private-providers/{slug}` | [Get a private provider](https://openrouter.ai/docs/api/api-reference/private-providers/get-a-private-provider.md) |
| `DELETE` | `/api/v1/private-providers/{slug}` | [Delete a private provider](https://openrouter.ai/docs/api/api-reference/private-providers/delete-a-private-provider.md) |
| `PATCH` | `/api/v1/private-providers/{slug}` | [Update a private provider](https://openrouter.ai/docs/api/api-reference/private-providers/update-a-private-provider.md) |

### SCIM

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/scim/group-mappings` | [List SCIM group mappings](https://openrouter.ai/docs/api/api-reference/scim/list-scim-group-mappings.md) |
| `POST` | `/api/v1/scim/group-mappings` | [Create a SCIM group mapping](https://openrouter.ai/docs/api/api-reference/scim/create-a-scim-group-mapping.md) |
| `GET` | `/api/v1/scim/group-mappings/{id}` | [Get a SCIM group mapping](https://openrouter.ai/docs/api/api-reference/scim/get-a-scim-group-mapping.md) |
| `DELETE` | `/api/v1/scim/group-mappings/{id}` | [Delete a SCIM group mapping](https://openrouter.ai/docs/api/api-reference/scim/delete-a-scim-group-mapping.md) |
| `PATCH` | `/api/v1/scim/group-mappings/{id}` | [Update a SCIM group mapping](https://openrouter.ai/docs/api/api-reference/scim/update-a-scim-group-mapping.md) |
| `GET` | `/api/v1/scim/groups` | [List SCIM groups](https://openrouter.ai/docs/api/api-reference/scim/list-scim-groups.md) |
| `POST` | `/api/v1/scim/sync-jobs` | [Start a SCIM directory sync](https://openrouter.ai/docs/api/api-reference/scim/start-a-scim-directory-sync.md) |
| `GET` | `/api/v1/scim/sync-jobs/{id}` | [Get SCIM directory sync status](https://openrouter.ai/docs/api/api-reference/scim/get-scim-directory-sync-status.md) |

### Workspaces

| Method | Route | Reference |
| - | - | - |
| `GET` | `/api/v1/workspaces` | [List workspaces](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces.md) |
| `POST` | `/api/v1/workspaces` | [Create a workspace](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace.md) |
| `GET` | `/api/v1/workspaces/{id}` | [Get a workspace](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace.md) |
| `DELETE` | `/api/v1/workspaces/{id}` | [Delete a workspace](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace.md) |
| `PATCH` | `/api/v1/workspaces/{id}` | [Update a workspace](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace.md) |
| `GET` | `/api/v1/workspaces/{id}/members` | [List workspace members](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-members.md) |
| `POST` | `/api/v1/workspaces/{id}/members/add` | [Bulk add members to a workspace](https://openrouter.ai/docs/api/api-reference/workspaces/bulk-add-members-to-a-workspace.md) |
| `POST` | `/api/v1/workspaces/{id}/members/remove` | [Bulk remove members from a workspace](https://openrouter.ai/docs/api/api-reference/workspaces/bulk-remove-members-from-a-workspace.md) |
| `GET` | `/api/v1/workspaces/{workspace_ref}/budgets` | [List workspace budgets](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-budgets.md) |
| `GET` | `/api/v1/workspaces/{workspace_ref}/budgets/{interval}` | [Get a workspace budget](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace-budget.md) |
| `PUT` | `/api/v1/workspaces/{workspace_ref}/budgets/{interval}` | [Create or update a workspace budget](https://openrouter.ai/docs/api/api-reference/workspaces/create-or-update-a-workspace-budget.md) |
| `DELETE` | `/api/v1/workspaces/{workspace_ref}/budgets/{interval}` | [Delete a workspace budget](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace-budget.md) |
