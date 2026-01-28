import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: 'es2020',
  external: [
    'react',
    'react-dom',
    '@apollo/client',
    'graphql',
    'graphql-tag',
  ],
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
      dts: format === 'cjs' ? '.d.cts' : '.d.ts',
    }
  },
})