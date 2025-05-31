import { createRouter, createWebHistory } from 'vue-router';
import Connexion from '@/components/Connexion.vue';
import Index from '@/components/Index.vue'
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'
import AppPinia from '@/components/AppPinia.vue'

const routes = [
  {
    name: 'All',
    path: '/:catchAll(.*)',
    redirect: '/connexion',
    component: Connexion
  },
  {
    name: 'AppPinia',
    path: '/apppinia',
    component: AppPinia
  },
  {
    name: 'Connexion',
    path: '/connexion',
    component: Connexion
  },
  {
    name: 'Page1',
    path: '/page1',
    component: Page1
  },
  {
    name: 'Page2',
    path: '/page2',
    component: Page2
  },
  {
    name: 'Page3',
    path: '/page3',
    component: Page3
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;