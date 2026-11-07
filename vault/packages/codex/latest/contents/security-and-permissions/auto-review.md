# Auto-review

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Auto-review sends eligible approval requests to a separate reviewer agent.
Your sandbox, command rules, and tool settings determine which actions need
approval. The reviewer decides whether those actions can proceed.

Auto-review only applies when approvals are interactive. In practice, that
  means `approval_policy = "on-request"` or a granular approval policy that
  still surfaces the relevant prompt category. With `approval_policy = "never"`,
  there is nothing to review.

In the ChatGPT desktop app, selecting an approved Daybreak model
automatically switches the permissions control to **Approve for me** when that
mode is available for your account and allowed by organization policy. This
also applies when you use the desktop app's `/model` command. If that mode
isn't available, the current permission mode stays unchanged. Model selection
never overrides managed organization requirements.

Before enabling **Full Access** for an approved security model, the
ChatGPT desktop app shows a model-specific warning about dangerous actions. The
warning recommends **Approve for me** instead and links to
[reviewer-policy configuration](#configuration). The warning doesn't restore
the sandbox boundary or override organization policy.




## Select Auto-review

In the desktop app, choose **Approve for me** from the permissions control
below the composer. Check that it's selected for the current chat. See
[Permissions](https://learn.chatgpt.com/docs/permission-modes) for mode selection and troubleshooting.

For the CLI or a local Codex configuration, set
`approvals_reviewer = "auto_review"` with an eligible interactive approval
policy, such as `approval_policy = "on-request"`. Changing the approval policy
alone doesn't select the reviewer. Administrators can
[require Auto-review](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-auto-review-policy)
for their organization.

## How Auto-review works

1. The main agent proposes an action, such as running a command.
2. If the action needs approval, Codex creates a request.
3. If `approvals_reviewer = "auto_review"`, Codex routes that approval request
   to a separate reviewer agent instead of stopping for a person.
4. The reviewer decides whether the action should run and returns a rationale.
5. If the action is approved, execution continues. If it is denied, the main
   agent is instructed to find a materially safer path or stop and ask the
   user.

## When it triggers

Auto-review evaluates approval requests that would otherwise pause for a human.
These include:

- Shell or exec tool calls that request escalated sandbox permissions.
- Commands that match a [command rule](https://learn.chatgpt.com/docs/agent-configuration/rules) with
  `decision = "prompt"`, including commands inside the sandbox.
- Network requests to destinations that require approval. An explicit network
  deny rule blocks the request.
- File edits outside the allowed writable roots.
- MCP or app tool calls that require approval based on their tool annotations
  or configured approval mode.

Actions that already have permission to run proceed without review.

Computer Use app-level access prompts go directly to the user. Eligible
Computer Use tool calls can separately trigger Auto-review.

## What Auto-review blocks

At a high level, Auto-review is designed to block actions such as:

- sending private data, secrets, or credentials to untrusted destinations
- probing for credentials, tokens, cookies, or session material
- broad or persistent security weakening
- destructive actions with significant risk of irreversible damage

See [Configuration](#configuration) for the default rules and how to customize them.

## What the reviewer sees

The reviewer evaluates the specific action that triggered the approval request.

The reviewer sees a compact transcript plus the exact approval request. That
typically includes user messages, surfaced assistant updates, relevant tool
calls and tool outputs, and the action now being proposed for approval. It can
also perform read-only checks, such as inspecting a directory before approving
its deletion.

Hidden assistant reasoning is not included. Auto-review sees retained
chat items and tool evidence, not private chain-of-thought.

## Denials and failure behavior

An explicit denial is not treated like an ordinary sandbox error. Codex returns
the review rationale to the main agent and adds a stronger instruction:

- Do not pursue the same outcome via workaround, indirect execution, or policy
  circumvention.
- Continue only with a materially safer alternative.
- Otherwise, stop and ask the user.

For most models, the Codex CLI interrupts the turn after 3 consecutive denials
or 10 denials in the last 50 reviews in that turn. For models designated for
cybersecurity, the CLI interrupts the turn on the first denial.

Any other review outcome resets the consecutive-denial count. When Codex
reaches a denial limit, it displays a warning and stops the turn.

Timeouts are surfaced separately from explicit denials, and the main agent is
informed that a timeout alone is not proof that the action is unsafe.

Codex also provides an explicit override path for denied actions. In the current
open-source TUI, run `/approve` to open the **Auto-review Denials** picker, then
select one recent denied action to approve for one retry. Codex records up to 10
recent denials per task. That approval is narrow: it applies to the exact
denied action, not similar future actions; it is recorded for one retry in the
same context; and the retry still goes through Auto-review. Under the hood,
Codex injects a developer-scoped approval marker for that exact action. The
reviewer then sees that explicit user override as context, but it still follows
policy and can deny again if policy says the user cannot overwrite that class of
denial.

## Configuration

The [reviewer template](https://github.com/openai/codex/blob/rust-v0.167.0/codex-rs/prompts/templates/guardian/policy_template.md)
tells the reviewer how to assess an action. Codex inserts the security policy
into that template and specifies the response format separately. The CLI uses
the reviewer model's default policy when available. Otherwise, it uses the
[bundled policy (`policy.md`)](https://github.com/openai/codex/blob/rust-v0.167.0/codex-rs/prompts/templates/guardian/policy.md).

**To add rules**, set `extra_policy` under `[auto_review]` in local
`config.toml`, or set the top-level `guardian_extra_policy` in managed
`requirements.toml`. Codex applies these rules alongside the active policy.

**To replace the policy**, copy the complete policy you want to adapt. If you
use the bundled default, copy the full contents of `policy.md`. Edit the rules
you want to change, then put the full text in local `[auto_review].policy` or
managed `guardian_policy_config`. Omitted rules drop out of the replacement.
Codex still uses the reviewer's template and response format.

Codex resolves the two settings independently and ignores blank values.
Managed `guardian_policy_config` takes precedence over local `[auto_review].policy`.
Managed `guardian_extra_policy` takes precedence over local `[auto_review].extra_policy`.
For example, if your organization sets only a replacement policy, your local
`extra_policy` still adds rules to it.

For organization-wide setup, see
[Configure Auto-review policy](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-auto-review-policy).

## Configure an authorized cybersecurity engagement

For authorized security work, combine Auto-review with a written
engagement scope and a least-privilege [permission profile](https://learn.chatgpt.com/docs/permissions).
Use an approved lab target, document the actions and engagement window, and
keep production systems, unrelated hosts, credentials, and persistent changes
out of scope unless explicitly authorized.

This local `config.toml` example enables Auto-review and adds engagement
rules to the active policy. Replace the example target and actions with your
approved scope.

```toml
approval_policy = "on-request"
approvals_reviewer = "auto_review"
default_permissions = ":workspace"

[auto_review]
extra_policy = """
## Environment Profile
- Authorized target: lab.example.com.
- Approved actions: inspect the target, reproduce authorized vulnerabilities,
  and validate fixes within the documented engagement window.

## Tenant Risk Taxonomy and Allow/Deny Rules
- Allow only actions against the approved target that match the documented
  engagement scope and approved actions.
- Deny out-of-scope or unknown hosts, production access, credential theft,
  persistence, data exfiltration, destructive operations, and policy bypass.
- Deny ambiguous actions and high-impact changes until a human explicitly
  approves the exact target, action, and side effects.
"""
```

Enforce target restrictions with independent filesystem and network rules.
For an organization, put the same engagement rules in the top-level
`guardian_extra_policy` in managed `requirements.toml`. The following
requirements select Auto-review and restrict the available permission profiles.

```toml
allowed_approval_policies = ["on-request"]
allowed_approvals_reviewers = ["auto_review"]
allowed_sandbox_modes = ["read-only", "workspace-write"]
default_permissions = ":workspace"

[allowed_permission_profiles]
":read-only" = true
":workspace" = true
# ":danger-full-access" is omitted, so it is denied.
```

`allowed_permission_profiles` controls current permission profiles.
`allowed_sandbox_modes` also prevents full access in deployments that still use
legacy `sandbox_mode`.

Keep `approval_policy = "on-request"` or another
eligible interactive approval policy and keep an enforceable sandbox boundary.
With `approval_policy = "never"`, `:danger-full-access`, or `--yolo`, an action
can avoid creating the boundary-crossing approval request that review requires.

A network destination on the allowlist doesn't trigger review by itself. Add
explicit [command rules](https://learn.chatgpt.com/docs/agent-configuration/rules) with
`decision = "prompt"`, or configure sensitive MCP tools to require approval,
when actions inside the sandbox must still reach the reviewer.

See [Models and Trusted Access](https://learn.chatgpt.com/docs/cyber-safety) and [recommended
configuration](https://learn.chatgpt.com/docs/cyber-safety/recommended-configuration) for model access,
engagement setup, and custom agent workflows. For custom API or
Agents SDK harnesses, use [Guardrails and human review](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals#review-cybersecurity-actions-before-execution).

## Reduce review volume without weakening security

Auto-review works best when the sandbox already covers your common safe
workflows. If too many mundane actions need review, fix the boundary first
instead of teaching the reviewer to approve noisy escalations forever.

In practice, the highest-leverage changes are:

- Add narrow
  [`writable_roots`](https://learn.chatgpt.com/docs/config-file/config-advanced#approval-policies-and-sandbox-modes)
  for scratch directories or neighboring repos you intentionally use.
- Add narrowly scoped [prefix rules](https://learn.chatgpt.com/docs/agent-configuration/rules). Prefer precise command
  prefixes such as `["cargo", "test"]` or `["pnpm", "run", "lint"]` over broad
  patterns such as `["python"]` or `["curl"]`. Broad rules often erase the
  boundary Auto-review is meant to guard. For cybersecurity models, the CLI
  ignores `allow` prefix rules and honors `prompt` and `forbidden` rules.

Auto-review session transcripts are retained under `~/.codex/sessions` by
default, so you can ask Codex to analyze past traffic there before changing
policy or permissions.

## Limits

Auto-review improves the default operating point for long-running agentic work,
but it is not a deterministic security guarantee.

- It only evaluates eligible approval requests, including requests triggered by
  explicit command rules or tool approval settings.
- It can still make mistakes, especially in adversarial or unusual contexts.
- It should complement, not replace, good sandbox design, monitoring, and
  organization-specific policy.

For the research rationale and published evaluation results, see the
[Alignment Research post on Auto-review](https://alignment.openai.com/auto-review/).