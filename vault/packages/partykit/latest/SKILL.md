---
name: olore-partykit-latest
description: Local PartyKit documentation reference (latest). PartyKit documentation. Use for real-time collaborative apps, WebSocket servers, multiplayer features, Y.js integration, and edge-deployed stateful backends.
---

# PartyKit Documentation

PartyKit documentation. Use for real-time collaborative apps, WebSocket servers, multiplayer features, Y.js integration, and edge-deployed stateful backends.

## Documentation Structure

```
contents/
├── /                  # Getting started guides (4 files)
├── guides/            # How-to guides and best practices (19 files)
├── reference/         # API reference documentation (7 files)
├── examples/          # Example apps and starter kits (19 files)
└── tutorials/         # Step-by-step tutorials (7 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting Started | `contents/quickstart.md`, `contents/add-to-existing-project.md`, `contents/how-partykit-works.md` |
| Server API | `contents/reference/partyserver-api.md`, `contents/reference/partykitserver-legacy-api.md` |
| Client API | `contents/reference/partysocket-api.md` |
| Configuration | `contents/reference/partykit-configuration.md`, `contents/guides/managing-environment-variables.md` |
| CLI Tools | `contents/reference/partykit-cli.md` |
| WebSockets | `contents/guides/handling-binary-messages.md`, `contents/guides/rate-limiting-messages.md` |
| Storage & Persistence | `contents/guides/persisting-state-into-storage.md` |
| HTTP Endpoints | `contents/guides/creating-custom-endpoints-with-onfetch.md`, `contents/guides/responding-to-http-requests.md` |
| Authentication | `contents/guides/authentication.md`, `contents/guides/validating-client-inputs.md` |
| Deployment | `contents/guides/deploying-your-partykit-server.md`, `contents/guides/deploy-to-cloudflare.md`, `contents/guides/preview-environments.md` |
| Framework Integration | `contents/guides/integrating-partykit-into-a-react-app.md`, `contents/examples/starter-kits/remix-starter.md` |
| Scaling | `contents/guides/scaling-partykit-servers-with-hibernation.mdx`, `contents/guides/using-multiple-parties-per-project.md` |
| Scheduling | `contents/guides/scheduling-tasks-with-alarms.md` |
| AI Integration | `contents/reference/partykit-ai.md`, `contents/examples/app-examples/chat-app-with-ai-and-auth.md` |
| Y.js CRDT | `contents/reference/y-partykit-api.md`, `contents/examples/app-examples/multiplayer-text-editor.md` |
| CI/CD | `contents/guides/setting-up-ci-cd-with-github-actions.md` |
| Debugging | `contents/guides/debugging.md` |

## When to use

Use this skill when the user asks about:
- Real-time collaborative applications
- WebSocket servers and multiplayer features
- PartyKit server or client API
- Deploying stateful edge servers
- Y.js integration for CRDTs
- PartyKit configuration and CLI
- Building chat apps, cursors, or live updates
- PartyKit AI features

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
