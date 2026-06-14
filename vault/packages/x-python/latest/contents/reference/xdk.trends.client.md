> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# TrendsClient

## TrendsClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for trends operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get_ai`

Get AI Trends by ID
Retrieves an AI trend by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the ai trend.
</ParamField>

<ParamField path="path.news_fields" type="List or None" default="None">
  A comma separated list of News fields to display.
</ParamField>

#### Returns

`GetAiResponse` - Response data

### `get_by_woeid`

Get Trends by WOEID
Retrieves trending topics for a specific location identified by its WOEID.

#### Parameters

<ParamField path="path.woeid" type="int">
  The WOEID of the place to lookup a trend for.
</ParamField>

<ParamField path="path.max_trends" type="int or None" default="None">
  The maximum number of results.
</ParamField>

<ParamField path="path.trend_fields" type="List or None" default="None">
  A comma separated list of Trend fields to display.
</ParamField>

#### Returns

`GetByWoeidResponse` - Response data

### `get_personalized`

Get personalized Trends
Retrieves personalized trending topics for the authenticated user.

#### Parameters

<ParamField path="path.personalized_trend_fields" type="List or None" default="None">
  A comma separated list of PersonalizedTrend fields to display.
</ParamField>

#### Returns

`GetPersonalizedResponse` - Response data
