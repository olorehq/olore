# Turborepo Table of Contents

## Directory Map

```
contents/
├── docs/                               # Main documentation (96 files)
│   ├── index.mdx                       # Overview
│   ├── support-policy.mdx              # Supported package managers and platforms
│   ├── telemetry.mdx                   # Telemetry information
│   ├── getting-started/                # Installation and onboarding (5 files)
│   ├── core-concepts/                  # Fundamental concepts (5 files)
│   ├── crafting-your-repository/       # How to structure and configure (11 files)
│   ├── guides/                         # How-to guides (37 files)
│   │   ├── ci-vendors/                 # CI platform integrations (7 files)
│   │   ├── frameworks/                 # Framework integrations (7 files)
│   │   └── tools/                      # Tool integrations (14 files)
│   ├── reference/                      # CLI and config reference (27 files)
│   └── messages/                       # Error message explanations (5 files)
└── openapi/                            # Remote Cache API spec (8 files)
    └── artifacts/                      # Cache artifact endpoints (7 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/docs/getting-started/index.mdx` |
| Installation | `contents/docs/getting-started/installation.mdx` |
| Task configuration | `contents/docs/crafting-your-repository/configuring-tasks.mdx` |
| Caching | `contents/docs/crafting-your-repository/caching.mdx` |
| Remote caching | `contents/docs/core-concepts/remote-caching.mdx` |
| CLI reference | `contents/docs/reference/run.mdx` |
| turbo.json config | `contents/docs/reference/configuration.mdx` |
| Remote Cache API | `contents/openapi/index.mdx` |

## Detailed Structure

### docs/ (root, 3 files)

| File | Description |
|------|-------------|
| `docs/index.mdx` | Turborepo overview and introduction |
| `docs/support-policy.mdx` | Supported package managers, Node.js versions, platforms |
| `docs/telemetry.mdx` | Telemetry data collection details |

### docs/getting-started/ (5 files)

| File | Description |
|------|-------------|
| `docs/getting-started/index.mdx` | Getting started overview |
| `docs/getting-started/installation.mdx` | Installing Turborepo |
| `docs/getting-started/add-to-existing-repository.mdx` | Add Turborepo to an existing monorepo |
| `docs/getting-started/editor-integration.mdx` | Editor integration and IDE support |
| `docs/getting-started/examples.mdx` | Example projects and starter templates |

### docs/core-concepts/ (5 files)

| File | Description |
|------|-------------|
| `docs/core-concepts/index.mdx` | Core concepts overview |
| `docs/core-concepts/internal-packages.mdx` | Internal packages in a monorepo |
| `docs/core-concepts/package-and-task-graph.mdx` | Package graph and task graph |
| `docs/core-concepts/package-types.mdx` | Types of packages (apps vs libraries) |
| `docs/core-concepts/remote-caching.mdx` | Remote caching concepts and setup |

### docs/crafting-your-repository/ (11 files)

| File | Description |
|------|-------------|
| `docs/crafting-your-repository/index.mdx` | Repository structure overview |
| `docs/crafting-your-repository/structuring-a-repository.mdx` | How to structure a Turborepo monorepo |
| `docs/crafting-your-repository/understanding-your-repository.mdx` | Understanding package graph and workspace |
| `docs/crafting-your-repository/managing-dependencies.mdx` | Managing dependencies across packages |
| `docs/crafting-your-repository/creating-an-internal-package.mdx` | Creating and using internal packages |
| `docs/crafting-your-repository/configuring-tasks.mdx` | Configuring tasks in turbo.json |
| `docs/crafting-your-repository/running-tasks.mdx` | Running tasks with turbo run |
| `docs/crafting-your-repository/caching.mdx` | Task caching and cache configuration |
| `docs/crafting-your-repository/using-environment-variables.mdx` | Environment variable handling |
| `docs/crafting-your-repository/developing-applications.mdx` | Development workflows |
| `docs/crafting-your-repository/constructing-ci.mdx` | Setting up CI pipelines |
| `docs/crafting-your-repository/upgrading.mdx` | Upgrading Turborepo versions |

### docs/guides/ (top-level, 7 files)

| File | Description |
|------|-------------|
| `docs/guides/index.mdx` | Guides overview |
| `docs/guides/ai.mdx` | Using Turborepo with AI tools |
| `docs/guides/generating-code.mdx` | Code generation with turbo gen |
| `docs/guides/handling-platforms.mdx` | Cross-platform builds |
| `docs/guides/microfrontends.mdx` | Micro-frontend architectures |
| `docs/guides/migrating-from-nx.mdx` | Migrating from Nx to Turborepo |
| `docs/guides/multi-language.mdx` | Multi-language monorepos |
| `docs/guides/publishing-libraries.mdx` | Publishing packages from a monorepo |
| `docs/guides/single-package-workspaces.mdx` | Using Turborepo in single-package repos |
| `docs/guides/skipping-tasks.mdx` | Skipping tasks conditionally |

### docs/guides/ci-vendors/ (7 files)

| File | Description |
|------|-------------|
| `docs/guides/ci-vendors/index.mdx` | CI vendors overview |
| `docs/guides/ci-vendors/github-actions.mdx` | GitHub Actions integration |
| `docs/guides/ci-vendors/vercel.mdx` | Vercel integration |
| `docs/guides/ci-vendors/circleci.mdx` | CircleCI integration |
| `docs/guides/ci-vendors/buildkite.mdx` | Buildkite integration |
| `docs/guides/ci-vendors/gitlab-ci.mdx` | GitLab CI integration |
| `docs/guides/ci-vendors/travis-ci.mdx` | Travis CI integration |

### docs/guides/frameworks/ (7 files)

| File | Description |
|------|-------------|
| `docs/guides/frameworks/index.mdx` | Frameworks overview |
| `docs/guides/frameworks/framework-bindings.mdx` | Framework-specific task bindings |
| `docs/guides/frameworks/nextjs.mdx` | Next.js integration |
| `docs/guides/frameworks/nuxt.mdx` | Nuxt integration |
| `docs/guides/frameworks/rsbuild.mdx` | Rsbuild integration |
| `docs/guides/frameworks/sveltekit.mdx` | SvelteKit integration |
| `docs/guides/frameworks/vite.mdx` | Vite integration |

### docs/guides/tools/ (14 files)

| File | Description |
|------|-------------|
| `docs/guides/tools/index.mdx` | Tools overview |
| `docs/guides/tools/typescript.mdx` | TypeScript configuration |
| `docs/guides/tools/eslint.mdx` | ESLint configuration |
| `docs/guides/tools/biome.mdx` | Biome linting/formatting |
| `docs/guides/tools/oxc.mdx` | Oxc toolchain integration |
| `docs/guides/tools/jest.mdx` | Jest testing |
| `docs/guides/tools/vitest.mdx` | Vitest testing |
| `docs/guides/tools/playwright.mdx` | Playwright testing |
| `docs/guides/tools/storybook.mdx` | Storybook integration |
| `docs/guides/tools/tailwind.mdx` | Tailwind CSS integration |
| `docs/guides/tools/shadcn-ui.mdx` | shadcn/ui integration |
| `docs/guides/tools/prisma.mdx` | Prisma integration |
| `docs/guides/tools/docker.mdx` | Docker with Turborepo |

### docs/reference/ (27 files)

| File | Description |
|------|-------------|
| `docs/reference/index.mdx` | Reference overview |
| `docs/reference/configuration.mdx` | turbo.json configuration reference |
| `docs/reference/run.mdx` | `turbo run` command reference |
| `docs/reference/options-overview.mdx` | CLI options overview |
| `docs/reference/package-configurations.mdx` | Per-package turbo.json config |
| `docs/reference/system-environment-variables.mdx` | System environment variables |
| `docs/reference/globs.mdx` | Glob pattern reference |
| `docs/reference/bin.mdx` | `turbo` binary reference |
| `docs/reference/boundaries.mdx` | Workspace boundaries reference |
| `docs/reference/create-turbo.mdx` | `create-turbo` CLI reference |
| `docs/reference/devtools.mdx` | Turborepo DevTools reference |
| `docs/reference/docs.mdx` | `turbo docs` command |
| `docs/reference/eslint-config-turbo.mdx` | eslint-config-turbo reference |
| `docs/reference/eslint-plugin-turbo.mdx` | eslint-plugin-turbo reference |
| `docs/reference/generate.mdx` | `turbo generate` command |
| `docs/reference/info.mdx` | `turbo info` command |
| `docs/reference/link.mdx` | `turbo link` command |
| `docs/reference/login.mdx` | `turbo login` command |
| `docs/reference/logout.mdx` | `turbo logout` command |
| `docs/reference/ls.mdx` | `turbo ls` command |
| `docs/reference/prune.mdx` | `turbo prune` command |
| `docs/reference/query.mdx` | `turbo query` command |
| `docs/reference/scan.mdx` | `turbo scan` command |
| `docs/reference/telemetry.mdx` | `turbo telemetry` command |
| `docs/reference/turbo-codemod.mdx` | `turbo codemod` command |
| `docs/reference/turbo-gen.mdx` | `turbo gen` command |
| `docs/reference/turbo-ignore.mdx` | `turbo-ignore` utility |
| `docs/reference/unlink.mdx` | `turbo unlink` command |
| `docs/reference/watch.mdx` | `turbo watch` command |

### docs/messages/ (5 files)

| File | Description |
|------|-------------|
| `docs/messages/invalid-env-prefix.mdx` | Invalid environment variable prefix error |
| `docs/messages/missing-root-task-in-turbo-json.mdx` | Missing root task error |
| `docs/messages/package-task-in-single-package-workspace.mdx` | Package task in single-package workspace error |
| `docs/messages/recursive-turbo-invocations.mdx` | Recursive turbo invocation error |
| `docs/messages/unnecessary-package-task-syntax.mdx` | Unnecessary package task syntax warning |

### openapi/ (8 files)

| File | Description |
|------|-------------|
| `openapi/index.mdx` | Remote Cache API overview and authentication |
| `openapi/artifacts/index.mdx` | Cache artifacts API overview |
| `openapi/artifacts/artifact-exists.mdx` | Check if artifact exists endpoint |
| `openapi/artifacts/artifact-query.mdx` | Query artifact metadata endpoint |
| `openapi/artifacts/download-artifact.mdx` | Download artifact endpoint |
| `openapi/artifacts/record-events.mdx` | Record cache events endpoint |
| `openapi/artifacts/status.mdx` | Cache status endpoint |
| `openapi/artifacts/upload-artifact.mdx` | Upload artifact endpoint |
