import { createRouter,createWebHistory } from 'vue-router'


const router=createRouter({
  //路由器的工作模式(历史模式)
  history: createWebHistory(),
  //路由（一个路由器里面可以有多个路由）
  routes: [
    //重定向
    {
      path:'/',
      redirect:'/home'
    },
    {
      //路径
      path: "/home",
      //组件，路由懒加载
      component:()=>import('../view/home/index.vue'),
    },
    {
      path:"/hosptial",
      //组件，路由懒加载
      component:()=>import('../view/hosptial/index.vue'),
    }
  ],
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})
export default router