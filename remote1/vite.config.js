import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      remotes: {
        remoteStore: 'http://localhost:5002/assets/remoteEntry.js',
      },
      exposes: {
        './Button': './src/Button',
      },
      shared: ['react', 'react-dom', 'nanostores'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
