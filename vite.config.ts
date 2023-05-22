import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    server: {
      port: 3000,
      cors: false,
    },
    preview: {
      port: 8080,
      cors: false,
    },
  }

})
