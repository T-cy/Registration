<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" alt="">
        <p>医院就医挂号预约平台</p>
      </div>

      <div class="right">
      <p class="help">帮助中心</p>
      <p class="login">登录注册</p>
    </div>
    </div>

  </div>
</template>

<script lang="ts" setup >

</script>

<style scoped lang="scss">
.top{
  background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  .content{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left{
      color: #55a6fe;
      display: flex;
      font-size: 20px;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      img{
        margin-right: 20px;
        width: 70px;
        height: 70px;
      }
    }
    .right{
      display: flex;
      font-size: 14px;
      align-items: center;
      justify-content: center;
      .help{
        color: #bbb;
        margin-right: 20px;
      }
      .login{
        color: #ccc;
      }
    }
  }
}
</style>