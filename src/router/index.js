// import { createRouter, createWebHistory } from 'vue-router'

// import Home from '@/pages/HomePage.vue'
// import NewOrganization from '@/pages/CreateNewOrganization.vue'


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/newOrganization',
//       name: 'newOrganization',
//       component: NewOrganization
//     },
//   ]
// })


//we
import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/pages/HomePage.vue'
import NewOrganization from '@/pages/CreateNewOrganization.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/newOrganization',
      name: 'newOrganization',
      component: NewOrganization
    }
  ]
});
// export default router
