<template>
  <div id="app">
    <div>
      有道写作new 同传 翻译机 人工翻译 翻译API 翻译APP 登录
    </div>
    
    <div class="content">
      <router-view />
    </div>

    <footer>
      有道首页|有道智选|有道精品课|关于有道|官方博客
      © 2020 网易公司 网易公司 隐私政策 京ICP证080268号 京ICP备10005211号
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
