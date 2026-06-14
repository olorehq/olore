<!-- source: https://www.zoho.com/zeptomail/help/dns/cpanel.html -->

# cPanel DNS configuration

If your domain is hosted with cPanel, you can follow the below steps to configure DKIM, and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [DKIM](https://www.zoho.com/zeptomail/help/dns/cpanel.html#alink2)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/cpanel.html#alink3)

## ​Add DKIM records

1. Login to your cPanel account.
2. Find the **DNS Zone Editor** option under the Domains section.
3. Across the relevant domain, click the Manage button.
4. Click on the **Add Record** dropdown and select **Add TXT record**.
5. In the **Name** field, enter **<selector>.\_domainkey.<yourdomainname.com>****\***.
6. In the **TXT Record** field, enter the TXT Record value**\*** generated in your ZeptoMail account.
7. Click **Add Record**.

\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.

## Add CNAME Records

CNAME records are added for both the email-sending domain as well as the email tracking domain added in ZeptoMail. If your domain's DNS is hosted with cPanel follow the below steps to add CNAME and verify the domain.

1. Login to your [cPanel](http://www.cpanel.net/) Account.
2. Locate the **DNS Zone Editor** option under Domains to add the CNAME.

![cPanel DNS configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/cpanel_zone.jpg)
3. Across the relevant domain, select the **CNAME Record** option.

![Select the CNAME Record option](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/cpanel_cname.jpg)​
4. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce** in the host field).
5. In the CNAME field, enter the below value:


|     |     |
| --- | --- |
| **Host** | **Points to** |
| Subdomain name<br>​(Eg., **bounce,** if subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains](http://zeptomail.zoho.com/#domains) section.<br>   - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

6. Click **Add a CNAME Record** to add the CNAME in your DNS.
7. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
8. If the DNS information is correctly propagated, the subdomain will be verified.
