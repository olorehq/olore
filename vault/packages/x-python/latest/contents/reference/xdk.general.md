> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# GeneralClient

## Submodules

* [xdk.general.client module](/xdks/python/reference/xdk.general.client)
  * [`GeneralClient`](/xdks/python/reference/xdk.general.client#xdk.general.client.GeneralClient)
    * [`GeneralClient.__init__()`](/xdks/python/reference/xdk.general.client#xdk.general.client.GeneralClient.__init__)
    * [`GeneralClient.get_open_api_spec()`](/xdks/python/reference/xdk.general.client#xdk.general.client.GeneralClient.get_open_api_spec)
* [xdk.general.models module](/xdks/python/reference/xdk.general.models)
  * [`GetOpenApiSpecResponse`](/xdks/python/reference/xdk.general.models#xdk.general.models.GetOpenApiSpecResponse)
    * [`GetOpenApiSpecResponse.model_config`](/xdks/python/reference/xdk.general.models#xdk.general.models.GetOpenApiSpecResponse.model_config)

## Module contents

This module provides access to the general endpoints of the X API
and serves as the main entry point for all general-related functionality.

### `class xdk.general.GeneralClient`

Client for general operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get_open_api_spec`

Get OpenAPI Spec.
Retrieves the full OpenAPI Specification in JSON format. (See [https://github.com/OAI/OpenAPI-Specification/blob/master/README.md](https://github.com/OAI/OpenAPI-Specification/blob/master/README.md))
:returns: Response data
:rtype: GetOpenApiSpecResponse

#### Returns

`GetOpenApiSpecResponse`
