import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(( ) => {
  
  return {
    plugins: [react()],
    // Use environment variable for base path, default to root
    base: '/retro-gaming-66-configurateur/',
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            three: ['three', '@react-three/fiber', '@react-three/drei']
          }
        }
      }
    }
  }
})
