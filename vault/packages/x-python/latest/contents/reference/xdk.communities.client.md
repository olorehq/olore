> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# CommunitiesClient

## CommunitiesClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for communities operations

## Constructors

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
