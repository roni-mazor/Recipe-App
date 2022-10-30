import RecipeDetails from '@/views/RecipeDetails.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeApp from '../views/RecipeApp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/recipe',
    name: 'recipe',
    component: RecipeApp
  },
  {
    path: '/recipe/:_id',
    name: 'recipeDetails',
    component: RecipeDetails
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
