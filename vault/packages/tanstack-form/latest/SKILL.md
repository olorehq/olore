---
name: olore-tanstack-form-latest
description: Local TanStack Form documentation reference (latest, v1.33.5). Headless, type-safe form state management for React. Use for form state, sync/async validation, Standard Schema validators (Zod/Valibot/ArkType/Effect), field arrays, form composition via createFormHook, field groups and multi-step wizards, listeners, reactivity/subscriptions, focus management, React Native, and SSR with Next.js server actions, Remix, or TanStack Start.
---

# tanstack-form Documentation

TanStack Form is a headless, framework-agnostic form library with first-class TypeScript
inference. This package covers **React only** (`@tanstack/react-form@1.33.5`, `main`
branch) plus the shared framework-agnostic core API — the angular, lit, preact, solid,
svelte, and vue docs are excluded by config.

Two things to know before answering from this package:

1. **The API is split across two reference trees.** The React hooks (`useForm`,
   `useField`, …) are in `contents/framework/react/reference/`. The objects they return
   (`FormApi`, `FieldApi`, `FormGroupApi`, `FieldGroupApi`) and every option/state shape
   are in `contents/reference/`. A question about "what can I call on `form`" is answered
   by `contents/reference/classes/FormApi.md`, not by the hook docs.
2. **Field names are type-checked deep paths.** `name` strings are validated against
   `DeepKeys<typeof defaultValues>`. Type errors on field names almost always trace to
   `contents/reference/type-aliases/DeepKeys.md` and `DeepValue.md`.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Overview / concepts | `contents/overview.md` |
| Install | `contents/installation.md` |
| React quick start | `contents/framework/react/quick-start.md` |
| Terminology | `contents/framework/react/guides/basic-concepts.md` |
| Validation | `contents/framework/react/guides/validation.md` |
| Reusable field/form components | `contents/framework/react/guides/form-composition.md` |
| Multi-step wizards / subforms | `contents/framework/react/guides/form-groups.md` |
| SSR, server actions, Next/Remix/Start | `contents/framework/react/guides/ssr.md` |
| React Native / Expo | `contents/framework/react/guides/react-native.md` |
| Runnable examples (links) | `contents/examples.md` |
| Core API (FormApi, FieldApi) | `contents/reference/classes/` |
| TypeScript errors | `contents/typescript.md` |

## When to use

Use this skill when the user asks about:
- Setting up TanStack Form in React, Next.js, Remix, TanStack Start, or React Native/Expo
- Form and field validation — sync, async, debounced, and the `onChange`/`onBlur`/`onSubmit` timing model
- Schema validation with Zod, Valibot, ArkType, or Effect Schema (Standard Schema v1)
- `revalidateLogic()` and `validators.onDynamic`
- Field arrays, dynamic/repeating rows, nested object fields
- `createFormHook` / `withForm` / `withFieldGroup` composition and reusable bound components
- Field groups, subforms, multi-step wizards
- Reactivity: `form.Subscribe`, `useStore`, selectors, reducing re-renders
- Listeners and side effects on field/form events
- Linked fields (password confirmation, dependent validation)
- Submission handling, `canSubmit`/`isSubmitting`, resetting
- Server-side validation with `createServerValidate`, `mergeForm`, `useTransform`
- Integrating Mantine, MUI, shadcn or other controlled input libraries
- Focus management and scroll-to-first-error
- TanStack Form devtools
- Any `FormApi` / `FieldApi` method, option, or state field by name

## How to find information

1. **First**, read `TOC.md` — it has the full directory map, per-guide descriptions, and
   a task→file table
2. For a **task or concept**, go to `contents/framework/react/guides/{topic}.md`
3. For a **hook**, read `contents/framework/react/reference/functions/{hook}.md`
4. For a **method or state field** on the form/field object, read
   `contents/reference/classes/{FormApi,FieldApi,FormGroupApi,FieldGroupApi}.md`
5. For a **type or option shape by name**, look in `contents/reference/interfaces/{Name}.md`
   then `contents/reference/type-aliases/{Name}.md`
6. For **working code**, `contents/examples.md` maps each official example to what it
   demonstrates plus live sandbox, GitHub, and StackBlitz links. Example source is *not*
   vendored here — follow the links, or fetch the GitHub URL if the user needs the code.

**TOC.md contains the full file listing organized by directory — always check it first.**
