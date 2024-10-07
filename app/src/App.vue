
<template>
  <div class="containner">
    <HospHeader></HospHeader>
    <!-- 展示内容的区域 -->
    <div class="content">  
        <router-view></router-view>
    </div>

    <!-- 页面的底部 -->
    <HospButtom v-show="route.fullPath=='/home' "></HospButtom>

    <!-- 登录的气泡框显示与隐藏 -->
    <Login/>
  </div>


</template>



<script setup lang="ts">
import { RouterView,useRoute} from 'vue-router'
const route=useRoute()


</script>

<style scoped>
.containner{
  margin: 0 auto;
  margin-bottom: 0;
  .content{
    margin: 0 auto;
    width: 1200px;
    padding-top: 70px;
  }
}
</style>
