# TanStack Form Documentation Structure

## Overview

TanStack Form is a headless, framework-agnostic form library with first-class TypeScript support. Documentation covers React, Vue, Angular, Solid, Svelte, and Lit integrations.

## Directory Map

```
docs/
├── overview.md         # Library overview
├── comparison.md       # Comparison with other libraries
├── framework/          # Framework-specific guides
│   ├── react/          # React integration
│   ├── vue/            # Vue integration
│   ├── angular/        # Angular integration
│   ├── solid/          # Solid integration
│   ├── svelte/         # Svelte integration
│   └── lit/            # Lit integration
└── reference/          # Core API reference
```

## Detailed Structure

### framework/react/
| Directory | Description |
|-----------|-------------|
| `quick-start.md` | Getting started with React |
| `guides/` | Validation, arrays, SSR, devtools |
| `reference/` | React-specific API reference |

### framework/vue/
| Directory | Description |
|-----------|-------------|
| `quick-start.md` | Getting started with Vue |
| `guides/` | Validation, arrays, listeners |
| `reference/` | Vue-specific API reference |

### Common Guides (per framework)
| Guide | Description |
|-------|-------------|
| `basic-concepts.md` | Form and field fundamentals |
| `validation.md` | Sync and async validation |
| `arrays.md` | Field arrays and dynamic fields |
| `submission-handling.md` | Form submission patterns |
| `linked-fields.md` | Dependent field validation |
| `dynamic-validation.md` | Runtime validation rules |
| `form-composition.md` | Composing complex forms |

### reference/ (Core)
| Directory | Description |
|-----------|-------------|
| `classes/` | FormApi, FieldApi classes |
| `functions/` | Utility functions |
| `interfaces/` | TypeScript interfaces |
| `type-aliases/` | Type definitions |

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview | `overview.md` |
| React quick start | `framework/react/quick-start.md` |
| Vue quick start | `framework/vue/quick-start.md` |
| Angular quick start | `framework/angular/quick-start.md` |
| Validation | `framework/{framework}/guides/validation.md` |
| Field arrays | `framework/{framework}/guides/arrays.md` |
| API reference | `reference/` |
