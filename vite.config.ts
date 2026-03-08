import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    tanstackRouter({ routesDirectory: './src/routes', generatedRouteTree: './src/routeTree.gen.ts' }),
    react(),
    tailwindcss(),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['@tanstack/react-router'],
          'vendor-motion': ['framer-motion'],
          'vendor-radix': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-slot',
          ],
        },
      },
    },
  },
})
