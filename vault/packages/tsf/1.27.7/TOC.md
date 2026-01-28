# TanStack Form Documentation Structure

## Directory Map

```
docs/
├── overview.md              # Library overview and motivation
├── philosophy.md            # Design philosophy and principles
├── installation.md          # Installation guide for all frameworks
├── typescript.md            # TypeScript usage guide
├── community-resources.md   # Community tutorials and resources
├── framework/               # Framework-specific documentation
│   ├── angular/             # Angular adapter (15 files)
│   │   ├── quick-start.md
│   │   ├── guides/          # Angular-specific guides (8 files)
│   │   └── reference/       # Angular API reference (6 files)
│   ├── lit/                 # Lit adapter (6 files)
│   │   ├── quick-start.md
│   │   ├── guides/          # Lit-specific guides (4 files)
│   │   └── reference/       # Lit API reference (1 file)
│   ├── react/               # React adapter (36 files)
│   │   ├── quick-start.md
│   │   ├── guides/          # React-specific guides (21 files)
│   │   └── reference/       # React API reference (14 files)
│   ├── solid/               # Solid adapter (26 files)
│   │   ├── quick-start.md
│   │   ├── guides/          # Solid-specific guides (9 files)
│   │   └── reference/       # Solid API reference (16 files)
│   ├── svelte/              # Svelte adapter (8 files)
│   │   ├── quick-start.md
│   │   └── guides/          # Svelte-specific guides (7 files)
│   └── vue/                 # Vue adapter (16 files)
│       ├── quick-start.md
│       ├── guides/          # Vue-specific guides (8 files)
│       └── reference/       # Vue API reference (7 files)
└── reference/               # Core form library API (90 files)
    ├── index.md             # API overview
    ├── classes/             # Core classes (3 files)
    ├── functions/           # Utility functions (9 files)
    ├── interfaces/          # TypeScript interfaces (18 files)
    ├── type-aliases/        # Type definitions (55 files)
    └── variables/           # Exported variables (4 files)
```

## Root Documentation

| File | Description |
|------|-------------|
| `overview.md` | Introduction to TanStack Form, motivation, and basic example |
| `philosophy.md` | Design principles and philosophy behind the library |
| `installation.md` | Installation instructions for all supported frameworks |
| `typescript.md` | TypeScript integration and usage guide |
| `community-resources.md` | External tutorials and community content |

## Framework Adapters

### Angular (`framework/angular/`)

**Quick Start**
- `quick-start.md` - Getting started with Angular Forms

**Guides** (8 files)
- `guides/basic-concepts.md` - Fundamental concepts
- `guides/validation.md` - Form validation
- `guides/dynamic-validation.md` - Dynamic validation rules
- `guides/arrays.md` - Array field management
- `guides/form-composition.md` - Composing complex forms
- `guides/listeners.md` - Event listeners and callbacks
- `guides/submission-handling.md` - Form submission

**API Reference** (6 files)
- Classes: `TanStackAppField`, `TanStackField`, `TanStackFieldInjectable`
- Functions: `injectField`, `injectForm`, `injectStore`

### Lit (`framework/lit/`)

**Quick Start**
- `quick-start.md` - Getting started with Lit Forms

**Guides** (4 files)
- `guides/basic-concepts.md` - Fundamental concepts
- `guides/validation.md` - Form validation
- `guides/dynamic-validation.md` - Dynamic validation rules
- `guides/arrays.md` - Array field management

**API Reference** (1 file)
- Classes: `TanStackFormController`

### React (`framework/react/`)

**Quick Start**
- `quick-start.md` - Getting started with React Forms

**Guides** (21 files)
- `guides/basic-concepts.md` - Fundamental concepts
- `guides/validation.md` - Form validation
- `guides/dynamic-validation.md` - Dynamic validation rules
- `guides/arrays.md` - Array field management
- `guides/async-initial-values.md` - Async initial values
- `guides/custom-errors.md` - Custom error handling
- `guides/debugging.md` - Debugging techniques
- `guides/devtools.md` - Developer tools integration
- `guides/focus-management.md` - Input focus management
- `guides/form-composition.md` - Composing complex forms
- `guides/linked-fields.md` - Field dependencies
- `guides/listeners.md` - Event listeners
- `guides/react-native.md` - React Native support
- `guides/reactivity.md` - Reactivity system
- `guides/ssr.md` - Server-side rendering
- `guides/submission-handling.md` - Form submission
- `guides/ui-libraries.md` - UI library integrations

**API Reference** (14 files)
- Functions: `createFormHook`, `createFormHookContexts`, `useField`, `useFieldGroup`, `useForm`, `useStore`
- Interfaces: `ReactFormApi`, `UseFieldOptions`, `UseFieldOptionsBound`, `WithFieldGroupProps`, `WithFormProps`
- Types: `FieldComponent`, `LensFieldComponent`, `ReactFormExtendedApi`, `ServerFormState`, `UseField`
- Variables: `Field`

### Solid (`framework/solid/`)

**Quick Start**
- `quick-start.md` - Getting started with Solid Forms

**Guides** (9 files)
- `guides/basic-concepts.md` - Fundamental concepts
- `guides/validation.md` - Form validation
- `guides/dynamic-validation.md` - Dynamic validation rules
- `guides/arrays.md` - Array field management
- `guides/async-initial-values.md` - Async initial values
- `guides/devtools.md` - Developer tools
- `guides/form-composition.md` - Composing complex forms
- `guides/linked-fields.md` - Field dependencies
- `guides/submission-handling.md` - Form submission

**API Reference** (16 files)
- Functions: `createField`, `createFieldGroup`, `createForm`, `createFormHook`, `createFormHookContexts`, `Field`, `useStore`
- Interfaces: `CreateFieldOptions`, `CreateFieldOptionsBound`, `SolidFormApi`, `WithFieldGroupProps`, `WithFormProps`
- Types: `CreateField`, `FieldComponent`, `LensFieldComponent`, `SolidFormExtendedApi`

### Svelte (`framework/svelte/`)

**Quick Start**
- `quick-start.md` - Getting started with Svelte Forms

**Guides** (7 files)
- `guides/basic-concepts.md` - Fundamental concepts
- `guides/validation.md` - Form validation
- `guides/dynamic-validation.md` - Dynamic validation rules
- `guides/arrays.md` - Array field management
- `guides/async-initial-values.md` - Async initial values
- `guides/form-composition.md` - Composing complex forms
- `guides/linked-fields.md` - Field dependencies

### Vue (`framework/vue/`)

**Quick Start**
- `quick-start.md` - Getting started with Vue Forms

**Guides** (8 files)
- `guides/basic-concepts.md` - Fundamental concepts
- `guides/validation.md` - Form validation
- `guides/dynamic-validation.md` - Dynamic validation rules
- `guides/arrays.md` - Array field management
- `guides/async-initial-values.md` - Async initial values
- `guides/linked-fields.md` - Field dependencies
- `guides/listeners.md` - Event listeners
- `guides/submission-handling.md` - Form submission

**API Reference** (7 files)
- Functions: `useField`, `useForm`, `useStore`
- Interfaces: `VueFieldApi`, `VueFormApi`
- Types: `FieldComponent`, `FieldComponentBoundProps`, `FieldComponentProps`, `UseField`
- Variables: `Field`

## Core API Reference (`reference/`)

### Classes (3 files)
| File | Description |
|------|-------------|
| `classes/FieldApi.md` | Core field API for managing individual form fields |
| `classes/FieldGroupApi.md` | API for managing groups of related fields |
| `classes/FormApi.md` | Core form API for managing entire forms |

### Functions (9 files)
| File | Description |
|------|-------------|
| `functions/createFieldMap.md` | Create a map of fields |
| `functions/evaluate.md` | Evaluate dynamic values |
| `functions/formOptions.md` | Form options helper |
| `functions/isGlobalFormValidationError.md` | Check for global validation errors |
| `functions/isStandardSchemaValidator.md` | Check if validator uses Standard Schema |
| `functions/mergeForm.md` | Merge form states |
| `functions/revalidateLogic.md` | Revalidation logic |
| `functions/uuid.md` | Generate unique IDs |

### Interfaces (18 files)
Core TypeScript interfaces for form configuration, field options, validation, listeners, and state management.

### Type Aliases (55 files)
Comprehensive type definitions including:
- Deep key and value types for nested objects/arrays
- Form and field API types
- Validation types
- State management types
- Accessor types for different data structures
- Standard Schema integration types

### Variables (4 files)
| File | Description |
|------|-------------|
| `variables/defaultValidationLogic.md` | Default validation logic implementation |
| `variables/formEventClient.md` | Form event client for cross-tab communication |
| `variables/standardSchemaValidators.md` | Standard Schema validator implementations |
| `variables/throttleFormState.md` | State throttling utilities |

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to TanStack Form | `overview.md`, `philosophy.md` |
| Install the library | `installation.md` |
| Get started with React | `framework/react/quick-start.md` |
| Get started with Vue | `framework/vue/quick-start.md` |
| Get started with Angular | `framework/angular/quick-start.md` |
| Get started with Solid | `framework/solid/quick-start.md` |
| Get started with Svelte | `framework/svelte/quick-start.md` |
| Get started with Lit | `framework/lit/quick-start.md` |
| Learn validation | `framework/{framework}/guides/validation.md` |
| Work with arrays | `framework/{framework}/guides/arrays.md` |
| Form composition | `framework/{framework}/guides/form-composition.md` |
| TypeScript usage | `typescript.md` |
| Core API reference | `reference/index.md` |
| Field API details | `reference/classes/FieldApi.md` |
| Form API details | `reference/classes/FormApi.md` |
