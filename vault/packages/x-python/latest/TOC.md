# x-python Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Guides: install, overview, authentication, pagination, streaming, quickstart | 6 |
| `contents/reference/` | Full API reference — module index, top-level client, per-module clients, models, auth, paginator | 61 |

## contents/

| File | Description |
|------|-------------|
| `overview.md` | Python XDK overview — what it is, key features, compatibility (Python 3.8+) |
| `install.md` | Installation instructions |
| `quickstart.md` | 5-minute getting-started guide |
| `authentication.md` | OAuth setup — Bearer Token, OAuth 2.0 PKCE, and OAuth 1.0 |
| `pagination.md` | Automatic pagination — how the XDK handles `next_token` |
| `streaming.md` | Real-time streaming for filtered-stream endpoints |

## contents/reference/

### Index and top-level

| File | Description |
|------|-------------|
| `modules.md` | Module index — all available packages |
| `xdk.md` | Top-level `xdk` package reference |
| `xdk.client.md` | Main `Client` class — entry point for all API calls |
| `xdk.oauth1_auth.md` | OAuth 1.0 authentication class |
| `xdk.oauth2_auth.md` | OAuth 2.0 (PKCE) authentication class |
| `xdk.paginator.md` | `Paginator` class — automatic result pagination |
| `xdk.streaming.md` | Streaming utilities reference |

### account_activity

| File | Description |
|------|-------------|
| `xdk.account_activity.md` | Module reference |
| `xdk.account_activity.client.md` | `AccountActivityClient` — webhook subscriptions |
| `xdk.account_activity.models.md` | Pydantic models for account_activity responses |

### activity

| File | Description |
|------|-------------|
| `xdk.activity.md` | Module reference |
| `xdk.activity.client.md` | `ActivityClient` — activity endpoints |
| `xdk.activity.models.md` | Pydantic models for activity responses |

### communities

| File | Description |
|------|-------------|
| `xdk.communities.md` | Module reference |
| `xdk.communities.client.md` | `CommunitiesClient` — community management |
| `xdk.communities.models.md` | Pydantic models for communities responses |

### community_notes

| File | Description |
|------|-------------|
| `xdk.community_notes.md` | Module reference |
| `xdk.community_notes.client.md` | `CommunityNotesClient` — community notes endpoints |
| `xdk.community_notes.models.md` | Pydantic models for community_notes responses |

### compliance

| File | Description |
|------|-------------|
| `xdk.compliance.md` | Module reference |
| `xdk.compliance.client.md` | `ComplianceClient` — compliance batch jobs |
| `xdk.compliance.models.md` | Pydantic models for compliance responses |

### connections

| File | Description |
|------|-------------|
| `xdk.connections.md` | Module reference |
| `xdk.connections.client.md` | `ConnectionsClient` — streaming connections management |
| `xdk.connections.models.md` | Pydantic models for connections responses |

### direct_messages

| File | Description |
|------|-------------|
| `xdk.direct_messages.md` | Module reference |
| `xdk.direct_messages.client.md` | `DirectMessagesClient` — DM send/receive |
| `xdk.direct_messages.models.md` | Pydantic models for direct_messages responses |

### general

| File | Description |
|------|-------------|
| `xdk.general.md` | Module reference |
| `xdk.general.client.md` | `GeneralClient` — miscellaneous endpoints |
| `xdk.general.models.md` | Pydantic models for general responses |

### lists

| File | Description |
|------|-------------|
| `xdk.lists.md` | Module reference |
| `xdk.lists.client.md` | `ListsClient` — list CRUD and membership |
| `xdk.lists.models.md` | Pydantic models for lists responses |

### media

| File | Description |
|------|-------------|
| `xdk.media.md` | Module reference |
| `xdk.media.client.md` | `MediaClient` — media upload |
| `xdk.media.models.md` | Pydantic models for media responses |

### news

| File | Description |
|------|-------------|
| `xdk.news.md` | Module reference |
| `xdk.news.client.md` | `NewsClient` — news-related endpoints |
| `xdk.news.models.md` | Pydantic models for news responses |

### posts

| File | Description |
|------|-------------|
| `xdk.posts.md` | Module reference |
| `xdk.posts.client.md` | `PostsClient` — tweet/post search, create, delete, timelines |
| `xdk.posts.models.md` | Pydantic models for posts responses |

### spaces

| File | Description |
|------|-------------|
| `xdk.spaces.md` | Module reference |
| `xdk.spaces.client.md` | `SpacesClient` — Spaces lookup and search |
| `xdk.spaces.models.md` | Pydantic models for spaces responses |

### stream

| File | Description |
|------|-------------|
| `xdk.stream.md` | Module reference |
| `xdk.stream.client.md` | `StreamClient` — filtered stream management (rules, connections) |
| `xdk.stream.models.md` | Pydantic models for stream responses |

### trends

| File | Description |
|------|-------------|
| `xdk.trends.md` | Module reference |
| `xdk.trends.client.md` | `TrendsClient` — trending topics |
| `xdk.trends.models.md` | Pydantic models for trends responses |

### usage

| File | Description |
|------|-------------|
| `xdk.usage.md` | Module reference |
| `xdk.usage.client.md` | `UsageClient` — API usage metrics |
| `xdk.usage.models.md` | Pydantic models for usage responses |

### users

| File | Description |
|------|-------------|
| `xdk.users.md` | Module reference |
| `xdk.users.client.md` | `UsersClient` — user lookup, follow, block, mute |
| `xdk.users.models.md` | Pydantic models for users responses |

### webhooks

| File | Description |
|------|-------------|
| `xdk.webhooks.md` | Module reference |
| `xdk.webhooks.client.md` | `WebhooksClient` — webhook registration and management |
| `xdk.webhooks.models.md` | Pydantic models for webhooks responses |
