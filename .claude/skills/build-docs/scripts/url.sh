#!/bin/bash

# Handler for URL-based sources
# Downloads files from specified URLs, with optional HTML conversion
#
# Usage: Called by download.sh with config file, output dir, and version
#
# Config format:
# {
#     "$schema": "./config.schema.json",
#     "_source": {
#         "type": "url",
#         "convert": "html",        // optional: convert HTML to markdown
#         "_disabled": true,        // optional: skip this config
#         "_reason": "..."          // optional: reason for disabling
#     },
#     "files": {
#         "category-name": {
#             "doc-name": "https://example.com/docs/page.html"
#         }
#     },
#     "versions": {
#         "2.1.0": { "ref": "2.1.0" }
#     }
# }
#
# NOTE: Config files are NEVER modified. Build metadata goes in olore-lock.json.

download_from_urls() {
    local config_file="$1"
    local output_dir="$2"
    local library_version="$3"  # Version to build (required)
    local force="$4"            # --force to re-download existing
    local config_name=$(basename "$config_file" .json)
    local success_count=0
    local fail_count=0
    local failed_urls=""

    # Validate version parameter
    if [ -z "$library_version" ]; then
        echo -e "${RED}Error: Version parameter required${NC}"
        echo "  Usage: /build-docs $config_name@<version>"
        echo "  Example: /build-docs $config_name@2.1.0"
        return 1
    fi

    # Check if config is disabled
    local disabled=$(jq -r '._source._disabled // false' "$config_file")
    if [ "$disabled" = "true" ]; then
        local reason=$(jq -r '._source._reason // "No reason provided"' "$config_file")
        echo -e "${YELLOW}Skipping: $config_name (disabled)${NC}"
        echo -e "  Reason: $reason"
        echo ""
        return 0
    fi

    # Check if version already built (olore-lock.json exists)
    local package_dir="vault/packages/$config_name/$library_version"
    if [ -f "$package_dir/olore-lock.json" ] && [ "$force" != "true" ]; then
        echo -e "${GREEN}$config_name@$library_version: Already built${NC}"
        echo "  Path: $package_dir"
        echo ""
        echo "  Skipping. Use --force to re-download."
        return 0
    fi

    if [ -f "$package_dir/olore-lock.json" ] && [ "$force" = "true" ]; then
        echo -e "${YELLOW}Force re-downloading $library_version...${NC}"
    fi

    # Output directly to vault/packages (final destination)
    local output_dir="vault/packages/$config_name/$library_version"

    # Check if HTML conversion is requested
    local convert=$(jq -r '._source.convert // empty' "$config_file")

    if [ "$convert" = "html" ]; then
        echo -e "${YELLOW}Processing: $config_name@$library_version (URLs with HTML conversion)${NC}"

        # Check for pandoc
        if ! command -v pandoc &> /dev/null; then
            echo -e "  ${RED}Error: pandoc is required for HTML conversion${NC}"
            echo "  Install with:"
            echo "    macOS:  brew install pandoc"
            echo "    Ubuntu: sudo apt install pandoc"
            return 1
        fi
    else
        echo -e "${YELLOW}Processing: $config_name@$library_version (URLs)${NC}"
    fi

    # Use jq to recursively find all string values (URLs) with their paths
    # Read from .files key
    local entries=$(jq -r '
        .files //empty |
        paths(type == "string") as $p |
        "\($p | join("/"))|\(getpath($p))"
    ' "$config_file")

    # Check if there are any entries
    if [ -z "$entries" ]; then
        echo -e "  ${YELLOW}No URLs found in config (missing 'files' key?)${NC}"
        echo ""
        return 0
    fi

    # Clean and create output directory
    rm -rf "$output_dir"
    mkdir -p "$output_dir"

    while IFS='|' read -r doc_path url; do
        [ -z "$doc_path" ] && continue

        # Extract directory path and filename
        local dir_path=$(dirname "$doc_path")
        local doc_name=$(basename "$doc_path")
        local full_dir="$output_dir/contents/$dir_path"
        local output_file="$full_dir/${doc_name}.md"

        mkdir -p "$full_dir"

        echo -n "  Downloading $doc_path... "

        if [ "$convert" = "html" ]; then
            # Download and convert HTML to markdown
            local temp_html=$(mktemp)

            if curl -sSfL --compressed "$url" -o "$temp_html" 2>/dev/null; then
                if pandoc -f html -t markdown -o "$output_file" "$temp_html" 2>/dev/null; then
                    echo -e "${GREEN}OK${NC}"
                    ((success_count++))
                else
                    echo -e "${RED}CONVERSION FAILED${NC}"
                    ((fail_count++))
                    failed_urls="$failed_urls\n  - $url (conversion failed)"
                    rm -f "$output_file"
                fi
            else
                echo -e "${RED}DOWNLOAD FAILED${NC}"
                ((fail_count++))
                failed_urls="$failed_urls\n  - $url"
            fi

            rm -f "$temp_html"
        else
            # Direct download (markdown)
            if curl -sSfL --compressed "$url" -o "$output_file" 2>/dev/null; then
                echo -e "${GREEN}OK${NC}"
                ((success_count++))
            else
                echo -e "${RED}FAILED${NC}"
                ((fail_count++))
                failed_urls="$failed_urls\n  - $url"
                rm -f "$output_file"
            fi
        fi
    done <<< "$entries"

    echo -e "  ${GREEN}Downloaded: $success_count${NC}, ${RED}Failed: $fail_count${NC}"

    if [ $fail_count -gt 0 ]; then
        echo -e "  Failed URLs:$failed_urls"
    fi

    # Write olore-lock.json (package metadata for consumers)
    local timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

    cat > "$output_dir/olore-lock.json" << EOF
{
  "name": "$config_name",
  "version": "$library_version",
  "source": {
    "type": "url",
    "convert": $([ "$convert" = "html" ] && echo "\"html\"" || echo "null")
  },
  "builtAt": "$timestamp",
  "files": $success_count
}
EOF
    echo "  Build metadata written to olore-lock.json"

    # NOTE: Config files are NOT modified - they are read-only intent declarations

    echo ""
}

# Alias for backwards compatibility
download_from_html() {
    download_from_urls "$@"
}
