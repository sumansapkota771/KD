import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),// Enables React support with Vite
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for the 'src' directory
    },
  },

  esbuild: {
    // Ensure esbuild can handle JSX for `.jsx` and `.tsx` files
    loader: 'tsx',
    include: /src\/.*\.(jsx|tsx)?$/, // Include both JSX and TSX files
    exclude: /node_modules/, // Exclude node_modules
  },

  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react if causing issues
  },
});
