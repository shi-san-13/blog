<template>
  <div id="app">
    <div class="header">
      <HeaderNav />
    </div>
    <router-view />
    <footer>
      <HeaderFooter />
    </footer>
  </div>
</template>

<script>
import '@/assets/styles/global.scss'
import '@/assets/styles/iconfont.scss'
import HeaderNav from '@/components/Nav.vue'
import HeaderFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    HeaderFooter,
  },
  data(){
    return {
      navigation: ''
    }
  }
}
</script>

<style lang="scss">
#app{
  .header{
    position: relative;
    z-index: 1;
  }
}
</style>
