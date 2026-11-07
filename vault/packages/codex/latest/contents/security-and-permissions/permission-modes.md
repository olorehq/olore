# Permissions

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

{/* vale Microsoft.FirstPerson = NO */}

## Permission modes

Permissions control how ChatGPT (in the desktop app) and Codex (in the CLI or IDE) handle local actions, such as editing files, running commands, and using the internet. The mode you choose sets the boundary
for what ChatGPT can do on its own and what needs review.

For most work, start with **Ask for approval**. It lets ChatGPT work within the
current workspace and pauses before reaching beyond that boundary.

## Choose a mode

Open the permissions control below the composer and select **Approve for me**
to send eligible approval requests to automatic review. Check the selected
mode for the current chat; having a mode available doesn't mean it's selected.



> Illustration: Interactive permission mode example, initially showing Approve for me selected and Full access enabled.



Available modes depend on your app version, execution environment, local
  configuration, and your organization's requirements. A mode can be disabled or
  omitted when it isn't available. Managed requirements can also restrict **Ask
  for approval**.

If **Approve for me** is missing or disabled, see
[permission troubleshooting](https://learn.chatgpt.com/docs/reference/troubleshooting#approve-for-me-is-missing-or-disabled).

## How permissions work

Two controls work together:

- The **sandbox** defines which files and network resources ChatGPT can access.
- **Approvals** determine when ChatGPT pauses before an action or sends the
  request to automatic review.

Changing who reviews a request doesn't expand the sandbox. For example,
**Approve for me** keeps the same workspace boundary as **Ask for approval**;
it sends requests to cross that boundary to automatic review.

Use the permissions control below the composer in the ChatGPT desktop app or
IDE extension.

In the CLI, enter `/permissions`. For technical details, see
[Sandbox](https://learn.chatgpt.com/docs/sandboxing), [automatic review](https://learn.chatgpt.com/docs/sandboxing/auto-review), or
[permission profiles](https://learn.chatgpt.com/docs/permissions).