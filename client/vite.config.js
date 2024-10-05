import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'compile-status',
      buildEnd(error) {
        if (error) {
          console.error('ERROR in [eslint]\nBuild failed with error:', error);
        } else {
          console.log('Webpack compiled successfully');
        }
      },
      // Hook into Vite's hot update process for development
      handleHotUpdate({ file }) {
        console.log(`${file} updated successfully!`);
      }
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,  // This will expose the server on the network
    
    open: true, // Opens the browser automatically when the server starts
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        console.warn(`Warning: ${warning.message}`);
      }
    },
  }
});
