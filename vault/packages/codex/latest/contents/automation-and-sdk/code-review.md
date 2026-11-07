# Code review

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use ChatGPT or Codex to understand code changes, investigate potential issues,
and prepare review feedback.

<ContentModeSwitch group="codex-surface" ids="app,web">

## Pull request reviews

The Code Review plugin shows a pull request's description, changed files,
comments, and checks. Use it to investigate potential issues before approving.

GitHub code review is generally available. GitLab merge request support in
Code Review is in preview. To trigger cloud reviews from GitLab with
`@codex review` or automatic merge request reviews, see
[Review GitLab merge requests with Codex](https://learn.chatgpt.com/docs/third-party/gitlab).

For repository-triggered reviews, see the [GitHub integration
guide](https://learn.chatgpt.com/docs/third-party/github) and [Codex Cloud (Legacy) environment
setup](https://learn.chatgpt.com/docs/environments/cloud-environment).

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

The desktop app includes Code Review. You can pin it to the app
sidebar from your installed plugins.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,web">

### View a pull request

1. Open **Code Review** from the sidebar.
2. Connect your source account when prompted. Use an account with access to the
   repository you want to review.
3. Select a pull request from the sidebar, or enter its link in the search field.
4. Read **Summary** for the description, activity, comments, and checks. Open
   **Changes** to inspect changed files and comments alongside the diff.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

### Find reviews that need attention

Use your personal inbox to find GitHub pull requests across repositories.
Choose **Assigned to me** for reviews requested from you, **Assigned to my
team** for team requests, or **Authored by me** to return to your own changes.
Check the review status, then open the pull request to inspect feedback and checks.

To return to a review later, select the pin in its toolbar. The pull request
appears under **Pinned** in the sidebar.

### Inspect changed files and related pull requests

In **Changes**, select **Mark as viewed** on a file after reviewing it. Select the
control again to clear the marker. Viewed markers apply to the displayed
revision.

For changes split across dependent pull requests, use **Stack** in **Summary**
to open a related pull request and inspect its diff, comments, and checks.
This section appears when Code Review finds a stack of open pull requests.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,web">

### Read an automatic cloud review

With the ChatGPT Codex connector, required repository permissions, and automatic
reviews enabled, Codex can review a GitHub pull request before you open it.
Comments appear on GitHub and in Code Review.

Cloud review doesn't require you to create or manage a cloud environment.
For connection requirements, repository settings, and reviews triggered with
`@codex review`, see [Use Codex in GitHub](https://learn.chatgpt.com/docs/third-party/github).

Check the review findings against the diff. Automatic cloud reviews are
separate from reviews you start in the pull request's chat.

### Ask questions about the change

In the pull request's chat, describe the expected behavior and ask Codex to
explain or investigate the change.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

Select **Review with Codex** to start a review in a new chat. If you're viewing
the pull request beside an existing chat, use that chat to ask about the change.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,web">

Use installed skills and connected sources to give Codex your team's review
guidelines or design documents. Ask it to summarize the change and explain
the risks, then verify the context and code it references.

For example, a pull request adds **Open** and **Closed** filters to an issue
board. You expect **All** to remain the default and an empty state when no
issues match:

```text
Walk me through this pull request. Focus on the default filter and what
happens when there are no matching issues. All should remain the default.
```

Ask for evidence:

```text
Show me the code path and tests for the no-matches case. Explain what is
covered and what still needs verification.
```

Check the referenced diff and tests against the expected behavior.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

Select a finding to inspect its explanation and relevant lines in **Changes**.
Check it against the latest diff, expected behavior, and tests before deciding
it needs a fix. Use the review chat to stop a running review.

### Customize your review

Select the **Review instructions** gear next to **Review with Codex**. You can
also edit these instructions in **Settings** > **Code Review**.

Give Codex criteria and a reporting format that apply across your reviews,
for example:

```text
Start with a short summary. Prioritize behavior changes, data loss, and
missing edge-case tests. For each finding, explain the triggering input,
expected behavior, and actual behavior. Use our team's concise review style.
```

These instructions apply to reviews you start with **Review with Codex** across
repositories. Changes made during a running review apply to your next review.
Use the pull request chat for questions specific to one change.

Optionally, select **Comic book**, **Visualization**, or **PDF** to add a suggested
instruction for explaining the change in that format. Edit the text as needed,
then select **Save** or **Run review**.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,web">

### Share feedback and follow up

Reviewing a pull request in chat doesn't post comments, approve it, or merge it.
You choose which findings to share.

Once you've verified a concern, ask Codex to help prepare a review comment:

```text
Using the team review guidelines we discussed, draft a comment describing
the no-matches behavior we verified, what should happen instead, and the test
that would cover it. Keep the comment as a draft.
```

Check the draft's file and line references before posting. Keep drafts in chat
until you're ready: posting in **Summary** or **Changes** sends the comment to
the source provider immediately, without waiting for **Submit review**.

Use **Submit review** to choose **Comment**, **Approve**, or **Request changes**
and send your review to the source provider. Check the selected decision and
review comment before submitting.

If you're the author, return to your pull request and ask Codex to address
specific feedback. Inspect the resulting changes and run the relevant tests.
Before approving or merging, check the latest revision, checks, and
outstanding feedback.

Editing pull request descriptions with attached images isn't supported in
Code Review. Open the pull request in GitHub to edit those descriptions.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

### Continue in a chat

When **Summary** shows **Threads**, select a linked chat to return to that
conversation. These are your chats associated with the pull request.

In Codex, select **Fix** in **Checks** on an open pull request to attach failing
checks to the chat. This prepares a message without sending it. Review or add
your prompt, then send it to ask Codex to investigate. Inspect the resulting
changes and rerun the relevant tests before pushing a fix.

Available diagnostics depend on the check provider. For third-party CI,
Codex can use the status and output reported to GitHub.

</ContentModeSwitch>

<a id="start-a-review"></a>

## Review local changes

Codex's built-in `/review` command reviews changes in your Git checkout, while
the Code Review plugin works with pull requests.
Choose your client for the steps that apply.

<ContentModeSwitch group="codex-surface" id="web">

In ChatGPT Work, upload the code you want reviewed or make it available through
an installed source [plugin](https://learn.chatgpt.com/docs/plugins). In your prompt, identify the pull
request, branch, commit, files, and review criteria.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

### Review in the app

Open the review pane to understand what changed, give line-specific feedback,
and decide what to stage, revert, commit, or push.

To ask Codex to review the changes, type `/review` in the composer. Choose
**Review against a base branch** or **Review uncommitted changes**. Codex reports
prioritized findings without changing your working tree.

The review pane requires a project inside a Git repository. If your project
isn't a Git repository yet, the app prompts you to create one.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

Type `/review` to open the CLI review presets. Codex starts a dedicated reviewer
that reads the selected diff and reports prioritized, actionable findings
without changing your working tree.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

Type `/review` in the IDE extension composer. Choose **Review against a base
branch** or **Review uncommitted changes**. Codex reports prioritized findings
without changing your working tree.

The `/review` command appears only when the open project is inside a Git
repository.

</ContentModeSwitch>

## Choose a review scope

<ContentModeSwitch group="codex-surface" id="web">

Name the pull request, branch, commit, or files to inspect in your prompt. To
review local files that aren't available through an installed source plugin,
upload them to the chat.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

### What changes it shows

The review pane reflects the state of your Git repository, not just what Codex
edited. It includes changes made by Codex, changes you made yourself, and any
other uncommitted changes in the repository.

By default, the review pane shows **Unstaged** changes. Use **Staged** for the
Git index, **Commit** for a selected commit, **Branch** for the diff against your
base branch, or **Last turn** for the most recent assistant turn.

### Review multiple repositories

When a [local project includes multiple folders](https://learn.chatgpt.com/docs/projects#use-local-projects-for-folders-and-codebases)
backed by different Git repositories, the review pane can show changes from each
repository. Open the repository selector in the review header to inspect
another repository and see the lines added or removed without leaving the
current review pane.

Choose **Last turn** to see the assistant's latest changes across the attached
repositories. The repository selector shows **All repos** for that view. Other
review scopes, such as **Unstaged**, **Staged**, and **Branch**, apply to the
repository you select.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

Choose one of these `/review` scopes:

- **Review against a base branch** finds the merge base and reviews your branch diff.
- **Review uncommitted changes** includes staged, unstaged, and untracked files.
- **Review a commit** reviews the exact change set for a selected commit.
- **Custom review instructions** focuses the review on criteria you provide.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

Choose one of these `/review` scopes:

- **Review against a base branch** compares your current branch with a branch you select.
- **Review uncommitted changes** reviews the changes in your working tree.

</ContentModeSwitch>

## Work with review results

<ContentModeSwitch group="codex-surface" id="web">

Review findings appear in the web chat. Ask for evidence, request a
narrower follow-up review, or ask ChatGPT to prepare revised files.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

### Code review results

Review findings appear as inline comments in the review pane.

Reviews run in the current chat by default. Under **Settings** > **General** >
**Code review**, choose **Detached** to start a separate review chat. See
[developer settings](https://learn.chatgpt.com/docs/developer-settings?surface=app#app-code-review).


  

> Illustration: Inline code review comments displayed in the review pane




</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

The review appears as a turn in the transcript. Set `review_model` in
`config.toml` when you want reviews to use a different model from the current
session.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

By default, the review runs in the current chat. Set `chatgpt.reviewDelivery` to
`detached` when you want `/review` to start a separate review chat. See the
[IDE extension settings reference](https://learn.chatgpt.com/docs/developer-settings?surface=ide#ide-editor-settings-reference).

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="web">

If you ask ChatGPT to prepare revised files, the tools and workspace
permissions available to the chat still apply.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

If you ask Codex to apply the fixes it finds, your normal [sandbox and approval
settings](https://learn.chatgpt.com/docs/sandboxing) apply.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

## Navigating the review pane

- Clicking a file name typically opens that file in your chosen editor. You
  can choose the default editor in [developer settings](https://learn.chatgpt.com/docs/developer-settings?surface=app#app-project-and-terminal-behavior).
- Clicking the file name background expands or collapses the diff.
- Clicking a single line while holding <kbd>Command</kbd> pressed opens the line in your chosen editor.
- If you're happy with a change, you can [stage it or revert changes](#staging-and-reverting-files) you don't want.

## Inline comments for feedback

Inline comments let you attach feedback directly to specific lines in the diff.
This is often the fastest way to guide Codex to the right fix.

To leave an inline comment:

1. Open the review pane.
2. Hover over the line you want to comment on.
3. Select the **+** button that appears.
4. Write your feedback and submit it.
5. After you finish leaving feedback, send a message back to the chat.

Because comments are line-specific, Codex can respond more precisely than with
a general instruction.

Codex treats inline comments as review guidance. After leaving comments, send a
follow-up message that makes your intent explicit, for example, “Address the
inline comments and keep the scope minimal.”

## Staging and reverting files

The review pane includes Git actions so you can shape the diff before you
commit.

You can stage, unstage, or revert changes at these levels:

- **Entire diff**: Use the action buttons in the review header, such as **Stage all** or **Revert all**.
- **Per file**: Stage, unstage, or revert an individual file.
- **Per hunk**: Stage, unstage, or revert a single hunk.

Use staging when you want to accept part of the work, and revert when you want
to discard it.

### Staged and unstaged states

Git can represent both staged and unstaged changes in the same file. When that
happens, the pane can show the same file in both views. That's normal Git
behavior.

</ContentModeSwitch>