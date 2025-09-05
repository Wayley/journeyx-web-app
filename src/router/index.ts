import 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
export {}
declare module 'vue-router' {
  interface RouteMeta {
    authRequired: boolean
  }
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/navbar/NavBar.vue'),
    redirect: '/galleries',
    children: [
      {
        path: '/galleries',
        name: 'galleries',
        component: () => import('@/views/galleries/GalleryList.vue'),
      },
      {
        path: '/trips',
        name: 'trips',
        component: () => import('@/views/trips/TripList.vue'),
        meta: { authRequired: true },
      },
      {
        path: '/discoveries',
        name: 'discoveries',
        component: () => import('@/views/discoveries/DiscoveryList.vue'),
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/index.vue'),
      },
    ],
  },
  {
    path: '/galleries/:id',
    name: 'galleryPage',
    component: () => import('@/views/galleries/GalleryPage.vue'),
  },
  {
    path: '/trips/:id',
    name: 'tripPage',
    component: () => import('@/views/trips/TripPage.vue'),
  },
  {
    path: '/discoveries/:id',
    name: 'discoveryPage',
    component: () => import('@/views/discoveries/DiscoveryPage.vue'),
  },
  {
    path: '/user/profile',
    name: 'userProfile',
    component: () => import('@/views/user/UserProfile.vue'),
    meta: { authRequired: true },
  },
  /* ***************************** Base routes ***************************** */
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/base/SignIn.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/base/SignUp.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import('@/views/base/NotFound.vue'),
  },
]
const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })

import { useAuthorityStore } from '@/stores/authority'
const ROUTE_NAME_SIGN_IN = 'signin'
router.beforeEach((to, from, next) => {
  const needSignin =
    to.meta?.authRequired && !useAuthorityStore().isAuthenticated && to.name !== ROUTE_NAME_SIGN_IN

  if (needSignin) next({ name: ROUTE_NAME_SIGN_IN, query: { form: to.fullPath } })
  else next()
})

export default router
