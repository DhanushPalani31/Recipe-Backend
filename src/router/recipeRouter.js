import express from "express"
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from "../controller/recipeController.js"
import { idParamValidation, recipeCreateValidation, recipeUpdateValidation } from "../validator/recipeValidator.js"

export const router=express.Router()

router.post("/",recipeCreateValidation,createRecipe)
router.get("/",getAllRecipes)
router.get("/:id",idParamValidation,getRecipeById)
router.patch("/:id",recipeUpdateValidation,updateRecipe)
router.delete("/:id",idParamValidation,deleteRecipe)