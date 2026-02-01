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

Documentation package manager for AI coding agents. Local-first. Offline-ready.

## Quick Start

```bash
npm install -g @olorehq/olore
olore install prisma
olore inject
```

That's it. Your agent now has Prisma docs. No hallucinations.

## Why olore?

Your AI coding agent makes decisions about which tools to invoke. Sometimes it decides wrong — it skips the tool, hallucinates an API, or calls it with bad arguments.

**Passive context beats skills.** Vercel's agentic coding eval showed agents with passive documentation context scored **100%** vs **53%** with tool-based retrieval. The difference: passive context is always there. The agent doesn't have to decide to look it up.

`olore inject` embeds a compact documentation index directly into your `AGENTS.md` / `CLAUDE.md`. The agent reads it automatically on every session — no invocation decision needed. No network. No retrieval pipeline.

- **Version-pinned** — same docs, every run, every machine
- **Offline** — works on planes, in CI, behind firewalls
- **Local-first** — docs live in your project, not on someone's server
- **Any agent** — Claude Code, Codex, OpenCode, anything that reads markdown

## Available Packages

`prisma` · `nextjs` · `zod` · `drizzle` · `langchain` · `tanstack-query` · `claude-code` · `codex` · `opencode` · `cargo` · `agentskills`

More on the [registry](https://github.com/olorehq/olore). Contributions welcome.

## Supported Agents

- **Claude Code** — injects into `CLAUDE.md`
- **Codex** — injects into `AGENTS.md`
- **OpenCode** — injects into `AGENTS.md`

## Commands

| Command | Description |
|---|---|
| `olore install <pkg>` | Install a documentation package |
| `olore inject` | Inject doc indexes into AGENTS.md / CLAUDE.md |
| `olore inject --remove` | Remove injected content |
| `olore list` | List installed packages |
| `olore remove <pkg>` | Remove a package |
| `olore search` | Browse available packages |
| `olore doctor` | Diagnose issues |

## Links

- [GitHub](https://github.com/olorehq/olore)
- [Website](https://www.olore.dev)
- [Contributing](https://github.com/olorehq/olore/blob/main/CONTRIBUTING.md)

## License

MIT

---

> *"May the Skill be with you."*
