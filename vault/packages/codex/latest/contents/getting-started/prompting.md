# Prompting

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

<a id="prompts"></a>

## Prompting overview

Prompting is how you tell ChatGPT what you want to know, make, or change. A prompt
can be a question, an instruction, or a goal. You don't need technical syntax or
a rigid formula. Start in your own words, review the response, and use follow-up
messages to shape the result.

A short prompt is often enough. For larger or more important tasks, include the
parts that matter:

- **Goal:** What should ChatGPT do?
- **Context:** What information or sources will help?
- **Output:** What format, length, or level of detail do you need?
- **Boundaries:** What must stay unchanged? What should ChatGPT avoid or check
  with you before it acts?

Use only the parts that help. You don't need to fill in every item or follow a
required format.

## Describe the result you need

Start with the result, not a detailed list of steps. Include the audience or
format when those details change what ChatGPT should produce.

```text
Turn these meeting notes into a short update for the project team.
Put the decisions and next steps first.
```

This prompt explains what to create and who will read it. Describe a process when
the process itself matters. Otherwise, leave ChatGPT room to search, compare
information, and adjust its approach.

<a id="context"></a>

## Add useful context

Share the information that could change the result. Add only the sources that
matter, and explain what ChatGPT should take from each one.

- Attach documents, spreadsheets, presentations, or PDF files when you want
  ChatGPT to summarize, compare, transform, or [create files for review](https://learn.chatgpt.com/docs/artifacts-viewer).
- Add a screenshot, diagram, or other [image input](https://learn.chatgpt.com/docs/image-inputs) when the
  task depends on visual context. Point out the area that matters instead of
  relying on the image alone.
- Ask ChatGPT to use [web search](https://learn.chatgpt.com/docs/web-search) when the answer depends on
  current information, and ask for sources when you need to check the result.
- Use a [project](https://learn.chatgpt.com/docs/projects) when related chats should share files,
  sources, or a local folder.

### Use connected sources

When ChatGPT has access to connected sources, name where it should look and what
it should find. You don't need to describe every search it should run.

```text
Use the latest project plan in Drive and relevant decisions and updates from
the project's Slack channel to prepare a status update.
```

Connected sources require the matching plugin, and availability can depend on
your plan and workspace settings.

### Use plugins

Plugins give ChatGPT and Codex reusable instructions and connections to tools
such as Google Drive, Gmail, Slack, and GitHub. Both products draw public
plugins from the same universal directory. Ask for the result you need and let
the active surface choose from the tools available to it. In ChatGPT, type `@`
in the composer to choose a specific plugin.

[Learn about plugins



      <Plugin />
    

    Find, install, and use plugins in ChatGPT and Codex.](https://learn.chatgpt.com/docs/plugins)

### Personalize ChatGPT

Put preferences that should apply across chats in **Settings > Personalization**
as custom instructions. Keep details that matter only to the current chat in the
prompt.

[Review personalization settings



      <Settings />
    

    Set a default personality, custom instructions, and other app preferences.](https://learn.chatgpt.com/docs/reference/settings#personalization)

## Set boundaries that prevent real problems

Boundaries are the few instructions ChatGPT needs to avoid creating extra work
or taking an action you didn't intend. Add one when changing the wrong detail
would make the result unusable, or when you want to review something before it
affects other people.

- Keep the approved dates and budget figures unchanged.
- Use only the supplied sources. Flag missing information instead of guessing.
- Keep recommendations within the stated budget.
- Prepare the message as a draft. Don't send it.

Focus on the one or two boundaries that matter most. You don't need to control
every step ChatGPT takes.

## Make the result ready to use

Tell ChatGPT how you plan to use the result. This helps it choose the right
length, level of detail, and organization.

- Make this a one-page summary a director can scan before the meeting. Put the
  decision and next steps first.
- Turn these notes into a follow-up email with the decisions, owners, and due
  dates.
- Create a clear table of planned versus actual spending and highlight any
  difference over 10%.

For important work, ask ChatGPT for a final check, such as confirming every
action item has an owner and due date or flagging information it couldn't
verify. Then review the result yourself before you use or share it.

## Improve the result with follow-up messages

Your first prompt doesn't need to be perfect. Review the result, then ask for
the specific change you want.

```text
Make the opening more direct, keep the evidence, and move the recommendation
above the background section.
```

You can add a missing source, correct the direction, ask for another option, or
change the level of detail without starting over.

### Steering and queuing

When Codex is already working, you can send another message without waiting for
the current run to finish:

- **Steer** adds the message to the current run. Use it to change direction, add
  a missing detail, or share new information.
- **Queue** saves the message for the next run. Use it for a follow-up that should
  wait until the current work finishes.

In the ChatGPT desktop app, choose the default under
[**Settings > General > Follow-up behavior**](https://learn.chatgpt.com/docs/reference/settings#general).
Queued messages appear above the composer, where you can edit, reorder, send, or
delete them. The setting also shows the shortcut for using the other behavior
for one message without changing your default.

In Codex CLI, press <kbd>Enter</kbd> while Codex is working to steer the current
turn, or press <kbd>Tab</kbd> to queue the message for the next turn. See the
[interactive shortcuts](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-interactive-shortcuts)
for details.

## Put the pieces together

For a project update that uses connected sources, a complete prompt might look
like this:

```text
Prepare a one-page project status update for Monday's leadership meeting. Use
the latest project plan in Drive and relevant decisions and updates from the
project's Slack channel.

Lead with the decisions leadership needs to make and the next steps. Summarize
progress, risks, owners, and due dates. Keep approved dates and budget figures
unchanged. Flag any conflicting or missing information, and don't send or
publish anything.

Before you finish, check that every next step has an owner and due date.
```

This prompt covers the **Goal**, **Context**, **Output**, and **Boundaries**, then
asks for a final check without spelling out every step.

## Use voice dictation

In the ChatGPT desktop app, select **Dictate** in the composer, then start
talking. ChatGPT transcribes your speech into the composer
so you can review and edit it before sending the prompt.


  

> Illustration: Voice dictation indicator in the composer with a transcribed prompt




<a id="threads"></a>
<a id="chats"></a>

## Prompting examples for Chat

Use Chat for questions, ideas, drafts, and everyday decisions. Start with the
outcome you want, then add detail only when it changes the answer.

### Understand a topic

```text
Explain how compound interest works for someone who has never invested.
Use one concrete example and define any financial terms you introduce.
```

### Draft and refine writing

```text
Draft a friendly email declining this invitation because I will be traveling.
Keep it under 120 words and leave the door open for a future event.
```

### Compare options

```text
Compare these two phone plans for one person who travels internationally twice
a year. Show the important differences in a table, then recommend one and explain
the tradeoff.
```

### Make a practical plan

```text
Plan five weekday dinners that take less than 30 minutes. Avoid peanuts, reuse
ingredients across meals, and finish with one consolidated shopping list.
```

<a id="prompting-for-work"></a>
<a id="prompting-in-work-mode"></a>

## Prompting for ChatGPT Work

Use Chat for quick questions, short rewrites, brainstorming, and lightweight
drafts. Use ChatGPT Work for tasks that draw on different sources or tools, involve a
sequence of steps, make changes, or produce a larger deliverable.

In ChatGPT Work, describe the result you need, provide the source material, name
the audience, and explain how you'll review the work. Ask ChatGPT to plan,
gather the needed information, create files, and check them before it finishes.

<a id="use-work-efficiently"></a>
<a id="use-work-mode-efficiently"></a>

### Use ChatGPT Work efficiently

ChatGPT Work is useful for time-consuming or recurring tasks, or for finished files you
can reuse. A task that uses more credits can still be worthwhile if it saves
time, improves quality, or helps you make an important decision.

Start with one result you can review:

- Include only relevant sources and limit the date range when appropriate.
- Define the audience, output format, and desired length.
- Separate required work from optional improvements or polish.
- Ask for a plan when the approach matters. Require your approval before ChatGPT
  sends, publishes, or changes information other people rely on.
- Narrow or stop the task if it starts doing work you no longer need.

Review the first result, refine the instructions, and reuse the workflow when
it works.

### Turn source material into finished files

```text
Use the attached quarterly reports to create a leadership brief and a six-slide
presentation.

The audience is the executive team. Lead with the three decisions they need to
make, distinguish reported facts from your analysis, cite each number to its
source file, and check that the brief and slides agree before you finish.
```

### Research a decision

```text
Research three customer-support platforms for a 50-person company. Compare
pricing, security, integrations, and migration effort using current sources.
Deliver a recommendation memo with links, assumptions, and the questions we
should answer before signing a contract.
```

### Coordinate a launch

```text
Create a launch plan for the attached product brief. Include the timeline,
owners, dependencies, risks, announcement draft, customer FAQ, and a checklist
for launch day. Flag any missing decisions before producing the final files.
```

For recurring work, first refine the prompt in a normal chat. After the output is
reliable, [schedule a task inside that chat](https://learn.chatgpt.com/docs/automations#schedule-a-task-inside-a-chat).
Create a standalone scheduled task instead when each scheduled run should start
a new chat.

<a id="use-editor-context"></a>

## Prompting Codex

Use Codex when you want ChatGPT to work with code, a codebase, or developer tools.
A useful Codex prompt names the behavior you want, points to the relevant code or
reproduction steps, preserves important constraints, and says how to verify the
change.

<a id="goal-mode"></a>

For a multi-step task, enter `/plan` in the app composer when you want Codex to
investigate and propose an approach before editing. When [Goal mode](https://learn.chatgpt.com/docs/long-running-work)
is available, use `/goal` after the plan to set a persistent goal. See the [app slash
commands](https://learn.chatgpt.com/docs/reference/slash-commands)
for the current command list.

### How to read these examples

Each workflow includes:

- **When to use it** and which Codex surface fits best (IDE, CLI, or cloud).
- **Steps** with example user prompts.
- **Context notes**: what Codex automatically sees vs what you should attach.
- **Verification**: how to check the output.

> **Note:** The IDE extension automatically includes your open files as context. In the CLI, mention paths explicitly, or attach files with `/mention` and `@` path autocomplete.

Codex runs local commands inside a [sandbox](https://learn.chatgpt.com/docs/sandboxing)
that limits file and network access. If a task needs to cross that boundary,
Codex follows your approval policy before continuing.

### Explain a codebase

Use this when you are onboarding, inheriting a service, or trying to reason about a protocol, data model, or request flow.

#### IDE extension workflow (fastest for local exploration)

<WorkflowSteps>

1. Open the most relevant files.
2. Select the code you care about (optional but recommended).
3. Prompt Codex:

```text
   Explain how the request flows through the selected code.

   Include:
   - a short summary of the responsibilities of each module involved
   - what data is validated and where
   - one or two "gotchas" to watch for when changing this
```

</WorkflowSteps>

Verification:

- Ask for a diagram or checklist you can verify:

```text
Summarize the request flow as a numbered list of steps. Then list the files involved.
```

#### CLI workflow (good when you want a transcript + shell commands)

<WorkflowSteps>

1. Start an interactive session:

```bash
   codex
```

2. Attach the files (optional) and prompt:

```text
   I need to understand the protocol used by this service. Read @foo.ts @schema.ts and explain the schema and request/response flow. Focus on required vs optional fields and backward compatibility rules.
```

</WorkflowSteps>

Context notes:

- You can use `@` in the composer to insert file paths from the workspace, or `/mention` to attach a specific file.

### Fix a bug

Use this when you have a failing behavior you can reproduce locally.

#### CLI workflow (tight loop with reproduction and verification)

<WorkflowSteps>

1. Start Codex at the repo root:

```bash
   codex
```

2. Give Codex a reproduction recipe, plus the file(s) you suspect:

```text
   Bug: Clicking "Save" on the settings screen sometimes shows "Saved" but doesn't persist the change.

   Repro:
   1) Start the app: npm run dev
   2) Go to /settings
   3) Toggle "Enable alerts"
   4) Click Save
   5) Refresh the page: the toggle resets

   Constraints:
   - Do not change the API shape.
   - Keep the fix minimal and add a regression test if feasible.

   Start by reproducing the bug locally, then propose a patch and run checks.
```

</WorkflowSteps>

Context notes:

- Supplied by you: the repro steps and constraints (these matter more than a high-level description).
- Supplied by Codex: command output, discovered call sites, and any stack traces it triggers.

Verification:

- Codex should re-run the repro steps after the fix.
- If you have a standard check pipeline, ask it to run it:

```text
After the fix, run lint + the smallest relevant test suite. Report the commands and results.
```

#### IDE extension workflow

<WorkflowSteps>

1. Open the file where you think the bug lives, plus its nearest caller.
2. Prompt Codex:

```text
   Find the bug causing "Saved" to show without persisting changes. After proposing the fix, tell me how to verify it in the UI.
```

</WorkflowSteps>

### Write a test

Use this when you want to define the exact scope to test.

#### IDE extension workflow (selection-based)

<WorkflowSteps>

1. Open the file with the function.
2. Select the lines that define the function. Choose "Add to Codex Thread" from command palette to add these lines to the context.
3. Prompt Codex:

```text
   Write a unit test for this function. Follow conventions used in other tests.
```

</WorkflowSteps>

Context notes:

- Supplied by "Add to Codex Thread" command: the selected lines (this is the "line number" scope), plus open files.

#### CLI workflow (path + line range described in prompt)

<WorkflowSteps>

1. Start Codex:

```bash
   codex
```

2. Prompt with a function name:

```text
   Add a test for the invert_list function in @transform.ts. Cover the happy path plus edge cases.
```

</WorkflowSteps>

### Prototype from a screenshot

Use this when you want to turn a design mock, screenshot, or UI reference into a working prototype.

#### CLI workflow (image + prompt)

<WorkflowSteps>

1. Save your screenshot locally (for example `./specs/ui.png`).
2. Run Codex:

```bash
   codex
```

3. Drag the image file into the terminal to attach it to the prompt.

4. Follow up with constraints and structure:

```text
   Create a new dashboard based on this image.

   Constraints:
   - Use react, vite, and tailwind. Write the code in typescript.
   - Match spacing, typography, and layout as closely as possible.

   Outputs:
   - A new route/page that renders the UI
   - Any small components needed
   - README.md with instructions to run it locally
```

</WorkflowSteps>

Context notes:

- The image provides visual requirements, but you still need to specify the implementation constraints (framework, routing, component style).
- Include behavior the image doesn't show in text, such as hover states, validation rules, or keyboard interactions.

Verification:

- Ask Codex to run the dev server (if allowed) and tell you exactly where to look:

```text
Start the dev server and tell me the local URL/route to view the prototype.
```

#### IDE extension workflow (image + existing files)

<WorkflowSteps>

1. Attach the image in the Codex chat (drag-and-drop or paste).
2. Prompt Codex:

```text
   Create a new settings page. Use the attached screenshot as the target UI.
   Follow design and visual patterns from other files in this project.
```

</WorkflowSteps>

### Iterate on UI with live updates

Use this when you want a tight "design → tweak → refresh → tweak" loop while Codex edits code.

#### CLI workflow (run Vite, then iterate with small prompts)

<WorkflowSteps>

1. Start Codex:

```bash
   codex
```

2. Start the dev server in a separate terminal window:

```bash
   npm run dev
```

3. Prompt Codex to make changes:

```text
   Propose 2-3 styling improvements for the landing page.
```

4. Pick a direction and iterate with small, specific prompts:

```text
   Go with option 2.

   Change only the header:
   - make the typography more editorial
   - increase whitespace
   - ensure it still looks good on mobile
```

5. Repeat with focused requests:

```text
   Next iteration: reduce visual noise.
   Keep the layout, but simplify colors and remove any redundant borders.
```

</WorkflowSteps>

Verification:

- Review changes in the browser as Codex updates the code.
- Commit changes that you like and revert those that you don't.
- If you revert or change an edit, tell Codex so it doesn't overwrite your edit when it works on the next prompt.

### Delegate refactor to the cloud

Use this when you want to design an approach with local context, then delegate the long implementation to a cloud chat that can run in parallel.

#### Local planning (IDE)

<WorkflowSteps>

1. Make sure your current work is committed or at least stashed so you can compare changes cleanly.
2. Ask Codex to produce a refactor plan. If you have the `$plan` skill available, invoke it explicitly:

```text
   $plan

   We need to refactor the auth subsystem to:
   - split responsibilities (token parsing vs session loading vs permissions)
   - reduce circular imports
   - improve testability

   Constraints:
   - No user-visible behavior changes
   - Keep public APIs stable
   - Include a step-by-step migration plan
```

3. Review the plan and negotiate changes:

```text
   Revise the plan to:
   - specify exactly which files move in each milestone
   - include a rollback strategy
```

</WorkflowSteps>

Context notes:

- Planning works best when Codex can scan the current code locally (entrypoints, module boundaries, dependency graph hints).

#### Cloud delegation (IDE → Cloud)

<WorkflowSteps>

1. If you haven't already done so, set up a [Codex cloud environment](https://learn.chatgpt.com/docs/environments/cloud-environment).
2. Click on the cloud icon beneath the prompt composer and select your cloud environment.
3. When you enter the next prompt, Codex creates a new chat in the cloud that carries over the existing chat context (including the plan and any local source changes).

```text
   Implement Milestone 1 from the plan.
```

4. Review the cloud diff, iterate if needed.

5. Create a PR directly from the cloud or pull changes locally to test and finish up.

6. Iterate on additional milestones of the plan.

</WorkflowSteps>

Tasks delegated to the cloud run in isolated environments. Internet access is
off during the agent phase unless you enable it for the environment. Learn more
about [cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access).

### Do a local code review

Use this when you want a second set of eyes before committing or creating a PR.

#### CLI workflow (review your working tree)

<WorkflowSteps>

1. Start Codex:

```bash
   codex
```

2. Run the review command:

```text
   /review
```

3. Optional: provide custom focus instructions:

```text
   /review Focus on edge cases and security issues
```

</WorkflowSteps>

Verification:

- Apply fixes based on review feedback, then rerun `/review` to confirm you resolved the issues.

### Review a GitHub pull request

Use this when you want review feedback without pulling the branch locally.

Before you can use this, enable Codex **Code review** on your repository. See [Code review](https://learn.chatgpt.com/docs/third-party/github).

#### GitHub workflow (comment-driven)

<WorkflowSteps>

1. Open the pull request on GitHub.
2. Leave a comment that tags Codex with explicit focus areas:

```text
   @codex review
```

3. Optional: Provide more explicit instructions.

```text
   @codex review for security vulnerabilities and security concerns
```

</WorkflowSteps>

### Update documentation

Use this when you need an accurate, clear documentation change.

#### IDE or CLI workflow (local edits + local validation)

<WorkflowSteps>

1. Identify the doc file(s) to change and open them (IDE) or `@` mention them (IDE or CLI).
2. Prompt Codex with scope and validation requirements:

```text
   Update the "advanced features" documentation to provide authentication troubleshooting guidance. Verify that all links are valid.
```

3. After Codex drafts the changes, review the documentation and iterate as needed.

</WorkflowSteps>

Verification:

- Read the rendered page.