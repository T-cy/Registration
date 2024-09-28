<template>

    <!-- 轮播图-->
    <!-- <img src="../../assets/images/web-banner-1.png" alt=""> -->
    <Carousel/>

    <!-- 搜索框 -->
    <Search></Search>

    <!-- 展示医院的结构 -->
    <el-row :gutter="20">
        <el-col :span="20" >
            <Level/>
            <Region/>
            <Card :hosptialArr="hosptialArr"/>
            <el-pagination  class="pagenition"
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :background="true"
            layout=" prev, pager, next, -> ,sizes,total"
            :total="pageTotal"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            />
        </el-col>
        <el-col :span="4">123</el-col>
    </el-row>



</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'

import { getHasHosptial } from '../../api/home/index'
import {ref,onMounted} from 'vue'
import {type Content} from '../../api/home/type'

//分页器数据
let pageNo=ref(1)
let pageSize=ref(10)
let pageTotal=ref(0)
//医院的信息
let hosptialArr=ref<Content>([])

const getDate=async()=>{
  let res:any=await getHasHosptial(pageNo.value,pageSize.value)
  let {data}=res
  if(data.code==200){
    hosptialArr.value=data.data.content  
    pageTotal.value=data.data.totalElements
  }
}

const handleSizeChange=()=>{
  getDate()
}
const handleCurrentChange=()=>{
  getDate()
}

onMounted(()=>{
  getDate()
})



</script>

<style scoped lang="scss">
  .pagenition{
    margin: 20px 0;
    width: 100%;
  }
</style>