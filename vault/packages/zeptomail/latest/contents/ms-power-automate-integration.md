<!-- source: https://www.zoho.com/zeptomail/help/ms-power-automate-integration.html -->

# ZeptoMail integration with Microsoft Power Automate

[Microsoft Power Automate](https://make.powerautomate.com/) is an integration tool used to connect applications and create workflows. Workflows or flows help you automate repetitive tasks to improve efficiency. Power automate has three types of flows depending on your working model and needs.

They are :

- **Cloud flows** : Cloud flows help you automate your triggers instantly, via a schedule or automatically.
- **Desktop flows** : Desktop flows help create workflows on your desktop.
- **Business process flows** : Business process flows enables you to streamline tasks within your organization.

The [ZeptoMail](https://www.zoho.com/zeptomail/) integration with Microsoft power will help you automate your email sending process by developing a trigger and action model. With this integration, you can have your emails sent out instantly when a set trigger occurs. ZeptoMail allows you to send out a custom email or using the available email templates.

## Pre-requisites

- A ZeptoMail [account](https://zeptomail.zoho.com/).
- A valid Microsoft Power account.

## Integrating ZeptoMail with Microsoft Power Automate

For a particular trigger, you can send custom emails or using pre-built templates using ZeptoMail.

Follow the steps below to connect to ZeptoMail :

01. Login to your Power Automate account and click **Create** from the left menu.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/ms_automate_power_home.png)

02. You can choose to create a cloud flow, desktop flow or business flow.
03. You can create a flow in three ways :


    - Create a custom flow by starting from blank.
    - Choosing from available templates.
    - Choosing to start from a connector.
04. Let us consider the scenario of creating a flow to send emails whenever a new response is submitted in Microsoft forms.
05. Click on **Automated cloud flow** from **start from blank** to create a connection from scratch.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/automated_flow_.png)

06. Enter your desired flow name and choose the trigger for which you wish to send your emails.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/create_flow.png)

07. Click **Create**.
08. The trigger for the flow will be created. Click **New step** to add the action for the trigger.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/new_step.png)

09. In the actions tab, search for ZeptoMail. Select your choice of method by which you wish to send emails- **using templates** or a **custom email.**


    - If you wish to send custom emails, follow the steps below:
    - Fill in the mandatory parameters -  Agent which you wish to use, bounce address, From address prefix, From address domain, From name and subject.

      ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/fill_details.png)
    - You can add the CC, BCC and other attachment related details in **advance options** section.
    - Click **save.**

    - If you want to send emails using templates :
    - Select the **Send email template.**

      ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/send_template.png)
    - Fill in the mandatory parameters - Agent you wish to use, bounce address, From address prefix, From address domain, From name, Email template available in your Agent and subject.
    - If you need to add any merge tags to your templates, you have an option to add them too.
10. Click **save** to add the action.Your flow will be created. You can test it by clicking the **Test** button on top right.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/test_run.png)

Note:

- While selecting the domain of your ZeptoMail, select the correct domain where your account is hosted to avoid Authentication errors.
- The From address domain should be a verified domain added to your ZeptoMail account.
