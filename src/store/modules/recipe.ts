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

            state.recipes = recipes
        },
        setFilterBy(state: State, value: string) {
            state.filterBy = value
        }, addRecipe(state: State, { newRecipe }: { newRecipe: Recipe }) {
            state.recipes = [...state.recipes, newRecipe]
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
                const recipes = await recipeService.query()
                commit({ type: 'setRecipes', recipes })
            } catch (err) {
                console.log(err)
            }
        },
        setFilterBy({ commit }: { commit: Commit }, value: string) {
            commit('setFilterBy', value)
        },
        async addRecipe({ commit }: { commit: Commit }, { recipe }: { recipe: Recipe }) {
            try {
                const newRecipe = await recipeService.save(recipe)
                commit({ type: 'addRecipe', newRecipe })
            } catch (err) {
                console.error(err)
            }

        }
    },
    getters: {
        displayedRecipe(state: State) {
            return state.displayedRecipe
        },
        displayedRecipes(state: State) {
            const regex = new RegExp(state.filterBy, 'ig')
            if (state.recipes.length > 0) {
                return state.recipes.filter(recipe => {
                    return regex.test(recipe.title) ||
                        recipe.ingredients.some((i: string) => regex.test(i)) ||
                        regex.test(recipe.category)
                })
            } else return []
        },
        filterBy(state: State) {
            return state.filterBy
        }
    }
}
