import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'firebase-tools',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: [...new Set([...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)])].map(x => new RegExp(`^${x}`))
    },
    sourcemap: true,
    target: 'esnext',
    minify: true
  },
  plugins: [dts()],
  test: {
    environment: 'node'
  },
})
