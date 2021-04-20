import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/page1',
    },
    {
        path: '/page1',
        name: 'page1',
        component: () =>
            import ('@/views/page1/page1.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router