import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  // mako: {}, // error
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'wzc-init-vue',
  },
  presets: [require.resolve('@dumijs/preset-vue')],
});
