# Deploy the Windows app and Codex CLI

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Deploy the Windows desktop app, Codex CLI, or both to managed Windows devices. Choose the app for desktop access or the CLI for terminal access.

The desktop app and standalone CLI use different installation contexts. Before deploying the CLI, choose and validate the account used to run its installer.

| Your goal                                 | Start with                                                        |
| ----------------------------------------- | ----------------------------------------------------------------- |
| Distribute the desktop app                | [Deploy the Windows app](#deploy-the-windows-app)                 |
| Give employees standalone terminal access | [Deploy Codex CLI on Windows](#deploy-codex-cli-on-windows)       |
| Apply Codex requirements on Windows       | [Configure managed requirements](#configure-managed-requirements) |
| Prepare Windows command execution         | [Configure the Windows sandbox](#configure-the-windows-sandbox)   |

## Deploy the Windows app

Choose a method based on your management tool and whether devices can access Microsoft's distribution services.

Before deployment, configure applicable controls using [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration). To prepare Codex command execution in the desktop app, follow [Windows sandbox setup](https://learn.chatgpt.com/docs/windows/windows-sandbox). Check device compatibility and complete any required legacy setup.

The MSIX links below download the latest release for each architecture, not a historical version. Review the downloaded package and keep the approved artifact in your deployment system. Follow [Manage app updates](https://learn.chatgpt.com/docs/enterprise/manage-app-updates) to coordinate the app's built-in updater with Microsoft Store, Intune, and other deployment tools.

<a id="deploy-the-app-with-an-enterprise-management-tool"></a>

{/* prettier-ignore */}
<Tabs
  id="windows-deployment"
  ariaLabel="Deployment method"
  param="deployment"
  defaultTab="intune"
  block
  tabs={[
    { id: "intune", label: "Intune" },
    { id: "sccm", label: "SCCM" },
    { id: "user", label: "Self-install" },
    { id: "other", label: "Other" },
  ]}
>
  


Package source


<Tabs
  id="windows-intune-source"
  ariaLabel="Intune package source"
  param="intune-source"
  defaultTab="store"
  selector="dropdown"
  tabs={[
    { id: "store", label: "Microsoft Store (recommended)" },
    { id: "offline", label: "Offline MSIX" },
  ]}
>
  


### Deploy through Microsoft Store

Use Intune's Microsoft Store integration to install and update the app.

<WorkflowSteps>

1. In the Intune admin center, go to **Apps** > **All apps** >
   **Create**. Select **Microsoft Store app (new)**.

2. Search for **ChatGPT** from **OpenAI**, or enter the Store
   product ID `9PLM9XGG6VKS`. Select the app and review its installation settings.

3. On **App information**, set **Install behavior** to **System**.

4. Under **Required**, add your target group so Intune installs the app
   automatically, then select **Create**.

</WorkflowSteps>

For optional installation through Company Portal, use **Available for enrolled
devices** instead.

Devices need access to the Microsoft Store and Windows Update endpoints in Microsoft's [network requirements](https://learn.microsoft.com/en-us/intune/fundamentals/endpoints#microsoft-store). If these endpoints are blocked, select **Offline MSIX**.

For installation context, network requirements, and deployment monitoring, see
Microsoft's [Intune Store app guide](https://learn.microsoft.com/en-us/intune/app-management/deployment/add-microsoft-store).

  

  


### Deploy an offline package with Intune

Use a downloaded MSIX when devices can't use Microsoft's distribution services or you need to distribute a package your organization has reviewed. The links download the latest release. For repeat deployments, use the approved artifact in your deployment system. Choose **Required** for automatic installation.

<WarningTip>
  Blocking access to the Microsoft Store app does not prevent deployment through
  Intune's Microsoft Store integration. You can still use **Microsoft Store
  (recommended)**.
</WarningTip>


Assignment


<Tabs
  id="windows-intune-assignment"
  ariaLabel="Intune assignment"
  param="intune-assignment"
  defaultTab="required"
  selector="dropdown"
  tabs={[
    { id: "required", label: "Required (recommended)" },
    { id: "available", label: "Available in Company Portal" },
  ]}
>
  


<WorkflowSteps>

1. Download the [x64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-x64.msix) or [Arm64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-arm64.msix) for your devices.

2. In the Intune admin center, go to **Apps** > **All apps** > **Create**.
   Select **Line-of-business app**, upload the MSIX, and review the package
   information.

3. On **Assignments**, add your target device group under **Required**.

4. In that assignment's **Install Context** column, select **User context**,
   change it to **Device context**, and save.

5. Review and create the app. Confirm successful installation in **Device install status**, then have employees launch ChatGPT normally.

</WorkflowSteps>

If the app doesn't appear, have users sign out and back in.

For more information, see Microsoft's [LOB app deployment guide](https://learn.microsoft.com/en-us/intune/app-management/deployment/add-lob-windows).

  

  


To offer installation through Company Portal, deploy the offline package as a **Windows app (Win32)** with an **Available for enrolled devices** assignment:

<WorkflowSteps>

1. Download the [x64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-x64.msix) or [Arm64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-arm64.msix), plus the [offline license](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-License.xml). Rename the package to `ChatGPT.msix` and keep both files in the same
   folder.

2. Save this script as `Install-ChatGPT.ps1` beside the downloaded files:

```powershell
   #Requires -RunAsAdministrator
   $ErrorActionPreference = 'Stop'

   Add-AppxProvisionedPackage -Online `
     -PackagePath "$PSScriptRoot\ChatGPT.msix" `
     -LicensePath "$PSScriptRoot\ChatGPT-License.xml" `
     -Regions all
```

3. Save this script as `Uninstall-ChatGPT.ps1` beside the MSIX, license, and installation script. Configure Intune to run this script in System context when uninstalling the app. The script removes the provisioned package and app registrations for all users on the device:

   <WarningTip>
     If you choose to [remove local data on
     uninstall](#uninstall-and-local-data), back up any data you want to keep
     before running this script.
   </WarningTip>

```powershell
   #Requires -RunAsAdministrator
   $ErrorActionPreference = 'Stop'

   Get-AppxProvisionedPackage -Online |
     Where-Object DisplayName -eq 'OpenAI.Codex' |
     Remove-AppxProvisionedPackage -Online -AllUsers

   Get-AppxPackage -AllUsers -Name 'OpenAI.Codex' |
     Remove-AppxPackage -AllUsers
```

   Follow your organization's PowerShell script-signing policy for both scripts.

4. Use Microsoft's [Win32 app workflow](https://learn.microsoft.com/en-us/intune/app-management/deployment/add-win32) to package the MSIX, license, `Install-ChatGPT.ps1`, and `Uninstall-ChatGPT.ps1` together. Add a **Windows app (Win32)** in Intune, set **Install behavior** to **System**, and target the package's architecture. Configure the 64-bit install and uninstall commands below, then assign the app as **Available for enrolled devices**.

</WorkflowSteps>

<details>
<summary>Win32 installation, removal, and detection settings</summary>

Set **Install command** to:

```text
%SystemRoot%\Sysnative\WindowsPowerShell\v1.0\powershell.exe -NoProfile -File .\Install-ChatGPT.ps1
```

For devices where Windows is installed at `C:\Windows`, set **Uninstall command** to:

```text
C:\Windows\Sysnative\WindowsPowerShell\v1.0\powershell.exe -NoProfile -File .\Uninstall-ChatGPT.ps1
```

Use the actual Windows directory if it differs. This literal path selects 64-bit Windows PowerShell from Intune's 32-bit command context. Do not substitute `%SystemRoot%` in the uninstall field: Intune does not expand environment variables there. If you need variable expansion, package a wrapper script as described in [Microsoft's program settings](https://learn.microsoft.com/en-us/intune/app-management/deployment/add-win32#step-2-program).

Run this custom detection script in 64-bit PowerShell. It reports success when the app is provisioned on the device. To detect a specific approved version, also compare the package's `Version` with that version.

```powershell
$package = Get-AppxProvisionedPackage -Online -ErrorAction Stop |
  Where-Object DisplayName -eq 'OpenAI.Codex'

if ($package) {
  Write-Output $package.PackageName
  exit 0
}
exit 1
```

Windows registers the provisioned package at sign-in. If the app doesn't appear, have users sign out and back in.

</details>

  

</Tabs>
  

</Tabs>
  

  


### Deploy with Microsoft Configuration Manager (SCCM)

Deploy the downloaded MSIX through Configuration Manager and Software Center.

<WorkflowSteps>

1. Download the [x64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-x64.msix) or [Arm64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-arm64.msix) for your devices. Put it on a network share accessible to Configuration
   Manager.

2. Go to **Software Library** > **Application
   Management** > **Applications** > **Create Application**. Select **Windows app
   package** and enter the MSIX path. Review the detected package information and
   enable **Provision this application for all users on the device**.

3. Distribute the content to your distribution points
   and deploy to a device collection. Choose **Required** to install
   automatically, or **Available** to let users install from Software Center.

</WorkflowSteps>

Use the Windows app package deployment type, not the Store-link type. See Microsoft's [Configuration Manager guide](https://learn.microsoft.com/en-us/intune/configmgr/apps/get-started/creating-windows-applications) for package requirements and all-user provisioning.

If your deployment workflow requires it, download the [offline license](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-License.xml) alongside the package.

#### Remove a provisioned app with Configuration Manager

If users have already signed in to devices with the provisioned app, create both uninstall deployments:

1. Target an uninstall deployment to the **device collection** containing the affected devices.

2. Target a second uninstall deployment to the **user collection** containing users who have already signed in to those devices.

Removing the provisioned app from the device does not uninstall it for existing users. Verify removal for both the device and those user accounts. See Microsoft's [provisioned app removal guidance](https://learn.microsoft.com/en-us/intune/configmgr/apps/get-started/creating-windows-applications#provision-windows-app-packages-for-all-users-on-a-device).

  

  


### Deploy with another management tool

Use your management tool's MSIX deployment workflow.

<WorkflowSteps>

1. Download the [x64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-x64.msix) or [Arm64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-arm64.msix) for your devices.

2. Add the MSIX to your deployment tool. Configure installation for the device,
   using Local System or administrator privileges.

3. Assign automatic installation to a pilot device group. Confirm that employees
   can open ChatGPT under their normal Windows accounts before expanding deployment.

</WorkflowSteps>

If the app doesn't appear, have users sign out and back in.

<details>
<summary>Install with a PowerShell script</summary>

If your tool requires an installation command, download the [offline license](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-License.xml) alongside the MSIX.
Rename the package to `ChatGPT.msix` and save this script as
`Install-ChatGPT.ps1` in the same folder:

```powershell
#Requires -RunAsAdministrator
$ErrorActionPreference = 'Stop'

Add-AppxProvisionedPackage -Online `
  -PackagePath "$PSScriptRoot\ChatGPT.msix" `
  -LicensePath "$PSScriptRoot\ChatGPT-License.xml" `
  -Regions all
```

Package the script and both files together. Configure your tool to run the script
with 64-bit Windows PowerShell as Local System or an administrator.

</details>

  

  

<a id="let-users-install-and-update-the-app"></a>

Package source


<Tabs
  id="windows-user-source"
  ariaLabel="User installation package source"
  param="user-source"
  defaultTab="store"
  selector="dropdown"
  tabs={[
    { id: "store", label: "Web installer (recommended)" },
    { id: "offline", label: "Offline MSIX" },
  ]}
>
  


### Let users install the app

Use this option when users can install applications themselves or get help from an administrator.

<WorkflowSteps>

1. Direct users to the [ChatGPT Windows installer](https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi).

2. Run the installer and follow the Windows installation
   prompts. An administrator must approve the installation.

3. Open ChatGPT and sign in with a work account.

</WorkflowSteps>

Users can also install from the command line:

```powershell
winget install --id 9PLM9XGG6VKS -s msstore
```

The installer provides automatic updates. Microsoft Store components may appear during installation or updates; users don't need to browse the Store.

  

  

<a id="install-without-microsoft-distribution-services"></a>

### Install from an offline package

Download the files on a connected machine, then copy them to the target device. An administrator must perform the installation.

<WorkflowSteps>

1. Download the [x64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-x64.msix) or [Arm64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-arm64.msix), plus the [offline license](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-License.xml). Rename the package to `ChatGPT.msix` and keep both files in the same
   folder.

2. Open Windows PowerShell as an administrator in that
   folder and run:

```powershell
   Add-AppxProvisionedPackage -Online `
     -PackagePath .\ChatGPT.msix `
     -LicensePath .\ChatGPT-License.xml `
     -Regions all
```

3. Sign out and back in if the app doesn't appear, then open
   ChatGPT and sign in with a work account.

</WorkflowSteps>

The download links provide the latest Store-signed package for each architecture. Offline installation still requires online access to use ChatGPT. Standalone MSI and non-Store EXE packages aren't available for the desktop app.

  

</Tabs>
  

</Tabs>

## Deploy Codex CLI on Windows

Prepare the CLI package, apply your device policy, and verify terminal access from the employee's account.

### Before you begin

- Identify the target Windows devices and users and their processor architectures, then choose an installation method. Confirm that users have Codex access and can complete your organization's sign-in flow.

- For Intune, prepare app-management permissions, enrolled devices that meet [Microsoft's Win32 packaging prerequisites](https://learn.microsoft.com/en-us/intune/app-management/deployment/create-win32-package), and an unattended installation package.

- Assign responsibility for CLI updates and removal. If you use npm, account for the managed Node.js/npm installation and its global package location.

### Choose an installation method

Choose an installation method and an explicit CLI release. Review the [CLI releases on GitHub](https://github.com/openai/codex/releases), then replace `<approved-version>` in the examples with your approved version number in `x.y.z` form. Use the same version in your package and detection rule.

The standalone installer defaults to `latest` when no release is specified. Set `-Release` explicitly to pin the deployment to a release; see the [installer's release parameter](https://github.com/openai/codex/blob/092d3acd6bec3e3a14bdc7e7a2810ab628ab759d/scripts/install/install.ps1#L1-L14). For general installation guidance, see [CLI installation](https://learn.chatgpt.com/docs/codex/cli).

**Standalone PowerShell installer.** From a new PowerShell window, download the installer and pass the approved release:

```powershell
$CodexRelease = '<approved-version>'
Invoke-WebRequest -UseBasicParsing -Uri 'https://chatgpt.com/codex/install.ps1' -OutFile '.\codex-install.ps1'
powershell -ExecutionPolicy Bypass -File .\codex-install.ps1 -Release $CodexRelease
```

**npm.** If Node.js and npm are already managed on the device, select the approved package version explicitly:

```powershell
$CodexRelease = '<approved-version>'
npm install -g "@openai/codex@$CodexRelease"
```

For managed distribution, keep the reviewed installer or package artifact and selected release in your IT-owned package. Define installation context, detection, removal, and update behavior. Selecting a version does not change the installer's user-profile defaults or provide a complete unattended deployment wrapper.

### Set the installation context

The [standalone installer](https://chatgpt.com/codex/install.ps1) defaults to runtime files in the current user's profile, a command directory at `%LOCALAPPDATA%\Programs\OpenAI\Codex\bin`, and the **User PATH**.

Running the unchanged installer as **SYSTEM** targets the SYSTEM profile and environment. Selecting **System** in Intune does not make this an all-users installation.

| Deployment choice                  | What to validate                                                                                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Install for the signed-in employee | Run installation and detection in that user's context. Open a new terminal and confirm that the employee can resolve and run `codex`.                                       |
| Build a device-wide package        | Define and validate the machine installation layout, runtime files, permissions, PATH exposure, detection, and removal. The default installer does not provide this design. |
| Use npm                            | Confirm the global package prefix and command location for the account running npm. “Global” does not necessarily mean all Windows users.                                   |

Separate user installation, device policy delivery, and administrator-approved sandbox setup. When a procedure requires an employee's profile, use that employee's identity rather than SYSTEM.

Keep the standalone runtime files together; copying only `codex.exe` is not a complete standalone package.

### Package and assign the CLI through Intune

Prepare and validate an IT-owned Win32 package with an unattended installer, uninstaller, and detection logic for the chosen installation context.

<WorkflowSteps>

1. Prepare a source folder containing the approved installation payload and your unattended setup script. Specify the approved CLI release in that script rather than allowing it to resolve `latest`. Keep the Microsoft packaging tool and output folder outside that source folder.

2. Generate the `.intunewin` file with the Microsoft Win32 Content Prep Tool. This example assumes your reviewed setup script is named `Install-Codex.ps1`:

```powershell
   IntuneWinAppUtil.exe -c C:\Packages\Codex\Source -s Install-Codex.ps1 -o C:\Packages\Codex\Output -q
```

   The tool packages the source folder's contents. See [Create a Win32 app package](https://learn.microsoft.com/en-us/intune/app-management/deployment/create-win32-package).

3. In Intune, create a **Windows app (Win32)** and upload the package.

4. Set the install and uninstall commands, **User** or **System** behavior, requirements, and detection rules to match the package.

5. Assign it as **Required** or **Available for enrolled devices**.

</WorkflowSteps>

Intune requires unattended installation. Custom detection scripts must exit with code `0` and write to stdout; output on stderr causes detection failure. See [Add and assign a Win32 app](https://learn.microsoft.com/en-us/intune/app-management/deployment/add-win32).

Verify the CLI from the employee's account, even when the management agent reports a successful exit code.

For Configuration Manager (SCCM), use the reviewed CLI installation design in your application workflow, with a CLI-specific installer and detection rule. The desktop app's MSIX settings apply only to the desktop app.

### Configure managed requirements

By default, deploy administrator-enforced Windows requirements to:

```text
%ProgramData%\OpenAI\Codex\requirements.toml
```

Override this location by setting the `RequirementsPath` string under `HKLM\SOFTWARE\Policies\OpenAI\Codex` to an absolute file path.

Deliver the file through your endpoint management tool. Give intended users read access and prevent ordinary users from changing the administrator-owned policy.

Requirements constrain settings; configuration defaults supply starting values. Review both the local file and applicable cloud policy to determine the effective configuration.

Choose requirements for permissions, approvals, network access, and sandbox behavior. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration#locations-and-precedence) for supported fields and precedence.

After deployment, launch Codex as the employee and use `/status` and `/debug-config` to confirm the effective policy. Installing the CLI or delivering requirements does not grant workspace access.

### Configure the Windows sandbox

Check device compatibility before choosing a Windows sandbox. The [Windows sandbox guide](https://learn.chatgpt.com/docs/windows/windows-sandbox) covers Microsoft Execution Containers (MXC) and the legacy implementations.

#### Prefer MXC on compatible devices

For standalone CLI use, enable MXC preference in `config.toml`:

```toml
[features]
prefer_mxc = true
```

You can also enforce this feature value through `requirements.toml`. The preference permits legacy fallback when MXC is unavailable. Check the device requirements in the Windows sandbox guide before enabling it.

On CLI version 0.162.0 or later, run this compatibility probe from a project directory:

```powershell
codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK
$LASTEXITCODE
```

Expect `MXC_OK` and an exit code of `0`. This checks the explicit MXC command; also inspect the employee's normal session configuration.

Before rollout, compare the sandbox guide's networking constraints with your managed network policy.

#### Prepare the legacy fallback

When MXC is unavailable or disabled, prefer the `elevated` legacy fallback. It requires administrator-approved setup, but sandboxed commands run without administrator privileges.

Follow the [IT-led setup procedure](https://learn.chatgpt.com/docs/windows/windows-sandbox) for the employee account and Codex home. Run this example from an appropriately elevated process:

```powershell
codex sandbox setup --elevated --user 'DOMAIN\alice' --codex-home 'C:\Users\alice\.codex'
```

Replace the sample identity and path with the intended user's values. Use an administrator-trusted CLI installation for elevated setup.

To permit only the elevated legacy implementation, add the following to `%ProgramData%\OpenAI\Codex\requirements.toml`, not `config.toml`. See [Configure a legacy fallback](https://learn.chatgpt.com/docs/windows/windows-sandbox#configure-a-legacy-fallback):

```toml
[windows]
allowed_sandbox_implementations = ["elevated"]
```

This restricts legacy fallback without blocking MXC. Before allowing `unelevated`, review its weaker network isolation and lack of denied-read-path support.

### Verify CLI deployment

As an intended employee, open a new PowerShell window without administrator privileges:

```powershell
Get-Command codex
codex --version
codex
```

Confirm that the executable resolves to the intended installation, then complete the approved sign-in flow. Run a small task in a designated test project and inspect the active configuration.

| Check                     | Action and expected result                                                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Installation context      | Confirm that the CLI resolves from the intended employee's account, including after a new sign-in.                                            |
| Management-tool detection | Check that devices with the CLI installed are detected and that devices without it, including devices where it was removed, are not detected. |
| Managed requirements      | Confirm that the session shows the expected effective policy.                                                                                 |
| Windows sandbox           | Verify that MXC works on compatible devices and the approved legacy fallback is provisioned where required.                                   |
| Update                    | Confirm that the employee can run the approved new version after deployment.                                                                  |
| Removal                   | Confirm that the package removes its installation and PATH entry without deleting unrelated user configuration or project data.               |

<a id="manage-in-app-updates"></a>

## Manage updates

### Desktop app

The app checks for updates by default, including after an offline
installation. To enable automatic updates, allow devices to reach
`persistent.oaistatic.com`. If you disable automatic updates, deploy newer
packages through your management tool.

Follow [Manage app updates](https://learn.chatgpt.com/docs/enterprise/manage-app-updates) to coordinate all update sources. Disabling the built-in updater does not stop Microsoft Store, Intune, or other management tools from updating the app, nor does it provide OpenAI-managed version pinning or a separate release channel. Confirm the installed version through your deployment system.

### Codex CLI

For each CLI update, choose a new approved release, update the explicit `-Release` value or npm package version in your deployment package, and update its detection rule. Deploy through your package process, then verify the installed version, account context, and detection behavior. Do not switch the managed package back to an installer command without an explicit release. See [CLI releases](https://github.com/openai/codex/releases), [CLI installation and updates](https://learn.chatgpt.com/docs/codex/cli), and [npm version selection](https://docs.npmjs.com/cli/v11/using-npm/package-spec).

## Uninstall and local data

Uninstall the desktop app through Windows Settings or your management tool, such
as Intune or SCCM. Cleanup runs automatically during uninstall.

By default, local coding chats and settings are kept in the user's
[`CODEX_HOME`](https://learn.chatgpt.com/docs/config-file/config-advanced#config-and-state-locations).

To also remove `CODEX_HOME` during uninstall, add this to `config.toml` in that
folder before uninstalling:

```toml
[desktop]
uninstall_codex_home = true
```

## Troubleshooting

<details>
<summary>Users are prompted for administrator credentials when installing</summary>

When users install the app themselves, an administrator must approve the installation.

For an Intune deployment through the Microsoft Store:

1. In the Intune admin center, go to **Apps** > **All apps** and select ChatGPT.

2. Check **Install behavior** in the app's **Properties**. If it's **User**, add
   the app again as a **Microsoft Store app (new)** and select **System** on
   **App information**.

3. Assign the app to your target group under **Required** or **Available for
   enrolled devices**. If you added a new app, remove that group's assignment
   from the original app.

4. Sync the affected device with Intune, then check **Device install status**.
   For an available assignment, retry the installation in Company Portal.

If the app is already installed, deploying it with **System** install behavior may
cause Intune to report `0x87D1041C`. Installation still succeeds in this scenario.
Verify the app on the affected device.

</details>

<details>
<summary>Installation fails with error `0x80073D28`</summary>

Windows returns `0x80073D28` (`ERROR_PACKAGED_SERVICE_REQUIRES_ADMIN_PRIVILEGES`)
when it can't install a packaged service without administrator privileges.
Run the installation as an administrator, or configure your deployment tool to
install in device or System context.

For an existing SCCM deployment:

1. Open the application's **Properties** > **Deployment Types**.
2. Edit the **Windows app package** deployment type and open **User Experience**.
3. Enable **Provision this application for all users on the device** and save.
4. Refresh the client's machine policy, then retry the installation in Software
   Center.

For details about the provisioning setting, see Microsoft's [application deployment settings](https://learn.microsoft.com/en-us/intune/configmgr/apps/deploy-use/create-applications#automatically-detect-application-information).

</details>

### Codex CLI installation and configuration

| Symptom                                                   | What to check                                                                                                                                                                 |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intune reports success, but the employee cannot run Codex | Check the installation account, runtime location, and account whose PATH was updated. The unchanged installer running as SYSTEM does not install into the employee's profile. |
| `codex` is not recognized after installation              | Open a new terminal. Check the intended account's command directory and PATH.                                                                                                 |
| The wrong Codex version starts                            | Use `Get-Command codex` to check for competing standalone or npm locations.                                                                                                   |
| MXC probe fails                                           | Check device capabilities, CLI version, and managed policy against the Windows sandbox guide. Provision the approved legacy fallback where appropriate.                       |
| Legacy sandbox setup requests administrator approval      | Complete IT-led setup for the employee's identity and Codex home.                                                                                                             |
| Managed settings differ from the local requirements file  | Use `/status` and `/debug-config` to review effective settings, policy precedence, and supported fields.                                                                      |

## Related resources

- [CLI installation](https://learn.chatgpt.com/docs/codex/cli)

- [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)

- [Windows sandbox setup](https://learn.chatgpt.com/docs/windows/windows-sandbox)

- [ChatGPT desktop app for Windows](https://learn.chatgpt.com/docs/windows/windows-app)

- See [Microsoft Win32 packaging guide](https://learn.microsoft.com/en-us/intune/app-management/deployment/create-win32-package)

- See [Microsoft Win32 deployment settings](https://learn.microsoft.com/en-us/intune/app-management/deployment/add-win32)