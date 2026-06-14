# Audit Log Reference

Mixpanel's Audit Log tracks activity within your organization and projects, providing visibility into who made changes, when they occurred, and what was modified. This page is the authoritative catalog of every event type the Audit Log records.

For an overview of the Audit Log — how to access it in the UI, retention by plan, the CSV export workflow, and FAQ — see the [Audit Log overview](https://docs.mixpanel.com/docs/access-security/audit-log).

The events Mixpanel records are listed below. The **Available Since** date on each event is the first calendar day on which the event is available.

## Events

### Agentic Workflows

| Event Type             | Display Name               | Description                                                                                   | Scope                    | Available Since |
| ---------------------- | -------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ | --------------- |
| `agent_flow.activated` | Agent Automation Activated | An agentic automation was activated.                                                          | Project and organization | June 9, 2026    |
| `agent_flow.created`   | Agent Automation Created   | A new agentic automation was created.                                                         | Project and organization | June 9, 2026    |
| `agent_flow.deleted`   | Agent Automation Deleted   | An agentic automation was deleted.                                                            | Project and organization | June 9, 2026    |
| `agent_flow.paused`    | Agent Automation Paused    | An active agentic automation was paused.                                                      | Project and organization | June 9, 2026    |
| `agent_flow.triggered` | Agent Automation Triggered | An agentic automation run was triggered, either manually or based on the configured schedule. | Project and organization | June 9, 2026    |
| `agent_flow.updated`   | Agent Automation Updated   | An existing agentic automation was updated.                                                   | Project and organization | June 9, 2026    |

### Alerts

| Event Type        | Display Name    | Description                                | Scope                    | Available Since  |
| ----------------- | --------------- | ------------------------------------------ | ------------------------ | ---------------- |
| `alert.created`   | Alert Created   | A new alert was created on a report.       | Project and organization | February 1, 2026 |
| `alert.deleted`   | Alert Deleted   | An alert was removed.                      | Project and organization | February 1, 2026 |
| `alert.updated`   | Alert Modified  | An existing alert's settings were changed. | Project and organization | February 1, 2026 |
| `alert.triggered` | Alert Triggered | An alert condition was met and triggered.  | Project and organization | February 7, 2026 |

### Billing Info

| Event Type                                 | Display Name                        | Description                               | Scope             | Available Since |
| ------------------------------------------ | ----------------------------------- | ----------------------------------------- | ----------------- | --------------- |
| `billing_info.receipt_preferences_updated` | Billing Invoice Preferences Updated | Billing invoice preferences were updated. | Organization only | May 20, 2026    |
| `billing_info.payment_info_updated`        | Billing Payment Information Updated | Billing payment information was modified. | Organization only | May 20, 2026    |
| `billing_info.tax_info_updated`            | Billing Tax Information Updated     | Billing tax information was modified.     | Organization only | May 20, 2026    |

### Boards

| Event Type                    | Display Name                | Description                                       | Scope                    | Available Since |
| ----------------------------- | --------------------------- | ------------------------------------------------- | ------------------------ | --------------- |
| `board.created`               | Board Created               | A new board was created.                          | Project and organization | April 5, 2026   |
| `board.deleted`               | Board Deleted               | A board was permanently removed.                  | Project and organization | April 5, 2026   |
| `board.duplicated`            | Board Duplicated            | A copy of an existing board was created.          | Project and organization | April 5, 2026   |
| `board.exported`              | Board Exported              | Board data was exported.                          | Project and organization | April 5, 2026   |
| `board.shared`                | Board Shared                | A board was shared with users or teams.           | Project and organization | April 5, 2026   |
| `board_subscription.created`  | Board Subscription Created  | A scheduled board email subscription was set up.  | Project and organization | April 5, 2026   |
| `board_subscription.deleted`  | Board Subscription Deleted  | A board subscription was removed.                 | Project and organization | April 5, 2026   |
| `board.unshared`              | Board Unshared              | Sharing access to a board was revoked.            | Project and organization | April 5, 2026   |
| `board.updated`               | Board Updated               | Board settings or content were modified.          | Project and organization | April 5, 2026   |
| `board.public_access_updated` | Public Board Access Updated | Public sharing settings for a board were changed. | Project and organization | April 5, 2026   |

### Cohorts

| Event Type            | Display Name        | Description                                   | Scope                    | Available Since |
| --------------------- | ------------------- | --------------------------------------------- | ------------------------ | --------------- |
| `cohort.created`      | Cohort Created      | A new cohort was created.                     | Project and organization | April 5, 2026   |
| `cohort.deleted`      | Cohort Deleted      | A cohort was removed.                         | Project and organization | April 5, 2026   |
| `cohort.shared`       | Cohort Shared       | A cohort was shared with users or teams.      | Project and organization | April 5, 2026   |
| `cohort_sync.created` | Cohort Sync Created | A new cohort sync integration was configured. | Project and organization | May 20, 2026    |
| `cohort_sync.updated` | Cohort Sync Updated | Cohort sync settings were modified.           | Project and organization | May 20, 2026    |
| `cohort.unshared`     | Cohort Unshared     | Sharing access to a cohort was revoked.       | Project and organization | April 5, 2026   |
| `cohort.updated`      | Cohort Updated      | Cohort criteria or settings were modified.    | Project and organization | April 5, 2026   |

### Custom Roles

| Event Type            | Display Name        | Description                                            | Scope                    | Available Since |
| --------------------- | ------------------- | ------------------------------------------------------ | ------------------------ | --------------- |
| `custom_role.created` | Custom Role Created | A new custom role was created.                         | Project and organization | April 5, 2026   |
| `custom_role.deleted` | Custom Role Deleted | A custom role was deleted.                             | Project and organization | April 5, 2026   |
| `custom_role.updated` | Custom Role Updated | A custom role's permissions or settings were modified. | Project and organization | April 5, 2026   |

### Data Exports

| Event Type                    | Display Name                | Description                               | Scope                    | Available Since |
| ----------------------------- | --------------------------- | ----------------------------------------- | ------------------------ | --------------- |
| `audit_log_export.created`    | Audit Log Export Created    | An audit log export was initiated.        | Project and organization | April 5, 2026   |
| `audit_log_export.downloaded` | Audit Log Export Downloaded | An audit log export file was downloaded.  | Project and organization | April 5, 2026   |
| `event_export.downloaded`     | Events Exported             | Event data was exported from the project. | Project and organization | April 5, 2026   |
| `profile_export.downloaded`   | Profile Data Exported       | User profile data was exported.           | Project and organization | April 5, 2026   |
| `raw_event_export.requested`  | Raw Event Export Requested  | A raw event export was requested.         | Project and organization | May 20, 2026    |
| `user_data_export.created`    | User Data Export Requested  | A user data export request was submitted. | Project and organization | April 5, 2026   |

### Data Management

| Event Type                    | Display Name                 | Description                                                                                                                                                                            | Scope                    | Available Since |
| ----------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------- |
| `event_definition.created`    | Event Definition Created     | A new event definition was created.                                                                                                                                                    | Project and organization | May 20, 2026    |
| `event_definition.deleted`    | Event Definition Deleted     | An event definition was deleted.                                                                                                                                                       | Project and organization | May 20, 2026    |
| `event_definition.updated`    | Event Definition Updated     | An event definition was modified.                                                                                                                                                      | Project and organization | May 20, 2026    |
| `event_deletion.canceled`     | Event Deletion Canceled      | A pending event deletion request was canceled.                                                                                                                                         | Project and organization | April 5, 2026   |
| `event_deletion.created`      | Event Deletion Requested     | A request to delete events was submitted.                                                                                                                                              | Project and organization | April 5, 2026   |
| `profile.deleted`             | Profile Deleted              | A user profile was removed. Only tracked when initiated through the Mixpanel web application. API calls and direct updates using the Mixpanel SDK are not currently logged.            | Project and organization | May 20, 2026    |
| `profile.updated`             | Profile Updated              | A user profile was updated. Only tracked when initiated through the Mixpanel web application. API calls and direct updates using the Mixpanel SDK are not currently logged.            | Project and organization | May 20, 2026    |
| `profile.batch_deleted`       | Profiles Batch Deleted       | A batch of user profiles were removed. Only tracked when initiated through the Mixpanel web application. API calls and direct updates using the Mixpanel SDK are not currently logged. | Project and organization | May 20, 2026    |
| `profile.batch_updated`       | Profiles Batch Updated       | A batch of user profiles were updated. Only tracked when initiated through the Mixpanel web application. API calls and direct updates using the Mixpanel SDK are not currently logged. | Project and organization | May 20, 2026    |
| `property_definition.created` | Property Definition Created  | A new property definition was created.                                                                                                                                                 | Project and organization | May 20, 2026    |
| `property_definition.updated` | Property Definition Updated  | A property definition was modified.                                                                                                                                                    | Project and organization | May 20, 2026    |
| `user_data_deletion.canceled` | User Data Deletion Canceled  | A pending user data deletion request was canceled.                                                                                                                                     | Project and organization | April 5, 2026   |
| `user_data_deletion.created`  | User Data Deletion Requested | A request to delete user profile data was submitted.                                                                                                                                   | Project and organization | April 5, 2026   |

### Data Pipelines

| Event Type              | Display Name          | Description                                 | Scope                    | Available Since |
| ----------------------- | --------------------- | ------------------------------------------- | ------------------------ | --------------- |
| `data_pipeline.created` | Data Pipeline Created | A new data pipeline integration was set up. | Project and organization | April 5, 2026   |
| `data_pipeline.deleted` | Data Pipeline Deleted | A data pipeline was removed.                | Project and organization | April 5, 2026   |
| `data_pipeline.updated` | Data Pipeline Updated | Data pipeline configuration was modified.   | Project and organization | April 5, 2026   |

### Data Views

| Event Type               | Display Name                | Description                               | Scope                    | Available Since |
| ------------------------ | --------------------------- | ----------------------------------------- | ------------------------ | --------------- |
| `workspace.team_added`   | Team Added to Data View     | A team was granted access to a data view. | Project and organization | May 20, 2026    |
| `workspace.team_removed` | Team Removed from Data View | A team's data view access was revoked.    | Project and organization | May 20, 2026    |
| `workspace.user_added`   | User Added to Data View     | A user was granted access to a data view. | Project and organization | May 20, 2026    |
| `workspace.user_removed` | User Removed from Data View | A user's data view access was revoked.    | Project and organization | May 20, 2026    |

### Experiments

| Event Type              | Display Name                 | Description                           | Scope                    | Available Since |
| ----------------------- | ---------------------------- | ------------------------------------- | ------------------------ | --------------- |
| `experiment.archived`   | Experiment Archived          | An experiment was archived.           | Project and organization | May 20, 2026    |
| `experiment.concluded`  | Experiment Concluded         | An experiment was concluded.          | Project and organization | May 20, 2026    |
| `experiment.created`    | Experiment Created           | A new experiment was created.         | Project and organization | May 20, 2026    |
| `experiment.decided`    | Experiment Decision Recorded | A decision was made on an experiment. | Project and organization | May 20, 2026    |
| `experiment.deleted`    | Experiment Deleted           | An experiment was deleted.            | Project and organization | May 20, 2026    |
| `experiment.duplicated` | Experiment Duplicated        | An experiment was duplicated.         | Project and organization | May 20, 2026    |
| `experiment.launched`   | Experiment Launched          | An experiment was launched.           | Project and organization | May 20, 2026    |
| `experiment.restored`   | Experiment Restored          | An archived experiment was restored.  | Project and organization | May 20, 2026    |
| `experiment.updated`    | Experiment Updated           | Experiment settings were modified.    | Project and organization | May 20, 2026    |

### Feature Flags

| Event Type                | Display Name            | Description                            | Scope                    | Available Since |
| ------------------------- | ----------------------- | -------------------------------------- | ------------------------ | --------------- |
| `feature_flag.archived`   | Feature Flag Archived   | A feature flag was archived.           | Project and organization | May 20, 2026    |
| `feature_flag.created`    | Feature Flag Created    | A new feature flag was created.        | Project and organization | May 20, 2026    |
| `feature_flag.deleted`    | Feature Flag Deleted    | A feature flag was deleted.            | Project and organization | May 20, 2026    |
| `feature_flag.duplicated` | Feature Flag Duplicated | A feature flag was duplicated.         | Project and organization | May 20, 2026    |
| `feature_flag.restored`   | Feature Flag Restored   | An archived feature flag was restored. | Project and organization | May 20, 2026    |
| `feature_flag.updated`    | Feature Flag Updated    | Feature flag settings were modified.   | Project and organization | May 20, 2026    |

### Organization Settings

| Event Type                                        | Display Name                          | Description                                               | Scope             | Available Since |
| ------------------------------------------------- | ------------------------------------- | --------------------------------------------------------- | ----------------- | --------------- |
| `organization_spark_setting.updated`              | Organization AI Settings Changed      | Organization AI settings were updated.                    | Organization only | May 20, 2026    |
| `organization_setting.updated`                    | Organization Settings Changed         | Organization settings were modified.                      | Organization only | May 20, 2026    |
| `organization_access_security.twofactor_disabled` | Organization Two-Factor Auth Disabled | Organization-wide two-factor authentication was disabled. | Organization only | May 20, 2026    |
| `organization_access_security.twofactor_enabled`  | Organization Two-Factor Auth Enabled  | Organization-wide two-factor authentication was enabled.  | Organization only | May 20, 2026    |

### Project Settings

| Event Type            | Display Name        | Description                                                     | Scope                    | Available Since |
| --------------------- | ------------------- | --------------------------------------------------------------- | ------------------------ | --------------- |
| `project.transferred` | Project Transferred | A project was transferred to a different organization or owner. | Project and organization | May 20, 2026    |

### Reports

| Event Type                       | Display Name                 | Description                                       | Scope                    | Available Since |
| -------------------------------- | ---------------------------- | ------------------------------------------------- | ------------------------ | --------------- |
| `bookmark.deleted`               | Report Deleted               | A saved report was removed.                       | Project and organization | April 5, 2026   |
| `bookmark.moved`                 | Report Moved                 | A saved report was moved to a different location. | Project and organization | May 20, 2026    |
| `bookmark.created`               | Report Saved                 | A new report was saved to a dashboard.            | Project and organization | April 5, 2026   |
| `bookmark.screenshot_downloaded` | Report Screenshot Downloaded | A screenshot of a report was downloaded.          | Project and organization | May 20, 2026    |
| `bookmark.updated`               | Report Updated               | A saved report's configuration was changed.       | Project and organization | April 5, 2026   |

### Service Accounts

| Event Type                             | Display Name                         | Description                                            | Scope                    | Available Since |
| -------------------------------------- | ------------------------------------ | ------------------------------------------------------ | ------------------------ | --------------- |
| `service_account.added_to_project`     | Service Account Added to Project     | A service account was granted access to a project.     | Project and organization | April 5, 2026   |
| `service_account.created`              | Service Account Created              | A new service account was created.                     | Organization only        | April 5, 2026   |
| `service_account.deleted`              | Service Account Deleted              | A service account was removed.                         | Organization only        | April 5, 2026   |
| `service_account.removed_from_project` | Service Account Removed from Project | A service account's project access was revoked.        | Project and organization | April 5, 2026   |
| `service_account.role_changed`         | Service Account Role Changed         | A service account's role or permissions were modified. | Project and organization | April 5, 2026   |

### Teams

| Event Type                     | Display Name                      | Description                                | Scope             | Available Since |
| ------------------------------ | --------------------------------- | ------------------------------------------ | ----------------- | --------------- |
| `team.service_account_added`   | Service Account Added to Team     | A service account was added to a team.     | Organization only | May 20, 2026    |
| `team.service_account_removed` | Service Account Removed from Team | A service account was removed from a team. | Organization only | May 20, 2026    |
| `team.created`                 | Team Created                      | A new team was created.                    | Organization only | May 20, 2026    |
| `team.deleted`                 | Team Deleted                      | A team was deleted.                        | Organization only | May 20, 2026    |
| `team.updated`                 | Team Updated                      | Team settings were modified.               | Organization only | May 20, 2026    |
| `team.user_added`              | User Added to Team                | A user was added to a team.                | Organization only | May 20, 2026    |
| `team.user_removed`            | User Removed from Team            | A user was removed from a team.            | Organization only | May 20, 2026    |

### User Authentication

| Event Type               | Display Name                 | Description                                       | Scope             | Available Since |
| ------------------------ | ---------------------------- | ------------------------------------------------- | ----------------- | --------------- |
| `user.twofactor_enabled` | User Enabled Two-Factor Auth | A user activated two-factor authentication.       | Organization only | April 5, 2026   |
| `session.logged_in`      | User Logged In               | A user successfully logged into the organization. | Organization only | April 5, 2026   |
| `session.logged_out`     | User Logged Out              | A user logged out of the organization.            | Organization only | April 5, 2026   |
| `session.login_failed`   | User Login Failed            | A user login attempt failed.                      | Organization only | May 20, 2026    |

### User Management

| Event Type                       | Display Name                   | Description                                            | Scope                    | Available Since |
| -------------------------------- | ------------------------------ | ------------------------------------------------------ | ------------------------ | --------------- |
| `invitation.accepted`            | Accepted Invitation            | A user accepted an invitation to the organization.     | Organization only        | May 20, 2026    |
| `project.default_access_granted` | Default Project Access Granted | Default access for all users to a project was granted. | Project and organization | May 20, 2026    |
| `project.default_access_revoked` | Default Project Access Revoked | Default access for all users to a project was revoked. | Project and organization | May 20, 2026    |
| `invitation.sent`                | Invited User to Organization   | An invitation was sent to a new user.                  | Organization only        | May 20, 2026    |
| `project.team_added`             | Team Added to Project          | A team was granted access to a project.                | Project and organization | May 20, 2026    |
| `project.team_removed`           | Team Removed from Project      | A team's project access was revoked.                   | Project and organization | May 20, 2026    |
| `organization.user_added`        | User Added to Organization     | A user was added to the organization.                  | Organization only        | May 20, 2026    |
| `project.user_added`             | User Added to Project          | A user was granted access to a project.                | Project and organization | May 20, 2026    |
| `organization.user_removed`      | User Removed from Organization | A user was removed from the organization.              | Organization only        | May 20, 2026    |
| `project.user_removed`           | User Removed from Project      | A user's project access was revoked.                   | Project and organization | May 20, 2026    |
| `user.role_changed`              | User Role Changed              | A user's role or permissions were modified.            | Project and organization | May 20, 2026    |

### Warehouse Sources

| Event Type                      | Display Name                  | Description                                       | Scope                    | Available Since |
| ------------------------------- | ----------------------------- | ------------------------------------------------- | ------------------------ | --------------- |
| `warehouse_source.created`      | Warehouse Source Created      | A new warehouse data source was connected.        | Project and organization | April 5, 2026   |
| `warehouse_source.deleted`      | Warehouse Source Deleted      | A warehouse source connection was removed.        | Project and organization | April 5, 2026   |
| `warehouse_source_sync.created` | Warehouse Source Sync Created | A warehouse source sync job was created.          | Project and organization | May 20, 2026    |
| `warehouse_source_sync.deleted` | Warehouse Source Sync Deleted | A warehouse source sync job was deleted.          | Project and organization | May 20, 2026    |
| `warehouse_source_sync.updated` | Warehouse Source Sync Updated | Warehouse source sync configuration was modified. | Project and organization | May 20, 2026    |
| `warehouse_source.updated`      | Warehouse Source Updated      | Warehouse source configuration was changed.       | Project and organization | April 5, 2026   |
