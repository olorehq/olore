# turborepo Table of Contents

## Directory Map

```
contents/
docs/  (3 files)
docs/core-concepts/  (5 files)
docs/crafting-your-repository/  (12 files)
docs/getting-started/  (5 files)
docs/guides/  (11 files)
docs/guides/ci-vendors/  (7 files)
docs/guides/frameworks/  (7 files)
docs/guides/tools/  (16 files)
docs/messages/  (5 files)
docs/reference/  (29 files)
openapi/  (1 files)
openapi/artifacts/  (7 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/docs/getting-started/installation.mdx` |
| Existing repo | `contents/docs/getting-started/add-to-existing-repository.mdx` |
| CLI lookup | `contents/docs/reference/run.mdx` |
| Configuration | `contents/docs/reference/configuration.mdx` |
| Caching | `contents/docs/crafting-your-repository/caching.mdx` |
| CI | `contents/docs/guides/ci-vendors/index.mdx` |
| Errors | `contents/docs/messages/` |

## Detailed Structure

### docs/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Welcome to the Turborepo documentation! |
| `support-policy.mdx` | Learn about Turborepo's Support policy. |
| `telemetry.mdx` | Learn more about Turborepo's anonymous telemetry. |

### docs/core-concepts/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Learn about the core concepts behind Turborepo. |
| `internal-packages.mdx` | Learn how to build Internal Packages in your monorepo. |
| `package-and-task-graph.mdx` | Turborepo builds a Task Graph based on your configuration and repository structure. |
| `package-types.mdx` | Learn about the different types of packages in a workspace. |
| `remote-caching.mdx` | Share cache artifacts across machines for even faster builds. |

### docs/crafting-your-repository/ (12 files)

| File | Description |
|------|-------------|
| `caching.mdx` | Learn about caching in Turborepo. |
| `configuring-tasks.mdx` | Learn how to describe the workflows in your repository to get them done as fast as possible. |
| `constructing-ci.mdx` | Learn how Turborepo can help you efficiently complete all the necessary tasks and accelerate your development workflow. |
| `creating-an-internal-package.mdx` | Learn how to create an Internal Package for your monorepo. |
| `developing-applications.mdx` | Learn how to develop applications in your repository. |
| `index.mdx` | Design and build your Turborepo. |
| `managing-dependencies.mdx` | Learn how to manage dependencies in your monorepo's workspace. |
| `running-tasks.mdx` | Learn how to run tasks in your repository through the `turbo` CLI. |
| `structuring-a-repository.mdx` | Start by creating a repository using the conventions of the ecosystem. |
| `understanding-your-repository.mdx` | Learn how to understand your repository structure using Turborepo. |
| `upgrading.mdx` | Learn how to upgrade `turbo` to get the latest improvements to your repository. |
| `using-environment-variables.mdx` | Learn how to handle environments for your applications. |

### docs/getting-started/ (5 files)

| File | Description |
|------|-------------|
| `add-to-existing-repository.mdx` | Using Turborepo with your existing repository |
| `editor-integration.mdx` | Making the most of Turborepo |
| `examples.mdx` | Start with an example Turborepo. |
| `index.mdx` | Get started with Turborepo. |
| `installation.mdx` | Learn how to get started with Turborepo. |

### docs/guides/ (11 files)

| File | Description |
|------|-------------|
| `ai.mdx` | Get the most out of AI coding assistants in your Turborepo. |
| `coordinating-runtime-dependencies.mdx` | Learn how to coordinate development services that depend on each other at runtime. |
| `generating-code.mdx` | Learn how to generate code using Turborepo. |
| `handling-platforms.mdx` | Learn how to handle caching around operating systems, architectures, and other arbitrary conditions for Turborepo tasks. |
| `index.mdx` | Learn how to use your favorite tooling in a Turborepo. |
| `microfrontends.mdx` | Learn how to use Turborepo's built-in microfrontends proxy for local development. |
| `migrating-from-nx.mdx` | Learn how to migrate to Turborepo from Nx. |
| `multi-language.mdx` | Run other language toolchains alongside JavaScript packages. |
| `publishing-libraries.mdx` | Learn how to publish libraries to the npm registry from a monorepo. |
| `single-package-workspaces.mdx` | Learn how to use Turborepo in a single-package workspace. |
| `skipping-tasks.mdx` | Never do the same work twice. |

### docs/guides/ci-vendors/ (7 files)

| File | Description |
|------|-------------|
| `buildkite.mdx` | Learn how to use Buildkite with Turborepo. |
| `circleci.mdx` | Learn how to use CircleCI with Turborepo. |
| `github-actions.mdx` | Learn how to use GitHub Actions with Turborepo. |
| `gitlab-ci.mdx` | Learn how to use GitLab CI with Turborepo. |
| `index.mdx` | Recipes for using Turborepo with Vercel, GitHub Actions, and other continuous integration providers. |
| `travis-ci.mdx` | How to use Travis CI with Turborepo to optimize your CI workflow |
| `vercel.mdx` | Learn how to deploy your Turborepo and run tasks with Vercel CI. |

### docs/guides/frameworks/ (7 files)

| File | Description |
|------|-------------|
| `framework-bindings.mdx` | Learn how to create framework bindings in packages. |
| `index.mdx` | Integrate your favorite framework into Turborepo. |
| `nextjs.mdx` | Learn how to use Next.js in a monorepo. |
| `nuxt.mdx` | Learn more about using Nuxt in your monorepo. |
| `rsbuild.mdx` | Learn more about using Rsbuild in your monorepo. |
| `sveltekit.mdx` | Learn more about using SvelteKit in your monorepo. |
| `vite.mdx` | Learn more about using Vite in your monorepo. |

### docs/guides/tools/ (16 files)

| File | Description |
|------|-------------|
| `biome.mdx` | Learn how to use Biome in your Turborepo projects. |
| `docker.mdx` | Learn how to use Docker in a monorepo. |
| `eslint.mdx` | Learn how to use ESLint in a monorepo. |
| `go.mdx` | Use experimental native Go workspace support with Turborepo. |
| `index.mdx` | Learn how to use your favorite tools in a monorepo. |
| `jest.mdx` | Learn how to use Jest in a Turborepo. |
| `oxc.mdx` | Learn how to use oxlint and oxfmt in your Turborepo projects. |
| `playwright.mdx` | Learn how to use Playwright in a Turborepo. |
| `prisma.mdx` | Learn how to use Prisma in a Turborepo. |
| `python.mdx` | Use experimental native uv workspace support with Turborepo. |
| `rust.mdx` | Use experimental native Cargo workspace support with Turborepo. |
| `shadcn-ui.mdx` | Learn how to use shadcn/ui in a Turborepo. |
| `storybook.mdx` | Learn how to use Storybook in a Turborepo. |
| `tailwind.mdx` | Learn how to use Tailwind CSS in a Turborepo. |
| `typescript.mdx` | Learn how to use TypeScript in a monorepo. |
| `vitest.mdx` | Learn how to use Vitest in a monorepo. |

### docs/messages/ (5 files)

| File | Description |
|------|-------------|
| `invalid-env-prefix.mdx` | Learn more about errors with invalid environment variable prefixes in Turborepo. |
| `missing-root-task-in-turbo-json.mdx` | Learn more about errors for missing root tasks in turbo.json in Turborepo. |
| `package-task-in-single-package-workspace.mdx` | Learn more about errors with package tasks in single-package workspaces. |
| `recursive-turbo-invocations.mdx` | Learn more about errors with recursive scripts and tasks in Turborepo. |
| `unnecessary-package-task-syntax.mdx` | Learn more about errors with unnecessary package task syntax in Turborepo. |

### docs/reference/ (29 files)

| File | Description |
|------|-------------|
| `bin.mdx` | API reference for the `turbo bin` command |
| `boundaries.mdx` | API reference for the `turbo boundaries` command |
| `configuration.mdx` | Learn how to configure Turborepo through `turbo.json`. |
| `create-turbo.mdx` | Quickly set up a new Turborepo repository from scratch. |
| `devtools.mdx` | API reference for the `turbo devtools` command |
| `docs.mdx` | API reference for the `turbo docs` command |
| `eslint-config-turbo.mdx` | Learn more about eslint-config-turbo. |
| `eslint-plugin-turbo.mdx` | Learn more about eslint-plugin-turbo. |
| `generate.mdx` | API reference for the `turbo generate` command |
| `globs.mdx` | Learn about the file glob specification used by `turbo`. |
| `index.mdx` | Learn about Turborepo's APIs using the reference. |
| `info.mdx` | API reference for the `turbo info` command |
| `link.mdx` | API reference for the `turbo link` command |
| `login.mdx` | API reference for the `turbo login` command |
| `logout.mdx` | API reference for the `turbo logout` command |
| `ls.mdx` | API reference for the `turbo ls` command |
| `options-overview.mdx` | Flags, configurations, and System Environment Variables for Turborepo |
| `package-configurations.mdx` | Learn how to use Package Configurations to bring greater task flexibility to your monorepo's package. |
| `prune.mdx` | API reference for the `turbo prune` command |
| `query.mdx` | API reference for the `turbo query` command |
| `run.mdx` | API reference for the `turbo run` command |
| `scan.mdx` | API reference for the deprecated `turbo scan` command |
| `system-environment-variables.mdx` | Learn about system variables used by Turborepo. |
| `telemetry.mdx` | API reference for the `turbo telemetry` command |
| `turbo-codemod.mdx` | Learn more about how Turborepo uses codemods to make version migrations easy. |
| `turbo-gen.mdx` | Quickly generate new code in your Turborepo. |
| `turbo-ignore.mdx` | Learn how to use turbo-ignore to skip tasks in CI. |
| `unlink.mdx` | API reference for the `turbo unlink` command |
| `watch.mdx` | API reference for the `watch` command |

### openapi/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | OpenAPI specification for self-hosted Remote Cache servers. |

### openapi/artifacts/ (7 files)

| File | Description |
|------|-------------|
| `artifact-exists.mdx` | OpenAPI endpoint: Check if artifact exists |
| `artifact-query.mdx` | OpenAPI endpoint: Query artifact information |
| `download-artifact.mdx` | OpenAPI endpoint: Download a cache artifact |
| `index.mdx` | Endpoints for managing cache artifacts. |
| `record-events.mdx` | OpenAPI endpoint: Record cache usage events |
| `status.mdx` | OpenAPI endpoint: Get remote caching status |
| `upload-artifact.mdx` | OpenAPI endpoint: Upload a cache artifact |
