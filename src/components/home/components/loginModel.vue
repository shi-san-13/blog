<template>
<div class="login-registered row-box">
  <div class="title">{{ modelText }}</div>
  <input placeholder="输入账号" type="text" v-model="account" >
  <input placeholder="输入密码" type="password" v-model="password">
  <button class="log-but" type="button">
    <span class="log-spa">{{modelText}}</span>
  </button>
  <p class="p-log">转换成
    <span class="span-log" @click="$emit('modelClick')">
      {{modelText === '登录' ? '注册' : '登录'}}
    </span>
  </p>
</div>
</template>

<script>
export default {
  props: {
    model: {
      default: 1,
      type: Number,
    }
  },
  data(){
    return {
      account:'',
      password:'',
    }
  },
  computed: {
    modelText() {
      return this.model === 1 ? '登录' : '注册';
    }
  }
}
</script>

<style lang="scss">
.max-box{
  .login-registered{
    display: none;
    z-index: 2;
    position: absolute;
    top: 300px;
    right: 700px;
    width: 400px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0px 15px rgb(82, 82, 82);
      .title{
      font-size: 30px;
      text-align: center;
      margin: 35px;
      }
      input{
        display: block;
        width: 70%;
        font-size: 15px;
        margin: 0 auto 15px;
        border-radius: 5px;
        border-color: transparent;
        padding: 7px;
        outline: none;
        background-color: rgb(233, 233, 233);
      }
      .log-but{
        width: 50%;
        margin: 0 0 30px 100px;
        border-radius: 25px;
        border-color: transparent;
        padding:10px;
        outline: none;
      } 
      .log-but:active{
          background-color: rgb(172, 172, 172);
          color: #fff;
      }
      .p-log{
        display: block;
        text-align: center;
        .span-log{
        display: inline-block;
        padding: 10px;
        }
        .span-log:hover{
          cursor:pointer;
        }
      }
  }
}
</style>