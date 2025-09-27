// validators/recipeValidator.js
import { body, param } from "express-validator";

export const recipeCreateValidation = [
  body("title").exists().withMessage("title is required").isString().trim().notEmpty(),
  body("description").optional().isString(),
  body("ingredients").optional().isArray(),
  body("ingredients.*.name").optional().isString().notEmpty(),
  body("ingredients.*.quantity").optional().isString(),
  body("steps").optional().isArray(),
  body("steps.*").optional().isString(),
  body("servings").optional().isInt({ gt: 0 }).toInt(),
  body("prepTimeMinutes").optional().isInt({ min: 0 }).toInt(),
  body("cookTimeMinutes").optional().isInt({ min: 0 }).toInt()
];

export const recipeUpdateValidation = [
  param("id").isMongoId().withMessage("Invalid recipe id"),
  body("title").optional().isString().trim().notEmpty(),
  body("description").optional().isString(),
  body("ingredients").optional().isArray(),
  body("ingredients.*.name").optional().isString().notEmpty(),
  body("servings").optional().isInt({ gt: 0 }).toInt()
];

export const idParamValidation = [param("id").isMongoId().withMessage("Invalid recipe id")];
