> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# AccountActivityClient

## AccountActivityClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for account activity operations

## Constructors

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
