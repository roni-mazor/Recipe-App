<template>
    <section class="recipe-compose">

        <h2>Write a new Recipe!</h2>
        <form>
            <input v-model="title" placeholder="Recipe's Title" type="text">
            <input v-model="category" placeholder="Main category" type="text">
        </form>
        <hr />
        <section class="multi-inputs-container">
            <form class="ingredients-form">
                <input v-for="ingredient, index in ingredients" :key="ingredient + index"
                    placeholder="Add an ingredient" v-model.lazy="ingredients[index]"
                    @input="addNewIngredientInput(index)" type="text">
            </form>
            <form class="cooking-steps-form">
                <textarea v-for="step, index in cookingSteps" :key="step + index" v-model.lazy="cookingSteps[index]"
                    @input="addNewCookingStepInput(index)" placeholder="Cooking steps"></textarea>
            </form>
        </section>
        <section class="image-uploading-section">
            <label for="image-loader">Upload images Yourself</label>
            <span>({{ images.length }})</span>
            <input v-model="imgUrl" placeholder="For image url" type="text">
            <button class="img-submission-btn" @click="getImageFromUrl">Get Image from Url</button>
            <input @input="getImageFromInput" id="image-loader" hidden type="file">
        </section>
        <button :disabled="!isRecipeValid" class="recipe-submit-btn" @click="addNewRecipe">Submit new recipe</button>
        {{ isRecipeValid }}
    </section>
</template>

<script>
import { recipeService } from '@/services/recipe.service'
import { imageUploadService } from '../services/image-upload.service'
export default {

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
                ingredients: this.ingredients.filter(i => i),
                cookingSteps: this.cookingSteps.filter(step => step),
                title: this.title,
                category: this.category,
                images: [...this.images]
            }
            console.log(recipe)
            this.$store.dispatch({ type: 'addRecipe', recipe })
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
            if (url) {
                this.images.push(url)
                this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Image saved',
                    showConfirmButton: false,
                    timer: 1200
                })
            } else {
                this.$swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: 'Image size does\'nt fit',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            this.imgUrl = ''
        },
        async getImageFromInput(ev) {
            const url = await imageUploadService.uploadImg(ev)
            if (url) {
                this.images.push(url)
                this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Image saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                this.$swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: 'Image size does\'nt fit',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            this.imgUrl = ''
        },

    }, computed: {

        isRecipeValid() {
            return (this.ingredients.some(i => i) &&
                this.cookingSteps.some(step => step) &&
                this.title &&
                this.category &&
                this.images.length > 0
            )
        }
    }

}
</script>

<style lang="scss">
@mixin compose-page-button {
    line-height: 10px;
    align-self: center;
    border: none;
    color: var(--clr4);
    border-radius: 3px;
    height: 40px;
    font-family: Dosis;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        opacity: 0.92;
    }
}

.recipe-compose {
    display: flex;
    flex-direction: column;

    .multi-inputs-container {
        display: flex;

        form {
            display: flex;
            flex-direction: column;
        }

        .ingredients-form {
            input {
                margin: 3px;
            }
        }

        .cooking-steps-form {
            textarea {
                margin: 3px;
            }
        }
    }

    .image-uploading-section {
        margin-top: 15px;
        margin-bottom: 10px;

        input {
            margin-right: 14px;
            margin-left: 7px;
        }

        .img-submission-btn {
            background-color: #4141c9;
            @include compose-page-button;
        }

        label {
            background-color: #c05353;
            @include compose-page-button;
            margin-right: 7px;

        }
    }

    .recipe-submit-btn {
        @include compose-page-button;
        background-color: #f77d44;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }
}
</style>