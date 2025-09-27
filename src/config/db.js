import mongoose from "mongoose"
const mongodbURI="mongodb+srv://dhanushcse00_db_user:n5gp7gqIlAiXddzL@recipes.gecezyk.mongodb.net/recipesDB?retryWrites=true&w=majority&appName=Recipes"
export const connectDB=async()=>{
    mongoose.connect(mongodbURI)
    .then(()=>{
        console.log("DB connected successful")
    })
    .catch((err)=>{
        console.log(err)
    })
}