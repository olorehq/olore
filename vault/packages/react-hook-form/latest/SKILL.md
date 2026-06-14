---
name: olore-react-hook-form-latest
description: Local react-hook-form documentation reference (latest). React Hook Form documentation. Use for form validation, form state management, and performant React forms.
---

# react-hook-form Documentation

React Hook Form documentation. Use for form validation, form state management, and performant React forms.

## Documentation Structure

```
contents/
├── get-started.mdx          # Installation and quickstart guide
├── advanced-usage.mdx       # Advanced patterns and integrations
├── faqs.mdx                 # FAQ and troubleshooting
├── ts.mdx                   # TypeScript usage
├── migrate-v7-to-v8.mdx     # V7 to V8 migration guide
├── docs/                    # Core API reference (9 files)
│   ├── useform.mdx          # Primary form hook
│   ├── usecontroller.mdx    # Controlled component hook
│   ├── usefieldarray.mdx    # Dynamic field arrays
│   ├── usewatch.mdx         # Value subscriptions
│   ├── useformstate.mdx     # Form state subscriptions
│   ├── useformcontext.mdx   # Context consumer hook
│   ├── formprovider.mdx     # Context provider component
│   ├── createFormControl.mdx # Framework-agnostic control
│   ├── uselens.mdx          # Scoped subscriptions
│   ├── useform/             # useForm sub-methods (19 files)
│   ├── usecontroller/       # Controller component (1 file)
│   ├── useformstate/        # State subscription helpers (2 files)
│   └── usewatch/            # Watch utility (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/get-started.mdx` |
| Form registration and submission | `contents/docs/useform/register.mdx`, `contents/docs/useform/handlesubmit.mdx` |
| Form validation | `contents/docs/useform/seterror.mdx`, `contents/docs/useform/clearerrors.mdx`, `contents/docs/useform/trigger.mdx` |
| Watching / observing values | `contents/docs/useform/watch.mdx`, `contents/docs/usewatch.mdx`, `contents/docs/usewatch/watch.mdx` |
| Reading and setting values | `contents/docs/useform/getvalues.mdx`, `contents/docs/useform/setvalue.mdx`, `contents/docs/useform/setvalues.mdx` |
| Form state (dirty, touched, errors) | `contents/docs/useform/formstate.mdx`, `contents/docs/useformstate.mdx`, `contents/docs/useform/getfieldstate.mdx` |
| Resetting forms | `contents/docs/useform/reset.mdx`, `contents/docs/useform/resetfield.mdx`, `contents/docs/useform/resetdefaultvalues.mdx` |
| Controlled components | `contents/docs/usecontroller.mdx`, `contents/docs/usecontroller/controller.mdx`, `contents/docs/useform/control.mdx` |
| Dynamic / array fields | `contents/docs/usefieldarray.mdx` |
| Sharing form across components | `contents/docs/formprovider.mdx`, `contents/docs/useformcontext.mdx` |
| Form submission component | `contents/docs/useform/form.mdx` |
| Error display | `contents/docs/useformstate/errormessage.mdx` |
| TypeScript types | `contents/ts.mdx` |
| Advanced patterns | `contents/advanced-usage.mdx` |
| Migration from v7 | `contents/migrate-v7-to-v8.mdx` |
| FAQ / troubleshooting | `contents/faqs.mdx` |

## When to use

Use this skill when the user asks about:
- Setting up or registering forms with `useForm`
- Form validation (required, pattern, min/max, custom validators, schema validation with Zod/Yup)
- Watching and reacting to field value changes
- Controlled inputs with `Controller` or `useController`
- Dynamic form fields with `useFieldArray`
- Managing form state (isDirty, isValid, errors, isSubmitting)
- Resetting forms or individual fields
- Setting or clearing errors programmatically
- Sharing form state across components with `FormProvider` / `useFormContext`
- TypeScript types for react-hook-form
- Migrating from v7 to v8

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
