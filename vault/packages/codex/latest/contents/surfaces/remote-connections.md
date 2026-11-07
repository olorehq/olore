# Remote connections

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Remote connections let you access work running on another device or machine.
In the ChatGPT mobile app for iOS, open **Codex** to work with ChatGPT or Codex
chats on a connected Mac or Windows device. If your mobile app still shows
**Remote**, open it instead. You can also continue work from another supported
device running the ChatGPT desktop app or connect the app to projects on an SSH
host.

Remote access uses the connected host's projects, chats, files, credentials,
permissions, plugins, Computer Use, browser setup, and local tools.




## Local computer access with Work Cloud and Remote connections

To continue a Work conversation on desktop, mobile, or web, follow
[Continue Work across devices](https://learn.chatgpt.com/docs/get-started-with-work#continue-work-across-devices). Work Cloud can use approved local
resources through a connected computer. The instructions below cover connecting
to a desktop host from Codex or opening a project on an SSH host.

## What you can do remotely

- Start new chats in projects on the host, or continue existing ones.
- Send follow-up instructions, answer questions, and steer active work.
- Approve commands and other actions.
- Review outputs, diffs, test results, terminal output, and screenshots.
- Get notified when ChatGPT completes a task or needs your attention.
- Switch between connected hosts and chats.

The next sections cover using the ChatGPT mobile app to access a desktop host.
To connect Codex to a project on an SSH host, see
[connect to an SSH host](#connect-to-an-ssh-host).



  
    

> Illustration: Mobile connection setup screen in the ChatGPT mobile app


  



<a id="before-you-set-up-remote"></a>

## Before you set up mobile access

Remote access supports hosts running the ChatGPT desktop app on macOS and
  Windows. You can control a host from ChatGPT on iOS or Android, or from
  another Mac or Windows device when **Control other devices** is available.
  Availability can vary by rollout.

Make sure you have:

- Codex access in the ChatGPT account and workspace you want to use.
- The latest ChatGPT mobile app on an iOS or Android device. If you don't see
  **Codex** on iOS or **Remote** in an app that still uses that label, update
  ChatGPT first.
- The latest ChatGPT desktop app for macOS or Windows running on a host that's awake,
  online, and signed in to the same account and workspace. Mobile setup starts
  from the app; you can't set it up from the Codex CLI or IDE extension.
- Any required multi-factor authentication, SSO, or passkey configuration for
  that account or workspace.

If you use Codex through a ChatGPT workspace, your admin may need to enable
Remote Control access before you can connect from your phone.

<a id="set-up-remote"></a>

## Set up mobile access

Start in the ChatGPT desktop app on the host you want to connect. The setup flow
enables remote access for that host, then shows a QR code you can scan from your
phone.
The QR code pairs that phone with that host. Pair every phone or supported
desktop app device with every host you want it to control.

Existing connections used since June 8, 2026, remain paired. If you haven't
  used an existing connection since June 8, 2026, update both apps and pair the
  devices again.

<WorkflowSteps variant="headings">

1. Start setup on your computer.

   Open the ChatGPT desktop app on the host. Go to **Settings** >
   **Connections** > **Control this Mac or PC**, then select **Set up** or
   **Add**. Approve remote access and complete any requested verification.

2. Scan the QR code.

   Use your phone to scan the QR code shown by the app. The code opens ChatGPT
   so you can finish connecting the mobile app to the host.

3. Finish setup in ChatGPT.

   ChatGPT opens the connection setup flow. Confirm the same ChatGPT account
   and workspace, then complete any required multi-factor authentication, SSO,
   or passkey steps. After setup succeeds, the host appears in **Codex** on iOS,
   or **Remote** if your mobile app still shows that label.

4. Review host settings.

   In the app on the host, use **Settings** > **Connections** to manage connected
   devices. You can also choose whether to keep the computer awake, enable
   Computer Use, or install the Chrome extension.

</WorkflowSteps>



> Illustration: Connections controls for allowing devices to control this Mac and keeping it awake.



## Choose what to connect

Start with the laptop or desktop where you already use ChatGPT. Add an always-on
computer or SSH host when you need continuous access or a different environment.

### 

<Desktop width={17} height={17} />

Your laptop or desktop



Connect the Mac or Windows PC where the desktop app is already installed. This
gives remote access to the same projects, chats, credentials, plugins, and local
setup you already use.

If that computer sleeps, loses network access, or closes the app, remote access
stops until it's available again. If you use this computer as your host device,
keep it plugged in and use the host's connection settings to keep it awake where
available.

On a Mac laptop, remote access can stay available with the lid open and power
connected. With the lid closed, connect an external display as well. Choosing
**Sleep** still stops remote access.

On a Windows host, keep the session unlocked and available for tasks that use
[Computer Use](https://learn.chatgpt.com/docs/computer-use). Computer Use on Windows runs in the
foreground, so remote control is best for starting or checking work while you
dedicate the host desktop to the task.

### 

<Storage width={17} height={17} />

A dedicated always-on computer



Use a dedicated always-on Mac or Windows PC when you want ChatGPT to stay
reachable for longer-running work.

Install the projects, credentials, MCP servers, skills, and tools ChatGPT or
Codex should use on that machine.

### 

<Terminal width={17} height={17} />

A remote development environment



Use an SSH host or managed remote development environment when the project
already lives in a remote environment. Connect the desktop app host to that
environment first; your phone still connects to the same host, and ChatGPT works
in the remote environment with its dependencies, security policies, and compute
resources.

For SSH setup details, see [connect to an SSH host](#connect-to-an-ssh-host).

For browser or desktop tasks on an always-on computer or remote host, enable
  Computer Use and install the Chrome extension on that host.

## What comes from the connected host

Your phone sends prompts, approvals, and follow-up messages to ChatGPT. The
connected host provides the environment ChatGPT uses.

That means:

- Repository files and local documents come from the connected host.
- Shell commands run on that host or remote environment.
- MCP servers, skills, browser access, and Computer Use come from that host's
  configuration.
- Signed-in websites and desktop apps are available only when the host can
  access them.
- The sandboxing settings, security controls, and action approvals still apply
  to the connected session.

A secure relay layer keeps trusted machines reachable across your authorized
ChatGPT devices without exposing them directly to the public internet.

## Pick up work from another device

You can continue work from another signed-in device running the ChatGPT desktop
app and supporting remote control. For example, if your laptop is unavailable, you can
start a chat from your phone on an always-on host, then later open the app on
your laptop and continue that same chat there.

On a Mac or Windows device where the feature is available, use **Settings >
Connections > Control other devices** to add the other host. A device can allow
remote access and control another device at the same time.



> Illustration: Connections setup card for controlling another device from this Mac.



## Connect to an SSH host

In the ChatGPT desktop app, add remote projects from an SSH host and run chats
against the remote filesystem and shell. Remote project chats run commands,
read files, and write changes on the remote host.

Keep the remote host configured with the same security expectations you use for
normal SSH access: trusted keys, least-privilege accounts, and no
unauthenticated public listeners.

<WorkflowSteps variant="headings">

1. Add the host to your SSH config so Codex can discover it automatically.

```text
   Host devbox
     HostName devbox.example.com
     User you
     IdentityFile ~/.ssh/id_ed25519
```

   Codex reads concrete host aliases from `~/.ssh/config`, resolves them with
   OpenSSH, and ignores pattern-only hosts.

2. Confirm you can SSH to the host from the machine running the app.

```bash
   ssh devbox
```

3. Install and authenticate Codex on the remote host.

   The app starts the remote Codex app server through SSH, using the remote
   user's login shell. Make sure the `codex` command is available on the
   remote host's `PATH` in that shell.

4. In the app, open **Settings > Connections**, add or enable the SSH host, then
   choose a remote project folder.

</WorkflowSteps>



> Illustration: Connections SSH list with three remote hosts.



<a id="hand-off-a-thread-between-hosts"></a>
<a id="hand-off-a-chat-between-hosts"></a>
<a id="hand-off-a-task-between-hosts"></a>

## Hand off a chat between hosts

Handoff moves an existing chat and its Git state between your local computer
and a connected remote host. Use it to start work locally, continue in a
worktree on a remote computer, and bring the chat back later.

Before you hand off a chat, connect the destination host and save a project
for the same Git repository on that host. If the project is a subdirectory of
the repository, save the same subdirectory on both hosts. Codex only shows
destinations with a matching saved project.

To hand off a chat:

1. Open the chat in the desktop app.
2. In the chat footer, select the current run location, then select the
   destination host. Select **This computer** when handing a remote chat back
   to your local computer.
3. Review the destination and branch, then select **Hand off**.

Codex creates or reuses a worktree on the destination host, transfers the
chat and Git state, and switches the chat to that host. If the chat is
running, handoff interrupts the current response before transferring it.

You can also ask Codex in another chat to hand off a named chat to a
connected host. Codex can't hand off the chat making the request, and handoff
to a Codex cloud environment isn't supported.

## Authentication and network exposure

Remote connections use SSH to start and manage the remote Codex app server.
Don't expose app-server transports directly on a shared or public network.

If you need to reach a remote machine outside your current network, use a VPN
or mesh networking tool instead of exposing the app server directly to the
internet.

## Troubleshooting

### You don't see the host on your phone

Confirm that the desktop app is running on the host, you've enabled **Allow
other devices to connect**, and both devices use the same ChatGPT account and
workspace. If you haven't used the connection since June 8, 2026, update both
apps and pair the devices again.

### Remote Control is off after you sign back in

Signing out of ChatGPT turns off **Remote Control**, but it doesn't remove your
existing device pairings. After you sign back in, turn on **Remote Control** to
restore the previous connection state.

If you see an error after you turn on **Remote Control** and select **Add**,
restart the ChatGPT desktop app on the host, then try again.

### The approval request doesn't appear

In the ChatGPT mobile app for iOS, open **Codex**. If your mobile app still
shows **Remote**, open it instead. Confirm that the phone and host use the same
ChatGPT account and workspace, then scan the QR code again or restart setup from
the host. If you use a ChatGPT workspace, ask your admin to confirm that they've
enabled Remote Control access.

### The remote session disconnects

Check whether the host went to sleep, lost network access, or closed the app.
Keep the host awake and connected while ChatGPT works.

### Authentication blocks setup

Complete the account or workspace authentication prompt shown during setup. If
your organization requires SSO, multi-factor authentication, or a passkey,
finish that flow before trying again. If setup still fails, ask your workspace
admin to confirm that they've enabled Remote Control access.

## See also

- [ChatGPT desktop app](https://learn.chatgpt.com/docs/app)
- [Features](https://learn.chatgpt.com/docs/features)
- [ChatGPT desktop app settings](https://learn.chatgpt.com/docs/reference/settings)
- [Computer Use](https://learn.chatgpt.com/docs/computer-use)
- [Chrome extension](https://learn.chatgpt.com/docs/chrome-extension)
- [Command line options](https://learn.chatgpt.com/docs/developer-commands?surface=cli)
- [Authentication](https://learn.chatgpt.com/docs/auth)