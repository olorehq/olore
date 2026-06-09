<!-- source: https://www.zoho.com/zeptomail/help/dns/square-space.html -->

# Squarespace DNS configuration

If your domain is hosted with Squarespace, you can follow the below steps to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [DKIM](https://www.zoho.com/zeptomail/help/dns/square-space.html#dkim-squarespace)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/square-space.html#cname-squarespace)

## Add DKIM record

1. Login to your DNS Manager account at [Squarespace](https://account.squarespace.com/).
2. Choose **Domains** from the top links.
3. Select the respective domain from the listing, and choose **Advanced Settings**.
4. Click on **Custom Record** s and choose **TXT records**.
5. In the **Host** field, enter **<selector>.\_domainkey****\***.
6. In the **Data** field, enter the DKIM value\\* generated for your domain in your ZeptoMail account.
7. Click **Add.**

\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.

## Add CNAME record

CNAME records are added for both the email-sending domain as well as the email tracking domain added in ZeptoMail. If your domain is hosted with Squarespace, follow the below steps to add a CNAME and verify your domain.

01. Login to your DNS Manager account at [Squarespace](http://account.squarespace.com/).
02. Choose **Domains** from the top links.
03. Select the respective domain from the listing, and choose **Advanced Settings**.
04. Scroll down to **Custom Records** and choose **CNAME** from the drop-down menu.
05. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce** in the host field).
06. In the **Data** field, enter the value generated in ZeptoMail for this domain.


    |     |     |
    | --- | --- |
    | **Host** | **Data** |
    | Subdomain name<br>​(Eg., **bounce,** if subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains](http://zeptomail.zoho.com/#domains) section.<br>    - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

07. Click the **Add** button to add this CNAME record.
08. Click **Save** on the top of the page.
09. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
10. If the DNS information is correctly propagated, the subdomain will be verified.
