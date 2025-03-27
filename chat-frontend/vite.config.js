// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// FOR DEPLOYMENT
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow access from external IPs
    port: 3000,        // Run on port 3000
    strictPort: true,  // Prevent switching to another port if 5000 is busy
  },
});
