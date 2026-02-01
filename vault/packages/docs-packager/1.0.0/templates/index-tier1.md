# Tier 1 INDEX.md Template

Use for small documentation sets (< 30 files).

## Template

```markdown
# {name} Documentation Index
{file_count} files | Paths relative to contents/
@section1:keyword1,keyword2,keyword3=path/to/file1.md;keyword4,keyword5=path/to/file2.md
@section2:keyword6,keyword7=path/to/file3.md;keyword8,keyword9,keyword10=path/to/file4.md
```

Example (from a real package):

```markdown
# Zod Documentation Index
17 files | Paths relative to contents/
@start:quickstart,installation,setup=getting-started.md;overview,intro=overview.md
@schema:string,number,boolean,object,array=primitives.md;enum,literal,union=types.md
@validation:parse,safeParse,refine,transform=validation.md;error,ZodError=errors.md
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

- List ALL files (small enough to include every file)
- Group into 2-5 sections, one `@section` line per section
- Keywords are actual API names, method names, config keys — not descriptions
- Extract keywords from headings, code blocks, and function/method names in each file
- Aim for 2-5 keywords per entry, prioritizing the most specific terms
- Section names should be short topic labels (e.g., `start`, `api`, `config`)
