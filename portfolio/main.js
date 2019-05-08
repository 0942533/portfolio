import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import VueSidebarMenu from '../src/index'

import About from './components/About.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import details from './components/details.vue'

import Web1 from './components/projects/webdesign/Web1.vue'
import Web2 from './components/projects/webdesign/Web2.vue'


import { defaultCipherList } from 'constants';

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/web1',
      name: 'Web1',
      component: Web1
    },
    {
      path: '/web2',
      name: 'Web2',
      component: Web2
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})

new Vue({ 
  el: '#app',
  router,
  render: h => h(App),
})
