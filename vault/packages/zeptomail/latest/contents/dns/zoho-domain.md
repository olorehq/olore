<!-- source: https://www.zoho.com/zeptomail/help/dns/zoho-domain.html -->

# Zoho Domains DNS configuration

If your domain is hosted with Zoho Domains, you can follow the steps given below to configure DKIM and CNAME records for ZeptoMail. It may take 24-48 hours for the records to be published in the DNS. So your domain will not be verified until that time and you will not be able to send any emails using your domain.

#### Table of Contents

- [DNS configuration](https://www.zoho.com/zeptomail/help/dns/zoho-domain.html#dns)
  - [DKIM](https://www.zoho.com/zeptomail/help/dns/zoho-domain.html#dkim)
  - [CNAME](https://www.zoho.com/zeptomail/help/dns/zoho-domain.html#cname)
- [Domain verification](https://www.zoho.com/zeptomail/help/dns/zoho-domain.html#verify)

## DNS configuration

1. Log into your Zoho Domains account and navigate to the **My Domains** page.
2. Select the domain you want to configure.



![Select domain](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zdomain-add-record.png)

3. Click **Manage DNS** available in the DNS menu.



![manage dns](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zdomain-manage-dns.png)

4. If the domain is new, the DNS fields will be empty, and you can start adding the values by selecting the **Add DNS record** button.



![Add dns record](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zdomain-add-dns.png)


### DKIM configuration

1. To add the DKIM value, copy paste the DKIM host value from your [ZeptoMail account](https://www.zoho.com/zeptomail/help/domains.html#self).
2. Choose TXT from the Type drop-down.
3. Choose the TTL value from the drop-down. It’s best to select a shorter value, as this helps your DNS changes take effect faster across the internet.
4. Copy paste the DKIM value from your ZeptoMail account.

### CNAME configuration

1. To add the CNAME records, click **Add record.**



![add dkim record](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zdomain-dkim.png)

2. Copy paste the CNAME host value from your [ZeptoMail account](https://www.zoho.com/zeptomail/help/domains.html#self).
3. Choose CNAME from the Type drop-down.
4. Choose the TTL value from the drop-down. It’s best to select a shorter value, as this helps your DNS changes take effect faster across the internet.
5. Copy paste the CNAME value from your ZeptoMail account.
6. Click **Save**.



![save configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/zdomain-save.png)


## Domain verification

1. Once you add the records, wait for an hour or two for the data to be populated.
2. Go to the domain within your ZeptoMail account and click Verify.
3. If the DNS information is correct, the domain will be verified.
