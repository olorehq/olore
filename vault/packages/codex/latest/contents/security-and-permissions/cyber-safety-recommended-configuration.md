# Recommended configuration

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

The security controls appropriate for a cybersecurity workflow depend on the model, the actions it can take, the systems it can access, and the sensitivity of the data involved.

For most Daybreak Blue workflows, your organization's existing security practices—such as access controls, credential protection, and review of sensitive actions—may be sufficient.

Daybreak Red workflows, autonomous security testing, and activities involving production systems, sensitive data, or external tools may require stronger safeguards. The recommendations below are intended primarily for these higher-risk scenarios.

You are responsible for assessing the risks of your particular workflow and
  implementing appropriate security controls. Model safeguards and Trusted
  Access do not replace your organization's own security, monitoring, and
  oversight practices.

Trusted Access governs approved model access, but it doesn't configure your environment or enforce limits on approved systems and actions. Your team must set up appropriate isolation, permission, review, monitoring, and human-oversight controls. Assume the model, its tools, and every connected system could be compromised, then configure the environment so they still can't reach unauthorized systems, expose credentials, disable safeguards, or persist after the work ends.

## Isolate the environment

Run offensive security work in a dedicated lab or sandbox. Start without unrestricted internet access, access to sensitive production systems, corporate networks, unrelated workloads, or host-management interfaces. Keep secrets, credentials, persistent access, and durable system changes out of reach unless your approved work explicitly requires and authorizes them.

For higher-risk or reduced-safeguard work, use a fresh, strongly isolated environment for each attempt. Separate compute, storage, networking, and identities, and destroy the environment afterward instead of resetting or reusing it.

Test filesystem and network boundaries before beginning higher-risk work. Include every reachable host, connected tool, delegated agent, and downstream service. Keep the host environment isolated even when the model or reviewer approves an individual action.

## Define and enforce approved boundaries

Before the model starts, document the systems, tools, actions, and time limits approved for your work. Include:

- Approved target systems, hosts, and environments.
- Excluded systems, including production and unrelated infrastructure.
- Approved tools and connected services.
- Approved and prohibited actions.
- Approved start and end times and data-handling requirements.
- Vulnerability disclosure, patch approval, and maintainer coordination.
- Stop conditions and actions that require explicit human approval.

Give the agent these approved boundaries as task context. Documentation alone doesn't enforce them: apply independent filesystem, network, identity, and tool controls to make unauthorized actions impossible whenever practical.

Use Codex [permission profiles](https://learn.chatgpt.com/docs/permissions) to create a least-privilege boundary. Choose `:read-only` when the task doesn't require changes, or extend `:workspace` when the work requires workspace edits. For example:

```toml
approval_policy = "on-request"
approvals_reviewer = "auto_review"
default_permissions = "cyber-lab"

[features]
network_proxy = true

[permissions.cyber-lab]
description = "Limit security testing to the approved lab and workspace."
extends = ":workspace"

[permissions.cyber-lab.filesystem]
glob_scan_max_depth = 3

[permissions.cyber-lab.filesystem.":workspace_roots"]
"**/.env*" = "deny"
"**/*.pem" = "deny"

[permissions.cyber-lab.network]
enabled = true
# Uncomment only for an approved host that resolves to a private address.
# allow_local_binding = true

[permissions.cyber-lab.network.domains]
"lab.example.com" = "allow"
```

The `network_proxy` feature enforces the approved domain. Without it,
`network.enabled = true` permits direct network access and the lab allowlist
does not restrict destinations. Web search, apps, connectors, MCP servers,
browser activity, and Codex cloud use separate controls; restrict or turn off
each surface that your approved workflow does not require.

Replace `lab.example.com` with an approved target. The bounded filesystem scan is designed to avoid searching the entire workspace on Linux, WSL, and Windows; increase the depth or use exact deny paths if sensitive files appear deeper. Don't combine permission profiles with legacy `sandbox_mode` settings; follow the [permission-profile configuration guidance](https://learn.chatgpt.com/docs/permissions#define-and-select-a-profile).

If the approved lab host resolves to a private address, Codex blocks it by default even when the host is on the allowlist. Set `allow_local_binding = true` only for explicitly approved private-network work, keep the destination allowlist narrow, and review the [local and private network guidance](https://learn.chatgpt.com/docs/permissions#local-and-private-networks). You can also allowlist the exact approved private IP address.

Block open-internet and production-network access by default. If external access is necessary, route it through an independently enforced gateway or proxy with narrow allowlists, request inspection, and logging. Apply the same restrictions to indirect connections through package managers, webhooks, URL-fetching services, redirects, cloud APIs, and connected tools. Load dependencies before the run or use dependencies that an administrator approves.

## Protect credentials and sensitive data

Keep reusable API keys, cloud credentials, passwords, and service-account tokens out of prompts, repositories, environment variables, shared filesystems, and model-accessible logs. When authentication is required, use a separate broker or gateway to provide short-lived credentials scoped to the exact target and permitted action without exposing the credential to the model.

Provide only the data required for the approved task. Remove unnecessary sensitive information, block access to cloud metadata and credential endpoints, and treat model-generated files as untrusted.

Avoid `:danger-full-access` and `--yolo` for cybersecurity workflows. Full Access removes the enforceable sandbox boundary that Auto-review depends on. Managed organizations can exclude `:danger-full-access` and `--yolo`, limit allowed approval policies, and require Auto-review through [enterprise-managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-auto-review-policy).

Before enabling **Full Access** for an approved security model, the ChatGPT desktop app shows a model-specific warning about dangerous actions. The warning recommends **Approve for me** instead and links to [reviewer-policy configuration](https://learn.chatgpt.com/docs/sandboxing/auto-review#configuration). The warning doesn't restore the sandbox boundary or override organization policy.

Use Auto-review alongside environment isolation, least-privilege permissions, a documented engagement scope, monitoring, and human oversight.

## Review sensitive Codex actions

[Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review) routes eligible approval requests to a separate reviewer before the proposed action runs. The reviewer considers the action, task context, and applicable policy. Organizations can [add rules to the active policy](https://learn.chatgpt.com/docs/sandboxing/auto-review#configuration) for approved targets, prohibited actions, and required human approvals.

Require explicit human approval for actions that affect production, external systems, sensitive data, privilege escalation, persistent access, or irreversible changes. Treat instructions embedded in websites, repositories, documents, and tool outputs as untrusted; they can't expand the authorized scope or override access controls.

In the ChatGPT desktop app, selecting an approved Daybreak model automatically switches the permissions control to **Approve for me** when that mode is available for your account and allowed by organization policy. This also applies when you use the desktop app's `/model` command. If that mode isn't available, the current permission mode stays unchanged. Model selection never overrides managed organization requirements.

For Auto-review to run, keep all three controls in place:

1. Use an interactive approval policy such as `approval_policy = "on-request"`.
2. Set `approvals_reviewer = "auto_review"`.
3. Keep an enforceable sandbox or permission-profile boundary.

Requests to a target on the network allowlist stay inside the network boundary and don't automatically trigger Auto-review. To review a sensitive command even when its destination is on the allowlist, create an explicit [command rule](https://learn.chatgpt.com/docs/agent-configuration/rules) under `~/.codex/rules/`:

```python snippet=configuration reason="Starlark policy configuration interpreted by Codex"
prefix_rule(
    pattern = ["curl"],
    decision = "prompt",
    justification = "Review requests to the approved cybersecurity target.",
)
```

Restart Codex after adding the rule. With `approvals_reviewer = "auto_review"`, matching commands go to the reviewer before execution. Add corresponding prompt rules for every sensitive command, or use `approval_mode = "prompt"` for individual [MCP tools](https://learn.chatgpt.com/docs/extend/mcp). Actions that require a person's decision still need explicit human approval.

Auto-review evaluates actions that require approval. With `approval_policy = "never"` or Full Access, a sensitive action might proceed without an approval request. Use independent access controls and monitoring throughout the engagement.

For a scoped policy and organization-wide enforcement, see [Configure an authorized cybersecurity workflow](https://learn.chatgpt.com/docs/sandboxing/auto-review#configure-an-authorized-cybersecurity-engagement).

## Monitor independently and fail closed

Log model requests, tool calls, network activity, credential use, and security-relevant changes. Keep logs and monitoring systems outside the model-controlled environment. Alert on unauthorized targets, unexpected network requests, exposed credentials, policy changes, missing logs, and attempts to bypass safeguards.

Keep policy enforcement, credential brokers, review systems, and emergency shutdown controls independent of the agent. Stop the workflow if an essential control or monitoring system fails.

## Add guardrails to custom agent workflows

If you build with the Responses API, the Agents SDK, or another harness, add review at the tool-execution boundary. Check sensitive proposed actions against the approved systems, actions, and time limits before execution, route ambiguous or high-risk actions to a person, enforce independent filesystem and network restrictions, keep audit logs, and fail closed if the reviewer or policy is unavailable.

Codex Auto-review doesn't automatically protect custom tools or external harnesses. Use [Guardrails and human review](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals#review-cybersecurity-actions-before-execution) for the Agents SDK pattern and the [open-source reviewer policy](https://github.com/openai/codex/blob/rust-v0.167.0/codex-rs/prompts/templates/guardian/policy.md) as a reference.

Codex product-side sandboxing and review are separate from [API cybersecurity checks](https://developers.openai.com/api/docs/guides/safety-checks/cybersecurity). API safeguards can return `cyber_policy` errors, and per-user `safety_identifier` values can help limit the impact of a safeguard action.

## Clean up and validate the results

After the work ends, revoke temporary credentials, terminate background processes, remove persistent access, and destroy higher-risk environments. Verify that no callbacks, exposed artifacts, shared state, or cross-run access remain, and keep separate users, sessions, and evaluations isolated.

Validate findings before acting on them, follow coordinated disclosure practices, and keep people accountable for remediation and changes.

## Before you start

Confirm the approved systems and actions, appropriate model, isolated environment, least-privilege permissions, restricted network access, protected credentials, action review, independent monitoring, emergency stop, and cleanup plan. Model safeguards, isolation, scoped permissions, action review, monitoring, and human oversight are complementary; none should be the only control.