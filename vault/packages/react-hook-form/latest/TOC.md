# react-hook-form Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Top-level guides | 5 |
| `contents/docs/` | API reference (top-level hooks and components) | 8 |
| `contents/docs/useform/` | useForm API sub-methods | 16 |
| `contents/docs/usecontroller/` | Controller component | 1 |
| `contents/docs/useformstate/` | Form state subscriptions | 2 |
| `contents/docs/usewatch/` | Watch utilities | 1 |

## contents/ (top-level)

| File | Description |
|------|-------------|
| `get-started.mdx` | Installation, quickstart, and first form example |
| `advanced-usage.mdx` | Advanced patterns: dynamic fields, schema validation, integrations |
| `faqs.mdx` | Frequently asked questions and troubleshooting |
| `ts.mdx` | TypeScript usage and type definitions |
| `migrate-v7-to-v8.mdx` | Migration guide from v7 to v8 (React Compiler, flat field arrays) |

## contents/docs/ (core API)

| File | Description |
|------|-------------|
| `useform.mdx` | `useForm` hook — primary hook for form management |
| `usecontroller.mdx` | `useController` hook for controlled components |
| `usefieldarray.mdx` | `useFieldArray` hook for dynamic field arrays |
| `usewatch.mdx` | `useWatch` hook for subscribing to form values |
| `useformstate.mdx` | `useFormState` hook for subscribing to form state |
| `useformcontext.mdx` | `useFormContext` hook for consuming form context |
| `formprovider.mdx` | `FormProvider` component for context sharing |
| `createFormControl.mdx` | `createFormControl` for framework-agnostic form control |
| `uselens.mdx` | `useLens` hook for scoped form subscriptions |

## contents/docs/useform/ (useForm sub-API)

| File | Description |
|------|-------------|
| `register.mdx` | `register` — connect inputs to the form |
| `handlesubmit.mdx` | `handleSubmit` — form submission handler |
| `watch.mdx` | `watch` — observe input values |
| `formstate.mdx` | `formState` — access form state object |
| `getvalues.mdx` | `getValues` — read form values |
| `setvalue.mdx` | `setValue` — programmatically set a value |
| `setvalues.mdx` | `setValues` — programmatically set multiple values |
| `reset.mdx` | `reset` — reset form to default values |
| `resetfield.mdx` | `resetField` — reset a single field |
| `resetdefaultvalues.mdx` | `resetDefaultValues` — asynchronously update default values |
| `seterror.mdx` | `setError` — manually set field errors |
| `clearerrors.mdx` | `clearErrors` — manually clear field errors |
| `trigger.mdx` | `trigger` — manually trigger validation |
| `unregister.mdx` | `unregister` — unregister fields |
| `setfocus.mdx` | `setFocus` — programmatically focus a field |
| `getfieldstate.mdx` | `getFieldState` — get individual field state |
| `control.mdx` | `control` object for controlled components |
| `subscribe.mdx` | `subscribe` — subscribe to form state changes |
| `form.mdx` | `Form` component for form submission |

## contents/docs/usecontroller/

| File | Description |
|------|-------------|
| `controller.mdx` | `Controller` component — wrapper for controlled inputs |

## contents/docs/useformstate/

| File | Description |
|------|-------------|
| `errormessage.mdx` | `ErrorMessage` component for displaying field errors |
| `formstatesubscribe.mdx` | `formState.subscribe` for external form state subscriptions |

## contents/docs/usewatch/

| File | Description |
|------|-------------|
| `watch.mdx` | `watch` utility for observing values outside a component |
