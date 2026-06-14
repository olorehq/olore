> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# CommunitiesClient

## Submodules

* [xdk.communities.client module](/xdks/python/reference/xdk.communities.client)
  * [`CommunitiesClient`](/xdks/python/reference/xdk.communities.client#xdk.communities.client.CommunitiesClient)
    * [`CommunitiesClient.__init__()`](/xdks/python/reference/xdk.communities.client#xdk.communities.client.CommunitiesClient.__init__)
    * [`CommunitiesClient.get_by_id()`](/xdks/python/reference/xdk.communities.client#xdk.communities.client.CommunitiesClient.get_by_id)
    * [`CommunitiesClient.search()`](/xdks/python/reference/xdk.communities.client#xdk.communities.client.CommunitiesClient.search)
* [xdk.communities.models module](/xdks/python/reference/xdk.communities.models)
  * [`GetByIdResponse`](/xdks/python/reference/xdk.communities.models#xdk.communities.models.GetByIdResponse)
    * [`GetByIdResponse.model_config`](/xdks/python/reference/xdk.communities.models#xdk.communities.models.GetByIdResponse.model_config)
  * [`SearchResponse`](/xdks/python/reference/xdk.communities.models#xdk.communities.models.SearchResponse)
    * [`SearchResponse.model_config`](/xdks/python/reference/xdk.communities.models#xdk.communities.models.SearchResponse.model_config)

## Module contents

This module provides access to the communities endpoints of the X API
and serves as the main entry point for all communities-related functionality.

### `class xdk.communities.CommunitiesClient`

Client for communities operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get_by_id`

Get Community by ID
Retrieves details of a specific Community by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the Community.
</ParamField>

<ParamField path="path.community_fields" type="List or None" default="None">
  A comma separated list of Community fields to display.
</ParamField>

#### Returns

`GetByIdResponse` - Response data

### `search`

Search Communities
Retrieves a list of Communities matching the specified search query.

#### Parameters

<ParamField path="path.query" type="str">
  Query to search communities.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of search results to be returned by a request.
</ParamField>

<ParamField path="path.next_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
</ParamField>

<ParamField path="path.community_fields" type="List or None" default="None">
  A comma separated list of Community fields to display.
</ParamField>

#### Returns

`IteratorSearchResponse`
