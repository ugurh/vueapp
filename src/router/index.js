import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import Layout from '../views/Layout.vue'
import Details from '../views/Details.vue'
import Edit from '../views/Edit.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'


const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id',
    name: 'Layout',
    props: true,
    component: Layout,
    children: [ 
      {
        path: '',
        name: 'Details',
        component: Details
      },
      {
        path: 'edit',
        name: 'Edit',
        component: Edit
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router