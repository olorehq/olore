<!-- source: https://www.zoho.com/zeptomail/help/dns/one-and-one.html -->

# 1 & 1 IONOS DNS Configuration

If your domain is hosted with 1&1 IONOS, you can follow the below steps to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [One click verification](https://www.zoho.com/zeptomail/help/dns/one-and-one.html#oneclickverification)
- [DKIM](https://www.zoho.com/zeptomail/help/dns/one-and-one.html#dkim-ionos)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/one-and-one.html#cname-ionos)

## One click verification

ZeptoMail supports one click verification for certain accounts hosted with 1 and 1. This way, you can automatically update the records to your DNS server without having to manually add and verify them. Follow the steps below to use the one-click verification :

1. Login to your ZeptoMail account.
2. Navigate to the Domains sections. Click **Add domain.**



![Add domain button in ZeptoMail](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/add-domain1.png)

3. Enter the domain details - domain name, sub-domain name and the Agent to which you wish to associate the domain. Click **Add.**



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/adddom.png)

4. The Automatic Verification pop-up will be displayed
5. Click **Yes** to verify your DNS records automatically.
6. Login with your 1&1 IONOS credentials and click **Connect.** Your domain verification will be complete.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/11.png)

## Add DKIM record

1. Login to your IONOS or 1&1 IONOS account.
2. Navigate to the **Domain & SSL** section.
3. Identify the domain you wish to add DKIM for and click on the **Settings** icon under **Actions.**
4. Select **DNS** and click on **Add Record**.
5. Choose **TXT** record type.
6. In the **Host** field, enter **<selector>.\_domainkey****\***.
7. In the **Value** field, enter the DKIM value**\*** available in your ZeptoMail account.
8. Click **Save.**

**​**\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.​

## Add CNAME record

CNAME records are added for both the email-sending domain as well as the email tracking domain added in ZeptoMail. If your domain is hosted with 1 and 1, follow the below steps to add a CNAME record.

01. Login to your 1&1 IONOS account.
02. Go to your **Domain & SSL** section.
03. Navigate to the domain you want to verify with ZeptoMail, and click on the **Settings** icon under **Actions** and select **Manage Subdomain**.
04. Navigate to the desired subdomain and click on the Settings icon.
05. Select **DNS** and click **ADD RECORD**.
06. Select **CNAME** as Record Type.
07. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce** in the host field).
08. Specify the value generated in ZeptoMail for this domain.​, in the **Point To** field.


    |     |     |
    | --- | --- |
    | **Host** | **Points to** |
    | Subdomain name<br>​(Eg., **bounce** if subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains](https://zeptomail.zoho.com/#domains) section.<br>    - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |


    ​

09. After setting the desired TTL, click **Save**.
10. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
11. If the DNS information is correctly propagated, the subdomain will be verified.
