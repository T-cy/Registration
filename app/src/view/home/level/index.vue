<template>
  <div class="level">
    <h1 >医院</h1>
    <div class="content">
        <div class="left">等级：</div>
        <ul>
          <li :class="{active:activeFlag==''}"  @click="changeActive('')">全部</li>
          <li :class="{active:activeFlag==item.value}" v-for="item in Level" :key="item.id"  @click="changeActive(item.value)">{{item.name}}</li>
        </ul>

    </div>
  </div>
</template>

<script setup lang="ts">
import {reqHosptialLevelAndRegion} from '../../../api/home/index'
import { ref,onMounted } from 'vue'
import {type HosptialLevelAndRegionResponData ,type  HosptialLevelAndRegionArr} from '../../../api/home/type'
//存储等级的数组
let Level=ref<HosptialLevelAndRegionArr>([])

//点击谁谁就高亮
let activeFlag=ref<string>('')
let changeActive=(value:string)=>{
  activeFlag.value=value
}


const  getDate=async()=>{
  let res:HosptialLevelAndRegionResponData|any=await reqHosptialLevelAndRegion('HosType')
  console.log(res);
  if(res.data.code==200){
    Level.value=res.data.data
  }
}

onMounted(()=>{
  getDate()
})



</script>

<style scoped lang="scss">
.level{
  h1{
    color: #7f7f7f;
    font-weight: 600;
    margin: 10px 0;
  }
  .content{
    color: #7f7f7f;
    display: flex;
    margin-right: 10px;
    .left{
      flex: 1;
      flex-wrap: wrap;
    }
    ul{
      flex: 19;
      display: flex;
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