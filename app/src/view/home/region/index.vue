<template>
  <div class="region">
    <div class="content">
        <div class="left">地区：</div>
        <ul>
          <li :class="{active:RegionFlag==''}" @click="changeFlag('')">全部</li>
          <li :class="{active:RegionFlag==item.value}" v-for="item in Region" :key="item.id" @click="changeFlag(item.value)">{{item.name}}</li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reqHosptialLevelAndRegion} from '../../../api/home/index'
import { ref,onMounted } from 'vue'
import {type HosptialLevelAndRegionResponData ,type  HosptialLevelAndRegionArr} from '../../../api/home/type'

let Region=ref<HosptialLevelAndRegionArr>([])
//排他思想
let RegionFlag=ref<string>('')
let changeFlag=(value:string)=>{
  RegionFlag.value=value
}
const  getDate=async()=>{
  let res:HosptialLevelAndRegionResponData|any=await reqHosptialLevelAndRegion('Beijin')
  console.log(res);
  if(res.data.code==200){
    Region.value=res.data.data
  }
}

onMounted(()=>{
  getDate()
})
</script>

<style scoped lang="scss">
.region{
  margin-top: 20px;
  .content{
    color: #7f7f7f;
    display: flex;
    .left{
      flex:1;
      white-space: nowrap;
    }
    ul{
      flex: 19;
      display: flex;
      flex-wrap: wrap;
      li{
        margin-right: 30px;
        &.active{
          color: #55a6fe;
        }
      }
      li:hover{
        color: #55a6fe;
      }
    }
  }
}
</style>