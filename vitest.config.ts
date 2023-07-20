/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'import.meta.vitest': false,
  },
  test: {
    globals: true,
    include: ['./ts/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
