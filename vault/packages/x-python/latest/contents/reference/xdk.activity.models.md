> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Activity.Models

This module provides Pydantic models for request and response data structures
for the activity endpoints of the X API. All models are generated
from the OpenAPI specification and provide type safety and validation.

### class xdk.activity.models.CreateSubscriptionRequest

Request model for create\_subscription

<ResponseField name="model_config" type="ConfigDict">
  Default: `{'populate_by_name': True, 'validate_by_alias': True, 'validate_by_name': True}`

  Configuration for the model, should be a dictionary conforming to \[ConfigDict]\[pydantic.config.ConfigDict].
</ResponseField>

## CreateSubscriptionResponse

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: BaseModel</Badge>

Response model for create\_subscription

## Methods

### `class xdk.activity.models.CreateSubscriptionResponse`

Response model for create\_subscription

### `class xdk.activity.models.DeleteSubscriptionResponse`

Response model for delete\_subscription

### `class xdk.activity.models.GetSubscriptionsResponse`

Response model for get\_subscriptions

### `class xdk.activity.models.StreamResponse`

Response model for stream

### `class xdk.activity.models.UpdateSubscriptionResponse`

Response model for update\_subscription
