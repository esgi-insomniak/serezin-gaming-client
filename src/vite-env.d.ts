/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
  VITE_API_MOCK_URL: string;
  VITE_MOCKS: string;
  VITE_DISCORD_OAUTH_REDIRECT_URL: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
