import type { RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/base/SignIn.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/base/SignUp.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import('@/views/base/NotFound.vue'),
  },
]

export default routes
