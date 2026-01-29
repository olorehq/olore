# Contributing to olore

Choose your path, young Padawan:

| | Youngling | Jedi Knight | Jedi Master |
|--|-----------|-------------|-------------|
| **Mission** | Add a doc package | Build & ship package | Improve the CLI |
| **You provide** | Config (10 lines JSON) | Config + built package | Code + tests |
| **We do** | Build & publish | Review & merge | Review & merge |
| **Tools needed** | Just GitHub | Claude Code | TypeScript + Node |
| **Difficulty** | ⭐ | ⭐⭐ | ⭐⭐⭐ |

Not ready to submit a PR? [Request a package](https://github.com/olorehq/olore/issues/new) and we'll build it for you.

> *"Do. Or do not. There is no try."* — Yodalf

---

## Youngling Path

*"Your first steps into a larger world."* — Codei-Wan

Submit a config file. We handle the build.

**1. Fork and clone**

```bash
git clone https://github.com/YOUR_USERNAME/olore.git
cd olore
git checkout -b add-library-name
```

**2. Create your config**

```bash
cp vault/configs/zod.json vault/configs/your-library.json
```

Edit with your library's details:

```json
{
  "$schema": "../schemas/config.schema.json",
  "name": "your-library",
  "_source": {
    "type": "github",
    "repo": "owner/repo",
    "path": "docs"
  },
  "versions": {
    "latest": { "ref": "main" }
  }
}
```

**3. Push and open PR**

```bash
git add vault/configs/your-library.json
git commit -m "feat: add your-library docs config"
git push origin add-library-name
```

**4. CI validates automatically**

```
✅ Schema valid
✅ Repo owner/repo exists
✅ Path docs exists at main
📊 Found 47 markdown files (Tier 2)
```

**5. We take it from here**

Once merged, maintainers build the package. Your training is complete, Youngling.

---

## Jedi Knight Path

*"The Source is strong with this one."* — Darth Voder

Have [Claude Code](https://docs.anthropic.com/en/docs/claude-code)? Build it yourself.

**1. Fork, clone, and create config** (same as Youngling)

**2. Build the package**

```
/build-docs your-library
```

This generates `vault/packages/your-library/<version>/`:
- `olore-lock.json` — Build metadata
- `SKILL.md` — Skill definition
- `TOC.md` — Table of contents
- `contents/` — Documentation files

**3. Test locally**

```bash
olore link ./vault/packages/your-library/latest
```

Verify the skill works in Claude Code.

**4. Submit the full package**

```bash
git add vault/configs/your-library.json
git add vault/packages/your-library/
git commit -m "feat: add your-library docs package"
git push origin add-library-name
```

**Why go Jedi?**
- Faster to merge (no build step needed)
- You control the filtering and SKILL.md quality
- Your name in the Jedi Archives

---

## Jedi Master Path

*"Truly wonderful, the mind of a contributor is."* — Yodalf

Ready to improve the CLI itself? This is the way.

```bash
cd cli
npm install
npm run dev    # Watch mode
npm run build  # Build
npm test       # Test
```

See **[CLI Development Guide](docs/cli-development.md)** for the full protocol.

**The Jedi Code:**
- TypeScript, always
- Tests for new features
- Helpful error messages
- No breaking changes without discussion

---

## Before You Submit

### PR Checklist

CI validates most of these automatically:

- [ ] Config has `$schema` field — *CI checks*
- [ ] `repo` exists on GitHub — *CI checks*
- [ ] `path` exists in repo — *CI checks*
- [ ] Docs are open source / permissively licensed

### What Makes a Good Package

| Include | Exclude |
|---------|---------|
| API references | Changelogs |
| Tutorials & guides | Marketing pages |
| Configuration docs | Contributor guides |
| Code examples | Blog posts |

### Licensing

By submitting, you confirm the source docs are permissively licensed and redistributable.

---

## Config Reference

### GitHub Source (most common)

```json
{
  "$schema": "../schemas/config.schema.json",
  "name": "library-name",
  "_source": {
    "type": "github",
    "repo": "owner/repo",
    "path": "docs",
    "extensions": [".md", ".mdx"]
  },
  "versions": {
    "1.0.0": { "ref": "v1.0.0" },
    "latest": { "ref": "main" }
  }
}
```

### The `ref` field

| Type | Example | When to use |
|------|---------|-------------|
| Tag | `v1.0.0` | Versioned releases |
| Scoped tag | `@tanstack/form@1.0.0` | Monorepo packages |
| Branch | `main` | Always-latest docs |
| SHA | `abc123...` | Specific commit |

**Tip:** Find the ref on the repo's Releases or Tags page.

### URL Source (advanced)

For docs not in a GitHub repo:

```json
{
  "$schema": "../schemas/config.schema.json",
  "name": "library-name",
  "_source": { "type": "url" },
  "files": {
    "getting-started": {
      "installation": "https://example.com/docs/install.md"
    }
  }
}
```

> **Note:** Only works with static HTML. SPAs won't render.

---

## For Maintainers

<details>
<summary>Build commands and internals</summary>

### Build Commands

```bash
/build-docs              # Build all missing packages
/build-docs zod          # Build specific library
/build-docs zod --force  # Force rebuild
```

### Build Detection

A version is "built" if `vault/packages/{name}/{version}/olore-lock.json` exists.

### Directory Structure

```
vault/
├── configs/            # Human-authored
│   └── zod.json
└── packages/           # Machine-generated
    └── zod/
        └── latest/
            ├── olore-lock.json
            ├── SKILL.md
            ├── TOC.md
            └── contents/
```

### Config vs Lock

| File | Author | Purpose |
|------|--------|---------|
| `vault/configs/*.json` | Human | What to download |
| `olore-lock.json` | Machine | What was built |

Config files are **never modified** by build scripts.

</details>

---

*May the Source be with you.*
