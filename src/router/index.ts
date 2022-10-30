import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import defaultLayout from "../layouts/default.vue";
import blankLayout from "../layouts/blank.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'default',
        component: defaultLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../pages/index.vue'),
            },
            {
                path: 'second',
                name: 'second',
                component: () => import('../pages/second.vue'),
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*', component: () => import ('../pages/error404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router