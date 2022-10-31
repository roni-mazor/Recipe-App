<template>
    <pre>{{ reviews }}</pre>
    <ReviewCompose @close-compose="onToggleAddingReview" v-if="isAddingReview"></ReviewCompose>
    <button v-else @click="onToggleAddingReview">Add a review</button>
</template>

<script>
import ReviewCompose from './ReviewCompose.vue'
export default {
    components: {
        ReviewCompose
    },
    data() {
        return {
            isAddingReview: false
        }
    },
    props: {
        reviews: {

            type: Array,
            required: true,
        }
    },
    methods: {
        onToggleAddingReview() {
            this.isAddingReview = !this.isAddingReview
        },
        acceptEvent(event) {
            console.log(event)
        }
    }
}
</script>

<style>

</style>