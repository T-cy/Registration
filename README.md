# Registration

```javascript

```


Day1
1、创建项目npm create vite@latest
2、vite.config.ts文件用来代理跨域
3、本地运行在package.json 配置--open用来一打开就运行
4、src 别名的配置（在使用文件路径的时候不用一直../../这样，直接@在src文件夹下查找）
在vite.config.ts文件中
```javascript
//引入node里面的path来获取文件的路径名
import path from 'path';

//给src文件夹起一个别名@
resolve: {
  alias: {
  "@": path.resolve(__dirname, 'src')
  }
}

//在tsconfig.app.json文件里的compilerOptions配置
  // 配置src路径
  "baseUrl": ".",
  "paths": {
  "@/*": ["src/*"]
  }
```

5、清除样式，在创建全局样式文件，在npm搜索reset.scss然后将内容copy下来，在main.ts中引入
记得安装scss     npm i sass

6、注册全局组件
app.component('Header',Header)

7、配置路由
首先就是要安装路由npm i vue-router 
创建路由器-》确认工作模式-》路由的信息-》暴露路由器
不要忘记路由重定向
最最最最最重要的是不要忘记在main入口中使用路由器app.use(router)这样才会安装

8、问题1：element的组件样式完全不对---------------原因：在main.ts里面引入少了文件import 'element-plus/dist/index.css'

Day2
1、二次封装axios
在请求拦截器里面的config的属性headers是通常用来发送token的

2、代理跨域

3、排他思想：点击谁谁高亮
因为是v-for遍历出来的，

  <ul>
    <li :class="{active:activeFlag==''}"  @click="changeActive('')">全部</li>
    <li :class="{active:activeFlag==item.value}" v-for="item in Level" :key="item.id"  @click="changeActive(item.value)">{{item.name}}</li>
  </ul>

  //点击谁谁就高亮
  let activeFlag=ref<string>('')
  let changeActive=(value:string)=>{
    activeFlag.value=value
  }

  Day 3
  1、不同类型医院数据（医院的类型、医院的地址）
  子组件给父组件传递类型数据、地区数据给父组件，然后父组件获取到子组件的数据然后进行路由的请求
  不要忘记的是，父组件接收到数据的时候就发路由请求更新页面

  2、使用hooks进行模块化
  (使用了外部参数传进来给hooks)

  3、静态路由的搭载（医院的导航菜单）
  el-sub-menu是用来折叠的

  4、使用仓库pinia
  安装pinia  npm i 安装----》在store文件夹下创建pinia  暴露export default pinia------》在入口文件中引入pinia,并且使用pinia，app.use(pinia)
  创建小仓库---》并且暴露

  5、获取路由请求query参数进行路由的跳转
  在hosptial组件里面，获取到当前的路由信息，route，然后携带这个路由中的query参数进行路由的跳转，因为这里的路由请求方法是在仓库里面的，因此引入仓库进行路由的，将当前页面的路由信息中的query参数进行路由的跳转

  6、如果要修改element组件的样式，就要用到深度选择器
  .login{
  ::v-deep(.el-dialog__body){
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
}

7、倒计时的显示
