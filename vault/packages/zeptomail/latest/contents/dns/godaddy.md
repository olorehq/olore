<!-- source: https://www.zoho.com/zeptomail/help/dns/godaddy.html -->

# GoDaddy DNS configuration

If your domain is hosted with GoDaddy, you can follow the below steps to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [One click verification](https://www.zoho.com/zeptomail/help/dns/godaddy.html#oneclickverification)
- [DKIM](https://www.zoho.com/zeptomail/help/dns/godaddy.html#dkim-godaddy)
- [CNAME](https://www.zoho.com/zeptomail/help/dns/godaddy.html#cname-godaddy)

## One click addition

ZeptoMail supports one-click record addition for accounts hosted with Go-daddy. This way, you can automatically update the records to your DNS server without having to manually add them. Follow the steps below to use the one-click verification :

1. Login to your ZeptoMail account.
2. Navigate to the Domains sections. Click **Add domain.**



![Add domain button in ZeptoMail](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/add-domain1.png)

3. Enter the domain details - domain name, sub-domain name and the Agent to which you wish to associate the domain. Click **Add.**



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/adddom.png)

4. The Automatic Verification pop-up to add the records will be displayed.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/autoverification.png)

5. Click **Yes** to verify your DNS records automatically.
6. Login with your Go-daddy credentials and click **Connect.** Your domain verification will be complete.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/go-daddy1.png)

7. Alternatively, you can auto add the records at any point using the **Auto add records** option.



![Auto add records button](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/gd-autoadd.png)


## Add DKIM - TXT record

1. Login to your [GoDaddy](http://www.godaddy.com/ "GoDaddy account") DNS Manager. Select the **My Account** menu and choose **Domains**.
2. Expand Domains and click the **Manage DNS** button for the domain you want to verify.
3. The DNS Manager page will open with information about existing DNS records.
4. Scroll down to the **Records** section and click the **Add** button to add a DNS record. To update a record, click on the edit icon against the respective record.
5. Select **TXT** from the **Record Type** drop-down menu.
6. In the **Host** field, enter **<selector>.\_domainkey****\***.
7. In the **TXT Value** field, enter the DKIM value**\*** generated in your ZeptoMail account.
8. Click **Finish**.

\*Get the exact DKIM values from the [Domains](https://zeptomail.zoho.com/#domains) section.

## ​Add CNAME records

CNAME records are added to configure your bounce address

01. Login to your [GoDaddy](http://www.godaddy.com/ "GoDaddy account") DNS Manager. Select the **My Account** menu and choose **Domains**.
02. Expand Domains and click the **Manage DNS** button for the domain you want to verify.
03. The DNS Manager page will open with information about existing DNS records.
04. Scroll down to the **Records** section and click the **Add** button to add a DNS record.
05. Select **CNAME** from the **Type** drop-down menu.
06. In the **Host** field,enter the **subdomain name** of your domain. (For example, if subdomain is **bounce.zylker.com**, enter **bounce** in the host field).
07. In the **Points to** field, enter the value generated in ZeptoMail for this domain:


    |     |     |
    | --- | --- |
    | **Host** | **Points to** |
    | Subdomain name<br>​(Eg., **bounce,** if subdomain is **bounce.zylker.com**) | - To configure bounce address, get the CNAME value from the [Domains](http://zeptomail.zoho.com/#domains) section.<br>    - To configure Email Tracking, get the CNAME value from the [Email tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html) under the respective Agent. |

08. Click **Save**.
09. After an hour or two, log in to your ZeptoMail account and click **Verify**(usually it takes 24-48 hours for the records to be published in the DNS).
10. If the DNS information is correctly propagated, the domain will be verified.
