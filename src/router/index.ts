import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/LoginPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
