import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/tab',
        name:'Tab',
        component:()=>import('../components/tab.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router