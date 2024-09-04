import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutVuew.vue'
import CareersView from '@/views/CareersView.vue'
import FaqView from '@/views/FaqView.vue'
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
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView,
    },
  ],
})

export default router
