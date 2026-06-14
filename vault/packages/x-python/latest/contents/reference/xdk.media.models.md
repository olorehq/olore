> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Media.Models

This module provides Pydantic models for request and response data structures
for the media endpoints of the X API. All models are generated
from the OpenAPI specification and provide type safety and validation.

### class xdk.media.models.AppendUploadRequest

Request model for append\_upload

<ResponseField name="model_config" type="ConfigDict">
  Default: `{'populate_by_name': True, 'validate_by_alias': True, 'validate_by_name': True}`

  Configuration for the model, should be a dictionary conforming to \[ConfigDict]\[pydantic.config.ConfigDict].
</ResponseField>

## AppendUploadResponse

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: BaseModel</Badge>

Response model for append\_upload

## Methods

### `class xdk.media.models.AppendUploadResponse`

Response model for append\_upload

### `class xdk.media.models.CreateMetadataResponse`

Response model for create\_metadata

### `class xdk.media.models.CreateSubtitlesResponse`

Response model for create\_subtitles

### `class xdk.media.models.DeleteSubtitlesResponse`

Response model for delete\_subtitles

### `class xdk.media.models.FinalizeUploadResponse`

Response model for finalize\_upload

### `class xdk.media.models.GetAnalyticsResponse`

Response model for get\_analytics

### `class xdk.media.models.GetByKeyResponse`

Response model for get\_by\_key

### `class xdk.media.models.GetByKeysResponse`

Response model for get\_by\_keys

### `class xdk.media.models.GetUploadStatusResponse`

Response model for get\_upload\_status

### `class xdk.media.models.InitializeUploadResponse`

Response model for initialize\_upload

### `class xdk.media.models.UploadResponse`

Response model for upload
