import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Importa il plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Attiva il plugin
  ],
})