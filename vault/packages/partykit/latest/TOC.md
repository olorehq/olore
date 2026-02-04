# PartyKit Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Getting started guides | 4 |
| `contents/guides/` | How-to guides and best practices | 19 |
| `contents/reference/` | API reference documentation | 7 |
| `contents/examples/` | Example apps and starter kits | 19 |
| `contents/tutorials/` | Step-by-step tutorials | 7 |

## Root Files

| File | Description |
|------|-------------|
| `quickstart.md` | Quick start guide to create first PartyKit app |
| `add-to-existing-project.md` | Add PartyKit to existing projects |
| `how-partykit-works.md` | Understanding PartyKit architecture and runtime |
| `glossary.md` | Key terms and concepts glossary |

## guides/

| File | Description |
|------|-------------|
| `authentication.md` | Setting up authentication |
| `creating-custom-endpoints-with-onfetch.md` | Custom HTTP endpoints with onFetch |
| `debugging.md` | Debugging PartyKit applications |
| `deploy-to-cloudflare.md` | Deploying to Cloudflare |
| `deploying-your-partykit-server.md` | Deployment guide |
| `handling-binary-messages.md` | Working with binary WebSocket messages |
| `integrating-partykit-into-a-react-app.md` | React integration guide |
| `integrating-partykit-with-deployment-platforms.md` | Platform integrations |
| `managing-environment-variables.md` | Environment variable management |
| `persisting-state-into-storage.md` | Using storage API for persistence |
| `preview-environments.md` | Preview environment setup |
| `rate-limiting-messages.md` | Rate limiting WebSocket messages |
| `responding-to-http-requests.md` | Handling HTTP requests |
| `scaling-partykit-servers-with-hibernation.mdx` | Server scaling and hibernation |
| `scheduling-tasks-with-alarms.md` | Task scheduling with alarms |
| `serving-static-assets.md` | Serving static assets |
| `setting-up-ci-cd-with-github-actions.md` | CI/CD with GitHub Actions |
| `using-multiple-parties-per-project.md` | Multiple parties in one project |
| `validating-client-inputs.md` | Input validation patterns |

## reference/

| File | Description |
|------|-------------|
| `partykit-ai.md` | PartyKit AI API reference |
| `partykit-cli.md` | CLI commands and options |
| `partykit-configuration.md` | Configuration file reference |
| `partykitserver-legacy-api.md` | Legacy server API |
| `partyserver-api.md` | Party.Server API reference |
| `partysocket-api.md` | PartySocket client API reference |
| `y-partykit-api.md` | Y.js integration API |

## examples/app-examples/

| File | Description |
|------|-------------|
| `active-user-avatars.md` | Real-time user avatars example |
| `chat-app-with-ai-and-auth.md` | Chat app with AI and authentication |
| `connection-counter.md` | WebSocket connection counter |
| `cursors-with-country-flags.md` | Collaborative cursors with flags |
| `falling-sand-game-three-js.md` | Three.js falling sand game |
| `live-polls-app.md` | Live polling application |
| `live-polls-web-component.md` | Live polls as web component |
| `mosaic-realtime-game.md` | Mosaic real-time game |
| `multiplayer-ai-chat-rooms.md` | Multiplayer AI chat rooms |
| `multiplayer-text-editor.md` | Collaborative text editor |
| `realtime-reaction-counter.md` | Real-time reaction counter |
| `the-namib-desert-watering-hole-livestream.md` | Livestream collaboration example |
| `two-way-hyperlinks-and-social-webpages.md` | Social webpages with hyperlinks |
| `youtube-watch-party.md` | YouTube watch party app |

## examples/starter-kits/

| File | Description |
|------|-------------|
| `game-starter-nextjs-redux.md` | Game starter with Next.js and Redux |
| `remix-starter.md` | Remix framework starter |
| `replicache-starter.md` | Replicache integration starter |
| `tinybase-starter.md` | TinyBase integration starter |

## tutorials/

| File | Description |
|------|-------------|
| `2-adding-realtime-cursors.md` | Adding real-time cursors tutorial |
| `add-partykit-to-a-nextjs-app/index.md` | Next.js integration tutorial overview |
| `add-partykit-to-a-nextjs-app/2-set-up-server.md` | Setting up PartyKit server |
| `add-partykit-to-a-nextjs-app/3-hook-up-data-to-the-server.md` | Connecting data to server |
| `add-partykit-to-a-nextjs-app/4-add-websockets.md` | Adding WebSocket connections |
| `add-partykit-to-a-nextjs-app/5-broadcast-the-change.md` | Broadcasting state changes |
| `add-partykit-to-a-nextjs-app/6-add-storage.md` | Adding persistent storage |
| `add-partykit-to-a-nextjs-app/7-deploy-your-app.md` | Deploying the application |
