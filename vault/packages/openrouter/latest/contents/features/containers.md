> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Containers

> How sandbox containers work for the shell and bash server tools

Beta

> [!NOTE]
>
> **Beta**
>
> Server tools are currently in beta. The API and behavior may change.
>
> Sandbox containers work on the global endpoint (`openrouter.ai`) only. Requests through the [in-region endpoints](https://openrouter.ai/docs/guides/features/in-region-routing.md) (`eu.openrouter.ai`, `us.openrouter.ai`) return an error.

A container is an isolated Linux environment. The [shell](https://openrouter.ai/docs/guides/features/server-tools/shell.md) and [bash](https://openrouter.ai/docs/guides/features/server-tools/bash.md) server tools run their commands inside a container. Each container has its own file system. The files in the container's home directory are saved after every command, so a later request can reuse them.

## Container ids

Every container has an id. The id can be set in the server tool's `environment` configuration. Shell and bash tool results return the id in their `container_id` field. There are two modes of configuring the container, `container_auto` and `container_reference`:

```json lines theme={null}
{
  "type": "openrouter:shell",
  "parameters": {
    "environment": { "type": "container_auto" }
  }
}
```

```json lines theme={null}
{
  "type": "openrouter:shell",
  "parameters": {
    "environment": { "type": "container_reference", "container_id": "my-project" }
  }
}
```

### Automatic ids (`container_auto`)

This is the default when you omit `environment`. The id depends on your request:

* When the request has a session id, the container id is `sess_` plus the session id. All requests with the same session id share one container.
* When the request has no session id, the container id is the most recently returned `container_id` in the replayed conversation, if there is one — so a multi-turn conversation keeps its files across turns. Otherwise the container id is `gen_` plus a hash of the request id, and each request gets its own container.

We treat all of these as session ids, in this order:

1. The `session_id` field in the request body.
2. The `x-session-id` request header.
3. The `prompt_cache_key` field in the request body.

A session id must use only letters, digits, `_`, and `-`. An id with other characters is ignored, and the request falls back to the no-session behavior above. When the session id is longer than 20 characters, only the last 20 characters are used.

### Your own ids (`container_reference`)

With `container_reference`, you can pass a `container_id` from another session, or pass a custom container id. The id must be 1 to 40 characters and use only letters, digits, `_`, and `-`. Every request with the same id reaches the same container and the same files.

Containers are scoped to your workspace. Two workspaces can use the same id without seeing each other's files.

### One id, two tools

The shell tool and the bash tool use separate compute environments, even for the same container id. They share the same saved files.

## Container lifetime

A container sleeps after it has been idle for 5 minutes. The idle time is not configurable.

Sleep does not delete the files in the home directory. When a request with the same container id arrives later, a new sandbox starts and loads the saved files first. Open processes, environment variables, and installed system state are **not restored**.

Saved container files are kept for 30 days after the container was last used, then deleted. To keep a file longer, copy it into your workspace (see [Save a container file to your workspace](#save-a-container-file-to-your-workspace)). Workspace files do not expire.

## File persistence

Commands run in `/workspace/home`, which is also the home directory. After every command, the changed files under the home directory are saved to storage. Deleted files stay deleted. Files outside the home directory are not saved.

Each tool result reports the files the command created or changed, in the `files` field:

```json lines theme={null}
{
  "type": "openrouter_shell_tool_result",
  "container_id": "sess_abc123",
  "files": [
    {
      "type": "container_file_citation",
      "container_id": "sess_abc123",
      "file_id": "cfile_b3V0L3JlcG9ydC5jc3Y",
      "filename": "out/report.csv",
      "start_index": 0,
      "end_index": 0
    }
  ],
  "content": [ ... ]
}
```

The list contains at most 10 files. When a command changes more than 10 files, the 10 most recently changed files are reported. Deleted files are not reported.

## Attach workspace files

You can copy files from your workspace into a container before the first command runs. First upload the files with the [Files API](https://openrouter.ai/docs/guides/features/files-api.md). Then pass their ids in the `file_ids` field of the container `environment`:

```json lines theme={null}
{
  "type": "openrouter:shell",
  "parameters": {
    "environment": {
      "type": "container_auto",
      "file_ids": ["or_file_011CNha8iCJcU1wXNR6q4V8w"]
    }
  }
}
```

Rules:

* A request can attach up to 20 files. The limit applies to the `file_ids` array of each request, not to the container over its lifetime.
* Each file appears in the home directory as a writable copy. The copy is named with the last 8 characters of the file id, a `-`, and the base filename. A file stored as `data/report.csv` with an id ending in `NR6q4V8w` appears as `~/NR6q4V8w-report.csv`. This prefix keeps two files with the same name apart.
* The copy is independent. Changes inside the container do not change the workspace file.
* An unknown or malformed file id fails the request with a `400` error before any command runs.

## Download container files

Files created inside a container can be downloaded through the container files endpoints.

List the files in a container:

```json lines theme={null}
{
  "object": "list",
  "data": [
    {
      "id": "cfile_b3V0L3JlcG9ydC5jc3Y",
      "object": "container.file",
      "container_id": "sess_abc123",
      "bytes": 123,
      "created_at": 1755640000,
      "path": "out/report.csv",
      "source": "assistant"
    }
  ],
  "first_id": "cfile_b3V0L3JlcG9ydC5jc3Y",
  "last_id": "cfile_b3V0L3JlcG9ydC5jc3Y",
  "has_more": false
}
```

* `GET /api/v1/containers/{container_id}/files` lists the files. The `limit` parameter sets the page size, from 1 to 1000 (default 100). While `has_more` is `true`, pass the response's `last_id` as the `after` parameter to get the next page. `last_id` is a resume cursor, not always the id of a listed file: a page can come back with an empty `data` array and `has_more: true`, in which case keep paging with its `last_id`.
* `GET /api/v1/containers/{container_id}/files/{file_id}` returns the metadata of one file.
* `GET /api/v1/containers/{container_id}/files/{file_id}/content` streams the file content.

Container file ids start with `cfile_`. They encode the file path, and they match the `file_id` values in the tool result's `files` field.

## Save a container file to your workspace

Container files live with the container. To keep a file for the long term, promote it to a workspace document:

```json lines theme={null}
{
  "id": "or_file_011CNha8iCJcU1wXNR6q4V8w",
  "type": "file",
  "filename": "out/report.csv",
  "mime_type": "text/csv",
  "size_bytes": 123,
  "created_at": "2026-08-25T00:00:00Z",
  "downloadable": true
}
```

`POST /api/v1/containers/{container_id}/files/{file_id}/promote` copies the file into your workspace documents. The response is the new document in the [Files API](https://openrouter.ai/docs/guides/features/files-api.md) shape, with a new `or_file_` id. You can then use the new id like any uploaded file, for example in [`file_ids`](#attach-workspace-files), or download it through `GET /api/v1/files/{file_id}/content`.

Rules:

* The copy is independent. The container file stays in the container, and later changes to it do not change the document.
* The document keeps the container file path as its filename.
* Files larger than 100 MiB return a `413` error.
* Any content the sandbox produced is accepted. The file type is read from the content; unknown content is stored as binary data.
* The promoted document remains downloadable through the Files API. Direct workspace uploads remain non-downloadable.

## Network access

By default, a container has no outbound internet access. The `network_policy` setting can allow specific domains. See the [shell network policy](https://openrouter.ai/docs/guides/features/server-tools/shell.md#network-policy) and [bash network policy](https://openrouter.ai/docs/guides/features/server-tools/bash.md#network-policy) sections.

## Next steps

* [Shell](https://openrouter.ai/docs/guides/features/server-tools/shell.md): The shell server tool
* [Bash](https://openrouter.ai/docs/guides/features/server-tools/bash.md): The bash server tool
* [Files API](https://openrouter.ai/docs/guides/features/files-api.md): Upload files to your workspace
