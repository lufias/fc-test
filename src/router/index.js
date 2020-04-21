import Vue from 'vue'
import VueRouter from 'vue-router'
import CardPage from '../views/CardPage.vue'
import FormPage from '../views/FormPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: CardPage
  },
  {
    path: '/form',
    name: 'Form',
    component: FormPage
   
  }
]

const router = new VueRouter({
  routes
})

export default router
