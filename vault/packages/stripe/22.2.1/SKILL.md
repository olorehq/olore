---
name: olore-stripe-22.2.1
description: Local Stripe Node.js SDK documentation reference (22.2.1). Use for payments, Checkout Sessions, Payment Intents, webhooks, subscriptions, Connect, and TypeScript types.
---

# stripe Documentation

Stripe Node.js SDK (stripe-node) v22.2.1. Provides convenient access to the Stripe API from server-side JavaScript and TypeScript applications.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Setup and initialization | `contents/README.md` |
| Client configuration | `contents/src/stripe.core.ts` |
| Webhook signature verification | `contents/src/Webhooks.ts` |
| Error handling | `contents/src/Error.ts` |
| TypeScript types | `contents/src/Types.ts` |
| Auto-pagination | `contents/src/autoPagination.ts` |
| Payment Intents | `contents/src/resources/PaymentIntents.ts` |
| Checkout Sessions | `contents/src/resources/Checkout/Sessions.ts` |
| Subscriptions | `contents/src/resources/Subscriptions.ts` |
| Webhook examples | `contents/examples/webhook-signing/README.md` |

## When to use

Use this skill when the user asks about:
- Creating and confirming payments (PaymentIntents, Checkout Sessions)
- Webhooks: verifying signatures, handling events
- Subscriptions, invoices, and billing
- Stripe Connect: accounts, transfers, payouts
- TypeScript types for Stripe API objects
- Auto-pagination with `autoPagingEach` / `autoPagingToArray`
- Error handling and StripeError types
- Usage-based billing with meters
- Terminal in-person payments
- Identity verification, Issuing cards, Treasury

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**
