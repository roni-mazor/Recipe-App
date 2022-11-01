<template>
    <ul class="recipes-container">
        <li @click="openRecipePage(recipe._id)" class="recipe-preview" v-for="recipe in recipes" :key="recipe._id">
            <RecipePreview :recipe="recipe"></RecipePreview>
        </li>
    </ul>
</template>

<script>
import RecipePreview from './RecipePreview.vue';
export default {
    props: {
        recipes: {
            type: Array,
            required: true,
        }
    },
    components: {
        RecipePreview

    },
    methods: {
        openRecipePage(recipeId) {
            this.$router.push(`/${recipeId}`)
        }
    }


}
</script>

<style lang="scss">
.recipes-container {
    columns: 330px 3;
    padding: 0;
    column-gap: 3px;
    list-style: none;
    width: 100%;

    li {
        &:hover {
            cursor: pointer;
        }
    }
}
</style>