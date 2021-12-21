import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import Layout from '../views/Layout.vue'
import Details from '../views/Details.vue'
import Edit from '../views/Edit.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound'
import NetworkError from '../views/NetworkError'


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
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  },
  {
    path: '/events/:afterEvent(.*)',
    redirect: to => {
      return { path: '/event/' + to.params.afterEvent }
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router