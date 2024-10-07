<template>
  <div class="hosptial">
    <!-- 导航区域 -->
    <div class="menu">
      <div class="top">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <p>/医院详情信息</p>
      </div>
      <el-menu
        :default-active="route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hosptial/register" @click="jumpRoute('/hosptial/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hosptial/detail"  @click="jumpRoute('/hosptial/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hosptial/close"  @click="jumpRoute('/hosptial/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hosptial/search"  @click="jumpRoute('/hosptial/search')">
          <el-icon><Search /></el-icon>
          <span>查询与取消</span>
        </el-menu-item>
        <el-menu-item index="/hosptial/notice"  @click="jumpRoute('/hosptial/notice')">
          <el-icon><setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
      </el-menu>



    </div>
    <!-- 内容区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,InfoFilled,Search,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { onMounted } from 'vue'

import { useRouter,useRoute } from 'vue-router'
import useHosptialDetail from '../../store/modules/hosptialDetail'
let hosptialDetail=useHosptialDetail()

const router=useRouter()
const route=useRoute()


let jumpRoute=(path:string)=>{
  router.push({
    path:path
  })
}

onMounted(() => {
  //通知仓库发请求
  hosptialDetail.getHosptial(route.query.hoscode)
  hosptialDetail.getHosptialDepartment(route.query.hoscode)
})

</script>

<style lang="scss" scoped>
.hosptial{
  margin-top: 10px;
  display: flex;
  .menu{
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top{
      display: flex;
      align-items: center;
      color: #ccc;
      font-size: 14px
    }
  }
  .content{
    flex: 8;
  }
}
</style>