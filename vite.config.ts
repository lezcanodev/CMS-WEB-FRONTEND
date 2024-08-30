import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lezcanodev.github.io/CMS-WEB-FRONT-PROD/',
  //base: 'http://localhost:3000/',
  plugins: [react()],
 /* build: {
    rollupOptions: {
      external: ["react", "react-router", "react-router-dom"],
      output: {
        globals: {
          react: "React",
          "react-router": "ReactRouter",
          "react-router-dom": "ReactRouterDOM"
        },
      },
    },
  },*/
})
