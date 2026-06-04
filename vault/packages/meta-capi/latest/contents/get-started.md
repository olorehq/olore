# Get Started

Updated: May 5, 2026

**Ads Management Standard Access is now Marketing API Access Tier**

**No code changes are needed.**

Tier labels have been updated: "Standard Access" is now **Limited Access**, and "Advanced Access" is now **Full Access**. The revised qualification threshold for Full Access has been reduced from 1,500 to **500 Marketing API calls** in the past 15 days. The underlying permission identifier remains the same, and existing access levels are preserved automatically. Learn more in the [Marketing API Access Tier documentation](https://developers.facebook.com/docs/features-reference#marketing-api-access-tier).

This page describes the process of implementing the Conversions API and details implementation prerequisites. If you are a third-party partner offering Conversions API functionalities for advertisers, there are [different requirements](https://developers.facebook.com/documentation/ads-commerce/conversions-api/set-up-conversions-api-as-a-platform) to get started.

If your business has a firewall for outbound requests, see [Crawler IPs and User Agents](https://developers.facebook.com/docs/sharing/webmasters/crawler#identify) to get Facebook's IP addresses. Be aware that the list of addresses changes often.

Web, app, and physical store events shared using the Conversions API require specific parameters. The list of [required parameters is available here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters).

## Process Overview

The process of setting up a Conversions API integration consists of the following high-level steps:

1. Choosing the integration method that is right for you.
2. Completing the necessary prerequisites for that implementation method.
3. Implementing using that integration method.
4. Verifying your setup and adhering to best practices that help improve ad performance.

## Integration Methods

There are several methods for integrating with the Conversions API, and they vary by level of effort, cost, and the features they enable. See [this article](https://www.facebook.com/business/help/433493041367251?id=818859032317965) for an overview of Conversions API setup options.

The primary focus of this developer documentation is building direct integrations.

## Requirements

### Pixel ID

You must obtain a [Pixel ID](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) to use the Conversions API. If you've already set up a Pixel for your website, we recommend that you use the same Pixel ID for your browser and server events.

### Business Manager

You also need a [Business Manager](https://business.facebook.com/) to use the API. Business Manager helps advertisers integrate Facebook marketing efforts across their business and with external partners. If you don't have a Business Manager yet, see the Help Center article on [how to Create a Business Manager](https://www.facebook.com/business/help/1710077379203657).

### Access Token

To use the Conversions API, you need an access token. There are two ways of getting your access token:

- Using Events Manager (Recommended)
- Using your own app

#### Using Events Manager (Recommended)

To use the Conversions API, you need to generate an access token, which is passed as a parameter in each API call. Inside Events Manager, follow these steps:

**Step 1** - Choose the Pixel you want to implement.

**Step 2** - Select the Settings tab.

**Step 3** - Find the Conversions API section and click on the **Generate access token** link under Set up manually, and follow the instructions pop-up.

**Note**: The Generate access token link is only visible to users with developer privileges for the business. The link is hidden from other users.

Once you have your token, click on the **Manage Integrations** button in the Overview tab in Events Manager. In the pop-up screen, click the **Manage** button next to Conversions API. This will automatically create a Conversions API app and Conversions API system user for you. _There is no need to go through App Review or request any permissions_.

#### Using Your Own App

If you already have your own [app](https://developers.facebook.com/docs/apps) and your own [system user](https://developers.facebook.com/docs/marketing-api/system-users/create-retrieve-update), you can generate your token inside [Business Manager](https://business.facebook.com/). To do that:

**Step 1** - Go to your Business' **Settings**.

**Step 2** - Assign a Pixel to your system user (you also have an option to create a new system user at this stage).

**Step 3** - Select the assigned system user and click **Generate Token**.

_Your app does not need to go through App Review. You do not need to request any permissions_.

Access tokens generated under the Conversions API settings tab in Events Manager are no longer restricted to using the newest Graph API version that was available at the time of token generation. [Starting with v12.0](https://developers.facebook.com/docs/graph-api/changelog/version12.0#conversions-api), newly created access tokens can be used with all available Graph API versions.

## Resources

- Business Help Center: [About Business Manager](https://www.facebook.com/business/help/113163272211510)
- Business Help Center: [About Meta Pixel](https://www.facebook.com/business/help/742478679120153)
- Meta Blueprint: [Get Started With the Conversions API](https://www.facebookblueprint.com/student/path/219713-get-started-with-the-conversions-api)
