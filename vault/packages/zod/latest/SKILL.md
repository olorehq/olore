---
name: olore-zod-latest
description: Local zod documentation reference (latest). Zod schema validation documentation. Use for TypeScript type inference, parsing, error handling, and schema composition.
---

# zod Documentation

Zod schema validation documentation. Use for TypeScript type inference, parsing, error handling, and schema composition.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/index.mdx` | Intro | Introduction to Zod - TypeScript-first schema validation with static type inference |
| `contents/basics.mdx` | Basic usage | Schema definition, parsing data, error handling, and type inference |
| `contents/api.mdx` | Defining schemas | Complete API reference for all Zod schema types, methods, and validation features |
| `contents/error-customization.mdx` | Customizing errors | Customizing validation error messages and error handling patterns |
| `contents/error-formatting.mdx` | Formatting errors | Utilities for formatting and displaying Zod errors |
| `contents/codecs.mdx` | Codecs | Bidirectional transformations with encode and decode |
| `contents/json-schema.mdx` | JSON Schema | Converting Zod schemas to JSON Schema and using z.fromJSONSchema() |
| `contents/metadata.mdx` | Metadata and registries | Attaching and manipulating metadata on Zod schemas via registries |
| `contents/ecosystem.mdx` | Ecosystem | Zod ecosystem integrations, tools, and community resources |
| `contents/library-authors.mdx` | For library authors | Guidelines for library authors integrating with Zod |
| `contents/packages/zod.mdx` | Zod | Internals and structure of the main Zod library package |
| `contents/packages/mini.mdx` | Zod Mini | Tree-shakable variant of Zod for bundle-size-sensitive environments |
| `contents/packages/core.mdx` | Zod Core | Minimal core package for custom Zod-based implementations |
| `contents/v4/index.mdx` | Release notes | Zod 4 release notes and new features |
| `contents/v4/changelog.mdx` | Migration guide | Complete migration guide for upgrading from Zod 3 to Zod 4 |
| `contents/v4/versioning.mdx` | Versioning | Versioning strategy and compatibility information for Zod 4 |
| `contents/blog/clerk-fellowship.mdx` | Clerk Fellowship | Background on Zod 4 development and OSS fellowship announcement |

## When to use

Use this skill when the user asks about:
- Defining and composing Zod schemas (strings, numbers, objects, arrays, unions, etc.)
- Parsing and validating data with .parse(), .safeParse(), .decode(), .encode()
- TypeScript type inference from Zod schemas (z.infer, z.input, z.output)
- Handling and formatting Zod validation errors
- Converting Zod schemas to JSON Schema / OpenAPI
- Attaching metadata and using registries
- Migrating from Zod 3 to Zod 4
- Using Zod Mini for tree-shaking / bundle size optimization
- Building libraries on top of Zod (peer dependencies, Standard Schema)

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
