# Known Limitations

## HTML Conversion Does Not Work for SPA Sites

The `"convert": "html"` option uses pandoc which only processes static HTML. Sites that render content via JavaScript (React, Angular, etc.) will produce empty files.

**Workaround:** Look for GitHub repos with raw markdown instead of scraping HTML sites.

## Large Repositories

Very large documentation sets may hit context limits. The package-builder agent filters non-useful files, but extremely large repos may still be problematic.

**Workaround:** Use `_source.path` to target a specific subdirectory, or specify `_source.extensions` to limit file types.
