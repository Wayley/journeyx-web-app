import { createRouter, createWebHistory } from 'vue-router'

import baseRoutes from './base'
import { useAuthorityStore } from '@/stores/authority'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/navbar/NavBar.vue'),
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
    ...baseRoutes,
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthorityStore()
  if (to.meta?.authRequired && !authStore.isAuthenticated && to.name !== 'login')
    next({ name: 'login' })
  else next()
})

export default router
