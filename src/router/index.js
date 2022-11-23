import { createRouter, createWebHistory } from 'vue-router'

// view
import HomePage from '../views/homepage.vue'
import skills from '../views/skills.vue'
import work from '../views/work.vue'
import workDetails from '../views/work.details.vue'

// cmps

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { bodyClass: 'home-page-background' }
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    // {
    //   path: '/skills',
    //   name: 'skills',
    //   component: () => import('../views/skills.vue')
    // },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/work-details/:id',
      name: 'work-details',
      component: workDetails
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    }
  ]
})

export default router
