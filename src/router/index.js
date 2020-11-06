import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Permis from '@/components/permission'
import Forget from '@/views/forget'
import farmers from '@/components/farmers'
import Home from '@/views/Homepage'
import domain from '@/components/domain'
import user from '@/components/user'
import Regis from '@/views/regis'
import Tabs from '@/components/tabs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/regis',
    name: 'Register',
    component: Regis
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/permis',
        name: 'Permis',
        component: Permis
      },
      {
        path: '/farmers',
        name: 'farmers',
        component: farmers
      },
      {
        path: '/domain',
        name: 'domain',
        component: domain
      },
      {
        path: '/user',
        name: 'user',
        component: user
      },
      {
        path: '/tabs',
        name: 'Tabs',
        component: Tabs
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
