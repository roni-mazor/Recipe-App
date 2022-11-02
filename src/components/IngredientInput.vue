<template>
    <input :value="value" @input="reportVal" type="text">
    {{ index }}
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    // data() {
    //     return {
    //         val: this.value
    //     }},
    methods: {
        reportVal(event) {
            this.$emit('on-change', event.data, this.index);
        }
    },
    emits: ['on-change']

}
</script>

<style>

</style>