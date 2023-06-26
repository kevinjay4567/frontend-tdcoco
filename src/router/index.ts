import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import InfoFin from '../views/InfoFinView.vue'
import Login from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/info',
      name: 'info',
      component: InfoFin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
