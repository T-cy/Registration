<template>
  <div class="search">
      <el-autocomplete  class="atoInput" style="width: 600px;display: flex;flex-direction: column;"
        v-model="keyword"
        :fetch-suggestions="querySearchAsync"
        clearable
        placeholder="请输入内容"
        @select="handleSelect"
      />  
      <el-button  type="primary" :icon="Search"></el-button>
  </div>
</template>

<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'
import { ref } from 'vue'
import {useRouter} from "vue-router"

const router =useRouter()
//使用hooks
import useHosptialSearch from '../../../hooks/useHosptialSearch'
let keyword=ref('')
let {getdate,showData}=useHosptialSearch(keyword)

let querySearchAsync=async(_:any, cb:any)=>{
  await getdate()
  cb(showData.value)
  showData.value=[]
}

// 点击推荐项,进行路由的跳转
let handleSelect=(item:any)=>{
  console.log(item);
  
  router.push({
    path:'/hosptial/register',
    query:{
      hoscode:item.hoscode
    }
  })
}

</script>

<style scoped lang="scss">
.search{
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
</style>