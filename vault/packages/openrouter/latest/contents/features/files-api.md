> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Files API

> Upload files to your workspace and use them in requests

Beta

> [!NOTE]
>
> **Beta**
>
> The Files API is in beta. The API and behavior may change.

The Files API stores files in your workspace. You can upload a file once and use it in many requests. A sandbox container can load workspace files with the [`file_ids` setting](https://openrouter.ai/docs/guides/features/containers#attach-workspace-files).

> [!NOTE]
>
> **Global endpoint only**
>
> The Files API works on the global endpoint (`openrouter.ai`) only. Requests through the [in-region endpoints](https://openrouter.ai/docs/guides/features/in-region-routing.md) (`eu.openrouter.ai`, `us.openrouter.ai`) return a `403` error.

## The Files page

You can also manage files in the web app. Open [your workspace files page](https://openrouter.ai/workspaces/default/files). There you can upload files and create files inside folders. You cannot download workspace files from this page. See [Download rules](#download-rules).

## Upload a file

Send a `multipart/form-data` request to `POST /api/v1/files`. Put the file in the `file` field.

The response contains the file id. File ids start with `or_file_`. Use this id in later requests.

### Upload limits

* The maximum file size is 100 MiB (104,857,600 bytes). A larger file returns a `413` error.
* Empty files return a `400` error.
* Each workspace can store up to 10 GiB in total. When the workspace is full, uploads return a `403` error.

### Pricing and retention

* The Files API has no separate charge.
* Workspace files do not expire.
* Files inside a container are different: they are kept for 30 days after the container was last used, then deleted. Copy a container file into your workspace to keep it. See [Save a container file to your workspace](https://openrouter.ai/docs/guides/features/containers.md#save-a-container-file-to-your-workspace).

### File types

The API reads the file content to find the file type. It does not trust the filename or the declared content type. A file with content that is not on this list returns a `400` error:

* PDF documents
* PNG, JPEG, GIF, and WebP images
* DOCX, XLSX, and PPTX documents
* MP3, WAV, FLAC, and OGG audio
* UTF-8 text. Text is reported by its structure as JSON, NDJSON, CSV, Markdown, or plain text.

### Filenames and folders

A filename can contain `/` to form a folder path, for example `data/report.csv`. The path is part of the filename. Rules:

* The filename must be 1 to 255 characters long.
* The filename must not start or end with `/`.
* Path segments must not be empty, `.`, or `..`.
* The characters `< > : " | ? * \` and control characters are not allowed.

## List files

`GET /api/v1/files` returns the files in the workspace.

* `limit` sets the page size, from 1 to 1000. The default is 100.
* The response contains `data`, `has_more`, and a `cursor`. Send the `cursor` value in the next request to get the next page.
* You can also use the OpenAI-style `after` parameter with a file id. Do not mix `cursor` and `after` in one request.

The list has more than one response shape. The default shape is the OpenRouter shape. Requests that look like OpenAI SDK requests get the OpenAI shape. Requests with an `anthropic-version` header get the Anthropic shape.

## Get file metadata

`GET /api/v1/files/{file_id}` returns the metadata of one file:

```json lines theme={null}
{
  "id": "or_file_011CNha8iCJcU1wXNR6q4V8w",
  "type": "file",
  "filename": "data/report.csv",
  "mime_type": "text/csv",
  "size_bytes": 24576,
  "created_at": "2026-08-25T00:00:00Z",
  "downloadable": false
}
```

## Download rules

Files that you upload cannot be downloaded directly, they can only be used within OpenRouter sandboxes created by the shell or bash tools. A request to `GET /api/v1/files/{file_id}/content` for an uploaded file returns a `400` error. Keep your own copy of every file you upload.

Files that a model creates are different:

* Files that a sandbox command creates can be downloaded through the [container files endpoints](https://openrouter.ai/docs/guides/features/containers.md#download-container-files), or copied into your workspace as a durable document. A promoted document has `"downloadable": true` and can be downloaded later through `GET /api/v1/files/{file_id}/content`. See [Save a container file to your workspace](https://openrouter.ai/docs/guides/features/containers.md#save-a-container-file-to-your-workspace).
* Files that the [files tool](https://openrouter.ai/docs/guides/features/server-tools/files.md) writes or edits also have `"downloadable": true` and can be downloaded the same way.

## Delete a file

`DELETE /api/v1/files/{file_id}` deletes a file. The freed space returns to the workspace storage quota. A file that does not exist returns a `404` error.

## Workspaces

Every file belongs to one workspace:

* By default, the API uses the workspace of your API key. A key without a workspace uses your default workspace.
* You can pass `workspace_id` as a query parameter to select a workspace.
* A key that is scoped to a different workspace gets a `403` error.
* A file id from another workspace returns a `404` error.

## Provider-hosted files

You can pass `provider=openai` or `provider=anthropic` as a query parameter. The request then goes to that provider's own Files API. It uses the [BYOK key](https://openrouter.ai/docs/guides/overview/auth/byok.md) you configured for that provider. Without a configured key, the request returns a `400` error.

## Next steps

* [Containers](https://openrouter.ai/docs/guides/features/containers.md): Load files into a sandbox container
