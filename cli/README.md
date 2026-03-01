# olore

```
 ██████╗ ██╗      ██████╗ ██████╗ ███████╗
██╔═══██╗██║     ██╔═══██╗██╔══██╗██╔════╝
██║   ██║██║     ██║   ██║██████╔╝█████╗
██║   ██║██║     ██║   ██║██╔══██╗██╔══╝
╚██████╔╝███████╗╚██████╔╝██║  ██║███████╗
 ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
         Stop the hallucinations.
```

Version-pinned docs for AI coding agents. Local-first. Offline-ready.

## Quick Start

```bash
npm install -g @olorehq/olore
olore install prisma
olore inject prisma
```

That's it. Your agent now has Prisma docs. No hallucinations.

## Why olore?

Your AI coding agent makes decisions about which tools to invoke. Sometimes it decides wrong — it skips the tool, hallucinates an API, or calls it with bad arguments.

**Passive context beats skills.** Vercel's agentic coding eval showed agents with passive documentation context scored **100%** vs **53%** with tool-based retrieval. The difference: passive context is always there. The agent doesn't have to decide to look it up.

`olore inject` writes a skill reference table into your `AGENTS.md` / `CLAUDE.md`. Agents see which docs are available and invoke skills when needed — no guessing, no network calls.

- **Version-pinned** — same docs, every run, every machine
- **Offline** — works on planes, in CI, behind firewalls
- **Local-first** — docs live in your project, not on someone's server
- **Any agent** — Claude Code, Codex, OpenCode, anything that reads markdown

## Available Packages

`a2a` · `agentskills` · `astro` · `axiom` · `azure-sdk-js` · `cargo` · `checkly` · `claude-code` · `clerk` · `cloudflare` · `codex` · `convex` · `drizzle` · `github-actions` · `hono` · `langchain` · `lucia` · `neon` · `neverthrow` · `nextjs` · `openclaw` · `opencode` · `opennext` · `partykit` · `partyserver` · `posthog` · `prettier` · `prisma` · `rhf` · `sentry` · `supabase` · `t3-env` · `tanstack-query` · `trpc` · `tsf` · `turso` · `vitest` · `xstate` · `zod`

Browse all with `olore search`. Contributions welcome on [GitHub](https://github.com/olorehq/olore).

## Supported Agents

- **Claude Code** — skills in `~/.claude/skills/`
- **Codex** — skills in `~/.codex/skills/`
- **OpenCode** — skills in `~/.config/opencode/skills/`

## Commands

| Command | Description |
|---|---|
| `olore install <pkg>` | Install a documentation package |
| `olore inject <pkg...>` | Write skill reference table into AGENTS.md / CLAUDE.md |
| `olore inject --remove` | Remove injected content |
| `olore init` | Auto-detect project deps and install matching docs |
| `olore search [query]` | Browse available packages |
| `olore list` | List installed packages |
| `olore remove <pkg>` | Remove a package |
| `olore link <path>` | Link a local package for development |
| `olore prune` | Clean up dangling symlinks and orphaned packages |
| `olore doctor` | Diagnose issues |

## Links

- [GitHub](https://github.com/olorehq/olore)
- [Website](https://www.olore.dev)
- [Contributing](https://github.com/olorehq/olore/blob/main/CONTRIBUTING.md)

## License

MIT

---

> *"May the Skill be with you."*
