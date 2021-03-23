export default {
    routes: [{
        path: '/home',
        component: () => import ('@/views/home.vue')
    },{
        path: '*',
        component: () => import ('@/views/err.vue')  
    },{
        path:'/VUE',
        component: () => import ('@/views/Front end/Vue.vue')
    },{
        path:'/Javascript',
        component: () => import ('@/views/Front end/Javascript.vue')
    },{
        path:'/HTML',
        component: () => import ('@/views/Front end/HTML.vue')
    },{
        path:'/CSS',
        component: () => import ('@/views/Front end/CSS.vue')
    },{
        path:'/NOTES',
        component: () => import ('@/views/Notes/notes.vue')
    },{
        path:'/COMBAT',
        component: () => import ('@/views/actual combat/combat.vue')
    },{
        path:'/INTRODUCE',
        component: () => import ('@/views/blogger/introduce.vue')
    },{
        path:'/MESSAGE',
        component: () => import ('@/views/blogger/message.vue')
    },{
        path:'/CONTACT',
        component: () => import ('@/views/blogger/contact.vue')
    },]
}