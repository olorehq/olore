---
name: olore-zod-4.6.7
description: Local zod documentation reference (4.6.7). TypeScript-first schema validation library with static type inference.
---

# zod Documentation

Zod is a TypeScript-first schema validation library with static type inference. This package covers version 4.6.7.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/api.mdx` | Defining schemas | Complete API reference for all schema types, methods, and validation features |
| `contents/basics.mdx` | Basic usage | Schema definition, parsing data, error handling, and type inference |
| `contents/codecs.mdx` | Codecs | Bidirectional transformations with encode and decode |
| `contents/compile.mdx` | AOT compilation | Ahead-of-time schema compilation for hot validation paths |
| `contents/ecosystem.mdx` | Ecosystem | Integrations, tools, and community resources |
| `contents/error-customization.mdx` | Customizing errors | Customizing validation error messages and handling patterns |
| `contents/error-formatting.mdx` | Formatting errors | Utilities for formatting and displaying Zod errors |
| `contents/index.mdx` | Intro | Introduction to Zod and static type inference |
| `contents/json-schema.mdx` | JSON Schema | Converting Zod schemas to JSON Schema |
| `contents/library-authors.mdx` | For library authors | Guidelines for libraries integrating with Zod |
| `contents/metadata.mdx` | Metadata and registries | Attaching and manipulating metadata on schemas |
| `contents/packages/core.mdx` | Zod Core | Minimal core for custom implementations |
| `contents/packages/mini.mdx` | Zod Mini | Tree-shakable variant of Zod |
| `contents/packages/zod.mdx` | Zod | Internals and structure of the Zod library |
| `contents/v4/changelog.mdx` | Migration guide | Changelog and migration from Zod 3 to Zod 4 |
| `contents/v4/index.mdx` | Release notes | Zod 4 features, performance improvements, and breaking changes |
| `contents/v4/versioning.mdx` | Versioning | Versioning strategy and compatibility for Zod 4 |

## When to use

Use this skill when the user asks about:
- Defining schemas (strings, numbers, objects, arrays, unions) and parsing with `.parse()` / `.safeParse()`
- TypeScript type inference with `z.infer`, `z.input`, `z.output`
- Customizing and formatting validation errors
- Refinements, transforms, codecs, and bidirectional encode/decode
- Converting to and from JSON Schema, and metadata registries
- `z.compile()` AOT compilation, Zod Mini, and bundle-size optimization
- Migrating from Zod 3 to Zod 4, and building libraries on Zod

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
