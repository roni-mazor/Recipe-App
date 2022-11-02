<template>
    <footer @click="navigateHome" class="app-footer">
        <h2>Maillard</h2>
        <p>coffrerights &#169;</p>
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
    height: 70px;
    padding: 0px 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: AlexBrush;
        font-size: 48px;
        color: var(--clrText);
    }
}
</style>