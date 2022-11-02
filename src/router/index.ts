import RecipeDetails from '@/views/RecipeDetails.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeApp from '../views/RecipeApp.vue'
import RecipeCompose from '../views/RecipeCompose.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'recipe',
    component: RecipeApp
  },
  {
    path: '/:_id',
    name: 'recipeDetails',
    component: RecipeDetails
  },
  {
    path: '/add',
    name: 'recipeCompose',
    component: RecipeCompose
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
