<!-- source: https://www.zoho.com/zeptomail/help/smtp-home.html -->

# Email sending with SMTP

​There are two ways in which you can send emails using [ZeptoMail](https://www.zoho.com/zeptomail/):

- Email Sending with SMTP
- [Email Sending with API](https://www.zoho.com/zeptomail/help/api-home.html)

## Email Sending with SMTP

**What is SMTP?**

SMTP or Simple Mail Transfer Protocol is the method by which any application can connect with an SMTP server to send emails. In-order to use ZeptoMail's SMTP servers, you will have to configure your application settings with ZeptoMail's SMTP information.

If your application is already using any other email provider to send transactional emails, it is easier to migrate to ZeptoMail by replacing the existing SMTP settings with ZeptoMail's SMTP settings.

- The total email size which includes your email headers, body content, inline images, and attachments **should NOT exceed 15 MB**

To connect to ZeptoMail via SMTP method add the following details :

## SMTP Configuration settings for ZeptoMail

1. Login to your ZeptoMail account.
2. Navigate to the Agent you wish to connect for email-sending.
3. In the SMTP/API section, go to the SMTP tab and copy and paste the following information in your application code.
1. Server name - smtp.zeptomail.com
2. Port Number, Authentication - 465 (SSL), 587 (TLS)
3. Username - emailapikey (we also support applications that use the **From address** as the username)
4. Authorization - Password. Visit [here](https://zeptomail.zoho.com/#dashboard/setupDetail) to check your password.



      ![SMTP section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-smtp1.png)

Alternatively, you can also copy the sample code on the right side and paste it in your application code to use the SMTP method.

While sending your emails using SMTP :

1. You can use the files uploaded to File Cache as attachments while sending emails using SMTP. Add **X-TM-FILE-KEY** parameter to the header and enter the **File Cache Key** as the parameter value.

**Example**: Multiple file cache keys without name - **message.addHeader("X-TM-FILE-KEY", "filecachekey,filecachekey")**; Multiple file cache keys with name - **message.addHeader("X-TM-FILE-KEY", "filecachekey:name,filecachekey:name")**;
2. You can use **X-TM-OPEN-TRACK** and **X-TM-CLICK-TRACK** parameters in the email header to track emails sent via SMTP.
3. You can use the **message.addHeader("X-TM-CLIENT-REF","testClientRef");** identifier to track a specific transaction.
4. If you are using SMTP to send your emails, as a security measure, we recommend you to add your IP(s) to the [IP restriction list](https://www.zoho.com/zeptomail/help/ip-restriction.html).

**SMTP error codes :** The commonly intercepted errors while sending your emails using SMTP can be found [here](https://www.zoho.com/zeptomail/help/api/smtp-error-codes.html).

Points to be noted :

- ZeptoMail supports TLS v1.2 for SMTP.
- If your SMTP application is restricting longer passwords, then you can generate a shorter password. Shorter passwords are generally less secure. Click on **Generate shorter password** to get your shorter password.
- When you generate a shorter password, your application can either use the **From** address as username value or you can generate the new Username value for the shorter password by clicking on [username value](https://zeptomail.zoho.com/#dashboard/setupDetail).
