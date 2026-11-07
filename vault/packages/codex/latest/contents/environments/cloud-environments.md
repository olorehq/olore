# Cloud environments

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Codex Cloud runs coding tasks in the cloud, so work can continue while your
computer is asleep. Use it on the web, on mobile, or in the desktop app to edit
code, run commands, and review results.

A **cloud environment** is the reusable setup that tasks use: repositories,
dependencies, tools, and access settings. Codex inspects your repositories,
prepares the setup, and tests it with you. Each new task gets its own isolated
workspace from the published environment.

For an introduction, see the [Codex Cloud overview](https://learn.chatgpt.com/docs/cloud).

**Codex Cloud (Legacy)** continues to support Code Review and the Linear and
  GitHub integrations. We plan to deprecate this experience. See the [legacy
  guide](https://learn.chatgpt.com/docs/environments/cloud-environment) to create and manage
  environments for these workflows.

## Start a task in Codex Cloud

On the web or in the [desktop app](https://learn.chatgpt.com/docs/app), choose **Work in** > **Cloud**
and select a published environment. On mobile, open **Codex** and select a
published environment. Describe what you want Codex to do and send the request.
If you need a new setup, [create an environment](#create-and-publish-an-environment)
on the web or in the desktop app.

Enterprise admins can [review workspace access](https://learn.chatgpt.com/docs/enterprise/admin-setup#step-5-configure-codex-cloud)
before rolling out Codex Cloud.

## Create and publish an environment

Create new environments on the web or in the [desktop app](https://learn.chatgpt.com/docs/app).
Sign in with your ChatGPT account:

1. In a new task, choose **Work in** > **Cloud**, open **Select environment**,
   and select **Create environment**.
2. Select the GitHub repositories to check out. Connect GitHub if prompted.
3. Select **Get started**. Codex inspects the repositories, installs dependencies
   and tools, and tests the workflow.
4. Supply missing access or information when asked. You can also request
   specific versions, commands, or services.
5. Review the setup report, configuration, and files. Resolve unfinished work,
   save changes, and select **Publish**.
6. After **Environment published** appears, select **Start a new task** and
   describe what you want Codex to do.

You can also start from **Settings** > **Codex Cloud** > **Environments** >
**Create environment**.



  

> Illustration: Desktop app environment picker with Create environment and Manage environments below the saved environments





Saving stores configuration; some settings apply to the active setup
  immediately. Publishing captures the prepared filesystem for new tasks.
  Sharing controls who can use the environment.

<a id="default-universal-image"></a>
<a id="automatic-setup"></a>
<a id="manual-setup"></a>

## Customize installation and startup

Codex identifies runtimes, package versions, tools, and services from your
repositories. Refine the setup in the conversation; you don't need to write an
installation script yourself.

Codex can record the tested setup in two fields:

- **Install script:** commands to install dependencies and prepare development assets.
- **Start skill:** instructions to start services and check that they're ready.



  

> Illustration: Cloud environment setup conversation beside repository, script, network, secret, variable, privacy, and Advanced controls, with Save draft and Publish actions





<a id="container-caching"></a>

## Reuse and update saved state

- **New task:** starts from the published environment's prepared filesystem.
- **Existing task:** continues with its own saved files, including uncommitted
  changes and installed tools.
- **Repository refresh:** runs automatically in the background, preserving
  dependency caches without rerunning installation or startup commands.

To update the reusable setup, open **Settings** > **Codex Cloud** > **Environments**.
From the environment's **…** menu, select **Edit**. Describe the change,
let Codex prepare and test it, save changes, and select **Republish**. Start a
new task to use the update; existing tasks retain their own state.



  

> Illustration: Codex Cloud settings with Environments and Personal vault tabs and the Edit menu open for a published environment





Commit important work or save the output you need. Saved state doesn't replace
source control.

<a id="give-setup-access-to-private-dependencies"></a>
<a id="prepare-access-to-dependencies-and-services"></a>
<a id="environment-variables-and-secrets"></a>

## Configure environment variables and network secrets

Codex identifies missing configuration and asks for values it can't infer.
In the environment configuration, select **Manage** beside **Environment variables**
or **HTTP secrets**. Choose how to supply each value:

| Configuration        | Use it for                                    | Delivery                                                                                       |
| -------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Environment variable | A value a program must read directly          | Passed directly to programs in the environment.                                                |
| Network secret       | A credential sent to a specific HTTPS service | Programs receive a placeholder; the proxy substitutes the real value for allowed destinations. |

For network secrets, set **Key**, **Value**, and **Allowed domains**. Use a
different key from any direct variable. Substitution works for HTTPS on port 443,
during setup and tasks; it doesn't put the raw credential in a local process or
file.

Saving environment-owned network secrets adds their destinations to restricted
internet access. Direct variables and personal values don't add destinations.
Review the [saved network policy](#connect-to-services) before testing.
For workspace requirements, see [Agent Security](#agent-security).



  

> Illustration: Manage secrets dialog with a masked registry token, Environment ownership, and packages.example.com as its allowed destination





### Supply personal values

Use Personal vault to save your own environment variables and network secrets
for cloud environments in your workspace.

A shared environment can request values that each person supplies from their
own account. Sharing the environment shares these requirements, not your
personal credentials.

When prompted, enter required values in **Add personal secrets** and select
**Save and start**. Optional values can remain unset.

To manage values in advance:

1. Open **Settings** > **Codex Cloud**, then select the **Personal vault** tab.
2. Select **Add**, choose **Environment variable** or **Network secret** under
   **Type**, and enter the matching **Key** and your **Value**.
3. Under **Applies to**, choose **All environments** or **Selected environments**,
   then **Save**.



  

> Illustration: Personal vault dialog adding the APP_MODE environment variable with the value development for all environments





Only requested values reach a task. A value for a specific environment takes
precedence over a general default. Personal network secrets use the environment's
allowed destinations and substitute placeholders in the same way.

<a id="share-an-environment-with-your-workspace"></a>

## Share within an Enterprise workspace

Share a prepared setup so colleagues can start their own tasks from it:

1. Open the environment's configuration.
2. Under **Privacy** > **Who can use**, choose your workspace.
3. Save the change. Publish the environment if you haven't already.

Choose **Only me** under **Who can use** to keep the environment private.
Each task has separate working files; access to the setup doesn't grant access
to someone else's task or permission to edit the environment.

Review prepared files and environment-owned credentials before sharing. Cloud
identities and VPN connections can also provide shared service access.
Repository access and personal connections depend on the account running the task.

**Use Codex in the cloud** controls task access. **Manage workspace environments**
controls creating and editing environments shared with the workspace. See
[Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions#review-codex-cloud-access-and-environment-administration).

## Agent Security

The environment's [internet-access settings](#connect-to-services) define which
public internet destinations its VM can reach. VPN settings independently connect
that VM to services on a private network.

In Enterprise workspaces, admins use
[Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security) to configure workspace
requirements for agent behavior, managed execution networking, and supported
tool use. These requirements apply alongside the domain settings saved with
each environment. See Agent Security for Global policies and supported Codex
Cloud overrides.

<a id="internet-access-and-network-proxy"></a>

## Connect to services

Configure access to the package registries, APIs, and other services your
workflow needs:

1. In the environment configuration, choose how much public internet access your
   workflow needs. Turn on **Enable all public internet access** for full public access.
   This includes the destinations covered by the package-manager and
   additional-domain controls, so those narrower controls are disabled.
2. To restrict public internet access, turn off **Enable all public internet access**, then allow
   package managers or add specific hosts under **Additional allowed domains**.
   Turning off full public access still permits these allowed destinations.
3. Save and test the services during setup. Publish or republish, then verify
   access in a new task.

Public internet access and [VPN access](#private-networking-vpn) are independent.
You can use either or both. Public internet settings apply to connections outside
Tailscale, even when a Tailscale subnet route uses public IP addresses. Restricting
public internet access doesn't disable the configured VPN.

For workspace requirements, see [Agent Security](#agent-security). Allowing a
destination doesn't supply credentials or grant permissions in that service.



### Domains included in the Package managers preset



The **Package managers** preset allows these registries, repositories, and
download hosts:

- **npm and Yarn:** `registry.npmjs.org`, `registry.yarnpkg.com`
- **PyPI and PyTorch:** `pypi.org`, `files.pythonhosted.org`, `download.pytorch.org`, `download-r2.pytorch.org`
- **Rust:** `crates.io`, `index.crates.io`, `static.crates.io`, `static.rust-lang.org`
- **Go:** `proxy.golang.org`, `sum.golang.org`
- **Maven and Gradle:** `repo.maven.apache.org`, `repo1.maven.org`, `plugins.gradle.org`, `plugins-artifacts.gradle.org`, `services.gradle.org`, `downloads.gradle.org`
- **Bazel:** `bcr.bazel.build`, `mirror.bazel.build`
- **Buf:** `buf.build`
- **CPAN:** `cpan.metacpan.org`
- **Ubuntu and Debian repositories:** `archive.ubuntu.com`, `security.ubuntu.com`, `ports.ubuntu.com`, `ppa.launchpadcontent.net`, `deb.debian.org`, `security.debian.org`
- **Vendor repositories:** `packages.microsoft.com`, `apt.buildkite.com`, `developer.download.nvidia.com`, `deb.nodesource.com`
- **GitHub source, archives, releases, and LFS:** `github.com`, `codeload.github.com`, `github-cloud.githubusercontent.com`, `github-cloud.s3.amazonaws.com`, `release-assets.githubusercontent.com`
- **Other downloads:** `dl.google.com`, `pkgconfig.freedesktop.org`

For registered root domains, Codex also allows the corresponding `www` hostname.
Other subdomains require their own allowed-domain entries. Add any other hosts
your dependencies require under **Additional allowed domains**.





For services reached over the public internet that filter connections by source IP, use the [agent egress IP feed](https://openai.com/chatgpt-agents.json).
Allow every published range, check the feed daily, and update the service's
allowlist when ranges change. These ranges are shared across customers; keep
the service's authentication and authorization controls in place.

<a id="connect-to-private-services-with-tailscale"></a>

## Private networking (VPN)

Give cloud tasks access to services on your private network through a VPN
connection. Tailscale uses your configured private DNS, subnet routes, and access
rules. You don't need a separate Codex IP or domain allowlist for destinations
reached through Tailscale, including HTTP, HTTPS, and other TCP services.

1. In the environment configuration, select the pencil icon beside **Tailscale**.
2. Enter the connection credentials from your VPN provider.
3. Configure the required routes, DNS, and access rules in Tailscale so the
   environment's VPN identity can reach the intended services.
4. Save, then publish or republish. Start a new task and test the service.

Tailscale is currently the supported VPN provider. When creating a Tailscale
auth key, enable both **Reusable** and **Ephemeral**. A reusable key lets new
cloud task VMs join your network. Tailscale automatically removes ephemeral
devices after they go offline. Support for additional VPN providers is planned.

Private IPv4 subnet routes are supported. Tasks can use Tailscale split
DNS and MagicDNS to reach private services by hostname.

If your service uses your organization's internal DNS, configure split DNS in
the Tailscale admin console to send queries for your internal domain to your DNS
server. Use the service's fully qualified hostname, such as
`api.corp.example.com`, which must resolve to an IPv4 address. The destination
must be reachable through your configured Tailscale routes and permitted by
your Tailscale access rules.

Tasks in a shared environment use its configured VPN identity.

### Connect to TCP services

Use the VPN to connect to TCP services such as databases or SSH. TCP destinations
must use IPv4 addresses routed through Tailscale. For hostnames, every resolved
IPv4 address must use those routes. Platform-protected addresses remain blocked.

TCP clients must connect through the environment's HTTP CONNECT proxy at
`proxy:8088`, either directly or through a local forwarding tool. For hostname
destinations, preserve the hostname for proxy-side DNS resolution. TCP tunnels
don't intercept TLS or inject network secrets: the client must supply the service's
credentials and verify its TLS certificate when applicable. Requests that need
[network-secret substitution](#configure-environment-variables-and-network-secrets)
must use the configured HTTPS proxy and meet the secret's allowed-domain rules;
substitution works on port 443.

After changing VPN configuration, save the changes, then publish or republish the
environment. Replace existing running environments to use the updated VPN
configuration. Start a new task and test access. Detaching the VPN from a draft
doesn't revoke existing connections; replace or terminate the affected environment
to revoke access.

<a id="connect-a-cloud-identity"></a>
<a id="configure-an-aws-role-connection"></a>
<a id="attach-an-azure-connection"></a>

## Access cloud resources with OIDC

OpenID Connect (OIDC) lets a task obtain short-lived credentials for cloud
resources. Your organization configures trust with the cloud provider and
grants the identity the permissions the workflow needs.

1. Open the saved environment's **Advanced** > **OIDC** settings.
2. Select **Add**, then choose an available connection or
   **Create connection…** for a supported provider.
3. For a new connection, enter the provider's identity details and create it.
   In the provider, configure trust using the displayed **Issuer**, **Audience**,
   and **Subject** or claim conditions, and grant resource permissions.
4. Confirm the connection is attached and review its alias. Save, then publish
   or republish the environment.
5. Start a new task and test an allowed operation and a denied operation.

Provider setup varies, and only supported connections can be attached.
The identity's permissions determine access; your personal provider permissions
don't transfer to it. Allow the required provider endpoints and service
destinations separately in the network policy.

Save attachment or alias changes to apply them during setup; publish or
republish to use them in new tasks. Editing a shared identity connection can
affect other environments that use it.



<a id="oidc-compatibility"></a>



### OIDC compatibility by provider



Compatibility depends on the service, operation, and client you use. Support
applies to the operations and clients listed here.

### AWS

| Service or workflow           | Status            | Scope and limitations                                                                                |
| ----------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------- |
| AWS CLI and boto3             | Supported         | Authentication and credential renewal.                                                               |
| Amazon S3                     | Supported         | Object reads and uploads, Terraform state, and presigned requests from within the Codex environment. |
| Amazon ECR                    | Supported         | Image pulls and pushes for private registries.                                                       |
| AWS CodeArtifact              | Supported         | npm and Python package installation and publishing.                                                  |
| Amazon EKS                    | Supported         | `kubectl`, Helm, logs, exec, and port forwarding.                                                    |
| Amazon ECS                    | Supported         | Fargate exec and port forwarding.                                                                    |
| Amazon Bedrock                | Supported         | Nova Micro text inference and streaming. Other models are not covered.                               |
| Amazon RDS IAM database login | Not yet supported | PostgreSQL and MySQL IAM database authentication.                                                    |

### Google Cloud

| Service or workflow                | Status            | Scope and limitations                                                                                                       |
| ---------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `gcloud` and Cloud Storage         | Supported         | `gcloud`, Terraform state, object reads, and uploads, including resumable uploads.                                          |
| Artifact Registry containers       | Supported         | Docker image pulls and pushes, tested with layers up to 1 GiB.                                                              |
| Artifact Registry packages         | Supported         | npm, Python, and Maven package installation and publishing. Uploads are limited to 10 MiB. Maven uses `gcloud` credentials. |
| Google Kubernetes Engine (GKE)     | Supported         | `kubectl`, deployments, logs, exec, and port forwarding.                                                                    |
| IAM, Secret Manager, and Cloud KMS | Supported         | Service account management, secret operations, and KMS encryption and signing. Service account key export is excluded.      |
| Cloud SQL IAM database login       | Not yet supported | IAM database authentication.                                                                                                |

### Azure

| Service or workflow                      | Status            | Scope and limitations                                    |
| ---------------------------------------- | ----------------- | -------------------------------------------------------- |
| Azure CLI and identity profiles          | Supported         | Authentication and profile selection.                    |
| Resource Manager, Blob Storage, and ADLS | Not yet supported | OIDC workflows for these services are not yet supported. |
| Container Registry image pulls           | Not yet supported | Image pulls are not yet supported.                       |
| Container Registry image pushes          | Not yet supported | Image pushes are unavailable.                            |





<a id="how-codex-cloud-tasks-run"></a>
<a id="how-codex-cloud-chats-run"></a>

## Run and return to a task

Select a published environment and describe your goal. Codex uses its
repositories and tools to edit files, run commands, and check its work.
Review changes and test results before committing or opening a pull request.

### Continue on web or mobile

On the web, choose **Work in** > **Cloud** and select an environment. On mobile,
open **Codex** and choose an available environment. Create new environments
on the web or in the desktop app.

Reopen the same task to continue its work across devices. A new task starts
separate work from the published setup. Tasks in Codex Cloud can keep working while
your computer is asleep.

<a id="start-work-from-a-team-conversation"></a>

### Start tasks from Slack or Microsoft Teams

In an Enterprise workspace with Cloud delegation enabled, ask `@ChatGPT` in
Slack or Microsoft Teams to work on a repository. Codex uses the conversation
context to choose an environment shared with your workspace and available to
the account running the task. You can name a preferred environment or add
guidance in your prompt.

For Slack, workspaces with Codex Cloud role-based access control must grant
Codex Cloud access to both the deployment's service account and the requesting
user. See [Enable Codex Cloud for Slack](https://learn.chatgpt.com/docs/enterprise/chatgpt-slack-and-teams#enable-codex-cloud-for-slack)
for admin setup.

Complete any connection and approval prompts, then review the result in the
conversation. Follow up from the same connected account to continue the task;
another participant's request doesn't automatically continue your task.

See [Manage ChatGPT in Slack and Teams](https://learn.chatgpt.com/docs/enterprise/chatgpt-slack-and-teams#before-you-start)
for workspace setup and [Use ChatGPT in Slack](https://learn.chatgpt.com/docs/third-party/slack#review-approvals-and-results) for
Slack task controls.

## VM specifications

Each cloud task runs in a VM with these default resources:

| ChatGPT plan              | vCPUs | Memory | Disk space |
| ------------------------- | ----: | -----: | ---------: |
| Plus, Edu Plus            |     2 |  8 GiB |      8 GiB |
| Pro, Business, Enterprise |     4 | 16 GiB |     32 GiB |
| Edu, Edu Pro              |     4 | 16 GiB |     32 GiB |

By default, a task's saved VM state is recoverable for up to seven days after you
last start a turn or resume the task.

Larger VMs and custom specifications are available for Enterprise. Contact your
OpenAI account team for available configurations and pricing.

## Current limitations

The following capabilities aren't currently supported in cloud environments
and are on our roadmap:

- Computer and browser use
- GitLab and self-hosted GitHub Enterprise Server

Skills stored in your repository are available in cloud tasks. Personal skills
from your local computer aren't synced to cloud environments.

## Troubleshoot setup and runtime access

### Setup fails or a required tool is missing

Check the setup conversation for the command that failed. Ask Codex to diagnose
the error and rerun the command after fixing it. For example: "Install pnpm and
run the project's tests."

- If initial setup fails, select **Try again** to retry with the repositories
  already selected in that setup session.
- If the fix requires changing source files, a package manifest, or a lockfile,
  make that change in a coding task, then return to setup.

After Codex verifies the setup, publish or republish the environment.

### A package download or HTTPS request fails

Check the destination hostname and authentication separately:

1. Confirm the host is allowed by the environment's
   [internet-access settings](#connect-to-services). For a private registry at
   `packages.example.com`, check that exact hostname. If downloads also use
   `downloads.example.com`, that host needs access too.
2. Check the package manager or client's configured URL and credentials.
   Allowing a domain doesn't grant access to the service.
3. If authentication uses a network secret, check that its **Allowed domains**
   include the destination and that the request uses HTTPS on port 443.
4. In an Enterprise workspace, ask an admin to check the applicable
   [Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security) requirements alongside
   the environment's settings.

Save any configuration changes and test the request during setup. Publish or
republish, then verify access in a new task.

### A required value is missing or isn't usable

Check that you added the value to the right place in the environment configuration:

- **Environment variables:** use these for values that programs need to read
  directly, such as `APP_MODE=development`.
- **HTTP secrets:** use these for credentials sent to an allowed HTTPS
  service, such as a private registry token. Programs receive a placeholder;
  the proxy substitutes the credential in matching requests. If the program
  needs to read the raw value, add it under **Environment variables**.

For a personal value, check that its **Key** matches the environment's request
and that **Applies to** includes that environment. A value for a specific
environment takes precedence over a general default.

See [Environment variables and network secrets](#configure-environment-variables-and-network-secrets)
for setup instructions.

### VPN connects, but an HTTP or HTTPS service is unreachable

1. Confirm the client uses the environment's configured HTTP/HTTPS proxy.
   When testing with `curl`, omit `--noproxy` so the request uses that proxy.
2. For Tailscale destinations, check the VPN's routes and access rules. For
   public internet destinations, check the environment's allowed domains.
3. If the service is reachable by IP address but not by hostname, check your
   Tailscale DNS settings. For an internal company domain, verify that split DNS
   points to the correct DNS server and that the server is reachable through
   your Tailscale network. Use the service's fully qualified hostname and confirm it
   resolves to an IPv4 address.

See [Private networking](#private-networking-vpn) for connection setup.

### An environment or its updates aren't available for a task

Check the environment in **Settings** > **Codex Cloud** > **Environments**.
If it has an **Unpublished** badge, finish setup and select **Publish** to make
it available for tasks.

For changes to a published environment, open its **Edit** flow, let Codex prepare
and test the changes, then select **Republish**. Start a new task from the updated
environment to use the new setup. Existing tasks keep their own working state.