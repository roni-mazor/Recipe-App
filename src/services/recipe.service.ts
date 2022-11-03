import { storageService } from "./async-storage.service";
import { Recipe } from "./models/recipe.model";
import { Review } from "./models/review.model";
import { utilService } from "./util.service";
import { httpService } from "./http.service"
import Axios from 'axios'



const STORAGE_KEY = "recipes"
const API_KEY = "recipe/"
export const recipeService = {
    query,
    getById,
    save,
    createNewReview
}


async function query() {

    const recipes = await httpService.get(API_KEY, '')
    return recipes
}

async function getById(recipeId: string) {
    try {
        return await httpService.get(`${API_KEY}${recipeId}`, '')
    } catch (err) {
        console.error(err)
    }
}

async function save(recipe: Recipe) {
    try {

        if (recipe._id) {
            return httpService.put(`${API_KEY}${recipe._id}`, recipe)
        } else {
            recipe.reviews = []
            recipe.createdAt = Date.now()
            return httpService.post(API_KEY, recipe)
            // return storageService.post(STORAGE_KEY, recipe)
        }
    } catch (err) {
        console.error(err)
    }
}

function createNewReview(createdBy: string, reviewContent: string): Review {
    return {
        id: utilService.makeId(),
        createdAt: Date.now(),
        createdBy,
        reviewContent
    }
}


function _createRecipes() {

    const recipes = [
        {
            title: "Papaya salad",
            createdAt: 1667458429701,
            category: "Thai",
            reviews: [],
            images: [
                "https://www.seriouseats.com/thmb/yQdeXggsBcLpG4htyErxINqa_s8=/1500x1125/filters:fill(auto,1)/20210928-Som-Tam-Thai-green-papaya-salad-vicky-wasik-24-f0d666fc609f49a0b9f34897bd2c6303.jpg",
                "https://www.seriouseats.com/thmb/DZB35zxvZLvDVGTLqRfcv4ka0Ag=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210928-Som-Tam-Thai-green-papaya-salad-vicky-wasik-knifeshreddingpapayastep-fd58481659d74aeb93c2861fdb7d2ba7.jpg",
                "https://www.chatelaine.com/wp-content/uploads/2020/09/Chef-Nuit-Regular-papaya-salad-som-tum.jpg"
            ],
            ingredients: ["Green Papaya", "Chilies", "Garlic", "Fish sauce", "Lime", "Palm sugar", "Snake beans", "Cherry Tomato", "Coriander", "Mint", "Crushed peanuts"],
            cookingSteps: ["We will split the preparation in to 2 parts,the first one is to prepare the sauce,the second is to prepare the vegetables.",
                "The name of the sauce is is Prik Nam Pla in thai,it is based of 3 ingredients which are key in thai cuisine,palm sugar,fish sauce, and lime juice and traditionally chillies and raw garlic are added aswell.",
                "To make the sauce we will mix equal parts of fish sauce lime juice and palm sugar,now there is a trick,the things is the sugar is solid.. so we will add this to a pot,alongside tiny bit of water and melt it over low heat,once it had melted we will remove from the heat,while stirring add in the fishsauce and the lime juice and let cool,after it has cooled add in finely chopped garlic and chili and step 1 is done!.",
                "Now with the sauce through we can prepare the veggies,for the papaya I like preparing it so,after you've peeled it keep peeling it making thin thin sheets of the papaya,after you've got a bunch of these,arrange them and julienne them,for the beans slice them to 3 cm pcs,and the cherry tomatoes should be cur to halves or quarter if big,for the leaves just separate and wash them.",
                "Once both are ready,it simple you just have to mix everything together,in Thailand they do it in a big mortar and pestle,the Idea is the papaya needs to be bruised a little in order to better absorb the sauce,I usually just smash it with my hands when mixing,after you've mixed, plate it,garnish with some extra peanuts and serve!"]

        },
        {
            "title": "Miso soup",
            "createdAt": 1667458429701,
            "category": "Japanese",
            "reviews": [],
            "images": [
                "https://www.pressurecookrecipes.com/wp-content/uploads/2021/05/miso-soup.jpg",
                "https://images.squarespace-cdn.com/content/v1/5ca6bbd9f4e5314e82fe546f/1589680369192-K94V6Z9AGKJULPJGJ9OY/DSCF8100.jpg?format=1000w",

            ],
            "ingredients": ["Miso paste", "Kombu seaweed", "Silken Tofu", "Wakame seaweed", "Bonito flakes/Instant dashi", "Scallion", "Ginger", "Carrots", "White onion"],
            "cookingSteps": ["Traditional miso soup is very simple,it is just dashi stock,Miso paste,tofu,wakame and scallions,the slightly more important to understand is the stock.",
                "Traditional Dashi is just comprised of kombu and bonito cooked very lightly in water,I personally like it a bit richer,so i make a stock from ginger,carrots,onions and scallions,once the flavours have come out,I add the kombu and the bonito and let it seat off the flame for 20 minutes all together,you dont want to boil after you've added them because it will turn bitter.",
                "Strain the stock and keep aside,soak the wakame seaweed in water,or if you want a nice substitution fry some nori sheets till 100% dry and crispy,thinly slice the scallions and cut the tofu to nice small cubes.",
                "To finish,add as much miso paste to the stock,the miso should be the only source of salt in the dish,then serve along all the beautiful toppings you have!."]
        },
    ]
    storageService.postMany(STORAGE_KEY, recipes)

}

