import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueRouter from 'vue-router'
import VueSidebarMenu from '../src/index'

import About from './components/About.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Details from './components/Details.vue'
import Details2 from './components/Details2.vue'

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
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/details2',
      name: 'Details2',
      component: Details2
    }
  ]
})

new Vue({ 
  el: '#app',
  router,
  render: h => h(App),
})
