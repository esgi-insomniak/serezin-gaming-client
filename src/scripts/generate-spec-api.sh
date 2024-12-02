#!/bin/zsh

# Load the environment variables

source .env

SPEC_FOLDER="libs/api/specifications"
MODEL_FOLDER="libs/api/models"
ENDPOINT_FOLDER="libs/api/endpoints"

# Function to clean up folder while keeping the root-level index.ts
clean_folder() {
    local folder=$1
    echo "Cleaning folder '$folder'..."

    # Delete all files in the root except index.ts
    find "$folder" -maxdepth 1 -type f -not -name 'index.ts' -exec echo "Deleting {}" \; -exec rm {} +

    # Delete everything inside subdirectories
    find "$folder" -mindepth 1 -type d -exec echo "Deleting directory {} and its contents" \; -exec rm -rf {} +

    echo "Folder '$folder' cleaned (except root-level index.ts). ✅"
}

# Clean all folders
clean_folder $SPEC_FOLDER
clean_folder $MODEL_FOLDER
clean_folder $ENDPOINT_FOLDER

# Fetch the latest OpenAPI spec from the Github API repository

curl --output "$ZIP_FILE" \
     "$GITHUB_URL/$BRANCH/swagger-spec.json"

if [ ! -f "$ZIP_FILE" ]; then
    echo "Failed to download the OpenAPI spec. Exiting... ❌"
    exit 1
fi

# Unzip the downloaded file

unzip "$ZIP_FILE" -d "$SPEC_FOLDER" -q -j "*.yaml"