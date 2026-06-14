<!-- source: https://www.zoho.com/zeptomail/help/zoho-flow-integration.html -->

# Zoho Flow

[Zoho flow](https://www.zoho.com/flow/) is an integration platform that allows you to connect applications together and create a workflow between them. You can create a flow between the applications you want to connect and automate the process. A flow structure will have a trigger and action(s). The trigger can be any activity that occurs in an application. In response to this trigger, a corresponding action will occur in another application. Using this flow model, different applications can be integrated to perform different actions. Similarly, Zoho flow can also be used to connect [ZeptoMail](https://www.zoho.com/zeptomail) with various other applications.

- **Trigger - New Activity**

Triggers are the activities that occur in an application. In ZeptoMail, it can be the recipient activity like open, click, and bounce on an email you send. You can choose the activity you wish to include in the trigger.
- **Action - Desired outcome**

The resulting action to be performed for the particular trigger.​

## Configuring ZeptoMail trigger In Zoho Flow :

If you have a [ZeptoMail account](https://zeptomail.zoho.com/), you can easily login to Zoho flow and create a workflow for your account.

01. Login to Zoho Flow webpage.
02. To create a new flow, click the **Create flow** button from the left panel.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/0502a5a1-97fa-4e29-a75e-09abd9d236fb.png)​​
03. Enter a Flow name describing workflow between the applications you wish to connect and give a short description explaining it. Say you would like to connect ZeptoMail with Sheets. Write an appropriate description explaining the process. Click **next.**

    **![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/c9f3923b-3add-4b83-ae9a-53ee709e1467.png)**
04. If you are creating a new flow, a pop up with the steps explaining the flow process appears. Once you go though all the steps, you can start creating your flow.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/cac2e339-a2e5-4d81-8234-8cfeb4308a2f.png)
05. Select the trigger for your flow. For ZeptoMail click on **App** as the trigger. Click **configure.**

    ​![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/f36cb995-c408-440c-b30f-67a03d259683.png)​
06. In the search bar, search for ZeptoMail and click **Next.**
07. A page with ZeptoMail's trigger(s) will be displayed. Choose the appropriate one and click **Next.**

    ​![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/82a8a7bb-2b7b-497f-9b99-3aee058c5990.png)
08. By clicking connect in the next step, you approve Zoho flow to exchange data with ZeptoMail.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/8e9c73e7-2f31-4a3b-861a-69de5ed4192b.png)
09. In the next step, enter the connection name. You can either authorize this connection to access all the triggers and actions or select specific triggers and actions.
    - The triggers include : Occurance of an email event such as a bounce, click or open.
    - The actions include : An email being sent.
10. ​Click **Authorise.**

    **![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/78759788-6410-4747-b61a-f77a2347fe45.png)**
11. Click Accept in the next step to allow Zoho flow to access your data.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/3c6b06c8-0d9d-42f7-8da3-66a8fc1b1aef.png)​
12. Next, enter the variable name. Once you enter a connection's name, a default variable name will be auto-filled. You can change this variable name. Points to be noted while re-naming a variable are:
    - ​Variable names must always start with an alphabet. A Variable name can contain alphanumeric characters and underscore.
    - Special characters such as space, hyphen, etc. are not accepted. Enter unique variable names to avoid name clashes.
13. Choose the Agent and the email event that you wish to use as the trigger, from the drop-down.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/03514cb3-5453-45a5-b6a7-408e90478d64.png)
14. You can further narrow down your trigger criteria from the drop down box. Once you have selected the required parameters, click **Done.**

    **![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/ed4728ec-0215-4ab7-8b94-6ba286a7a398.png)​**
15. You will be taken to the Builder page where trigger will be displayed

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/e41dab59-8363-4cf8-a499-92818b19ba5a.png)​
16. Search the action app from the left menu. In this case, Zoho sheet. Choose the appropriate action for the trigger and drag and drop it below the trigger.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/a1a15249-d570-4574-b4f8-1576f0511d02.png)
17. ​If the action application has not been authorised, authorise it by following the steps 8 through 10.
18. Next, choose appropriate event(s) that the action app should perform and click **Done.**
19. Turn on the flow using the toggle button. You flow will automatically be executed.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/8f429165-dd93-47b4-8be7-75eb5f7481f0.png)​

## Configuring ZeptoMail as action :

1. Create a new flow from the left menu in the Zoho flow webpage.
2. Configure the app of your choice as the trigger.
3. To use ZeptoMail as the action, search for ZeptoMail in the left pane and select it.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/f8007d28-1522-4006-b947-5ad4052970ac.png)
4. Drag and drop the **send email** action menu below the selected trigger.

​![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/09639622-df50-4c98-a6d4-52634e651f16.png)
5. Fill in the relevant details such as :
   - Variable name
   - Agent name
   - From and To addresses
   - Subject
   - Mail content and its type
6. Select **​Done.**
7. ZeptoMail will be added as the action for your trigger.

​
