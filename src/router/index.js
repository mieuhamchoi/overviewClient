import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/home.index.view.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/admin.index.view.vue')
    }
  ]
})

export default router
