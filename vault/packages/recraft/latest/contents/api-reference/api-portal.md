> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# API Portal

> Preview requests and manage API tokens, usage, billing, and workspace access.

The [API Portal](https://www.recraft.ai/app/api) is the dashboard for your Recraft API account.

> [!NOTE]
>
> API units are separate from Recraft Studio credits. Tokens, units, and request history belong to the personal account or workspace selected in the portal.

## Try the playground

On **Home**, change the language, model, or prompt in the code sample. **Run** shows a prebuilt result and does not send a request or spend API units.

![API Portal playground with a prebuilt example result](https://mintcdn.com/recraft/LGElDzSm3FZU8ceU/images/api-portal/playground-result.png?fit=max\&auto=format\&n=LGElDzSm3FZU8ceU\&q=85\&s=9e85ca532cf89d4cc656544cf454a7c3)

Copy the sample and follow the [Quickstart](https://www.recraft.ai/docs/api-reference/getting-started.md) to send a real request.

## Tokens and billing

Open [**API tokens**](https://www.recraft.ai/app/api/api-keys) to create or revoke tokens. The complete token is shown once; afterward, the portal displays only a masked value.

The selected account needs a positive API unit balance. Open [**Balance**](https://www.recraft.ai/app/api/billing) to buy units, configure auto top-up, review model prices, or manage invoices and payment details in Stripe.

Purchased API units do not expire. See [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md) for every model and operation.

## Monitor API activity

Only requests authenticated with API tokens appear in these views. Recraft Studio and MCP activity are not included.

| Question | View |
| - | - |
| Which models and tokens use API units? | **Usage → Usage** |
| Are requests succeeding, and how fast are they? | **Usage → API requests** |
| What happened to a specific call? | **Request log** |

> [tab] Usage
>
> Shows API units, paid results, usage over time, and usage by model. Select 7, 30, or 90 days, or a custom UTC range of up to 90 days.
>
> ![API unit usage with date, token, and model filters](https://mintcdn.com/recraft/LGElDzSm3FZU8ceU/images/api-portal/usage.jpg?fit=max\&auto=format\&n=LGElDzSm3FZU8ceU\&q=85\&s=dd89ac51baeba79e1917c2b72c69e473)

> [tab] API requests
>
> Shows request volume, `4xx` and `5xx` errors, `p50` and `p95` latency, and top endpoints. Filter by method, status, endpoint, token, or latency.
>
> ![API request volume, success rate, latency, and filters](https://mintcdn.com/recraft/LGElDzSm3FZU8ceU/images/api-portal/api-requests.jpg?fit=max\&auto=format\&n=LGElDzSm3FZU8ceU\&q=85\&s=29c964e46493d6808f8d04e6e65cf8c1)

> [tab] Request log
>
> Lists individual requests newest first. Filter the list, switch between UTC and local time, inspect metadata, copy a request ID, or export the current page of up to 50 requests as CSV.
>
> ![Request log with filters, request volume, and individual requests](https://mintcdn.com/recraft/LGElDzSm3FZU8ceU/images/api-portal/request-log.jpg?fit=max\&auto=format\&n=LGElDzSm3FZU8ceU\&q=85\&s=f8db721fb78ce2c7bc35e58f5fa5f27c)

Request and response bodies are not displayed.

## Workspace access

| Account or role | API tokens | Balance | Usage and requests |
| - | - | - | - |
| Personal account | Manage | Manage | View |
| Workspace admin | Manage | Manage | View |
| Workspace billing admin | No access | Manage | View |
| Workspace member | No access | No access | View |

Use **Workspace** to manage company and billing details, members, roles, and invitations. For Studio seats and credits, see [Teams workspace administration](https://www.recraft.ai/docs/teams/teams-workspace-admin.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.