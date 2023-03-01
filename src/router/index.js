import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import('../views/Home.vue')
        },
        {
            path: "/docs",
            name: "Docs",
            component: () => import('../views/Docs.vue')
        },
        {
            path: "/examples",
            name: "Examples",
            component: () => import('../views/Examples.vue')
        },
        {
            path: "/blog",
            name: "Blog",
            component: () => import('../views/Blog.vue')
        },
        {
            path: "/music",
            name: "Music",
            component: () => import('../views/Music.vue')
        },
        {
            path: "/Settings",
            name: "Settings",
            component: () => import('../views/Settings.vue'),
            children:[
                {
                    path: "/user",
                    name:"/User",
                    component: () => import ('../views/User.vue')
                },
                {
                    path:"/userupdate",
                    name: "/UserUpdate",
                    component: ()=> import ('../views/UserUpdate.vue')
                }
                
                
            ]
        },
        
    ]
})


export default router