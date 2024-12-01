import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssAutoImport from 'vite-plugin-css-auto-import'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cssAutoImport()],
  server: {
    proxy: {
      '/api': {
        target: 'https://database.msi.upd.edu.ph',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    origin: 'http://0.0.0.0:3000',
    port: 3000
  }
})
