<template>
<div class="max-box">
  <LoginModel :model="model" @modelClick="modelClick">
  </LoginModel>
</div>
</template>
<script>
import axios from 'axios';
import LoginModel from './loginModel.vue';
export default {
  components: {
    LoginModel,
  },
  data(){
    return {
      model: 1, // 1: 登录 2: 注册
    }
  },
  beforeCreate() {
    axios.post('http://192.168.3.12:3000/api/v1/user/signin', {
      account: this.account,
      password: this.password
    }).then(({data}) => { 
      console.log(data.result)
    })
  },
  methods: {
    modelClick() {
      this.model = this.model === 1 ? 2 : 1;
    }
  },
}
</script>
<style lang="scss">

</style>