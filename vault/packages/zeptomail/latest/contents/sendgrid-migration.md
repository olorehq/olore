<!-- source: https://www.zoho.com/zeptomail/help/sendgrid-migration.html -->

# Migration from SendGrid to ZeptoMail

[Zoho ZeptoMail](https://zoho.com/zeptomail) is a transactional email-sending service designed to ensure fast and reliable delivery of your critical emails. This guide explains how to migrate your transactional email setup from **SendGrid** to **ZeptoMail** with minimal disruption.

### Note

ZeptoMail is a dedicated transactional email service. Ensure that it is used only for transactional emails and not for marketing or bulk email campaigns. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).

#### Table of Contents

- [Terminology mapping](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#mapping)
- [Before migration](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#before-migration)
- [Migrating from SendGrid to ZeptoMail](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#migration)
  - [ZeptoMail account creation](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#account-creation)
  - [Migration process](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#migration-process)
  - [Troubleshooting migration issues](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#troubleshooting)
  - [Domain verification](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#domain-verification)
- [Setting up email-sending](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#email-sending)
- [Email tracking](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#email-tracking)
- [Points to note](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#note)

## Terminology mapping

The table below maps commonly used SendGrid terms to their ZeptoMail equivalents:

|     |     |
| --- | --- |
| **SendGrid** | **ZeptoMail** |
| Sender authentication | Domains |
| Templates | Templates |
| Email logs | Processed emails |
| Suppression Settings | Suppression List |
| Stats | Reports |

## Before migration

Before you begin migrating from Sendgrid to ZeptoMail, ensure you have the following in place:

- Your **SendGrid Account API** token.
- Any critical transactional emails logs exported for reference.
- All the templates, webhooks, suppression lists and domain authentication data are reviewed and upto date.

## Migrating from SendGrid to ZeptoMail

The migration process involves the following steps:

- [ZeptoMail account creation](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#account-creation)
- [Initiating the migration](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#migration-process)
- [Troubleshooting and ensuring a smooth transition](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#troubleshooting)
- [Domain verification](https://www.zoho.com/zeptomail/help/sendgrid-migration.html#domain-verification)

### ZeptoMail account creation

To migrate to ZeptoMail you must first create a ZeptoMail account.

1. Navigate to the ZeptoMail [homepage](https://zoho.com/zeptomail/) and click **Get started** from the top right corner.



![get started](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zem-getstarted.png)

2. Enter the relevant details and click **Sign up for free.**



![Screenshot of signup form](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zem-form.png)

3. Verify your account using the verification code sent to your registered mobile number.
4. If you are already using other Zoho services and have an existing Zoho account, click **Access ZeptoMail** and proceed with the next steps.



![Access ZeptoMail for existing users](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zem-access.png)

5. Once you sign up and verify yourself, you will be directed to the **Welcome page.**
6. Enter your organization name.



![welcome page](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/welcomeem.png)

7. Review the terms and conditions and click **Get started.**
8. Add the domain you will use for sending transactional emails and click **Add.**



![Domain page](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/newdomain.png)

9. Once the domain is added successfully, you will be redirected to the ZeptoMail dashboard.

A short survey will appear asking how you found ZeptoMail. Select **SendGrid** from the drop-down list and click **Save**. This will take you to the migration setup screen.

![Sendgrid info option](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sendgrid-info.png)

### Migration process

The following data will be migrated from your SendGrid account:

- Domain authentication data
- Email templates
- Suppression lists
- Webhooks

To begin migration:

1. Click **Let's begin.**



![Begin migration window](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sendgrid-lets_begin.png)

2. Enter the **Account API key** copied from your SendGrid account and click **Validate.**
3. Once validated, click **Migrate** to start the migration process.



![Migrate from sendgrid](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sendgrid-migrate-option.png)


You can view the progress of your data migration in the migration window.

###### Upon successful migration, the SendGrid account data will be migrated into a single Agent in ZeptoMail, along with the associated templates and webhooks.

### Agent

A Agent in ZeptoMail is similar to a subuser in SendGrid. Agents help segment different types of transactional emails based on their purpose, application, or workflow. Segmenting emails using Agents enables better organization and management. You can associate one or more verified domains with each Agent to send emails.

### Migrating additional accounts

To migrate additional accounts, you can access the migration menu from **Settings >>Migration >>New migration**.

![Migrating new accounts](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/new-migration.png)

This section lists the past **30 days'** migration information.

### Troubleshooting migration issues

In some cases, you may encounter errors during migration. The table below lists common issues and their resolutions:

|     |     |     |
| --- | --- | --- |
|  | **Error/failure message** | **Resolution** |
| **General errors** | Data already exists | Check for duplicates or update the existing record and try again. |
| Invalid value | Occurs when some templates or webhooks contain formats that maybe valid, but are **restricted by ZeptoMail**. Contact [support@zeptomail.com](mailto:support@zeptomail.com) for further clarification. |
| Threshold reached | The maximum number of API requests allowed, has been reached. Wait for 15–30 mins and retry. |
| Max limit exceeded | The template storage limit has been reached. Delete any unused migrated data and try again. |
| Records already exist | Check for duplicates or update the existing record and retry. |
| **Template-related errors** | You have reached the maximum limit for creating message templates | Delete unused templates or contact [support@zeptomail.com](mailto:support@zeptomail.com). |
| Message template alias already exists | Use a different template name or update the existing template alias. |
| Template addition failed | Occurs if the template size or format exceeds the permissible limit or any undefined issue that prevents the template from being migrated. Contact [support@zeptomail.com](mailto:support@zeptomail.com) if the issue persists. |
| Template size limit exceeded | Reduce the template size by removing attachments or minimizing template content and retry. The maximum template size is 5KB. |
| Template not found | Check your SendGrid account for the right template and retry. |
| **Webhook-related errors** | URL cannot be reached | Ensure the Webhook URL is active and retry. |
| Invalid URL | Ensure the Webhook URL is well formatted and retry. |
| URL already exists | Remove duplicates or update the existing webhook. |
| **Suppression-related errors** | Suppression data already exists | Check for duplicates or update the existing data. |
| Suppression data not found | Ensure the suppression data exists in SendGrid and try again. |

### Domain verification

Before sending emails through ZeptoMail, you must verify the domain(s) that are migrated from SendGrid. Domain authorization is specific to each email service provider. DNS records added for SendGrid authorize only SendGrid’s infrastructure and cannot be reused for ZeptoMail.

ZeptoMail requires new DKIM and CNAME records to be added to your domain’s DNS.

To verify your domain:

1. In the domain verification page of your ZeptoMail account, choose your DNS provider from the **Select your DNS provider** drop-down. In-case your DNS provider is not listed, select **Other** from the drop-down.



![List domains from the drop-down](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/domains-list.png)

2. Copy the DKIM and CNAME values.
3. Login to your respective DNS provider.
4. Add the copied DKIM and CNAME records.
5. Return to ZeptoMail and click **Verify**.
6. Once verified, the domain will be ready to send emails.
7. DNS record update can take upto 48 hours depending on the DNS provider.​

If you do not have access to the DNS Manager, click **Share records with colleague** to email the records to your IT admin.

## Setting up email-sending

ZeptoMail supports both SMTP and API-based email sending.

### SMTP configuration

|     |     |     |
| --- | --- | --- |
|  | **SendGrid** | **ZeptoMail** |
| SMTP end-points | smtp.sendgrid.net | smtp.zeptomail.com |
| Suported port values | 587,25,2525,465 | 587(TLS), 465(SSL) |

To configure SMTP:

1. Choose the Agent that you want to connect with your ZeptoMail account.
2. Navigate to the **SMTP/API section** and go to the SMTP tab.



![SMTP section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/smtp-api.png)

3. Copy the SMTP credentials to your application to start sending out emails.

### API configuration

Each Agent in ZeptoMail has a unique API token also known as the Send Mail Token, that separates the Agents from one another.

To access the Send Mail Token:

1. Go to the required Agent.
2. Navigate to SMTP/API → API.



![API section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/api-smtp.png)

3. Copy the Send Mail Token.

Refer to the [ZeptoMail API library](https://www.zoho.com/zeptomail/help/api-index.html) to select the appropriate API for your application.

## Email tracking

You can enable open and click tracking for individual Agents.

To enable tracking:

1. Go to the required Agent.
2. Navigate to **Email tracking.**



![Enable tracking](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/tracking-pm.png)

3. Enable tracking as needed.

Refer to the [ZeptoMail help documentation](https://www.zoho.com/zeptomail/help/email-tracking.html) to learn more about email tracking.

## Points to note

After completing the migration, it is recommended to:

- Send test emails to confirm successful delivery.
- Monitor reports and suppression activity.
- Keep note of the tracking activity.
