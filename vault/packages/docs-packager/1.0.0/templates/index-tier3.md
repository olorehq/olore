# Tier 3 INDEX.md Template

Use for large documentation sets (> 100 files).

## Template

```markdown
# {name} Documentation Index
{file_count} files | Paths relative to contents/
@section1:keyword1,keyword2=path/to/quickstart.md;keyword3,keyword4=path/to/installation.md
@section2:keyword5,keyword6,keyword7=api/client.md;keyword8,keyword9=api/methods/
@section3:keyword10,keyword11=config/options.md;keyword12,keyword13=config/
{... 8-15 @section lines, 80-120 most important entry points ...}
```

Example (from Prisma, abbreviated):

```markdown
# Prisma Documentation Index
438 files | Paths relative to contents/
@start:quickstart,installation,setup,init=100-getting-started/;prisma-orm,quickstart=100-getting-started/02-prisma-orm/
@schema:schema,datasource,generator,prisma-schema=200-orm/100-prisma-schema/;introspection,db-pull=200-orm/100-prisma-schema/50-introspection.mdx
@queries:crud,create,update,delete,upsert=200-orm/200-prisma-client/100-queries/030-crud.mdx;select,include,omit=200-orm/200-prisma-client/100-queries/035-select-fields.mdx
@migrate:prisma-migrate,db-push,db-pull=200-orm/300-prisma-migrate/;seeding,seed=200-orm/300-prisma-migrate/300-workflows/10-seeding.mdx
```

## Format Reference

This format is consumed by `olore inject`, which reads lines starting with `@`.

| Delimiter | Separates | Example |
|-----------|-----------|---------|
| `@` | Section name from entries | `@queries:...` |
| `;` | Entries within a section | `crud=file1;select=file2` |
| `=` | Keywords from file path | `crud,create=030-crud.mdx` |
| `,` | Keywords | `crud,create,update` |

- Paths are relative to `contents/` (do NOT include the `contents/` prefix)
- Paths ending in `/` are directories (agent should list then read)
- Paths ending in `.md` or `.mdx` are files (agent reads directly)

## Guidelines

- **SELECTIVE**: include only the 80-120 most important entry points, not every file
- Group into 8-15 sections, one `@section` line per section
- Keywords are actual API names, method names, config keys — not descriptions
- Use directory paths for dense sections: `keywords=api/methods/`
- Prioritize files for:
  - Getting started and installation
  - Common API usage and core methods
  - Configuration and setup
  - Troubleshooting and error handling
  - Migration guides
- Deprioritize:
  - Niche edge-case docs
  - Internal implementation details
  - Rarely-used API surfaces
- Extract keywords from headings, code blocks, and function/method names
- Aim for 2-5 keywords per entry
- Section names should be short topic labels (e.g., `models`, `queries`, `auth`)
