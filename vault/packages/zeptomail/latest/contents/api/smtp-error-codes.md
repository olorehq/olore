<!-- source: https://www.zoho.com/zeptomail/help/api/smtp-error-codes.html -->

# SMTP Error Codes

|     |     |     |
| --- | --- | --- |
| **Error Code** | **Error Message** | **Reason** |
| 530 | Must issue a STARTTLS command first. | Trying to connect SMTP server in unsecure mode. |
| 535 | Authentication Failed. | Invalid Sendmail token / username. <br>Credits expired.<br>Credits blocked.<br>Account blocked. |
| 553 | Relaying disallowed as <emailaddress>. | Sending email from Invalid 'from' address domain. |
| 552 | 5.7.1 virus Win. Test. EICAR\_HDB-1 detected by Zoho Mail. | Virus detected in eml file. |
| No error code | 5.2.1 Subject is Mandatory. | Subject field missing. |
| No error code | 5.2.0 Email size exceeded the policy. | Attachment size has exceeded the user policy. |

Note:

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
