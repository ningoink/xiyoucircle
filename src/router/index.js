import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("@/views/home/index.vue"),
            meta: {
                title: '西邮开源社'
            }
        },
        // {
        //     path: '/lab',
        //     name: 'Lab',
        //     component: () => import(`@/views/lab/index.vue`),
        //     meta: {
        //         title: '西邮实验室'
        //     }
        // },
        {
            path: '/about',
            name: 'About',
            component: () => import(`@/views/about/index.vue`),
            meta: {
                title: '关于开源社'
            }
        }
    ]
})

export default routes
