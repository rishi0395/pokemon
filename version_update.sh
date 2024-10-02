#!/bin/bash

set -e  # Stop on any errors

increment_version() {
    local current_version="$1"
    local environment="$2"
    
    IFS='.' read -r -a version_parts <<< "$current_version"
    major="${version_parts[0]}"
    minor="${version_parts[1]}"
    patch="${version_parts[2]}"
    build="${version_parts[3]}"
    
    if [[ $environment == dev || $environment == stage ]]; then
        new_build=$(printf "%03d" $((10#$build + 1)))
        echo "${version_parts[0]}.${version_parts[1]}.${version_parts[2]}.$new_build"
    elif [[ $environment == prod ]]; then
        new_patch=$((patch + 1))
        echo "${version_parts[0]}.${version_parts[1]}.$new_patch"
    else
        echo "Not the right environment"
        exit 1
    fi
}

version_file="version.json"
manifest_file="public/manifest.json"
environment=$1

# Read the version.json file
if [[ ! -f $version_file ]]; then
    echo "version.json file not found"
    exit 1
fi

# Extract current version based on environment
current_version=$(jq -r ".$environment" "$version_file")
if [[ -z $current_version ]]; then
    echo "No $environment version found in $version_file"
    exit 1
fi

# Name wrt environment
name="Clipboard"

if [[ "$environment" != "prod" ]]; then
    name="Clipboard $environment"
else
    name="$name"
fi

# Increment version
new_version=$(increment_version "$current_version" "$environment")

# Update version in the version file
jq ".$environment = \"$new_version\"" "$version_file" > "$version_file.tmp" && mv "$version_file.tmp" "$version_file"

# Update version in the manifest file
jq --arg new_version "$new_version" --arg name "$name" 'del(.key) | .version = $new_version | .name = $name' "$manifest_file" > "$manifest_file.tmp" && mv "$manifest_file.tmp" "$manifest_file"

echo "$new_version"