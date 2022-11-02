import { Review } from "./review.model"
export interface Recipe {
    _id: string
    title: string,
    createdAt: number,
    reviews: Review[],
    images: string[],
    ingredients: string[],
    cookingSteps: string[],
    category: string



}

export function isRecipe(obj: any): obj is Recipe {
    return '_id' in obj && 'title' in obj && 'createdAt' in obj &&
        'reviews' in obj && 'images' in obj && 'ingredients' in obj &&
        'cookingSteps' in obj && 'category' in obj
}


