---
name: olore-xstate-latest
description: Local XState documentation reference (latest). XState state machine documentation. Use for state machines, statecharts, actors, transitions, guards, context, React/Vue/Svelte integrations, and Stately Studio.
---

# XState Documentation

XState state machine documentation. Use for state machines, statecharts, actors, transitions, guards, context, React/Vue/Svelte integrations, and Stately Studio.

## Documentation Structure

```
contents/
├── (root)/              # Core concepts, API reference, integrations (86 files)
├── agents/              # AI agents integration (1 file)
└── xstate-store/        # XState Store framework integrations (6 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting Started | `contents/installation.mdx`, `contents/quick-start.mdx`, `contents/xstate.mdx` |
| State Machines Basics | `contents/state-machines-and-statecharts.mdx`, `contents/machines.mdx`, `contents/states.mdx` |
| State Types | `contents/finite-states.mdx`, `contents/initial-states.mdx`, `contents/final-states.mdx`, `contents/parent-states.mdx`, `contents/parallel-states.mdx`, `contents/history-states.mdx` |
| Transitions | `contents/transitions.mdx`, `contents/delayed-transitions.mdx`, `contents/eventless-transitions.mdx`, `contents/guards.mdx` |
| Actions & Effects | `contents/actions.mdx` |
| Context & Data | `contents/context.mdx`, `contents/input.mdx`, `contents/output.mdx` |
| Actor Model | `contents/actors.mdx`, `contents/actor-model.mdx`, `contents/invoke.mdx`, `contents/spawn.mdx` |
| Actor Types | `contents/callback-actors.mdx`, `contents/promise-actors.mdx`, `contents/observable-actors.mdx`, `contents/function-actors.mdx`, `contents/state-machine-actors.mdx`, `contents/transition-actors.mdx` |
| TypeScript | `contents/typescript.mdx`, `contents/typegen.mdx`, `contents/annotations.mdx` |
| Setup & Config | `contents/setup.mdx`, `contents/descriptions.mdx`, `contents/tags.mdx` |
| React Integration | `contents/xstate-react.mdx` |
| Vue Integration | `contents/xstate-vue.mdx` |
| Svelte Integration | `contents/xstate-svelte.mdx` |
| Testing | `contents/testing.mdx`, `contents/xstate-test.mdx`, `contents/generate-test-paths.mdx` |
| Dev Tools | `contents/inspector.mdx`, `contents/inspection.mdx`, `contents/visualizer.mdx`, `contents/developer-tools.mdx` |
| XState Store | `contents/xstate-store.mdx`, `contents/xstate-store-v2.mdx`, `contents/xstate-store/react.mdx`, `contents/xstate-store/vue.mdx`, `contents/xstate-store/svelte.mdx` |
| Stately Studio | `contents/studio.mdx`, `contents/studio-api.mdx`, `contents/import-from-code.mdx`, `contents/export-as-code.mdx` |
| Other Libraries | `contents/xstate-graph.mdx`, `contents/xstate-immer.mdx`, `contents/xstate-fsm.mdx`, `contents/xstate-vscode-extension.mdx` |
| Advanced | `contents/system.mdx`, `contents/persistence.mdx`, `contents/state-done-events.mdx` |
| Reference | `contents/cheatsheet.mdx`, `contents/glossary.mdx`, `contents/migration.mdx`, `contents/examples.mdx` |
| AI Agents | `contents/agents/agents.mdx` |

## When to use

Use this skill when the user asks about:
- State machines and statecharts
- XState library and API
- Actors and the actor model
- State transitions, guards, and actions
- Machine context and data management
- Framework integrations (React, Vue, Svelte, Angular)
- TypeScript types and type safety
- Testing state machines
- Stately Studio visual editor
- XState Store for state management
- Migration from XState v4 to v5

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
