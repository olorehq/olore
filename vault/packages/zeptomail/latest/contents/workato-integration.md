<!-- source: https://www.zoho.com/zeptomail/help/workato-integration.html -->

# ZeptoMail connector for Workato

Workato is a iPaaS software that can be used to created workflows using external applications. Zoho ZeptoMail can be used to execute actions in workflows created using Workato.

## Creating a workflow using ZeptoMail

Consider a workflow example where you want to trigger a transactional email everytime a new entry has been made in a spreadsheet. You can use ZeptoMail to send these emails. As a first step, you should install the ZeptoMail connector in the desired project.

### Installing ZeptoMail connector

1. Login to Workato [console](https://app.workato.com/custom_adapters).
2. Navigate to the desired Project and click Create.
3. From the drop-down, select Connection.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workato-connection.png)

4. Search for Zoho ZeptoMail from the list and select it.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workato-new_connection.png)
5. ZeptoMail can now be used in your workflows.



To configure ZeptoMail, you need the Client ID and Client secret, which can be generated from the [API console.](https://api-console.zoho.com/)


### Creating a workflow using ZeptoMail

1. Workflows are called recipes in Workato.
2. To create a new recipe, select create and choose Recipe from the drop-down. Add the recipe name and select **Start building**.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workato-start_building.png)

3. Set the value that should trigger an action. To set ZeptoMail as the action, choose the **Action in app** option.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workato-action.png)

4. For the action, select ZeptoMail from the list and choose the action ZeptoMail should perform.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workato-zeptoaction.png)

5. Once you choose the type of action, you can setup ZeptoMail and configure the details. Enter the Agent name, To address to which the email should be triggered and the email body.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workato-details.png)

6. Once you finish the setup, save the configuration.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/workato-save.png)

7. The workflow will be executed when the set trigger occurs.
