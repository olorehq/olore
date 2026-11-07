# Use Codex in Linear

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use Codex in Linear to delegate work from issues. Assign an issue to Codex or mention `@Codex` in a comment, and Codex creates a cloud chat and replies with progress and results.

Codex in Linear is available on paid plans (see [Pricing](https://learn.chatgpt.com/docs/pricing)).

If you're on an Enterprise plan, ask your ChatGPT workspace admin to turn on Codex cloud chats in [workspace settings](https://chatgpt.com/admin/settings) and enable **Codex for Linear** in [connector settings](https://chatgpt.com/admin/ca).

## Set up the Linear integration

1. Set up [Codex cloud chats](https://learn.chatgpt.com/docs/cloud) by connecting GitHub in [Codex](https://chatgpt.com/codex) and creating an [environment](https://learn.chatgpt.com/docs/environments/cloud-environment) for the repository you want Codex to work in.
2. Go to [Codex settings](https://chatgpt.com/codex/settings/connectors) and install **Codex for Linear** for your workspace.
3. Link your Linear account by mentioning `@Codex` in a comment thread on a Linear issue.

## Delegate work to Codex

You can delegate in two ways:

### Assign an issue to Codex

After you install the integration, you can assign issues to Codex the same way you assign them to teammates. Codex starts work and posts updates back to the issue.



  
    

> Illustration: Assigning Codex to a Linear issue


  



### Mention `@Codex` in comments

You can also mention `@Codex` in comment threads to delegate work or ask questions. After Codex replies, follow up in the thread to continue the same chat.



  
    

> Illustration: Mentioning Codex in a Linear issue comment


  



After Codex starts working on an issue, it [chooses an environment and repo](#how-codex-chooses-an-environment-and-repo) to work in.
To pin a specific repo, include it in your comment, for example: `@Codex fix this in openai/codex`.

To track progress:

- Open **Activity** on the issue to see progress updates.
- Open the chat link to follow along in more detail.

When Codex finishes, it posts a summary and a link to the completed chat so you can create a pull request.

### How Codex chooses an environment and repo

- Linear suggests a repository based on the issue context. Codex selects the environment that best matches that suggestion. If the request is ambiguous, it falls back to the environment you used most recently.
- The chat runs against the default branch of the first repository listed in that environment’s repo map. Update the repo map in Codex if you need a different default or more repositories.
- If no suitable environment or repository is available, Codex will reply in Linear with instructions on how to fix the issue before retrying.

## Automatically assign issues to Codex

You can assign issues to Codex automatically using triage rules:

1. In Linear, go to **Settings**.
2. Under **Your teams**, select your team.
3. In the workflow settings, open **Triage** and turn it on.
4. In **Triage rules**, create a rule and choose **Delegate** > **Codex** (and any other properties you want to set).

Linear assigns new issues that enter triage to Codex automatically.
When you use triage rules, Codex runs chats using the account of the issue creator.



  
    

> Illustration: Linear triage rule automatically assigning issues to Codex


  



## Data usage, privacy, and security

When you mention `@Codex` or assign an issue to it, Codex receives your issue content to understand your request and create a chat.
Data handling follows OpenAI's [Privacy Policy](https://openai.com/privacy), [Terms of Use](https://openai.com/terms/), and other applicable [policies](https://openai.com/policies).
For more on security, see the [Codex security documentation](https://learn.chatgpt.com/docs/agent-approvals-security).

Codex uses large language models that can make mistakes. Always review answers and diffs.

## Tips and troubleshooting

- **Missing connections**: If Codex can't confirm your Linear connection, it replies in the issue with a link to connect your account.
- **Unexpected environment choice**: Reply in the thread with the environment you want (for example, `@Codex please run this in openai/codex`).
- **Wrong part of the code**: Add more context in the issue, or give explicit instructions in your `@Codex` comment.
- **More help**: See the [OpenAI Help Center](https://help.openai.com/).

<a id="connect-linear-for-local-tasks-mcp"></a>

## Connect Linear for local work (MCP)

If you're using the ChatGPT desktop app, Codex CLI, or IDE extension and want it to access Linear issues locally, configure the Linear Model Context Protocol (MCP) server.

To learn more, [check out the Linear MCP docs](https://linear.app/integrations/codex-mcp).

The setup steps for the MCP server are the same regardless of whether you use the IDE extension or the CLI since both share the same configuration.

### Use the CLI (recommended)

If you have the CLI installed, run:

```bash
codex mcp add linear --url https://mcp.linear.app/mcp
```

This prompts you to sign in with your Linear account and connect it to Codex.

### Configure manually

1. Open `~/.codex/config.toml` in your editor.
2. Add the following:

```toml
[mcp_servers.linear]
url = "https://mcp.linear.app/mcp"
```

3. Run `codex mcp login linear` to log in.