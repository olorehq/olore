<!-- source: https://www.zoho.com/zeptomail/help/erpnext-integration.html -->

# Frappe ERPNext

[ERPNext](https://frappe.io/erpnext "Frappe homepage") (Enterprise resource planning) is an open source resource planning software that allows businesses streamline their processes like HR, manufacturing, supply chain, finance and procurement all from a single place. With unified activity view, businesses can tailor ERPNext to fit their unique business needs. ZeptoMail users building their business with ERPNext can send their transactional emails from the service.

## Integrating ZeptoMail's SMTP with ERPNext

To use ZeptoMail with ERPNext, you should create a new email account in the **ERPNextSettings section**. You will be adding ZeptoMail's SMTP credentials here, that will be used to send transactional emails.

Before you begin, make sure you have access to your ZeptoMail's SMTP credentials. You can obtain your SMTP credentials from:

**ZeptoMail >> Agent >> SMTP/API >> SMTP tab**

To add a new email account:

1. In your ERPNext account, go to **ERPNext Settings > Email account**.

![email account](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/erp-filename.png)
2. Click on **Add email account.**

![Add email account ](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/erp-add.png)
3. Fill out the following:
1. Email address: FROM address created in ZeptoMail.
2. Email account name: FROM name.
4. Enter the following details in the **Authentication section:**
1. Select the **Method** as the Basic.
2. Choose the **Use different Email Id** checkbox. Paste the username copied from your ZeptoMail account's SMTP section.
3. Next, paste the SMTP password copied from ZeptoMail, in the **Password** section.
4. This will connect your ERPNext account with ZeptoMail.

      ![authentication section ](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/erp-authentication.png)
5. Next, you should configure additional SMTP settings. You can do this in the **Outgoing Settings section:**
1. Choose the **Enable outgoing** checkbox.
2. Choose one of the two certifications — SSL or TLS.
3. Enter the outgoing server details. This will be the **server name** in the SMTP section of your ZeptoMail account.
4. Next, you should enter the corresponding port values: SSL - 465, TLS - 587.

      ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/erp-default.png)
6. To use ZeptoMail's SMTP for all outgoing emails, check the **Default outgoing** checkbox. If you are using ZeptoMail for all the outgoing emails, then make sure you don't send any marketing emails as it can affect your transactional emails' deliverability.
7. Confirm your changes and select **Save.**

You have successfully configured ZeptoMail with ERPNext.

Note:

Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
