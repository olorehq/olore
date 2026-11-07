# Codex security cookbook

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

<noscript>
  
</noscript>

Rolling out Codex means deciding which accounts, files, and services it should be able to access and which actions it should be able to take. This cookbook helps enterprise administrators turn those decisions into configuration, test the results, and understand where additional protections are needed.

These security recommendations are intended to help you give developers useful access to Codex while reducing the risk of unintended changes, exposure of sensitive data, and changes to the safeguards themselves. Use them to choose controls that fit your workflows and risk requirements, understand their limits, and verify how they work in your environment. They complement the identity, endpoint, network, and service protections your organization already manages.

You can start with a specific task—such as restricting sign-in to your company workspace—or a broader goal, such as letting developers use Codex while protecting production.

Choose the starting point that fits your work:

- **Configuration recipes** walk through individual controls, with setup instructions, verification checks, rollback guidance, and limitations.

- **Combined recipes** show how to combine several controls with protections in your identity, source control, deployment, and other systems to meet a common security goal.

The examples give you a starting point to adapt to your organization. Use each configuration example with its accompanying guidance: where it belongs, which clients or environments it applies to, and what it does and does not control.

Before a wider rollout, try the configuration on a test endpoint. Check that an intended workflow succeeds and an intentionally restricted action is blocked. Use those results to refine the setup and explain the boundaries to the people who will use Codex.

## Choose your starting point

Use the page outline to open a section below.

| If you want to                                       | Start with                                                                                                    |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Configure one specific control                       | [Configuration recipes](#configuration-recipes)                                                               |
| Let developers use Codex while protecting production | [Let developers use Codex while protecting production](#let-developers-use-codex-while-protecting-production) |
| Reduce the risk of publishing internal code          | [Reduce the risk of publishing internal code](#reduce-the-risk-of-publishing-internal-code)                   |
| Keep Codex from changing its own safeguards          | [Keep Codex from changing its own safeguards](#keep-codex-from-changing-its-own-safeguards)                   |

The combined recipes include the relevant controls, external protections, and checks for each goal.

## Start here

1. Inventory the surfaces in scope: desktop app, CLI, IDE extension, Codex Cloud, CI runners, and remote hosts.

2. Pilot the configuration on a test endpoint before a broad rollout.

3. Record the minimum supported Codex version. Permission-profile allowlists require Codex 0.138.0 or later.

4. Keep a rollback copy of each managed configuration bundle.

5. Test one allowed workflow and one intentionally blocked workflow after every change.

Managed requirements are admin-enforced constraints; managed defaults are startup values. Use requirements for supported authentication, sandbox, approval, MCP, plugin, hook, and network restrictions. Authentication requirements must be delivered locally or through macOS MDM; cloud-managed requirements do not enforce them. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) and the [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference).

### Where configuration belongs

Adapt these example configurations to your organization before rolling them out to a pilot group. The TOML blocks are policy fragments: merge the settings you need into your existing files, without duplicating tables, and replace example names, domains, and paths. The checks describe expected outcomes to validate in your environment.

For local Codex, an administrator can deploy enforced requirements in `/etc/codex/requirements.toml` on macOS and Linux or `%ProgramData%\OpenAI\Codex\requirements.toml` on Windows. On managed macOS devices, an MDM can deliver the `com.openai.codex:requirements_toml_base64` preference. Cloud-managed policy can also be configured in the Admin Console under **Agent Security** by selecting a policy, choosing the applicable environment or OS, and configuring **Requirements**. Protect the policy file and its parent directory from modification by the Codex user. Settings in a regular `config.toml` or managed Defaults provide startup values rather than enforced requirements. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) and [Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security).

## Configuration recipes

Choose the control you need. Open a recipe to see its configuration, verification checks, rollback guidance, and limitations. Check items as you verify them; progress is saved in this browser when browser storage is available.

| Control               | Recipe                                                                                        |
| --------------------- | --------------------------------------------------------------------------------------------- |
| Authentication        | [Restrict sign-in to the company workspace](#restrict-sign-in-to-the-company-workspace)       |
| Runtime permissions   | [Restrict permission profiles and Full Access](#restrict-permission-profiles-and-full-access) |
| MCP servers           | [Allow only approved MCP servers](#allow-only-approved-mcp-servers)                           |
| Monitoring and audit  | [Monitor Codex activity](#monitor-codex-activity)                                             |
| Networking            | [Restrict network destinations](#restrict-network-destinations)                               |
| Files and credentials | [Protect secrets and unrelated repositories](#protect-secrets-and-unrelated-repositories)     |
| Sensitive commands    | [Require approval for sensitive commands](#require-approval-for-sensitive-commands)           |



<a id="restrict-sign-in-to-the-company-workspace"></a>



### Restrict sign-in to the company workspace



<PersistentChecklist client:load id="codex-security-cookbook-restrict-sign-in-to-the-company-workspace" itemIds={["sign-out-of-codex", "try-a-personal-chatgpt-account-expected-personal-workspace-rejected", "try-codex-apikey-login-expected-rejected", "sign-in-with-the-corporate-account-and-approved-workspace", "restart-the-desktop-app-cli-and-ide-extension-then"]} description="This browser could not save your verification progress.">

Use this recipe when employees should sign in to Codex through your company’s ChatGPT workspace, with personal ChatGPT accounts and API-key authentication prohibited on managed endpoints.

> **Intended result**
>
> On company-managed devices, Codex accepts only ChatGPT sign-in to the company’s ChatGPT workspace.

#### Prerequisites

- The UUID of the approved ChatGPT Enterprise workspace.

- A way to distribute Codex managed configuration to endpoints.

- A decision to prohibit API-key authentication on managed endpoints.

#### Configure

1. Record the approved workspace UUID in your internal configuration repository.

2. Add enforced authentication requirements to the local `requirements.toml`:

```toml
   allowed_login_methods = ["chatgpt"]
   allowed_chatgpt_workspaces = ["00000000-0000-0000-0000-000000000000"]
```

   The first key permits only ChatGPT authentication; the second restricts sign-in to the approved workspace. Replace the illustrative UUID with your workspace UUID. See the [requirements reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml).

3. Deploy through local `requirements.toml` or macOS MDM requirements using the paths in [Where configuration belongs](#where-configuration-belongs). These authentication requirements apply before credentials load and before cloud policy is retrieved; Codex ignores them in cloud-managed requirements. Protect the file and its parent directory from user modification. Legacy `managed_config.toml` defaults do not enforce this restriction.

4. During the pilot, sign users out or remove previously stored personal Codex sessions. Do not assume a new policy retroactively invalidates an existing session.

5. Pair the login restriction with workspace roles and group access. Authentication controls which identity signs in; RBAC controls which Codex features that identity may use. See [Authentication](https://learn.chatgpt.com/docs/auth).

#### Verify

- [ ] Sign out of Codex.

- [ ] Try signing in with a personal ChatGPT account. Expected: Sign-in to the personal workspace is rejected.

- [ ] Try Codex API-key login. Expected: API-key login is rejected.

- [ ] Sign in to the approved workspace with the corporate account. Expected: Sign-in succeeds.

- [ ] Restart the desktop app, CLI, and IDE extension, then repeat.

#### Roll back

Restore the previous local authentication requirements and redeploy the reviewed bundle.

#### Boundaries

This controls managed Codex clients on managed endpoints. Pair it with endpoint application controls and network policy if the requirement is “no personal Codex use from corporate assets.”

</PersistentChecklist>







<a id="restrict-permission-profiles-and-full-access"></a>



### Restrict permission profiles and Full Access



<PersistentChecklist client:load id="codex-security-cookbook-restrict-permission-profiles-and-full-access" itemIds={["open-the-permissions-picker-expected-full-access-unavailable-or", "launch-with-dangerouslybypassapprovalsandsandbox-expected-rejected-or-forced-to-a", "launch-with-sandbox-dangerfullaccess-askforapproval-never-expected-rejected", "run-a-normal-workspace-task-expected-workspace-work-succeeds"]} description="This browser could not save your verification progress.">

Use this recipe when developers need read-only or workspace-scoped access, and you want to prevent them from selecting Full Access or bypassing approvals and sandboxing with `--yolo`.

> **Intended result**
>
> Users can select only approved read-only or workspace-scoped profiles. They cannot select `danger-full-access`, `approval_policy = "never"`, or `--yolo`.

#### Configure

1. Define an approved workspace profile:

```toml
   [permissions.corp-workspace]
   description = "Company workspace access with no unrestricted host access."
   extends = ":workspace"
```

2. Enforce the allowed profiles and approval policies:

```toml
   allowed_approval_policies = ["on-request", "untrusted"]
   allowed_approvals_reviewers = ["user"]
   default_permissions = "corp-workspace"

   [allowed_permission_profiles]
   ":read-only" = true
   "corp-workspace" = true
   ":danger-full-access" = false
```

   The allowlist is complete: profiles omitted from the allowlist or set to false are denied, including profiles added in future versions. See the [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference).

3. For legacy clients that still use `sandbox_mode`, use:

```toml
   allowed_approval_policies = ["on-request", "untrusted"]
   allowed_sandbox_modes = ["read-only", "workspace-write"]
```

4. Deliver this as admin-enforced requirements, not a user-editable config file.

5. If you later permit Auto-review, add it deliberately after testing. Auto-review changes who reviews a boundary crossing; it does not restore a removed boundary. See [Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review).

#### Verify

- [ ] Open the permissions picker. Expected: Full Access is unavailable or rejected.

- [ ] Launch with `--dangerously-bypass-approvals-and-sandbox`. Expected: Codex rejects the launch or forces a compatible profile.

- [ ] Launch with `--sandbox danger-full-access --ask-for-approval never`. Expected: The launch is rejected.

- [ ] Run a normal workspace task. Expected: The task succeeds; boundary crossings still require approval.

#### Roll back

Restore the prior requirements bundle. Keep unrestricted access blocked unless there is a separately approved exception.

#### Boundaries

This controls Codex runtime permissions. It does not make a privileged operating-system account unprivileged.

</PersistentChecklist>







<a id="allow-only-approved-mcp-servers"></a>



### Allow only approved MCP servers



<PersistentChecklist client:load id="codex-security-cookbook-allow-only-approved-mcp-servers" itemIds={["configure-the-approved-server-exactly-expected-starts", "change-one-url-character-expected-disabled", "change-the-stdio-argument-count-or-order-or-supply", "in-a-disposable-trusted-project-try-harmless-cwd-env", "add-an-unapproved-name-expected-disabled", "test-a-pluginbundled-server-expected-only-the-approved-identity"]} description="This browser could not save your verification progress.">

Use this recipe when your organization needs to decide which MCP servers Codex may use and enforce an approved list.

Allowing a server and configuring it are separate steps. An allowlist entry permits a matching server; it does not create the server configuration. Configure the server separately with the matching name and identity, along with the authentication it requires.

> **Intended result**
>
> Codex enables only MCP servers whose configured name and identity match the enterprise-approved list.

#### Configure

1. Inventory each approved server: owner, purpose, transport, exact executable or URL, authentication, data classification, and write-capable tools.

2. Start with deny-all. An empty managed table disables all MCP servers:

```toml
   [mcp_servers]
```

3. Add approved HTTP servers by exact URL:

```toml
   [mcp_servers.internal_docs]
   identity = { url = "https://mcp.example.com/docs" }
```

4. Add approved stdio servers by executable and positional arguments:

```toml
   [mcp_servers.internal_build.identity]
   command = { executable = "/usr/local/bin/company-mcp", args = [
     { match = "exact", value = "serve" },
     { match = "prefix", value = "--workspace=" },
   ] }
```

   The structured matcher checks the executable, argument count, and argument order. It does not constrain `cwd`, `env`, or `env_vars`. Treat control of the full launch context as a prerequisite for approving a stdio server: protect its executable and dependencies, and prevent untrusted user or project configuration from supplying a working directory or environment that can change its behavior. If you cannot enforce that boundary independently, leave the stdio server unapproved and use a reviewed HTTP server instead.

5. Add plugin-bundled MCP identities separately under `plugins.<plugin>.mcp_servers.<server>`.

6. Store the approved list in a reviewed configuration repository and deploy it through admin-enforced requirements.

The client enables a server only when both its name and identity match an approved entry. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration).

#### Verify

- [ ] Configure the approved server exactly. Expected: The server starts.

- [ ] Change one URL character. Expected: The server is disabled.

- [ ] Change the stdio argument count or order, or supply an argument outside the configured argument rules. Expected: The server is disabled. Values that still satisfy an allowed prefix remain permitted.

- [ ] In a disposable trusted project, try harmless `cwd`, `env`, and `env_vars` overrides while retaining the matching executable and arguments. Identity matching alone does not reject these overrides. Verify that your independent launch-context control rejects unsafe overrides or that the stdio server remains unapproved; do not use a real injection payload.

- [ ] Add an unapproved name. Expected: The server is disabled.

- [ ] Test a plugin-bundled server. Expected: The server works only with the approved identity.

#### Roll back

Remove the newly added entry. To stop all MCP usage immediately, deploy an empty `mcp_servers` table.

#### Boundaries

Identity allowlisting does not prove that a server’s tools, upstream data, credentials, or launch environment are safe. Local stdio MCP processes run outside the local command sandbox; matching an executable and arguments does not constrain the server’s access or prevent environment-based code loading. Review the full launch context and server permissions independently. See [MCP identity requirements](https://learn.chatgpt.com/docs/enterprise/managed-configuration#enforce-command-rules-from-requirements).

</PersistentChecklist>







<a id="monitor-codex-activity"></a>



### Monitor Codex activity



<PersistentChecklist client:load id="codex-security-cookbook-monitor-codex-activity" itemIds={["reads-one-allowed-file", "attempts-one-blocked-file-read", "runs-one-allowed-command", "attempts-one-blocked-egress-request", "requests-and-receives-a-denied-approval", "ends-the-session", "otel-shows-runtool-events", "hooks-show-the-lifecycle", "proxy-logs-show-allowed-and-blocked-destinations", "compliance-ingestion-receives-supported-records", "the-siem-correlates-them-to-the-user-or-workload"]} description="This browser could not save your verification progress.">

Use this recipe when your security team needs to understand what Codex is doing on endpoints and in your network. It brings together run and tool events, approval decisions, workspace audit records, and network logs for investigation.

> **Intended result**
>
> Security teams can correlate Codex runs, tool decisions, approvals, workspace audit records, and actual network egress without relying on the model’s own narrative.

#### Use four evidence sources

1. Codex OpenTelemetry: run, API, model, sandbox, approval, and tool events.

2. Managed lifecycle hooks: endpoint-side records around tool use and permission requests.

3. Network proxy or gateway logs: actual DNS/HTTP destinations and connection outcomes.

4. Compliance API: workspace-level audit and investigation records.

No single source provides complete network monitoring.

#### Configure

1. Send Codex OpenTelemetry logs to your collector, with raw prompts redacted:

```toml
   [otel]
   environment = "enterprise"
   log_user_prompt = false

   [otel.exporter.otlp-http]
   endpoint = "https://otel.example.com/v1/logs"
   protocol = "binary"
   headers = { "x-otlp-api-key" = "${OTLP_TOKEN}" }
```

   Provide `OTLP_TOKEN` to the Codex process through your approved secret manager or process environment before starting the client. Keep the token out of deployed TOML files and source control.

   Codex can emit conversation starts, API requests, streaming events, prompt metadata, tool decisions, and tool results. See [Advanced Configuration](https://learn.chatgpt.com/docs/config-file/config-advanced).

2. Deploy OTel outside project-local configuration. Project `.codex/config.toml` files cannot override telemetry routing.

3. Add managed lifecycle hooks for `SessionStart`, `PreToolUse`, `PermissionRequest`, `PostToolUse`, `Stop`, and `SessionEnd`.

4. Install hook scripts in an administrator-managed directory and set `allow_managed_hooks_only = true` if user, project, and plugin hooks should be ignored.

5. Route sandboxed command traffic through an independently logged proxy. OTel records that a tool ran; the proxy records where the subprocess attempted to connect.

6. Configure separate telemetry for web search, apps, connectors, MCP servers, browser activity, and Codex Cloud. Local command proxy rules do not automatically cover them.

7. Stream supported Compliance API records into the SIEM and apply your own retention and legal-hold controls. See [Compliance API and audit events](https://learn.chatgpt.com/docs/enterprise/compliance-api).

8. Correlate user or service account, host or runner, conversation ID, model, client version, permission profile, approval decision, destination, and tool name.

#### Verify

Run a controlled session that does the following:

- [ ] Reads one allowed file.

- [ ] Attempts one blocked file read.

- [ ] Runs one allowed command.

- [ ] Attempts one blocked egress request.

- [ ] Requests approval and receives a denial.

- [ ] Ends the session.

Expected results by evidence source:

- [ ] OTel shows run and tool events.

- [ ] Hooks show the session lifecycle.

- [ ] Proxy logs show allowed and blocked destinations.

- [ ] Compliance ingestion receives supported records.

- [ ] The SIEM correlates those records with the user or workload.

#### Roll back

Disable the exporter and hooks by restoring the previous configuration. Do not remove independent proxy logging as part of a telemetry rollback.

#### Boundaries

Do not promise that Codex telemetry captures every command argument, output byte, or network packet. Document the coverage of each layer.

</PersistentChecklist>







<a id="restrict-network-destinations"></a>



### Restrict network destinations



<PersistentChecklist client:load id="codex-security-cookbook-restrict-network-destinations" itemIds={["request-an-approved-domain-expected-succeeds", "request-an-unapproved-domain-expected-blocked", "request-localhosthttplocalhost-a-private-ip-and-a-cloud-metadata", "in-cloud-attempt-post-to-an-allowed-domain-expected", "confirm-proxygateway-logs-contain-both-allowed-and-denied-requests"]} description="This browser could not save your verification progress.">

Use this recipe when Codex should have no internet access or should reach only approved destinations. Choose the local or cloud procedure for the environment you are configuring, and keep their separate policy scopes in mind.

> **Intended result**
>
> Codex has no internet access, or reaches only approved domains, according to the configuration you choose. Codex Cloud (Legacy) environments can additionally restrict HTTP methods.

#### Configure current Codex Cloud

1. Create separate environments for different trust levels, such as no-internet-review, approved-dependencies-build, and cyber-lab.

2. In the environment configuration, turn off **Enable all public internet access** and **Enable package manager domains**.

3. When public internet access is required, add exact approved hosts under **Additional allowed domains**. Remove **HTTP secrets** that allow unapproved public destinations. To block public internet access outside the VPN, leave that list empty and remove **HTTP secrets** that allow public destinations.

4. Save and test the services during setup. Publish or republish the environment, then test access to approved and unapproved destinations in a new task. Review setup scripts separately: pin dependencies, prefer approved mirrors, and avoid executable downloads that have not been reviewed.

See [Connect to services](https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services). Current Codex Cloud settings do not provide the Legacy HTTP-method selector.

#### Configure Codex Cloud (Legacy)

1. Keep agent internet access **Off** when unnecessary. Legacy Cloud blocks internet during the agent phase by default; setup scripts still run with internet access for dependency installation.

2. When agent access is required, turn it **On** with a narrow allowlist. Start with **None** and add exact domains.

3. For download-only workflows, allow only `GET`, `HEAD`, and `OPTIONS`. This blocks `POST`, `PUT`, `PATCH`, `DELETE`, and other methods. Review setup scripts separately because the agent-phase restriction does not govern their internet access.

See [Legacy agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access). These presets and HTTP-method controls apply only to Legacy Cloud.

#### Configure local Codex

1. In administrator-managed `requirements.toml`, define and select the approved network profile, and restrict users to that profile:

```toml
   default_permissions = "corp-build"

   [allowed_permission_profiles]
   "corp-build" = true

   [permissions.corp-build]
   description = "Workspace access with approved dependency destinations."
   extends = ":workspace"

   [permissions.corp-build.network]
   enabled = true
   allow_local_binding = false

   [permissions.corp-build.network.domains]
   "registry.npmjs.org" = "allow"
   "pypi.org" = "allow"
   "files.pythonhosted.org" = "allow"
```

2. Deploy the reviewed requirements bundle using [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration). A named profile alone is inactive; `default_permissions` selects it, and the allowlist prevents selection of other profiles.

3. Activate the administrator-managed proxy in the same requirements bundle so domain restrictions are enforced and users cannot expand them. Deploy the proxy and network-enabled profile together; a network-enabled profile without an active proxy grants direct network access without enforcing its domain rules:

   > **Caution:** `[experimental_network]` is experimental and may change. Validate it on each supported local client version and operating system before broader rollout. Windows support is limited; do not apply this policy to Windows users until you have tested enforcement in your environment.

```toml
   [experimental_network]
   enabled = true
   managed_allowed_domains_only = true

   [experimental_network.domains]
   "registry.npmjs.org" = "allow"
   "pypi.org" = "allow"
   "files.pythonhosted.org" = "allow"
```

4. Keep local port binding off unless the workflow needs it. Configure access to private network targets separately; allowing a domain does not by itself approve its private addresses. See [Network access requirements](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-network-access-requirements).

5. Configure web search, apps, MCP servers, browser activity, and Codex Cloud separately. Local sandbox rules do not control them.

#### Verify

- [ ] Send a request to an approved domain and confirm that it succeeds.

- [ ] Send a request to an unapproved domain and confirm that it is blocked.

- [ ] Send requests to [localhost](http://localhost), a private IP, and a cloud metadata endpoint. Confirm that each request is blocked unless explicitly approved.

- [ ] In Codex Cloud (Legacy), attempt a `POST` request to an allowed domain. Confirm that the request is blocked when only `GET`, `HEAD`, and `OPTIONS` are allowed.

- [ ] Confirm that proxy or gateway logs contain entries for both allowed and denied requests.

#### Roll back

Return the environment to Off or restore the prior domain policy. Avoid rolling back to unrestricted internet.

#### Boundaries

An approved full sandbox escalation can bypass the local command proxy. Test ordinary sandboxed commands and approved escalated commands separately before relying on the restriction.

An allowed domain can still host prompt injection, compromised packages, or unsafe documentation.

</PersistentChecklist>







<a id="protect-secrets-and-unrelated-repositories"></a>



### Protect secrets and unrelated repositories



<PersistentChecklist client:load id="codex-security-cookbook-protect-secrets-and-unrelated-repositories" itemIds={["read-a-normal-file", "read-each-canary", "search-recursively-for-secrets", "print-its-command-environment", "read-a-neighboring-repository"]} description="This browser could not save your verification progress.">

Use this recipe when Codex needs access to approved source directories while secrets, `.env` files, SSH keys, and unrelated repositories should remain out of reach. It covers restricting file access and reducing the number of credential-bearing environment variables passed to spawned commands.

> **Intended result**
>
> Codex can work in approved source directories but cannot read common secret-bearing files or inherit a broad set of credential-bearing environment variables.

#### Configure

1. Define deny-read patterns in a workspace profile:

```toml
   [permissions.corp-workspace]
   description = "Workspace edits with secret-bearing paths denied."
   extends = ":workspace"

   [permissions.corp-workspace.filesystem]
   glob_scan_max_depth = 6

   [permissions.corp-workspace.filesystem.":workspace_roots"]
   "**/.env*" = "deny"
   "**/*.pem" = "deny"
   "**/*.p12" = "deny"
   "**/id_*" = "deny"
   "**/.aws/**" = "deny"
   "**/.kube/**" = "deny"
```

2. Add exact deny paths for known credential directories, signing keys, production configuration, and neighboring repositories.

3. In the system `/etc/codex/config.toml` or the user `~/.codex/config.toml`, reduce the environment variables passed to spawned commands:

```toml
   [shell_environment_policy]
   inherit = "core"
   ignore_default_excludes = false

   [shell_environment_policy.filters]
   "AWS_*" = "exclude"
   "AZURE_*" = "exclude"
   "GITHUB_*" = "exclude"
   "*_TOKEN" = "exclude"
   "*_SECRET" = "exclude"
   "*_PASSWORD" = "exclude"
```

   This is a user-configurable default, not an enforced requirement. It reduces inherited variables but does not prevent access to credential files, helpers, shell startup content, or other identities. See [Advanced Configuration](https://learn.chatgpt.com/docs/config-file/config-advanced).

4. In the administrator-managed `requirements.toml`, select the restricted profile and allow only that profile. Built-in profiles do not inherit its secret-file denies:

```toml
   default_permissions = "corp-workspace"

   [allowed_permission_profiles]
   "corp-workspace" = true
   ":danger-full-access" = false
```

5. Choose the credential flow for your Cloud environment:
   - In current Codex Cloud, use **HTTP secrets** for credentials sent to an allowed HTTPS service. Programs receive a placeholder, and the proxy substitutes the real value for approved destinations on port 443 during setup and tasks. The raw credential is not placed in a local process or file. Direct environment variables are available to programs. See [Environment variables and network secrets](https://learn.chatgpt.com/docs/environments/cloud-environments#configure-environment-variables-and-network-secrets).
   - In Codex Cloud (Legacy), secrets support setup-time authentication and are removed before the agent phase; environment variables remain for the full chat. See [Legacy Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment).

6. If the agent needs authentication, use an independent broker to provide short-lived credentials scoped to the exact target and action. See [Recommended configuration](https://learn.chatgpt.com/docs/cyber-safety/recommended-configuration).

#### Verify

Create harmless canaries:

```plain text
.env.test
test-key.pem
.aws/credentials
.kube/config
```

Then ask Codex to:

- [ ] Read a normal file.

- [ ] Read each canary.

- [ ] Search recursively for secrets.

- [ ] Print its command environment.

- [ ] Read a neighboring repository.

Expected: Reading a normal file succeeds; denied files and neighboring repositories remain inaccessible, and excluded variables are absent from the command environment.

#### Roll back

Restore the prior profile, but retain high-confidence secret-file denies while investigating workflow failures.

#### Boundaries

Filesystem denies do not remove secrets already pasted into prompts, committed to readable source, returned by connectors, or written into model-accessible logs.

</PersistentChecklist>







<a id="require-approval-for-sensitive-commands"></a>



### Require approval for sensitive commands



<PersistentChecklist client:load id="codex-security-cookbook-require-approval-for-sensitive-commands" itemIds={["run-git-status-expected-no-sensitiveaction-approval", "run-git-push-expected-approval-prompt", "run-terraform-apply-expected-approval-prompt", "run-kubectl-delete-pod-test-expected-approval-prompt", "run-rm-rf-testdirectory-expected-forbidden", "deny-one-approval-expected-command-does-not-run-and", "restart-the-client-and-repeat-expected-rule-remains-enforced"]} description="This browser could not save your verification progress.">

Use this recipe when actions such as `git push`, deployments, database migrations, and cloud CLI commands need approval before they run. Decide which commands should prompt for review and which must be forbidden, then configure rules for those commands.

> **Intended result**
>
> Sensitive commands consistently pause for approval or are forbidden, even when the model believes they are appropriate.

#### Configure

1. Decide which commands require a prompt and which are forbidden.

| Command class                | Decision  |
| ---------------------------- | --------- |
| `git push`, `git commit`     | Prompt    |
| `terraform apply`            | Prompt    |
| `kubectl apply/delete/patch` | Prompt    |
| database migrations          | Prompt    |
| destructive host commands    | Forbidden |

2. Add admin-enforced command rules:

```toml
   [rules]
   prefix_rules = [
     { pattern = [{ token = "git" }, { any_of = ["push", "commit"] }], decision = "prompt", justification = "Require review before mutating shared Git state." },
     { pattern = [{ token = "terraform" }, { token = "apply" }], decision = "prompt", justification = "Require review before infrastructure changes." },
     { pattern = [{ token = "kubectl" }, { any_of = ["apply", "delete", "patch"] }], decision = "prompt", justification = "Require review before Kubernetes changes." },
     { pattern = [{ token = "rm" }], decision = "forbidden", justification = "Destructive removal is not permitted in managed Codex workflows." },
   ]
```

   Requirements rules can require a prompt or forbid a command; they cannot allow one. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration).

3. For high-risk profiles, add a shell-wrapper entry to the same `prefix_rules` array when wrappers could obscure a sensitive command:

```toml
   { pattern = [{ any_of = ["bash", "sh", "zsh"] }], decision = "prompt", justification = "Review shell wrappers that could obscure sensitive commands." },
```

   The shell-wrapper entry is noisy; use it selectively.

4. If a person must approve commands, enforce these settings:

```toml
   allowed_approval_policies = ["on-request", "untrusted"]
   allowed_approvals_reviewers = ["user"]
```

   Auto-review changes the reviewer; it is not a deterministic security guarantee. See [Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review).

5. Send PermissionRequest, tool-decision, and tool-result events to the security pipeline.

#### Verify

- [ ] Run `git status`. Expected: No approval prompt appears.

- [ ] Run `git push`. Expected: An approval prompt appears.

- [ ] Run `terraform apply`. Expected: An approval prompt appears.

- [ ] Run `kubectl delete pod test`. Expected: An approval prompt appears.

- [ ] Run `rm -rf test-directory`. Expected: The command is forbidden.

- [ ] Deny one approval request. Expected: The command does not run, and the denial is logged.

- [ ] Restart the client and repeat the checks. Expected: The rule remains enforced.

#### Roll back

Restore the prior requirements bundle. Narrow an overly broad token pattern instead of removing an entire sensitive command class.

#### Boundaries

Prefix rules are not a complete operating-system policy engine. Pair them with sandboxing, least-privilege OS accounts, network restrictions, cloud IAM, branch protection, deployment approvals, and database authorization.

</PersistentChecklist>





## Combined recipes for enterprise security goals

These examples show how to combine controls for common enterprise security goals. Test the configuration on each client and environment in scope.



<a id="let-developers-use-codex-while-protecting-production"></a>



### Let developers use Codex while protecting production



<PersistentChecklist client:load id="codex-security-cookbook-let-developers-use-codex-while-protecting-production" itemIds={["run-a-normal-workspace-task-expected-the-normal-task", "attempt-a-representative-sensitive-command-and-deny-the-approval", "verify-the-codex-identity-cannot-obtain-production-write-access", "restart-the-client-and-repeat"]} description="This browser could not save your verification progress.">

**Uses these configuration recipes:** Restrict permission profiles and Full Access; Protect secrets and unrelated repositories; Require approval for sensitive commands.

Developers have legitimate production access, but you want Codex to help with development without making unreviewed production changes.

- Define an approved workspace profile and enforce the allowed profiles and approval policies. Deliver these settings as administrator-enforced requirements to prevent users from overriding them.

- Run Codex under a separate, lower-privilege identity or in an environment that cannot access or obtain production write credentials. Developers can retain production access through a separate authorized workflow.

- Minimize environment variables passed to spawned commands. If the agent needs authentication, use an independent broker to provide short-lived credentials scoped to the exact target and action.

- Decide which commands require an approval prompt and which are forbidden. Require a person to approve selected high-impact commands, such as `git push`, `terraform apply`, Kubernetes changes, and database migrations; forbid commands that must never run.

- Keep production IAM, branch protection, and deployment approvals enforced independently of Codex.

#### Restrict permission profiles and require a human reviewer

In the administrator-managed `requirements.toml`, allow the built-in workspace and read-only profiles and require user review for actions that need approval:

```toml
allowed_approval_policies = ["on-request"]
allowed_approvals_reviewers = ["user"]
default_permissions = ":workspace"

[allowed_permission_profiles]
":read-only" = true
":workspace" = true
```

The workspace profile permits work in the workspace within its sandbox; the read-only profile is available for narrower work. Full-access profiles are not on the allowlist.

Set `approval_policy = "on-request"` in the client configuration if the client needs an explicit compatible choice. `on-request` permits an approval prompt when required; it does not prompt for every command. Add explicit rules for the actions that need review, and retain independent production authorization.

Managed profile allowlists require Codex 0.138.0 or later; use and test the documented legacy sandbox-mode requirements for older clients.

Restart each pilot client, verify the approved profile works, and verify a disallowed full-access profile is rejected.

#### Separate the Codex identity from production credentials

In your device management or development environment provisioning system, create a dedicated Codex user, container, or development host with access only to the source and development services it needs. Do not mount the developer's production credential files, token helpers, or keychains into that environment, and prevent the identity from acquiring production write roles.

If the agent needs service access, configure your organization's credential broker to issue short-lived credentials restricted to the development resource and action. The developer can use their normal identity through a separate authorized production workflow.

For example, in AWS IAM, open **Roles**, select the Codex development role, and under **Permissions** add a reviewed inline policy like this one, replacing the account and role with your own:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyAssumeExampleProductionRole",
      "Effect": "Deny",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::111122223333:role/ExampleProductionRole"
    }
  ]
}
```

This example denies attempts to assume the named role, but it does not deny attempts to assume other roles. Also remove direct production permissions, restrict other production roles and credential sources, and review trust policies and organization-level controls.

Test the development role against representative development and production permissions without making a production change. See [AWS IAM role policy examples](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_policy-examples.html).

#### Minimize the shell environment

In `/etc/codex/config.toml` for a system-wide starting configuration, or `~/.codex/config.toml` for one user, configure which environment variables spawned commands inherit:

```toml
[shell_environment_policy]
inherit = "core"
ignore_default_excludes = false

[shell_environment_policy.filters]
"AWS_*" = "exclude"
"AZURE_*" = "exclude"
"GITHUB_*" = "exclude"
"*_TOKEN" = "exclude"
"*_SECRET" = "exclude"
"*_PASSWORD" = "exclude"
```

This is a configurable default, not an enforced credential boundary. User settings, shell startup or snapshots, credential helpers, and other credential sources may still expose credentials.

In `requirements.toml`, use the following optional restrictions to disable login shells and shell snapshots if they are compatible with your workflow:

```toml
allow_login_shell = false

[features]
shell_snapshot = false
```

Pilot these settings because some workflows depend on login shell initialization.

Start Codex with harmless synthetic variables matching the filters and inspect a spawned command's environment; also verify a login shell request is rejected if disabled. Independently verify that the execution identity cannot access real production credentials. See [Shell environment policy](https://learn.chatgpt.com/docs/config-file/config-advanced#shell-environment-policy).

#### Prompt for selected high-impact commands

Add requirements rules for the commands your organization uses. For example:

```toml
[rules]
prefix_rules = [
  { pattern = [{ token = "git" }, { token = "push" }], decision = "prompt", justification = "Review Git pushes." },
  { pattern = [{ token = "terraform" }, { token = "apply" }], decision = "prompt", justification = "Review infrastructure changes." },
  { pattern = [{ token = "kubectl" }, { any_of = ["apply", "delete", "patch"] }], decision = "prompt", justification = "Review cluster changes." },
  { pattern = [{ token = "python3" }, { token = "manage.py" }, { token = "migrate" }], decision = "prompt", justification = "Review database migrations." },
]
```

Use `forbidden` for a command that must never run; replace or add patterns for the actual deployment and migration tools.

These rules match command prefixes and do not cover every equivalent action. Test absolute paths, wrappers, alternate argument orders, other clients, and other tools separately.

On a disposable target, run a normal command, request a listed action, deny the approval request, and verify the action did not execute. See [Enforcing command rules](https://learn.chatgpt.com/docs/enterprise/managed-configuration#enforce-command-rules-from-requirements).

#### Enforce repository and deployment approvals outside Codex

In your source-control platform, protect production branches such as `main`: require reviewed changes and the necessary approvals and status checks, and review which roles can bypass those requirements. Configure deployment approval in the relevant deployment system and database privileges in the database itself.

Use a disposable repository to verify a reviewed change works and an unauthorized direct push is rejected. These controls apply regardless of whether an action was requested through Codex.

#### Verify

On a disposable test target:

- [ ] Run a normal workspace task. Expected: The task succeeds.

- [ ] Attempt a representative sensitive command and deny the approval request. Expected: The denied command does not run.

- [ ] Verify the Codex identity cannot obtain production write access.

- [ ] Restart the client and repeat.

#### Boundaries

Prefix rules are not a complete operating system policy engine. Pair them with sandboxing, least-privilege OS accounts, network restrictions, cloud IAM, branch protection, deployment approvals, and database authorization.

</PersistentChecklist>







<a id="reduce-the-risk-of-publishing-internal-code"></a>



### Reduce the risk of publishing internal code



<PersistentChecklist client:load id="codex-security-cookbook-reduce-the-risk-of-publishing-internal-code" itemIds={["create-harmless-canaries-and-confirm-denied-file-reads-fail", "if-network-access-is-enabled-check-that-an-approved", "with-a-harmless-marker-and-disposable-test-accounts-or"]} description="This browser could not save your verification progress.">

**Uses these configuration recipes:** Protect secrets and unrelated repositories; Restrict network destinations; Allow only approved MCP servers; Require approval for sensitive commands.

Developers use Codex with internal repositories, and you want to reduce the risk of code being sent to a public repository, public code snippet, or other unapproved destination.

- Add exact deny paths for known credential directories and unrelated repositories, and minimize environment variables passed to spawned commands.

- When agent internet access is required, use a narrow allowlist of approved domains. Allow only approved MCP server names and identities, and require review for selected publishing commands or deny them, such as `git push`.

- Use source control hooks and permissions, policies for public repositories and code snippets, and data loss prevention controls appropriate to your organization.

#### Deny access to unrelated repositories and credential files

In administrator-managed `requirements.toml`, add exact paths that the local agent must not read:

```toml
[permissions.filesystem]
deny_read = ["~/.ssh", "~/.aws/credentials", "~/.kube/config", "/work/unrelated-repository"]
```

Replace the examples with paths present on your managed devices. This managed deny applies across allowed permission profiles; a deny configured only inside one custom profile does not protect users who select a different profile. Prefer exact known paths and test any glob patterns at the depths you need.

On native Windows, managed `deny_read` covers direct file tools but does not by itself prevent shell subprocess reads; use OS identities and file access control lists as well.

Create harmless canary files in the denied locations. Under every allowed profile, verify that direct and shell reads of those files are denied and that an approved source file can be read. See [Managed deny-read requirements](https://learn.chatgpt.com/docs/enterprise/managed-configuration#enforce-deny-read-requirements).

#### Minimize credential-bearing shell variables

In `/etc/codex/config.toml` or `~/.codex/config.toml`, set a narrow inherited environment:

```toml
[shell_environment_policy]
inherit = "core"
ignore_default_excludes = false

[shell_environment_policy.filters]
"AWS_*" = "exclude"
"AZURE_*" = "exclude"
"GITHUB_*" = "exclude"
"*_TOKEN" = "exclude"
"*_SECRET" = "exclude"
"*_PASSWORD" = "exclude"
```

This setting reduces inherited variables but is user-configurable and does not prevent access to credential files, helpers, shell startup content, or other identities.

Where appropriate, an administrator can also add these restrictions to `requirements.toml` and pilot them to assess their effect on developer workflows:

```toml
allow_login_shell = false

[features]
shell_snapshot = false
```

Test with synthetic canary variables and a separate least-privilege execution identity. Do not use real credentials. See [Shell environment policy](https://learn.chatgpt.com/docs/config-file/config-advanced#shell-environment-policy).

#### Allow only approved network destinations for local commands

If local sandboxed commands need network access, merge both the profile and managed-proxy settings below into `requirements.toml`, replacing the domains with approved endpoints:

```toml
default_permissions = "corp_network"

[allowed_permission_profiles]
corp_network = true

[permissions.corp_network]
extends = ":workspace"

[permissions.corp_network.network]
enabled = true

[experimental_network]
enabled = true
managed_allowed_domains_only = true

[experimental_network.domains]
"git.corp.example" = "allow"
"registry.corp.example" = "allow"
```

The network-enabled profile grants the sandboxed command a network path, while the managed proxy restricts its destinations. Deploy them together; a network-enabled profile without the intended managed proxy does not apply the same destination restrictions. If internet access is unnecessary, keep network access disabled.

Do not combine the canonical `domains` table with legacy `allowed_domains` or `denied_domains` settings; migrate and test the existing policy.

Restart the client and verify that an approved endpoint works and an unapproved endpoint is blocked.

These settings are experimental; validate OS and client support, and configure private-network access separately if an approved host resolves to a private address. An approved full sandbox escalation can bypass the command proxy.

This network control for local commands does not by itself cover web search, apps, MCP servers, browser activity, or cloud environments, which need separate policies. An approved hosting domain may also contain public repositories or public code snippets, so destination allowlisting alone is not content protection. See [Network access requirements](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-network-access-requirements).

#### Configure cloud environment networking separately

In the current Codex Cloud interface, open the environment configuration. Turn off **Enable all public internet access** and **Enable package manager domains**. If public internet access is required, add exact approved hosts under **Additional allowed domains**. Remove **HTTP secrets** that allow unapproved public destinations. To block public internet access outside the VPN, leave that list empty and remove **HTTP secrets** that allow public destinations. Save the configuration, publish or republish the environment, and test a new task.

Review service authentication and capabilities independently.

Legacy Codex Cloud uses a separate per-environment agent internet setting with controls for allowed domains and HTTP methods; setup scripts have their own access behavior.

Test the environment version you actually use. See [Connect to services](https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services) and [legacy internet settings](https://learn.chatgpt.com/docs/cloud/internet-access).

#### Restrict MCP servers and prompt before Git pushes

Allow only approved local MCP server identities in `requirements.toml`. For example:

```toml
[mcp_servers.internal]
identity = { url = "https://mcp.corp.example/mcp" }
```

Configure the actual server separately in the user or managed-default `config.toml`, using the matching name and URL and the authentication required by your server:

```toml
[mcp_servers.internal]
url = "https://mcp.corp.example/mcp"
```

The requirement only permits a matching server and does not create it. Review that server's own access and tools.

Verify that the approved server can connect and that a server with a different name or URL is not allowed.

Add a managed command rule to request review before a representative publishing command:

```toml
[rules]
prefix_rules = [
  { pattern = [{ token = "git" }, { token = "push" }], decision = "prompt", justification = "Review the destination before publishing." },
]
```

Pair this with `allowed_approval_policies = ["on-request"]` and `allowed_approvals_reviewers = ["user"]` as top-level requirements if a person must review.

Deny a test push and confirm it does not run.

Prefix matching does not cover every wrapper, API client, app, or alternate publishing path.

#### Restrict public publishing with source control and DLP controls

In your source control platform, restrict public repository creation and limit who can change repository visibility, where supported. Review bypass permissions for privileged users. Separately check personal accounts, code snippets, external organizations, and token access: organization settings do not govern every destination.

In the relevant repository, require reviewed changes and review branch protection and bypass permissions.

In your organization's DLP console, configure a pilot policy for sensitive source-code content and the upload or repository channels your DLP product actually covers; set the action to block and test with an inert synthetic marker.

Where the source-control platform supports server-side controls, configure and enforce reviewed hooks for repositories receiving pushes.

Use authorized test destinations and confirm blocking before any publication.

#### Verify

- [ ] Create harmless canaries and confirm that attempts to read denied files fail.

- [ ] If network access is enabled, check that an approved destination succeeds and an unapproved destination is blocked; otherwise, verify network requests are blocked.

- [ ] With a harmless marker and disposable test accounts or destinations, verify representative attempts to publish publicly are blocked before publication.

#### Boundaries

An allowed domain can still host public content. Configure web search, apps, MCP servers, browser activity, and Codex Cloud separately; local sandbox rules do not control them.

</PersistentChecklist>







<a id="keep-codex-from-changing-its-own-safeguards"></a>



### Keep Codex from changing its own safeguards



<PersistentChecklist client:load id="codex-security-cookbook-keep-codex-from-changing-its-own-safeguards" itemIds={["confirm-a-benign-bash-command-runs", "confirm-a-command-containing-codexhooktestdeny-is-blocked", "verify-that-the-policy-and-dependencies-cannot-be-changed", "attempt-to-edit-the-managed-policy-expected-the-managed", "attempt-to-weaken-a-restriction-through-user-or-project", "restart-the-client-and-verify-the-restrictions-still-apply"]} description="This browser could not save your verification progress.">

**Uses these configuration recipes:** Restrict permission profiles and Full Access; Allow only approved MCP servers; Restrict network destinations; Protect secrets and unrelated repositories; Require approval for sensitive commands.

You want the restrictions governing Codex to remain in force when it works in a repository or a user changes local configurations.

- Deliver supported permission, approval, MCP, network, and command restrictions as administrator-enforced requirements.

- Install hook scripts in an administrator-managed directory and use managed-only hooks if user, project, and plugin hooks should be ignored.

- Protect policy files and the configuration distribution path with operating system and device management controls. Run Codex without the privileges needed to change those protections.

- Review the effective configuration for each client and environment in scope.

#### Enforce the permitted profiles, approvals, server identities, and commands

Merge reviewed settings into the administrator-managed `requirements.toml`, rather than relying on a user's or repository's editable settings. For example:

```toml
allowed_approval_policies = ["on-request"]
allowed_approvals_reviewers = ["user"]
default_permissions = ":workspace"

[allowed_permission_profiles]
":read-only" = true
":workspace" = true

[mcp_servers.internal]
identity = { url = "https://mcp.corp.example/mcp" }

[rules]
prefix_rules = [
  { pattern = [{ token = "git" }, { token = "push" }], decision = "prompt", justification = "Review Git pushes." },
]
```

This example permits two profiles, requires a human reviewer when approval is needed, permits a matching MCP identity, and prompts for a particular command prefix.

Configure the MCP server itself separately and add the organization's other sensitive command patterns. Add global file restrictions and network restrictions when needed; requirements constrain supported settings but cannot substitute for the identity, service, and destination controls outside Codex.

Managed profile allowlists require Codex 0.138.0 or later.

On a pilot client, attempt to select a disallowed profile, change a restricted user or project setting, and use a non-allowlisted MCP identity; verify each is rejected or remains constrained after restart. Deny a test command approval and verify the command does not run.

#### Add managed filesystem and network restrictions

To deny sensitive local files across allowed profiles, add the following table to `requirements.toml` and replace the examples with your organization's paths:

```toml
[permissions.filesystem]
deny_read = ["~/.ssh", "~/.aws/credentials", "~/.kube/config"]
```

Where sandboxed local commands need network access, define an allowed network-enabled profile and managed destinations together:

```toml
default_permissions = "corp_network"

[allowed_permission_profiles]
corp_network = true

[permissions.corp_network]
extends = ":workspace"

[permissions.corp_network.network]
enabled = true

[experimental_network]
enabled = true
managed_allowed_domains_only = true

[experimental_network.domains]
"git.corp.example" = "allow"
```

Choose this profile policy in place of the earlier `:workspace` default, or merge both profile names deliberately; do not paste duplicate keys or tables. If commands do not need network, keep it disabled.

Verify exact denied paths using harmless files, and verify approved and unapproved destinations.

On native Windows, also use file access control lists because shell subprocess reads are not covered by managed `deny_read` alone.

Local command networking does not govern other clients, apps, connectors, or cloud execution.

#### Install and enforce administrator-managed hooks

Have an administrator install a reviewed hook program in a root-managed directory, such as `/etc/codex/hooks/pre_tool_use_policy.py`, and prevent the Codex user from changing the file or its directory. In `requirements.toml`, enable hooks and ignore user, project, session, and plugin hooks:

```toml
allow_managed_hooks_only = true

[features]
hooks = true

[hooks]
managed_dir = "/etc/codex/hooks"

[[hooks.PreToolUse]]
matcher = "^Bash$"

[[hooks.PreToolUse.hooks]]
type = "command"
command = "/usr/bin/python3 /etc/codex/hooks/pre_tool_use_policy.py"
timeout = 30
statusMessage = "Checking managed Bash command"
```

The requirement registers the hook but does not install it. For a local macOS integration test, save the following as `pre_tool_use_policy.py` and have an administrator install it with the commands below.

It blocks only the synthetic marker; replace it with a reviewed organization-specific policy before relying on it. Confirm that `/usr/bin/python3` exists on the target and adjust the interpreter path if necessary:

```python
import json
import sys

event = json.load(sys.stdin)
command = event.get("tool_input", {}).get("command", "")
if "CODEX_HOOK_TEST_DENY" in command:
    print("Synthetic test command blocked by managed hook.", file=sys.stderr)
    sys.exit(2)
```


```bash
sudo install -d -o root -g wheel -m 755 /etc/codex/hooks
sudo install -o root -g wheel -m 644 ./pre_tool_use_policy.py /etc/codex/hooks/pre_tool_use_policy.py
```

Restart the local client, then:

- [ ] Confirm a benign Bash command runs.

- [ ] Confirm a command containing `CODEX_HOOK_TEST_DENY` is blocked.

- [ ] Verify that the policy and dependencies cannot be changed by the Codex user.

`allow_managed_hooks_only` skips all non-managed user, project, session, and plugin hooks and may affect other workflows.

The Bash matcher does not cover every tool or input supplied later to an existing process; errors, timeouts, or malformed hook responses can allow a tool call to proceed.

Cloud-orchestrated Work uses different supported hook handlers. Keep independent OS and service protections. See [Managed hooks](https://learn.chatgpt.com/docs/enterprise/managed-configuration#enforce-managed-hooks-from-requirements) and [hook behavior](https://learn.chatgpt.com/docs/hooks#pretooluse).

#### Protect the policy and its distribution

On macOS, an administrator can deploy a reviewed and merged requirements file in a root-owned parent directory and prevent the Codex user from writing to the file:

```bash
sudo install -d -o root -g wheel -m 755 /etc/codex
sudo install -o root -g wheel -m 644 ./requirements.reviewed.toml /etc/codex/requirements.toml
ls -ld /etc/codex
ls -l /etc/codex/requirements.toml
```

On Linux, use the appropriate administrator group; on Windows, protect the ProgramData directory and file with administrator-managed access control lists. Restrict who can change the MDM or cloud policy, review changes, and preserve a rollback copy.

Using a non-admin pilot account, verify that the account cannot modify the policy, parent directory, or managed hook program; try a weaker user or project setting, restart Codex, and verify the enforced behavior persists.

Test each client and environment in scope rather than assuming all clients load the same policy.

#### Verify

Using a non-admin test identity:

- [ ] Attempt to edit the managed policy. Expected: The managed file cannot be changed.

- [ ] Attempt to weaken a restriction through user or project configuration. Expected: Weaker settings are rejected or remain constrained.

- [ ] Restart the client and verify the restrictions still apply.

#### Boundaries

A user or agent with sufficient host administrator privileges may be able to change the surrounding protections. User-editable settings alone are not a substitute for administrator-managed requirements.

</PersistentChecklist>





## Source pages

- [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference)

- [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)

- [Advanced Configuration](https://learn.chatgpt.com/docs/config-file/config-advanced)

- [Authentication](https://learn.chatgpt.com/docs/auth)

- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)

- [Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review)

- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)

- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

- [Recommended configuration](https://learn.chatgpt.com/docs/cyber-safety/recommended-configuration)

- [Compliance API and audit events](https://learn.chatgpt.com/docs/enterprise/compliance-api)