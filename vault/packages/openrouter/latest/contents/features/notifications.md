> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Notifications

> Choose which OpenRouter alerts you receive and where they are delivered

Notifications flag when an OpenRouter account needs attention, such as a credit balance running low or a workspace nearly out of budget. Each account chooses which alerts are on, what triggers them, and who receives them.

Go to [Settings → Notifications](https://openrouter.ai/settings/notifications). The API key spend limit alert is the exception — it belongs to a single key, so it is set on that key's own page.

Notifications come in two tiers:

* **Basic, on every plan.** **Low balance alert**, **Model deprecation alert**, and **Model price drop alert**, delivered by email.
* **Advanced, on Business and Enterprise.** **Workspace budget limit**, **API key spend limit**, and **New model available**, plus Slack and custom webhook delivery for the Workspace budget limit and model alerts. [Compare plans](https://openrouter.ai/pricing) or [upgrade to Business](https://openrouter.ai/settings/manage-plan).

## The alerts

**Budget & Spend**

* **Low balance alert.** The credit balance drops below a chosen amount.
* **Workspace budget limit.** A workspace hits a share of its budget.
* **API key spend limit.** An API key hits a share of its spend limit. Set per key on the key's page, not on the Notifications page.

**Models**

* **Model deprecation alert.** A model in recent use is scheduled to be retired.
* **Model price drop alert.** A model endpoint in recent use lowers its input or output price.
* **New model available.** A new model is added to OpenRouter.

## Turn on an alert

1. Go to [Settings → Notifications](https://openrouter.ai/settings/notifications).
2. Flip the switch next to an alert, or click the alert to open its settings.
3. Set what triggers it.
4. Pick how it is sent and who gets it.
5. Save.

Any alert can be changed or switched off later. Switching one off stops its messages and keeps its settings.

### The API key spend limit alert

This one lives with the key rather than on the Notifications page.

1. Go to [Settings → API Keys](https://openrouter.ai/settings/keys) and click a key to open it.
2. Give the key a credit limit if it does not have one. Until it has one there is no limit to alert on, and the **Notifications** section says as much.
3. Under **Notifications**, turn the alert on.
4. Set the percentages that trigger it and who receives it.
5. Save.

Each key carries its own setting, so a fleet of per-service keys is configured key by key.

## What triggers an alert

* **Low balance alert.** A dollar amount, \$100 by default. The alert fires when the balance drops below it. A balance hovering near the line does not re-alert — it has to rise clearly above the amount first.
* **Workspace budget limit and API key spend limit.** A percentage of an already-configured limit. The defaults are 80% and 100% — a heads-up with room to spare, then a message when the limit is reached. Thresholds can be changed, removed, or added.
* **Model deprecation alert.** Nothing to set. When a recently used model is scheduled to be retired, the alert names the model, when it goes, and what to move to.
* **Model price drop alert.** Nothing to set. Price drops on recently used model endpoints are collected into a daily digest that shows each old and new price per million tokens.
* **New model available.** Nothing to set. The alert fires when a new model becomes available through OpenRouter.

## Who gets an alert

Alerts go to roles rather than typed-in addresses, so the right people keep receiving them as a team changes.

* **Org admins.** The whole organization.
* **Workspace admins.** Only the workspaces they run, for Workspace budget limit.
* **Key owner.** Whoever made the API key, for alerts about that key.

Specific people in the organization can also be named on top of the roles.

The Low balance alert is different: it concerns the account as a whole and goes to one chosen email address.

> [!NOTE]
>
> Only people in the OpenRouter organization can be named. To reach a shared inbox or an internal tool, use Slack or a Custom Webhook instead.

## Where an alert goes

* **Email.** Works for every alert, nothing to set up.
* **Slack.** Goes to a channel. Paste that channel's Slack webhook URL into the **Slack** card at the top of the page and save.
* **Custom Webhook.** Goes to an endpoint under your control for downstream systems to act on. Paste an `https://` URL into the **Custom Webhook** card and save.

Slack and custom webhook delivery are available on Business and Enterprise for the Workspace budget limit, Model deprecation, Model price drop, and New model available alerts. The Low balance alert and the API key spend limit alert are email-only.

Once a destination is saved:

* Hit **Test** to send a test alert and check it lands.
* In each alert to send there, turn on **Webhook** under **Delivery methods** and tick the destination under **Send to**. Slack destinations sit under **Webhook** too.

If a destination keeps failing, OpenRouter stops sending to it and shows it as disabled on the card, so alerts are never dropped quietly. Fix it on your side, then use **Re-enable** on the card.
