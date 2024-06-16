import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: "home" }
  },
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("@/views/AboutView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
