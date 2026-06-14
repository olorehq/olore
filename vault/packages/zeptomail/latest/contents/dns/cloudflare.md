<!-- source: https://www.zoho.com/zeptomail/help/dns/cloudflare.html -->

# Cloudflare DNS configuration

If your domain is hosted with Cloudflare, you can follow the steps given below to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [DKIM](https://www.zoho.com/zeptomail/help/dns/cloudflare.html#dkim-cloudflare)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/cloudflare.html#cname-cloudflare)

## Add DKIM - TXT record

1. Login to your [Cloudflare](https://dash.cloudflare.com/) account.
2. From the Home tab, click on the domain that you need to add DNS for.
3. Once inside the domain, select [**DNS**](https://dash.cloudflare.com/?to=/:account/:zone/dns) from the top menu options.
4. Click on the **Add Record** button.
5. Select **TXT** from the Type drop-down menu.
6. In the **Name** field, enter **<selector>.\_domainkey\***.
7. In the **Content** field, enter the **DKIM value\*** generated in your ZeptoMail account.
8. Click **Save**

\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.

## ​Add CNAME records

CNAME records are added to configure your bounce address

01. Login to your [Cloudflare](https://dash.cloudflare.com/) account.
02. From the Home tab, click on the domain that you need to add DNS for.
03. Once inside the domain, select [**DNS**](https://dash.cloudflare.com/?to=/:account/:zone/dns) from the top menu options.
04. Click on the **Add Record** button.
05. Select **CNAME** from the Type drop-down menu.
06. In the **Name** field, enter the subdomain name of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce** in the host field).
07. In the **Target** field, enter the value generated in ZeptoMail for this domain:


    |     |     |
    | --- | --- |
    | **Host** | **Points to** |
    | Subdomain name<br>​(Eg., **bounce,** if subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains](https://zeptomail.zoho.com/#domains) section.<br>    - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

08. Select the **DNS only** option under **Proxy Status**.
09. Click **Save**.
10. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
11. If the DNS information is correctly propagated, the subdomain will be verified.
