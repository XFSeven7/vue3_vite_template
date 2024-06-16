import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {Page} from "@/router/Page";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: "home" }
  },
  {
    path:"/",
    name: 'default',
    component: () => import("@/layout/default_layout.vue"),
    children:[
      {
        path: '/home',
        name: Page.home,
        component: () => import("@/views/home/HomeView.vue")
      },
      {
        path: '/about',
        name: Page.about,
        component: () => import("@/views/AboutView.vue")
      },
      {
        path: '/mine',
        name: Page.mine,
        component: () => import("@/views/mine/MineView.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 每次路由切换，页面回到顶部
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
