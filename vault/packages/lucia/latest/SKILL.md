---
name: olore-lucia-latest
description: Local lucia documentation reference (latest). Lucia auth documentation. Use for session-based authentication, OAuth 2.0, password hashing, and framework-specific auth implementations.
---

# lucia Documentation

Lucia auth documentation. Use for session-based authentication, OAuth 2.0, password hashing, and framework-specific auth implementations.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/index.md` | Lucia | Overview and introduction to authentication resources using JavaScript and TypeScript |
| `contents/sessions/overview.md` | Sessions | Introduction to sessions and stateful HTTP concepts |
| `contents/sessions/basic.md` | Basic session implementation | Complete session implementation with ID/secret tokens, SHA-256 hashing, CSRF protection |
| `contents/sessions/inactivity-timeout.md` | Inactivity timeout | Implementing inactivity timeout to keep active users signed in |
| `contents/sessions/stateless-tokens.md` | Stateless tokens | Stateless token implementation with signed tokens |
| `contents/sessions/frameworks/index.md` | Framework implementations | Overview of framework-specific session implementations |
| `contents/sessions/frameworks/nextjs.md` | Next.js sessions | Session implementation for Next.js |
| `contents/sessions/frameworks/sveltekit.md` | SvelteKit sessions | Session implementation for SvelteKit |
| `contents/rate-limit/token-bucket.md` | Token bucket | Token bucket rate limiting algorithm implementation |
| `contents/tutorials/github-oauth/index.md` | Tutorial: GitHub OAuth | GitHub OAuth tutorial overview |
| `contents/tutorials/github-oauth/astro.md` | GitHub OAuth (Astro) | GitHub OAuth tutorial for Astro |
| `contents/tutorials/github-oauth/nextjs.md` | GitHub OAuth (Next.js) | GitHub OAuth tutorial for Next.js |
| `contents/tutorials/github-oauth/sveltekit.md` | GitHub OAuth (SvelteKit) | GitHub OAuth tutorial for SvelteKit |
| `contents/tutorials/google-oauth/index.md` | Tutorial: Google OAuth | Google OAuth tutorial overview |
| `contents/tutorials/google-oauth/astro.md` | Google OAuth (Astro) | Google OAuth tutorial for Astro |
| `contents/tutorials/google-oauth/nextjs.md` | Google OAuth (Next.js) | Google OAuth tutorial for Next.js |
| `contents/tutorials/google-oauth/sveltekit.md` | Google OAuth (SvelteKit) | Google OAuth tutorial for SvelteKit |
| `contents/examples/github-oauth.md` | GitHub OAuth Example | Basic example project with GitHub OAuth and rate limiting |
| `contents/examples/google-oauth.md` | Google OAuth Example | Basic example project with Google OAuth |
| `contents/examples/email-password-2fa.md` | Email/Password 2FA Example | Example with email/password, TOTP 2FA, email verification, password reset |
| `contents/examples/email-password-2fa-webauthn.md` | Email/Password WebAuthn Example | Example with email/password and WebAuthn 2FA |
| `contents/lucia-v3/migrate.md` | Migrate from Lucia v3 | Migration guide from Lucia v3 |

## When to use

Use this skill when the user asks about:
- Session management and authentication
- OAuth 2.0 implementation (GitHub, Google)
- Password hashing and secure token generation
- CSRF protection and security best practices
- Framework-specific authentication (Next.js, SvelteKit, Astro)
- Two-factor authentication (TOTP, WebAuthn)
- Rate limiting and login throttling
- Email verification and password reset flows

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
