<!-- source: https://www.zoho.com/zeptomail/help/domain-association.html -->

# Associating Domains with Agents

Every domain you add to your ZeptoMail account must be associated with an Agent to send out emails. Such associated domains will be listed in the Domains tab within the Agent. Email-sending from a particular Agent will be carried out using those domains only.

A total of **100 domains** can be added to an Agent.

#### Table of Contents

- [How to associate a domain](https://www.zoho.com/zeptomail/help/domain-association.html#associate)
- [How to dissociate a domain](https://www.zoho.com/zeptomail/help/domain-association.html#remove)
- [Overview section](https://www.zoho.com/zeptomail/help/domain-association.html#overview)

## Associate a domain

Follow the steps to associate a domain with an Agent:

1. From the _left pane_, select an Agent to which a new domain has to be added. Before this step, ensure that this domain is already created under the **Domains** tab.
2. Click **Associate Domain**.​



![Add a new domain](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/domainassociatd-add.png)

3. In the pop-up select the domain(s) you want to associate. You can add more domains using the Choose Domain option.



![Add domains to be associated](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/domainassociatd-value.png)

4. Click on **Save**.​ The domain will be associated with the Agent.
5. The associated domain will be listed under the Agent Domains tab along with its **Verification Status**.
6. Verify the associated domain to start using it. You can view the DNS records by selecting the domain from the list.
7. Select your DNS provider and complete the domain verification process. Refer [here](https://www.zoho.com/zeptomail/help/dns.html) for instruction specific to popular DNS providers like GoDaddy. If your DNS provider is not listed, you can select **Other** from the drop-down.
8. Click **Verify** once your domain's DNS records are added. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until then and you will not be able to send any emails.

Mandatory Domain Verifications to be done:

- [DKIM](https://www.zoho.com/zeptomail/help/domains.html) validation is configured for domain verification.
- CNAME record is configured for bounce address setup. Once the bounce address is created, use this bounce address in your SMTP/ API.

## Remove Domain from an Agent

1. From the _left pane_, select the Agent.
2. Hover over the domain in the listing you want to remove. Click on **Remove** domain button.​​



![Remove associated domain](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-remove.png)

3. Click **OK** to confirm the Domain dissociation.



![Confirm deletion](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/domainassociatd-confirm.png)

4. No more emails will be sent out from the Agent using the deleted domain.

## Overview

Apart from listing domains, you can view the delivery statuses of emails sent from a particular domain within the Agent. The count of the below-mentioned parameters will be shown:

- **Sent**\- Total number of emails processed. If your email has 1 recipient in the 'to' field, 1 recipient in the 'cc' field, and 1 recipient in the 'bcc' field; then the total count of emails sent is 3.
- **Delivered**\- Number of emails delivered to the recipient's inbox.
- **Hard Bounces** \- Number of emails that did not deliver due to permanent reasons like invalid recipient address.
- **Soft Bounces** \- Number of emails that did not deliver due to temporary reasons like the recipient server being down or the recipient's inbox being full.
- **Clicks**\- Count of the number of times a link was clicked.
- **Opens**\- Number of times a recipient opened an email.
- **Process failed** \- ​Emails that have not been sent out due to various reasons.



![Domain activity overview](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/domainoverview.png)

Note

Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
