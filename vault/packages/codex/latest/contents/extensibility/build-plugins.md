# Build plugins

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Turn a workflow you repeat into a plugin you can use again in ChatGPT. Describe the task in a conversation, add the instructions and reference material it needs, then test and refine the result.

**Custom GPTs are moving to plugins**

Custom GPTs in ChatGPT Enterprise are being retired. If you use a custom GPT, follow [Moving your custom GPT workflows to plugins](https://learn.chatgpt.com/docs/migrate-custom-gpts) to migrate, test, and share its replacement. Use the steps below to create a new plugin from scratch or edit an existing one.

## What is a plugin?

A plugin is a reusable package that helps ChatGPT do a task. It can include apps, skills, or both.



> Illustration: A plugin can contain apps, skills, or both. Apps connect your tools. Skills guide the work.



{/* prettier-ignore */}

[Apps](https://help.openai.com/en/articles/11487775) connect ChatGPT to other services. [Skills](https://learn.chatgpt.com/docs/skills-and-plugins#use-skills-for-repeatable-work) provide instructions for a task, such as summarizing a document in a consistent format.


- **Find a document (app):** Search a connected service for a file you have access to.
- **Summarize a document (skill):** Turn a document you provide into an overview, key points, and open questions.
- **Use a template (skill):** Organize information you provide into a standard format.
- **Compare documents (app + skill):** Retrieve two documents you can access through an allowed app, then compare them using your checklist.

Plugins may be named after a service, like Google Drive, or a workflow, like Document Summary. Check the plugin’s details to see what it includes.

You can create a plugin by describing what you need in ChatGPT. The steps in this guide do not require code.

## Before you start

These steps cover ChatGPT on the web when plugin creation and editing are enabled in your workspace. You can create and edit through a conversation in Chat or Work.

Have a specific task in mind, an example of a good result, and any reference files the plugin should use. If it needs an app, check that the app is allowed in your workspace and complete any required connection setup. A plugin does not give you additional access to that app's files, data, or actions.

**Permissions you need**

You need **Use plugins** permission, and Plugin Creator must be available in your workspace. To edit an existing plugin, you also need edit access. A workspace plugin’s creator and workspace owners or admins can edit it.

## Using a plugin

Use an installed plugin in Chat or Work when you want ChatGPT to follow its workflow or use its apps. Select it with an **@ mention** to choose the plugin for your task.

1. Start a new conversation in ChatGPT.
2. Type **@** in the message box, then begin typing the plugin’s name.
3. Select the plugin under **Plugins** in the menu.
4. Describe what you need, add any relevant files, and send your message.



> Illustration: ChatGPT Work’s @ menu showing FAQ Practice Coach under Plugins and a separate Skills section after entering @faq.



_The @ menu in ChatGPT Work shows matching plugins and skills. Select a plugin under Plugins._

If the plugin needs an app connection, follow the prompts to connect it. To find and install a plugin, see [Plugins](https://learn.chatgpt.com/docs/plugins).




## Create a plugin from scratch

Start with a task you do regularly and a clear example of the result you want. Plugin Creator helps turn that description into a reusable workflow through a conversation: you can explain the steps, add a template or reference file, and refine the instructions as you go. The written example below uses a Document Summary plugin that turns a document into an overview, key points, and open questions. You can adapt the same steps to another task.



[A plugin creation example showing an initial request and Plugin Creator’s first response, at twice the original speed.](https://cdn.openai.com/devhub/docs/codex/build-plugins/create-plugin-2x-hq.webm)



This recording shows an initial plugin request and Plugin Creator’s first response. The written examples below use a separate workflow.

### Step 1: Mention Plugin Creator

Start a conversation in Chat or ChatGPT Work. Type **@**, search for **Plugin Creator**, and select it from the menu.

### Step 2: Describe the workflow

A good creation prompt gives Plugin Creator a practical brief:

- **Purpose:** Name the recurring task and when you’ll use the plugin.
- **Inputs:** Describe the information you’ll provide and how it should use each attached file.
- **Output:** Say who the result is for, and specify its format, length, and tone. Include an example if you have one.
- **Rules:** Explain required steps, what needs your review, and how to handle missing information. For example, ask a question or mark a field “not specified.”

Ask for instructions you can reuse with new inputs. Keep the details of an individual task, such as a particular document, labeled as an example for testing.



**Create a plugin from scratch:**

```text
Create a plugin called Document Summary. Summarize documents I provide in three sections: Overview, Key points, and Open questions. Use the attached template for the format. Base the summary only on the document. If requested information is missing, mark it as not provided. Do not edit the source document.
```

### Step 3: Add context and refine the instructions

Attach a template, example, or reference file the plugin should use. Answer Plugin Creator's questions and ask for changes until the instructions match the task. If the workflow needs an app, explain which part of the task depends on it.

Keep the first version focused on one workflow. A clear name and description will help you and your teammates recognize when to use it.

### Step 4: Review and finish creating the plugin

Follow Plugin Creator's prompts to finish. Review the plugin's name, description, instructions, and reference material before relying on it.

New workspace plugins start private so you can test them before sharing.

## Include apps in your plugin

Apps connect ChatGPT to other services, such as file storage or project management tools. Depending on the app and its enabled features, ChatGPT can search or read information and may be able to take actions, such as creating a document or updating a record. Skills describe how to do the work; apps provide the information or actions it needs.

Apps are optional. Document Summary can work with text you paste or a file you attach. Include an app if you want the workflow to retrieve a document from another service or perform a supported action there.

### Find apps available to you

Browse in the workspace where you plan to create and use the plugin:

1. Open **Plugins** in ChatGPT. Search for the service you want to use, or browse the tab with your workspace’s name.
2. Open a plugin’s details and review its **Apps** section. A plugin may be named after the service it connects to, but some plugins contain only skills.
3. Check the included app’s capabilities and connection status. Follow **Connect** prompts when required. If it shows **Disabled by admin** or **Admin approval required**, ask your workspace admin about access.

If your account shows **Apps** instead of **Plugins**, browse available connections there. Seeing a plugin in the directory does not mean every included app is ready to use.

Note the app’s name and what it supports, then tell Plugin Creator how you want to use it. For more on browsing and setup, see [Plugins](https://learn.chatgpt.com/docs/plugins#use-and-install-plugins).

### Add an app to your workflow

When creating or editing a plugin:

1. **Choose an available app.** Use an app your workspace allows and that you have permission to use. If it is unavailable, ask your workspace admin about access.
2. **Explain its job.** Tell Plugin Creator which app to include, what information to read or action to take, and what you want to review first.
3. **Connect and check.** Follow any setup prompts and review the requested permissions. You may need to sign in; some apps use an administrator-managed connection. Review the finished plugin’s apps, then test with information you can already access.

In the example below, replace **[app name]** with an app your workspace allows.



**Include an app:**

```text
Include [app name] in Document Summary, if it’s available to me. Read the document I link to and draft the Overview, Key points, and Open questions in chat. Keep the rule about marking missing information. Do not create or edit files in the app. If you cannot access the document, ask me to attach it.
```

Including an app does not grant new access. Your workspace’s app and action settings, connection permissions, and access in the source service still apply. Teammates who use the plugin also need the required app access and connection setup.

### Connect a custom MCP server

If an existing app doesn’t cover your workflow, [connect your tools with a custom MCP server](https://learn.chatgpt.com/docs/extend/mcp#build-an-mcp-plugin). Use Plugin Creator and Sites to build a plugin that connects to your system.

## Test your plugin

Install the plugin if prompted, then start a new conversation. Select it with an **@ mention** and give it a familiar task. For Document Summary, provide a document you know well and ask for a summary.

Check that the result follows your format, uses the right reference material, and identifies missing information. Then try a document with missing or unclear details and check that the summary identifies those gaps.

If the plugin uses an app, check that it can access the information or actions the task requires. If you plan to use it in both Chat and Work, test it in each. Available tools and apps can differ.

Keep a few example prompts to reuse after making changes.



> Illustration: Create a plugin, test it with a real example, edit its instructions or files, and test again. Return to editing and retesting as needed, then share after reviewing the results.



_Test before sharing, and repeat your checks after an update._

## Edit an existing plugin

### Step 1: Open the plugin for editing

Open **Plugins**, select the plugin you want to change, and choose **Edit Plugin**. This opens a conversation for updating it.

### Step 2: Describe what should change

A good editing prompt names the behavior or reference file to update, describes the desired change, and identifies what to preserve. If a result missed the mark, include that result and explain what you expected. Ask for a sample using familiar inputs so you can compare before and after.

Make clear whether you want to update the plugin’s reusable instructions or revise a single result. When replacing a reference file, name the old file and explain how to use the new one.

For example, to change the output:



**Update the output:**

```text
Update Document Summary so Key points appears in a table with Point and Source columns. In Source, identify the supporting passage or section when available. Keep Overview, Open questions, and the rule about marking missing information. Show me a sample result from this document.
```

To replace reference material:



**Replace reference material:**

```text
Replace the existing summary template with the attached revised template. Keep the other reference files and instructions unchanged. Tell me what you changed, then help me test it with this document.
```

### Step 3: Review the update

Review the revised instructions and files, then follow the prompts to complete the update. Check that the requested changes are present and that information you still need remains intact.

### Step 4: Test again

Open a new conversation and repeat your saved test prompts. Check the updated behavior and the parts of the workflow you intended to preserve. If other people use the plugin, ask a teammate to try a representative task before the wider team relies on the change.

## Share the plugin with your team

When the plugin is ready, use its sharing settings to choose the intended people or groups. Sharing requires **Share plugins** permission. Adding it to the workspace directory requires **Publish plugins to workspace** permission.

Sharing and installation are separate. Recipients need to install the plugin unless an admin has already installed it for them. If the workflow uses an app, each person also needs the required app access and any account connection the app requires.

Include a sample prompt with the plugin link and let teammates know who maintains it. See [Plugins](https://learn.chatgpt.com/docs/plugins) for more on installation and use.

## If you cannot create or edit a plugin

Check that you are in the intended workspace. If the create option or plugin editor is missing, ask your workspace admin to confirm that the experience is available and that you have the access needed for the task.

If a teammate can open the plugin but cannot use it, check plugin installation, workspace permission to use plugins, and access to required apps separately. Admins can review [Plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors).




## Continue with the builder documentation

For custom integrations or development with plugin files, see [Package your plugin](https://developers.openai.com/plugins/build/plugins). The [developer documentation](https://developers.openai.com/plugins/) covers building skills and MCP servers, [extensions](https://developers.openai.com/plugins/build/extensions), testing, and public submission.

For workspace distribution through GitHub, see [Import and sync plugins from GitHub](https://learn.chatgpt.com/docs/enterprise/plugin-management).