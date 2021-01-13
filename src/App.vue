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
import HeaderNav from '@/components/Header/Nav.vue'
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
</style>
