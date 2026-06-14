# PartyKit Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Root docs: intro, quickstart, setup | 3 |
| `contents/guides/` | How-to guides for core features | 15 |
| `contents/reference/` | API reference for server, client, CLI, config | 7 |
| `contents/tutorials/` | Step-by-step Next.js tutorial | 8 |
| `contents/tutorials/add-partykit-to-a-nextjs-app/` | Multi-part Next.js integration tutorial | 7 |

## contents/ (root)

| File | Description |
|------|-------------|
| `index.mdx` | What is PartyKit — overview and key features |
| `quickstart.md` | Getting started quickly with PartyKit |
| `add-to-existing-project.md` | Adding PartyKit to an existing project |
| `how-partykit-works.md` | Architecture and internals overview |

## contents/guides/

| File | Description |
|------|-------------|
| `index.md` | Building a WebSocket server — core server setup guide |
| `authentication.md` | Authenticating users and connections |
| `creating-custom-endpoints-with-onfetch.md` | Creating custom HTTP endpoints with onFetch |
| `debugging.md` | Debugging PartyKit servers |
| `deploy-to-cloudflare.md` | Deploying to your own Cloudflare account (cloud-prem) |
| `deploying-your-partykit-server.md` | Deploying PartyKit servers |
| `handling-binary-messages.md` | Handling binary WebSocket messages |
| `integrating-partykit-into-a-react-app.md` | Integrating PartyKit into a React app |
| `integrating-partykit-with-deployment-platforms.md` | Integrating with Vercel, Netlify, and other platforms |
| `managing-environment-variables.md` | Managing environment variables and secrets |
| `persisting-state-into-storage.md` | Persisting state using the Storage API |
| `preview-environments.md` | Setting up preview environments |
| `rate-limiting-messages.md` | Rate limiting WebSocket messages |
| `responding-to-http-requests.md` | Responding to HTTP requests from the server |
| `scaling-partykit-servers-with-hibernation.mdx` | Scaling with WebSocket hibernation |
| `scheduling-tasks-with-alarms.md` | Scheduling tasks with alarms |
| `serving-static-assets.md` | Serving static assets |
| `setting-up-ci-cd-with-github-actions.md` | CI/CD with GitHub Actions |
| `using-multiple-parties-per-project.md` | Using multiple parties (rooms) per project |
| `validating-client-inputs.md` | Validating client inputs |

## contents/reference/

| File | Description |
|------|-------------|
| `index.md` | Reference overview — links to all API docs |
| `partyserver-api.md` | Party.Server API reference (main server class) |
| `partysocket-api.md` | PartySocket client API reference |
| `partykit-cli.md` | partykit CLI command reference |
| `partykit-configuration.md` | partykit.json configuration file reference |
| `partykit-ai.md` | PartyKit AI integration reference |
| `partykitserver-legacy-api.md` | PartyKitServer legacy API (deprecated) |
| `y-partykit-api.md` | y-partykit Yjs integration API reference |

## contents/tutorials/

| File | Description |
|------|-------------|
| `2-adding-realtime-cursors.md` | Tutorial: adding real-time cursor tracking |
| `add-partykit-to-a-nextjs-app/index.md` | Tutorial overview: adding PartyKit to Next.js |
| `add-partykit-to-a-nextjs-app/2-set-up-server.md` | Tutorial step 2: set up the PartyKit server |
| `add-partykit-to-a-nextjs-app/3-hook-up-data-to-the-server.md` | Tutorial step 3: connect data to the server |
| `add-partykit-to-a-nextjs-app/4-add-websockets.md` | Tutorial step 4: add WebSocket connections |
| `add-partykit-to-a-nextjs-app/5-broadcast-the-change.md` | Tutorial step 5: broadcast messages |
| `add-partykit-to-a-nextjs-app/6-add-storage.md` | Tutorial step 6: persist state with storage |
| `add-partykit-to-a-nextjs-app/7-deploy-your-app.md` | Tutorial step 7: deploy the app |
