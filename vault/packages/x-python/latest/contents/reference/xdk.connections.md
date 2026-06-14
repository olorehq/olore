> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# ConnectionsClient

## Submodules

* [xdk.connections.client module](/xdks/python/reference/xdk.connections.client)
  * [`ConnectionsClient`](/xdks/python/reference/xdk.connections.client#xdk.connections.client.ConnectionsClient)
    * [`ConnectionsClient.__init__()`](/xdks/python/reference/xdk.connections.client#xdk.connections.client.ConnectionsClient.__init__)
    * [`ConnectionsClient.delete_all()`](/xdks/python/reference/xdk.connections.client#xdk.connections.client.ConnectionsClient.delete_all)
* [xdk.connections.models module](/xdks/python/reference/xdk.connections.models)
  * [`DeleteAllResponse`](/xdks/python/reference/xdk.connections.models#xdk.connections.models.DeleteAllResponse)
    * [`DeleteAllResponse.model_config`](/xdks/python/reference/xdk.connections.models#xdk.connections.models.DeleteAllResponse.model_config)

## Module contents

This module provides access to the connections endpoints of the X API
and serves as the main entry point for all connections-related functionality.

### `class xdk.connections.ConnectionsClient`

Client for connections operations

#### Parameters

<ParamField path="path.client" type="Client" />

### `__init__`

#### Parameters

<ParamField path="path.client" type="Client" />

### `delete_all`

Terminate all connections
Terminates all active streaming connections for the authenticated application.
:returns: Response data
:rtype: DeleteAllResponse

#### Returns

`DeleteAllResponse`
