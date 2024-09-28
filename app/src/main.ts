import { createApp } from 'vue'
import App from './App.vue'
import './style/reset.scss'
import HospHeader from './components/hosptial_top/index.vue'
import HospButtom from './components/hosptial_bottom/index.vue'
// 引入vue-router并安装
import router from './router/index'
// elementPlus安装
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//安装icons图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app=createApp(App)






//引入全局组件
app.component('HospHeader',HospHeader)
app.component('HospButtom',HospButtom)

//安装vue-router
app.use(router)
//使用element
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
  locale: zhCn,
})

//挂载app
app.mount('#app')
