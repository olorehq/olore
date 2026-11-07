# Record & Replay

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Record & Replay is available on macOS. Computer Use must also be available and
  enabled.

Record & Replay lets you demonstrate a workflow on your
Mac and turn it into a reusable skill. Use it when the workflow is repetitive,
depends on your preferences, or is easier to show than to describe in a prompt.

For example, you might record how you file an expense, book a parking space,
create a correctly configured issue, publish a video, or download a recurring
report. ChatGPT or Codex can package the pattern into a skill that you can use
again with Computer Use, browser actions, connected plugins, or a combination
of them.

## Before you start

Pick a workflow that you already know how to complete. Record & Replay works
best when the steps are stable and the success criteria are clear.

## Start a recording

<WorkflowSteps>

1. In the ChatGPT desktop app, select ChatGPT and turn on Work in the switcher, or select Codex. Then open **Plugins**.
2. Open the **+** menu.
3. Select **Record a skill**.
4. Review the suggested prompt, add any helpful context, and submit it.
5. When the chat asks for permission to record your actions, approve the
   request once you are ready to demonstrate the workflow.
6. Perform the workflow on your Mac.
7. When you are done, stop recording from the menu bar or overlay, or tell the
   chat that you are done.

</WorkflowSteps>

During recording, ChatGPT or Codex observes the actions and window content
needed to learn the workflow. Recording continues until you stop it. Keep the
recording focused on the task you want the skill to teach.

After you stop recording, ChatGPT or Codex inspects the captured workflow and
drafts a skill. The skill explains when to use the workflow, what inputs it
needs, what steps to follow, and how to verify the result. You can also ask for
further refinements.

## Replay the workflow

Start a new ChatGPT or Codex chat and ask it to use the generated skill. Give
it the values that are different this time, such as the file to upload, the
issue to create, or the date range for the report.

The product uses the skill as reusable context for the task. It can then
complete the workflow with the tools available in the current environment,
including Computer Use, browser actions, and installed plugins.

## Tips for better recordings

- Keep the demonstration short and complete.
- State your goal and any specific inputs that might vary between
  skill uses before you start recording.
- Use realistic inputs, but avoid secrets and sensitive data.
- Refine the skill after recording to call out hidden preferences that matter,
  such as naming conventions, field defaults, or decision points.
- Stop recording when the workflow is complete instead of continuing into
  unrelated cleanup.

## When to build another plugin

Record & Replay is a fast way to create a skill from a demonstrated workflow.
If you want to distribute a separate stable package across a team, bundle
multiple skills, include connectors, add MCP servers, or manage install
metadata, package that workflow as its own plugin. See
[Build plugins](https://developers.openai.com/plugins/build/plugins).

## Troubleshooting

### I don't see Record & Replay

If your organization manages Codex with `requirements.toml`, the
`[features].computer_use` requirement controls Record & Replay too. Setting
`computer_use = false` makes both features unavailable.