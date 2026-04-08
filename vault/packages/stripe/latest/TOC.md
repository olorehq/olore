# stripe Table of Contents

## Directory Map

```
contents/
├── README.md                     # Main README, installation, configuration
├── examples/                     # Usage examples (15 files)
│   ├── snippets/                 # Code snippets (webhooks, meter events)
│   └── webhook-signing/          # Webhook examples for Express, Koa, NestJS, Next.js, Deno
└── src/                          # TypeScript SDK source (232 files)
    ├── *.ts                      # Core: Stripe client, error types, webhooks, utils
    ├── crypto/                   # Crypto providers (Node, Subtle)
    ├── net/                      # HTTP clients (Node, Fetch)
    ├── resources/                # All Stripe API resources (v1)
    │   ├── *.ts                  # Top-level resources (Charges, Customers, PaymentIntents, etc.)
    │   ├── Apps/                 # Stripe Apps secrets
    │   ├── Billing/              # Billing alerts, credit grants, meters
    │   ├── BillingPortal/        # Customer portal configurations/sessions
    │   ├── Checkout/             # Checkout Sessions
    │   ├── Climate/              # Climate orders, products, suppliers
    │   ├── Entitlements/         # Feature entitlements
    │   ├── FinancialConnections/ # Bank account connections
    │   ├── Forwarding/           # Request forwarding
    │   ├── Identity/             # Identity verification
    │   ├── Issuing/              # Card issuing
    │   ├── Radar/                # Fraud detection
    │   ├── Reporting/            # Financial reports
    │   ├── Reserve/              # Reserve holds/plans
    │   ├── Sigma/                # Scheduled SQL queries
    │   ├── Tax/                  # Tax calculations
    │   ├── Terminal/             # In-person payments
    │   ├── TestHelpers/          # Test mode helpers (clocks, funding, etc.)
    │   ├── Treasury/             # Financial accounts, transfers
    │   └── V2/                   # Stripe API v2 resources (Billing, Core)
    └── shared.ts                 # Shared types (Address, Metadata, PaginationParams, etc.)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started / installation | `contents/README.md` |
| Stripe client initialization | `contents/src/stripe.core.ts` |
| Payment Intents | `contents/src/resources/PaymentIntents.ts` |
| Checkout Sessions | `contents/src/resources/Checkout/Sessions.ts` |
| Subscriptions | `contents/src/resources/Subscriptions.ts` |
| Webhooks | `contents/src/Webhooks.ts` |
| Connect / Accounts | `contents/src/resources/Accounts.ts` |
| TypeScript types | `contents/src/shared.ts` |
| Webhook examples | `contents/examples/webhook-signing/` |

## Detailed Structure

### Root (1 file)

| File | Description |
|------|-------------|
| `README.md` | Installation, initialization, configuration, usage patterns, TypeScript support |

### examples/snippets/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Overview of example snippets |
| `event_notification_webhook_handler.ts` | Webhook event handling example |
| `meter_event_stream.ts` | Billing meter event stream example |

### examples/webhook-signing/ (12 files)

| File | Description |
|------|-------------|
| `README.md` | Webhook signing overview |
| `express/main.ts` | Express.js webhook handler |
| `koa/main.ts` | Koa webhook handler |
| `nestjs/main.ts` | NestJS webhook handler |
| `nextjs/app/api/webhooks/route.ts` | Next.js App Router webhook route |
| `nextjs/pages/api/webhooks.ts` | Next.js Pages Router webhook handler |
| `deno/main.ts` | Deno webhook handler |

### src/ core files (14 files)

| File | Description |
|------|-------------|
| `stripe.core.ts` | Stripe client class, initialization, configuration |
| `stripe.cjs.node.ts` | CJS Node.js entry point |
| `stripe.esm.node.ts` | ESM Node.js entry point |
| `stripe.cjs.worker.ts` | CJS worker/edge entry point |
| `stripe.esm.worker.ts` | ESM worker/edge entry point |
| `Webhooks.ts` | Webhook signature verification |
| `Error.ts` | Stripe error types (StripeError, CardError, etc.) |
| `Types.ts` | Core TypeScript type definitions |
| `shared.ts` | Shared param types: Address, Metadata, PaginationParams, etc. |
| `lib.ts` | Request options, ApiList, Response types |
| `autoPagination.ts` | Auto-pagination utilities |
| `RequestSender.ts` | HTTP request handling |
| `StripeResource.ts` | Base resource class |
| `utils.ts` | Utility functions |

### src/resources/ top-level (80+ files)

| File | Description |
|------|-------------|
| `Accounts.ts` | Connect accounts (create, update, retrieve) |
| `AccountLinks.ts` | Account link creation for Connect onboarding |
| `AccountSessions.ts` | Account sessions for embedded components |
| `Balance.ts` | Retrieve account balance |
| `BalanceTransactions.ts` | Balance transaction listing |
| `Charges.ts` | Charge creation and retrieval |
| `Checkout/Sessions.ts` | Checkout Session creation, retrieval, expiry |
| `Customers.ts` | Customer CRUD operations |
| `CustomerSessions.ts` | Customer sessions for embedded components |
| `Disputes.ts` | Dispute management |
| `Events.ts` | Event retrieval (for webhooks) |
| `Files.ts` | File uploads |
| `Invoices.ts` | Invoice creation, finalization, payment |
| `InvoiceItems.ts` | Invoice line items |
| `Mandates.ts` | Payment mandates |
| `OAuth.ts` | OAuth token management for Connect |
| `PaymentIntents.ts` | Payment Intent creation, confirmation, capture |
| `PaymentLinks.ts` | Payment link creation |
| `PaymentMethods.ts` | Payment method attach/detach/list |
| `Payouts.ts` | Payout management |
| `Plans.ts` | Legacy billing plans |
| `Prices.ts` | Price creation and listing |
| `Products.ts` | Product management |
| `PromotionCodes.ts` | Promotion code creation/listing |
| `Quotes.ts` | Quote creation and finalization |
| `Refunds.ts` | Refund creation |
| `SetupIntents.ts` | Setup Intent for saving payment methods |
| `Sources.ts` | Legacy payment sources |
| `Subscriptions.ts` | Subscription creation, update, cancel |
| `SubscriptionItems.ts` | Subscription item management |
| `SubscriptionSchedules.ts` | Subscription schedules |
| `Tokens.ts` | Token creation |
| `Transfers.ts` | Connect transfers |
| `TransferReversals.ts` | Transfer reversals |
| `WebhookEndpoints.ts` | Webhook endpoint management |

### src/resources/Billing/ (10 files)

| File | Description |
|------|-------------|
| `Alerts.ts` | Billing alerts |
| `CreditGrants.ts` | Credit grants |
| `CreditBalanceSummary.ts` | Credit balance summary |
| `Meters.ts` | Usage-based billing meters |
| `MeterEvents.ts` | Meter event ingestion |
| `MeterEventSummaries.ts` | Meter event summaries |

### src/resources/Checkout/ (2 files)

| File | Description |
|------|-------------|
| `Sessions.ts` | Full Checkout Session API with all params/types |
| `index.ts` | Namespace re-exports |

### src/resources/Identity/ (3 files)

| File | Description |
|------|-------------|
| `VerificationSessions.ts` | Identity verification sessions |
| `VerificationReports.ts` | Verification reports |

### src/resources/Issuing/ (9 files)

| File | Description |
|------|-------------|
| `Authorizations.ts` | Card authorization management |
| `Cards.ts` | Issued card management |
| `Cardholders.ts` | Cardholder management |
| `Disputes.ts` | Issuing disputes |
| `Tokens.ts` | Issuing tokens |
| `Transactions.ts` | Issuing transactions |

### src/resources/Tax/ (8 files)

| File | Description |
|------|-------------|
| `Calculations.ts` | Tax calculation |
| `Transactions.ts` | Tax transactions |
| `Registrations.ts` | Tax registrations |
| `Settings.ts` | Tax settings |

### src/resources/Terminal/ (6 files)

| File | Description |
|------|-------------|
| `Readers.ts` | Terminal reader management |
| `Locations.ts` | Terminal locations |
| `Configurations.ts` | Terminal configurations |
| `ConnectionTokens.ts` | Connection tokens for SDK |

### src/resources/TestHelpers/ (16 files)

| File | Description |
|------|-------------|
| `TestClocks.ts` | Test clock creation/advancement for subscription testing |
| `Customers.ts` | Fund test customer cash balance |
| `Refunds.ts` | Expire pending refunds in test mode |
| `Issuing/Authorizations.ts` | Simulate issuing authorizations |
| `Treasury/ReceivedCredits.ts` | Simulate received credits |
| `Treasury/ReceivedDebits.ts` | Simulate received debits |

### src/resources/Treasury/ (12 files)

| File | Description |
|------|-------------|
| `FinancialAccounts.ts` | Financial account management |
| `InboundTransfers.ts` | Inbound transfer management |
| `OutboundPayments.ts` | Outbound payment management |
| `OutboundTransfers.ts` | Outbound transfer management |
| `ReceivedCredits.ts` | Received credits |
| `ReceivedDebits.ts` | Received debits |

### src/resources/V2/ (14 files)

| File | Description |
|------|-------------|
| `Core/Accounts.ts` | V2 accounts API |
| `Core/Events.ts` | V2 events API |
| `Core/EventDestinations.ts` | V2 event destinations |
| `Billing/MeterEvents.ts` | V2 meter events |
| `Billing/MeterEventStream.ts` | V2 meter event streaming |
