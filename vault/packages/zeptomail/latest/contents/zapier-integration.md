<!-- source: https://www.zoho.com/zeptomail/help/zapier-integration.html -->

# Zapier Integration

#### Table of Contents

- [Zapier Overview](https://www.zoho.com/zeptomail/help/zapier-integration.html#alink1)
- [Supported Trigger and Action](https://www.zoho.com/zeptomail/help/zapier-integration.html#alink2)
- [Getting started with ZeptoMail in Zapier](https://www.zoho.com/zeptomail/help/zapier-integration.html#alink3)
  - [Configuring ZeptoMail as Trigger](https://www.zoho.com/zeptomail/help/zapier-integration.html#alink4)
  - [Configuring ZeptoMail as Action](https://www.zoho.com/zeptomail/help/zapier-integration.html#alink5)

## Zapier Overview

[Zapier](http://zapier.com/help/what-is-zapier/) is a third party service that helps to automate flow of information between different applications. You can link your account with the pre-built zaps, or setup your own zap to create a new workflow and automate the link between two apps.

A basic [zap](https://help.zapier.com/hc/en-us/articles/8496309697421-What-is-a-Zap) in Zapier will have a trigger from a specific web app and an action in another web app. You can use Zapier to connect ZeptoMail to different web applications.

## Supported Trigger and Action

- **Trigger - New Email Activity**

Triggers when there is a recipient activity like open, click, bounce on an email you send. You can choose the activity you wish to include in the trigger.
- **Action - Send Mail**

This action will send an email when triggered.

## Getting started with ZeptoMail in Zapier

Log in to your [Zapier](https://zapier.com/app/login) account. If you don't have one yet, you can sign up to Zapier for free. Once you sign up, link your [ZeptoMail](https://zeptomail.zoho.com/) account with Zapier. You can navigate to ZeptoMail's zap book page and use the pre-built zaps or build your own zaps to get started. Some of the pre-built zaps are:

### Google Sheets

### MySQL

### Stripe

### PayPal

### Configuring ZeptoMail as Trigger:

01. Login to your [Zapier](https://zapier.com/app/login) account
02. Click **Create Zap** from the left pane.
03. Select the trigger app. To use ZeptoMail as trigger, in the apps box, type ZeptoMail and select the app.

    ​![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zapier1.png)
04. Select the trigger you'd like to use for the Zap, from the listing and click **Continue**. In ZeptoMail's case, choose **New Email Activity**.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zapier2.png)
05. You need to connect your ZeptoMail account with Zapier, in case you have not done it earlier.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zapier3.png)
06. Choose the region where your ZeptoMail account is hosted. You can find this from the URL on the browser once you're logged into ZeptoMail.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zapier4.png)
07. Authorize Zapier in Zoho to connect your ZeptoMail account with the required permissions. Click **Accept** and then **Continue**.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zapier5.png)
08. **Setup the trigger**by choosing the following fields:​
    - Agent - Choose the Agent where you wish to configure the zap
    - Email Activities - You can choose one or more recipient activities available in the dropdown (open, click, bounces)
09. Test the trigger if you wish to.
10. You can then proceed to set up an action with a different application.

### Configuring ZeptoMail as Action:

1. Click **Create Zap** from the left menu.
2. Configure the app of your choice as the trigger.
3. To use ZeptoMail as Action, in the apps box, type ZeptoMail and select the app.
4. Choose **Event Action** as **Send Mail** and click **Continue.**

**![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zapier6.png)**
5. Choose from the already connected ZeptoMail accounts or connect a new account using steps 5-7 from previous section.
6. Set up action by entering the following details:
   - Agent - Choose the Agent you wish to use for the zap
   - Bounce Address - Enter bounce address associated with the chosen Agent
   - From address
   - From Name
   - To, Subject, Body, Reply To, CC, BCC
   - Attachment information
7. Once done, click on **Turn on Zap.**
8. Alternatively, you can also use preset templates to send out emails. Follow the steps below to send a template email :
1. In the **Event** drop-down, select **Send template email** and click continue.

      ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/template_zapier.png)
2. Select the ZeptoMail account that you wish to create a zap with.
3. Set up the action by entering the following details :
      1. Agent - Choose the Agent you wish to use for the zap
      2. Template key - Template key generated from the corresponding Agent
      3. From address
      4. From name
      5. To, CC, BCC, Reply To
      6. Template merge info values - Copy paste the merge info values corresponding to the chosen template
4. Click Test step to test the email template.
5. Click Publish to start using the zap.
