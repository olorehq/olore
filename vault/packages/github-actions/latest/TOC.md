# GitHub Actions Table of Contents

## Directory Map

```
contents/
├── get-started/               # Quickstart, CI/CD concepts, overview (5 files)
├── concepts/                  # Core concepts (28 files)
│   ├── workflows-and-actions/ # Workflows, variables, contexts, expressions, caching
│   ├── runners/               # GitHub-hosted, self-hosted, larger, ARC runners
│   └── security/              # Secrets, GITHUB_TOKEN, OIDC, attestations
├── how-tos/                   # Practical guides (76 files)
│   ├── write-workflows/       # Triggers, conditions, jobs, secrets, variables
│   ├── manage-workflow-runs/  # Cancel, re-run, artifacts, caches, approvals
│   ├── monitor-workflows/     # Logs, debug, status badges, visualization
│   ├── secure-your-work/      # OIDC cloud integrations, artifact attestations
│   ├── deploy/                # Environments, protection rules, cloud platforms
│   ├── manage-runners/        # GitHub-hosted, self-hosted, larger, ARC runners
│   ├── reuse-automations/     # Reusable workflows, workflow templates
│   ├── create-and-publish-actions/ # Build, publish, and maintain actions
│   └── administer/            # Org/enterprise settings, metrics
├── reference/                 # Authoritative reference docs (20 files)
│   ├── workflows-and-actions/ # Syntax, events, expressions, contexts, commands
│   ├── runners/               # Runner specs and capabilities
│   ├── security/              # Security reference
│   └── github-actions-importer/ # Migration tool reference
└── tutorials/                 # Hands-on tutorials (70 files)
    ├── build-and-test-code/   # CI for Go, Node, Python, Java, .NET, Ruby, etc.
    ├── migrate-to-github-actions/ # Automated + manual migrations from CI platforms
    ├── publish-packages/      # Docker, npm, Java packages
    ├── use-containerized-services/ # Docker, PostgreSQL, Redis service containers
    ├── create-actions/        # JavaScript and composite actions
    └── manage-your-work/      # Issue and PR automation
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/quickstart.md` |
| Understand GitHub Actions | `contents/get-started/understand-github-actions.md` |
| Workflow syntax | `contents/reference/workflows-and-actions/workflow-syntax.md` |
| Events that trigger workflows | `contents/reference/workflows-and-actions/events-that-trigger-workflows.md` |
| Expressions | `contents/reference/workflows-and-actions/expressions.md` |
| Contexts | `contents/reference/workflows-and-actions/contexts.md` |
| Variables | `contents/reference/workflows-and-actions/variables.md` |
| Workflow commands | `contents/reference/workflows-and-actions/workflow-commands.md` |
| Secrets | `contents/concepts/security/secrets.md` |
| OIDC / keyless auth | `contents/concepts/security/openid-connect.md` |
| Reusable workflows | `contents/how-tos/reuse-automations/reuse-workflows.md` |
| Troubleshooting | `contents/how-tos/troubleshoot-workflows.md` |

## Detailed Structure

### get-started/ (5 files)

| File | Description |
|------|-------------|
| `quickstart.md` | Quick start tutorial |
| `understand-github-actions.md` | Overview of key concepts |
| `continuous-integration.md` | CI overview and patterns |
| `continuous-deployment.md` | CD overview and patterns |
| `actions-vs-apps.md` | GitHub Actions vs GitHub Apps comparison |

### concepts/ (2 files)

| File | Description |
|------|-------------|
| `billing-and-usage.md` | Usage limits, billing, free minutes |
| `metrics.md` | Actions metrics for orgs and repos |

### concepts/workflows-and-actions/ (11 files)

| File | Description |
|------|-------------|
| `workflows.md` | Workflow overview |
| `variables.md` | Environment variables and context variables |
| `contexts.md` | Context objects available in workflows |
| `expressions.md` | Expression syntax |
| `reusing-workflow-configurations.md` | Reusable workflow overview |
| `custom-actions.md` | Custom action overview |
| `deployment-environments.md` | Environments concept |
| `concurrency.md` | Concurrency control |
| `workflow-artifacts.md` | Artifacts overview |
| `dependency-caching.md` | Dependency caching concept |
| `notifications-for-workflow-runs.md` | Workflow run notifications |

### concepts/runners/ (8 files)

| File | Description |
|------|-------------|
| `github-hosted-runners.md` | GitHub-hosted runner overview |
| `larger-runners.md` | Larger runners overview |
| `self-hosted-runners.md` | Self-hosted runners overview |
| `private-networking.md` | Private network access from runners |
| `runner-groups.md` | Runner groups concept |
| `runner-scale-sets.md` | Runner scale sets (ARC) |
| `actions-runner-controller.md` | ARC overview |
| `support-for-arc.md` | ARC support levels |

### concepts/security/ (7 files)

| File | Description |
|------|-------------|
| `secrets.md` | Secrets management overview |
| `github_token.md` | GITHUB_TOKEN automatic token |
| `openid-connect.md` | OIDC for keyless cloud auth |
| `artifact-attestations.md` | Build provenance attestations |
| `script-injections.md` | Preventing script injection attacks |
| `compromised-runners.md` | Responding to compromised runners |
| `kubernetes-admissions-controller.md` | Kubernetes admission controller |

### how-tos/write-workflows/ (1 file)

| File | Description |
|------|-------------|
| `use-workflow-templates.md` | Using starter/workflow templates |

### how-tos/write-workflows/choose-when-workflows-run/ (3 files)

| File | Description |
|------|-------------|
| `trigger-a-workflow.md` | Configuring workflow triggers |
| `control-jobs-with-conditions.md` | If conditions on jobs and steps |
| `control-workflow-concurrency.md` | Concurrency groups and cancellation |

### how-tos/write-workflows/choose-where-workflows-run/ (2 files)

| File | Description |
|------|-------------|
| `choose-the-runner-for-a-job.md` | Selecting runner type for a job |
| `run-jobs-in-a-container.md` | Running jobs inside containers |

### how-tos/write-workflows/choose-what-workflows-do/ (10 files)

| File | Description |
|------|-------------|
| `use-jobs.md` | Defining and configuring jobs |
| `find-and-customize-actions.md` | Finding and using community actions |
| `use-github-cli.md` | Using GitHub CLI in workflows |
| `add-scripts.md` | Running scripts in workflow steps |
| `use-secrets.md` | Using secrets in workflows |
| `use-variables.md` | Using environment variables |
| `pass-job-outputs.md` | Passing data between jobs |
| `run-job-variations.md` | Matrix strategy for job variations |
| `set-default-values-for-jobs.md` | Default shell and working directory |
| `deploy-to-environment.md` | Deploying to GitHub environments |

### how-tos/manage-workflow-runs/ (10 files)

| File | Description |
|------|-------------|
| `manually-run-a-workflow.md` | Triggering workflow_dispatch manually |
| `re-run-workflows-and-jobs.md` | Re-running failed jobs |
| `cancel-a-workflow-run.md` | Canceling in-progress runs |
| `disable-and-enable-workflows.md` | Enabling/disabling workflows |
| `skip-workflow-runs.md` | Skipping runs with commit messages |
| `delete-a-workflow-run.md` | Deleting run history |
| `download-workflow-artifacts.md` | Downloading artifacts from runs |
| `remove-workflow-artifacts.md` | Deleting artifacts |
| `manage-caches.md` | Managing dependency caches |
| `approve-runs-from-forks.md` | Approving fork pull request runs |

### how-tos/monitor-workflows/ (7 files)

| File | Description |
|------|-------------|
| `use-the-visualization-graph.md` | Workflow visualization graph |
| `view-workflow-run-history.md` | Viewing run history |
| `view-job-execution-time.md` | Viewing job billable time |
| `add-a-status-badge.md` | Adding workflow status badges |
| `use-workflow-run-logs.md` | Reading and searching logs |
| `view-job-condition-logs.md` | Viewing condition evaluation logs |
| `enable-debug-logging.md` | Enabling runner and step debug logs |

### how-tos/reuse-automations/ (5 files)

| File | Description |
|------|-------------|
| `reuse-workflows.md` | Calling reusable workflows |
| `create-workflow-templates.md` | Creating starter workflow templates |
| `share-across-private-repositories.md` | Sharing workflows across private repos |
| `share-with-your-enterprise.md` | Enterprise-level workflow sharing |
| `share-with-your-organization.md` | Org-level workflow sharing |

### how-tos/secure-your-work/security-harden-deployments/ (9 files)

| File | Description |
|------|-------------|
| `oidc-in-aws.md` | OIDC authentication with AWS |
| `oidc-in-azure.md` | OIDC authentication with Azure |
| `oidc-in-google-cloud-platform.md` | OIDC authentication with GCP |
| `oidc-in-hashicorp-vault.md` | OIDC authentication with HashiCorp Vault |
| `oidc-in-jfrog.md` | OIDC authentication with JFrog |
| `oidc-in-octopus-deploy.md` | OIDC authentication with Octopus Deploy |
| `oidc-in-pypi.md` | OIDC authentication with PyPI |
| `oidc-in-cloud-providers.md` | OIDC with custom cloud providers |
| `oidc-with-reusable-workflows.md` | OIDC with reusable workflows |

### how-tos/secure-your-work/use-artifact-attestations/ (5 files)

| File | Description |
|------|-------------|
| `use-artifact-attestations.md` | Generating build attestations |
| `increase-security-rating.md` | Improving SLSA security rating |
| `enforce-artifact-attestations.md` | Enforcing attestation policies |
| `verify-attestations-offline.md` | Offline attestation verification |
| `manage-attestations.md` | Managing attestation records |

### how-tos/deploy/configure-and-manage-deployments/ (6 files)

| File | Description |
|------|-------------|
| `control-deployments.md` | Controlling deployment flow |
| `view-deployment-history.md` | Viewing deployment history |
| `manage-environments.md` | Creating and managing environments |
| `review-deployments.md` | Reviewing and approving deployments |
| `create-custom-protection-rules.md` | Creating custom deployment protection rules |
| `configure-custom-protection-rules.md` | Configuring protection rule apps |

### how-tos/deploy/deploy-to-third-party-platforms/ (11 files)

| File | Description |
|------|-------------|
| `nodejs-to-azure-app-service.md` | Deploy Node.js to Azure App Service |
| `python-to-azure-app-service.md` | Deploy Python to Azure App Service |
| `java-to-azure-app-service.md` | Deploy Java to Azure App Service |
| `net-to-azure-app-service.md` | Deploy .NET to Azure App Service |
| `docker-to-azure-app-service.md` | Deploy Docker to Azure App Service |
| `php-to-azure-app-service.md` | Deploy PHP to Azure App Service |
| `azure-static-web-app.md` | Deploy to Azure Static Web Apps |
| `azure-kubernetes-service.md` | Deploy to Azure Kubernetes Service |
| `amazon-elastic-container-service.md` | Deploy to Amazon ECS |
| `google-kubernetes-engine.md` | Deploy to Google Kubernetes Engine |
| `sign-xcode-applications.md` | Sign and deploy Xcode applications |

### how-tos/manage-runners/github-hosted-runners/ (3 files + subdirectory)

| File | Description |
|------|-------------|
| `use-github-hosted-runners.md` | Using GitHub-hosted runners |
| `customize-runners.md` | Customizing GitHub-hosted runners |
| `view-current-jobs.md` | Viewing current jobs on a runner |
| `connect-to-a-private-network/connect-with-oidc.md` | Private network with OIDC |
| `connect-to-a-private-network/connect-with-wireguard.md` | Private network with WireGuard |

### how-tos/manage-runners/larger-runners/ (4 files)

| File | Description |
|------|-------------|
| `manage-larger-runners.md` | Creating and managing larger runners |
| `control-access.md` | Controlling access to larger runners |
| `use-larger-runners.md` | Using larger runners in workflows |
| `use-custom-images.md` | Custom VM images for larger runners |

### how-tos/manage-runners/self-hosted-runners/ (9 files)

| File | Description |
|------|-------------|
| `add-runners.md` | Adding self-hosted runners |
| `run-scripts.md` | Running scripts before/after jobs |
| `customize-containers.md` | Customizing runner containers |
| `configure-the-application.md` | Configuring the runner application |
| `apply-labels.md` | Applying labels to runners |
| `use-in-a-workflow.md` | Using self-hosted runners in workflows |
| `manage-access.md` | Managing access to self-hosted runners |
| `monitor-and-troubleshoot.md` | Monitoring and troubleshooting runners |
| `remove-runners.md` | Removing self-hosted runners |

### how-tos/manage-runners/use-actions-runner-controller/ (3 files)

| File | Description |
|------|-------------|
| `authenticate-to-the-api.md` | ARC authentication setup |
| `deploy-runner-scale-sets.md` | Deploying runner scale sets |
| `use-arc-in-a-workflow.md` | Using ARC runners in workflows |

### how-tos/manage-runners/ (2 files)

| File | Description |
|------|-------------|
| `use-proxy-servers.md` | Using proxy servers with runners |

### how-tos/create-and-publish-actions/ (6 files)

| File | Description |
|------|-------------|
| `manage-custom-actions.md` | Using and managing custom actions |
| `create-a-cli-action.md` | Building a CLI-based action |
| `set-exit-codes.md` | Setting action exit codes |
| `publish-in-github-marketplace.md` | Publishing to GitHub Marketplace |
| `release-and-maintain-actions.md` | Release and maintenance best practices |
| `using-immutable-releases-and-tags-to-manage-your-actions-releases.md` | Immutable releases for actions |

### how-tos/administer/ (2 files)

| File | Description |
|------|-------------|
| `view-metrics.md` | Viewing Actions usage metrics |
| `reuse-namespaces-on-ghecom.md` | Reusing namespaces on GHE.com |

### how-tos/ (2 files)

| File | Description |
|------|-------------|
| `troubleshoot-workflows.md` | General workflow troubleshooting guide |

### reference/workflows-and-actions/ (12 files)

| File | Description |
|------|-------------|
| `workflow-syntax.md` | Complete workflow YAML syntax reference |
| `events-that-trigger-workflows.md` | All events that trigger workflows |
| `workflow-commands.md` | Workflow commands (set-output, add-mask, etc.) |
| `variables.md` | Default environment variables reference |
| `expressions.md` | Expression syntax and functions reference |
| `contexts.md` | All context objects and properties |
| `deployments-and-environments.md` | Deployments and environments reference |
| `dependency-caching.md` | Cache action reference |
| `reusing-workflow-configurations.md` | Reusable workflow syntax reference |
| `metadata-syntax.md` | action.yml metadata syntax |
| `workflow-cancellation.md` | Workflow cancellation behavior |
| `dockerfile-support.md` | Dockerfile support for container actions |

### reference/runners/ (3 files)

| File | Description |
|------|-------------|
| `github-hosted-runners.md` | GitHub-hosted runner specifications |
| `larger-runners.md` | Larger runner specifications |
| `self-hosted-runners.md` | Self-hosted runner requirements |

### reference/security/ (3 files)

| File | Description |
|------|-------------|
| `secure-use.md` | Security hardening reference |
| `secrets.md` | Secrets reference |
| `oidc.md` | OIDC token claims reference |

### reference/github-actions-importer/ (2 files)

| File | Description |
|------|-------------|
| `supplemental-arguments-and-settings.md` | Importer CLI arguments |
| `custom-transformers.md` | Writing custom importer transformers |

### reference/ (1 file)

| File | Description |
|------|-------------|
| `limits.md` | Usage limits and restrictions |

### tutorials/ (4 files)

| File | Description |
|------|-------------|
| `create-an-example-workflow.md` | Creating your first workflow |
| `authenticate-with-github_token.md` | Using GITHUB_TOKEN in workflows |
| `migrate-to-github-runners.md` | Migrating to GitHub-hosted runners |
| `store-and-share-data.md` | Storing and sharing data between jobs |

### tutorials/build-and-test-code/ (12 files)

| File | Description |
|------|-------------|
| `nodejs.md` | CI for Node.js |
| `python.md` | CI for Python |
| `go.md` | CI for Go |
| `java-with-maven.md` | CI for Java with Maven |
| `java-with-gradle.md` | CI for Java with Gradle |
| `java-with-ant.md` | CI for Java with Ant |
| `net.md` | CI for .NET |
| `ruby.md` | CI for Ruby |
| `rust.md` | CI for Rust |
| `swift.md` | CI for Swift |
| `powershell.md` | CI for PowerShell |
| `xamarin-apps.md` | CI for Xamarin apps |

### tutorials/create-actions/ (2 files)

| File | Description |
|------|-------------|
| `create-a-javascript-action.md` | Building a JavaScript action |
| `create-a-composite-action.md` | Building a composite action |

### tutorials/publish-packages/ (4 files)

| File | Description |
|------|-------------|
| `publish-docker-images.md` | Publishing Docker images |
| `publish-nodejs-packages.md` | Publishing npm packages |
| `publish-java-packages-with-maven.md` | Publishing Java packages with Maven |
| `publish-java-packages-with-gradle.md` | Publishing Java packages with Gradle |

### tutorials/use-containerized-services/ (4 files)

| File | Description |
|------|-------------|
| `create-a-docker-container-action.md` | Docker container action tutorial |
| `use-docker-service-containers.md` | Using Docker service containers |
| `create-postgresql-service-containers.md` | PostgreSQL service containers |
| `create-redis-service-containers.md` | Redis service containers |

### tutorials/manage-your-work/ (4 files)

| File | Description |
|------|-------------|
| `add-labels-to-issues.md` | Auto-labeling issues |
| `close-inactive-issues.md` | Closing stale issues |
| `add-comments-with-labels.md` | Adding comments based on labels |
| `schedule-issue-creation.md` | Scheduling issue creation |

### tutorials/migrate-to-github-actions/automated-migrations/ (8 files)

| File | Description |
|------|-------------|
| `use-github-actions-importer.md` | Using the Actions Importer CLI |
| `azure-devops-migration.md` | Migrate from Azure DevOps |
| `bamboo-migration.md` | Migrate from Bamboo |
| `bitbucket-pipelines-migration.md` | Migrate from Bitbucket Pipelines |
| `circleci-migration.md` | Migrate from CircleCI |
| `gitlab-migration.md` | Migrate from GitLab CI/CD |
| `jenkins-migration.md` | Migrate from Jenkins |
| `travis-ci-migration.md` | Migrate from Travis CI |

### tutorials/migrate-to-github-actions/manual-migrations/ (5 files)

| File | Description |
|------|-------------|
| `migrate-from-azure-pipelines.md` | Manual migration from Azure Pipelines |
| `migrate-from-circleci.md` | Manual migration from CircleCI |
| `migrate-from-gitlab-cicd.md` | Manual migration from GitLab CI/CD |
| `migrate-from-jenkins.md` | Manual migration from Jenkins |
| `migrate-from-travis-ci.md` | Manual migration from Travis CI |

### tutorials/use-actions-runner-controller/ (2 files)

| File | Description |
|------|-------------|
| `get-started.md` | ARC getting started tutorial |
| `troubleshoot.md` | ARC troubleshooting guide |
