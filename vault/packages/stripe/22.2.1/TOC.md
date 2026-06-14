# stripe Table of Contents

## Directory Map

```
contents/
├── README.md                        # Main library README: install, usage, config
├── examples/                        # Usage examples (15 files)
│   ├── snippets/                    # Webhook handler, meter event stream
│   └── webhook-signing/             # Webhook signing examples (Express, Koa, NestJS, Next.js, Deno)
└── src/                             # Source code (228 files)
    ├── stripe.core.ts               # Main Stripe client initialization
    ├── Webhooks.ts                  # Webhook signature verification
    ├── Error.ts                     # Error classes and types
    ├── Types.ts                     # TypeScript type definitions
    ├── autoPagination.ts            # Auto-pagination helpers
    ├── RequestSender.ts             # HTTP request logic
    ├── StripeResource.ts            # Base resource class
    ├── shared.ts                    # Shared utilities
    ├── lib.ts                       # Library entry point
    ├── resources.ts                 # Resource registry
    ├── crypto/                      # Crypto providers (3 files)
    ├── net/                         # HTTP client implementations (3 files)
    ├── platform/                    # Platform adapters: Node, Web (3 files)
    └── resources/                   # API resource implementations (189 files)
        ├── [flat .ts files]         # Accounts, Charges, Customers, Invoices, etc. (82 files)
        ├── Apps/                    # Apps.Secrets (2 files)
        ├── Billing/                 # Meters, MeterEvents, CreditGrants (10 files)
        ├── BillingPortal/           # Portal configurations and sessions (3 files)
        ├── Checkout/                # Checkout Sessions (2 files)
        ├── Climate/                 # Climate products, orders (4 files)
        ├── Entitlements/            # Feature entitlements (4 files)
        ├── FinancialConnections/    # Bank account connections (6 files)
        ├── Forwarding/              # Vault forwarding (2 files)
        ├── Identity/                # Identity verification (3 files)
        ├── Issuing/                 # Issuing cards, cardholders (9 files)
        ├── Radar/                   # Fraud detection (5 files)
        ├── Reporting/               # Financial reports (3 files)
        ├── Reserve/                 # Reserve management (4 files)
        ├── Sigma/                   # Sigma SQL reports (2 files)
        ├── Tax/                     # Tax calculations and registrations (8 files)
        ├── Terminal/                # In-person payments (6 files)
        ├── Treasury/                # Treasury financial accounts (12 files)
        └── V2/                      # V2 API: Billing, Commerce, Core (22 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Setup and initialization | `contents/README.md` |
| Client configuration | `contents/src/stripe.core.ts` |
| Webhook verification | `contents/src/Webhooks.ts` |
| Error handling | `contents/src/Error.ts` |
| TypeScript types | `contents/src/Types.ts` |
| Auto-pagination | `contents/src/autoPagination.ts` |
| Webhook examples | `contents/examples/webhook-signing/README.md` |
| Event snippets | `contents/examples/snippets/README.md` |
| Payments | `contents/src/resources/PaymentIntents.ts` |
| Checkout | `contents/src/resources/Checkout/Sessions.ts` |
| Subscriptions | `contents/src/resources/Subscriptions.ts` |
| Customers | `contents/src/resources/Customers.ts` |

## Detailed Structure

### Root (1 file)

| File | Description |
|------|-------------|
| `README.md` | Main README: installation, usage, configuration, TypeScript, webhooks, pagination, telemetry |

### examples/snippets/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Overview of available code snippets |
| `event_notification_webhook_handler.ts` | Webhook event handler example |
| `meter_event_stream.ts` | Meter event streaming example |

### examples/webhook-signing/ (12 files)

| File | Description |
|------|-------------|
| `README.md` | Webhook signing setup guide |
| `express/main.ts` | Express.js webhook handler |
| `koa/main.ts` | Koa webhook handler |
| `nestjs/main.ts` | NestJS webhook handler |
| `nestjs/app.controller.ts` | NestJS controller with webhook route |
| `nestjs/app.module.ts` | NestJS module configuration |
| `nestjs/config.ts` | NestJS Stripe config |
| `nextjs/main.ts` | Next.js webhook handler |
| `nextjs/app/api/webhooks/route.ts` | Next.js App Router webhook route |
| `nextjs/pages/api/webhooks.ts` | Next.js Pages Router webhook route |
| `nextjs/next-env.d.ts` | Next.js TypeScript env types |
| `deno/main.ts` | Deno webhook handler |

### src/ (18 core files)

| File | Description |
|------|-------------|
| `stripe.core.ts` | Main Stripe class: constructor, configuration, request handling |
| `Webhooks.ts` | Webhook signature construction and verification |
| `Error.ts` | StripeError, StripeCardError, StripeInvalidRequestError, and all error types |
| `Types.ts` | Public TypeScript types and interfaces |
| `autoPagination.ts` | Auto-pagination: `autoPagingEach`, `autoPagingToArray` |
| `RequestSender.ts` | Low-level HTTP request builder and sender |
| `StripeResource.ts` | Base class for all API resources |
| `StripeContext.ts` | Request context and scoping |
| `StripeEmitter.ts` | Event emitter for request lifecycle hooks |
| `ResourceNamespace.ts` | Namespace wrapper for grouped resources |
| `shared.ts` | Shared utilities used across the library |
| `lib.ts` | Library public API exports |
| `resources.ts` | Resource registry mapping names to classes |
| `apiVersion.ts` | Current Stripe API version constant |
| `multipart.ts` | Multipart form data encoding |
| `Decimal.ts` | Decimal number handling |
| `V2Coercion.ts` | V2 API type coercion utilities |
| `utils.ts` | General utility functions |

### src/crypto/ (3 files)

| File | Description |
|------|-------------|
| `CryptoProvider.ts` | Abstract crypto provider interface |
| `NodeCryptoProvider.ts` | Node.js crypto implementation |
| `SubtleCryptoProvider.ts` | Web Crypto (SubtleCrypto) implementation |

### src/net/ (3 files)

| File | Description |
|------|-------------|
| `HttpClient.ts` | Abstract HTTP client interface |
| `NodeHttpClient.ts` | Node.js HTTP client implementation |
| `FetchHttpClient.ts` | Fetch API HTTP client implementation |

### src/platform/ (3 files)

| File | Description |
|------|-------------|
| `PlatformFunctions.ts` | Abstract platform functions interface |
| `NodePlatformFunctions.ts` | Node.js platform implementation |
| `WebPlatformFunctions.ts` | Web/browser platform implementation |

### src/resources/ flat files (82 files)

Key resources (all follow the pattern `{Resource}.ts` with create/retrieve/update/list/delete methods):

| File | Description |
|------|-------------|
| `PaymentIntents.ts` | PaymentIntents: create, confirm, capture, cancel |
| `PaymentMethods.ts` | PaymentMethods: attach, detach, list |
| `Customers.ts` | Customers: CRUD, payment methods, balance |
| `Charges.ts` | Charges: create, capture, refund |
| `Subscriptions.ts` | Subscriptions: create, update, cancel |
| `SubscriptionItems.ts` | Subscription line items management |
| `SubscriptionSchedules.ts` | Subscription phase scheduling |
| `Invoices.ts` | Invoices: create, finalize, pay, send |
| `InvoiceItems.ts` | Invoice line items |
| `InvoicePayments.ts` | Invoice payment tracking |
| `Products.ts` | Product catalog management |
| `Prices.ts` | Price creation and management |
| `Accounts.ts` | Connect: account management |
| `AccountLinks.ts` | Connect: onboarding links |
| `AccountSessions.ts` | Connect: embedded component sessions |
| `Transfers.ts` | Connect: fund transfers |
| `Payouts.ts` | Payout management |
| `Refunds.ts` | Refund creation and management |
| `Disputes.ts` | Dispute handling |
| `WebhookEndpoints.ts` | Webhook endpoint CRUD |
| `Events.ts` | Event retrieval |
| `SetupIntents.ts` | SetupIntents for future payments |
| `PaymentLinks.ts` | Payment link creation |
| `OAuth.ts` | OAuth flow for Connect |
| `Tokens.ts` | Token creation |
| `Sources.ts` | Payment sources |
| `Balance.ts` | Account balance retrieval |
| `BalanceTransactions.ts` | Balance transaction history |
| `TaxRates.ts` | Tax rate management |
| `TaxIds.ts` | Customer tax ID management |
| `Coupons.ts` | Coupon/discount codes |
| `PromotionCodes.ts` | Promotion code management |
| `Files.ts` | File upload and retrieval |

### src/resources/Billing/ (10 files)

| File | Description |
|------|-------------|
| `index.ts` | Billing namespace export |
| `Meters.ts` | Usage-based billing meters |
| `MeterEvents.ts` | Meter event ingestion |
| `MeterEventAdjustments.ts` | Meter event corrections |
| `MeterEventSummaries.ts` | Aggregated meter summaries |
| `Alerts.ts` | Billing threshold alerts |
| `AlertTriggereds.ts` | Triggered alert records |
| `CreditGrants.ts` | Customer credit grants |
| `CreditBalanceSummary.ts` | Credit balance overview |
| `CreditBalanceTransactions.ts` | Credit balance history |

### src/resources/BillingPortal/ (3 files)

| File | Description |
|------|-------------|
| `index.ts` | BillingPortal namespace export |
| `Configurations.ts` | Customer portal configuration |
| `Sessions.ts` | Portal session creation |

### src/resources/Checkout/ (2 files)

| File | Description |
|------|-------------|
| `index.ts` | Checkout namespace export |
| `Sessions.ts` | Checkout Session creation and management |

### src/resources/FinancialConnections/ (6 files)

| File | Description |
|------|-------------|
| `index.ts` | FinancialConnections namespace export |
| `Accounts.ts` | Connected bank accounts |
| `AccountOwners.ts` | Bank account owners |
| `AccountOwnerships.ts` | Ownership records |
| `Sessions.ts` | Financial Connections sessions |
| `Transactions.ts` | Bank transaction data |

### src/resources/Identity/ (3 files)

| File | Description |
|------|-------------|
| `index.ts` | Identity namespace export |
| `VerificationSessions.ts` | Identity verification sessions |
| `VerificationReports.ts` | Verification report results |

### src/resources/Issuing/ (9 files)

| File | Description |
|------|-------------|
| `index.ts` | Issuing namespace export |
| `Cards.ts` | Issued card management |
| `Cardholders.ts` | Cardholder management |
| `Authorizations.ts` | Card authorization handling |
| `Disputes.ts` | Issuing disputes |
| `Transactions.ts` | Issuing transaction history |
| `Tokens.ts` | Card token management |
| `PersonalizationDesigns.ts` | Card design management |
| `PhysicalBundles.ts` | Physical card bundles |

### src/resources/Radar/ (5 files)

| File | Description |
|------|-------------|
| `index.ts` | Radar namespace export |
| `ValueLists.ts` | Fraud prevention value lists |
| `ValueListItems.ts` | Items within value lists |
| `EarlyFraudWarnings.ts` | Early fraud warning records |
| `PaymentEvaluations.ts` | Payment fraud evaluations |

### src/resources/Tax/ (8 files)

| File | Description |
|------|-------------|
| `index.ts` | Tax namespace export |
| `Calculations.ts` | Tax calculation creation |
| `CalculationLineItems.ts` | Tax calculation line items |
| `Transactions.ts` | Tax transaction recording |
| `TransactionLineItems.ts` | Tax transaction line items |
| `Registrations.ts` | Tax registration management |
| `Settings.ts` | Tax settings configuration |
| `Associations.ts` | Tax ID associations |

### src/resources/Terminal/ (6 files)

| File | Description |
|------|-------------|
| `index.ts` | Terminal namespace export |
| `Readers.ts` | Terminal reader management |
| `Locations.ts` | Terminal location management |
| `Configurations.ts` | Terminal configuration |
| `ConnectionTokens.ts` | SDK connection tokens |
| `OnboardingLinks.ts` | Terminal onboarding links |

### src/resources/Treasury/ (12 files)

| File | Description |
|------|-------------|
| `index.ts` | Treasury namespace export |
| `FinancialAccounts.ts` | Treasury financial accounts |
| `FinancialAccountFeatures.ts` | Feature flags for financial accounts |
| `InboundTransfers.ts` | Inbound transfer management |
| `OutboundPayments.ts` | Outbound payment creation |
| `OutboundTransfers.ts` | Outbound transfer creation |
| `ReceivedCredits.ts` | Received credit records |
| `ReceivedDebits.ts` | Received debit records |
| `CreditReversals.ts` | Credit reversal management |
| `DebitReversals.ts` | Debit reversal management |
| `Transactions.ts` | Treasury transactions |
| `TransactionEntries.ts` | Transaction entry details |

### src/resources/V2/ (22 files)

| File | Description |
|------|-------------|
| `index.ts` | V2 namespace export |
| `Billing/MeterEvents.ts` | V2 meter event ingestion |
| `Billing/MeterEventAdjustments.ts` | V2 meter event adjustments |
| `Billing/MeterEventSession.ts` | V2 meter event sessions |
| `Billing/MeterEventStream.ts` | V2 high-throughput event streaming |
| `Commerce/ProductCatalog/Imports.ts` | V2 product catalog imports |
| `Core/Accounts.ts` | V2 account management |
| `Core/AccountLinks.ts` | V2 account links |
| `Core/AccountPersons.ts` | V2 account persons |
| `Core/AccountPersonTokens.ts` | V2 person tokens |
| `Core/AccountTokens.ts` | V2 account tokens |
| `Core/Events.ts` | V2 event retrieval |
| `Core/EventDestinations.ts` | V2 event destination management |
| `V2Amounts.ts` | V2 amount type definitions |
| `DeletedObject.ts` | V2 deleted object representation |
