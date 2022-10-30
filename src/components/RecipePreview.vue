<template>
    <article>
        <p>{{ recipe.category }}</p>
        <h4 class="recipe-title">{{ recipe.title }}</h4>
        <p>{{ createdAt }}</p>
    </article>
    <img class="preview-img" :src="recipe.images[1]">
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            isHovered: false
            //add a read more maybe some content
        }
    },
    computed: {
        createdAt() {
            return (new Date(this.recipe.createdAt)).toLocaleString('default', { month: 'long', year: '2-digit' })
        },

    }, methods: {

    }
}
</script>

<style lang="scss">
.recipe-preview {
    list-style: none;
    position: relative;

    &:hover {
        box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);

        .preview-img {
            opacity: 0.4;
            transition: 0.2s;
        }

        // article {
        //     background: var(--clr3);
        //     opacity: 0.2
        // }
    }

    article {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // color: var(--clrText);
        z-index: 50;



        .recipe-title {
            margin: 0;
            font-size: 24px;
        }

        p {
            margin: 0;
        }
    }

    .preview-img {
        transition: 0.2s;
        z-index: 15;
        width: 100%;
        object-fit: contain;
    }
}
</style>