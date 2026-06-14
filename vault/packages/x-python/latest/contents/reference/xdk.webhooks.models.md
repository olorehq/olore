> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Webhooks.Models

This module provides Pydantic models for request and response data structures
for the webhooks endpoints of the X API. All models are generated
from the OpenAPI specification and provide type safety and validation.

### class xdk.webhooks.models.CreateRequest

Request model for create

<ResponseField name="model_config" type="ConfigDict">
  Default: `{'populate_by_name': True, 'validate_by_alias': True, 'validate_by_name': True}`

  Configuration for the model, should be a dictionary conforming to \[ConfigDict]\[pydantic.config.ConfigDict].
</ResponseField>

## CreateResponse

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: BaseModel</Badge>

Response model for create

## Methods

### `class xdk.webhooks.models.CreateResponse`

Response model for create

### `class xdk.webhooks.models.CreateStreamLinkResponse`

Response model for create\_stream\_link

### `class xdk.webhooks.models.CreateWebhookReplayJobResponse`

Response model for create\_webhook\_replay\_job

### `class xdk.webhooks.models.DeleteResponse`

Response model for delete

### `class xdk.webhooks.models.DeleteStreamLinkResponse`

Response model for delete\_stream\_link

### `class xdk.webhooks.models.GetResponse`

Response model for get

### `class xdk.webhooks.models.GetStreamLinksResponse`

Response model for get\_stream\_links

### `class xdk.webhooks.models.ValidateResponse`

Response model for validate
