import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const outputPath = process.env.NODE_ENV === 'production' ? '/ASGL' : ''
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: outputPath,
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
