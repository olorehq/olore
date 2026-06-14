---
name: olore-t3-env-latest
description: Local t3-env documentation reference (latest). T3 Env documentation. Use for type-safe environment variable validation with Zod/Valibot, Next.js and Nuxt integration, and runtime env configuration.
---

# t3-env Documentation

T3 Env provides type-safe environment variable validation for TypeScript applications. It validates env vars at runtime using any Standard Schema compliant validator (Zod, Valibot, ArkType, Typia, etc.) and enforces server/client variable separation to prevent accidental secret leakage.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/introduction/page.mdx` | Introduction | Overview of T3 Env: type-safe env vars, Standard Schema support, server/client separation, framework presets |
| `contents/core/page.mdx` | Core | Framework-agnostic core package setup using `createEnv` with server/client schemas and `runtimeEnv` mapping |
| `contents/nextjs/page.mdx` | Next.js | Next.js integration via `@t3-oss/env-nextjs` — preconfigured with NEXT_PUBLIC_ prefix and edge runtime support |
| `contents/nuxt/page.mdx` | Nuxt | Nuxt integration via `@t3-oss/env-nuxt` — auto-fills runtimeEnv from Nuxt's runtime config |
| `contents/customization/page.mdx` | Customization | Options: `skipValidation`, custom error handling, `emptyStringAsUndefined`, extending presets |
| `contents/recipes/page.mdx` | Recipes | Common patterns: boolean coercion, number parsing, enum validation, optional variables with defaults |
| `contents/standard-schema/page.mdx` | Standard Schema | Supported validators (Zod, Valibot, ArkType, Typia) and how Standard Schema interop works |

## When to use

Use this skill when the user asks about:
- Setting up type-safe environment variables in TypeScript/Node.js projects
- Integrating T3 Env with Next.js or Nuxt
- Using Zod, Valibot, ArkType, or other validators for env var schemas
- Separating server-only vs client-exposed environment variables
- Coercing env var strings to booleans, numbers, or enums
- Customizing validation behavior (skipping validation, empty string handling)
- Using deployment presets for Vercel, Netlify, Railway, etc.

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
