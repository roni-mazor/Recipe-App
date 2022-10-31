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

