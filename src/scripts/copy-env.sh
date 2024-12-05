#!/bin/bash

echo "RIOT_API_TOKEN=$RIOT_API_TOKEN" >> .env.development
echo "GITHUB_URL=$GITHUB_URL" >> .env.development
echo "BRANCH=$BRANCH" >> .env.development
echo "API_FOLDER_PATH=$API_FOLDER_PATH" >> .env.development
echo "ZIP_FILE=$ZIP_FILE" >> .env.development
echo "VITE_API_BASE_URL=$VITE_API_BASE_URL" >> .env.development
echo "VITE_API_MOCK_URL=$VITE_API_MOCK_URL" >> .env.development
echo "VITE_MOCKS=$VITE_MOCKS" >> .env.development


echo "RIOT_API_TOKEN=$RIOT_API_TOKEN" >> .env.production
echo "GITHUB_URL=$GITHUB_URL" >> .env.production
echo "BRANCH=$BRANCH" >> .env.production
echo "API_FOLDER_PATH=$API_FOLDER_PATH" >> .env.production
echo "ZIP_FILE=$ZIP_FILE" >> .env.production
echo "VITE_API_BASE_URL=$VITE_API_BASE_URL" >> .env.production
echo "VITE_API_MOCK_URL=$VITE_API_MOCK_URL" >> .env.production
echo "VITE_MOCKS=$VITE_MOCKS" >> .env.production