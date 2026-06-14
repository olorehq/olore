> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# UsageClient

## UsageClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for usage operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `get`

Get usage
Retrieves usage statistics for Posts over a specified number of days.

#### Parameters

<ParamField path="path.days" type="int or None" default="None">
  The number of days for which you need usage for.
</ParamField>

<ParamField path="path.usage_fields" type="List or None" default="None">
  A comma separated list of Usage fields to display.
</ParamField>

#### Returns

`GetResponse` - Response data
