import { recipeService } from "@/services/recipe.service";
import { Recipe } from "@/services/models/recipe.model";
import { ActionContext, Commit } from "vuex";
import { Review } from "@/services/models/review.model";
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
        },

    },
    actions: {

        async setDisplayedRecipe({ commit }: { commit: Commit }, { displayedRecipeId }: { displayedRecipeId: string }) {
            try {

                const recipe = await recipeService.getById(displayedRecipeId)
                commit({ type: 'setDisplayedRecipe', recipe })
            } catch (err) {
                console.log(err)
            }
        },
        async updateRecipe({ commit }: { commit: Commit }, { recipe }: { recipe: Recipe }) {
            await recipeService.save(recipe)
            commit({ type: 'setDisplayedRecipe', recipe })

            // console.log// transfer to make the change from the grandfather
        }
    },
    getters: {
        displayedRecipe(state: State) {
            return state.displayedRecipe
        }
    }
}