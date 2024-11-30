import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from localhost and network
    port: 3000, // Ensure a fixed port
    strictPort: true, // Fail if the port is not available
    watch: {
      usePolling: true, // Ensures compatibility with Windows file system
    },
    hmr: {
      protocol: 'ws', // WebSocket for HMR
    },
  },
})
