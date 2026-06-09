<!-- source: https://www.zoho.com/zeptomail/help/dns/wix.html -->

# Wix DNS configuration

If your domain is hosted with Wix, you can follow the below steps to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [DKIM](https://www.zoho.com/zeptomail/help/dns/wix.html#dkim-wix)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/wix.html#cname-wix)

## Add DKIM record

1. Login to your Wix account and go to the [Domains](https://premium.wix.com/wix/api/mpContainerStaticController#/domains) page.
2. Click on the **Show Mor** e icon and choose **Manage DNS records**.
3. Click **Add Record** in the **TXT section**.
4. In the **Host** field, enter **<selector>.\_domainkey****\***.
5. In the **TXT Value** field, enter the TXT Record value**\*** generated in your ZeptoMail account.
6. Click **Save**.

\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.

## Add CNAME Record

CNAME records are added for both the email-sending domain as well as the email tracking domain added in ZeptoMail. If your DNS Manager is hosted with Wix, follow the steps below to add CNAME in Wix DNS for verification.

1. Login to your Wix account and go to the [Domains](https://premium.wix.com/wix/api/mpContainerStaticController#/domains) page.
2. In **My Domains**, navigate to the domain you want to verify and click the drop-down arrow.



![Wix DNS Configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/wix-1.jpg)

3. Click **Advanced** and then click **Edit DNS**.



![Steps to add CNAME in Wix DNS for verification](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/wix-2.jpg)

4. In DNS Records, navigate to **CNAME (Alias)** and click **Add another**.
5. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce**).
6. Specify **Points to** as the value generated in ZeptoMail for this domain:


|     |     |
| --- | --- |
| **Host Name** | **Points to** |
| Subdomain name<br>​(Eg., **bounce** is subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains](http://zeptomail.zoho.com/#domains) section.<br>   - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

7. Once done, click **Save DNS** at the top.
8. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
9. If the DNS information is correctly propagated, the subdomain will be verified.
