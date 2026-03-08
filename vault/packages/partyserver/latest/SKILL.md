---
name: olore-partyserver-latest
description: Local partyserver documentation reference (latest). Cloudflare PartyKit documentation. Use for real-time collaborative apps, WebSocket servers, PartyServer, multiplayer features, Y.js integration, Durable Objects, RPC, storage, and edge-deployed stateful backends.
---

# partyserver Documentation

Cloudflare PartyKit documentation. Use for real-time collaborative apps, WebSocket servers, PartyServer, multiplayer features, Y.js integration, Durable Objects, RPC, storage, and edge-deployed stateful backends.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/hono-party/README.md` | hono-party | Hono middleware integration for PartyServer WebSockets |
| `contents/partyagent/README.md` | partyagent | Autonomous AI agents on Durable Objects with tool usage and task hand-off |
| `contents/partybase/README.md` | partybase | Database solution for PartyServer with migration system |
| `contents/partyflow/README.md` | partyflow | Lightweight workflow engine for PartyServer |
| `contents/partyfn/README.md` | partyfn | Typesafe bidirectional RPC between client and server |
| `contents/partyhard/README.md` | partyhard | Component of the PartyServer ecosystem |
| `contents/partyserver/README.md` | PartyServer | Core library: Server class, lifecycle hooks, broadcasting, routing, hibernation |
| `contents/partysession/README.md` | partysession | Per-user Durable Object session state management |
| `contents/partysmart/README.md` | partysmart | Alias for partyagent |
| `contents/partysocket/README.md` | PartySocket | Reconnecting WebSocket client with buffering and multi-platform support |
| `contents/partysub/README.md` | partysub | Pub-sub for Durable Objects |
| `contents/partysync/README.md` | partysync | Experimental DO-to-client state synchronization |
| `contents/partytracks/README.md` | partytracks | Observable-based WebRTC audio/video via Cloudflare Realtime SFU |
| `contents/partywhen/README.md` | partywhen | Durable task scheduler with cron and alarm support |
| `contents/y-partyserver/README.md` | y-partyserver | Yjs CRDT backend for collaborative editing |

## When to use

Use this skill when the user asks about:
- Building real-time WebSocket servers with Durable Objects on Cloudflare Workers
- PartyServer Server class, lifecycle hooks (onConnect, onMessage, onClose, onStart, onAlarm), broadcasting
- Routing WebSocket/HTTP requests with routePartykitRequest or getServerByName
- Connecting from the client using PartySocket (reconnecting WebSocket)
- Collaborative editing, shared state, or Yjs/CRDT integration with y-partyserver
- Pub-sub messaging with partysub
- Typesafe RPC between client and server with partyfn
- Scheduling durable tasks or cron jobs with partywhen
- Integrating PartyServer with Hono via hono-party
- WebRTC audio/video in real-time apps with partytracks
- Per-user session state with partysession
- AI agents on Durable Objects with partyagent

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
