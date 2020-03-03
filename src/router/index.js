import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/footprint',
        name: 'Footprint',
        component: () => import('../views/Footprint.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue')
      }
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
