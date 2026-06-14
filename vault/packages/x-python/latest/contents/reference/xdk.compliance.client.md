> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# ComplianceClient

## ComplianceClient

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

Client for compliance operations

## Constructors

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `create_jobs`

Create Compliance Job
Creates a new Compliance Job for the specified job type.
body: Request body
:returns: Response data
:rtype: CreateJobsResponse

#### Parameters

<ParamField path="body.body" type="CreateJobsRequest" />

### `get_jobs`

Get Compliance Jobs
Retrieves a list of Compliance Jobs filtered by job type and optional status.

#### Parameters

<ParamField path="path.type" type="str">
  Type of Compliance Job to list.
</ParamField>

<ParamField path="path.status" type="str or None" default="None">
  Status of Compliance Job to list.
</ParamField>

<ParamField path="path.compliance_job_fields" type="List or None" default="None">
  A comma separated list of ComplianceJob fields to display.
</ParamField>

#### Returns

`GetJobsResponse` - Response data

### `get_jobs_by_id`

Get Compliance Job by ID
Retrieves details of a specific Compliance Job by its ID.

#### Parameters

<ParamField path="path.id" type="Any">
  The ID of the Compliance Job to retrieve.
</ParamField>

<ParamField path="path.compliance_job_fields" type="List or None" default="None">
  A comma separated list of ComplianceJob fields to display.
</ParamField>

#### Returns

`GetJobsByIdResponse` - Response data
