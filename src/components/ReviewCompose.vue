<template>
    <article class="review-compose">
        <h4>Write a review</h4>
        <textarea class="content" placeholder="The review content" v-model="reviewContent"></textarea>
        <input class="name" placeholder="Your name" v-model="createdBy" />
        <button class="add-review-btn" :disabled="!isReviewValid" @click="onAddReview">Submit review</button>
    </article>
</template>

<script>
import { recipeService } from '@/services/recipe.service'
export default {
    data() {
        return {
            createdBy: '',
            reviewContent: '',
        }
    },
    methods: {
        onAddReview() {
            const newReview = recipeService.createNewReview(this.createdBy, this.reviewContent)
            const recipe = this.$store.getters.displayedRecipe
            recipe.reviews.push(newReview)
            this.$store.dispatch({ type: 'updateRecipe', recipe })
            this.onGoBack()
        },

    },
    computed: {
        isReviewValid() {
            return (this.createdBy && this.reviewContent)
        }
    }
}
</script>

<style lang="scss">
.review-compose {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 4px;
    margin: 5px 0 12px 0;

    h4 {
        margin: 0;
        padding-left: 15px;
        position: relative;

        &::before {
            content: '';
            height: 19px;
            width: 4px;
            background-color: var(--clr2);
            position: absolute;
            left: -2px;
            top: -1px;
        }
    }

    textarea.content {
        background: #fff;
        border: 0;
        width: 360px;
        height: 60px;
        font-family: Dosis;
        font-size: 17px;
        margin: 10px 0 10px 15px;
        resize: none;
        overflow: hidden;
        overflow-wrap: break-word;
        padding: 5px;
        outline: none;
        box-shadow: 0 4px 8px -2px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);

        &:focus-visible {
            border: none;
        }
    }

    input.name {
        font-family: Dosis;
        font-size: 15px;
        border: 0;
        outline: none;
        margin-left: 15px;
        padding: 5px;
        box-shadow: 0 4px 8px -2px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
    }

    .add-review-btn {
        position: absolute;
        left: 239px;
        bottom: -1px;
        font-family: Dosis;
        width: 150px;
        height: 30px;
        font-size: 18px;
        border-color: var(--clr2);
        background-color: var(--clr3);
        color: var(--clrText);
        cursor: pointer;
        
    }
}
</style>