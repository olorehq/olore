# Computer History

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Computer History is **off by default** for ChatGPT Pro, Business, and
  Enterprise users in the ChatGPT desktop app on macOS. Pro users can choose to
  turn it on. For Business and Enterprise workspaces, an administrator must
  explicitly grant access before each member can choose to turn it on. Computer
  History also requires [Memories](https://learn.chatgpt.com/docs/customization/memories) and is not
  available with an API key or Amazon Bedrock. It's available in supported
  regions, including the European Economic Area (EEA), Switzerland, and the
  United Kingdom.

Computer History turns your activity across apps and websites into memories and
a timeline that ChatGPT and Codex can reference. You can ask natural questions
about recent work, pick up where you left off, understand patterns in how you
work, and turn repeated workflows into skills or automations.

Your history starts only after you choose to turn it on. You control which apps
and websites contribute, can see and pause collection from the macOS menu bar,
and can inspect or delete your history at any time.

Computer History replaces the earlier Chronicle research preview, but it is a
rebuilt system rather than a rename. It uses interaction events, along with
text and other context available through macOS accessibility features, to
create summaries you can review and delete. It does not include screenshots in
your history or record audio, and private-mode web browsing activity is never
included.



> Illustration: Computer History timeline showing activity summaries, contributing apps, and suggested skills and automations



## How Computer History helps

Computer History supplies recent activity as context. When a file, Slack
conversation, Google Doc, or another source is better for the task, ChatGPT and
Codex can use the history to identify that source and then read it directly.

<section class="feature-grid mt-4">




### Pick up where you left off

Ask what you were doing before a break without reconstructing every open app,
document, and next step.




<ComputerHistoryThreadDemo client:load scenario="resume" />

</section>

<section class="feature-grid inverse">




### Find recent work

Refer to a document, conversation, or task the way you remember it. Computer
History can use the activity timeline to identify the source you mean.




<ComputerHistoryThreadDemo client:load scenario="find" />

</section>

<section class="feature-grid">




### Reuse workflows

When Computer History notices repeatable work, a timeline entry can suggest a
skill or automation. Review the suggestion, then ask Codex to create it from the
recorded workflow.




<ComputerHistoryThreadDemo client:load scenario="workflow" />

</section>

## How Computer History works

Computer History creates an interaction-event stream from allowed apps and
websites. Events can include clicks, typing, keyboard shortcuts, app switches,
and context that macOS exposes through its accessibility system. Computer
History periodically turns these events into text summaries and local memory
files.

Computer History does not include screenshots in your history or record
microphone input or system audio. Private-mode web browsing activity is never
included.

In **Settings > Computer history > History**, the timeline groups summaries by
day and time. Each item can show:

- A title and text summary of the activity.
- The apps that contributed to the summary.
- A suggested skill or automation when ChatGPT identifies repeatable work.
- Actions to reveal the memory file in Finder or delete the item.

Select **Ask about your history** to start a chat with Computer History, or use
prompts such as:

- “What was I working on before my last break?”
- “Where can I find the proposal document I was looking for earlier today?”
- “Give me a list of tasks I’ve worked on today and their status.”
- “Prepare a summary of what I did yesterday for standup.”

## Permissions and access

Computer History uses separate controls for workspace access, personal opt-in,
memories, and the apps or websites included in your history:

- **Workspace access:** Computer History is off by default in Business and
  Enterprise workspaces and is unavailable until an administrator
  explicitly grants access. Enterprise administrators can use **Enable Computer
  History** in [**Workspace Settings > Permissions & roles**](https://chatgpt.com/admin/settings)
  to grant access to the appropriate workspace roles.
- **Personal opt-in:** Granting workspace access only lets a member choose to
  turn on Computer History. It does not turn on the feature for anyone. Each
  person must opt in individually, including ChatGPT Pro users.
- **Memories:** Computer History also requires [Memories](https://learn.chatgpt.com/docs/customization/memories).
  Use `/memories` to control whether an individual chat can use local memories
  or contribute to future memories.
- **Apps and websites:** Your app and website permissions determine which
  sources can contribute interaction events. You can allow only specific
  sources or exclude apps and website URLs you do not want included.

If your workspace role does not have access, changing local settings cannot
enable Computer History.

## Turn on Computer History

Computer History is off by default. If you use a Business or Enterprise
workspace, ask your administrator to grant you access before turning it on.
Administrator approval does not opt you in.

1. Open the ChatGPT desktop app on macOS.
2. In Settings, under **Integrations**, select **Computer history**.
3. Select **Turn on** and review the privacy, permissions, and local-storage
   information.
4. If prompted, turn on **Memories**. Computer History requires Memories so it
   can use activity context across chats and tasks.
5. Choose which apps and websites can contribute to your history, then follow
   any macOS permission prompts.

Computer History does not require Screen Recording permission. If the setting
does not appear, confirm that your plan supports Computer History and that your
workspace administrator has enabled it, if applicable.

## Control what is included

You control which apps and websites contribute to future history and whether
Computer History is actively collecting interaction events.

### Choose apps and websites

Under **Settings > Computer history > Permissions**, choose which apps and
websites Computer History can include:

- **Exclude these apps** and **Exclude these websites** block the apps or URLs
  you specify while allowing other supported sources.
- **Include only these apps** and **Include only these websites** allow only the
  sources you explicitly choose.

You can also select an app icon in a history timeline item to exclude that app
from future history. You can include it again later.

Private-mode web browsing activity is never included. Changing app or website
permissions affects future history. To remove existing items, delete or clear
them.

### Pause, resume, or stop collection

Use the Computer History settings or macOS menu bar to control when the feature
collects activity:

- Select the ChatGPT icon in the macOS menu bar and expand the Computer History
  menu to see what activity it captures and access its controls.
- Select **Pause** to stop collecting new interaction events, or select
  **Resume** when you are ready to start again.
- Turn off Computer History to stop future activity collection.

Computer History can include interaction events from communication apps and
websites. Turn it off during communications with other people unless you have
their prior express consent. Consider pausing it or excluding apps that contain
sensitive health, financial, or personal information.

When you pause Computer History, no new interaction events will be collected, but
an in-flight summary of previous events may still continue until it's finished.

## Review and clear history

Open **Settings > Computer history > History** to inspect what Computer History
has summarized. You can reveal a summary’s local memory file in Finder, delete
an individual timeline item, or clear the last 10 minutes, last hour, last day,
or all history. The macOS menu bar also lets you clear the last session for a
recent app.

Clearing history deletes the relevant interaction events and any memories
created from them. This cannot be undone.

## Privacy and local storage

Computer History stores the interaction-event stream temporarily on your Mac so
ChatGPT and Codex can generate memories and build suggested workflows. The
stream can include activity such as clicks and typing, along with text and other
context available through macOS accessibility features. Computer History does
not include screenshots in your history or record microphone input or system
audio. Private-mode web browsing activity is never included.

Temporary event files are retained for up to 48 hours. Generated memory files
remain on your filesystem until you delete or clear them, and you can reveal
those files from the History timeline.

### Where does Computer History store my data?

Computer History saves interaction events temporarily on your Mac. The event
files are isolated within the ChatGPT
[App Group](https://developer.apple.com/documentation/xcode/protecting-local-app-data-using-containers),
which prevents other apps from accessing them without explicit permission.
ChatGPT and Codex delete these event files after 48 hours.

Computer History generates the same kind of local memories as Codex: plain-text
Markdown files that you can read and modify. Those files are stored
under `$CODEX_HOME/memories/extensions/skysight/`, which typically resolves to
`~/.codex/memories/extensions/skysight/`.



  <Alert
    client:load
    color="danger"
    variant="soft"
    description="Computer History files can contain sensitive information. They are not encrypted by Computer History, and other programs running as your macOS user may be able to access them. Protect your Mac account and exclude sources you do not want included."
  />



### What data gets shared with OpenAI?

Computer History captures interaction events locally, then periodically starts
an ephemeral Codex session with access to the interaction-event stream to
summarize your activity into memories.

OpenAI processes temporary event files on its servers to generate memories,
which are then stored locally on your Mac. OpenAI does not retain those event
files after processing unless required by law and does not use them for
training.

When ChatGPT or Codex uses a memory in a future chat, relevant memory contents
and interaction events may be included as context. This chat content may be
used to improve OpenAI models if allowed by your
[ChatGPT data controls](https://help.openai.com/en/articles/7730893-data-controls-faq).
Memories also follow the same
[chat-level controls as other Codex memories](https://learn.chatgpt.com/docs/customization/memories#control-memories-per-chat).

### Prompt injection risk

Computer History increases the risk of prompt injection from content in apps
and websites. For example, if you visit a website containing malicious
instructions, ChatGPT or Codex might follow those instructions.

## Token usage

Computer History uses tokens while it summarizes activity and creates memories.

## Troubleshooting

If Computer History is available but does not start:

1. Confirm that **Memories** is on.
2. Open **Settings > Computer history** and select **Finish setup**, **Resume**,
   or **Try again**, depending on the status shown.
3. Quit and reopen the ChatGPT desktop app if the setting remains unavailable.