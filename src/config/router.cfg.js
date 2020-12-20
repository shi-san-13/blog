
export default {
    routes: [{
        path: '/',
        component: () => import ('@/views/home.vue')
    },{
        path: '/233',
        component: () => import ('@/views/home2.vue')
    },{
        path: '*',
        component: () => import ('@/views/err.vue')  
    },{
        path: '/123',
        component: () => import('@/views/home3.vue')
    }]
}