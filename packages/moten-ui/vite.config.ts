import { defineConfig } from 'vite'
import { resolve } from 'path'
import { isVue2 } from 'vue-demi'
import vue from '@vitejs/plugin-vue'
import{createVuePlugin}from'vite-plugin-vue2'
const name=isVue2?'vue2':'vue3'
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  plugins: [isVue2 ?createVuePlugin():vue()],

  build: {
    outDir: `dist/${name}`,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'motenui',
      // the proper extensions will be added
      fileName: 'motenui',
    },
    rollupOptions:{
       external:['vue-demi','vue'],
       output:{
        globals:{
          'vue-demi':'VueDemi',
          'vue':'Vue'
        }
       }  
    }
}
})
