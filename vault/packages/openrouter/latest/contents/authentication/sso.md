> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Single Sign-On (SSO)

> Let your team sign in to OpenRouter through your identity provider

Single sign-on lets members of your organization sign in to OpenRouter through your identity provider, such as Okta, Microsoft Entra ID, Google Workspace, or any custom SAML provider.

Setup is self-serve: you add your email domain, verify it with a DNS record, connect your identity provider, then test and activate the connection, all from your organization settings.

> [!NOTE]
>
> SSO is available for organizations on Enterprise plans. Contact our sales team if you'd like to discuss enterprise options.

## Requirements

* Your organization must be on an Enterprise plan
* You must be an **organization admin** to enable and configure SSO
* You must have a verified email address on your account
* Access to your domain's DNS records (for domain verification)
* Admin access to your identity provider

## Enabling SSO

SSO management lives on the members page of your organization settings:

**1. Open the SSO tab**

While in your organization context, navigate to [Settings > Members](https://openrouter.ai/settings/organization-members?tab=sso) and select the **SSO** tab.

**2. Click Enable SSO**

Click **Enable SSO**. This adds a **Security** tab to your organization settings, where you (or your IT admin) can manage domains and identity provider connections.

> [!WARNING]
>
> Enabling SSO is a one-way action for your organization and can only be performed by organization admins. It doesn't change how anyone signs in until a connection is verified and activated.

## Connecting Your Identity Provider

Once SSO is enabled, connect your identity provider from the Security tab:

**1. Open the Security tab**

From the SSO tab, click **Configure SSO** to open the Security tab of your organization settings.

**2. Add your email domain**

Add the email domain your team signs in with (for example, `acme.com`).

**3. Verify the domain with a DNS record**

Publish the TXT record shown in the setup flow to your domain's DNS. Verification usually completes within a few minutes of the record propagating.

**4. Connect your identity provider**

Follow the guided setup for your provider (Okta, Microsoft Entra ID, Google Workspace, or custom SAML) to exchange SAML metadata between OpenRouter and your IdP.

**5. Test and activate**

Test the connection with an account from your domain, then activate it. Active connections appear in the SSO tab.

> [!TIP]
>
> **DNS verification gotcha:** the **Host** value shown for the TXT record ends with your domain. Many registrars (including GoDaddy, Namecheap, Squarespace Domains, and Porkbun) automatically append your domain to the host name, so paste only the part before your domain. If verification stalls, a doubled domain in the published record (e.g. `…acme.com.acme.com`) is the usual culprit.

## Connection Statuses

Each connection in the SSO tab shows its domain, how it was created, and its current status:

| Status | Meaning |
| - | - |
| **Pending** | The connection has been created but isn't active yet (e.g. domain verification or activation is still in progress) |
| **Active** | Members of the domain sign in to OpenRouter through your identity provider |
| **Disabled** | The connection exists but is turned off |

Connections are labeled **Self-serve connection** when created through the Security tab, or **Configured by OpenRouter** when set up by our team on your behalf.

## Automatic Group Provisioning

With an SSO connection in place, you can also sync groups from your identity provider and map them to OpenRouter workspaces, so workspace access is provisioned automatically. See [SCIM Group Mappings](https://openrouter.ai/docs/guides/features/scim-mappings.md).

Once your SSO connection is active, organization admins can enable SCIM provisioning themselves from the **SCIM Mappings** tab: choose your identity provider, enter the IdP group whose members should be organization admins, and copy the generated endpoint URL and API key into your identity provider. See [Set Up Provisioning](https://openrouter.ai/docs/guides/features/scim-mappings.md#set-up-provisioning).

## User Deactivation and Deletion

With SCIM provisioning connected, your identity provider is the source of truth for user lifecycle. When a user is deactivated or deleted in your identity provider, the change syncs to OpenRouter automatically:

* Their membership in your organization is deactivated, and they can no longer sign in through the connection
* API keys they created in your organization are deactivated across all of the organization's workspaces

Deactivation is scoped to your organization: the member's personal OpenRouter account, personal API keys, and memberships in other organizations are not affected. If the user's OpenRouter account itself is deleted, all of their access ends, including their personal account and personal keys.

> [!WARNING]
>
> Deactivated keys are **not** automatically re-enabled if the user is later reactivated in your identity provider. An organization admin must re-enable the keys manually.

## Frequently Asked Questions

> [accordion] Can I turn SSO off after enabling it?
>
> Enabling self-serve SSO management for your organization is one-way. Individual connections can be disabled from the Security tab, and you can contact [support@openrouter.ai](mailto:support@openrouter.ai) for help with your SSO configuration.

> [accordion] Can I connect more than one domain?
>
> Yes. Domains and connections are managed in the Security tab of your organization settings; each verified domain gets its own connection entry in the SSO tab.

> [accordion] Who can manage SSO?
>
> Only organization admins can enable SSO and access the Security tab. Regular members won't see the SSO management options.

> [accordion] I don't see the SSO tab, why?
>
> The SSO tab is available to organization admins on Enterprise plans. If your organization's SSO was configured directly by OpenRouter, reach out to [support@openrouter.ai](mailto:support@openrouter.ai) for changes.

## Getting Help

* **Setup assistance**: Email [support@openrouter.ai](mailto:support@openrouter.ai)
* **Enterprise plans**: Contact our sales team to enable SSO for your organization
