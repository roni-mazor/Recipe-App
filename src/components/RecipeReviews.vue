<template>
    <section class="reviews-container">
        <h3>{{ reviews.length }} Reviews</h3>
        <article class="review" v-for="review in reviews" :key="review.id">
            <p class="review-header">By {{ review.createdBy }} at {{ new Date(review.createdAt).toDateString() }}</p>
            <p class="review-content">{{ review.reviewContent }}</p>
        </article>

        <!-- @close-compose="onToggleAddingReview" v-if="isAddingReview" -->
        <ReviewCompose></ReviewCompose>
        <!-- <button v-else @click="onToggleAddingReview">Add a review</button> -->
    </section>
</template>

<script>
import ReviewCompose from './ReviewCompose.vue'
export default {
    components: {
        ReviewCompose
    },
    data() {
        return {
            // isAddingReview: false
        }
    },
    props: {
        reviews: {

            type: Array,
            required: true,
        }
    },
    methods: {
        // onToggleAddingReview() {
        //     this.isAddingReview = !this.isAddingReview
        // },
        // acceptEvent(event) {
        //     console.log(event)
        // }
    }
}
</script>

<style lang="scss">
.reviews-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 25px;

    h3 {
        margin: 0;
        font-size: 24px;
        padding-left: 17px;
        position: relative;

        &::before {
            content: '';
            height: 30px;
            width: 4px;
            background-color: var(--clr2);
            position: absolute;
            left: 2px;
        }
    }

    .review {
        margin: 5px 4px 5px 18px;
        line-break: anywhere;
        max-width: 500px;

        .review-header {
            text-decoration: underline;
            margin: 0;
            text-align: left;
            font-size: 14px;
        }

        .review-content {
            margin: 4px 0;
            text-align: left;
            font-size: 18px;
        }
    }
}
</style>