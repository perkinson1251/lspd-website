import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutVuew.vue'
import CareersView from '@/views/CareersView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView,
    },
  ],
})

export default router
