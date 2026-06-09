<!-- source: https://www.zoho.com/zeptomail/help/dns/yahoo.html -->

# Yahoo DNS configuration

If your domain is hosted with Yahoo, you can follow the below steps to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

### Note

Yahoo small domains is now Trubify. This page lists the steps to add the DNS values in the Trubify account.

#### Table of Contents

- [DKIM](https://www.zoho.com/zeptomail/help/dns/yahoo.html#dkim-yahoo)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/yahoo.html#cname-yahoo)

## Add DKIM record

1. Login to your [Domain Control Panel](https://help.turbify.com/article/how-do-i-access-the-domain-control-panel).
2. Scroll down to **TXT records** section and click **Add**.
3. In the **Hostname** field, enter the DKIM host value copied from your ZeptoMail account.
4. In the **Text** field, enter the TXT Record value\* generated in your ZeptoMail account.
5. Click **Add.**

## Add CNAME Records

CNAME records are added for both the email-sending domain as well as the email tracking domain added in ZeptoMail.

1. Login to your [Domain Control Panel](https://help.turbify.com/article/how-do-i-access-the-domain-control-panel).
2. Select **Domain** from the toolbar at the top of the page.
3. Navigate to **A and CNAME Records** and click **Add**.
4. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce)**.
5. Specify the value generated in ZeptoMail for this domain., in the **Destination** field:


|     |     |
| --- | --- |
| **Source** | **Destination** |
| Subdomain name<br>​(Eg., **bounce** is subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains section](https://zeptomail.zoho.com/#domains).<br>   - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

6. Click **Add** to save the changes.
7. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
8. If the DNS information is correctly propagated, the subdomain will be verified.
