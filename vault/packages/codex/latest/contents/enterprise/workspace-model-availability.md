# Workspace model availability

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

The models available to someone depend on the product surface and how they
signed in. A model setting in your ChatGPT workspace doesn't automatically
apply to Codex in the ChatGPT desktop app, Codex CLI, the IDE extension, Codex
cloud, or the OpenAI API.

For the complete administration model, see
[Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions).

## Identify the model boundary

| Product or authentication boundary                                                         | Model access follows                                                                                  | Current source                                                                                                                |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ChatGPT workspace                                                                          | The workspace plan, member access, workspace settings, and supported role permissions                 | [ChatGPT Enterprise and Edu models and limits](https://help.openai.com/en/articles/11165333-chatgpt-enterprise-models-limits) |
| Codex in the ChatGPT desktop app, Codex CLI, and IDE extension with ChatGPT sign-in        | Models supported by the specific client and the access available to the signed-in ChatGPT identity    | [Codex models](https://learn.chatgpt.com/docs/models) and current workspace guidance                                                                  |
| Codex cloud                                                                                | Models supported by hosted Codex workflows and the access available to the signed-in ChatGPT identity | [Codex models](https://learn.chatgpt.com/docs/models) and [Codex cloud](https://learn.chatgpt.com/docs/cloud)                                                                 |
| Codex in the ChatGPT desktop app, Codex CLI, and IDE extension with API-key authentication | The OpenAI API organization and project associated with the key                                       | [Authentication](https://learn.chatgpt.com/docs/auth) and the [OpenAI API Platform](https://platform.openai.com/docs/overview)                        |

Check the current source for the surface the user is actually using. Don't
copy a model catalog or assume that a ChatGPT model-picker setting has the same
effect for Codex in the ChatGPT desktop app, Codex CLI, IDE extension, Codex
cloud, and the API Platform.

## Set a clear starting experience for employees

Configure [Models settings](https://help.openai.com/en/articles/8411955) for your
workspace before granting access. Workspace owners and admins can
configure separate starting defaults for Chat and for Work and Codex. Where
supported, choose a starting model, reasoning level, speed, and new-chat
behavior for Chat, Work, and local Codex surfaces.

Treat these choices as defaults, not permissions. Available models still depend
on the member's seat, role, workspace or API identity, enforced workspace
requirements, and the specific surface they're using. Starting defaults don't
grant access to unavailable models or override those requirements. Codex cloud
doesn't support changing its default model.

Fast mode availability depends on the workspace, product surface, and any
enforced `features.fast_mode` setting in
[`requirements.toml`](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml).
This setting can pin Fast mode on or off for managed local Codex clients; it
isn't a starting default and can't override workspace or product availability.

## Save Preview and Launch access

Where separate Preview and Launch access settings are visible and editable,
select **Save changes** to save your choices.

If **Sync preview and launch access** is available and editable, turn it on to
copy your Preview choices to Launch when you save. Sync runs when you save;
it doesn't continuously update Launch access. Turning optional Sync off and
saving keeps the latest saved Launch choices unless you also edit them. You
can edit and save Launch choices separately with Sync off.

After a successful save, reopen the access settings to verify the saved choices.
If the page reports that it couldn't save all changes, some changes may
already be saved. Follow the on-screen guidance to review and save the
remaining changes.

## GPT-6 Sol and Luna in Enterprise

GPT-6 Sol and GPT-6 Luna are off by default in Enterprise workspaces at
launch. An administrator must enable each model before members can select
it. Review your [workspace model settings](https://help.openai.com/en/articles/8411955)
and confirm access on each client. Choosing a model in local configuration
doesn't override workspace controls.

## GPT-6.1 Sol in Enterprise

GPT-6.1 Sol has its own planned rollout. The plan keeps it off by default in
Enterprise and Edu until an administrator enables it.
Check your [workspace model settings](https://help.openai.com/en/articles/8411955)
and the [Codex model rollout](https://learn.chatgpt.com/docs/models#gpt-61-sol) before changing a
workspace default. Choosing a model in local configuration doesn't grant access.

## GPT-6 Astra in Enterprise

Astra is off by default at launch in eligible ChatGPT Enterprise and Edu
workspaces. A workspace owner must enable access through workspace model
settings. Access does not automatically turn on after two weeks.
Existing Early Model Access settings do not grant access to Astra.
Workspace owners can enable Astra for the workspace or specific roles across
Chat, Work, and Codex. Existing product eligibility still applies. Review your
[workspace model settings](https://help.openai.com/en/articles/8411955) and
confirm availability on each client your users rely on.

Enabling access and choosing a starting model are separate decisions. Check the
applicable seat, role, and billing arrangement before setting Astra as a default.
See [pricing](https://learn.chatgpt.com/docs/pricing) for allowance and billing
guidance and [safety monitoring](https://learn.chatgpt.com/docs/agent-approvals-security#safety-monitoring-and-paused-tasks)
for tasks that pause for review.

For API-key sign-in, Astra access follows the API organization and project
associated with the key. Enabling Astra in a ChatGPT workspace doesn't grant
API access. Early access with an API key also requires client configuration;
ask your OpenAI account team for setup instructions. Selecting a
model or changing local configuration doesn't grant access by itself.

## Prepare for the GPT-5.5 retirement

GPT-5.5 retires from Codex with ChatGPT sign-in on October 14, 2026, at noon
PDT (19:00 UTC). The OpenAI API and Codex sessions authenticated with an API
key aren't affected.

Review Codex workspace defaults and choose an available replacement. Choose
`gpt-6.1-sol` (GPT-6.1 Sol) once an administrator has enabled it for the
affected users. Replace `gpt-5.5` in workspace defaults,
saved model settings, managed configurations, custom agents, and scheduled
tasks. Check scripts and commands that explicitly select `gpt-5.5` too.

Changing a default doesn't grant model access. Confirm that the replacement
is available to the affected users on each client. See
[Codex models](https://learn.chatgpt.com/docs/models#gpt-55-retirement) and
[managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)
for migration guidance.

## Prepare for the GPT-5.4 retirement

GPT-5.4 and GPT-5.4 mini retired from Codex for users signed in with ChatGPT
on August 31, 2026. Update any remaining workspace defaults, saved model
settings, managed configurations, custom agents, and scheduled tasks with
models available to the affected users' plans and clients:

- Replace `gpt-5.4` with `gpt-6-sol` (GPT-6 Sol) when available.
- Replace `gpt-5.4-mini` with `gpt-6-luna` (GPT-6 Luna) when available. In
  Enterprise and Edu, an administrator must enable Luna first.

The OpenAI API and Codex authenticated with your own API key aren't affected.
See [Codex models](https://learn.chatgpt.com/docs/models#deprecated-codex-models) and
[managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)
for migration details.

## Separate access from runtime permissions

Model access determines whether a model is available to the authenticated user
on a supported surface. Local permission profiles and managed requirements
determine what an agent can do after a local run starts, such as which files it
can change or which network destinations it can reach.

A permission profile can't grant model access. Model access also can't weaken
the sandbox, approval policy, network controls, or source-system permissions
that apply to a run.

## Troubleshoot model access

If a user can't select an expected model:

- Confirm the product surface and sign-in method.
- Confirm the ChatGPT workspace or Platform API organization and project.
- Review the current access controls for that authentication boundary.
- Check whether the selected local client or Codex cloud supports the model.

## Current sources

- [ChatGPT Enterprise and Edu models and limits](https://help.openai.com/en/articles/11165333-chatgpt-enterprise-models-limits)
- [Manage workspace settings](https://help.openai.com/en/articles/8411955)
- [Role-based access control](https://help.openai.com/en/articles/11750701-rbac)
- [Codex models](https://learn.chatgpt.com/docs/models)
- [Codex feature availability by plan](https://learn.chatgpt.com/docs/pricing#feature-availability)
- [Authentication](https://learn.chatgpt.com/docs/auth)

## Related docs

- [Admin rollout guide](https://learn.chatgpt.com/docs/enterprise/admin-setup)
- [Groups and provisioning](https://learn.chatgpt.com/docs/enterprise/groups-and-provisioning)
- [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions)
- [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)