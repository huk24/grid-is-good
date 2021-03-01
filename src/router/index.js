import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: 'home-old',
    name: 'Home',
    component: Home
  },
  {
    path: '/old',
    name: 'Old',
    component: () => import('../components/old/template.vue')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../components/glossary/template.vue')
  }
]
const list = [
  'grid',
  'create-grid',
  'repeat',
  'fraction',
  'minmax',
  'line-names',
  'item-positions',
  'gutters',
  'template-areas',
  'grid-template',
  'auto-flow',
  'implicit-grid',
  'grid-shorthand',
  'place-content',
  'place-items'
]
list.forEach(el => routes.push({
  path: `/${el}`,
  name: el,
  component: () => import(`../components/${el}/template.vue`)
}))

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export { router, list }
