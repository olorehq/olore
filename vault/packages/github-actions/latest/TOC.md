# GitHub Actions Table of Contents

## Directory Map

```
contents/
├── concepts/                   # Core concepts: runners, security, workflows, policies, billing (30 files)
├── get-started/                # Overview, quickstart, and onboarding (5 files)
├── how-tos/                    # Task guides: workflows, runners, deployment, security, publishing actions (114 files)
├── reference/                  # Syntax, contexts, events, runner and security reference (22 files)
└── tutorials/                  # End-to-end tutorials: CI builds, packages, migration, containers (53 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/quickstart.md` |
| Workflow syntax | `contents/reference/workflows-and-actions/workflow-syntax.md` |
| Events that trigger workflows | `contents/reference/workflows-and-actions/events-that-trigger-workflows.md` |
| Expressions and contexts | `contents/reference/workflows-and-actions/contexts.md` |
| Secrets and security hardening | `contents/reference/security/secure-use.md` |
| Self-hosted runners | `contents/how-tos/manage-runners/self-hosted-runners/` |
| Reusable workflows | `contents/how-tos/reuse-automations/reuse-workflows.md` |
| Deployment | `contents/how-tos/deploy/` |

## Detailed Structure

### concepts/ (3 files)

| File | Description |
|------|-------------|
| `about-actions-policies.md` | Govern how GitHub Actions workflows run within your repository, organization, or enterprise. |
| `billing-and-usage.md` | Understand which GitHub Actions usage is included with your plan, when charges apply, and which usage limits administrators can manage. |
| `metrics.md` | Learn about the GitHub Actions metrics available for your organizations and repositories. |

### concepts/runners/ (8 files)

| File | Description |
|------|-------------|
| `actions-runner-controller.md` | You can host your own runners and customize the environment used to run jobs in your GitHub Actions workflows. |
| `github-hosted-runners.md` | GitHub offers hosted virtual machines to run workflows. The virtual machine contains an environment of tools, packages, and settings... |
| `larger-runners.md` | Organize and govern your workflows with GitHub-hosted larger runners using runner groups, concurrency policies, and granular access... |
| `private-networking.md` | Private networking with GitHub-hosted runners |
| `runner-groups.md` | Use runner groups to control access to runners and organize runners across your organization or enterprise. |
| `runner-scale-sets.md` | Learn about what a runner scale set is and how they can interact with the actions runner controller. |
| `self-hosted-runners.md` | You can host your own runners and customize the environment used to run jobs in your GitHub Actions workflows. |
| `support-for-arc.md` | What to know before you [contact github support](/support/contacting-github-support) for assistance with Actions Runner Controller. |

### concepts/security/ (8 files)

| File | Description |
|------|-------------|
| `artifact-attestations.md` | Understand the usage and security benefits of artifact attestations. |
| `compromised-runners.md` | Understand the security risks associated with compromised GitHub Actions runners. |
| `github_token.md` | Learn what `GITHUB_TOKEN` is, how it works, and why it matters for secure automation in GitHub Actions workflows. |
| `kubernetes-admissions-controller.md` | Understand how you can use an admissions controller to enforce artifact attestations in your Kubernetes cluster. |
| `openid-connect.md` | OpenID Connect allows your workflows to exchange short-lived tokens directly from your cloud provider. |
| `script-injections.md` | Understand the security risks associated with script injections and GitHub Actions workflows. |
| `secrets.md` | Learn about secrets as they are used in GitHub Actions workflows. |
| `workflow-dependency-lockfiles.md` | A lockfile pins every action your workflows depend on to a verified commit, so the code you reviewed is the code that runs. |

### concepts/workflows-and-actions/ (11 files)

| File | Description |
|------|-------------|
| `concurrency.md` | Learn about running workflows and jobs simultaneously. |
| `contexts.md` | Learn about contexts in GitHub Actions. |
| `custom-actions.md` | Actions are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, or use and... |
| `dependency-caching.md` | Learn about dependency caching for workflow speed and efficiency. |
| `deployment-environments.md` | You can create and deploy to different environments. |
| `expressions.md` | You can evaluate expressions in workflows and actions. |
| `notifications-for-workflow-runs.md` | You can subscribe to notifications about workflow runs that you trigger. |
| `reusing-workflow-configurations.md` | Learn how to avoid duplication when creating a workflow. |
| `variables.md` | Learn about variables in GitHub Actions workflows. |
| `workflow-artifacts.md` | Learn about storing and sharing data as artifacts of GitHub Actions workflows. |
| `workflows.md` | Get a high-level overview of GitHub Actions workflows, including triggers, syntax, and advanced features. |

### get-started/ (5 files)

| File | Description |
|------|-------------|
| `actions-vs-apps.md` | Learn about the key differences between GitHub Actions and GitHub Apps to help you decide which is right for your use cases. |
| `continuous-deployment.md` | You can create custom continuous deployment (CD) workflows directly in your GitHub repository with GitHub Actions. |
| `continuous-integration.md` | You can create custom continuous integration (CI) workflows directly in your GitHub repository with GitHub Actions. |
| `quickstart.md` | Try out the core features of GitHub Actions in minutes. |
| `understand-github-actions.md` | Learn the basics of core concepts and essential terminology in GitHub Actions. |

### how-tos/ (2 files)

| File | Description |
|------|-------------|
| `get-support.md` | Learn how github support can assist with GitHub Actions |
| `troubleshoot-workflows.md` | You can use the tools in GitHub Actions to debug your workflows. |

### how-tos/administer/ (4 files)

| File | Description |
|------|-------------|
| `control-workflow-execution.md` | Control who can trigger GitHub Actions workflows and which events are permitted to run them across an enterprise, organization, and... |
| `enforce-workflow-lockfiles.md` | Require workflow dependency lockfiles across your repositories, and automatically keep the files up to date. |
| `reuse-namespaces-on-ghecom.md` | Allow people to use namespaces that match actions you have used from dotcom the website. |
| `view-metrics.md` | You can view metrics to monitor where your organization or repositories use GitHub Actions and how they are performing. |

### how-tos/create-and-publish-actions/ (7 files)

| File | Description |
|------|-------------|
| `create-a-cli-action.md` | Learn how to develop an action to set up a CLI on GitHub Actions runners. |
| `index.md` | You can create your own actions, use and customize actions shared by the GitHub community, or write and share the actions you build. |
| `manage-custom-actions.md` | Learn how to create and manage your own actions, and customize actions shared by the GitHub community. |
| `publish-in-github-marketplace.md` | You can publish actions in marketplace and share actions you've created with the GitHub community. |
| `release-and-maintain-actions.md` | You can leverage automation and open source best practices to release and maintain actions. |
| `set-exit-codes.md` | You can use exit codes to set the status of an action. GitHub displays statuses to indicate passing or failing actions. |
| `using-immutable-releases-and-tags-to-manage-your-actions-releases.md` | Learn how you can use a combination of immutable releases on github and Git tags to manage your action's releases. |

### how-tos/deploy/configure-and-manage-deployments/ (7 files)

| File | Description |
|------|-------------|
| `configure-custom-protection-rules.md` | Use GitHub Apps to automate protecting deployments with third-party systems. |
| `control-deployments.md` | GitHub Actions gives you fine-grained control over deployments with environments, concurrency groups, and protection rules. |
| `create-custom-protection-rules.md` | Use GitHub Apps to automate protecting deployments with third-party systems. |
| `index.md` | View your deployment history and configure rules to protect your deployments. |
| `manage-environments.md` | You can create environments and secure those environments with deployment protection rules. A job that references an environment must... |
| `review-deployments.md` | You can approve or reject jobs awaiting review. |
| `view-deployment-history.md` | View current and previous deployments for your repository. |

### how-tos/deploy/deploy-to-third-party-platforms/ (12 files)

| File | Description |
|------|-------------|
| `amazon-elastic-container-service.md` | Learn how to deploy a project to Amazon Elastic Container Service (ECS) as part of a continuous deployment (CD) workflow. |
| `azure-kubernetes-service.md` | Learn how to deploy a project to Azure Kubernetes Service (AKS) as part of a continuous deployment (CD) workflow. |
| `azure-static-web-app.md` | Learn how to deploy a web app to Azure Static Web App as part of your continuous deployment (CD) workflows. |
| `docker-to-azure-app-service.md` | Learn how to deploy a Docker container to Azure App Service as part of your continuous deployment (CD) workflows. |
| `google-kubernetes-engine.md` | Learn how to deploy a project to Google Kubernetes Engine (GKE) as part of a continuous deployment (CD) workflow. |
| `index.md` | Learn how to deploy to third-party platforms as part of your continuous deployment and continuous integration workflows. |
| `java-to-azure-app-service.md` | Learn how to deploy a Java project to Azure App Service as part of your continuous deployment (CD) workflows. |
| `net-to-azure-app-service.md` | Learn how to deploy a .NET project to Azure App Service as part of your continuous deployment (CD) workflows. |
| `nodejs-to-azure-app-service.md` | Learn how to deploy a Node.js project to Azure App Service as part of your continuous deployment (CD) workflows. |
| `php-to-azure-app-service.md` | Learn how to deploy a PHP project to Azure App Service as part of your continuous deployment (CD) workflows. |
| `python-to-azure-app-service.md` | Learn how to deploy a Python project to Azure App Service as part of your continuous deployment (CD) workflows. |
| `sign-xcode-applications.md` | Learn how to sign Xcode apps within a continuous integration (CI) workflow by installing an Apple code signing certificate on GitHub... |

### how-tos/manage-runners/ (1 files)

| File | Description |
|------|-------------|
| `use-proxy-servers.md` | You can configure runners in isolated environments to use a proxy server for secure communication with github. |

### how-tos/manage-runners/github-hosted-runners/ (3 files)

| File | Description |
|------|-------------|
| `customize-runners.md` | You can install additional software on GitHub-hosted runners as a part of your workflow. |
| `use-github-hosted-runners.md` | You can assign a job to run on a virtual machine hosted by github. |
| `view-current-jobs.md` | Monitor how GitHub-hosted runners are processing jobs in your organization or enterprise, and identify any related constraints. |

### how-tos/manage-runners/github-hosted-runners/connect-to-a-private-network/ (2 files)

| File | Description |
|------|-------------|
| `connect-with-oidc.md` | You can use OpenID Connect (OIDC) tokens to authenticate your workflow. |
| `connect-with-wireguard.md` | You can create an overlay network between your runner and a service in your private network. |

### how-tos/manage-runners/larger-runners/ (4 files)

| File | Description |
|------|-------------|
| `control-access.md` | You can use policies to limit access to hosted runners that have been added to an organization or enterprise. |
| `manage-larger-runners.md` | You can configure hosted runners for your organization or enterprise. |
| `use-custom-images.md` | Create, manage, and use custom images for github hosted larger runners in your organization or enterprise. |
| `use-larger-runners.md` | Identify available hosted runners, then route jobs to the right runners by using runner groups and workflow labels. |

### how-tos/manage-runners/self-hosted-runners/ (10 files)

| File | Description |
|------|-------------|
| `add-runners.md` | You can add a self-hosted runner to a repository, an organization, or an enterprise. |
| `apply-labels.md` | You can use labels to organize your self-hosted runners based on their characteristics. |
| `configure-the-application.md` | You can configure the self-hosted runner application as a service to automatically start the runner application when the machine starts. |
| `customize-containers.md` | You can customize how your self-hosted runner invokes a container for a job. |
| `index.md` | You can host your own runners to run workflows in a highly customizable environment. |
| `manage-access.md` | You can use policies to limit access to self-hosted runners that have been added to an organization or enterprise. |
| `monitor-and-troubleshoot.md` | You can monitor your self-hosted runners to view their activity and diagnose common issues. |
| `remove-runners.md` | You can permanently remove a self-hosted runner from a repository or organization, an organization, or an enterprise. |
| `run-scripts.md` | Scripts can automatically execute on a self-hosted runner, directly before or after a job. |
| `use-in-a-workflow.md` | To use self-hosted runners in a workflow, you can use labels or groups to specify the runner for a job. |

### how-tos/manage-runners/use-actions-runner-controller/ (3 files)

| File | Description |
|------|-------------|
| `authenticate-to-the-api.md` | Authenticate actions runner controller to the company short API. |
| `deploy-runner-scale-sets.md` | Deploy runner scale sets with actions runner controller, and use advanced configuration options to tailor actions runner controller to your... |
| `use-arc-in-a-workflow.md` | Use actions runner controller runners in a workflow file. |

### how-tos/manage-workflow-runs/ (11 files)

| File | Description |
|------|-------------|
| `approve-runs-from-forks.md` | You can manually approve workflow runs triggered by a contributor's pull request. |
| `cancel-a-workflow-run.md` | You can cancel a workflow run, including all jobs and steps, that is in progress. |
| `delete-a-workflow-run.md` | You can delete a workflow run that has been completed, or is more than two weeks old. |
| `disable-and-enable-workflows.md` | You can disable and re-enable a workflow using the GitHub UI, the REST API, or GitHub CLI. |
| `download-workflow-artifacts.md` | You can download archived artifacts before they automatically expire. |
| `index.md` | You can manually interact with workflow runs to ensure they run effectively. |
| `manage-caches.md` | You can monitor, filter, and delete dependency caches created from your workflows. |
| `manually-run-a-workflow.md` | When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the Actions tab on GitHub, GitHub... |
| `re-run-workflows-and-jobs.md` | You can re-run a workflow run, all failed jobs in a workflow run, or specific jobs in a workflow run up to 30 days after its initial run. |
| `remove-workflow-artifacts.md` | You can reclaim used GitHub Actions storage by deleting artifacts before they expire on github. |
| `skip-workflow-runs.md` | You can skip workflow runs triggered by the `push` and `pull_request` events by including a command in your commit message. |

### how-tos/monitor-workflows/ (8 files)

| File | Description |
|------|-------------|
| `add-a-status-badge.md` | You can display a status badge in your repository to indicate the status of your workflows. |
| `enable-debug-logging.md` | If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable... |
| `index.md` | You can monitor GitHub Actions workflows by using tools like the visualization graph and run logs. |
| `use-the-visualization-graph.md` | Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug workflows. |
| `use-workflow-run-logs.md` | You can view, search, and download the logs for each job in a workflow run. |
| `view-job-condition-logs.md` | Learn how to access and interpret expression evaluation logs for job-level `if` conditions in GitHub Actions. |
| `view-job-execution-time.md` | You can view the execution time of a job, including the billable minutes that a job accrued. |
| `view-workflow-run-history.md` | You can view logs for each run of a workflow. Logs include the status for each job and step in a workflow. |

### how-tos/reuse-automations/ (6 files)

| File | Description |
|------|-------------|
| `create-workflow-templates.md` | Learn how you can create workflow templates to help people in your team add new workflows more easily. |
| `index.md` | Create modular automations that you can share and reuse across GitHub Actions workflows. |
| `reuse-workflows.md` | Learn how to avoid duplication when creating a workflow by reusing existing workflows. |
| `share-across-private-repositories.md` | You can share an action or reusable workflow without publishing them publicly. |
| `share-with-your-enterprise.md` | You can share an action or reusable workflow with your enterprise without publishing the action or workflow publicly. |
| `share-with-your-organization.md` | You can share an action or reusable workflow with your organization without publishing the action or workflow publicly. |

### how-tos/secure-your-work/ (1 files)

| File | Description |
|------|-------------|
| `lock-workflow-dependencies.md` | Generate a lockfile that pins every action your workflows use to a verified commit, and keep it current as your dependencies change. |

### how-tos/secure-your-work/security-harden-deployments/ (11 files)

| File | Description |
|------|-------------|
| `index.md` | Use OpenID Connect within your workflows to authenticate with your cloud provider. |
| `oidc-in-aws.md` | Use OpenID Connect within your workflows to authenticate with Amazon Web Services. |
| `oidc-in-azure.md` | Use OpenID Connect within your workflows to authenticate with Azure. |
| `oidc-in-cloud-providers.md` | Use OpenID Connect within your workflows to authenticate with cloud providers. |
| `oidc-in-docker.md` | Use OpenID Connect within your workflows to authenticate with Docker without storing long-lived credentials. |
| `oidc-in-google-cloud-platform.md` | Use OpenID Connect within your workflows to authenticate with Google Cloud Platform. |
| `oidc-in-hashicorp-vault.md` | Use OpenID Connect within your workflows to authenticate with HashiCorp Vault. |
| `oidc-in-jfrog.md` | Use OpenID Connect within your workflows to authenticate with JFrog. |
| `oidc-in-octopus-deploy.md` | Use OpenID Connect within your workflows to authenticate with Octopus Deploy. |
| `oidc-in-pypi.md` | Use OpenID Connect within your workflows to authenticate with PyPI. |
| `oidc-with-reusable-workflows.md` | You can use reusable workflows with OIDC to standardize and security harden your deployment steps. |

### how-tos/secure-your-work/use-artifact-attestations/ (5 files)

| File | Description |
|------|-------------|
| `enforce-artifact-attestations.md` | Use an admission controller to enforce artifact attestations in your Kubernetes cluster. |
| `increase-security-rating.md` | Building software with reusable workflows and artifact attestations can streamline your supply chain security and help you achieve SLSA... |
| `manage-attestations.md` | Search for and delete attestations that you no longer need. |
| `use-artifact-attestations.md` | Artifact attestations enable you to increase the supply chain security of your builds by establishing where and how your software was built. |
| `verify-attestations-offline.md` | Artifact attestations can be verified without an internet connection. |

### how-tos/write-workflows/ (1 files)

| File | Description |
|------|-------------|
| `use-workflow-templates.md` | github provides workflow templates for a variety of languages and tooling. |

### how-tos/write-workflows/choose-what-workflows-do/ (11 files)

| File | Description |
|------|-------------|
| `add-scripts.md` | You can use GitHub Actions workflows to run scripts. |
| `deploy-to-environment.md` | Specify a deployment environment in your workflow. |
| `find-and-customize-actions.md` | You can use and customize pre-written actions to power your workflow. |
| `index.md` | Workflows automate tasks in your software development lifecycle. Many tasks that you manually complete can be converted to a GitHub Actions... |
| `pass-job-outputs.md` | You can define outputs to pass information from one job to another. |
| `run-job-variations.md` | Create a matrix to define variations for each job. |
| `set-default-values-for-jobs.md` | Define the default settings that will apply to all jobs in the workflow, or all steps in a job. |
| `use-github-cli.md` | You can script with GitHub CLI in GitHub Actions workflows. |
| `use-jobs.md` | Use workflows to run multiple jobs. |
| `use-secrets.md` | Learn how to create secrets at the repository, environment, and organization levels for GitHub Actions workflows. |
| `use-variables.md` | GitHub sets default variables for each GitHub Actions workflow run. You can also set custom variables for use in a single workflow or... |

### how-tos/write-workflows/choose-when-workflows-run/ (3 files)

| File | Description |
|------|-------------|
| `control-jobs-with-conditions.md` | Prevent a job from running unless your conditions are met. |
| `control-workflow-concurrency.md` | Manage which workflows and jobs can run simultaneously. |
| `trigger-a-workflow.md` | How to automatically trigger GitHub Actions workflows |

### how-tos/write-workflows/choose-where-workflows-run/ (2 files)

| File | Description |
|------|-------------|
| `choose-the-runner-for-a-job.md` | Define the type of machine that will process a job in your workflow. |
| `run-jobs-in-a-container.md` | Use a container to run the steps in a job. |

### reference/ (1 files)

| File | Description |
|------|-------------|
| `limits.md` | There are limits in GitHub Actions which you may hit as you scale up, some may be increased by contacting support. |

### reference/github-actions-importer/ (2 files)

| File | Description |
|------|-------------|
| `custom-transformers.md` | actions importer offers the ability to extend its built-in mapping. |
| `supplemental-arguments-and-settings.md` | actions importer has several supplemental arguments and settings to tailor the migration process to your needs. |

### reference/runners/ (3 files)

| File | Description |
|------|-------------|
| `github-hosted-runners.md` | Find information about github-hosted runners, including their specifications and customization options. |
| `larger-runners.md` | Find information about larger runners, including their specifications and customization options. |
| `self-hosted-runners.md` | Find information about setting up and using self-hosted runners. |

### reference/security/ (4 files)

| File | Description |
|------|-------------|
| `oidc.md` | Find information about using OpenID Connect (OIDC) to authenticate GitHub Actions workflows with cloud providers. |
| `secrets.md` | Find technical information about secrets in GitHub Actions. |
| `secure-use.md` | Security practices for writing workflows and using GitHub Actions features. |
| `securely-using-pull_request_target.md` | Learn about the security risks of the `pull_request_target` event. |

### reference/workflows-and-actions/ (12 files)

| File | Description |
|------|-------------|
| `contexts.md` | Find information about contexts available in GitHub Actions workflows, including available properties, access methods, and usage examples. |
| `dependency-caching.md` | Find information on the functionality of dependency caching in workflows. |
| `deployments-and-environments.md` | Find information about deployment protection rules, environment secrets, and environment variables. |
| `dockerfile-support.md` | When creating a `Dockerfile` for a Docker container action, you should be aware of how some Docker instructions interact with GitHub... |
| `events-that-trigger-workflows.md` | You can configure your workflows to run when specific activity on github happens, at a scheduled time, or when an event outside of github... |
| `expressions.md` | Find information for expressions in GitHub Actions. |
| `metadata-syntax.md` | You can create actions to perform tasks in your repository. If you're making a custom action, it will require a metadata file that uses... |
| `reusing-workflow-configurations.md` | Find information about avoiding duplication when creating a workflow by reusing existing workflows and using YAML anchors and aliases. |
| `variables.md` | Find information for supported variables, naming conventions, limits, and contexts in GitHub Actions workflows. |
| `workflow-cancellation.md` | Find information on the steps GitHub takes to cancel a workflow run. |
| `workflow-commands.md` | You can use workflow commands when running shell commands in a workflow or in an action's code. |
| `workflow-syntax.md` | A workflow is a configurable automated process made up of one or more jobs. You must create a YAML file to define your workflow... |

### tutorials/ (6 files)

| File | Description |
|------|-------------|
| `authenticate-with-github_token.md` | Learn how to use the `GITHUB_TOKEN` to authenticate on behalf of GitHub Actions. |
| `create-an-example-workflow.md` | In this tutorial, you'll learn how to create a basic workflow that is triggered by a push event. |
| `develop-agentic-workflows-in-github-actions.md` | Use github agentic workflows to turn Markdown instructions into automations powered by third-party coding agents. |
| `index.md` | Build skills and knowledge about GitHub Actions through hands-on activities. |
| `migrate-to-github-runners.md` | Learn how to assess your current CI infrastructure and migrate workflows from self-hosted runners to github-hosted runners. |
| `store-and-share-data.md` | Use artifacts to share data between jobs in a workflow and store data once that workflow has completed. |

### tutorials/build-and-test-code/ (13 files)

| File | Description |
|------|-------------|
| `go.md` | Learn how to create a continuous integration (CI) workflow to build and test your Go project. |
| `index.md` | You can automatically build and test your projects with GitHub Actions. |
| `java-with-ant.md` | Learn how to create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Ant. |
| `java-with-gradle.md` | Learn how to create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Gradle. |
| `java-with-maven.md` | Learn how to create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Maven. |
| `net.md` | Learn how to create a continuous integration (CI) workflow to build and test your .NET project. |
| `nodejs.md` | Learn how to create a continuous integration (CI) workflow to build and test your Node.js project. |
| `powershell.md` | Learn how to create a continuous integration (CI) workflow to build and test your PowerShell project. |
| `python.md` | Learn how to create a continuous integration (CI) workflow to build and test your Python project. |
| `ruby.md` | You can create a continuous integration (CI) workflow to build and test your Ruby project. |
| `rust.md` | Learn how to create a continuous integration (CI) workflow to build and test your Rust project. |
| `swift.md` | Learn how to create a continuous integration (CI) workflow to build and test your Swift project. |
| `xamarin-apps.md` | Learn how to create a continuous integration (CI) workflow in GitHub Actions to build and test your Xamarin application. |

### tutorials/create-actions/ (2 files)

| File | Description |
|------|-------------|
| `create-a-composite-action.md` | In this tutorial, you'll learn how to build a composite action. |
| `create-a-javascript-action.md` | In this tutorial, you'll learn how to build a JavaScript action using the actions toolkit. |

### tutorials/manage-your-work/ (5 files)

| File | Description |
|------|-------------|
| `add-comments-with-labels.md` | You can use GitHub Actions to automatically comment on issues when a specific label is applied. |
| `add-labels-to-issues.md` | You can use GitHub Actions to automatically label issues. |
| `close-inactive-issues.md` | You can use GitHub Actions to comment on or close issues that have been inactive for a certain period of time. |
| `index.md` | You can automatically manage your issues and pull requests using GitHub Actions workflows. |
| `schedule-issue-creation.md` | You can use GitHub Actions to create an issue on a regular basis for things like daily meetings or quarterly reviews. |

### tutorials/migrate-to-github-actions/automated-migrations/ (9 files)

| File | Description |
|------|-------------|
| `azure-devops-migration.md` | Learn how to use actions importer to automate the migration of your Azure DevOps pipelines to GitHub Actions. |
| `bamboo-migration.md` | Learn how to use actions importer to automate the migration of your Bamboo pipelines to GitHub Actions. |
| `bitbucket-pipelines-migration.md` | Learn how to use actions importer to automate the migration of your Bitbucket pipelines to GitHub Actions. |
| `circleci-migration.md` | Learn how to use actions importer to automate the migration of your CircleCI pipelines to GitHub Actions. |
| `gitlab-migration.md` | Learn how to use actions importer to automate the migration of your GitLab pipelines to GitHub Actions. |
| `index.md` | Learn how to use actions importer to migrate your CI/CD workflows to GitHub Actions. |
| `jenkins-migration.md` | Learn how to use actions importer to automate the migration of your Jenkins pipelines to GitHub Actions. |
| `travis-ci-migration.md` | Learn how to use actions importer to automate the migration of your Travis CI pipelines to GitHub Actions. |
| `use-github-actions-importer.md` | Use actions importer to plan and automate your migration to GitHub Actions. |

### tutorials/migrate-to-github-actions/manual-migrations/ (6 files)

| File | Description |
|------|-------------|
| `index.md` | Learn how to manually migrate your existing CI/CD workflows to GitHub Actions. |
| `migrate-from-azure-pipelines.md` | GitHub Actions and Azure Pipelines share several configuration similarities, which makes migrating to GitHub Actions relatively... |
| `migrate-from-circleci.md` | GitHub Actions and CircleCI share several similarities in configuration, which makes migration to GitHub Actions relatively straightforward. |
| `migrate-from-gitlab-cicd.md` | GitHub Actions and GitLab CI/CD share several configuration similarities, which makes migrating to GitHub Actions relatively... |
| `migrate-from-jenkins.md` | GitHub Actions and Jenkins share multiple similarities, which makes migration to GitHub Actions relatively straightforward. |
| `migrate-from-travis-ci.md` | GitHub Actions and Travis CI share multiple similarities, which helps make it relatively straightforward to migrate to GitHub Actions. |

### tutorials/publish-packages/ (4 files)

| File | Description |
|------|-------------|
| `publish-docker-images.md` | In this tutorial, you'll learn how to publish Docker images to a registry, such as Docker Hub or GitHub Packages, as part of your... |
| `publish-java-packages-with-gradle.md` | In this tutorial, you'll learn how to use Gradle to publish Java packages to a registry as part of your continuous integration (CI)... |
| `publish-java-packages-with-maven.md` | In this tutorial, you'll learn how to use Maven to publish Java packages to a registry as part of your continuous integration (CI) workflow. |
| `publish-nodejs-packages.md` | In this tutorial, you'll learn how to publish Node.js packages to a registry as part of your continuous integration (CI) workflow. |

### tutorials/use-actions-runner-controller/ (3 files)

| File | Description |
|------|-------------|
| `get-started.md` | In this tutorial, you'll try out the basics of actions runner controller. |
| `index.md` | You can use actions runner controller to host your own runners in a Kubernetes cluster. |
| `troubleshoot.md` | Learn how to troubleshoot actions runner controller errors. |

### tutorials/use-containerized-services/ (5 files)

| File | Description |
|------|-------------|
| `create-a-docker-container-action.md` | In this tutorial, you'll learn how to build a Docker container action. |
| `create-postgresql-service-containers.md` | You can create a PostgreSQL service container to use in your workflow. This guide shows examples of creating a PostgreSQL service for jobs... |
| `create-redis-service-containers.md` | You can use service containers to create a Redis client in your workflow. This guide shows examples of creating a Redis service for jobs... |
| `index.md` | You can use containerized services in your GitHub Actions workflows. |
| `use-docker-service-containers.md` | Learn how to use Docker service containers to connect databases, web services, memory caches, and other tools to your workflow. |
