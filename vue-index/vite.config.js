import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const {resolve} =path
// import Components from 'unplugin-vue-components/vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   resolvers:[VantResolver()]
    // })
  ],
  resolve:{
    alias:[
      {find:'@',replacement:resolve(__dirname,'src')}
    ],
    extensions:['.js','.ts','.vue']
  }
})
