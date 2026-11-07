# Codex Security

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Codex Security reviews code for vulnerabilities and reports evidence you can
use to investigate and fix them. Choose how to run it based on where your code
lives and how you want to review the results.

## Choose where to start

| Use                   | When you want to                                                          | Start here                                          |
| --------------------- | ------------------------------------------------------------------------- | --------------------------------------------------- |
| Codex Security Cloud  | Scan connected GitHub repositories in Codex cloud or monitor new commits. | [Cloud setup](https://learn.chatgpt.com/docs/security/setup)                |
| Codex Security plugin | Scan a local repository in Codex and work through findings interactively. | [Run your first local scan](https://learn.chatgpt.com/docs/security/plugin) |
| Codex Security CLI    | Run repeatable terminal scans or add checks to CI.                        | [CLI quickstart](https://learn.chatgpt.com/docs/security/cli)               |
| Codex Security SDK    | Run scans and handle results in an application or developer tool.         | [SDK guide](https://learn.chatgpt.com/docs/security/sdk)                    |

For your first local scan, use the plugin. In the ChatGPT desktop app, select
**Codex**, install **Codex Security**, and open **Security** in the sidebar.
The [Security workbench](https://learn.chatgpt.com/docs/security/plugin/workbench) keeps saved scans
and findings available for review. You can also use the plugin in Codex CLI.

The Codex Security CLI and SDK are distributed in the public [@openai/codex-security package](https://github.com/openai/codex-security). Scans using OpenAI inference require Codex Security access. See each quickstart for its
runtime and authentication requirements.

Codex Security Cloud is a separate plugin, available in research preview on
the web and in the desktop app. It requires workspace access, a GitHub
connection, and a compatible Codex cloud environment. You can connect the
repository and create an environment during setup.

<figure className="not-prose my-8">
  <CodexScreenshot
    alt="Codex Security Cloud overview with repository counts, finding statuses, and findings that need attention"
    lightSrc={cloudOverview.src}
    darkSrc={cloudOverview.src}
    variant="no-wallpaper"
    maxHeight="560px"
    imageClass="border border-subtle"
    panOnMobile
  />
  <figcaption className="mt-3 text-sm text-secondary">
    Track open findings and fixes across repositories. This example uses
    fictional repositories, findings, and counts.
  </figcaption>
</figure>

For security reviews posted to GitHub pull requests, see
[Security Review](https://learn.chatgpt.com/docs/security/security-review).

## Choose the next task

After a local scan, review its scope and findings before deciding what to do next.

| Task                                                  | Guide                                                               |
| ----------------------------------------------------- | ------------------------------------------------------------------- |
| Focus a scan on a service or add security context     | [Run a security scan](https://learn.chatgpt.com/docs/security/plugin/scans)                 |
| Run repeated reviews of the same repository or folder | [Run a deep scan](https://learn.chatgpt.com/docs/security/plugin/deep-scans)                |
| Check a pull request, commit, or local diff           | [Review code changes](https://learn.chatgpt.com/docs/security/plugin/code-changes)          |
| Assess findings from another scanner or issue tracker | [Triage a backlog](https://learn.chatgpt.com/docs/security/plugin/triage-backlog)           |
| Generate a patch and check whether it fixes the issue | [Fix and verify findings](https://learn.chatgpt.com/docs/security/plugin/fix-findings)      |
| Share results or assign remediation work              | [Export and track findings](https://learn.chatgpt.com/docs/security/plugin/export-findings) |

For automation, use the CLI guides to [scan repositories in
bulk](https://learn.chatgpt.com/docs/security/cli/bulk-scans) or [run scans in
CI](https://learn.chatgpt.com/docs/security/cli/ci). Look up commands and defaults in the
[CLI reference](https://learn.chatgpt.com/docs/security/cli/reference).

Codex Security scans application code. For permissions and sandbox controls
that govern Codex itself, see [Agent approvals and
security](https://learn.chatgpt.com/docs/agent-approvals-security).