<!-- source: https://www.zoho.com/zeptomail/help/dns/enom.html -->

# ENOM DNS configuration

If your domain is hosted with ENOM, you can follow the below steps to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [DKIM](https://www.zoho.com/zeptomail/help/dns/enom.html#dkim-enom)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/enom.html#cname-enom)

## Add DKIM record

1. Log in to your account at [www.enom.com](https://enom.com/).
2. Select My Domains from the Domains dropdown.



![ENOM DNS configuration](https://www.zoho.com/mail/images/enom1.png)

3. The **Domain Overview** page of your domain will be displayed.
4. Select ' **Host Records**' from the Manage Domains dropdown in the right.
5. On the **Host Records** page, click **Add New**.
6. In the **Host Name** field, enter **<selector>.\_domainkey****\***.
7. Choose **TXT** in the Record type dropdown.
8. Enter the TXT Record value**\*** generated in your ZeptoMail account in the **Address field**.
9. Click **Save**.

​\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.

## Add CNAME Record

CNAME records are added for both the email-sending domain as well as the email tracking domain added in ZeptoMail. If your domain's DNS is hosted with ENOM follow the below steps to add CNAME record. The CNAME records will be effective only if the Name Servers & DNS Servers are hosted with ENOM.

01. Log in to your account at [www.enom.com](https://enom.com/).
02. Select My Domains from the Domains dropdown.



    ![Add CNAME records in ENOM](https://www.zoho.com/mail/images/enom1.png)

03. The **Domain Overview** page of your domain will be displayed.
04. Select ' **Host Records**' from the Manage Domains dropdown in the right.
05. Click **New Row**, to add a CNAME Record.
06. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce** in the host field).
07. Select the **Record Type** as **CNAME** from the drop down box.
08. Specify the value generated in ZeptoMail for this domain. in the **Address** field.


    |     |     |
    | --- | --- |
    | **Host** | **Address** |
    | Subdomain name<br>​(Eg., **bounce** if subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains](https://zeptomail.zoho.com/#domains) section.<br>    - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

09. Click **Save** to update the CNAME changes.
10. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
11. If the DNS information is correctly propagated, the subdomain will be verified.
