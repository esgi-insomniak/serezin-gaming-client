#!/bin/zsh

# Load the environment variables
source .env.development

# Configuration
SPEC_FOLDER="src/libs/api/specifications"
MODEL_FOLDER="src/libs/api/models"
ENDPOINT_FOLDER="src/libs/api/endpoints"
ZIP_FILE="swagger-spec.zip"

# Function to clean up folder while keeping the root-level identity.store.ts
clean_folder() {
    local folder=$1
    echo "Cleaning folder '$folder'..."

    # Delete all files except any index.* files
    find "$folder" -type f ! -name 'index.*' -exec echo "Deleting {}" \; -exec rm {} +

    # Delete all subdirectories and their contents, except those containing an index.* file
    find "$folder" -type d -not -path "$folder" -exec sh -c '
        for dir; do
            if ! find "$dir" -maxdepth 1 -name "index.*" -print -quit | grep -q .; then
                echo "Deleting directory $dir and its contents";
                rm -rf "$dir";
            fi;
        done
    ' _ {} +

    echo "Folder '$folder' cleaned (all index.* files preserved). ✅"
}

# Clean all folders
clean_folder $SPEC_FOLDER
clean_folder $MODEL_FOLDER
clean_folder $ENDPOINT_FOLDER

# Fetch the latest OpenAPI spec from the public GitHub repository
if [ -z "$GITHUB_URL" ] || [ -z "$BRANCH" ]; then
    echo "GITHUB_URL or BRANCH is not set in .env. Exiting... ❌"
    exit 1
fi

# Construct the GitHub raw file URL
RAW_FILE_URL="${GITHUB_URL}/raw/${BRANCH}/swagger-spec.yaml"

echo "Downloading the OpenAPI spec from: $RAW_FILE_URL..."

# Download the .yaml file
curl -L --output "$SPEC_FOLDER/swagger-spec.yaml" "$RAW_FILE_URL"

if [ $? -ne 0 ]; then
    echo "Failed to download the OpenAPI spec. Exiting... ❌"
    exit 1
fi

# Verify the file was downloaded
if [ -f "$SPEC_FOLDER/swagger-spec.yaml" ]; then
    echo "OpenAPI spec downloaded successfully to '$SPEC_FOLDER/swagger-spec.yaml'. ✅"
else
    echo "Failed to download the OpenAPI spec file. Exiting... ❌"
    exit 1
fi

# Run Orval to regenerate the API
echo "Regenerating API with Orval... ✅"
orval

