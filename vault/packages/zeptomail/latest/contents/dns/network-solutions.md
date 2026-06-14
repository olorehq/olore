<!-- source: https://www.zoho.com/zeptomail/help/dns/network-solutions.html -->

# Network Solutions DNS configuration

If your domain is hosted with Network Solutions, you can follow the below steps to configure DKIM and CNAME records for [ZeptoMail](https://www.zoho.com/zeptomail/). It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [DKIM](https://www.zoho.com/zeptomail/help/dns/network-solutions.html#dkim-network)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/network-solutions.html#cname-network)

## Add DKIM record

1. Login to your [Network Solutions](https://www.networksolutions.com/my-account/login) account and select My Domain Names.
2. Select the relevant domain and click **Manage**.
3. Go to **Advanced DNS** page and select **Change TXT Record**.
4. In the TXT record, click the **Edit TXT record** button.
5. In the **Host** field, enter **<selector>.\_domainkey\***.
6. In the **TXT Value** field, enter the TXT Record value\* generated in your ZeptoMail account.
7. Click **Continue** and then **Save changes**.

\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.

## Add CNAME Records

If the DNS Manager for your domain is hosted with Network Solutions follow the below steps to add a CNAME and verify the subdomain.

01. Log in to your Network Solutions account >> Select **Manage Account**.
02. Under **My Domain Names**, click the domain you want to verify.
03. Click **Manage** and then click **Change Where Domain Points**.
04. And then click **Advanced DNS**.
05. Navigate to **CNAME** and then click the **Edit CNAME Records** button.
06. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce**)
07. Select ' **Other Host'** radio button option.
08. Provide the value generated in ZeptoMail for this domain in the ' **Other Host**' field:


    |     |     |
    | --- | --- |
    | **Alias** | **Other Host** |
    | Subdomain name<br>​(Eg., **bounce** is subdomain is **bounce.zylker.com**) | - ​To configure bounce address, get the CNAME value from the [Domains](https://zeptomail.zoho.com/#domains) section.<br>    - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

09. Select **Continue** and Click **Save Changes**.
10. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
11. If the DNS information is correctly propagated, the subdomain will be verified.
