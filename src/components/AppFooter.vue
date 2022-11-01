<template>
    <footer @click="navigateHome" class="app-footer">
        <h2>Maillard</h2>
    </footer>
</template>

<script>
export default {
    methods: {
        navigateHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
footer.app-footer {
    background-color: var(--clr4);
    height: 100px;
    cursor: pointer;

    h2 {
        font-family: AlexBrush;
        font-size: 48px;
        color: var(--clrText);
    }
}
</style>