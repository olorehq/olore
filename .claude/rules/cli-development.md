---
paths:
  - "cli/**"
---

# CLI Development

This rule applies when working on the `cli/` directory.

## Project Structure

```
cli/
├── src/           # TypeScript source
├── package.json   # Dependencies and scripts
└── tsconfig.json  # TypeScript configuration
```

## Development Commands

```bash
nvm use            # Use Node 24+ (root .nvmrc)
cd cli
npm install        # Install dependencies
npm run build      # Compile TypeScript
npm run dev        # Watch mode
npm test           # Run tests
npm run format     # Format code with Prettier
npm run typecheck  # Run TypeScript type checking
```

## Code Style

This project uses **Prettier** for code formatting. Always run `npm run format` before committing.

Prettier plugins:
- `@ianvs/prettier-plugin-sort-imports` - Auto-sorts imports (builtin → third-party → local)
- `prettier-plugin-packagejson` - Sorts package.json fields

Key packages:
- `commander` - CLI argument parsing
- `picocolors` - Terminal colors
- `ora` - Spinners for async operations
- `fs-extra` - Enhanced file system operations

## CLI Commands

The `olore` CLI provides these commands:

| Command | Description |
|---------|-------------|
| `olore install <package>` | Install a package (from registry, GitHub, or local path) |
| `olore link <path>` | Link a package for development (symlinks directly to source) |
| `olore list` | List installed packages (shows type: installed/linked/copied) |
| `olore remove <name>` | Remove an installed package |
| `olore init` | Initialize a new documentation package |

## Install Sources

The `install` command supports two sources:

**1. Registry (default):**
```bash
olore install prisma          # Latest from registry
olore install prisma@5.0.0    # Specific version
```

**2. Local path:**
```bash
olore install ./vault/packages/zod/latest
olore install /absolute/path/to/package
```

## Install vs Link

**`olore install`** - For stable, managed packages:
```
source → ~/.olore/packages/{name}/{version}/  (copy)
                    ↓ symlinks
         ~/.claude/skills/olore-{name}-{version}/
         ~/.codex/skills/olore-{name}-{version}/
```

**`olore link`** - For development (changes immediately visible):
```
./vault/packages/zod/latest/  (source, actively editing)
                    ↓ symlinks (bypass ~/.olore)
         ~/.claude/skills/olore-zod-latest/
         ~/.codex/skills/olore-zod-latest/
```

## Key Principles

1. **No AI required** - CLI operations should be fast and deterministic
2. **Self-contained packages** - Each package includes everything needed
3. **Prefix handling** - CLI adds `olore-` prefix automatically during install
4. **Central storage** - Packages stored in `~/.olore/`, symlinked to agents

## Protocol Reference

**See @docs/cli-development.md** for the full development protocol including:
- Version management (pre-1.0 and post-1.0 rules)
- PR requirements and review checklist
- Testing requirements
- Release process
- Backwards compatibility guidelines

### Quick Reference

**Before committing:**
```bash
npm run format      # Format code
npm run typecheck   # Check types
npm run build       # Verify build
npm test            # Run tests
```

**Breaking changes (post-1.0):** Removing commands, changing options, altering output format, changing exit codes.

**Version source:** `package.json` only (CLI reads at runtime)
