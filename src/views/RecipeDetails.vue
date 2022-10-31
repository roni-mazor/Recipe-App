<template>

    <section :v-if="recipe" class="recipe-container">
        <h2>{{ recipe.title }}</h2>
        <section class="upper-section">
            <ul class="ingredients-list">
                <li v-for="ingredient in recipe.ingredients " :key="ingredient">
                    {{ ingredient }}</li>
            </ul>
            <section class="main-image-container">
                <img :src="mainImageSrc" alt="">
            </section>
            <ul class="image-gallery-container">
                <li @click="changeDisplayedImgIdx(index)" :class="{ chosen: index === displayedImgIdx }"
                    v-for="image, index in recipe.images " :key="image.slice(0, 6)">
                    <img :src="image" alt="">
                </li>
            </ul>
        </section>
        <section>
            <RecipeParagraph v-for="paragraph in recipe.cookingSteps " :key="paragraph.slice(0, 6)"
                :paragraph="paragraph">
            </RecipeParagraph>

        </section>
        <RecipeReviews :reviews="recipe.reviews"></RecipeReviews>
    </section>
</template>

<script>
import RecipeParagraph from '@/components/RecipeParagraph.vue'
import RecipeReviews from '@/components/RecipeReviews.vue'
export default {
    components: { RecipeParagraph, RecipeReviews },
    data() {
        return {
            displayedImgIdx: 0,
        }
    },
    intervalId: 1,
    async created() {
        const displayedRecipeId = this.$route.params._id
        this.$store.dispatch({ type: 'setDisplayedRecipe', displayedRecipeId })

        this.intervalId = setInterval(() => {
            this.displayedImgIdx++
            if (this.displayedImgIdx > this.recipe.images.length - 1) {
                this.displayedImgIdx = 0
            }
        }, 7000)
    },
    methods: {
        changeDisplayedImgIdx(idx) {
            this.displayedImgIdx = idx
        }
    },
    unmounted() {
        clearInterval(this.intervalId)
    },
    computed: {
        recipe() { return this.$store.getters.displayedRecipe },
        mainImageSrc() {
            return this.recipe.images[this.displayedImgIdx]
        }
    },
    //need to add small image gallery with interval,style the page,add a review option and reviews section. split the text nicely with repeateable component for the texts do it in a vfor aswell
    // add a border to the chosen image and an onclick to choose 
}
</script>

<style lang="scss">
.recipe-container {
    display: flex;
    flex-direction: column;

    .upper-section {
        display: flex;
        flex-wrap: wrap;

        .ingredients-list {
            list-style: none;
            padding: 0;
            flex-basis: 20%;
        }


        .main-image-container {
            flex-basis: 80%;
            //maybe max  width? the picture looks a bit too big in my opinion and allso
            //i should set the site layout the a maximum that wont make it fuck up on big screens

            img {
                object-fit: cover;
                width: 100%;
            }
        }

        .image-gallery-container {
            list-style: none;
            padding: 0;
            display: flex;

            li {
                list-style: none;
                width: 100px;

                &.chosen {
                    border: 2px solid rgb(93, 93, 134);
                    //maybe box-shadow
                }

                img {
                    object-fit: fill;
                    width: 100%;
                }
            }
        }
    }





}
</style>