import { Recipe } from '@/services/models/recipe.model'
import { createStore, Store } from 'vuex'
import recipe from './modules/recipe'
// declare module '@vue/runtime-core' {
//   // declare your own store states
//   interface State {
//     displayedRecipe: Recipe | null
//   }

//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    recipe,
  }
})
