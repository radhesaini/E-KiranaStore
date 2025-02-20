import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // If you're using global APIs from testing-library/jest-dom
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'], // Or './setupTests.ts'
  },
});
