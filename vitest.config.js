import { defineConfig } from 'vite';

export default defineConfig({
 
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Or .ts for TypeScript
    globals: true, // Optional: Makes Vitest APIs globally available
  },
})