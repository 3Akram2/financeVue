import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import FullArticleView from '../views/FullArticlaView'
import LoginView from '../views/LoginView.vue'
import SoundsView from '../views/SoundsView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/search:word',
    name: 'search',
    component: SearchView,
    props:  true 
  },
  {
    path: '/article',
    name: 'aricle',
    component: FullArticleView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/sounds',
    name: 'sounds',
    component: SoundsView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset:{x:0, y:100}
        
              }
    }
    return window.scrollTo(0, 0) 
   }
})

export default router
