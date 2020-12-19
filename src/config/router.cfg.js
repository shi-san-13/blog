import {component} from 'vue/types/umd';
export default {
    mode: 'history',
    routes: [{
        path: '/',
        component: () => import ('@/views/home.vue')
    },{
        path: '/123',
        component: () => import ('@/views/home2.vue')
    },{
        path: '*',
        component: () => import ('@/views/err.vue')
    }]
}