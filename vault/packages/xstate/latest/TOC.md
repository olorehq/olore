# XState Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Core XState concepts, API reference, and integrations | 86 |
| `contents/agents/` | AI agents integration | 1 |
| `contents/xstate-store/` | XState Store framework integrations | 6 |

## Root Level - Core Documentation

### Getting Started

| File | Description |
|------|-------------|
| `index.mdx` | Documentation home and overview |
| `installation.mdx` | Installing XState |
| `quick-start.mdx` | Quick start guide |
| `xstate.mdx` | Main XState library overview |

### State Machines Fundamentals

| File | Description |
|------|-------------|
| `state-machines-and-statecharts.mdx` | Introduction to state machines and statecharts |
| `machines.mdx` | Creating and configuring machines |
| `states.mdx` | Working with states |
| `finite-states.mdx` | Finite state concepts |
| `initial-states.mdx` | Defining initial states |
| `final-states.mdx` | Terminal states |
| `parent-states.mdx` | Hierarchical states |
| `parallel-states.mdx` | Concurrent states |
| `history-states.mdx` | History state nodes |

### Transitions

| File | Description |
|------|-------------|
| `transitions.mdx` | State transitions |
| `delayed-transitions.mdx` | After transitions with delays |
| `eventless-transitions.mdx` | Always transitions |
| `pure-transitions.mdx` | Pure transitions without side effects |

### Actions and Guards

| File | Description |
|------|-------------|
| `actions.mdx` | Effects and side effects |
| `guards.mdx` | Conditional transitions |

### Context and Data

| File | Description |
|------|-------------|
| `context.mdx` | Machine context and data |
| `input.mdx` | Input to machines |
| `output.mdx` | Output from machines |

### Actors

| File | Description |
|------|-------------|
| `actors.mdx` | Actor model overview |
| `actor-model.mdx` | Actor model concepts |
| `invoke.mdx` | Invoking actors |
| `spawn.mdx` | Spawning actors |
| `callback-actors.mdx` | Callback actor implementation |
| `promise-actors.mdx` | Promise-based actors |
| `observable-actors.mdx` | Observable actors |
| `function-actors.mdx` | Function actors |
| `state-machine-actors.mdx` | State machine actors |
| `transition-actors.mdx` | Transition actors |

### Configuration and Setup

| File | Description |
|------|-------------|
| `setup.mdx` | Machine setup and configuration |
| `annotations.mdx` | Type annotations |
| `descriptions.mdx` | Adding descriptions to machines |
| `tags.mdx` | Tagging states |

### TypeScript

| File | Description |
|------|-------------|
| `typescript.mdx` | TypeScript integration |
| `typegen.mdx` | Type generation |

### Developer Tools and Testing

| File | Description |
|------|-------------|
| `developer-tools.mdx` | Development tools overview |
| `inspector.mdx` | State machine inspector |
| `inspection.mdx` | Inspection API |
| `visualizer.mdx` | State machine visualizer |
| `testing.mdx` | Testing state machines |
| `xstate-test.mdx` | XState Test package |
| `generate-test-paths.mdx` | Generating test paths |

### Stately Studio Integration

| File | Description |
|------|-------------|
| `studio.mdx` | Stately Studio overview |
| `studio-api.mdx` | Stately Studio API |
| `stately-sky-getting-started.mdx` | Getting started with Stately Sky |
| `import-from-code.mdx` | Importing machines from code |
| `import-from-github.mdx` | Importing from GitHub |
| `export-as-code.mdx` | Exporting as code |
| `sources.mdx` | Source management |
| `url.mdx` | URL handling |
| `embed.mdx` | Embedding machines |
| `design-mode.mdx` | Design mode |
| `simulate-mode.mdx` | Simulate mode |
| `live-simulation.mdx` | Live simulation |
| `editor-states-and-transitions.mdx` | Editor: states and transitions |
| `editor-actions-and-actors.mdx` | Editor: actions and actors |
| `editor-context-and-meta.mdx` | Editor: context and metadata |
| `editor-tags.mdx` | Editor: tags |
| `generate-flow.mdx` | Generate Flow diagrams |
| `generate-react.mdx` | Generate React code |
| `figma.mdx` | Figma integration |
| `image.mdx` | Image export |
| `graph.mdx` | Graph API |
| `machine-restore.mdx` | Machine restore functionality |
| `assets.mdx` | Asset management |

### Framework Integrations

| File | Description |
|------|-------------|
| `xstate-react.mdx` | React integration |
| `xstate-vue.mdx` | Vue integration |
| `xstate-svelte.mdx` | Svelte integration |

### Related Libraries

| File | Description |
|------|-------------|
| `xstate-store.mdx` | XState Store library |
| `xstate-store-v2.mdx` | XState Store v2 |
| `xstate-graph.mdx` | XState Graph library |
| `xstate-immer.mdx` | Immer integration |
| `xstate-fsm.mdx` | Finite state machine library |
| `xstate-vscode-extension.mdx` | VS Code extension |
| `immer.mdx` | Using Immer with XState |
| `event-emitter.mdx` | Event emitter pattern |

### Advanced Topics

| File | Description |
|------|-------------|
| `system.mdx` | System actors |
| `persistence.mdx` | State persistence |
| `state-done-events.mdx` | State done events |

### Reference

| File | Description |
|------|-------------|
| `cheatsheet.mdx` | XState cheatsheet |
| `glossary.mdx` | Terminology glossary |
| `migration.mdx` | Migration guide (v4 to v5) |
| `examples.mdx` | Example projects |

## agents/

| File | Description |
|------|-------------|
| `agents.mdx` | AI agents with XState |

## xstate-store/

Framework-specific integrations for XState Store.

| File | Description |
|------|-------------|
| `react.mdx` | React integration |
| `vue.mdx` | Vue integration |
| `svelte.mdx` | Svelte integration |
| `angular.mdx` | Angular integration |
| `solid.mdx` | Solid integration |
| `preact.mdx` | Preact integration |
