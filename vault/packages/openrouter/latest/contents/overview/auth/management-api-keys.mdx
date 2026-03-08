***

title: Management API Keys
subtitle: Manage API keys programmatically
headline: Management API Keys | Programmatic Control of OpenRouter API Keys
canonical-url: '[https://openrouter.ai/docs/guides/overview/auth/management-api-keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys)'
'og:site\_name': OpenRouter Documentation
'og:title': Management API Keys - Programmatic Control of OpenRouter API Keys
'og:description': >-
Manage OpenRouter API keys programmatically through dedicated management
endpoints. Create, read, update, and delete API keys for automated key
distribution and control.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=features/management-api-keys\&title=Management%20API%20Keys\&description=Programmatically%20manage%20OpenRouter%20API%20keys](https://openrouter.ai/dynamic-og?pathname=features/management-api-keys\&title=Management%20API%20Keys\&description=Programmatically%20manage%20OpenRouter%20API%20keys)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter provides endpoints to programmatically manage your API keys, enabling key creation and management for applications that need to distribute or rotate keys automatically.

## Creating a Management API Key

To use the key management API, you first need to create a Management API key:

1. Go to the [Management API Keys page](https://openrouter.ai/settings/management-keys)
2. Click "Create New Key"
3. Complete the key creation process

Management keys cannot be used to make API calls to OpenRouter's completion endpoints - they are exclusively for administrative operations.

## Use Cases

Common scenarios for programmatic key management include:

* **SaaS Applications**: Automatically create unique API keys for each customer instance
* **Key Rotation**: Regularly rotate API keys for security compliance
* **Usage Monitoring**: Track key usage and automatically disable keys that exceed limits (with optional daily/weekly/monthly limit resets)

## Example Usage

All key management endpoints are under `/api/v1/keys` and require a Management API key in the Authorization header.

<CodeGroup>
  ```typescript title="TypeScript SDK"
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

  ```python title="Python"
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

  ```typescript title="TypeScript (fetch)"
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
</CodeGroup>

## Response Format

API responses return JSON objects containing key information:

```json
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

When creating a new key, the response will include the key string itself. Read more in the [API reference](/docs/api-reference/api-keys/create-api-key).
