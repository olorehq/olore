> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Security settings

> Review and manage API key security settings

The [Security settings page](https://openrouter.ai/settings/security) helps you find risky API keys and protect your account. It has three tabs: Overview, Key safety, and IP allowlist.

> [!NOTE]
>
> Personal accounts and organization administrators can edit the maximum key lifetime setting. On the Enterprise plan, they can also edit the IP allowlist. Organization administrators can see every key in the organization and copy a list of key owners. Organization members see only the keys they created.

## Overview

The Overview tab shows four cards. Select a card to open the Key safety tab filtered to those keys.

* **No spend limit**: keys without a credit limit. A leaked key could spend without a cap.
* **Never expires**: keys that stay valid until someone removes them.
* **Never used or idle 90+ days**: keys with no requests in the last 90 days.
* **Safe to remove**: idle keys with little or no lifetime usage.

If you're an organization member and any of your keys have no spend limit or never expire, a warning asks you to set a limit and an expiration on each one.

### Recommendations

Below the cards, the Overview tab lists recommendations for the keys that need attention:

* **Remove unused keys**: confirm with each owner, then archive the keys.
* **Set a spend limit**: cap what a leaked key can spend.
* **Review keys without expiration**: replace them with expiring keys, or remove the ones you no longer need.
* **Enforce a maximum key lifetime**: set a maximum API key lifetime in [privacy settings](https://openrouter.ai/settings/privacy). OpenRouter rejects requests from keys that never expire or that exceed the maximum lifetime, including existing keys. The policy also covers keys issued through OAuth consent, such as OpenRouter MCP keys, which are capped at 7 days on their own and get the shorter lifetime when the policy is stricter. Choose **No expiration** to allow any lifetime.

If you are an admin, you can select **Copy owner list** to copy a CSV of key owners and key names. Give the CSV to your agent or your team to coordinate cleanup with each owner.

## Key safety

The Key safety tab lists your active API keys. Disabled, expired, and archived keys aren't shown, and management keys are hidden unless you select **Show management keys**.

To narrow the list, use the following controls:

* Search by key name or label. Administrators can also search by owner.
* Filter by risk: **No limit** or **No expiry**.
* Filter by inactivity, from **Unused 30+ days** to **Unused 180+ days**, or show keys that were never used.
* Filter by owner, or show keys with no recorded owner.
* Show only keys that are **Safe to remove**.

### Risk and Status columns

The **Risk** column summarizes which safeguards a key lacks, such as **No limit**, **No expiry**, or **No limit or expiry**. Keys with a limit of \$1,000 or more, or an expiration more than 365 days out, are also flagged. Hover over the label to see every risk factor for the key. By default, keys with compounding risk factors sort higher.

The **Status** column rates how safe a key is to remove based on its usage: **Safe to remove**, **Review before removing**, or **In use**. Hover over the label for details.

### Act on keys

Each key row lets you disable or archive the key, and keys without a spend limit also offer **Set limit**. To act on several keys at once, select them and choose **Set limit**, **Disable**, or **Archive** from the selection bar.

You can't change the expiration of an existing key. To replace a key, create a new key with an expiration, move your apps to it, and then disable or archive the old key. To enforce expiration on every key, including existing ones, set a maximum key lifetime in [privacy settings](https://openrouter.ai/settings/privacy). OpenRouter then rejects requests from any key that never expires or that expires later than the maximum lifetime allows.

Disabling a key is reversible. Archiving a key is permanent and asks you to type `archive` to confirm. Before you do either, make sure nothing still depends on the key.

## IP allowlist

> [!NOTE]
>
> The IP allowlist requires an Enterprise plan. Other accounts see an upgrade prompt on this tab.

The IP allowlist restricts which IP addresses can send inference API requests with your account's keys. It does not currently restrict requests made with Management API keys. When the list is empty, requests from any IP address are accepted. After you add at least one entry, OpenRouter checks the client IP of each covered API request against the list and rejects requests from other addresses with a `403 Forbidden` error. The allowlist applies to covered API keys in the personal account or organization, including existing keys. Before you add the first entry, include the address of every server, office network, and CI runner that calls the API, or those requests start failing. To turn the restriction off, remove every entry.

To add an entry, open the IP allowlist tab and select **Add address**, or **Add IP address** if the list is empty. Enter a single IPv4 or IPv6 address, such as `203.0.113.42`, or a CIDR range, such as `10.0.0.0/8`, and optionally a label that describes it. Then select **Add address** to save. Changes apply immediately. To edit or remove an entry, hover over its row and select the pencil or trash icon. Only personal accounts and organization administrators can edit the list; organization members see a notice that administrator access is required.

![IP allowlist tab with three entries](https://mintcdn.com/openrouter-d02e98a0/l1kykg1zIxu71EFf/assets/guides/overview/auth/security-settings/ip-allowlist.png?fit=max\&auto=format\&n=l1kykg1zIxu71EFf\&q=85\&s=2b84b03fb51124d2159118245d2d6bd9)

## Related guides

* To manage keys programmatically, see [Management API Keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md).
* To run these checks with the API, see the [API key audit cookbook](https://openrouter.ai/docs/cookbook/administration/api-key-audit.md).
* For key rotation best practices, see the [API key rotation cookbook](https://openrouter.ai/docs/cookbook/administration/api-key-rotation.md).
