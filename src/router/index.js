import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tenders from '../views/Tenders.vue'
import ContractorsBase from '../views/ContractorsBase.vue'
import Profile from '../views/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tenders',
    name: 'Tenders',
    component: Tenders
  },
  {
    path: '/contractors-base',
    name: 'ContractorsBase',
    component: ContractorsBase
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  hashbang: false,
  mode: 'history'
})

export default router
