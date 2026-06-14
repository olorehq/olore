> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# ComplianceClient

## Submodules

* [xdk.compliance.client module](/xdks/python/reference/xdk.compliance.client)
  * [`ComplianceClient`](/xdks/python/reference/xdk.compliance.client#xdk.compliance.client.ComplianceClient)
    * [`ComplianceClient.__init__()`](/xdks/python/reference/xdk.compliance.client#xdk.compliance.client.ComplianceClient.__init__)
    * [`ComplianceClient.create_jobs()`](/xdks/python/reference/xdk.compliance.client#xdk.compliance.client.ComplianceClient.create_jobs)
    * [`ComplianceClient.get_jobs()`](/xdks/python/reference/xdk.compliance.client#xdk.compliance.client.ComplianceClient.get_jobs)
    * [`ComplianceClient.get_jobs_by_id()`](/xdks/python/reference/xdk.compliance.client#xdk.compliance.client.ComplianceClient.get_jobs_by_id)
* [xdk.compliance.models module](/xdks/python/reference/xdk.compliance.models)
  * [`CreateJobsRequest`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.CreateJobsRequest)
    * [`CreateJobsRequest.model_config`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.CreateJobsRequest.model_config)
  * [`CreateJobsResponse`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.CreateJobsResponse)
    * [`CreateJobsResponse.model_config`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.CreateJobsResponse.model_config)
  * [`GetJobsByIdResponse`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.GetJobsByIdResponse)
    * [`GetJobsByIdResponse.model_config`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.GetJobsByIdResponse.model_config)
  * [`GetJobsResponse`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.GetJobsResponse)
    * [`GetJobsResponse.model_config`](/xdks/python/reference/xdk.compliance.models#xdk.compliance.models.GetJobsResponse.model_config)

## Module contents

This module provides access to the compliance endpoints of the X API
and serves as the main entry point for all compliance-related functionality.

### `class xdk.compliance.ComplianceClient`

Client for compliance operations

#### Parameters

<ParamField path="path.client" type="Client" />

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
