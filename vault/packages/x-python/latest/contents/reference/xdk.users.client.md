> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# UsersClient

## UsersClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for users operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `block_dms`

Block DMs
Blocks direct messages to or from a specific User by their ID for the authenticated user.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the target User that the authenticated user requesting to block dms for.
</ParamField>

#### Returns

`BlockDmsResponse` - Response data

### `create_bookmark`

Create Bookmark
Adds a post to the authenticated user’s bookmarks.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to add bookmarks.
</ParamField>

<ParamField path="body.body" type="CreateBookmarkRequest">
  Request body
</ParamField>

### `delete_bookmark`

Delete Bookmark
Removes a Post from the authenticated user’s Bookmarks by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User whose bookmark is to be removed.
</ParamField>

<ParamField path="path.tweet_id" type="Any">
  The ID of the Post that the source User is removing from bookmarks.
</ParamField>

#### Returns

`DeleteBookmarkResponse` - Response data

### `follow_list`

Follow List
Causes the authenticated user to follow a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that will follow the List.
</ParamField>

<ParamField path="body.body" type="FollowListRequest">
  Request body
</ParamField>

### `follow_user`

Follow User
Causes the authenticated user to follow a specific user by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that is requesting to follow the target User.
</ParamField>

<ParamField path="body.body" type="FollowUserRequest">
  Request body
</ParamField>

### `get_blocking`

Get blocking
Retrieves a list of Users blocked by the specified User ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to return results.
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

`IteratorGetBlockingResponse`

### `get_bookmark_folders`

Get Bookmark folders
Retrieves a list of Bookmark folders created by the authenticated user.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to return results.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results.
</ParamField>

#### Returns

`IteratorGetBookmarkFoldersResponse`

### `get_bookmarks`

Get Bookmarks
Retrieves a list of Posts bookmarked by the authenticated user.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to return results.
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

`IteratorGetBookmarksResponse`

### `get_bookmarks_by_folder_id`

Get Bookmarks by folder ID
Retrieves Posts in a specific Bookmark folder by its ID for the authenticated user.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to return results.
</ParamField>

<ParamField path="path.folder_id" type="Any">
  The ID of the Bookmark Folder that the authenticated User is trying to fetch Posts for.
</ParamField>

#### Returns

`GetBookmarksByFolderIdResponse` - Response data

### `get_by_id`

Get User by ID
Retrieves details of a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
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

`GetByIdResponse` - Response data

### `get_by_ids`

Get Users by IDs
Retrieves details of multiple Users by their IDs.

#### Parameters

<ParamField path="path.ids" type="List">
  A list of User IDs, comma-separated. You can specify up to 100 IDs.
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

`GetByIdsResponse` - Response data

### `get_by_username`

Get User by username
Retrieves details of a specific User by their username.

#### Parameters

<ParamField path="path.username" type="str">
  A username.
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

`GetByUsernameResponse` - Response data

### `get_by_usernames`

Get Users by usernames
Retrieves details of multiple Users by their usernames.

#### Parameters

<ParamField path="path.usernames" type="List">
  A list of usernames, comma-separated.
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

`GetByUsernamesResponse` - Response data

### `get_followed_lists`

Get followed Lists
Retrieves a list of Lists followed by a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
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

`IteratorGetFollowedListsResponse`

### `get_followers`

Get followers
Retrieves a list of Users who follow a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
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

### `get_following`

Get following
Retrieves a list of Users followed by a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
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

`IteratorGetFollowingResponse`

### `get_liked_posts`

Get liked Posts
Retrieves a list of Posts liked by a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
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

`IteratorGetLikedPostsResponse`

### `get_list_memberships`

Get List memberships
Retrieves a list of Lists that a specific User is a member of by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
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

`IteratorGetListMembershipsResponse`

### `get_me`

Get my User
Retrieves details of the authenticated user.

#### Parameters

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

`GetMeResponse` - Response data

### `get_mentions`

Get mentions
Retrieves a list of Posts that mention a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
</ParamField>

<ParamField path="path.since_id" type="Any or None" default="None">
  The minimum Post ID to be included in the result set. This parameter takes precedence over start\_time if both are specified.
</ParamField>

<ParamField path="path.until_id" type="Any or None" default="None">
  The maximum Post ID to be included in the result set. This parameter takes precedence over end\_time if both are specified.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since\_id parameter takes precedence if it is also specified.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until\_id parameter takes precedence if it is also specified.
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

`IteratorGetMentionsResponse`

### `get_muting`

Get muting
Retrieves a list of Users muted by the authenticated user.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to return results.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results.
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

`IteratorGetMutingResponse`

### `get_owned_lists`

Get owned Lists
Retrieves a list of Lists owned by a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
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

`IteratorGetOwnedListsResponse`

### `get_pinned_lists`

Get pinned Lists
Retrieves a list of Lists pinned by the authenticated user.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to return results.
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

`GetPinnedListsResponse` - Response data

### `get_posts`

Get Posts
Retrieves a list of posts authored by a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the User to lookup.
</ParamField>

<ParamField path="path.since_id" type="Any or None" default="None">
  The minimum Post ID to be included in the result set. This parameter takes precedence over start\_time if both are specified.
</ParamField>

<ParamField path="path.until_id" type="Any or None" default="None">
  The maximum Post ID to be included in the result set. This parameter takes precedence over end\_time if both are specified.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results.
</ParamField>

<ParamField path="path.exclude" type="List or None" default="None">
  The set of entities to exclude (e.g. ‘replies’ or ‘retweets’).
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since\_id parameter takes precedence if it is also specified.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until\_id parameter takes precedence if it is also specified.
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

### `get_reposts_of_me`

Get Reposts of me
Retrieves a list of Posts that repost content from the authenticated user.

#### Parameters

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

`IteratorGetRepostsOfMeResponse`

### `get_timeline`

Get Timeline
Retrieves a reverse chronological list of Posts in the authenticated User’s Timeline.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User to list Reverse Chronological Timeline Posts of.
</ParamField>

<ParamField path="path.since_id" type="Any or None" default="None">
  The minimum Post ID to be included in the result set. This parameter takes precedence over start\_time if both are specified.
</ParamField>

<ParamField path="path.until_id" type="Any or None" default="None">
  The maximum Post ID to be included in the result set. This parameter takes precedence over end\_time if both are specified.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results.
</ParamField>

<ParamField path="path.exclude" type="List or None" default="None">
  The set of entities to exclude (e.g. ‘replies’ or ‘retweets’).
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since\_id parameter takes precedence if it is also specified.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until\_id parameter takes precedence if it is also specified.
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

`IteratorGetTimelineResponse`

### `like_post`

Like Post
Causes the authenticated user to Like a specific Post by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that is requesting to like the Post.
</ParamField>

<ParamField path="body.body" type="LikePostRequest">
  Request body
</ParamField>

### `mute_user`

Mute User
Causes the authenticated user to mute a specific User by their ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that is requesting to mute the target User.
</ParamField>

<ParamField path="body.body" type="MuteUserRequest">
  Request body
</ParamField>

### `pin_list`

Pin List
Causes the authenticated user to pin a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that will pin the List.
</ParamField>

<ParamField path="body.body" type="PinListRequest">
  Request body
</ParamField>

### `repost_post`

Repost Post
Causes the authenticated user to repost a specific Post by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that is requesting to repost the Post.
</ParamField>

<ParamField path="body.body" type="RepostPostRequest">
  Request body
</ParamField>

### `search`

Search Users
Retrieves a list of Users matching a search query.

#### Parameters

<ParamField path="path.query" type="Any">
  TThe the query string by which to query for users.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.next_token" type="Any or None" default="None">
  This parameter is used to get the next ‘page’ of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
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

`IteratorSearchResponse`

### `unblock_dms`

Unblock DMs
Unblocks direct messages to or from a specific User by their ID for the authenticated user.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the target User that the authenticated user requesting to unblock dms for.
</ParamField>

#### Returns

`UnblockDmsResponse` - Response data

### `unfollow_list`

Unfollow List
Causes the authenticated user to unfollow a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that will unfollow the List.
</ParamField>

<ParamField path="path.list_id" type="Any">
  The ID of the List to unfollow.
</ParamField>

#### Returns

`UnfollowListResponse` - Response data

### `unfollow_user`

Unfollow User
Causes the authenticated user to unfollow a specific user by their ID.

#### Parameters

<ParamField path="path.source_user_id" type="Any">
  The ID of the authenticated source User that is requesting to unfollow the target User.
</ParamField>

<ParamField path="path.target_user_id" type="Any">
  The ID of the User that the source User is requesting to unfollow.
</ParamField>

#### Returns

`UnfollowUserResponse` - Response data

### `unlike_post`

Unlike Post
Causes the authenticated user to Unlike a specific Post by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that is requesting to unlike the Post.
</ParamField>

<ParamField path="path.tweet_id" type="Any">
  The ID of the Post that the User is requesting to unlike.
</ParamField>

#### Returns

`UnlikePostResponse` - Response data

### `unmute_user`

Unmute User
Causes the authenticated user to unmute a specific user by their ID.

#### Parameters

<ParamField path="path.source_user_id" type="Any">
  The ID of the authenticated source User that is requesting to unmute the target User.
</ParamField>

<ParamField path="path.target_user_id" type="Any">
  The ID of the User that the source User is requesting to unmute.
</ParamField>

#### Returns

`UnmuteUserResponse` - Response data

### `unpin_list`

Unpin List
Causes the authenticated user to unpin a specific List by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User for whom to return results.
</ParamField>

<ParamField path="path.list_id" type="Any">
  The ID of the List to unpin.
</ParamField>

#### Returns

`UnpinListResponse` - Response data

### `unrepost_post`

Unrepost Post
Causes the authenticated user to unrepost a specific Post by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the authenticated source User that is requesting to repost the Post.
</ParamField>

<ParamField path="path.source_tweet_id" type="Any">
  The ID of the Post that the User is requesting to unretweet.
</ParamField>

#### Returns

`UnrepostPostResponse` - Response data
