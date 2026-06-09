<!-- source: https://www.zoho.com/zeptomail/help/bubble-plugin.html -->

# ZeptoMail plugin for Bubble.io

[Bubble](https://bubble.io/plugin/zeptomail-1771568307944x134483252213973000) is a no-code platform that helps you develop your applications. They have an array of features that aid you in building your web as well as mobile applications. Besides this, they also offer integrations with various applications for different purposes.

The ZeptoMail plugin for Bubble allows you to send transactional emails from applications built using Bubble. You can use the Agents in your account to send the emails.

## Pre-requisites to add ZeptoMail plugin

You need the following to start sending emails from your application :

1. ​A [ZeptoMail](https://zeptomail.zoho.com/) account.
2. An application developed in Bubble platform.

## Installing ZeptoMail plugin in Bubble

1. Login to your Bubble account and navigate to the **App** from which you wish to send your transactional emails.
2. Select **Plugins** from the left menu. Click the **Add plugin** button.



![Add plugin](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-addplugin.png)

​
3. Search for ZeptoMail and click **Install.**



​![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/4f1b72ff-5700-49e8-a7b6-629929fcfc55.png)

4. Once installed, you will be able to fill in the configuration parameters. Apart from this, you will also be able to review and rate the plugin.

## Configuration parameters in ZeptoMail Bubble plugin

|     |     |
| --- | --- |
| **Parameter** | **Description** |
| Hosted region | The region in which your Zoho Account Data resides. (One of the valid domains hosted with Zoho) |
| API Key | It is the Send Mail token generated in the ZeptoMail Agent you wish to configure in Bubble. |
| From Email Address | The email address that will be used while sending all emails. |
| From Name | The name that will be shown as the Display Name while sending all emails from Bubble. |

## Configure ZeptoMail plugin

Once the plugin is installed, you need to configure your ZeptoMail account in Bubble.io to send transactional emails via ZeptoMail API. Follow the steps below:

1. Login to your ZeptoMail account and access the relevant Agent you wish to configure in Bubble.
2. Navigate to the **SMTP/API** tab and go to Bubble.io plugin section.



![Bubble plugin tab ](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bubbleplugin.png)

3. Copy the fields and enter them in the ZeptoMail configuration page.
4. Under **Hosted region**, enter the domain region where your ZeptoMail account is hosted.
5. Copy the Send mail token generated from your account in **API key** field.
6. Provide the **From email address** and the **From Name** which will be used in the emails sent from the plugin.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bubble1.png)
7. You can also rate and review the plugin.

## Initiating workflow

You can initiate workflows to send out emails automatically from your account. To create a workflow :

01. Navigate to the **workflow** menu on the left pane.
02. Click the **New** button at the top to create a new workflow.



    ![New workflow](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-newwf.png)

03. Click the **New event** option to create a new event that will trigger a transactional email from your application. You can either choose from the given list of events or create a custom event.



    ![Create a workflow](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-customevent.png)

04. For a custom event, fill in the event name and the user constraints in the pop-up.



    ![Custom workflow](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-orderplaced.png)

05. Once you add an event, you can add the corresponding actions that should be executed once the event is triggered.
06. Click the plus symbol below it to choose the desired action.
07. Navigate to the plugins section to select ZeptoMail's action for the trigger event you have created. You can choose two ways to use the plugin— send email using the template in Bubble or use the templates available in your ZeptoMail account.



    ![Choose the action](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-chooseaction.png)

08. If you select the send email action, the fields will be auto-populated based on the user's credentials in your application.



    ![Send email option](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-action.png)

    ​
09. If you wish to use the templates available in your ZeptoMail account, then choose the ZeptoMail-sendTemplateMail option in the actions drop-down.
10. Update the **template key** and other relevant details in the Properties column. You can copy paste the **template key** from the **Templates tab** in the respective Agent.
11. You can also add placeholders for dynamic data (name, order id, etc.) in your emails. This can be done using the merge info fields in ZeptoMail's templates.
12. If your email templates contain any merge info parameters, you should include them either in the mergekeys or merge info field in your Bubble workflow.
    1. **Mergekeys:** Mergekeys allow you to add ZeptoMail's merge info values as key-value pairs.
    2. In the **mergekeys** field, enter the relevant placeholder and its corresponding value.
    3. You can add multiple values using the **Set another key/value** button.



       ![Merge keys option](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-mergekeys.png)

    4. **Merge info(JSON):** The merge info field allows you to add the entire merge info values in a valid JSON format. This is particularly useful when your template contains [collection iteration values](https://www.zoho.com/zeptomail/help/api/dynamic-templates.html).



       ![Merge info values](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bub-mergeinfo.png)

    5. If your workflow contains both mergekeys and merge info(JSON) values, the merge info(JSON) values will be given precedence.
13. This will create a workflow for a particular task in your application. You can create multiple such workflows to send emails specific to other actions. Once a workflow is created, it will automatically be executed within your application when an event is triggered.
14. You can view the email logs of all the emails sent from a particular Agent in the [processed emails section](https://www.zoho.com/zeptomail/help/processed-emails.html) of your ZeptoMail account

Sending emails through ZeptoMail is subjective to our **Usage Policy** restrictions. Please refer to our [Usage Policy page](https://www.zoho.com/zeptomail/terms.html) for details.
