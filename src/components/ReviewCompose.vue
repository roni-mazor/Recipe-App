<template>
    <input :v-model="reviewdBy" />
    <textarea :v-model="reviewContent"></textarea>
    <button>Submit review</button>
    <button @click="onGoBack">X</button>
</template>

<script>
export default {
    data() {
        return {
            reviewdBy: '',
            reviewContent: '',
            // add a radio button start system?
        }
    },
    methods: {
        onAddReview() {
            this.onGoBack()
        },
        onGoBack() {
            this.$emit('close-compose')
        }
    },
    emits: ['close-compose']
}
</script>

<style>

</style>