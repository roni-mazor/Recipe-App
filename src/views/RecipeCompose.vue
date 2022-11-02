<template>
    <section class="recipe-compose">

        <h1>Compose!</h1>
        <form>
        </form>
        <input v-model="title" placeholder="Recipe's Title" type="text">
        <input v-model="category" placeholder="Main category" type="text">
        <hr />

        <form class="ingredients-form">
            <input v-for="ingredient, index in ingredients" :key="ingredient + index" placeholder="Add an ingredient"
                v-model.lazy="ingredients[index]" @input="addNewIngredientInput(index)" type="text">
        </form>
        <form class="cooking-steps-form">
            <textarea v-for="step, index in cookingSteps" :key="step + index" v-model.lazy="cookingSteps[index]"
                @input="addNewCookingStepInput(index)" placeholder="Cooking steps"></textarea>
        </form>
        <input v-model="imgUrl" placeholder="For image url" type="text">
        <button @click="getImageFromUrl">Upload Image from Url</button>
        <label for="image-loader">upload images</label>
        <input @input="getImageFromInput" id="image-loader" type="file">
        <button @click="addNewRecipe">Submit new recipe</button>
    </section>
</template>

<script>
import { recipeService } from '@/services/recipe.service'
import { imageUploadService } from '../services/image-upload.service'
export default {
    // components: { MultiInput },
    // components: { IngredientInput },
    data() {
        return {
            ingredients: [''],
            cookingSteps: [''],
            title: '',
            category: '',
            images: [],
            imgUrl: ''

        }
    },
    methods: {
        async addNewRecipe() {
            const recipe = {
                ingredients: [...this.ingredients],
                cookingSteps: [...this.cookingSteps],
                title: this.title,
                category: this.category,
                images: [...this.images]
            }
            recipeService.save(recipe)
        },
        addNewIngredientInput(InputIndex) {
            const lastIndex = this.ingredients.length - 1
            if (InputIndex === lastIndex) {
                this.ingredients.push('')
            }
        },
        addNewCookingStepInput(InputIndex) {
            const lastIndex = this.cookingSteps.length - 1
            if (InputIndex === lastIndex) {
                this.cookingSteps.push('')
            }
        },
        async getImageFromUrl() {
            const url = await imageUploadService.imgFromLink(this.imgUrl)
            if (url) this.images.push(url)

            this.imgUrl = ''
        },
        async getImageFromInput(ev) {
            const url = await imageUploadService.uploadImg(ev)
            if (url) {
                this.images.push(url)
            } else {
                //swal could be convienient
                //notice that the image is invalid
            }
            this.imgUrl = ''
        }
    }

}
</script>

<style lang="scss">
.recipe-compose {}
</style>