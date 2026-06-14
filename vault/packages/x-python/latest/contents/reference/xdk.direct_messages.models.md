> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Direct_messages.Models

This module provides Pydantic models for request and response data structures
for the direct messages endpoints of the X API. All models are generated
from the OpenAPI specification and provide type safety and validation.

### class xdk.direct\_messages.models.CreateByConversationIdRequest

Request model for create\_by\_conversation\_id

<ResponseField name="model_config" type="ConfigDict">
  Default: `{'populate_by_name': True, 'validate_by_alias': True, 'validate_by_name': True}`

  Configuration for the model, should be a dictionary conforming to \[ConfigDict]\[pydantic.config.ConfigDict].
</ResponseField>

## CreateByConversationIdResponse

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: BaseModel</Badge>

Response model for create\_by\_conversation\_id

## Methods

### `class xdk.direct_messages.models.CreateByConversationIdResponse`

Response model for create\_by\_conversation\_id

### `class xdk.direct_messages.models.CreateByParticipantIdResponse`

Response model for create\_by\_participant\_id

### `class xdk.direct_messages.models.CreateConversationResponse`

Response model for create\_conversation

### `class xdk.direct_messages.models.DeleteEventsResponse`

Response model for delete\_events

### `class xdk.direct_messages.models.GetEventsByConversationIdResponse`

Response model for get\_events\_by\_conversation\_id

### `class xdk.direct_messages.models.GetEventsByIdResponse`

Response model for get\_events\_by\_id

### `class xdk.direct_messages.models.GetEventsByParticipantIdResponse`

Response model for get\_events\_by\_participant\_id

### `class xdk.direct_messages.models.GetEventsResponse`

Response model for get\_events
