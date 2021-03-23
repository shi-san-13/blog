<template>
<div class="max-box">
  <div class="login">
    <div class="title">登录</div>
    <input placeholder="账号" type="text" class="input">
    <input placeholder="密码" type="password" class="input">
    <button class="log-but">
      <span>登录</span>
    </button>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.max-box{
  display: none;
  .login{
    position: absolute;
    top: 300px;
    right: 700px;
    width: 400px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 10px 10px rgb(224, 224, 224);
  .title{
    font-size: 30px;
    text-align: center;
    margin: 35px;
  }
  .input{
    display: block;
    width: 70%;
    font-size: 15px;
    margin: 0 auto 20px;
    border-radius: 5px;
    border-color: transparent;
    padding: 5px;
    outline: none;
    background-color: rgb(233, 233, 233);
  }
  .log-but{
    width: 50%;
    margin: 20px 100px;
    border-radius: 25px;
    border-color: transparent;
    padding:10px;
    outline: none;
    span{
      padding: 20px;
    }
  }
  .log-but:active{
    background-color: rgb(114, 114, 114);
    color: #fff;
  }
  }
}
</style>