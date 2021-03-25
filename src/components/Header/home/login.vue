<template>
<div class="max-box">
  <LoginModel :model="model" @modelClick="modelClick">
  </LoginModel>
</div>
</template>
<script>
import axios from 'axios';
import LoginModel from './loginModel';

export default {
  components: {
    LoginModel,
  },
  data(){
    return {
      account:'',
      password:'',
      model: 1, // 1: 登录 2: 注册
    }
  },
  methods: {
    modelClick() {
      this.model = this.model === 1 ? 2 : 1;
    }
  },
  beforeCreate() {
    axios.post('http://192.168.3.12:3000/api/v1/user/signin', {
      account: 'shilaimu9',
      password: 'shilaimu9'
    }).then(({data, headers}) => { 
      const { token } = headers
      console.log(token)
      console.log(data.result)
    })
  },
  updated() {
    let input = document.getElementsByTagName('input')
    console.log(input)
  }
}
</script>
<style lang="scss">
.max-box{
  .login-registered{
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
  .login-registered{
    z-index: 2;
  }
  .before-popup {
    z-index: 3;
  }
}
</style>