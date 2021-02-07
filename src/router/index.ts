import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreatePost from '../views/CreatePost.vue'
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Login
  },
  {
    path: '/create',
    name: 'createPost',
    component: CreatePost,
    meta: { requiredLogin: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { requiredLogin } = to.meta
  if (requiredLogin) {
    next('login')
  } else {
    next()
  }
})
export default router
