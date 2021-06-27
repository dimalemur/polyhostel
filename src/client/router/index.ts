import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Auth from "@/client/src/components/Auth.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Auth",
        component: Auth
    },
    {
        path: "/auth",
        name: "Auth",
        component: Auth
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router