import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

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

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  if (to.meta?.auth) {
  }

  next()
})

export default router
