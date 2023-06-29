import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/stores/auth'
import Dashboard from '../views/DashboardView.vue'
import InfoFin from '../views/InfoFinView.vue'
import Login from '../views/LoginView.vue'
import Course from '../views/CourseView.vue'
import Register from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/info',
      name: 'info',
      component: InfoFin,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requireAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuth()
  const isAuth = store.token

  if (to.meta.requireAuth && !isAuth) {
    next('login')
  } else if ((to.name === 'login' || to.name === 'register') && isAuth) {
    next('/')
  } else {
    next()
  }
})

export default router
