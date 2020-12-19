import Vue from 'vue'
import App from './App.vue'
import Router from './config/router.js'

const router = Router()

new Vue({
  render: h => h(App),
}).$mount('#app')
