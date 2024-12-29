import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';


const externals = ['vue', 'ant-design-vue'];

export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
      // 覆盖插件选项
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [...externals],
      output: {
        globals: {
          'vue': 'Vue',
          'ant-design-vue': 'Antdv'
        },
      },
    },
    outDir: 'dist',
  },
  resolve: {
    dedupe: ['vue', 'ant-design-vue'],
  },
  optimizeDeps: {
    include: [...externals],
  },
});
