import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {
  TrendCharts,
  Grid,
  List
} from '@element-plus/icons-vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: "/echarts",
        name: "echarts",
        component: () => import("../views/home/children/EchartsView.vue"),
        meta: {
          title: "数据展示",
          icon: TrendCharts
        }
      },
      {
        path: "/pay",
        name: "pay",
        component: () => import("../views/home/children/PayList.vue"),
        meta: {
          title: "缴费管理",
          icon: Grid
        }
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/home/children/UserOne.vue"),
        meta: {
          title: "住户信息",
          icon: List
        },
        children: [
          {
            path: "/userList",
            name: "userList",
            component: () => import("../views/home/children/UserList.vue"),
            meta: {
              classifyTitle: "住户信息",
              title: "住户信息列表"
            }
          },
          {
            path: "/userUpdate",
            name: "userUpdate",
            component: () => import("../views/home/children/UserUpdate.vue"),
            meta: {
              classifyTitle: "住户信息",
              title: "住户信息修改"
            }
          }
        ]
      },
      {
        path: "/movie",
        name: "movie",
        component: () => import("../views/home/movie/MovieList.vue"),
        meta: {
          title: "影片列表",
          icon: List
        }
      }
    ]
  },
  {
    path: "/",
    redirect: "/login"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
