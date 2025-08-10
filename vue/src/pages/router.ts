import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
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

const router = createRouter({ history: createWebHashHistory(secret.APP_BASE_URL), routes })

router.beforeEach((to, from, next) => {
  console.log({ to, from })

  if (to.meta?.auth) {
  }

  next()
})

export default router
