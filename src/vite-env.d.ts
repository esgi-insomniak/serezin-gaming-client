/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
  VITE_API_MOCK_URL: string;
  VITE_MOCKS: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
