# Codex Cloud

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

## Run coding tasks in the cloud

Give Codex coding tasks to work through in the cloud, from investigating bugs to building features. Review changes and continue from the web, mobile, or desktop app.

> Illustration: A published cloud environment beside a new task composer with the same environment selected

### Start here

- [Get started](#getting-started)

### Why use Codex Cloud

- **Start with your project:** Choose repositories. Codex inspects the project, works through setup, and asks you for missing details or access.
- **Keep work moving:** Start tasks from a published environment. Each task has its own workspace and can keep working while your computer is asleep.
- **Review the work:** Inspect changed files and check results, request follow-up changes, and commit or open a pull request when you're ready.

## Getting started

**Get started with Codex Cloud.**

Create a cloud environment with the repositories, tools, and access your project needs, or select an existing one. Then start a task.

### 1. Open ChatGPT

Open ChatGPT on the web, mobile, or in the [desktop app](https://learn.chatgpt.com/docs/app), then sign in with your ChatGPT account.

### 2. Create or select an environment

On the web or in the desktop app, choose Work in > Cloud and open Select environment. On mobile, open Codex. Select an existing environment to begin working. To create a new one, use the web or desktop app and select [Create environment](https://learn.chatgpt.com/docs/environments/cloud-environments#create-and-publish-an-environment) and continue below.

### 3. Let Codex prepare your project

Choose your GitHub repositories and select Get started. Connect GitHub if prompted. Codex inspects your repositories, installs dependencies and tools, and tests the workflow. Provide any missing access or information when asked.

### 4. Review and publish

For a new environment, review the setup and test results, save changes, and select Publish. Wait for Environment published.

### 5. Start a task

After publishing a new environment, select Start a new task. If you selected an existing environment, you can start right away. Describe your task and send it. Review the changes and test results, request follow-ups, and commit or open a pull request when ready.

### Next steps

- [Configure cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments)
- [Configure internet access](https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services)
- [Set up environment variables and network secrets](https://learn.chatgpt.com/docs/environments/cloud-environments#configure-environment-variables-and-network-secrets)
- [Understand saved state](https://learn.chatgpt.com/docs/environments/cloud-environments#reuse-and-update-saved-state)
- [Use ChatGPT in Slack](https://learn.chatgpt.com/docs/third-party/slack)

## See what Codex Cloud can do

Run coding tasks with your project tools and service access, then review the results.

- [Prepare your development workflow](https://learn.chatgpt.com/docs/environments/cloud-environments#create-and-publish-an-environment): Let Codex inspect your repositories and prepare their dependencies and tools. Review the checks before publishing.
- [Reuse your project setup](https://learn.chatgpt.com/docs/environments/cloud-environments#reuse-and-update-saved-state): Reuse your repositories, dependencies, and tools across tasks. Each task has its own workspace. Update the setup as your project changes.
- [Connect your tools and services](https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services): Give Codex access to the package registries, APIs, and private services your project needs. Configure network access and supply credentials in the environment settings.

## Use Codex Cloud when…

- [Work should run remotely](https://learn.chatgpt.com/docs/environments/cloud-environments): Give Codex a cloud environment with the repositories and tools it needs.
- [Several tasks need the same setup](https://learn.chatgpt.com/docs/environments/cloud-environments): Start tasks from a published environment while keeping each task's working state separate.
- [Your workflow needs service credentials](https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services): Use network secrets for allowed HTTPS services and limit the environment's network destinations.
- [Start cloud work from the CLI](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-codex-cloud): Start a task from your terminal, or list recent cloud chats and check their status.