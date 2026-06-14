> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# StreamClient

This module provides a client for interacting with the stream endpoints of the X API.
Real-time streaming operations return generators that yield data as it arrives.
Streaming connections are automatically managed with exponential backoff retry logic for robust handling.

## StreamClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Streaming Client for stream operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get_rule_counts`

Get stream rule counts
Retrieves the count of rules in the active rule set for the filtered stream.

#### Parameters

<ParamField path="path.rules_count_fields" type="List or None" default="None">
  A comma separated list of RulesCount fields to display.
</ParamField>

#### Returns

`GetRuleCountsResponse` - Response data

### `get_rules`

Get stream rules
Retrieves the active rule set or a subset of rules for the filtered stream.

#### Parameters

<ParamField path="path.ids" type="List or None" default="None">
  A comma-separated list of Rule IDs.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="str or None" default="None">
  This value is populated by passing the ‘next\_token’ returned in a request to paginate through results.
</ParamField>

#### Returns

`IteratorGetRulesResponse`

### `labels_compliance`

Stream Post labels (Streaming)
Streams all labeling events applied to Posts.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post labels will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Post labels will be provided.
</ParamField>

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `likes_compliance`

Stream Likes compliance data (Streaming)
Streams all compliance data related to Likes for Users.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Likes Compliance events will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Likes Compliance events will be provided.
</ParamField>

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `likes_firehose`

Stream all Likes (Streaming)
Streams all public Likes in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Likes will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.like_with_tweet_author_fields" type="List or None" default="None">
  A comma separated list of LikeWithTweetAuthor fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `likes_sample10`

Stream sampled Likes (Streaming)
Streams a 10% sample of public Likes in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Likes will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.like_with_tweet_author_fields" type="List or None" default="None">
  A comma separated list of LikeWithTweetAuthor fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts`

Stream filtered Posts (Streaming)
Streams Posts in real-time matching the active rule set.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_compliance`

Stream Posts compliance data (Streaming)
Streams all compliance data related to Posts.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post Compliance events will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Post Compliance events will be provided.
</ParamField>

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_firehose`

Stream all Posts (Streaming)
Streams all public Posts in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_firehose_en`

Stream English Posts (Streaming)
Streams all public English-language Posts in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_firehose_ja`

Stream Japanese Posts (Streaming)
Streams all public Japanese-language Posts in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_firehose_ko`

Stream Korean Posts (Streaming)
Streams all public Korean-language Posts in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_firehose_pt`

Stream Portuguese Posts (Streaming)
Streams all public Portuguese-language Posts in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_sample`

Stream sampled Posts (Streaming)
Streams a 1% sample of public Posts in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `posts_sample10`

Stream 10% sampled Posts (Streaming)
Streams a 10% sample of public Posts in real-time.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>

### `update_rules`

Update stream rules
Adds or deletes rules from the active rule set for the filtered stream.

#### Parameters

<ParamField path="body.body" type="UpdateRulesRequest">
  Request body
</ParamField>

### `users_compliance`

Stream Users compliance data (Streaming)
Streams all compliance data related to Users.
This is a streaming endpoint that yields data in real-time as it becomes available.
Each yielded item represents a single data point from the stream.
The connection is automatically managed with exponential backoff retry logic.
If the stream disconnects, the SDK will automatically reconnect without client intervention.

#### Parameters

<ParamField path="path.partition" type="int">
  The partition number.
</ParamField>

<ParamField path="path.backfill_minutes" type="int or None" default="None">
  The number of minutes of backfill requested.
</ParamField>

<ParamField path="path.start_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.
</ParamField>

<ParamField path="path.end_time" type="str or None" default="None">
  YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.
</ParamField>

<ParamField path="path.stream_config" type="StreamConfig">
  Optional StreamConfig for customizing retry behavior, timeouts, and callbacks.
</ParamField>
