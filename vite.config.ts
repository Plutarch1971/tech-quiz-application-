import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './client/src/__tests__/setup.ts',
    include: ['./client/src/**/*.{test,spec}.{js,jsx,ts,tsx}'], // Added include pattern
    exclude: ['**/node_modules/**', '**/dist/**'],
    css: true, // Handle CSS files in tests
  },
});