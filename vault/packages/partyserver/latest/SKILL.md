---
name: olore-partyserver-latest
description: Local partyserver documentation reference (latest). Cloudflare PartyKit documentation. Use for real-time collaborative apps, WebSocket servers, PartyServer, multiplayer features, Y.js integration, Durable Objects, RPC, storage, and edge-deployed stateful backends.
---

# partyserver Documentation

Cloudflare PartyKit documentation covering the full ecosystem of packages for building real-time, collaborative, and stateful applications on Cloudflare Workers and Durable Objects. Includes WebSocket handling, multiplayer room routing, Yjs/CRDT support, RPC, pub-sub, scheduling, and AI agent patterns.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/hono-party/README.md` | hono-party | Hono middleware integration — adds PartyServer WebSocket/multiplayer to Hono apps |
| `contents/partyagent/README.md` | partyagent | Autonomous AI agents on Durable Objects with NLP, tools, and task delegation |
| `contents/partybase/README.md` | partybase | Database layer for Durable Objects with migrations and admin UI |
| `contents/partyflow/README.md` | partyflow | Lightweight workflow engine built on Durable Objects |
| `contents/partyfn/README.md` | partyfn | Typesafe bidirectional RPC between client and Durable Object server |
| `contents/partyhard/README.md` | partyhard | PartyServer ecosystem component |
| `contents/partyserver/README.md` | PartyServer | Core library — room-based routing and real-time apps on Durable Objects |
| `contents/partysession/README.md` | partysession | One Durable Object per user — session and per-user state management |
| `contents/partysmart/README.md` | partysmart | Alias for partyagent |
| `contents/partysocket/README.md` | PartySocket | Auto-reconnecting WebSocket client with standard WebSocket API compatibility |
| `contents/partysub/README.md` | partysub | Pub-sub for Cloudflare Workers powered by Durable Objects (experimental) |
| `contents/partysync/README.md` | partysync | Experimental DO-to-client state synchronization library |
| `contents/partytracks/README.md` | partytracks | Observable-based WebRTC audio/video with Cloudflare Realtime SFU |
| `contents/partywhen/README.md` | partywhen | Durable task scheduler — time, delay, cron, and natural language scheduling via Alarms |
| `contents/y-partyserver/README.md` | y-partyserver | Yjs CRDT backend for PartyServer — collaborative editing over WebSocket |

## When to use

Use this skill when the user asks about:
- Setting up PartyServer or PartyKit for real-time WebSocket apps on Cloudflare
- Room-based routing and multiplayer app patterns with Durable Objects
- Collaborative editing or Y.js / Yjs integration (y-partyserver)
- Auto-reconnecting WebSocket clients (PartySocket)
- Typesafe RPC between client and server (partyfn)
- Pub-sub messaging on Cloudflare Workers (partysub)
- State synchronization between Durable Objects and clients (partysync)
- Scheduling durable tasks with cron, delay, or time expressions (partywhen)
- AI agents on Durable Objects (partyagent)
- Integrating PartyServer with Hono (hono-party)
- WebRTC audio/video in real-time apps (partytracks)

## How to find information

1. Check Quick Reference above for the relevant package
2. Read the specific file from `contents/{package}/README.md`
