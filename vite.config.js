import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '194.164.77.212',  // Listen on all network interfaces (useful for accessing from other devices)
    port: 6000,       // Set the desired port number
  }
});