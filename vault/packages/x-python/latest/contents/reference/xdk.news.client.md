> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# NewsClient

## NewsClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for news operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get`

Get news stories by ID
Retrieves news story by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the news story.
</ParamField>

<ParamField path="path.news_fields" type="List or None" default="None">
  A comma separated list of News fields to display.
</ParamField>

#### Returns

`GetResponse` - Response data

### `search`

Search News
Retrieves a list of News stories matching the specified search query.

#### Parameters

<ParamField path="path.query" type="str">
  The search query.
</ParamField>

<ParamField path="path.max_results" type="int or None" default="None">
  The number of results to return.
</ParamField>

<ParamField path="path.max_age_hours" type="int or None" default="None">
  The maximum age of the News story to search for.
</ParamField>

<ParamField path="path.news_fields" type="List or None" default="None">
  A comma separated list of News fields to display.
</ParamField>

#### Returns

`SearchResponse` - Response data
