<!-- source: https://www.zoho.com/zeptomail/help/domains.html -->

# Domain Addition and Verification

Domain Verification is a pre-requisite for sending emails using ZeptoMail. It confirms your ownership over the domain and prevents unauthorised use. Emails sent from a verified domain are more likely to be trusted by recipient servers. To verify a domain, you should add the DKIM(TXT) and CNAME records to your domain's DNS settings.

Note

ZeptoMail uses CNAME record to validate the return-path parameter, which is also validated by SPF. To avoid redundancies, we recommend adding only the DKIM and CNAME records for domain verification in ZeptoMail.

#### Table of Contents

- [DNS records](https://www.zoho.com/zeptomail/help/domains.html#dns-records)
  - [SPF](https://www.zoho.com/zeptomail/help/domains.html#spf)
  - [DKIM](https://www.zoho.com/zeptomail/help/domains.html#dkim)
  - [CNAME](https://www.zoho.com/zeptomail/help/domains.html#cname)
- [Add your Domain](https://www.zoho.com/zeptomail/help/domains.html#add-domain)
- [Edit your Domain](https://www.zoho.com/zeptomail/help/domains.html#edit-domain)
- [Verify your Domain](https://www.zoho.com/zeptomail/help/domains.html#verify-domain)
  - [Self Authentication](https://www.zoho.com/zeptomail/help/domains.html#self)
  - [Authentication with the help of IT administrator](https://www.zoho.com/zeptomail/help/domains.html#colleague)
  - [One click addition](https://www.zoho.com/zeptomail/help/domains.html#oneclickverification)
  - [Troubleshoot DNS verification](https://www.zoho.com/zeptomail/help/domains.html#troubleshoot)
- [Domain validation](https://www.zoho.com/zeptomail/help/domains.html#domainvalidation)
- [DNS missing and domain suspension](https://www.zoho.com/zeptomail/help/domains.html#DNS-missing)

## DNS records

### SPF

The [Sender Policy Framework (SPF)](https://www.zoho.com/zeptomail/articles/spf-record-in-transactional-email.html) record lists all the servers authorized to send emails on behalf of a domain. When an email reaches the recipient server, it checks for the return-path domain in the envelope address — this is available in the email header and is not visible to the recipient. The server then looks up the SPF record of the return-path domain and checks if the sending server's domain or IP is listed. If it is, then SPF passes. SPF mainly helps prevent the misuse of a domain for phishing and other scams.

**SPF value: v=spf1 include:example.com ~all**

### DKIM

[Domain Keys Identified Mail (DKIM)](https://www.zoho.com/zeptomail/articles/what-is-dkim.html) is an authentication method that ensures that an email's content has not been altered in transit. It uses a public-private key pair to achieve this. The sending server creates a hash value of the email's contents and encrypts it using a private key. This is called a signature and is added to the email header. When the recipient server receives the email, it retrieves the public key from the sender's DNS. It uses this key to decrypt the signature. Simultaneously, it creates a separate hash value. This new hash value is compared with the decrypted value. If they match, the DKIM check is cleared. DKIM ensures that the email content is not modified to carry out phishing activities.

**DKIM value: <selector>.\_domainkey.subdomain**

### CNAME

The Canonical name (CNAME) record is a type of DNS record that maps one domain name (usually a sub-domain) to another domain. This acts as an alias allowing multiple domain names to point to the same source without duplicating the DNS records.

CNAME record added in ZeptoMail specifies the subdomain that will be used to capture the bounced emails, i.e., the bounce or return path address.

Note

Refer [here](https://www.zoho.com/zeptomail/help/dns.html) for instructions specific to popular DNS providers like GoDaddy.

## Add your Domain

Follow the steps given below to add your domain in your [ZeptoMail account](https://zeptomail.zoho.com/):

1. From the _left panel_, click on **Domains**.
2. Select **Add Domain**.



![Add new domain](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/add-domaain.png)

3. Enter your domain name.
4. Select the Agent(s) to which this domain has to be associated. You can select multiple Agents too.
5. Click **Add** to complete the domain addition process.



![Add domain details](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/add-values.png)

6. The new domain will be successfully added.



![Domain's verification status](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/6c246fea-efa4-4e03-b790-a60569de509e.png)

Note

You can add a total of **100 domains** in the Domains section.

## Edit your Domain

If you have mis-spelled any of your un-verified domains, you can edit it. Follow the steps given below to edit your domain:

1. Hover over the unverified domain and click on the _edit icon_ next to the domain name.



![Edit domain name](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/1065ca54-92c3-4900-999a-4350141cb31f_4_5005_c.jpeg)

2. Enter the new domain name and click the _save icon_.



![Save edited name](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/e46db49a-d979-4e1b-ad2c-97f7bf372568_4_5005_c.jpeg)


## Verify your Domain

You can verify your domain using any of the two methods listed below:

- [Self Authentication](https://www.zoho.com/zeptomail/help/domains.html#self)
- [Authentication with the help of IT administrator](https://www.zoho.com/zeptomail/help/domains.html#colleague)

### Self Authentication

1. Choose the unverified domain from the Domains section. You will find the TXT(DKIM) and CNAME values listed.
2. Choose your DNS provider from the drop-down.
3. The **Host** column will be populated according to your DNS provider. Refer [here](https://www.zoho.com/zeptomail/help/dns.html) for instructions specific to popular DNS providers like GoDaddy. If your DNS provider is not listed, you can select **Other** from the drop-down.



![DNS configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/newtab-dns.png)

4. Navigate to the DNS settings of you provider and paste the TXT's 'host' and 'value' entries in the respective columns.
5. Repeat the same for the CNAME records.
6. Return to ZeptoMail and click **Verify** once the records are added.
7. It may take 24-48 hours for the records to be published in the DNS. Your domain will not be verified until then and you will not be able to send any emails.
8. The verification status of the domain will change to **verified**, once the records are successfully published.



![Verified status](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/verified-status.png)

### Authentication with the help of IT administrator

Sometimes you may not be handling your domains directly. In such cases, you can take help of your IT administrator or your colleague to add the **DNS Records**. Follow the steps given below to share your records:

1. From the _left panel_, click on **Domains**.
2. Click on the **Share records with colleague** button.



![Share records with colleague](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/newtab-share.png)

​
3. The share record pop-up appears.
4. Enter the email address of your IT administrator or colleague in the pop-up. Add a suitable description or message in the Description section. Click **Send**.
5. Click **Verify** once the records are published.



![Add colleague details](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/share-records.png)

6. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails.
7. The verification status of the domain will change once it is verified.



![Verification status](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/verified-status.png)

Note

The share record feature is available only for users with **Postmaster** and **Engineer** role. Refer [this section](https://www.zoho.com/zeptomail/help/manage-users.html) for more information on user roles in ZeptoMail.

### One click record addition

ZeptoMail also supports one click record addition for accounts hosted for specific DNS providers. This allows you to automatically add the DNS records to your domain providers without having to manually add them.

You can refer our guides on [GoDaddy](https://www.zoho.com/zeptomail/help/dns/godaddy.html) and [1&1](https://www.zoho.com/zeptomail/help/dns/one-and-one.html) DNS providers to use the one click verification.

### DKIM key rotation

Key rotation involves replacing old public-private key pairs with new ones. Regular rotation ensures your cryptographic keys are secure and reduces the risk of them being deciphered. ZeptoMail facilitates this by allowing you to add upto two new DKIM keys of varying lengths.

![Add DKIM key](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/newtab-dkim.png)

You can either auto-generate a selector or add one manually, with the desired length(1024 bits or 2048 bits). Every DKIM key you generate should be verified to use it. However, you should have verified the existing DKIM key to add new DKIM keys.

![Add key length and selector](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/save_dkim.png)

### Troubleshooting DNS verification

DNS record propagation usually takes 24–48 hours. During this period, you may not be able to verify your domain, so we recommend waiting until the propagation is complete. However, you can check the propagation status of the DNS records using the [Toolkit](https://zohomail.tools/#domainDetails). To do this:

- Click the **Verify DNS records** button. The verification pending pop-up appears.



![Verify records button](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/verifynew.png)

- Click **Check DKIM** to view the DKIM propagation status in the Toolkit.



![DKIM button](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-dkim.png)

- Click **Check CNAME** to view the CNAME propagation status in the Toolkit.



![CNAME check](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-cname.png)


If you’re still unable to verify your domain after the expected time period, check the following:

- Ensure that the DKIM(TXT) and CNAME values are copied correctly from ZeptoMail.
- In some cases, your domain may be purchased from one registrar while the DNS records are managed on a different name server. Make sure the DNS records are added to the active name server where your domain’s DNS is hosted. Any mismatch can prevent successful domain verification.

### Domain validation

The domains associated with your account will be constantly checked for the published DNS records. If there are any discrepancies with the published records, you will be given a certain period to publish the relevant DNS records. Failing to verify the records in the given time will result in the suspension of emails being sent from that particular domain.

To authenticate your domain again, follow the verification methods mentioned above.

## DNS missing and Domain suspension

In cases where your DNS records have been modified or deleted, you will be shown the **Domain verification warning** pop-up when you login. This pop-up lists the domains whose DNS settings have been changed.

There are two cases :

- DNS missing
- Domain suspension.

**DNS missing case:**

When the DNS records - TXT(DKIM) and CNAME, of a particular domain have been deleted or modified, a pop-up warning about the changed data will be displayed along with the modified records. Click the **view** button near the domain to view the details corresponding to it.

The deadline to verify these records will also be shown in the pop-up, post which email sending will be suspended for it. Apart from this, we will also be sending you email intimations about the modified records.

![DNS verification warning message](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/newdnsmissing.png)

**Domain suspension case :**

Further, the domains whose email sending has been disrupted will be shown in the pop-up when you login. You can add the missing data in your DNS settings and verify your domain to start sending your emails again.

![Domain suspension warning](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/suspendeddom.png)

Follow the steps given above to add and verify your records.

Alternatively, you can view the information about the missing DNS record in the **Domains** section of your account too.

![Missing DNS records ](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/suspension-new.png)

Note

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
