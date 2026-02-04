---
title: Branching
description:
---

A branch is a separate database instance that is created from an existing database. You can also create a branch from a [point-in-time](/features/point-in-time-recovery) snapshot of a database. Branches are useful for development and testing, because they allow you to make changes to the database without affecting the original database.

## How it works

1. You create a new database from an existing database using the CLI or API.
2. You connect to the new database using the group API token.
3. Make changes to the new schema using a migration tool (optional).
4. Apply the changes to the original database using a migration tool when merging using a GitHub Action (optional).
5. Delete the database when you no longer need it.

## Usage

You can create a new database from an existing database using the CLI or API:

<CodeGroup>

```bash CLI
turso db create my-new-database-branch --from-db my-existing-database
```

```bash Platform API
curl -L -X POST 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases' \
  -H 'Authorization: Bearer TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "new-database",
      "group": "default",
      "seed": {
        "type:": "database",
        "name": "my-existing-database"
      }
  }'
```

</CodeGroup>

Refer to the following references for more details about all arguments:

<CardGroup>

<Card horizontal title="CLI Reference" icon="terminal" href="/cli/db/create">

</Card>

<Card horizontal title="API Reference" icon="code" href="/api-reference/databases/create">

</Card>

</CardGroup>

## Things to know

- Database branches are completely separate from the original database. This means that you need to handle merging any schema changes or data manually using a migration tool.
- You will need to [create a new token](/cli/db/tokens/create) (or use a group token) to connect to the new database.
- You will need to manually delete the database branch when you no longer need it.
- Branches count towards your plan's database quota.

## CI/CD

Automating branching is useful for creating a new database for each pull request. This allows you to test changes without affecting the original database.

Here's an example of what that might look like using the [Platform API](/api-reference/databases/create):

```yml .github/workflows/create-database-branch.yml
name: Create Database
on: create

jobs:
  triggerAPI:
    runs-on: ubuntu-latest
    steps:
      - name: Generate Branch Name
        id: branch_name
        run: |
          BRANCH_NAME=$(echo "${{ github.ref_name }}" | tr -cd '[:alnum:]' | sed 's/./\L&/g' | cut -c 1-32)
          echo "::set-output name=branch_name::$BRANCH_NAME"
      - name: Create Database
        run: |
          curl -X POST \
          -H "Authorization: Bearer ${{ secrets.API_TOKEN }}" \
          -H "Content-Type: application/json" \
          -d '{"name": "${{ steps.branch_name.outputs.branch_name }}", "group": "default", "seed": {"type": "database", "name": "${{ secrets.DATABASE_NAME }}"} }' \
          "https://api.turso.tech/v1/organizations/${{ secrets.ORGANIZATION_NAME }}/databases"
```
