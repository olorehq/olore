> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# WebhooksClient

## WebhooksClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for webhooks operations

## Constructors

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
