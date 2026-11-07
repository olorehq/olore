# Codex environments

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

In the ChatGPT desktop app, open the ChatGPT dropdown and select **Codex**.
When starting a Codex chat, choose where it runs:

- **Local**: work directly in your current project directory.
- **Worktree**: isolate changes in a Git worktree. [Learn more](https://learn.chatgpt.com/docs/environments/git-worktrees).
- **Cloud**: start a remote task in its own workspace from a published,
  reusable environment. See [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments)
  to prepare and publish the repositories, dependencies, and tools your tasks need.

Both **Local** and **Worktree** chats run on your computer.
Use **Work in** to choose **This computer** or **Cloud**. For a local Git project,
the separate **Worktree** control lets you isolate changes from your current checkout.

A cloud task requires a published environment you can access. If none is available,
create one on the web or in the desktop app, or ask a workspace admin for access
to a shared environment. Selecting an environment is separate from creating or
publishing it. Shared access lets you use the environment; it doesn't grant
permission to edit it.

You can also start and continue cloud tasks on the web or on mobile. On mobile,
open **Codex** and select a published environment.

To create an environment, start a new task on the web or in the desktop app.
Choose **Work in** > **Cloud**, open **Select environment**, then select
**Create environment**. Codex inspects your selected repositories and helps
prepare and test their setup before you publish it.

Each Cloud task has its own working files. File changes in a task don't update
the reusable environment. To change the starting point for future tasks, update
and republish the environment's setup.

A cloud task uses the files and services available in its cloud environment.
Your computer's local files, running processes, browser sign-ins, and VPN access
aren't automatically transferred to it.

For more terms, see [Codex concepts](https://learn.chatgpt.com/docs/prompting).



  

> Illustration: Desktop composer with the Work in menu open to This computer and Cloud, and a separate Worktree option