---
name: olore-zeptomail-latest
description: Local Zoho ZeptoMail documentation reference (latest). Transactional email service by Zoho. Use for email sending API/SMTP, batch sending, single & dynamic templates, file upload, domain addition and DNS verification (SPF/DKIM/DMARC across GoDaddy/Cloudflare/cPanel/Wix/Squarespace/etc.), agents, webhooks, email tracking, bounce & suppression handling, dedicated IP, reports & logs, API keys, error/SMTP codes, transition guides (Amazon SES/SendGrid/Mailgun/Mailchimp-Mandrill/Postmark/MailChannels), migration guides, and integrations/plugins (WordPress/WooCommerce/Laravel/Django/Drupal/Magento/Joomla/Ruby on Rails/Zapier/Make/n8n/Zoho Flow/Power Automate).
---

# ZeptoMail Documentation

Zoho ZeptoMail is a dedicated **transactional** email service — OTPs, password resets, order/shipping confirmations, welcome mailers. It does **not** support bulk/marketing email (that's Zoho Campaigns). Send via REST API or SMTP. Core objects: **Agents** (sending identities holding domains, API keys/SMTP creds, templates, webhooks), **Domains** (DNS-verified with SPF/DKIM), **Templates** (single + dynamic-variable), **Suppression lists**, and **Reports/logs**.

116 files in `contents/`, mirroring the help-site URL layout (`api/` REST reference, `dns/` provider guides, root = UI/concept docs). Every file starts with a `<!-- source: <url> -->` comment. See `TOC.md` for the full categorized index.

## Quick Reference

| Need | Start here |
|------|-----------|
| Send one transactional email (API) | `contents/api/email-sending.md` |
| Send batched/personalized emails | `contents/api/batch-email-sending.md`, `contents/api/batch-email-templates.md` |
| Templates (single / dynamic vars) | `contents/api/email-templates.md`, `contents/api/dynamic-templates.md` |
| Send via SMTP | `contents/smtp-home.md`, `contents/api/smtp-error-codes.md` |
| Copy-paste code (curl/Node/Python/PHP/Java/...) | `contents/code-examples.md` |
| First-time setup | `contents/getting-started.md`, `contents/introduction.md` |
| Add & verify a sending domain | `contents/domains.md`, `contents/dns.md` + `contents/dns/<provider>.md` |
| Webhooks (delivery/open/click/bounce events) | `contents/webhooks.md` |
| Bounces / suppression | `contents/bounce-error.md`, `contents/suppression-list.md` |
| API errors / SMTP errors | `contents/api/error-codes.md`, `contents/api/smtp-error-codes.md` |
| Switch from another ESP | Transition Guides section in `TOC.md` |
| Plugin/integration (WordPress, Laravel, Zapier, ...) | Integrations section in `TOC.md` |

## REST API surface (`contents/api/`)

40 endpoint pages, one HTTP method each. Groups:
- **Email**: `email-sending`, `batch-email-sending`, `file-upload`
- **Templates**: `add-template`, `get-template`, `list-template`, `update-template`, `delete-template`, `email-templates`, `batch-email-templates`, `dynamic-templates`
- **Domains**: `add-domain`, `edit-domain`, `verify-domain`, `get-specific-domain`, `list-all-domains`, `delete-domain`
- **Agents**: `add-agent`, `edit-agent`, `list-agents`
- **Keys / SMTP passwords**: `generate-api-keys`, `list-api-keys`, `delete-api-key`, `generate-short-password`, `list-short-passwords`, `delete-short-password`
- **Suppression**: `add-suppression-list`, `get-suppression-list`, `edit-suppression-list`, `delete-suppression-list`
- **Logs / exports**: `get-email-logs`, `get-specific-email-log`, `export-logs`, `fetch-exports`, `download-exports`, `delete-exports`
- **Errors**: `error-codes`, `smtp-error-codes`

Auth uses the `Authorization` header with the agent's **Send Mail token** (API key). Each endpoint page lists the method, URL, headers, request params, and a sample request/response.

## When to Use

Use this skill when the user asks about:
- Sending transactional email through Zoho ZeptoMail (API or SMTP), batch sends, attachments/file cache
- Building or calling single vs. dynamic templates and their variable syntax
- Adding/verifying domains and the exact DNS records (SPF, DKIM, DMARC, return-path) per registrar/host
- Configuring Agents, webhooks, email tracking, IP restrictions, dedicated IP
- Diagnosing bounces, managing suppression lists, reading reports/dashboards/activity & export logs
- Generating/managing API keys and SMTP credentials; account, users, subscription, notification settings
- Migrating or drop-in transitioning from Amazon SES, SendGrid, Mailgun, Mailchimp Transactional (Mandrill), Postmark, or MailChannels
- Wiring ZeptoMail into WordPress, WooCommerce, Laravel, Django, Drupal, Magento, Joomla, Ruby on Rails, Bubble, WHMCS, Zapier, Make, n8n, Workato, Zoho Flow, MS Power Automate, Zoho CRM/Bigin
- Interpreting API/SMTP error codes and email-sending limits

## How to Find Information

1. Check the **Quick Reference** above for the most common tasks.
2. For any REST call, go straight to `contents/api/<action>.md`.
3. For DNS, open `contents/dns.md` then the specific `contents/dns/<provider>.md`.
4. For anything else, scan `TOC.md` — it lists all 116 files grouped by topic with sizes and titles.

Note: docs crawled from the live Zoho help site; content reflects the crawl date, not a versioned release.
