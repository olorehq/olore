> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# DirectMessagesClient

## Submodules

* [xdk.direct\_messages.client module](/xdks/python/reference/xdk.direct_messages.client)
  * [`DirectMessagesClient`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient)
    * [`DirectMessagesClient.__init__()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.__init__)
    * [`DirectMessagesClient.create_by_conversation_id()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.create_by_conversation_id)
    * [`DirectMessagesClient.create_by_participant_id()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.create_by_participant_id)
    * [`DirectMessagesClient.create_conversation()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.create_conversation)
    * [`DirectMessagesClient.delete_events()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.delete_events)
    * [`DirectMessagesClient.get_events()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.get_events)
    * [`DirectMessagesClient.get_events_by_conversation_id()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.get_events_by_conversation_id)
    * [`DirectMessagesClient.get_events_by_id()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.get_events_by_id)
    * [`DirectMessagesClient.get_events_by_participant_id()`](/xdks/python/reference/xdk.direct_messages.client#xdk.direct_messages.client.DirectMessagesClient.get_events_by_participant_id)
* [xdk.direct\_messages.models module](/xdks/python/reference/xdk.direct_messages.models)
  * [`CreateByConversationIdRequest`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByConversationIdRequest)
    * [`CreateByConversationIdRequest.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByConversationIdRequest.model_config)
  * [`CreateByConversationIdResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByConversationIdResponse)
    * [`CreateByConversationIdResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByConversationIdResponse.model_config)
  * [`CreateByParticipantIdRequest`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByParticipantIdRequest)
    * [`CreateByParticipantIdRequest.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByParticipantIdRequest.model_config)
  * [`CreateByParticipantIdResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByParticipantIdResponse)
    * [`CreateByParticipantIdResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateByParticipantIdResponse.model_config)
  * [`CreateConversationRequest`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateConversationRequest)
    * [`CreateConversationRequest.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateConversationRequest.model_config)
  * [`CreateConversationResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateConversationResponse)
    * [`CreateConversationResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.CreateConversationResponse.model_config)
  * [`DeleteEventsResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.DeleteEventsResponse)
    * [`DeleteEventsResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.DeleteEventsResponse.model_config)
  * [`GetEventsByConversationIdResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsByConversationIdResponse)
    * [`GetEventsByConversationIdResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsByConversationIdResponse.model_config)
  * [`GetEventsByIdResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsByIdResponse)
    * [`GetEventsByIdResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsByIdResponse.model_config)
  * [`GetEventsByParticipantIdResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsByParticipantIdResponse)
    * [`GetEventsByParticipantIdResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsByParticipantIdResponse.model_config)
  * [`GetEventsResponse`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsResponse)
    * [`GetEventsResponse.model_config`](/xdks/python/reference/xdk.direct_messages.models#xdk.direct_messages.models.GetEventsResponse.model_config)

## Module contents

This module provides access to the direct messages endpoints of the X API
and serves as the main entry point for all direct messages-related functionality.

### `class xdk.direct_messages.DirectMessagesClient`

Client for direct messages operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `create_by_conversation_id`

Create DM message by conversation ID
Sends a new direct message to a specific conversation by its ID.

#### Parameters

<ParamField path="path.dm_conversation_id" type="str">
  The DM Conversation ID.
</ParamField>

<ParamField path="body.body" type="CreateByConversationIdRequest">
  Request body
</ParamField>

### `create_by_participant_id`

Create DM message by participant ID
Sends a new direct message to a specific participant by their ID.

#### Parameters

<ParamField path="path.participant_id" type="Any">
  The ID of the recipient user that will receive the DM.
</ParamField>

<ParamField path="body.body" type="CreateByParticipantIdRequest">
  Request body
</ParamField>

### `create_conversation`

Create DM conversation
Initiates a new direct message conversation with specified participants.
body: Request body
:returns: Response data
:rtype: CreateConversationResponse

#### Parameters

<ParamField path="body.body" type="CreateConversationRequest" />

### `delete_events`

Delete DM event
Deletes a specific direct message event by its ID, if owned by the authenticated user.

#### Parameters

<ParamField path="path.event_id" type="Any">
  The ID of the direct-message event to delete.
</ParamField>

#### Returns

`DeleteEventsResponse` - Response data

### `get_events`

Get DM events
Retrieves a list of recent direct message events across all conversations.

#### Parameters

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
</ParamField>

<ParamField path="path.event_types" type="List or None" default="None">
  The set of event\_types to include in the results.
</ParamField>

<ParamField path="path.dm_event_fields" type="List or None" default="None">
  A comma separated list of DmEvent fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.media_fields" type="List or None" default="None">
  A comma separated list of Media fields to display.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

#### Returns

`IteratorGetEventsResponse`

### `get_events_by_conversation_id`

Get DM events for a DM conversation
Retrieves direct message events for a specific conversation.

#### Parameters

<ParamField path="path.id" type="Any">
  The DM conversation ID.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
</ParamField>

<ParamField path="path.event_types" type="List or None" default="None">
  The set of event\_types to include in the results.
</ParamField>

<ParamField path="path.dm_event_fields" type="List or None" default="None">
  A comma separated list of DmEvent fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.media_fields" type="List or None" default="None">
  A comma separated list of Media fields to display.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

#### Returns

`IteratorGetEventsByConversationIdResponse`

### `get_events_by_id`

Get DM event by ID
Retrieves details of a specific direct message event by its ID.

#### Parameters

<ParamField path="path.event_id" type="Any">
  dm event id.
</ParamField>

<ParamField path="path.dm_event_fields" type="List or None" default="None">
  A comma separated list of DmEvent fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.media_fields" type="List or None" default="None">
  A comma separated list of Media fields to display.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

#### Returns

`GetEventsByIdResponse` - Response data

### `get_events_by_participant_id`

Get DM events for a DM conversation
Retrieves direct message events for a specific conversation.

#### Parameters

<ParamField path="path.participant_id" type="Any">
  The ID of the participant user for the One to One DM conversation.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.pagination_token" type="Any or None" default="None">
  This parameter is used to get a specified ‘page’ of results.
</ParamField>

<ParamField path="path.event_types" type="List or None" default="None">
  The set of event\_types to include in the results.
</ParamField>

<ParamField path="path.dm_event_fields" type="List or None" default="None">
  A comma separated list of DmEvent fields to display.
</ParamField>

<ParamField path="path.expansions" type="List or None" default="None">
  A comma separated list of fields to expand.
</ParamField>

<ParamField path="path.media_fields" type="List or None" default="None">
  A comma separated list of Media fields to display.
</ParamField>

<ParamField path="path.user_fields" type="List or None" default="None">
  A comma separated list of User fields to display.
</ParamField>

<ParamField path="path.tweet_fields" type="List or None" default="None">
  A comma separated list of Tweet fields to display.
</ParamField>

#### Returns

`IteratorGetEventsByParticipantIdResponse`
