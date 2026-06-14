<!-- source: https://www.zoho.com/zeptomail/help/using-templates.html -->

# ​Email Templates

Transactional emails like OTPs, password resets or account notifications are sent more frequently than others. Instead of drafting the same email multiple times, you can use email templates. Templates let you:

- Reuse common email formats quickly.
- Maintain consistency in the emails you send.
- Standardise the structure and content of your transactional emails.

#### Table of Contents

- [Create Template](https://www.zoho.com/zeptomail/help/using-templates.html#create "Title link")
- [Search a Template](https://www.zoho.com/zeptomail/help/using-templates.html#searchtemplate "Title link")
- [Sections of a Template](https://www.zoho.com/zeptomail/help/using-templates.html#templatesection "Title link")
  - [Template info](https://www.zoho.com/zeptomail/help/using-templates.html#templateinfo)
  - [Edit template](https://www.zoho.com/zeptomail/help/using-templates.html#edittemplate)
  - [Test email](https://www.zoho.com/zeptomail/help/using-templates.html#testemail)
  - [Single email setup](https://www.zoho.com/zeptomail/help/using-templates.html#singlemail)
  - [Batch email setup](https://www.zoho.com/zeptomail/help/using-templates.html#batchemail)
- [Duplicate templates](https://www.zoho.com/zeptomail/help/using-templates.html#duplicatetemplates)
- [Email reports](https://www.zoho.com/zeptomail/help/using-templates.html#emailreports)
- [Delete template](https://www.zoho.com/zeptomail/help/using-templates.html#deletetemplate)

## Creating Templates for transactional emails

Templates are exclusive to Agents and you cannot use a template in one Agent in another. To create a new template:

01. Login to [ZeptoMail](https://zeptomail.zoho.com/).
02. Navigate to the Agent where you would like to create the template.
03. Click on the Templates tab.
04. Click **Add new template** in the right corner to add a new template. The **Add new template** pop-up appears.



    ![Add template](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/temp-add.png)

05. You can choose one of the sample templates available or use a blank template to create the template from scratch.



    ![UI screenshot of template listing](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/custome_template.png)

06. Enter the **Template Name** and **Subject**.



    ![UI screenshot of security code](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/security_code.png)

07. Once you create the template, you can edit the placeholders and content in the editor. There are two types of editors— Text and HTML. They help you edit the content according to your brand's theme.
08. The text editor also has the provision to add placeholders called **merge tags**. They help add dynamic content like username, application name and more.
09. You can also attach files to the template using the Attach icon in the editor tools.
10. Click **save** once you finish editing your template.



    ![UI screenshot showing merge tag](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/prtemp-merge1.png)

11. The template will be added to your Agent. All the templates you create will be listed in the Templates tab along with the **Subject**, **Template key**, **Last modified date**, and **size** of the template.
12. Alternatively, you can upload a TXT or HTML template to the list. To do so:
    1. Click **Import.**



       ![Import template](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/temp-import.png)

    2. Select **Choose files to upload** to upload the desired files and select **Import.**

Ensure you have the content in the HTML format, if you wish to [track the opens and clicks](https://www.zoho.com/zeptomail/help/email-tracking.html).

## Template sections

A template in ZeptoMail has the following sections:

- Template info
- Edit template
- Test email
- Single email setup
- Batch email setup

You can select the desired template to view them.

### Template info

This section gives a preview of the template including information like the — subject, template key, created and modified date and the template size. Further, you can also view the contents according to the screen modes - dark or light.

You can edit this template using the **Edit** icon at the top. You will be redirected to the **Edit template** section.

![template info ](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/temp4.png)

### Edit Templates

The editor has the following sections:

![template editor](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/template_editor.png)

1. Choose the type of editor you wish to work on from the **Editor** drop-down.There are two options -
1. **Text Editor**: Allows you to edit the plain text content.
2. **HTML**: Allows you to edit the HTML code of the template.
2. Depending on the type you choose, you will find the corresponding formatting and editing options.

3. **Template alias key:**

You can add an alias name, in addition to the template name. This helps you identify and fetch them better. The alias name can be used in place of the template key within the request body of your API.
4. Click the **Enter key alias** button to add an alias name.



![Add template alias](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/key_alias.png)

5. Once you make the necessary changes, click **Save.**

- You can use the alias name within your request body as the "template\_alias" parameter. It can be while sending a [single email](https://www.zoho.com/zeptomail/help/api/email-templates.html "API help page") as well as [batch emails](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html "API help page").
- You should use either the "template\_key" parameter or "template\_alias" parameter. You cannot use both.

### Test email

The test email section allows you to add merge tags to customize your emails with dynamic values and check their configuration by sending a test email. Enter the merge tag values on the left console and click **Change values.** This adds the merge values.

To send a test email, click the **Send test email** button. Enter the recipient address and click **Send.** Sending test emails will count against your account credits.

Apart from simple variable substitution, you can use merge tags to include more information within your email body. Refer our [guide](https://www.zoho.com/zeptomail/help/api/dynamic-templates.html "Dynamic values help page") on adding dynamic data in your templates.

Templates can be used with ZeptoMail APIs to send single as well as batch emails.

### Single email setup

This API is used to send the same email content to multiple recipients. For example, the email that is sent when a user registers for a webinar. Though the email is sent to multiple recipients, it will contain the same webinar link. In the case of Single Email API, each recipient can see the other recipients in the email. You can view the detailed instructions for the API [here](https://www.zoho.com/zeptomail/help/api/email-templates.html#alink2 "Single email API help page").

### Batch email setup

This API is used to send different email content to multiple recipients with information specific to each recipient. For example, emails that contain contact information or company details of each user. In contrast to Single Email API, recipients will not be able to view the other recipients. View the detailed instructions for the API [here](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html "Batch email API help page").

### Search a Template

1. You can search the desired template from the list using the **search criteria** drop-down menu.
2. Choose the criteria based on which you wish to search the template— Template name or Template key.
3. Fill in the corresponding value to view the desired Template.



​![Search template](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/temp-search.png)


## Duplicate templates

You can create copies of existing templates and add them to Agents using the **Duplicate** option. Follow the steps to duplicate a template:

1. Hover over the template you wish to duplicate and click the **Duplicate** option on the right.



![Duplicate template](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/templ-duplicate.png)

2. Set a name for the copy and choose the Agent you wish to add the template to.
3. Click **Duplicate** and a copy of the template will be created in the respective Agent.



![UI screenshot of creating duplicate template](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/duplicate-new.png)


## Email reports

You can view the reports of the emails you have sent using a particular template using the **View Report** button. This lists the statuses of the emails sent out using that particular template. This report gives a visual comparison of the email details against time. The graph is plotted for the following values:

- **Sent** \- Total number of emails processed. If your email has 1 recipient in 'to' field, 1 recipient in 'cc' field, and 1 recipient in 'bcc' field; then the total count of emails sent is 3.
- **Delivered**\- Number of emails that have been delivered to the recipient.
- **Hard Bounces**\- Number of emails that did not deliver due to permanent reasons like invalid recipient address.
- **Soft Bounces** \- Number of emails that did not deliver due to temporary reasons like recipient server being down or recipient's inbox being full.
- **Click** \- Count of the number of times a link was accessed.
- **Open** \- Number of times the recipient opened your emails.
- **Process failed -** ​Emails that have not been sent out due to various reasons.



![Template report](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/temp-report.png)


## Delete Template

Hover on the template you wish to delete and click on the Delete icon on the right side. A confirm pop-up will appear. Click OK.

![delete template](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/temp-delete.png)

Note

Before you get started it is important to know that ZeptoMail is for sending [transactional emails](https://www.zoho.com/zeptomail/ "Webpage") like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/ "Webpage").
