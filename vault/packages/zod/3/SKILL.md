---
name: olore-zod-3
description: Local Zod v3 documentation reference. Use when asked about Zod schema validation, TypeScript type inference, error handling, or migration from earlier versions.
---

# Zod v3 Documentation

Zod is a TypeScript-first schema declaration and validation library designed to be developer-friendly. With Zod, you declare a validator once and Zod automatically infers the static TypeScript type. It eliminates duplicative type declarations and makes it easy to compose simpler types into complex data structures.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/README.md` | Main Documentation | Comprehensive API reference covering primitives, objects, arrays, unions, refinements, transformers, and all Zod features |
| `contents/ERROR_HANDLING.md` | Error Handling Guide | Explains ZodError and ZodIssue types, error formatting, and customization with error maps |
| `contents/MIGRATION.md` | Migration Guide | Steps for upgrading from Zod 1→2 and Zod 2→3, including breaking changes and new features |
| `contents/README_KO.md` | Korean Documentation | Korean translation of the main README |
| `contents/README_ZH.md` | Chinese Documentation | Chinese translation of the main README |
| `contents/blog/clerk-fellowship.md` | Zod 4 Development | Blog post about Zod 4 development plans and funding |

## When to use

Use this skill when the user asks about:
- Zod schema validation and type inference
- Creating and composing Zod schemas (strings, objects, arrays, unions, etc.)
- Validation methods (.parse, .safeParse, .refine, .transform)
- Error handling with ZodError
- Migrating from Zod 1 or Zod 2 to Zod 3
- TypeScript integration with Zod
- Custom validation logic and refinements

## How to find information

1. Check Quick Reference above for relevant file
2. Read `TOC.md` for complete listing
3. Read specific files from `contents/{filename}`

For API reference and usage examples, start with `contents/README.md`.
For error handling details, see `contents/ERROR_HANDLING.md`.
For version migration, see `contents/MIGRATION.md`.
