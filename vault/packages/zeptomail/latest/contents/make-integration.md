<!-- source: https://www.zoho.com/zeptomail/help/make-integration.html -->

# Zoho ZeptoMail module for Make

[Make](https://make.com/en) is a popular no-code workflow platform that helps to integrate across applications and services. Make automates the process between applications using scenarios.

The workflows are called scenarios and each scenario has a group of modules that facilitate this. Consider modules as building blocks that build up the workflow. Each module performs the assigned task. The following tasks can be performed by a module :

- Trigger
- Search
- Action
- Universal module

The [Zoho ZeptoMail](https://www.zoho.com/zeptomail/) module for Make can be included within scenarios to perform the following actions:

- Send emails
- Send template emails

## Configuring ZeptoMail in Make

Follow the steps below to configure a scenario with ZeptoMail to perform an action :

1. Login to your Make account.
2. Click **Create a new scenario** from the top right corner. Add the necessary trigger.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/make-create.png)
3. To use ZeptoMail to perform an action for the set trigger, click **Add module**(plus icon) and lookup **Zoho ZeptoMail.**
4. Click **Create connection** if you are adding ZeptoMail for the first time as a trigger. Approve ZeptoMail to connect with Make to send emails and make API calls.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/make-connection.png)
5. Once the connection is established, select the desired action from the list - Send email / Send template email / Make an API call.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/make1-action.png)
6. To send just an email, you will be filling up the following details :
1. Agent
2. From name and address - Add the email address associated with the chosen Agent only.
3. To name and address
4. CC, BCC addresses, if any.
5. Mail format - HTML/Text
6. Attachments
7. Subject
8. Content

      ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/make-createconnection.png)
7. If you opt to send template email, you will be including the Merge info values. Copy paste the Merge info value of the template you wish to use. Refer this [document](https://www.zoho.com/zeptomail/help/using-templates.html#mergeinfo) for more information on Merge info.
8. Once you add the relevant action, click **Save.**

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/make1-save.png)
9. You can also test your configuration by selecting **Run once.** The workflow will be executed for the set trigger and action.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/make1-run.png)

## Outgoing email logs

All the outgoing emails can be viewed in the [Processed emails section](https://www.zoho.com/zeptomail/help/processed-emails.html) of the connected ZeptoMail account. If you wish to view all the emails sent out from your Make account, you can assign a dedicated Agent just for your Make scenarios and connect it with the ZeptoMail action.
