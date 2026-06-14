> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# streaming

Robust streaming utilities for the X API SDK.

This module provides streaming connection handling with automatic reconnection,
exponential backoff, and comprehensive error handling. Clients can consume
streaming endpoints without worrying about connection management - the SDK
handles all recovery automatically.

### `class xdk.streaming.StreamConfig`

Configuration for streaming connections with retry behavior.

#### Parameters

<ParamField path="path.max_retries" type="int" default="10" />

<ParamField path="path.initial_backoff" type="float" default="1.0" />

<ParamField path="path.max_backoff" type="float" default="64.0" />

<ParamField path="path.backoff_multiplier" type="float" default="2.0" />

<ParamField path="path.jitter" type="bool" default="True" />

<ParamField path="path.timeout" type="float or None" default="None" />

<ParamField path="path.chunk_size" type="int" default="1024" />

<ParamField path="path.on_connect" type="Callable[[], None] or None" default="None" />

<ParamField path="path.on_disconnect" type="Callable[[Exception or None], None] or None" default="None" />

<ParamField path="path.on_reconnect" type="Callable[[int, float], None] or None" default="None" />

<ParamField path="path.on_error" type="Callable[[[StreamError" />

### `__init__`

#### Parameters

<ParamField path="path.max_retries" type="int" default="10" />

<ParamField path="path.initial_backoff" type="float" default="1.0" />

<ParamField path="path.max_backoff" type="float" default="64.0" />

<ParamField path="path.backoff_multiplier" type="float" default="2.0" />

<ParamField path="path.jitter" type="bool" default="True" />

<ParamField path="path.timeout" type="float or None" default="None" />

<ParamField path="path.chunk_size" type="int" default="1024" />

<ParamField path="path.on_connect" type="Callable[[], None] or None" default="None" />

<ParamField path="path.on_disconnect" type="Callable[[Exception or None], None] or None" default="None" />

<ParamField path="path.on_reconnect" type="Callable[[int, float], None] or None" default="None" />

<ParamField path="path.on_error" type="Callable[[[StreamError" />

### `on_error : Callable[[[StreamError]`

### `exception xdk.streaming.StreamError`

Exception raised for streaming errors with classification.

#### Parameters

<ParamField path="path.message" type="str" />

<ParamField path="path.error_type" type="StreamErrorType" />

### `__init__`

#### Parameters

<ParamField path="path.message" type="str" />

<ParamField path="path.error_type" type="StreamErrorType" />

### `class xdk.streaming.StreamErrorType`

Classification of streaming errors for retry decisions.

#### Parameters

<ParamField path="path.value" type="Any" />

### `class xdk.streaming.StreamState`

Internal state for a streaming connection.

#### Parameters

<ParamField path="path.retry_count" type="int" default="0" />

<ParamField path="path.current_backoff" type="float" default="1.0" />

<ParamField path="path.is_connected" type="bool" default="False" />

<ParamField path="path.total_items_received" type="int" default="0" />

<ParamField path="path.last_error" type="StreamError" />

### `__init__`

#### Parameters

<ParamField path="path.retry_count" type="int" default="0" />

<ParamField path="path.current_backoff" type="float" default="1.0" />

<ParamField path="path.is_connected" type="bool" default="False" />

<ParamField path="path.total_items_received" type="int" default="0" />

<ParamField path="path.last_error" type="StreamError" />

### `last_error : [StreamError]`

### `xdk.streaming.stream_with_retry`

Stream data from an endpoint with automatic reconnection and exponential backoff.
This function handles all connection management, including:

* Automatic reconnection on disconnects
* Exponential backoff with jitter for retry delays
* Classification of errors as retryable vs fatal
* Lifecycle callbacks for monitoring connection state

#### Parameters

<ParamField path="path.session" type="Session">
  The requests Session to use for HTTP calls.
</ParamField>

<ParamField path="path.method" type="str">
  HTTP method (typically “get”).
</ParamField>

<ParamField path="path.url" type="str">
  The full URL to stream from.
</ParamField>

<ParamField path="path.config" type="StreamConfig">
  StreamConfig with retry and callback settings.
</ParamField>
