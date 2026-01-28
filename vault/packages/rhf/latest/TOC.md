# React Hook Form Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Getting started and general guides | 4 |
| `contents/docs/` | Core hooks API reference | 7 |
| `contents/docs/useform/` | useForm hook methods | 18 |
| `contents/docs/useformstate/` | useFormState utilities | 2 |
| `contents/docs/usewatch/` | useWatch hook methods | 1 |
| `contents/docs/usecontroller/` | useController components | 1 |

## Root Files

| File | Description |
|------|-------------|
| `get-started.mdx` | Installation and basic usage example |
| `advanced-usage.mdx` | Accessibility, performance, and advanced patterns |
| `faqs.mdx` | Frequently asked questions |
| `ts.mdx` | TypeScript usage and type definitions |

## docs/

Core API hooks and components.

| File | Description |
|------|-------------|
| `useform.mdx` | Main hook for form management |
| `useformcontext.mdx` | Access form context in nested components |
| `useformstate.mdx` | Subscribe to form state |
| `usewatch.mdx` | Watch form input values |
| `uselens.mdx` | Lens-based form state management |
| `formprovider.mdx` | Context provider for forms |
| `createFormControl.mdx` | Create controlled form components |

## docs/useform/

Methods returned by the useForm hook.

| File | Description |
|------|-------------|
| `register.mdx` | Register input fields |
| `unregister.mdx` | Unregister input fields |
| `formstate.mdx` | Form state properties (errors, isDirty, etc.) |
| `watch.mdx` | Watch input values |
| `subscribe.mdx` | Subscribe to form state changes |
| `handlesubmit.mdx` | Handle form submission |
| `reset.mdx` | Reset form to default values |
| `resetfield.mdx` | Reset individual field |
| `setvalue.mdx` | Set input value programmatically |
| `getvalues.mdx` | Get current form values |
| `getfieldstate.mdx` | Get individual field state |
| `seterror.mdx` | Set field errors manually |
| `clearerrors.mdx` | Clear field errors |
| `setfocus.mdx` | Set focus to specific field |
| `trigger.mdx` | Trigger validation manually |
| `control.mdx` | Control object for controlled components |
| `form.mdx` | Form instance and utilities |

## docs/useformstate/

Utilities for the useFormState hook.

| File | Description |
|------|-------------|
| `errormessage.mdx` | Display error messages |
| `formstatesubscribe.mdx` | Subscribe to specific form state properties |

## docs/usewatch/

Methods for the useWatch hook.

| File | Description |
|------|-------------|
| `watch.mdx` | Watch specific form fields |

## docs/usecontroller/

Controller components for custom inputs.

| File | Description |
|------|-------------|
| `controller.mdx` | Controller component for controlled inputs |
