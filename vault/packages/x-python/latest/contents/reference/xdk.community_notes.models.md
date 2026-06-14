> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Community_notes.Models

This module provides Pydantic models for request and response data structures
for the community notes endpoints of the X API. All models are generated
from the OpenAPI specification and provide type safety and validation.

### class xdk.community\_notes.models.CreateRequest

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

### `class xdk.community_notes.models.CreateResponse`

Response model for create

### `class xdk.community_notes.models.DeleteResponse`

Response model for delete

### `class xdk.community_notes.models.EvaluateResponse`

Response model for evaluate

### `class xdk.community_notes.models.SearchEligiblePostsResponse`

Response model for search\_eligible\_posts

### `class xdk.community_notes.models.SearchWrittenResponse`

Response model for search\_written
