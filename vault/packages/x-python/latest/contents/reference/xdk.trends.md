> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# TrendsClient

## Submodules

* [xdk.trends.client module](/xdks/python/reference/xdk.trends.client)
  * [`TrendsClient`](/xdks/python/reference/xdk.trends.client#xdk.trends.client.TrendsClient)
    * [`TrendsClient.__init__()`](/xdks/python/reference/xdk.trends.client#xdk.trends.client.TrendsClient.__init__)
    * [`TrendsClient.get_ai()`](/xdks/python/reference/xdk.trends.client#xdk.trends.client.TrendsClient.get_ai)
    * [`TrendsClient.get_by_woeid()`](/xdks/python/reference/xdk.trends.client#xdk.trends.client.TrendsClient.get_by_woeid)
    * [`TrendsClient.get_personalized()`](/xdks/python/reference/xdk.trends.client#xdk.trends.client.TrendsClient.get_personalized)
* [xdk.trends.models module](/xdks/python/reference/xdk.trends.models)
  * [`GetAiResponse`](/xdks/python/reference/xdk.trends.models#xdk.trends.models.GetAiResponse)
    * [`GetAiResponse.model_config`](/xdks/python/reference/xdk.trends.models#xdk.trends.models.GetAiResponse.model_config)
  * [`GetByWoeidResponse`](/xdks/python/reference/xdk.trends.models#xdk.trends.models.GetByWoeidResponse)
    * [`GetByWoeidResponse.model_config`](/xdks/python/reference/xdk.trends.models#xdk.trends.models.GetByWoeidResponse.model_config)
  * [`GetPersonalizedResponse`](/xdks/python/reference/xdk.trends.models#xdk.trends.models.GetPersonalizedResponse)
    * [`GetPersonalizedResponse.model_config`](/xdks/python/reference/xdk.trends.models#xdk.trends.models.GetPersonalizedResponse.model_config)

## Module contents

This module provides access to the trends endpoints of the X API
and serves as the main entry point for all trends-related functionality.

### `class xdk.trends.TrendsClient`

Client for trends operations

#### Parameters

<ParamField path="path.client" type="Client" />

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
