# Review GitLab merge requests with Codex

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use Codex code review to get another high-signal review pass on GitLab merge
requests. Codex reviews the merge request diff, follows your repository
guidance, and posts a standard GitLab code review focused on serious issues.

GitLab support is in beta and is available on all ChatGPT plans. The Codex
integration runs in Codex cloud. GitHub-style repository controls in the
desktop app, such as **Create pull request**, aren't included in this beta.

## Before you start

Make sure you have:

- A connected GitLab account. GitLab.com requires the
  [standard connection flow](https://help.openai.com/articles/20001486);
  self-managed or Dedicated GitLab instances require
  [workspace-admin template setup](https://help.openai.com/articles/20001487).
- An `AGENTS.md` file if you want Codex to follow repository-specific review
  guidance.

## Set up Codex code review

### Set up the GitLab connection and Codex review identity

For GitLab.com, connect your GitLab account in Codex once you've
[connected to GitLab in ChatGPT](https://help.openai.com/articles/20001486).
For self-managed or Dedicated GitLab, each reviewer should connect after the
[workspace-admin template](https://help.openai.com/articles/20001487) has been
published.

For self-managed or Dedicated GitLab, open **Codex Cloud** → **Settings** →
[**Connectors**](https://chatgpt.com/codex/cloud/settings/connectors). A
workspace admin can let Codex create a service account or save an existing
service-account personal access token.

#### Let Codex create the account

In **Codex Cloud** → **Settings** → **Connectors**, select the app for your
self-managed or Dedicated GitLab host → select **Set up service account** →
**Create a service account**. The workspace admin completing setup must have
administrator access to the GitLab instance. Choose either **Selected groups**
or **Selected projects only**, then select where Codex should operate and create
the account. The group option grants Developer access to each chosen group,
inherited by its projects and subgroups; the project option grants Developer
access only to the individual projects you choose. Codex will create the ChatGPT
Codex Connector instance service account with a personal access token with the
`api` scope.

#### Use an existing account

In GitLab, create or choose a service account and grant it Developer access
only in the groups or projects where Codex should operate. From the **Service
accounts** page, select the account → **Manage access tokens** → **Add new
token** to
[create a personal access token](https://docs.gitlab.com/user/profile/service_accounts/#create-a-personal-access-token-for-a-service-account)
with the `api` scope and an expiration date at least 30 days away. Back in
Codex, choose **Use an existing service account**, paste the token, and select
**Save token**. The token is encrypted when saved and is never shown again.

#### Manage the service-account token

Workspace admins can manage the service account in **Codex Cloud** →
**Settings** → **Connectors**. For a Codex-created account, admins can revoke
the current token and generate a new one. For an existing account, admins can
replace or remove the saved token in Codex and revoke it separately in GitLab if
needed. Codex cannot respond to GitLab activity until a valid token is
configured.

### Choose how GitLab activity reaches Codex

#### Create a project environment for coding tasks or project-specific setup

In **Codex Cloud** → **Settings** → **Environments**, choose the GitLab project
and create a project environment when you want Codex to write or execute code
for that project—for example, to edit files, commit changes, or push updates to
a merge request branch—or when a review depends on project-specific secrets,
network access, or setup commands.

For GitLab.com, a project environment is also required to enable Codex reviews.

While creating the environment, turn on **Enable Codex activity from GitLab**
to install the project webhook that delivers merge request, comment, and issue
events to Codex. Creating the project webhook requires Maintainer or Owner
access, administrator access, or a custom role that can administer project
webhooks. Signed project and group webhooks require GitLab 19.0 or newer. On
self-managed GitLab 19.0, confirm the `webhook_signing_token` feature flag is
enabled; it is enabled by default and was removed in GitLab 19.1.

#### Enable activity for Codex reviews for projects across a GitLab group

For self-managed or Dedicated GitLab, workspace admins can open **Environments**
→ **GitLab activity** → **Manage groups** to enable Codex reviews across a group
and its subgroups. Codex will install a group webhook covering projects
throughout that group. The connected GitLab user must be a group Owner, and
group webhooks require GitLab Premium or Ultimate and GitLab 19.0 or newer.

Group activity enables code reviews but does not create project environments.
To run GitLab-triggered coding tasks, such as editing files, running commands,
committing changes, or pushing updates to a merge request, create a project
environment.

### Configure code review policies

Configure code review policies in [Codex review settings](https://chatgpt.com/settings/code-review?provider=gitlab).
Choose your repository, then turn on **Automatic review** under **Review code**.
Use **Review** to choose whose merge requests receive reviews and **Trigger** to
choose when reviews run. Repository settings can override personal defaults.

## Request a Codex review

1. In a merge request comment, mention `@codex review`.
2. Wait for Codex to react (👀) and post a review.

Codex posts GitLab discussions and notes on the merge request, just like a
teammate would. By default, manually requested reviews can include P0, P1, and
P2 findings, while automatic reviews focus on P0 and P1 findings.

## Enable automatic reviews

To review qualifying merge requests automatically, turn on **Automatic
reviews** in Codex settings, choose the GitLab repository policy, and choose a
trigger: **On MR open**, **On every push**, or **Smart Trigger (Experimental)**.
Codex runs without an `@codex review` comment when the merge request event
matches that policy and trigger.

GitLab activity must be enabled through a project webhook or an ancestor group
webhook. For self-managed or Dedicated GitLab, the configured service account
must also have access to write back to the project. Codex uses a configured
project environment when present. If an ancestor group already enables
activity, descendant projects inherit that coverage.

## Customize what Codex reviews

Codex searches your repository for `AGENTS.md` files and follows the applicable
code review rules. Add a `## Code Review Rules` section to the file closest to
the code the rules govern. Use `###` headings to group related checks when
helpful.

For example, an experiment-reporting service can keep post-exposure behavior
from changing a comparison cohort:

```md
## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior, including conversion or retention.
  Safe path: build cohorts from assignment or exposure; report conversion as an outcome.
```

Put repository-wide rules in the root `AGENTS.md` and service-specific rules in
a nested file, such as `services/experiment_reporting/AGENTS.md`. Codex applies
the root and more-specific guidance that covers each changed file, so unrelated
changes don't have to carry service-specific context.

Start with two or three concise rules that encode checks reviewers often
explain. Useful rules:

- **Focus on consequential, repository-specific behavior.** Describe the
  compatibility constraint, data boundary, or unsafe side effect to flag and
  why it matters.
- **State the safe path or exception.** Give Codex enough context to distinguish
  a real issue from expected behavior.
- **Keep rules scoped and durable.** Prefer outcomes over function names that
  can change, and place guidance near the code it governs.
- **Leave mechanical checks in CI.** Keep formatting, lint, and other
  deterministic checks out of review rules.

Open a representative merge request and request a review with `@codex review`.
Refine the rules based on the findings and feedback you see, and narrow or
remove guidance that produces noise.

Code review rules guide Codex; they don't replace tests, branch protections, or
required approvals.

For a one-off focus, add it to your merge request comment:

`@codex review for issues in the database migration`

## Act on review findings

Fixing review findings requires a **configured project environment**; group
activity alone supports reviews but cannot run coding tasks. If the project has
an environment, ask Codex to fix an issue in the same merge request by leaving
another comment:

```md
@codex fix the P1 issue
```

Codex starts a [legacy cloud chat](https://learn.chatgpt.com/docs/environments/cloud-environment) with the merge request as context and
can push a fix back to the branch when it has permission to do so.

## Give Codex other tasks

Other coding tasks also require a **configured project environment**; group
activity alone supports reviews. If you mention `@codex` in a comment with
anything other than `review`, Codex starts a [legacy cloud chat](https://learn.chatgpt.com/docs/environments/cloud-environment) using
your merge request as context.

```md
@codex fix the CI failures
```

## Troubleshoot code review

If Codex doesn't react or post a review:

- Confirm the intended GitLab app has been selected; if you use project-specific
  setup, confirm the project has the intended Codex cloud environment.
- Confirm activity for the project or an ancestor group. In GitLab, check
  **Webhooks** →
  [**Recent events**](https://docs.gitlab.com/user/project/integrations/webhooks/)
  and verify merge request and note deliveries succeed.
- For self-managed or Dedicated GitLab, confirm the project or group webhook is
  signed, SSL verification is enabled, and the instance is on GitLab 19.0 or
  newer. On self-managed GitLab 19.0, confirm the `webhook_signing_token` feature
  flag is enabled; repair hooks disabled automatically after failures.
- For self-managed or Dedicated GitLab, confirm an existing service-account
  personal access token is active and has the `api` scope. If Codex created the
  service account, confirm it is correctly configured in
  [Codex connector settings](https://chatgpt.com/codex/cloud/settings/connectors)
  and that the project or group is enabled.
- For self-managed or Dedicated GitLab, confirm the workspace service
  account—not just the connected GitLab user—has Developer access to the project
  or a parent group so Codex can post reviews and reactions. Membership is
  inherited; activity and service-account access are separate.
- Confirm **Code review** or **Automatic reviews** is enabled and the MR matches
  the repository policy and trigger.
- Use `@codex review`.