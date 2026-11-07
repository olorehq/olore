---
name: olore-partyserver-latest
description: Local partyserver documentation reference (latest). Cloudflare PartyKit documentation. Use for real-time collaborative apps, WebSocket servers, PartyServer, multiplayer features, Y.js integration, Durable Objects, RPC, storage, and edge-deployed stateful backends.
---

# partyserver Documentation

Cloudflare PartyKit documentation. Use for real-time collaborative apps, WebSocket servers, PartyServer, multiplayer features, Y.js integration, Durable Objects, RPC, storage, and edge-deployed stateful backends.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/hono-party/README.md` | hono-party | Hono middleware that routes WebSocket requests to PartyServer Durable Objects. |
| `contents/partyagent/README.md` | partyagent | Autonomous agents on Durable Objects (extends PartySync) with tools, personalities and task hand-off. |
| `contents/partybase/README.md` | partybase | Database layer for PartyServer on Durable Objects with migrations and an admin interface. |
| `contents/partyflow/README.md` | partyflow | Stub README for a lightweight workflow engine built on Durable Objects. |
| `contents/partyfn/README.md` | partyfn | Typesafe, bidirectional RPC between PartyServer client and server. |
| `contents/partyhard/README.md` | partyhard | Placeholder README for a PartyServer ecosystem component. |
| `contents/partyserver/README.md` | PartyServer | Core library: Server class on Durable Objects, installation, routing, connections, hibernation and lifecycle APIs. |
| `contents/partysession/README.md` | partysession | One-Durable-Object-per-user model for user-specific state such as shopping carts. |
| `contents/partysmart/README.md` | partysmart | Alias pointing to partyagent. |
| `contents/partysocket/README.md` | PartySocket | Reconnecting WebSocket client (fork of reconnecting-websocket) with install, features and options. |
| `contents/partysub/README.md` | partysub | Experimental pub-sub for Durable Objects in PartyServer. |
| `contents/partysync/README.md` | partysync | Experimental library to sync Durable Object state to clients. |
| `contents/partytracks/README.md` | partytracks | Observable-based WebRTC audio/video handling on Cloudflare Realtime SFU. |
| `contents/partywhen/README.md` | partywhen | Durable task scheduler on DO Alarms: schedule by time, delay or cron, query and cancel. |
| `contents/y-partyserver/README.md` | y-partyserver | Yjs backend for PartyServer (YServer) for collaborative editing, persistence and providers. |
| `contents/partysocket/TODO.md` | PartySocket TODO | Upstream reconnecting-websocket PRs to port. |

## When to use

Use this skill when the user asks about:
- Building real-time apps with PartyServer on Cloudflare Durable Objects
- Reconnecting WebSocket clients (PartySocket) and Hono integration (hono-party)
- Yjs collaborative editing with y-partyserver
- Scheduling, pub-sub, RPC, state sync, agents or WebRTC via the party* packages

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{package}/README.md`
