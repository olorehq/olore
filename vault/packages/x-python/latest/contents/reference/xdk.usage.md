> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# UsageClient

## Submodules

* [xdk.usage.client module](/xdks/python/reference/xdk.usage.client)
  * [`UsageClient`](/xdks/python/reference/xdk.usage.client#xdk.usage.client.UsageClient)
    * [`UsageClient.__init__()`](/xdks/python/reference/xdk.usage.client#xdk.usage.client.UsageClient.__init__)
    * [`UsageClient.get()`](/xdks/python/reference/xdk.usage.client#xdk.usage.client.UsageClient.get)
* [xdk.usage.models module](/xdks/python/reference/xdk.usage.models)
  * [`GetResponse`](/xdks/python/reference/xdk.usage.models#xdk.usage.models.GetResponse)
    * [`GetResponse.model_config`](/xdks/python/reference/xdk.usage.models#xdk.usage.models.GetResponse.model_config)

## Module contents

This module provides access to the usage endpoints of the X API
and serves as the main entry point for all usage-related functionality.

### `class xdk.usage.UsageClient`

Client for usage operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get`

Get usage
Retrieves usage statistics for Posts over a specified number of days.

#### Parameters

<ParamField path="path.days" type="int or None" default="None">
  The number of days for which you need usage for.
</ParamField>

<ParamField path="path.usage_fields" type="List or None" default="None">
  A comma separated list of Usage fields to display.
</ParamField>

#### Returns

`GetResponse` - Response data
