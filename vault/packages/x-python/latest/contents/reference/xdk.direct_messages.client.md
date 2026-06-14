> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# DirectMessagesClient

## DirectMessagesClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for direct messages operations

## Constructors

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
