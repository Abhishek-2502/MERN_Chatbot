import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // since you're serving from root
  build: {
    outDir: 'dist', // output folder
    sourcemap: false,
  },
});
