---
name: olore-react-hook-form-latest
description: Local react-hook-form documentation reference (latest). React Hook Form documentation. Use for form validation, form state management, and performant React forms.
---

# react-hook-form Documentation

React Hook Form documentation. Use for form validation, form state management, and performant React forms.

## Documentation Structure

```
contents/
├── (root)          # Get started, advanced usage, FAQs, TypeScript, integrations overview, V7 to V8 migration (6 files)
├── docs/           # API reference: useForm, useController, useFieldArray, useWatch, useFormState, etc. (9 files)
│   ├── useform/        # useForm methods and props: register, handleSubmit, reset, setValue, watch, trigger... (20 files)
│   ├── usecontroller/  # Controller component (1 file)
│   ├── usefieldarray/  # FieldArray component (1 file)
│   ├── useformstate/   # ErrorMessage and FormState components (2 files)
│   └── usewatch/       # Watch component (1 file)
└── integrations/   # Schema resolvers, Zod, Yup, Next.js, React 19, shadcn/ui (6 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/get-started.mdx`, `contents/faqs.mdx` |
| Form initialization and options | `contents/docs/useform.mdx` |
| Registering inputs and validation | `contents/docs/useform/register.mdx`, `contents/docs/useform/trigger.mdx`, `contents/docs/useform/seterror.mdx` |
| Submitting forms | `contents/docs/useform/handlesubmit.mdx`, `contents/docs/useform/form.mdx` |
| Reading and setting values | `contents/docs/useform/getvalues.mdx`, `contents/docs/useform/setvalue.mdx`, `contents/docs/useform/watch.mdx` |
| Resetting forms | `contents/docs/useform/reset.mdx`, `contents/docs/useform/resetfield.mdx` |
| Form state and errors | `contents/docs/useform/formstate.mdx`, `contents/docs/useformstate.mdx`, `contents/docs/useform/clearerrors.mdx` |
| Controlled components | `contents/docs/usecontroller.mdx`, `contents/docs/usecontroller/controller.mdx` |
| Dynamic field arrays | `contents/docs/usefieldarray.mdx`, `contents/docs/usefieldarray/fieldarray.mdx` |
| Watching values / performance | `contents/docs/usewatch.mdx`, `contents/docs/useform/subscribe.mdx` |
| Form context | `contents/docs/formprovider.mdx`, `contents/docs/useformcontext.mdx` |
| Schema validation (Zod, Yup, resolvers) | `contents/integrations/resolvers.mdx`, `contents/integrations/zod.mdx`, `contents/integrations/yup.mdx` |
| Next.js, React 19, shadcn/ui | `contents/integrations/nextjs.mdx`, `contents/integrations/react-19.mdx`, `contents/integrations/shadcn-ui.mdx` |
| TypeScript types | `contents/ts.mdx` |
| Accessibility and advanced patterns | `contents/advanced-usage.mdx` |
| Migrating V7 to V8 | `contents/migrate-v7-to-v8.mdx` |

## When to use

Use this skill when the user asks about:
- React Hook Form APIs such as useForm, register, handleSubmit, setValue, watch, reset
- Controlled inputs, Controller, useController, and useFieldArray
- Form validation with Zod, Yup, or other schema resolvers
- Form state, errors, and render performance in React forms
- Integrating forms with Next.js, React 19, or shadcn/ui

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
