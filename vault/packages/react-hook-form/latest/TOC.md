# react-hook-form Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Getting started, guides, FAQs, TypeScript, migration, integrations overview | 6 |
| `contents/docs/` | API reference for hooks and components | 9 |
| `contents/docs/useform/` | useForm methods and props | 20 |
| `contents/docs/usecontroller/` | Controller component | 1 |
| `contents/docs/usefieldarray/` | FieldArray component | 1 |
| `contents/docs/useformstate/` | ErrorMessage and FormState components | 2 |
| `contents/docs/usewatch/` | Watch component | 1 |
| `contents/integrations/` | Resolvers, Zod, Yup, Next.js, React 19, shadcn/ui | 6 |

## contents/

| File | Description |
|------|-------------|
| `get-started.mdx` | Simple form validation with React Hook Form |
| `advanced-usage.mdx` | Practical guides for building accessible, reusable, and performant forms |
| `faqs.mdx` | Answers to common setup, validation, state, performance, and testing questions |
| `ts.mdx` | List of exported TypeScript types |
| `migrate-v7-to-v8.mdx` | V8 (beta) migration guide from V7 |
| `integrations.mdx` | Overview of guides for schema validation, frameworks, and UI libraries |

## docs/

| File | Description |
|------|-------------|
| `useform.mdx` | Primary hook for form initialization and its options |
| `usecontroller.mdx` | Build reusable controlled inputs with full form state access |
| `usefieldarray.mdx` | Manage dynamic field arrays with optimized performance |
| `useformstate.mdx` | Subscribe to form state with isolated component re-renders |
| `usewatch.mdx` | Subscribe to input changes with isolated component re-renders |
| `useformcontext.mdx` | Access useForm methods anywhere in the component tree |
| `formprovider.mdx` | Share form context across deeply nested components |
| `uselens.mdx` | Scope form context to a nested field path |
| `createFormControl.mdx` | Create standalone form state outside of React components |

## docs/useform/

| File | Description |
|------|-------------|
| `register.mdx` | Register inputs for validation, tracking, and submission |
| `handlesubmit.mdx` | Validate inputs and invoke your submit callback |
| `form.mdx` | Form component to submit to an API, Server Action, or callback with built-in state |
| `formstate.mdx` | Access real-time form state properties |
| `control.mdx` | The control object for registering controlled inputs |
| `watch.mdx` | Subscribe to input value changes and trigger re-renders |
| `subscribe.mdx` | Subscribe to form state changes outside the render cycle |
| `getvalues.mdx` | Read current form values without subscribing to re-renders |
| `setvalue.mdx` | Dynamically update a registered field's value |
| `setvalues.mdx` | Update multiple field values at once |
| `geterrors.mdx` | Read current form errors without subscribing to re-renders |
| `getfieldstate.mdx` | Get validation and interaction state of a specific field |
| `seterror.mdx` | Manually set validation errors on fields |
| `clearerrors.mdx` | Manually clear validation errors on fields |
| `setfocus.mdx` | Programmatically focus a registered input field |
| `trigger.mdx` | Manually trigger validation without submitting |
| `reset.mdx` | Reset the form to its default values and clear state |
| `resetfield.mdx` | Reset a single field's value and state independently |
| `resetdefaultvalues.mdx` | Update the baseline defaults without resetting current values |
| `unregister.mdx` | Remove a registered input from the form |

## docs/usecontroller/, docs/usefieldarray/, docs/useformstate/, docs/usewatch/

| File | Description |
|------|-------------|
| `usecontroller/controller.mdx` | Controller component for integrating controlled external UI inputs |
| `usefieldarray/fieldarray.mdx` | Render-prop component for working with dynamic field arrays |
| `useformstate/errormessage.mdx` | Render validation error messages for a field |
| `useformstate/formstate.mdx` | Renderless component for subscribing to form state changes |
| `usewatch/watch.mdx` | React component that subscribes to form input changes |

## integrations/

| File | Description |
|------|-------------|
| `resolvers.mdx` | Compare official schema resolvers by package, type inference, and criteria mode |
| `zod.mdx` | Validate type-safe forms with Zod and zodResolver |
| `yup.mdx` | Validate forms with Yup schemas and yupResolver |
| `nextjs.mdx` | Build validated Next.js forms with App Router and Server Actions |
| `react-19.mdx` | Combine React 19 form actions with validation and progressive enhancement |
| `shadcn-ui.mdx` | Build accessible, type-safe shadcn/ui forms with React Hook Form and Zod |
