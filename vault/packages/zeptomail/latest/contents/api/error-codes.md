<!-- source: https://www.zoho.com/zeptomail/help/api/error-codes.html -->

# API Error Codes

|     |     |     |     |
| --- | --- | --- | --- |
| **Error Code** | **Sub Code** | **Reason** | **Solution** |
| TM\_3201 | GE\_102 | Mandatory Field "subject" was set as Empty Value. | Set the Mandatory Fields as proper values instead of setting Empty in the API. |
| Mandatory Field "from" is missing. | Add the mandatory "from" field. |
| No recipient field found. | Add either "to", "cc" or "bcc" fields. |
| Mandatory field "Mail Template Key" is missing. | Add the mandatory "Mail Template Key" field. |
| TM\_3301 | SM\_101 | Invalid JSON. | Kindly check your API syntax. |
| SM\_120 | Invalid Mimetype found | Kindly check if the attachment added and the Mimetype specified match. |
| TM\_3501 | UE\_106 | Invalid File Cache Key. | Obtain proper File Cache Key from the respective Agent in your File Cache tab. |
| MTR\_101 | Invalid Template Key. | Obtain proper Template Key from the respective Agent. |
| LE\_101 | Credits expired. | Purchase new credits from the ZeptoMail Subscription page. |
| TM\_3601 | SERR\_156 | Email sending IP is not in the allowed IPs list. | You need to add the relevant IP to the allowed IPs list from the settings. [Learn more](https://www.zoho.com/zeptomail/help/ip-restriction.html) |
| SM\_133 | Trial mail sending limit exceeded. | Get your account reviewed to start sending emails again. |
| SMI\_115 | Per day limit exhausted, try after some time. | Wait till the next day to send your emails. |
| AE\_101 | Account blocked | Contact ZeptoMail support |
| TM\_4001 | SM\_111 | Sender address domain is not verified in your Agent. | Use the sender address domain that is verified in your Agent. |
| SM\_113 | Mandatory Field "from" has Invalid Value. | Set the Mandatory Fields as proper values in the API.<br>Note:**target\_value** in the error response shows the field where an invalid email address is set.​<br>Same error response if an Invalid Values is set in any of these fields: **cc, bcc, mime-type in attachments, reply\_to, File Cache Key**. |
| Mandatory Field "to" has Invalid Value. |
| Mandatory Field "bounce\_address" is missing or has Invalid Value. |
| SM\_128 | Your ZeptoMail account is yet to be reviewed and approved by us. | Get your account reviewed and then send your emails using API. |
| SERR\_157 | Sendmail token is invalid. | Obtain proper Sendmail token from the configuration [settings](https://zeptomail.zoho.com/#dashboard/setupDetail) within your Agent. |
| TM\_5001 | LE\_102 | Credit exhausted. | Purchase new credits from the ZeptoMail Subscription page. |
| TM\_8001 | SM\_127 | Total number of attachments exceeding the limit. | Allowed total number of attachments < = 60. |
| Fields exceeding limits. | Total number of addresses exceeding the limit. The allowed number of unique values is 500 for each of these fields :<br>i) reply\_to <br>ii) to <br>iii) cc <br>iv) bcc |
| SM\_129 | Character limit exceeded for the name field for any of these parameters - **from, to, reply\_to, cc, bcc**. | Allowed character limit < = 250. |
| Subject field exceeding the character count limit. | Allowed subject line character count < = 500. |
| Attachment size exceeding the limit.​ | Allowed attachment size < = 15 MB.​​ |
| Exceeding the character limit in attachment filename.​ | Allowed Attachment FileName Characters Length <=150.​​ |

Note:

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
