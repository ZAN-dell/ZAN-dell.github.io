import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/page/login'
import Home from '@/page/data'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('resumeToken'))
  if (!isAuthenticated && to.name !== 'login') {
    next({
      name: 'login'
    })
  } else {
    next()
  }
})

export default router
