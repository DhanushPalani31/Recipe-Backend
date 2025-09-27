import {Recipe} from "../model/recipeModel.js"
import {validationResult} from "express-validator"
export const createRecipe = async (req,res,next)=>{
try{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const payload=req.body;
    const recipe=new Recipe(payload);
    const saved = await recipe.save();
    res.status(201).json({
        status:"success",
        message:"Recipe created",
        data:saved
    })
}
catch(err){
    next(err)
}

}

export const getAllRecipes =async(req,res,next)=>{
    try{
        const recipe=await Recipe.find()
        res.status(200).json({
            status:"success",
            message:"Recipe updated successfully",
            data:recipe
        })
    }
    catch(err){
       next(err)
    }
}


export const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({
      status: "success",
      data: recipe,
    });
  } catch (error) {
    console.error("Error in getRecipeById:", error.message);
    return res.status(500).json({ message: error.message });
  }
};


export const updateRecipe= async (req,res,next)=>{
    try{
        const errors=validationResult(req)
        if(!errors.isEmpty){
            return res.status(400).json({
                error:errors.array()
            })
        }
        const {id}=req.params
        const update=req.body;
        update.updatedAt=Date.now()

        const updated=await Recipe.findByIdAndUpdate(id,update,{new:true,runvalidators:true})

        if(!updated) return res.status(404).json({status:"fail",message:"Recipe not found"})

    }
    catch(err){
        next(err)
    }
}

export const deleteRecipe= async (req,res,next)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty) return res.status(400).json({error:error.array()})
        const {id}=req.params
        const deleted=await Recipe.findByIdAndDelete(id)
        if(!deleted) return res.status(404).json({status:"fail",message:"Recipe not deleted"})
        res.status(200).json({status:"success",message:"Recipe deleted"})
    }
    catch(err){
        next(err)
    }
}