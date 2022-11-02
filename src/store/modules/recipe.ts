import { recipeService } from "@/services/recipe.service";
import { isRecipe, Recipe } from "@/services/models/recipe.model";
import { ActionContext, Commit } from "vuex";
import { Review } from "@/services/models/review.model";
interface State {
    displayedRecipe: Recipe | null,
    recipes: [] | Recipe[],
    filterBy: string
}
export default {
    state: {
        displayedRecipe: null,
        recipes: [],
        filterBy: ''
    },
    mutations: {
        setDisplayedRecipe(state: State, { recipe }: { recipe: Recipe }) {
            state.displayedRecipe = recipe
        },
        setRecipes(state: State, { recipes }: { recipes: Recipe[] }) {
            console.log('getting here')
            state.recipes = recipes
            console.log(state)
        },
        setFilterBy(state: State, { value }: { value: string }) {
            state.filterBy = value
        }

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
        },
        async setRecipes({ commit }: { commit: Commit }) {
            try {
                console.log('getting here')
                const recipes = await recipeService.query()
                commit({ type: 'setRecipes', recipes })
            } catch (err) {
                console.log(err)
            }
        },
        setFilterBy({ commit }: { commit: Commit }, { value }: { value: string }) {
            commit('setFilterBy', value)
        }
    },
    getters: {
        displayedRecipe(state: State) {
            return state.displayedRecipe
        },
        displayedRecipes(state: State) {
            const regex = new RegExp(state.filterBy)
            if (state.recipes.length > 0) {
                return state.recipes.filter(recipe => {
                    return regex.test(recipe.title) &&
                        recipe.ingredients.some((i: string) => regex.test(i))
                })
            } else return []
        },
        filterBy(state: State) {
            return state.filterBy
        }
    }
}