<template>

    <section :v-if="recipe" class="recipe-container">
        <h2>{{ recipe.title }}</h2>
        <section class="upper-section">
            <ul class="ingredients-list">
                <li class="heading-li">What you'll need:</li>
                <li v-for="ingredient in recipe.ingredients " :key="ingredient">
                    {{ ingredient }}</li>
            </ul>
            <section class="main-image-container">
                <img :src="mainImageSrc" alt="">
            </section>
        </section>
        <section class="recipe-paragraphs-container">
            <ul class="image-gallery-container">
                <li @click="changeDisplayedImgIdx(index)" :class="{ chosen: index === displayedImgIdx }"
                    v-for="image, index in recipe.images " :key="image.slice(0, 6)">
                    <img :src="image" alt="">
                </li>
            </ul>
            <h3>The actual cooking</h3>
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
        gap: 5px;

        .ingredients-list {
            box-sizing: border-box;
            list-style: none;
            display: flex;
            flex-direction: column;
            margin: 0 0 0 5px;
            flex-basis: 25%;
            background-color: var(--clr3);
            padding: 10px;
            height: fit-content;
            border-radius: 3px;

            .heading-li {
                text-decoration: underline;
                font-size: 24px;
                align-self: center;
                margin-bottom: 10px;
                color: var(--clr1)
            }

            li {
                text-align: left;
                margin-bottom: 3px;
                align-self: flex-start;
                padding-left: 10px;
                font-size: 20px;
            }
        }


        .main-image-container {
            flex-shrink: 10;
            flex-basis: 75%;

            img {
                object-fit: cover;
                width: 100%;
            }
        }


    }

    .recipe-paragraphs-container {
        font-size: 18px;
        padding: 5px 0 5px 25px;
        text-align: left;
        position: relative;
        margin-bottom: 20px;

        h3 {
            font-size: 24px;
            text-decoration: underline;
            color: var(--clr1);
        }

        .image-gallery-container {
            position: absolute;
            right: 3px;
            list-style: none;
            margin: 26px 0 0 14px;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
            border: 4px solid var(--clr3);
            // i want an inner scroll that will wrap it and then inside render all the pictures

            li {
                box-sizing: border-box;
                list-style: none;
                width: 240px;
                height: 240px;

                &.chosen {
                    border: 2px solid rgb(93, 93, 134);
                }

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        p {
            max-width: 70%;
        }
    }




}
</style>