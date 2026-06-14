> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# ListsClient

## ListsClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for lists operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `add_member`

Add List member
Adds a User to a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List for which to add a member.
</ParamField>

<ParamField path="body.body" type="AddMemberRequest">
  Request body
</ParamField>

### `create`

Create List
Creates a new List for the authenticated user.
body: Request body
:returns: Response data
:rtype: CreateResponse

#### Parameters

<ParamField path="body.body" type="CreateRequest" />

### `delete`

Delete List
Deletes a specific List owned by the authenticated user by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List to delete.
</ParamField>

#### Returns

`DeleteResponse` - Response data

### `get_by_id`

Get List by ID
Retrieves details of a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List.
</ParamField>

<ParamField path="path.list_fields" type="List or None" default="None">
  A comma separated list of List fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

#### Returns

`GetByIdResponse` - Response data

### `get_followers`

Get List followers
Retrieves a list of Users who follow a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
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

`IteratorGetFollowersResponse`

### `get_members`

Get List members
Retrieves a list of Users who are members of a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
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

`IteratorGetMembersResponse`

### `get_posts`

Get List Posts
Retrieves a list of Posts associated with a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results.
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

`IteratorGetPostsResponse`

### `remove_member_by_user_id`

Remove List member
Removes a User from a specific List by its ID and the User’s ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List to remove a member.
</ParamField>

<ParamField path="path.user_id" type="Any">
  The ID of User that will be removed from the List.
</ParamField>

#### Returns

`RemoveMemberByUserIdResponse` - Response data

### `update`

Update List
Updates the details of a specific List owned by the authenticated user by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the List to modify.
</ParamField>

<ParamField path="body.body" type="UpdateRequest">
  Request body
</ParamField>
