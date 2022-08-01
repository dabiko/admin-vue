import { createRouter, createWebHistory } from 'vue-router'

import { 
    Ecommerce, Orders, Calendar, Employees, 
    Stacked, Pyramid, Customers, Kanban, 
    Line, Area, Bar, Pie, Financial, 
    ColorPicker, ColorMapping, Editor, NoPageFound
} from '@/views';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    
    //  dashboard 
    {
      path: '/',
      name: 'Ecommerce',
      component: Ecommerce
    },
    {
      path: '/ecommerce',
      name: 'Ecommerce',
      component: Ecommerce
    },

   // Pages
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },

    // apps
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/color-picker',
      name: 'ColorPicker',
      component: ColorPicker
    },

    // Charts
    {
      path: '/line',
      name: 'Line',
      component: Line
    },
    {
      path: '/area',
      name: 'Area',
      component: Area
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/pie',
      name: 'Pie',
      component: Pie
    },
    {
      path: '/financial',
      name: 'Financial',
      component: Financial
    },
    {
      path: '/color-mapping',
      name: 'ColorMapping',
      component: ColorMapping
    },
    {
      path: '/pyramid',
      name: 'Pyramid',
      component: Pyramid
    },
    {
      path: '/stacked',
      name: 'Stacked',
      component: Stacked
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not-Found',
      component: NoPageFound,
      meta: {
        requiresAuth: false
      }
    },
    
    // {
    //   path: '*',
    //   name: '404-page',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ],
 
  //linkActiveMenu:  'isOpen',

})

export default router
