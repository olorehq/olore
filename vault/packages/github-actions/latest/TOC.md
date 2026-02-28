# github-actions Table of Contents

## Directory Map

```
contents/
├── get-started/            # Quickstart, core concepts, CI/CD overview (5 files)
├── concepts/               # Core concepts overview (28 files)
│   ├── workflows-and-actions/  # Workflows, variables, contexts, expressions, caching
│   ├── runners/                # GitHub-hosted, self-hosted, larger, ARC runners
│   └── security/               # Secrets, GITHUB_TOKEN, OIDC, attestations
├── reference/              # Full reference documentation (21 files)
│   ├── workflows-and-actions/  # Workflow syntax, events, commands, expressions, contexts
│   ├── runners/                # Runner specs and capabilities
│   └── security/               # Security reference
├── how-tos/                # Task-based guides (96 files)
│   ├── write-workflows/        # Writing and structuring workflows (16 files)
│   ├── manage-runners/         # Runner setup and management (19 files)
│   ├── deploy/                 # Deployment workflows (17 files)
│   ├── secure-your-work/       # Security hardening, OIDC, attestations (14 files)
│   ├── manage-workflow-runs/   # Run management, caches, artifacts (10 files)
│   ├── monitor-workflows/      # Logs, debug, status badges (7 files)
│   ├── reuse-automations/      # Reusable workflows, templates (5 files)
│   └── create-and-publish-actions/  # Creating custom actions (6 files)
└── tutorials/              # Hands-on tutorials (48 files)
    ├── build-and-test-code/    # Language-specific CI tutorials
    ├── create-actions/         # JavaScript and composite actions
    ├── publish-packages/       # Docker, npm, Java publishing
    ├── use-containerized-services/  # Docker, PostgreSQL, Redis
    ├── use-actions-runner-controller/  # ARC runner setup
    ├── migrate-to-github-actions/  # Migration from CI platforms
    └── manage-your-work/       # Issue/PR automation
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/quickstart.md` |
| Understand core concepts | `contents/get-started/understand-github-actions.md` |
| Workflow syntax reference | `contents/reference/workflows-and-actions/workflow-syntax.md` |
| Events that trigger workflows | `contents/reference/workflows-and-actions/events-that-trigger-workflows.md` |
| Contexts reference | `contents/reference/workflows-and-actions/contexts.md` |
| Expressions reference | `contents/reference/workflows-and-actions/expressions.md` |
| Workflow commands | `contents/reference/workflows-and-actions/workflow-commands.md` |
| Secrets and variables | `contents/how-tos/write-workflows/choose-what-workflows-do/use-secrets.md` |
| Reusable workflows | `contents/how-tos/reuse-automations/reuse-workflows.md` |
| Self-hosted runners | `contents/how-tos/manage-runners/self-hosted-runners/` |
| Troubleshooting | `contents/how-tos/troubleshoot-workflows.md` |

## Detailed Structure

### get-started/ (5 files)

| File | Description |
|------|-------------|
| `quickstart.md` | Quick start tutorial |
| `understand-github-actions.md` | Core concepts and terminology |
| `continuous-integration.md` | CI overview with GitHub Actions |
| `continuous-deployment.md` | CD overview with GitHub Actions |
| `actions-vs-apps.md` | Comparing GitHub Actions to GitHub Apps |

### concepts/workflows-and-actions/ (11 files)

| File | Description |
|------|-------------|
| `workflows.md` | Workflow overview, triggers, syntax |
| `variables.md` | Environment and configuration variables |
| `contexts.md` | Context objects in workflows |
| `expressions.md` | Expression syntax and functions |
| `custom-actions.md` | Types of custom actions |
| `reusing-workflow-configurations.md` | Reusable workflows concept |
| `deployment-environments.md` | Deployment environments concept |
| `concurrency.md` | Workflow and job concurrency |
| `workflow-artifacts.md` | Artifacts overview |
| `dependency-caching.md` | Caching dependencies |
| `notifications-for-workflow-runs.md` | Workflow run notifications |

### concepts/runners/ (8 files)

| File | Description |
|------|-------------|
| `github-hosted-runners.md` | GitHub-hosted runner overview |
| `self-hosted-runners.md` | Self-hosted runner overview |
| `larger-runners.md` | Larger GitHub-hosted runners |
| `runner-groups.md` | Runner group management |
| `runner-scale-sets.md` | Runner scale sets (ARC) |
| `actions-runner-controller.md` | ARC overview |
| `private-networking.md` | Private networking for runners |
| `support-for-arc.md` | ARC support details |

### concepts/security/ (7 files)

| File | Description |
|------|-------------|
| `secrets.md` | Secrets overview |
| `github_token.md` | GITHUB_TOKEN permissions and usage |
| `openid-connect.md` | OIDC for cloud authentication |
| `artifact-attestations.md` | Build provenance attestations |
| `script-injections.md` | Script injection vulnerabilities |
| `compromised-runners.md` | Compromised runner risks |
| `kubernetes-admissions-controller.md` | Kubernetes admission controller |

### reference/workflows-and-actions/ (12 files)

| File | Description |
|------|-------------|
| `workflow-syntax.md` | Complete workflow YAML syntax reference |
| `events-that-trigger-workflows.md` | All workflow trigger events |
| `workflow-commands.md` | Workflow commands (::set-output, ::error, etc.) |
| `expressions.md` | Expression functions and operators |
| `contexts.md` | Full contexts reference (github, env, job, steps, etc.) |
| `variables.md` | Default environment variables reference |
| `metadata-syntax.md` | Action metadata (action.yml) syntax |
| `dependency-caching.md` | Cache action usage reference |
| `deployments-and-environments.md` | Environments reference |
| `reusing-workflow-configurations.md` | Reusable workflow syntax |
| `workflow-commands.md` | Workflow commands reference |
| `workflow-cancellation.md` | Workflow cancellation behavior |
| `dockerfile-support.md` | Dockerfile support for Docker actions |

### reference/runners/ (3 files)

| File | Description |
|------|-------------|
| `github-hosted-runners.md` | GitHub-hosted runner specs and software |
| `larger-runners.md` | Larger runner options and specs |
| `self-hosted-runners.md` | Self-hosted runner requirements |

### reference/security/ (3 files)

| File | Description |
|------|-------------|
| `secure-use.md` | Security hardening best practices |
| `secrets.md` | Secrets reference |
| `oidc.md` | OIDC claims and configuration reference |

### reference/github-actions-importer/ (2 files)

| File | Description |
|------|-------------|
| `supplemental-arguments-and-settings.md` | Importer CLI arguments |
| `custom-transformers.md` | Custom transformation rules |

### how-tos/write-workflows/ (16 files)

| File | Description |
|------|-------------|
| `use-workflow-templates.md` | Using starter workflow templates |
| `choose-when-workflows-run/trigger-a-workflow.md` | Triggering workflows |
| `choose-when-workflows-run/control-jobs-with-conditions.md` | Job conditionals (if) |
| `choose-when-workflows-run/control-workflow-concurrency.md` | Concurrency groups |
| `choose-where-workflows-run/choose-the-runner-for-a-job.md` | Selecting a runner |
| `choose-where-workflows-run/run-jobs-in-a-container.md` | Container jobs |
| `choose-what-workflows-do/use-jobs.md` | Defining jobs |
| `choose-what-workflows-do/use-secrets.md` | Using secrets in workflows |
| `choose-what-workflows-do/use-variables.md` | Using variables |
| `choose-what-workflows-do/use-github-cli.md` | GitHub CLI in workflows |
| `choose-what-workflows-do/add-scripts.md` | Running scripts |
| `choose-what-workflows-do/find-and-customize-actions.md` | Finding and using actions |
| `choose-what-workflows-do/pass-job-outputs.md` | Job outputs |
| `choose-what-workflows-do/run-job-variations.md` | Matrix jobs |
| `choose-what-workflows-do/set-default-values-for-jobs.md` | Default job settings |
| `choose-what-workflows-do/deploy-to-environment.md` | Deploying to environments |

### how-tos/manage-runners/ (19 files)

| File | Description |
|------|-------------|
| `use-proxy-servers.md` | Configuring proxy servers for self-hosted runners |
| `github-hosted-runners/use-github-hosted-runners.md` | Using GitHub-hosted runners |
| `github-hosted-runners/customize-runners.md` | Customizing GitHub-hosted runners |
| `github-hosted-runners/view-current-jobs.md` | Viewing current runner jobs |
| `github-hosted-runners/connect-to-a-private-network/connect-with-oidc.md` | Private network via OIDC |
| `github-hosted-runners/connect-to-a-private-network/connect-with-wireguard.md` | Private network via WireGuard |
| `larger-runners/manage-larger-runners.md` | Managing larger runners |
| `larger-runners/use-larger-runners.md` | Using larger runners |
| `larger-runners/use-custom-images.md` | Custom images for larger runners |
| `larger-runners/control-access.md` | Access control for larger runners |
| `self-hosted-runners/add-runners.md` | Adding self-hosted runners |
| `self-hosted-runners/configure-the-application.md` | Runner application configuration |
| `self-hosted-runners/run-scripts.md` | Running scripts on self-hosted runners |
| `self-hosted-runners/customize-containers.md` | Customizing runner containers |
| `self-hosted-runners/apply-labels.md` | Applying labels to runners |
| `self-hosted-runners/use-in-a-workflow.md` | Using self-hosted runners in workflows |
| `self-hosted-runners/manage-access.md` | Managing runner access |
| `self-hosted-runners/monitor-and-troubleshoot.md` | Monitoring and troubleshooting runners |
| `self-hosted-runners/remove-runners.md` | Removing runners |

### how-tos/deploy/ (17 files)

| File | Description |
|------|-------------|
| `configure-and-manage-deployments/manage-environments.md` | Managing deployment environments |
| `configure-and-manage-deployments/control-deployments.md` | Controlling deployments |
| `configure-and-manage-deployments/review-deployments.md` | Reviewing deployments |
| `configure-and-manage-deployments/view-deployment-history.md` | Viewing deployment history |
| `configure-and-manage-deployments/create-custom-protection-rules.md` | Custom protection rules |
| `configure-and-manage-deployments/configure-custom-protection-rules.md` | Configuring protection rules |
| `deploy-to-third-party-platforms/amazon-elastic-container-service.md` | Deploy to AWS ECS |
| `deploy-to-third-party-platforms/azure-kubernetes-service.md` | Deploy to AKS |
| `deploy-to-third-party-platforms/azure-static-web-app.md` | Deploy to Azure Static Web Apps |
| `deploy-to-third-party-platforms/docker-to-azure-app-service.md` | Deploy Docker to Azure App Service |
| `deploy-to-third-party-platforms/google-kubernetes-engine.md` | Deploy to GKE |
| `deploy-to-third-party-platforms/java-to-azure-app-service.md` | Deploy Java to Azure |
| `deploy-to-third-party-platforms/net-to-azure-app-service.md` | Deploy .NET to Azure |
| `deploy-to-third-party-platforms/nodejs-to-azure-app-service.md` | Deploy Node.js to Azure |
| `deploy-to-third-party-platforms/php-to-azure-app-service.md` | Deploy PHP to Azure |
| `deploy-to-third-party-platforms/python-to-azure-app-service.md` | Deploy Python to Azure |
| `deploy-to-third-party-platforms/sign-xcode-applications.md` | Sign Xcode apps |

### how-tos/secure-your-work/ (14 files)

| File | Description |
|------|-------------|
| `security-harden-deployments/oidc-in-aws.md` | OIDC with AWS |
| `security-harden-deployments/oidc-in-azure.md` | OIDC with Azure |
| `security-harden-deployments/oidc-in-google-cloud-platform.md` | OIDC with GCP |
| `security-harden-deployments/oidc-in-hashicorp-vault.md` | OIDC with HashiCorp Vault |
| `security-harden-deployments/oidc-in-jfrog.md` | OIDC with JFrog |
| `security-harden-deployments/oidc-in-octopus-deploy.md` | OIDC with Octopus Deploy |
| `security-harden-deployments/oidc-in-pypi.md` | OIDC with PyPI |
| `security-harden-deployments/oidc-in-cloud-providers.md` | OIDC with cloud providers |
| `security-harden-deployments/oidc-with-reusable-workflows.md` | OIDC with reusable workflows |
| `use-artifact-attestations/use-artifact-attestations.md` | Using artifact attestations |
| `use-artifact-attestations/enforce-artifact-attestations.md` | Enforcing attestations |
| `use-artifact-attestations/verify-attestations-offline.md` | Offline attestation verification |
| `use-artifact-attestations/manage-attestations.md` | Managing attestations |
| `use-artifact-attestations/increase-security-rating.md` | Improving security rating |

### how-tos/manage-workflow-runs/ (10 files)

| File | Description |
|------|-------------|
| `manually-run-a-workflow.md` | Manually triggering workflow runs |
| `re-run-workflows-and-jobs.md` | Re-running workflows |
| `cancel-a-workflow-run.md` | Canceling a run |
| `disable-and-enable-workflows.md` | Disabling/enabling workflows |
| `skip-workflow-runs.md` | Skipping workflow runs |
| `delete-a-workflow-run.md` | Deleting a run |
| `download-workflow-artifacts.md` | Downloading artifacts |
| `remove-workflow-artifacts.md` | Removing artifacts |
| `manage-caches.md` | Managing caches |
| `approve-runs-from-forks.md` | Approving fork workflow runs |

### how-tos/monitor-workflows/ (7 files)

| File | Description |
|------|-------------|
| `use-the-visualization-graph.md` | Workflow visualization graph |
| `view-workflow-run-history.md` | Viewing run history |
| `view-job-execution-time.md` | Viewing job execution time |
| `add-a-status-badge.md` | Adding status badges |
| `use-workflow-run-logs.md` | Reading workflow logs |
| `view-job-condition-logs.md` | Viewing job condition logs |
| `enable-debug-logging.md` | Enabling debug logging |

### how-tos/reuse-automations/ (5 files)

| File | Description |
|------|-------------|
| `reuse-workflows.md` | Calling reusable workflows |
| `create-workflow-templates.md` | Creating starter workflow templates |
| `share-across-private-repositories.md` | Sharing across private repos |
| `share-with-your-organization.md` | Sharing within an organization |
| `share-with-your-enterprise.md` | Sharing within an enterprise |

### how-tos/create-and-publish-actions/ (6 files)

| File | Description |
|------|-------------|
| `manage-custom-actions.md` | Managing custom actions |
| `create-a-cli-action.md` | Creating CLI actions |
| `set-exit-codes.md` | Setting action exit codes |
| `publish-in-github-marketplace.md` | Publishing to Marketplace |
| `release-and-maintain-actions.md` | Releasing and maintaining actions |
| `using-immutable-releases-and-tags-to-manage-your-actions-releases.md` | Immutable action releases |

### tutorials/build-and-test-code/ (13 files)

| File | Description |
|------|-------------|
| `nodejs.md` | Build and test Node.js |
| `python.md` | Build and test Python |
| `java-with-maven.md` | Build and test Java (Maven) |
| `java-with-gradle.md` | Build and test Java (Gradle) |
| `java-with-ant.md` | Build and test Java (Ant) |
| `go.md` | Build and test Go |
| `ruby.md` | Build and test Ruby |
| `rust.md` | Build and test Rust |
| `net.md` | Build and test .NET |
| `powershell.md` | Build and test PowerShell |
| `swift.md` | Build and test Swift |
| `xamarin-apps.md` | Build and test Xamarin apps |

### tutorials/create-actions/ (2 files)

| File | Description |
|------|-------------|
| `create-a-javascript-action.md` | Build a JavaScript action |
| `create-a-composite-action.md` | Build a composite action |

### tutorials/publish-packages/ (4 files)

| File | Description |
|------|-------------|
| `publish-docker-images.md` | Publish Docker images |
| `publish-nodejs-packages.md` | Publish npm packages |
| `publish-java-packages-with-maven.md` | Publish Java packages (Maven) |
| `publish-java-packages-with-gradle.md` | Publish Java packages (Gradle) |

### tutorials/use-containerized-services/ (4 files)

| File | Description |
|------|-------------|
| `use-docker-service-containers.md` | Docker service containers |
| `create-postgresql-service-containers.md` | PostgreSQL service containers |
| `create-redis-service-containers.md` | Redis service containers |
| `create-a-docker-container-action.md` | Docker container actions |

### tutorials/use-actions-runner-controller/ (5 files)

| File | Description |
|------|-------------|
| `quickstart.md` | ARC quickstart |
| `authenticate-to-the-api.md` | ARC authentication |
| `deploy-runner-scale-sets.md` | Deploy runner scale sets |
| `use-arc-in-a-workflow.md` | Using ARC runners in workflows |
| `troubleshoot.md` | Troubleshooting ARC |

### tutorials/migrate-to-github-actions/ (13 files)

| File | Description |
|------|-------------|
| `automated-migrations/use-github-actions-importer.md` | Using GitHub Actions Importer |
| `automated-migrations/azure-devops-migration.md` | Migrate from Azure DevOps |
| `automated-migrations/circleci-migration.md` | Migrate from CircleCI |
| `automated-migrations/jenkins-migration.md` | Migrate from Jenkins |
| `automated-migrations/gitlab-migration.md` | Migrate from GitLab CI |
| `automated-migrations/travis-ci-migration.md` | Migrate from Travis CI |
| `automated-migrations/bitbucket-pipelines-migration.md` | Migrate from Bitbucket Pipelines |
| `automated-migrations/bamboo-migration.md` | Migrate from Bamboo |
| `manual-migrations/migrate-from-azure-pipelines.md` | Manually migrate from Azure Pipelines |
| `manual-migrations/migrate-from-circleci.md` | Manually migrate from CircleCI |
| `manual-migrations/migrate-from-jenkins.md` | Manually migrate from Jenkins |
| `manual-migrations/migrate-from-gitlab-cicd.md` | Manually migrate from GitLab CI |
| `manual-migrations/migrate-from-travis-ci.md` | Manually migrate from Travis CI |

### tutorials/ (misc files)

| File | Description |
|------|-------------|
| `create-an-example-workflow.md` | Example workflow walkthrough |
| `authenticate-with-github_token.md` | Using GITHUB_TOKEN |
| `store-and-share-data.md` | Artifacts and caching |
| `migrate-to-github-runners.md` | Migrating to GitHub-hosted runners |
| `manage-your-work/add-labels-to-issues.md` | Auto-label issues |
| `manage-your-work/close-inactive-issues.md` | Auto-close stale issues |
| `manage-your-work/add-comments-with-labels.md` | Add comments with labels |
| `manage-your-work/schedule-issue-creation.md` | Scheduled issue creation |
