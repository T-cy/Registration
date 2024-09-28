<template>
  <div class="search">
      <el-autocomplete  style="width: 600px;"
        v-model="state1"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input w-50"
        placeholder="请输入内容"
        @select="handleSelect"
      />  
      <el-button  type="primary" :icon="Search"></el-button>
  </div>
</template>

<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.search{
  margin: 20px 0;
  display: flex;
  justify-content: center;


}
</style>