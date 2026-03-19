# turborepo Table of Contents

## Directory Map

```
contents/
├── docs/
│   ├── getting-started/        # Installation and setup (5 files)
│   ├── crafting-your-repository/ # Monorepo guides (10 files)
│   ├── core-concepts/          # Core concepts (5 files)
│   ├── guides/                 # How-to guides (26 files)
│   │   ├── ci-vendors/         # CI integration guides (7 files)
│   │   ├── frameworks/         # Framework guides (6 files)
│   │   └── tools/              # Tool integration guides (13 files)
│   ├── messages/               # Error message docs (5 files)
│   └── reference/              # CLI and config reference (29 files)
└── openapi/
    └── artifacts/              # Remote cache API (8 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/docs/getting-started/installation.mdx` |
| Add to existing repo | `contents/docs/getting-started/add-to-existing-repository.mdx` |
| Configure tasks | `contents/docs/reference/configuration.mdx` |
| Run tasks | `contents/docs/reference/run.mdx` |
| Caching | `contents/docs/crafting-your-repository/caching.mdx` |
| Remote caching | `contents/docs/core-concepts/remote-caching.mdx` |
| Environment variables | `contents/docs/crafting-your-repository/using-environment-variables.mdx` |

## Detailed Structure

### docs/getting-started/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Getting started overview |
| `installation.mdx` | Install Turborepo globally or locally |
| `add-to-existing-repository.mdx` | Add Turborepo to an existing monorepo |
| `editor-integration.mdx` | IDE/editor setup and integration |
| `examples.mdx` | Starter examples and templates |

### docs/crafting-your-repository/ (10 files)

| File | Description |
|------|-------------|
| `index.mdx` | Crafting your repository overview |
| `structuring-a-repository.mdx` | How to structure workspace packages |
| `creating-an-internal-package.mdx` | Create shared internal packages |
| `managing-dependencies.mdx` | Manage dependencies across packages |
| `configuring-tasks.mdx` | Define tasks and their dependencies |
| `running-tasks.mdx` | Run tasks across the monorepo |
| `caching.mdx` | How task caching works |
| `using-environment-variables.mdx` | Handle environment variables in tasks |
| `developing-applications.mdx` | Dev server workflows |
| `constructing-ci.mdx` | Set up CI with Turborepo |
| `understanding-your-repository.mdx` | Understand workspace graph |
| `upgrading.mdx` | Upgrade Turborepo versions |

### docs/core-concepts/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Core concepts overview |
| `package-types.mdx` | Application vs library packages |
| `package-and-task-graph.mdx` | Package and task graph internals |
| `internal-packages.mdx` | Internal package patterns |
| `remote-caching.mdx` | Share cache across machines |

### docs/guides/ (7 top-level files)

| File | Description |
|------|-------------|
| `index.mdx` | Guides overview |
| `generating-code.mdx` | Code generation with turbo gen |
| `skipping-tasks.mdx` | Skip tasks with conditions |
| `single-package-workspaces.mdx` | Single-package workspace setup |
| `publishing-libraries.mdx` | Publish packages to npm |
| `microfrontends.mdx` | Microfrontend architecture |
| `handling-platforms.mdx` | Platform-specific configurations |
| `multi-language.mdx` | Multi-language monorepos |
| `migrating-from-nx.mdx` | Migrate from Nx to Turborepo |
| `ai.mdx` | Use Turborepo with AI tools |

### docs/guides/ci-vendors/ (7 files)

| File | Description |
|------|-------------|
| `index.mdx` | CI vendors overview |
| `github-actions.mdx` | GitHub Actions integration |
| `vercel.mdx` | Vercel CI integration |
| `circleci.mdx` | CircleCI integration |
| `gitlab-ci.mdx` | GitLab CI integration |
| `buildkite.mdx` | Buildkite integration |
| `travis-ci.mdx` | Travis CI integration |

### docs/guides/frameworks/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | Frameworks overview |
| `nextjs.mdx` | Next.js integration |
| `vite.mdx` | Vite integration |
| `sveltekit.mdx` | SvelteKit integration |
| `nuxt.mdx` | Nuxt integration |
| `framework-bindings.mdx` | Framework binding patterns |

### docs/guides/tools/ (13 files)

| File | Description |
|------|-------------|
| `index.mdx` | Tools overview |
| `typescript.mdx` | TypeScript configuration |
| `eslint.mdx` | ESLint setup in monorepo |
| `jest.mdx` | Jest configuration |
| `vitest.mdx` | Vitest configuration |
| `tailwind.mdx` | Tailwind CSS setup |
| `docker.mdx` | Docker with Turborepo |
| `playwright.mdx` | Playwright testing |
| `storybook.mdx` | Storybook integration |
| `prisma.mdx` | Prisma in monorepo |
| `biome.mdx` | Biome linting/formatting |
| `oxc.mdx` | OXC toolchain |
| `shadcn-ui.mdx` | shadcn/ui integration |

### docs/messages/ (5 files)

| File | Description |
|------|-------------|
| `missing-root-task-in-turbo-json.mdx` | Error: missing root task |
| `package-task-in-single-package-workspace.mdx` | Error: package task in single workspace |
| `unnecessary-package-task-syntax.mdx` | Error: unnecessary package task syntax |
| `invalid-env-prefix.mdx` | Error: invalid env prefix |
| `recursive-turbo-invocations.mdx` | Error: recursive turbo invocations |

### docs/reference/ (29 files)

| File | Description |
|------|-------------|
| `index.mdx` | Reference overview |
| `configuration.mdx` | turbo.json configuration reference |
| `package-configurations.mdx` | Per-package turbo.json config |
| `run.mdx` | turbo run command reference |
| `watch.mdx` | turbo watch command reference |
| `generate.mdx` | turbo generate command reference |
| `prune.mdx` | turbo prune command reference |
| `query.mdx` | turbo query command reference |
| `ls.mdx` | turbo ls command reference |
| `boundaries.mdx` | turbo boundaries command reference |
| `scan.mdx` | turbo scan command reference |
| `info.mdx` | turbo info command reference |
| `link.mdx` | turbo link command reference |
| `unlink.mdx` | turbo unlink command reference |
| `login.mdx` | turbo login command reference |
| `logout.mdx` | turbo logout command reference |
| `devtools.mdx` | Turborepo DevTools reference |
| `turbo-ignore.mdx` | turbo-ignore utility |
| `turbo-codemod.mdx` | turbo-codemod migration tool |
| `turbo-gen.mdx` | turbo gen command reference |
| `create-turbo.mdx` | create-turbo CLI |
| `eslint-config-turbo.mdx` | eslint-config-turbo package |
| `eslint-plugin-turbo.mdx` | eslint-plugin-turbo package |
| `system-environment-variables.mdx` | System env vars reference |
| `options-overview.mdx` | All CLI options overview |
| `globs.mdx` | Glob patterns reference |
| `bin.mdx` | turbo binary reference |
| `docs.mdx` | turbo docs command |
| `telemetry.mdx` | turbo telemetry command |

### openapi/artifacts/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Remote cache API overview |
| `upload-artifact.mdx` | Upload cache artifact endpoint |
| `download-artifact.mdx` | Download cache artifact endpoint |
| `artifact-exists.mdx` | Check artifact existence endpoint |
| `artifact-query.mdx` | Query artifacts endpoint |
| `record-events.mdx` | Record cache events endpoint |
| `status.mdx` | Cache status endpoint |
