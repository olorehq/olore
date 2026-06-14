> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# WebhooksClient

## Submodules

* [xdk.webhooks.client module](/xdks/python/reference/xdk.webhooks.client)
  * [`WebhooksClient`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient)
    * [`WebhooksClient.__init__()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.__init__)
    * [`WebhooksClient.create()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.create)
    * [`WebhooksClient.create_stream_link()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.create_stream_link)
    * [`WebhooksClient.create_webhook_replay_job()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.create_webhook_replay_job)
    * [`WebhooksClient.delete()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.delete)
    * [`WebhooksClient.delete_stream_link()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.delete_stream_link)
    * [`WebhooksClient.get()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.get)
    * [`WebhooksClient.get_stream_links()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.get_stream_links)
    * [`WebhooksClient.validate()`](/xdks/python/reference/xdk.webhooks.client#xdk.webhooks.client.WebhooksClient.validate)
* [xdk.webhooks.models module](/xdks/python/reference/xdk.webhooks.models)
  * [`CreateRequest`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateRequest)
    * [`CreateRequest.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateRequest.model_config)
  * [`CreateResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateResponse)
    * [`CreateResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateResponse.model_config)
  * [`CreateStreamLinkResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateStreamLinkResponse)
    * [`CreateStreamLinkResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateStreamLinkResponse.model_config)
  * [`CreateWebhookReplayJobRequest`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateWebhookReplayJobRequest)
    * [`CreateWebhookReplayJobRequest.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateWebhookReplayJobRequest.model_config)
  * [`CreateWebhookReplayJobResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateWebhookReplayJobResponse)
    * [`CreateWebhookReplayJobResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.CreateWebhookReplayJobResponse.model_config)
  * [`DeleteResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.DeleteResponse)
    * [`DeleteResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.DeleteResponse.model_config)
  * [`DeleteStreamLinkResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.DeleteStreamLinkResponse)
    * [`DeleteStreamLinkResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.DeleteStreamLinkResponse.model_config)
  * [`GetResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.GetResponse)
    * [`GetResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.GetResponse.model_config)
  * [`GetStreamLinksResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.GetStreamLinksResponse)
    * [`GetStreamLinksResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.GetStreamLinksResponse.model_config)
  * [`ValidateResponse`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.ValidateResponse)
    * [`ValidateResponse.model_config`](/xdks/python/reference/xdk.webhooks.models#xdk.webhooks.models.ValidateResponse.model_config)

## Module contents

This module provides access to the webhooks endpoints of the X API
and serves as the main entry point for all webhooks-related functionality.

### `class xdk.webhooks.WebhooksClient`

Client for webhooks operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `create`

Create webhook
Creates a new webhook configuration.
body: Request body
:returns: Response data
:rtype: CreateResponse

#### Parameters

<ParamField path="body.body" type="CreateRequest" />

### `create_stream_link`

Create stream link
Creates a link to deliver FilteredStream events to the given webhook.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The webhook ID to link to your FilteredStream ruleset.
</ParamField>

<ParamField path="path.tweet_fields" type="str or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

<ParamField path="path.expansions" type="str or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.media_fields" type="str or None" default="None">
  A comma separated list of Media fields to display.
</ParamField>

<ParamField path="path.poll_fields" type="str or None" default="None">
  A comma separated list of Poll fields to display.
</ParamField>

<ParamField path="path.user_fields" type="str or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.place_fields" type="str or None" default="None">
  A comma separated list of Place fields to display.
</ParamField>

#### Returns

`CreateStreamLinkResponse` - Response data

### `create_webhook_replay_job`

Create replay job for webhook
Creates a replay job to retrieve events from up to the past 24 hours for all events delivered or attempted to be delivered to the webhook.
body: Request body
:returns: Response data
:rtype: CreateWebhookReplayJobResponse

#### Parameters

<ParamField path="body.body" type="CreateWebhookReplayJobRequest" />

### `delete`

Delete webhook
Deletes an existing webhook configuration.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The ID of the webhook to delete.
</ParamField>

#### Returns

`DeleteResponse` - Response data

### `delete_stream_link`

Delete stream link
Deletes a link from FilteredStream events to the given webhook.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The webhook ID to link to your FilteredStream ruleset.
</ParamField>

#### Returns

`DeleteStreamLinkResponse` - Response data

### `get`

Get webhook
Get a list of webhook configs associated with a client app.

#### Parameters

<ParamField path="path.webhook_config_fields" type="List or None" default="None">
  A comma separated list of WebhookConfig fields to display.
</ParamField>

#### Returns

`GetResponse` - Response data

### `get_stream_links`

Get stream links
Get a list of webhook links associated with a filtered stream ruleset.
:returns: Response data
:rtype: GetStreamLinksResponse

#### Returns

`GetStreamLinksResponse`

### `validate`

Validate webhook
Triggers a CRC check for a given webhook.

#### Parameters

<ParamField path="path.webhook_id" type="Any">
  The ID of the webhook to check.
</ParamField>

#### Returns

`ValidateResponse` - Response data
