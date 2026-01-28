#!/bin/bash

# Handler for GitHub repository sources
# Uses sparse checkout to only download markdown files
#
# Usage: Called by download.sh with manifest file and optional version
#
# Config format (vault/configs/*.json):
# {
#     "_source": {
#         "type": "github",
#         "repo": "owner/repo-name",
#         "path": "docs",              # Default path for all versions
#         "extensions": [".md", ".mdx"]
#     },
#     "versions": {
#         "16.1.3": { "ref": "v16.1.3" },
#         "16.1.2": { "ref": "v16.1.2", "path": "docs-v2" }  # Override path for this version
#     }
# }
#
# Output: vault/packages/{name}/{version}/
#   ├── olore-lock.json    # Package metadata (for consumers)
#   └── contents/
#       └── *.md
#
# The "ref" field is the exact git ref to checkout (tag, branch, or commit SHA).
# The config file is NOT modified - all metadata goes into olore-lock.json.

# Default exclude patterns for common non-documentation files
DEFAULT_EXCLUDES=(
    "CHANGELOG*"
    "CHANGE_LOG*"
    "CHANGES*"
    "CONTRIBUTING*"
    "LICENSE*"
    "SECURITY*"
    "CODE_OF_CONDUCT*"
    "CODEOWNERS*"
    ".github/**"
    "**/test/**"
    "**/tests/**"
    "**/__tests__/**"
    "**/spec/**"
    "**/fixtures/**"
    "**/node_modules/**"
)

should_exclude() {
    local file="$1"
    local rel_path="$2"
    shift 2
    local patterns=("$@")

    local filename=$(basename "$file")

    for pattern in "${patterns[@]}"; do
        # Check if pattern matches filename or relative path
        if [[ "$filename" == $pattern ]] || [[ "$rel_path" == $pattern ]]; then
            return 0  # Should exclude
        fi

        # Handle glob patterns with **
        if [[ "$pattern" == *"**"* ]]; then
            # Convert ** glob to regex-friendly pattern
            local regex_pattern=$(echo "$pattern" | sed 's/\*\*/.*/g' | sed 's/\*/[^\/]*/g')
            if [[ "$rel_path" =~ $regex_pattern ]]; then
                return 0
            fi
        fi
    done

    return 1  # Should not exclude
}

# Check if a version is already built by looking for olore-lock.json
is_version_built() {
    local package_dir="$1"
    [ -f "$package_dir/olore-lock.json" ]
}

# Download a single version
download_version() {
    local manifest_file="$1"
    local version_label="$2"
    local git_ref="$3"
    local force="$4"
    local version_path_override="$5"  # Optional per-version path override
    local manifest_name=$(basename "$manifest_file" .json)

    # Extract source config
    local repo=$(jq -r '._source.repo' "$manifest_file")
    local default_path=$(jq -r '._source.path // "."' "$manifest_file")
    # Use version-specific path if provided, otherwise fall back to default
    local path="${version_path_override:-$default_path}"
    local extensions=$(jq -r '._source.extensions // [".md", ".mdx"] | .[]' "$manifest_file")
    local custom_excludes=$(jq -r '._source.exclude // [] | .[]' "$manifest_file" 2>/dev/null)
    local no_default_excludes=$(jq -r '._source.noDefaultExcludes // false' "$manifest_file")

    # Build exclude list
    local -a exclude_patterns
    if [ "$no_default_excludes" != "true" ]; then
        exclude_patterns=("${DEFAULT_EXCLUDES[@]}")
    fi
    while IFS= read -r pattern; do
        [ -n "$pattern" ] && exclude_patterns+=("$pattern")
    done <<< "$custom_excludes"

    # Output directory
    local output_dir="vault/packages/$manifest_name/$version_label"

    echo -e "${YELLOW}Downloading: $manifest_name@$version_label${NC}"
    echo "  Repo: github.com/$repo"
    echo "  Ref: $git_ref"
    echo "  Path: $path"

    # Create temp directory for sparse clone
    local temp_dir=$(mktemp -d)
    trap "rm -rf $temp_dir" RETURN

    # Initialize sparse checkout
    echo -n "  Initializing... "
    cd "$temp_dir"

    if ! git init -q 2>/dev/null; then
        echo -e "${RED}FAILED (git init)${NC}"
        return 1
    fi

    git remote add origin "https://github.com/$repo.git" 2>/dev/null
    git config core.sparseCheckout true 2>/dev/null

    # Build sparse-checkout patterns for extensions
    local sparse_file="$temp_dir/.git/info/sparse-checkout"
    for ext in $extensions; do
        if [ "$path" = "." ]; then
            echo "**/*$ext" >> "$sparse_file"
        else
            echo "$path/**/*$ext" >> "$sparse_file"
        fi
    done

    echo -e "${GREEN}OK${NC}"

    # Fetch the specific ref
    echo -n "  Fetching ref '$git_ref'... "
    local fetch_success=false
    local actual_commit=""

    # Try fetching the ref (works for tags, branches, and commits)
    if git fetch --depth 1 origin "$git_ref" -q 2>/dev/null; then
        if git checkout FETCH_HEAD -q 2>/dev/null; then
            fetch_success=true
            actual_commit=$(git rev-parse HEAD 2>/dev/null)
        fi
    fi

    # Fallback: try as a tag
    if [ "$fetch_success" = false ]; then
        if git fetch --depth 1 origin "refs/tags/$git_ref:refs/tags/$git_ref" -q 2>/dev/null; then
            if git checkout "$git_ref" -q 2>/dev/null; then
                fetch_success=true
                actual_commit=$(git rev-parse HEAD 2>/dev/null)
            fi
        fi
    fi

    if [ "$fetch_success" = true ]; then
        echo -e "${GREEN}OK${NC}"
        echo "  Commit: ${actual_commit:0:12}"
    else
        echo -e "${RED}FAILED${NC}"
        echo -e "  ${RED}Could not fetch ref '$git_ref' from github.com/$repo${NC}"
        echo "  Check that the ref exists: https://github.com/$repo/tree/$git_ref"
        cd - > /dev/null
        return 1
    fi

    cd - > /dev/null

    # Determine source path
    local source_path="$temp_dir"
    if [ "$path" != "." ]; then
        source_path="$temp_dir/$path"
    fi

    # Build find command for extensions
    local find_args=()
    local first=true
    for ext in $extensions; do
        if [ "$first" = true ]; then
            find_args+=(-name "*$ext")
            first=false
        else
            find_args+=(-o -name "*$ext")
        fi
    done

    # Find all matching files
    local files=$(find "$source_path" -type f \( "${find_args[@]}" \) 2>/dev/null)
    local total_count=$(echo "$files" | grep -c . || echo 0)

    if [ -z "$files" ] || [ "$total_count" -eq 0 ]; then
        echo -e "  ${YELLOW}No matching files found in '$path'${NC}"
        return 0
    fi

    echo "  Found $total_count files"

    # Create output directory (clean if exists)
    rm -rf "$output_dir"
    mkdir -p "$output_dir"

    # Copy files preserving directory structure
    local success_count=0
    local excluded_count=0

    while IFS= read -r file; do
        [ -z "$file" ] && continue

        local rel_path="${file#$source_path/}"

        if should_exclude "$file" "$rel_path" "${exclude_patterns[@]}"; then
            ((excluded_count++))
            continue
        fi

        local dest_file="$output_dir/contents/$rel_path"
        mkdir -p "$(dirname "$dest_file")"

        if cp "$file" "$dest_file" 2>/dev/null; then
            ((success_count++))
        fi
    done <<< "$files"

    echo -e "  ${GREEN}Copied: $success_count${NC}, Excluded: $excluded_count"

    # Generate olore-lock.json (package metadata for consumers)
    local timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    cat > "$output_dir/olore-lock.json" << EOF
{
  "name": "$manifest_name",
  "version": "$version_label",
  "source": {
    "type": "github",
    "repo": "$repo",
    "ref": "$git_ref",
    "commit": "$actual_commit",
    "path": "$path"
  },
  "builtAt": "$timestamp",
  "files": $success_count
}
EOF
    echo -e "  ${GREEN}Generated olore-lock.json${NC}"
    echo ""
}

download_from_github() {
    local manifest_file="$1"
    local output_dir="$2"
    local target_version="$3"  # Optional: specific version to build
    local force="$4"           # --force to re-download
    local manifest_name=$(basename "$manifest_file" .json)

    # Check if manifest is disabled
    local disabled=$(jq -r '._source._disabled // false' "$manifest_file")
    if [ "$disabled" = "true" ]; then
        local reason=$(jq -r '._source._reason // "No reason provided"' "$manifest_file")
        echo -e "${YELLOW}Skipping: $manifest_name (disabled)${NC}"
        echo "  Reason: $reason"
        echo ""
        return 0
    fi

    # Get all versions from manifest
    local versions=$(jq -r '.versions // {} | keys[]' "$manifest_file" 2>/dev/null)

    if [ -z "$versions" ]; then
        echo -e "${YELLOW}$manifest_name: No versions defined${NC}"
        echo "  Add versions to the config:"
        echo '  "versions": { "1.0.0": { "ref": "v1.0.0" } }'
        echo ""
        return 0
    fi

    # Process versions
    local processed=0
    local skipped=0

    while IFS= read -r version_label; do
        [ -z "$version_label" ] && continue

        # If target version specified, only process that one
        if [ -n "$target_version" ] && [ "$version_label" != "$target_version" ]; then
            continue
        fi

        local version_data=$(jq -r --arg v "$version_label" '.versions[$v]' "$manifest_file")
        local git_ref=$(echo "$version_data" | jq -r '.ref // empty')
        local version_path=$(echo "$version_data" | jq -r '.path // empty')

        if [ -z "$git_ref" ]; then
            echo -e "${YELLOW}$manifest_name@$version_label: Missing 'ref' field, skipping${NC}"
            continue
        fi

        # Check if already built (olore-lock.json exists)
        local package_dir="vault/packages/$manifest_name/$version_label"
        if is_version_built "$package_dir" && [ "$force" != "true" ]; then
            local existing_commit=$(jq -r '.source.commit // "unknown"' "$package_dir/olore-lock.json" 2>/dev/null)
            echo -e "${GREEN}$manifest_name@$version_label: Already built${NC}"
            echo "  Commit: ${existing_commit:0:12}"
            echo "  Use --force to rebuild"
            echo ""
            ((skipped++))
            continue
        fi

        download_version "$manifest_file" "$version_label" "$git_ref" "$force" "$version_path"
        ((processed++))

    done <<< "$versions"

    if [ -n "$target_version" ] && [ $processed -eq 0 ] && [ $skipped -eq 0 ]; then
        echo -e "${RED}Version '$target_version' not found in config${NC}"
        echo "  Available versions: $(echo $versions | tr '\n' ' ')"
        return 1
    fi
}
