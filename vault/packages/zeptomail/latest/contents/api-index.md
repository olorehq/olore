<!-- source: https://www.zoho.com/zeptomail/help/api-index.html -->

# API index guide

API or Application Programming Interface acts as a connection between applications or softwares, by allowing them to adopt specific functionalities (navigation, emails, payment etc.) within their application. One such functionality that application owners can adopt is transactional email-sending and related actions. This page lists all the APIs available in ZeptoMail.

The total email size which includes your email headers, body content, inline images, and attachments should NOT exceed 15 MB.

#### Table of Contents

- [Email sending API](https://www.zoho.com/zeptomail/help/api-index.html#email-api)
- [File cache API](https://www.zoho.com/zeptomail/help/api-index.html#filecache-api)
- [Suppression list API](https://www.zoho.com/zeptomail/help/api-index.html#suppression-api)
- [Templates API](https://www.zoho.com/zeptomail/help/api-index.html#template-api)
- [Domains API](https://www.zoho.com/zeptomail/help/api-index.html#domains)
- [Agents API](https://www.zoho.com/zeptomail/help/api-index.html#agents)
- [Email logs API](https://www.zoho.com/zeptomail/help/api-index.html#logs)
- [Export API](https://www.zoho.com/zeptomail/help/api-index.html#exports)

## Email-sending API

|     |     |     |
| --- | --- | --- |
| **Method name** | **Method type** | **URL** |
| [Send single email](https://www.zoho.com/zeptomail/help/api/email-sending.html) | POST | /v1.1/email |
| [Send batch email](https://www.zoho.com/zeptomail/help/api/batch-email-sending.html) | POST | /v1.1/email/batch |
| [Send single email with template](https://www.zoho.com/zeptomail/help/api/email-templates.html) | POST | /v1.1/email/template |
| [Send batch email with template](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html) | POST | /v1.1/email/template/batch |

## File cache API

|     |     |     |
| --- | --- | --- |
| **Method name** | **Method type** | **URL** |
| [Upload File cache](https://www.zoho.com/zeptomail/help/api/file-upload.html) | POST | /v1.1/files?name=logo.jpg |

## Suppression list API

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Method name** | **Method type** | **URL** | **OAuth scope** | **Operation** |
| [Add a suppression list entry](https://www.zoho.com/zeptomail/help/api/add-suppression-list.html) | POST | /v1.1/suppressions/{type} | Zeptomail.Suppressions.All | CREATE |
| [Edit a suppression list entry](https://www.zoho.com/zeptomail/help/api/edit-suppression-list.html) | PUT | /v1.1/suppressions/{type} | UPDATE |
| [Fetch suppression list entries](https://www.zoho.com/zeptomail/help/api/get-suppression-list.html) | GET | /v1.1/suppressions/{type} | READ |
| [Delete a suppression list entry](https://www.zoho.com/zeptomail/help/api/delete-suppression-list.html) | DELETE | /v1.1/suppressions/{type} | DELETE |

## Templates API

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Method name** | **Method type** | **URL** | **OAuth scope** | **Operation** |
| [Add a new template](https://www.zoho.com/zeptomail/help/api/add-template.html) | POST | /v1.1/agents/{agent-alias}/templates | Zeptomail.MailTemplates.All | CREATE |
| [Edit an existing templates](https://www.zoho.com/zeptomail/help/api/update-template.html) | PUT | /v1.1/agents/{agent-alias}/templates/{template-key} | UPDATE |
| [Fetch single template](https://www.zoho.com/zeptomail/help/api/get-template.html) | GET | /v1.1/agents/{agent-alias}/templates{template-key} | READ |
| [Fetch multiple templates](https://www.zoho.com/zeptomail/help/api/list-template.html) | GET | /v1.1/agents/{agent-alias}/templates?offset=\*&limit=\* | READ |
| [Delete a template](https://www.zoho.com/zeptomail/help/api/delete-template.html) | DELETE | /v1.1/agents/{agent-alias}/templates{template-key} | DELETE |

## Domains API

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Method name** | **Method type** | **URL** | **OAuth scope** | **Operation** |
| [Add a new domain](https://www.zoho.com/zeptomail/help/api/add-domain.html) | POST | /v1.1/domains | Zeptomail.Domains.All | CREATE |
| [Edit domain](https://www.zoho.com/zeptomail/help/api/edit-domain.html) | PUT | /v1.1/domains/{domain\_key} | UPDATE |
| [List all domains](https://www.zoho.com/zeptomail/help/api/list-all-domains.html) | GET | /v1.1/domains | READ |
| [List specific domains](https://www.zoho.com/zeptomail/help/api/get-specific-domain.html) | GET | /v1.1/domains/{domain\_key} | READ |
| [Validate domain verification](https://www.zoho.com/zeptomail/help/api/verify-domain.html) | PUT | /v1.1/domains/{domain\_key}/verify | UPDATE |
| [Delete domain](https://www.zoho.com/zeptomail/help/api/delete-domain.html) | DELETE | /v1.1/domains/{domain\_key} | DELETE |

## Agents API

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Method name** | **Method type** | **URL** | **OAuth scope** | **Operation** |
| [Add a new Agent](https://www.zoho.com/zeptomail/help/api/add-agent.html) | POST | /v1.1/agents | Zeptomail.Agents.All | CREATE |
| [Edit existing Agent](https://www.zoho.com/zeptomail/help/api/edit-agent.html) | PUT | /v1.1/agents/{agentkey} | UPDATE |
| [List all Agents](https://www.zoho.com/zeptomail/help/api/list-agents.html) | GET | /v1.1/agents | READ |
| [Generate SMTP short password](https://www.zoho.com/zeptomail/help/api/generate-short-password.html) | POST | /v1.1/agents/{agentkey}/short-passwords | CREATE |
| [List SMTP short password](https://www.zoho.com/zeptomail/help/api/list-short-passwords.html) | GET | /v1.1/agents/{agentkey}/short-passwords | READ |
| [Delete SMTP short password](https://www.zoho.com/zeptomail/help/api/delete-short-password.html) | DELETE | /v1.1/agents/{agentkey}/short-passwords/{{id}} | DELETE |
| [Generate API keys](https://www.zoho.com/zeptomail/help/api/generate-api-keys.html) | POST | /v1.1/agents/{agentkey}/apikeys | CREATE |
| [List API keys](https://www.zoho.com/zeptomail/help/api/list-api-keys.html) | GET | /v1.1/agents/{agentkey}/apikeys | READ |
| [Delete API keys](https://www.zoho.com/zeptomail/help/api/delete-api-key.html) | DELETE | /v1.1/agents/{agentkey}/apikeys/{{id}} | DELETE |

## Email logs API

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Method name** | **Method type** | **URL** | **OAuth scope** | **Operation** |
| [Get all email logs](https://www.zoho.com/zeptomail/help/api/get-email-logs.html) | GET | /v1.1/email | Zeptomail.email.All | READ |
| [Get specific email logs](https://www.zoho.com/zeptomail/help/api/get-specific-email-log.html) | GET | /v1.1/email/email-reference/{email-reference} | READ |

## Export API

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Method name** | **Method type** | **URL** | **OAuth scope** | **Operation** |
| [Export logs](https://www.zoho.com/zeptomail/help/api/export-logs.html) | POST | /v1.1/{{export\_type}}/exports | Zeptomail.Exports.All | CREATE |
| [Fetch exports](https://www.zoho.com/zeptomail/help/api/fetch-exports.html) | GET | /v1.1/{{export\_type}}/exports | READ |
| [Download exports](https://www.zoho.com/zeptomail/help/api/download-exports.html) | GET | /v1.1/{export\_type}/exports/{export\_id}/download | READ |
| [Delete exports](https://www.zoho.com/zeptomail/help/api/delete-exports.html) | DELETE | /v1.1/{{export\_type}}/exports?export\_ids | DELETE |

**API error codes:** The commonly intercepted errors while using APIs can be found [here](https://www.zoho.com/zeptomail/help/api/error-codes.html). This will help you better handle them.
