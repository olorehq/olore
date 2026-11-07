# Security

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

<CodexDocsOverviewLanding
  title="Security"
  description="Control what ChatGPT and Codex developer tools can access, understand how work is isolated, and apply safeguards for security-sensitive tasks."
  intro="Security controls define what ChatGPT and Codex developer tools can access and how sensitive actions are reviewed. Permissions, sandboxing, approvals, and network access establish trust boundaries. Codex Security helps find and remediate vulnerabilities, and cyber safety guidance explains how security-sensitive work is handled."
  primaryCta={{
    label: "Explore permissions",
    href: "/codex/permissions",
  }}
  hero={{
    illustration: "security",
    backgroundImage: "/images/codex/codex-wallpaper-1.webp",
    alt: "ChatGPT approval options for default, automatic, full, and custom access",
  }}
  sections={[
    {
      title: "Permissions",
      description:
        "Control filesystem, network, command, approval, and review behavior.",
      pages: [
        {
          title: "Permissions",
          description:
            "Choose a profile for filesystem, command, and network access.",
          href: "/codex/permissions",
          icon: "lock",
        },
        {
          title: "Sandboxing",
          description:
            "Understand how Codex isolates commands and file changes.",
          href: "/codex/sandboxing",
          icon: "shieldCheck",
        },
        {
          title: "Auto-review",
          description:
            "Review actions automatically against your configured policy.",
          href: "/codex/sandboxing/auto-review",
          icon: "dataControls",
        },
        {
          title: "Agent approvals and security",
          description: "Decide when Codex must ask before taking an action.",
          href: "/codex/agent-approvals-security",
          icon: "userLock",
        },
        {
          title: "Internet access",
          description: "Control which domains cloud chats can reach.",
          href: "/codex/cloud/internet-access",
          icon: "webSearch",
        },
      ],
    },
    {
      title: "Codex Security",
      description: "Find, understand, and remediate vulnerabilities.",
      pages: [
        {
          title: "Codex Security overview",
          description:
            "Assess code and turn reviewed findings into focused fixes.",
          href: "/codex/security",
          icon: "shieldCheck",
        },
        {
          title: "Codex Security plugin",
          description:
            "Run security workflows from the ChatGPT desktop app and Codex CLI.",
          href: "/codex/security/plugin",
          icon: "plugin",
        },
        {
          title: "Codex Security CLI",
          description:
            "Run local security scans and automate repository reviews.",
          href: "/codex/security/cli",
          icon: "terminal",
        },
        {
          title: "Codex Security TypeScript SDK",
          description:
            "Integrate security scanning and progress reporting into developer tools.",
          href: "/codex/security/sdk",
          icon: "code",
        },
        {
          title: "Codex Security Cloud setup",
          description:
            "Install the Cloud plugin, connect GitHub, and start a security scan.",
          href: "/codex/security/setup",
          icon: "storage",
        },
        {
          title: "Security Review",
          description: "Run in-depth security reviews on GitHub pull requests.",
          href: "/codex/security/security-review",
          icon: "shieldCheck",
        },
        {
          title: "Threat model",
          description: "Review and improve the threat model for your codebase.",
          href: "/codex/security/threat-model",
          icon: "webSearch",
        },
        {
          title: "Codex Security Cloud FAQ",
          description:
            "Get answers about cloud scans, findings, privacy, and access.",
          href: "/codex/security/faq",
          icon: "chat",
        },
      ],
    },
    {
      title: "Cyber safety",
      description: "Choose approved models and configure safe engagements.",
      pages: [
        {
          title: "Models & Trusted Access",
          description:
            "Choose a cybersecurity model and request Trusted Access.",
          href: "/codex/cyber-safety",
          icon: "userLock",
        },
        {
          title: "Recommended configuration",
          description:
            "Isolate the environment, enforce scope, and review sensitive actions.",
          href: "/codex/cyber-safety/recommended-configuration",
          icon: "settings",
        },
      ],
    },
  ]}
/>