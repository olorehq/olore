<!-- source: https://www.zoho.com/zeptomail/help/processed-emails.html -->

# Processed Emails

#### Table of Contents

- [Introduction](https://www.zoho.com/zeptomail/help/processed-emails.html#Introduction)
- [Email details​](https://www.zoho.com/zeptomail/help/processed-emails.html#details)
  - [Sender details](https://www.zoho.com/zeptomail/help/processed-emails.html#sender-details)
  - [Recipient details](https://www.zoho.com/zeptomail/help/processed-emails.html#recipient-details)
  - [Email timeline](https://www.zoho.com/zeptomail/help/processed-emails.html#email-timeline)
  - [Content Preview](https://www.zoho.com/zeptomail/help/processed-emails.html#content-preview)
  - [Batch emails](https://www.zoho.com/zeptomail/help/processed-emails.html#batch-emails)
- [Search and Filter](https://www.zoho.com/zeptomail/help/processed-emails.html#filter)
- [Log operations](https://www.zoho.com/zeptomail/help/processed-emails.html#log-operations)
  - [Export logs](https://www.zoho.com/zeptomail/help/processed-emails.html#export)
  - [Refresh logs](https://www.zoho.com/zeptomail/help/processed-emails.html#refresh)
  - [Delete logs](https://www.zoho.com/zeptomail/help/processed-emails.html#delete)

## Introduction

The Processed emails tab within the Agent lists all the outgoing emails from your ZeptoMail account. This section also gives information about sender and recipient details facilitating better organization and control. The emails are listed in the order in which they are sent, with the recently sent emails at the top.

![Processed emails section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-section.png)

The information is tabulated under the following categories:

- **From and To** \- Sender and receiver email address.
- **Date and time** \- Date and time the email was sent.
- **Subject** \- Subject of the emails sent.
- **Status**\- Status of the email sent. It can be _Processed_, _Process failed_, or _Multiple status._
- **Clicks**\- Number of times a link in the email was clicked.
- **Opens** \- Number of times an email was opened.

Note

- Clicks and Opens data will be displayed only if enabled in the [Email Tracking tab](https://www.zoho.com/zeptomail/help/email-tracking.html).
- By default, the Processed emails section lists upto 60 days' logs. However, you can extend this by purchasing more storage. You can drop us an email at [support@zeptomail.com](mailto:support@zeptomail.com) to increase your email logs' retention period.

## Email details

1. Login to your [ZeptoMail](http://zeptomail.zoho.com/) account.
2. From the left pane, select the Agent for which you want to view the email logs.
3. Navigate to **Processed Emails** tab.

![Navigate to processed emails](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-navigate.png)

Click on a particular transaction or select **View Details** to see more information for that transaction.

### Sender details

The email details section has an in-depth information about the selected email.

![processed emails sender details](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-sender_details.png)

The left pane contains the following details pertaining to the sender:

|     |     |
| --- | --- |
| **Parameter** | **Description** |
| Request id | Acts as an acknowledgement for the email call made to ZeptoMail from the sender |
| Date | Time and date when the email was sent |
| Subject | Email's subject |
| From | From address of the email |
| Request triggered IP | Public IP from where the email was triggered to ZeptoMail's servers |
| Mail sent via | Method using which email was sent — SMTP, API |
| Agent name | Agent from where the email was triggered |
| Bounce address | Bounce value associated with the domain |

### Recipient details

The **Delivery info** button on the right gives the recipient information.

![Processed emails recipient details](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-recipient.png)

|     |     |
| --- | --- |
| **Parameter** | **Description** |
| Encryption type | Type of encryption used for the outgoing email — whether SSL or TLS |
| Email relay | MX details of the recipient's inbox |
| Delivery duration | Time taken in milliseconds to reach the recipient |
| Recipient | Recipient's email address |
| Status | Delivery status of the email |
| Delivery time | Date and time of the email delivery |

### Email timeline

The timeline shows the path the email traversed before reaching the recipient. This information can be viewed in the **Timeline** column by selecting the **View** button. The timeline section accounts the different statuses the email takes once it is sent. An email takes one of the following statuses when it is sent from ZeptoMail.

##### Emails Status

- **Queued**\- The period between the email being sent and it being processed.
- **Processed** \- Email was successfully sent from the ZeptoMail email server.
- **Delivered**\- Email has been delivered to the intended recipient.
- **Process failed** \- Email has not been triggered from ZeptoMail's servers due to some reason.
- **Multiple status** - Is shown when there are multiple recipients and statuses. You can view the status of each recipient by clicking on the email.
- **Soft bounce** - When the email wasn't delivered due to temporary reasons.
- **Hard bounce** \- When the email wasn't delivered due to permanent reasons.

If your email soft bounces, there will be multiple tries to get the email delivered, failing which, it will be marked as a hard bounce. Shown below is the timeline for a soft bounced email, which was ultimately marked as a hard bounce after multiple tries.

![processed emails timeline screenshot](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-timeline.png)

### Content preview

The **Content preview** tab holds a copy of the email. You will be able to view the content only if you enable the option to save it. This can be done in the [**Content Settings** section](https://www.zoho.com/zeptomail/help/content-setting.html) in the Settings menu.

To view the saved content:

1. Navigate to the Agent whose email contents you wish to view.
2. Hover over the desired email and click **View Details.**



![processed emails view details](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-view-details.png)

3. In the email details section, navigate to the **Content Preview** tab to view the saved content.



![View email's content](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/preview2.png)


   - You can view the selected email's preview here as well as its original content.



     ![Screenshot of the view original message](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/content_preview2.png)

   - This section also has the option to download the original message in the EML format. Click the **Download EML** button to do so.



     ![Locates the download EML button](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/preview3.png)

### Batch emails

Batch emails are those that contain one message sent to multiple recipients. You can view the delivery details of batch emails too in the Processed emails section.

![Batch emails list](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/processed1.png)

## Search and Filter

The search and filter option allows you to locate the required data using some search conditions. This makes it easier to find information faster and with precision.

To lookup the desired information:

1. Login to your ZeptoMail account and navigate to the desired Agent.
2. Go to the Processed Emails section.
3. Click on the **search criteria** drop-down at the top and select the desired parameter from the list - **To**, **From**, **Date & Time**, **Request Id**, **Subject**, **Client Reference**, **Cc**, **Bcc**, **Soft bounces**, **Hard bounces** and **Process failed.**
4. Add the relevant value you are looking for and click Search.

![processed emails search](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-search.png)

Alternatively, you can also filter out specific information using the **Filter by** option. The list of values you can filter out are:

1. Soft bounces
2. Hard bounces
3. Process failed
4. Delivered



![processed emails filter](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pre-filter.png)​

## Log operations

You can perform the following operations on the data available in the Processed emails section

### Export logs

Export email logs and save them to your local device to view them at your pace. You can export the last **60 days' email logs.**

![Export logs](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-export-data.png)

**Steps to export your email logs:**

1. Go to the desired Agent >> Processed Emails.
2. Click the **Export** button on the top-right corner.
3. A pop-up will appear where you can enter the filter criteria to export your emails.



![Export email logs dialog box](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/exportdetails.png)

​​
1. **Date range:** Enter any range within the last 60 days.
2. **Email condition:** Select the email criteria from the drop-down. You can narrow down your search by choosing multiple search conditions.
3. **Password:** This will be set as the password to access the zip file.
4. Click on **Initiate Export**.
5. The zip file will be auto populated in the [**Export logs** section](https://www.zoho.com/zeptomail/help/export-logs.html). This will be available for 3 days from the date of export completion.
6. Click on **Download** to export the file to your local server.

## Refresh logs

The refresh button in the Processed emails section reloads the logs to list the updated fields.

![Refresh logs](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-refresh-data.png)

## Delete logs

You can delete the unwanted logs in the Processed emails section. Follow the steps below to delete the log(s).

1. Hover over the data you wish to delete. Click the **delete button** on the right-hand side.



![Processed emails delete](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pre-delete.png)

2. Confirm your choice in the pop-up that appears.
3. You can delete multiple records by selecting the checkbox to the left of your logs.



![Processed emails delete multiple](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pe-delete-multiple.png)

​
4. Select the required data and click on the **delete selected** option.
5. Confirm your choice in the pop-up.

Note

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns.](https://www.zoho.com/campaigns/ "Zoho campaigns")
