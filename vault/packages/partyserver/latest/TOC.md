# partyserver Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/hono-party/README.md` | Hono middleware that routes WebSocket requests to PartyServer Durable Objects. |
| `contents/partyagent/README.md` | Autonomous agents on Durable Objects (extends PartySync) with tools, personalities and task hand-off. |
| `contents/partybase/README.md` | Database layer for PartyServer on Durable Objects with migrations and an admin interface. |
| `contents/partyflow/README.md` | Stub README for a lightweight workflow engine built on Durable Objects. |
| `contents/partyfn/README.md` | Typesafe, bidirectional RPC between PartyServer client and server. |
| `contents/partyhard/README.md` | Placeholder README for a PartyServer ecosystem component. |
| `contents/partyserver/README.md` | Core library: Server class on Durable Objects, installation, routing, connections, hibernation and lifecycle APIs. |
| `contents/partysession/README.md` | One-Durable-Object-per-user model for user-specific state such as shopping carts. |
| `contents/partysmart/README.md` | Alias pointing to partyagent. |
| `contents/partysocket/README.md` | Reconnecting WebSocket client (fork of reconnecting-websocket) with install, features and options. |
| `contents/partysub/README.md` | Experimental pub-sub for Durable Objects in PartyServer. |
| `contents/partysync/README.md` | Experimental library to sync Durable Object state to clients. |
| `contents/partytracks/README.md` | Observable-based WebRTC audio/video handling on Cloudflare Realtime SFU. |
| `contents/partywhen/README.md` | Durable task scheduler on DO Alarms: schedule by time, delay or cron, query and cancel. |
| `contents/y-partyserver/README.md` | Yjs backend for PartyServer (YServer) for collaborative editing, persistence and providers. |
| `contents/partysocket/TODO.md` | Maintainer list of upstream reconnecting-websocket PRs to port into PartySocket. |
