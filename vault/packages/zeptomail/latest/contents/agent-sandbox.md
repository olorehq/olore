<!-- source: https://www.zoho.com/zeptomail/help/agent-sandbox.html -->

# Sandbox Agent

The sandbox Agent in ZeptoMail allows you to test outgoing emails without having them delivered to the recipient. This provides a safe and controlled environment to test your SMTP and API credentials. Additionally, sandbox Agents also allow you to generate fake bounces and create [webhooks](https://www.zoho.com/zeptomail/help/webhooks.html) to generate triggers for specific instances.

- A total of **10,000 emails** per day will be allocated to each sandbox Agent.
- Each Agent can be set to make **20,000 webhook** calls in a day.
- A total of **2** Agent sandboxes can be created.

#### Table of Contents

- [Create sandbox Agent](https://www.zoho.com/zeptomail/help/agent-sandbox.html#create)
  - [Connecting your application](https://www.zoho.com/zeptomail/help/agent-sandbox.html#connect)
- [Generate dummy bounces](https://www.zoho.com/zeptomail/help/agent-sandbox.html#dummy-bounce)

## Creating sandbox Agent

While creating a new Agent, you can enable the sandbox mode. To do so:

1. Click the create Agent button from left pane.
2. Enter the Agent name and choose the domain you wish to use for testing.
3. Check the **Create in sandbox mode** checkbox to create a sandbox Agent.



![Create sandbox agent](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sndbx-add.png)

4. You can now start using the Agent to send test emails.
5. The sandbox Agent will be listed along with other Agents with a beaker image next to it.



![Sandbox listing](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sandbox_sign.png)


### Connecting your application

Connecting your application to simulate outgoing emails from a sandbox Agent is similar to that of a live Agent. If you haven't verified already, ensure you verify the domain added to the sandbox Agent.

1. Navigate to the **API/SMTP** section in the sandbox Agent.



![Sandbox smtp api configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sndbx-smtpapi.png)

2. Copy the API or SMTP code that you wish to use for email-sending. Paste it within your application code.
3. Whenever an email call is triggered using the API or SMTP credentials, ZeptoMail's servers will process the request and give a "Delivered" status for that call.
4. Alternatively, you can also immediately check the configuration by sendig a test email. Use the **Send test email** button on the top right corner to do so.



![Sending test email from sandbox agent](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sndbx-test-email.png)

The outgoing email logs will be available for **three days.**

Once a sandbox Agent is created, you cannot change it to a live Agent.

Apart from testing outgoing emails, you can also generate dummy bounces to view how they appear in the Processed emails section.

## Generate dummy bounces

The bounce stats allow you see how bounces appear in your account without compromising your sender reputation. We support all the bounce instances available in ZeptoMail's [Bounce report section](https://www.zoho.com/zeptomail/help/bounce-error.html#analysis-report "Bounce report page").

You can check for the following bounce types in your account:

- Hard bounce
- Soft bounce
- Connection issues
- Policy failure
- Spam
- User not found
- Invalid DNS

1. You can generate dummy bounces using the **Generate bounce logs** button on the top right corner.



![Generate bounce logs](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sndbx-domain.png)

2. You will find a list of email addresses for each type of bounce here.



![Sandbox fake email address](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sandbox_fake_bounce.png)

3. You can send an email to the desired email address and generate the bounce report.

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
