<template>
    <h3 class="recipes-main-title">Recipes</h3>
    <RecipeList :recipes="recipes"></RecipeList>
</template>

<script>
import { recipeService } from "@/services/recipe.service";
import RecipeList from '@/components/RecipeList.vue';
export default {
    components: { RecipeList },
    data() {
        return {
            recipes: []
        }
    },
    async created() {
        await this.loadRecipes()
    },

    methods: {
        async loadRecipes() {
            try {
                this.recipes = await recipeService.query()
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss">
.recipes-main-title {
    font-family: AlexBrush;
}
</style>