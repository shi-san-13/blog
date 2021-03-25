<template>
<div class="login-registered row-box">
  <div class="title">{{modelText}}</div>
  <input :placeholder="'输入' + modelText" type="text" >
  <input placeholder="输入密码" type="text" >
  <button class="log-but" type="button">
    <span class="log-spa">{{modelText}}</span>
  </button>
  <p class="p-log">转换成
    <span class="span-log" @click="emit('modelClick')">
      {{modelText === '登录' ? '注册' : '登录'}}
    </span>
  </p>
</div>
</template>

<script>
export default {
  props: {
    // 1: 登录 2: 注册
    model: {
      default: 1,
      type: Number,
    }
  },
  computed: {
    modelText() {
      return this.model === 1 ? '登录' : '注册';
    }
  }
}
</script>
