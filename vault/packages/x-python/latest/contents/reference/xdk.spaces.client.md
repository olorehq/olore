> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# SpacesClient

## SpacesClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for spaces operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get_buyers`

Get Space ticket buyers
Retrieves a list of Users who purchased tickets to a specific Space by its ID.

#### Parameters

<ParamField path="path.id" type="str">
  The ID of the Space to be retrieved.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

#### Returns

`IteratorGetBuyersResponse`

### `get_by_creator_ids`

Get Spaces by creator IDs
Retrieves details of Spaces created by specified User IDs.

#### Parameters

<ParamField path="path.user_ids" type="List">
  The IDs of Users to search through.
</ParamField>

<ParamField path="path.space_fields" type="List or None" default="None">
  A comma separated list of Space fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.topic_fields" type="List or None" default="None">
  A comma separated list of Topic fields to display.
</ParamField>

#### Returns

`GetByCreatorIdsResponse` - Response data

### `get_by_id`

Get space by ID
Retrieves details of a specific space by its ID.

#### Parameters

<ParamField path="path.id" type="str">
  The ID of the Space to be retrieved.
</ParamField>

<ParamField path="path.space_fields" type="List or None" default="None">
  A comma separated list of Space fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.topic_fields" type="List or None" default="None">
  A comma separated list of Topic fields to display.
</ParamField>

#### Returns

`GetByIdResponse` - Response data

### `get_by_ids`

Get Spaces by IDs
Retrieves details of multiple Spaces by their IDs.

#### Parameters

<ParamField path="path.ids" type="List">
  The list of Space IDs to return.
</ParamField>

<ParamField path="path.space_fields" type="List or None" default="None">
  A comma separated list of Space fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.topic_fields" type="List or None" default="None">
  A comma separated list of Topic fields to display.
</ParamField>

#### Returns

`GetByIdsResponse` - Response data

### `get_posts`

Get Space Posts
Retrieves a list of Posts shared in a specific Space by its ID.

#### Parameters

<ParamField path="path.id" type="str">
  The ID of the Space to be retrieved.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The number of Posts to fetch from the provided space. If not provided, the value will default to the maximum of 100.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.media_fields" type="List or None" default="None">
  A comma separated list of Media fields to display.
</ParamField>

<ParamField path="path.poll_fields" type="List or None" default="None">
  A comma separated list of Poll fields to display.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.place_fields" type="List or None" default="None">
  A comma separated list of Place fields to display.
</ParamField>

#### Returns

`GetPostsResponse` - Response data

### `search`

Search Spaces
Retrieves a list of Spaces matching the specified search query.

#### Parameters

<ParamField path="path.query" type="str">
  The search query.
</ParamField>

<ParamField path="path.state" type="str or None" default="None">
  The state of Spaces to search for.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The number of results to return.
</ParamField>

<ParamField path="path.space_fields" type="List or None" default="None">
  A comma separated list of Space fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.topic_fields" type="List or None" default="None">
  A comma separated list of Topic fields to display.
</ParamField>

#### Returns

`SearchResponse` - Response data
