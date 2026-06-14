> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# ListsClient

## Submodules

* [xdk.lists.client module](/xdks/python/reference/xdk.lists.client)
  * [`ListsClient`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient)
    * [`ListsClient.__init__()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.__init__)
    * [`ListsClient.add_member()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.add_member)
    * [`ListsClient.create()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.create)
    * [`ListsClient.delete()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.delete)
    * [`ListsClient.get_by_id()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.get_by_id)
    * [`ListsClient.get_followers()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.get_followers)
    * [`ListsClient.get_members()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.get_members)
    * [`ListsClient.get_posts()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.get_posts)
    * [`ListsClient.remove_member_by_user_id()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.remove_member_by_user_id)
    * [`ListsClient.update()`](/xdks/python/reference/xdk.lists.client#xdk.lists.client.ListsClient.update)
* [xdk.lists.models module](/xdks/python/reference/xdk.lists.models)
  * [`AddMemberRequest`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.AddMemberRequest)
    * [`AddMemberRequest.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.AddMemberRequest.model_config)
  * [`AddMemberResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.AddMemberResponse)
    * [`AddMemberResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.AddMemberResponse.model_config)
  * [`CreateRequest`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.CreateRequest)
    * [`CreateRequest.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.CreateRequest.model_config)
  * [`CreateResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.CreateResponse)
    * [`CreateResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.CreateResponse.model_config)
  * [`DeleteResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.DeleteResponse)
    * [`DeleteResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.DeleteResponse.model_config)
  * [`GetByIdResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetByIdResponse)
    * [`GetByIdResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetByIdResponse.model_config)
  * [`GetFollowersResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetFollowersResponse)
    * [`GetFollowersResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetFollowersResponse.model_config)
  * [`GetMembersResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetMembersResponse)
    * [`GetMembersResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetMembersResponse.model_config)
  * [`GetPostsResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetPostsResponse)
    * [`GetPostsResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.GetPostsResponse.model_config)
  * [`RemoveMemberByUserIdResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.RemoveMemberByUserIdResponse)
    * [`RemoveMemberByUserIdResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.RemoveMemberByUserIdResponse.model_config)
  * [`UpdateRequest`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.UpdateRequest)
    * [`UpdateRequest.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.UpdateRequest.model_config)
  * [`UpdateResponse`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.UpdateResponse)
    * [`UpdateResponse.model_config`](/xdks/python/reference/xdk.lists.models#xdk.lists.models.UpdateResponse.model_config)

## Module contents

This module provides access to the lists endpoints of the X API
and serves as the main entry point for all lists-related functionality.

### `class xdk.lists.ListsClient`

Client for lists operations

#### Parameters

<ParamField path="path.client" type="Client" />

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
