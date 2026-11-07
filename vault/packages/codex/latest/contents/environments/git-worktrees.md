# Worktrees

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Worktrees let Codex run multiple independent chats in the same project without interfering with each other. The repository, worktree, and commands remain on the computer or remote development environment that contains the project. You can work directly in the ChatGPT desktop app, or use [Codex](https://learn.chatgpt.com/docs/mobile) in the ChatGPT mobile app to start, guide, approve, and review worktree chats on a connected computer.

For Git repositories, [scheduled tasks](https://learn.chatgpt.com/docs/automations) can run on dedicated background worktrees so they don't conflict with your ongoing work. In non-version-controlled projects, scheduled tasks run directly in the project directory. You can also start chats in a worktree manually and use Handoff to move a chat between Local and Worktree.

Worktrees don't run locally on your phone. The ChatGPT mobile app controls
  Codex on your connected computer, where the repository and worktree remain, or
  in the remote development environment that computer uses. The desktop-specific
  instructions below apply on the connected computer.

## What's a worktree

Worktrees only work in projects that are part of a Git repository since they use [Git worktrees](https://git-scm.com/docs/git-worktree) under the hood. A worktree allows you to create a second copy ("checkout") of your repository. Each worktree has its own copy of every file in your repo but they all share the same metadata (`.git` folder) about commits, branches, etc. This allows you to check out and work on multiple branches in parallel.

## Terminology

- **Local checkout**: The repository that you created. Sometimes just referred to as **Local** in the ChatGPT desktop app.
- **Worktree**: A [Git worktree](https://git-scm.com/docs/git-worktree) that was created from your local checkout in the ChatGPT desktop app.
- **Handoff**: The flow that moves a chat between Local and Worktree. Codex handles the Git operations required to move your work safely between them.

## Why use a worktree

1. Work in parallel with Codex without disturbing your current Local setup.
2. Queue up background work while you stay focused on the foreground.
3. Move a chat into Local later when you're ready to inspect, test, or collaborate more directly.

## Getting started

Worktrees require a Git repository. Make sure the project you selected lives in one.

<WorkflowSteps variant="headings">

1.  Select "Worktree"

    In the new chat view, select **Worktree** under the composer.
    Optionally, choose a [local environment](https://learn.chatgpt.com/docs/environments/local-environment) to run setup scripts for the worktree.

2.  Select the starting branch

    Below the composer, choose the Git branch to base the worktree on. This can be your `main` / `master` branch, a feature branch, or your current branch with unstaged local changes.

3.  Submit your prompt

    Submit your prompt, and Codex creates a Git worktree based on the branch you selected. By default, Codex works in a [detached HEAD](https://git-scm.com/docs/git-checkout#_detached_head) state.

4.  Choose where to keep working

    When you're ready, you can either keep working directly on the worktree or hand the chat off to your local checkout. Handing off to or from Local moves your chat _and_ code so you can continue in the other checkout.

</WorkflowSteps>

## Working between Local and Worktree

Worktrees look and feel much like your local checkout. The difference is where they fit into your flow. You can think of Local as the foreground and Worktree as the background. Handoff lets you move a chat between them.

Under the hood, Handoff handles the Git operations required to move work between two checkouts safely. This matters because **Git only allows a branch to be checked out in one place at a time**. If you check out a branch on a worktree, you **can't** check it out in your local checkout at the same time, and vice versa.

In practice, there are two common paths:

1. [Work exclusively on the worktree](#option-1-working-on-the-worktree). This path works best when you can verify changes directly on the worktree, for example because you have dependencies and tools installed using a [local environment setup script](https://learn.chatgpt.com/docs/environments/local-environment).
2. [Hand the chat off to Local](#option-2-handing-a-chat-off-to-local). Use this when you want to bring the chat into the foreground, for example because you want to inspect changes in your usual IDE or can run only one instance of your app.

### Option 1: Working on the worktree







If you want to stay exclusively on the worktree with your changes, turn your worktree into a branch using the **Create branch here** button in the chat header.

From here you can commit your changes, push your branch to your remote repository, and open a pull request on GitHub.

You can open your IDE to the worktree using the "Open" button in the header, use the integrated terminal, or anything else that you need to do from the worktree directory.





  

> Illustration: Worktree chat view with branch controls and worktree details







Remember, if you create a branch on a worktree, you can't check it out in any other worktree, including your local checkout.

<a id="option-2-handing-a-thread-off-to-local"></a>
<a id="option-2-handing-a-chat-off-to-local"></a>
<a id="option-2-handing-a-task-off-to-local"></a>

### Option 2: Handing a chat off to Local







If you want to bring a chat into the foreground, select **Hand off** in the chat header and move it to **Local**.

This path works well when you want to read the changes in your usual IDE window, run your existing development server, or validate the work in the same environment you already use day to day.

Codex handles the Git steps required to move the chat safely between the worktree and your local checkout.

Each chat keeps the same associated worktree over time. If you hand the chat back to a worktree later, Codex returns it to that same background environment so you can pick up where you left off.





  

> Illustration: Handoff dialog moving a chat from a worktree to Local







You can also go the other direction. If you're already working in Local and want to free up the foreground, use **Hand off** to move the chat to a worktree. This is useful when you want Codex to keep working in the background while you switch your attention back to something else locally.

Since Handoff uses Git operations, any files that are part of your `.gitignore` file won't move with the chat unless Codex copies them into a local managed worktree with `.worktreeinclude`.

## Advanced details

<a id="codex-managed-and-permanent-worktrees"></a>

### Codex-managed worktrees

By default, chats use a Codex-managed worktree. These are meant to feel lightweight and disposable. A Codex-managed worktree is typically dedicated to one chat, and Codex returns that chat to the same worktree if you hand it back there later.

### How Codex manages worktrees for you

Codex creates worktrees in `$CODEX_HOME/worktrees`. The starting commit is the `HEAD` commit of the branch selected when you start your chat. If you chose a branch with local changes, Codex applies the uncommitted changes to the worktree as well. The worktree isn't checked out as a branch. It's in a [detached HEAD](https://git-scm.com/docs/git-checkout#_detached_head) state. This lets Codex create several worktrees without polluting your branches.

### Copy ignored local files into managed worktrees

Local Codex-managed worktrees start from a Git checkout, so tracked files are already present. If your repository ignores local setup files that a new worktree needs, add a `.worktreeinclude` file to the repository root and list the ignored paths or `.gitignore`-style patterns to copy when Codex creates a managed worktree.

Use this for files Git intentionally ignores, such as `.env`, `.env.local`, or `config/secrets.json`. Codex only copies ignored files that match `.worktreeinclude`; it doesn't copy other local files that Git doesn't track. Don't list tracked files.

Codex automatically copies an ignored `AGENTS.override.md` into local managed worktrees, so you don't need to list it in `.worktreeinclude`.

```text
# .worktreeinclude
.env
.env.local
config/secrets.json
```

Codex skips source symlinks and won't overwrite files that already exist in the new checkout. This behavior applies to local ChatGPT desktop app managed worktrees, not remote worktrees or Git worktrees you create yourself from the command line.

### Branch limitations

Suppose Codex finishes some work on a worktree and you choose to create a `feature/a` branch on it using **Create branch here**. Now, you want to try it on your local checkout. If you tried to check out the branch, you would get the following error:

```text
fatal: 'feature/a' is already used by worktree at '<WORKTREE_PATH>'
```

To resolve this, you would need to check out another branch instead of `feature/a` on the worktree.

If you plan on checking out the branch locally, use Handoff to move the chat into Local instead of trying to keep the same branch checked out in both places at once.

<ToggleSection title="Why this limitation exists">
Git prevents the same branch from being checked out in more than one worktree at a time because a branch represents a single mutable reference (`refs/heads/<name>`) whose meaning is “the current checked-out state” of a working tree.

When a branch is checked out, Git treats its HEAD as owned by that worktree and expects operations like `git commit`, `git reset`, `git rebase`, and `git merge` to advance that reference in a well-defined, serialized way. Allowing multiple worktrees to simultaneously check out the same branch would create ambiguity and race conditions around which worktree’s operations update the branch reference, potentially leading to lost commits, inconsistent indexes, or unclear conflict resolution.

By enforcing a one-branch-per-worktree rule, Git guarantees that each branch has a single authoritative working copy, while still allowing other worktrees to safely reference the same commits in a detached HEAD state or on separate branches.

</ToggleSection>

### Worktree cleanup

Worktrees can take up a lot of disk space. Each one has its own set of repository files, dependencies, build caches, etc. As a result, the ChatGPT desktop app tries to keep the number of worktrees to a reasonable limit.

By default, Codex keeps your most recent 15 Codex-managed worktrees. You can change this limit or turn off automatic deletion in settings if you prefer to manage disk usage yourself.

Codex tries to avoid deleting worktrees that are still important. Codex-managed worktrees won't be deleted automatically if:

- A pinned chat is tied to it
- The chat is still in progress

Permanent worktrees created in earlier versions remain available and protected from automatic cleanup. You can no longer create permanent worktrees from the project menu.

Codex-managed worktrees are deleted automatically when:

- You archive the associated chat
- Codex needs to delete older worktrees to stay within your configured limit

Before deleting a Codex-managed worktree, Codex saves a snapshot of the work on it. If you open a chat after its worktree was deleted, you'll see the option to restore it.

## Frequently asked questions

<ToggleSection title="Can I control where worktrees are created?">
  Yes. Codex creates managed worktrees under `$CODEX_HOME/worktrees` by
  default. To choose another location, open **Settings > Worktrees** and change
  **Worktree root**.
</ToggleSection>

<a id="can-i-move-a-chat-between-local-and-worktree"></a>

<ToggleSection title="Can I move a chat between Local and Worktree?">
  Yes. Use **Hand off** in the chat header to move a chat between your local
  checkout and a worktree. Codex handles the Git operations needed to move the
  chat safely between environments. If you hand a chat back to a worktree later,
  Codex returns it to the same associated worktree.
</ToggleSection>

<a id="what-happens-to-chats-if-a-worktree-is-deleted"></a>

<ToggleSection title="What happens to chats if a worktree is deleted?">
  Chats can remain in your history even if the underlying worktree directory is
  deleted. For Codex-managed worktrees, Codex saves a snapshot before deleting
  the worktree and offers to restore it if you reopen the associated chat.
</ToggleSection>