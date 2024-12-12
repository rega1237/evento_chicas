import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        reclamar: resolve(__dirname, 'reclamar_entrada.html'),
      },
    },
  },
})