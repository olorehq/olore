# Administration

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

<CodexDocsOverviewLanding
  title="Administration"
  description="Set access and policy boundaries for ChatGPT, Codex developer tools, APIs, plugins, and connected systems."
  intro="Start with the rollout guide, then set up identity and access. Use Configuration for app installation, updates, and workspace policies. Use Advanced deployment for Amazon Bedrock, Bedrock in GovCloud, or an organization gateway. Browse the sections for feature controls, usage, and security."
  primaryCta={{
    label: "Start your rollout",
    href: "/codex/enterprise/admin-setup",
  }}
  hero={{
    illustration: "administration",
    backgroundImage: "/images/codex/codex-wallpaper-1.webp",
    alt: "ChatGPT workspace members, groups, access tokens, and role controls",
  }}
  sections={[
    {
      title: "Getting started",
      description:
        "Plan your rollout and explore tools for routine administration.",
      pages: [
        {
          title: "Admin rollout guide",
          description:
            "Plan access, assign owners, configure controls, and verify the rollout.",
          href: "/codex/enterprise/admin-setup",
          icon: "users",
        },
        {
          title: "Admin plugin",
          description:
            "Use the Admin plugin for permissions, approvals, and supported administrative workflows.",
          href: "/codex/enterprise/admin-plugin",
          icon: "tools",
        },
      ],
    },
    {
      title: "Feature Configuration",
      description:
        "Choose a setup task, then review its access and security requirements.",
      pages: [
        {
          title: "Configure dots permissions",
          description:
            "Manage dots access, communication, computers, and custom rules.",
          href: "/codex/enterprise/dots-admin-guide",
          icon: "shieldCheck",
        },
        {
          title: "Manage Space sharing and access",
          description:
            "Control Library sharing permissions and help members share pages.",
          href: "/codex/space/collaboration#for-workspace-admins",
          icon: "userLock",
        },
        {
          title: "Sites administration",
          description:
            "Enable sites, configure connections, and review hosting, access controls, and data responsibilities.",
          href: "/codex/enterprise/sites",
          icon: "shieldCheck",
        },
        {
          title: "Set up teams and Team Tasks",
          description:
            "Set team permissions, connect shared accounts, and create recurring tasks.",
          href: "/codex/enterprise/teams#for-workspace-admins",
          icon: "users",
        },
        {
          title: "Set up @ChatGPT in Slack or Teams",
          description:
            "Review administrator responsibilities and deployment prerequisites.",
          href: "/codex/enterprise/chatgpt-slack-and-teams",
          icon: "chat",
        },
        {
          title: "Set up a workspace connection",
          description:
            "Prepare company-managed accounts and configure a workspace connection.",
          href: "/codex/enterprise/shared-connections#set-up-a-connection",
          icon: "connect",
        },
        {
          title: "Local computer access for Work Cloud and dots",
          description:
            "Review shared policies and compatibility, then enable local computer access separately for Work and dots.",
          href: "/codex/enterprise/cloud-local-access#how-to-set-up-local-computer-access",
          icon: "settings",
        },
      ],
    },
    {
      title: "Identity and access",
      description: "Manage sign-in, provisioning, roles, and credentials.",
      pages: [
        {
          title: "Authentication overview",
          description:
            "Compare sign-in methods, credential storage, and enforcement controls.",
          href: "/codex/auth",
          icon: "key",
        },
        {
          title: "Groups and provisioning",
          description:
            "Compare membership sources and understand group permissions.",
          href: "/codex/enterprise/groups-and-provisioning",
          icon: "users",
        },
        {
          title: "Dynamic groups",
          description:
            "Manage group membership with rules based on SCIM user attributes.",
          href: "/codex/enterprise/dynamic-groups",
          icon: "users",
        },
        {
          title: "User lifecycle management",
          description:
            "Provision employees, update group access, and revoke departing users' credentials.",
          href: "/codex/enterprise/user-lifecycle",
          icon: "userLock",
        },
        {
          title: "Roles and workspace permissions",
          description:
            "Find workspace, runtime, API, plugin, and source-system controls.",
          href: "/codex/enterprise/roles-and-workspace-permissions",
          icon: "userLock",
        },
        {
          title: "Personal access tokens",
          description: "Create and manage tokens for programmatic access.",
          href: "/codex/enterprise/access-tokens",
          icon: "lock",
        },
        {
          title: "Service accounts",
          description:
            "Create and manage workspace identities for automated workflows.",
          href: "/codex/enterprise/service-accounts",
          icon: "robot",
        },
      ],
    },
    {
      title: "Configuration",
      description:
        "Manage app installation, updates, runtime settings, remote connections, and workspace model availability.",
      pages: [
        {
          title: "Windows app and CLI deployment",
          description:
            "Deploy the Windows app and Codex CLI on managed Windows devices.",
          href: "/codex/enterprise/windows-deployment",
          icon: "settings",
        },
        {
          title: "Run Codex with an NFS home directory",
          description:
            "Migrate a shared Linux home, verify cross-host resume, or keep independent jobs on local scratch.",
          href: "/codex/environments/network-file-systems",
          icon: "settings",
        },
        {
          title: "Manage app updates",
          description:
            "Control desktop app updates and deploy approved versions through your device management platform.",
          href: "/codex/enterprise/manage-app-updates",
          icon: "settings",
        },
        {
          title: "Managed configuration",
          description:
            "Review the global baseline in Agent Security, policy precedence for this feature, and supported runtime requirements.",
          href: "/codex/enterprise/managed-configuration",
          icon: "dataControls",
        },
        {
          title: "Self-host Codex configuration for your team",
          description:
            "Serve Codex defaults and required settings from your own HTTPS endpoint.",
          href: "/codex/enterprise/configuration-server",
          icon: "settings",
        },
        {
          title: "Codex security cookbook",
          description:
            "Configure and verify enterprise security controls, then combine them for common security goals.",
          href: "/codex/enterprise/security-cookbook",
          icon: "dataControls",
        },
        {
          title: "Remote connections",
          description: "Start and control work on connected computers.",
          href: "/codex/remote-connections",
          icon: "connect",
        },
        {
          title: "Workspace model availability",
          description:
            "Separate model access for ChatGPT, Codex in the ChatGPT desktop app, Codex CLI, the IDE extension, Codex cloud, and the Platform API.",
          href: "/codex/enterprise/workspace-model-availability",
          icon: "settings",
        },
      ],
    },
    {
      title: "Advanced deployment",
      description:
        "Connect directly to Amazon Bedrock, configure Bedrock in GovCloud, or deploy an organizational gateway that routes requests to your inference provider.",
      pages: [
        {
          title: "Amazon Bedrock",
          description:
            "Configure supported local clients to use models available through Bedrock.",
          href: "/codex/amazon-bedrock",
          icon: "storage",
        },
        {
          title: "GovCloud deployment",
          description:
            "Configure local Codex workflows with Amazon Bedrock in AWS GovCloud.",
          href: "/codex/enterprise/govcloud-configuration",
          icon: "storage",
        },
        {
          title: "Connect to a gateway",
          description:
            "Connect to your organization's model gateway with or without ChatGPT sign-in.",
          href: "/codex/enterprise/connect-to-a-gateway",
          icon: "connect",
        },
        {
          title: "Roll out a gateway",
          description:
            "Configure model routes, issue credentials, and deploy Codex through your organization’s gateway.",
          href: "/codex/enterprise/roll-out-a-gateway",
          icon: "settings",
        },
      ],
    },
    {
      title: "ChatGPT EDU",
      description:
        "Compare education plans and configure access for your institution.",
      pages: [
        {
          title: "Education plans",
          description:
            "Compare plans, help members get access, and manage multiple workspaces.",
          href: "/codex/enterprise/education-plans",
          icon: "users",
        },
        {
          title: "Higher education setup",
          description:
            "Choose campus roles, compare recommended permissions, and verify access.",
          href: "/codex/enterprise/higher-education-roles-and-permissions",
          icon: "userLock",
        },
      ],
    },
    {
      title: "ChatGPT Work",
      description:
        "Review the ChatGPT Work overview and administration reference.",
      pages: [
        {
          title: "Overview",
          description:
            "Understand local and cloud execution, Local computer access with Work Cloud, network controls, and data boundaries.",
          href: "/codex/enterprise/chatgpt-work-overview",
          icon: "shieldCheck",
        },
        {
          title: "Cloud security",
          description:
            "Review hosted execution, connected accounts, access controls, retention, and audit visibility.",
          href: "/codex/enterprise/chatgpt-work-cloud-security",
          icon: "shieldCheck",
        },
        {
          title: "Local security",
          description:
            "Review local execution, device and browser access, managed policies, data handling, and audit limitations.",
          href: "/codex/enterprise/chatgpt-work-local-security",
          icon: "shieldCheck",
        },
        {
          title: "Usage and cost",
          description:
            "Understand shared credits, billing impact, spending controls, and adoption planning.",
          href: "/codex/enterprise/chatgpt-work-usage-and-cost",
          icon: "dataControls",
        },
        {
          title: "Admin FAQ",
          description:
            "Review access, data, governance, usage, and incident controls for ChatGPT Work.",
          href: "/codex/enterprise/work-admin-faq",
          icon: "userLock",
        },
      ],
    },
    {
      title: "Collaboration and sharing",
      description: "Manage GPT sharing and ownership.",
      pages: [
        {
          title: "GPTs and sharing",
          description:
            "Manage GPT sharing, ownership, connected apps, and third-party actions across your workspace.",
          href: "/codex/enterprise/gpts-and-sharing",
          icon: "userLock",
        },
      ],
    },
    {
      title: "Plugins and connections",
      description:
        "Control plugin installation, bundled skills, connector-backed capabilities, and connected-service access.",
      pages: [
        {
          title: "Plugin controls",
          description:
            "Manage plugin availability, connector access and actions, and source-system permissions.",
          href: "/codex/enterprise/apps-and-connectors",
          icon: "connect",
        },
        {
          title: "Import and sync plugins from GitHub",
          description: "Import and sync workspace plugins from GitHub.",
          href: "/codex/enterprise/plugin-management",
          icon: "connect",
        },
        {
          title: "Skill controls",
          description:
            "Compare ChatGPT workspace, local filesystem, and plugin skill controls.",
          href: "/codex/enterprise/skills",
          icon: "tools",
        },
        {
          title: "Migrate custom GPTs to plugins",
          description:
            "Plan your workspace transition, migrate individual GPTs or eligible batches, and test and share replacement plugins.",
          href: "/codex/migrate-custom-gpts",
          icon: "tools",
        },
      ],
    },
    {
      title: "Usage and analytics",
      description:
        "Review workspace usage and adoption, and automate reporting.",
      pages: [
        {
          title: "Workspace analytics",
          description:
            "Review workspace-level ChatGPT adoption and Codex usage.",
          href: "/codex/enterprise/workspace-analytics",
          icon: "dataControls",
        },
        {
          title: "Usage Insights",
          description:
            "Explore usage across ChatGPT Work and Codex and assess workflow results with your team.",
          href: "/codex/enterprise/usage-insights",
          icon: "dataControls",
        },
        {
          title: "Analytics API",
          description:
            "Automate developer activity and code review reporting with the Codex Analytics API.",
          href: "/codex/enterprise/analytics-api",
          icon: "code",
        },
      ],
    },
    {
      title: "Security and compliance",
      description:
        "Review workspace security policies, governance, and audit controls.",
      pages: [
        {
          title: "Governance",
          description:
            "Choose the right analytics, spend, and audit surface for each question.",
          href: "/codex/enterprise/governance",
          icon: "shieldCheck",
        },
        {
          title: "Agent security",
          description:
            "Manage the Global policy baseline and supported Local and Codex Cloud environment settings.",
          href: "/codex/enterprise/agent-security",
          icon: "dataControls",
        },
        {
          title: "Safety and security in dots",
          description:
            "Review dots security controls, data handling, and audit and offboarding considerations.",
          href: "/codex/enterprise/dots-security",
          icon: "shieldCheck",
        },
        {
          title: "Prisma AIRS",
          description:
            "Apply workspace-wide security policies to Codex prompts.",
          href: "/codex/enterprise/prisma-airs",
          icon: "shieldCheck",
        },
        {
          title: "HIPAA configuration",
          description:
            "Configure local runtime safeguards for workflows that may handle protected health information.",
          href: "/codex/hipaa-configuration",
          icon: "shieldCheck",
        },
        {
          title: "Compliance API and audit events",
          description:
            "Export activity records for audit and investigation workflows.",
          href: "/codex/enterprise/compliance-api",
          icon: "userLock",
        },
      ],
    },
  ]}
/>