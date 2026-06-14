> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# AccountActivityClient

## Submodules

* [xdk.account\_activity.client module](/xdks/python/reference/xdk.account_activity.client)
  * [`AccountActivityClient`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient)
    * [`AccountActivityClient.__init__()`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient.__init__)
    * [`AccountActivityClient.create_replay_job()`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient.create_replay_job)
    * [`AccountActivityClient.create_subscription()`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient.create_subscription)
    * [`AccountActivityClient.delete_subscription()`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient.delete_subscription)
    * [`AccountActivityClient.get_subscription_count()`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient.get_subscription_count)
    * [`AccountActivityClient.get_subscriptions()`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient.get_subscriptions)
    * [`AccountActivityClient.validate_subscription()`](/xdks/python/reference/xdk.account_activity.client#xdk.account_activity.client.AccountActivityClient.validate_subscription)
* [xdk.account\_activity.models module](/xdks/python/reference/xdk.account_activity.models)
  * [`CreateReplayJobResponse`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.CreateReplayJobResponse)
    * [`CreateReplayJobResponse.model_config`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.CreateReplayJobResponse.model_config)
  * [`CreateSubscriptionRequest`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.CreateSubscriptionRequest)
    * [`CreateSubscriptionRequest.model_config`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.CreateSubscriptionRequest.model_config)
  * [`CreateSubscriptionResponse`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.CreateSubscriptionResponse)
    * [`CreateSubscriptionResponse.model_config`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.CreateSubscriptionResponse.model_config)
  * [`DeleteSubscriptionResponse`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.DeleteSubscriptionResponse)
    * [`DeleteSubscriptionResponse.model_config`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.DeleteSubscriptionResponse.model_config)
  * [`GetSubscriptionCountResponse`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.GetSubscriptionCountResponse)
    * [`GetSubscriptionCountResponse.model_config`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.GetSubscriptionCountResponse.model_config)
  * [`GetSubscriptionsResponse`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.GetSubscriptionsResponse)
    * [`GetSubscriptionsResponse.model_config`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.GetSubscriptionsResponse.model_config)
  * [`ValidateSubscriptionResponse`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.ValidateSubscriptionResponse)
    * [`ValidateSubscriptionResponse.model_config`](/xdks/python/reference/xdk.account_activity.models#xdk.account_activity.models.ValidateSubscriptionResponse.model_config)

## Module contents

This module provides access to the account activity endpoints of the X API
and serves as the main entry point for all account activity-related functionality.

### `class xdk.account_activity.AccountActivityClient`

Client for account activity operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `create_replay_job`

Create replay job
Creates a replay job to retrieve activities from up to the past 5 days for all subscriptions associated with a given webhook.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The unique identifier for the webhook configuration.
</ParamField>

<ParamField path="path.from_date" type="str">
  The oldest (starting) UTC timestamp (inclusive) from which events will be provided, in yyyymmddhhmm format.
</ParamField>

<ParamField path="path.to_date" type="str">
  The latest (ending) UTC timestamp (exclusive) up to which events will be provided, in yyyymmddhhmm format.
</ParamField>

#### Returns

`CreateReplayJobResponse` - Response data

### `create_subscription`

Create subscription
Creates an Account Activity subscription for the user and the given webhook.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The webhook ID to check subscription against.
</ParamField>

<ParamField path="body.body" type="CreateSubscriptionRequest">
  Request body
</ParamField>

### `delete_subscription`

Delete subscription
Deletes an Account Activity subscription for the given webhook and user ID.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The webhook ID to check subscription against.
</ParamField>

<ParamField path="path.user_id" type="Any">
  User ID to unsubscribe from.
</ParamField>

#### Returns

`DeleteSubscriptionResponse` - Response data

### `get_subscription_count`

Get subscription count
Retrieves a count of currently active Account Activity subscriptions.
:returns: Response data
:rtype: GetSubscriptionCountResponse

#### Returns

`GetSubscriptionCountResponse`

### `get_subscriptions`

Get subscriptions
Retrieves a list of all active subscriptions for a given webhook.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The webhook ID to pull subscriptions for.
</ParamField>

#### Returns

`GetSubscriptionsResponse` - Response data

### `validate_subscription`

Validate subscription
Checks a user’s Account Activity subscription for a given webhook.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The webhook ID to check subscription against.
</ParamField>

#### Returns

`ValidateSubscriptionResponse` - Response data
