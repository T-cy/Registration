<template>

    <!-- 轮播图-->
    <!-- <img src="../../assets/images/web-banner-1.png" alt=""> -->
    <Carousel/>

    <!-- 搜索框 -->
    <Search></Search>

    <!-- 展示医院的结构 -->
    <el-row :gutter="20">
        <el-col :span="20" >
            <Level @sendHosptype="getHosptype"/>
            <Region @sendHospRegion="getHospRegion"/>
            <Card :hosptialArr="hosptialArr" v-if="hosptialArr.length>0"/>
            <div v-else>
              <el-empty description="没有更多内容了" />
            </div> 
            <el-pagination  v-if="hosptialArr.length>0"  class="pagenition"
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
        <el-col :span="4">
          <Tip/>
        </el-col>
    </el-row>



</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import Tip from './tip/index.vue'

import { getHasHosptial } from '../../api/home/index'
import {ref,onMounted} from 'vue'
import {type Content} from '../../api/home/type'

//分页器数据
let pageNo=ref(1)
let pageSize=ref(10)
let pageTotal=ref(0)
//医院的信息
let hosptialArr=ref<Content>([])


//接收儿子传来的数据
let HosType=ref<string>('')
let getHosptype=(value:string)=>{
  HosType.value=value
  getDate()
}
let HospRegion=ref<string>()
let getHospRegion=(value:string)=>{
  HospRegion.value=value
  getDate()
}

const getDate=async()=>{
  let res:any=await getHasHosptial(pageNo.value,pageSize.value,HosType.value,HospRegion.value)
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