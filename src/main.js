import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './config/router.cfg'


const router = new VueRouter(RouterConfig);

Vue.use(VueRouter); 

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')