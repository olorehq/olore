---
name: olore-partykit-latest
description: Local PartyKit documentation reference (latest). PartyKit simplifies developing multiplayer applications. Use for real-time collaborative apps, WebSocket servers, multiplayer features, Y.js integration, and edge-deployed stateful backends.
---

# PartyKit Documentation

PartyKit simplifies developing multiplayer applications. Use for real-time collaborative apps, WebSocket servers, multiplayer features, Y.js integration, and edge-deployed stateful backends.

## Documentation Structure

```
contents/
├── (root)/          # Intro, quickstart, how it works (4 files)
├── guides/          # How-to guides for core features (20 files)
├── reference/       # API reference — server, client, CLI, config, AI, Yjs (8 files)
└── tutorials/       # Step-by-step Next.js tutorial series (8 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / quickstart | `contents/quickstart.md`, `contents/add-to-existing-project.md`, `contents/index.mdx` |
| How PartyKit works | `contents/how-partykit-works.md` |
| Server API (Party.Server) | `contents/reference/partyserver-api.md`, `contents/guides/index.md` |
| Client API (PartySocket) | `contents/reference/partysocket-api.md` |
| WebSocket messaging | `contents/guides/handling-binary-messages.md`, `contents/guides/rate-limiting-messages.md`, `contents/guides/validating-client-inputs.md` |
| HTTP endpoints | `contents/guides/creating-custom-endpoints-with-onfetch.md`, `contents/guides/responding-to-http-requests.md` |
| State persistence / storage | `contents/guides/persisting-state-into-storage.md`, `contents/tutorials/add-partykit-to-a-nextjs-app/6-add-storage.md` |
| Authentication | `contents/guides/authentication.md` |
| React integration | `contents/guides/integrating-partykit-into-a-react-app.md` |
| Next.js integration (tutorial) | `contents/tutorials/add-partykit-to-a-nextjs-app/index.md` + steps 2-7 |
| Real-time cursors | `contents/tutorials/2-adding-realtime-cursors.md` |
| Multiple parties / rooms | `contents/guides/using-multiple-parties-per-project.md` |
| Scaling / hibernation | `contents/guides/scaling-partykit-servers-with-hibernation.mdx` |
| Scheduled tasks / alarms | `contents/guides/scheduling-tasks-with-alarms.md` |
| Deployment | `contents/guides/deploying-your-partykit-server.md`, `contents/guides/deploy-to-cloudflare.md`, `contents/guides/integrating-partykit-with-deployment-platforms.md` |
| CI/CD | `contents/guides/setting-up-ci-cd-with-github-actions.md` |
| Environment variables | `contents/guides/managing-environment-variables.md` |
| Static assets | `contents/guides/serving-static-assets.md` |
| Preview environments | `contents/guides/preview-environments.md` |
| Debugging | `contents/guides/debugging.md` |
| CLI reference | `contents/reference/partykit-cli.md` |
| Configuration (partykit.json) | `contents/reference/partykit-configuration.md` |
| Y.js / Yjs integration | `contents/reference/y-partykit-api.md` |
| AI integration | `contents/reference/partykit-ai.md` |
| Legacy API | `contents/reference/partykitserver-legacy-api.md` |

## When to use

Use this skill when the user asks about:
- Building real-time, multiplayer, or collaborative applications with PartyKit
- WebSocket server setup, message broadcasting, and connection management
- PartyKit's Party.Server or PartySocket APIs
- State persistence, storage, and alarms in PartyKit
- Authentication, rate limiting, or input validation in PartyKit servers
- Integrating PartyKit with Next.js, React, Remix, or Cloudflare Workers
- Y.js / Yjs real-time collaboration with PartyKit
- Deploying, configuring, or debugging PartyKit projects
- The partykit CLI commands or partykit.json configuration

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
