import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Auth from "@/client/src/components/Auth/Auth.vue"
import News from "@/client/src/components/News/News.vue"
import Events from "@/client/src/components/Events/Events.vue"
import Sport from "@/client/src/components/Sport/Sport.vue"
import Wash from "@/client/src/components/Wash/Wash.vue"


const routes: Array<RouteRecordRaw> = [
    {
        path: "/news",
        name: "News",
        component: News,
        meta: {
            layout: "main",
            auth: true
        }
    },
    {
        path: "/events",
        name: "Events",
        component: Events,
        meta: {
            layout: "main",
            auth: true
        }
    },
    {
        path: "/sport",
        name: "Sport",
        component: Sport,
        meta: {
            layout: "main",
            auth: true
        }
    },
    {
        path: "/wash",
        name: "Wash",
        component: Wash,
        meta: {
            layout: "main",
            auth: true
        }
    },
    {
        path: "/auth",
        name: "Auth",
        component: Auth,
        meta: {
            layout: "auth",
            auth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

export default router
