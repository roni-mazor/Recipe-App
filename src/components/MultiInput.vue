<template>
    <input v-for="ingredient, index in ingredients" :key="ingredient + index" :value="ingredient"
        @input="reportVal($event, index)" type="text" />
</template>

<script>
export default {
    props: {
        ingredients: {
            type: Array,
            required: true
        }
    }, emits: ['on-change'],
    methods: {
        reportVal(event, index) {
            const ingredients = [...this.ingredients]
            ingredients[index] += event.data
            console.log(ingredients)
            this.$emit('on-change', ingredients);
        }
    }

}
</script>

<style>

</style>