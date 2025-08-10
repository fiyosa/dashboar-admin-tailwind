import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import secret from '../config/secret'

const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    meta: { auth: true, title: 'Dashboard' },
    component: () => import('../components/molecule/dashboard/Dashboard.vue'),
    children: [
      //
      { path: '', component: () => import('./guest/Home.vue'), meta: { title: 'Home' } },
      { path: '/about', component: () => import('./guest/About.vue'), meta: { title: 'About' } },
    ],
  },

  { path: '/:pathMatch(.*)*', component: () => import('./guest/NotFound.vue') },
]

const router = createRouter({ history: createWebHistory(secret.APP_BASE_URL), routes })

router.beforeEach((to, from, next) => {
  if (sessionStorage.redirect) {
    const redirect = sessionStorage.redirect
    delete sessionStorage.redirect
    next(redirect)
  } else {
    next()
  }
})

export default router
