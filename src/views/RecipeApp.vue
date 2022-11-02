<template>
    <h3 class="recipes-main-title">Recipes</h3>

    <RecipeList :recipes="recipes"></RecipeList>
</template>

<script>
import { recipeService } from "@/services/recipe.service";
import RecipeList from '@/components/RecipeList.vue';
export default {
    components: { RecipeList },
    async created() {
        await this.loadRecipes()
    },
    methods: {
        async loadRecipes() {
            this.$store.dispatch('setRecipes')
        }
    },
    computed: {
        recipes() {
            return this.$store.getters.displayedRecipes
        }
    }
}
</script>

<style lang="scss">
.recipes-main-title {
    font-family: AlexBrush;
}
</style>