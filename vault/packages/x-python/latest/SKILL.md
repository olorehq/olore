---
name: olore-x-python-latest
description: Local x-python documentation reference (latest). X (Twitter) API v2 — Python SDK (XDK) reference. Official OpenAPI-generated client for X API v2. Covers OAuth (Bearer Token / OAuth 2.0 PKCE / OAuth 1.0), automatic pagination, real-time streaming, and per-module clients for posts, users, lists, spaces, direct_messages, communities, community_notes, compliance, account_activity, webhooks, media, streams, trends, usage, connections, news, activity, and general endpoints.
---

# x-python Documentation

The Python XDK (X Developer Kit) is the official client library for the X API v2. It is generated from the X OpenAPI specification (`https://api.x.com/2/openapi.json`) and supports Python 3.8+ (CPython and PyPy, MIT license).

Key capabilities:
- **Authentication**: Bearer Token (app-only), OAuth 2.0 with PKCE (user context), OAuth 1.0
- **Pagination**: Automatic — the XDK handles `next_token` internally via the `Paginator` class
- **Streaming**: Persistent HTTP connection support for filtered-stream endpoints via `StreamClient` and `xdk.streaming`
- **Coverage**: All X API v2 endpoints across 18+ modules

## Documentation Structure

```
contents/
├── overview.md          # What the XDK is, features, compatibility
├── install.md           # Installation
├── quickstart.md        # 5-minute getting-started guide
├── authentication.md    # OAuth setup (Bearer / PKCE / OAuth1)
├── pagination.md        # How automatic pagination works
├── streaming.md         # Real-time streaming guide
└── reference/           # Full API reference (61 files)
    ├── modules.md                      # Module index
    ├── xdk.md                          # Top-level package
    ├── xdk.client.md                   # Main Client class
    ├── xdk.oauth1_auth.md              # OAuth 1.0 auth class
    ├── xdk.oauth2_auth.md              # OAuth 2.0 PKCE auth class
    ├── xdk.paginator.md                # Paginator class
    ├── xdk.streaming.md                # Streaming utilities
    └── xdk.<module>.{client,models}.md # Per-module clients and models
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/overview.md`, `contents/install.md`, `contents/quickstart.md` |
| Authentication (Bearer / OAuth2 PKCE / OAuth1) | `contents/authentication.md`, `contents/reference/xdk.oauth1_auth.md`, `contents/reference/xdk.oauth2_auth.md` |
| Pagination (automatic) | `contents/pagination.md`, `contents/reference/xdk.paginator.md` |
| Streaming / filtered stream | `contents/streaming.md`, `contents/reference/xdk.streaming.md`, `contents/reference/xdk.stream.client.md` |
| Posts / tweets (search, create, delete, timelines) | `contents/reference/xdk.posts.client.md`, `contents/reference/xdk.posts.models.md` |
| Users (lookup, follow, block, mute) | `contents/reference/xdk.users.client.md`, `contents/reference/xdk.users.models.md` |
| Lists | `contents/reference/xdk.lists.client.md`, `contents/reference/xdk.lists.models.md` |
| Spaces | `contents/reference/xdk.spaces.client.md`, `contents/reference/xdk.spaces.models.md` |
| Direct messages | `contents/reference/xdk.direct_messages.client.md`, `contents/reference/xdk.direct_messages.models.md` |
| Communities | `contents/reference/xdk.communities.client.md`, `contents/reference/xdk.communities.models.md` |
| Community notes | `contents/reference/xdk.community_notes.client.md`, `contents/reference/xdk.community_notes.models.md` |
| Compliance (batch jobs) | `contents/reference/xdk.compliance.client.md`, `contents/reference/xdk.compliance.models.md` |
| Account activity / webhooks | `contents/reference/xdk.account_activity.client.md`, `contents/reference/xdk.webhooks.client.md` |
| Media upload | `contents/reference/xdk.media.client.md`, `contents/reference/xdk.media.models.md` |
| Trends | `contents/reference/xdk.trends.client.md`, `contents/reference/xdk.trends.models.md` |
| Usage metrics | `contents/reference/xdk.usage.client.md`, `contents/reference/xdk.usage.models.md` |
| Main Client class | `contents/reference/xdk.client.md` |
| All modules overview | `contents/reference/modules.md` |

## API Surface Modules

The XDK organizes all endpoints into per-module clients. For any "how do I X?" question, check `overview.md` / `quickstart.md` first, then find the relevant `xdk.<module>.client.md`:

`posts` · `users` · `lists` · `spaces` · `direct_messages` · `communities` · `community_notes` · `compliance` · `account_activity` · `webhooks` · `media` · `stream` · `streaming` · `trends` · `usage` · `connections` · `news` · `activity` · `general`

## When to use

Use this skill when the user asks about:
- Installing or setting up the X Python XDK / SDK
- Authenticating with the X API (Bearer Token, OAuth 2.0 PKCE, OAuth 1.0)
- Searching, posting, or managing tweets/posts programmatically
- Working with X API v2 endpoints (users, lists, spaces, DMs, communities, compliance, etc.)
- Automatic pagination or streaming with the Python XDK
- Method signatures, parameters, or return types for any XDK client or model class

## How to find information

1. Use the Topic Guide above to identify the relevant files
2. Read `TOC.md` for the complete file listing organized by directory and module
3. Read the specific file from `contents/<path>` — start with the `.client.md` for available methods, then `.models.md` for data shapes
