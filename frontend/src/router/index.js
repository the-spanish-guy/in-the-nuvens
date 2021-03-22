import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('../views/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { getUserData } = store.getters
  console.log(to)
  if (!getUserData.username && to.meta.requiresAuth) {
    next({
      path: '/login'
    })
  }
  console.log('aqui ?')
  if (getUserData.username && to.name === 'Login') {
    next({
      path: '/'
    })
    console.log('aqui ??')
  }
  next()
})

export default router
