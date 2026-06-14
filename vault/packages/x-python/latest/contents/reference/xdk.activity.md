> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# ActivityClient

## Submodules

* [xdk.activity.client module](/xdks/python/reference/xdk.activity.client)
  * [`ActivityClient`](/xdks/python/reference/xdk.activity.client#xdk.activity.client.ActivityClient)
    * [`ActivityClient.__init__()`](/xdks/python/reference/xdk.activity.client#xdk.activity.client.ActivityClient.__init__)
    * [`ActivityClient.create_subscription()`](/xdks/python/reference/xdk.activity.client#xdk.activity.client.ActivityClient.create_subscription)
    * [`ActivityClient.delete_subscription()`](/xdks/python/reference/xdk.activity.client#xdk.activity.client.ActivityClient.delete_subscription)
    * [`ActivityClient.get_subscriptions()`](/xdks/python/reference/xdk.activity.client#xdk.activity.client.ActivityClient.get_subscriptions)
    * [`ActivityClient.stream()`](/xdks/python/reference/xdk.activity.client#xdk.activity.client.ActivityClient.stream)
    * [`ActivityClient.update_subscription()`](/xdks/python/reference/xdk.activity.client#xdk.activity.client.ActivityClient.update_subscription)
* [xdk.activity.models module](/xdks/python/reference/xdk.activity.models)
  * [`CreateSubscriptionRequest`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.CreateSubscriptionRequest)
    * [`CreateSubscriptionRequest.model_config`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.CreateSubscriptionRequest.model_config)
  * [`CreateSubscriptionResponse`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.CreateSubscriptionResponse)
    * [`CreateSubscriptionResponse.model_config`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.CreateSubscriptionResponse.model_config)
  * [`DeleteSubscriptionResponse`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.DeleteSubscriptionResponse)
    * [`DeleteSubscriptionResponse.model_config`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.DeleteSubscriptionResponse.model_config)
  * [`GetSubscriptionsResponse`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.GetSubscriptionsResponse)
    * [`GetSubscriptionsResponse.model_config`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.GetSubscriptionsResponse.model_config)
  * [`StreamResponse`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.StreamResponse)
    * [`StreamResponse.model_config`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.StreamResponse.model_config)
  * [`UpdateSubscriptionRequest`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.UpdateSubscriptionRequest)
    * [`UpdateSubscriptionRequest.model_config`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.UpdateSubscriptionRequest.model_config)
  * [`UpdateSubscriptionResponse`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.UpdateSubscriptionResponse)
    * [`UpdateSubscriptionResponse.model_config`](/xdks/python/reference/xdk.activity.models#xdk.activity.models.UpdateSubscriptionResponse.model_config)

## Module contents

This module provides access to the activity endpoints of the X API
and serves as the main entry point for all activity-related functionality.

### `class xdk.activity.ActivityClient`

Streaming Client for activity operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `create_subscription`

Create X activity subscription
Creates a subscription for an X activity event
body: Request body
:returns: Response data
:rtype: CreateSubscriptionResponse

#### Parameters

<ParamField path="body.body" type="CreateSubscriptionRequest" />

### `delete_subscription`

Deletes X activity subscription
Deletes a subscription for an X activity event

#### Parameters

<ParamField path="path.subscription_id" type="Any">
  The ID of the subscription to delete.
</ParamField>

#### Returns

`DeleteSubscriptionResponse` - Response data

### `get_subscriptions`

Get X activity subscriptions
Get a list of active subscriptions for XAA
:returns: Response data
:rtype: GetSubscriptionsResponse

#### Returns

`GetSubscriptionsResponse`

### `stream`

Activity Stream (Streaming)
Stream of X Activities
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post labels will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Post labels will be provided.
</ParamField>

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `update_subscription`

Update X activity subscription
Updates a subscription for an X activity event

#### Parameters

<ParamField path="path.subscription_id" type="Any">
  The ID of the subscription to update.
</ParamField>

<ParamField path="body.body" type="UpdateSubscriptionRequest">
  Request body
</ParamField>
