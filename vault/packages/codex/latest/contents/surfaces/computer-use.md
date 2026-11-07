# Computer Use

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

In supported regions, Computer Use in the ChatGPT desktop app is available on
  macOS and Windows with ChatGPT Work and Codex. Open **Settings > Computer
  use** to see which apps you can control.

With Computer Use, ChatGPT can see and operate graphical user interfaces on macOS
or Windows. Use it for tasks where command-line tools or structured integrations
aren't enough, such as checking a desktop app, using a browser, changing app
settings, working with a data source that isn't available as a plugin, or
reproducing a bug that only happens in a graphical user interface.

Because Computer Use can affect app and system state outside your project
workspace, use it for scoped tasks and review permission prompts before
continuing.

## Set up Computer Use

1. In the ChatGPT desktop app, switch to Work or select Codex.
2. Open **Settings > Computer use**. Under **Control**, find **Any App**. If the
   row shows **Install**, select it and follow the prompts. If the switch is off,
   turn it on. If your app shows a **Computer Use** plugin page instead, follow
   the setup prompts on that page.
3. [Start a Computer Use task](#start-a-computer-use-task). ChatGPT asks for
   permission before it uses an app. Apps you approve for future tasks appear
   under **Always-allowed apps** in the same settings.

If you don't see **Any App**, you may still have separate controls for a browser
or individual app. Those controls don't grant access to other desktop apps. In a
managed workspace, ask your administrator whether your workspace allows Computer
Use.



> Illustration: Computer Use settings showing app controls and Calculator as the only always-allowed app.



On Windows, keep the target app visible on the active desktop while the task
runs. On macOS, grant Screen Recording and Accessibility permissions when
prompted so ChatGPT can see and interact with the target app.

On macOS, grant:

- **Screen Recording** permission so ChatGPT can see the target app.
- **Accessibility** permission so ChatGPT can click, type, and navigate.

## When to use Computer Use

For difficult tasks that depend on screenshots or visual judgment, choose
[GPT-6 Astra](https://learn.chatgpt.com/docs/models#gpt-6-astra) when it is available in your model
selector. The same operating-system permissions and app access controls apply.

Choose Computer Use when the task depends on a graphical user interface that's
hard to verify through files or command output alone.

Good fits include:

- Testing a macOS app, Windows app, iOS simulator flow, or another desktop app
  that ChatGPT is building.
- Performing a task that requires your web browser.
- Reproducing a bug that only appears in a graphical interface.
- Changing app settings that require clicking through a UI.
- Inspecting information in an app or data source that isn't available through a
  plugin.
- On macOS, running a scoped task in the background while you keep working
  elsewhere.
- Executing a workflow that spans more than one app.

For web apps you are building locally, use the
[built-in browser](https://learn.chatgpt.com/docs/browser?surface=app) first.

### Windows foreground use

On Windows, Computer Use runs on the active desktop. It can't operate in the
background while you keep using the same Windows session, so expect ChatGPT to
move the pointer, type, and take over the foreground while the task runs.

For Windows tasks that should continue while you step away, keep the Windows
device unlocked and connected to the internet. Use
[remote control](https://learn.chatgpt.com/docs/remote-connections) from your phone to check progress
or send follow-up instructions, or run the ChatGPT desktop app inside a Windows virtual
machine so Computer Use takes over the VM instead of your main desktop.

## Start a Computer Use task

Mention `@Computer` or `@AppName` in your prompt, or ask ChatGPT to use Computer
Use. Describe the exact app, window, or flow ChatGPT should operate.

```text
Open the app with Computer Use, reproduce the onboarding bug, and fix the
smallest code path that causes it. After each change, run the same UI flow
again.
```

```text
Open @Chrome and verify the checkout page still works after the latest changes.
```

If the target app exposes a dedicated plugin or MCP server, prefer that
structured integration for data access and repeatable operations. Choose
Computer Use when ChatGPT needs to inspect or operate the app visually.

## Permissions and approvals

Workspace administrators can restrict which apps Computer Use can access and
whether approvals can be saved. See
[managed browser and Computer Use controls](https://learn.chatgpt.com/docs/enterprise/managed-configuration#control-browser-and-computer-use).

System permissions for Computer Use are separate from app approvals in ChatGPT.
On macOS, Screen Recording and Accessibility permissions let ChatGPT see and
operate apps. App approvals determine which apps you allow ChatGPT to use. File
reads, file edits, and shell commands still follow the sandbox and approval
settings for the task.

With Computer Use, ChatGPT can see and take action only in the apps you allow.
During a task, ChatGPT asks for your permission before it can use an app on your
computer. You can choose **Always allow** so ChatGPT can use that app in the future
without asking again. You can remove apps from the **Always allow** list in the
**Computer Use** section of the ChatGPT desktop app settings.


  

> Illustration: Computer Use approval dialog requesting access to Calculator




ChatGPT may also ask for permission before taking sensitive or disruptive actions.

If ChatGPT can't see or control an app, open **System Settings > Privacy &
Security** and check **Screen Recording** and **Accessibility** for **Codex
Computer Use** on macOS. On Windows, make sure the target app is visible in the
active desktop session.

<ToggleSection title="Configure Windows app policy">

On Windows, Computer Use stores persistent app decisions in
`$CODEX_HOME/config.toml`. List the apps that Computer Use can open without
prompting:

```toml
[computer_use.windows]
always_allowed_app_ids = ["mspaint.exe"]
```

Use the app identifier that Windows Computer Use reports, such as an executable
name for a desktop app or an app user model ID for a packaged app. ChatGPT
prompts for apps that aren't in the list. To revoke a saved decision, remove
the app from **Settings > Computer Use > Always allow**.

This table stores local Computer Use decisions. It's separate from the
admin-enforced `requirements.toml`, where administrators can disable Computer
Use with `[features].computer_use = false`. Older
`$CODEX_HOME/computer-use/config.toml` allow-list entries are migrated into the
current setting; its `denied` list isn't part of the current policy schema.

</ToggleSection>

## Locked use

Locked use is for macOS. On Windows, Computer Use works in the foreground.

Locked use lets ChatGPT use Computer Use after your Mac locks, but only after
you enable it. Use it when a ChatGPT task needs to use desktop apps from a
connected device after the Mac locks.

When you enable locked use, ChatGPT installs an Apple
[authorization plug-in](https://developer.apple.com/documentation/security/authorization-plug-ins)
that participates in the macOS unlock flow.

Locked use is intentionally narrow. It's not a general-purpose remote-unlock
path for your Mac, and it doesn't let other apps or local processes unlock the
computer.

To use locked use:

1. Open **Settings > Computer Use** in the app.
2. Enable locked use.
3. Start a task that uses Computer Use from a connected device after your Mac's
   screen has locked.

When a ChatGPT task accesses an app via Computer Use after your Mac locks, ChatGPT
temporarily unlocks the Mac while blocking local use and preserving the locked
screen protections. Before unlocking, ChatGPT checks whether the unlock attempt is
for an active, trusted Computer Use turn. Outside that short-lived window, ChatGPT
denies the unlock and asks you to unlock manually if needed.

Locked use includes safeguards:

- The authorization window is short-lived and scoped to the current unlock
  attempt.
- Automatic unlock is available only to ChatGPT during active Computer Use turns.
- ChatGPT covers every display while the desktop is temporarily unlocked.
- If ChatGPT detects local keyboard or pointer input, it relocks the Mac and
  pauses automatic unlock until you unlock it manually.

## Safety guidance

With Computer Use, ChatGPT can view screen content, take screenshots, and interact
with windows, menus, keyboard input, and clipboard state in the target app.
Treat visible app content, browser pages, screenshots, and files opened in the
target app as context ChatGPT may process while the task runs.

Keep tasks narrow and stay present for sensitive flows:

- Give ChatGPT one clear target app or flow at a time.
- You can stop the task or take over your computer at any time.
- Keep sensitive apps closed unless they're required for the task.
- On Windows, expect ChatGPT to take over foreground input while it works; use a
  secondary device, a VM, or stop the task before using that desktop yourself.
- Avoid tasks that require secrets unless you're present and can approve each
  step.
- Review app permission prompts before allowing ChatGPT to use an app.
- Use **Always allow** only for apps you trust ChatGPT to use automatically in
  future tasks.
- Stay present for account, security, privacy, network, payment, or
  credential-related settings.
- Cancel the task if ChatGPT starts interacting with the wrong window.

If ChatGPT uses your browser, it can interact with pages where you're already
signed in. Review website actions as if you were taking them yourself: web pages
can contain malicious or misleading content, and sites may treat approved clicks,
form submissions, and signed-in actions as coming from your account. To keep
using your browser while ChatGPT works, ask ChatGPT to use a different browser.

The feature can't automate terminal apps or ChatGPT itself, since automating them
could bypass ChatGPT security policies. It also can't authenticate as an
administrator or approve security and privacy permission prompts on your
computer.

File edits and shell commands still follow ChatGPT approval and sandbox settings
where applicable. Changes made through desktop apps may not appear in the review
pane until they're saved to disk and tracked by the project. Your ChatGPT data
controls apply to content processed through ChatGPT, including screenshots taken
by Computer Use.