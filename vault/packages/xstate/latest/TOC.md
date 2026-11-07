# xstate Table of Contents

## Directory Map

```
contents/
├── (root)            # XState core, Stately Studio, packages (92 files)
├── agents/           # AI agents with XState (1 file)
├── packages/         # Packages index (1 file)
├── stately-studio/   # Studio MCP support (1 file)
└── xstate-store/     # @xstate/store guides, framework bindings, comparisons (16 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quick-start.mdx`, `contents/installation.mdx` |
| Core concepts | `contents/machines.mdx`, `contents/states.mdx`, `contents/transitions.mdx` |
| Actors | `contents/actors.mdx`, `contents/invoke.mdx`, `contents/spawn.mdx` |
| TypeScript | `contents/typescript.mdx`, `contents/setup.mdx` |
| Testing | `contents/testing.mdx`, `contents/xstate-test.mdx` |
| v4 to v5 migration | `contents/migration.mdx` |
| Simple store | `contents/xstate-store.mdx` |
| Stately Studio | `contents/studio.mdx` |

## Detailed Structure

### Getting started and concepts

| File | Description |
|------|-------------|
| `index.mdx` | Landing page for Stately and XState docs |
| `xstate.mdx` | XState v5 overview and installation for JS/TS |
| `installation.mdx` | How to install XState |
| `quick-start.mdx` | Jump straight into XState and Stately Studio |
| `cheatsheet.mdx` | Condensed code snippets for common XState APIs |
| `examples.mdx` | Gallery of XState example projects |
| `glossary.mdx` | Definitions of state machine and XState terms |
| `state-machines-and-statecharts.mdx` | Introduction to state machines and statecharts |
| `statecharts.mdx` | How statecharts extend state machines, with coffee and donut examples |
| `actor-model.mdx` | The actor model and how XState implements it |
| `migration.mdx` | Migrating from XState v4 to v5 |

### Machines, states, and transitions

| File | Description |
|------|-------------|
| `machines.mdx` | Creating state machines with `createMachine` |
| `setup.mdx` | `setup()` for typed machines, actions, guards, and actors |
| `states.mdx` | State values, snapshots, and matching |
| `finite-states.mdx` | Finite states and finite state machines |
| `initial-states.mdx` | Defining the initial state |
| `parent-states.mdx` | Hierarchical (nested) states |
| `parallel-states.mdx` | Parallel (orthogonal) states |
| `final-states.mdx` | Final states and machine completion |
| `history-states.mdx` | History states to resume prior state |
| `state-done-events.mdx` | Done events emitted when states finish |
| `transitions.mdx` | Events and transitions |
| `delayed-transitions.mdx` | Delayed (`after`) transitions |
| `eventless-transitions.mdx` | Eventless (`always`) transitions |
| `pure-transitions.mdx` | Pure transition functions without running actors |
| `context.mdx` | Extended state (context) and `assign` |
| `input.mdx` | Passing input to machines and actors |
| `output.mdx` | Machine output on completion |
| `guards.mdx` | Conditional transitions with guards |
| `actions.mdx` | Entry, exit, and transition actions, built-in actions |
| `tags.mdx` | Tagging states and checking tags |
| `event-emitter.mdx` | Emitting events from actors to external listeners |
| `descriptions.mdx` | Adding descriptions to states and transitions |
| `routes.mdx` | Route-based state configuration |

### Actors

| File | Description |
|------|-------------|
| `actors.mdx` | Actor types, creating, sending events, and snapshots |
| `invoke.mdx` | Invoking actors from states |
| `spawn.mdx` | Spawning actors dynamically |
| `system.mdx` | Actor systems and system IDs |
| `state-machine-actors.mdx` | Actors created from state machines |
| `promise-actors.mdx` | Promise actors for async work |
| `callback-actors.mdx` | Callback actors for subscriptions and side effects |
| `observable-actors.mdx` | Observable actors for streams |
| `transition-actors.mdx` | Transition actors using reducer-like logic |
| `persistence.mdx` | Persisting and restoring actor state |
| `inspection.mdx` | Inspecting actor events and snapshots |

### Tooling, TypeScript, and testing

| File | Description |
|------|-------------|
| `typescript.mdx` | Using XState with TypeScript |
| `testing.mdx` | Testing machine and actor logic |
| `graph.mdx` | Generating paths through machines for testing and analysis |
| `immer.mdx` | Using Immer with XState context |
| `developer-tools.mdx` | XState CLI and Chrome devtools |
| `inspector.mdx` | Stately Inspector for visualizing running actors |
| `xstate-vscode-extension.mdx` | VS Code extension for XState |

### Packages

| File | Description |
|------|-------------|
| `packages/index.mdx` | Overview of XState packages |
| `xstate-react.mdx` | `@xstate/react` hooks and helpers |
| `xstate-vue.mdx` | `@xstate/vue` utilities |
| `xstate-svelte.mdx` | `@xstate/svelte` utilities |
| `xstate-graph.mdx` | `@xstate/graph` graph algorithms and path generation |
| `xstate-test.mdx` | `@xstate/test` model-based testing |
| `agents/agents.mdx` | Authoring AI agents as typed state machines |

### xstate-store (17 files including root)

| File | Description |
|------|-------------|
| `xstate-store.mdx` | `@xstate/store` simple event-based state management |
| `xstate-store/migration.mdx` | Migrating to store v4 |
| `xstate-store/persist.mdx` | Persisting store state |
| `xstate-store/reset.mdx` | Resetting a store |
| `xstate-store/undo-redo.mdx` | Undo and redo support |
| `xstate-store/validate-schemas.mdx` | Validating events with schemas |
| `xstate-store/react.mdx` | `@xstate/store-react` bindings |
| `xstate-store/vue.mdx` | `@xstate/store-vue` bindings |
| `xstate-store/svelte.mdx` | `@xstate/store-svelte` bindings |
| `xstate-store/solid.mdx` | `@xstate/store-solid` bindings |
| `xstate-store/preact.mdx` | `@xstate/store-preact` bindings |
| `xstate-store/angular.mdx` | `@xstate/store-angular` bindings |
| `xstate-store/compare-jotai.mdx` | Comparison with Jotai |
| `xstate-store/compare-pinia.mdx` | Comparison with Pinia |
| `xstate-store/compare-recoil.mdx` | Comparison with Recoil |
| `xstate-store/compare-redux.mdx` | Comparison with Redux |
| `xstate-store/compare-zustand.mdx` | Comparison with Zustand |

### Stately Studio: overview and projects

| File | Description |
|------|-------------|
| `studio.mdx` | Stately Studio visual editor overview |
| `studio-api.mdx` | Stately Studio API |
| `stately-studio/mcp-support.mdx` | MCP support for ChatGPT, Codex, and other hosts |
| `self-hosting.mdx` | Self-hosting the Stately editor |
| `projects.mdx` | Organizing machines into projects |
| `teams.mdx` | Teams and collaboration |
| `templates.mdx` | Starting from templates |
| `discover.mdx` | Discovering public machines |
| `versions.mdx` | Version history of machines |
| `lock-machines.mdx` | Locking machines against edits |
| `user-preferences.mdx` | Editor user preferences |
| `machine-restore.mdx` | Restoring deleted machines |

### Stately Studio: editor features

| File | Description |
|------|-------------|
| `design-mode.mdx` | Tour of Design mode panels |
| `simulate-mode.mdx` | Tour of Simulate mode panels |
| `live-simulation.mdx` | Live simulation mode |
| `editor-states-and-transitions.mdx` | States and transitions in the editor |
| `editor-actions-and-actors.mdx` | Actions and actors in the editor |
| `editor-tags.mdx` | Tags in the editor |
| `annotations.mdx` | Notes (annotations) on the canvas |
| `assets.mdx` | Assets on states |
| `autolayout.mdx` | Automatic layout of machines |
| `canvas-view-controls.mdx` | Canvas view controls |
| `colors.mdx` | Colors for states and transitions |
| `keyboard-shortcuts.mdx` | Editor keyboard shortcuts |
| `sources.mdx` | Source code panel for actors, actions, guards |

### Stately Studio: import, export, sharing, AI

| File | Description |
|------|-------------|
| `import-from-code.mdx` | Importing machines from code |
| `import-from-github.mdx` | Syncing machines from a GitHub repo |
| `export-as-code.mdx` | Exporting machines as code |
| `embed.mdx` | Embedding machines via iframe |
| `figma.mdx` | Embedding in Figma |
| `image.mdx` | Sharing machine images via URL |
| `url.mdx` | Sharing machines via share URL |
| `generate-flow.mdx` | Generating machines with AI |
| `generate-react.mdx` | Generating a React app from a machine |
| `generate-test-paths.mdx` | Generating test paths from a machine |
