export default {
    routes: [{
        path: '/home',
        component: () => import ('@/views/home.vue')
    },{
        path: '*',
        component: () => import ('@/views/err.vue')  
    },{
        path:'/VUE',
        component: () => import ('@/views/Vue.vue')
    },{
        path:'/Javascript',
        component: () => import ('@/views/Javascript.vue')
    },{
        path:'/HTML',
        component: () => import ('@/views/HTML.vue')
    },{
        path:'/CSS',
        component: () => import ('@/views/CSS.vue')
    }]
}