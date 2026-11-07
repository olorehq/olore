# Windows sandbox

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use Codex on Windows with the native [ChatGPT desktop app](https://learn.chatgpt.com/docs/windows/windows-app), the
[CLI](https://learn.chatgpt.com/docs/codex/cli), or the [IDE extension](https://learn.chatgpt.com/docs/codex/ide).

The ChatGPT desktop app on Windows supports core workflows such as parallel chats,
worktrees, scheduled tasks, Git functionality, the built-in browser, file previews,
plugins, and skills.

The app can run natively in PowerShell with a Windows sandbox instead of
requiring WSL or a virtual machine. This keeps Codex in Windows-native
workflows while enforcing bounded filesystem and network permissions.

For enterprise installation, see the [Windows Deployment Guide](https://learn.chatgpt.com/docs/enterprise/windows-deployment).


  

> Illustration: ChatGPT desktop app Windows sandbox setup prompt above the message composer






  <CodexCallout
    href="/codex/windows/windows-app"
    title="Use the ChatGPT desktop app on Windows"
    description="Work across projects, run parallel chats, and review results in one place with the native Windows app."
    iconSrc="/images/codex/codex-banner-icon.webp"
  />



Codex supports three Windows sandbox implementations:

- `mxc`: The recommended sandbox on compatible Windows devices. Uses native process isolation without administrator-approved setup, additional Windows accounts, or local firewall rules.
- `elevated`: The preferred legacy fallback when MXC is unavailable or disabled. Requires administrator-approved setup. Commands in the sandbox run without administrator privileges.
- `unelevated`: A legacy fallback when elevated setup is unavailable and organizational policy permits it. Has weaker network isolation than `elevated` and doesn't support denied read paths.





## Configure the Windows sandbox

The Windows sandbox enforces the active filesystem and network permissions for commands and their child processes. The permission profile determines which paths are readable or writable and whether network access is allowed. Approval policy separately controls when Codex asks to run commands with more access. See [sandbox and approvals](https://learn.chatgpt.com/docs/agent-approvals-security).





### Enable MXC

The desktop app automatically prefers MXC for consumer accounts when the device supports it. For enterprise deployments or standalone CLI use, you can enable the same behavior with the configuration below.

In `config.toml`:

```toml
[features]
prefer_mxc = true
```

With `prefer_mxc = true`, Codex uses MXC for Windows commands when the device and policy support it.
Otherwise, it uses the existing legacy selection and setup flow.

For enterprises where device support or policy varies, keep `windows.sandbox` set to your organization's permitted legacy implementation, `elevated` or `unelevated`, [as a fallback](#configure-a-legacy-fallback).

Administrators can distribute this configuration as a default or enforce `features.prefer_mxc = true` through `requirements.toml`. Both permit legacy fallback. See [managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) for how defaults and requirements differ.

### Keep MXC disabled

To prevent MXC use in your organization, add this to your managed
`requirements.toml`:

```toml
[windows]
allow_mxc = false
```

This blocks both automatic MXC selection and explicit `windows.sandbox = "mxc"`. Existing legacy sandbox settings and requirements still apply.

### MXC compatibility

The host must already have the required Microsoft Execution Containers (MXC) capabilities, which Microsoft is rolling out to Windows 11 devices. Microsoft introduced MXC process isolation in **Windows 11 24H2 (build 26100.9278)** and **25H2 (build 26200.9278)**. Use the command below to verify MXC support on your device.

In Codex CLI 0.162.0 and later, you can test MXC for one command without changing the saved sandbox selection. From your project directory, run:

```powershell
codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK
$LASTEXITCODE
```

Expected output is `MXC_OK` and exit code `0`. This checks command startup with the workspace permission profile and managed requirements.

Explicit `windows.sandbox = "mxc"` selection fails if the required native capabilities are unavailable or policy blocks MXC.

Note these compatibility limits:

- Managed networking requires effective `allow_local_binding = true`. MXC permits connections to and from services on host loopback. Proxy domain rules still apply to proxied traffic, but the proxy's additional private-network destination checks are removed.
- Remaining child processes stop when the foreground command exits. Test workflows that rely on detached development servers.
- Deny-read globs use the files that match when each sandboxed process starts, as on Linux and WSL. Matching files created later remain readable to that running process if its other permissions allow access. Long-running shells, scripts, watchers, and development servers keep that snapshot for their lifetime, not the whole Codex session. See [deny-read glob timing](https://learn.chatgpt.com/docs/permissions#deny-reads-with-exact-paths-or-globs).

### Configure a legacy fallback

Select the fallback implementation in `config.toml`:

```toml
[windows]
sandbox = "elevated" # or "unelevated"
```

`elevated` is the preferred legacy fallback. It uses dedicated lower-privilege sandbox users, filesystem permission boundaries, firewall rules, and local policy changes needed for commands that run in the sandbox.

Like MXC, `elevated` enumerates deny-read glob matches when each sandboxed process starts. Matching files created later remain readable to that running process if its other permissions allow access. See [deny-read glob timing](https://learn.chatgpt.com/docs/permissions#deny-reads-with-exact-paths-or-globs) for the consequences for long-running processes.

`unelevated` is a legacy fallback. It runs commands with a restricted Windows token derived from your current user, applies ACL-based filesystem boundaries, and uses environment-level offline controls instead of the dedicated offline-user firewall rule. It provides weaker network isolation than `elevated` and doesn't support denied read paths, but is still useful when administrator-approved setup is blocked by local or enterprise policy.

Use MXC when the device and policy support it. Otherwise, prefer `elevated`, with `unelevated` as a secondary fallback.

Enterprise administrators can constrain which legacy sandbox implementations
Codex can use through [`requirements.toml`](https://learn.chatgpt.com/docs/enterprise/managed-configuration#admin-enforced-requirements-requirementstoml):

```toml
[windows]
allowed_sandbox_implementations = ["elevated"]
```

This example permits `elevated` and prevents fallback to `unelevated`. It does not restrict `mxc` when MXC is available. Other managed permission and network requirements still apply. To permit either legacy implementation, include both values; Codex prefers `elevated` when no mode is selected.

See the [`requirements.toml` reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml) for the supported values. To block MXC as well, use the separate [`windows.allow_mxc` requirement](#keep-mxc-disabled).

By default, both legacy sandbox modes also use a private desktop for stronger UI isolation.

### IT-led provisioning for the legacy elevated sandbox

For employees without local administrator rights, IT can install the CLI and provision the elevated sandbox before the employee starts Codex. From an elevated
deployment process, run:

```powershell
codex sandbox setup --elevated --user 'DOMAIN\alice' --codex-home 'C:\Users\alice\.codex'
```

Replace the identity and path with the employee's Windows identity and `CODEX_HOME`. The command reads that user's configuration, provisions the sandbox, and saves `windows.sandbox = "elevated"`. The employee then runs Codex from a normal terminal.

### Sandbox permissions

Running Codex in full access mode means Codex is not limited to your project
  directory and might perform unintentional destructive actions that can lead to
  data loss. For safer automation, keep sandbox boundaries in place and use
  [rules](https://learn.chatgpt.com/docs/agent-configuration/rules) for specific exceptions, or set your
  [approval policy to
  never](https://learn.chatgpt.com/docs/agent-approvals-security#run-without-approval-prompts) to have
  Codex attempt to solve problems without asking for escalated permissions,
  based on your [approval and security setup](https://learn.chatgpt.com/docs/agent-approvals-security).

### Windows version matrix

| Windows version                  | Support level   | Notes                                                                                                                                                                                 |
| -------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows 11                       | Recommended     | Best baseline for Codex on Windows. Use this if you are standardizing an enterprise deployment.                                                                                       |
| Recent, fully updated Windows 10 | Best effort     | Can work, but is less reliable than Windows 11. For Windows 10, Codex depends on modern console support, including ConPTY. In practice, Windows 10 version 1809 or newer is required. |
| Older Windows 10 builds          | Not recommended | More likely to miss required console components such as ConPTY and more likely to fail in enterprise setups.                                                                          |

Additional environment assumptions:

- `winget` should be available. If it's missing, update Windows or install
  the Windows Package Manager before setting up Codex.
- The legacy `elevated` sandbox depends on administrator-approved setup.
- Some enterprise-managed devices block the required setup steps even when the
  OS version itself is acceptable.
- MXC additionally requires the native capabilities described in
  [MXC compatibility](#mxc-compatibility); this matrix doesn't establish MXC
  availability on a particular device.

### Check sandbox read access

When a command can't read a directory, check the active permission profile,
managed requirements, and Windows file permissions. In the CLI, use `/status`
and `/debug-config` to inspect the active session and configuration. Ask your
administrator to review a managed restriction rather than disabling the sandbox.





Use the native Windows sandbox by default. Choose [WSL](https://learn.chatgpt.com/docs/windows/wsl)
when you need Linux-native tooling, your workflow already lives in WSL2, or
the available native Windows implementations don't meet your needs.

## Troubleshooting and FAQ

If you are troubleshooting a managed Windows machine, start with the native
sandbox mode, Windows version, and any policy error shown by Codex. For MXC,
check [compatibility](#mxc-compatibility) and the effective network policy.
Legacy sandbox issues can come from setup, logon rights, or filesystem permissions.



### My legacy sandbox setup failed


If Codex cannot complete the `elevated` sandbox setup, the most common causes
are:

- the Windows UAC or administrator prompt was declined,
- the machine does not allow local user or group creation,
- the machine does not allow firewall rule changes,
- the machine blocks the logon rights needed by the sandbox users,
- or another enterprise policy blocks part of the setup flow.

What to try:

1. Try the `elevated` sandbox setup again and approve the administrator prompt
   if your environment allows it.
2. If your company laptop blocks this, ask your IT team whether the machine
   allows administrator-approved setup for local user/group creation, firewall
   configuration, and the required sandbox-user logon rights.
3. If setup still fails and managed policy permits it, use `unelevated` while
   the issue is investigated.







### Codex switched me to the unelevated sandbox


The `unelevated` implementation may be selected in configuration or used as a
fallback when `elevated` setup isn't available.

- Codex can still run in a sandboxed mode.
- It still applies ACL-based filesystem boundaries, but it does not use the
  separate sandbox-user boundary from `elevated` and has weaker network
  isolation.
- This is a useful fallback, but not the preferred long-term enterprise
  configuration.

For a managed enterprise laptop, check [MXC compatibility](#mxc-compatibility)
first. If MXC is unavailable or disabled, ask your IT team to provision
`elevated`.







### I see Windows error 1385


If sandboxed commands fail with error `1385`, Windows is denying the logon type
the sandbox user needs in order to start the command.

In practice, this usually means Codex created the sandbox users successfully,
but Windows policy is still preventing those users from launching sandboxed
commands.

What to do:

1. Ask your IT team whether the device policy grants the required logon rights
   to the Codex-created sandbox users.
2. Compare group policy or OU differences if the issue affects only some
   machines or teams.
3. If you need to keep working immediately, use the `unelevated` sandbox while
   the policy issue is investigated.
4. Send `CODEX_HOME/.sandbox/sandbox.log` along with your Windows version and a
   short description of the failure.







### Codex warns that some folders are writable by Everyone


Codex may warn that some folders are writable by `Everyone`.

If you see this warning, Windows permissions on those folders are too broad for
the sandbox to fully protect them.

What to do:

1. Review the folders Codex lists in the warning.
2. Remove `Everyone` write access from those folders if that is appropriate in
   your environment.
3. Restart Codex or re-run the sandbox setup after those permissions are
   corrected.

If you are not sure how to change those permissions, ask your IT team for help.







### Sandboxed commands cannot reach the network


Some Codex chats are intentionally run without outbound network access,
depending on the permissions mode in use.

If a task fails because it cannot reach the network:

1. Check whether the task was supposed to run with network disabled.
2. If you expected network access, restart Codex and try again.
3. If the issue keeps happening, collect the sandbox log so the team can check
   whether the machine is in a partial or broken sandbox state.







### Sandboxing worked before and then stopped


This can happen after:

- moving a repo or workspace,
- changing machine permissions,
- changing Windows policies,
- or other system configuration changes.

What to try:

1. Restart Codex.
2. For MXC, repeat the [compatibility probe](#mxc-compatibility) and check the
   effective network policy. For the legacy `elevated` implementation, try
   sandbox setup again.
3. If a legacy sandbox is needed and managed policy permits it, use
   `unelevated` as a temporary fallback.
4. Collect the sandbox log for review.







### I need to send diagnostics to OpenAI


If you still have problems, send:

- `CODEX_HOME/.sandbox/sandbox.log`

It is also helpful to include:

- a short description of what you were trying to do,
- the selected implementation: `mxc`, `elevated`, or `unelevated`,
- any error message shown in the app,
- whether you saw `1385` or another Windows or PowerShell error,
- your Windows build number,
- and whether you are on Windows 11 or Windows 10.

Do not send:

- the contents of `CODEX_HOME/.sandbox-secrets/`







### The IDE extension is installed but unresponsive



Your system may be missing C++ development tools, which some native dependencies require:

- Visual Studio Build Tools (C++ workload)
- Microsoft Visual C++ Redistributable (x64)
- With `winget`, run `winget install --id Microsoft.VisualStudio.2022.BuildTools -e`

Then fully restart VS Code after installation.