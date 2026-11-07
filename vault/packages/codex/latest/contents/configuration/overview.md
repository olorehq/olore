# Configuration

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

<CodexDocsOverviewLanding
  title="Configuration"
  description="Set defaults, add durable context, and customize how ChatGPT and Codex developer tools work."
  intro="Configuration shapes how ChatGPT and Codex developer tools behave across chats, repositories, and machines. Durable context, config files, repository guidance, subagents, external connections, and Linux and Windows setup work together to keep those workflows consistent for individuals and teams."
  primaryCta={{
    label: "Explore customization",
    href: "/codex/customization/overview",
  }}
  hero={{
    illustration: "configuration",
    backgroundImage: "/images/codex/codex-wallpaper-1.webp",
    alt: "ChatGPT settings navigation, config file options, and personality controls",
  }}
  sections={[
    {
      title: "Customization",
      description:
        "Adapt the experience and carry useful context between chats.",
      pages: [
        {
          title: "Customization overview",
          description:
            "Customize ChatGPT and Codex with guidance, skills, MCP, and subagents.",
          href: "/codex/customization/overview",
          icon: "customize",
        },
        {
          title: "Memories",
          description: "Let ChatGPT retain useful context across chats.",
          href: "/codex/customization/memories",
          icon: "threads",
        },
        {
          title: "Computer History",
          description:
            "Use recent computer activity as context and manage what is included.",
          href: "/codex/customization/computer-history",
          icon: "stack",
        },
      ],
    },
    {
      title: "Config file",
      description:
        "Control models, tools, environments, and defaults with configuration files and variables.",
      pages: [
        {
          title: "Config basics",
          description:
            "Understand configuration layers and create a config file.",
          href: "/codex/config-file/config-basic",
          icon: "settings",
        },
        {
          title: "Advanced config",
          description:
            "Use profiles, providers, policies, and advanced options.",
          href: "/codex/config-file/config-advanced",
          icon: "dataControls",
        },
        {
          title: "Config reference",
          description: "Look up every supported configuration key.",
          href: "/codex/config-file/config-reference",
          icon: "code",
        },
        {
          title: "Environment variables",
          description: "Set values that change across systems and sessions.",
          href: "/codex/config-file/environment-variables",
          icon: "terminal",
        },
        {
          title: "Sample config",
          description:
            "Start from a complete, annotated configuration example.",
          href: "/codex/config-file/config-sample",
          icon: "folder",
        },
      ],
    },
    {
      title: "Agent configuration",
      description: "Shape how agents collaborate and follow project guidance.",
      pages: [
        {
          title: "AGENTS.md",
          description: "Give Codex durable instructions for a repository.",
          href: "/codex/agent-configuration/agents-md",
          icon: "folder",
        },
        {
          title: "Subagents",
          description: "Delegate focused tasks to specialized agents.",
          href: "/codex/agent-configuration/subagents",
          icon: "robot",
        },
        {
          title: "Speed",
          description: "Control how quickly and deeply Codex works.",
          href: "/codex/agent-configuration/speed",
          icon: "settings",
        },
        {
          title: "Rules",
          description: "Define commands Codex can run automatically.",
          href: "/codex/agent-configuration/rules",
          icon: "dataControls",
        },
      ],
    },
    {
      title: "Extend ChatGPT and Codex",
      description: "Package knowledge, connect services, and add capabilities.",
      pages: [
        {
          title: "Record & Replay",
          description:
            "Show ChatGPT or Codex a workflow and turn it into a reusable skill.",
          href: "/codex/extend/record-and-replay",
          icon: "tools",
        },
        {
          title: "MCP",
          description:
            "Connect Codex developer tools to external tools and context.",
          href: "/codex/extend/mcp",
          icon: "connect",
        },
      ],
    },
    {
      title: "Linux",
      description: "Install and update ChatGPT on a supported Linux desktop.",
      pages: [
        {
          title: "ChatGPT desktop app",
          description:
            "Install the Linux preview on Ubuntu, Debian, Fedora, or Arch Linux.",
          href: "/codex/linux/linux-app",
          icon: "computerUse",
        },
      ],
    },
    {
      title: "Windows",
      description: "Run Codex natively on Windows or inside WSL.",
      pages: [
        {
          title: "ChatGPT desktop app",
          description:
            "Use the ChatGPT desktop app with PowerShell or WSL workflows.",
          href: "/codex/windows/windows-app",
          icon: "computerUse",
        },
        {
          title: "Windows sandbox",
          description:
            "Run Codex with native filesystem and command isolation.",
          href: "/codex/windows/windows-sandbox",
          icon: "lock",
        },
        {
          title: "WSL",
          description: "Use Codex in a Linux environment managed by Windows.",
          href: "/codex/windows/wsl",
          icon: "terminal",
        },
      ],
    },
  ]}
/>