# Security Review

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Codex Security Review is available to ChatGPT Enterprise, Business, Edu, and
Pro customers. It isn't available on Plus. Security reviews consume included
Codex allowance or ChatGPT credits.

Use Security Review to check a GitHub pull request for security issues in its
diff and supporting code. It uses threat-model context or security guidance
when configured and posts findings that meet your reporting threshold.

[Code Review](https://learn.chatgpt.com/docs/third-party/github) can also report security issues during
its general review, so the two reviews may report the same finding.

## Before you start

To configure automatic Codex Security Review, you need:

- Codex Security Review access for your workspace
- [Codex cloud](https://learn.chatgpt.com/docs/cloud) set up with a connected GitHub repository
- GitHub push or admin permission for the repository settings

An existing Codex Security scan is optional.

<a id="configure-security-review"></a>

## Configure Codex Security Review

Repository settings are shared. Changing them affects the pull requests selected
by the repository's **Review** policy, not just your own pull requests. Personal
preferences apply to your pull requests when the repository follows personal
preferences.

1. Go to [Codex settings](https://chatgpt.com/settings/code-review) and choose a repository.
2. Under **Review security vulnerabilities**, turn on **Auto security review**.
3. Use **Review** to choose which pull requests get Codex Security Review:
   - **Follow personal preferences** lets each contributor opt in with their personal
     Codex Security Review settings.
   - **All PRs** applies to every pull request in the repository.
   - **Team PRs**, when available, applies to pull requests opened by
     members of your ChatGPT workspace, not members of a GitHub team.
4. Use **Trigger** to choose when Codex Security Review runs:
   - **On PR open** runs independently when a pull request is opened.
   - **On every push** runs independently after new commits are pushed.
   - **Whenever code review runs** requires Code Review and runs Codex Security
     Review alongside it.

Connecting GitHub or enabling personal reviews for another contributor doesn't
request an extra review of your pull requests. Repository and personal settings
determine whether an automatic review runs; they don't create one review per
connected user. Later pushes can trigger another review according to **Trigger**,
and you can request additional reviews manually.

## Add threat-model context

You can configure a threat model to give Codex context about your application's
assets, trust boundaries, security assumptions, and repository-specific risks.
If the repository has an existing Codex Security scan configuration, you can use
its threat model. Otherwise, provide the path to a threat model file checked
into the repository. If you do not specify a source, Codex regenerates the
threat model for every review.

## Set reporting thresholds

By default, automatic Codex Security Reviews report **High** and **Critical**
findings, while manually requested reviews report **Medium**, **High**, and
**Critical** findings. You can change the minimum severity independently for
automatic and manual reviews, and add path-based overrides.

Findings posted to a pull request inherit that pull request's GitHub
visibility. Anyone who can view the pull request can view those findings,
including on public repositories or pull requests from contributors outside
your workspace. The reporting threshold controls
what Codex posts to GitHub. The full Codex Security Review report remains in
Codex.

<a id="request-a-security-review"></a>

## Request a Codex Security Review

To request a Codex Security Review manually, add this comment to a pull request:

`@codex security review`

Codex reacts while the review is running, then posts findings that meet your
manual reporting threshold directly on the pull request. Open the associated
Codex task and select the **Security Report** tab to view the full report,
including severity, attack path, supporting evidence, validation, and
remediation guidance. If no issues meet the reporting threshold, Codex does not
post findings to the pull request. Check the task status and full report
before interpreting an empty comment result as a completed review with no
findings.

## Related docs

- [Review GitHub pull requests with Codex](https://learn.chatgpt.com/docs/third-party/github) explains Code Review and the GitHub integration.
- [Codex Security](https://learn.chatgpt.com/docs/security) gives the product overview.
- [Codex Security cloud setup](https://learn.chatgpt.com/docs/security/setup) explains repository scans and findings review.
- [Improving the threat model](https://learn.chatgpt.com/docs/security/threat-model) explains how to tune repository context.