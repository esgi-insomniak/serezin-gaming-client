import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'local.serezin-gaming.com',
    port: 5173,
    https: {
      key: path.resolve(__dirname, './.infra/local.serezin-gaming.com-key.pem'),
      cert: path.resolve(__dirname, './.infra/local.serezin-gaming.com.pem')
    }
  }
});
