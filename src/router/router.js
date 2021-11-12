
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from './../layout/layout.vue'

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/find',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('./../pages/FindPage.vue')
      }
    ]
  },
  {
    path: '/mv',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('./../pages/MvPage.vue')
      }
    ]
  },
  {
    path: '/mine',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('./../pages/MinePage.vue')
      }
    ]
  },
  {
    path: '/friend',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('./../pages/FriendPage.vue')
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('./../pages/AccountPage.vue')
      }
    ]
  },
  {
    path: '/private',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('./../pages/PrivatePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router