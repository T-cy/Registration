<template>
  <div class="buttom">
    <div class="content">
      <div class="left">
        <p>粤ICP 12345号</p>
        <p style="margin-left: 30px;">电话：123456789</p>
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .buttom{
    width: 100%;
    height: 50px;
    background-color: #f0f2f5;
    .content{
      margin: 0 auto;
      width: 1200px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left,.right{
        display: flex;
        color: #bbb;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
      .right{
        span{
          padding: 0 10px;
        }
      }
    }
  }
</style>