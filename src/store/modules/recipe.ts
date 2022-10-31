import { recipeService } from "@/services/recipe.service";
import { Recipe } from "@/services/models/recipe.model";
import { ActionContext, Commit } from "vuex";
interface State {
    displayedRecipe: Recipe | null
}
export default {
    state: {
        displayedRecipe: null,
    },
    mutations: {
        setDisplayedRecipe(state: any, { recipe }: { recipe: Recipe }) {
            state.displayedRecipe = recipe
            console.log(state)
        },

    },
    actions: {

        async setDisplayedRecipe({ commit }: { commit: Commit }, { displayedRecipeId }: { displayedRecipeId: string }) {
            const recipe = await recipeService.getById(displayedRecipeId)
            commit({ type: 'setDisplayedRecipe', recipe })
        }
    },
    getters: {
        displayedRecipe(state: State) {
            return state.displayedRecipe
        }
    }
}