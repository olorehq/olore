<!-- source: https://www.zoho.com/zeptomail/help/n8n-integration.html -->

# n8n integration with ZeptoMail

n8n is an open-source workflow platform that allows you to connect applications and create a workflow. The workflows can be created effortlessly by simply dragging and dropping the applications in the workspace. n8n also offers templates for common workflows for better efficiency and productivity.

The connecting applications are called nodes and there are two types of nodes:

**Trigger node:** The application that initiates the workflow. Ex. entry in a form, email in an inbox or an event creation.

**Action node:** The application that executes an operation as a result of the trigger. Ex. notification for an entry.

Applications using n8n for their workflows can add ZeptoMail as an **action node** to send transactional emails for a particular trigger. The supported actions are:

- Email-sending
- Email-sending using ZeptoMail's templates

#### Table of Contents

- [Install ZeptoMail](https://www.zoho.com/zeptomail/help/n8n-integration.html#install-zeptomail)
- [Configure ZeptoMail](https://www.zoho.com/zeptomail/help/n8n-integration.html#configure-zeptomail)
  - [Generate client id and client secret](https://www.zoho.com/zeptomail/help/n8n-integration.html#generate-client-id-secret)
- [Create workflows](https://www.zoho.com/zeptomail/help/n8n-integration.html#create-workflows)

## Installing ZeptoMail

Follow the steps below to install the ZeptoMail package:

1. Login to your n8n account.
2. Navigate to the project you want to add ZeptoMail and click the **Nodes panel** on the right.



![navigate to nodes panel](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/npn-install.png)

3. Search for Zoho ZeptoMail in the list.



![Search for ZeptoMail](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/npm_search.png)

4. Click **Install node.** The package will be successfully installed.



![install zeptomail](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/npm_install.png)

5. You can find the installed node in the **Community nodes** section under Settings.



![Community nodes](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/community_node.png)


## Configuring ZeptoMail

Once you install ZeptoMail, you should connect ZeptoMail with n8n to create workflows. This requires OAuth authentication. Follow the steps given below to configure ZeptoMail:

1. Login to your n8n account.
2. Click the down-arrow next to the Create workflow button and click Create credentials.
3. In the Add credentials dialogue box, search for Zoho ZeptoMail OAuth2 API. Click Continue.



![choosing zeptomail from dropdown](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/add_new_cred.png)

4. The connection dialog box containing authorization URL, authorization token, space to provide the client id and secret will pop-up.
5. You should fill out the client id and client secret generated from [Zoho developer console](https://api-console.zoho.com/) to connect ZeptoMail and n8n. Follow the steps given here to generate them.



![add credentials ](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/clientid_and_secret.png)

6. Click save. The connection is established. You can now create workflows to send emails.

### Generate client id and client secret

1. Navigate to the Zoho developer console.
2. Click Get started if you do not have any new client. If you have an existing client, click Add client.
3. Select Server-based applications in the client type window.



![choose server based application](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/client_id_secret_1.png)

4. Provide an appropriate client name, the application url from where the connection has to be made, and the redirect URL copied from the Add credentials dialog box.
5. Click **Create** to generate the client id and client secret.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/client_id_secret_2.png)

6. Copy the generated values and paste them in the Add credentials dialog box.

## Create workflows

1. You can create a new workflow using the plus icon on the top left corner or using the **Create workflow** button on the top-right corner.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workflow-n8n.png)

2. Select the appropriate trigger for which you wish to send emails.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/trigger-n8n.png)

3. Click the Action in App option and lookup ZeptoMail from the list.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/choose_action-n8n.png)

4. Choose the type of action you wish to perform - send email, send template email.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/action_-_n8n.png)

5. Choose the desired Agent you wish to use, the FROM and TO addresses and enter the appropriate message you wish to use. Click **Execute step** to save the configuration.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/n8n-execute.png)

6. Once the workflow is created, you can save and execute it to check if everything is in place.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/n8n-saved.png)

Note:

Before you get started it is important to know that ZeptoMail is for sending [transactional emails](https://www.zoho.com/zeptomail/) like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
