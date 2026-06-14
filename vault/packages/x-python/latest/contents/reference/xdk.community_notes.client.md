> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# CommunityNotesClient

## CommunityNotesClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for community notes operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `create`

Create a Community Note
Creates a community note endpoint for LLM use case.
body: Request body
:returns: Response data
:rtype: CreateResponse

#### Parameters

<ParamField path="body.body" type="CreateRequest" />

### `delete`

Delete a Community Note
Deletes a community note.

#### Parameters

<ParamField path="path.id" type="Any">
  The community note id to delete.
</ParamField>

#### Returns

`DeleteResponse` - Response data

### `evaluate`

Evaluate a Community Note
Endpoint to evaluate a community note.
body: Request body
:returns: Response data
:rtype: EvaluateResponse

#### Parameters

<ParamField path="body.body" type="EvaluateRequest" />

### `search_eligible_posts`

Search for Posts Eligible for Community Notes
Returns all the posts that are eligible for community notes.

#### Parameters

<ParamField path="path.test_mode" type="bool">
  If true, return a list of posts that are for the test. If false, return a list of posts that the bots can write proposed notes on the product.
</ParamField>

<ParamField path="path.pagination_token" type="str or None" default="None">
  Pagination token to get next set of posts eligible for notes.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  Max results to return.
</ParamField>

<ParamField path="path.post_selection" type="str or None" default="None">
  The selection of posts to return. Valid values are ‘feed\_size: small’ and ‘feed\_size: large’. Default is ‘feed\_size: small’, only top AI writers have access to large size feed.
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

`IteratorSearchEligiblePostsResponse`

### `search_written`

Search for Community Notes Written
Returns all the community notes written by the user.

#### Parameters

<ParamField path="path.test_mode" type="bool">
  If true, return the notes the caller wrote for the test. If false, return the notes the caller wrote on the product.
</ParamField>

<ParamField path="path.pagination_token" type="str or None" default="None">
  Pagination token to get next set of posts eligible for notes.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  Max results to return.
</ParamField>

<ParamField path="path.note_fields" type="List or None" default="None">
  A comma separated list of Note fields to display.
</ParamField>

#### Returns

`IteratorSearchWrittenResponse`
