import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

import OrdersView from '../views/OrdersView.vue'
import EmployeesView from '../views/EmployeesView.vue'
import CustomersView from '../views/CustomersView.vue'

import KanbanView from '../views/KanbanView.vue'
import EditorView from '../views/EditorView.vue'
import CalendarView from '../views/CalendarView.vue'
import ColorPickerView from '../views/ColorPickerView.vue'


import LineView from '../views/Charts/LineView.vue'
import AreaView from '../views/Charts/AreaView.vue'
import BarView from '../views/Charts/BarView.vue'
import PieView from '../views/Charts/PieView.vue'
import FinancialView from '../views/Charts/FinancialView.vue'
import ColorMappingView from '../views/Charts/ColorMapView.vue'
import PyramidView from '../views/Charts/PyramidView.vue'
import StackedView from '../views/Charts/StackedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //  dashboard 
    {
      path: '/',
      name: 'Home Page',
      component: HomeView
    },
    {
      path: '/ecommerce',
      name: 'Ecommerce',
      component: HomeView
    },

   // Pages
    {
      path: '/orders',
      name: 'Orders',
      component: OrdersView
    },
    {
      path: '/employees',
      name: 'Employees',
      component: EmployeesView
    },
    {
      path: '/customers',
      name: 'Customers',
      component: CustomersView
    },

    // apps
    {
      path: '/kanban',
      name: 'Kanban',
      component: KanbanView
    },
    {
      path: '/editor',
      name: 'Editor',
      component: EditorView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/color-picker',
      name: 'ColorPicker',
      component: ColorPickerView
    },

    // Charts
    {
      path: '/line',
      name: 'Line',
      component: LineView
    },
    {
      path: '/area',
      name: 'Area',
      component: AreaView
    },
    {
      path: '/bar',
      name: 'Bar',
      component: BarView
    },
    {
      path: '/pie',
      name: 'Pie',
      component: PieView
    },
    {
      path: '/financial',
      name: 'Financial',
      component: FinancialView
    },
    {
      path: '/color-mapping',
      name: 'ColorMapping',
      component: ColorMappingView
    },
    {
      path: '/pyramid',
      name: 'Pyramid',
      component: PyramidView
    },
    {
      path: '/stacked',
      name: 'Stacked',
      component: StackedView
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not-Found',
      component: NotFoundView,
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
  ]

})

export default router
