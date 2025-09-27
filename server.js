import express from "express"
import { connectDB } from "./src/config/db.js"
import { router } from "./src/router/recipeRouter.js"
const app=express()
app.use(express.json())
app.use("/api/recipes",router)

app.listen("3000",()=>{
    console.log("Port is successfully running")
    connectDB()
})