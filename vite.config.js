import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },

  server: {
    host: '0.0.0.0', // Allows access from the local network
    port: 5173,      // Default port
  },

  build: {
    rollupOptions: {
      // Externalize dependencies that should not be bundled
      external: ['react-chartjs-2'],
    },
  },
})