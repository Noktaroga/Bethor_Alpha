import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'public', // Set root directory to public where index.html is located
  plugins: [react()], // Use React plugin
  build: {
    outDir: '../dist', // Output to dist directory in the project root
    emptyOutDir: true, // Empty the output directory before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'), // Explicitly set the entry point
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Optional: Add alias for src directory
    },
  },
});

