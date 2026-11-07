---
name: olore-zod-3
description: Local Zod v3 documentation reference (final v3 release, 3.25.76). Use for Zod 3 schema definition, parsing, TypeScript type inference, refinements and transforms, ZodError handling and error maps, and migrating from Zod 1/2 to 3. For Zod 4 use olore-zod-latest instead.
---

# Zod v3 Documentation

Zod is a TypeScript-first schema declaration and validation library — declare a
validator once and Zod infers the static type. This package covers **v3 only**
(final release 3.25.76, July 2025; v3 is frozen).

**If the user is on Zod 4, use `olore-zod-latest` instead.** The v4 API differs
substantially — error customization, `z.treeifyError`, codecs, `z.toJSONSchema`,
and `z.compile` are all v4-only, and several v3 methods were renamed or removed.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/home.md` | Main documentation | The whole v3 API in one file — primitives, objects, arrays, unions, records, recursive types, refinements, transforms, and every schema method |
| `contents/ERROR_HANDLING.md` | Error handling | `ZodError` / `ZodIssue` structure, issue codes, error maps, formatting |
| `contents/MIGRATION.md` | Migration guide | Zod 1 → 2 and 2 → 3 upgrade steps and breaking changes |

## When to use

Use this skill when the user asks about:
- Zod 3 schema definition and composition, and is explicitly on v3
- `.parse()` / `.safeParse()` and v3 parsing behaviour
- v3 type inference (`z.infer`, `z.input`, `z.output`)
- `.refine()`, `.superRefine()`, `.transform()`, `.preprocess()` in v3
- `ZodError`, `ZodIssue`, issue codes, and custom error maps in v3
- Migrating from Zod 1 or 2 up to Zod 3
- Confirming whether an API exists in v3 vs v4

## How to find information

1. `contents/home.md` answers most questions — it is the full v3 reference; search
   within it rather than reading it whole
2. Error-related questions go to `contents/ERROR_HANDLING.md`
3. For a Zod 3 → Zod 4 migration, switch to the `olore-zod-latest` skill and read
   its `v4/changelog.mdx`
