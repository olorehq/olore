---
name: olore-xstate-latest
description: Local XState documentation reference (latest). XState state machine documentation. Use for state machines, statecharts, actors, transitions, guards, context, React/Vue/Svelte integrations, and Stately Studio.
---

# XState Documentation

XState is a best-in-class open source library for building state machines, statecharts, and actor-based systems in JavaScript and TypeScript. Use this skill for state machines, actors, transitions, guards, context, React/Vue/Svelte integrations, and the @xstate/store package.

## Documentation Structure

```
contents/
├── (root)              # Core XState concepts and API (51 files)
├── packages/           # Official packages overview (1 file)
├── xstate-store/       # @xstate/store v2 with framework integrations (11 files)
└── xstate-store-v3/    # @xstate/store v3 with framework integrations (6 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/installation.mdx`, `contents/quick-start.mdx`, `contents/setup.mdx`, `contents/cheatsheet.mdx` |
| Core concepts | `contents/state-machines-and-statecharts.mdx`, `contents/actor-model.mdx`, `contents/machines.mdx` |
| States | `contents/states.mdx`, `contents/finite-states.mdx`, `contents/parallel-states.mdx`, `contents/parent-states.mdx`, `contents/history-states.mdx`, `contents/final-states.mdx` |
| Transitions | `contents/transitions.mdx`, `contents/eventless-transitions.mdx`, `contents/delayed-transitions.mdx`, `contents/guards.mdx` |
| Actions and context | `contents/actions.mdx`, `contents/context.mdx`, `contents/input.mdx`, `contents/output.mdx`, `contents/tags.mdx` |
| Actors | `contents/actors.mdx`, `contents/invoke.mdx`, `contents/spawn.mdx`, `contents/sources.mdx`, `contents/system.mdx` |
| Actor types | `contents/promise-actors.mdx`, `contents/callback-actors.mdx`, `contents/observable-actors.mdx`, `contents/transition-actors.mdx`, `contents/function-actors.mdx`, `contents/state-machine-actors.mdx` |
| Persistence and restore | `contents/persistence.mdx`, `contents/machine-restore.mdx` |
| TypeScript | `contents/typescript.mdx`, `contents/typegen.mdx` |
| Testing | `contents/testing.mdx`, `contents/xstate-test.mdx`, `contents/graph.mdx` |
| Migration v4 to v5 | `contents/migration.mdx` |
| React integration | `contents/xstate-react.mdx`, `contents/xstate-store/react.mdx`, `contents/xstate-store-v3/react.mdx` |
| Vue integration | `contents/xstate-vue.mdx`, `contents/xstate-store/vue.mdx`, `contents/xstate-store-v3/vue.mdx` |
| Svelte integration | `contents/xstate-svelte.mdx`, `contents/xstate-store/svelte.mdx`, `contents/xstate-store-v3/svelte.mdx` |
| @xstate/store | `contents/xstate-store.mdx`, `contents/xstate-store-v2.mdx`, `contents/xstate-store-v3.mdx` |
| @xstate/store features | `contents/xstate-store/persist.mdx`, `contents/xstate-store/reset.mdx`, `contents/xstate-store/undo-redo.mdx`, `contents/xstate-store/validate-schemas.mdx` |
| Debugging and inspection | `contents/inspection.mdx`, `contents/inspector.mdx` |
| Reference | `contents/glossary.mdx`, `contents/examples.mdx`, `contents/packages/index.mdx` |

## When to use

Use this skill when the user asks about:
- Creating state machines and statecharts with XState
- Actors, invoking and spawning actors, actor communication
- States: finite, parallel, parent, history, final states
- Transitions, guards, actions, context, input, output
- Delayed transitions and eventless (always) transitions
- TypeScript types and type generation for XState
- Testing state machines and model-based testing
- Using XState with React, Vue, Svelte, or Angular
- @xstate/store for lightweight state management
- Migrating from XState v4 to v5
- Persistence and restoring machine state

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
