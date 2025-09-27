import mongoose from "mongoose";

const ingredientSchema=new mongoose.Schema({
    name:{type:String,require:true,trim:true},
    quantity:{type:String,default:"",trim:true}
})


const recipeSchema=new mongoose.Schema({
    Title:{type:String,require:true,trim:true},
    description:{type:String,default:"",trim:true},
    ingredient:{
        type:[ingredientSchema],default:[]
    },
    steps:{type:[String],default:[]},
    servings:{type:Number,min:1,default:1},
    prepTimeMinutes:{type:Number,min:0,default:0},
    cookTimeMinutes:{type:Number,min:0,default:0},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
})

recipeSchema.pre("save",function(next){
    this.updatedAt=Date.now()
    next()
})

export const Recipe=mongoose.model("Recipe",recipeSchema)