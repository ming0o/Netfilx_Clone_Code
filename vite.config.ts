import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' },
      { find: 'node_modules', replacement: '/node_modules' },
      { find: 'index', replacement: '/src/index.tsx' }
    ]
  }
})
