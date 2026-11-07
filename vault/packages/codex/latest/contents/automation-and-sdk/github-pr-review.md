# Review GitHub pull requests with Codex

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use Codex code review to get another high-signal review pass on GitHub pull
requests. Codex reviews the pull request diff, follows your repository guidance,
and posts a standard GitHub code review focused on serious issues. Security
Review, available in research preview, provides a more in-depth review of
potential security issues in a pull request.



[Watch: Codex code review walkthrough](https://www.youtube.com/watch?v=HwbSWVg5Ln4)




## Before you start

Make sure you have:

- A GitHub repository connected to Codex. For legacy integration setup, see [Codex Cloud (Legacy)](https://learn.chatgpt.com/docs/environments/cloud-environment).
- Access to [Codex code review settings](https://chatgpt.com/settings/code-review).
- An `AGENTS.md` file if you want Codex to follow repository-specific review guidance.

## Set up Codex code review

To configure automatic reviews, you need a connected GitHub repository and
GitHub push or admin permission for its settings.

1. Connect your GitHub repository to Codex.
2. Go to [Codex settings](https://chatgpt.com/settings/code-review).
3. Choose your repository, then turn on **Automatic review** under **Review code**.



  
    

> Illustration: Codex settings showing repositories and the personal Automatic review toggle


  





## Request a Codex review

1. In a pull request comment, mention `@codex review`.
2. Wait for Codex to react (👀) and post a review.



  
    

> Illustration: A pull request comment with @codex review


  





Codex posts a review on the pull request, just like a teammate would. In
GitHub, Codex flags only P0 and P1 issues so review comments stay focused on
high-priority risks.



  
    

> Illustration: Example Codex code review on a pull request


  





## Enable automatic reviews

To enable automatic reviews for your pull requests, turn on **Automatic review**
under **Personal preferences** in [Codex settings](https://chatgpt.com/settings/code-review).
Choose when reviews run with **Review trigger**. This applies to repositories
with code review enabled and doesn't require an `@codex review` comment.

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

Put repository-wide rules in the root `AGENTS.md` and service-specific rules
in a nested file, such as `services/experiment_reporting/AGENTS.md`. Codex
applies the root and more-specific guidance that covers each changed file, so
unrelated changes don't have to carry service-specific context.

Start with two or three concise rules that encode checks reviewers often explain. Useful rules:

- **Focus on consequential, repository-specific behavior.** Describe the
  compatibility constraint, data boundary, or unsafe side effect to flag and
  why it matters.
- **State the safe path or exception.** Give Codex enough context to distinguish
  a real issue from expected behavior.
- **Keep rules scoped and durable.** Prefer outcomes over function names that
  can change, and place guidance near the code it governs.
- **Leave mechanical checks in CI.** Keep formatting, lint, and other
  deterministic checks out of review rules.

Open a representative pull request and request a review with `@codex review`.
Refine the rules based on the findings and feedback you see, and narrow or
remove guidance that produces noise.

Code review rules guide Codex; they don't replace tests, branch protections, or
required approvals.

For a one-off focus, add it to your pull request comment:

`@codex review for issues in the database migration`

## Security Review

Security Review is an additional review for customers that want to
pay particular attention to security issues in pull requests. It goes deeper
than Code Review on security-specific risks by analyzing the pull request diff,
supporting repository context, and configured threat models or security
guidance.

Code Review can also identify security-related issues as part of its general
review, so you may see occasional overlap between Code Review and Security
Review findings.

### Set up Security Review

For more detailed setup instructions and configuration options, see [Security
Review](https://learn.chatgpt.com/docs/security/security-review).

1. Connect your GitHub repository to Codex.
2. Go to [Codex settings](https://chatgpt.com/settings/code-review).
3. Choose your repository. Under **Review security vulnerabilities**, turn on
   **Auto security review** and choose whose pull requests receive reviews with
   **Review**. Set **Trigger** to **Whenever code review runs** to run it
   alongside Code Review.

### Request a Security Review

To request a Security Review manually, add this comment to a pull request:

`@codex security review`

Codex reacts while the review is running, then posts security findings directly
on the pull request. Open the associated Codex task and select the **Security
Report** tab to view the full report.

## Act on review findings

After Codex posts a review, you can ask it to fix issues in the same pull
request by leaving another comment:

```md
@codex fix the P1 issue
```

Codex starts a [legacy cloud chat](https://learn.chatgpt.com/docs/environments/cloud-environment) with the pull request as context and can push a fix
back to the branch when it has permission to do so.

## Give Codex other tasks

If you mention `@codex` in a comment with anything other than `review`, Codex starts a [legacy cloud chat](https://learn.chatgpt.com/docs/environments/cloud-environment) using your pull request as context.

```md
@codex fix the CI failures
```

## Troubleshoot code review

If Codex doesn't react or post a review:

- Confirm you turned on code review for the repository in [Codex settings](https://chatgpt.com/settings/code-review).
- Confirm the pull request belongs to a GitHub repository connected to Codex.
- Use the exact trigger `@codex review` in a pull request comment.
- For automatic reviews, check **Automatic review** under the repository
  settings and **Personal preferences** in [Codex settings](https://chatgpt.com/settings/code-review). Confirm the pull request event matches your review trigger settings.