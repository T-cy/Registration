import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node里面的path来获取文件的路径名
import path from 'path';




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //给src文件夹起一个别名@
  resolve: {
    alias: {
    "@": path.resolve(__dirname, 'src')
    }
 },
 //代理跨域
 server:{
  proxy:{
    //所有以/api开头的请求都会被代理
    '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
        // 路径重写    下面这一句代码是将/api替换成空字符串
        //意思就是http://syt.atguigu.cn/api/data重写后就会变成这样http://syt.atguigu.cn/data
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
  }
 }
})
