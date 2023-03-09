import { createRouter, createWebHistory, RouterView } from "vue-router";
import Users from "../views/Users.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("../views/Settings.vue"),
      children: [
        {
          path: "user",
          name: "User",
          component: () => import("../views/User.vue"),
        },
        {
          path: "userupdate",
          name: "UserUpdate",
          component: () => import("../views/UserUpdate.vue"),
        },
      ],
    },
    {
      path: "/users",
      name: "Users",
      component: RouterView,
      children: [
        {
          path: "users",
            componenet:Users, 
            children:[
              {
                path: "privateusers",
                name: "PrivateUsers",
                component: () => import("../views/PrivateUsers.vue"),
              },
            
            ]
           
          },
      
      ],
    },
  ],
});

export default router;
