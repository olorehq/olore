# Tier 2 INDEX.md Template

Use for medium documentation sets (30-100 files).

## Template

```markdown
# {name} Documentation Index
{file_count} files | Paths relative to contents/
@section1:keyword1,keyword2,keyword3=path/to/file1.md;keyword4,keyword5=path/to/file2.md;keyword6,keyword7=path/to/file3.md
@section2:keyword8,keyword9=path/to/file4.md;keyword10,keyword11,keyword12=subdir/;keyword13,keyword14=path/to/file5.md
{... 5-10 @section lines covering ALL files ...}
```

Example (from Drizzle ORM):

```markdown
# Drizzle ORM Documentation Index
240 files | Paths relative to contents/
@start:quickstart,installation,setup,drizzle=get-started.mdx;overview,intro=overview.mdx;quick,quick-start=quick.mdx
@schema:schema,table,pgTable,mysqlTable,sqliteTable=sql-schema-declaration.mdx;integer,serial,text,varchar=column-types/pg.mdx
@queries:select,findMany,where,orderBy=select.mdx;insert,values,returning=insert.mdx;update,set=update.mdx;delete,remove=delete.mdx
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

- List ALL files with keywords
- Group into 5-10 sections, one `@section` line per section
- Keywords are actual API names, method names, config keys — not descriptions
- For directories with many similar files, use directory entries: `keywords=api/methods/`
- Extract keywords from headings, code blocks, and function/method names
- Aim for 2-5 keywords per entry
- Section names should be short topic labels (e.g., `schema`, `queries`, `middleware`)
- Directory entries should list the most important keywords for the group
