# tanstack-form Table of Contents

TanStack Form (`main` branch, `@tanstack/react-form@1.33.5`). Headless, type-safe form
state management. This package is **React-only** — the config excludes the angular, lit,
preact, solid, svelte, and vue framework docs, but keeps the shared framework-agnostic
core API under `contents/reference/`.

## Directory Map

```
contents/
├── overview.md                  # Motivation, core concepts, the whole API in one read (24KB)
├── installation.md              # Package install + framework adapters
├── typescript.md                # TS setup, generic inference, common type errors
├── philosophy.md                # Why the API is shaped this way (unified APIs, tradeoffs)
├── examples.md                  # Index of all official React examples → live/source/stackblitz
├── framework/react/             # React adapter (43 files)
│   ├── quick-start.md
│   ├── guides/                  # Task-oriented guides (18 files)
│   └── reference/               # React-specific API reference (24 files)
│       ├── functions/           # useForm, useField, createFormHook, … (7)
│       ├── interfaces/          # ReactFormApi, UseFieldOptions, WithFormProps, … (5)
│       ├── type-aliases/        # FieldComponent, ServerFormState, … (7)
│       └── variables/           # Field, FormGroup, useStore, … (4)
└── reference/                   # Framework-agnostic core API (98 files, auto-generated)
    ├── index.md
    ├── classes/                 # FormApi, FieldApi, FormGroupApi, FieldGroupApi (4)
    ├── functions/               # formOptions, mergeForm, revalidateLogic, … (9)
    ├── interfaces/              # FormOptions, FormState, FieldValidators, … (28)
    ├── type-aliases/            # DeepKeys, DeepValue, AnyFieldApi, Updater, … (52)
    └── variables/               # standardSchemaValidators, defaultValidationLogic, … (4)
```

`examples.md` is a generated pointer file, not upstream content — no example source is
vendored into this package. Regenerate it from `docs/config.json` when rebuilding.

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/overview.md`, then `contents/framework/react/quick-start.md` |
| Install | `contents/installation.md` |
| Core concepts / terminology | `contents/framework/react/guides/basic-concepts.md` |
| Validation (sync, async, schema) | `contents/framework/react/guides/validation.md` |
| Zod / Valibot / ArkType / Effect | `contents/framework/react/guides/validation.md` + `contents/reference/variables/standardSchemaValidators.md` |
| Reusable field/form components | `contents/framework/react/guides/form-composition.md` |
| Field arrays / repeating rows | `contents/framework/react/guides/arrays.md` |
| Multi-step wizards | `contents/framework/react/guides/form-groups.md` |
| SSR, server actions, Next/Start/Remix | `contents/framework/react/guides/ssr.md` |
| React Native / Expo | `contents/framework/react/guides/react-native.md` |
| Runnable examples | `contents/examples.md` |
| Look up a hook | `contents/framework/react/reference/functions/{useForm,useField,…}.md` |
| Look up a type by name | `contents/reference/type-aliases/{Name}.md` or `interfaces/{Name}.md` |
| Look up an instance method | `contents/reference/classes/{FormApi,FieldApi,…}.md` |
| TypeScript errors | `contents/typescript.md` |

## Detailed Structure

### Root (5 files)

| File | Description |
|------|-------------|
| `overview.md` | Motivation, first-class TS support, headless design, full concept tour. The single best starting file. |
| `installation.md` | `@tanstack/react-form` install plus the meta-framework adapters (`react-form-nextjs`, `react-form-remix`, `react-form-start`) |
| `typescript.md` | Generic inference, `AnyFieldApi`, narrowing, common compiler errors |
| `philosophy.md` | Design principles: unified APIs, why options over multiple entry points |
| `examples.md` | **Generated.** Every official React example with what it demonstrates + live sandbox / GitHub / StackBlitz links |

### framework/react/guides/ (18 files)

| File | Description |
|------|-------------|
| `basic-concepts.md` | Terminology: form instance, field, field meta, validators, listeners. Read before the rest. |
| `validation.md` | Sync + async validation, `onChange`/`onBlur`/`onSubmit` timing, Standard Schema validators, debouncing |
| `dynamic-validation.md` | `revalidateLogic()` and `validators.onDynamic` — validate on submit, then live |
| `custom-errors.md` | Returning objects/arrays as errors, error maps, form-level errors targeting fields |
| `arrays.md` | `mode="array"`, indexed field names, push/remove/swap/move |
| `form-composition.md` | `createFormHook`, `withForm`, `withFieldGroup`, bound field/form components |
| `form-groups.md` | `FormGroup` / `FieldGroupApi` — subforms, multi-step wizards, per-group validation |
| `linked-fields.md` | Fields that validate against each other (password/confirm), `onChangeListenTo` |
| `listeners.md` | Side effects on field/form events (`onChange`, `onBlur`, `onMount`, `onSubmit`) |
| `reactivity.md` | `form.Subscribe`, `useStore`, selectors, avoiding over-rendering |
| `submission-handling.md` | `onSubmit`, submit meta, `canSubmit`/`isSubmitting`, resetting after submit |
| `async-initial-values.md` | Populating `defaultValues` from a fetch/query without losing user edits |
| `focus-management.md` | Focusing the first invalid field, refs, scroll-to-error |
| `ssr.md` | React meta-framework usage: Next.js server actions, Remix, TanStack Start, `mergeForm`/`useTransform` |
| `react-native.md` | `TextInput` wiring, `handleChange` on `onChangeText`, RN-specific caveats |
| `ui-libraries.md` | Integrating Mantine, MUI, shadcn and other controlled input libraries |
| `devtools.md` | `@tanstack/react-form-devtools` + the TanStack Devtools panel |
| `debugging.md` | Reading field/form state, common "why isn't this validating" causes |

### framework/react/reference/ (24 files)

| Path | Contents |
|------|----------|
| `index.md` | React adapter export index |
| `functions/` | `useForm`, `useField`, `useFieldGroup`, `useFormGroup`, `useSelector`, `createFormHook`, `createFormHookContexts` |
| `interfaces/` | `ReactFormApi`, `UseFieldOptions`, `UseFieldOptionsBound`, `WithFormProps`, `WithFieldGroupProps` |
| `type-aliases/` | `FieldComponent`, `FormGroupComponent`, `LensFieldComponent`, `ReactFormExtendedApi`, `ServerFormState`, `UseField`, `UseFormGroup` |
| `variables/` | `Field`, `FormGroup`, `useStore`, `useIsomorphicLayoutEffect` |

### reference/ (98 files) — framework-agnostic core

Auto-generated from `@tanstack/form-core`. Shared by every framework adapter; this is
where the real behaviour lives.

| Path | Contents |
|------|----------|
| `index.md` | Core export index |
| `classes/` (4) | `FormApi`, `FieldApi`, `FormGroupApi`, `FieldGroupApi` — all instance methods and state |
| `functions/` (9) | `formOptions`, `mergeForm`, `revalidateLogic`, `createFieldMap`, `deepCopy`, `evaluate`, `isGlobalFormValidationError`, `isStandardSchemaValidator`, `uuid` |
| `interfaces/` (28) | Options and state shapes: `FormOptions`, `BaseFormOptions`, `FormState`, `FormValidators`, `FormListeners`, `FieldOptions`, `FieldApiOptions`, `FieldValidators`, `FieldListeners`, the `FormGroup*`/`FieldGroup*` equivalents, `ValidationLogicProps`, `StandardSchemaV1Issue`, and the `*DeepKeyAndValue` helpers |
| `type-aliases/` (52) | Deep-path type machinery (`DeepKeys`, `DeepValue`, `DeepKeysOfType`, `DeepRecord`, the `*Accessor` family), the `Any*` escape hatches (`AnyFormApi`, `AnyFieldApi`, `AnyFieldMeta`, …), validator unwrapping (`UnwrapField*`/`UnwrapForm*`), `Updater`/`UpdaterFn`, `ValidationError`, `ValidationSource`, `StandardSchemaV1`, and the `Broadcast*` cross-tab types |
| `variables/` (4) | `standardSchemaValidators`, `defaultValidationLogic`, `formEventClient`, `throttleFormState` |

## Notes

- **Deep-path types matter.** Field `name` strings are type-checked against `DeepKeys` of
  your `defaultValues`. Most "field name not assignable" errors trace back to
  `contents/reference/type-aliases/DeepKeys.md` / `DeepValue.md`.
- **Two reference trees.** React hooks live in `framework/react/reference/`; the objects
  those hooks return (`FormApi`, `FieldApi`) are documented in `reference/classes/`.
- **Validation timing** is split across three guides: `validation.md` (what runs when),
  `dynamic-validation.md` (`revalidateLogic`), `custom-errors.md` (error shapes).
