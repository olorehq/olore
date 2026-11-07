# Local environments

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Local environments let you configure setup steps for worktrees as well as common actions for a project.

Local environments are available only in Codex in the ChatGPT desktop app.
  Select **Codex** before you configure or use a local environment.

You configure your local environments through the [ChatGPT desktop app settings](codex://settings) pane. You can check the generated file into your project's Git repository to share with others.

Codex stores this configuration inside the `.codex` folder at the root of your
project. If your repository contains more than one project, open the project
directory that contains the shared `.codex` folder.

## Setup scripts

Since worktrees run in different directories than your local chats, your project might not be fully set up and might be missing dependencies or files that aren't checked into your repository. Setup scripts run automatically when Codex creates a new worktree at the start of a new chat.

Use this script to run any command required to configure your environment, such as installing dependencies or running a build process.

For example, for a TypeScript project you might want to install the dependencies and do an initial build using a setup script:

```bash
npm install
npm run build
```

If your setup is platform-specific, define setup scripts for macOS, Windows, or Linux to override the default.

## Actions

<section class="feature-grid">



Use actions to define common tasks like starting your app's development server or running your test suite. These actions appear in the ChatGPT desktop app top bar for quick access. The actions run within the app's [integrated terminal](https://learn.chatgpt.com/docs/integrated-terminal).

Actions are helpful to keep you from typing common actions like triggering a build for your project or starting a development server. For one-off quick debugging you can use the integrated terminal directly.





  

> Illustration: Project actions list shown in ChatGPT desktop app settings




</section>

For example, for a Node.js project you might create a "Run" action that contains the following script:

```bash
npm start
```

If the commands for your action are platform-specific, define platform-specific scripts for macOS, Windows, and Linux.

To identify your actions, choose an icon associated with each action.

## Use built-in Git tools







In Codex, the ChatGPT desktop app provides common Git controls alongside each
local project and worktree. The diff pane shows changes in the current checkout
and lets you add inline comments for Codex to address. You can stage or revert individual
chunks, stage or revert entire files, commit changes, push a branch, and create
a pull request without leaving the app.

Use the [integrated terminal](https://learn.chatgpt.com/docs/integrated-terminal) for Git
operations that aren't exposed in the app. To isolate concurrent changes from
your local checkout, start the task in a [worktree](https://learn.chatgpt.com/docs/environments/git-worktrees).






> Illustration: Codex environment summary panel