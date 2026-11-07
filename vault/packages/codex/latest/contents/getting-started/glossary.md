# Glossary

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use this glossary as a quick reference for Codex terms across the app, CLI, IDE extension, cloud, SDK, and related integrations.

<GlossaryTable
  client:load
  searchPlaceholder="Filter by term, definition, or surface"
  searchLabel="Search glossary terms"
  emptyStateMessage="No glossary terms match your search."
  maxVisibleEntries={100}
  options={[
    {
      key: "Action",
      href: "/codex/agent-approvals-security",
      appliesTo: "Desktop app, Web, Mobile, CLI, IDE extension, Cloud",
      description:
        "An operation performed by a person, ChatGPT, or Codex, such as editing a file, running a command, or using a connected service.",
    },
    {
      key: "Agent",
      href: "/codex",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud",
      description:
        "The Codex agent that reasons over context, uses tools, and completes a task.",
    },
    {
      key: "AGENTS.md",
      href: "/codex/agent-configuration/agents-md",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud",
      description:
        "Repository or user guidance file that gives Codex persistent instructions.",
    },
    {
      key: "Analytics dashboard",
      href: "/codex/enterprise/workspace-analytics",
      appliesTo: "Enterprise",
      description:
        "Admin hub for ChatGPT workspace adoption and Codex-focused reporting.",
    },
    {
      key: "API key sign-in",
      href: "/codex/auth#sign-in-with-an-api-key",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Authentication using an OpenAI API key.",
    },
    {
      key: "Approval policy",
      href: "/codex/agent-approvals-security#sandbox-and-approvals",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Rules for when Codex must ask before taking an action.",
    },
    {
      key: "Approval request",
      href: "/codex/agent-approvals-security#automatic-approval-reviews",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Codex asking to allow a restricted action.",
    },
    {
      key: "Apps (configuration)",
      href: "/codex/plugins",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Codex configuration and app-server fields that store connector settings under the `apps` name.",
    },
    {
      key: "Appshot",
      href: "/codex/appshots",
      appliesTo: "Desktop app",
      description:
        "Snapshot of the frontmost app window sent to a ChatGPT or Codex chat.",
    },
    {
      key: "Auth cache",
      href: "/codex/auth#login-caching",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Locally stored login credentials reused by Codex.",
    },
    {
      key: "Automatic approval review",
      href: "/codex/agent-approvals-security#automatic-approval-reviews",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Model-based review of eligible approval requests before they proceed.",
    },
    {
      key: "Scheduled task",
      href: "/codex/automations",
      appliesTo: "Desktop app, Web",
      description:
        "A prompt ChatGPT runs at a future time or on a recurring schedule, with its own settings and run history.",
    },
    {
      key: "Scheduled run",
      href: "/codex/automations#managing-tasks",
      appliesTo: "Desktop app, Web",
      description:
        "One execution of a scheduled task, including its status and any resulting findings.",
    },
    {
      key: "Computer Use in the browser",
      href: "/codex/browser?surface=app#app-computer-use-in-the-browser",
      appliesTo: "Desktop app",
      description:
        "Capability that lets ChatGPT operate the built-in browser directly.",
    },
    {
      key: "Chat",
      href: "/codex/projects#start-a-chat",
      appliesTo: "Desktop app, Web, Mobile, CLI, IDE extension, Cloud",
      description:
        "A saved space for exchanging messages with ChatGPT or Codex, including shared context, results, and actions. Quick chat starts a ChatGPT chat from Codex.",
    },
    {
      key: "ChatGPT sign-in",
      href: "/codex/auth#sign-in-with-chatgpt",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud",
      description:
        "Authentication using a ChatGPT account and workspace permissions.",
    },
    {
      key: "Computer History",
      href: "/codex/customization/computer-history",
      appliesTo: "Desktop app",
      description:
        "Opt-in macOS feature that builds memories and a timeline from interaction events across allowed apps and websites.",
    },
    {
      key: "Codex Cloud",
      href: "/codex/cloud",
      appliesTo: "Desktop app, IDE extension, Web",
      description:
        "Coding tasks that run in the cloud with their own workspaces, repositories, and tools.",
    },
    {
      key: "Cloud environment",
      href: "/codex/environments/cloud-environments",
      appliesTo: "Cloud",
      description:
        "Reusable repositories, dependencies, tools, and access settings for tasks in Codex Cloud.",
    },
    {
      key: "Cloud chat",
      href: "/codex/environments/cloud-environments#how-codex-cloud-tasks-run",
      appliesTo: "Cloud",
      description: "A Codex chat that runs remotely in a cloud environment.",
    },
    {
      key: "Codex",
      href: "/codex",
      appliesTo: "Desktop app, CLI, IDE extension, Web, Cloud, SDK",
      description: "OpenAI's coding agent for software development tasks.",
    },
    {
      key: "ChatGPT desktop app",
      href: "/codex/app",
      appliesTo: "Desktop",
      description:
        "Desktop app with ChatGPT and Codex, including Chat and Work, projects, file previews, scheduled tasks, and developer tools.",
    },
    {
      key: "Codex app-server",
      href: "/codex/app-server",
      appliesTo: "Desktop app, IDE extension, SDK",
      description:
        "Local JSON-RPC server for embedding Codex threads, turns, approvals, history, and streamed events in custom clients.",
    },
    {
      key: "Codex CLI",
      href: "/codex/cli",
      appliesTo: "Terminal",
      description:
        "Terminal client for running Codex interactively or in scripts.",
    },
    {
      key: "codex exec",
      href: "/codex/non-interactive-mode",
      appliesTo: "CLI",
      description:
        "CLI command for running Codex non-interactively from scripts or CI.",
    },
    {
      key: "Codex IDE extension",
      href: "/codex/ide",
      appliesTo: "IDE",
      description:
        "Editor integration for using Codex inside IDEs like VS Code, JetBrains IDEs, Cursor, and Windsurf.",
    },
    {
      key: "Codex SDK",
      href: "/codex/codex-sdk",
      appliesTo: "SDK",
      description:
        "Programmatic interface for building Codex-powered workflows or integrations.",
    },
    {
      key: "Codex-managed worktree",
      href: "/codex/environments/git-worktrees#codex-managed-worktrees",
      appliesTo: "Desktop app",
      description: "A temporary worktree Codex creates and manages for a chat.",
    },
    {
      key: "Compaction",
      href: "/codex/prompting#context",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud",
      description:
        "Summarizing older context so long-running work can continue.",
    },
    {
      key: "Compliance API",
      href: "/codex/enterprise/compliance-api",
      appliesTo: "Enterprise",
      description:
        "API for exporting supported ChatGPT workspace records and audit metadata.",
    },
    {
      key: "Computer Use",
      href: "/codex/computer-use",
      appliesTo: "Desktop app",
      description:
        "Desktop capability that lets ChatGPT interact with other applications through the UI.",
    },
    {
      key: "config.toml",
      href: "/codex/config-file/config-reference#configtoml",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Local Codex configuration files.",
    },
    {
      key: "Connected host",
      href: "/codex/remote-connections#what-comes-from-the-connected-host",
      appliesTo: "Desktop app, Mobile",
      description:
        "Computer or development environment that provides files, tools, and shell access for ChatGPT or Codex chats opened through remote connections.",
    },
    {
      key: "Connector",
      href: "/codex/plugins",
      appliesTo: "Desktop app (ChatGPT Work, Codex), Web (ChatGPT Work)",
      description:
        "A component of a plugin that connects ChatGPT or Codex to data and actions in an external service.",
    },
    {
      key: "Conversation",
      href: "/codex/projects#start-a-chat",
      appliesTo: "Desktop app, Web, Mobile, CLI, IDE extension, Cloud",
      description:
        "The ongoing exchange of messages and shared context between a person and ChatGPT or Codex within a chat.",
    },
    {
      key: "Context",
      href: "/codex/prompting#context",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud, SDK",
      description:
        "Information Codex can use while working, such as files, prior messages, tool output, and instructions.",
    },
    {
      key: "Context window",
      href: "/api/docs/guides/conversation-state#managing-the-context-window",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud, SDK",
      description:
        "The maximum amount of information the model can consider at once.",
    },
    {
      key: "Custom agent",
      href: "/codex/agent-configuration/subagents#custom-agents",
      appliesTo: "Desktop app, CLI",
      description:
        "User-defined agent role with its own instructions and settings.",
    },
    {
      key: "Deny-read rule",
      href: "/codex/permissions#deny-reads-with-exact-paths-or-globs",
      appliesTo: "Desktop app, CLI, IDE extension, Enterprise",
      description:
        "Filesystem permission rule that prevents Codex from reading sensitive paths or glob matches.",
    },
    {
      key: "Diff",
      href: "/codex/code-review?surface=app#app-what-changes-it-shows",
      appliesTo: "Desktop app, Git, Review",
      description:
        "Set of Git file changes shown for inspection, comments, staging, or reverting.",
    },
    {
      key: "Domain allowlist",
      href: "/codex/environments/cloud-environments#connect-to-services",
      appliesTo: "Cloud",
      description:
        "Set of domains allowed by a Codex Cloud environment’s network policy.",
    },
    {
      key: "Environment (local)",
      href: "/codex/environments/local-environment",
      appliesTo: "Desktop app, Worktree",
      description:
        "Desktop app configuration that tells Codex how to set up worktrees for a project.",
    },
    {
      key: "Environment variable",
      href: "/codex/environments/cloud-environments#environment-variables-and-secrets",
      appliesTo: "Cloud, CLI, IDE extension",
      description:
        "Runtime configuration value available during task execution.",
    },
    {
      key: "Ephemeral session",
      href: "/codex/non-interactive-mode#basic-usage",
      appliesTo: "CLI",
      description:
        "Non-interactive run that skips saving session state after it completes.",
    },
    {
      key: "Fast mode",
      href: "/codex/agent-configuration/speed#fast-mode",
      appliesTo: "CLI, IDE extension",
      description:
        "Speed setting that makes supported models respond faster at a higher credit cost.",
    },
    {
      key: "Filesystem permission",
      href: "/codex/permissions#filesystem-permissions",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Permission profile rule that grants or denies read and write access to paths.",
    },
    {
      key: "Finding",
      href: "/codex/automations#managing-tasks",
      appliesTo: "Desktop app",
      description: "A notable result or issue surfaced by a scheduled task.",
    },
    {
      key: "Full access",
      href: "/codex/sandboxing#configure-defaults",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Mode where Codex runs without normal sandbox restrictions.",
    },
    {
      key: "Git worktree",
      href: "/codex/environments/git-worktrees#whats-a-worktree",
      appliesTo: "Desktop app, Git",
      description:
        "A second checkout of the same repository for parallel branch work.",
    },
    {
      key: "Handoff",
      href: "/codex/environments/git-worktrees#working-between-local-and-worktree",
      appliesTo: "Desktop app",
      description: "Moving a chat and its work between Local and Worktree.",
    },
    {
      key: "Heartbeat",
      href: "/codex/automations#schedule-a-task-inside-a-chat",
      appliesTo: "Desktop app",
      description:
        "A recurring scheduled task that returns ChatGPT to the same chat.",
    },
    {
      key: "Hook",
      href: "/codex/hooks",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "A lifecycle handler that runs when a Codex event matches, such as tool use, permission requests, or when a turn stops.",
    },
    {
      key: "Hook event",
      href: "/codex/hooks#config-shape",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Lifecycle point where configured hook handlers can run.",
    },
    {
      key: "Hunk",
      href: "/codex/code-review?surface=app#app-staging-and-reverting-files",
      appliesTo: "Desktop app, Git, Review",
      description:
        "Contiguous section of a diff that can be staged, unstaged, or reverted independently.",
    },
    {
      key: "Inline comment",
      href: "/codex/code-review?surface=app#app-inline-comments-for-feedback",
      appliesTo: "Desktop app",
      description: "Line-specific feedback attached to a diff.",
    },
    {
      key: "Live web search",
      href: "/codex/config-file/config-basic#web-search-mode",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Real-time web lookup for current information.",
    },
    {
      key: "Local",
      href: "/codex/environments/git-worktrees#working-between-local-and-worktree",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Mode where Codex works on the user's computer.",
    },
    {
      key: "Local chat",
      href: "/codex/environments/modes",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "A ChatGPT or Codex chat that runs on the user's machine.",
    },
    {
      key: "Managed configuration",
      href: "/codex/enterprise/managed-configuration",
      appliesTo: "Enterprise",
      description: "Organization-controlled Codex defaults and restrictions.",
    },
    {
      key: "MCP",
      href: "/codex/extend/mcp",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Model Context Protocol, a standard for connecting Codex to external tools and context.",
    },
    {
      key: "MCP resource",
      href: "/codex/extend/mcp#supported-mcp-features",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Readable context exposed by an MCP server for Codex to inspect.",
    },
    {
      key: "MCP server",
      href: "/codex/extend/mcp#supported-mcp-features",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "External tool or context provider exposed through MCP.",
    },
    {
      key: "MCP tool",
      href: "/codex/extend/mcp#supported-mcp-features",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Action exposed by an MCP server that Codex can call during a task.",
    },
    {
      key: "MDM",
      href: "/codex/enterprise/managed-configuration#macos-managed-preferences-mdm",
      appliesTo: "Enterprise",
      description:
        "Mobile device management tooling for distributing device profiles and managed Codex settings.",
    },
    {
      key: "Memories",
      href: "/codex/customization/memories",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Locally stored context Codex can reuse across sessions.",
    },
    {
      key: "Model",
      href: "/codex/models",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud, SDK",
      description: "The AI model Codex uses for reasoning and tool work.",
    },
    {
      key: "Network access",
      href: "/codex/agent-approvals-security#network-access",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud",
      description:
        "Permission for commands or environments to reach the internet.",
    },
    {
      key: "Network policy",
      href: "/codex/agent-approvals-security#network-policy",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Domain-based allow and deny rules that constrain sandboxed outbound network traffic.",
    },
    {
      key: "Non-interactive mode",
      href: "/codex/non-interactive-mode",
      appliesTo: "CLI",
      description: "CLI mode for running Codex from scripts or CI.",
    },
    {
      key: "Output schema",
      href: "/codex/non-interactive-mode#create-structured-outputs-with-a-schema",
      appliesTo: "CLI",
      description:
        "JSON Schema passed to `codex exec` to constrain the final response.",
    },
    {
      key: "Permission profile",
      href: "/codex/permissions#define-and-select-a-profile",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Named least-privilege policy that combines filesystem and network rules for local command execution.",
    },
    {
      key: "Plan",
      href: "/codex/learn/best-practices#plan-first-for-difficult-tasks",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud",
      description: "Codex's proposed or tracked steps for completing a task.",
    },
    {
      key: "Plugin",
      href: "/codex/plugins",
      appliesTo: "Desktop app (ChatGPT Work, Codex), Web (ChatGPT Work), CLI",
      description:
        "An installable bundle of capabilities, such as skills, connectors, and tools, distributed through the universal directory shared by ChatGPT and Codex.",
    },
    {
      key: "Plugin manifest",
      href: "https://developers.openai.com/plugins/build/plugins#plugin-structure",
      appliesTo: "Plugin authoring",
      description:
        "Plugin metadata file that identifies a plugin and points to bundled skills, connector mappings, MCP servers, hooks, and metadata.",
    },
    {
      key: "Prefix rule",
      href: "/codex/agent-configuration/rules#understand-the-rules-language",
      appliesTo: "Desktop app, CLI, IDE extension, Enterprise",
      description:
        "Command-rule pattern that allows, prompts for, or forbids matching command prefixes.",
    },
    {
      key: "Profile",
      href: "/codex/config-file/config-advanced#profiles",
      appliesTo: "CLI, IDE extension",
      description: "Named configuration preset for Codex.",
    },
    {
      key: "Progressive disclosure",
      href: "/codex/build-skills",
      appliesTo: "Desktop app, Web (ChatGPT Work), CLI, IDE extension",
      description:
        "Loading skill details only when needed to preserve context.",
    },
    {
      key: "Project",
      href: "/codex/projects",
      appliesTo: "Desktop app",
      description:
        "A group of related chats and shared sources, or a local folder used for file-based work.",
    },
    {
      key: "Prompt",
      href: "/codex/prompting",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud, SDK",
      description: "A question, instruction, or goal sent to ChatGPT or Codex.",
    },
    {
      key: "Pull request review",
      href: "/codex/code-review?surface=app#app-pull-request-reviews",
      appliesTo: "Desktop app, CLI, GitHub",
      description: "Codex review of changes or feedback on a pull request.",
    },
    {
      key: "RBAC",
      href: "/codex/enterprise/roles-and-workspace-permissions",
      appliesTo: "Enterprise",
      description: "Role-based access control for workspace permissions.",
    },
    {
      key: "Read-only mode",
      href: "/codex/sandboxing",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Mode where Codex can inspect but not modify without approval.",
    },
    {
      key: "Reasoning effort",
      href: "/codex/config-file/config-basic#reasoning-effort",
      appliesTo: "Desktop app, CLI, IDE extension, SDK",
      description:
        "Setting that controls how much reasoning budget a model uses.",
    },
    {
      key: "Remote connection",
      href: "/codex/remote-connections",
      appliesTo: "Desktop app, Mobile",
      description:
        "Connection that lets you access ChatGPT or Codex chats on another device through a connected host.",
    },
    {
      key: "requirements.toml",
      href: "/codex/config-file/config-reference#requirementstoml",
      appliesTo: "Enterprise",
      description: "Admin-enforced requirements file for managed Codex setups.",
    },
    {
      key: "Review pane",
      href: "/codex/code-review?surface=app",
      appliesTo: "Desktop app",
      description:
        "Desktop app view for inspecting diffs, comments, and Git changes.",
    },
    {
      key: "Rules",
      href: "/codex/agent-configuration/rules",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Policies that allow, prompt for, or deny command prefixes or permission exceptions.",
    },
    {
      key: "Sandbox",
      href: "/codex/sandboxing",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Enforced boundary limiting what Codex commands can access or modify.",
    },
    {
      key: "Sandbox mode",
      href: "/codex/config-file/config-basic#sandbox-level",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Configuration that defines Codex's filesystem and network limits.",
    },
    {
      key: "Sandbox preset",
      href: "/codex/codex-sdk#sandbox-presets",
      appliesTo: "SDK",
      description:
        "SDK shorthand for common sandbox policies such as read-only, workspace-write, or full access.",
    },
    {
      key: "Schedule",
      href: "/codex/automations",
      appliesTo: "Desktop app",
      description: "The timing rule for a scheduled task.",
    },
    {
      key: "Network secret",
      href: "/codex/environments/cloud-environments#environment-variables-and-secrets",
      appliesTo: "Codex Cloud",
      description:
        "A credential for a specific HTTPS service. Programs receive a placeholder; the proxy substitutes the credential for allowed destinations during setup and tasks.",
    },
    {
      key: "Setup script",
      href: "/codex/environments/local-environment#setup-scripts",
      appliesTo: "Desktop app worktrees",
      description:
        "Script run before the agent starts to install dependencies or prepare tools.",
    },
    {
      key: "Skill",
      href: "/codex/build-skills",
      appliesTo: "Desktop app, Web (ChatGPT Work), CLI, IDE extension",
      description:
        "Reusable workflow package with instructions and optional scripts or references.",
    },
    {
      key: "Skill invocation",
      href: "/codex/build-skills#how-codex-uses-skills",
      appliesTo: "Desktop app, Web (ChatGPT Work), CLI, IDE extension",
      description: "Explicit or implicit activation of a skill.",
    },
    {
      key: "Slash command",
      href: "/codex/developer-commands?surface=cli",
      appliesTo: "CLI",
      description:
        "Command entered with a leading slash to control or inspect a Codex CLI session.",
    },
    {
      key: "Standalone scheduled task",
      href: "/codex/automations",
      appliesTo: "Desktop app, Web",
      description:
        "Scheduled task whose runs each start a new chat and report findings in Triage.",
    },
    {
      key: "STDIO MCP server",
      href: "/codex/extend/mcp#stdio-servers",
      appliesTo: "CLI, IDE extension",
      description:
        "MCP server launched as a local process by a configured command and arguments.",
    },
    {
      key: "Streamable HTTP MCP server",
      href: "/codex/extend/mcp#streamable-http-servers",
      appliesTo: "CLI, IDE extension",
      description:
        "MCP server reached over HTTP, optionally with bearer token or OAuth authentication.",
    },
    {
      key: "Subagent",
      href: "/codex/agent-configuration/subagents",
      appliesTo: "Desktop app, CLI",
      description: "Specialized child agent spawned to work on part of a task.",
    },
    {
      key: "Subagent workflow",
      href: "/codex/agent-configuration/subagents#core-terms",
      appliesTo: "Desktop app, CLI",
      description:
        "Workflow where Codex runs delegated agents in parallel and combines their results.",
    },
    {
      key: "Standalone task",
      href: "/codex/projects",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud",
      description: "A Codex task that isn't grouped within a project.",
    },
    {
      key: "Task",
      href: "/codex/projects",
      appliesTo: "Desktop app, Web, Mobile, CLI, IDE extension, Cloud",
      description:
        "A defined outcome ChatGPT or Codex works toward, such as fixing a bug, creating a document, or researching a topic.",
    },
    {
      key: "Thread",
      href: "/codex/app-server#threads",
      appliesTo: "App-server, SDK",
      description:
        "A technical object in Codex app-server APIs that contains turns and stored conversation history.",
    },
    {
      key: "Scheduled task in a chat",
      href: "/codex/automations#schedule-a-task-inside-a-chat",
      appliesTo: "Desktop app, Web",
      description:
        "A scheduled task that uses an existing chat's context and returns each run's results to that chat.",
    },
    {
      key: "Thread fork",
      href: "/codex/app-server#start-or-resume-a-thread",
      appliesTo: "App-server, SDK",
      description:
        "New thread branched from the stored history of an existing thread.",
    },
    {
      key: "Turn",
      href: "/codex/app-server#core-primitives",
      appliesTo: "Desktop app, CLI, IDE extension, Cloud, SDK",
      description:
        "One exchange in a chat, usually a user prompt plus the agent's response and actions.",
    },
    {
      key: "Web search cache",
      href: "/codex/config-file/config-basic#web-search-mode",
      appliesTo: "Desktop app, CLI, IDE extension",
      description:
        "Pre-indexed search results Codex can use without live browsing.",
    },
    {
      key: "ChatGPT Work",
      href: "/codex/get-started-with-work",
      appliesTo: "Desktop app, Web",
      description:
        "The agent in ChatGPT for research, analysis, and creating documents, presentations, spreadsheets, and other finished work.",
    },
    {
      key: "Worktree",
      href: "/codex/environments/git-worktrees",
      appliesTo: "Desktop app",
      description:
        "Mode where Codex isolates changes in a separate Git worktree.",
    },
    {
      key: "Writable roots",
      href: "/codex/agent-approvals-security#protected-paths-in-writable-roots",
      appliesTo: "Desktop app, CLI, IDE extension",
      description: "Directories Codex is allowed to modify.",
    },
  ]}
/>