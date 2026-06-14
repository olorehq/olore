---
name: olore-zod-4.4.3
description: Local zod documentation reference (4.4.3). Zod schema validation documentation. Use for TypeScript type inference, parsing, error handling, and schema composition.
---

# zod Documentation

Zod schema validation documentation. Use for TypeScript type inference, parsing, error handling, and schema composition.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/api.mdx` | Defining schemas | Complete API reference for all Zod schema types, methods, and validation features |
| `contents/basics.mdx` | Basic usage | Basic usage guide covering schema definition, parsing data, error handling, and type inference |
| `contents/codecs.mdx` | Codecs | Bidirectional transformations with encode and decode |
| `contents/error-customization.mdx` | Customizing errors | Guide to customizing validation error messages and error handling patterns |
| `contents/error-formatting.mdx` | Formatting errors | Utilities for formatting and displaying Zod errors |
| `contents/json-schema.mdx` | JSON Schema | How to convert Zod schemas to JSON Schema |
| `contents/library-authors.mdx` | For library authors | Guidelines and best practices for library authors integrating with Zod |
| `contents/metadata.mdx` | Metadata and registries | Attaching and manipulating metadata on Zod schemas |
| `contents/packages/core.mdx` | Zod Core | Zod Core package - minimal core functionality for custom implementations |
| `contents/packages/mini.mdx` | Zod Mini | Zod Mini - a tree-shakable Zod variant for strict bundle-size constraints |
| `contents/packages/zod.mdx` | Zod | Internals and structure of the main Zod library package |
| `contents/v4/changelog.mdx` | Migration guide | Complete changelog and migration guide for upgrading from Zod 3 to Zod 4 |
| `contents/v4/index.mdx` | Release notes | Zod 4 release notes and new features including performance improvements |
| `contents/v4/versioning.mdx` | Versioning | Versioning strategy, import paths, and compatibility information for Zod 4 |

## When to use

Use this skill when the user asks about:
- Defining and composing Zod schemas (strings, numbers, objects, arrays, unions, enums, etc.)
- Parsing and validating data with `.parse()`, `.safeParse()`, and related methods
- TypeScript type inference from Zod schemas (`z.infer<>`)
- Customizing and formatting Zod validation error messages
- Converting Zod schemas to JSON Schema
- Using codecs for bidirectional data transformations
- Attaching metadata or descriptions to schemas via registries
- Migrating from Zod 3 to Zod 4
- Choosing between Zod, Zod Mini, and Zod Core packages
- Building libraries that integrate with Zod

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
