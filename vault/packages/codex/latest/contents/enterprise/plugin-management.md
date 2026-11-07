# Import and sync plugins from GitHub

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

You can import plugins from GitHub into your workspace and keep them up to date
as the repository changes. A marketplace is a JSON file that lists the plugins
to import.

## Before you begin

You need to be a workspace admin. Use a GitHub account that can read the
marketplace repository and every repository it references. Public and private
GitHub repositories are supported. Complete any access approval required by your
GitHub organization before importing.

Review the repository before you import it. These defaults affect what members
can use:

- New plugins are **Available** for installation. If authentication is required,
  members complete it when they install the plugin.
- The import processes all valid entries. New marketplaces sync automatically
  each day, adding any new plugins from the repository.

This guide covers importing plugins into a workspace. For local clients, see
[Configure plugin marketplaces and defaults](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-plugin-marketplaces-and-defaults)
for cloud-managed or system `config.toml` settings. For a specific project, see
[Enable or disable a plugin for a repo](https://developers.openai.com/plugins/build/plugins#enable-or-disable-a-plugin-for-a-repo).

## Configure a marketplace sync

1. Open **Admin** > **Plugins** and select **Add** > **Import marketplace**.
2. In **Source**, enter the repository URL, such as `https://github.com/example/team-plugins`. Use the repository URL only, without a branch or folder URL.
3. If the marketplace is in a subdirectory, enter that directory in **Path**. For example, use `team-tools` for `team-tools/.agents/plugins/marketplace.json`. Leave **Path** empty for the repository root. Do not enter the manifest filename.
4. Optionally enter a **Branch, tag, or commit**. Leave this empty to use the repository's default branch. A branch lets you receive later updates. A fixed commit keeps the version you selected.
5. Select **Import marketplace** and authorize GitHub access when prompted. The initial import can take up to an hour for especially large marketplaces. Subsequent daily syncs typically take a few minutes.
6. Review **Import results**, then open each imported plugin to configure its installation policy and any required apps.

## Supported formats

The selected directory must contain one of these files:

| File                               | Format                                                               |
| ---------------------------------- | -------------------------------------------------------------------- |
| `.agents/plugins/marketplace.json` | A Codex marketplace with a `plugins` array.                          |
| `.claude-plugin/marketplace.json`  | A Claude-compatible marketplace with a `plugins` array.              |
| `.claude-plugin/plugin.json`       | A standalone Claude plugin, when no marketplace manifest is present. |

In a marketplace, entries can reference native plugins with `.codex-plugin/plugin.json`, Claude-compatible plugins, Agent Plugins 1.0 packages, or supported skill packages.

For a Codex marketplace, use local paths for plugins in the same repository:

```json
{
  "name": "team-plugins",
  "interface": {
    "displayName": "Team plugins"
  },
  "plugins": [
    {
      "name": "team-tools",
      "source": {
        "source": "local",
        "path": "./plugins/team-tools"
      }
    }
  ]
}
```

The path is relative to the selected marketplace root, not to `.agents/plugins/`.

A Claude-compatible marketplace can use a path string for each local plugin:

```json
{
  "name": "team-plugins",
  "plugins": [
    {
      "name": "team-tools",
      "source": "./plugins/team-tools"
    }
  ]
}
```

Codex marketplace entries also support `source: "url"` for a plugin at a GitHub repository root and `source: "git-subdir"` for a plugin in a GitHub subdirectory. For example:

```json
{
  "name": "team-tools",
  "source": {
    "source": "git-subdir",
    "url": "https://github.com/example/team-tools.git",
    "path": "./plugins/team-tools",
    "ref": "main"
  }
}
```

Git sources can select a `ref` or a full 40-character commit `sha`. The authorizing GitHub account must be able to read every referenced repository. Workspace import currently only supports GitHub repositories.

## Configure workspace access

Set each plugin's installation and authentication settings in your workspace.
Import and sync don't apply these settings from the repository. These settings include
`AVAILABLE`, `INSTALLED_BY_DEFAULT`, `NOT_AVAILABLE`, `ON_INSTALL`, and `ON_USE`.
Existing workspace settings stay in place when you sync an update or move a
plugin to GitHub management.

Use **Installation policy** to choose **Available** or **Installed** for each
eligible role. Also enable the apps the plugin needs and check that members have
access to the connected service. Importing a plugin doesn't give members app
access or connect their accounts. See [Plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors)
for help choosing access and action settings.

## Move an existing plugin to GitHub management

Add `pluginId` to the existing plugin's marketplace entry:

```json
{
  "name": "team-tools",
  "pluginId": "plugin_0123456789abcdef0123456789abcdef",
  "source": {
    "source": "local",
    "path": "./plugins/team-tools"
  }
}
```

Open the plugin from **Admin** > **Plugins** and copy the ID after `/plugins/` in its URL. Put `pluginId` beside `name` and `source` in the marketplace entry. The existing plugin must be in the same workspace, and the entry's `name` must match the existing plugin's name.

Use this to move a workspace plugin to GitHub if it isn't already managed there.
The plugin keeps its ID, sharing, and workspace settings. Future updates come
from GitHub, so you can no longer replace it by uploading an archive. You can't
use this method for a plugin already managed by a different GitHub source.

## Desktop-only plugins

Plugins marked **Desktop only** cannot run in ChatGPT on the web. Imported
plugins can receive this label when they declare MCP servers, including servers
with remote HTTPS URLs. Adding an `.app.json` reference does not by itself remove
the label.

## Reference an existing app with `.app.json`

Add `.app.json` at the plugin root. The filename includes a leading dot; `app.json` without the dot is not supported.

```json
{
  "apps": {
    "team-tools": {
      "id": "asdk_app_example",
      "required": true
    }
  }
}
```

Replace `asdk_app_example` with the existing app's ID. Supported app IDs start with `asdk_app_`, `connector_`, or `templated_apps_`. Use the app ID, not a `plugin_...` ID. For example, a plugin URL containing `plugin_asdk_app_example` represents the app `asdk_app_example`.

The key `team-tools` names the reference within this file. Set `required` to `true` when the plugin depends on the app. You can add more entries to reference other existing apps.

For a native plugin, set `apps` to `./.app.json` in `.codex-plugin/plugin.json`. Here is a complete manifest for this example:

```json
{
  "name": "team-tools",
  "version": "1.0.0",
  "description": "Use the team's approved tools.",
  "author": {
    "name": "Example team"
  },
  "apps": "./.app.json",
  "interface": {
    "displayName": "Team tools",
    "shortDescription": "Use approved team tools",
    "longDescription": "Connect to the team's existing app.",
    "developerName": "Example team",
    "category": "Productivity",
    "capabilities": ["Read"]
  }
}
```

Keep the files in this layout:

```text
team-plugins/
├── .agents/plugins/marketplace.json
└── plugins/team-tools/
    ├── .codex-plugin/plugin.json
    └── .app.json
```

This file points to an existing app. It doesn't create an app or give anyone
access. Make the app available to the roles that need it, and ask members to
complete any required authentication. The app's permissions, allowed actions,
and connected-service access still apply.

## Keep plugins up to date

New marketplaces check for updates daily. Open **Admin** > **Plugins** > **Marketplaces**, select the marketplace, and choose **Sync now** to request an update without waiting for automatic sync.

Sync can add new plugins from the marketplace and update existing ones. Review
repository changes before merging them because automatic sync imports new
plugins too.

After each sync, read the status and saved report. A completed sync can still
include errors for individual plugins. If an update is invalid, the existing
plugin keeps its last working version. Fix the problem in GitHub, then select
**Sync now** to try again.

Removing a plugin's entry from the marketplace leaves its workspace copy in
place, marked **No longer in source**. Deleting the marketplace in ChatGPT has a different
effect: it deletes all plugins imported from that marketplace.

## Reconnect or change GitHub access

Marketplace sync uses the GitHub connection of the admin who imported it.

To reconnect, first check that the importing admin's GitHub account can still
read the marketplace repository and every repository it references. That admin
should then open the GitHub plugin in ChatGPT and reconnect their account.

To change owners, the new workspace admin imports the marketplace again from
**Admin** > **Plugins** > **Add** > **Import marketplace**. Use the same **Source**,
**Path**, and **Branch, tag, or commit** values. Future syncs will use the new
admin's GitHub connection.

Keep the marketplace in place when reconnecting or changing owners. Deleting it
also deletes its imported plugins.