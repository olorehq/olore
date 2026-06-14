<!-- source: https://www.zoho.com/zeptomail/help/bounce-forwarding.html -->

# Bounce forwarding

Email bounces are messages that haven't been sent to the recipient and returned to the sender. Whenever you signup for [ZeptoMail](https://www.zoho.com/zeptomail/ "Homepage"), you will create a bounce subdomain. This subdomain will be used to create a bounce address to receive the bounced emails. ZeptoMail will use the data received to that subdomain to display the bounce stats in your account. With bounce forwarding, you can now have a copy of the bounced emails forwarded to the intended recipient address.

**The bounce forwarding feature is currently available on request. Contact** [**support@zeptomail.com**](mailto:support@zeptomail.com) **for further details.**

Once you enable this feature, there are two-levels at which you can use it:

- [Account-level](https://www.zoho.com/zeptomail/help/bounce-forwarding.html#account-level "Account level bounce forwarding")
- [Agent level](https://www.zoho.com/zeptomail/help/bounce-forwarding.html#agent-level "Mail agent level forwarding")

## Account level bounce forwarding

Account-level bounce forwarding can be enabled in the Account Settings section of your account. This will apply to all the emails being sent from your account.

To enable account-level bounce forwarding:

1. Login to your ZeptoMail account.
2. Navigate to the Settings section on the left pane. Choose **Bounce forwarding** from the list.
3. Enable bounce forwarding using the toggle button.
4. Enter the email address where the email should be forwarded. This email should be verified to start receiving the notification.
5. A verification email will be sent to the address to verify it.
6. Once verified, the email address will be ready to receive the bounce notifications.

- Email addresses belonging to public domains like Gmail, ZohoMail, etc. cannot be added as bounce forwarding addresses.
- Once configured, there will be a surge in the number of incoming emails. Ensure the address you can handle the large influx of emails.
- It is mandatory to verify the email address that will be receiving the forwarded notification.

## Agent level bounce forwarding

Bounce forwarding can be set for individual Agents too. Hard bounces for emails sent from a particular Agent will be forwarded to forwarding address for that Agent.

To enable Agent level bounce forwarding:

1. Login to your ZeptoMail account and go to the desired Agent.
2. Go to Agent settings and navigate to the Bounce forwarding section.
3. Enter the bounce forwarding email address and verify it.

- In the absence of an Agent level bounce forwarding, the account level forwarding address will be used by default for all emails.
- When an account-level and Agent level address is present, the Agent level forwarding address will take precedence.

Note:

- Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
