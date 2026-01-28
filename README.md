# olore

```
 ██████╗ ██╗      ██████╗ ██████╗ ███████╗
██╔═══██╗██║     ██╔═══██╗██╔══██╗██╔════╝
██║   ██║██║     ██║   ██║██████╔╝█████╗
██║   ██║██║     ██║   ██║██╔══██╗██╔══╝
╚██████╔╝███████╗╚██████╔╝██║  ██║███████╗
 ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
        O(pen) Lore for AI Agents
```

> *"May the Skill be with you."*

Documentation package manager for AI coding agents. Local-first. Offline-ready.

```bash
olore install prisma nextjs zod
# Your AI now knows these libraries. No hallucinations.
```

## Mission

Make high-quality technical documentation easy to install, verify, and share across AI agents. Keep it local-first, versioned, and reproducible.

## Why olore?

Your AI hallucinates. Give it the docs. **Same docs, every agent.**

| | Manual | Context7 | RAG | **OLore** |
|---|:---:|:---:|:---:|:---:|
| Works offline | ✅ | ❌ | ❌ | ✅ |
| Any agent | ✅ | ⚠️ MCP | ⚠️ custom | ✅ |
| Same docs everywhere | ❌ | ❌ | ❌ | ✅ |
| Full docs | ✅ | ⚠️ snippets | ⚠️ chunks | ✅ |
| Versioned docs | ❌ | ❌ | ❌ | ✅ |
| No infra | ✅ | ✅ | ❌ | ✅ |
| Private docs | ✅ | ❌ | ✅ | ✅ |
| One command | ❌ | ✅ | ❌ | ✅ |
| Auto updates | ❌ | ✅ | ⚠️ | ✅ |

**Manual** = Copy-paste docs into skill folders yourself. Works, but tedious to keep consistent.

**Context7** = Great for quick lookups. Requires network, returns snippets not full context.

**RAG** = Powerful but needs infrastructure (vector DB, embeddings, retrieval pipeline).

**olore** = One install, same curated docs for Claude Code, Codex, OpenCode, and more.

## Installation

```bash
npm install -g olore
```

Or run directly with npx:
```bash
npx olore install prisma
```

## Quick Start

```bash
# Install from registry
olore install prisma

# Install from local path
olore install ./my-local-package

# List installed packages
olore list

# Remove a package
olore remove prisma
```

## Create Your Own Docs

Add private documentation for your AI agent:

```bash
# One-time: install the docs packager
olore install docs-packager

# Create a new doc package
mkdir my-api-docs && cd my-api-docs
olore init

# Write your documentation in the docs/ folder
# Then in Claude Code, run:
/olore-docs-packager-1.0.0

# Review the generated TOC.md and SKILL.md for accuracy
# Then install the built package
olore install ./olore-package
```

Your docs are now available as `/olore-my-api-docs-1.0.0` in Claude Code.

**Options:**
```bash
olore init                        # Interactive prompts
olore init -y                     # Use defaults (folder name, 1.0.0)
olore init -n my-lib -v 2.0.0     # Custom name and version
```

**Config file (`olore.config.json`):**
```json
{
  "name": "my-api-docs",
  "version": "1.0.0",
  "description": "My API documentation",
  "contentPath": "./docs",
  "outputPath": "./olore-package",
  "extensions": [".md", ".mdx"],
  "exclude": ["**/drafts/**"]
}
```

The `/olore-docs-packager-1.0.0` skill reads your config, copies docs, and generates SKILL.md and TOC.md automatically.

## Available Packages

| Package | Description |
|---------|-------------|
| `prisma` | Prisma ORM, Schema, migrations |
| `nextjs` | Next.js App Router, Server Components |
| `langchain` | LangChain, LangGraph, agents |
| `zod` | Zod schema validation |
| `docs-packager` | Tool: Package local docs into olore skills |

*More packages in `vault/configs/`. Registry coming soon.*

## How It Works

```
olore install prisma
       ↓
Each package is like a book for your AI:
├── SKILL.md           # Cover - when to read this
├── TOC.md             # Table of contents (AI-generated)
└── contents/          # The documentation files
       ↓
Stored in central location:
~/.olore/packages/prisma/latest/
       ↓
Linked to each agent's skills folder:
~/.claude/skills/olore-prisma-latest/   → ~/.olore/...
~/.codex/skills/olore-prisma-latest/    → ~/.olore/...
~/.config/opencode/skills/...           → ~/.olore/...
       ↓
AI reads local docs → accurate code
```

**Platform notes:**
- **macOS/Linux:** Stores in `~/.olore/`, symlinks to agent directories
- **Windows:** Copies directly to agent directories (no `~/.olore/`, no admin required)

**Development mode:** Use `olore link ./path` to link directly to your source folder (bypasses `~/.olore`). On macOS/Linux, changes are immediately visible. On Windows, re-run `olore link` after changes.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for development status and planned features.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Governance

See [GOVERNANCE.md](GOVERNANCE.md) and the [Community Playbook](docs/community-playbook.md).

## License

[AGPL-3.0](LICENSE)
