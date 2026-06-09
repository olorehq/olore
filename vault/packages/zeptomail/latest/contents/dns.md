<!-- source: https://www.zoho.com/zeptomail/help/dns.html -->

# DNS Configuration Details

The [instructions to add DNS records](https://www.zoho.com/zeptomail/help/domains.html) may vary slightly depending on the provider with whom you have hosted your domain. You can view detailed DNS record addition instructions for some popular DNS providers here

- [Zoho Domains](https://www.zoho.com/zeptomail/help/dns/zoho-domain.html)
- [GoDaddy](https://www.zoho.com/zeptomail/help/dns/godaddy.html "Domain Verification with GoDaddy")
- [1 and 1](https://www.zoho.com/zeptomail/help/dns/one-and-one.html)
- [ENOM](https://www.zoho.com/zeptomail/help/dns/enom.html)
- [Cpanel DNS](https://www.zoho.com/zeptomail/help/dns/cpanel.html)
- [Squarespace](https://www.zoho.com/zeptomail/help/dns/square-space.html)
- [Wix](https://www.zoho.com/zeptomail/help/dns/wix.html)
- [Network Solutions](https://www.zoho.com/zeptomail/help/dns/network-solutions.html "Network Solutions Hosting")
- [Yahoo](https://www.zoho.com/zeptomail/help/dns/yahoo.html)
- [Cloudflare](https://www.zoho.com/zeptomail/help/dns/cloudflare.html)

## DKIM

Domain Keys Identified Mail (DKIM) is an authentication method that ensures that an email's content has not been altered in transit. It uses a public-private key pair to achieve this. The sending server creates a hash value of the email's contents and encrypts it using a private key. This is called a signature and is added to the email header. When the recipient server receives the email, it retrieves the public key from the sender's DNS. It uses this key to decrypt the signature. Simultaneously, it creates a separate hash value. This new hash value is compared with the decrypted value. If they match, the DKIM check is cleared. DKIM ensures that the email content is not modified to carry out phishing activities.

## CNAME

The Canonical name (CNAME) record is a type of DNS record that maps one domain name (usually a sub-domain) to another domain. This acts as an alias allowing multiple domain names to point to the same source without duplicating the DNS records.

CNAME verification is used in two places in ZeptoMail.

- To specify the bounce domain that captures the bounced emails.
- To add an alias to track the open and click count.

Note

Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
