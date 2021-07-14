import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import InfoList from '../views/InfoList.vue'
import MaskList from '../views/MaskList.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'infolist/:id',
        component: InfoList
      },
      {
        path: 'masklist',
        component: MaskList
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
