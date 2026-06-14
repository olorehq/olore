# XState Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Core XState library concepts and API | 51 |
| `contents/packages/` | Package index | 1 |
| `contents/xstate-store/` | @xstate/store v2 integration guides | 11 |
| `contents/xstate-store-v3/` | @xstate/store v3 integration guides | 6 |

## contents/ (root — core XState)

| File | Description |
|------|-------------|
| `installation.mdx` | How to install XState |
| `quick-start.mdx` | 5-minute getting started guide |
| `setup.mdx` | Setup and configuration |
| `cheatsheet.mdx` | Quick reference cheatsheet |
| `migration.mdx` | Migrating from XState v4 to v5 |
| `xstate.mdx` | Main XState package overview |
| `state-machines-and-statecharts.mdx` | Introduction to state machines and statecharts |
| `actor-model.mdx` | Introduction to the actor model |
| `machines.mdx` | Creating and using machines |
| `states.mdx` | States overview |
| `finite-states.mdx` | Finite states |
| `initial-states.mdx` | Initial state configuration |
| `final-states.mdx` | Final states |
| `parallel-states.mdx` | Parallel states |
| `parent-states.mdx` | Parent (compound) states |
| `history-states.mdx` | History states |
| `transitions.mdx` | Transitions between states |
| `eventless-transitions.mdx` | Always/eventless transitions |
| `delayed-transitions.mdx` | Delayed (after) transitions |
| `pure-transitions.mdx` | Pure transitions |
| `state-done-events.mdx` | State done events |
| `guards.mdx` | Guards for conditional transitions |
| `actions.mdx` | Actions (side effects) |
| `context.mdx` | Context (extended state) |
| `input.mdx` | Machine input |
| `output.mdx` | Machine output |
| `tags.mdx` | State tags |
| `actors.mdx` | Actors overview |
| `invoke.mdx` | Invoking actors |
| `spawn.mdx` | Spawning actors |
| `promise-actors.mdx` | Promise-based actors |
| `callback-actors.mdx` | Callback actors |
| `observable-actors.mdx` | Observable actors |
| `transition-actors.mdx` | Transition actors |
| `function-actors.mdx` | Function actors |
| `state-machine-actors.mdx` | State machine actors |
| `sources.mdx` | Actor sources |
| `system.mdx` | Actor system |
| `event-emitter.mdx` | Event emitter |
| `persistence.mdx` | Persisting actor state |
| `machine-restore.mdx` | Restoring machine state |
| `inspection.mdx` | Inspecting machines at runtime |
| `inspector.mdx` | XState Inspector |
| `immer.mdx` | Using Immer with XState |
| `typescript.mdx` | TypeScript usage |
| `typegen.mdx` | Type generation |
| `testing.mdx` | Testing state machines |
| `graph.mdx` | Graph utilities and model-based testing paths |
| `glossary.mdx` | Glossary of terms |
| `examples.mdx` | Code examples and links |

## contents/packages/

| File | Description |
|------|-------------|
| `index.mdx` | Overview of all official XState packages |

## contents/xstate-store/

| File | Description |
|------|-------------|
| `xstate-store.mdx` | @xstate/store overview and API |
| `xstate-store-v2.mdx` | @xstate/store v2 docs |
| `react.mdx` | Using @xstate/store with React |
| `preact.mdx` | Using @xstate/store with Preact |
| `svelte.mdx` | Using @xstate/store with Svelte |
| `vue.mdx` | Using @xstate/store with Vue |
| `angular.mdx` | Using @xstate/store with Angular |
| `solid.mdx` | Using @xstate/store with Solid |
| `persist.mdx` | Persisting store state |
| `reset.mdx` | Resetting store state |
| `undo-redo.mdx` | Undo/redo with @xstate/store |
| `validate-schemas.mdx` | Schema validation in @xstate/store |
| `migration.mdx` | Migrating @xstate/store versions |

## contents/xstate-store-v3/

| File | Description |
|------|-------------|
| `xstate-store-v3.mdx` | @xstate/store v3 overview |
| `react.mdx` | @xstate/store v3 with React |
| `preact.mdx` | @xstate/store v3 with Preact |
| `svelte.mdx` | @xstate/store v3 with Svelte |
| `vue.mdx` | @xstate/store v3 with Vue |
| `angular.mdx` | @xstate/store v3 with Angular |
| `solid.mdx` | @xstate/store v3 with Solid |

## Framework Integration Packages

| File | Description |
|------|-------------|
| `xstate-react.mdx` | @xstate/react — hooks for React |
| `xstate-vue.mdx` | @xstate/vue — utilities for Vue |
| `xstate-svelte.mdx` | @xstate/svelte — utilities for Svelte |
| `xstate-test.mdx` | @xstate/test — model-based testing |
| `xstate-graph.mdx` | @xstate/graph — graph traversal (legacy) |
| `xstate-immer.mdx` | @xstate/immer — Immer integration |
| `xstate-fsm.mdx` | @xstate/fsm — finite state machine (minimal) |
