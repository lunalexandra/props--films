import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "https://lunalexandra.github.io/props--films/",
  plugins: [react()],
})